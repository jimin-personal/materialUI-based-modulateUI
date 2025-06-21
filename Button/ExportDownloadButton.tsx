import React from 'react';
import Button, { ButtonProps } from '@/components/primitiveUI/Button/Button';
import { ExportDataIcon } from '@/components/ui/icon';
import { useExportButtonStyles } from './useExportButtonStyles';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';

export interface ExportDownloadButtonProps extends ButtonProps {
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
  className?: string;
  isExporting?: boolean;
}

const ExportDownloadButton: React.FC<ExportDownloadButtonProps> = ({
  onClick,
  disabled,
  className,
  size,
  isExporting,
}) => {
  const classes = useExportButtonStyles();
  const { t } = useTranslation('course');

  return (
    <>
      <Button
        isLoading={isExporting}
        variant="contained"
        color="primary"
        onClick={onClick}
        endIcon={<ExportDataIcon />}
        className={clsx(classes.listDownloadButton, className)}
        disabled={disabled}
        size={size}
      >
        {t('download_btn_name', 'Download')}
      </Button>
    </>
  );
};

export default ExportDownloadButton;
