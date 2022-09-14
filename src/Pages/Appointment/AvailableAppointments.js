import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [doctor,setDoctor] = useState([])

    const [treatment, setTreatment] = useState(null);

    const formatedDate = format(date, 'PP');

    //using react query
    const { data: services, isLoading, refetch } = useQuery(['available', formatedDate], () =>
        fetch(`https://obscure-beyond-45774.herokuapp.com/available?date=${formatedDate}`)
            .then(res => res.json())
    )

    const getDoctor = async ()=>{
        try{
            const response = await fetch(`http://localhost:5001/doctor`)
            const data = await response.json()
            console.log(data);
            setDoctor(data.doctor)

        }catch(err){
            console.log(err);
        }
    }
  
    useEffect(() =>{
        getDoctor()
    },[])
    console.log('doctor',services);

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(`https://obscure-beyond-45774.herokuapp.com/available?date=${formatedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [formatedDate]);

    return (
        <div>
            <h4 className='text-xl text-center text-secondary my-12'>Available Appointments on  {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    doctor?.map((d) =>
                        <Service key={d._id}
                            service={d}
                            setTreatment={setTreatment}></Service>
                        // <h1>{d.name}</h1>
                    )
                }
            </div>
            {treatment && <BookingModal treatment={treatment} date={date} setTreatment={setTreatment} refetch={refetch}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;