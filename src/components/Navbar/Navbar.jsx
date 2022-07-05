import {PURPLE} from "../../helpers/colors";
import SearchContact from "../Contact/SearchContact";
import {useLocation} from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    return (
        <>
            <nav className="navbar navbar-dark bg-dark p-3">
                <div className="container">
                    <div className="row w-100">
                        <div className="col">
                            <div className="navbar-brand" style={{textAlign: "start"}}>
                                <i className="fas fa-id-badge mx-2 "
                                   style={{color: PURPLE, fontSize: "larger"}}></i>
                                <span style={{color: PURPLE, fontSize: "larger"}}> Contact</span>
                                {" "} Manager App
                            </div>
                        </div>
                        {location.pathname === "/contacts" ?
                            (<div className="col">
                                <SearchContact/>
                            </div>) : null}

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;