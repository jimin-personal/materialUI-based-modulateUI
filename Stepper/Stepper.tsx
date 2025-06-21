import React from 'react';
import MuiStepper from '@mui/material/Stepper';
import MuiStep from '@mui/material/Step';
import MuiStepLabel from '@mui/material/StepLabel';
import { addMobileStyles, makeAppStyles } from '@/lib/styleHelper';
import { isNil } from 'lodash';

const useStepperStyles = makeAppStyles((theme) => ({
  container: {
    minWidth: '120px',
    ...addMobileStyles({
      minWidth: '100px',
    }),
  },
  root: {
    padding: 0,
  },
  completed: {
    color: `${theme.palette.actions.outlinedStroke} !important`,
  },
}));

interface StepperProps {
  activeStep: number;
  steps: { label?: string }[];
}

const Stepper: React.FC<StepperProps> = ({ activeStep, steps }) => {
  const classes = useStepperStyles();
  return (
    <div className={classes.container}>
      <MuiStepper
        activeStep={activeStep}
        classes={{
          root: classes.root,
        }}
      >
        {steps.map((step, idx) => {
          return (
            <MuiStep classes={{ root: classes.root }} key={step.label || `step-${idx}`}>
              {!isNil(step.label) && (
                <MuiStepLabel
                  classes={{ iconContainer: classes.root }}
                  StepIconProps={{ classes: { completed: classes.completed } }}
                >
                  {step.label}
                </MuiStepLabel>
              )}
            </MuiStep>
          );
        })}
      </MuiStepper>
    </div>
  );
};

export default Stepper;
