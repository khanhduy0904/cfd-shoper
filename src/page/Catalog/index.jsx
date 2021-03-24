import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../redux/reducers/productReducer";
import Product from "./components/Product";
import Pagination from "../../components/Pagination";
import withPriceFormat from "../../hoc/withPriceFormat";
import { useHistory, useRouteMatch } from "react-router";
import Category from "./components/Category";
import Price from "./components/Price";
import Slider from "./components/Slider";
import Breadcrumb from "../../components/Breadcrumb";

// function getPage() {
//     const urlParams = new URLSearchParams(window.location.search);
//     return urlParams.get('page');
// };

const convertQueryToObject = () => {
  var search = '' || window.location.search.substring(1);
  return  !search  ? {} : JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}')
}

const serializeObjtoURL = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

export default function Catalog() {
 
  let product = useSelector(state => state.product);
  console.log(product);
  let history = useHistory()
  let routeMatch = useRouteMatch();
  let {slug} = useRouteMatch().params;
  let queryUrl = convertQueryToObject();
  let queryString = serializeObjtoURL(queryUrl); 
  let dispatch = useDispatch();
  let {categories} = product;

  let category = {
    title: "Tất cả sản phẩm",
    link: "/catalog"
  }
  if(slug){
    slug = slug.replace(/.*id/, "");
    let slugg = parseInt(slug);
    // Tìm ptu có id trùng với slug trên url
    let index = categories.find(e => e.id === slugg);
    console.log(index);
    if(index){
      category = {
        title: index.title,
        link: `/catalog/${index.slug}`
      }
      queryString+=`${queryString ? "&" : ""}categories=${slug}`
    }
  }


  useEffect(() => {
    dispatch(getProductAction(queryString));
   
  }, [queryString, dispatch]);
  
  
  const sortChange = (e) => {
    let queryObj = convertQueryToObject();
    // console.log(queryObj);
    queryObj.sort = e.target.value;
    delete queryObj.page
    let queryObjToUrl = serializeObjtoURL(queryObj);
    history.push(`${routeMatch.url}?${queryObjToUrl}`)
    // console.log(queryObjToUrl);
  }

  return (
    <section className="py-11">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            {/* Filters */}
         
              <ul className="nav nav-vertical" id="filterNav">
                <Category />
               
                <Price />
                
              </ul>
            
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            {/* Slider */}
            <Slider />
            {/* Header */}
            <div className="row align-items-center mb-7">
              <div className="col-12 col-md">
                {/* Heading */}
                <h3 className="mb-1">{category.title}</h3>
                {/* Breadcrumb */}
                <Breadcrumb list={[
                  {
                    title: "Home",
                    link: ""
                  },
                  category
                ]} />
              </div>
              <div className="col-12 col-md-auto">
                {/* Select */}
                <select className="custom-select custom-select-xs" onChange={sortChange}>
                  <option selected={queryUrl.sort === ""} value="">--Sắp xếp--</option>
                  <option selected={queryUrl.sort === "real_price.1"} value="real_price.1">Giá thấp</option>
                  <option selected={queryUrl.sort === "real_price.-1"} value="real_price.-1">Giá cao</option>
                  <option selected={queryUrl.sort === "rating_average.-1"} value="rating_average.-1">Đánh giá cao</option>
                  <option selected={queryUrl.sort === "discount_rate.-1"} value="discount_rate.-1">Giảm nhiều</option>
                </select>
              </div>
            </div>
            {/* Tags */}
            {/* <div className="row mb-7">
              <div className="col-12">
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Shift dresses{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Summer{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  M{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  White{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Red{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  Adidas{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $10.00 - $49.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
                <span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
                  $50.00 - $99.00{" "}
                  <a className="text-reset ml-2" href="#!" role="button">
                    <i className="fe fe-x" />
                  </a>
                </span>
              </div>
            </div> */}
            {/* Products */}
            <div className="row">
             
              {product.products.map((item) => (
                <div className="col-6 col-md-4" key={item._id}>
                  {withPriceFormat(Product, {...item, loading: product.loading})}
                  {/* <Product {...item}/> */}
                </div>
              ))}
            </div>
            {/* Pagination */}
             <Pagination {...product.paginate}/>   
          </div>
        </div>
      </div>
    </section>
  );
}


// <li className="nav-item">

// <a
//   className="nav-link dropdown-toggle font-size-lg text-reset border-bottom mb-6"
//   data-toggle="collapse"
//   href="#seasonCollapse"
// >
//   Season
// </a>

// <div
//   className="collapse"
//   id="seasonCollapse"
//   data-toggle="simplebar"
//   data-target="#seasonGroup"
// >
//   <div
//     className="form-group form-group-overflow mb-6"
//     id="seasonGroup"
//   >
//     <div className="custom-control custom-checkbox mb-3">
//       <input
//         className="custom-control-input"
//         id="seasonOne"
//         type="checkbox"
//         defaultChecked
//       />
//       <label
//         className="custom-control-label"
//         htmlFor="seasonOne"
//       >
//         Summer
//       </label>
//     </div>
//     <div className="custom-control custom-checkbox mb-3">
//       <input
//         className="custom-control-input"
//         id="seasonTwo"
//         type="checkbox"
//       />
//       <label
//         className="custom-control-label"
//         htmlFor="seasonTwo"
//       >
//         Winter
//       </label>
//     </div>
//     <div className="custom-control custom-checkbox">
//       <input
//         className="custom-control-input"
//         id="seasonThree"
//         type="checkbox"
//       />
//       <label
//         className="custom-control-label"
//         htmlFor="seasonThree"
//       >
//         Spring &amp; Autumn
//       </label>
//     </div>
//   </div>
// </div>
// </li>