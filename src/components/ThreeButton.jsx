import "./ThreeButton.css";

import Button from "./Button";
import { useNavigate, useParams } from "react-router-dom";

const ThreeButton = ({ id }) => {
  const params = useParams();
  const nav = useNavigate();
  id = params.id;
  return (
    <div className="ThreeButton">
      <Button onClick={() => nav("/")} text={"글 목록"} />
      <Button
        onClick={() => nav(`/edit/${id}`)}
        text={"수정하기"}
        type={"EDIT"}
      />
      <Button text={"완료하기"} type={"POSITIVE"} />
    </div>
  );
};
export default ThreeButton;
