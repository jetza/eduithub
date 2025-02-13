import './NavigationTop.scss';
import {JSX} from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher/ThemeSwitcher";

interface NavigationTopProps {
    handleThemeChange: (theme: string) => void;
}

const NavigationTop: (props: NavigationTopProps) => JSX.Element = ({ handleThemeChange}) => {
    return (
        <div className="transparent-bar top">
            <ThemeSwitcher onThemeChange={handleThemeChange} />
        </div>
    );
};

export default NavigationTop;