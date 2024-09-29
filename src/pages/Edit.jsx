import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext, useState, useEffect } from "react";
import { DispatchContext, StateContext } from "../App";

const Edit = () => {
  const params = useParams();
  const data = useContext(StateContext);
  const { onUpdate } = useContext(DispatchContext);

  const onSubmit = (input) => {
    onUpdate(
      params.id,
      input.title,
      input.createdDate,
      input.newDate,
      input.content
    );
  };

  const [curData, setCurData] = useState();

  useEffect(() => {
    const currentItem = data.find(
      (item) => String(item.id) === String(params.id)
    );
    if (!currentItem) {
      window.alert("없는 데이터에 접근하였습니다.");
      nav("/");
    }

    setCurData(currentItem);
  }, [data, params.id]);

  return (
    <div>
      <Header title={"글 수정하기⚠️"} />
      <Editor onSubmit={onSubmit} initData={curData} />
    </div>
  );
};
export default Edit;
