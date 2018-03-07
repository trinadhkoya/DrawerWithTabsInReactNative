import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import styles from "./SlideMenu.style";

class SideMenu extends Component {
    // navigateToScreen = (route) => () => {
    //     const navigateAction = NavigationActions.navigate({
    //         routeName: route
    //     });
    //     this.props.navigation.dispatch(navigateAction);
    // }
    static navigationOptions = {
        title: 'Details',
    };


    render() {
        return (
            <View style={styles.container}>
                <ScrollView>


                    <View style={styles.navSectionStyle}>
                        <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Tabs')}>
                            Page1
                        </Text>
                        <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Page2')}>
                            Page2
                        </Text>
                        <Text style={styles.navItemStyle} onPress={() => this.props.navigation.navigate('Page3')}>
                            Page3
                        </Text>
                    </View>
                </ScrollView>

            </View>
        );
    }
}

SideMenu.propTypes = {};

export default SideMenu;
