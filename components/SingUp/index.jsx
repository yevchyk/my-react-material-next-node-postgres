import React, { useState } from 'react'
import { connect } from 'react-redux';
import useStyles from './styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Avatar,
        Button,
        TextField,
        FormControlLabel,
        Checkbox,
        Link,
        Grid,
        Typography,
        Slide,} from '@material-ui/core';
import {Router} from '../../routes'
import {compose} from 'redux'
import {snackbarSet, snackbarUnset } from '../../actions/tools'
import { signUp } from '../../actions/auth'


function SignUp(props) {
  const [state, setState ] = useState({
    email : '',
    password : '',
    firstName: '',
    lastName: '',
    allowExtraEmails: false,
  })

  const changeState = (e, type) => {
    const value = e.target.value;
    setState({
      ...state,
      [type] : value,
    })
  }

  const handlCreateUserWithEmailAndPassword = (e) => {
    e.preventDefault();
    props.dispatch(signUp(state)).then(res=>
      Router.pushRoute(`/`)
    );
  }

  const classes = useStyles();
  return (
    <Slide direction="left" in={props.step === 'SingUp'} mountOnEnter unmountOnExit>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                value={state.firstName}
                label="First Name"
                autoFocus
                onChange={(e)=>changeState(e, 'firstName')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                value={state.lastName}
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={(e)=>changeState(e, 'lastName')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                value={state.email}
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>changeState(e, 'email')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={state.password}
                autoComplete="current-password"
                onChange={(e)=>changeState(e, 'password')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handlCreateUserWithEmailAndPassword}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2" onClick={(()=>props.setStep('SingIn'))}>
                Already have an account? Sign in
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
)(SignUp)