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
    default:
      return state;
  }
}
