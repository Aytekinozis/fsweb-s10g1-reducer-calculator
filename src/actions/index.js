export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const MEMORY_ADD = "MEMORY_ADD";
export const MEMORY_CLEAR = "MEMORY_CLEAR";
export const MEMORY_RECALL = "MEMORY_RECALL";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addOne = () => {
  return { type: ADD_ONE };
};

export const applyNumber = (number) => {
  console.log(number);
  return { type: APPLY_NUMBER, payload: Number(number) };
};

export const changeOperation = (action) => {
  return { type: CHANGE_OPERATION, payload: action };
};

export const clearDisplay = () => {
  return { type: CLEAR_DISPLAY };
};

export const memoryAdd = () => {
  return { type: MEMORY_ADD };
};

export const memoryRecall = () => {
  return { type: MEMORY_RECALL };
};

export const memoryClear = () => {
  return { type: MEMORY_CLEAR };
};
