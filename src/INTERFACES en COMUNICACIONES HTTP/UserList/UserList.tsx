// vendors
import React, { useEffect, useState } from "react";
import axios from 'axios';

// types
import { IUser } from "./types";

// Componente Funcional
const UserList: React.FC = () => {
    // Estado
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        // peticion con fetch
        const fetchUsers = async () => {
            try {
                // habia un error en setUsers(response.data) solucionado con tipar la peticion <IUser[]>
                const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
                // cambio/seteo del ESTADO
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);     // array de dependencias vacío para que se monte sólo la primera vez que renderiza

    
    return (
        <div>
            <h1>User List</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>name: {user.name} - username: @{user.username} - email: {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;