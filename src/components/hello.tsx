import { useState } from "react";

export default function(props) {
  const {name} = props
  const [count, setCount] = useState(0)
  return <div>
    <h1>展示props</h1>
    hello {name}
    <button onClick={() => props.onCustomEvent(num => num + 1)}>点我触发自定义事件</button>
    <hr />
    <h1>展示useState</h1>
    {count}
    <button onClick={() => setCount(count + 1)}>点我加1</button>
    <hr />
    <h1></h1>
    {props.render('111')}
  </div>
}
