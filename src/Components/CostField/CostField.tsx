import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';

import dollarPng from '../../assets/images/dollar-input.png';
import './CostField.css';

export default function CostField() {
  const ref: any = useRef();
  const divRef: any = useRef();

  const [cost, setCost] = useState('');
  const [visibleCaret, toggleCaret] = useState(false);

  const formatCurrency = (value: number): string => {
    const format = new Intl.NumberFormat('en-us');

    return format.format(value);
  }

  const onCostChange = (value: string) => {
    const valueExistDot = value.match(/\./g)!;
    
    const anyDotInField = valueExistDot && valueExistDot.length > 1;
    if (anyDotInField) { return; }
    
    const dotOnEnd = /\.$/.test(value);
    const decimalPart: any = value.match(/\.\d+/);    
    const isInvalidDecimalLength: boolean = decimalPart && decimalPart[0].length > 4;

    if (isInvalidDecimalLength) { return; }

    const isEmptyOrEndOnDotValue = !value || (value && valueExistDot && valueExistDot.length && dotOnEnd);
    if (isEmptyOrEndOnDotValue) {
      return setCost(value);
    }

    const number: number = +value.replace(/[^\d\.]/g, '');
    setCost(formatCurrency(number));
  }

  return (
    <div className="costFieldWrapper">
      <div className="cost-form">
        <TextField
          ref={ref}
          id="cost-input"
          label="Treatment Cost *"
          type="text"
          variant="outlined"
          value={cost}
          onChange={e => onCostChange(e.target.value)}
          onFocus={() => toggleCaret(true)}
          onBlur={() => toggleCaret(false)}
        />
        { visibleCaret && <div ref={divRef} className='divAfterInput' >
          <span className="content">{cost}</span>
          <div className="caret" />
        </div>}
        <img src={dollarPng} alt="dollar" />
      </div>
    </div>
  );
}

