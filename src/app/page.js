"use client"
import Image from "next/image";
import './globals.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import logo from '../../public/images/99 logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faArrowRight, faArrowUp, faBars, faBarsStaggered, faCheck, faCircleInfo, faClockRotateLeft, faHeadset, faHeart, faIndianRupeeSign, faLocationCrosshairs, faMagnifyingGlass, faMicrophone, faPhone, faPhoneVolume, faPlay, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
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
import cghs from "../../public/images/cghs.jpg"
import suryahome from "../../public/images/suryahome.png"
import delhidev from "../../public/images/delhidev.jpg"
import megha from "../../public/images/megha.jpg"
import bhk from "../../public/images/bhk.png"
import invest from "../../public/images/invest.webp"
import owneric from "../../public/images/owneric.png"
import line15img1 from "../../public/images/const1.webp"
import line15img2 from "../../public/images/const2.webp"
import line15img3 from "../../public/images/const3.webp"
import dommybilding from "../../public/images/dommybilding.png"
import sector19 from "../../public/images/sector19.jpg"
import verifyproperty from "../../public/images/okproperty.webp";
import reviewavtar from "../../public/images/ReviewAvatar.png";
import div1img1 from "../../public/images/div1img1.jpg";
import div1img2 from "../../public/images/div1img2.png";
import div1img3 from "../../public/images/div1img3.jpg";
import div1img4 from "../../public/images/div1img4.jpg";
import div3img1 from "../../public/images/div3img1.webp";
import div3img2 from "../../public/images/div3img2.webp";
import div3img3 from "../../public/images/div3img3.webp";
import div3img4 from "../../public/images/div3img4.webp";
import div3img5 from "../../public/images/div3img5.webp";
import div4img1 from "../../public/images/div4img1.jpg";
import div4img2 from "../../public/images/div4img2.jpg";
import div4img3 from "../../public/images/div4img3.jpg";
import div4img4 from "../../public/images/div4img4.jpg";
import div4img5 from "../../public/images/div4img5.jpg";
import div4img6 from "../../public/images/div4img6.jpg";
import div4img7 from "../../public/images/div4img7.jpg";
import div4img8 from "../../public/images/div4img8.jpg";
import download from "../../public/images/download.webp";
import playstore from "../../public/images/playstore.png";
import appstore from "../../public/images/appstore.png";

import { useEffect, useState } from "react";
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";



