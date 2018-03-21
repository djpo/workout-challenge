const initialState = {
  workouts: [
    {
      date: '20180321',
      participants: [
        {
          id: '001',
          name: "Drk Prp",
          checkedIn: false,
        },
        {
          id: '002',
          name: "Aab Ccd",
          checkedIn: false,
        },
        {
          id: '003',
          name: "Eef Ggh",
          checkedIn: true,
        },
      ],
    },
    {
      date: '20180322',
      participants: [
        {
          id: '002',
          name: "Aab Ccd",
          checkedIn: false,
        },
        {
          id: '003',
          name: "Eef Ggh",
          checkedIn: false,
        },
        {
          id: '004',
          name: "Iij Kkl",
          checkedIn: false,
        },
      ],
    },
    {
      date: '20180323',
      participants: [
        {
          id: '004',
          name: "Iij Kkl",
          checkedIn: true,
        },
        {
          id: '005',
          name: "Mmn Oop",
          checkedIn: false,
        },
      ],
    },
    {
      date: '20180326',
      participants: [],
    },
  ],
  selectedWorkout: '',
};

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
