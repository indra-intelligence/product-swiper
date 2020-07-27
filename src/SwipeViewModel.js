import React, {Component} from 'react'
import {Button, Icon, Image, Modal, Grid, Transition} from 'semantic-ui-react'
import TopBar from "./TopBar";
import productImage from "./assets/imgs/0530037910636NEW_00_622.jpg"
import DataService from "./services/data-service";
import HttpService from "./services/http-service";
import Cards, { Card } from "./components/react-swipe-cards/index"
import TinderCard from 'react-tinder-card'

const data = ['Alexandre', 'Thomas', 'Lucien']

let http = new HttpService();
let ds = new DataService();
class SwipeViewModel extends Component {
    constructor(props) {
        super(props);
        this.state = {products: [], downVisibility: true, upVisibility: true, cartVisibility: true, favoriteVisibility: true};
        this.loadProducts = this.loadProducts.bind(this);
        this.productUpvote = this.productUpvote.bind(this);
        this.productDownVote = this.productDownVote.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
        this.getCart = this.getCart.bind(this);
        this.onSwipe = this.onSwipe.bind(this);
        this.cardGallery = this.cardGallery.bind(this);
        this.loadProducts()

    }

    loadProducts = () => {
        http.getProducts().then(data => {
            console.log(data);
            ds.addProduct(data)
            this.setState({
                visible: true,
                products: ds.getNextProduct()
            })
        }, err => {

        });
    };

    productUpvote = () => {
        this.setState((prevState) => ({ upVisibility: !prevState.upVisibility,  products: ds.upVote() }))

    };

    productDownVote = () => {
        this.setState((prevState) => ({ downVisibility: !prevState.downVisibility,  products: ds.upVote() }))
    };

    getFavorites = () => {
        console.log(ds.getFavorites())
    }

    getCart = () => {
        console.log(ds.getCart())
    }

    action = (string) => {
        console.log(string);
    }

    onSwipe = (direction) => {
        console.log("swiped " + direction)


        if (direction == 'right') {
            this.productUpvote();
        } else if (direction == 'left') {
            this.productDownVote();
        } else if (direction == 'up') {
            ds.addProductToFavorites(this.state.products[0])
            this.setState((prevState) => ({ favoriteVisibility: !prevState.favoriteVisibility,  products: ds.getNextProduct() }))

        } else if (direction == 'down') {
            ds.addProductToCart(this.state.products[0])
            this.setState((prevState) => ({ cartVisibility: !prevState.cartVisibility,  products: ds.getNextProduct() }))

        }


    }

    onCardLeftScreen = (myIdentifier) => {

    }


    cardGallery = () => {
        let self = this;
        const list = this.state.products.map((product) =>
            <TinderCard onSwipe={this.onSwipe} flickOnSwipe={false} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')}>
                <Image wrapped size='medium' src={product.image_link} />
            </TinderCard>
        );
        return (list);
    };


    render() {

        return (
            <Modal trigger={<Button>Show Modal</Button>} size={'mini'} centered={false}>
                <Modal.Header><TopBar/></Modal.Header>
                <Modal.Content image>
                    <Grid textAlign='center' verticalAlign='middle' columns={3}>
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
                                <Transition
                                    animation="bounce"
                                    duration="2000"
                                    visible={this.state.favoriteVisibility}
                                >
                                    <Icon link name='like' onClick={() => ds.addProductToFavorites(this.state.products.pop())} />
                                </Transition>
                                {this.cardGallery()}
                                <Transition
                                    animation="bounce"
                                    duration="2000"
                                    visible={this.state.cartVisibility}
                                >
                                <Icon link name='cart' onClick={() => ds.addProductToCart(this.state.products.pop())}/>
                                </Transition>
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
                            <Button>Product Details</Button>
                        </Grid.Row>
                    </Grid>
                </Modal.Content>
                <Modal.Actions>
                    <Grid textAlign='center' columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Button onClick={() => this.getCart()}>Cart</Button>
                            </Grid.Column>
                            <Grid.Column>
                                <Button onClick={() => this.getFavorites()}>Favorites</Button>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Modal.Actions>
            </Modal>


                )
    }
}


export default SwipeViewModel
