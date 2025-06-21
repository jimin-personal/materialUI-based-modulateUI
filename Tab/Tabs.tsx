import React from 'react';
import { Tab as MuiTab, Tabs as MuiTabs } from '@mui/material';
import { useTabStyles } from './useTabStyles';
import Typography from '@/components/primitiveUI/Typography/Typography';

interface TabsProps {
  ariaLabel?: string;
  value: number | string;
  options?: { label: string; value?: string }[];
  onChange: ({ value }: { value: number | string }) => void;
  children?: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ ariaLabel, options, value, onChange, children }) => {
  const classes = useTabStyles();
  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number | string) => {
    onChange({ value: newValue });
  };

  return (
    <>
      <MuiTabs
        classes={{
          root: classes.styledTabsRoot,
          indicator: classes.styledTabsIndicator,
        }}
        value={value}
        onChange={handleTabChange}
        aria-label={ariaLabel}
      >
        {options?.map((option, optionIdx) => (
          <MuiTab
            key={option.label}
            disableRipple
            classes={{ root: classes.styledTabRoot }}
            label={
              <Typography
                variant={'subtitle6'}
                color={(option.value || optionIdx) === value ? 'primary' : 'secondary'}
              >
                {option.label}
              </Typography>
            }
            value={option.value}
          ></MuiTab>
        ))}
      </MuiTabs>
      {children}
    </>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  tabIndex: number | string;
  currentTabIndex: number | string;
}

export const TabPanel = (props: TabPanelProps) => {
  const { children, currentTabIndex, tabIndex, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={currentTabIndex !== tabIndex}
      id={`full-width-tabpanel-${tabIndex}`}
      aria-labelledby={`full-width-tab-${tabIndex}`}
      {...other}
    >
      {currentTabIndex === tabIndex && children}
    </div>
  );
};

export default Tabs;
