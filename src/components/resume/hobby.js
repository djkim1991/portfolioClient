import React, {Component} from 'react';
import { Image } from 'semantic-ui-react';

export default class Hobby extends Component {
    render() {
        return (
            <div className="hobby">
                <div className="thumbnail">
                    <Image src={this.props.imgUrl} />
                </div>
                <div className="content">
                    <span className="title">{this.props.title}</span><br />
                    <span className="content">{this.props.content}</span>
                </div>
            </div>
        );
    }
}