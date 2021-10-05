import axios from '../axiosCustom'

const BankAPI ={
    searchMembers: async function(search){
        try{
            return await axios.get('/api/members', {params: {...search}});
        }catch (e){
            console.error(e.message)
        }
    }
}

export default BankAPI;
