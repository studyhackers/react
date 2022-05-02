*babel
자바스크립트의 새로운 문법을 브라우저가 이해할 수 있는 자바스크립트로 변환해주는 역할.

(브라우저는 하단에서 사용된 <script>를 읽고 그리는 것이 아니라 상단 <head>안에 들어있는 <script>를 읽고 그린다.) 

*좋은 점 
1.보통 태그에 붙이려는 html 내용을 string으로 변경 후에 사용해야하는데 그런 불필요한 점이 사라짐.
2.스크립트에서 반복적이 작업을 하려면 for문으로 작업울 진행하거나 아니면 하드코딩 작업을 진행하게 되는데
  리액트의 경우 for문 및 하드코딩으로 진행하지 않아도 됨.
  
ex)

* 강의 진행 시 오류 문구
Warning: Invalid DOM property `class`. Did you mean `className`?

*해결방법
=>class reander 에서 UI를 그려줄때 class대신 className을 사용한다. 
(기존에 html에서 사용하는 태그랑 리액트에서 사용하는 태그랑 다르기 때문에)

ex) *변경 전
     const favorites = (
            <ul class="favorites">
                {catItem}
            </ul>
        );

    *변경 후
        const favorites = (
                <ul className="favorites">
                    {catItem}
                </ul>
            );

