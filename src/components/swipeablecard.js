import Cards, { Card } from 'react-swipe-card'
import React, {Component} from 'react'
import TinderCard from "react-tinder-card";
import {Grid, Image} from "semantic-ui-react";
const data = ['Alexandre', 'Thomas', 'Lucien']


class SwipeCard extends Component {

    onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        if (direction == 'right') {
            this.productUpvote()
        } else if (direction == 'left') {
            this.productDownVote()
        }
        else if (direction == 'up') {
            ds.addProductToFavorites(this.state.product)
        }
        else if (direction == 'down') {
            ds.addProductToCart(this.state.product)
        }
    }

    onCardLeftScreen = (myIdentifier) => {
        this.productUpvote()
    }

    render() {
        return (
            <TinderCard onSwipe={this.onSwipe} onCardLeftScreen={() => this.onCardLeftScreen('fooBar')}>
                <Image wrapped size='medium' src={this.state.product.image_link} />
            </TinderCard>
        )
    }
}
export default SwipeCard;