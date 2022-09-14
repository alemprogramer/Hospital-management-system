import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};

export default DoctorRow;