# 스터디 1주차 
> 참고  사이트: [https://github.com/milooy/cat-jjal-maker](https://github.com/milooy/cat-jjal-maker)

## ■실습  환경설정

> [vscode] - [설정] - Format On Save 체크

소스코드가  띄어쓰기, 줄 등 맞지 않아 지저분 할 때 저장  시 자동으로  정리해주는 기능

## ■리액트란 ?

### 1) 리액트를 사용하는 이유?

JS 보다 쉽게 동적인 웹 사이트를 만들기 위해 사용하는 자바스크립트 라이브러리
<br>
### 2) JS와 리액트 비교하기(ul 요소에  새로운 li와 img를  생성)
JS)
```JS
const ul = document.querySelector("ul");
const newFavoriteImage = document.createElement("img"); //이미지 태그 생성

newFavoriteImage.src ="./cat.jpg"; //이미지 태그에 고양이 이미지 삽입

const li = document.createElement("li");

li.appendChild('newFavoriteImage ');
ul.appendChild('li');
```
<br>

REACT)
```js
const catItem = (
	<li>
		<img src="./cat.jpg" />
	</li>
)	
	
const app = document.querySelector("#app");
	
ReactDom.render(catItem, app) // catItem을 #app에  작성
```

js는 querySelector, createElement, appandChild 등 여러 DOM API를 사용하게 됨

(간단한 내용을 추가하려 해도 js가 길어짐 -> 프로젝트가 커질 경우 감당불가)

**리액트를  사용하면  간결하게  코드  작성이  가능함**

## ■  리액트  사용하기

> 참고  사이트 : [https://ko.reactjs.org/docs/add-react-to-a-website.html](https://ko.reactjs.org/docs/add-react-to-a-website.html)
<br>
### 1)  script 태그  안에  리액트  및  리액트 DOM 라이브러리  추가
```JS
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```
### 2) script 태그  안에 bable 추가  및  선언한 script type 변경
```JS
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel"></script>
```
## ■ babel이란?

컴파일러. 새로운 자바스크립트 문법을 브라우저가 이해할 수 있도록 변환해주는 역할을 함

> 바벨 공식사이트 : [https://babeljs.io/](https://babeljs.io/)

*위 사이트에서 리액트 문법을 입력하면 바벨이 브라우저가 이해할 수 있도록 번역한 문법을 확인 할 수 있음

=> 리액트 문법을 사용하면 바벨은 해당 코드를 읽어 <head>안에 브라우저가 읽을 수 있는 코드를 추가함(개발자 도구에서 확인 가능)

브라우저는 이 안에 있는 코드를 읽어서 정상적으로 동작함

## ■ JSX로 HTML과 JS 짬뽕하기

### 1)  JSX란?

확장된 JS 문법. JS와 XML 문법을  합친  문법을  말함. 리액트와  같이  사용됨
JSX는 React “엘리먼트(element)”  를  생성
리액트에서는  변수로  선언한  요소를 element(엘리먼트)라고  부름

ex) JSX 문법 - element 생성
```js
const element = (<h1>Hello, world!</h1>);
```

### 2)  리액트  안에서 JS문법 사용하기 : {  }
```js

const catItem = (
	<li>
		<img src="https://cataas.com/cat/60b73094e04e18001194a309/says/react" />
	</li>
)

const favorites = (
<ul class="favorites">
	{1+2}
	{Foo === "hello world" ? 'true' : 'false'}
	{Foo}
	{catItem}
	{catItem}
	{catItem}
</ul>
)
```
{  } 안에  js 문법 (JS 표현식)을 그대로 사용할 수 있음

**표현식이란? 값을 반환하는 식 또는 코드**

쉽게 말해서, 표현식이란 js를 썼을 때 계산된 값이 나오는 것을 말함

ex1)
```js
1+2 // 3

ex2)

hello //hello
```
ex2)
```js
function num () {

return 1;

}
num() // 1
```
### 3) 리액트로  만든  요소 render

 ReactDOM.**render**(요소, 위치)

### 4) 리액트로 만든 요소를 2개 이상 render 하고 싶은 경우 최상위 태그로 묶어 사용

ex) 오류1
```js
ReactDOM.render(mainCard, 여기다가그려)
ReactDOM.render(favorites, 여기다가그려) // 오류
```
ex) 오류2
```js
const app = (
	{favorites}
	{mainCard}
)
//오류 - 최상위 태그가 1개여야함
```

ex) 정상적으로  사용한  예
```js
const app = (
	<div>
		{favorites}
		{mainCard}
	</div>
)

ReactDOM.render(app , 여기다가그려)
```
## ■  컴포넌트

### 1) 컴포넌트란?

최신 웹 개발의 핵심. 반복되는 컨텐츠(웹페이지에서 반복적으로 사용하는 요소 ex. 스타벅스 예제 버튼)들을 컴포넌트라고 함

### 2) 컴포넌트  사용의 장점
(1) 일관성
(2) 다른 사용자의 컴포넌트를 사용할 수 있음  (컴포넌트 공유)

> Ant Design (ui 라이브러리)
[https://github.com/milooy/cat-jjal-maker/blob/main/answers/9-what-is-component.html](https://github.com/milooy/cat-jjal-maker/blob/main/answers/9-what-is-component.html)

**★리액트로 개발한다는 것은 컴포넌트를 사용하여 개발한다는 것**

ex) 컴포넌트 예시
```js
// 컴포넌트를  함수로  선언

function Card(title, description) {
	return (
		<div>
			<h2>{title}</h2>
			{description}
		</div>
	);
}

//사용방법 1
Card('타이틀1', '설명1');
Card('타이틀2', '설명2');

//사용방법 2 - HTML 태그처럼  사용  가능
<Card title="타이틀1" description="설명1">
<Card title="타이틀2" description="설명2">
```
### 3) 컴포넌트 만들기

