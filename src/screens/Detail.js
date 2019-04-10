import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ListView} from 'react-native';

var URL = 'http://localhost:8888/react-web-service/webservice.php';

export default class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            dataSource: new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
        }
    }
    taoHang(property){
        return(
            <View style={styles.hang}>
                
                <View style={styles.monhoc}>
                    <Text>{property.monhoc}</Text>
                </View>
                
                <View style={styles.hocphi}>
                    <Text>{property.hocphi}</Text>
                </View>
            </View>
        );
    }
    fetchData(){
        fetch(URL, {method: "POST", body: null})
        .then((response) => response.json())
        .then((responseData) => {
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(responseData)
            })
        })
        .done()
    }
    componentDidMount(){
        this.fetchData();
    }
    render(){
        return(
            <View>
                <Text style={{textAlign: 'center', fontWeight: 'bold',backgroundColor: '#329BCB', padding: 20, marginBottom: 5}}>Detail</Text>
                <View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this.taoHang}
                    />
                    <Button 
                        title="Go to Details... again"
                        onPress={() => this.props.navigation.push("Detail")}
                    />
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hang:{
        flexDirection:'row'
    },
    monhoc:{
        flex: 3,
        justifyContent: 'center',
        padding: 5,
    }, 
    hocphi:{
        flex: 1,
        justifyContent: 'center',
        padding: 5,
    }, 
    
})
    
