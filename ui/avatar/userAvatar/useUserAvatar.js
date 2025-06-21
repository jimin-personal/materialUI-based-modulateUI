import { userHelper } from '@/lib';

export const useUserAvatar = () => {
  const getUsername = (user) => {
    if (!user) return { name: 'Unknown', abbr: '?' };

    const name = userHelper.getName(user) || user.email;
    if (!name) return { name: 'Unknown', abbr: '?' };
    const abbr = name
      .split(' ')
      .slice(0, 2)
      .map((s) => s[0] || '')
      .join('');

    return { name, abbr };
  };

  return { getUsername };
};
