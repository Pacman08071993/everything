const redux = reqire('redux')

//Reducer - js-функция которая делает некоторые преобразования.Принимает первым параметром state, вторым параметром принимает в себя action.Reducer всегда должен возвращать state

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD: {
      return {
        counter: state.counter + 1
      }
    }
    case SUB: {
      return {
        counter: state.counter - 1
      }
    }
    default return state;
  }
  
}


//Store - место для хранения всех данных

//Принимает в себя reducer

//store.getState() - позволяет получить текущее состояние store

const store = redux.createStore(reducer)


//Action - это объект с обязательным полем type

//Чтобы применить Action нужно воспользоваться методом dispatch

//Dispatch - передает action в reducer 

const addCounter = { type: 'ADD' }
const subCounter = { type: 'SUB' }

store.dispatch(addCounter);



1)создали store(хранилище),в которую передали reducer
2)создали функцию reducer, она нужна для изминения данного store в который мы её передали. В reducer мы описали начальное состояние (state = initialState, action). Если в редьюсер попадает некоторый action с помощью функции dispatch, то тогда мы будем проверять action.type, если action.type совпадает с тем что мы умеем обрабатывать, тогда мы будем модифицировать наш state на основе предидущего состояния и в ответ возвращаем новый state

