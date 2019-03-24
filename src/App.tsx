import * as React from 'react';
import ShopCard from './ShopCard';
import { Container, Card } from 'semantic-ui-react';
import coffee from '../data/coffee.json';

const App = () => {
  return (
    <Container style={{ margin: 5 }}>
      <Card.Group>
        {Array.from(coffee).map((shop, i) => (
          <ShopCard key={i} {...shop} />
        ))}
      </Card.Group>
    </Container>
  );
};

export default App;
