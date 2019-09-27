import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    avatar: {
      margin: 10,
      width: 60,
      height: 60,
      '&:hover': {
        cursor: 'pointer',
      }
    }
});