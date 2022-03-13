import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail/loadable.js'
// import Detail from './page/detail'
import Login from './page/login'
import Write from './page/write'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
        {/* header中使用Link 必须放在BrowserRouter中 */}
          <Header></Header>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/login' exact element={<Login />}></Route>
            <Route path='/Write' exact element={<Write />}></Route>
            <Route path='/detail/:id' exact element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
