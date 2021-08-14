import React, {useState} from 'react';
import Header from './Header';
import TextInput from '../components/TextInput';

/*
Page Template index that uses
 */
const Index = () => {
    const [userTextInput, setUserTextInput] = useState({text: ''});

    const onChange = (e) => {
        setUserTextInput({text: e.target.value})
        console.log('userTextInput: ', userTextInput)
    }

    return (
        <div>
            <Header/>
            <TextInput onChange={onChange} label='My label' id="MyId"/>
        </div>
    );
};

export default Index;
