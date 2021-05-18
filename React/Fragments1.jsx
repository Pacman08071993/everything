// Fragment - помогает избавиться от корневого элемента в компоненте

// 1) Возвращаем массив (нужен атрибут key)

const Car = () => (
  [
    <h1 key={'1'}>hello world</h1>,
    <h2 key={'2'}>hello world2</h2>,
    <h3 key={'3'}>hello world3</h3>
  ]
)

// 2) <React.Fragment></React.Fragment>

const Car = () => (
  <React.Fragment>
    <h1 key={'1'}>hello world</h1>,
    <h2 key={'2'}>hello world2</h2>,
    <h3 key={'3'}>hello world3</h3>
  </React.Fragment>  
)

// 3) <></> - короткий ситаксис для React.Fragments


// собстевенный React.Fragment

// 1) Создаём на верхнем уровне папку hoc(Higher-Order Component(компоненты высокого порядка))
// 2) создаём файл Auxiliary.js
// 3) Auxiliary.js - является идентичным React.Fragment, оборачивает jsx и возвращает то что внутри него не задавая при этом никакого корневого элемента
// 4) Импортируем в нужный нам компонент
// 5) Оборачиваем им jsx

import React from 'react'

const Auxiliary = props => props.children

export default Auxiliary


