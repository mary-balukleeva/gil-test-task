import React from 'react';
import Button from '@material-ui/core/Button';

import arrow from '../../../assets/images/arrow_left.svg';

const LeftArrow = (props: any) => {
  const {goToPrevSlide, activeIndex} = props;

  return (
    <div className='backArrow'>
      <Button color="primary" onClick={goToPrevSlide} variant="outlined" disabled={!activeIndex}>

        <img src={arrow} className="Arrow" alt="arrow" />
      </Button>
    </div>
  )
};

export default LeftArrow;
