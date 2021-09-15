import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import AdminForm from './AdminForm';

const Index = () => {
    const [formType, setFormType] = useState()
    let location = useLocation();

    useEffect(() => {

        switch (location.state.userType) {
            case 'admin':
                setFormType(<AdminForm/>)
                break;
            case 'employee':
                break;
            case 'member':
                break;
            default:
                break;
        }

    }, [location])

    return (
        <div className='w-75 mx-auto'>
            {formType}
        </div>
    );
};

export default Index;
