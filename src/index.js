import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import './statics/iconfont/iconfont.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//引入css该文件中包含的其他组件也会生效
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
