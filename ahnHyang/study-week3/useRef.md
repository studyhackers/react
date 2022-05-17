# useRef 

리액트에서 특정 DOM을 선택해야 할 경우 **ref** 라는 것을 사용한다.  
**useRef** 는 리액트 함수형 컴포넌트에서 ref를 쓸 때 사용하는 Hook 함수이다.

<br/>

>
> - Javascript에서 특정 Dom을 선택하는 역할을 한다. ex) getElementById, querySelector
> - 원하는 위치에 ref={} 의 형태로 작성하면 된다.
> 

### 작성코드 예시
```js
const nameInput = useRef(); // Ref 객체 생성

const onClick = () => {
  console.log(nameInput.current.value);
  nameInput.current.focus();  // ref.current === 우리가 ref로 지정한 DOM
}

return(
  <input ref={nameInput} />  // 선택하고 싶은 DOM 에 ref 값으로 설정
  <button onClick={onClick}>클릭</button>
)
```

[참고문헌]  
[React 공식문서 Ref] ( https://ko.reactjs.org/docs/refs-and-the-dom.html )




