import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import { useReducer, useRef, useState } from "react";
import { createContext } from "react";

const mockData = [
  {
    id: 1,
    title: "1번 제목",
    createdDate: new Date().getTime(),
    newDate: new Date().getTime(),
    content: "1번 일기 내용",
  },
  {
    id: 2,
    title: "2번 제목",
    createdDate: new Date().getTime(),
    newDate: new Date().getTime(),
    content: "2번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(action.data.id) === String(item.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(action.id) !== String(item.id));
    default:
      return state;
  }
}

export const StateContext = createContext();
export const DispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        content,
      },
    });
  };
  const onUpdate = (id, newDate, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        newDate,
        content,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",

      id,
    });
  };
  return (
    <>
      <button onClick={() => onCreate(new Date().getTime(), "추가된 글 내용")}>
        글 추가하기
      </button>
      <button
        onClick={() => onUpdate(1, new Date().getTime(), "수정된 글 내용")}
      >
        글 수정하기
      </button>
      <button onClick={() => onDelete(1)}>글 삭제하기</button>

      <StateContext.Provider value={data}>
        <DispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export default App;
