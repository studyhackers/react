<h1>React 데이터 흐름</h1>

리액트에서는 일반적으로 부모 컴포넌트에서 자식 컴포넌트로 값을 전달하는 구조로 되어있다.  
이를 데이터가 한 방향으로 흐른다고 한다.
- React Flux패턴: (https://medium.com/hcleedev/web-react-flux-%ED%8C%A8%ED%84%B4-88d6caa13b5b)  
![리액트 데이트 흐름 구조](https://www.sohamkamani.com/34ee0fb6e1fe14efa5779a3a293fd5fd/react-flow.svg)

<br/>

## React 컴포넌트의 데이터 종류

- <h3>state</h3>
- <h3>props</h3>

<br/>
## State


현재 컴포넌트에서 사용가능한 데이터를 말한다.  
데이터 수정이 가능해 주로 유동적인 데이터를 다룰때 사용된다.

<br/>

## state 사용해보기

```js
import React, { useState } from "react";

function Example() {
  // useState Hook을 이용, 'state 변수 & 해당 state를 갱신할 수 있는 함수'가 만들어진다.
  // useState의 인자로 0을 넘겨줘서 count값을 0으로 초기화했다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// state가 아닌 일반 변수로 선언했을 때
/*let test = 1;

  const setTest = () => {
    test = test + 1;
    console.log(test);
  }

  return (
    <div>
      <p>You clicked {test} times</p>
      <button onClick={setTest}>
        Click me
      </button>
    </div>
  );*/
```

> 왜 수정가능한 변수대신 state를 사용하는지 의문점이 들었었는데,  
> 리액트에서는 state에 수정이 일어나면 state가 포함된 DOM을 재렌더링 해준다.  
> 따라서 상태 변화에 따라 브라우저 화면이 다시 그려질 수 있게 된다.

- ### 리액트에서 컴포넌트가 리렌더링 되는 기준

1. Props가 변경되었을 때
2. State가 변경되었을 때
3. 부모 컴포넌트가 렌더링되었을 때
4. ~~forceUpdate() 를 실행하였을 때~~ (클래스형 컴포넌트에서만 사용)

<br/>

## Props


Props(Properties)는 부모컴포넌트에서 전달받은 데이터를 말한다.  
부모에게서 전달받은 데이터라 자식 컴포넌트에서는 데이터 수정이 불가능하다. (읽기 전용 데이터)

<br/>

## props 사용해보기


```js
import React from "react";

function App() {
  const imgUrls = [
    { src: "test.jpg", alt:"이미지1" },
    { src: "test.jpg", alt:"이미지2" },
    { src: "test.jpg", alt:"이미지3" },
  ];

  return <ImgBoard items={imgUrls} title="갤러리 타이틀입니다." />;
}

function ImgBoard({ items, title }) {  // 여러 props를 구조분해
  return (
    <>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <img src={item.src} alt={item.alt}/>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
```

[참고문헌]
- React 공식문서 컴포넌트, Props(https://reactjs-kr.firebaseapp.com/docs/components-and-props.html)
- 벨로퍼트 props 전달하기 (https://react.vlpt.us/basic/05-props.html)
