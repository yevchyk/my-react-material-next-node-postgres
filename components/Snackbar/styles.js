import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import { amber, green } from '@material-ui/core/colors';
import WarningIcon from '@material-ui/icons/Warning';
import { makeStyles } from '@material-ui/core/styles';

export const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };
  
export const useStyles1 = makeStyles(theme => ({
    success: {
      backgroundColor: green[600] + ' !important',
    },
    error: {
      backgroundColor: theme.palette.error.dark + ' !important',
    },
    info: {
      backgroundColor: theme.palette.primary.main + ' !important',
    },
    warning: {
      backgroundColor: amber[700] + ' !important',
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9+ ' !important',
      marginRight: theme.spacing(1)+ ' !important',
    },
    message: {
      display: 'flex',
      alignItems: 'center',
    },
  }));