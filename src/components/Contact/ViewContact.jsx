import {useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {getContactById, getGroupById} from "../../services/contactService";
import {contactContext} from "../../context/contactContext";

const ViewContact = () => {
    const {contactId} = useParams();

    const [localContact, setLocalContact] = useState({contact: {}, group: { }});

    const {loading, setLoading} = useContext(contactContext);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                setLoading(true);

                const {data: contactData} = await getContactById(contactId);
                const {data: groupData} = await getGroupById(contactData.group);


            } catch (err) {
                console.log(err.message);
            }

        };
        fetchContactData()
    }, [contactId, setLoading])
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={localContact.photo} alt="" className="img-fluid rounded"/>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-dark">
                                    Name : {" "}
                                    <span className="fw-bold">
                                        {localContact.fullName}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Mobile: {" "}
                                    <span className="fw-bold">
                                        {localContact.mobile}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Email: {" "}
                                    <span className="fw-bold">
                                        {localContact.email}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Job: {" "}
                                    <span className="fw-bold">
                                        {localContact.job}
                                    </span>
                                </li>
                                <li className="list-group-item list-group-item-dark">
                                    Group: {" "}
                                    <span className="fw-bold">
                                        {localContact.group}
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ViewContact;