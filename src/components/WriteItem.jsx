import "./WriteItem.css";
import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DispatchContext } from "../App";

const WriteItem = ({ id, title, content, createdDate, newDate }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(DispatchContext);

  const onClickDelete = () => {
    console.log(id);
    if (window.confirm("정말 삭제하시겠습니까?")) {
      onDelete(id);
    }
  };

  return (
    <div className="writeItem">
      <div className="Info" onClick={() => nav(`/detail/${id}`)}>
        <div className="title">{title}</div>
        <div className="content">{content}</div>
        <div className="date">
          {newDate === ""
            ? `생성: ${createdDate} `
            : `생성: ${createdDate} / 수정: ${newDate}`}
        </div>
      </div>

      <div className="button">
        <Button onClick={onClickDelete} text="삭제하기" type="NEGATIVE" />
      </div>
    </div>
  );
};
export default WriteItem;
