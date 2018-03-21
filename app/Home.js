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
import { selectWorkout } from './redux/actions';

const mapStateToProps = state => ({
  workoutDates: state.workouts.map(workout => workout.date),
});

const mapDispatchToProps = dispatch => ({
  selectWorkout: (date) => {
    dispatch(selectWorkout(date));
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  workoutDates: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectWorkout: PropTypes.func.isRequired,
};

class Home extends Component {
  handleWorkoutPress(date, formattedDate) {
    this.props.selectWorkout(date);
    this.props.navigation.navigate('Workout', { title: formattedDate });
  }

  render() {
    const workoutButtons = this.props.workoutDates.map((date) => {
      const formattedDate = `${date.slice(0, 4)}-${date.slice(4, 6)}-${date.slice(6)}`;

      return (
        <View key={date} style={styles.workoutButton}>
          <Button
            title={formattedDate}
            onPress={() => this.handleWorkoutPress(date, formattedDate)}
          />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        {workoutButtons}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  workoutButton: {
    margin: 5,
  },
});

Home.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
