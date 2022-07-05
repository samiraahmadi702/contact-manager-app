import './Contact.css'
import {CURRENTLINE, CYAN, ORANGE, RED} from "../../helpers/colors";
import {Link} from "react-router-dom";

const Contact = ({contact}) => {
    return (
        <>
            <div className="col-md-6">
                <div className="card" style={{backgroundColor: CURRENTLINE}}>
                    <div className="card-body">
                        <div className="row d-flex align-items-center justify-content-around">
                            <div className="col-md-4 col-sm-4">
                                <img className="img-fluid rounded" src="https://via.placeholder.com/200"/>
                            </div>
                            <div className="col-md-7">

                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-dark">
                                        Full Name: {" "}
                                        <span className="fw-bold"> {contact.fullName}</span>
                                    </li>
                                    <li className="list-group-item list-group-item-dark">
                                        mobile: {" "}
                                        <span className="fw-bold"> {contact.mobile}</span>
                                    </li>
                                    <li className="list-group-item list-group-item-dark">
                                        email:{" "}
                                        <span className="fw-bold"> {contact.email}</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-1 col-sm-1 d-fl
                            ex flex-column align-items-center">
                                <Link to={`/contacts/${contact.id}`} className="btn my-1"
                                      style={{backgroundColor: ORANGE}}>
                                    <i className="fa fa-eye"></i>
                                </Link>
                                <Link to={"/contacts/"} className="btn my-1"
                                      style={{backgroundColor: CYAN}}>
                                    <i className="fa fa-pen"></i>
                                </Link>
                                <button className="btn my-1" style={{backgroundColor: RED}}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;