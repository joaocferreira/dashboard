import React from 'react';
import './App.css';
import Table from './table';
import data from './data.json'

const App = () => {
  let { items } = data;
  const queryParameters = new URLSearchParams(window.location.search)
  const group_filter = queryParameters.get('group');
  if (group_filter) {
    items = items.filter(item => item['group'] === group_filter)
  }

  return (
    <div className="container">
      <Table headers={data.headers} items={items}/>
    </div>

  );
}

export default App;
