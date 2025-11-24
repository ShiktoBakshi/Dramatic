
const Nav = () => {
    return (
        <>
            <div className="navbar  bg-black/40  fixed top-0 left-0  w-full z-50 font-mon backdrop-blur-md">
                <div className="navbar-start">
                    <div className="dropdown text-amber-50">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content  bg-black/40 text-amber-100  backdrop-blur-md rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <div className=" flex justify-center items-center h-8  p-2 lg:mr-3 mr-1 rounded-full backdrop-blur-md text-amber-50  hover:border border-[#58f0ee] ">
                                <svg className=" h-[1em] mr-2 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input type="search" required placeholder="Search" className=" focus:outline-none  " />
                            </div>
                            <li><a>HOME</a></li>
                            <li><a>TV SHOW</a></li>
                            <li><a>MOVIE</a></li>
                            <li><a>NEW</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-gri text-[#facc15] ">DRAMATIC</a>
                   
                </div>

                 <div className=" navbar-center hidden lg:flex">
                        <ul className="menu  menu-horizontal text-amber-100 px-1">
                            <li><a>HOME</a></li>
                            <li><a>TV SHOW</a></li>
                            <li><a>MOVIE</a></li>
                            <li><a>NEW</a></li>
                        </ul>
                    </div>

                <div className="navbar-end">
                    <div className=" hidden lg:flex justify-center items-center h-8  p-2 lg:mr-3 mr-1 rounded-full backdrop-blur-md text-amber-50  hover:border border-[#58f0ee] ">
                        <svg className=" h-[1em] mr-2 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" required placeholder="Search" className=" focus:outline-none  " />
                    </div>
                    <div className="avatar h-5 w-5 lg:h-10 lg:w-10 lg:ml-2">
                        <div className=" ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Nav;