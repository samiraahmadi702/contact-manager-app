import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import Contacts from "./components/Contact/Contacts";
import AddContact from "./components/Contact/AddContact";
import ViewContact from "./components/Contact/ViewContact";
import EditContact from "./components/Contact/EditContact";
import {useEffect, useState} from "react";
import {contactContext} from "./context/contactContext";
import {createContact, deleteContact, getAllContacts, getAllGroups} from "./services/contactService";
import {confirmAlert} from "react-confirm-alert";
import {COMMENT, CURRENTLINE, FOREGROUND, PURPLE, YELLOW} from "./helpers/colors";

function App() {
    const [loading, setLoading] = useState(false);
    const [allContacts, setAllContacts] = useState([]);
    const [contact, setContact] = useState({});
    const [allGroups, setAllGroups] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [contactQuery, setContactQuery] = useState({text: ""});

    const navigate = useNavigate()

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
        fetchData().then()
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
    const onCreateContact = async (event) => {
        event.preventDefault();
        try {
            const {status, data} = await createContact(contact);

            if (status === 201) {
                const contacts = [...allContacts, data];
                setAllContacts(contacts);
                setFilteredContacts(contacts);
                setContact({})
                navigate("/contacts");
            }
        } catch (err) {
            console.log(err.message);
        }
    }
    const onContactChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        })
    }
    const onDeleteContactConfirm = (contactId, contactFullname) => {
        confirmAlert({
            customUI: ({onClose}) => {
                return (
                    <div
                        dir="rtl"
                        style={{
                            backgroundColor: CURRENTLINE,
                            border: `1px solid ${PURPLE}`,
                            borderRadius: "1em",
                        }}
                        className="p-4"
                    >
                        <h1 style={{color: YELLOW}}>پاک کردن مخاطب</h1>
                        <p style={{color: FOREGROUND}}>
                            مطمئنی که میخوای مخاطب {contactFullname} رو پاک کنی ؟
                        </p>
                        <button
                            onClick={() => {
                                removeContact(contactId);
                                onClose();
                            }}
                            className="btn mx-2"
                            style={{backgroundColor: PURPLE}}
                        >
                            مطمئن هستم
                        </button>
                        <button
                            onClick={onClose}
                            className="btn"
                            style={{backgroundColor: COMMENT}}
                        >
                            انصراف
                        </button>
                    </div>
                );
            },
        });
    }
    const removeContact = async (contactId) => {

        const contacts = [...allContacts];
        try {
            const updatedContact = allContacts.filter((c) => c.id !== contactId);
            setAllContacts(updatedContact);
            setFilteredContacts(updatedContact);

            const {status} = await deleteContact(contactId);

            if (status !== 200) {
                setAllContacts(contacts);
                setFilteredContacts(contacts);
            }
        } catch (err) {
            console.log(err.message);

            setAllContacts(contacts);
            setFilteredContacts(contacts);
        }
    };

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
                searchContact,
                onCreateContact,
                onContactChange,
                onDeleteContactConfirm
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
