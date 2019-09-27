import { fade, makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    setting: {
      transform: 'rotate(-360deg)',
      transition: theme.transitions.create('transform', {
        easing: theme.transitions.easing.easeOut,
        duration: '0.6s',
      }),
      '&:hover': {
        transform: 'rotate(360deg)',
        transition: theme.transitions.create('transform', {
          easing: theme.transitions.easing.easeOut,
          duration: '0.6s',
        }),
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: `${theme.spacing(1, 1, 1, 7)} !important`,
      transition: `${theme.transitions.create('width')} !important`,
      width: '100%  !important',
      [theme.breakpoints.up('md')]: {
        width: 200,
      },
      color: 'white !important',
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1 + ' !important',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }) + ' !important',
    },
    appBarShift: {
      marginLeft: drawerWidth + ' !important',
      width: `calc(100% - ${drawerWidth}px)` + ' !important',
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }) + ' !important',
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    loader: {
      width: '100% !important',
      height: '2px !important',
      position: 'fixed !important',
      zIndex: '1400 !important',
    },
    toolbar: {
      float: 'right',
    }
  }));
  