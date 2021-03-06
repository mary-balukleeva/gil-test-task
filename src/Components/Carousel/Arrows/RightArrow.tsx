import React from 'react';
import Button from '@material-ui/core/Button';

import arrow from '../../../assets/images/arrow_right.svg';
import arrowDisabled from '../../../assets/images/arrow_right_disabled.svg';
import './Arrow.css';

const RightArrow = (props: any) => {
  const {goToNextSlide, activeIndex, cardsLength} = props;

  return (
    <div className='backArrow'>
      <Button onClick={goToNextSlide} variant="outlined" disabled={activeIndex >= cardsLength - 3}>
        <img src={activeIndex >= cardsLength - 3 ? arrowDisabled : arrow} className="Arrow" alt="arrow" />
      </Button>
    </div>
  )
};

export default RightArrow;
