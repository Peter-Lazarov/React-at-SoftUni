import { useEffect, useState } from "react";
import SearchForm from "./search-form/SearchForm";
import UserTable from "./user-table/UserTable";
import UserAdd from "./user-add/UserAdd";
import UserDetails from "./user-details/UserDetails";
import UserDelete from "./user-delete/UserDelete";

const baseUrl = `http://localhost:3030/jsonstore`;

export default function UserPage() {

    const [users, setUsers] = useState([]);
    const [showUserAdd, setShowAddUser] = useState(false);
    const [userIdInStateDetails, setShowUserDetails] = useState(null);
    const [userIdInStateDelete, setShowUserDelete] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    //console.log('userIdInState ' + userIdInStateDetails);

    useEffect(() => {
        async function getUsers() {
            const response = await fetch(`${baseUrl}/users`);
            const result = await response.json();

            setIsLoading(false);
            const usersAll = Object.values(result);

            setUsers(usersAll);
        }

        getUsers();
    }, []);

    //Add - User ---------------------------------------------------------------------
    const addUserClickOpen = () => {
        setShowAddUser(true);
    }

    const addUserClickClose = () => {
        setShowAddUser(false);
    }

    const addUserQuery = async (event) => {
        event.preventDefault();
        
        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData);

        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        const createdUser = await response.json();

        setUsers(oldUsers => [...oldUsers, createdUser]);
        //console.log(createdUser);
        setShowAddUser(false);

        setIsLoading(false);
    }

    //Details - User ---------------------------------------------------------------------
    const userDetailsClickOpen = (userId) => {
        //console.log('userId ' + userId);
        setShowUserDetails(userId);
    }

    const userDetailsClickClose = () => {
        setShowUserDetails(null);
    }

    //Delete - User ---------------------------------------------------------------------
    const userDeleteClickOpen = (userId) => {
        setShowUserDelete(userId);
        //console.log(userId);
    }

    const userDeleteClickClose = () => {
        setShowUserDelete(null);
    }

    const userDeleteQuery = async (userId) => {

        const response = await fetch(
            `${baseUrl}/users/${userId}`, {
            method: 'DELETE'
        });

        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId));

        setShowUserDelete(null);
    }  

    return (
        <>
            <SearchForm />
            {showUserAdd && <UserAdd
                onClose={addUserClickClose}
                onSave={addUserQuery}
            />}

            {userIdInStateDetails && <UserDetails
                user={users.find(user => user._id == userIdInStateDetails)}
                onClose={userDetailsClickClose}
            />}

            <UserTable
                users={users}
                onUserDetailsClick={userDetailsClickOpen}
                onUserDeleteClick={userDeleteClickOpen}
                isLoading={isLoading}
            />

            {userIdInStateDelete && (
                <UserDelete
                    onClose={userDeleteClickClose}
                    onUserDeleteAction={() => userDeleteQuery(userIdInStateDelete)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickOpen}>Add new user</button>
        </>
    )
}
