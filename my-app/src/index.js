import React from 'react';
import ReactDOM from 'react-dom';
import ComponentHeader from './js/components/header';
import ComponentBodyIndex from './js/components/bodyIndex';
import ComponentFooter from './js/components/footer';


export default class Index extends React.Component {
    render() {
        return (
            <div>
                 <ComponentHeader />
                 <ComponentBodyIndex />
                 <ComponentFooter />
            </div>
           
        );
    }
}   

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)