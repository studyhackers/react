# ���͵� 1���� 
> ����  ����Ʈ: [https://github.com/milooy/cat-jjal-maker](https://github.com/milooy/cat-jjal-maker)

## ��ǽ�  ȯ�漳��

> [vscode] - [����] - Format On Save üũ

�ҽ��ڵ尡  ����, �� �� ���� �ʾ� ������ �� �� ����  �� �ڵ�����  �������ִ� ���

## �Ḯ��Ʈ�� ?

### 1) ����Ʈ�� ����ϴ� ����?

JS ���� ���� ������ �� ����Ʈ�� ����� ���� ����ϴ� �ڹٽ�ũ��Ʈ ���̺귯��
<br>
### 2) JS�� ����Ʈ ���ϱ�(ul ��ҿ�  ���ο� li�� img��  ����)
JS)
```JS
const ul = document.querySelector("ul");
const newFavoriteImage = document.createElement("img"); //�̹��� �±� ����

newFavoriteImage.src ="./cat.jpg"; //�̹��� �±׿� ����� �̹��� ����

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
	
ReactDom.render(catItem, app) // catItem�� #app��  �ۼ�
```

js�� querySelector, createElement, appandChild �� ���� DOM API�� ����ϰ� ��

(������ ������ �߰��Ϸ� �ص� js�� ����� -> ������Ʈ�� Ŀ�� ��� ����Ұ�)

**����Ʈ��  ����ϸ�  �����ϰ�  �ڵ�  �ۼ���  ������**

## ��  ����Ʈ  ����ϱ�

> ����  ����Ʈ : [https://ko.reactjs.org/docs/add-react-to-a-website.html](https://ko.reactjs.org/docs/add-react-to-a-website.html)
<br>
### 1)  script �±�  �ȿ�  ����Ʈ  ��  ����Ʈ DOM ���̺귯��  �߰�
```JS
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```
### 2) script �±�  �ȿ� bable �߰�  ��  ������ script type ����
```JS
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
<script type="text/babel"></script>
```
## �� babel�̶�?

�����Ϸ�. ���ο� �ڹٽ�ũ��Ʈ ������ �������� ������ �� �ֵ��� ��ȯ���ִ� ������ ��

> �ٺ� ���Ļ���Ʈ : [https://babeljs.io/](https://babeljs.io/)

*�� ����Ʈ���� ����Ʈ ������ �Է��ϸ� �ٺ��� �������� ������ �� �ֵ��� ������ ������ Ȯ�� �� �� ����

=> ����Ʈ ������ ����ϸ� �ٺ��� �ش� �ڵ带 �о� <head>�ȿ� �������� ���� �� �ִ� �ڵ带 �߰���(������ �������� Ȯ�� ����)

�������� �� �ȿ� �ִ� �ڵ带 �о ���������� ������

## �� JSX�� HTML�� JS «���ϱ�

### 1)  JSX��?

Ȯ��� JS ����. JS�� XML ������  ��ģ  ������  ����. ����Ʈ��  ����  ����
JSX�� React ��������Ʈ(element)��  ��  ����
����Ʈ������  ������  ������  ��Ҹ� element(������Ʈ)���  �θ�

ex) JSX ���� - element ����
```js
const element = (<h1>Hello, world!</h1>);
```

### 2)  ����Ʈ  �ȿ��� JS���� ����ϱ� : {  }
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
{  } �ȿ�  js ���� (JS ǥ����)�� �״�� ����� �� ����

**ǥ�����̶�? ���� ��ȯ�ϴ� �� �Ǵ� �ڵ�**

���� ���ؼ�, ǥ�����̶� js�� ���� �� ���� ���� ������ ���� ����

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
### 3) ����Ʈ��  ����  ��� render

 ReactDOM.**render**(���, ��ġ)

### 4) ����Ʈ�� ���� ��Ҹ� 2�� �̻� render �ϰ� ���� ��� �ֻ��� �±׷� ���� ���

ex) ����1
```js
ReactDOM.render(mainCard, ����ٰ��׷�)
ReactDOM.render(favorites, ����ٰ��׷�) // ����
```
ex) ����2
```js
const app = (
	{favorites}
	{mainCard}
)
//���� - �ֻ��� �±װ� 1��������
```

