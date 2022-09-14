import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Primarybutton from '../Shared/Primarybutton';
const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
                <p className='text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quasi quod, ratione dicta aperiam rem impedit perferendis labore quam, quas praesentium non quaerat possimus reiciendis laborum optio sed ex at sequi nostrum deserunt provident eligendi accusantium. Dolorum non consequatur sed.</p>
                <Primarybutton>Get Started</Primarybutton>
            </div>
        </section>
    );
};

export default MakeAppointment;