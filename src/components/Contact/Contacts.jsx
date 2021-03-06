import {Link} from "react-router-dom";
import {CURRENTLINE, ORANGE, PINK} from "../../helpers/colors";
import Spinner from "../Spinner";
import Contact from "./Contact";
import {useContext} from "react";
import {contactContext} from "../../context/contactContext";
import deleteContact from "./DeleteContact";

const Contacts = () => {
    const {loading, filteredContacts, onDeleteContactConfirm} = useContext(contactContext);
    return (
        <>
            <section className="container">
                <div className="grid">
                    <div className="row">
                        <div className="col">
                            <p>
                                <Link to={"/contacts/add"}
                                      className="btn m-2"
                                      style={{backgroundColor: PINK}}>
                                    create new contact
                                    <i className="fa fa-plus-circle mx-2"></i>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner/> : (
                    <div className="container">
                        <div className="row">
                            {
                                filteredContacts.length > 0 ? (
                                    filteredContacts.map((c) => (
                                        <Contact
                                            key={c.id}
                                            contact={c}
                                            onDeleteContactConfirm={() => {
                                                onDeleteContactConfirm(c.id, c.fullName)
                                            }}
                                        />
                                    ))
                                ) : (
                                    <div
                                        className="text-center py-5"
                                        style={{backgroundColor: CURRENTLINE}}
                                    >
                                        <p className="h3" style={{color: ORANGE}}>
                                            ?????????? ???????? ?????? ...
                                        </p>
                                        <img
                                            src={require("../../assets/no-found.gif")}
                                            alt="???????? ??????"
                                            className="w-25"
                                        />
                                    </div>
                                )

                            }
                        </div>
                    </div>
                )
            }
        </>
    )
}
export default Contacts;