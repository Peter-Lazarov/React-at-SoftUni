console.log('JS is working'); 

const rootHtmlElement = document.getElementById('root');
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);



const headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
const divReactElement = <div>text in div element</div>;

const anotherDivReactElement = (
    <div>
        <h1>h1 element</h1>
        <h2>h2 element</h2>
    </div>
)

const allElements = React.createElement(
    'div',
    null,
    headingReactElement,
    divReactElement,
    anotherDivReactElement
)


rootReactElement.render(allElements);
