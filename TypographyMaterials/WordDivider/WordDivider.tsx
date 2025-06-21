import { makeAppStyles } from '@/lib/styleHelper';
import React from 'react';
import clsx from 'clsx';

const useWordDividerStyles = makeAppStyles((theme) => ({
  wordDivider: {
    borderLeft: '1px solid',
    borderLeftColor: theme.palette.actions.border,
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(1.5),
    height: '100%',
    minHeight: '24px',
  },
}));

interface WordDividerProps {
  className?: string;
}

const WordDivider: React.FC<WordDividerProps> = ({ className }) => {
  const classes = useWordDividerStyles();
  return <span className={clsx(classes.wordDivider, className)} />;
};

export default WordDivider;
