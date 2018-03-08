import React, {Component} from 'react';
import {
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Left,
  Right,
  // Icon,
  Text
} from 'native-base';

export default class HashCard extends Component {

  render() {
    return (
        <Card>
          <CardItem header>
            <Text>{this.props.title}</Text>
          </CardItem>
          <CardItem>
            <Text>{this.props.text}</Text>
            <Left />
            <Right /><Text>{this.props.number}</Text>
          </CardItem>
        </Card>
    );
  }
}