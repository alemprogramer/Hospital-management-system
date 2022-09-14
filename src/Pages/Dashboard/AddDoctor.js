import React from 'react';
import { useForm } from 'react-hook-form';
// import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
// import Loading from '../Shared/Loading';

const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // const { data: services, isLoading } = useQuery('services', () => fetch(`http://localhost:5000/service`).then(res => res.json()))


    /**
     * 3 ways to store images
     * 1. third party storage //free open public storage is ok for practice project
     * 2. own storage in own server(file system)
     * 3.Database:MongoDb
     * 
     * YUP: to validate file need to study(yup file validation for react form)
    */
    const onSubmit = async data => {
        try {
            const url = `http://localhost:5001/doctor`;
        const doctors = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const res = await doctors.json();
        toast.success('Doctor added successfully')
        console.log(res);
        } catch (error) {
            toast.error('Something is error')
        }
    }

    // if (isLoading) {
    //     return <Loading></Loading>
    // }

    const services =[
        {
            id:1,
            name:'Winson Herry'
        },
        {
            id:2,
            name:'Winson Herry'
        },
        {
            id:3,
            name:'Winson Herry'
        },
    ]


    return (
        <div>
            <h2 className='text-2xl'> Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>


                {/* name field  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                    <input
                        type="text" placeholder="Your Name"
                        className="input input-bordered w-full max-w-xs"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: 'Name is Required'
                                }
                            })}
                    />
                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                </div>



                {/* email field */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                    <input
                        type="email" placeholder="Your email"
                        className="input input-bordered w-full max-w-xs"
                        {...register("email",
                            {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                    />
                    <label className="label">

                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                </div>


                {/* Specialty field  */}
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>
                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                    <select {...register("specialty")} class="select input-bordered w-full max-w-xs">
                        {
                            services.map(service =>
                                <option key={service._id}
                                    value={service.name}
                                >{service.name}</option>)
                        }
                    </select>
                </div>


                {/* photo input section  */}

                <div className="form-control w-full max-w-xs">
                    <label className="label">

                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                        {/* <span className="label-text-alt">Alt label</span> */}
                    </label>
                </div>

                <input className='btn w-full max-w-xs text-white' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddDoctor;