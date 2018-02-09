// Code YouTubeDebugger Component Here
import React from 'react'

class ClassName extends React.Component {
  constructor() {
    this.state = {
      errors: [],
      user: null,
      settings: { 
        bitrate: 8,
        video: { resolution: '1080p' }
      }
    }
  }
  handleClick = () => {
    this.setState({
      settings: Object.assign(this.state.settings, {
        bitrate: 12
      })
    })
  }
  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}> Click me</button>
      </div>
    )
  }
}
