import { makeAppStyles } from '@/lib/styleHelper';

export const useAnimationStyles = makeAppStyles((theme) => ({
  wrapper: {
    zIndex: 2000,
    color: '#fff',
    backgroundColor: '#ffffffe0',
  },
  animationGIF: {
    position: 'absolute',
    bottom: 'calc(72px + 20px)',
    width: '70vh',
    height: '70vh',
  },
}));
