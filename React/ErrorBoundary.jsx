// ErrorBoundary(){} - служит для того чтобы обрабатывать ошибки

// 1) Создаём реакт компонент ErrorBoundary

// 2) У данного класса должен быть локальный state, где мы будем хранить иформацию об ошибке в свойстве hasError: false(по умолчанию)

// 3) Реализуем в компоненте специальный метод componentDidCatch(error, info){} - данный метод будет вызван если поймет что его дети словили некоторую ошибку. Если мы поймали некоторую ошибку, с помощью setState меняем в локальном стейте свойство hasError: true

// 4) реализуем метод render(){} в нем будем проверять если в свойстве hasError будет true тогда рендерим информацию об ошибке, если в свойстве ничего нет тогда возвращаем this.props.children(к примеру!!!!)

// 5) После создания компонента ErrorBoundary импортируем его в нужный компонент и оборачиваем его в ErrorBoudary

import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true })
  }
  
  render() {
    if(this.state.hasError) {
      return <h1>Something went wrong</h1>
    }
    return this.props.children
  }
} 