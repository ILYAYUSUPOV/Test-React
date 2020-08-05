import React, { Component } from 'react';
import Table from './Table/Table';
import Loader from './Loader/Loader';
import _ from 'lodash'

class App extends Component{
//loader
  state = {
    isLoading: true,
    data: [],
    sort: 'up',
    sortField: 'id'
  }
//Объемы данных и работа loader
  async componentDidMount() {
    const response = await fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    const data = await response.json() 
    this.setState({
      isLoading: false,
      data
    })
  }
//Реализация методов
  onSort = sortField => {
    //Клонирование Массива для будущей сортировки
    const clonedData = this.state.data.concat()
    const sortType = this.state.sort === 'up' ? 'down' : 'up'

    const orderedData = _.orderBy(clonedData, sortField, sortType);
    this.setState({
      data : orderedData,
      sort : sortType,
      sortField
    })
  }
//Передача методов компоненту
  render() {
    return (
      <div className="container">
        {this.state.isLoading 
        ? <Loader/> 
        : <Table data={
          this.state.data} 
          onSort={this.onSort} 
          sort={this.state.sort} 
          sortField={this.state.sortField}/>}
      </div>
  );
  }
}
export default App;
