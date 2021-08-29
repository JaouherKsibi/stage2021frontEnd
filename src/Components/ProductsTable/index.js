import { useEffect, useState } from "react";
import ProductLine from "../ProductLine";
//import {productsList } from '../../datas/productsList.js'
import ProductsTableHeader from "../ProductsTableHeader";
import PropTypes from 'prop-types';

function ProductsTable(props){
    const {productsList}=props;
    /*const [productsList,setProductsList]=useState([]);
    useEffect(()=>{
        async function fetchProductsList() {
            const requestUrl='http://localhost:3001/api/getAllProducts'
            const response=await fetch(requestUrl);
            const responseJSON=await response.json();
            console.log(responseJSON);
            setProductsList(responseJSON)
        }
        fetchProductsList()
    },[])
    console.log(productsList);*/
    return (
        <table className="table bg-white rounded shadow-sm  table-hover">
        <ProductsTableHeader/>
        <tbody>
            
            {productsList.map((product)=>{
                return(
                    <tr>{product.price}</tr>
                    /*<ProductLine product={product}/>*/
                )})}
            {/*<tr>
                <th scope="row">1</th>
                <td>Television</td>
                <td>Jonny</td>
                <td>$1200</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Laptop</td>
                <td>Kenny</td>
                <td>$750</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>Cell Phone</td>
                <td>Jenny</td>
                <td>$600</td>
            </tr>
            <tr>
                <th scope="row">4</th>
                <td>Fridge</td>
                <td>Killy</td>
                <td>$300</td>
            </tr>
            <tr>
                <th scope="row">5</th>
                <td>Books</td>
                <td>Filly</td>
                <td>$120</td>
            </tr>
            <tr>
                <th scope="row">6</th>
                <td>Gold</td>
                <td>Bumbo</td>
                <td>$1800</td>
            </tr>
            <tr>
                <th scope="row">7</th>
                <td>Pen</td>
                <td>Bilbo</td>
                <td>$75</td>
            </tr>
            <tr>
                <th scope="row">8</th>
                <td>Notebook</td>
                <td>Frodo</td>
                <td>$36</td>
            </tr>
            <tr>
                <th scope="row">9</th>
                <td>Dress</td>
                <td>Kimo</td>
                <td>$255</td>
            </tr>
            <tr>
                <th scope="row">10</th>
                <td>Paint</td>
                <td>Zico</td>
                <td>$434</td>
            </tr>
            <tr>
                <th scope="row">11</th>
                <td>Carpet</td>
                <td>Jeco</td>
                <td>$1236</td>
            </tr>
            <tr>
                <th scope="row">12</th>
                <td>Food</td>
                <td>Haso</td>
                <td>$422</td>
            </tr>*/}
        </tbody>
    </table>

    )
}
ProductsTable.propTypes = {
    productsList: PropTypes.array,
};
ProductsTable.defaultProps={
    productsList:[]
}

export default ProductsTable;