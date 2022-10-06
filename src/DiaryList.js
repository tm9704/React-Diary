import DiaryItem from "./DiaryItem.js";

const DiaryList = ({ onEdit, onRemove, diaryList }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onEdit={onEdit} onRemove={onRemove} />
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

// 10/3
// 지금 해당 다이어리 일기 어플에서 컴포넌트 트리로 나타내면
// App/이 최상위 부모 그 밑으로 DiaryEditor , DiaryList가 자식으로 있음
// React에서는 같은 레벨의 컴포넌트끼리는 자료를 주고받을 수 없고
// 위에서 아래로 즉, 단반향으로만 데이터가 흐름

// 최상위 부모로 상태를 끌어와서 사용하면 된다.
