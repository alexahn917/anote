import React, {Component} from 'react';
import {
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text
} from 'native-base';
import HashCard from "./HashCard";

export default class CardList extends Component {
  render() {
    return (
        <Content>
          <HashCard title={'# Love'} text={'where is the love?'} number={38153}/>
          <HashCard title={'# School'} text={'JHU is better than Stanford'} number={10953}/>
          <HashCard title={'# Trump'} text={'vs. Kim'} number={44414}/>
        </Content>
    );
  }
}