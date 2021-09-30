import React, {useMemo, useRef} from 'react';
import Table from '../../components/Table'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import SearchForm from './SearchForm';
import API from '../../utils/API';

const Index = () => {
    const dropdownRef = useRef();

    const onDowntownRotate = () => {
        dropdownRef.current.classList.toggle('rotate-180')
    }

    const onSubmit =async (data)=>{
        console.log('Submit Data: ', data)
        await API.Bank.searchMembers(data);
    }

    const columns = useMemo(()=>[
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'Applicant',
            accessor: 'applicant.firstName'
        },
        {
            Header: 'branch',
            accessor: 'branch.id'
        },
        {
            Header: 'Member ID',
            accessor: 'membershipId'
        },

    ], [])

    const fakeData = [
        {
            id: 1,
            applicant: {
                firstName: 'bet',
                lastName: 'alpha'
            },
            branch: {
                id: 1,
                nickname: 'Main St',
            },
            membershipId: 52132,

        },
        {
            id: 1,
            applicant: {
                firstName: 'bet',
                lastName: 'alpha'
            },
            branch: {
                id: 1,
                nickname: 'Main St',
            },
            membershipId: 52132,

        }
    ]


    return (
        <div className='w-75 mx-auto my-2 py-3'>
            <h1 className='display-5'>Members Management</h1>

            <div className='mb-5'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h2 className='fs-4 fw-normal'>Search</h2>
                    </div>
                    <button type='button' className='btn btn-primary rounded-circle rotate'
                            data-bs-toggle='collapse'
                            data-bs-target='#searchArea'
                            aria-expanded='false'
                            aria-controls='searchArea'
                            ref={dropdownRef}
                            onClick={onDowntownRotate}
                    >
                        <FontAwesomeIcon icon='chevron-up' rotation={180}/>
                    </button>
                </div>

                <div className='collapse pt-2' id='searchArea'>
                    <SearchForm onSubmit={onSubmit}/>
                </div>
            </div>

            <div>Development table</div>
            <Table data={fakeData} columns={columns} />
        </div>
    );
};


export default Index;
