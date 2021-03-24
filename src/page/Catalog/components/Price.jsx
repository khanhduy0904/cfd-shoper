import React, { useRef } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { convertQueryToObject, serializeObjtoURL } from '../../../components/helper';

function Price(props) {

  let query = convertQueryToObject();
  let history = useHistory();
  let routeMatch = useRouteMatch();
  let minRef = useRef();
  let maxRef = useRef();

  let _apply = () => {

    console.log(minRef);
    let minValue = minRef.current.value.trim();
    let maxValue = maxRef.current.value.trim();

      if (minValue) {
        query.min = minValue.trim()
      } else {
        delete query.min
      }

      if (maxValue) {
        query.max = maxValue.trim()
      } else {
        delete query.max
      }

      query.page = 1


    history.push(routeMatch.url + '?' + serializeObjtoURL(query))

  }

  return (

    <li className="nav-item">
      {/* Toggle */}
      <a
        className="nav-link font-size-lg text-reset border-bottom mb-6"
        data-toggle="collapse"
        href="#priceCollapse"
      >
        Price
        </a>
      {/* Collapse */}

      {/* Range */}
      <div className="d-flex align-items-center">
        {/* Input */}
        <input
          ref={minRef}
          defaultValue={query.min}
          type="number"
          className="form-control form-control-xs"
          placeholder="1000"
          
        />
        {/* Divider */}
        <div className="text-gray-350 mx-2">‒</div>
        {/* Input */}
        <input
          ref={maxRef}
          defaultValue={query.max}
          type="number"
          className="form-control form-control-xs"
          placeholder="10000"
         
        />
      </div>
      <button className="btn btn-light" style={{ marginTop: 10 }} onClick={_apply}>Áp Dụng</button>

    </li>
  );
}

export default Price;