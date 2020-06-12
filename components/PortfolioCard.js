import { Card, CardHeader, CardBody, CardText, CardTitle } from 'reactstrap';

export default ({ p, children }) => {
  return (
    <Card className='portfolio-card'>
      <CardHeader className='portfolio-card-header'>{p.jobTitle}</CardHeader>
      <CardBody>
        <p className='portfolio-card-city'>{p.location}</p>
        <CardTitle className='portfolio-card-title'>{p.title}</CardTitle>
        <CardText className='portfolio-card-text'>{p.description}</CardText>
        {children}
      </CardBody>
    </Card>
  );
};
