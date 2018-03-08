'use strict';
import React, {Component} from 'react'

import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Icon} from "react-native-elements";
import Communications from "react-native-communications";
import colors from "./colors";


class DrawerContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {paymentsGroup: false, restDealsGroup: false, gcdGroup: false, supportGroup: false}


    }


    render() {
        return (
            <ScrollView contentContainer={[styles.sideMenu, this.props.style || {}]}>
                <View style={{flex: 1, marginTop: 10}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ChangePassword')}>
                        <View style={styles.header}>
                            <View style={styles.userInfosHolder}>
                                <View style={{flexDirection: 'row'}}>
                                    <Image style={styles.avatar}
                                           source={{uri: 'https://avatars1.githubusercontent.com/u/9527766?s=460&v=4'}}/>

                                    <View style={styles.userInfos}>
                                        <Text style={styles.username}>hwllop.auth.name</Text>
                                        <Text style={styles.username}>this.props.auth.phone</Text>
                                    </View>
                                </View>
                                <Icon style={styles.rowIcon} name='arrow-right' type='simple-line-icon' size={16}/>

                            </View>

                        </View>
                    </TouchableOpacity>
                    <View style={{height: 2, backgroundColor: '#ccc'}}/>

                </View>

                <View style={{flex: 6, marginTop: 20}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Tabs')} style={[styles.menu]}>
                        <View style={{flexDirection: 'row'}}>
                            <Icon name='credit-card' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>Payments</Text>
                            <View style={styles.oval}>
                                <Text style={{
                                    fontFamily: 'Montserrat-Regular',
                                    fontSize: 12,
                                    alignSelf: 'center',
                                    color: '#000'
                                }}>this.props.auth.zcash</Text>
                            </View>

                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>
                    {/*{*/}
                    {/*this.state.paymentsGroup ?*/}
                    {/*<View>*/}
                    {/*<TouchableOpacity style={styles.innerMenu}>*/}
                    {/*<View style={{flexDirection: 'row'}}>*/}
                    {/*<Icon name='wallet' color={colors.txtDark} size={15} type='simple-line-icon'/>*/}
                    {/*<Text style={styles.menuText}>Wallet</Text>*/}
                    {/*</View>*/}
                    {/*<Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>*/}

                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.innerMenu}>*/}
                    {/*<View style={{flexDirection: 'row'}}>*/}
                    {/*<Icon name='credit-card' color={colors.txtDark} size={15}*/}
                    {/*type='simple-line-icon'/>*/}
                    {/*<Text style={styles.menuText}>ZSC</Text>*/}
                    {/*</View>*/}
                    {/*<Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>*/}

                    {/*</TouchableOpacity>*/}
                    {/*<TouchableOpacity style={styles.innerMenu}>*/}
                    {/*<View style={{flexDirection: 'row'}}>*/}
                    {/*<Icon name='options' color={colors.txtDark} size={15} type='simple-line-icon'/>*/}
                    {/*<Text style={styles.menuText}>more</Text>*/}
                    {/*</View>*/}
                    {/*<Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>*/}

                    {/*</TouchableOpacity>*/}
                    {/*</View> :*/}
                    {/*null*/}
                    {/*}*/}
                    <TouchableOpacity  onPress={() => this.props.navigation.navigate('Page2')} style={styles.menu}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='tag' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>Restaurant Deals</Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu}
                                      onPress={() => this.props.navigation.navigate('Page3')}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='present' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>Gift Card Deals</Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>

                    <View style={{height: 1, backgroundColor: '#ccc'}}/>

                    <TouchableOpacity style={styles.menu}
                                      onPress={() => this.props.navigation.navigate('MyBookings', {title: 'My Bookings'})}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='event' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>My Bookings </Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menu}
                                      onPress={() => this.props.navigation.navigate('MyOrders', {title: 'My Order History'})}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='reload' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>My Order History</Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>


                    <View style={{height: 1, backgroundColor: '#ccc'}}/>


                    <TouchableOpacity style={styles.menu} onPress={this.onPress.bind(this, 'Support')}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='support' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>Help</Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>

                    {

                        this.state.supportGroup ?
                            <View>
                                <TouchableOpacity style={styles.innerMenu}
                                                  onPress={() => Communications.phonecall('18605003742', true)}>

                                    <View style={{flexDirection: 'row'}}>
                                        <Icon name='phone' color={colors.txtDark} size={15} type='simple-line-icon'/>
                                        <Text style={styles.menuText}>Call</Text>
                                    </View>
                                    <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerMenu}
                                                  onPress={() => Communications.email(['support@hello.in'], null, null, 'Feedback', null)}>
                                    <View style={{flexDirection: 'row'}}>

                                        <Icon name='envelope' color={colors.txtDark} size={15} type='simple-line-icon'/>
                                        <Text style={styles.menuText}>Email</Text>
                                    </View>
                                    <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                                </TouchableOpacity>
                                <TouchableOpacity style={styles.innerMenu}>
                                    <View style={{flexDirection: 'row'}}>

                                        <Icon name='bubble' color={colors.txtDark} size={15} type='simple-line-icon'/>
                                        <Text style={styles.menuText}>Chat</Text>
                                    </View>
                                    <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                                </TouchableOpacity>
                            </View> :
                            null
                    }
                    <TouchableOpacity style={styles.menu} onPress={this.onPress.bind(this, 'Logout')}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='power' color={colors.txtDark} size={15} type='simple-line-icon'/>
                            <Text style={styles.menuText}>Logout</Text>
                        </View>
                        <Icon name='arrow-right' color={colors.txtDark} size={15} type='simple-line-icon'/>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menu} onPress={this.onPress.bind(this, 'Logout')}>
                        <View style={{flexDirection: 'row'}}>

                            <Icon name='screen-smartphone' color={colors.txtDark} size={15}
                                  type='simple-line-icon'/>
                            <Text style={styles.menuText}>App Version</Text>
                        </View>
                        <Text style={{fontFamily: 'Montserrat-Regular', color: '#000'}}>1.0</Text>

                    </TouchableOpacity>


                </View>

                {/*<View style={[{flex: 1}]}>*/}

                {/*<View style={{height: 1, backgroundColor: '#ccc'}}/>*/}
                {/*<View style={styles.footer}>*/}
                {/*<View style={styles.footerInfosHolder}>*/}

                {/*<Text style={styles.username} onPress={() => alert("Rate Now")}>Rate{"\n"}*/}
                {/*the App</Text>*/}
                {/*<View style={{width: 2, color: 'black'}}/>*/}
                {/*<Text onPress={() => alert("Refer")} style={styles.username}>Refer & {"\n"}*/}
                {/*Gift Credits</Text>*/}
                {/*</View>*/}
                {/*</View>*/}


                {/*</View>*/}

            </ScrollView>
        )
    }

    onPress = (name) => {

        if (name === 'Payments') {
            if (this.state.paymentsGroup === true) {
                this.setState({paymentsGroup: false});
                this.setState({gcdGroup: false});
                this.setState({supportGroup: false});
                this.setState({restDealsGroup: false})
            } else {
                this.setState({paymentsGroup: true});
                this.setState({gcdGroup: false});
                this.setState({restDealsGroup: false});
                this.setState({supportGroup: false})

            }
        } else if (name === 'Restaurant Deals') {
            if (this.state.restDealsGroup === true) {
                this.setState({paymentsGroup: false});
                this.setState({gcdGroup: false});
                this.setState({supportGroup: false});
                this.setState({restDealsGroup: false})
            } else {
                this.setState({gcdGroup: false});
                this.setState({paymentsGroup: false});
                this.setState({restDealsGroup: true});
                this.setState({supportGroup: false})

            }
        } else if (name === 'Gift Card Deals') {
            if (this.state.gcdGroup === true) {
                this.setState({paymentsGroup: false});
                this.setState({gcdGroup: false});
                this.setState({supportGroup: false});
                this.setState({restDealsGroup: false})
            } else {
                this.setState({gcdGroup: true});
                this.setState({paymentsGroup: false});
                this.setState({restDealsGroup: false});
                this.setState({supportGroup: false})

            }

        } else if (name === 'Support') {
            if (this.state.supportGroup === true) {
                this.setState({paymentsGroup: false});
                this.setState({gcdGroup: false});
                this.setState({supportGroup: false});
                this.setState({restDealsGroup: false})
            } else {

                this.setState({supportGroup: true});
                this.setState({paymentsGroup: false});
                this.setState({gcdGroup: false});
                this.setState({restDealsGroup: false})

            }
        }


    }
}

