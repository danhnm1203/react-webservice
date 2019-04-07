import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                <Text>Home</Text>
                <Button 
                    title="Go to detail" 
                    onPress={() => this.props.navigation.navigate('Detail')}
                />
                <Button 
                    title="Go to user!" 
                    onPress={() => this.props.navigation.navigate('User')}
                />
            </View>
        );
    }
}