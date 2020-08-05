import React, { Component } from 'react';
import Table from './Table/Table';
import Loader from './Loader/Loader';

class App extends Component{
//loader
  state = {
    isLoading: true,
    data: []
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
  onSort = (field) => {
    console.log(field)
  }
//Передача методов компоненту
  render() {
    return (
      <div className="container">
        {this.state.isLoading ? <Loader/> : <Table data={this.state.data} onSort={this.onSort}/>}
      </div>
  );
  }
}
export default App;
