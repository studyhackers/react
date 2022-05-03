# 🍔 리액트 스터디 2주차 실습 예제 🍔

### 배열로만 간단하게 게시판 기능 구현하기

<br/>

state와 props를 활용하여 게시판 앱을 구현해주세요.  
최종적으로 구성되야하는 컴포넌트는 아래와 같습니다.

1. App
2. BoardList
3. BoardItem
4. BoardForm

아래 코드의 state 배열을 이용해 폼 입력시 데이터가 추가되는 게시판을 만들어주시면 됩니다.

```js
// 결과물 일부코드

function App() {
  const initialBoardItems = [
    {
      title: "첫번째 게시글입니다.",
    },
    {
      title: "두번째 게시글입니다.",
    },
    {
      title: "세번째 게시글입니다.",
    },
  ];

  const [boardItems, setBoardItems] = useState(initialBoardItems);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // ...폼에서 입력한 데이터로 boardItems에 추가해주는 함수 로직 구현
  };

  return (
    <div className="App">
      <h1>리액트 게시판</h1>
      // BoardForm 컴포넌트 
      // BoardList 컴포넌트
    </div>
  );
}
```

### 최종 결과물   

![결과물이미지](./result.gif)
