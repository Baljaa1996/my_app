import React from 'react';
import './header.css'
// functiongiin ner duudahdaa zaawal ehnii usgiign tomoot ehluulne //

const Header = () => {
    return (
        <div className='head'>
            <div className='heading'>
                <div className='item1'>
                    <button><i class="fa-solid fa-bars"></i></button>
                    <a href="https://www.youtube.com/watch?v=tN9Qhie7HCU"><i class="fa-brands fa-youtube"><p>YouTuBe</p></i></a>
                </div>
                <div className='item2'>
                    <label htmlFor="Search">Search</label>
                    <input type="search" />
                    <i><i class="fa-solid fa-magnifying-glass-dollar"></i></i>
                </div>
                <div className='item3'>
                    <i><i class="fa-sharp fa-solid fa-video"></i></i>
                    <i><i class="fa-regular fa-bell"></i></i>
                    <i><i class="fa-solid fa-user"></i></i>
                </div>
            </div>
        </div>
    )
}
export default Header
