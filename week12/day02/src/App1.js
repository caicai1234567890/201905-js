import React from 'react';
import logo from './logo.svg';
import Todo from './components/Todo';
import 'bootstrap/dist/css/bootstrap.min.css'
import Panel from './courses/0-复习'
import ThemeContext from './courses/ThemeContext'
import Theme from './courses/1-Test'

let header = <h1>头部</h1>
let body = <div>body</div>
let footer = <div>footer</div>
let slot = { header, body, footer}

// 如果这个 Contex 共享的值,在组件尽可能
function App() {
  return (
    <div>
      <ThemeContext.Provider value={{theme:'success'}}>
      
        <Theme />
        
      </ThemeContext.Provider>
      </div>
  );
}

export default App;
