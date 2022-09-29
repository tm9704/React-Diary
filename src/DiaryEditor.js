import { useRef, useState } from "react";

const DiaryEditor = () => {
  const authorInput = useRef();
  const contentInput = useRef();

  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  //   const [author, setAuthor] = useState("");
  //   const [content, setContent] = useState("");

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      //focus
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      //focus
      contentInput.current.focus();
      return;
    }

    alert("저장 성공");
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput}
          type="text"
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          type="text"
          value={state.content}
          onChange={handleChangeState}
          //   (e) => {
          //     setState({
          //       ...state, //길어지면 복잡하고 힘드니까 spread 연산자 사용
          //       //순서를 바꾸면 안됨, 위에서 순서대로 새로운 객체를 만들어내기 때문
          //       //   author: state.author,
          //       content: e.target.value,
          //     });
          //   }
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;

//사용자의 입력을 리액트에서 처리하기 위해서는 state를 사용해야됨
//상태는 상태변화함수로만 변화시킬 수 있음
//input에서 실시간으로 반영시키기 위해서는 onChange 속성 사용
//onChange에 전달되는건 콜백함수, 이 콜백함수는 이벤트 객체 e를 매개변수로 전달받음
//onChage는 Event라고 부를 수 있음 이벤트는 사용자가 어떤 행동을 한 것
// input태그에는 사용자가 입력을함 즉, 입력이 발생하면 input은 어떠한 사건이 발생했다라고 여김
// 해당 이벤트는 onChange라는 이벤트, onChange는 값이 바뀌였을 때 일어나는 이벤트
// 값이 바뀌면 console.log() 실행
// onChange={(e) => {
//     console.log(e);
//   }}
// e 는 이벤트 객체인데 변하는 값은 target.value가 변함 (target은 태그), value는 값

// 이벤트 객체는 target의 value 뿐만 아니라 input태그에  name이 지정되어 있었다 하면
// 타겟의 이름까지 출력이 가능 e.target.name

//textArea 태그는 여러줄을 입력받을 수 있는 태그
//사용 방법은 input 태그와 동일함

// onChage이벤트가 발생하면 콜백함수가 실행되고 매개변수 e에서 지금 변화한 값을
// 새로운 상태의 값으로 변화하면서 다시 value가 바뀌고 화면에 반영이 된다.

// 동작이 비슷한 State는 하나의 State로 묶을 수 있음
// onChage도 함칠 수 있음

// DOM요소를 선택할 수 있는 기능을 리액트가 포함
// useRef
// useRef()함수의 리턴은 React.MutableRefObject
// MutableRefObject는 html 같은 DOM 요소를 접근할 수 있는 기능

// authorInput.current.focus()
// DOM요소를 선택하는 ref객체는 현재 가리키는 값을 current라는 프로퍼티로 가져와서 사용할 수 있음

//React에서 리스트 렌더링 하기
// - 배열을 이용해서 React에서 List 렌더링해보고 개별적인 컴포넌트 만들기
