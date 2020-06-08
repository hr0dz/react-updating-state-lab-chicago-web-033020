// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component{

    constructor(){
        super();
        this.state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
        resolution: '1080p'
        }
    }
}
    }

    changeBitrate = () => {
        this.setState({
            settings: {
            ...this.state.settings,
            bitrate: 12
        }
    }

        )
        console.log(this.state.settings.bitrate)
    }

    changeRes = () => {
        this.setState({
            settings: {
               ...this.state.settings,
               video: {
                resolution: '720p'
               }
            }
        }

        )
        console.log(this.state.settings.video.resolution)
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.changeBitrate}>bitrate</button>
                <button className='resolution' onClick={this.changeRes}>res</button>
            </div>
        )
    }
}

export default YouTubeDebugger;