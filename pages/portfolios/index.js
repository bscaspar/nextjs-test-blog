import BaseLayout from '@/components/layouts/BaseLayout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BasePage from '@/components/BasePage';
import { useGetUser } from '@/actions/user';
import PortfolioApi from '@/lib/api/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioCard from '@/components/PortfolioCard';

const Portfolios = ({ portfolios }) => {
  const { data: userData, error: userError, loading: userLoading } = useGetUser();
  const router = useRouter();
  const renderPortfolios = (portfolios) => {
    return portfolios.map((p) => (
      <li style={{ fontSize: '20px' }} key={p._id}>
        <Link as={`/portfolios/${p._id}`} href={`/portfolios/[id]`}>
          <a>{p.title}</a>
        </Link>
      </li>
    ));
  };
  return (
    <BaseLayout user={userData} loading={userLoading}>
      <BasePage className='portfolio-page' header='Portfolios Page'>
        <Row>
          {portfolios.map((p) => (
            <Col
              key={p._id}
              onClick={() => router.push('/portfolios/[id]', `/portfolios/${p._id}`)}
              md='4'
            >
              <PortfolioCard p={p} />
            </Col>
          ))}
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

//called during build time (not runtime)
//improves page performance, static page with dynamic data
export async function getStaticProps() {
  const json = await new PortfolioApi().getAll();
  const portfolios = json.data;
  return { props: { portfolios } };
}

export default Portfolios;
