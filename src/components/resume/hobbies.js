import React, {Component} from 'react';
import { Grid } from 'semantic-ui-react';
import { Hobby } from '.';

export default class Hobbies extends Component {
    render() {
        return (
            <Grid.Row columns={5} className="hobbies">
                <Grid.Column>
                    <Hobby
                        imgUrl="/images/resume/fencing.jpg"
                        title="펜싱"
                        content="플러레"
                    />
                </Grid.Column>
                <Grid.Column>
                    <Hobby
                        imgUrl="/images/resume/baduk.png"
                        title="바둑"
                        content="타이잼 2단"
                    />
                </Grid.Column>
                <Grid.Column>
                    <Hobby
                        imgUrl="/images/resume/badminton.jpg"
                        title="배드민턴"
                        content=""
                    />
                </Grid.Column>
            </Grid.Row>
        );
    }
}