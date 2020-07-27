import React from 'react'
import { Icon, Grid } from 'semantic-ui-react'

const TopBarExit = () => (

    <Grid textAlign='' verticalAlign='right' columns={4}>
        <Grid.Row>
            <Grid.Column  floated='right'>
                <Icon disabled name='cancel'/>
            </Grid.Column>

        </Grid.Row>
    </Grid>


)

export default TopBarExit
