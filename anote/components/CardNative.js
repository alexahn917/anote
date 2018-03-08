import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail
} from 'native-base';

export default class CardNative extends Component {
  render() {
    return (
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail
                    source={{uri: 'https://images.pexels.com/photos/5390/sunset-hands-love-woman.jpg?w=800&h=1200&fit=crop&auto=compress&cs=tinysrgb'}}/>
                <Body>
                  <Text>Love</Text>
                  <Text note>March 15, 2018</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image
                    source={{uri: 'https://images.pexels.com/photos/5390/sunset-hands-love-woman.jpg?w=800&h=1200&fit=crop&auto=compress&cs=tinysrgb'}}
                    style={{height: 200, width: 300, flex: 1}}/>
                <Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Right>
                  <Button transparent iconLeft textStyle='#ffffff'>
                    <Icon style={{color: 'teal'}} name="ios-people"/>
                    <Text style={{color: 'teal'}}>1,926 notes</Text>
                  </Button>
                </Right>
              </Left>
            </CardItem>
          </Card>
        </Content>
    );
  }
};