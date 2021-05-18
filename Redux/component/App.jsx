import React from 'react'
import {connect} from 'react-redux'

const App = () => {
  <div>
    <h1>{this.props.counter}</h1>
    <button onClick={this.props.onAdd}>+</button>   
    <button onClick={this.props.onSub}>-</button>   
    <button onClick={() => this.props.onAddNumber(15)}>-</button>   
  </div>
};

//забираем полe из 'state' которое в props будет равнятся полю 'counter'
const mapStateToProps = state => ({counter: state.counter}) 

//создает кастомные функции которые которые будут находится у нас в props
const mapDispatchToProps = (dispatch) => {
  onAdd: () => dispatch({ type: 'ADD' })
  onSub: () => dispatch({ type: 'SUB' })
  onAddNumber: number => dispatch({ type: 'ADD_NUMBER', payload: number})
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

//Подключение компонента к redux(к общему store) и забор состояние не из локального state, а из state(redux)

//1) connect()() - позволяет соеденить компонент React c store
  *//при вызове функции connect она вернет функцию в которую мы должны передать наш компонент 
  *//connect(mapStateToProps,mapDispatchToprops) - принимает два параметра


//2)mapStateToProps(state) - принимает в себя общий state, и возвращает новый объект где мы трансформируем данные из state, для того чтобы они стали обычными параметрами(props) для компонента который мы соединяем(App)


//3)mapDispatchToPtops(dispatch) - возвращает объект c кастомными функциями 

//4) dicpatch - отправляет action в reducer для изменения state








