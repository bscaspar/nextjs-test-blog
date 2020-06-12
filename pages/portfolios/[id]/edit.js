import React from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import BasePage from '@/components/BasePage';
import withAuth from '@/hoc/withAuth';
import { useRouter } from 'next/router';
import { useGetPortfolio } from '@/actions/portfolios';
import { Row, Col } from 'reactstrap';
import PortfolioForm from '@/components/PortfolioForm';
import { useUpdatePortfolio } from '@/actions/portfolios';
import { toast } from 'react-toastify';

const PortfolioEdit = ({ user }) => {
  const router = useRouter();
  const [updatePortfolio, { error }] = useUpdatePortfolio();
  const { data: initialData } = useGetPortfolio(router.query.id);

  const _updatePortfolio = async (data) => {
    // one option for error handling
    // try {
    //   await updatePortfolio(router.query.id, data);
    //   toast.success('updated!', { autoClose: 2000 });
    // } catch (e) {
    //   toast.error('Oops error!', { autoClose: 2000 });
    // }
    await updatePortfolio(router.query.id, data);
    toast.success('updated!', { autoClose: 2000 });
  };
  return (
    <BaseLayout user={user} loading={false}>
      <BasePage header='Portfolio Edit'>
        <Row>
          <Col md='8'>
            {initialData && <PortfolioForm initialData={initialData} onSubmit={_updatePortfolio} />}
            {error && <div className='alert alert-danger mt-2'>{error}</div>}
          </Col>
        </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(PortfolioEdit)('admin');
