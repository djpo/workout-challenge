import initialState from './initialState';

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case 'SELECT_WORKOUT':
      return { ...state,
        selectedWorkout: action.date,
      };

    case 'CHECK_IN':
      const workoutsUpdated = state.workouts.map((workout) => {
        if (workout.date === state.selectedWorkout) {
          const participantsUpdated = workout.participants.map((participant) => {
            if (participant.id === action.id) {
              return { ...participant, checkedIn: true };
            }
            return participant;
          });
          return { ...workout, participants: participantsUpdated };
        }
        return workout;
      });
      return { ...state,
        workouts: workoutsUpdated,
      };

    default:
      return state;
  }
}
