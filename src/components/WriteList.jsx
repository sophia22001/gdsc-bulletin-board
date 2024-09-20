import "./WriteList.css";
import Button from "./Button";
import WriteItem from "./WriteItem";
import { useNavigate } from "react-router-dom";

const WriteList = ({ data }) => {
  const nav = useNavigate();

  return (
    <div className="writeList">
      <div className="write_button">
        <Button onClick={() => nav(`/new`)} text={"글 작성하기"} />
      </div>

      <div>
        {data.map((item) => (
          <WriteItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default WriteList;
