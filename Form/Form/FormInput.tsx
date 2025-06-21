import Button from '@/components/primitiveUI/Button/Button';
import DraggableList from '@/components/primitiveUI/DraggableList/DraggableList';
import Grid from '@/components/primitiveUI/Grid/Grid';
import { AddFormQuestion } from '@/components/ui/icon';
import FormTypes from '@/types/FormTypes';
import { omit } from 'lodash';
import React from 'react';
import { useTranslation } from 'react-i18next';
import FormFieldEdit from '../FormField/FormFieldEdit';
import { useFormInputStyles } from './useFormStyles';

interface FormInputProps {
  form: FormTypes.FormUpdate;
  isAddingField: boolean;
  onAddField: (param: { fieldCreate: FormTypes.FormFieldCreate }) => void;
  onChangeForm: (param: { formUpdate: FormTypes.FormUpdate }) => void;
  onRemoveField: (param: { fieldId: string }) => void;
}

const FormInput: React.FC<FormInputProps> = ({ form, onAddField, onChangeForm, onRemoveField }) => {
  const baseClasses = useFormInputStyles();
  const { t } = useTranslation('form');

  const handleAddField = () => {
    onAddField({
      fieldCreate: {
        type: FormTypes.FormFieldType.MULTI_SELECT,
      },
    });
  };

  const handleChangeField = ({
    fieldUpdate,
    fieldIdx,
  }: {
    fieldUpdate: FormTypes.FormFieldUpdate;
    fieldIdx: number;
  }) => {
    const fields = [...form.fields];
    fields[fieldIdx] = {
      ...fields[fieldIdx],
      ...fieldUpdate,
    };
    onChangeForm({ formUpdate: { ...form, fields } });
  };

  const handleDuplicateField = ({ fieldId }: { fieldId: string }) => {
    const field = form.fields.find(({ _id }) => _id === fieldId);
    if (!field) {
      return;
    }
    onAddField({
      fieldCreate: omit(field, '_id'),
    });
  };

  const handleUpdateOrder = ({ updatedItems }: { updatedItems: any[] }) => {
    onChangeForm({
      formUpdate: {
        ...form,
        fieldIds: updatedItems.map(({ _id }) => _id),
        fields: updatedItems,
      },
    });
  };

  return (
    <div className={baseClasses.formInputContainer}>
      <DraggableList
        items={form.fields || []}
        renderItem={({ item: field, index }: { item: FormTypes.FormField; index: number }) => {
          return (
            <FormFieldEdit
              key={field._id}
              field={field}
              onChange={({ fieldUpdate }) => handleChangeField({ fieldUpdate, fieldIdx: index })}
              onRemove={() => onRemoveField({ fieldId: (field as FormTypes.FormField)._id })}
              onDuplicate={() =>
                handleDuplicateField({ fieldId: (field as FormTypes.FormField)._id })
              }
            />
          );
        }}
        onChange={handleUpdateOrder}
      />
      <Grid justifyContent="center">
        <Grid item>
          <Button startIcon={<AddFormQuestion />} onClick={handleAddField}>
            {t('form_input.add_question_label', 'Add question')}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FormInput;
