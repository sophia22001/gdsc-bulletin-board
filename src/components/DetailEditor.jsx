import "./DetailEditor.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { DispatchContext } from "../App";

const DetailEditor = () => {
  const { onDelete } = useContext(DispatchContext);
  //입력 값을 저장하는 input state
  const [input, setInput] = useState({
    title: "",
    createdDate: new Date().toLocaleDateString(),
    content: "",
  });
  const nav = useNavigate();
  const params = useParams();

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

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(params.id);
    }
    nav("/");
  };

  return (
    <div className="detail-editor">
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
      <div className="ThreeButton">
        <Button onClick={() => nav("/")} text={"글 목록"} />
        <Button
          onClick={() => nav(`/edit/${params.id}`)}
          text={"수정하기"}
          type={"EDIT"}
        />
        <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
      </div>
    </div>
  );
};
export default DetailEditor;
