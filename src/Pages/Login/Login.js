import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    let signInErrorMessage;

    //for navigating to specific page
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";





    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    //use token custom hook
    const [token] = useToken(user || gUser);

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    //for preventing browser errors
    useEffect(() => {
        if (token) {
            // console.log(user || gUser);
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInErrorMessage = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }




    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>



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


                        {signInErrorMessage}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="LOGIN" />
                    </form>



                    <p><small>New to Doctor's Portal? <Link className='text-primary' to='/signup'>Create New Account</Link></small> </p>



                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Login;