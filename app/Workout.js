import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selectedWorkout: state.selectedWorkout,
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  selectedWorkout: PropTypes.string.isRequired,
};

class Workout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout screen</Text>

        <Text style={styles.text}>
          selectedWorkout: {this.props.selectedWorkout}
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
    backgroundColor: 'lightyellow',
  },
  text: {
    margin: 5,
    textAlign: 'center',
    color: '#333333',
  },
});

Workout.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(Workout);
