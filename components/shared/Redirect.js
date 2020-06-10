import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const Redirect = ({ ssr, to }) => {
  const router = useRouter();

  useEffect(() => {
    if (ssr) {
      window.location.pathname = to;
    } else {
      router.push(to);
    }
  }, []);

  return null;
};
