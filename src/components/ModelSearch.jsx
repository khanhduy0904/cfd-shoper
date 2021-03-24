import React from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import useFormValidate from '../core/hook/useFormValidate';
import withPriceFormat from '../hoc/withPriceFormat';
import { fetchSearch } from '../redux/reducers/searchReducer';

export default function ModelSearch(props) {

    let search = useSelector(state => state.search);
    let dispatch = useDispatch();

    let styles = {
            borderColor: "red !important"
    }

    let { form, submit, error, inputChange } = useFormValidate({
        input: "",
    }, {
        rule: {
            input: {
                required: true,
                min: 3
            }
        },
        message: {
            input: {
                required: "Vui lòng nhập từ khóa tìm kiếm",
                min: "Vui lòng nhập lớn hơn 3 kí tự"
            }
        }
    });

    let handleSubmit = () => {
        let error = submit();
        if (Object.keys(error).length === 0) {
            dispatch(fetchSearch(form.input));
        }
    }
    let _keyPress = (e) => {
        if(e.which === 13){
           handleSubmit();
        }
    }

    return ReactDOM.createPortal(
        <div className="modal fixed-right fade" id="modalSearch" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content">
                    {/* Close */}
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <i className="fe fe-x" aria-hidden="true" />
                    </button>
                    {/* Header*/}
                    <div className="modal-header line-height-fixed font-size-lg">
                        <strong className="mx-auto">Search Products</strong>
                    </div>
                    {/* Body: Form */}
                    <div className="modal-body">

                        <div className="form-group">
                            <label className="sr-only" htmlFor="modalSearchCategories">Categories:</label>
                            <select className="custom-select" id="modalSearchCategories">
                                <option selected>All Categories</option>
                                <option>Women</option>
                                <option>Men</option>
                                <option>Kids</option>
                            </select>
                        </div>
                        <div className="input-group input-group-merge">
                            <input className="form-control" type="search" placeholder="Search" name="input" value={form.value} onChange={inputChange}onKeyPress={_keyPress} />
                            <div className="input-group-append">
                               
                                <button className="btn btn-outline-border" type="submit" style={styles} onClick={handleSubmit} >
                                    <i className="fe fe-search" />
                                </button>
                            </div>

                        </div>
                        {
                            error.input && <p style={{color: "red"}}>{error.input}</p>
                        }
                    </div>
                    {/* Body: Results (add `.d-none` to disable it) */}
                    <div className="modal-body border-top font-size-sm">
                        {/* Heading */}
                        <p>Search Results:</p>
                        {/* Items */}

                        {
                            search?.list.map(item => <React.Fragment key={item._id}>{withPriceFormat(searchItem, item)}</React.Fragment>)
                        }

                        {/* Button */}
                        <Link onClick={() => document.getElementById("modalSearch").dispatchEvent(new Event("click"))} className="btn btn-link px-0 text-reset" to={`/catalog/${form.input}`}>
                            View All <i className="fe fe-arrow-right ml-2" />
                        </Link>
                    </div>
                    {/* Body: Empty (remove `.d-none` to disable it) */}
                    <div className="d-none modal-body">
                        {/* Text */}
                        <p className="mb-3 font-size-sm text-center">
                            Nothing matches your search
                        </p>
                        <p className="mb-0 font-size-sm text-center">
                            😞
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ,
        document.getElementById('root2')
    )
}

const searchItem = ({ name, images, real_price_text }) => {
    return (
        <div className="row align-items-center position-relative mb-5">
            <div className="col-4 col-md-3">
                {/* Image */}
                <img className="img-fluid" src={images?.[0]?.base_url} alt="..." />
            </div>
            <div className="col position-static">
                {/* Text */}
                <p className="mb-0 font-weight-bold">
                    <a className="stretched-link text-body" href="./product.html">{name}</a> <br />
                    <span className="text-muted">{real_price_text} VND</span>
                </p>
            </div>
        </div>
    )
}
