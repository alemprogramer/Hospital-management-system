import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../config/authConfig';


const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // if (user) {
            fetch(`http://localhost:5001/booking`)
                .then(res =>  res.json())
                .then(data => {
                    console.log('Appointment',(auth.user.role == 0) ?data.bookings.map((b)=>auth.user._id == b.userId) :data.bookings);
                    setAppointments((auth.user.role == 0) ?data.bookings.filter((b)=>auth.user._id == b.userId) :data.bookings)
                });
        // }
    }, [])
    // console.log(appointments);
    const deleteAppointment = async(id)=>{
        fetch(`http://localhost:5001/booking/${id}`)
            .then(res =>  res.json())
            .then(data => {
                toast.success('Appointment deleted successfully')
                setAppointments((auth.user.role == 0) ?data.bookings.map((b)=>auth.user._id == b.userId) :data.bookings)
            });
    }

    return (
        <div>
            {/* <h2>My Appointments: {appointments.length}</h2> */}
            <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Patient Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Doctor Name</th>
                            {(auth.user.role == 1) &&<th>Option</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a, index) =>
                                <tr key={a._id}>
                                    <th>{index + 1}</th>
                                    <td>{a?.patientName}</td>
                                    <td>{a?.date}</td>
                                    <td>{a?.slot}</td>
                                    <td>{a?.doctorId.name}</td>
                                    {(auth.user.role == 1) &&<td>
                                        <button onClick={()=>deleteAppointment(a._id)} className="btn btn-primary">Delete</button>
                                    </td>}
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;