const styles = StyleSheet.create({
    sideMenu: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        margin: 10,
    },
    sideMenuTitle: {
        marginLeft: 20,
        marginBottom: 30
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20,
        justifyContent: 'space-between'
    },
    innerMenu: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'space-between',

    },

    menuText: {
        marginLeft: 20,
        fontFamily: 'Montserrat-Light',
        color: '#000',
        fontSize: 17

    }, uglyDrawerItem: {
        fontSize: 20,
        color: 'blue',
        padding: 15,
        margin: 5,
        borderColor: 'blue',
        borderWidth: 1,
        textAlign: 'center',
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },

    footerInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    userInfos: {
        height: 50,
        justifyContent: 'center',
        marginLeft: 20
    },
    username: {
        fontFamily: 'Montserrat-Light', color: '#000', fontSize: 15
    },
    description: {
        fontSize: 10,
        marginTop: 2,
        fontFamily: 'Montserrat-Light',
        color: '#000'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bdLine
    },
    rowLeftParts: {
        height: 70,
        justifyContent: 'center'
    },
    rowIcon: {
        color: colors.txtDark,
        fontSize: 16
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 20,
    },
    footer: {
        marginBottom: 20,
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
        position: 'relative',
        bottom: 0,
        left: 0,
        right: 0, marginTop: 20


    }, oval: {
        width: 25,
        height: 25,
        borderRadius: 25 / 4,
        backgroundColor: '#ffdf7a',
        marginLeft: 30,
        transform: [
            {scaleX: 2}
        ],
        justifyContent: 'center'
    },

});


export default DrawerContainer;


