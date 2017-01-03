/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import { Navigation } from 'react-native-navigation';
import TabNavigator from 'react-native-tab-navigator';

const HOME = 'home';
const HOME_NORMAL = require('./src/images/home_normal.png');
const HOME_FOCUS = require('./src/images/home_focus.png');

const LIST = 'list';
const LIST_NORMAL = require('./src/images/list_normal.png');
const LIST_FOCUS = require('./src/images/list_focus.png');

const CATEGORY = 'category';
const CATEGORY_NORMAL = require('./src/images/category_normal.png');
const CATEGORY_FOCUS = require('./src/images/category_focus.png');


const DOWNLOAD = 'download';
const DOWNLOAD_NORMAL = require('./src/images/download_normal.png');
const DOWNLOAD_FOCUS = require('./src/images/download_focus.png');


export default class rnApp extends Component {

  constructor(props){
      super(props);
      this.state={selectedTab:HOME}

  }

    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab === tag}
                renderIcon={() => <Image style={styles.tabIcon} source={img}/>}
                renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg}/>}
                onPress={() => this.setState({ selectedTab: tag })}>
                {childView}
            </TabNavigator.Item>
        );
    }

    static _createChildView(tag) {
        return (
            <View style={{flex:1,backgroundColor:'#fff',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        )
    }

  render() {
    return (
        <View style={{flex:1}}>
            <NavBar>
                <NavButton onPress={() => alert('hi')}>
                    <NavButtonText>
                        {"返回"}
                    </NavButtonText>
                </NavButton>
                <NavTitle>
                    {"爱上课"}
                </NavTitle>
                <NavButton onPress={() => alert('hi')}>
                    <NavButtonText>
                        {"搜索"}
                    </NavButtonText>
                </NavButton>
            </NavBar>
            <TabNavigator>
                {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, rnApp._createChildView(HOME))}
                {this._renderTabItem(LIST_NORMAL, LIST_FOCUS, LIST, rnApp._createChildView(LIST))}
                {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, rnApp._createChildView(CATEGORY))}
                {this._renderTabItem(DOWNLOAD_NORMAL, DOWNLOAD_FOCUS, DOWNLOAD, rnApp._createChildView(DOWNLOAD))}
            </TabNavigator>
        </View>

    );

  }
}

const styles = StyleSheet.create({
    tab: {
        height: 70,
        backgroundColor: '#303030',
        alignItems: 'center',
    },
    tabIcon: {
        width: 40,
        height: 40,
        resizeMode: 'stretch',
        marginTop: 5
    }
});

AppRegistry.registerComponent('rnApp', () => rnApp);
