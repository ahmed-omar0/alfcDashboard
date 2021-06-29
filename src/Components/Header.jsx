import React , { useRef } from 'react';
import avatar from '../images/avatar.jpg'
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
        <div className="header p-sm-5 p-3">
            <div className="icons">
                <div>
                    <span className="red-dot"></span>
                    <IoNotificationsOutline className="text-primary fs-3"/>
                </div>
                <div>
                    <span className="red-dot"></span>
                    <IoChatbubblesOutline className="text-primary fs-3"/>
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
                            <a href="/profile" className="nav-link text-white">
                                    <CgProfile  className="mx-1 fs-5"/> My Profile
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/settings" className="nav-link text-white">
                                    <IoSettingsOutline className="mx-1 fs-5"/> Settings
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link text-white">
                                    <BiLogOut className="mx-1 fs-5"/> Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
