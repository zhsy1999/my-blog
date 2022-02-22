import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home />}></Route>
            <Route path='/detail' exact element={<Detail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </Provider>
  );
}

export default App;
