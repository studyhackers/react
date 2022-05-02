# useState - 함수 기반 상태 관리

### useState로 값을 관리하는 이유
- html은 변하지 않는다.
- html의 값을 변화시키려면, 화면을 새로고침해야한다.
- 전체 화면을 새로고침하는 것은 비효율적이다. 변경되는 화면만 새로고침하기 위해 useState를 쓴다.

<br>

<hr>

<br>

### const [상태 값 저장 변수, 상태 값 갱신 함수] = useState(상태 초기 값);

<br>

```
const counterState = React.useState(1); // 상태 초기 값
const counter = counterState[0]; // 상태 값 저장 변수
const setCounter = counterState[1]; // 상태 값 갱신 함수
=
const [counter, setCounter] = React.useState(1);
```


위 자바스크립트 문법은 “배열 구조 분해”라고 하고, 

counter와 setCounter, 총 2개의 값을 만들고 있다.

setState() 함수는 배열을 리턴하는데 첫 번째 원소는 상태 값을 저장할 변수이고

두번째 원소는 해당 상태 값을 갱신할 때 사용할 수 있는 함수이다. 

그리고 setState() 함수에 인자로 해당 상태의 초기 값을 넘길 수 있다.

<br>

<hr>

<br>

```
setCounter(counter + 1);
```

setCounter를 이용해서 counter의 값을 변경하면 

해당 컴포넌트는 화면에 다시 렌더링 되어서 state가 변경될 때마다 화면이 업데이트된다. 

