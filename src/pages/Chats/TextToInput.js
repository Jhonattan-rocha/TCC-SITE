import React, {useState} from "react";
import { Input, TextArea, TextInput } from './styled';
import { FaEdit } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

export default function TextToInput({
    onChange = () => {},
    value = "",
    multiline=false
}){
    const [change, setChange] = useState(false);
    const [data, setData] = useState(value);

    return (
        <div style={{width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            {change ? multiline ? 
            <TextArea value={data} onChange={(e) => {
                setData(e.target.value);
                onChange(e.target.value);
            }}/> : <Input value={data} onChange={(e) => {
                setData(e.target.value);
                onChange(e.target.value);
            }}/> : <TextInput>{data}</TextInput>}
            {change ? <GrClose cursor={'pointer'} onClick={() => setChange(!change)} size={25}></GrClose> : <FaEdit size={25} cursor={'pointer'} onClick={() => setChange(!change)}></FaEdit>}
        </div>
    );
}
