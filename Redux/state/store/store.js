import {createStore} from 'redux'
import reducer from '../reducer/reducer'

const store = createStore(reducer);

export default store;







//1)создаём store c помощью функции createStore
//2)при создании store передаем в createStore(reducer)

  //Пример :

    // <Provider store={store}>
    //   <App />
    // </Provider>
