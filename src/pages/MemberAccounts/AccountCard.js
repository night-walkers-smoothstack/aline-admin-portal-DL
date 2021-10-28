import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

const AccountCard = ({account, error}) => {

    useEffect(() => {
        console.log(account)
    }, [account])
    return (
        <div className='card'>
            <div className='card-body'>
                <h5 className='card-title display-6 lead'>{account?.type}</h5>
                <hr/>
                <h6 className='card-subtitle lead fw-normal'>Account Number: {account?.accountNumber}</h6>
                <h6 className='card-subtitle lead fw-normal'>Status: <span
                    className='text-capitalize'>{account?.status.toString().toLowerCase()}</span></h6>
                <br/>
                <div>Balance: {account?.balance}</div>
                {
                    account?.type === 'CHECKING' ?
                        <div>Available Balance: {account.availableBalance}</div> :
                        <div>APY: {account.apy}</div>
                }
            </div>
        </div>
    );
};

AccountCard.propTypes = {
    account: PropTypes.object,
    error: PropTypes.bool
};

export default AccountCard;
