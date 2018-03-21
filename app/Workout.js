import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
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
    const participantRows = this.props.participants.map((participant) => {
      if (participant.checkedIn) {
        return ( // without 'check in' button
          <View key={participant.name} style={styles.participantRow}>
            <Text style={styles.name}>{participant.name} (checked in)</Text>
          </View>
        );
      }

      return ( // with 'check in' button
        <View key={participant.name} style={styles.participantRow}>
          <Text style={styles.name}>{participant.name}</Text>
          <Button
            title={'check in'}
            onPress={() => console.log(`${participant.name} to be checked in`)}
          />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text style={styles.text}>selectedWorkout: {this.props.selectedWorkout}</Text>

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
    flexDirection: 'row',
  },
  name: {
    color: 'red',
  },
});

Workout.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(Workout);
