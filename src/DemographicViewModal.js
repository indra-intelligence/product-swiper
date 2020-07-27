import React, {Component} from 'react'
import {Button, Icon, Image, Modal, Grid, Header, Segment} from 'semantic-ui-react'
import TopBar from "./TopBar";
import productImage from "./assets/imgs/0530037910636NEW_00_622.jpg"
import DataService from "./services/data-service";
import HttpService from "./services/http-service";
import Cards, { Card } from "./components/react-swipe-cards/index"
import TinderCard from 'react-tinder-card'
import TopBarExit from "./TopBarExit";

const data = [

    {
        title: "Who are you shopping for today?",
        options: [
            "Me",
            "Not Me",
        ]
    },
    {
        title: "What are you looking for",
        options: [
            "Men's",
            "Women's",
            "Kids's",
        ]
    },
    {
        title: "What else are you looking for",
        options: [
            "Shoes's",
            "Apparel",
            "Everything",
        ]
    }
]

let http = new HttpService();
let ds = new DataService();
let currentIndex = 0;
class DemographicViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {question: data[currentIndex]};

    }

    loadQuestions = () => {
        const list = this.state.question.options.map((option) =>
            <Button fluid>{option}</Button>
        );
        return (list);

    };

    getNextQuestions = () => {
        this.setState({question: data[currentIndex++]});
    }


    render() {

        return (
            <Modal trigger={<Button>Show Modal</Button>} size={'mini'} centered={true}>
                <Modal.Header><TopBarExit/></Modal.Header>
                <Modal.Content >
                    <Segment placeholder>
                        <Header icon>
                            <Icon name='shopping cart' />
                            {this.state.question.title}
                        </Header>
                        {this.loadQuestions()}
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                    <Grid textAlign='center' columns={2}>
                        <Grid.Row>
                            <Grid.Column>
                                <Button onClick={() => this.getNextQuestions()}>Next</Button>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>

                </Modal.Actions>
            </Modal>


        )
    }
}


export default DemographicViewModal