import { useGetUser } from '@/actions/user';
import { Redirect } from '@/components/shared/Redirect';
import { isAuthorized } from '@/utils/auth0';

const withAuth = (Component) => (role) => (props) => {
  const { data, error, loading } = useGetUser();
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!data && typeof window !== 'undefined') {
    // means we are in the browser, not node environment
    return <Redirect ssr to='/api/v1/login' />;
  } else {
    if (role && !isAuthorized(data, role)) {
      return <Redirect ssr to='/api/v1/login' />;
    }
    return <Component user={data} loading={loading} {...props} />;
  }
};

export default withAuth;
