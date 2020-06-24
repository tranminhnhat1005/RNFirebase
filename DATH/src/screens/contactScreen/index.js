import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {
  COLOR_FACEBOOK,
  COLOR_LIGHT_GREY,
  COLOR_SPLASH_BG,
  COLOR_RED,
  COLOR_YELLOW,
} from '../../styles/colors';
// const width = Dimensions(width);
const ContactScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Image
          style={styles.img_map}
          source={require('../../assets/map_ex.png')}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.info_img}>
          <Image
            style={styles.img_info}
            source={require('../../assets/location.png')}
          />
          <Image
            style={styles.img_info}
            source={require('../../assets/mail.png')}
          />
          <Image
            style={styles.img_info}
            source={require('../../assets/phone.png')}
          />
        </View>
        <View style={styles.info_text}>
          <Text style={styles.text_info}>
            179/9/12A Dang Thuy Tram St, Binh Thanh Dist
          </Text>
          <Text style={styles.text_info}>tranminhnhat1005@gmail.com</Text>
          <Text style={styles.text_info}>(+84) 941514181</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  map: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_map: {
    // height: 400,
    flex: 1,
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
  },
  info_text: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  info_img: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  text_info: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingRight: 15,
  },
  img_info: {
    paddingLeft: 15,
  },
});

export default ContactScreen;
