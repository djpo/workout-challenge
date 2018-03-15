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
  workouts: state.workouts,
});

const propTypes = {
  navigation: PropTypes.object.isRequired,
  workouts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

class Home extends Component {
  render() {
    const workoutButtons = this.props.workouts.map((workout) => {
      const formattedDate = `${workout.slice(0, 4)}-${workout.slice(4, 6)}-${workout.slice(6)}`;

      return (
        <View key={workout} style={styles.workoutButton}>
          <Button
            title={formattedDate}
            onPress={() => console.log(`you pressed ${workout}`)}
          >
          </Button>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <Text>Home screen</Text>

        <Button
          title="Go to Workout view"
          onPress={() => this.props.navigation.navigate('Workout')}
        />

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
    backgroundColor: '#F5FCFF',
  },
  workoutButton: {
    margin: 5,
  },
});

Home.propTypes = propTypes;
export default connect(
  mapStateToProps,
)(Home);