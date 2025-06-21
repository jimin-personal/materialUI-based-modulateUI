import OverlaySkeleton from '@/components/Loading/OverlaySkeleton';
import Button from '@/components/primitiveUI/Button/Button';
import Grid from '@/components/primitiveUI/Grid/Grid';
import { logError, ShowSuccess } from '@/components/ui/toast/ToastHelper';
import { useGetForm, useGetFVCMine, useUpdateFVCMine } from '@/hooks/form/useForm';
import formUtil from '@/lib/formUtil';
import FormTypes from '@/types/FormTypes';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import FVCInput from './FVCInput';

interface FVCEditFormMineProps {
  formId: string;
  form?: FormTypes.Form;
  fvc?: FormTypes.FVC;
  fvcId?: string;
  onUpdated?: () => void;
}

const FVCEditFormMine: React.FC<FVCEditFormMineProps> = ({
  formId,
  fvcId,
  fvc: propFVC,
  form: propForm,
  onUpdated,
}) => {
  const [fvc, setFVC] = useState<FormTypes.FVC>();
  const [showRightAnswer, setShowRightAnswer] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(propFVC?.values && propFVC.values.length > 0);
  const { getForm, isLoadingForm, form } = useGetForm();
  const { getFVCMine, isLoadingFVCMine } = useGetFVCMine();
  const { updateFVCMine, isUpdatingFVCMine } = useUpdateFVCMine();
  const [isAllCorrect, setIsAllCorrect] = useState<boolean>();
  const { t } = useTranslation('form');

  const formData = propForm || form;

  const hasRightAnswer = React.useMemo(() => {
    const answerList = formUtil.getRightAnswerList({ form: formData });
    return answerList.length > 0;
  }, [formData]);

  const calcIsAllCorrect = ({ form, fvc }: { form?: FormTypes.Form; fvc?: FormTypes.FVC }) => {
    if (!form || !fvc) {
      return;
    }
    setIsAllCorrect(
      formUtil
        .listAnswerAndSubmittedValues({ form: form, fvc: fvc })
        .reduce((acc, cur) => acc && cur.isCurrentOptionCorrect, true),
    );
  };

  useEffect(() => {
    calcIsAllCorrect({ form: formData, fvc });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  useEffect(() => {
    const initForm = async () => {
      if (propForm) {
        return propForm;
      }
      return getForm({ formId });
    };
    const initFVC = async () => {
      if (!fvcId) {
        return;
      }
      if (propFVC) {
        return propFVC;
      }
      return getFVCMine({ fvcId });
    };
    const init = async () => {
      try {
        const [form, fvc] = await Promise.all([initForm(), initFVC()]);
        calcIsAllCorrect({ form, fvc });

        setFVC(fvc);
      } catch (error) {
        logError(error);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeFVC = async ({ fvcUpdate }: { fvcUpdate: FormTypes.FVCUpdate }) => {
    if (isAllCorrect) {
      return;
    }
    setFVC({
      ...fvc,
      ...fvcUpdate,
    } as FormTypes.FVC);
  };

  const handleSubmit = async () => {
    try {
      if (!fvcId || !fvc) {
        return;
      }
      const result = await updateFVCMine({ fvcId, fvcUpdate: fvc });
      if (hasSubmitted) {
        ShowSuccess(t('fvc.successfully_resubmitted', 'Successfully resubmitted'));
      } else {
        ShowSuccess(t('fvc.successfully_submitted', 'Successfully submitted'));
      }
      setShowRightAnswer(true);
      setHasSubmitted(true);
      setFVC(result);
      setIsAllCorrect(
        formData &&
          formUtil
            .listAnswerAndSubmittedValues({ form: formData, fvc: fvc })
            .reduce((acc, cur) => acc && cur.isCurrentOptionCorrect, true),
      );
      onUpdated?.();
    } catch (error) {
      logError(error);
    }
  };

  return (
    <OverlaySkeleton isLoading={isLoadingFVCMine || isLoadingForm}>
      {formData && (
        <>
          <FVCInput
            form={formData}
            fvc={fvc}
            onChangeFVC={handleChangeFVC}
            showRightAnswer={hasRightAnswer && (hasSubmitted || showRightAnswer)}
          />
          <Grid container justifyContent="flex-end">
            {!isAllCorrect && (
              <Button
                variant="contained"
                color="primary"
                label={
                  hasSubmitted
                    ? t('fvc.re_submit_button_label', 'Re-submit')
                    : t('fvc.submit_button_label', 'Submit')
                }
                disabled={!fvc || !fvcId}
                onClick={handleSubmit}
                isLoading={isUpdatingFVCMine}
              />
            )}
          </Grid>
        </>
      )}
    </OverlaySkeleton>
  );
};

export default FVCEditFormMine;
