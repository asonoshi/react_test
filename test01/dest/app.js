'use strict';

{} /* comment
   JSXの基本ルール
   1.最上位は複数要素を置けないので、DIV等で囲って使う
   <div>
    <h1>Hello, world!</h1>
    <h2>texttext</h2>
   </div>,
   2.コメントアウト
   JSX内にHTMLのコメントアウトは利用できません。
   JSのコメントアウトを{/* comment * /}のように使う
   3.空要素を記述できない。単独の要素は必ず最後に閉じ/を入れる
    <img src="foo.jpg" alt="" />
   
   4.HTMLのclass属性は＞className属性として使う
    <h1 className="foo">Hello, world!</h1>
   
   5.HTMLのfor属性は使えない
    <label for="name">Hello, world!</label>
    ＞
    <label htmlFor="name">Hello, world!</label>
   のようにｈｔｍｌForとする。
   
   6.value属性　＞defaultValue
   input要素などのvalue属性でフォームの初期値を設定すると値の変更ができなくなります。
   値を変更したい場合はdefaultValue属性を利用します。
   ×<label htmlFor="name"><input type="text" value="aaa" /></label>
   ＞
   ○<label htmlFor="name"><input type="text" defaultValue="aaa" /></label>
   
   7.checked属性＞defaultChecked
   ラジオボタンやチェックボックスでもcheckedを付与してしまうとチェックが変更できなくなります。
   8.style属性も直接使用できない
   {{…}}内にオブジェクト記法で指定する必要があります。
   <h1 style={{color:'red',fontSize:'12px'}}>Hello, world!</h1>
   9.名前空間
   属性に名前空間が必要な場合、たとえばsvgのxlink:hrefはエラーがでます。
   ×<use xlink:href="/svg/svg-sprite#my-icon"></use>
   ＞
   ○<use xlinkHref='/svg/svg-sprite#my-icon' />
   
   10.JavaScript
   {}内にはJavaScriptの記述が適用できます。
   スプレッド演算子( … )を用いてオブジェクトを展開して設定することもできる。
   下記の場合はh1要素にはid属性「bar」とclass属性「foo」が設定されている。
   const props={
   id:"bar",
   className:"foo"
   };
   ReactDOM.render(
   <div>
    <h1 {...props}>Hello, world!</h1>
   </div>,
   JSXの基本　おわり
   */

//コンポーネントの作成
var MyComponent = React.createClass({
  displayName: 'MyComponent',

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hellor,world!'
      ),
      React.createElement(
        'h2',
        null,
        'texttext'
      )
    );
  }
});

ReactDom.render(React.createElement(MyComponent, null),

// <div>
//   <h1>Hello, Workd!</h1>
//   <h2>texttext</h2>
// </div>,//html部分が終わるところに区切りのカンマ
document.getElementById('app'));