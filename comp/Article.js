import React from 'react';
import { View, Linking, TouchableNativeFeedback,Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text } from 'native-base';
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
      <Container>
        <Content>
          <Card style={{paddingBottom:0}}>
          <TouchableNativeFeedback
        useForeground
        onPress={() => Linking.openURL(url)}>
            <CardItem>
            <Body>
            <Text>
                   {title}
                </Text>
              <Image source={{uri:urlToImage}} style={{width:400,height:200}}/>
              <Text>{source.name.toUpperCase()}</Text>
            <Text>{time}</Text>
            </Body>
            </CardItem>
            </TouchableNativeFeedback>
          </Card>
        </Content>
        </Container>
       
    );
  }
}

