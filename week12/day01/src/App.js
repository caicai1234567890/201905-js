import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Panel from './course/2-组合';
import ContextTest from './course/4-context'
import Username from './course/5-Username';
import Password from './course/5-Password';
function App() {
  let header = <h1>这个是 heading</h1>
  let body = <p>这是一段文本主体</p>
  let footer = (<footer><button className="btn btn-danger">删除</button>
      <button className="btn btn-success">添加</button>
    </footer>)

  return (
    <div className="App">
     {/*  <Panel head = {header} body={body} footer={footer}>
        <section>
          <p>p1</p>
        </section>
      {/*  <h1>这是个panel</h1>
        <p>这是个p标签</p>
      
      </Panel>
      */}
      {/* <ContextTest /> */}
      <Username />
      <Password />
    </div>
  );
}

export default App;
