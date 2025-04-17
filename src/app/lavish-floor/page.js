"use client"

import "./lavish.css"
import logo from '../../../public/images/99 logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import nearme from "../../../public/images/near me.png";
import mick from "../../../public/images/mick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faBarsStaggered, faMagnifyingGlass, faPlay, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import vdh from "../../../public/images/lavishfloor/vdh.png"
import vaibhava from "../../../public/images/lavishfloor/vaibhavA.jpeg"
export default function lavish() {
    
    return (
          <div className="page">
              <div className="header">
                <div className="navbar">
                    <div className='nav'>
                        <div className="row align-items-center">
                            <div className="col-2 ">
                                <div className="img">
                                    <Image src={logo} width={120} style={{ height: "auto" }} alt='logo' />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="down">
                                    <div className="left">
                                        <div className="all text-black">
                                            Buy<span><FontAwesomeIcon icon={faAngleDown} style={{ width: "15px" }} /></span>
                                        </div>
                                        <div className=" inp"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "15px", marginLeft: "3px" }} className="me-1" /><input type="search" placeholder="search Flat in sector 77 in noeda" /></div>
                                    </div>
                                    <div className="right">
                                        <div className="icon"><Image src={nearme} alt="nearme" /></div>
                                        <div className="icon"><Image src={mick} alt="mick" /></div>



                                        <div className="meg text-dark">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "15px", marginLeft: "3px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-2 ">
                                <div className="post">
                                    <Link href='/'>  Post property <span>free</span></Link>

                                </div>
                            </div>
                            <div className="col-1 ">
                                <div className="profile d-flex justify-content-end">
                                    <div className="logo"><Link href='/'> <span><FontAwesomeIcon icon={faUser} /></span  ><FontAwesomeIcon className="ico" icon={faAngleDown} style={{ width: "15px" }} /></Link></div>
                                    <div className="profile-in-box">
                                        <div className="login mb-1"><Link href='/'>LOGIN/REGISTER</Link></div>
                                        <div className="activity">  My Activity</div>
                                        <ul>

                                            <li>Recently Searched</li>
                                            <li>Recently Viewed</li>
                                            <li >Shortlisted</li>
                                            <li>Contected</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 d-flex justify-content-start">
                                <div className="menu ">
                                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><FontAwesomeIcon style={{ width: "20px" }} icon={faBarsStaggered} /></button>
                                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                                        <div className="offcanvas-header" style={{ backgroundColor: "#f4f5f7", padding: "13px 19px 13px 30px" }}>
                                            <h5 className="offcanvas-title" id="offcanvasRightLabel"><Link href='/login' style={{ color: "#0078db ", fontSize: "16px" }}>Login/Register</Link></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div className="offcanvas-bodyy">
                                            <div className="div1">
                                                Post Property
                                                <span>free</span>
                                            </div>
                                            <div className="div2">
                                                Explore our Services
                                            </div>
                                            <div className="div3">

                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>For Buyers</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>For Tenants</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>For Owners</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>For Dealers/Builders</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>For Owners</div>

                                            </div>
                                            <div className="div4">

                                                <div className="li" style={{ padding: "10px 25px" }}>Home Loans</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>Insights <span className="span-box">new</span></div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>Articals & News</div>


                                            </div>
                                            <div className="div5">

                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>About Us</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>Get Help</div>
                                                <div className="li"><span><FontAwesomeIcon icon={faPlay} /></span>Download app</div>

                                            </div>
                                            <div className="div6">
                                                <input type="search" placeholder="Search By Proparty Code" /><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "20px", marginLeft: "3px" }} className="me-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="body">
                <div className="content">
                    <div className="first-sec">
                        <div className="row">
                            <div className="col-12 col-md-8"></div>
                            <div className="col-12 col-md-4">
                                <div className="inner">
                                    <div className="box">
                                        <div className="heading mb-3 d-flex align-items-center">
                                            <div className="img me-2">
                                                <Image src={vdh} alt="vdh"/>
                                            </div>
                                            <div className="text">
                                            Why you should consider Vaibhav Dwarka Homes?
                                            </div>
                                        </div>
                                        <div className="list">
                                            <ul>
                                                <li>Terrace children’s play area in the project</li>
                                                <li>Well-ventilated and spacious apartments</li>
                                                <li>Ample car parking</li>
                                            </ul>
                                        </div>
                                        <div className="view">
                                            <Link href="/">View 1 more <FontAwesomeIcon icon={faArrowRight} /></Link>
                                        </div>
                                        <div className="vaibhav d-flex">
                                            <div className="text">
                                                 <div className="sm-heading">
                                                 DEVELOPED BY
                                                 </div>
                                                 <div className="heading">
                                                 Vaibhav Associates
                                                 </div>
                                            </div>
                                            <div className="img">
                                                <Image src={vaibhava} alt="/"/> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    )
}