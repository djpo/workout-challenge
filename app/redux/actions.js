export function selectWorkout(workout) {
  return {
    type: 'SELECT_WORKOUT',
    workout,
  };
}
