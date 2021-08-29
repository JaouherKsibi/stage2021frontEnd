function ProductLine(props){
    const {product}=props;
    return (
        <tr>
            <th scope="row">1</th>
            <td>ok{/*props.name*/}</td>
            <td>ok {/*props.categoryName*/} </td>
            <td>ok {/*props.price*/} </td>
        </tr>
    )
}/*
ProductLine.propTypes = {
    productsList: PropTypes.array,
};
ProductLine.defaultProps={
    productsList:[]
}*/
export default ProductLine;