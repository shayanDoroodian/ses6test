import React from 'react';
import { Link } from 'react-router-dom';

import productCategory from './productCategory';
import './category.css'

export default function CategoriesView() {
    const { length } = productCategory;
    if (!Array.isArray(productCategory) || length <= 0) {
        return null;
    }
    return (
        <div>
            <div className='catagories'>
                {productCategory.map(category => (
                    <div className="categoryCard">
                        <img src={require(`../../../img/${category.image}`)} alt={`Category ${category.name}`} className='categoryImage' />
                        <Link to={`/products/:${category.name}`} className='categoryLink'>{category.name}</Link>
                    </div>
                ))}
            </div>

        </div>
    )
}
