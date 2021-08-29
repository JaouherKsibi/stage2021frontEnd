import React from 'react';
import PropTypes from 'prop-types';


const GetList = (props) => {
    const {productsList}=props;
    console.log(productsList);
    return (
        <ul>
            {productsList.map((product)=>{
                return(
                <li key={product.id}>{product.name}hhhhh </li>)
            })}
        </ul>
    );
};


GetList.propTypes = {
    productsList: PropTypes.array,
};
GetList.defaultProps={
    productsList:[]
}


export default GetList;
