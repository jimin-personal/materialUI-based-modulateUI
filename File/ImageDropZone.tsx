import FileTypes from '@/types/FileTypes';
import React, { Dispatch, MouseEventHandler, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { AddFileImageIcon } from '../../ui/icon';
import { makeAppStyles } from '@/lib/styleHelper';
import Block from '../Block/Block';

interface ImageDropZoneProps {
  accept?: { [key: string]: string[] };
  onSelectedFiles: (payload: { files: FileTypes.DropzoneFile[] }) => void;
  size?: number;
  dropzoneWidth?: string;
  dropzoneHeight?: string;
  maxFiles?: number;
  setChooseFile?: Dispatch<MouseEventHandler>;
}

const ImageDropZone = ({
  accept,
  dropzoneWidth = '160px',
  dropzoneHeight = '80px',
  maxFiles = 1,
  onSelectedFiles,
  setChooseFile,
}: ImageDropZoneProps) => {
  const [selectedFiles, setSelectedFiles] = useState<FileTypes.DropzoneFile[]>([]);
  const classes = makeAppStyles((theme) => ({
    dropzone: {
      width: dropzoneWidth || '160px',
      height: dropzoneHeight || '80px',
      backgroundColor: theme.palette.actions.hover,
      border: `1px solid ${theme.palette.actions.outlinedStroke}`,
      borderRadius: '4px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: theme.palette.actions.border,
      },
    },
    addFileIcon: {
      color: theme.palette.text.secondary,
    },
    logo: {
      maxWidth: '100%',
      maxHeight: '100%',
      position: 'absolute',
      background: '#fff',
    },
  }))();

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: accept || { 'image/*': [] },
    maxFiles,
    onDrop: (acceptedFiles) => {
      setSelectedFiles(acceptedFiles);
      onSelectedFiles({ files: acceptedFiles });
    },
  });

  useEffect(() => {
    setChooseFile?.(() => open as MouseEventHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setChooseFile]);

  return (
    <Block className={classes.dropzone} {...getRootProps()}>
      <input {...getInputProps()} />
      <AddFileImageIcon fontSize="large" className={classes.addFileIcon} />
      {selectedFiles.map((file) => (
        <img key={file.name} src={URL.createObjectURL(file)} className={classes.logo} alt="logo" />
      ))}
    </Block>
  );
};

export default ImageDropZone;
