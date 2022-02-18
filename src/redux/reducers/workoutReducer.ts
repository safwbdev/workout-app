import {
  ActionTypes,
  SET_WORKOUTS,
  DELETE_WORKOUT,
  UPDATE_WORKOUT,
  TOGGLE_WORKOUT,
  ADD_WORKOUT,
} from "../actions/types";
import { Store, WorkoutSet } from "../actions/types";
import { data } from "../../constants/data";

// Standard interface and functions
const updateWorkout = (
  sets: WorkoutSet[],
  id: string,
  text: string
): WorkoutSet[] =>
  sets.map((set) => ({
    ...set,
    text: set.id === id ? text : set.text,
  }));

const toggleWorkout = (sets: WorkoutSet[], id: string): WorkoutSet[] =>
  sets.map((set) => ({
    ...set,
    done: set.id === id ? !set.done : set.done,
  }));

const removeWorkout = (sets: WorkoutSet[], id: string): WorkoutSet[] =>
  sets.filter((set) => set.id !== id);

const addWorkout = (sets: WorkoutSet[], text: any): WorkoutSet[] => [...sets, text];


function workoutReducer(
  state: Store = {
    sets: data,
    // week: [],
  },
  action: ActionTypes
) {
  switch (action.type) {
    case SET_WORKOUTS:
      return {
        ...state,
        sets: action.payload,
      };
    case UPDATE_WORKOUT:
      return {
        ...state,
        sets: updateWorkout(state.sets, action.payload.id, action.payload.text),
      };
    case TOGGLE_WORKOUT:
      return {
        ...state,
        sets: toggleWorkout(state.sets, action.payload),
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        sets: removeWorkout(state.sets, action.payload),
      };
    case ADD_WORKOUT:
      return {
        ...state,
        sets: addWorkout(state.sets, action.payload),
      };
    default:
      return state;
  }
}

export default workoutReducer;