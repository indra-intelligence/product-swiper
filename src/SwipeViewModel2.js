import React, {Component} from 'react'
import {Button, Icon, Image, Modal, Grid, Transition} from 'semantic-ui-react'
import TopBar from "./TopBar";
import productImage from "./assets/imgs/0530037910636NEW_00_622.jpg"
import DataService from "./services/data-service";
import HttpService from "./services/http-service";
import Cards, { Card } from "./components/react-swipe-cards/index"
import TinderCard from 'react-tinder-card'
import kittenImage from '../src/assets/imgs/kittens.png'
import skullsImage from '../src/assets/imgs/skulls.png'
import musicImage from '../src/assets/imgs/music.png'



const data = [

   [ {title: "kittens", img: kittenImage}],
   [ {title: "music", img: musicImage}],
   [ {title: "skulls", img: skullsImage}],
]

let http = new HttpService();
let ds = new DataService();
let currentIndex = 0;

class SwipeViewModel2 extends Component {

    constructor(props) {
        super(props);
        this.state = {interest: data[currentIndex], downVisibility: true, upVisibility: true,};

    }

    getNexInterest = () => {
        this.setState({interest: data[currentIndex++]});
        this.setState((prevState) => ({interest: data[currentIndex++], upVisibility: !prevState.upVisibility }))

    }

    action = (string) => {
        console.log(string);
    }

    onSwipe = (direction) => {
        console.log("swiped " + direction)


        if (direction == 'right') {
            this.setState((prevState) => ({interest: data[currentIndex++], upVisibility: !prevState.upVisibility }))
        } else if (direction == 'left') {
            this.setState((prevState) => ({interest: data[currentIndex++], downVisibility: !prevState.downVisibility }))
        }


    }

    onCardLeftScreen = (myIdentifier) => {

    }


    cardGallery = () => {
        let self = this;
        const list = this.state.interest.map((product) =>
            <TinderCard onSwipe={this.onSwipe} flickOnSwipe={false} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')}>
                <Image wrapped size='medium' src={product.img} />
            </TinderCard>
        );
        return (list);
    };


    render() {

        return (
            <Modal trigger={<Button>Show Modal</Button>} size={'mini'} centered={false}>
                <Modal.Content image>
                    <Grid textAlign='center' verticalAlign='middle' columns={3}>
                        <h2> Tell us more </h2>
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Transition
                                    animation="bounce"
                                    duration="2000"
                                    visible={this.state.downVisibility}
                                >
                                    <Icon link name='thumbs down' floated='left' onClick={() => this.productDownVote()}/>
                                </Transition>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                {this.cardGallery()}
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Transition
                                    animation="bounce"
                                    duration="2000"
                                    visible={this.state.upVisibility}
                                >
                                    <Icon link name='thumbs up' floated='left' onClick={() => this.productUpvote()}/>
                                </Transition>

                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Button>More Details</Button>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                {/*<Modal.Actions>*/}
                {/*    <Grid textAlign='center' columns={2}>*/}
                {/*        <Grid.Row>*/}
                {/*            <Grid.Column>*/}
                {/*                <Button onClick={() => this.getCart()}>Cart</Button>*/}
                {/*            </Grid.Column>*/}
                {/*            <Grid.Column>*/}
                {/*                <Button onClick={() => this.getFavorites()}>Favorites</Button>*/}
                {/*            </Grid.Column>*/}

                {/*        </Grid.Row>*/}
                {/*    </Grid>*/}

                {/*</Modal.Actions>*/}
            </Modal>


        )
    }
}


export default SwipeViewModel2
