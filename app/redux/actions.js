export function selectWorkout(date) {
  return {
    type: 'SELECT_WORKOUT',
    date,
  };
}
