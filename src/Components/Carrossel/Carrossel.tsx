import React, {useState} from 'react';

import { cards } from '../../assets/mockData';
import CardItem from '../CardItem/CardItem';
import LeftArrow from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';

import './Carroussel.css';
function Carrossel(props: any) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsLength] = useState(cards.length);

  const goToPrevSlide = () => {
    if (activeIndex) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex < cardsLength - 3) {
      setActiveIndex(activeIndex + 1);
    }
  }

  return ( 
    <div className="cardList">
      <LeftArrow goToPrevSlide={goToPrevSlide} activeIndex={activeIndex} />

      {cards.map((card, index) => 
        <CardItem card={card} key={index} index={index} activeIndex={activeIndex} />
      )}

      <RightArrow goToNextSlide={goToNextSlide} activeIndex={activeIndex} cardsLength={cardsLength} />
    </div>
  );
}

export default Carrossel;
