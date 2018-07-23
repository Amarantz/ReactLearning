import React from 'react';
import ReactDom from 'react-dom';

const API_KEY = 'AIzaSyBv3UuHlTlS_N7ffibVhP33lnMWRiYfMpM';
// create a new component. this component should produce some html
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's generated HTML and put in on the page (in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
