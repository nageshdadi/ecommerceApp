/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

interface IProps {
  navigation?: any;
  route?: any;
}
class ProdectItem extends Component<IProps> {
  render() {
    const ItemDetails = this.props.route.params;
    const imageUrl: string = ItemDetails.images[0];
    console.log(ItemDetails);
    return (
      <SafeAreaView style={styless.mainContainers}>
        <View style={styless.prodectItemCard}>
          <Text style={styless.prodectItemText}>Prodect Item Details</Text>
          <ScrollView style={styless.ItemScrollCrad}>
            <View style={styless.ItemMainScrollCrad}>
              <View style={styless.ItemCrad}>
                <Image
                  style={styless.itemImage}
                  source={{uri: `${imageUrl}`}}
                />
                <Text style={styless.titleText}>{ItemDetails.title}</Text>
                <Text style={styless.priceText}>
                  Amount: ${ItemDetails.price}
                </Text>
                <View style={styless.itemDeatisCrad}>
                  <Text style={styless.ratingText}>
                    {ItemDetails.rating}&#x22C6;
                  </Text>
                  <Text style={styless.brandText}>
                    Brand: {ItemDetails.brand}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={styless.allOffersText}>All Offers & Coupens </Text>
                <Text>stock: {ItemDetails.stock}</Text>
                <Text>
                  category:{' '}
                  <Text style={styless.catregoryText}>
                    {ItemDetails.category}
                  </Text>
                </Text>
                <Text>Brand: {ItemDetails.brand}</Text>
                <Text style={styless.descriptionHead}>Description:</Text>
                <Text>{ItemDetails.description}</Text>
                <Text style={styless.freeDeliverText}>Free Delivery</Text>
                <Text>Delivered in 2 Days</Text>
                <View style={styless.deleveryCrad}>
                  <View style={styless.deleverSmallCread}>
                    <Text style={styless.textDelever}>7 Days Replacement</Text>
                  </View>
                  <View style={styless.deleverSmallCread}>
                    <Text style={styless.textDelever}>
                      Cash on delivery available
                    </Text>
                  </View>
                  <View style={styless.deleverSmallCread}>
                    <Text style={styless.textDelever}>Plus F-Assured</Text>
                  </View>
                </View>
                <Text>
                  Buy Now and Pay Later with EMI{' '}
                  <Text style={styless.activeText}>Active Now</Text>
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={styless.bottomCard}>
            <TouchableHighlight style={styless.cartBtn}>
              <Text style={styless.btnText}>Add To Crat</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styless.buyNowBtn}>
              <Text style={styless.btnText}>Buy Now</Text>
            </TouchableHighlight>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styless = StyleSheet.create({
  mainContainers: {
    flex: 1,
  },
  prodectItemCard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  prodectItemText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    width: '100%',
    color: '#ffffff',
    padding: 10,
  },
  ItemScrollCrad: {
    flex: 1,
  },
  ItemMainScrollCrad: {
    paddingBottom: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
  ItemCrad: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    height: 400,
    width: 300,
    margin: 15,
  },
  titleText: {
    fontSize: 30,
    color: '#000000',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 30,
    color: '#FFFFFF',
    marginBottom: 10,
    backgroundColor: '#8dbf29',
    padding: 10,
    borderRadius: 10,
  },
  itemDeatisCrad: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    width: 300,
    marginBottom: 10,
    marginTop: 10,
  },
  ratingText: {
    fontSize: 20,
    color: '#ffffff',
    backgroundColor: '#f0b402',
    textAlign: 'center',
    padding: 7,
    borderRadius: 7,
    marginRight: 10,
  },
  descriptionHead: {
    fontSize: 20,
    color: '#055df5',
    marginTop: 10,
  },
  brandText: {
    fontSize: 20,
    width: 180,
  },
  cartBtn: {
    width: 140,
    backgroundColor: '#b6c495',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 30,
  },
  buyNowBtn: {
    width: 130,
    backgroundColor: '#fac904',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
    fontSize: 20,
  },
  bottomCard: {
    width: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    flexDirection: 'row',
  },
  freeDeliverText: {
    color: '#04801f',
    fontSize: 18,
    marginTop: 20,
  },
  deleveryCrad: {
    width: 330,
    borderWidth: 2,
    borderColor: '#acb5ae',
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
  },
  deleverSmallCread: {
    width: 110,
    padding: 10,
    borderWidth: 2,
    borderColor: '#acb5ae',
  },
  textDelever: {
    fontSize: 18,
  },
  allOffersText: {
    fontSize: 20,
    width: 330,
    padding: 8,
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#acb5ae',
    marginTop: 10,
    marginBottom: 10,
  },
  catregoryText: {
    fontSize: 20,
    color: '#e8b41a',
  },
  activeText: {
    color: '#0b4cbd',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
  },
});
const style = StyleSheet.
export default ProdectItem;
