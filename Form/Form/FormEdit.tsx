import OverlaySkeleton from '@/components/Loading/OverlaySkeleton';
import { logError } from '@/components/ui/toast/ToastHelper';
import { useCreateField, useGetForm, useRemoveField, useUpdateForm } from '@/hooks/form/useForm';
import FormTypes from '@/types/FormTypes';
import { throttle, omit, merge, pick } from 'lodash';
import React, { useEffect, useState, useCallback } from 'react';
import FormInput from './FormInput';

interface FormEditProps {
  formId: string;
}

const FormEdit: React.FC<FormEditProps> = ({ formId }) => {
  const [form, setForm] = useState<FormTypes.FormUpdate>({} as any);
  const { isLoadingForm, getForm } = useGetForm();
  const { updateForm } = useUpdateForm();
  const { isCreatingField, createField } = useCreateField();
  const { removeField } = useRemoveField();
  useEffect(() => {
    const init = async () => {
      try {
        const form = await getForm({ formId });
        setForm(form);
      } catch (error) {
        logError(error);
      }
    };
    void init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formId]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttledUpdateForm = useCallback(
    throttle(async ({ formUpdate }: { formUpdate: FormTypes.FormUpdate }) => {
      const updatedForm = await updateForm({ formId, formUpdate });
      setForm((form) => {
        return merge({}, form, {
          fields: form.fields.map((field) => {
            const updatedField = updatedForm.fields.find(
              (updatedField) => updatedField._id === field._id,
            );
            return {
              ...field,
              ...pick(updatedField, ['descriptionImageUrl']),
            };
          }),
        });
      });
    }, 2000),
    [formId],
  );

  const handleUpdateForm = async ({ formUpdate }: { formUpdate: FormTypes.FormUpdate }) => {
    const prevForm = { ...form };
    try {
      setForm({
        ...formUpdate,
        fields: formUpdate.fields.map((field) => omit(field, 'descriptionImageGCSKey')),
      });
      await throttledUpdateForm({ formUpdate });
    } catch (error) {
      logError(error);
      setForm(prevForm);
    }
  };

  const handleAddField = async ({ fieldCreate }: { fieldCreate: FormTypes.FormFieldCreate }) => {
    try {
      const createdField = await createField({ fieldCreate });
      handleUpdateForm({
        formUpdate: {
          ...form,
          fields: [...form.fields, createdField],
        },
      });
    } catch (error) {
      logError(error);
    }
  };

  const handleRemoveField = async ({ fieldId }: { fieldId: string }) => {
    const fields = form.fields.filter(({ _id }) => _id !== fieldId);
    try {
      await handleUpdateForm({
        formUpdate: {
          ...form,
          fields,
        },
      });
      await removeField({ fieldId });
    } catch (error) {
      logError(error);
    }
  };

  return (
    <OverlaySkeleton isLoading={isLoadingForm}>
      {form && (
        <FormInput
          form={form}
          isAddingField={isCreatingField}
          onAddField={handleAddField}
          onChangeForm={handleUpdateForm}
          onRemoveField={handleRemoveField}
        />
      )}
    </OverlaySkeleton>
  );
};

export default FormEdit;
