##React에서는 보통 CSS-in-JS을 통해 스타일 작업을 진행한다.
그중에서 styled-components, emotion이 가장 유명하고 많이 사용된다.

Css in JS 란?<br/>
CSS를 구성 요소를 추상화하고 JavaScript를 사용하여 선언적이고 유지 관리 가능한 방식으로 스타일


###- emotion 장점 
1. css props를 결합하여 복잡한 스타일링을 진행할 수 있다.<br/>
2. className이 자동으로 부여되기 때문에 스타일이 겹칠 염려가 없다.
3. emotion jsx에서 제공해주는 css 속성을 활용하면 이를 클래스로 변환해준다.
   기존 인라인으로 사용할 수 없었던 media query, pseudo selector, nested selector 등을 사용할 수 있다.
4. css props를 결합하여 복잡한 스타일링을 진행할 수 있다.

```html
//예시
<div css={[style, themes[theme], sizes[size]]} />
  
const themes = {
  primary: css`
    color: red;
  `,  
  secondary: css`
    color: blue;
  `
}
const sizes = {
  small: css`
    fontSize: 0.75rem;
  `,
  medium: css`
    fontSize: 1rem;
  `
}
```

####[결론]
- 성능상 둘은 유의미하게 차이가 나지 않는다.<br/>
- emotion의 css props로 css를 더 활용도 높게 조립할 수 있다.<br/>
- SSR(서버사이드렌더링)에서는 emotion 세팅시 더 간편하다.
- 속도는 emotion이 근소하게 더 빠르다고 나오지만 이또한 상황마다 다를 수 있기 때문에<br>
본인에게 더 편한 쪽으로 사용하면 좋을 것 같다.