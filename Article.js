/*the article component is simply
  card component (from native-base) wrapped in a
  TouchableNativeFeedback with some props from the FlatList
*/

import React from 'react';
import { View, Linking, TouchableNativeFeedback,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text,
  Left, Right
 } from 'native-base';
import moment from 'moment';

export default class Article extends React.Component {
  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url
    } = this.props.article;

    const time = moment(publishedAt || moment.now()).fromNow();
    return (
      <View style={{paddingBottom:0}}>
        <TouchableNativeFeedback
          useForeground
          onPress={() => Linking.openURL(url)}>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   {title}
                </Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri:urlToImage}} style={{width:400,height:200}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{source.name.toUpperCase()}</Text>
              </Body>
              <Right>
                <Text note>{time}</Text>
              </Right>
            </CardItem>
          </Card>
        </TouchableNativeFeedback>
      </View>
    );
  }
}
