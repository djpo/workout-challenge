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
  workouts: state.workouts,
  selectedWorkout: state.selectedWorkout,
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  workouts: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedWorkout: PropTypes.string.isRequired,
};

class Workout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout screen</Text>
        <Text style={styles.text}>
          workouts: {this.props.workouts}
        </Text>
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
    backgroundColor: '#555BBB',
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
