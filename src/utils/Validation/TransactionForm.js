import * as yup from 'yup';
import baseSchema from './library'

const {
    transactionType,
    transactionMethod,
    amount,
    merchantCode,
    merchantName,
    accountNumber
}= baseSchema

const schema = yup.object().shape({
    type: transactionType,
    method: transactionMethod,
    amount,
    merchantCode,
    merchantName,
    accountNumber
})

export default schema;
