import React, {Component} from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/Home";
import User from "./screens/User";
import Detail from "./screens/Detail";
import InputCourses from "./InputCourses";



export default class App extends Component{
    render(){
        return (
            <AppContainer />
        );
    }
}
const AppNavigator = createStackNavigator({
    Home:{
        screen: Home
    },
    Detail:{
        screen: Detail
    },
    User:{
        screen: User
    },
},
    {
        initialRouteName: "Home"
    }
);
const AppContainer = createAppContainer(AppNavigator);