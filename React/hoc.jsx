// hoc (компоненты высшего порядка) - служат обёрткой для компонентов 

// 1) Обёртка css :

  // * называем файл с маленькой буквы
  // * импортируем реакт
  // * создаём функцию которая получает в себя некоторый компонент(Component) и класс(className)
  // * Данная функция возвращает новый компонент котрый получает в себя некоторый props, и этот компонент возвращает jsx с <div className={className}><Component/></div>
  // Экспортируем по дефолту
  // В Component разворачиваем пропсы с помощью оператора spreat (...)


  import React from 'react'

  const withClass = (Component, className) => {
    return props => {
      return props => {
        <div className={className}>
          <Component {...props}/>
        </div>
      }
    }
  }

  export default withClass;

  // Компонент в который добавляем hoc импортирует withClass
  // Избавляемся от корневого элемента в jsx и добавляем React.Fragment
  // Вызываем в экспорте withClass(CurrentComponent, class.CurrentComponent-из css-файла)