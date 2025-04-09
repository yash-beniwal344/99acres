"use client"
import Image from "next/image";
import './globals.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import logo from '../../public/images/99 logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowUp, faBars, faBarsStaggered, faCheck, faCircleInfo, faClockRotateLeft, faHeadset, faHeart, faLocationCrosshairs, faMagnifyingGlass, faMicrophone, faPhone, faPhoneVolume, faPlay, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import img1 from "../../public/images/d_hp_sideBanner_v2.png"
import home1 from "../../public/images/home1.jpg";
import home2 from "../../public/images/home2.jpg";
import home3 from "../../public/images/home3.jpg";
import home4 from "../../public/images/home4.jpg";
import home5 from "../../public/images/home5.jpg";
import home6 from "../../public/images/home6.jpg";
import listinimg from "../../public/images/listinimg.png";
import check from "../../public/images/check.png";
import nearme from "../../public/images/near me.png";
import mick from "../../public/images/mick.png";
import postpro from "../../public/images/postpro.png";
import bilding1 from "../../public/images/bilding1.webp";
import bilding2 from "../../public/images/bilding2.webp";
import bilding3 from "../../public/images/bildin3.webp";
import bilding4 from "../../public/images/bilding4.jpg";
import bilding5 from "../../public/images/bilding5.jpg";
import mapcard from "../../public/images/map-card.jpg";
import locationicon1 from "../../public/images/location1.webp";
import locationicon2 from "../../public/images/location2.jpg";
import locationicon3 from "../../public/images/location3.jpg";
import sky from "../../public/images/sky.jpg";
import surya from "../../public/images/surya.jpg";
import ticket from "../../public/images/ticket.png";
import tag from "../../public/images/LeftTagEnd.png";
import offer from "../../public/images/NL_Tag.png";
import bs1 from "../../public/images/bs-1.jpg";
import bs2 from "../../public/images/bs-2.jpg";
import bs3 from "../../public/images/bs-3.jpg";
import line9img1 from "../../public/images/LocalityInsights2.png"
import line9img2 from "../../public/images/PriceTrend2.png"
import line9img3 from "../../public/images/review.png"
import og from "../../public/images/og.png"
import nitin from "../../public/images/nitin.jpg"
import sahil from "../../public/images/sahil.jpeg"
import inderjit from "../../public/images/inderjit.webp"
import user from "../../public/images/user.png"
import { useEffect, useState } from "react";



