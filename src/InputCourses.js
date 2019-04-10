import React, {Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput, Button
} from 'react-native';

var URL = 'http://localhost:8888/react-web-service/NhapMonHoc.php';

export default class InputCourses extends Component{
    nhapMonHoc(monhoc, hocphi){
        fetch(URL, {method: "POST", body: JSON.stringify({MonHoc: monhoc, HocPhi: hocphi})})
        .then((response) => response.text())
        .then((responseData) => {
            alert("Thanh cong");
            
        })
        .done()
    }

    constructor(props){
        super(props);
        this.state = {
            monhoc: '',
            hocphi: ''
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({monhoc: text})}
                    value = {this.state.monhoc}
                    placeholder = 'Nhap mon hoc:'
                />
                <TextInput style={styles.textInput}
                    onChangeText={(text) => this.setState({hocphi: text})}
                    value = {this.state.hocphi}
                    placeholder = 'Nhap hoc phi'
                />

                <Button title="Submit" 
                    onPress={() => this.nhapMonHoc(this.state.monhoc, this.state.hocphi)}
                />
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center'
    },
    textInput: {
        height: 45,
        borderColor: '#09C',
        borderWidth: 1,
        marginTop: 5
    }
})