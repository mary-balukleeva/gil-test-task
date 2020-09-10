import React from 'react';
import Button from '@material-ui/core/Button';

import arrow from '../../../assets/images/arrow_left.svg';
import arrowDisabled from '../../../assets/images/arrow_left_disabled.svg';
import './Arrow.css';

const LeftArrow = (props: any) => {
  const {goToPrevSlide, activeIndex} = props;

  return (
    <div className='backArrow'>
      <Button color="primary" onClick={goToPrevSlide} variant="outlined" disabled={!activeIndex}>

        <img src={activeIndex ? arrow : arrowDisabled} className="Arrow" alt="arrow" />
      </Button>
    </div>
  )
};

export default LeftArrow;
