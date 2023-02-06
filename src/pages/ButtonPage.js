import Button from '../components/Button';
import { GoBell } from "react-icons/go";

function ButtonPage() {

const handleClick = () => {
    console.log('Clicked');
}

    return (
        <div>
            <div>
                <Button primary onClick={handleClick}><GoBell/> Lorem ipsum</Button>
                <Button secondary onClick={handleClick}>Lorem ipsum</Button>
                <Button warning onClick={handleClick}>Lorem ipsum</Button>
            </div>
        </div>);
}

export default ButtonPage;