**★  컴포넌트의 이름 첫글자는 대문자로 작성**

ex1) 일반함수로  컴포넌트  생성, 인자  전달하기1
```js
function CatItem(props) {  
//리액트에서는 넘어온 값을 첫번째 인자에 저장, 인자를 넘겨준 것을 props(프롭스)라고 함
	return (
		<li>
			<img src={props.img} />  
			{/* 인자로 오브젝트 값이 옴*/}
		</li>
	);
}

<CatItem img="./example.jpg"/>
```
ex2) 함수표현식으로 컴포넌트 생성
```js
const CatItem = function(props) {
}
```
ex3) 화살표함수로 컴포넌트 생성
```js
const CatItem = props => {
}
```
ex4) 인자 전달하기 2
```js
const Title = props => {
	return (
		<h1>{props.children}</h1> // 요소 안의 내용은 children으로 넘어옴
	);
}

<Title>1번째 고양이 가라사대2</Title>
```

---
**요약**
-  컴포넌트는 함수 형태로 로 만들 수 있음 (함수표현식, 화살표함수 가능) +클래스 함수
 -  컴포넌트의 이름 첫글자는 대문자로 작성
-  컴포넌트는 html 태그처럼 사용 가능함
- 컴포넌트  전달  값은 첫번째 인자(리액트에서는 props 라고 불림)에 object형태로 저장됨
 (ex. props.img, props.children)
 
## ■es6+ 디스트럭처링  문법(구조  분해  할당 )

객체구조(structure)를 de(제거)한다는 의미

ex1) 디스트럭처링  전
```js
const MainCard = (props) => {
	return(
		<div class="main-card">
			<img src={props.img} alt="고양이 "width="400" />
			<button>?</button>
		</div>
	);
}
```
ex2) 디스트럭처링  후
```js
const MainCard = (img) => {
	return(
	<div class="main-card">
		<img src={img} alt="고양이 "width="400" />
		<button>?</button>
	</div>
	);
}
```
## ■리액트에서의 CSS 스타일링

### 1)   리액트태그와 HTML태그의  다른  점

#### (1) 태그  속성

리액트 태그와 HTML태그는  속성이름이  다름

ex1) HTML 태그의 class 속성
```js
<div class="main-card"></div>
```
ex2) HTML 태그의 class 속성
```
<div className="main-card"></div>
```
#### (2) CSS 스타일링

HTML)
```css
	style="width:150px; border:1px solid #000;"
```
JSX)
```js
style = {{width:'150px', border: '1px solid #000'}}
```
style이라는 props에 object 형태로  명시

### 2) 최신  리액트 스타일링 기법

#### (1) emotion
css props 을 넘기거나, CSS를 컴포넌트 형태로 사용
> [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)

#### (2) Tailwind CSS(테일윈드)
css class 이름을 미리 지정한 것

> [https://tailwindcss.com/](https://tailwindcss.com/)

## ■이벤트  다루기

#### 1)  리액트  이벤트  핸들러와 HTML 이벤트핸들러의  차이

HTML)
```js 
onclick="sayHi()";
```
jsx)
``` js
onClick="{sayHi}";  
```
* onClick  대문자 주의
* 함수 호출 시 () 붙이지 않음

**★리액트에서는 이벤트 핸들러 관련 함수명을 붙일 때 hendle 이라는 이름을 앞에 불여주는 것이 관례**

ex1) onClick, onMouseOver 이벤트핸들러 작성
```js
const MainCard = (props) => {
	function hendleHeartClick() {
	console.log("하트 누름");
}

function hendleMouseOver() {
	console.log("마우스오버")
}

const MainCard = props => {
	return(
		<div className="main-card">
			<img src={props.img} alt="고양이 "width="400" />
			<button
			onClick={hendleHeartClick}
			onMouseOver={hendleMouseOver}>?</button>
		</div>
	);
}
```
ex2) onSubmit 이벤트 핸들러 작성
```js
const Form = () => {
	function handleFormSubmit(event) {
		event.preventDefault();
		/*
		form submit 동작시 HTML은 기본으로 웹 브라우저를 refresh 함
		refresh되지 않게 event.preventDefault() 시켜야함
		*/
		
		console.log("폼 전송됨");
	}
	return (
		<form onSubmit={handleFormSubmit}>
		// onSubmit 핸들러는 form 태그에서 사용
			<input
			type="text"
			name="name"
			placeholder="영어 대사를 입력해주세요"
			/>
			<button type="submit">생성</button>
		</form>
	);
};
```
## ■  리액트의  상태

### 1) 리액트의 상태란?

-  리액트에서는 계속 변하면서 지켜보고 원할 때 마다 변경할 수 있는 값을  상태라고  함
-   예시로  버튼을 누를 마다 n번째가 변경되는  것을  리액트에서는 "상태가 변경된다" 라고 함
-   useState 함수로 만들고 바꿀 수 있음

### 2) useState로 상태 만들기

ex1)
```js
const counterState = React.useState(1);
const counter = counterState[0];    //counter 그자체
const setCounter = counterState[1]; // counter를 조작하는 함수
```
ex2) 예시1을 **축약**한 형태
``` js
const [counter, setCounter] = React.useState(1);

console.log("카운터", counter) //카운터1

setCounter(counter + 1); //2
```
