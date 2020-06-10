import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import axios from 'axios';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';

const Portfolio = ({ portfolio }) => {
  const { data: userData, error: userError, loading: userLoading } = useGetUser();
  return (
    <BaseLayout user={userData} loading={userLoading}>
      <BasePage header='Portfolio Details'>{JSON.stringify(portfolio)}</BasePage>
    </BaseLayout>
  );
};

// export async function getServerSideProps({ query }) {
//   const json = await new PortfolioApi().getById(query.id);
//   const portfolio = json.data;
//   return { props: { portfolio } };
// }

// executed at build time
export async function getStaticPaths() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;

  //get paths to prerender
  const paths = portfolios.map((p) => {
    return {
      params: {
        id: p._id,
      },
    };
  });
  //fallback false means "not found" pages will be resolved to 404 page
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const json = await new PortfolioApi().getById(params.id);
  const portfolio = json.data;
  return { props: { portfolio } };
}

export default Portfolio;
