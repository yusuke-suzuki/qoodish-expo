import React from 'react';
import {
  Text,
  Button,
  Icon,
  Footer,
  FooterTab
} from 'native-base';

export default class BottomNav extends React.Component {
  render() {
    return (
      <Footer>
        {this.props.navigationState}
        <FooterTab>
          <Button
            vertical
            //active={this.props.navigationState.index === 0}
            onPress={() => this.props.navigation.navigate('Timeline')}
          >
            <Icon name='home' />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            //active={this.props.navigationState.index === 1}
            onPress={() => this.props.navigation.navigate('Discover')}
          >
            <Icon name='explore' />
            <Text>Discover</Text>
          </Button>
          <Button
            vertical
            //active={this.props.navigationState.index === 2}
            onPress={() => this.props.navigation.navigate('Maps')}
          >
            <Icon active name='map' />
            <Text>Maps</Text>
          </Button>
          <Button
            vertical
            //active={this.props.navigationState.index === 3}
            onPress={() => this.props.navigation.navigate('Notifications')}
          >
            <Icon name='notifications' />
            <Text>Notice</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}
