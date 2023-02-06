import Accordion from './components/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {

    const items = [
        {
        id: 1,
        label: 'Click Here',
        content: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            label: 'Don\'t click here',
            content: 'What did you do!'
        },
        {
            id: 3,
            label: 'Lorem ipsum click',
            content: 'It doesn\'t matter what you click or not click'
        }
    ]

return <Accordion items={items} />;

}

export default App