# react-navigation-options-from
Get react-navigation options from nested navigators

Created to help preserve functionality of nested navigators when upgrading to react-navigation v2. See [react-navigation #4309](https://github.com/react-navigation/react-navigation/pull/4309) for more details.

``` javascript
import getNavigationOptionsFrom from "react-navigation-options-from";

const tabs = {
  MainTab: {
    screen: MyHomeScreen,
    path: '/',
    navigationOptions: {
      ...
    },
  },
  SettingsTab: {
    screen: MySettingsScreen,
    path: '/settings',
    navigationOptions: {
      ...
    },
  },
};

const TabNav = createBottomTabNavigator(tabs, {
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
});

// everything above remains unchanged
// this line is added to inherit navigation options
TabNav.navigationOptions = getNavigationOptionsFrom(tabs);

const StacksOverTabs = createStackNavigator({
  Root: {
    screen: TabNav,
  },
});
```
