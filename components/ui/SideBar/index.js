import React from 'react';
import { Image } from 'react-native';
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left
} from 'native-base';
import styles from './style';

const drawerCover = 'https://s3-ap-northeast-1.amazonaws.com/qoodish/substitute.png';
const drawerImage = 'https://s3-ap-northeast-1.amazonaws.com/qoodish/substitute.png';
const routes = [
  {
    name: 'Home',
    route: 'Timeline',
    icon: 'home',
    bg: '#C5F442'
  },
  {
    name: 'Profie',
    route: 'Profile',
    icon: 'account-circle',
    bg: '#C5F442'
  },
  {
    name: 'Settings',
    route: 'Settings',
    icon: 'settings',
    bg: '#C5F442'
  }
];

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={styles.content}
        >
          <Image source={{uri: drawerCover}} style={styles.drawerCover} />
          <Image source={{uri: drawerImage}} style={styles.drawerImage} square />

          <List>
            {this.renderRoutes()}
          </List>
        </Content>
      </Container>
    );
  }

  renderRoutes() {
    return routes.map((route => (
      <ListItem
        key={route.name}
        button
        noBorder
        onPress={() => {
          this.props.navigation.navigate(route.route);
          this.props.navigation.closeDrawer();
        }}
      >
        <Left>
          <Icon
            active
            name={route.icon}
            style={styles.leftIcon}
          />
          <Text style={styles.text}>
            {route.name}
          </Text>
        </Left>
      </ListItem>
    )));
  }
}

export default SideBar;