export default function Home() {
  const [active, setactive] = useState("");


  const items = ["Buy", "Rent", "New Launch", "PG/Co-Living", "Commercial", "Plots/Land", "Projects"];
  const list = ["Buy", "Rent/Lease", "Plots/Land", "PG/Co-Living"]
  useEffect(() => {
    import('../../node_modules/bootstrap/dist/js/bootstrap.js')
  }, [])
  return (
    <div className="home">
      <div className="header">
        <div className="navbar">
          <div className="back">

          </div>
          <div className="content">
            <div className="left">
              <div className="logo">
                <Image src={logo} alt="99acres logo" width={50} />
              </div>
              <div className="search"  >
                Buy in Delhi South West <span><FontAwesomeIcon className="arrow" icon={faAngleDown} style={{ width: "15px" }} /></span>
                <div className="search-in-box">
                  <div className="inner">
                    <div className="heading">
                      Explore real estate in...
                    </div>
                    <ul className="ull">
                      {list.map((item, i) => (
                        <li className={active === i ? "active" : "item"} key={i}
                          onClick={() => setactive(i)

                          }

                        >{item}</li>
                      ))}
                    </ul>
                    <div className="search-div  ">
                      <div className="b1">Residential<span><FontAwesomeIcon icon={faAngleDown} style={{ width: "15px" }} /></span></div>
                      <div className=" b2"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "15px", marginLeft: "3px" }} className="me-1" /><input type="search" /></div>
                      <div className="b3"><button type="button" className="btn btn-primary">Explore</button></div>
                    </div>
                    <div style={{ color: "#42526e", marginBottom: "20px" }}>
                      Continue browsing where you left off..
                    </div>
                    <div className="delhi-btn">
                      <button type="button" className="btn">Buy in Delhi South West</button>
                    </div>
                  </div>
                  <div className="footer">
                    <div className="right">
                      <ul>
                        <li>All India</li>
                        <li>Dubai</li>
                        <li>For NRI</li>
                        <li >International <br /> <span>Powered By listgloabaly.com</span></li>
                      </ul>
                    </div>
                    <div className="left">
                      viwe top cities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <div className="center">

                <ul>
                  <li><Link href='/'>For Buyers</Link>
                    <div className="buyers">
                      <div className="row">
                        <div className="col-3 col1">
                          <div className="ul">
                            <ul>
                              <li>BUY A HOME</li>
                              <li>Land/Plot</li>
                              <li>COMMERCIAL</li>
                              <li>POPULAR AREAS</li>
                              <li>INSITES <span className="new">new</span></li>
                              <li>ARTIESLES AND NEWS</li>
                            </ul>
                          </div>
                          <div className="fot">
                            <div className="up">
                              contact us toll free on
                            </div>

                            <div className="down">
                              1800 41 99099   <span>(9AM-11PM IST)</span> </div>

                          </div>
                        </div>
                        <div className="col-3 col2">
                          <div className="head">
                            PROPERTIES IN DELHI SOUTH WEST
                          </div>
                          <ul>
                            <li>Flats</li>
                            <li>Builder Floors</li>
                            <li>Independent House</li>
                            <li>Plots in Delhi South West</li>
                            <li>Studio Apartments/1 RK Flats</li>
                            <li>Farm Houses</li>
                          </ul>
                        </div>
                        <div className="col-3 col3">
                          <div className="head">
                            POPULAR SEARCHES
                          </div>
                          <ul>
                            <li>Property in Delhi South West</li>
                            <li>Verified Property in Delhi South West</li>
                            <li>New Projects in Delhi South West</li>

                          </ul>
                        </div>
                        <div className="col-3 col4">
                          <div className="intro-card">
                            <div className="top">
                              <div className="img">
                                <Image src={listinimg} alt="listimg" />
                              </div>
                              <div className="text">
                                <div className="sm">
                                  INTRODUCING

                                </div>
                                <div className="big">
                                  Insights
                                </div>
                              </div>
                              <div className="arrow">
                                <FontAwesomeIcon icon={faArrowUp} />
                              </div>
                            </div>
                            <div className="list">
                              <ul>
                                <li><span><Image src={check} alt="check" /></span> Understand localities</li>
                                <li><span><Image src={check} alt="check" /></span>Read Resident Reviews</li>
                                <li><span><Image src={check} alt="check" /></span>Check Price Trends</li>
                                <li><span><Image src={check} alt="check" /></span>Tools, Utilities & more</li>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><Link href='/'>For Tenants</Link>
                    <div className="Tenants" >
                      <div className="row">
                        <div className="col-3 col1">
                          <div className="ul">
                            <ul>
                              <li>RENT A HOME</li>
                              <li>PG/CO-LIVING</li>
                              <li>COMMERCIAL</li>
                              <li>POPULAR AREAS</li>
                              <li>INSITES <span className="new">new</span></li>
                              <li>ARTIESLES AND NEWS</li>
                            </ul>
                          </div>
                          <div className="fot">
                            <div className="up">
                              contact us toll free on
                            </div>

                            <div className="down">
                              1800 41 99099   <span>(9AM-11PM IST)</span> </div>

                          </div>
                        </div>
                        <div className="col-3 col2">
                          <div className="head">
                            PROPERTIES IN DELHI SOUTH WEST
                          </div>
                          <ul>
                            <li>Flats</li>
                            <li>Builder Floors</li>
                            <li>Independent House</li>
                            <li>Plots in Delhi South West</li>
                            <li>Studio Apartments/1 RK Flats</li>
                            <li>Farm Houses</li>
                          </ul>
                        </div>
                        <div className="col-3 col3">
                          <div className="head">
                            POPULAR SEARCHES
                          </div>
                          <ul>
                            <li>Property form rent in Delhi South West</li>
                            <li>Verified Property in Delhi South West</li>


                          </ul>
                        </div>
                        <div className="col-3 col4">
                          <div className="intro-card">
                            <div className="top">
                              <div className="img">
                                <Image src={listinimg} alt="listimg" />
                              </div>
                              <div className="text">
                                <div className="sm">
                                  INTRODUCING

                                </div>
                                <div className="big">
                                  Insights
                                </div>
                              </div>
                              <div className="arrow">
                                <FontAwesomeIcon icon={faArrowUp} />
                              </div>
                            </div>
                            <div className="list">
                              <ul>
                                <li><span><Image src={check} alt="check" /></span> Understand localities</li>
                                <li><span><Image src={check} alt="check" /></span>Read Resident Reviews</li>
                                <li><span><Image src={check} alt="check" /></span>Check Price Trends</li>
                                <li><span><Image src={check} alt="check" /></span>Tools, Utilities & more</li>
                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div></li>
                  <li><Link href='/'>For Owners</Link>
                    <div className="Owners">
                      <div className="row">
                        <div className="col-4 col1">
                          <div className="ul">
                            <ul>
                              <li>OWNER OFFERING</li>

                              <li>INSITES <span className="new">new</span></li>
                              <li>ARTIESLES AND NEWS</li>
                            </ul>
                          </div>
                          <div className="fot">
                            <div className="up">
                              contact us toll free on
                            </div>

                            <div className="down">
                              1800 41 99099   <span>(9AM-11PM IST)</span> </div>

                          </div>
                        </div>
                        <div className="col-4 col2">
                          <div className="head">
                            OWNER OFFERINGS
                          </div>
                          <ul>
                            <li>Post Property for Free</li>
                            <li>Owner Services</li>
                            <li>My99acres</li>
                            <li>View Responses</li>





                          </ul>
                        </div>

                        <div className="col-4 col3 ">
                          <div className="img">
                            <Image src={postpro} alt="postpro" />
                            <button>
                              Post Property
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li><Link href='/'>For Dealers/Builders</Link>
                    <div className="Dealers">
                      <div className="row">
                        <div className="col-4 col1">
                          <div className="ul">
                            <ul>
                              <li>PROPERTIE SERVICES</li>
                              <li>RESEARCH AND ADVICE</li>

                            </ul>
                          </div>
                          <div className="fot">
                            <div className="up">
                              contact us toll free on
                            </div>

                            <div className="down">
                              1800 41 99099   <span>(9AM-11PM IST)</span> </div>

                          </div>
                        </div>
                        <div className="col-4 col2">
                          <div className="head">
                            PROPERTIE SERVICES
                          </div>
                          <ul>
                            <li>Post Property </li>
                            <li>Dealer Services</li>
                            <li>My99acres</li>
                            <li>View Responses</li>




                          </ul>
                        </div>

                        <div className="col-4 col3 ">
                          <div className="img">
                            <Image src={postpro} alt="postpro" />
                            <button>
                              Post Property
                            </button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                  <li style={{ paddingRight: "0px" }}><Link href='/'>Insights <sup>new</sup></Link>
                    <div className="Insights">
                      <div className="row">
                        <div className="col-4 col1">
                          <div className="ul">
                            <ul>
                              <li>LOCALITY INSIGHTS</li>
                              <li>PRICE TREND</li>

                              <li>TRANSATION PRICE</li>
                              <li>REVIEW</li>
                            </ul>
                          </div>
                          <div className="fot">
                            <div className="up">
                              contact us toll free on
                            </div>

                            <div className="down">
                              1800 41 99099   <span>(9AM-11PM IST)</span> </div>

                          </div>
                        </div>
                        <div className="col-4 col2">
                          <div className="head">
                            Most Popular Localities
                          </div>
                          <ul>
                            <li>Dwarka</li>
                            <li>Sector 14 Dwarka</li>
                            <li>Sector 13 Dwarka</li>
                            <li>Sector 19B Dwarka</li>
                            <li>Sector 6 Dwarka</li>
                            <li>Sector 23 Dwarka</li>
                            <li>Sector 22 Dwarka</li>







                          </ul>
                          <Link href="/">View All Insights</Link>
                        </div>

                        <div className="col-4 col4 ">
                          <div className="intro-card">
                            <div className="top">
                              <div className="img">
                                <Image src={listinimg} alt="listimg" />
                              </div>
                              <div className="text">
                                <div className="sm">
                                  INTRODUCING

                                </div>
                                <div className="big">
                                  Insights
                                </div>
                              </div>
                              <div className="arrow">
                                <FontAwesomeIcon icon={faArrowUp} />
                              </div>
                            </div>
                            <div className="list">
                              <ul>
                                <li><span><Image src={check} alt="check" /></span> Understand localities</li>
                                <li><span><Image src={check} alt="check" /></span>Read Resident Reviews</li>
                                <li><span><Image src={check} alt="check" /></span>Check Price Trends</li>
                                <li><span><Image src={check} alt="check" /></span>Tools, Utilities & more</li>
                              </ul>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="post">
                <Link href='/'>  Post property <span>free</span></Link>

              </div>
              <div className="contect">
                <div className="in">
                  <Link href='/'>  <FontAwesomeIcon icon={faHeadset} /></Link>
                </div>

                <div className="contect-in-box">
                  <div className="top">
                    Contect Us
                  </div>

                  <div className="num">
                    <div className="call"><FontAwesomeIcon icon={faPhone} style={{ width: "15px" }} /></div><div className="tex"><span>Toll Free | 9:30 AM to 6:30 PM (Mon-Sun)</span><br />1800-41-99099</div>
                  </div>
                  <div className="num mb-3">
                    <div className="call"><FontAwesomeIcon icon={faPhone} style={{ width: "15px" }} /></div><div className="tex"> <span>For International Users</span><br />1800-41-99099</div>
                    <div className="contect-in-numbers">
                      <div className="top">
                        INTERNATIONAL NUMBERS
                      </div>

                      <div className="num">
                        <div className="call"><FontAwesomeIcon icon={faPhone} style={{ width: "15px" }} /></div><div className="tex"><span>
                          United Arab Emirates</span><br />8000 18 2956</div>
                      </div>
                      <div className="num">
                        <div className="call"><FontAwesomeIcon icon={faPhone} style={{ width: "15px" }} /></div><div className="tex"><span>United States of America</span><br />1833 703-9807</div>
                      </div>
                      <div className="num mb-3">
                        <div className="call"><FontAwesomeIcon icon={faPhone} style={{ width: "15px" }} /></div><div className="tex"> <span>United Kingdom</span><br />8000 48 9253</div>
                      </div>

                    </div>
                  </div>
                  <div className="request">
                    <button><FontAwesomeIcon icon={faPhoneVolume} style={{ width: "15px" }} /> Request A Call back</button>
                  </div>
                  <div className="check">
                    To check all the FAQ <Link href='/'>click here</Link>
                  </div>
                </div>

              </div>
              <div className="profile">
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
              <div className="menu">
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
        <div className="nav-down">
          <div className="box">
            <div className="search-box">

              <div className="ullist">
                <ul>
                  {items.map((item, i) => (
                    <li className={active === i ? "active" : ""} key={i}
                      onClick={() => setactive(i)}

                    >{item}</li>
                  ))}

                </ul>
              </div>
              <div className="down">
                <div className="left">
                  <div className="all">
                    All Residential<span><FontAwesomeIcon icon={faAngleDown} style={{ width: "15px" }} /></span>
                  </div>
                  <div className=" inp"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "15px", marginLeft: "3px" }} className="me-1" /><input type="search" placeholder="search Flat in sector 77 in noeda" /></div>
                </div>
                <div className="right">
                  <div className="icon"><Image src={nearme} alt="nearme" /></div>
                  <div className="icon"><Image src={mick} alt="mick" /></div>



                  <button type="button" className="btn btn-primary" style={{ fontWeight: "700" }}>Search</button>
                </div>
              </div>
            </div>
            <div className="search-down">
              <div>Recent Searches:</div><div><button style={{ opacity: "0.8" }}><FontAwesomeIcon icon={faClockRotateLeft} style={{ width: "13px", marginRight: "4px" }} />by in delhi south west, independet...</button></div><div><button><FontAwesomeIcon icon={faClockRotateLeft} style={{ width: "13px", marginRight: "4px" }} />Viwe all Searches</button></div>
            </div>
          </div>
        </div>


      </div>
      <div className="main-content">
        <div className="first-sec">
          <div className="row">
            <div className="col-sm-12 col-md-8 ">
              <div className="inner">
                <div className="line1">
                  <div className="heading">
                    Recommended Properties
                  </div>
                  <div className="sm-heading">
                    Curated especially for you
                  </div>



                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={home1} alt="home1" />
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            ₹ 5 Cr
                          </span>
                        </div>
                        <div className="heading">
                          3 BHK Independent House....
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            In Pocket 3C, Sector 16B Dwarka, Delhi
                          </div>
                          <div className="down">
                            <div>Posted by Owner</div><div>1 month ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={home2} alt="home1" />
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            ₹ 5 Cr
                          </span>
                        </div>
                        <div className="heading">
                          3 BHK Apartment, 3 Baths
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            In <span>Dda Hig Flat</span>, Sector 19B Dwarka, D
                          </div>
                          <div className="down">
                            <div>Posted by Owner</div><div>1 month ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={home3} alt="home1" />
                          <span className="verified">
                            <span style={{ marginRight: "5px" }}><FontAwesomeIcon icon={faCheck} /></span>
                            <span style={{ marginRight: "5px" }}>Verified</span>
                            <span><FontAwesomeIcon icon={faCircleInfo} /></span>
                          </span>
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            ₹ 5 Cr
                          </span>
                        </div>
                        <div className="heading">
                          3 BHK Apartment, 3 Baths
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            In <span>Dda Hig Flat</span>, Sector 19B Dwarka, D
                          </div>
                          <div className="down">
                            <div>Posted by Owner</div><div>1 month ago</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line2 ">
                  <div className="heading">
                    Recommended Projects
                  </div>
                  <div className="sm-heading">
                    The most searched projects in Delhi South West
                  </div>



                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={home4} alt="home1" />
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            Proccesing from Apr 2025
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
                            ₹ 85 L - 3.25 Cr
                          </div>
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

                          Balaji Housing

                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            3, 4 BHK Apartment in Sector 23B Dwarka, Delhi
                          </div>
                          <div className="down">
                            ₹ 75 L - 1.12 Cr
                          </div>
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
                          Megha Affordable Homes
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            2, 3 BHK Independent Floor in Sector 14 Dwarka, Delhi
                          </div>
                          <div className="down">


                            ₹ 32 - 68 L
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line3">
                  <div className="heading">
                    Apartments, Villas and more

                  </div>
                  <div className="sm-heading">
                    in Delhi South West
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#fff5e4" }}>
                          <Image src={bilding1} alt="bilding1" />
                          <div className="text">
                            <div className="title">
                              Residential Apartment
                            </div>
                            <div className="small">
                              6,100+ Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#f0f9ff" }}>
                          <Image src={bilding2} alt="bilding2" />
                          <div className="text">
                            <div className="title">
                              Independent/ Builder Floor
                            </div>
                            <div className="small">
                              640+ Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#d7f2e3" }}>
                          <Image src={bilding3} alt="bilding3" />
                          <div className="text">
                            <div className="title">
                              Residential Land
                            </div>
                            <div className="small">
                              150+ Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="line4">
                  <div className="heading">
                    Handpicked Projects

                  </div>
                  <div className="sm-heading">
                    Featured Projects in Delhi South West
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="properti">
                        <div className="img img2" style={{ backgroundColor: "#fff5e4" }}>
                          <Image src={bilding4} alt="bilding4" />
                          <span className="featured">
                            featured

                          </span>
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>

                        </div>
                        <div className="company-div">
                          <div className="company">
                            <Image src={sky} alt="sky" />
                          </div>
                          <div className="inner">
                            <div className="heading"> Lavish Floors By Surya Homes</div>
                            <div className="sm-heading">2,3,4 BHK Independent/Builder Floor, Sector 8 Dwarka</div>
                            <div className="price">₹ 85 Lacs - 3.25 Cr</div>

                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#f0f9ff" }}>
                          <Image src={bilding5} alt="bilding5" />
                          <span className="featured">
                            featured

                          </span>
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>

                        </div>
                        <div className="company-div">
                          <div className="company">
                            <Image src={surya} alt="sky" />
                          </div>
                          <div className="inner">
                            <div className="heading"> Lavish Floors By Surya Homes</div>
                            <div className="sm-heading">2,3,4 BHK Independent/Builder Floor, Sector 8 Dwarka</div>
                            <div className="price">₹ 85 Lacs - 3.25 Cr</div>

                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="line5">
                  <div className="heading">
                    Recommended Properties
                  </div>
                  <div className="sm-heading">
                    Curated especially for you
                  </div>



                  <div className="row">
                    <div className="col-12 col-md-3">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "rgb(249, 233, 210)" }}>
                          <Image src={mapcard} alt="home1" />
                          <div className="icon">
                            <Image src={locationicon1} alt="locationicon1" />
                            <div className="title">
                              Pocket 3C, Secto..
                            </div>
                            <div className="loc" style={{ color: "#b57617" }}>
                              Delhi
                            </div>
                          </div>
                        </div>
                        <div className="heading">
                          Pocket 3C, Sector 16B D..
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            Locality Insight
                          </div>

                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "rgb(229, 231, 228)" }}>
                          <Image src={mapcard} alt="home1" />
                          <div className="icon">
                            <Image src={locationicon2} alt="locationicon1" />
                            <div className="title">
                              Sector 8 Dwarka
                            </div>
                            <div className="loc">
                              Delhi
                            </div>
                          </div>
                        </div>

                        <div className="heading">
                          Sector 8 Dwarka Insig..
                        </div>
                        <div className="sm-heading">
                          Locality Insight
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "rgb(229, 231, 228)" }}>
                          <Image src={mapcard} alt="home1" />
                          <div className="icon">
                            <Image src={locationicon3} alt="locationicon1" />
                            <div className="title">
                              Sector 19B Dwa..
                            </div>
                            <div className="loc">
                              Delhi
                            </div>
                          </div>
                        </div>
                        <div className="heading">
                          Sector 19B Dwarka Insi.
                        </div>
                        <div className="sm-heading">
                          Locality Insight
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div className="card-four">
                        <div className="img">

                          <div className="text">
                            <div className="title">
                              Lavish Floors By Su..
                            </div>
                            <div className="loc">
                              Sector 8 Dwarka, Delhi
                            </div>
                          </div>
                          <div className="img-cover">
                            <Image src={bilding4} alt="home1" />
                          </div>

                        </div>
                        <div className="heading">
                          Lavish Floors By Sury..
                        </div>
                        <div className="sm-heading">
                          Locality Insight
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

                  <div className="row">
                    <div className="col-12 col-md-6">
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
                              ₹ 85 L - 3.25 Cr <span>2, 3, 4 BHK Ind..</span>
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
                    <div className="col-12 col-md-6">
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
                <div className="line2 ">
                  <div className="heading">
                    Based on search trends
                  </div>
                  <div className="sm-heading">
                    Other city projects Delhi South West buyers considered
                  </div>



                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={bs1} alt="home1" />
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            Proccesing from Apr 2025
                          </span>
                        </div>
                        <div className="heading">
                          Unity  Group The Amaryllis

                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            2, 3, 4, 5, 6, 7 BHK Apartment in Karol Bagh, Delhi
                          </div>
                          <div className="down">
                            ₹ 2.25 - 12.7 Cr
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={bs2} alt="home1" />
                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            Ready to move
                          </span>
                        </div>
                        <div className="heading">
                          DLF Capital Greens 1 and 2

                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            2, 3, 4 BHK Apartment | 1 RK Studio Apartment in Moti Nagar, Delhi
                          </div>
                          <div className="down">
                            ₹ 2.1 - 8 Cr
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img">
                          <Image src={bs3} alt="home1" />

                          <span className="like"><FontAwesomeIcon icon={faHeart} /></span>
                          <span className="price">
                            Ready to move
                          </span>
                        </div>
                        <div className="heading">
                          DLF One Midtown
                        </div>
                        <div className="sm-heading">
                          <div className="up">
                            2, 3, 4 BHK Apartment in Moti Nagar, Delhi
                          </div>
                          <div className="down">


                            ₹ 2.3 - 8 Cr
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line9">
                  <div className="head-sec">
                    <div className="left">
                      <div className="img">
                        <Image src={listinimg} alt="ticket" />
                      </div>
                       <div className="text">
                       <div className="heading">
                       Insights & Tools
                      </div>
                      <div className="sm-heading">
                      Go from browsing to buying
                      </div>
                       </div>
                    </div>
                    <div className="right">
                     <button>Viwe all insights</button>
                    </div>
                  </div>
                  <div className="body-sec">
                    <div className="row">
                      <div className="col-12 col-md-4 d-flex align-items-stretch">
                        <div className="inner">
                          <div className="img">
                            <Image src={line9img1} alt="line9img1"/>
                          </div>
                          <div className="space">

                          </div>
                          <div className="heading">
                          Delhi Overview
                          </div>
                          <div className="sm-heading">
                          Know what’s great & upcoming developments
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                      <div className="inner">
                          <div className="img">
                            <Image src={line9img2} alt="line9img1"/>
                          </div>
                          <div className="space">
                            
                          </div>
                          <div className="heading">
                          Property Rates in Delhi
                          </div>
                          <div className="sm-heading">
                          Check property rates and prices
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                      <div className="inner">
                          <div className="img">
                            <Image src={line9img3} alt="line9img1"/>
                          </div>
                          <div className="space">
                            
                          </div>
                          <div className="heading">
                          Genuine reviews of Delhi
                          </div>
                          <div className="sm-heading">
                          Know what residents are saying
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line10">
                  <div className="head-sec">
                    <div className="left">
                      <div className="img">
                        <Image src={og} alt="ticket" />
                      </div>
                       <div className="text">
                       <div className="heading">
                       Reach out to Featured Dealers
                      </div>
                      <div className="sm-heading">
                      who are popular amongst Residential Buyers
                      </div>
                       </div>
                    </div>
                    <div className="right">
                     <button>Viwe all</button>
                    </div>
                  </div>
                  <div className="body-sec">
                    <div className="row">
                      <div className="col-12 col-md-4 ">
                        <div className="inner">
                          <div className="img">
                            <Image src={nitin} alt="line9img1"/>
                            <div className="tag">
                              <Image src={og} alt="og"/>
                            </div>
                          </div>
                          <div className="space">

                          </div>
                          <div className="per">
                          Property Shoppe
                          </div>
                          <div className="heading">
                          Mr. Nitin Mehta
                          </div>
                          <div className="sm-heading">
                          Member Since Sep, 2014
                          </div>
                          <div className="resale">
                            <button>resale</button>
                          </div>
                          <div className="contect-btn">
                            <button>Contect Dealer</button>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                      <div className="inner">
                          <div className="img">
                            <Image src={sahil} alt="line9img1"/>
                            <div className="tag">
                              <Image src={og} alt="og"/>
                            </div>
                          </div>
                          <div className="space">

                          </div>
                          <div className="per">
                          Property Shoppe
                          </div>
                          <div className="heading">
                          Mr. Nitin Mehta 
                          </div>
                          <div className="sm-heading">
                          Member Since Sep, 2014
                          </div>
                          <div className="resale">
                            <button>resale</button>
                          </div>
                          <div className="contect-btn">
                            <button>Contect Dealer</button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-12 col-md-4">
                      <div className="inner">
                          <div className="img">
                            <Image src={inderjit} alt="line9img1"/>
                            <div className="tag">
                              <Image src={og} alt="og"/>
                            </div>
                          </div>
                          <div className="space">

                          </div>
                          <div className="per">
                           R S Link Properties & Developers Pvt. Ltd.
                          </div>
                          <div className="heading">
                        Inderjit Singh
                          </div>
                          <div className="sm-heading">
                         Member Since Oct, 2011
                          </div>
                          <div className="resale">
                            <button>resale</button>
                          </div>
                          <div className="contect-btn">
                            <button>Contect Dealer</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line11">
                  <div className="inner">
                    <div className="heading">
                    More dealers who can help you...
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={user} alt="user"/>
                          </div>
                          <div className="text">
                            <div className="ownername">
                            Jitin Tanwar
                            </div>
                            <div className="shop">
                            KT REALTORS
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={user} alt="user"/>
                          </div>
                          <div className="text">
                            <div className="ownername">
                            Supriya Prakash
                            </div>
                            <div className="shop">
                            SHREE VINAYAK INF..
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={user} alt="user"/>
                          </div>
                          <div className="text">
                            <div className="ownername">
                            Arora
                            </div>
                            <div className="shop">
                            Arora Properties
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="inner">
                <div className="guest-user">
                  <div className="user">
                    <div className="icon"><FontAwesomeIcon icon={faUser} /></div><div className="text">Guest User</div>
                  </div>
                  <div className="recent">
                    Your Recent Activity
                  </div>
                  <div className="viwe">
                    <div style={{ fontSize: "25px", fontWeight: "500" }}>2</div><span><FontAwesomeIcon icon={faArrowUp} style={{ transform: "rotate(45deg)" }} /></span>
                    <div style={{ fontSize: "15px", fontWeight: "400" }}>Viewed</div>
                  </div>
                  <div className="btn" style={{ padding: "0", width: "100%" }}>
                    <button type="button" className="btn btn-primary">Login/Register to Save Activity</button>
                  </div>
                  <div className="foot">
                    & see your activities across browsers & devices..
                  </div>
                </div>
                <div className="img">
                  <Image src={img1} alt="invest acers" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
