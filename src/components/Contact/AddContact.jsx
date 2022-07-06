import {COMMENT, CURRENTLINE, PURPLE} from "../../helpers/colors";
import {useContext} from "react";
import {contactContext} from "../../context/contactContext";
import {Link} from "react-router-dom";
import data from "bootstrap/js/src/dom/data";

const AddContact = () => {
    const {allGroups, onCreateContact, contact, onContactChange} = useContext(contactContext);
    return (
        <>
            <div className="container" style={{justifyContent: "center"}}>
                <div className="row py-5" style={{backgroundColor: CURRENTLINE, justifyContent: "center"}}>
                    <div className="col-md-10">
                        <div>
                            <h2 className="mb-4" style={{color: "white"}}>
                                Add New Contact
                            </h2>
                        </div>
                        <hr style={{backgroundColor: PURPLE}}/>
                        <form onSubmit={onCreateContact}>
                            <div className="mb-2">
                                <input
                                    name="fullName"
                                    type="text"
                                    value={contact.fullName}
                                    onChange={onContactChange}
                                    className="form-control"
                                    placeholder="Full Name"
                                    required={true}
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    name="photo"
                                    type="text"
                                    value={contact.photo}
                                    onChange={onContactChange}
                                    className="form-control"
                                    required={true}
                                    placeholder="Photo's address"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    name="mobile"
                                    type="number"
                                    value={contact.mobile}
                                    onChange={onContactChange}
                                    className="form-control"
                                    required={true}
                                    placeholder="Mobile"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={contact.email}
                                    onChange={onContactChange}
                                    className="form-control"
                                    required={true}
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    name="job"
                                    value={contact.job}
                                    onChange={onContactChange}
                                    className="form-control"
                                    required={true}
                                    placeholder="Job"
                                />
                            </div>
                            <div className="mb-2">
                                <select
                                    name="group"
                                    value={contact.group}
                                    onChange={onContactChange}
                                    required={true}
                                    className="form-control"
                                >
                                    <option value="">Choose group</option>
                                    {allGroups.length > 0 &&
                                        allGroups.map((group) => (
                                            <option key={group.id} value={group.id}>
                                                {group.name}
                                            </option>
                                        ))}
                                </select>
                            </div>
                            <div className="mx-2">
                                <input
                                    type="submit"
                                    className="btn"
                                    style={{backgroundColor: PURPLE}}
                                    value="Create Contact"
                                />
                                <Link
                                    to={"/contacts"}
                                    className="btn mx-2"
                                    style={{backgroundColor: COMMENT}}
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>


    )
}
export default AddContact;