ex) ����������  �����  ��
```js
const app = (
	<div>
		{favorites}
		{mainCard}
	</div>
)

ReactDOM.render(app , ����ٰ��׷�)
```
## ��  ������Ʈ

### 1) ������Ʈ��?

�ֽ� �� ������ �ٽ�. �ݺ��Ǵ� ������(������������ �ݺ������� ����ϴ� ��� ex. ��Ÿ���� ���� ��ư)���� ������Ʈ��� ��

### 2) ������Ʈ  ����� ����
(1) �ϰ���
(2) �ٸ� ������� ������Ʈ�� ����� �� ����  (������Ʈ ����)

> Ant Design (ui ���̺귯��)
[https://github.com/milooy/cat-jjal-maker/blob/main/answers/9-what-is-component.html](https://github.com/milooy/cat-jjal-maker/blob/main/answers/9-what-is-component.html)

**�ڸ���Ʈ�� �����Ѵٴ� ���� ������Ʈ�� ����Ͽ� �����Ѵٴ� ��**

ex) ������Ʈ ����
```js
// ������Ʈ��  �Լ���  ����

function Card(title, description) {
	return (
		<div>
			<h2>{title}</h2>
			{description}
		</div>
	);
}

//����� 1
Card('Ÿ��Ʋ1', '����1');
Card('Ÿ��Ʋ2', '����2');

//����� 2 - HTML �±�ó��  ���  ����
<Card title="Ÿ��Ʋ1" description="����1">
<Card title="Ÿ��Ʋ2" description="����2">
```
### 3) ������Ʈ �����

**��  ������Ʈ�� �̸� ù���ڴ� �빮�ڷ� �ۼ�**

ex1) �Ϲ��Լ���  ������Ʈ  ����, ����  �����ϱ�1
```js
function CatItem(props) {  
//����Ʈ������ �Ѿ�� ���� ù��° ���ڿ� ����, ���ڸ� �Ѱ��� ���� props(���ӽ�)��� ��
	return (
		<li>
			<img src={props.img} />  
			{/* ���ڷ� ������Ʈ ���� ��*/}
		</li>
	);
}

<CatItem img="./example.jpg"/>
```
ex2) �Լ�ǥ�������� ������Ʈ ����
```js
const CatItem = function(props) {
}
```
ex3) ȭ��ǥ�Լ��� ������Ʈ ����
```js
const CatItem = props => {
}
```
ex4) ���� �����ϱ� 2
```js
const Title = props => {
	return (
		<h1>{props.children}</h1> // ��� ���� ������ children���� �Ѿ��
	);
}

<Title>1��° ����� ������2</Title>
```

---
**���**
-  ������Ʈ�� �Լ� ���·� �� ���� �� ���� (�Լ�ǥ����, ȭ��ǥ�Լ� ����) +Ŭ���� �Լ�
 -  ������Ʈ�� �̸� ù���ڴ� �빮�ڷ� �ۼ�
-  ������Ʈ�� html �±�ó�� ��� ������
- ������Ʈ  ����  ���� ù��° ����(����Ʈ������ props ��� �Ҹ�)�� object���·� �����
 (ex. props.img, props.children)
 
## ��es6+ ��Ʈ��ó��  ����(����  ����  �Ҵ� )

��ü����(structure)�� de(����)�Ѵٴ� �ǹ�

ex1) ��Ʈ��ó��  ��
```js
const MainCard = (props) => {
	return(
		<div class="main-card">
			<img src={props.img} alt="����� "width="400" />
			<button>?</button>
		</div>
	);
}
```
ex2) ��Ʈ��ó��  ��
```js
const MainCard = (img) => {
	return(
	<div class="main-card">
		<img src={img} alt="����� "width="400" />
		<button>?</button>
	</div>
	);
}
```
## �Ḯ��Ʈ������ CSS ��Ÿ�ϸ�

