import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import ThreeButton from "../components/ThreeButton";
import { useContext } from "react";
import { StateContext } from "../App";

const Detail = () => {
  const data = useContext(StateContext);
  const params = useParams();
  return (
    <div>
      <Header title={"글 조회하기"} />
      <Editor />
      <ThreeButton data={data} />
    </div>
  );
};
export default Detail;
