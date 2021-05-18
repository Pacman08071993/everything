import React from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
import store from './state/store/store'
import {Provider} from 'react-redux';
import App from './component/App';


//Чтобы сказать всему приложению, что мы работаем с redux в консоль "npm instal react-redux"

//Provider - специальный компонент, в него мы оборачиваем всё наше приложение чтобы указать что мы работаем с redux(Главный компонент App) 

//Передаём в компонент Provider с помощью параметров store

ReactDOM.render(
<Provider store={store}>
  <App/>
</Provider>, 
document.getElementById('root')
  );
