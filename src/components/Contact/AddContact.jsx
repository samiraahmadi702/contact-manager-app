import {CURRENTLINE, PURPLE} from "../../helpers/colors";

const AddContact = () => {
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
                        <form>
                            <div className="form-group my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder="FullName"/>
                            </div>
                            <div className="form-group my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder="photo"/>
                            </div>
                            <div className="form-group my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder="mobile"/>
                            </div>
                            <div className="form-group my-2">
                                <input type="text"
                                       className="form-control"
                                       placeholder='email'/>
                            </div>
                            <div className="form-group my-2">
                                <select className="form-control">
                                    <option value="0"> choose your group</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddContact;