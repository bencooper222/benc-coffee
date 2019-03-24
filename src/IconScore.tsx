import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChair,
  faWifi,
  faCoffee,
  faFire,
  faBug,
} from '@fortawesome/free-solid-svg-icons';

const mapSelectorToIcon = (selector: string) => {
  switch (selector) {
    case 'coffee':
      return faCoffee;
      break;
    case 'seating':
      return faChair;
      break;
    case 'vibe':
      return faFire;
      break;
    case 'wifi':
      return faWifi;
      break;
    default:
      return faBug;
  }
};

const IconScore = (props: {
  selector: string;
  data: { [x: string]: { score: React.ReactNode } };
}) => {
  return (
    <span>
      <FontAwesomeIcon
        className="icon"
        icon={mapSelectorToIcon(props.selector)}
      />{' '}
      {props.data[props.selector].score}{' '}
    </span>
  );
};

export default IconScore;
