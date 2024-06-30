console.log('JS is working');

var rootHtmlElement = document.getElementById('root');
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
var divReactElement = React.createElement(
    'div',
    null,
    'text in div element'
);

var anotherDivReactElement = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'h1 element'
    ),
    React.createElement(
        'h2',
        null,
        'h2 element'
    )
);

var allElements = React.createElement('div', null, headingReactElement, divReactElement, anotherDivReactElement);

rootReactElement.render(allElements);