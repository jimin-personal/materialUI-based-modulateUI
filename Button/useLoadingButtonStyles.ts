import { makeAppStyles } from '@/lib/styleHelper';

export const useLoadingButtonStyle = makeAppStyles(() => ({
  loadingIconOverlay: {
    zIndex: 100,
    display: 'flex',
    borderRadius: '4px',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: 'white',
    opacity: 0.9,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
}));
