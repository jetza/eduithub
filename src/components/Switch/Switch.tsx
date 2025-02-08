import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './Switch.scss';

interface SwitchProps {
    isOn: boolean;
    handleToggle: () => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, handleToggle }) => {
    return (
        <div className="switch-container" onClick={handleToggle}>
            <div className={`switch ${isOn ? 'on' : 'off'}`}>
                <div className="icon moon"><FaSun /></div>
                <div className="icon sun"><FaMoon /></div>
            </div>
        </div>
    );
};

export default Switch;