import "./ThreeButton.css";

import Button from "./Button";
import { useNavigate } from "react-router-dom";

const ThreeButton = () => {
  const nav = useNavigate();
  return (
    <div className="ThreeButton">
      <Button text={"글 목록"} onClick={() => nav(-1)} />
      <Button text={"수정하기"} type={"EDIT"} />
      <Button text={"완료하기"} type={"POSITIVE"} />
    </div>
  );
};
export default ThreeButton;
