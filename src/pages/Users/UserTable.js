import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table'

const UserTable = ({data}) => {

    const columns = useMemo(()=>[
        {
            Header: 'User Id',
            accessor: 'id'
        },
        {
            Header: 'First name',
            accessor: 'firstName',
        },
        {
            Header: 'Last Name',
            accessor: 'lastName'
        },
        {
            Header: 'Username',
            accessor: 'username'
        },
        {
            Header: 'Role',
            accessor: 'role'
        },

    ], [])

    return (
        <div>
            <Table data={data} columns={columns}/>
        </div>
    );
};

UserTable.propTypes = {
    data: PropTypes.array
};

export default UserTable;
