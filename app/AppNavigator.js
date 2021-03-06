import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Workout from './Workout';

const AppNavigator = StackNavigator(
  { // route config
    Home: {
      screen: Home,
      navigationOptions: { title: 'All workouts' },
    },
    Workout: { screen: Workout },
  },
  { // stack nav config
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
