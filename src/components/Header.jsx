import { Link } from "react-router-dom";
import getCurrentMonth from "../utils/dates";
const currentMonth = getCurrentMonth();

function Header({ title }){
    return (
        <header>
            <div className="headerContainer">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <div className="links">
                    <nav>
                        <Link to="/">Home</Link>
                    </nav>
                    <nav>
                        <Link to="/alltransactions">Alla transaktioner</Link>
                    </nav>
                </div>
                <div className="date">
                    <p>{currentMonth}</p>
                </div>
            </div>
        </header>
    )
}

export default Header;