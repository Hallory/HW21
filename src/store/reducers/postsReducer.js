import {
  ADD_COMMENT,
  ADD_LIKE,
  ADD_POSTS,
  REMOVE_POST,
} from "../actionTypes/actionTypes";

const ANAKIN_IMAGE =
  "https://media1.popsugar-assets.com/files/thumbor/_UDLEp7pQ-Uip4ow4R2SqdKL100=/fit-in/3072x2042/filters:format_auto():quality(85):upscale()/2019/04/18/769/n/1922283/eeb8651e5cb8b3908543d8.33607707_.jpg";
const RAY_IMAGE =
  "https://www.slashfilm.com/img/gallery/can-the-return-of-rey-redeem-the-sins-of-star-wars-the-rise-of-skywalker/intro-1680978833.webp";

const initialState = {
  posts: [
    {
      index: 1,
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: "26 лют.",
      likes: 0,
      comments: [],
    },
    {
      index: 2,
      name: "Anakin skywalker",
      photo: ANAKIN_IMAGE,
      nickname: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: RAY_IMAGE,
      date: "26 лют.",
      likes: 0,
      comments: [],
    },
  ],
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.post],
      };
    case ADD_LIKE:
      return {
        ...state,
        posts: state.posts.map((post, index) => {
          if (action.index === index) {
            return {
              ...post,
              likes: action.isLiked ? post.likes - 1 : post.likes + 1,
            };
          }
          return post;
        }),
      };
      case ADD_COMMENT:
  return {
    ...state,
    posts: state.posts.map((post, index) => {
      if (action.index === index) {
        return {
          ...post,
          comments: [...post.comments, action.commentText],
        };
      }
      return post;
    }),
  };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post, index) => {
          return action.index !== index;
        }),
      };

    default:
      return state;
  }
};
