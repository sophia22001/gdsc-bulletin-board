import "./Editor.css";
import ThreeButton from "./ThreeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Editor = ({ onSubmit }) => {
  //입력 값을 저장하는 input state
  const [input, setInput] = useState({
    title: "",
    createdDate: new Date().toLocaleDateString(),
    content: "",
  });
  const nav = useNavigate();

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

  const onClickSubmit = () => {
    onSubmit(input);
    nav("/");
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
        <p>날짜: &nbsp;</p>
        <div>{new Date().toLocaleDateString()}</div>
      </div>
      <div className="TwoButton">
        <Button text={"글 목록"} onClick={() => nav("/")} />
        <Button onClick={onClickSubmit} text={"완료하기"} type={"POSITIVE"} />
      </div>
    </div>
  );
};
export default Editor;
