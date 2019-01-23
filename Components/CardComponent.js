import React, { Component } from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {

    render() {

        const images = {
            '1': require('../assets/1.jpg'),
            '2': require('../assets/2.jpg'),
            '3': require('../assets/3.jpg'),
            '4': require('../assets/4.jpg'),
            '5': require('../assets/5.jpg'),
            '6': require('../assets/6.jpg'),
            '7': require('../assets/7.jpg'),
            '8': require('../assets/8.jpg'),
            '9': require('../assets/9.jpg'),
            '10': require('../assets/10.jpg'),
            '11': require('../assets/11.jpg'),
        }

        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/fjords.jpg')}/>
                        <Body>
                        <Text>Mountain</Text>
                        <Text>Jan 15, 2018</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]}
                    style={{
                        height: 200,
                        width: null,
                        flex: 1
                    }}/>
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-heart-empty' style={{ color: 'black' }}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-chatbubbles' style={{ color: 'black' }}/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-send' style={{ color: 'black' }}/>
                        </Button>
                        <Text>{this.props.likes} Likes</Text>
                    </Left>
                </CardItem>

                <CardItem>
                    <Body>
                    <Text>
                        <Text style={{fontWeight: "900"}}> Mountain </Text>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                    </Text>
                    </Body>
                </CardItem>

            </Card>
        )
    }
}

export default CardComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})