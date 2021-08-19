import React, {useState} from 'react';
import API from '../utils/API';

const Index = () => {
    const [userDetails, setUserDetails] = useState({username: '', password: ''})
    const [onError, setOnError] = useState({visibility: 'hidden', msg:''})

    const onChange = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const onSubmit = async (e) => {
        e.preventDefault();

        if(userDetails.username===''&& userDetails.password==='') {
            setOnError({visibility: '', msg: 'Please enter credentials.'})
            return;
        }

        try{
            const res = await API.User.login(userDetails);
            if(res.status !== 200) setOnError({visibility:'', msg:'Invalid Credentials'})
        } catch(e) {
            console.error(e.message);
            setOnError({visibility: '', msg:'Oops! We\'re checking what the problem is.'})
        }
    }

    return (
        <div
            className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-transparent opacity-90 '>
            <div className='p-8 rounded-lg shadow-2xl space-y-6 bg-white '>
                <h2 className='text-3xl font-bold mb-4 text-blue-400 text-center'>Login</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-10 mx-auto text-blue-400"
                         fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </div>
                <form className='text-center space-y-6' onSubmit={onSubmit}>
                    <div className={`text-red-500 ${onError.visibility}`}>{onError.msg}</div>
                    <div className='relative'>
                        <input type='text'
                               name='username'
                               className='peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent
                               focus:outline-none focus:border-blue-700'
                               placeholder='username'
                               id='username'
                               value={userDetails.username}
                               onChange={onChange}
                        />
                        <label htmlFor='username' className='absolute left-0 -top-3.5 text-gray-600 text-sm
                        transition-all peer-placeholder-shown:text-base peer-placeholder-show:text-gray-40
                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                            Username
                        </label>
                    </div>

                    <div className='relative'>
                        <input type='password'
                               name='password'
                               className='peer h-10 w-full border-b-2 border-gray-300 placeholder-transparent
                               focus:outline-none focus:border-blue-700'
                               placeholder='password'
                               id='password'
                               value={userDetails.password}
                               onChange={onChange}
                        />
                        <label htmlFor='password' className='absolute left-0 -top-3.5 text-gray-600 text-sm
                        transition-all peer-placeholder-shown:text-base peer-placeholder-show:text-gray-40
                        peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm'>
                            Password
                        </label>
                    </div>

                    <input type='submit' value='Sign in' className='mt-20 font-semibold w-full block rounded-lg p-2 bg-blue-500 hover:bg-blue-400 text-white
                    focus:outline-none focus:ring-offset-1 focus:ring focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer '/>
                </form>
            </div>
        </div>
    );
};

Index.propTypes = {};

export default Index;
