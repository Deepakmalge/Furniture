import React, {useState} from 'react'

import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import products from '../assets/data/products';
import ProductLists from '../components/UI/ProductsList';


const Shop = () => {

const [ productData, setProductsData ] = useState(products)

const handleFilter = e=> {

    const filterValue = e.target.value
    if(filterValue==='sofa'){
        const filteredProducts = products.filter(item=> item.
            category==='sofa')

            setProductsData(filteredProducts);
    }
}

  return (
    <div>Shop</div>
  )
}

export default Shop