import React, {useState} from 'react';
import Form from '../../components/Form'
import schema from '../../utils/Validation/ApplicantForm'
import API from '../../utils/API';

const Index = () => {
    const [appType, setAppType] = useState('CHECKING_AND_SAVINGS')

    const onSubmit = async (data) => {
        const dob = data.dateOfBirth
        const formattedDate = dob.toISOString().slice(0,10)
        const mailing={
            mailingAddress: data.mailingAddress ===''? data.address: data.mailingAddress,
            mailingCity: data.mailingCity ?? data.city,
            mailingState: data.mailingState ==='Select'? data.state: data.mailingState,
            mailingZipcode: data.mailingZipcode ?? data.zipcode,
        }
        const intIncome = data.income *100;

        const applicationRequest = {
            applicationType: appType,
            applicants: [{
                ...data,
                income: intIncome,
                dateOfBirth: formattedDate,
                ...mailing
            }]
        }

        console.log(applicationRequest)

        try {
            const res = await API.Application.newApplicant(applicationRequest)
            console.log(res)
        }catch (e){
            console.log('Yo error!!', e)
        }

    }

    const onAppChange = (e) =>{
        setAppType(e.target.value)
    }

    const form = [
        {
            id: 'firstName',
            type: 'text',
            label: 'First Name'
        },
        {
            id: 'middleName',
            type: 'text',
            label: 'Middle Name'
        },
        {
            id: 'lastName',
            type: 'text',
            label: 'Last name'
        },
        {
            id: 'dateOfBirth',
            type: 'date',
            label: 'DOB'
        },
        {
            id: 'gender',
            type: 'select',
            label: 'Gender',
            options: [
                {value: 'OTHER', name: 'Other'},
                {value: 'FEMALE', name: 'Female'},
                {value: 'MALE', name: 'Male'}
            ]
        },
        {
            id: 'email',
            type: 'email',
            label: 'Email'
        },
        {
            id: 'phone',
            type: 'phone',
            label: 'Phone'
        },
        {
            id: 'socialSecurity',
            type: 'ssn',
            label: 'Social Security Number'
        },
        {
            id: 'driversLicense',
            type: 'text',
            label: 'Drivers License'
        },
        {
            id: 'income',
            type: 'income',
            label: 'Annual Income'
        },
        {
            id: 'address',
            type: 'addressWithMailingOption',
            label: 'Address'
        }

    ]


    return (
        <div className='w-75 mx-auto pb-5'>
            <h1 className='display-5 mb-3 mt-5'>Applicant Form</h1>
            <hr className = 'mb-5'/>
            <div className='form-floating mb-3'>
                <select className='form-select' aria-label='applicationType'
                        defaultValue='CHECKING_AND_SAVINGS'
                        onChange={onAppChange}>
                    <option value='CHECKING_AND_SAVINGS'>Checking & Savings</option>
                    <option value='CHECKING'>Checking</option>
                    <option value='SAVINGS'>Savings</option>
                </select>
                <label htmlFor='applicationType'>Application Type</label>
            </div>
            <Form onSubmit={onSubmit} data={form} validationSchema={schema} defaultValues={{}} />
        </div>
    );
};

Index.propTypes = {};

export default Index;
