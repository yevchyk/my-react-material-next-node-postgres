import React, { useState } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Private from '../layouts/private'
import { Switch } from '@material-ui/core';
import {snackbarSet, snackbarUnset } from '../actions/tools'
import UserList from '../components/UserList/index'
import {refresh} from '../actions/auth'

function Main({user ,...props}){
  const [switcher, setSwitcher] = useState(false);
 function handlerSnackbar() {
    const {dispatch} = props
    if (!switcher) {
      dispatch(snackbarSet('info', 'info ok'))
      dispatch(refresh())
    }else dispatch(snackbarUnset())
    setSwitcher(!switcher);
}

  return (
    <Private>
        <UserList/>
        <h1>We go from {user.email}</h1>
        <Switch
            checked={switcher}
            inputProps={{ 'aria-label': 'Switch A' }}
            onClick={handlerSnackbar}
            />
    </Private>
  )
}

export default compose(
  connect(
    ({user}) => ({
      user: user.data
    })
  )
)(Main)
