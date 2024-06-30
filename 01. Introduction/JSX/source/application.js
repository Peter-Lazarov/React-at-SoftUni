console.log('JS is working'); 

const rootHtmlElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

const headingReactElement = React.createElement('h1', null, 'Hello JSX from React');

rootReactElement.render(headingReactElement);


