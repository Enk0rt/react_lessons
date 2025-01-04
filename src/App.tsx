import './App.css'
import {FC} from 'react';

type MyPropsType = {text: string};

const App:FC<MyPropsType> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default App;