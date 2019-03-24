import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChair } from '@fortawesome/free-solid-svg-icons';

const iconStyle = { 'margin-left': '10px' };

const ShopCard = (props: any) => (
  <Card>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className="date">{props.location}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon style={iconStyle} name="coffee" />
      {props.vectorizedAttrs.coffee.score}
      <FontAwesomeIcon transform="left-1" icon={faChair} />
      {props.vectorizedAttrs.seating.score}
      <Icon style={iconStyle} name="wifi" />
      {props.vectorizedAttrs.wifi.score}
      <Icon style={iconStyle} name="fire" />
      {props.vectorizedAttrs.vibe.score}
    </Card.Content>
  </Card>
);

export default ShopCard;
