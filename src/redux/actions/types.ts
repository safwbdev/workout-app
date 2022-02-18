export interface WorkoutSet {
  id: string;
  quantity: number;
  text: string;
  reps: number;
  part:string;
  day:string;
  done: boolean;
}

export interface Store {
  sets: WorkoutSet[];
}


export const ADD_WORKOUT = "ADD_WORKOUT";
export const DELETE_WORKOUT = "DELETE_WORKOUT";
export const UPDATE_WORKOUT = "UPDATE_WORKOUT";
export const TOGGLE_WORKOUT = "TOGGLE_WORKOUT";
export const SET_WORKOUTS = "SET_WORKOUTS";
export const GET_WORKOUT = "GET_WORKOUT";

export type ActionTypes =
  | { type: typeof SET_WORKOUTS; payload: WorkoutSet[] }
  | { type: typeof ADD_WORKOUT;
    payload:  string;
  
   }
  | { type: typeof DELETE_WORKOUT; payload: string }
  | { type: typeof GET_WORKOUT; payload: string }
  | {
      type: typeof UPDATE_WORKOUT;
      payload: {
        id: string;
        text: string;
      };
    }
  | { type: typeof TOGGLE_WORKOUT; payload: string }