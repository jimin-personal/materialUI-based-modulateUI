import { Tooltip as MuiTooltip} from '@mui/material';
import React from 'react';
import { TooltipHelpIcon } from '../../ui/icon';
import { useTooltipStyle } from './useTooltipStyles';
import clsx from 'clsx';

type MUiTooltipPlacement =
  | 'bottom-end'
  | 'bottom-start'
  | 'bottom'
  | 'left-end'
  | 'left-start'
  | 'left'
  | 'right-end'
  | 'right-start'
  | 'right'
  | 'top-end'
  | 'top-start'
  | 'top';
export interface TooltipProps {
  tooltip: React.ReactNode;
  label?: string | null;
  tooltipIconProps?: any;
  children?: React.ReactElement;
  placement?: MUiTooltipPlacement;
  classes?: {
    root?: string;
  };
}

const Tooltip: React.FC<TooltipProps> = ({
  tooltip,
  label,
  tooltipIconProps,
  children,
  placement,
  classes,
}) => {
  const baseClasses = useTooltipStyle();
  return (
    <MuiTooltip
      arrow
      className={clsx(baseClasses.customizedTooltip, classes?.root)}
      classes={{ tooltip: baseClasses.tooltip, arrow: baseClasses.tooltipArrow }}
      title={tooltip}
      aria-label={label || ''}
      placement={placement}
    >
      {children || <TooltipHelpIcon {...tooltipIconProps} />}
    </MuiTooltip>
  );
};

export default Tooltip;
