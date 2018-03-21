const initialState = {
  selectedWorkout: '',
  textInput: '',
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
};

export default initialState;
