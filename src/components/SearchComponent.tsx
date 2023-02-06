import React from 'react';

export const SearchComponent: React.FC = () => {
    return (
        <div className='search'>
            <input type="text" className="search__input" id='search__input' />
            <div className="search__icon">
                <svg width="20" height="20" viewBox="0 0 71 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="29" cy="29" r="27" stroke="white" stroke-width="4" />
                    <path d="M48 46.5L69 67" stroke="white" stroke-width="4" stroke-linejoin="round" />
                </svg>

            </div>
        </div>
    )
}
