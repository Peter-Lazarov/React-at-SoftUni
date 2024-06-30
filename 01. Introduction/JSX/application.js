console.log('JS is working');

var rootHtmlElement = document.getElementById('root');
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
var divReactElement = React.createElement(
  'h2',
  null,
  'text in div element'
);

rootReactElement.render(headingReactElement);
rootReactElement.render(divReactElement);