export default function Home() {
  const [active, setactive] = useState("");

  const menu = ["News", "Tex & Legal", "Help Guides", "Investment"]
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
          <div className="big-nav">
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
          <div className="small-nav">
            <div className="content">
              <div className="left">
                <div className="menu">
                  <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                    <FontAwesomeIcon style={{ width: "20px" }} icon={faBarsStaggered} />
                  </button>
                  <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="staticBackdropLabel"><Link href='/login' style={{ color: "#0078db ", fontSize: "16px" }}>Login/Register</Link></h5>
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
                <div className="logo">
                  <Image src={logo} alt="99acres logo" width={50} />
                </div>
              </div>
              <div className="right">
                <div className="post">
                  <Link href='/'>  Post property <span>free</span></Link>
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
          <div className="sm-screen-box">
            <div className="search-box">
              <div className="left">
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: "15px", marginLeft: "3px", color: "gray" }} className="me-1" />
                <input type="search" placeholder="search Flat in sector 77 in noeda" />
              </div>
              <div className="right">
                <FontAwesomeIcon icon={faMicrophone} style={{ color: "#5858f4" }} />
              </div>
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
                   Bhart Dhot
                  </div>
                  <div className="sm-heading">
                    Curated especially for you
                  </div>



                  <div className="row">
                    <div className="col-12 col-md-4"> <Link href="/3-bhk-bedroom">
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
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                      <Link href="/3-bhk-bedroom" > 
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
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                    <Link href="/3-bhk-bedroom" > 
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
                      </div></Link>
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
                      <Link href="/lavish-floor">
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
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                    <Link href="/lavish-floor"><div className="properti">
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
                      </div></Link>
                    </div>
                    <div className="col-12 col-md-4">
                    <Link href="/lavish-floor"> <div className="properti">
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
                      </div></Link>
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
                    <div className="col-12 col-md-6" >
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
                      <div className="col-12 col-md-4 " style={{ display: "flex", justifyContent: "stretch" }}>
                        <div className="inner">
                          <div className="img">
                            <Image src={line9img1} alt="line9img1" />
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
                            <Image src={line9img2} alt="line9img1" />
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
                            <Image src={line9img3} alt="line9img1" />
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
                            <Image src={nitin} alt="line9img1" />
                            <div className="tag">
                              <Image src={og} alt="og" />
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
                            <Image src={sahil} alt="line9img1" />
                            <div className="tag">
                              <Image src={og} alt="og" />
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
                            <Image src={inderjit} alt="line9img1" />
                            <div className="tag">
                              <Image src={og} alt="og" />
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
                            <Image src={user} alt="user" />
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
                            <Image src={user} alt="user" />
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
                            <Image src={user} alt="user" />
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
                <div className="line12">
                  <div className="inner">
                    <div className="heading">
                      Popular builders
                    </div>
                    <div className="sm-heading">
                      in Delhi South West
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="inner">
                          <div className="img">
                            <Image src={cghs} alt="user" />
                          </div>
                          <div className="text">
                            <div className="ownername">
                              CGHS Group Delhi
                            </div>
                            <div className="shop">
                              168 Total Projects  |  142 in this city
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="inner">
                          <div className="img">
                            <Image src={suryahome} alt="user" />
                          </div>
                          <div className="text">
                            <div className="ownername">
                              Surya Homes Dwarka
                            </div>
                            <div className="shop">
                              1 Total Projects  |  1 in this city
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <div className="inner">
                          <div className="img">
                            <Image src={delhidev} alt="user" />
                          </div>
                          <div className="text">
                            <div className="ownername">
                              Delhi Development Authority
                            </div>
                            <div className="shop">
                              191 Total Projects  |  55 in this city
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="inner">
                          <div className="img">
                            <Image src={megha} alt="user" />
                          </div>
                          <div className="text">
                            <div className="ownername">
                              Megha Developers
                            </div>
                            <div className="shop">
                              3 Total Projects  |  1 in this city
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="line13">
                  <div className="head-sec">

                    <div className="img">
                      <Image src={bhk} alt="ticket" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        BHK choice in mind?
                      </div>
                      <div className="sm-heading">
                        Browse by no. of bedrooms in the house
                      </div>
                    </div>


                  </div>
                  <div className="body-sec">
                    <div className="row">
                      <div className="col-12 col-md-4 ">
                        <div className="inner">
                          <div className="img">
                            <Image src={bhk} alt="line9img1" />

                          </div>
                          <div className="space">

                          </div>

                          <div className="heading">
                            1 RK/1 BHK
                          </div>
                          <div className="sm-heading">
                            180+ Properties
                          </div>

                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={bhk} alt="line9img1" />

                          </div>
                          <div className="space">

                          </div>
                          <div className="heading">
                            2 BHK
                          </div>
                          <div className="sm-heading">
                            1,100+ Properties
                          </div>
                        </div>
                      </div>

                      <div className="col-12 col-md-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={bhk} alt="line9img1" />

                          </div>
                          <div className="space">

                          </div>

                          <div className="heading">
                            3 BHK
                          </div>
                          <div className="sm-heading">
                            3,900+ Properties
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line14">

                  <div className="body-sec">
                    <div className="row">
                      <div className="col-4">
                        <div className="inner">
                          <div className="img">
                            <Image src={invest} alt="invest" />
                          </div>
                          <div className="text">
                            <div className="heading">
                              Properties posted by
                            </div>
                            <div className="sm-heading">
                              Choose type of advertiser
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-8">
                        <div className="inner">
                          <div className="head-sec mb-3">
                            <div className="heading">
                              Choose type of advertiser
                            </div>
                            <div className="sm-heading">
                              Browse your choice of listing
                            </div>
                          </div>
                          <div className="body-sec">
                            <div className="left">
                              <div className="img">
                                <Image src={owneric} alt="owneric" />
                              </div>
                              <div className="text">
                                <div className="heading">
                                  Owner
                                </div>
                                <div className="sm-heading">
                                  2 Properties
                                </div>
                              </div>
                            </div>
                            <div className="right">
                              <FontAwesomeIcon icon={faArrowRight} className="icon" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line15">
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
                          <Image src={line15img1} alt="bilding1" />
                          <div className="text">
                            <div className="title">
                              Ready to move
                            </div>
                            <div className="small">
                              6,900+ Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#f0f9ff" }}>
                          <Image src={line15img2} alt="bilding2" />
                          <div className="text">
                            <div className="title">
                              Possession in 2025
                            </div>
                            <div className="small">
                              40+ Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="properti">
                        <div className="img" style={{ backgroundColor: "#d7f2e3" }}>
                          <Image src={line15img3} alt="bilding3" />
                          <div className="text">
                            <div className="title">
                              Possession in 2026
                            </div>
                            <div className="small">
                              6 Properties
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="line16">
                  <div className="inner">
                    <div className="left-box">
                      <div className="img">
                        <Image src={invest} alt="invest" />
                      </div>
                      <div className="text">
                        <div className="heading">
                          Properties posted by
                        </div>
                        <div className="sm-heading">
                          Choose type of advertiser
                        </div>
                      </div>
                    </div>
                    <div className="right-box">
                      <div className="head-sec mb-3">
                        <div className="heading">
                          Browse by budget
                        </div>
                        <div className="sm-heading">
                          Project options based on your budget
                        </div>
                      </div>
                      <div className="body-sec">
                        <div className="div" style={{ marginBottom: "35px" }}>
                          <div className="left">
                            <div className="icon">
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                            </div>
                            <div className="text">
                              <div className="heading">
                                Affordable projects
                              </div>
                              <div className="sm-heading">
                                ₹ 8500 / sq. ft
                              </div>
                            </div>
                          </div>
                          <div className="right">
                            <div className="icon">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                          </div>
                        </div>
                        <div className="div" style={{ marginBottom: "35px" }}>
                          <div className="left">
                            <div className="icon">
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                            </div>
                            <div className="text">
                              <div className="heading">
                                Mid-Segment projects
                              </div>
                              <div className="sm-heading">
                                ₹ 8500 - 9500 / sq. ft
                              </div>
                            </div>
                          </div>
                          <div className="right">
                            <div className="icon">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                          </div>
                        </div>
                        <div className="div">
                          <div className="left">
                            <div className="icon">
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                              <FontAwesomeIcon icon={faIndianRupeeSign} />
                            </div>
                            <div className="text">
                              <div className="heading">
                                Luxury projects
                              </div>
                              <div className="sm-heading">
                                ₹ 9500 / sq. ft
                              </div>
                            </div>
                          </div>
                          <div className="right">
                            <div className="icon">
                              <FontAwesomeIcon icon={faArrowRight} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
                <div className="line18">
                  <div className="inner">

                    <div className="heading">
                      Emerging localities
                    </div>
                    <div className="sm-heading">
                      Localities with recent development in Delhi South West
                    </div>
                    <div className="body">
                      <div className="row">
                        <div className="col-12 col-md-4">
                          <div className="inner">
                            <div className="up">
                              <div className="left">
                                <Image src={dommybilding} alt="dommybilding" />
                              </div>
                              <div className="right">
                                <div className="location">
                                  Dwarka <span className="span">
                                    <span>4.2</span>
                                    <span>★</span>
                                  </span>
                                </div>
                                <div className="project">
                                  3 New Projects
                                </div>
                              </div>
                            </div>
                            <div className="down">
                              <div className="left">
                                Insights
                              </div>
                              <div className="right">
                                Project
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="inner">
                            <div className="up">
                              <div className="left">
                                <Image src={dommybilding} alt="dommybilding" />
                              </div>
                              <div className="right">
                                <div className="location">
                                  Kakrola <span className="span">
                                    <span>4.1</span>
                                    <span>★</span>
                                  </span>
                                </div>
                                <div className="project">
                                  1 New Projects
                                </div>
                              </div>
                            </div>
                            <div className="down">
                              <div className="left">
                                Insights
                              </div>
                              <div className="right">
                                Project
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div className="inner">
                            <div className="up">
                              <div className="left">
                                <Image src={sector19} alt="dommybilding" />
                              </div>
                              <div className="right">
                                <div className="location">
                                  Sector 19 Dwarka <span className="span">
                                    <span>4.3</span>
                                    <span>★</span>
                                  </span>
                                </div>
                                <div className="project">
                                  1 New Projects
                                </div>
                              </div>
                            </div>
                            <div className="down">
                              <div className="left">
                                Insights
                              </div>
                              <div className="right">
                                Project
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line19">
                  <div className="inner">
                    <div className="left">
                      <div className="img">
                        <Image src={verifyproperty} alt="verifyproperty" />
                      </div>
                    </div>
                    <div className="center">
                      <div className="heading">
                        View properties verified by 99acres
                      </div>
                      <div className="sm-heading">
                        Verified on site for genuineness. Check out real photos of the property
                      </div>
                    </div>
                    <div className="right">
                      <div className="arrow">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line20">
                  <div className="left">
                    <div className="img">
                      <Image src={reviewavtar} alt="review" />
                    </div>
                  </div>
                  <div className="right">
                    <div className="heading">
                      How would you rate your locality / society?
                    </div>
                    <div className="stars">
                      <div className="star">
                        <FontAwesomeIcon icon={faStar} className="icon" />

                        <div className="status">
                          Terrible
                        </div>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <div className="status">
                          Poor
                        </div>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <div className="status">
                          Average
                        </div>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <div className="status">
                          Satisfied
                        </div>
                      </div>
                      <div className="star">
                        <FontAwesomeIcon icon={faStar} className="icon" />
                        <div className="status">
                          Excellent
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
        <div className="second-sec">
          <div className="div1">
            <div className="inner">
              <div className="heading-sec">
                <div className="heading">
                  Top articles on home buying
                </div>
                <div className="sm-heading">
                  <Link href="/">   Read realty news, guides & articles</Link>

                </div>
              </div>
              <div className="menu">
                {menu.map((item, i) => (
                  <div className={active === i ? "active" : "menu-option"} key={i}
                    onClick={() => setactive(i)

                    }

                  >{item}</div>
                ))}

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
          <div className="div2">
            <div className="row">
              <div className="col-12 col-md-6 text-side mb-4">
                <div className="inner">
                  <div className="title">
                    SELL OR RENT YOUR PROPERTY
                  </div>
                  <div className="heading">
                    Register to post your property for <span>Free</span>
                  </div>
                  <div className="sm-heading">
                    Post your residential / commercial property
                  </div>
                  <div className="count">
                    <div className="property">
                      <div className="up">
                        10L+
                      </div>
                      <div className="down">
                        Property Listings
                      </div>
                    </div>
                    <div className="property">
                      <div className="up">
                        45L+
                      </div>
                      <div className="down">
                        Monthly Searches
                      </div>
                    </div>
                    <div className="property">
                      <div className="up">
                        2L+
                      </div>
                      <div className="down">
                        Owners advertise monthly
                      </div>
                    </div>

                  </div>
                  <div className="btn">
                    <button>Post your property for Free</button>
                  </div>
                  <div className="contect">
                    Or post via <span style={{ color: "green" }}><FontAwesomeIcon icon={faWhatsapp} /></span>  Whatsapp, send a “hi” to +91 7428197035
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 img-side">
                <div className="img">
                  <Image src={postpro} alt="postpro" />
                </div>
              </div>
            </div>
          </div>
          <div className="div3">
            <div className="inner">
              <div className="acres">
                99acres
              </div>
              <div className="heading mb-5">
                Explore our services
              </div>
              <div className="content-card">
                <div className="inner">
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="inner" style={{ borderBottom: "1px solid #ebecf0" }}>
                        <div className="img">
                          <Image src={div3img1} alt="div3img1" />
                        </div>
                        <div className="text">
                          <div className="heading">
                            Buying a commercial property
                          </div>
                          <div className="sm-heading">
                            Shops, offices, land, factories, warehouses and more
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="inner" style={{ borderBottom: "1px solid #ebecf0" }}>
                        <div className="img">
                          <Image src={div3img2} alt="div3img1" />
                        </div>
                        <div className="text">
                          <div className="heading">
                            Leasing a commercial property
                          </div>
                          <div className="sm-heading">
                            Shops, offices, land, factories, warehouses and more
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="inner" style={{ borderBottom: "1px solid #ebecf0" }}>
                        <div className="img">
                          <Image src={div3img3} alt="div3img1" />
                        </div>
                        <div className="text">
                          <div className="heading">
                            Buy Plots/Land
                          </div>
                          <div className="sm-heading">
                            Residential Plots, Agricultral Farm lands, Inst. Lands and more
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-4">
                      <div className="inner" >
                        <div className="img">
                          <Image src={div3img4} alt="div3img1" />
                        </div>
                        <div className="text">
                          <div className="heading">
                            Renting a home
                          </div>
                          <div className="sm-heading">
                            Apartments, builder floors, villas and more
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">
                      <div className="inner">
                        <div className="img">
                          <Image src={div3img5} alt="div3img1" />
                        </div>
                        <div className="text">
                          <div className="heading">
                            PG and co-living
                          </div>
                          <div className="sm-heading">
                            Organised, owner and broker listed PGs
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-4">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div4">
            <div className="inner">
              <div className="top">
                TOP CITIES
              </div>
              <div className="heading mb-5">
                Explore Real Estate in Popular Indian Cities
              </div>
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img1} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Delhi / NCR
                      </div>
                      <div className="sm-heading">
                        141,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img2} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Bangalore
                      </div>
                      <div className="sm-heading">
                        36,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img3} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Pune
                      </div>
                      <div className="sm-heading">
                        36,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img4} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Chennail
                      </div>
                      <div className="sm-heading">
                        31,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img5} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Mumbai
                      </div>
                      <div className="sm-heading">
                        33,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img6} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Heyderabad
                      </div>
                      <div className="sm-heading">
                        21,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img7} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Kolkata
                      </div>
                      <div className="sm-heading">
                        24,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="inner">
                    <div className="img">
                      <Image src={div4img8} alt="place" />
                    </div>
                    <div className="text">
                      <div className="heading">
                        Ahmedabad
                      </div>
                      <div className="sm-heading">
                        22,000+ Properties
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="div5">
            <div className="img">
              <Image src={download} alt="download" />
            </div>
          </div>
        </div>
        <div className="footer-sec">
          <div className="content ">
            <div className="row">


              <div className="col-12 col-md-7 left">
                <div className="row">
                  <div className="div col-4 col-md-4">
                    <p>99acres</p>
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
                  Toll Free - 1800 41 99099
                </div>
                <div className="time">
                  9:30 AM to 6:30 PM (Mon-Sun)
                </div>
                <div className="email">
                  Email - feedback@99acres.com
                </div>
                <div className="connect">
                  Connect with us
                </div>
                <div className="icon">
                  <span><FontAwesomeIcon icon={faFacebookF} /></span>
                  <span><FontAwesomeIcon icon={faYoutube} /></span>
                  <span><FontAwesomeIcon icon={faTwitter} /></span>
                  <span><FontAwesomeIcon icon={faInstagram} /></span>
                </div>
                <div className="download">
                  Download the App
                </div>
                <div className="img">
                  <span><Image src={playstore} alt="playstore" /></span>
                  <span><Image src={appstore} alt="appstore" /></span>
                </div>
                <div className="small">
                  Usage of 99acres.com to upload content showing area in non standard units or which enables targeting by religion/community/caste/race is prohibited. Please report inappropriate content by writing to us at <Link href="/report">report abuse</Link>
                </div>
                <div className="bot">
                  All trademarks are the property of their respective owners.
                  All rights reserved - Info Edge (India) Ltd.
                  A naukri.com group venture
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
