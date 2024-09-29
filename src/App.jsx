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
    createdDate: new Date().toLocaleDateString(),
    newDate: new Date().toLocaleDateString(),
    content: "1번 일기 내용",
  },
  {
    id: 2,
    title: "2번 제목",
    createdDate: new Date().toLocaleDateString(),
    newDate: new Date().toLocaleDateString(),
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

  const onCreate = (title, createdDate, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        title,
        createdDate,
        content,
      },
    });
  };
  const onUpdate = (id, title, newDate, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        title,
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
