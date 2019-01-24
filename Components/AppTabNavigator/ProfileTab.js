import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, StatusBar, Image, Dimensions } from 'react-native'
import { Container, Content, Icon, Button, Thumbnail, Header, Left, Right, Body } from 'native-base'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

var images = [
    require('../../assets/1.jpg'),
    require('../../assets/2.jpg'),
    require('../../assets/3.jpg'),
    require('../../assets/4.jpg'),
    require('../../assets/5.jpg'),
    require('../../assets/6.jpg'),
    require('../../assets/7.jpg'),
    require('../../assets/8.jpg'),
    require('../../assets/9.jpg'),
    require('../../assets/10.jpg'),
    require('../../assets/11.jpg')
]

var {width, height} = Dimensions.get('window')

class ProfileTab extends Component {

    static  navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name="md-person" style={{
                color:
                tintColor
            }}/>
        )
    }


    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0
        }
    }

    renderSectionOne = () => {
        return images.map((image, index) => {
            return (
                <View key={index} style={[
                    {width: (width) / 3},
                    {height: (width) / 3},
                    {marginBottom: 2},
                    index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0}
                ]}>
                    <Image style={{
                        flex: 1,
                        width: undefined,
                        height: undefined}}
                           source={image}/>
                </View>
            )
        })
    }

    renderSection = () => {
        if (this.state.activeIndex == 0) {
            return (
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )

        }
    }

    segmentClicked = (index) => {
        this.setState({
            activeIndex: index
        })
    }


    render() {
        return (
            <Container style={{flex: 1}}>
                <Header style={{
                    ...Platform.select({
                        android: {
                            backgroundColor: "white",
                            marginTop: StatusBar.currentHeight
                        }
                    })
                }}>
                    <Left><Icon name='ios-person-add' style={{paddingLeft: 10}}/></Left>
                    <Body><Text style={{fontWeight: "900", fontSize: 18}}>Mountain</Text></Body>
                    <Right><EntypoIcon name='back-in-time' style={{paddingRight: 10, fontSize: 32}}/></Right>
                </Header>

                <Content>

                    <View style={{paddingTop: 10}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <Image source={require('../../assets/fjords.jpg')}
                                       style={{width: 75, height: 75, borderRadius: 37.5}}></Image>
                            </View>
                            <View style={{flex: 3}}>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                    paddingLeft: 10,
                                    paddignRight: 10
                                }}>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontWeight: '900'}}>20</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>Posts</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontWeight: '900'}}>206</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>followers</Text>
                                    </View>
                                    <View style={{alignItems: 'center'}}>
                                        <Text style={{fontWeight: '900'}}>167</Text>
                                        <Text style={{fontSize: 10, color: 'grey'}}>following</Text>
                                    </View>
                                </View>

                                <View style={{flexDirection: 'row', paddingTop: 10}}>
                                    <Button bordered dark style={{
                                        flex: 3,
                                        marginLeft: 30,
                                        justifyContent: 'center',
                                        height: 30
                                    }}><Text>Edit Profile</Text>
                                    </Button>

                                    <Button bordered dark style={{
                                        flex: 1,
                                        marginRight: 10,
                                        height: 30,
                                        marginLeft: 5,
                                        justifyContent: 'center'
                                    }}>
                                        <AntDesign name='setting' style={{fontSize: 18}}/>
                                    </Button>

                                </View>

                            </View>
                        </View>
                        <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
                            <Text style={{fontWeight: 'bold'}}>Mountain</Text>
                            <Text>Nature | Home | Beauty</Text>
                            <Text>www.nature.com/mountains</Text>
                        </View>
                    </View>

                    <View>
                        <View style={{
                            flexDirection: 'row', justifyContent: 'space-around',
                            borderTopWidth: 1, borderTopColor: '#eae5e5'
                        }}>
                            <Button transparent
                                    onPress={() => this.segmentClicked(0)}
                                    active={this.state.activeIndex == 0}>
                                <MaterialIcons name='apps'
                                               style={[{fontSize: 32}, this.state.activeIndex == 0 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button onPress={() => this.segmentClicked(1)}
                                    transparent active={this.state.activeIndex == 1}>
                                <MaterialIcons name='list'
                                               style={[{fontSize: 32}, this.state.activeIndex == 1 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button onPress={() => this.segmentClicked(2)}
                                    transparent active={this.state.activeIndex == 2}>
                                <MaterialIcons name='people-outline'
                                               style={[{fontSize: 32}, this.state.activeIndex == 2 ? {} : {color: 'grey'}]}/>
                            </Button>
                            <Button onPress={() => this.segmentClicked(3)}
                                    transparent active={this.state.activeIndex == 3}>
                                <MaterialIcons name='bookmark-border'
                                               style={[{fontSize: 32}, this.state.activeIndex == 3 ? {} : {color: 'grey'}]}/>
                            </Button>
                        </View>

                        {/** Height =width/3 so that image sizes vary according to size of the phone yet remain squares **/}

                        {this.renderSection()}

                    </View>

                </Content>

            </Container>
        )
    }


}

export default ProfileTab

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})