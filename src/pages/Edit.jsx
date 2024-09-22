import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DispatchContext } from "../App";

const Edit = () => {
  const params = useParams();
  const { onUpdate } = useContext(DispatchContext);

  const onSubmit = (input) => {
    onUpdate(params.id, input.title, input.newDate, input.content);
  };
  return (
    <div>
      <Header title={"글 수정하기⚠️"} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default Edit;
