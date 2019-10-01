import React, { useEffect, useState } from 'react'
import {useStyles} from './styles'
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux'
import {compose} from 'redux'

function UserList({profiles ,...props}) {
  const classes = useStyles();
  const [avatar, setAvatar] = useState("/static/images/avatar.jpg")

  useEffect(()=>{
    console.log(props);
  })

  function createDialog() {

  }

  return (
      <div>
        {profiles.profileList.map((item, key)=>
          <div key={key} className={classes.profileItem} onClick={()=>createDialog(item.id)}>
            <Avatar alt="Remy Sharp" src={avatar} className={classes.avatar} />
            <p className={classes.name}>
              {item.firstName}<br/>
              {item.lastName}<br/>
              {item.email}<br/>
            </p>
          </div>
          )}
      </div>
  )
}

export default compose(
  connect(({profiles})=>({
    profiles
  })
  )(UserList)
)