import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
});

export default function CardItem(props: any) {
  const { card, index, activeIndex } = props;

  const classes = useStyles();

  return (
    <div className={index >= activeIndex && index <= activeIndex+2  ? 'active' : 'slide'}>
      <Card className={classes.root}>
        <CardActionArea>
          <div className="Rectangle">
            <p className="summary">{card.monthlyPayment}</p>
            <p className="summary-description">per month</p>
          </div>
          <CardContent>
            <div className="inner" >FROM</div>
          </CardContent>
        </CardActionArea>
        <div >
        <Switch
            checked={!!card.noAutoPay.id}
            onChange={(evt) => {}}
            name="checkedA"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <span>AutoPay via Bank Account</span>
          </div>
          <Button color="primary" variant="contained" className="chooseBtn">
            CHOOSE
         </Button>
      </Card>
    </div>
  );
}

