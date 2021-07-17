import React , { useRef } from 'react';
import avatar from '../images/avatar.jpg'
import { Link } from 'react-router-dom'
//  Icons
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsOutline, IoChatbubblesOutline, IoNotificationsOutline } from 'react-icons/io5'

function Header() {
    const infoRef = useRef()
    const handleHover = () => {
        infoRef.current.classList.toggle('hidden')
    }
    return (
        <div className="header bg-primary p-sm-5 p-3">
            <div className="icons">
                <div>
                    <span className="red-dot"></span>
                    <IoNotificationsOutline className="text-white  fs-3"/>
                </div>
                <div>
                    <span className="red-dot"></span>
                    <IoChatbubblesOutline className="text-white  fs-3"/>
                </div>
            </div>
            <div className="profile-info" onMouseLeave={handleHover} onMouseEnter={handleHover}>
                <div className="image">
                    <img src={avatar} alt="avatar" width={"100%"} height={"100%"} className="rounded-circle border border-2 border-primary img-thumbnail"/>
                </div>
                <div className=" info text-white rounded px-2 py-3 hidden"  ref={infoRef}>
                    <h5 className="text-center">Welcome Admin</h5>
                    <h6>Ahmed Omar</h6>
                    <hr/>
                    <ul className="nav flex-column px-1">
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link text-white">
                                    <CgProfile  className="mx-1 fs-5"/> My Profile
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/settings" className="nav-link text-white">
                                    <IoSettingsOutline className="mx-1 fs-5"/> Settings
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link text-white">
                                    <BiLogOut className="mx-1 fs-5"/> Log Out
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
