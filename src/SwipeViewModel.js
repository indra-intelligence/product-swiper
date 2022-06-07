import React, {Component} from 'react'
import {Button, Icon, Image, Modal, Grid, Transition, Header, Segment, Label, Message} from 'semantic-ui-react'
import TopBar from "./TopBar";
import productImage from "./assets/imgs/0530037910636NEW_00_622.jpg"
import DataService from "./services/data-service";
import HttpService from "./services/http-service";
import Cards, { Card } from "./components/react-swipe-cards/index"
import TinderCard from 'react-tinder-card'
import { useHistory } from 'react-router-dom';


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

         if (ds.isLastProduct()){
            const history = useHistory();
            history.push("/");
            return;
        }


    }

    onCardLeftScreen = (myIdentifier) => {

    }


    cardGallery = () => {
        let self = this;

        if(this.state.products != null) {
            const list = this.state.products.map((product) =>
                <div>
                    <Segment inverted>
                        <Header as='h4' inverted color='black'>
                          {product.category}
                        </Header>
                    </Segment>
                    <TinderCard onSwipe={this.onSwipe} flickOnSwipe={false} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')}>
                        <Image rounded wrapped src={product.image_link} />
                        <Label attached='bottom' clear>{product.name}</Label>
                    </TinderCard>

                </div>
            );
            return (list);
        }
        else {
            return (
                <div>
                <h1> Congrats!</h1>
                <p> You're 83% aligned with Billy Kemper</p>
                <Message>
                    <Message.Header>Use the code below to get 15% off your next purchase</Message.Header>
                    <h1>
                     bcx-5235
                    </h1>
                  </Message>
                </div>
            );
        }
    };


    render() {

        return (
            <div className="homepage-modal">
                <h1> Hey You ! </h1>
                <p> Take This Quiz To Get 15% Off Your Next Order </p>
                <Modal trigger={<Button>Let's Do It</Button>} size={'mini'} rounded-corners centered={false}>
                    <Modal.Content image>
                        <Grid textAlign='center' verticalAlign='middle' columns={1}>
                            <Grid.Row>
                                <Grid.Column >
                                    {this.cardGallery()}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Transition
                                        animation="bounce"
                                        duration="2000"
                                        visible={this.state.upVisibility}
                                    >
                                        <Icon link circular inverted name='thumbs up' floated='bottom'  size='big' onClick={() => this.productUpvote()}/>
                                    </Transition>
                                </Grid.Column>
                                <Grid.Column>
                                    <Icon link circular inverted name='redo' floated='bottom'  size='big' onClick={() => this.productUpvote()}/>
                                </Grid.Column>
                                <Grid.Column>
                                  <Transition
                                        animation="bounce"
                                        duration="2000"
                                        visible={this.state.downVisibility}
                                    >
                                        <Icon link circular inverted name='thumbs down' floated='bottom' size='big' onClick={() => this.productDownVote()}/>
                                    </Transition>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Modal.Content>
                </Modal>
            </div>



                )
    }
}


export default SwipeViewModel
