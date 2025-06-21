import { makeAppStyles } from '@/lib/styleHelper';

export const useSignIconWrapperStyles = makeAppStyles((theme) => ({
  signWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    width: '100px',
    borderRadius: '50%',
    background: '#FAFAFA',
  },
  signOutline: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '70%',
    width: '70%',
    border: `2px solid ${theme.palette.actions.border}`,
    borderRadius: '50%',
  },
}));
