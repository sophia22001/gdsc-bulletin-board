import "./TwoButton.css";
import { useNavigate } from "react-router-dom";

import Button from "./Button";

const TwoButton = () => {
  const nav = useNavigate();
  return (
    <div className="TwoButton">
      <Button text={"글 목록"} onClick={() => nav(-1)} />
      <Button text={"완료하기"} type={"POSITIVE"} />
    </div>
  );
};
export default TwoButton;
