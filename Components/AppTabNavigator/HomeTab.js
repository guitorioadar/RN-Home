import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, Platform,StatusBar} from 'react-native'
import {Container, Content, Icon, Thumbnail,Header,Left,Right,Body} from 'native-base'

import CardComponent from '../CardComponent'


class HomeTab extends Component {

    static  navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{color: tintColor}}/>
        )
    }

    render() {
        return (
            <Container style={styles.container}>

                <Header style={{
                    ...Platform.select({
                        android: {
                            backgroundColor: "white",
                            marginTop: StatusBar.currentHeight
                        }
                    })
                }}>
                    <Left><Icon name='ios-camera' style={{paddingLeft: 10}}/></Left>
                    <Body><Text style={{fontWeight:"900", fontSize: 18}}>Instagram</Text></Body>
                    <Right><Icon name='ios-send' style={{paddingRight: 10}}/></Right>
                </Header>

                <Content>
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 7
                        }}>
                            <Text style={{fontWeight: "900"}}>Stories</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name='md-play' style={{fontSize: 14}}/>
                                <Text style={{fontWeight: "900"}}> Watch All </Text>
                            </View>
                        </View>
                        <View style={{flex: 3}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/1.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/2.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/3.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/4.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/5.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/6.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/7.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/8.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/9.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/10.jpg')}/>
                                <Thumbnail
                                    style={{marginHorizontal: 5, borderColor: 'pink', borderWidth: 2}}
                                    source={require('../../assets/11.jpg')}/>
                            </ScrollView>
                        </View>
                    </View>

                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="202"/>
                    <CardComponent imageSource="3" likes="303"/>
                    <CardComponent imageSource="4" likes="404"/>
                    <CardComponent imageSource="5" likes="503"/>
                    <CardComponent imageSource="6" likes="603"/>
                    <CardComponent imageSource="7" likes="703"/>
                    <CardComponent imageSource="8" likes="803"/>
                    <CardComponent imageSource="9" likes="903"/>
                    <CardComponent imageSource="10" likes="1003"/>
                    <CardComponent imageSource="11" likes="1303"/>
                </Content>
            </Container>
        )
    }
}

export default HomeTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})