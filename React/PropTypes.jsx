// PropTypes - это валидация входящих параметров в компонент

// 1) установка пакета propTypes: npm install --save prop-types
// 2) import PropTypes from 'prop-types';
// 3) После компонента определяем свойство propTypes
// 4) внутри propTypes мы должны перечислить как ключи название тех полей которые мы ожидаем и с помощью  PropTypes.string, PropTypes.number ... валидируем 





import React, { Component } from ' react';
import PropTypes from 'prop-types';

class Car extends Component {
  render() {
    return(
      <div>
      <h1>{this.props.name}</h1>
      <h1>{this.props.year}</h1>
      <button onClick={this.props.onChange}>Change</button>
    </div>
    )
  }
}

Car.propTypes = {
  name: PropTypes.string.isRequired, // если мы знаем что без имени данный компонент  не запустить
  year: PropTypes.number,
  onChange: PropTypes.func
}

export default Car;