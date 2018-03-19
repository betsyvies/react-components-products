import { connect } from 'react-redux';
import SearchBarComponent from '../components/search-bar';
import { filterTextChanged, inStockOnlyChanged } from '../actions';

const mapStateToProps = (state) => {

  const {
    filterText,
    inStockOnly
  } = state.hola;

  return {
    filterText,
    inStockOnly
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFilterText(newFilterText) {
      dispatch(filterTextChanged(newFilterText));
    },
    setInStockOnly(newValue) {
      dispatch(inStockOnlyChanged(newValue));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);


