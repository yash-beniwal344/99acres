"use client"

import "./lavish.css"
import logo from '../../../public/images/99 logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import nearme from "../../../public/images/near me.png";
import mick from "../../../public/images/mick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faBarsStaggered, faCircleInfo, faHeart, faHourglassStart, faMagnifyingGlass, faPhone, faPlay, faThumbsUp, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import vdh from "../../../public/images/lavishfloor/vdh.png"
import vaibhava from "../../../public/images/lavishfloor/vaibhavA.jpeg";
import headsectionimg from "../../../public/images/lavishfloor/99headsectionimg.jpeg";
import newproject from "../../../public/images/lavishfloor/newproject.jpeg";
import price from "../../../public/images/lavishfloor/price.png";
import floormap from "../../../public/images/lavishfloor/floormap.png";
import propertyadv from "../../../public/images/lavishfloor/propertyadv.png";
import kids from "../../../public/images/lavishfloor/kids_play_area.png";
import parking from "../../../public/images/lavishfloor/car_parking.png";
import lift from "../../../public/images/lavishfloor/lift.png";
import intercom from "../../../public/images/lavishfloor/intercom.png";
import power from "../../../public/images/lavishfloor/power.png";
import water from "../../../public/images/lavishfloor/water.png";
import home4 from "../../../public/images/home4.jpg";
import home5 from "../../../public/images/home5.jpg";
import home6 from "../../../public/images/home6.jpg";
import div4img3 from "../../../public/images/div4img3.jpg";
import bilding5 from "../../../public/images/bilding5.jpg";
import ticket from "../../../public/images/ticket.png";
import tag from "../../../public/images/LeftTagEnd.png";
import offer from "../../../public/images/NL_Tag.png";
import bilding4 from "../../../public/images/bilding4.jpg";
import morereview from "../../../public/images/lavishfloor/writeNewReview.png";
import readimg from "../../../public/images/lavishfloor/img_010.png";

