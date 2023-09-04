import { createStore } from "redux";
import { postsReducer } from "./reducers/postsReducer";

export const store = createStore(postsReducer)