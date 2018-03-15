import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const mapStateToProps = state => ({
  foo: state.foo,
});

const propTypes = {
  foo: PropTypes.string.isRequired,
};

class ScreenPlaceholder extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          foo: {this.props.foo}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
  },
});

ScreenPlaceholder.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(ScreenPlaceholder);
