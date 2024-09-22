import { useState } from "react";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import { DispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DispatchContext);

  const onSubmit = (input) => {
    onCreate(input.title, input.createdDate, input.content);
  };

  return (
    <div>
      <Header title={"글 작성하기✏️"} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
