const initialState = {
  counter: 0
}

const reducer = (state = initialState,action) {
  switch(action.type) {
    case 'ADD':
      return {
        counter: state.counter + 1
      }

    case 'SUB':
      return {
        counter: state.counter - 1 
      }

    case 'ADD_NUMBER':
      return{
        counter: state.counter + action.payload
      } 

    default:
      return state
  }
}

export default reducer;

//1) создаем функцию редьюсеp
//2) редюсер принимает в себя два параметра state и action
//3)передаём initialState параметром по умолчанию в state
//4)reducer - должен возвращать state
//5)экспортируем её и передаём в параметр функции createStore
//6)в конструкции switch(action.type) - мы принимаем отправленные нам с помощью метода dispatch экшены, и при совпадении action.type = Action.type,возвращаем новый объект, и клонируем в него предидущее состяние


