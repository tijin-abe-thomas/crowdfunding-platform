import { Typography, Button, Grid } from '@mui/material';
import NextLink from 'next/link';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  const user = {
    name: 'user 1',
    avatar: '/static/images/avatars/1.jpg'
  };
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Transactions
        </Typography>
        <Typography variant="subtitle2">
          Hello {user.name}, these are your recent transactions
        </Typography>
      </Grid>
      <Grid item>
      <NextLink href="/dashboards/crypto" passHref>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Contribute now!
        </Button>
        </NextLink>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
