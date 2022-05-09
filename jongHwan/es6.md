# Class


### class 기본문법

```js
class MyClass {
  constructor(name,phone) { //(생성자 함수)new 연산자를 통한 클래스 오브젝트 생성시 최초로 동작하는 메소드이며, constructor라는 이름을 사용한다.주로 생성한 객체의 멤버 변수를 초기화함
    this.name = name;
    this.phone = phone;
  }

  method1() { //메서드 여러게 사용가능
    console.log("내이름은"+ this.name + " 전화번호는 " +this.phone+ "입니다.");
  }
  
  method2(age) { //메서드 여러게 사용가능
    console.log(`내이름은 ${this.name} 전화번호는 ${this.phone} 입니다. 나이는 ${age}살`);  //es6 backtick 문법사용 간편하게 출력가능
  }
  method3() { //메서드 여러게 사용가능
    console.log(this.name);
  }
}

// 사용법:
let myclass = new MyClass("John","010-1541-1633");
myclass.method1();
myclass.method2(10);
console.log(typeof MyClass); // function 으로 출력 class는 함수

추가로 클래스는 항상 엄격 모드로 실행됩니다(use strict). 클래스 생성자 안 코드 전체엔 자동으로 엄격 모드가 적용됩니다.
use strict <<(https://ko.javascript.info/strict-mode) 참조 

```

### 위 class에서 값을 상속받아보자

```js
class Child extends MyClass{
  constructor(name,phone,address){
    super(name,phone)  //super로  부모 class에서 생성자를 호출함
    this.address = address  // 추가 프로퍼티 초기화
  }
  
  method4(){
	 super.method1();
  }
  
}

let child = new Child("John","010-1541-1633");
child.method4();
```



# promise 

### promise 기본문법


```js
//프라미스의 기본문법
function printWord (word) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(word);
			resolve();
		}, 1000);
	});
}

printWord('Hello')
.then(() => printWord('World'))
.then(() => printWord('I am'))
.then(() => printWord('Julia!'));


```


### promise 메서드

Promise.all(promises) – 모든 프라미스가 이행될 때까지 기다렸다가 그 결괏값을 담은 배열을 반환합니다. 주어진 프라미스 중 하나라도 실패하면 Promise.all는 거부되고, 나머지 프라미스의 결과는 무시한다.

Promise.allSettled(promises) – 최근에 추가된 메서드로 모든 프라미스가 처리될 때까지 기다렸다가 그 결과(객체)를 담은 배열을 반환합니다. 객체엔 다음과 같은 정보가 담긴다.
status: "fulfilled" 또는 "rejected" value(프라미스가 성공한 경우) 또는 reason(프라미스가 실패한 경우)

Promise.race(promises) – 가장 먼저 처리된 프라미스의 결과 또는 에러를 담은 프라미스를 반환

Promise.resolve(value) – 프라미스 성공 

Promise.reject(error) – 프라미스 실패 에러값 반환


### promise 오류처리

```js

const throwError = new Promise((resolve, reject) => {
  resolve("success");
});
throwError.then(
  () => { throw new Error("wierd error") },
  () => console.log("throwError catched")
)

// then 만 쓰더라도 reject 된 Promise 에 대한 처리를 할수있음

// 하지만 then 함수에서 에러가 발생한다면, 그 때는 그 에러를 책임져줄 코드가 없음  그래서 그냥 catch 를 마지막 즈음에 쓰는 게 좋다고생각함 


.catch((e) => console.log("final catch"));


```


#    async,await 

### async  ⭐

async 키워드는 함수를 선언할 때 함수명 앞에 붙여줄 수 있다

async 함수는 Promise 와 굉장히 밀접한 연관을 가지고 있다.

함수에 async 키위드를 붙이면 기존 resolve(value); 부분을 return value; 로 변경가능함. 
그리고 reject(new Error(…)); 부분을 throw new Error(…); 로도 변경 가능해서 코드가 심플해짐
또한 함수에 async 를 붙일시 따로 new Promise를 선언하지 않아도 값을 Promise로 반환해서 사용가능 
⭐

```js

// 기존
// function startAsync(age) {
//  return new Promise((resolve, reject) => {
//    if (age > 20) resolve(`${age} success`);    
//   else reject(new Error("Something went wrong"));
//  });
// }


function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

async function startAsync(age) { //
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

console.log(startAsync(25))


setTimeout(() => {
   await setTimeoutPromise(2000);
  const promise1 = startAsync(25);
  promise1
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
  const promise2 = startAsync(35);
  promise2
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      console.error(error);
    });
}, 1000);

```
### await

await 는 Promise 가 fulfilled 가 되든지 rejected 가 되든지 아무튼 간에 끝날 때까지 기다리는 함수 , async 함수에서만 사용할 수 있다.


```js

function setTimeoutPromise(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}

 function startAsync(age) {  //async 사용 하여야 프라미스 로 만들어저서 프라미스 프로토타입 사용가능 현재 catch 오류문 사용못함 throw new를 사용못해서
  if (age > 20) return `${age} success`;
  else throw new Error(`${age} is not over 20`);
}

async function startAsyncJobs() {
  await setTimeoutPromise(1000);//await 위 프라미스가 다 끝날때까지 밑에 수행 코드 수행못함 ⭐
  const promise1 = startAsync(25);
  try {
    const value = await promise1;
    console.log(value);
  } catch (e) {
    console.error(e);
  }
  const promise2 = startAsync(15);
  try {
    const value = await promise2;
    console.log(value);
  } catch (e) {
    console.error("에러다 이녀석아");
  }
}

startAsyncJobs();


```


