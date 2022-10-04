import "./App.css";
import { useRef, useState } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// const dummyList = [
//   {
//     id: 1,
//     author: "이민형",
//     content: "hi 1",
//     emotion: 5,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "홍길동",
//     content: "hi 2",
//     emotion: 3,
//     created_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "아무개",
//     content: "hi 3",
//     emotion: 2,
//     created_date: new Date().getTime(),
//   },
// ];

const App = () => {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
};

export default App;
