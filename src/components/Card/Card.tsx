import './Card.scss';
import {JSX} from "react";

interface CardProps {
    theme: string;
    name: string;
}

const Card: (props: CardProps) => JSX.Element = ({ theme, name }) => {
    return (
        <div className={`navigation-container ${theme}`} data-theme={theme}>
            <div className="holographic-card">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default Card;