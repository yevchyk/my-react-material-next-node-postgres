import React, { useEffect } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import useStyles from './style'

function RoomsCart(props) {
  const classes = useStyles();
  return (
    props.list[0] && props.list.map((item, key)=>
        <List className={classes.root} key={key} onClick={()=>props.goTo(item.id)}>
          <Paper  className={classes.listItem} >
            <ListItem alignItems="flex-start" >
            <span className={classes.date}>{item.date}</span>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={`${item.firstName} ${item.lustName}`}
                secondary={
                  <React.Fragment>
                    {item.text}
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>
        </List>
        )
  )
}

export default RoomsCart;