export default function lavish() {

    return (
        <div className="page">
            <div className="header">
                <div className="navbar">
                    <div className='nav'>
                        <div className="row align-items-center">
                            <div className="col-2 ">
                                <div className="img">
                                    <Link href="/">  <Image src={logo} width={120} style={{ height: "auto" }} alt='logo' /></Link>
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
                        <div className="row m-0 p-0">
                            <div className="col-12 col-md-8">
                                <div className="inner-div">
                                    <div className="img-row">
                                        <div className="row m-0">
                                            <div className="col-12 col-md-7">
                                                <div className="img mb-1">
                                                    <Image src={newproject} alt="newproject" />
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-5">
                                                <div className="row mb-1">
                                                    <iframe src="https://www.youtube.com/embed/N2y8tZsaZvc?si=D-d15ke-VesGhrFi" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                                </div>
                                                <div className="row mb-1">
                                                    <div className="img">
                                                        <Image src={headsectionimg} alt="headsectionimg" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="project-list d-flex gap-2">
                                        <div className="home">Home</div> <span>›</span>
                                        <div className="home">Projects in Delhi</div> <span>›</span>
                                        <div className="home">Dwarka</div> <span>›</span>
                                        <div className="home">Sector 15 Dwarka</div> <span>›</span>
                                        <div className="home">Vaibhav Dwarka Homes</div> <span>›</span>
                                    </div>
                                    <div className="space4">

                                    </div>
                                    <div className="vd-home">
                                        <div className="head-sec">
                                            <div className="d-flex flex-wrap justify-content-between">
                                                <div className="left">
                                                    <div className="heading">
                                                        Vaibhav Dwarka Homes
                                                    </div>
                                                    <div className="space4">

                                                    </div>
                                                    <div className="sm-heading">
                                                        Sector 15 Dwarka, Delhi
                                                    </div>
                                                    <div className="quality d-flex" style={{ paddingTop: "16px" }}>
                                                        <span className="rear ">
                                                            <FontAwesomeIcon icon={faHourglassStart} /> RERA Status <FontAwesomeIcon icon={faCircleInfo} />

                                                        </span>
                                                        <span className="no">
                                                            No Brokerage
                                                        </span>
                                                        <span className="top">
                                                            6 Top Facilities
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <button>View Number</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status">
                                            <div className="box d-flex justify-content-between align-items-end">
                                                <div className="left">
                                                    <div className="sm-heading">
                                                        Construction Status
                                                    </div>
                                                    <div className="heading">
                                                        Ready To Move
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <div className="arrow">
                                                        <FontAwesomeIcon icon={faAngleDown} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="summary-table">
                                            <div className="head">
                                                <div className="img">
                                                    <Image src={price} alt="price" />
                                                </div>
                                                <div className="heading">
                                                    ₹ 36.5 - 90.44 L
                                                </div>
                                                <div className="range">
                                                    PRICE RANGE
                                                </div>
                                                <div className="title">
                                                    2, 3, 4 BHK Independent Floor
                                                </div>
                                            </div>
                                            <div className="cards d-flex flex-wrap gap-2">
                                                <div className="card">
                                                    <div className="head">
                                                        <div className="bhk">2 BHK</div>
                                                        <div className="indep">Independent Floor</div>
                                                    </div>
                                                    <div className="body">
                                                        <div className="area">
                                                            Carpet Area
                                                        </div>
                                                        <div className="sq-ft">
                                                            585 - 675 sq.ft.
                                                            <span>(54.35 - 62.71 sq.m.)</span>

                                                        </div>
                                                        <div className="price">
                                                            ₹ 36.5 - 42.12 L
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="head">
                                                        <div className="bhk">2 BHK</div>
                                                        <div className="indep">Independent Floor</div>
                                                    </div>
                                                    <div className="body">
                                                        <div className="area">
                                                            Carpet Area
                                                        </div>
                                                        <div className="sq-ft">
                                                            585 - 675 sq.ft.
                                                            <span>(54.35 - 62.71 sq.m.)</span>

                                                        </div>
                                                        <div className="price">
                                                            ₹ 36.5 - 42.12 L
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card">
                                                    <div className="head">
                                                        <div className="bhk">2 BHK</div>
                                                        <div className="indep">Independent Floor</div>
                                                    </div>
                                                    <div className="body">
                                                        <div className="area">
                                                            Carpet Area
                                                        </div>
                                                        <div className="sq-ft">
                                                            585 - 675 sq.ft.
                                                            <span>(54.35 - 62.71 sq.m.)</span>

                                                        </div>
                                                        <div className="price">
                                                            ₹ 36.5 - 42.12 L
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pricing">
                                            <div className="head">
                                                <div className="heading">
                                                    Floor Plans & Pricing
                                                </div>
                                                <div className="space16">

                                                </div>
                                                <div className="btns d-flex flex-wrap">
                                                    <button className="active">2 BHK Independent Floor</button>
                                                    <button>3 BHK Inde...</button>
                                                    <button>4 BHK Inde...</button>
                                                </div>
                                                <div className="space12">

                                                </div>
                                                <div className="plan-box">
                                                    <div className="floor-plan">
                                                        2 Floor Plans Available
                                                    </div>
                                                    <div className="boxs d-flex flex-wrap gap-2">
                                                        <div className="box">
                                                            <div className="size d-flex gap-1">
                                                                <div className="sf">
                                                                    585 sq.ft.
                                                                </div>
                                                                <div className="sm">
                                                                    (54.35 sq.m.)
                                                                </div>
                                                            </div>
                                                            <div className="area">
                                                                Carpet Area | 2 BHK
                                                            </div>
                                                            <div className="img">
                                                                <Image src={floormap} alt="floormap" />
                                                            </div>
                                                            <div className="price">
                                                                ₹ 36.5 L
                                                            </div>

                                                            <div className="move">
                                                                Ready to move
                                                            </div>
                                                            <div className="space20">

                                                            </div>
                                                            <div className="call d-flex justify-content-between align-items-center">
                                                                <div className="left">
                                                                    Request callback
                                                                </div>
                                                                <div className="right">
                                                                    <FontAwesomeIcon icon={faPhone} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="box">
                                                            <div className="size d-flex gap-1">
                                                                <div className="sf">
                                                                    585 sq.ft.
                                                                </div>
                                                                <div className="sm">
                                                                    (54.35 sq.m.)
                                                                </div>
                                                            </div>
                                                            <div className="area">
                                                                Carpet Area | 2 BHK
                                                            </div>
                                                            <div className="img">
                                                                <Image src={floormap} alt="floormap" />
                                                            </div>
                                                            <div className="price">
                                                                ₹ 36.5 L
                                                            </div>

                                                            <div className="move">
                                                                Ready to move
                                                            </div>
                                                            <div className="space20">

                                                            </div>
                                                            <div className="call d-flex justify-content-between align-items-center">
                                                                <div className="left">
                                                                    Request callback
                                                                </div>
                                                                <div className="right">
                                                                    <FontAwesomeIcon icon={faPhone} />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="sellers">
                                            <div className="head mb-3 d-flex justify-content-between align-items-center">
                                                <div className="left">Sellers you may contact for more details</div>
                                                <div className="right">
                                                    View All Seller
                                                </div>
                                            </div>
                                            <div className="body">
                                                <Image src={propertyadv} alt="propertyadv" />
                                            </div>
                                        </div>
                                        <div className="faciliti">
                                            <div className="head">
                                                <div className="d-flex flex-wrap justify-content-between align-items-center">
                                                    <div className="left">
                                                        <div className="heading">
                                                            Top Facilities
                                                        </div>
                                                        <div className="space4">

                                                        </div>
                                                        <div className="sm-heading">
                                                            Vaibhav Dwarka Homes Delhi South West presents an exclusive opportunity to own a...
                                                        </div>

                                                    </div>
                                                    <div className="right">
                                                        View All(6)
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="service">
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={kids} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            Children's Play Area
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#fffbf3" }}>

                                                    </div>
                                                </div>
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={parking} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            Car Parking
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#f0f9ff" }}>

                                                    </div>
                                                </div>
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={lift} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            Lifts
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#fffbf3" }}>

                                                    </div>
                                                </div>
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={intercom} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            Intercom
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#f0f9ff" }}>

                                                    </div>
                                                </div>
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={power} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            24/7 Power Backup
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#fffbf3" }}>

                                                    </div>
                                                </div>
                                                <div className="best">
                                                    <div className="imgtext">
                                                        <div className="img">
                                                            <Image src={water} alt="kids" />
                                                        </div>
                                                        <div className="text">
                                                            24/7 Water Supply
                                                        </div>
                                                    </div>
                                                    <div className="forback" style={{ backgroundColor: "#f0f9ff" }}>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="about">
                                            <div className="div1">
                                                <div className="heading">
                                                    More about Vaibhav Dwarka Homes
                                                </div>
                                                <div className="text">
                                                    Vaibhav Dwarka Homes in Sector 15 Dwarka, Delhi is a ready-to-move housing society. It offers independent floors in varied budget range. These units are a perfect combination of comfort and style, specifically designed to suit your requirements and c...<Link href="/" style={{ textDecoration: "none" }}>more</Link>
                                                </div>
                                            </div>
                                            <div className="div2">
                                                <div className="heading">
                                                    Interiors and Other Specifications <span><FontAwesomeIcon icon={faArrowRight} /></span>
                                                </div>
                                                <div className="text">
                                                    RCC framed strategically constructed structure keeping in mind the best of architecture and specifications both from inside as well as outside.
                                                </div>
                                            </div>


                                        </div>
                                        <div className="pwv">
                                            <div className="heading">
                                                People who viewed this also viewed
                                            </div>
                                            <div className="space20"></div>
                                            <div className="row">
                                                <div className="col-12 col-md-4">

                                                    <div className="properti">
                                                        <div className="img">
                                                            <Image src={home4} alt="home1" />
                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                VB Homes
                                                            </span>
                                                        </div>
                                                        <div className="heading">
                                                            Lavish Floors By Surya Homes

                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                2, 3, 4 BHK Independent Floor in Sector 8 Dwarka, Delhi
                                                            </div>
                                                            <div className="down">
                                                                ₹ 58 L - 1.08 Cr
                                                            </div> <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="properti">
                                                        <div className="img">
                                                            <Image src={home5} alt="home1" />
                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                Ready to move
                                                            </span>
                                                        </div>
                                                        <div className="heading">
                                                            Dwarkadhish Suri Luxury Floors


                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                3, 4, 5 BHK Independent Floor in Sector 26 Rohini, Delhi
                                                            </div>
                                                            <div className="down">
                                                                price on request
                                                            </div> <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="properti">

                                                        <div className="img">
                                                            <Image src={home6} alt="home1" />

                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                Ready to move
                                                            </span>
                                                        </div>

                                                        <div className="heading">
                                                            Balaji Homes
                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                2, 3 BHK Independent Floor in Sector 14 Dwarka, Delhi
                                                            </div>
                                                            <div className="down">
                                                                ₹ 75 L - 1.11 Cr
                                                            </div>
                                                            <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pwv">
                                            <div className="heading">
                                                Similar Projects
                                            </div>
                                            <div className="space20"></div>
                                            <div className="row">
                                                <div className="col-12 col-md-4">

                                                    <div className="properti">
                                                        <div className="img">
                                                            <Image src={home6} alt="home1" />
                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                VB Homes
                                                            </span>
                                                        </div>
                                                        <div className="heading">
                                                            Metro View Homes by Saarthi Group

                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                2, 3, 4 BHK Independent Floor in Sector 8 Dwarka, Delhi
                                                            </div>
                                                            <div className="down">
                                                                ₹ 28 - 95 L
                                                            </div> <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="properti">
                                                        <div className="img">
                                                            <Image src={div4img3} alt="home1" />
                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                Ready to move
                                                            </span>
                                                        </div>
                                                        <div className="heading">
                                                            Megha Affordable Homes


                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                3, 4, 5 BHK Independent Floor in Sector 26 Rohini, Delhi
                                                            </div>
                                                            <div className="down">
                                                                ₹ 32 - 68 L
                                                            </div> <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <div className="properti">

                                                        <div className="img">
                                                            <Image src={bilding5} alt="home1" />

                                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                                            <span className="price">
                                                                Ready to move
                                                            </span>
                                                        </div>

                                                        <div className="heading">
                                                            Balaji Dwarka Homes
                                                        </div>
                                                        <div className="sm-heading">
                                                            <div className="up">
                                                                2, 3 BHK Independent Floor in Sector 14 Dwarka, Delhi
                                                            </div>
                                                            <div className="down">
                                                                ₹ 75 L - 1.22 Cr
                                                            </div>
                                                            <Link href="/">View Details</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line6">
                                            <div className="head-sec">
                                                <div className="left">
                                                    <Image src={ticket} alt="ticket" />
                                                </div>
                                                <div className="right">
                                                    <div className="heading">
                                                        Newly Launched Projects
                                                    </div>
                                                    <div className="sm-heading">
                                                        Bigger home in the same budget
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="d-flex gap-2 ticket-row flex-wrap">
                                                <div className="box align-items-stretch">
                                                    <div className="ticket">
                                                        <div className="head-sec">
                                                            <div className="tag">
                                                                <div className="text">NEW ARRIVAL</div><div className="img" ><Image src={tag} alt="tag" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="body-sec">
                                                            <div className="left">
                                                                <Image src={bilding4} alt="home1" />
                                                            </div>
                                                            <div className="right">
                                                                <div className="heading">
                                                                    Lavish Floors By Surya Homes
                                                                </div>
                                                                <div className="sm-heading">
                                                                    Sector 8 Dwarka, Delhi
                                                                </div>
                                                                <div className="price">
                                                                    ₹ 85 L - 3 Cr <span>2, 3, 4 BHK Ind..</span>
                                                                </div>
                                                                <div className="off">
                                                                    7.2% <span> price increase in last 1 year in </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="foot-sec">
                                                            <div className="left">
                                                                <div className="icon"><Image src={offer} alt="offer" /></div>
                                                                <div className="text">Get preferred options @zero brokerage</div>
                                                            </div>
                                                            <div className="right">
                                                                <button>Viwe Number</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="box">
                                                    <div className="ticket">
                                                        <div className="head-sec">
                                                            <div className="tag">
                                                                <div className="text">NEW ARRIVAL</div><div className="img" ><Image src={tag} alt="tag" /></div>
                                                            </div>
                                                        </div>
                                                        <div className="body-sec">
                                                            <div className="left">
                                                                <Image src={bilding5} alt="home1" />
                                                            </div>
                                                            <div className="right">
                                                                <div className="heading">
                                                                    Sky High Luxury Homes
                                                                </div>
                                                                <div className="sm-heading">
                                                                    Sector 8 Dwarka, Delhi
                                                                </div>
                                                                <div className="price">
                                                                    ₹ 85 L - 4 Cr <span>2, 3, 4 BHK Ind..</span>
                                                                </div>
                                                                <div className="off">
                                                                    7.2% <span> price increase in last 1 year in </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="foot-sec">
                                                            <div className="left">
                                                                <div className="icon"><Image src={offer} alt="offer" /></div>
                                                                <div className="text">Get preferred options @zero brokerage</div>
                                                            </div>
                                                            <div className="right">
                                                                <button>Viwe Number</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="warn d-flex align-items-center ">
                                            <FontAwesomeIcon icon={faCircleInfo} style={{ paddingRight: "5px" }} />If the project details provided on 99acres are incorrect,<Link href="/" style={{ textDecoration: "none", paddingLeft: "4px" }}>Report here</Link>
                                        </div>

                                    </div>
                                </div>

                            </div>
                            <div className="col-12 col-md-4">
                                <div className="inner">
                                    <div className="box">
                                        <div className="heading mb-3 d-flex align-items-center">
                                            <div className="img me-2">
                                                <Image src={vdh} alt="vdh" />
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
                                                <div className="space4">

                                                </div>
                                                <div className="heading">
                                                    Vaibhav Associates
                                                </div>
                                            </div>
                                            <div className="img">
                                                <Image src={vaibhava} alt="/" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="second-sec">
                        <div className="society-review">
                            <div className="heading">
                                Society Reviews
                            </div>
                            <div className="sm-heading">
                                Vaibhav Dwarka Homes Ratings and Reviews
                            </div>
                            <div className="box">
                                <div className="img">
                                    <Image src={morereview} alt="morereview" />
                                </div>
                                <div className="heading">
                                    Review this Society
                                </div>
                                <div className="sm-heading">
                                    We don't have sufficient reviews to display. Write a <br /> review & help others to make the right choice
                                </div>
                                <div className="btn"><button>Review this Society</button></div>

                            </div>
                        </div>
                        <div className="space16">

                        </div>
                        <div className="read-review">
                            <div className="img">
                                <Image src={readimg} alt="readimg" />
                            </div>
                            <div className="text">
                                Read reviews by local residents for any locality or society
                            </div>
                            <div className="btn">
                                <button>See Rating & Review<FontAwesomeIcon icon={faArrowRight} /></button>
                            </div>
                        </div>
                        <div className="sector15">
                            <div className="heading-sec mb-1 d-flex align-items-center justify-content-between">
                                <div className="left">
                                    <div className="heading">
                                        Explore Sector 15 Dwarka, Delhi
                                    </div>
                                    <div className="sm-heading">
                                        Delhi South West | Pincode - 110078
                                    </div>
                                </div>
                                <div className="right">
                                    <button>Sector 15 Dwarka, Delhi Overview</button>
                                </div>
                            </div>
                            <div className="btns d-flex gap-2 flex-wrap">
                                <div>#28 in Top 100 in Delhi South West</div>
                                <div>Affordable Locality</div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col-12 col-md-8 p-0">
                                    <div className="box-row d-flex flex-wrap ">
                                        <div className="box" style={{borderRight:"1px solid #ebecf0"}}>
                                            <div className="head d-flex">
                                                <div className="logo">
                                                <FontAwesomeIcon icon={faThumbsUp} style={{color:"#ffbf69"}}/>
                                                </div>
                                                <div className="heading">
                                                What's great here!
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">

                                                </div>
                                                <div className="text">
                                                An affordable locality offering builder floors in the 3 BHK configuration, followed by 2 BHK units
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">

                                                </div>
                                                <div className="text">

                                                </div>
                                            </div>
                                        </div>
                                        <div className="box"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}