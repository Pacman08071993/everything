import React, { Component } from 'react'

class Page extends Component{
  constructor(props) {
    super(props)
    this.state = {
      cars:[
        {name: 'Ford', year: 2015},
        {name: 'Mazda', year: 2017},
        {name: 'Audi', year: 2020},
      ],
      pageTitle: 'React Components',
      subTitle: 'Something'
    }
  }

  handleChangeTitle = () => {
    const oldTitle = this.state.pageTitle
    const newTitle = oldTitle + '(changed)'
  
  handleChangeTitleParam = newTitle => {
    console.log('click')
  }
    this.setState({
      pageTitle: newTitle
    })
  }

  render() {
    return(
      <div>
       <h2>{this.state.pageTitle}</h2>
       <button onClick={this.handleChangeTitle}></button>
       <Car 
          data={ this.state.cars[0] }
          onChange={this.handleChangeTitleParam.bind(this, cars[0].name)} />
       <Car 
          data={ this.state.cars[1] } 
          onChange={() => this.handleChangeTitleParam(cars[1].name)} 
          />
       <Car 
          data={ this.state.cars[2] } 
          onChange={() => this.handleChangeTitleParam(cars[2].name)} 
          />
      </div>
    )
  }
}

class Car extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h2>Name: { this.props.data.name }</h2>
        <h2>Year: { this.props.data.year }</h2>
        <button onClick={this.props.onChange}></button>
      </div>
    )
  }
}

// 1) без параметров :
  // когда нам нужно передать функцию обработчик пропсами передаём changeTitle={this.handleChangeTitle} ссылку на метод
  // в обработчике нам нужно принять с помощью пропсов тоже просто ссылку onClick={this.props.changeTitle}

// 2)с параметрами : 
  // когда нам нужно передать с параметрам мы должны обернуть в функцию стрелку и вызвать её с помощью "()" changeTitle={() => this.handleChangeTitle(item)}
  // в обработчике нам нужно принять с помощью пропсов и тоже обернуть в фунцию стрелку и вызвать её с помощью "()" onClick={() => this.props.changeTitle()}

