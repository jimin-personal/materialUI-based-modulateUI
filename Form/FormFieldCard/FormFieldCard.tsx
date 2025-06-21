import Typography from '@/components/primitiveUI/Typography/Typography';
import Image from '@/components/primitiveUI/Image/Image';
import SuccessAlert from '@/components/ui/alert/SuccessAlert';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useFormFieldCardStyles } from './useFormFieldCardStyles';

interface FormFieldCardProps {
  children: React.ReactNode;
  fieldName?: string;
  descriptionImageUrl?: string;
  showRightAnswer?: boolean;
  rightAnswer?: React.ReactNode;
}

const FormFieldCard: React.FC<FormFieldCardProps> = ({
  fieldName,
  descriptionImageUrl,
  showRightAnswer,
  children,
  rightAnswer,
}) => {
  const baseClasses = useFormFieldCardStyles();
  const { t } = useTranslation('form');
  return (
    <div className={baseClasses.formFieldCardContainer}>
      <div className={baseClasses.formFieldCardHeader}>
        <Typography variant="subtitle5">{fieldName}</Typography>
      </div>
      {descriptionImageUrl && (
        <div className={baseClasses.descriptionImageWrapper}>
          <Image src={descriptionImageUrl} alt={`${fieldName}_description_image`} />
        </div>
      )}
      <div>{children}</div>
      {showRightAnswer && (
        <SuccessAlert
          hideIcon
          classes={{
            root: baseClasses.rightAnswerContainer,
          }}
        >
          <Typography variant="body4">
            {t('rightAnswer', {
              defaultValue: 'Right Answer: {{rightAnswer}}',
              rightAnswer,
            })}
          </Typography>
        </SuccessAlert>
      )}
    </div>
  );
};

export default FormFieldCard;
