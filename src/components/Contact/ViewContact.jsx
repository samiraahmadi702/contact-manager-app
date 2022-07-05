import {Link, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getContactById, getGroupById} from "../../services/contactService";
import {contactContext} from "../../context/contactContext";
import {CURRENTLINE, CYAN, PURPLE} from "../../helpers/colors";
import Spinner from "../Spinner";

const ViewContact = () => {
    const {contactId} = useParams();

    const [localContact, setLocalContact] = useState({contact: {}, group: {}});

    const {loading, setLoading} = useContext(contactContext);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                setLoading(true);

                const {data: contactData} = await getContactById(contactId);
                const {data: groupData} = await getGroupById(contactData.group);
                setLocalContact({
                    ...localContact,
                    contact: contactData,
                    group: groupData
                })

                setLoading(false)
            } catch (err) {
                console.log(err.message);
            }

        };
        fetchContactData().then()
    }, [])
    return (
        <>
            <section className="p3">
                <div className="container">
                    <div className="row my-2 text-center">
                        <p className="h3 fw-bold" style={{color: CYAN}}>
                            Contact Information
                        </p>
                    </div>
                </div>
            </section>

            <hr style={{backgroundColor: CYAN}}/>

            {loading ? (
                <Spinner/>
            ) : (
                <>
                    {Object.keys(localContact).length > 0 && (
                        <section>
                            <div
                                className="container p-2"
                                style={{borderRadius: "1em", backgroundColor: CURRENTLINE}}
                            >
                                <div className="row align-items-center mt-5 mx-5">
                                    <div className="col-md-3">
                                        <img
                                            src={localContact.contact.photo}
                                            alt=""
                                            className="img-fluid rounded"
                                            style={{border: `1px solid ${PURPLE}`}}
                                        />
                                    </div>
                                    <div className="col-md-9">
                                        <ul className="list-group">
                                            <li className="list-group-item list-group-item-dark">
                                                Full Name: {" "}
                                                <span className="fw-bold">{localContact.contact.fullName}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Mobile : {" "}
                                                <span className="fw-bold">{localContact.contact.mobile}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Email: {" "} <span
                                                className="fw-bold">{localContact.contact.email}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Job: {" "}<span className="fw-bold">{localContact.contact.job}</span>
                                            </li>
                                            <li className="list-group-item list-group-item-dark">
                                                Group:{" "} <span className="fw-bold">{localContact.group.name}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row my-2">
                                    <div className="d-grid  col-2 mx-auto">
                                        <Link
                                            to={"/contacts"}
                                            className="btn"
                                            style={{backgroundColor: PURPLE}}
                                        >
                                            go to home page
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
            )}
        </>
    )
}
export default ViewContact;