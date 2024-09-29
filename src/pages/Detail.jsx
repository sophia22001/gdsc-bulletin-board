import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../App";
import DetailEditor from "../components/DetailEditor";

const Detail = () => {
  const data = useContext(StateContext);
  const nav = useNavigate();
  const params = useParams();

  //현재 글 아이템을 저장하는 state -> curData
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

  if (!curData) {
    return <div>로딩 중 ..</div>;
  }
  // curData가 undefined가 아닐 때,
  const { createdDate, newDate, title, content } = curData;

  return (
    <div>
      <Header title={"글 조회하기📋"} />
      <DetailEditor
        title={title}
        content={content}
        createdDate={createdDate}
        newDate={newDate}
      />
    </div>
  );
};
export default Detail;
