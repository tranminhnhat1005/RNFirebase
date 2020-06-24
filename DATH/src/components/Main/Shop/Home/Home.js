import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';
var {width} = Dimensions.get('window');
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLOR_YELLOW} from '../../../../styles/colors';

export default class Home extends Component {
  render() {
    const {dataBanner} = this.props;
    return (
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <View style={styles.container_view}>
            <Image
              style={styles.header}
              resizeMode="stretch"
              source={require('../../../../assets/banner.jpg')}
            />
            <Swiper
              style={{height: width / 2}}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={1}>
              {dataBanner.map((itembann) => {
                return (
                  <Image
                    style={styles.imageBanner}
                    resizeMode="contain"
                    source={{uri: itembann}}
                  />
                );
              })}
            </Swiper>
            <View style={{height: 20}} />
          </View>

          <View
            style={{
              width: width,
              borderRadius: 20,
              paddingVertical: 20,
              backgroundColor: 'white',
            }}>
            <Text style={styles.titleCatg}>
              Categories
              {/* Categories {this.state.selectCatg} */}
            </Text>
            {/* <FlatList
              horizontal={true}
              data={this.state.dataCategories}
              renderItem={({item}) => this._renderItem(item)}
              keyExtractor={(item, index) => index.toString()}
            />
            <FlatList
              //horizontal={true}
              data={this.state.dataFood}
              numColumns={2}
              renderItem={({item}) => this._renderItemFood(item)}
              keyExtractor={(item, index) => index.toString()}
            /> */}
            <View style={{height: 20}} />
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: COLOR_YELLOW,
  },
  container_view: {
    width: width,
    alignItems: 'center',
  },
  header: {
    height: 225,
    width: width,
    marginBottom: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    flex: 1,
    backgroundColor: 'red',
    margin: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  imageFood: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: -45,
  },
  priceFood: {
    color: 'forestgreen',
    fontSize: 22,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  divFood: {
    flex: 1,
    flexDirection: 'column',
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 10,
    shadowOpacity: 0.45,
    shadowRadius: 50,
    backgroundColor: COLOR_YELLOW,
  },
});
