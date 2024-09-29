import Header from "../components/Header";
import WriteList from "../components/WriteList";
import { useContext } from "react";
import { StateContext } from "../App";

const Home = () => {
  const data = useContext(StateContext);
  return (
    <div>
      <Header title={"🤍게시판🤍"} />
      <WriteList data={data} />
    </div>
  );
};
export default Home;
