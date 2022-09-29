import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ diaryList }) => {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;

//diaryList의 요소가 하나하나씩 it으로 들어옴
//?map?
// key prop가 필요하면 최상위 부모 태그에 key = {it.id명} 해주면 됨
// 만약 id를 지정해놓지 않았다면 map 내장함수의 콜백함수의 두번째 파라미터인 idx를 사용하면 됨 (몇번째 요소를 순회하고 있는지)
// 인덱스를 그냥 키로 사용하면 문제는 일단 안생김 but 데이터를 수정, 삭제, 추가해서 인덱스의 순서가 바뀌면 문제가 생길 수 있음
