import react, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Admin from '../assets/admin.png';
import openTender from '../assets/open.png';
import home from '../assets/home.png';
import selectiveTender from '../assets/selective.png';
import result from '../assets/result.png'

const Sidebar= () => {
    return(
        <ul className="menu h-full flex justify-center bg-base-300 p-2 bg-opacity-80 rounded-box ">
        <li className=' h-[60px] w-[60px] bg-primary-focus border-solid border-b-[1px] border-primary border-t-[1px]'>
            <Link to='/'>
                <img src={home} alt="Homepage" />
            </Link>
        </li>
        <li className=' h-[60px] w-[60px] bg-primary-focus border-b-[1px] border-primary '>
            <Link to='/openTender'>
                <img src={openTender} alt="openTender" />
            </Link>
        </li>
    
        <li className=' h-[60px] w-[60px] bg-primary-focus border-b-[1px] border-primary '>
            <Link to='/admin'>
                <img src={Admin} alt="Adminpage" />
            </Link>
        </li>
        </ul>
    )
}
export default Sidebar;