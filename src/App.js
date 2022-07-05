import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, Navigate} from 'react-router-dom';
import Contacts from "./components/Contact/Contacts";
import AddContact from "./components/Contact/AddContact";
import ViewContact from "./components/Contact/ViewContact";
import EditContact from "./components/Contact/EditContact";
import {useEffect, useState} from "react";
import {contactContext} from "./context/contactContext";
import {getAllContacts, getAllGroups} from "./services/contactService";

function App() {
    const [loading, setLoading] = useState(false);
    const [allContacts, setAllContacts] = useState([]);
    const [contact, setContact] = useState({});
    const [allGroups, setAllGroups] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [contactQuery, setContactQuery] = useState({text: ""});

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);

                const {data: allContactsData} = await getAllContacts();
                const {data: allGroupsData} = await getAllGroups();

                setAllContacts(allContactsData);
                setFilteredContacts(allContactsData);
                setAllGroups(allGroupsData);

                setLoading(false);

            } catch (err) {
                console.log(err.message);
            }
        }
        fetchData()
    }, [])

    const searchContact = (event) => {
        setContactQuery({...contactQuery, text: event.target.value});
        const contacts = allContacts.filter((contact) => {
            return contact.fullName
                .toLowerCase()
                .includes(event.target.value.toLowerCase()
                )
        });
        setFilteredContacts(contacts)

    }

    return (
        <contactContext.Provider
            value={{
                loading,
                setLoading,
                contact,
                setContact,
                allContacts,
                setAllContacts,
                allGroups,
                setAllGroups,
                filteredContacts,
                setFilteredContacts,
                contactQuery,
                setContactQuery,
                searchContact
            }}>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Navigate to="/contacts"/>}></Route>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/contacts/add" element={<AddContact/>}/>
                    <Route path="/contacts/:contactId" element={<ViewContact/>}/>
                    <Route path="/contacts/edit/:contactId" element={<EditContact/>}/>
                </Routes>
            </div>
        </contactContext.Provider>
    )
        ;
}

export default App;
