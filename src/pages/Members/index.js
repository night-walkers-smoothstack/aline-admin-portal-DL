import React, {useMemo} from 'react';
import Table from '../../components/Table'

const Index = () => {

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

            <div>Development table</div>
            <Table data={fakeData} columns={columns} />
        </div>
    );
};


export default Index;
