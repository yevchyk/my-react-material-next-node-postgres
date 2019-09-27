import React, { useEffect, useState } from 'react'
import {useStyles} from './styles'
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux'
import {compose} from 'redux'

function RoomsCart(props) {
  const classes = useStyles();
  const [avatar, setAvatar] = useState("/static/images/avatar.jpg")

  useEffect(()=>{
  })

  return (
      <div>
          <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
      </div>
  )
}

export default compose(
  connect(res=>res)(RoomsCart)
)