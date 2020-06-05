import Header from '@/components/shared/Header';

const BaseLayout = (props) => {
  const { className, children } = props;
  return (
    <div className='layout-container'>
      <main className={`cover ${className}`}>
        <Header />
        <div className='wrapper'>{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
