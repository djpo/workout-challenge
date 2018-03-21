import initialState from './initialState';

export default function appReducer(state = initialState, action) {
  switch (action.type) {

    case 'SELECT_WORKOUT':
      return { ...state,
        selectedWorkout: action.date,
      };

    case 'CHECK_IN': {
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
    }

    case 'UPDATE_TEXT_INPUT':
      return { ...state,
        textInput: action.newText,
      };

    case 'ADD_PARTICIPANT': {
      const workoutsUpdated = state.workouts.map((workout) => {
        if (workout.date === state.selectedWorkout) {
          const participantsUpdated = [ ...workout.participants,
            {
              id: Math.random().toString(36).substr(2, 9),
              name: state.textInput,
              checkedIn: true,
            },
          ];
          return { ...workout, participants: participantsUpdated };
        }
        return workout;
      });
      return { ...state,
        textInput: '',
        workouts: workoutsUpdated,
      };
    }

    default:
      return state;
  }
}
