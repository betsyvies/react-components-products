import React from 'react';

const ProductRow = ({name, price, stocked} ) => {
    const NAME = stocked ? name : <span style={{color:'red'}}>{name}</span>
    return (
      <tr className="tr-product">
        <td>{NAME}</td>
        <td>{price}</td>
      </tr>)
}

export default ProductRow