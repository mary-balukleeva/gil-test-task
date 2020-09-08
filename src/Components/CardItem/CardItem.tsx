import React, { useState, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      '& + $track': {
        backgroundColor: '#52d869',
      },
    },
  }
});

export default function CardItem(props: any) {
  const { card, index, activeIndex } = props;
  const [hideAutoPay, setHideAutoPay] = useState(false);

  const classes = useStyles();

  const onClick = (card: string) => {
    console.log(card);
  }

  const toggleItem = () => {
    setHideAutoPay(!hideAutoPay);
  }

  const monthlyPayment = useMemo(() => {
    if (hideAutoPay) {
      return card.noAutoPay.monthlyPayment
    }
    return card.monthlyPayment; 
  }, [hideAutoPay, card])

  const apr = useMemo(() => {
    if (hideAutoPay) {
      return card.noAutoPay.apr
    }
    return card.apr; 
  }, [hideAutoPay, card]);

  const switchEnabled = useMemo(() => {
    const { noAutoPay } = card;
    return noAutoPay.monthlyPayment && noAutoPay.apr
  }, [card])

  return (
    <div className={index >= activeIndex && index <= activeIndex+2  ? 'active' : 'slide'}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className="Rectangle">
            <div className="summaryBlock">
              <p className="summary">
                <AttachMoneyIcon />
                {monthlyPayment}
                </p>
              <p className="summary-description">per month</p>
            </div>
          </div>
          <CardContent>
            <div className="cardInner">
              <p className="subtitle">for</p>
              <p className="title">{card.term} months</p>
              <p className="subtitle">APR</p>
              <p className="title">{apr}%</p>
              <p className="note">{card.note}</p>
            </div>
          </CardContent>
        </CardActionArea>
        <div className="controlBlock">
          <div className="switchBlock">
            <Switch
              size="small"
              color="primary"
              onClick={toggleItem}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              disabled={!switchEnabled}
            />
            <span>AutoPay via Bank Account</span>
          </div>
          <Button className="chooseBtn" color="primary" variant="contained" onClick={() => onClick(card.note)}>
            CHOOSE
          </Button>
        </div>
      </Card>
    </div>
  );
}

