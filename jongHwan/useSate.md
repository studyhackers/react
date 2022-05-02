## useState란


 useState는 컴포넌트에서 state값을 추가할때 사용된다. <br/>
 함수형 컴포넌트에서는 클래스형 컴포넌트처럼 state를 사용할 수 없어, Hook을 사용해서 state와 같은 기능을 할 수 있도록 만들어주었다.
 
 위에서 훅이란 기존 클래스형이 아닌 함수형 컴포넌트에서 상태값 말고도 클래스형 컴포넌트에서 가능했던 기능들을 Hook을통해 동일하게 기능을 이용할수 있게 해주는 기능이 있다.<br/>
 (Hook의 종류로는 useState, useEffect, useContext, useRef 등등 다른기능이도 많지만 대표적으로 4가지가 제일 많이 쓰이고)<br/>
 이번에 배운 useState 를 배워보자.
 
 ### 기존 클래스형 컴포넌트에서 상태값 변경하기
 
 ```
class Counter extends React.Component {
  constructor(props) { //React.Component의 생성자 메소드를 먼저 실행
    super(props); 
    this.state = { // 이 컴포넌트의 state 설정
      number: 0 // number의 초기 값 설정
    };
  };
  handleClick() {
    this.setState(() => {
      return {number: this.state.number + 1};
    });
  };
  render() {
    return (
      <div>
        <h2>{this.state.number}</h2> // state의 number 값을 표시
        <button onClick={this.handleClick}>Increase</button>
      </div>
    );
  };
}
 
 ```
 ### 함수형 컴포넌트에서 useState를 사용하여 상태값 변경하기
 
 ```
 
 function Counter(props) {
  const [number, setNumber] = React.useState(0);
  
  return (
    <div>
        <h2>{number}</h2>
        <button onClick={()=>setNumber(number+1)}>Increase</button>
      </div>
  );
};

 ```
 
 이뿐만 아니라 state를 활용하여 react에서는 기능개발이 거의 이루어진다.
 
 예를들어 우리가 쉽게 접근할수 있는 기본적은  팝업 on/off 기능을 예를 들어보자
 
 ```
 
function tabTest(){

const [ showPopup, setShowPopup ] = useState(false);

const togglePopup = (e) => {
      setShowPopup(!showPopup); // false => true, true => false
  };


return(
  <div>
    <button type="button" onClick={togglePopup}>버튼</button>
  </div>

  {showPopup ? <div>true일때 나오는 팝업~</div> : "" }

)


}
 
 ```


 위 state처럼 상태값은 number,Boolean,string,배열 등 이용할수 있는 타입이 자유롭다.
 이외에 어떠한 기능들에서 더 자유롭게 쓸수 있을지 생각해보자.........
 
