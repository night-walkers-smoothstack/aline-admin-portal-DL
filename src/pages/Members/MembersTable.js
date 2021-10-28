import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import Table from '../../components/Table'
import Modal from '../../components/Modal'
import API from '../../utils/API';
import MemberEditForm from './MemberEditForm';

const MembersTable = ({data}) => {
    const [modalDetails, setModalDetails] = useState({
        memberData: null,
        loading: true,
        memberId: null,
    })

    const columns = useMemo(() => {

        const onEdit = async (e) => {
            e.preventDefault()
            setModalDetails({...modalDetails, loading:true})
            const membership= e.target.getAttribute('data-membership');
            const {data} = await API.Bank.getMemberByMembershipId(membership)
            console.log('Memberdata form onEdit: ', data.applicant)
            setModalDetails({...modalDetails, memberData: data.applicant, loading: false, memberId: membership})
        }

        return [{
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
            {
                Header: 'Edit',
                Cell: ({cell})=>{
                    const {row: original} = cell;
                    console.log('Original.original: ', original.original)
                    return (
                        <button className='btn btn-primary' onClick={onEdit}
                                data-bs-toggle='modal'
                                data-bs-target='#memberEdit'
                                data-membership={original.original.membershipId}
                        >
                            Edit
                        </button>

                    )
                }
            }
        ]

    }, [modalDetails])



    return (
        <div>
            <Table data={data} columns={columns}/>
            <Modal modalId='memberEdit' title='Edit Member Details' >
               <MemberEditForm memberData={modalDetails.memberData} loading={modalDetails.loading} membershipId={modalDetails.memberId}/>
            </Modal>
        </div>
    );
};

MembersTable.propTypes = {
    data: PropTypes.array
};

export default MembersTable;
