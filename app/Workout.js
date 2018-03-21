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
import { checkIn } from './redux/actions';

const mapStateToProps = state => ({
  selectedWorkout: state.selectedWorkout,
  participants: state.workouts.find(workout => workout.date === state.selectedWorkout).participants,
});

const mapDispatchToProps = dispatch => ({
  checkIn: (id) => {
    dispatch(checkIn(id));
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  selectedWorkout: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checkedIn: PropTypes.bool.isRequired,
  })).isRequired,
  checkIn: PropTypes.func.isRequired,
};

class Workout extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;

    return { title: params ? params.title : 'Workout participants' };
  };

  render() {
    const participantRows = this.props.participants.map((participant) => {
      if (participant.checkedIn) {
        return ( // without 'check in' button
          <View key={participant.id} style={[styles.participantRow, styles.checkedIn]}>
            <Text style={styles.name}>{participant.name}</Text>
          </View>
        );
      }

      return ( // with 'check in' button
        <View key={participant.id} style={styles.participantRow}>
          <Text style={styles.name}>{participant.name}</Text>
          <Button
            title={'check in'}
            onPress={() => this.props.checkIn(participant.id)}
          />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text style={styles.label}>Participants:</Text>

        {participantRows}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  label: {
    margin: 10,
    fontSize: 20,
    color: 'rgb(51,51,51)',
  },
  participantRow: {
    marginHorizontal: 10,
    marginVertical: 5,
    minHeight: 45,
    backgroundColor: 'rgb(255,130,110)',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkedIn: {
    backgroundColor: 'rgb(110,255,170)',
  },
  name: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
});

Workout.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Workout);
