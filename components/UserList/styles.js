import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    avatar: {
      margin: 10,
      width: 60,
      height: 60,
      float: "left",
    },
    profileItem: {
      display: "flex",
      border: "1px solid #0000ff36;",
      margin: "5px auto",
      transition: '0.5s',
      '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#8ee5ff26',
        margin: "6px auto 3px auto",
        transition: '0.5s',

      }
    },
    name: {
      fontWeight: "600",
    }
});