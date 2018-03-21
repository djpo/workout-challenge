export function selectWorkout(date) {
  return {
    type: 'SELECT_WORKOUT',
    date,
  };
}

export function checkIn(id) {
  return {
    type: 'CHECK_IN',
    id,
  };
}

export function updateTextInput(newText) {
  return {
    type: 'UPDATE_TEXT_INPUT',
    newText,
  };
}
