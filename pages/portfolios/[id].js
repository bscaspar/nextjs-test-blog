import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import axios from 'axios';
import { useGetPostById } from '@/actions';
import { useRouter } from 'next/router';
import BasePage from '@/components/BasePage';

const Portfolio = () => {
  const router = useRouter();
  const { data, error, loading } = useGetPostById(router.query.id);
  return (
    <BaseLayout>
      <BasePage>
        {loading && <p>Loading...</p>}
        {data && (
          <>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            <p>ID: {data.id}</p>
          </>
        )}
        {error && <div className='alert alert-danger'>{error.message}</div>}
      </BasePage>
    </BaseLayout>
  );
};

export default Portfolio;
