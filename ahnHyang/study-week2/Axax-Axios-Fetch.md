# 1. Ajax

AJAX (Asynchronous JavaScript And XML)란, 자바스크립트를 사용해 비동기식으로 서버에 데이터를 요청하여  
필요한 데이터를 받아와 전체 페이지를 새로 고치지않고,  
변경이 필요한 부분만을 고치는 기법이다.  
Ajax의 주목적은 화면 전환 없이 클라이언트와 서버간의 정보를 교환하기 위해서이다.
[XMLHttpRequest 간략설명](http://www.tcpschool.com/xml/xml_dom_xmlHttpRequest)
<br/>
<br/>

### 1.1 Jquery와의 관계성

보통 Ajax와 Jquery는 묶여서 함께 불리는 경우가 많은데,
이는 Jquery를 통해 Ajax를 더 쉽고 편리하게 사용할 수 있어서이다.
<br/>
- 순수 Ajax 코드

```js
// use Ajax without Jquery
function reqListener(e) {
  console.log(e.currentTarget.response);
}
var oReq = new XMLHttpRequest();
var serverAddress = "http://ttodo.teamcode88.com/dummy/user.json";
oReq.addEventListener("load", reqListener);
oReq.open("GET", serverAddress);
oReq.send();
```

- Jquery를 통해 Ajax를 사용하는 경우

```js
// jQuery의 .get 메소드 사용
var serverAddress = "http://ttodo.teamcode88.com/dummy/user.json";
$.ajax({
  url: serverAddress,
  type: "GET",
  success: function onData(data) {
    console.log(data);
  },
  error: function onError(error) {
    console.error(error);
  },
});
```
<br/>

또한, Ajax만을 사용할 때는 브라우저 간 호환성에 대해 염두해두고 각기 다른 코드를 작성해야하는 경우가 있는데,  
**Jquery를 사용할 경우 호환성 처리도 더 편리하다.**

<br/><br/>

# 2. Axios

Promise 기반의 HTTP 통신 라이브러리이다.  
상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양하다.  

<br/>

* 기본문법

```js
axios({
  url: 'https://cataas.com/cat/says/First%20cat?json=true',
  method: 'get',
  data: {
    id: 'test'
  }
})
.then(res => console.log(res))
.catch(err => console.error(err));
```

<br/>

### 2.1 Axios 특징
- 브라우저 호환성이 뛰어나다.
- 여러 요청 필요할시 모듈화가 간편하다.


<br/>

### 2.2 Axios의 응답 제어
> - .then()  
> 비동기 통신이 성공했을 경우, .then()은 콜백함수를 인자로 받아 결과값을 처리할 수 있다.
> 
> - .catch()  
> 통신 중 오류가 발생했을 경우 error 객체를 인자로 받아 에러를 처리한다.
<br/><br/>

# 3. fetch
fetch는 es6부터 도입된 자바스크립트 내장 라이브러리이며,  
promise기반으로 만들어졌기에 Axios와 마찬가지로 데이터를 다루기에 편리하다.

<br/>

* 기본문법

```js
fetch("https://cataas.com/cat/says/First%20cat?json=true")
.then(res => console.log(res.json());)  // .json() 메소드를 사용해야 데이터 확인 가능.
.catch(err => console.error(err));
````

<br/>

### 3.1 fetch 특징
- 자바스크립트 내장 라이브러리로 별도 import가 필요 없다.
- 내장 라이브러리로 인해 소스 업데이트에 따른 에러 방지가 가능하다.

<br/><br/>

# 4. Axios vs fetch

|Axios|fetch|
|------|---|
|별도 라이브러리 설치가 필요. (npm, yarn 통해)|자바스크립트 빌트인이라 설치가 필요 없음|
|CSRF 보호 가능|별도 보호 없음|
|자동으로 JSON데이터 형식으로 변환된다|.json()메서드를 사용해야 한다.|
|요청을 취소하거나 요청이 중단되기까지의 시간 타임아웃을 걸 수 있다.|지원하지 않음|
|HTTP 요청을 가로챌 수(interceptor) 있음|지원하지 않음|
|크로스 브라우징 지원|일부 브라우저에 제한적|

<br/>

[참고자료] 
- fetch vs Axios.js 영문 (https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5)
- fetch vs Axios.js 영문2 (https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/)
