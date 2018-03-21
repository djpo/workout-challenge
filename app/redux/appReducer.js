const initialState = {
  workouts: [
    {
      date: '20180321',
      participants: [
        {
          name: "Drk Prp",
          checkedIn: false,
        },
        {
          name: "Aab Ccd",
          checkedIn: false,
        },
        {
          name: "Eef Ggh",
          checkedIn: true,
        },
      ],
    },
    {
      date: '20180322',
      participants: [
        {
          name: "Aab Ccd",
          checkedIn: false,
        },
        {
          name: "Eef Ggh",
          checkedIn: false,
        },
        {
          name: "Iij Kkl",
          checkedIn: false,
        },
      ],
    },
    {
      date: '20180323',
      participants: [
        {
          name: "Iij Kkl",
          checkedIn: true,
        },
        {
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

    default:
      return state;
  }
}
