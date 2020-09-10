import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

import dollarPng from '../../assets/images/dollar-input.png';
import './CostField.css';

export default function CostField() {
  const [cost, setCost] = useState('');

  const formatCurrency = (value: number): string => {
    const format = new Intl.NumberFormat('en-us');

    return format.format(value);
  }

  const onCostChange = (value: string) => {
    const valueExistDot = value.match(/\./g)!;
    const dotOnEnd = value[value.length-1] === '.';

    if (valueExistDot && valueExistDot.length > 1) { return; }

    const decimalPart: any = value.match(/\.\d+/);    
    const isInvalidDecimalLength: boolean = decimalPart && decimalPart[0].length > 4;
    if (isInvalidDecimalLength) { return; }

    if (value && valueExistDot && valueExistDot.length && dotOnEnd) {
      return setCost(value);
    }

    const number: number = +value.replace(/[^\d\.]/g, '');

    setCost(formatCurrency(number));
  }

  return (
    <div className="costFieldWrapper">
      <div className="cost-form">
        <TextField
          id="cost-input"
          label="Treatment Cost *"
          type="text"
          variant="outlined"
          value={cost}
          onChange={e => onCostChange(e.target.value)}
        />
        <img src={dollarPng} alt="dollar" />

      </div>
    </div>
  );
}

