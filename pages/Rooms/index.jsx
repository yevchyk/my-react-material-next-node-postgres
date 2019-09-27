import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Router} from '../../routes'
import Private from '../../layouts/private'
import useStyles from './style';
import RoomCart from '../../components/RoomCart/index';

function Rooms(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log(Router.router.query)
  });

  function goTo (id) {
    Router.push(`/rooms/room/${id}`)
  }
  return (
          <Private>
            {props.roomsInfo && <RoomCart list={props.roomsInfo} goTo={goTo}/>}
          </Private>
  )
}

export default compose(
    connect( res => res)
  )(Rooms)
