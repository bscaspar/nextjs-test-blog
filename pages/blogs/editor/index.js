import Header from '@/components/shared/Header';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';

const BlogEditor = ({ user, loading }) => {
  return (
    <BaseLayout user={user} loading={loading} header='Dashboard'>
      <BasePage>
        <h1>Blog Editor page</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)('admin');
