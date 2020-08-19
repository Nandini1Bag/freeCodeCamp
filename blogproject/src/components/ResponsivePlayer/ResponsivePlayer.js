import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import classes from './ResponsivePlayer.css';

class ResponsivePlayer extends Component {
    render () {
      return (
        <div className={classes.playerWrapper}>
          <ReactPlayer
            className={classes.reactPlayer}
            url= {this.props.url}
            width={this.props.width}
            height={this.props.height}
            controls={true}
            config={{ youtube: { playerVars: { disablekb: 1 } } }} 
            /* To disable keyboard shortcuts, use disabledkb: 1 in the playerVars:*/
          />
        </div>
      )
    }
  }

  export default ResponsivePlayer;