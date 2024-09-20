import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import TwoButton from "../components/TwoButton";

const New = () => {
  return (
    <div>
      <Header title={"글 작성하기"} />
      <Editor />
      <TwoButton />
    </div>
  );
};
export default New;
