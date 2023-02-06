import React from 'react';
import { HeaderComponent } from '../components/HeaderComponent';
import { SearchComponent } from '../components/SearchComponent';
import { SliderMenuComponent } from '../components/SliderMenuComponent';

// import { useNavigate } from 'react-router-dom'

export const MenuPage: React.FC = () => {
    // const navigate = useNavigate();

    return (
        <>
            <HeaderComponent />
            <div className="container menu-page">
                <SearchComponent />
                <SliderMenuComponent />
            </div>
        </>
    );
}

