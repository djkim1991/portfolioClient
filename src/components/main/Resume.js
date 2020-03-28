import React, { Component } from 'react';
import { Grid, Container, Segment, Label } from 'semantic-ui-react';

import {Profile, ProfileDetail, ProfileSkills, Hobbies} from '../resume';

class Resume extends Component {

    render() {

        return (
            <div className="resume">
                <Container  textAlign='left'>
                    <Segment raised>
                        <Label as='a' color='red' ribbon>
                            Resume
                        </Label>
                        <Grid divided='vertically' >
                            <Profile />
                            <ProfileDetail />
                            <ProfileSkills skills={this.props.skills}/>
                            <Hobbies />
                        </Grid>
                    </Segment>
                </Container>
            </div>
        );
    }
}

export default Resume;