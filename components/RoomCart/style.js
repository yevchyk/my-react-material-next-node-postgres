import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      color: 'white',
    },
    inline: {
      display: 'inline',
    },
    listItem: {
        backgroundColor: '#eaeeff7a',
        marginBottom: '4px',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0), 0px 1px 1px 0px rgba(0,0,0,0), 0px 2px 1px -1px rgba(0,0,0,0)',
        '&:hover' : {
            backgroundColor: '#dee3f77a',
            boxShadow:' 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
            cursor: 'pointer',
            transitionDuration: '0.5s',
        }
        },
    date: {
        position: 'absolute',
        color: '#cbcbcb',
        right: 6,
        top: 3,
    }
    }
));

export default useStyles