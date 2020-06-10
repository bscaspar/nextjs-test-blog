import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import auth0, { authorizeUser, withAuth } from '@/utils/auth0';

const OnlyAdminSSR = ({ user, title }) => {
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage>
        <h1>Admin SSR Page shhh {user && user.name}</h1>
        <h2>{title}</h2>
      </BasePage>
    </BaseLayout>
  );
};

const getTitle = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ title: 'my new title' });
    }, 500);
  });
};

export const getServerSideProps = withAuth(async ({ req, res }, user) => {
  const title = await getTitle();
  return title;
})('admin');

export default OnlyAdminSSR;
