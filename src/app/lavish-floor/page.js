"use client"

import "./lavish.css"
import logo from '../../../public/images/99 logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import nearme from "../../../public/images/near me.png";
import mick from "../../../public/images/mick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faBarsStaggered, faBolt, faChartLine, faCircleInfo, faCity, faHeart, faHourglassStart, faInfo, faMagnifyingGlass, faPhone, faPlay, faStar, faThumbsDown, faThumbsUp, faTicket, faTrainSubway, faUser } from "@fortawesome/free-solid-svg-icons";
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
import Environment from "../../../public/images/icon/Environment.png";
import Safety from "../../../public/images/icon/Safety.png";
import Lifestyle from "../../../public/images/icon/Lifestyle.png";
import Connectivity from "../../../public/images/icon/Connectivity.png";
import banks from "../../../public/images/lavishfloor/banks.png";
import lic from "../../../public/images/lavishfloor/lic.png";
import indiabulls from "../../../public/images/lavishfloor/indiabulls.jpg";
import iifl from "../../../public/images/lavishfloor/iifl.jpg";
import div1img1 from "../../../public/images/intrest1.jpg";
import div1img2 from "../../../public/images/intrest2.jpg";
import div1img3 from "../../../public/images/intrest3.jpg";
import div1img4 from "../../../public/images/intrest4.jpg";
import playstore from "../../../public/images/playstore.png";
import appstore from "../../../public/images/appstore.png";
import naukri from "../../../public/images/naukri.png";
import { faSquareFacebook, faSquareTwitter, faSquareYoutube, faXTwitter } from "@fortawesome/free-brands-svg-icons";
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
                            <div className="btns d-flex gap-2 flex-wrap" style={{ margin: "10px 0" }}>
                                <div>#28 in Top 100 in Delhi South West</div>
                                <div>Affordable Locality</div>
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col-12 col-md-8 p-0">
                                    <div className="box-row d-flex flex-wrap ">
                                        <div className="box" style={{ borderRight: "1px solid #ebecf0" }}>
                                            <div className="head d-flex">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{ color: "#ffbf69" }} />
                                                </div>
                                                <div className="heading">
                                                    What's great here!
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faChartLine} />
                                                </div>
                                                <div className="text">
                                                    An affordable locality offering builder floors in the 3 BHK configuration, followed by 2 BHK units
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faTrainSubway} />
                                                </div>
                                                <div className="text">
                                                    Dwarka Mor Metro Station on the Blue Line between Noida Electronic City/Vaishali and Dwarka Sector-21 is a km away
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faTicket} />
                                                </div>
                                                <div className="text">
                                                    Close to prominent universities such as NSIT and GGSIPU within a 4 km distance
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faCity} />
                                                </div>
                                                <div className="text">
                                                    Vegas, City Centre, Soul City, Aggarwal, and Unity One Mall are the famous shopping destinations within a 5 km radius...
                                                </div>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="head d-flex">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faThumbsDown} style={{ color: "#ffbf69" }} />
                                                </div>
                                                <div className="heading">
                                                    What needs attention!
                                                </div>
                                            </div>
                                            <div className="line">
                                                <div className="logo">
                                                    <FontAwesomeIcon icon={faBolt} />
                                                </div>
                                                <div className="text">
                                                    People living in certain parts of Sector-15 Dwarka have complained about power cuts
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="review">
                        <div className="inner">
                            <div className="heading-sec mb-5 d-flex align-items-center justify-content-between">
                                <div className="left">
                                    <div className="heading">
                                        Locality Reviews
                                    </div>
                                    <div className="sm-heading">
                                        for Sector 8 Dwarka, Delhi
                                    </div>
                                </div>
                                <div className="right">
                                    <button>Review Your Society/Locality</button>
                                </div>
                            </div>
                            <div className="review-box">
                                <div className="row m-0">
                                    <div className="col-12 col-md-3 p-0">
                                        <div className="in">
                                            <div className="point d-flex align-items-baseline justify-content-center">
                                                <div className="big">
                                                    4.3
                                                </div>
                                                <div className="small">
                                                    /5
                                                </div>
                                            </div>
                                            <div className="starts mb-2 text-success text-center ">
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                                <FontAwesomeIcon icon={faStar} />
                                            </div>
                                            <div className="total">
                                                Average Rating <br />
                                                <span>(93 Total Reviews)</span>
                                            </div>
                                            <div className="progres opacity-75">
                                                <div className="line d-flex align-items-center gap-2" >
                                                    <div className="progress w-100" style={{ height: "8px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: "45%" }}></div>
                                                    </div>
                                                    <div className="number">
                                                        5
                                                    </div>
                                                    <div className="start align-middle" style={{ fontSize: "14px" }}>
                                                        ★
                                                    </div>
                                                </div>
                                                <div className="line d-flex align-items-center gap-2" >
                                                    <div className="progress w-100" style={{ height: "8px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: "45%" }}></div>
                                                    </div>
                                                    <div className="number">
                                                        4
                                                    </div>
                                                    <div className="start align-middle" style={{ fontSize: "14px" }}>
                                                        ★
                                                    </div>
                                                </div>
                                                <div className="line d-flex align-items-center gap-2" >
                                                    <div className="progress w-100" style={{ height: "8px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: "15%" }}></div>
                                                    </div>
                                                    <div className="number">
                                                        3
                                                    </div>
                                                    <div className="start align-middle" style={{ fontSize: "14px" }}>
                                                        ★
                                                    </div>
                                                </div>
                                                <div className="line d-flex align-items-center gap-2" >
                                                    <div className="progress w-100" style={{ height: "8px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: "10%" }}></div>
                                                    </div>
                                                    <div className="number">
                                                        2
                                                    </div>
                                                    <div className="start align-middle" style={{ fontSize: "14px" }}>
                                                        ★
                                                    </div>
                                                </div>
                                                <div className="line d-flex align-items-center gap-2" >
                                                    <div className="progress w-100" style={{ height: "8px" }} role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar" style={{ width: "0%" }}></div>
                                                    </div>
                                                    <div className="number">
                                                        1
                                                    </div>
                                                    <div className="start align-middle" style={{ fontSize: "14px" }}>
                                                        ★
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="link mt-2">
                                                <Link href="/" className=' text-decoration-none'>See how ratings are calculated</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-9 p-0">
                                        <div className="in">
                                            <div className="heading-sec">
                                                Ratings by Features <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </div>
                                            <div className="img-line d-flex align-items-center flex-wrap">
                                                <div className="ratingby d-flex align-items-center">
                                                    <div className="img">
                                                        <Image src={Environment} alt="ratingby" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="heading">
                                                            Environment
                                                        </div>
                                                        <div className="sm-heading">

                                                            4.2 out of 5
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ratingby d-flex align-items-center">
                                                    <div className="img">
                                                        <Image src={Lifestyle} alt="ratingby" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="heading">
                                                            Lifestyle


                                                        </div>
                                                        <div className="sm-heading">

                                                            4.1 out of 5
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ratingby d-flex align-items-center">
                                                    <div className="img">
                                                        <Image src={Connectivity} alt="ratingby" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="heading">
                                                            Connectivity

                                                        </div>
                                                        <div className="sm-heading">
                                                            4.3 out of 5
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ratingby d-flex align-items-center">
                                                    <div className="img">
                                                        <Image src={Safety} alt="ratingby" />
                                                    </div>
                                                    <div className="text">
                                                        <div className="heading">
                                                            Safety
                                                        </div>
                                                        <div className="sm-heading">
                                                            4.2 out of 5
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space32">

                                            </div>
                                            <div className="list_header">
                                                Popular Mentions
                                            </div>
                                            <div className="space32">

                                            </div>
                                            <div className="ratingleval d-flex align-items-center">
                                                <div className="positiveline w-75 gap-1   d-flex">
                                                    <div className="big">

                                                    </div>
                                                    <div className="small">

                                                    </div>

                                                </div>
                                                <div className="mentions fw-medium" style={{ color: "#2e7b32" }}>
                                                    98% Positive Mentions
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <div className="like d-flex " >
                                                <div className="left d-flex " style={{ fontSize: "20px" }}>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{ marginRight: "8px", paddingTop: "4px" }} /> Likes
                                                </div>
                                                <div className="right d-flex flex-wrap px-4">
                                                    <div className="comment">
                                                        Good Public Transport (63)
                                                    </div>
                                                    <div className="comment">
                                                        Metro Connectivity nearby (55)
                                                    </div>
                                                    <div className="comment">
                                                        Easy Cab/Auto Availability (42)
                                                    </div>
                                                    <div className="comment">
                                                        Good Schools are nearby (32)
                                                    </div>
                                                    <div className="comment">
                                                        Well-maintained Roads (28)
                                                    </div>
                                                    <div className="comment">
                                                        Markets at a walkable distance (26)
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="space20"></div>
                                            <div className="like d-flex " >
                                                <div className="left d-flex " style={{ fontSize: "20px" }}>
                                                    <FontAwesomeIcon icon={faThumbsDown} style={{ marginRight: "8px", paddingTop: "7px" }} /> Dislikes
                                                </div>
                                                <div className="right d-flex flex-wrap px-4">
                                                    <div className="comment">
                                                        Frequent Traffic Jams (24)
                                                    </div>
                                                    <div className="comment">
                                                        Frequent Parking Issues (18)
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rbr  d-flex align-items-center justify-content-between" style={{ padding: "16px 0" }}>
                                <div className="left">
                                    Locality Reviews
                                </div>
                                <div className="right">
                                    <button>View all</button>
                                </div>
                            </div>
                            <div className="filter d-flex flex-wrap">
                                <div className="btn p-0">
                                    <button>Recommended</button>
                                </div>
                                <div className="btn p-0">
                                    <button>Negative First</button>
                                </div>
                                <div className="btn p-0">
                                    <button>Recent First</button>
                                </div>
                            </div>
                            <div className="review-comment">
                                <div className="cards">
                                    <div className="row m-0 p-0  align-items-stretch">
                                        <div className="col-12 col-md-4 ">
                                            <div className="inner m-0">
                                                <div className="rating-point">
                                                    5.0★
                                                </div>
                                                <div className="location">
                                                    D Block Sector-8 Dwarka
                                                </div>
                                                <div className="type">
                                                    Positives
                                                </div>
                                                <div className="comment">
                                                    D Block, Sector 8 Dwarka, New Delhi, is recognized for its residential appeal, blending urban convenience with a community-centric environment. Residents apprec...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="type">
                                                    Negatives
                                                </div>
                                                <div className="comment">
                                                    D Block, Sector 8 Dwarka faces several challenges, including irregular electricity and water supply, poor street lighting, and safety concerns due to limited po...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="user mt-4 d-flex">
                                                    <div className="logo">
                                                        p
                                                    </div>
                                                    <div className="details">
                                                        <div className="name">
                                                            Priyaranjan

                                                        </div>
                                                        <div className="time">
                                                            Owner (living since 3y) | Posted 1m ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                            <div className="inner m-0">
                                                <div className="rating-point">
                                                    5.0★
                                                </div>
                                                <div className="location">
                                                    A Block Sector-8 Dwarka
                                                </div>
                                                <div className="type">
                                                    Positives
                                                </div>
                                                <div className="comment">
                                                    It offers a perfect blend of serenity and convenience. The A Block area stands out with its clean surroundings, well-maintained parks, and peaceful ambiance. Re...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="type">
                                                    Negatives
                                                </div>
                                                <div className="comment">
                                                    The area can sometimes feel overcrowded, with traffic congestion being a common problem. Some streets are not as clean as they should be, and there is occasiona...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="user mt-4 d-flex">
                                                    <div className="logo">
                                                        AS
                                                    </div>
                                                    <div className="details">
                                                        <div className="name">
                                                            Amit Baran Saha

                                                        </div>
                                                        <div className="time">

                                                            Tenant (living since 3+y) | Posted 1m ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-4 ">
                                            <div className="inner m-0">
                                                <div className="rating-point">
                                                    5.0★
                                                </div>
                                                <div className="location">
                                                    B Block Sector-8 Dwarka
                                                </div>
                                                <div className="type">
                                                    Positives
                                                </div>
                                                <div className="comment">
                                                    C Block, Sector 8, Dwarka, in southwest Delhi, is a well-connected and convenient residential area. It offers easy access to public transport, including the Dwa...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="type">
                                                    Negatives
                                                </div>
                                                <div className="comment">
                                                    C Block, Sector 8, Dwarka faces several challenges, including poor sanitation and waste management, safety concerns due to inadequate street lighting and police...<Link href="/">Show More</Link>
                                                </div>
                                                <div className="user mt-4 d-flex">
                                                    <div className="logo">
                                                        KK
                                                    </div>
                                                    <div className="details">
                                                        <div className="name">
                                                            Khushboo kumari

                                                        </div>
                                                        <div className="time">


                                                            Former Resident (lived for 2y) | Posted 1m ago
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback mt-4 mb-5">
                                    <div className="row">
                                        <div className="col-12 col-md-8">
                                            <div className="row">

                                                <div className="col-4 text-start">
                                                    Is this helpful?Yes<FontAwesomeIcon icon={faThumbsUp} className='mx-2' />No<FontAwesomeIcon icon={faThumbsDown} className='mx-2' />
                                                </div>
                                                <div className="col-8 text-end">
                                                    <button>Review Your Society/Locality</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="banks">
                        <div className="box">
                            <div className="modifaid">
                                Last Modified on 18 Oct, 2022
                            </div>
                            <div className="bank-line d-flex pb-3">
                                <div className="info" style={{ paddingLeft: "20px" }}>
                                    <div className="img">
                                        <Image src={banks} alt="banks" />
                                    </div>
                                    <div className="head">
                                        Banks <span><FontAwesomeIcon icon={faInfo} /></span>
                                    </div>
                                    <div className="sm">
                                        to help you with home loan
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="img text-center">
                                        <Image src={lic} alt="lic" />
                                    </div>
                                    <div className="sm-heading">
                                        LIC Housing Finance Ltd
                                    </div>
                                    <div className="heading">
                                        6.9% Interest
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="img text-center">
                                        <Image src={indiabulls} alt="lic" />
                                    </div>
                                    <div className="sm-heading">
                                        8.65% Interest
                                    </div>
                                    <div className="heading">
                                        indiabulls
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="img text-center">
                                        <Image src={iifl} alt="lic" />
                                    </div>
                                    <div className="sm-heading">
                                        8.20% Interest
                                    </div>
                                    <div className="heading">
                                        IIFL Home Loan
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="click">
                            Looking for home loan? Click here <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </div>
                    <div className="about-v pb-5">
                        <div className="heading">
                            About Vaibhav Associates
                        </div>
                        <div className="space20">

                        </div>
                        <div className="img-line d-flex gap-2">
                            <div className="img">
                                <Image src={vaibhava} alt="vaibhava" />
                            </div>
                            <div className="text">
                                Vaibhav Associates
                            </div>
                        </div>
                    </div>
                    <div className="cards row">
                        <div className="col-12 col-md-3">
                            <div className="inner">
                                <div className="img">
                                    <Image src={div1img1} alt="div1img1" />
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        Delhi govt mandates anti-smog guns
                                    </div>
                                    <div className="sm-heading">
                                        Mar 03, 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="inner">
                                <div className="img">
                                    <Image src={div1img2} alt="div1img1" />
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        All about Delhi RERA new guidelines
                                    </div>
                                    <div className="sm-heading">
                                        Jan 17, 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="inner">
                                <div className="img">
                                    <Image src={div1img3} alt="div1img1" />
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        Delhi metro phase- 4 inaugurated
                                    </div>
                                    <div className="sm-heading">
                                        Jan 06, 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">
                            <div className="inner">
                                <div className="img">
                                    <Image src={div1img4} alt="div1img1" />
                                </div>
                                <div className="text">
                                    <div className="heading">
                                        Ropeways over Yamuna in Delhi soon
                                    </div>
                                    <div className="sm-heading">
                                        Jan 03, 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="related-search">
                                        <div className="inner">
                                          <div className="heading">
                                          Related to your search
                                          </div>
                                          <div className="searches d-flex flex-wrap ">
                                              <div className="div">
                                                <ul className='p-0 m-0'>
                                                    <li className='head'>
                                                        <Link href="/">Recently Launched Projects in Delhi</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Lavish Floors By Surya Homes in Sector 8 Dwarka</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Sky High Luxury Homes in Sector 8 Dwarka</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Chandok Apartments and Floors in Janakpuri</Link>
                                                    </li>
                                                    <li className='boot'>
                                                        <Link href="/">View 14 More</Link>
                                                    </li>
                                                </ul>
                                              </div>
                                              <div className="div">
                                                <ul className='p-0 m-0'>
                                                    <li className='head'>
                                                        <Link href="/">About Sector 8 Dwarka</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Sector 8 Dwarka Delhi</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Property Rates in Sector 8 Dwarka Delhi</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Reviews of Sector 8 Dwarka Delhi</Link>
                                                    </li>
                                                   
                                                </ul>
                                              </div>
                                              <div className="div">
                                                <ul className='p-0 m-0'>
                                                    <li className='head'>
                                                        <Link href="/">Sector 8 Dwarka & nearby listings</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Buy 3 BHK Builder Floor in Sector 8 Dwarka</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">Buy 3 BHK Builder Floor in Sector 8 Dwarka</Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/">3 BHK Semi furnished Builder Floor in A Block Sector 8 Dwarka </Link>
                                                    </li>
                                                    <li className='boot'>
                                                        <Link href="/">View 14 More</Link>
                                                    </li>
                                                </ul>
                                              </div>
                                          </div>
                                        
                                        </div>
                    </div>
                    <div className="last-text">
                        <span>
                        The material and information contained herein is for general informational purposes only, and does not constitute an endorsement/warranty/representati
                        </span><br />
                        <span>
                        A naukri.com group website
                        </span><br />
                        <span>
                        Copyright © 2025 Infoedge India Ltd. All rights reserved
                        </span>
                    </div>

                </div>
 <div className="footer-sec">
                          <div className="content ">
                            <div className="row">
                              <div className="col-12 col-md-7 left">
                                <div className="row">
                                  <div className="div col-4 col-md-4">
                                    <p>Links</p>
                                    <ul>
                                      <li>
                                        <Link href="/Mobileapps">Mobile Apps</Link>
                                      </li>
                                      <li>
                                        <Link href="/Ourservices">Our Services</Link>
                                      </li>
                                      <li>
                                        <Link href="/Pricetrends">Price Trends</Link>
                                      </li>
                                      <li>
                                        <Link href="/Postyourproperty">Post your Property</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Real Estate Investments </Link>
                                      </li>
                                      <li>
                                        <Link href="/">Builders in India</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Area Converter</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Articles</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Rent Receipt</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Customer Service</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Sitemap</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="div col-4 col-md-4 ">
                                    <p>Company</p>
                                    <ul>
                                      <li>
                                        <Link href="/">About us</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Contact us</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Careers with us</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Terms & Conditions</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Request Info</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Feedback</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Report a problem</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Testimonials</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Privacy Policy</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Summons/Notices</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Grievances</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Safety Guide</Link>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="div col-4 col-md-4">
                                    <p>Our Partners</p>
                                    <ul>
                                      <li>
                                        <Link href="/">Naukri.com - Jobs in India</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Naukrigulf.com - Jobs in middle east</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Jeevansathi.com - Matrimonials</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Brijj.com - Professional Networking</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Shiksha.com - Education Career Info </Link>
                                      </li>
                                      <li>
                                        <Link href="/">Policybazaar.com - Insurance India</Link>
                                      </li>
                                      <li>
                                        <Link href="/">PaisaBazaar.com</Link>
                                      </li>
                                      <li>
                                        <Link href="/">AmbitionBox.com</Link>
                                      </li>
                                      <li>
                                        <Link href="/">FirstNaukri.com - A jobsite for campus hiring</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Jobhai.com – Find Jobs Near You</Link>
                                      </li>
                                      <li>
                                        <Link href="/">Techminis.com - Tech news on the go</Link>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                
                
                              </div>
                              <div className="col-12 col-md-5 right">
                                <div className="top">
                                  Contact Us
                                </div>
                                <div className="number">
                                  Toll Free - <Link href="/" style={{textDecoration:"none"}}>1800 41 99099 </Link>
                                </div>
                                <div className="time">
                                Monday - Saturday (9:00AM to 11:00PM IST)
                                </div>
                                <div className="email">
                                  Email -<Link href="/" style={{textDecoration:"none"}}> feedback@99acres.com </Link>
                                </div>
                                <div className="connect">
                                  Connect with us
                                </div>
                                <div className="icon">
                               <span> <FontAwesomeIcon style={{color:"blue"}} icon={faSquareFacebook} /></span>
                               <span><FontAwesomeIcon style={{color:"#ff0000"}} icon={faSquareYoutube} /></span> 
                               <span> <FontAwesomeIcon style={{color:"#589bff"}} icon={faSquareTwitter} /></span>
                                </div>
                                <div className="like d-flex">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faThumbsUp} /> Like
                                    </div>
                                    <div className="text">
                                    You and 604 others like this. <Link href="/" style={{textDecoration:"none"}}> Sign up </Link> to see what your friends like.
                                    </div>
                                </div>
                                <div className="tweet-x d-flex align-items-center">
                                <FontAwesomeIcon icon={faXTwitter} /> Follow @99AcresIndia
                                </div>
                                <div className="india">
                                * India's leading Property Portal. Source: Alexa.com<br/>
                                # Free Listings are available only for Owners
                                </div>
                                <div className="download">
                                  Mobile App
                                </div>
                                <div className="img">
                                  <span><Image src={playstore} alt="playstore" /></span>
                                  <span><Image src={appstore} alt="appstore" /></span>
                                </div>
                              
                              </div>
                            </div>
                            <div className="usage">
                            Usage of 99acres.com to upload content which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at <Link href="/" style={{textDecoration:"none"}}>Report Abuse</Link>
                            </div>
                          </div>
               </div>
            </div>
            
        </div >
    )
}