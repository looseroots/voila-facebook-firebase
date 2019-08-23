import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

export default class CreatePlanButton extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity
        onPress={() => {this.props.navigation.navigate('CreatePlan');}}
      >
        <View style={styles.buttonContainer}>
          {/***************************/}
          {/* <Text style={{          */}
          {/*   color: 'white',       */}
          {/*   fontFamily: 'System', */}
          {/*   fontWeight: '300',    */}
          {/*   fontSize: 22 ,        */}
          {/* }}>                     */}
          {/*   +                     */}
          {/* </Text>                 */}
          {/***************************/}
          <Text style={{
            color: 'white',
            fontFamily: 'System',
            fontWeight: '500',
            fontSize: 14,
          }}>Plan</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    width: 70,
    height: 70,
    borderRadius: 35,
   
    zIndex: 1,
    backgroundColor: '#5677fc',

    justifyContent: 'center',
    alignItems: 'center',

    
    borderColor: 'rgba(0, 0, 0, .05)',
    borderWidth: 3,
        
  }
})
