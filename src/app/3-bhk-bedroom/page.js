"use client"
import Image from 'next/image';
import "./bhk.css"
import logo from '../../../public/images/99 logo.png';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faArrowRight, faArrowUpRightFromSquare, faBarsStaggered, faCheck, faCircleInfo, faFilePdf, faHeart, faLocationDot, faMagnifyingGlass, faPlay, faStar, faThumbsDown, faThumbsUp, faTrain, faUser, faVideo } from '@fortawesome/free-solid-svg-icons';
import nearme from "../../../public/images/near me.png";
import mick from "../../../public/images/mick.png";
import rode4 from "../../../public/images/rode4.png";
import Configuration from "../../../public/images/Configuration.png";
import Price from "../../../public/images/Price.png";
import Address from "../../../public/images/Address.png";
import Floor from "../../../public/images/Floor.png";
import Facing from "../../../public/images/Facing.png";
import Property from "../../../public/images/Property.png";
import Overlooking from "../../../public/images/Overlooking.png";
import univercel from "../../../public/images/univercel.png";
import Highlights from "../../../public/images/Highlights.png";
import Wardrobe from "../../../public/images/icon/Wardrobe.png";
import Water from "../../../public/images/icon/Water.png";
import Fan from "../../../public/images/icon/Fan.png";
import Exhaust from "../../../public/images/icon/Exhaust.png";
import Geyser from "../../../public/images/icon/Geyser.png";
import Stove from "../../../public/images/icon/Stove.png";
import Light from "../../../public/images/icon/Light.png";
import Modular from "../../../public/images/icon/Modular.png";
import Chimney from "../../../public/images/icon/Chimney.png";
import AC from "../../../public/images/icon/nAC.png";
import Bed from "../../../public/images/icon/nBed.png";
import Curtains from "../../../public/images/icon/nCurtains.png";
import nDining from "../../../public/images/icon/nDining.png";
import nMicrowave from "../../../public/images/icon/nMicrowave.png";
import nFridge from "../../../public/images/icon/nFridge.png";
import nSofa from "../../../public/images/icon/nSofa.png";
import nTV from "../../../public/images/icon/nTV.png";
import nWashing from "../../../public/images/icon/nWashing.png";
import suryaroom from "../../../public/images/suryaroom.jpg";
import suryakumar from "../../../public/images/suryakumar.jpeg";
import trendprice from "../../../public/images/trend-price.png";
import Environment from "../../../public/images/icon/Environment.png";
import Safety from "../../../public/images/icon/Safety.png";
import Lifestyle from "../../../public/images/icon/Lifestyle.png";
import Connectivity from "../../../public/images/icon/Connectivity.png";
import smprop from "../../../public/images/sm-prop.jpg";
import div3img2 from "../../../public/images/div3img2.webp";
import homedummy from "../../../public/images/homedommy.jpg";
import bilding4 from "../../../public/images/bilding4.jpg";
import bilding5 from "../../../public/images/bilding5.jpg";
import ticket from "../../../public/images/ticket.png";
import tag from "../../../public/images/LeftTagEnd.png";
import offer from "../../../public/images/NL_Tag.png";
import div1img1 from "../../../public/images/intrest1.jpg";
import div1img2 from "../../../public/images/intrest2.jpg";
import div1img3 from "../../../public/images/intrest3.jpg";
import div1img4 from "../../../public/images/intrest4.jpg";
import playstore from "../../../public/images/playstore.png";
import appstore from "../../../public/images/appstore.png";
import naukri from "../../../public/images/naukri.png";
import Link from 'next/link';
import { faSquareFacebook, faSquareTwitter, faSquareYoutube, faXTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Bhk() {
    useEffect(() => {
        import('../../../node_modules/bootstrap/dist/js/bootstrap.js')
    }, [])
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
                                <div className="profile d-flex justify-content-center">
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
                            <div className="col-1 d-flex justify-content-center">
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
                <div className="top-sec">
                    <div className="inner ">
                        <div className="links">
                            Home›Property in Delhi / NCR›Property in Delhi›Builder Floor in Delhi›Builder Floor in Dwarka›Builder Floor in Sector 8 Dwarka›3 BHK Builder Floor in Sector 8 Dwarka
                        </div>
                        <div className="verifiy  ">
                            <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                            <span style={{ marginRight: "5px" }}>Verified</span>
                            <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                        </div>
                        <div className="row d-flex align-items-center">
                            <div className="col-12 col-md-9">
                                <div className="inner d-flex">
                                    <div className="left mb-3">
                                        <div className="heading d-flex align-items-baseline  flex-wrap">
                                            <div className='rupe'>
                                                ₹
                                            </div>
                                            <div className="price">
                                                2.7 Cr
                                            </div>
                                            <div className='sq' >@ 14,210 per sq.ft.</div>
                                        </div>
                                        <div className="sm-heading">
                                            Estimated EMI ₹2,15,650
                                        </div>
                                    </div>
                                    <div className="right mb-3">
                                        <div className="heading">
                                            3BHK 3Baths
                                        </div>
                                        <div className="sm-heading">
                                            Independent/Builder Floor for Sale
                                        </div>
                                        <div className="small">
                                            in Surya Homes, Sector 8 Dwarka, Delhi
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="inner text-center">
                                    <button type="button" className="btn btn-primary mb-2 contect">Contect Dealer <sup>free</sup></button>
                                    <button type="button" className="btn btn-outline-primary shortlist"><FontAwesomeIcon icon={faHeart} />Shortlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="status d-flex">
                            <span className="left d-flex">
                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                <span>status</span>
                            </span>
                            <span className="right">
                                NOT-AVAILABLE
                            </span>
                        </div>
                        <div className="list mt-3">
                            <ul className='d-flex flex-wrap m-0'>
                                <li><Link href="/" style={{ borderBottom: "3px solid blue", opacity: "1" }}>Overview</Link></li>
                                <li><Link href="/">Society</Link></li>
                                <li><Link href="/">Dealer Details</Link></li>
                                <li><Link href="/">Price Trends</Link></li>
                                <li><Link href="/">Locality Reviews</Link></li>
                                <li><Link href="/">Recommendations</Link></li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="video-sec">
                    <div className="inner">
                        <div className="row mt-3">
                            <div className="col-12 col-md-6 video-side">
                                <div className="inner">
                                    <div className="video align-middle">
                                        <iframe style={{ width: "100%", height: "400px" }} src="https://www.youtube.com/embed/lcdy7weAsIM?si=DrAnrp64amHgtAKL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-side">
                                <div className="inner">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={rode4} alt="rode4" /></span>
                                                        <span className="text">Area</span>
                                                    </div>
                                                    <div className="div">
                                                        Super Built up area 1900 <span><Link href="/" style={{ textDecoration: "none" }}>sq.ft<FontAwesomeIcon icon={faAngleDown} /></Link>
                                                            <span className="sm">(176.52 sq.m.)</span>
                                                        </span>
                                                    </div>
                                                    <div className="div">
                                                        Built Up area: 1800 sq.ft. <span className="sm"> (167.23 sq.m.)</span>

                                                    </div>
                                                    <div className="div">
                                                        Carpet area: 1700 sq.ft. <span className="sm">(157.94 sq.m.) </span>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Configuration} alt="rode4" /></span>
                                                        <span className="text">Configuration</span>
                                                    </div>

                                                    <div className="div">
                                                        3 Bedrooms , 3 Bathrooms, 1 Balcony with Store Room

                                                    </div>


                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Price} alt="rode4" /></span>
                                                        <span className="text">Price</span>
                                                    </div>
                                                    <div className="div">
                                                        ₹ 2.7 Crore+ Govt Charges & Tax


                                                    </div>
                                                    <div className="div">
                                                        @ 14,210 per sq.ft. (All inclusive, Negotiable)

                                                    </div>
                                                    <div className="div">
                                                        <span ><Link href="/"></Link>View Price Details </span>
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Address} alt="rode4" /></span>
                                                        <span className="text">Facing</span>
                                                    </div>

                                                    <div className="div">
                                                        Surya Homes
                                                    </div>
                                                    <div className="div">
                                                        Sector 8 Dwarka, Delhi
                                                    </div>


                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Floor} alt="rode4" /></span>
                                                        <span className="text">Floor </span>
                                                    </div>
                                                    <div className="div">
                                                        4th   of 4 Floors
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Facing} alt="rode4" /></span>
                                                        <span className="text">Facing</span>
                                                    </div>

                                                    <div className="div">
                                                        North

                                                    </div>


                                                </td>

                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Overlooking} alt="rode4" /></span>
                                                        <span className="text">Overlooking </span>
                                                    </div>
                                                    <div className="div">
                                                        4th   of 4 Floors
                                                    </div>

                                                </td>
                                                <td>
                                                    <div className="img-div">
                                                        <span className='img'><Image src={Property} alt="rode4" /></span>
                                                        <span className="text">Property </span>
                                                    </div>

                                                    <div className="div">
                                                        North

                                                    </div>


                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="nearby">
                            <div className="inner">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="left d-flex">
                                            <div className="img me-2">
                                                <Image src={univercel} alt="univercel" />
                                            </div>
                                            <div className="text">
                                                <div className="heading">
                                                    Places nearby
                                                </div>
                                                <div className="sm-heading">
                                                    D-00, Sector 8 Dwarka, Delhi
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="right text-end ">
                                            <Link href="/">View All (50)</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="locations mt-3 d-flex flex-wrap justify-content-between">
                                    <div className="location">
                                        <FontAwesomeIcon icon={faTrain} />Dwarka sector 9 metro station
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faTrain} />Dwarka sector 8 metro station
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faTrain} />Dwarka sector 10 metro station
                                    </div>
                                    <div className="location">
                                        <FontAwesomeIcon icon={faLocationDot} />Hanuman Temple
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlights">
                    <div className="inner">
                        <div className="heading">
                            Why you should consider this property?
                        </div>
                        <div className="box">
                            <div className="inner d-flex">
                                <div className="left">
                                    <div className="img">
                                        <Image src={Highlights} alt="Highlights" width={30} />
                                    </div>
                                    <div className="heading">
                                        Key Highlights
                                    </div>
                                    <div className="sm-heading">
                                        of the property
                                    </div>
                                </div>
                                <div className="right">
                                    <ul className='d-flex m-0 p-0'>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} className='yes' />North Facing
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} className='yes' />Top Floor
                                        </li>
                                    </ul>
                                    <ul className='d-flex m-0 p-0'>  <li>
                                        <FontAwesomeIcon icon={faCheck} className='yes' />Private Garden
                                    </li>
                                        <li>
                                            <FontAwesomeIcon icon={faCheck} className='yes' />Dwarka Sector 8 & 9 Nearby
                                        </li>
                                    </ul>
                                    <div className="more">
                                        <Link href="/" className='text-decoration-none'>Viwe 10 More</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="icon-sec">
                    <div className="inner">
                        <div className="div1">
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <div className="line">
                                        Property Ownership: <span> Freehold</span>
                                    </div>
                                    <div className="line">
                                        Gated Community:  <span>Yes </span>
                                    </div>
                                    <div className="line">
                                        Water Source:<span>Borewell/Tank,Munic</span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="line">

                                        Flooring:<span>Marble  </span>
                                    </div>
                                    <div className="line">
                                        Parking: <span>2 Covered, 1 Open</span>
                                    </div>
                                    <div className="line">
                                        Power Backup:  <span>Full</span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="line">
                                        Furnishing:  <span>Semifurnished</span>
                                    </div>
                                    <div className="line">
                                        WheelChair Friendly: <span>Yes</span>
                                    </div>
                                    <div className="line">
                                        Property Code:    <span>B81271197</span>
                                    </div>
                                </div>
                                <div className="col-6 col-md-3">
                                    <div className="line">
                                        Width of facing road:  <span>30.0 Feet</span>
                                    </div>
                                    <div className="line">
                                        Pet Friendly:  <span>Yes</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="div2">
                            <div className="heading mb-2">
                                About Property
                            </div>
                            <div className="line mb-1">
                                <span style={{ color: "#333" }}>Address</span> : D-00, Sector 8 Dwarka, Delhi
                            </div>
                            <div className="line mb-2">
                                Independent/builder floor available on sale in dwarka sector-8 d-Block.
                            </div>
                            <div className="line">
                                North facing with roof 3 bhk dda approved builder floor available for sale in d block the property have 3 bedroom, 3 washroom, with modular kitchen, drawing & dinning room and front side one spacious balcony size 31"x5" with su...

                                More
                            </div>
                        </div>
                        <div className="div3">
                            <div className="heading mb-2">
                                Semifurnished
                            </div>
                            <div className="line mb-3">Furnishing Details</div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Wardrobe} alt="Wardrobe" />4 Wardrobe</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Water} alt="Water" />1 Water Purifier </div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Fan} alt="Fan" />5 Fan</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Exhaust} alt="Exhaust" />1 Exhaust Fan</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Geyser} alt="Geyser" />3 Geyser</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Stove} alt="Stove" />1 Stove</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Light} alt="Wardrobe" />30 Light</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Modular} alt="Water" />1 Modular Kitchen </div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Chimney} alt="Chimney" />1 Chimney</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={AC} alt="AC" />No AC</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Bed} alt="Bed" />No Bed</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={Curtains} alt="Curtains" />No Curtains</div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nDining} alt="Dining" />No Dining Table</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nMicrowave} alt="Microwave" />No Microwave</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nFridge} alt="Fridge" />No Fridge</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nSofa} alt="Sofa" />No Sofa</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nTV} alt="TV" />No TV</div>
                                    <div className="col-6 col-md-4 col-lg-2"><Image src={nWashing} alt="Washing" />No Washing Machine</div>
                                </div>
                            </div>
                        </div>
                        <div className="div3">
                            <div className="heading mb-2">
                                Features
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={Wardrobe} alt="Wardrobe" /></div>
                                        <div className="text"> Water purifier</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Water} alt="Water" /></div>
                                        <div className="text"> Security / Fire Alarm</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Fan} alt="Fan" /></div>
                                        <div className="text"> Feng Shui / Vaastu Compliant</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Exhaust} alt="Exhaust" /></div>
                                        <div className="text">Private Garden / Terrace</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Geyser} alt="Geyser" /></div>
                                        <div className="text"></div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={Stove} alt="Stove" /></div>
                                        <div className="text">Lift(s)</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Light} alt="Wardrobe" /></div>
                                        <div className="text">  High Ceiling Height</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={Modular} alt="Water" /> </div>
                                        <div className="text">Maintenance Staff</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Chimney} alt="Chimney" /></div>
                                        <div className="text">False Ceiling Lighting</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={AC} alt="AC" /></div>
                                        <div className="text">Water Storage</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Bed} alt="Bed" /></div>
                                        <div className="text">No open drainage around</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={Curtains} alt="Curtains" /></div>
                                        <div className="text"> Bank Attached Property</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nDining} alt="Dining" /></div>
                                        <div className="text"> Piped-gas</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nMicrowave} alt="Microwave" /></div>
                                        <div className="text">idekcn yeshyt</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nFridge} alt="Fridge" /></div>
                                        <div className="text"> Recently Renovated</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nSofa} alt="Sofa" /></div>
                                        <div className="text">Visitor Parking</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nTV} alt="TV" /> </div>
                                        <div className="text">park</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nWashing} alt="Washing" /></div>
                                        <div className="text">Security Personnel</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={nDining} alt="Dining" /></div>
                                        <div className="text">Natural Light</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={nMicrowave} alt="Microwave" /></div>
                                        <div className="text">Airy Rooms</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={nFridge} alt="Fridge" /></div>
                                        <div className="text">Spacious Interiors</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={nSofa} alt="Sofa" /></div>
                                        <div className="text">Low Density Society</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"> <Image src={nTV} alt="TV" /> </div>
                                        <div className="text">Waste Disposal</div>
                                    </div>
                                    <div className="col-6 col-md-4 col-lg-2">
                                        <div className="img"><Image src={nWashing} alt="Washing" /></div>
                                        <div className="text">Rain Water Harvesting</div>
                                    </div>
                                </div>
                            </div>
                            <div className="line">
                                <div className="row m-0">
                                    <div className="col-6 col-md-4 col-lg-2"><div className="img"><Image src={nDining} alt="Dining" /></div><div className="text">Fitness Centre / GYM</div></div>
                                    <div className="col-6 col-md-4 col-lg-2 "><div className="img"><Image src={nMicrowave} alt="Microwave" /></div> <div className="text"> Club house / Community Center</div></div>

                                </div>
                            </div>
                        </div>
                        <div className="div4">
                            <div className="text">
                                Property sold out? Incorrect data?
                            </div>
                            <div className="btn">
                                <button>Report</button>
                            </div>
                        </div>
                        <div className="div5">
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <div className="inner">
                                        <div className="society">
                                            Society
                                        </div>
                                        <div className="external">
                                            <Link href="/">Surya Homes <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                                        </div>
                                        <div className="details">
                                            <div className="sec">
                                                <div className="img">
                                                    <Image src={rode4} alt="rode4" />
                                                </div>
                                                <div className="text">
                                                    <div className="title">
                                                        Total occupied area
                                                    </div>
                                                    <div className="heading">
                                                        0.04 acres
                                                    </div>
                                                    <div className="sm-heading">
                                                        (161.87 sq.m.)
                                                        10.0% Open area
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sec">
                                                <div className="img">
                                                    <Image src={Curtains} alt="/" />
                                                </div>
                                                <div className="text">
                                                    <div className="title">
                                                        Project Details
                                                    </div>
                                                    <div className="heading">
                                                        1 Towers, 4 Units
                                                    </div>
                                                    <div className="sm-heading">
                                                        5 Floors
                                                    </div>
                                                    <div className="link">
                                                        <Link href="/">View Amenities</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sec">
                                                <div className="img">
                                                    <Image src={Configuration} alt="/" />
                                                </div>
                                                <div className="text">
                                                    <div className="title">
                                                        Configuration
                                                    </div>
                                                    <div className="heading">
                                                        2,3 BHK
                                                    </div>
                                                    <div className="link">
                                                        <Link href="/">View Floor Plans</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sec">
                                                <div className="img">
                                                    <Image src={Modular} alt="/" />
                                                </div>
                                                <div className="text">
                                                    <div className="title">
                                                        Property Types
                                                    </div>
                                                    <div className="heading">
                                                        Apartment
                                                    </div>
                                                    <div className="link">
                                                        <Link href="/">View Specifications</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="down">
                                            <div className="line">
                                                <span>Additional Detail:</span>   Possession in 2015. Developed / built by Surya Homes Dwarka.
                                            </div>
                                            <div className="link">
                                                <Link href="/">Surya Homes Resale: 19 Properties</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4">
                                    <div className="img">
                                        <Image src={suryaroom} alt="suryaroom" />
                                    </div>
                                </div>
                            </div>
                            <div className="button">
                                <button>
                                    <FontAwesomeIcon icon={faFilePdf} /> Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="youtube">
                    <div className="inner">
                        <div className="heading">
                            Sector 8 Dwarka Videos
                        </div>
                        <div className="video">
                            <div className="box">
                                <iframe width="200" height="150" src="https://www.youtube.com/embed/lcdy7weAsIM?si=DrAnrp64amHgtAKL" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form">
                    <div className="inner">
                        <div className="row">
                            <div className="col-12 col-md-5">
                                <div className="inner">
                                    <div className="heading">
                                        Dealer Details
                                    </div>
                                    <div className="photo-div d-flex pb-2">
                                        <div className="img">
                                            <Image src={suryakumar} alt="suryakumar" />
                                        </div>
                                        <div className="text">
                                            <div className="top">
                                                <div className="name">
                                                    Surya Goyal
                                                </div>
                                                <div className="work">
                                                    Surya Homes & Developers
                                                </div>
                                            </div>
                                            <div className="bottom">
                                                <button>
                                                    Viwe Phone Number
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="register-btn">
                                        <span>
                                            REGISTERED
                                        </span>
                                    </div>
                                    <div className="proper d-flex">
                                        <div className="div">Properties Listed:21</div>
                                        <div className="div " style={{ marginLeft: "30px" }}>Verified Properties:15</div>
                                    </div>
                                    <div className="line">
                                        <span>  Localities : Sector 8 Dwarka</span>
                                    </div>
                                    <div className="line">
                                        <span>
                                            About Surya Homes & Developers
                                        </span>
                                    </div>
                                    <div className="line">
                                        Over the course of 17 Years of running a successful real estate dealership & property developer with...More
                                    </div>
                                    <div className="line">
                                        <span>Address :</span>  B-39, Sector-8, Dwarka Sec-19, Dwarka , Delhi South West
                                    </div>
                                    <div className="line">
                                        Website : <Link href="/">https://www.facebook.com/suryahomesdevelopers</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="inner">
                                    <div className="heading">
                                        Send enquiry to Dealer
                                    </div>
                                    <div className="radio d-flex gap-3 opacity-75">
                                        <div className="lable">You are</div>
                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                            <label className="form-check-label" htmlFor="radioDefault1">
                                                Individual
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                            <label className="form-check-label" htmlFor="radioDefault2">
                                                Dealer
                                            </label>
                                        </div>
                                    </div>
                                    <div className="radio d-flex gap-3 opacity-75">
                                        <div className="lable">Your reason to buy is</div>
                                        <div className="form-check ">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                                            <label className="form-check-label" htmlFor="radioDefault1">
                                                Investment
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                                            <label className="form-check-label" htmlFor="radioDefault2">
                                                Self Use
                                            </label>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <div className="left flex-1 pe-3">
                                            <div className="input"> <input type="text" placeholder='Name' /></div>
                                            <div className="input"><input type="email" placeholder='Email' /></div>
                                            <div className="input-group  bg-white">
                                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">India (+91)</button>
                                                <ul className="dropdown-menu">
                                                    <li><Link className="dropdown-item" href="#">Action</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                                    <li><hr className="dropdown-divider" /></li>
                                                    <li><Link className="dropdown-item" href="#">Separated link</Link></li>
                                                </ul>
                                                <input type="text" placeholder="phone numbar" className="form-control" aria-label="Text input with dropdown button" />
                                            </div>
                                        </div>
                                        <div className="right flex-1 pb-1">
                                            <textarea type="text" placeholder='i am intrsted in this property' />
                                        </div>
                                    </div>
                                    <div className="check mt-2">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                            <label className="form-check-label" htmlFor="checkDefault">
                                                I agree to the <Link href="/" className='text-decoration-none'>Terms & Conditions</Link>  and <Link href="/" className='text-decoration-none'> Privacy Policy</Link>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="btn p-0 mt-3">
                                        <button>
                                            Send Email & SMS
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="trend-price">
                    <div className="inner">
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className="in d-flex align-items-center">
                                    <div className="img">
                                        <Image src={trendprice} alt="trendprice" />
                                    </div>
                                    <div className="heading">
                                        Check Property Rates & Trends for any locality or society
                                    </div>
                                    <div className="btn" style={{ width: "47%" }}>
                                        <button>See Price Trend <FontAwesomeIcon icon={faArrowRight} /></button>
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
                                        <div className="inner">
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
                                        <div className="inner">
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
                                        <div className="inner">
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
                <div className="properties">
                    <div className="inner">
                        <div className="similar-p pb-4">
                            <div className="heading">
                                Similar Properties
                            </div>
                            <div className="row m-0 p-0">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                                    <div className="inner ">
                                        <div className="img">
                                            <Image src={smprop} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.7 Cr, 3 BHK
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={div3img2} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.7 Cr, 3 BHK
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={suryaroom} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.75 Cr, 4 BHK
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={smprop} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.7 Cr, 4 BHK
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={div3img2} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.5 Cr, 3 BHK
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={suryaroom} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.9 Cr, 3 BHK
                                            </div>
                                            <div className="location">
                                                Sector 9 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                            </div>
                        </div>
                        <div className="similar-p">
                            <div className="heading">
                            Properties Verified by 99acres 
                            </div>
                            <div className="row m-0 p-0 d-flex align-items-stretch">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2 h-100">
                                    <div className="inner ">
                                        <div className="img">
                                            <Image src={smprop} alt="smprop" />
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.7 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Yash Homes
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={div3img2} alt="smprop" />
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  3.25 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Surya Homes
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={suryaroom} alt="smprop" />
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  3 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                           Dda Aproved Builder Floor
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={smprop} alt="smprop" />
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.4 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Surya Homes
                                        </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={div3img2} alt="smprop" />
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.8 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Dda Aproved Builder Floor
                                        </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2">  <div className="inner ">
                                        <div className="img">
                                            <Image src={suryaroom} alt="smprop" />
                                            <span className="video"><FontAwesomeIcon icon={faVideo} /></span>
                                            <span className="verified">
                                                <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                                                <span style={{ marginRight: "5px" }}>Verified</span>
                                                <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                                            </span>
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  3.3 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Surya Homes
                                        </div>
                                           
                                            <div className="location">
                                                Sector 9 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
                                            </div>
                                    </div></div>
                            </div>
                        </div>
                        <div className="similar-p pb-4">
                            <div className="heading">
                            Properties posted by Owners
                            </div>
                            <div className="row m-0 p-0 d-flex align-items-stretch">
                                <div className="col-12 col-sm-6 col-md-4 col-lg-2 h-100">
                                    <div className="inner ">
                                        <div className="img">
                                            <Image src={homedummy} alt="smprop" />
                                            
                                            
                                            <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                                            <span className="dealer">Skyhighdevelopers (Dealer) 21st M</span>
                                        </div>
                                        <div className="details" style={{padding:"10px"}}>
                                            <div className="price">
                                                ₹  2.7 Cr, 3 BHK
                                            </div>
                                            <div className="company">
                                            Yash Homes
                                            </div>
                                            <div className="location">
                                                Sector 8 Dwarka, Delhi
                                            </div>
                                           
                                        </div>
                                        <div className="btn">
                                                Enquire Now
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
                        
                                          <div className=" tickets d-flex flex-wrap gap-2 ">
                                            <div className="ticket-cover ">
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
                                                       Floors By Surya Homes
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
                                            <div className="ticket-cover">
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
                                                       Floors By Surya Homes
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
                                            <div className="ticket-cover">
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
               <div className="last">
               All right reserved - Info Edge (India) Ltd. A <Image src={naukri}/>  group venture
               </div>
            </div>

        </div>
    )
}