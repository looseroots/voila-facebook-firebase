import React, {Component} from 'react';
import { 
  Text, 
  View, 
  StyleSheet, 
  TouchableOpacity, 
  Image
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 

export default class EventPane extends React.Component {
  constructor(props){
    super(props);
  }
  
  _onPress = () => {  
    // color_theme = this.props.action_data['color']
    // this.props.navigation('Contact', {color: color_theme})
  };

  render(){
    
    event_name = this.props.event_data['name'];
    event_type = this.props.event_data['type'];
    event_subtitle = this.props.event_data['subtitle'];
    event_address = this.props.event_data['address'];
    event_photoURL = this.props.event_data['photoURL'];

    // <Text style={styles.headerTextType}>{event_subtitle}</Text>
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.main}>
          <LinearGradient
            colors={['rgba(0,0,0,.8)', 'rgba(0,0,0,0)']}
            style={styles.paneHeaderContainer}>
            <Text style={styles.headerTextName}>{event_name}</Text>
            <Text style={styles.headerTextAddress}>{event_address}</Text>
          </LinearGradient>

          <View style={styles.paneImageContainer}>
            <Image resizeMode="cover" style={styles.paneImage}
                   source={{ uri: event_photoURL }}/>
          </View>

          <View style={styles.paneFooterContainer}>
            <Text style={styles.paneFooterText1}>Save</Text>
            <Text style={styles.paneFooterText2}>More</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
	}
}

const styles = StyleSheet.create({
  main: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 12,
    height: 260,
    borderRadius: 2,
    backgroundColor: "white",
    shadowOffset:{  width: .1 ,  height: .5,  },
    shadowColor: 'rgb(230, 230, 230)',
    shadowOpacity: .8,
    overflow: 'hidden',
  },
  paneHeaderContainer: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    height: '40%',
    width: '100%',
    zIndex: 1,
    paddingTop: '2%',
    paddingLeft: '3%',
  },
  paneFooterContainer: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white', 
    height: '16%',
    width: '100%',
    zIndex: 1,
    shadowOffset:{  width: .2 ,  height: .2,  },
    shadowColor: 'black',
    shadowOpacity: 1,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paneFooterText1: {
    color: 'green',
    fontFamily: 'System',
    fontSize: 16, 
    fontWeight: '300',
  },
  paneFooterText2: {
    color: 'grey',
    fontSize: 16, 
    fontFamily: 'System',
    fontWeight: '400',
  },
  paneImageContainer: {
    flex: 1,
    width: '100%', 
  },
  paneImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: undefined,
    width: undefined,
  },
  headerTextName: {
    // color: 'rgb(68, 73, 84)',
    color: 'white',
    fontSize: 26,
    fontFamily: 'System',
    fontWeight: '400',
  },
  headerTextType: {
    color: '#e91e63',
    fontSize: 14,
    fontFamily: 'System',
    fontWeight: 'bold',
  },
  headerTextAddress: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'System',
    // fontWeight: 'bold',
  },
})
