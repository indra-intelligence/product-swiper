import React from 'react'
import { Icon, Input, Segment, Grid } from 'semantic-ui-react'

const TopBar = () => (

    <Grid textAlign='' verticalAlign='middle' columns={4}>
            <Grid.Row>
                    <Grid.Column floated='left'>
                            <Icon disabled name='filter' />
                    </Grid.Column>
                    <Grid.Column width={8}>
                            <Input fluid
                                placeholder='Search...'

                            />
                    </Grid.Column>
                    <Grid.Column  floated='right'>
                            <Icon disabled name='adjust'/>
                            <Icon disabled name='user'/>
                    </Grid.Column>

            </Grid.Row>
    </Grid>


)

export default TopBar
