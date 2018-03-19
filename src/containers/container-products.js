/* Primero importamos el conect, luego importamos el componente que va ser container, 
  cuando pase a ser container el componente debo pasar sus parametros*/
import { connect } from 'react-redux';
import  ProductTable from '../components/product-table'

/* Para el MAP se le pasa como parametro el state */
const mapStateToProps = (state) => {
  const {
    filteredProducts
  } = state.hola;

  return {
    products: filteredProducts
  };
}

export default connect(mapStateToProps)(ProductTable);

