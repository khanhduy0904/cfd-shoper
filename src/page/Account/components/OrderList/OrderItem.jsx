
import { useRouteMatch } from "react-router"
import { Link } from "react-router-dom"

export default function OrderItem({ id, date, status, amount, list, _id }) {
    let match = useRouteMatch()
   
    return (
        <div className="card card-lg mb-5 border">
            <div className="card-body pb-0">
                {/* Info */}
                <div className="card card-sm">
                    <div className="card-body bg-light">
                        <div className="row">
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Order No:</h6>
                                {/* Text */}
                                <p className="mb-lg-0 font-size-sm font-weight-bold">
                                    {id}
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                                {/* Text */}
                                <p className="mb-lg-0 font-size-sm font-weight-bold">
                                    <time dateTime="2019-10-01">
                                        {date}
                                    </time>
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Status:</h6>
                                {/* Text */}
                                <p className="mb-0 font-size-sm font-weight-bold">
                                    {status}
                                </p>
                            </div>
                            <div className="col-6 col-lg-3">
                                {/* Heading */}
                                <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                                {/* Text */}
                                <p className="mb-0 font-size-sm font-weight-bold">
                                    {amount}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6">
                        <div className="form-row mb-4 mb-lg-0">
                            {
                                list.slice(0, 3).map(e => (
                                    <div className="col-3">
                                        <div className="embed-responsive embed-responsive-1by1 bg-cover" style={{ backgroundImage: `url(${e.images?.[0]?.medium_url})` }} />
                                    </div>
                                ))
                            }
                            {
                                list.length > 3 && (
                                    <div className="col-3">
                                        {/* Image */}
                                        <div className="embed-responsive embed-responsive-1by1 bg-light">
                                            <a className="embed-responsive-item embed-responsive-item-text text-reset" href="#!">
                                                <div className="font-size-xxs font-weight-bold">
                                                    +{list.length - 3} <br /> more
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-row">
                            <div className="col-6">
                                {/* Button */}
                                <Link className="btn btn-sm btn-block btn-outline-dark" to={`${match.path}/${_id}`}>
                                    Order Details
                                </Link>
                            </div>
                            <div className="col-6">
                                {/* Button */}
                                <Link className="btn btn-sm btn-block btn-outline-dark" to={`/order-completed/${_id}`}>
                                Track order
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}