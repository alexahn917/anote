import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import CardList from "./components/CardList";
import CardShowcase from "./components/CardNative";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Container>
          <Header>
            <Left>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Left>
            <Body>
              <Title>Anote</Title>
            </Body>
            <Right />
          </Header>
          <Content>
            <CardList />
            <CardShowcase />
          </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
