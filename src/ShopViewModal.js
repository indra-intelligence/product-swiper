import React, {Component} from 'react'
import {Button, Icon, Image, Modal, Grid} from 'semantic-ui-react'
import TopBar from "./TopBar";
import productImage from "./assets/imgs/0530037910636NEW_00_622.jpg"
import DataService from "./services/data-service";
import HttpService from "./services/http-service";

let http = new HttpService();
let ds = new DataService();
class ModalExampleTopAligned extends Component {
    constructor(props) {
        super(props);
        this.state = {product: ""};
        this.loadProducts = this.loadProducts.bind(this);
        this.productUpvote = this.productUpvote.bind(this);
        this.productDownVote = this.productDownVote.bind(this);
        this.getFavorites = this.getFavorites.bind(this);
        this.getCart = this.getCart.bind(this);
        this.loadProducts()
    }

    loadProducts = () => {
        http.getProducts().then(data => {
            console.log(data);
            ds.addProduct(data)
            this.setState({
                product: ds.getNextProduct()
            })
        }, err => {

        });
    };

    productUpvote = () => {
        this.setState({
            product: ds.upVote()
        })

    };

    productDownVote = () => {
        this.setState({
            product: ds.downVote()
        })
    };

    getFavorites = () => {
        console.log(ds.getFavorites())
    }

    getCart = () => {
        console.log(ds.getCart())
    }

    render() {
        return (
            <Modal trigger={<Button>Show Modal</Button>} size={'mini'} centered={false}>
                <Modal.Header><TopBar/></Modal.Header>
                <Modal.Content image>
                    <Grid textAlign='center' verticalAlign='middle' columns={3}>
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Icon link name='thumbs down' floated='left' onClick={() => this.productDownVote()}/>
                            </Grid.Column>
                            <Grid.Column width={10}>
                                <Icon link name='like' onClick={() => ds.addProductToFavorites(this.state.product)} />
                                <Image wrapped size='medium' src={this.state.product.image_link} />
                                <Icon link name='cart' onClick={() => ds.addProductToCart(this.state.product)}/>
                            </Grid.Column>
                            <Grid.Column width={1}>
                                <Icon link name='thumbs up' floated='left' onClick={() => this.productUpvote()}/>
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


export default ModalExampleTopAligned