import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import ThreeButton from "../components/ThreeButton";

const Detail = () => {
  const params = useParams();
  return (
    <div>
      <Header title={"글 조회하기"} />
      <Editor />
      <ThreeButton />
    </div>
  );
};
export default Detail;
