import './Card.scss';
import {JSX} from "react";

interface CardProps {
    theme: string;
}

const Card: (props: CardProps) => JSX.Element = ({ theme }) => {
    return (
        <div className={`navigation-container ${theme}`}>
            <div className="holographic-card">
                <h2>HOLOGRAM</h2>
            </div>
        </div>
    );
};

export default Card;