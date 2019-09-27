import React, { useState } from 'react';
import { connect } from 'react-redux'
import {Router} from '../../routes'
import useStyles from './styles';
import {logIn} from '../../actions/auth'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {compose} from 'redux'

import {
        Button,
        TextField,
        FormControlLabel,
        Checkbox,
        Grid,
        Link,
        Typography,
        Avatar,
        Slide,
      } from '@material-ui/core';

function SingIn(props) {
  const [state, setState] = useState({password: '', email: ''});
  
  const changeState = (e, type) => {
    const value = e.target.value;
    setState({
      ...state,
      [type] : value,
    })
  }

  const logInUserWithEmailAndPassword = (e) => {
    e.preventDefault();
    props.dispatch(logIn({...state}));
    Router.pushRoute('/');
  }

  const classes = useStyles();
  return (
    <Slide direction="left" in={props.step === 'SingIn'} mountOnEnter unmountOnExit>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="none"
          onChange={(e)=>changeState(e, 'email')}
          value={state.email}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e)=>changeState(e, 'password')}
          autoComplete="none"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={logInUserWithEmailAndPassword}
          className={classes.submit}
          >
          Sign In
          </Button>
          <Grid container>
            <Grid item xs>
                <Link href="#" variant="body2">
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
                <Link href="#" variant="body2" onClick={(()=>props.setStep('SingUp'))}>
                {"Don't have an account? Sign Up"}
                </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Slide>
)
};

export default compose(
  connect(res=>res)
  )(SingIn)


