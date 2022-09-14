import React,{  useState} from 'react';
import auth from '../../config/authConfig';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const SignUp = () => {

    // const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const  [error,setError] = useState('');


    //for navigation after signup or updating
    const navigate = useNavigate();

    let load = false
    const registerUser = async(data)=>{
        
        try {
            load = true
          let res = await auth.userRegistration(data.email,data.password,data.name)
          if(res.status ===200){
            toast.success('User Sing Up successfully')

              navigate('/appointment');
          } 
        console.log(data,res);
        } catch (err) {
          console.log(err.response.data);
          setError(err.response.data?.message)
        }
    }

    if (load) {
        return <Loading></Loading>
    }





    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>

                    <form onSubmit={handleSubmit(registerUser)}>


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


                        {/* password field  */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password",
                                    {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                            />
                            <label className="label">

                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {/* <span className="label-text-alt">Alt label</span> */}
                            </label>
                        </div>


                        {error&& <p className='text-red-500'><small>{error}</small></p>
}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="SIGN UP" />
                    </form>



                    <p><small>Already have an account? <Link className='text-primary' to='/login'>Please login</Link></small> </p>



                    {/* <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button> */}

                </div>
            </div>
        </div>
    );
};

export default SignUp;