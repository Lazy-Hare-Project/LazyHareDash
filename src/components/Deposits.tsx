import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}
//TODO Change Recent Deposit Data to Recent Profit
export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Profit </Title>
      <Typography component="p" variant="h4">
        {((Math.random()*30000) + 10000).toFixed(2)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}