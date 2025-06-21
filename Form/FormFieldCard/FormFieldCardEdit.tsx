import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Dropdown, { DropdownChangeEvent } from '@/components/primitiveUI/Dropdown/Dropdown';
import FileUploadButton, { FILE_TYPE } from '@/components/primitiveUI/File/FileUploadButton';
import Image from '@/components/primitiveUI/Image/Image';
import TextInput from '@/components/primitiveUI/Input/TextInput';
import MoreIconMenu from '@/components/primitiveUI/Menu/MoreIconMenu';
import { DeleteIcon, DuplicateFieldIcon } from '@/components/ui/icon';
import FormTypes from '@/types/FormTypes';
import { useTranslation } from 'react-i18next';
import FormFieldTypes from '../FormFieldTypes';
import { useFormFieldCardEditStyles } from './useFormFieldCardStyles';
import { TFunction } from 'i18next';

const getFormFieldSelectOptions = (t: TFunction) => [
  {
    label: t('form_field_select.multi_select', 'Multiple choice'),
    value: FormTypes.FormFieldType.MULTI_SELECT,
  },
  {
    label: t('form_field_select.file_upload', 'File upload'),
    value: FormTypes.FormFieldType.FILE_UPLOAD,
  },
  {
    label: t('form_field_select.text_area', 'Short answer'),
    value: FormTypes.FormFieldType.TEXT_AREA,
  },
];

const MENU_OPTION = {
  DELETE: 'delete_field',
  DUPLICATE: 'duplicate_field',
};

interface FormFieldCardEditProps {
  children: React.ReactNode;
  field: FormTypes.MultiSelect | FormTypes.FormFieldUpdate;
  mode: FormFieldTypes.FormFieldMode;
  onChange: (param: { fieldUpdate: FormTypes.FormFieldUpdate }) => void;
  onRemove: () => void;
  onDuplicate: () => void;
}

const FormFieldCardEdit: React.FC<FormFieldCardEditProps> = ({
  children,
  field,
  onChange,
  onRemove,
  onDuplicate,
}) => {
  const baseClasses = useFormFieldCardEditStyles();
  const [descriptionImgUrl, setDescriptionImgUrl] = useState(field.descriptionImageUrl);
  const { t } = useTranslation('form');
  const { t: commonT } = useTranslation('common');
  const formFieldOptions = getFormFieldSelectOptions(t);

  useEffect(() => {
    if (!field.descriptionImageUrl) {
      return;
    }
    if (!descriptionImgUrl) {
      setDescriptionImgUrl(field.descriptionImageUrl);
      return;
    }
    const currentDescriptionImgUrl = descriptionImgUrl.split('?')[0];
    const updatedDescriptionImgUrl = field.descriptionImageUrl.split('?')[0];
    if (currentDescriptionImgUrl === updatedDescriptionImgUrl) {
      return;
    }
    setDescriptionImgUrl(field.descriptionImageUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.descriptionImageUrl]);

  const handleChangeFieldName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    onChange({ fieldUpdate: { name } });
  };

  const handleChangeType = (event: DropdownChangeEvent) => {
    onChange({ fieldUpdate: { type: event.target.value as FormTypes.FormFieldType } });
  };

  const handleSelectMenuOption = ({ value }: { value: string }) => {
    switch (value) {
      case MENU_OPTION.DELETE:
        onRemove();
        return;
      case MENU_OPTION.DUPLICATE:
        onDuplicate();
        return;
    }
  };

  const handleClickUploadImage = ({ uploadedFiles }: { uploadedFiles: { gcsKey: string }[] }) => {
    onChange({ fieldUpdate: { descriptionImageGCSKey: uploadedFiles[0].gcsKey } });
  };

  return (
    <div
      className={clsx(baseClasses.formFieldCardEditContainer, {
        [baseClasses.formFieldCardEditMobileView]: false,
      })}
    >
      <div className={baseClasses.fieldEditCardHeader}>
        <TextInput
          autoFocus={!field.name}
          className={baseClasses.fieldEditCardTitle}
          onChange={handleChangeFieldName}
          value={field.name}
          placeholder={t('form_field_card.title_placeholder', 'Write your question here')}
          fullWidth
        />
        <MoreIconMenu
          classes={{
            iconButton: baseClasses.fieldEditCardMenu,
          }}
          options={[
            {
              icon: <DuplicateFieldIcon />,
              label: t('form_edit_more_menu.duplicate_field_label', 'Duplicate'),
              value: MENU_OPTION.DUPLICATE,
            },
            {
              icon: <DeleteIcon />,
              label: commonT('delete_button_label', 'Delete'),
              value: MENU_OPTION.DELETE,
            },
          ]}
          onSelect={handleSelectMenuOption}
        />
        <div className={baseClasses.fieldTypeDescriptionContainer}>
          <Dropdown
            classes={{ root: baseClasses.fieldTypeSelector }}
            options={formFieldOptions}
            value={field.type as FormTypes.FormFieldType}
            onChange={handleChangeType}
          />
          <FileUploadButton
            onUploaded={handleClickUploadImage}
            maxFiles={1}
            fileType={FILE_TYPE.IMAGES}
          />
        </div>
      </div>
      <div className={baseClasses.fieldEditCardHeader}></div>
      {descriptionImgUrl && (
        <div className={baseClasses.descriptionImageWrapper}>
          <Image src={descriptionImgUrl} alt={`${field.name}_description_image`} />
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default FormFieldCardEdit;
