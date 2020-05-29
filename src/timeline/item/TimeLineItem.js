import React, {Component} from 'react';
import TimeUtil from "../../util/TimeUtil";
let CameraIcon = require("react-icons/lib/fa/camera-retro");
let PencilIcon = require("react-icons/lib/fa/pencil");
let InfoIcon = require("react-icons/lib/fa/info");
let VideoIcon = require("react-icons/lib/fa/video-camera");
let MessageIcon = require("react-icons/lib/md/message");

//https://gorangajic.github.io/react-icons/fa.html

export default class TimeLineItem extends Component {

    constructor(){
        super();
        this.state = {
            bool: true
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState((previousState) => {return {...previousState, bool: !previousState.bool}}), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    isRight() {
        return this.props.index % 2 !== 0;
    }

    renderIcon(){
        switch(this.props.icon){
            case 'message':
                return <MessageIcon />;
            case "info":
                return <InfoIcon />;
            case 'photo':
                return <CameraIcon/>;
            case 'video':
                return <VideoIcon />;
            default:
            case 'write':
                return <PencilIcon />;
        }
    }

    getEndTime(){
        if(this.props.until){
            return "- " + this.props.until
        }
        return ""
    }


    render(){
        if(TimeUtil.isPassed(this.props.time)){
            return (
                <div class="timeline-item">
                    <div class="timeline-icon">
                        {this.renderIcon()}
                    </div>
                    <div class={this.isRight() ? "timeline-content  right" : "timeline-content "}>
                        <h2 class="timeline-content-date">T{this.props.time} {this.getEndTime()}: {this.props.title}</h2>
                        <div>
                            {this.props.children}
                        </div>

                    </div>
                </div>
            )
        }
        return null;
    }

}
