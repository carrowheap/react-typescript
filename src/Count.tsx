import React,{FunctionComponent} from 'react';

interface Props{
    greeting: string;
}

const Count : FunctionComponent<Props> = (props) => {

    return <h1>{props.greeting}</h1>

}
export default Count;