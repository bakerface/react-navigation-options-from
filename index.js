module.exports = function (children) {
  return function (props) {
    var state = props.navigation.state;
    var routeName = state.routes[state.index];
    var route = children[routeName];

    var navigationOptions =
      (route && route.navigationOptions) ||
      (route && route.screen && route.screen.navigationOptions);

    if (typeof navigationOptions === "function") {
      return navigationOptions(props);
    }

    return navigationOptions;
  };
};
