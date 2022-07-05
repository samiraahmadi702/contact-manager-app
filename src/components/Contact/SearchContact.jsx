import {PURPLE} from "../../helpers/colors";
import {useContext} from "react";
import {contactContext} from "../../context/contactContext";

const SearchContact = () => {
    const {contactQuery, searchContact} = useContext(contactContext)
    return (
        <div className="input-group mx-2 w-75">
            <input type="text"
                   value={contactQuery.text}
                   onChange={searchContact}
                   className="form-control"
                   placeholder="Search Contact"
                   aria-describedby="basic-addon1"
            />
            <span className="input-group-text"
                  id="basic-addon1"
                  style={{backgroundColor: PURPLE, cursor: "pointer"}}>
                <i className="fas fa-search"></i>
            </span>
        </div>
    )
}
export default SearchContact;