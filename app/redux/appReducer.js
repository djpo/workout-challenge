const initialState = {
  workouts: [
    '20180315',
    '20180316',
    '20180319',
    '20180320',
  ],
  selectedWorkout: '',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case 'SELECT_WORKOUT':
      return { ...state,
        selectedWorkout: action.workout,
      };

    default:
      return state;
  }
}
