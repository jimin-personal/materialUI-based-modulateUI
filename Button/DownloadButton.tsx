import { DownloadFileIcon } from '@/components/ui/icon';
import { logError } from '@/components/ui/toast/ToastHelper';
import publicRequest from '@/lib/requests/publicRequest';
import { makeAppStyles } from '@/lib/styleHelper';
import React, { useState } from 'react';
import Tooltip from '../Tooltip/Tooltip';
import Ellipsis from '../TypographyMaterials/Ellipsis/Ellipsis';
import Button, { ButtonProps } from './Button';

const useDownloadButtonStyles = makeAppStyles(() => ({
  downloadButtonLabel: {
    color: 'black',
  },
}));

interface DownloadButtonProps extends ButtonProps {
  downloadSrc: string;
  fileName: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  force?: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({
  downloadSrc,
  fileName,
  startIcon = <DownloadFileIcon />,
  force,
  ...rest
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const baseClasses = useDownloadButtonStyles();

  const handleDownload = async () => {
    if (!downloadSrc) {
      throw new Error('Resource URL not provided! You need to provide one');
    }
    setIsLoading(true);
    try {
      const { data } = await publicRequest.get(downloadSrc, {
        responseType: 'blob',
      });
      const blob = data;

      const blobURL = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobURL;
      a.style['display'] = 'none';
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
    } catch (error) {
      logError(error, 'Failed to download');
    } finally {
      setIsLoading(false);
    }
  };
  if (force) {
    return (
      <Button startIcon={startIcon} {...rest} onClick={handleDownload} isLoading={isLoading}>
        <Ellipsis>
          <Tooltip tooltip={fileName} classes={{ root: baseClasses.downloadButtonLabel }}>
            <span>{fileName}</span>
          </Tooltip>
        </Ellipsis>
      </Button>
    );
  }

  return (
    <a href={downloadSrc} download={fileName} title="download">
      <Button {...rest} />
    </a>
  );
};

export default DownloadButton;
