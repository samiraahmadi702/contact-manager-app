import axios from 'axios';

const baseUrl = "http://localhost:9000";

export const getAllContacts = () => {
    const url = `${baseUrl}/contacts`;
    return axios.get(url);

    // const rep=await getAllContacts();
    // resp: {config,data,headers,request,status,statusText}
    // status=200 ok
}

export const getContactById = (contactId) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.get(url);
}

export const createContact = (contactInfo) => {
    const url = `${baseUrl}/contacts`;
    return axios.post(url, contactInfo);

    // const resp=await createContact(contactInfo)
    // resp={config,data, request,status,statusText}
    // status=201 ok
}

export const updateContact = (contactInfo, contactId) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.put(url, contactInfo);
}

export const deleteContact = (contactId) => {
    const url = `${baseUrl}/contacts/${contactId}`;
    return axios.delete(contactId);
}

export const getAllGroups = () => {
    const url = `${baseUrl}/groups`;
    return axios.get(url);
}

export const getGroupById = (groupId) => {
    const url = `${baseUrl}/groups/${groupId}`;
    return axios.get(url);
}