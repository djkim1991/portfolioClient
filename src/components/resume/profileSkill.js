import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

export default class ProfileSkill extends Component {
    render() {
        return (
            <div className="skill">
                <div className="thumbnail">
                    <Image src={this.props.imgUrl} />
                </div>
                <div className="content">
                    <span className="title">{this.props.title}</span><br />
                    <span className="content">{this.props.content}</span><br />
                    <div className="ui indicating progress progress">
                        <div className="bar" style={{width: this.props.percent}}>
                        <div className="progress">{this.props.grade}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}