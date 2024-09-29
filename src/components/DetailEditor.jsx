import "./DetailEditor.css";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { DispatchContext, StateContext } from "../App";

const DetailEditor = ({ createdDate, newDate, title, content }) => {
  const { onDelete } = useContext(DispatchContext);
  const data = useContext(StateContext);

  const nav = useNavigate();
  const params = useParams();

  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(params.id);
    }
    nav("/");
  };

  return (
    <div className="detail-editor">
      <div className="title">{title}</div>
      <div className="content">{content}</div>

      <div className="created-date">
        <p>생성: &nbsp;</p>
        <div>{createdDate}</div>
        <p>{newDate ? <span>&nbsp;/ 수정: &nbsp;{newDate}</span> : ""}</p>
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
