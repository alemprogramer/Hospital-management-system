import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;

    const makeAdmin = () => {
        fetch(`https://obscure-beyond-45774.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{
                role !== 'admin' &&
                <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>
            }</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;