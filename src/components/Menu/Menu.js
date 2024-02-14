import React from 'react';

const Menu = () => {
    return (
        <div>
            <a href="#main" className="skip">Skip to content</a>
            <nav aria-label="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="https://google.com">Google</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
