import React from 'react';
import SearchBar from './search-bar';
import ProductTable from '../containers/container-products';
import ContainerProducts from '../containers/container-products'
import ContainerSearch from '../containers/container-search'
const App = ({products}) => {
  // console.log(products)
  return (
    <div className="App">
      <ContainerSearch />
      <ContainerProducts products={products}/>
    </div>
  )
}

export default App
