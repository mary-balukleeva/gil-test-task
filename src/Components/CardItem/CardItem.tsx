import React, { useState, useMemo } from 'react';
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import './CardItem.css';

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

const AntSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 30,
      height: 20,
      margin: 2,
      padding: 2,
      display: 'flex',
    },
    switchBase: {
      padding: 4,
      // paddingBottom: 6,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(8px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: '#32207e',
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 14,
      height: 14,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 10,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }),
)(Switch);


export default function CardItem(props: any) {
  const { card, index, activeIndex } = props;
  const [hideAutoPay, setHideAutoPay] = useState(false);
  const [isAutoPay, toggleAutoPay] = useState(false);

  const classes = useStyles();

  const onClick = (card: string) => {
    console.log(card);
  }

  const toggleItem = () => {
    setHideAutoPay(!hideAutoPay);
    toggleAutoPay(!isAutoPay);
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

  const formatCurrency = (currency: number): string => {
    const format: any = new Intl.NumberFormat('en-us', {
      minimumFractionDigits: 2,
    });

    const number: string = format.format(currency)
    return number;
  }

  return (
    <div className={index >= activeIndex && index <= activeIndex+2  ? 'active' : 'slide'}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className="Rectangle">
            <div className="summaryBlock">
              <p className="summary">
                <AttachMoneyIcon />
                {formatCurrency(monthlyPayment)}
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
            {/* <Switch
              size="small"
              color="primary"
              onClick={toggleItem}
              inputProps={{ 'aria-label': 'secondary checkbox' }}
              disabled={!switchEnabled}
            /> */}
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                <Grid item>
                  <AntSwitch 
                    disabled={!switchEnabled}
                    checked={isAutoPay}
                    onChange={toggleItem} />
                </Grid>
                <Grid item>AutoPay via Bank Account</Grid>
              </Grid>
            </Typography>
          </div>
          <Button className="chooseBtn" color="primary" variant="contained" onClick={() => onClick(card.note)}>
            CHOOSE
          </Button>
        </div>
      </Card>
    </div>
  );
}

