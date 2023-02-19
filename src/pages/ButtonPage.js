import Button from "../components/Button";
import { FaSun, FaBusAlt } from "react-icons/fa";

const ButtonPage = () => {

    return (
        <div>
            <div>
                <Button primary rounded>
                    <FaBusAlt />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary>Secondary</Button>
            </div>
            <div>
                <Button danger>
                    <FaSun />
                    Danger
                </Button>
            </div>
            <div>
                <Button warning rounded>Warning</Button>
            </div>
            <div>
                <Button success>Success</Button>
            </div>
        </div>
    );
}

export default ButtonPage;