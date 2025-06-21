import { makeAppStyles } from '@/lib/styleHelper';

export const useBlockStyles = makeAppStyles(() => ({
  block: {
    position: 'relative',
  },
  fill: {
    height: '100%',
    width: '100%',
  },
  overflow: {
    overflow: 'auto',
  },
}));

export const useStickyBlockStyles = makeAppStyles(() => ({
  stickyBlock: {
    position: 'sticky',
    // background: 'white',
    zIndex: 10,
  },
  stickyTop: {
    top: 0,
  },
}));
