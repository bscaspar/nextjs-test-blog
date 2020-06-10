import Header from '@/components/shared/Header';

const BaseLayout = (props) => {
  const { className, children, user, navClass = 'with-bg', loading } = props;
  return (
    <div className='layout-container'>
      <main className={`cover ${className}`}>
        <Header user={user} loading={loading} className={navClass} />
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
