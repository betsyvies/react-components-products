import React from 'react';
import ProductCategoryRow from './product-category-row';
import ProductRow from './product-row';
// import PropTypes from 'prop-types'

const ProductTable = (arr) => {
    //Esto es la propiedad products que es del tipo array
    // Seteando valores
    const rows = [];
    let lastCategory = null;
    //Creando la categoria 
    arr.products.map(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow {...product} key={product.category} />
        );
      }
      rows.push(<ProductRow {...product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table className = "table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }

  // ProductTable.propTypes = {
  //   products: PropTypes.arrayOf(PropTypes.shape({
  //     category: PropTypes.string.isRequired,
  //     price: PropTypes.number.isRequired,
  //     stocked: PropTypes.boolean.isRequired,
  //     name: PropTypes.string.isRequired,
  //   }).isRequired).isRequired}

export default ProductTable