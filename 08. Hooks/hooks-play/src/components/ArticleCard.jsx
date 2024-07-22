import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useContext } from 'react';
import UserContext from '../contexts/UserContext';


export default function ArticleCard({
  _id,
  title
}) {
  const {user} = useContext(UserContext);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>user {user}</p>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
