import React, { Component } from 'react';
import { StyleSheet, Platform, View, ActivityIndicator, TouchableWithoutFeedback,FlatList, TouchableHighlight,Text, Image, Alert, YellowBox } from 'react-native';
import {createStackNavigator,} from 'react-navigation';

import * as actions from '../../../actions/actionAxe';
import actionTypes from '../../../actions/actionTypes';
import { connect } from 'react-redux';  


//NOTE :
//This class is a mixture of DUMB and Smart Component
//By right presentational layer and business layer should have a difference



class HomeScreen extends Component {

// TODO : Make these as DUMB Components
 FlatListItemSeparator = () => {
   return (
     <View
     style={{
       height: .5,
       width: "100%",
       backgroundColor: "#000",
     }}
     />
     );
 }

  render() {
  
   const {dataSource} = this.props



   return (

      <View>
        <FlatList
        data={ this.props.dataSource }
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem={({item}) => 
        <TouchableWithoutFeedback>    
            <View style={{flex:1, flexDirection: 'row'}}>
             <Text 
              style= {styles.textView} >{item.name}</Text>
              <Text 
              style= {styles.textView} >{item.grade}</Text>
             </View>
         </TouchableWithoutFeedback>   
          }
 
        keyExtractor={(item, index) => index.toString()}
        
        />
     </View>

    );
  }
}


 
 const styles = StyleSheet.create({

  MainContainer :{

    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,

  },

  imageView: {

    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7

  },

  textView: {

    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'

  }

});



//Container Hooking

 const mapStateToProps = (state) => {
  return {    
    dataSource : state.netgroup

  };
};




const mapDispatchToProps = (dispatch) => {

  dispatch(actions.getRahul())
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);