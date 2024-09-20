import "./Editor.css";
import ThreeButton from "./ThreeButton";
import TwoButton from "./TwoButton";

const Editor = () => {
  return (
    <div className="editor">
      <div className="title">제목</div>
      <textarea className="content">내용</textarea>
    </div>
  );
};
export default Editor;
