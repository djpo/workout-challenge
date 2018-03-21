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
  participants: state.workouts.find(workout => workout.date === state.selectedWorkout).participants,
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  selectedWorkout: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    checkedIn: PropTypes.bool.isRequired,
  })).isRequired,
};

class Workout extends Component {
  render() {
    const participantRows = this.props.participants.map(participant => (
      <View key={participant.name} style={styles.participantRow}>
        <Text>{participant.name}</Text>
        <Text>{participant.checkedIn ? 'checked in' : 'not checked in'}</Text>
      </View>
    ));

    return (
      <View style={styles.container}>
        <Text>Workout screen</Text>

        <Text style={styles.text}>
          selectedWorkout: {this.props.selectedWorkout}
        </Text>

        {participantRows}
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
  participantRow: {
    margin: 2,
    borderWidth: 1,
  },
});

Workout.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(Workout);
