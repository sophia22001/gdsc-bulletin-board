import "./Editor.css";
import ThreeButton from "./ThreeButton";
import TwoButton from "./TwoButton";
import { useState } from "react";

const Editor = () => {
  //입력 값을 저장하는 input state
  const [input, setInput] = useState({
    title: "",
    createdDate: new Date().toLocaleDateString(),
    content: "",
  });

  //이벤트 핸들러
  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    console.log(name, value);
    setInput({
      ...input,
      [name]: value,
    });
  };
  return (
    <div className="editor">
      <input
        onChange={onChangeInput}
        name="title"
        value={input.title}
        className="title"
      />
      <textarea
        onChange={onChangeInput}
        name="content"
        value={input.content}
        className="content"
      />

      <div className="created-date">
        <p>생성 날짜: &nbsp;</p>
        <div>{new Date().toLocaleDateString()}</div>
      </div>
    </div>
  );
};
export default Editor;
