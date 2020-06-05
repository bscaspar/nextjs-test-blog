import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import BasePage from '@/components/BasePage';
import { useGetPosts } from '@/actions';

const Portfolios = () => {
  const { data, error, loading } = useGetPosts();

  const renderPosts = (posts) => {
    return posts.map((p) => (
      <li style={{ fontSize: '20px' }} key={p.id}>
        <Link as={`/portfolios/${p.id}`} href={`/portfolios/[id]`}>
          <a>{p.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout>
      <BasePage>
        <h1>Hello Portfolios</h1>
        {loading && <p>Loading...</p>}
        {data && <ul>{renderPosts(data)}</ul>}
        {error && <div className='alert alert-danger'>{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolios;
