import {
  ActionTypes,
  SET_WORKOUTS,
  DELETE_WORKOUT,
  UPDATE_WORKOUT,
  TOGGLE_WORKOUT,
  ADD_WORKOUT,
 WorkoutSet,  GET_WORKOUT } from "./types";

export const addSet = (data:any): ActionTypes => ({ type: ADD_WORKOUT, payload:data });

export const deleteSet = (id: string): ActionTypes => ({
  type: DELETE_WORKOUT,
  payload: id,
});

export const updateSet = (id: string, text: string): ActionTypes => ({
  type: UPDATE_WORKOUT,
  payload: {
    id,
    text,
  },
});

export const toggleSet = (id: string): ActionTypes => ({
  type: TOGGLE_WORKOUT,
  payload: id,
});

export const setSets = (sets: WorkoutSet[]): ActionTypes => ({
  type: SET_WORKOUTS,
  payload: sets,
});

export const getSet = (data:any): ActionTypes => ({ type: GET_WORKOUT, payload:data });