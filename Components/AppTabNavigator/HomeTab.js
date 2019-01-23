import React, { Component } from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native'
import { Container, Content, Icon,Thumbnail } from 'native-base'

import CardComponent from '../CardComponent'


class HomeTab extends Component {

    static  navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name='ios-home' style={{
                color:
                tintColor
            }}/>
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={{height: 100}}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 7
                        }}>
                            <Text>Stories</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Icon name='md-play' style={{ fontSize: 14 }}/>
                                <Text> Watch All </Text>
                            </View>
                        </View>
                        <View style={{ flex: 3 }}>
                            <ScrollView
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                                <Thumbnail
                                style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                                <Thumbnail
                                    style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }}
                                    source={require('./fjords.jpg')}/>
                            </ScrollView>
                        </View>
                    </View>


                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="202"/>
                    <CardComponent imageSource="3" likes="303"/>
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