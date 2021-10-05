import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table'

const MembersTable = ({data}) => {

    const columns = useMemo(()=>[
        {
            Header: 'id',
            accessor: 'id'
        },
        {
            Header: 'Membership Id',
            accessor: 'membershipId'
        },
        {
            Header: 'First name',
            accessor: 'applicant.firstName'
        },
        {
            Header: 'Last name',
            accessor: 'applicant.lastName'
        },
        {
            Header: 'Branch City',
            accessor: 'branch.city'
        },

    ], [])

    return (
        <div>
            <Table data={data} columns={columns}/>
        </div>
    );
};

MembersTable.propTypes = {
    data: PropTypes.array
};

export default MembersTable;
