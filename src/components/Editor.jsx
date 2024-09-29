import "./Editor.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const Editor = ({ onSubmit, initData }) => {
  //입력 값을 저장하는 input state
  const [input, setInput] = useState({
    title: "",
    createdDate:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    newDate:
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
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
    // setInput({
    //   ...input,
    //   newDate: new Date().toLocaleTimeString(),
    // });
    const updatedInput = {
      ...input,
      newDate:
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString(),
    };
    onSubmit(updatedInput);
    nav("/");
  };

  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
      });
    }
  }, [initData]);

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
        <p>생성: &nbsp;</p>
        <div>
          {initData ? initData.createdDate || "날짜 없음" : "로딩 중..."}
        </div>
        <p>&nbsp;/ 수정: &nbsp;</p>
        <div>
          {initData ? initData.newDate || "수정 날짜 없음" : "로딩 중..."}
        </div>
      </div>
      <div className="TwoButton">
        <Button text={"글 목록"} onClick={() => nav("/")} />
        <Button onClick={onClickSubmit} text={"완료하기"} type={"POSITIVE"} />
      </div>
    </div>
  );
};
export default Editor;
