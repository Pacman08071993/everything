// 1) JSX - это расширение языка JS.Используется для объяснения React как должен выглядить UI
// 2) JSX производит «элементы» React
// 3) JSx - это разметка и логика в одном файле
// 4) Если используем jsx, то обязательно делать импортт :
//                          import React from 'react';


//Примеры использования :

// 1) Допускается любая логика внутри '{}' в jsx (2 + 2, user.firstName и formatName(user))
const name = 'Иван-Царевич';
const element = <h1>Здравствуй, {name}!</h1>; //

ReactDOM.render(
  element,
  document.getElementById('root')
);


// 2) JSX - можно использовать внутри выражений if и циклов for, присваивать переменным, передавать функции в качестве аргумента и возвращать из функции.
function getGreeting(user) {
    if (user) {
      return <h1>Здравствуй, {formatName(user)}!</h1>; 
    return <h1>Здравствуй, незнакомец.</h1>;
  }
}


// 3) Значения атрибутов в JSX :

    // * для строки используют " "
    // * для выражений используют {}


// 4) jsx под капотом :

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hello world</h1>
      </div>
    )
  }
}

class App extends Component {
  render() (
    return React.createElement(
      'div', - // тип элемента который мы должны передать
      {
        className: 'App'
      }, - // набор опций который мы должны задать нашему 'div'
      React.createElement(
        'h1',
        null,
        'Hello world'
      )
    )
  )
}

// inline-style :

class App extends Component {
  render() {
    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={ divStyle }> - передаём переменную
        <h1 style={{color: 'blue'}}> - передаём объект напрямую
          Hello world
        </h1> 
      </div>
    )
  }
}






