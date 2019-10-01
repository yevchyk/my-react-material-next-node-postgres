import React, { useEffect, useState } from 'react';
import {Router} from '../../routes';
import {useStyles} from './styles';
import {getRoom, getRooms, createRoom} from '../../actions/messages';
import Avatar from '@material-ui/core/Avatar';
import {connect} from 'react-redux';
import {compose} from 'redux';

function UserList({profiles, dispatch ,...props}) {
  const classes = useStyles();
  const [avatar, setAvatar] = useState("/static/images/avatar.jpg")

  useEffect(()=>{

  })

  function goToRoom(id) {
    dispatch(createRoom(id)).then((res)=>{
      Router.pushRoute(`/rooms/room/1`);
    })
  }

  return (
      <div>
        {profiles.profileList.map((item, key)=>
          <div key={key} className={classes.profileItem} onClick={()=>goToRoom(item.id)}>
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