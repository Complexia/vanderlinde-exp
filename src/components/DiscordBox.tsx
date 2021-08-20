import { Link } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
function DiscordBox() {
    return (
        <Link to={{ pathname: "https://discord.gg/7aHtnjGs" }} target="_blank">
        
            <FaDiscord size={350}/>
        </Link>
    )
}
export default DiscordBox;