import {createContext} from "react";

export const contactContext = createContext({
    loading: false,
    setLoading: () => {
    },
    contact: {},
    setContacts: () => {
    },
    allContacts: [],
    setAllContacts: () => {
    },
    filteredContacts: [],
    setFilteredContacts: () => {
    },
    allGroups: [],
    setAllGroups: () => {
    },
    contactQuery: {},
    setContactQuery: () => {
    },
    searchContact: () => {
    },
    onCreateContact: () => {
    },
    onContactChange: () => {
    }

})