### 1)   ����Ʈ�±׿� HTML�±���  �ٸ�  ��

#### (1) �±�  �Ӽ�

����Ʈ �±׿� HTML�±״�  �Ӽ��̸���  �ٸ�

ex1) HTML �±��� class �Ӽ�
```js
<div class="main-card"></div>
```
ex2) HTML �±��� class �Ӽ�
```
<div className="main-card"></div>
```
#### (2) CSS ��Ÿ�ϸ�

HTML)
```css
	style="width:150px; border:1px solid #000;"
```
JSX)
```js
style = {{width:'150px', border: '1px solid #000'}}
```
style�̶�� props�� object ���·�  ���

### 2) �ֽ�  ����Ʈ ��Ÿ�ϸ� ���

#### (1) emotion
css props �� �ѱ�ų�, CSS�� ������Ʈ ���·� ���
> [https://emotion.sh/docs/introduction](https://emotion.sh/docs/introduction)

#### (2) Tailwind CSS(��������)
css class �̸��� �̸� ������ ��

> [https://tailwindcss.com/](https://tailwindcss.com/)

## ���̺�Ʈ  �ٷ��

#### 1)  ����Ʈ  �̺�Ʈ  �ڵ鷯�� HTML �̺�Ʈ�ڵ鷯��  ����

HTML)
```js 
onclick="sayHi()";
```
jsx)
``` js
onClick="{sayHi}";  
```
* onClick  �빮�� ����
* �Լ� ȣ�� �� () ������ ����

**�ڸ���Ʈ������ �̺�Ʈ �ڵ鷯 ���� �Լ����� ���� �� hendle �̶�� �̸��� �տ� �ҿ��ִ� ���� ����**

ex1) onClick, onMouseOver �̺�Ʈ�ڵ鷯 �ۼ�
```js
const MainCard = (props) => {
	function hendleHeartClick() {
	console.log("��Ʈ ����");
}

function hendleMouseOver() {
	console.log("���콺����")
}

const MainCard = props => {
	return(
		<div className="main-card">
			<img src={props.img} alt="����� "width="400" />
			<button
			onClick={hendleHeartClick}
			onMouseOver={hendleMouseOver}>?</button>
		</div>
	);
}
```
ex2) onSubmit �̺�Ʈ �ڵ鷯 �ۼ�
```js
const Form = () => {
	function handleFormSubmit(event) {
		event.preventDefault();
		/*
		form submit ���۽� HTML�� �⺻���� �� �������� refresh ��
		refresh���� �ʰ� event.preventDefault() ���Ѿ���
		*/
		
		console.log("�� ���۵�");
	}
	return (
		<form onSubmit={handleFormSubmit}>
		// onSubmit �ڵ鷯�� form �±׿��� ���
			<input
			type="text"
			name="name"
			placeholder="���� ��縦 �Է����ּ���"
			/>
			<button type="submit">����</button>
		</form>
	);
};
```
## ��  ����Ʈ��  ����

### 1) ����Ʈ�� ���¶�?

-  ����Ʈ������ ��� ���ϸ鼭 ���Ѻ��� ���� �� ���� ������ �� �ִ� ����  ���¶��  ��
-   ���÷�  ��ư�� ���� ���� n��°�� ����Ǵ�  ����  ����Ʈ������ "���°� ����ȴ�" ��� ��
-   useState �Լ��� ����� �ٲ� �� ����

### 2) useState�� ���� �����

ex1)
```js
const counterState = React.useState(1);
const counter = counterState[0];    //counter ����ü
const setCounter = counterState[1]; // counter�� �����ϴ� �Լ�
```
ex2) ����1�� **���**�� ����
``` js
const [counter, setCounter] = React.useState(1);

console.log("ī����", counter) //ī����1

setCounter(counter + 1); //2
```
