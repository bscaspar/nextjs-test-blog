import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';

const Blog = () => {
  const { data, error, loading } = useGetUser();
  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage>
        <h1>Hello Blog</h1>
      </BasePage>
    </BaseLayout>
  );
};

export default Blog;
