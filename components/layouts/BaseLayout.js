import Header from 'components/shared/Header';
import { ToastContainer } from 'react-toastify';

const BaseLayout = (props) => {
  const { className, children, user, navClass = 'with-bg', loading } = props;
  return (
    <div className='layout-container'>
      <main className={`cover ${className}`}>
        <Header user={user} loading={loading} className={navClass} />
        <div className='wrapper'>{children}</div>
      </main>
      <ToastContainer />
    </div>
  );
};

export default BaseLayout;
