## JSX

JavaScript + XML</br>


- JavaScript에 HTML태그를 끼얹은 문법
- HTML 태그 안에선 중괄호({})를 사용해서 JS를 쓸 수 있다.

```js
const count = 1;
const title = <h1>{count}번째 고양이</h1>
```

</br>
위 title변수에 담은 h1태그는 <b>리액트 엘리먼트</b>라고 부른다.

## Babel

최신 문법을 브라우저가 이해할 수 있는 JavaScript로 통역</br>


- 브라우저는 JSX를 이해하지 못한다.
- Babel이라는 통역사로 JSX -> JavaScript

```js
const title = <h1>안녕</h1> -> const tilte = React.createElement('h1',null,'안녕') 
```

## 리액트 코드 브라우저에 그리기

빈 HTML 공간에 React 때려박기

</br>
-html

```js
<div id="app"></div>
```

</br>
-React

```js
const target = document.querySelector('#app')
const myButton = <button>버튼</button>

ReactDOM.render(myButton, target)
```

## 컴포넌트

여기저기 재사용 가능한 UI 코드 조각

```js
<Card emoji={dog} tilte="멍멍"/>
<Card emoji={cat} tilte="야옹"/>

fuction Card(Props){
    return(
        <div>
        {props.emoji}
        <h2>{props.title}</h2>
        </div>
    )
}
```

## 스타일링

리액트에 CSS 끼얹기</br>


- CSS 클래스:className
- 인라인 스타일링: style={{스타일속성: 스타일값}}

```js
<div className="danger">위험</div>
<div style={{color:'red'}}>위험</div>
```

## 이벤트

사용자 이벤트(클릭, 스크롤 등) 다루기</br>


- 일반 자바스크립트 이벤트 목록과 동일하지만 중간을 대문자로 쓰면 된다.
- onclick -> onClick
- onsubmit -> onSubmit

```js
function handleClick(event){
    console.log("클릭했습니다.")
}
<button onClick={handleClick}>제출</button>
```

## 상태

컴포넌트 안에서 자유롭게 변경할 값이 필요할 때</br>


- useState합수로 상태를 추가할 수 있다.
- const[상태명, 상태변경함수명] = React.useState(초기값)
- 컴포넌트 안에서 만들 수 있다. 

```js
const [counter,setCounter] = React.useState(1)

function 카운터증가(){
    setCounter(counter + 1); //setCounter(prev => prev + 1)로도 가능!
}
return<button onClick={카운터증가}>카운터는{counter}</button>
```

## 상태

배열로 반복되는 UI그리기</br>


- 웹사이트를 만들 때 정말 많이 쓴다.
- 배열에서 map을 돌면서 리액트 UI를 반환한다.

```js
const favorites = ["이미지1", "이미지2", "이미지3"]

<ul>
{favorites.map(image => <img src={image}></img>)}
</ul>
```

## 폼

사용자 입력 다루기</br>


-  사용자 입력값을 직접 다루기 위해 value를 상태로 관리한다.

```js
const [value,setValue] = React.useState('초기값이에요')
function onValueChange(e){
    setValue(e.target.value);
}
<form onSubmit={handleSubmit}>
    <input value={value} onChange={onValueChange}/>
    <button type="submit">제출</button>
</form>
```

## 로컬스토리지 (리액트 문법X, 브라우저 기능O)

브라우저에 데이터 저장하기</br>


- 간단한 데이터 저장이 필요할 땐 localStorage를 쓰세요(7일까지저장가능)
- localStorage.setItem('이름','누리')
- localStorage.getItem('이름')//누리