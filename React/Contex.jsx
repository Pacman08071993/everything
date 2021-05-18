// Context - позволяет передавать данные через дерево компонентов без необходимости передавать пропсы на промежуточных уровнях.

// Когда использовать контекст :

  // Для передачи глобальных данных
  // 1) текущий аутентифицированный пользователь
  // 2) UI-тема 
  // 3) выбранный язык 


// Создание Context 
  // 1) React.createContext(false) - создаёт контекст с параметром false поумолчанию
  // 2)<Provider value={this.state.clicked}></Provider> - компонент Provider используется для передачи текущего значения вниз по дереву.Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.
  // 3)Consumer — это React-компонент, который подписывается на изменения контекста. В свою очередь, использование этого компонента позволяет вам подписаться на контекст в функциональном компоненте.
  
  

import React, { Component } from 'react'
import Counter from './Counter';

export const ClickedContext = React.createContext(false)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clicked: false,
    }
  }

  render() {
    return (
      <div>
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>
        <button onClick={() => this.setState({ clicked: true })}>Change cliked</button> 
      </div>
      
    )
  }
}



import React, { Component } from 'react'
import SubCounter from './Counter2';

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  addCounter = () => (
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
        }
      }
    )
  )

  decCounter = () => {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      }
    })
  }
  
  render() {
    return (
      <>
        <h2>Counter { this.state.counter }</h2>
        <SubCounter />
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.decCounter}>-</button>
      </>
    )
  }
}



import React, { Component } from 'react'
import { ClickedContext } from '../App';

class SubCounter extends Component {
  render() {
    return (
      <div>
        <h3>Counter 2</h3>
        <ClickedContext.Consumer>
          { clicked => clicked ? <p>Clicked</p> : null }
        </ClickedContext.Consumer>
      </div>
    )
  }
}


class MyClass extends React.Component {
  componentDidMount() {
    let value = this.context;
    /* выполнить побочный эффект на этапе монтирования, используя значение MyContext */
  }
  componentDidUpdate() {
    let value = this.context;
    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    /* ... */
  }
  render() {
    let value = this.context;
    /* отрендерить что-то, используя значение MyContext */
  }
}
MyClass.contextType = MyContext;

// В свойство класса contextType может быть назначен объект контекста, созданный с помощью React.createContext(). С помощью этого свойства вы можете использовать ближайшее и актуальное значение указанного контекста при помощи this.context. В этом случае вы получаете доступ к контексту, как во всех методах жизненного цикла, так и в рендер методе.


// Объекту Context можно задать строковое свойство displayName. React DevTools использует это свойство при отображении контекста.

// MyContext.displayName = 'MyDisplayName';