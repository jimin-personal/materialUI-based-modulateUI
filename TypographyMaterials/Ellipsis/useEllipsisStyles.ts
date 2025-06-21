import { makeAppStyles } from '@/lib/styleHelper';

export const useEllipsisStyles = makeAppStyles(() => ({
  singleLine: {
    display: '-webkit-box',
    whiteSpace: 'normal',
    wordBreak: 'break-all',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
  },
  multiLine: (lines) => ({
    display: '-webkit-box',
    whiteSpace: 'normal',
    wordBreak: 'break-word',
    wordWrap: 'break-word',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': lines,
    '-webkit-box-orient': 'vertical',
  }),
  ellipsisWordBreak: {
    wordBreak: 'keep-all',
    overflowWrap: 'break-word',
  },
}));
