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
  workouts: state.workouts,
});

const mapDispatchToProps = dispatch => ({
  selectWorkout: (workout) => {
    dispatch(selectWorkout(workout));
  },
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  workouts: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectWorkout: PropTypes.func.isRequired,
};

class Home extends Component {
  handleWorkoutPress(workout) {
    this.props.selectWorkout(workout);
    this.props.navigation.navigate('Workout');
  }

  render() {
    const workoutButtons = this.props.workouts.map((workout) => {
      const formattedDate = `${workout.slice(0, 4)}-${workout.slice(4, 6)}-${workout.slice(6)}`;

      return (
        <View key={workout} style={styles.workoutButton}>
          <Button
            title={formattedDate}
            onPress={() => this.handleWorkoutPress(workout)}
          >
          </Button>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text>Home screen</Text>

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
