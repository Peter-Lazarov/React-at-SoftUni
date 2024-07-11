import { useEffect, useState } from "react";
import SearchForm from "./search-form/SearchForm";
import UserTable from "./user-table/UserTable";
import UserAdd from "./user-add/UserAdd";

const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserPage() {

    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`${baseUrl}/users`);
            const result = await response.json();
            const usersAll = Object.values(result);

            setUsers(usersAll);
        }

        getUsers();
    }, []);

    const addUserClickOpen = () => {
        setShowAddUser(true);
    }

    const addUserClickClose = () => {
        setShowAddUser(false);
    }

    return (
        <>
            <SearchForm />
            <UserTable users = {users}/>
            {showAddUser && <UserAdd onClose={addUserClickClose}/>}
            <button className="btn-add btn" onClick={addUserClickOpen}>Add new user</button>
        </>
    )
}
