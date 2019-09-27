import React, {useState, useEffect} from 'react';
import {snackbarUnset} from '../../actions/tools';
import clsx from 'clsx';
import {
        variantIcon,
        useStyles1,} from './styles'
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { connect } from 'react-redux'
import {compose} from 'redux'



function MySnackbarContentWrapper(props) {
  const classes = useStyles1();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

function CustomizedSnackbars({snackbar:{variant, message, display}, dispatch}) {
    const [open, setOpen] = React.useState(false);
    useEffect(()=>{
      setOpen(display);
    })

    function handleClose(event, reason) {
      if (reason === 'clickaway') {
        return;
      }
      dispatch(snackbarUnset(false));
    }

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant={variant}
          message={message}
        />
      </Snackbar>
    </div>
  );
}

export default compose(
  connect(({tools:{snackbar}}) =>
  ({
    snackbar,
  })
  )
  )(CustomizedSnackbars)