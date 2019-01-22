import React, { Component } from 'react';
import * as actions from '../../../actions/actionAxe';
import actionTypes from '../../../actions/actionTypes';

import {ART} from 'react-native';

import { connect } from 'react-redux';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
   TouchableWithoutFeedback,
  FlatList,
  View,
  Button,
} from 'react-native';
import Camera from '../../common/Camera';
import {  Easing } from "react-native";




export default class CameraScreen extends Component {


//!!percentage_marks || percentage_marks === 0
  render() {
    /*const {radius, ...rest} = this.props

    const circle = ART.Path()
      .moveTo(0, -radius)
        .arc(0, radius * 2, radius)
        .arc(0, radius * -2, radius)

    return <ART.Shape {...rest} d={circle} />*/

     return  (

       

       <Text> 
        Not much info about ART and Animation library
       </Text>


      );
  }

}



