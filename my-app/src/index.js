import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './js/components/header';
import ComponentBodyIndex from './js/components/bodyindex';
import ComponentFooter from './js/components/footer';


export default class Index extends React.Component {
    render() {
        return (
            <div>
                 <ComponentHeader />
                 <ComponentBodyIndex userid={1236}/>
                 <ComponentFooter />
            </div>
           
        );
    }
}   

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)