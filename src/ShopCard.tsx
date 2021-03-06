import React from 'react';
import { Card, Accordion, Image } from 'semantic-ui-react';
import IconScore from './IconScore';

const ShopCard = (props: any) => (
  <Card>
    <Image src={props.image} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className="date">{props.location}</span>
      </Card.Meta>
      <Card.Description>{props.description}</Card.Description>
      {/* <Accordion>
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          {' '}
          Sup
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>Hi</Accordion.Content>
      </Accordion> */}
    </Card.Content>
    <Card.Content extra>
      <IconScore selector="coffee" data={props.vectorizedAttrs} />
      <IconScore selector="wifi" data={props.vectorizedAttrs} />
      <IconScore selector="seating" data={props.vectorizedAttrs} />
      <IconScore selector="vibe" data={props.vectorizedAttrs} />
      {/* <FontAwesomeIcon className="icon" fa-fw icon={faCoffee} />
      {props.vectorizedAttrs.coffee.score}
      <FontAwesomeIcon className="icon" icon={faChair} />
      {props.vectorizedAttrs.seating.score}
      <FontAwesomeIcon className="icon" icon={faWifi} />
      {props.vectorizedAttrs.wifi.score}
      <FontAwesomeIcon className="icon" icon={faFire} />
      {props.vectorizedAttrs.vibe.score} */}
    </Card.Content>
  </Card>
);

export default ShopCard;
