import React from "react";

export const SliderMenuComponent: React.FC = () => {
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };
    return (<>
        <div className="slider-menu">
            <button className="slider-menu__button">Запеченые роллы</button>
            <button className="slider-menu__button">Холодные роллы</button>
            <button className="slider-menu__button">Жареные роллы</button>
            <button className="slider-menu__button">Салаты</button>
            <button className="slider-menu__button">Жареные роллы</button>
            <button className="slider-menu__button">Жареные роллы</button>

        </div>
    </>)
}