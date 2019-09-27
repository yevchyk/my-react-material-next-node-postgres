import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      color: 'white',
    },
    send: {
      margin: theme.spacing(1),
      flexGrow: 1,
      height: 40,
      bottom: 0,
    },
    rightIcon: {
      marginLeft: theme.spacing(1),
    },
    sendZone: {
      display: 'flex',
      marginTop: '10px'
    },
    textarea: {
      flexGrow: 6,
      border: '1px solid #bbbbbb',
      borderRadius: 4,
    },
    messageZone: {
      border: '1px solid #bbbbbb',
      minHeight: '15%',
      maxHeight: '75%',
      borderRadius: 4,
      transitionDuration: '0.5s',
      transitionDuration: '0.5s',
      display: 'grid',
      padding: 6,
      overflowY: 'scroll',
      '&::-webkit-scrollbar': { 
        display: 'none',
      },
    },
    dialogBlock: {
      display: 'flow-root',
      display: 'flex',
      flexDirection: 'column',
    },
    dialogMe: {
      right: 0,
      marginLeft: 'auto',
      minWidth: 70,
      '& .text' : {
        padding: 10,
        margin: 3,
        backgroundColor: '#00ffff1a',
        borderRadius: 10,
        borderTopRightRadius: 0,
        textAlign: 'right'
      },
      '& .date' : {
        fontSize: 11,
        fontWeight: 700,
        color: '#d2d2d2',
      },
      '& .photo': {
        fontSize: 12,
        float: 'right',
        marginLeft: 'auto',
      }
    },
    dialogNotMe: {
      left: 0,
      marginRight: 'auto',
      minWidth: 70,
      '& .text' : {
        padding: 10,
        minWidth: 60,
        margin: 3,
        backgroundColor: '#fff70021',
        borderRadius: 10,
        borderTopLeftRadius: 0,
        textAlign: 'left'
      },
      '& .date' : {
        fontSize: 11,
        fontWeight: 700,
        color: '#d2d2d2',
        marginLeft: 'auto',
      },
      '& .photo': {
        fontSize: 12,
        margin: 5,
        float: 'left',
      }
    },
  }
));

export default useStyles