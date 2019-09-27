import React, {useState} from 'react';
import {connect} from 'react-redux';
import dynamic from 'next/dynamic';
import useStyles from './styles';
import {
        Paper,
        Grid,
        CircularProgress,
      } from '@material-ui/core';

const SingUp = dynamic(() => import('../../components/SingUp/index')
  ,{ loading: () => <CircularProgress className={useStyles().progress} color="secondary" />}
  )//.then();
const SingIn = dynamic(() => import('../../components/SingIn/index')
  ,{ loading: () => <CircularProgress className={useStyles().progress} color="secondary" />}
  )//.then();

function Login(props) {
    const classes = useStyles();
    const [step, setStep] = useState('SingIn');
    return (
            <Grid container component="main" className={classes.root}>
              <Grid item xs={false} sm={4} md={7} className={classes.image} />
              <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                  {(step === 'SingIn') && <SingIn setStep={setStep} step={step}/>}
                  {(step === 'SingUp') && <SingUp setStep={setStep} step={step}/>}
              </Grid>
            </Grid>
    )
}

const mapStateToProps = ({count}) => 
({
    count
})



export default connect(mapStateToProps)(Login)