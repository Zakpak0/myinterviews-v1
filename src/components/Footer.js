import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <Link to="/privacy">
            <p >
               &copy; 2021-2022 My Interview Diary | All Rights Reversed. <a href="">Privacy Statement</a>
           </p>
            </Link>
        </div>
    )
}

export default Footer
