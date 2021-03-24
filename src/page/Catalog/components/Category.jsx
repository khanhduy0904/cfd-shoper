import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import { getCategories } from '../../../redux/reducers/productReducer';
function Category(props) {
    let dispatch = useDispatch();
    let { categories } = useSelector(state => state.product);
    useEffect(() => {
        dispatch(getCategories());
    }, [])

    return (
        <li className="nav-item">
            {/* Toggle */}
            <a
                className="nav-link font-size-lg text-reset border-bottom mb-6"
                data-toggle="collapse"
                href="#categoryCollapse"
            >
                Category
                  </a>
            {/* Collapse */}
            <div>
                <div className="form-group">
                    <ul className="list-styled mb-0" id="productsNav">
                        <li className="list-styled-item">
                            <NavLink exact className="list-styled-link" to="/catalog">
                                Tất cả sản phẩm
                            </NavLink>
                        </li>
                        {
                            categories.map(e => (
                                <li className="list-styled-item" key={e.id}>
                                    <NavLink className="list-styled-link" to={`/catalog/${e.slug}`}>
                                        {e.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </li>
    );
}

export default Category;