import React from 'react';
import {} from 'react-dnd'

import { Container,Label } from './styles';

function Card({data}) {
  return(
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>
        {data.content}
      </p>
      {data.user && (
        <img src={data.user} />
      )}
    </Container>
  );
}

export default Card;