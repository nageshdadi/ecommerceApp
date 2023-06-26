/* eslint-disable react/react-in-jsx-scope */
import {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableHighlight,
} from 'react-native';

interface IProps {
  navigation?: any;
}
interface IState {
  dataList: any[];
  searchInput: string;
  isDisplayPrice: boolean;
  isDisplayCategery: boolean;
  shortedData: string;
}

type ItemProps = {data: any; navigate: any};

const Item = ({data, navigate}: ItemProps) => {
  const imageUrl: string = data.images[0];
  return (
    <View>
      <TouchableOpacity
        style={styles.itemCrad}
        onPress={() => {
          navigate('prodectIrem', {...data});
        }}>
        <Image style={styles.itemImage} source={{uri: `${imageUrl}`}} />
        <View style={styles.contentCrad}>
          <Text style={styles.titleText}>{data.title}</Text>
          <Text style={styles.itemSideHead}>
            Rating: <Text style={styles.itemDescription}>{data.rating}</Text>
          </Text>
          <Text style={styles.itemSideHead}>
            Price: <Text style={styles.itemPrice}>${data.price}</Text>
          </Text>
          <Text style={styles.viewMoreText}>View More ---</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

class Home extends Component<IProps, IState> {
  state = {
    dataList: [],
    searchInput: '',
    isDisplayPrice: false,
    isDisplayCategery: false,
    shortedData: '',
  };

  componentDidMount(): void {
    this.getData();
  }
  getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    if (response.ok) {
      const data = await response.json();
      this.setState({dataList: data.products});
    }
  };
  onChangeSearch = (newText: string) => {
    this.setState({searchInput: newText});
  };
  render() {
    const navigate: any = this.props.navigation.navigate;
    const {
      searchInput,
      dataList,
      isDisplayPrice,
      isDisplayCategery,
      shortedData,
    } = this.state;
    const filterData = dataList.filter((each: any) =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    );

    switch (shortedData) {
      case 'priceLtoH':
        filterData.sort((a: {price: number}, b: {price: number}) => {
          if (a.price < b.price) {
            return -1;
          }
          if (a.price > b.price) {
            return 1;
          }
          return 0;
        });
        break;
      case 'priceHtoL':
        filterData.sort((a: {price: number}, b: {price: number}) => {
          if (a.price > b.price) {
            return -1;
          }
          if (a.price < b.price) {
            return 1;
          }
          return 0;
        });
        break;
      case 'cetegoryAtoZ':
        filterData.sort((a: {title: string}, b: {title: string}) => {
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() > b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        break;
      case 'cetegoryZtoA':
        filterData.sort((a: {title: string}, b: {title: string}) => {
          if (a.title.toLowerCase() > b.title.toLocaleLowerCase()) {
            return -1;
          }
          if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return 1;
          }
          return 0;
        });
        break;
    }
    return (
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.homeCrad}>
          <Text style={styles.homeText}>@GoCrat</Text>
          <View style={styles.searchCrad}>
            <TextInput
              style={styles.inputSearch}
              placeholder="Search for Product"
              onChangeText={this.onChangeSearch}
            />
            <Text style={{fontSize: 25}}>&#x261A;</Text>
          </View>
          {this.state.dataList.length > 0 && (
            <FlatList
              data={filterData}
              renderItem={({item}: {item: any}) => (
                <Item data={item} navigate={navigate} />
              )}
              keyExtractor={item => item.id}
            />
          )}
        </View>
        <View style={styles.bottomCard}>
          {isDisplayPrice && (
            <View style={styles.ShortCrad}>
              <Text style={styles.shortByText}>Short By</Text>
              <TouchableHighlight
                style={styles.shorByBtn}
                onPress={() => {
                  this.setState({
                    shortedData: 'priceLtoH',
                    isDisplayPrice: false,
                  });
                }}>
                <Text style={styles.shorByBtnText}>Price -- Low to High</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.shorByBtn}
                onPress={() => {
                  this.setState({
                    shortedData: 'priceHtoL',
                    isDisplayPrice: false,
                  });
                }}>
                <Text style={styles.shorByBtnText}>Price -- High to Low</Text>
              </TouchableHighlight>
            </View>
          )}
          {isDisplayCategery && (
            <View style={styles.ShortCrad}>
              <Text style={styles.shortByText}>Short By</Text>
              <TouchableHighlight
                style={styles.shorByBtn}
                onPress={() => {
                  this.setState({
                    shortedData: 'cetegoryAtoZ',
                    isDisplayCategery: false,
                  });
                }}>
                <Text style={styles.shorByBtnText}>category -- A to Z</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.shorByBtn}
                onPress={() => {
                  this.setState({
                    shortedData: 'cetegoryZtoA',
                    isDisplayCategery: false,
                  });
                }}>
                <Text style={styles.shorByBtnText}>category -- Z to A</Text>
              </TouchableHighlight>
            </View>
          )}
          <View style={styles.BtnCard}>
            <TouchableOpacity
              style={styles.fitlerBtn}
              onPress={() => {
                this.setState({
                  isDisplayPrice: !isDisplayPrice,
                  isDisplayCategery: false,
                });
              }}>
              <Text style={styles.filteredText}>Price By</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.fitlerBtn}
              onPress={() => {
                this.setState({
                  isDisplayCategery: !isDisplayCategery,
                  isDisplayPrice: false,
                });
              }}>
              <Text style={styles.filteredText}>Catogere By</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  homeCrad: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 130,
  },
  homeText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    width: '100%',
    color: '#ffffff',
    padding: 10,
  },
  itemCrad: {
    backgroundColor: '#e7e4dc',
    marginBottom: 15,
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
  },
  itemImage: {
    height: 150,
    width: 150,
    borderRadius: 5,
    marginRight: 10,
  },
  contentCrad: {
    width: 160,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    color: '#0c0902',
  },
  itemDescription: {
    fontSize: 16,
    color: '#f7a92a',
  },
  itemPrice: {
    fontSize: 20,
    color: '#0f961a',
  },
  itemSideHead: {
    color: '#5a3a17',
  },
  viewMoreText: {
    fontSize: 18,
    color: '#0f43bd',
  },
  searchCrad: {
    borderColor: '#5a5d63',
    borderWidth: 1,
    height: 40,
    marginBottom: 10,
    width: 330,
    backgroundColor: '#ebecf0',
    borderRadius: 10,
    flexDirection: 'row',
  },
  inputSearch: {
    width: 280,
  },
  bottomCard: {
    width: '100%',
    backgroundColor: '#000000',
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
  fitlerBtn: {
    fontWeight: '300',
    width: 100,
    color: '#ffffff',
    borderColor: '#ebeef5',
    borderWidth: 1,
    padding: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 30,
    marginLeft: 30,
  },
  filteredText: {
    fontSize: 15,
    color: '#ffffff',
  },
  BtnCard: {
    flexDirection: 'row',
    width: 330,
  },
  ShortCrad: {
    backgroundColor: '#ffffff',
    width: 300,
    marginLeft: 30,
    marginBottom: 20,
    borderRadius: 10,
    padding: 20,
  },
  shortByText: {
    textAlign: 'center',
    width: 250,
    padding: 5,
    borderBottomColor: '#797b80',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  shorByBtn: {
    margin: 10,
    height: 30,
    justifyContent: 'center',
    paddingLeft: 10,
    borderRadius: 10,
  },
  shorByBtnText: {
    color: '#0664c9',
  },
});

export default Home;
