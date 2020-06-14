/* eslint-disable react/no-did-mount-set-state */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
// import AsyncStorage
import AsyncStorage from '@react-native-community/async-storage';
// import icons
import Icon from 'react-native-vector-icons/Ionicons';
// import Swiper
import Swiper from 'react-native-swiper';
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
import {COLOR_FACEBOOK, COLOR_YELLOW} from '../../styles/colors';

var {width} = Dimensions.get('window');
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataBanner: [],
      dataCategories: [],
      dataFood: [],
      selectCatg: 0,
    };
  }
  async componentDidMount() {
    const url = 'https://tutofox.com/foodapp/api.json';
    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataBanner: responseJson.banner,
        dataCategories: responseJson.categories,
        dataFood: responseJson.food,
      });
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: COLOR_YELLOW}}>
          <View style={{width: width, alignItems: 'center'}}>
            <Image
              style={styles.header}
              resizeMode="stretch"
              source={require('../../assets/banner.jpg')}
            />
            <Swiper
              style={{height: width / 2}}
              showsButtons={false}
              autoplay={true}
              autoplayTimeout={1}>
              {this.state.dataBanner.map((itembann) => {
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
              Categories {this.state.selectCatg}
            </Text>
            <FlatList
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
            />
            <View style={{height: 20}} />
          </View>
        </View>
      </ScrollView>
    );
  }

  _renderItemFood(item) {
    let catg = this.state.selectCatg;
    if (catg === 0 || catg === item.categorie) {
      return (
        <TouchableOpacity style={styles.divFood}>
          <Image
            style={styles.imageFood}
            resizeMode="contain"
            source={{uri: item.image}}
          />
          <View
            style={{
              height: width / 2 - 20 - 90,
              backgroundColor: 'transparent',
              width: width / 2 - 20 - 10,
            }}
          />
          <Text style={{fontWeight: 'bold', fontSize: 22, textAlign: 'center'}}>
            {item.name}
          </Text>
          <Text>Description Food and Details</Text>
          <Text style={styles.priceFood}>${item.price}</Text>
          <TouchableOpacity
            onPress={() => this.onClickAddCart(item)}
            style={{
              width: width / 2 - 40,
              backgroundColor: COLOR_FACEBOOK,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              padding: 4,
            }}>
            <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
              Add Cart
            </Text>
            <View style={{width: 10}} />
            <Icon name="ios-add-circle" size={30} color={'white'} />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
  }

  _renderItem(item) {
    return (
      <TouchableOpacity
        style={[styles.divCategorie, {backgroundColor: item.color}]}
        onPress={() => this.setState({selectCatg: item.id})}>
        <Image
          style={{
            width: 100,
            height: 80,
          }}
          resizeMode="contain"
          source={{uri: item.image}}
        />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  onClickAddCart(data) {
    const itemcart = {
      food: data,
      quantity: 1,
      price: data.price,
    };

    AsyncStorage.getItem('cart')
      .then((dataCart) => {
        if (dataCart !== null) {
          // We have data!!
          const cart = JSON.parse(dataCart);
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        } else {
          const cart = [];
          cart.push(itemcart);
          AsyncStorage.setItem('cart', JSON.stringify(cart));
        }
        alert('Add Cart');
      })
      // .then(this.navigation.navigate('CartStackScreen'))
      .catch((err) => {
        alert(err);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
