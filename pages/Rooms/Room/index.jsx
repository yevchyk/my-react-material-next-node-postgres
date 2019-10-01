import React, { useEffect, useState, useRef } from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import Private from '../../../layouts/private'
import {Router} from '../../../routes'
import useStyles from './style'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import date from 'date-and-time';
import clsx from 'clsx';


function Rooms(props) {
  const [text, setText] = useState('');
  const scrollRef = useRef(null);
  const classes = useStyles();
  const now = new Date();

  function sendMessage() {
    const roomId = Router.router.query.id
    if (text !== '') {

      setText('')
    }
  }

  useEffect(() => {
    const roomId = Router.router.query.id
    
    if (scrollRef.current) {
      const scrollHeight = scrollRef.current.scrollHeight;
      scrollRef.current.scrollTo({
        top: scrollHeight,
        behavior: "smooth"
      })
    }
  });
  console.log(props);
  return (
    <Private>
      <div className={classes.messageZone} ref={scrollRef}>
        {
          props.dialog.messages ?
            props.dialog.map((massage, key)=>(
                <div 
                  key={key}
                  className={clsx(classes.dialogBlock,{
                    [classes.dialogMe]: props.user.uid === massage.uid,
                    [classes.dialogNotMe]: props.user.uid !== massage.uid,
                  })}
                  >
                  <div className='photo'>
                    <img></img>
                    <span> {(props.user.uid !== massage.uid) && massage.firstName} {(props.user.uid !== massage.uid) && massage.lustName}</span>
                  </div>
                  <div className={classes.textBlock}>
                    <p className='text'>
                      {massage.text}
                    </p>
                  </div>
                  <div className='date'>
                      {massage.date}
                  </div>
                </div>
              )
            )
          : null
        }
      </div>
      <div className={classes.sendZone}>
        <TextareaAutosize 
          value={text} 
          onChange={(e)=>setText(e.target.value)} 
          aria-label="minimum height" rows={4} 
          placeholder="Message..." 
          className={classes.textarea}
        />
        <Button 
          variant="contained" 
          color="primary" 
          className={classes.send} 
          onClick={sendMessage}>
          Send
        </Button>
      </div>
    </Private>
  )
}

export default compose(
  connect(({messages})=>({
    dialog: messages.room
  }) )
)(Rooms)