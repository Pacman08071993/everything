import React, { Component } from 'react'

class Page extends Component{
  constructor(props) {
    super(props)
    this.state = {
      pageTitle: 'React Components'
    }
  }

  handleChangeTitle = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + '(changed)'

    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    return(
      <Title name={this.state.pageTitle} changeTitle={this.handleChangeTitle} /> // пердаём ссылку на метод без вызывающих скобок
    )
  }
}

class Title extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.changeTitle}>Change</button>  // пердаём ссылку на метод без вызывающих скобок, onClick при нажатии их поставит за нас
      </div>
    )
  }
}

// state - это JS объект который описывает то состояние в котором находится компонент
// state нельзя изменять напрямую для этого нужно использовать setState()

//создавать state следует в constructor(){}

setState({something: newValue})
// мы получаем этот метод при наследовании от Component, меняет состояние state, а так как он меняет свойтсва в state он вызывает метод render() для того чтобы обновить компоненты

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));
// Функция переданная в setState получит предыдущее состояние в качестве первого аргумента и значения пропсов непосредственно во время обновления в качестве второго аргумента