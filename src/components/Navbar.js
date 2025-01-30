import React, { useState } from "react";
import "./Navbar.css";
import { useMediaQuery } from "react-responsive";
import logoHome from './assets/logo.png';
import solutionsimg from './assets/adi.jpeg';

function Navbar() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeMenu, setActiveMenu] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [activeMenu, setActiveMenu] = useState({});


  // const handleToggle = () => {
  //   setIsActive((prev) => !prev);
  // }
  const handleToggle = (id) => {
    setActiveMenu((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeAllDropdowns = () => {
    setIsSolutionsOpen(false);
    setIsSectorsOpen(false);
    setIsServicesOpen(false);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navbar")) {
      closeAllDropdowns();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const solutionsSubMenuItems = [
    { label: "Audio Visual Integration", href: "/avIntegration" },
    { label: "Collaboration Solutions", href: "/collaborationSolutions" },
    { label: "Digital Media", href: "/digitalMedia" },
    { label: "Automation Solutions", href: "/automationSolutions" },
    { label: "Interactive Technology", href: "/interactiveTechnology" },
  ];

  const sectorsSubMenuItems = [
    { label: "Corporate", href: "/corporate" },
    { label: "Education", href: "/education" },
    { label: "Public Sector", href: "/publicSector" },
    { label: "Healthcare", href: "/healthcare" },
    { label: "Legal Collaboration", href: "/legalCollaboration" },
  ];

  const servicesSubMenuItems = [
    { label: "Unified Communications", href: "/unifiedCommunications" },
    { label: "Training and Support", href: "/trainingAndSupport" },
    { label: "On-site Support", href: "/onSiteSupport" },
    { label: "Equipment Repair", href: "/equipmentRepair" },
    { label: "Leasing", href: "/leasing" },
    { label: "Video Conference Rental", href: "/videoConferenceRental" },
  ];

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <header
      id="site-header"
      className="site-header js-site-header site-header__sticky
     en    "
    >
      <div className="site-header__inner">
        <div className="container site-header__container" style={{maxWidth: '1400px',
  margin: '0 auto', paddingInline:'1em'}}>
          <div className="site-header__logo">
            <a
              href="/"
              className="site-header__logo-link"
            >
              <img className="style-svg site-header__logo-img" src={logoHome} style={{maxHeight:'35px', minHeight:'25px'}} alt="Proscene"></img>
            </a>
          </div>

          <div className="site-header__side">
            <nav className="site-header__nav">
              <ul
                id="menu-header-en"
                className="site-header__menu js-menu-wrapper"
              >
                <li
                  id="menu-item-20758"
                  className="mega-menu solutions menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children active"
                >
                  <a href="/solutions">
                    <span>Solutions</span>
                  </a>
                  <div className="sub-menu-wrapper mega-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="tab-header retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="/avIntegration"
                          data-tab="20803"
                        >
                          <span>Audio Visual Integration</span>
                        </a>
                      </div>
                      <div
                        id="tab-20803"
                        className="tab-pane retail-management style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20814"
                              className="columns-menu products menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29135"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20794"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Customer loyalty management
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20796"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="">
                                            <span>E-commerce</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20816"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>
                                                    OneCore Full Cart Mode
                                                  </span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20799"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Gift Card Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20800"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="">
                                            <span>Head Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20819"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>Inventory control</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20818"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>Omnichannel CRM</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20817"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>Purchasing</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29136"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20805"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Order Management</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20807"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                                        >
                                          <a href="">
                                            <span>POS & Back Office</span>
                                          </a>
                                          <div className="sub-menu-wrapper">
                                            <ul className="sub-menu">
                                              <li
                                                id="menu-item-20820"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>
                                                    Mobile Back Office
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20808"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>Priority POS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20810"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>
                                                    Self Service Kiosk
                                                  </span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20811"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>TPOS</span>
                                                </a>
                                              </li>
                                              <li
                                                id="menu-item-20809"
                                                className="menu-item menu-item-type-post_type menu-item-object-page"
                                              >
                                                <a href="">
                                                  <span>QPOS</span>
                                                </a>
                                              </li>{" "}
                                            </ul>
                                          </div>
                                        </li>
                                        <li
                                          id="menu-item-20812"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Replenishment</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20821"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Retail ERP Software</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-27776"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Priority MyBranch</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20815"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-29137"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20788"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Apparel & Footwear</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20789"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Bookstores & Record shops
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20790"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Building Material, Garden
                                              Equipment, and Hardware
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20791"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Cellular, Electronics & Computers
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20792"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Convenience Stores</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20793"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Cosmetics</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20795"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Duty Free</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>
                                  <li
                                    id="menu-item-29138"
                                    className="items-menus menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                                  >
                                    <a href="#">
                                      <span>Sub column</span>
                                    </a>
                                    <div className="sub-menu-wrapper">
                                      <ul className="sub-menu">
                                        <li
                                          id="menu-item-20797"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Electrical Appliances & Lighting
                                              Showrooms
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20798"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Furniture & Home Decor</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20801"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Jewelry</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20802"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Liquor / Spirits / Tobacco
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20804"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>
                                              Office Supplies & General Retail
                                            </span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20806"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Pet and Animal Supplies</span>
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-20813"
                                          className="menu-item menu-item-type-post_type menu-item-object-page"
                                        >
                                          <a href="">
                                            <span>Sporting Goods</span>
                                          </a>
                                        </li>{" "}
                                      </ul>
                                    </div>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner purple">
                          <div className="banner-description">
                            See how Proscene AV Solutions
                            works for you
                          </div>
                          <a className="btn" href="/bookDemo">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        {/* active above */}
                        <a
                          href="/collaborationSolutions"
                          data-tab="20759"
                        >
                          <span>Collaboration Solutions</span>
                        </a>
                      </div>
                      <div
                        id="tab-20759"
                        className="tab-pane erp style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children active"
                      >
                        {/* active above */}
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20774"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Spaces</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20761"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>
                                        Analytics and Business Insights
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-31540"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Cloud ERP</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20763"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>CRM and Sales</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20765"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Equipment Rental</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20766"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Financial Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20769"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Human Resources Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20773"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Mobile ERP</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20776"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Project Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20777"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Portal Generator</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20778"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Priority Payments</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20779"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Supply Chain Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20780"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Warehouse Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20770"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Localizations</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20775"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Industries</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20760"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Agriculture</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20762"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Construction</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20764"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Electronics</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20767"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Financial Services</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20768"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Healthcare</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20771"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Manufacturing</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20772"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Medical Devices</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20781"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Municipalities</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20782"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Nonprofits</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20783"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Pharmaceutical</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20784"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Professional Services</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20785"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Retail</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20786"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Software and Technology</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20787"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Wholesale & Distribution</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                                {/* <img src={logoHome} alt="Industries" /> */}
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner blue">
                          <div className="banner-description">
                            See how Proscene works for you
                          </div>
                          <a
                            className="btn"
                            href="/bookDemo"
                          >
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="/digitalMedia"
                          data-tab="20822"
                        >
                          <span>Digital Media</span>
                        </a>
                      </div>
                      <div
                        id="tab-20822"
                        className="tab-pane hospitality-management style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20829"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Products</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20828"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20823"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Channel Manager</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20826"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Cloud PMS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24708"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima CRM</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20827"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Marketplace</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24794"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima POS</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30733"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Service Center</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-23483"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Event Management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30722"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Anywhere</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-30724"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Optima Spa Management</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>
                            <li
                              id="menu-item-20830"
                              className="columns-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Categories</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-23482"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Boutique hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24700"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Business hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24701"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Hostels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20824"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>
                                        Hotel chains and groups management
                                      </span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20825"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Independent hotels management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-24702"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Resorts management</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-28921"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Vacation resorts</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                        <div className="banner light-blue">
                          <div className="banner-description">
                            See how the Proscene Solution
                            works for you
                          </div>
                          <a className="btn" href="/bookDemo">
                            Book a demo
                          </a>
                        </div>
                      </div>
                      <div className="tab-header school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children">
                        <a
                          href="/automationSolutions"
                          data-tab="20831"
                        >
                          <span>Automation Solutions</span>
                        </a>
                      </div>                      
                      <div
                        id="tab-20831"
                        className="tab-pane school-management style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                      >
                        <div className="sub-menu-wrapper">
                          <ul className="sub-menu">
                            <li
                              id="menu-item-29128"
                              className="one-row menu-item menu-item-type-custom menu-item-object-custom"
                            >
                              <div className="block-area apricot">
                                <div className="block-area-image">
                                  {/* <img src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20281%20150'%3E%3C/svg%3E" className="menu-item-image" width="281" height="150" alt="" data-lazy-src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg"><noscript><img src="https://www.priority-software.com/wp-content/uploads/2024/03/10-reasons-for-choosing-priority-2-281x150.jpg" className="menu-item-image" width="281" height="150" alt=""></noscript> */}
                                </div>
                                <div className="item-content-area">
                                  <div className="item-content-area-title dark">
                                    10 Reasons for choosing Priority
                                  </div>
                                  <div className="item-content-area-description"></div>
                                  <div className="item-content-area-button">
                                    <a
                                      href=""
                                      className="btn blue"
                                    >
                                      Read more
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li
                              id="menu-item-20834"
                              className="one-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children"
                            >
                              <a href="#">
                                <span>Features</span>
                              </a>
                              <div className="sub-menu-wrapper">
                                <ul className="sub-menu">
                                  <li
                                    id="menu-item-20833"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Teachers</span>
                                    </a>
                                  </li>
                                  <li
                                    id="menu-item-20832"
                                    className="menu-item menu-item-type-post_type menu-item-object-page"
                                  >
                                    <a href="">
                                      <span>Students and Parents</span>
                                    </a>
                                  </li>{" "}
                                </ul>
                              </div>
                            </li>{" "}
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20835"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/sectors">
                    <span>Sectors</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-32670"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue custom-image">
                            <div className="block-image">
                              <img src={solutionsimg} className="menu-item-image" style={{borderRadius:'10px'}} alt="" data-lazy-src=""></img>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                Recognized as the top AV Solution in 2025
                              </div>
                              <div className="item-content-area-description">
                                Insight Report on AV Solutions for SMBs
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="/contact"
                                  className="btn blue p-2"
                                >
                                  Contact us
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-33327"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/corporate"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Corporate</span>
                            </span>
                            <span className="item-content-area-title">
                              Find the perfect ERP partner to help you unlock
                              the full potential of your business
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20837"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/education"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Education
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Grow your business by joining Priority's extensive
                              Partner Network
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20838"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/publicSector"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Public Sector
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Utilize Priority’s global reach and expertise to
                              identify new opportunities
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20839"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/healthcare"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Healthcare</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority utilizes the AWS global network to
                              dynamically allocate resources and optimize the
                              system's performance
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20840"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/legalCollaboration"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">
                                Legal Collaboration
                              </span>
                            </span>
                            <span className="item-content-area-title">
                              Explore our network of technology partners and
                              discover new solutions and API's
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20841"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/company">
                    <span>Company</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-31865"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="/case-studies">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="160"
                                  height="160"
                                  viewBox="0 0 160 160"
                                  fill="none"
                                >
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="79.5"
                                    fill="#E3EEFF"
                                    fill-opacity="0.8"
                                    stroke="#3B37E6"
                                  ></circle>
                                  <path
                                    d="M114 76.5359C116.667 78.0755 116.667 81.9245 114 83.4641L66 111.177C63.3333 112.717 60 110.792 60 107.713L60 52.2872C60 49.208 63.3333 47.2835 66 48.8231L114 76.5359Z"
                                    fill="#3B37E6"
                                  ></path>
                                </svg>
                                <img src={solutionsimg} className="menu-item-image" style={{borderRadius:'10px'}} alt="" data-lazy-src=""></img>
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title dark">
                                See how K24 transformed their operational
                                efficiency and control
                              </div>
                              <div className="item-content-area-description"></div>
                              <div className="item-content-area-button">
                                <a
                                  href="/bookDemo"
                                  className="btn blue p-2"
                                >
                                  Want to know more?
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20844"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/about"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">About us</span>
                            </span>
                            <span className="item-content-area-title">
                              Priority specializes in providing organizations
                              with cutting-edge cloud-based business management
                              solutions.
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20842"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/case-studies"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Case studies</span>
                            </span>
                            <span className="item-content-area-title">
                              Real world examples of how forward-thinking
                              businesses use Priority to improve and grow
                            </span>
                          </a>
                        </li>
                        {/* <li
                          id="menu-item-20843"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        > */}
                          {/* <a
                            href=""
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Events</span>
                            </span>
                            <span className="item-content-area-title">
                              Join us at upcoming industry events to unlock new
                              insights and see Priority live!{" "}
                            </span>
                          </a> */}
                        {/* </li> */}
                        {/* <li
                          id="menu-item-20846"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href=""
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">News</span>
                            </span>
                            <span className="item-content-area-title">
                              Latest company updates, announcements, and
                              featured stories
                            </span>
                          </a>
                        </li> */}
                        {/* <li
                          id="menu-item-20845"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href=""
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Careers</span>
                            </span>
                            <span className="item-content-area-title">
                              Because great work starts with great people.
                            </span>
                          </a>
                        </li> */}
                        <li
                          id="menu-item-23000"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/contact"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Contact us</span>
                            </span>
                            <span className="item-content-area-title">
                              With offices and support worldwide, we are here
                              for you - let's connect!
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20847"
                  className="parts-menu menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children"
                >
                  <a href="/services">
                    <span>Services</span>
                  </a>
                  <div className="sub-menu-wrapper">
                    <ul className="sub-menu">
                      <div className="first-item-wrapper">
                        <li
                          id="menu-item-36405"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <div className="block-area blue">
                            <div className="block-area-image">
                              <a href="/bookDemo">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="160"
                                  height="160"
                                  viewBox="0 0 160 160"
                                  fill="none"
                                >
                                  <circle
                                    cx="80"
                                    cy="80"
                                    r="79.5"
                                    fill="#E3EEFF"
                                    fill-opacity="0.8"
                                    stroke="#3B37E6"
                                  ></circle>
                                  <path
                                    d="M114 76.5359C116.667 78.0755 116.667 81.9245 114 83.4641L66 111.177C63.3333 112.717 60 110.792 60 107.713L60 52.2872C60 49.208 63.3333 47.2835 66 48.8231L114 76.5359Z"
                                    fill="#3B37E6"
                                  ></path>
                                </svg>
                                <img src={solutionsimg} className="menu-item-image" style={{borderRadius:'10px'}} alt="" data-lazy-src=""></img>
                              </a>
                            </div>
                            <div className="item-content-area">
                              <div className="item-content-area-title purple">
                                Proscene product tour
                              </div>
                              <div className="item-content-area-description">
                                Discover how Proscene’s powerful features
                              </div>
                              <div className="item-content-area-button">
                                <a
                                  href="/bookDemo"
                                  className="btn blue p-2"
                                >
                                  Let's go
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                      <div className="other-items-wrapper">
                        <li
                          id="menu-item-20849"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/unifiedCommunications"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Unified Communications</span>
                            </span>
                            <span className="item-content-area-title">
                              Explore latest insights, trends, and updates in
                              business and technology
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20850"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/trainingAndSupport"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Training And Support</span>
                            </span>
                            <span className="item-content-area-title">
                              Browse and view brochures for detailed information
                              on our products, services, and solutions
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20851"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/onSiteSupport"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">On-Site Support</span>
                            </span>
                            <span className="item-content-area-title">
                              Tune in for in-depth knowledge, industry trends,
                              and expert insights
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20852"
                          className="menu-item menu-item-type-custom menu-item-object-custom"
                        >
                          <a
                            href="/equipmentRepair"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Equipment Repair</span>
                            </span>
                            <span className="item-content-area-title">
                              Browse our video library for product demos,
                              stories and advice
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20848"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/leasing"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Leasing</span>
                            </span>
                            <span className="item-content-area-title">
                              Commonly asked questions and answers to help you
                              reach your full potential
                            </span>
                          </a>
                        </li>
                        <li
                          id="menu-item-20854"
                          className="menu-item menu-item-type-post_type menu-item-object-page"
                        >
                          <a
                            href="/videoConferenceRental"
                            className="item-link"
                          >
                            <span className="item-title-area">
                              <span className="item-title">Video Conference Rental</span>
                            </span>
                            <span className="item-content-area-title">
                              Dive into in-depth blog posts for unique
                              perspectives, expert opinions and great tips
                            </span>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </div>
                </li>
                <li
                  id="menu-item-20853"
                  className="menu-item menu-item-type-custom menu-item-object-custom"
                >
                  <a href="/support">
                    <span>Support</span>
                  </a>
                </li>
              </ul>
            </nav>
            

            <div className="site-header__button-wrapper">
              <a
                href="/bookDemo"
                className="site-header__button"
              >
                Get a Demo
              </a>
            </div>

            <button
              type="button"
              className={`site-header__mobile-menu-btn js mobile-menu-btn ${
                isMobileMenuOpen ? "open" : ""
              }`}
              aria-label="Mobile nenu"
              title="Mobile menu"
              data-role="mobile-menu-action"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <div
        className="mobile-menu-overlay js-mobile-menu-overlay"
        data-role="mobile-menu-action"
      ></div>
      <div id="mobile-menu"
      className={`mobile-menu js-mobile-menu ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="mobile-menu__container">
          <nav className="mobile-menu__nav">
            <ul
              id="menu-mobile-en"
              className="mobile-menu__menu sub-menu js-menu-wrapper"
            >
              <li
                id="menu-item-20880"
                onClick={() => handleToggle("menu-item-20880")}
  className={`mega-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20880 ${
    activeMenu["menu-item-20880"] ? "active" : ""
  }`}
              >
                {/* added active above */}
                <a
                  href="#"
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                  onClick={(e) => e.preventDefault()}
                >
                  Solutions<span className="sub-menu-toggle"></span>
                </a>
                <ul className={`sub-menu ${
      activeMenu["menu-item-20880"] ? "active" : ""
    }`}
    style={{
      maxHeight: activeMenu["menu-item-20880"] ? "241px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    }}
    onClick={() => handleToggle("menu-item-20880")} >
                  <li
                    id="menu-item-20881"
                    className="style-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20881 active"
                  >
                    <a
                      href=""
                      data-role="sub-mega-menu-action"
                    >
                      ERP
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href=""
                          className="menu-item-parent-link"
                        >
                          ERP
                        </a>{" "}
                        <li
                          id="menu-item-20882"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20882"
                        >
                          <a href="">Products</a>
                          <ul
                            className="sub-menu "
                            // style={{ maxHeight: "241px" }}
                            // Has active above
                          >
                            <li
                              id="menu-item-20883"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20883"
                            >
                              <a href="">
                                Analytics and Business Insights
                              </a>
                            </li>
                            <li
                              id="menu-item-31544"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-31544"
                            >
                              <a href="">
                                Cloud ERP
                              </a>
                            </li>
                            <li
                              id="menu-item-20884"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20884"
                            >
                              <a href="">
                                CRM and Sales
                              </a>
                            </li>
                            <li
                              id="menu-item-20885"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20885"
                            >
                              <a href="">
                                Equipment Rental
                              </a>
                            </li>
                            <li
                              id="menu-item-20886"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20886"
                            >
                              <a href="">
                                Financial Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20887"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20887"
                            >
                              <a href="">
                                Human Resources Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20888"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20888"
                            >
                              <a href="">
                                Mobile ERP
                              </a>
                            </li>
                            <li
                              id="menu-item-20889"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20889"
                            >
                              <a href="">
                                Project Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20890"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20890"
                            >
                              <a href="">
                                Portal Generator
                              </a>
                            </li>
                            <li
                              id="menu-item-20891"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20891"
                            >
                              <a href="">
                                Priority Payments
                              </a>
                            </li>
                            <li
                              id="menu-item-20892"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20892"
                            >
                              <a href="">
                                Supply Chain Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20893"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20893"
                            >
                              <a href="">
                                Warehouse management
                              </a>
                            </li>
                            <li
                              id="menu-item-20894"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20894"
                            >
                              <a href="">
                                Localizations
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20895"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20895"
                        >
                          <a href="#">Industries</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20896"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20896"
                            >
                              <a href="">
                                Agriculture
                              </a>
                            </li>
                            <li
                              id="menu-item-20897"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20897"
                            >
                              <a href="">
                                Construction
                              </a>
                            </li>
                            <li
                              id="menu-item-20898"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20898"
                            >
                              <a href="">
                                Electronics
                              </a>
                            </li>
                            <li
                              id="menu-item-20899"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20899"
                            >
                              <a href="">
                                Financial Services
                              </a>
                            </li>
                            <li
                              id="menu-item-20900"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20900"
                            >
                              <a href="">
                                Healthcare
                              </a>
                            </li>
                            <li
                              id="menu-item-20901"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20901"
                            >
                              <a href="">
                                Manufacturing
                              </a>
                            </li>
                            <li
                              id="menu-item-20902"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20902"
                            >
                              <a href="">
                                Medical Devices
                              </a>
                            </li>
                            <li
                              id="menu-item-20903"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20903"
                            >
                              <a href="">
                                Municipalities
                              </a>
                            </li>
                            <li
                              id="menu-item-20904"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20904"
                            >
                              <a href="">
                                Nonprofits
                              </a>
                            </li>
                            <li
                              id="menu-item-20905"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20905"
                            >
                              <a href="">
                                Pharmaceutical
                              </a>
                            </li>
                            <li
                              id="menu-item-20906"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20906"
                            >
                              <a href="">
                                Professional Services
                              </a>
                            </li>
                            <li
                              id="menu-item-20907"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20907"
                            >
                              <a href="">
                                Retail
                              </a>
                            </li>
                            <li
                              id="menu-item-20908"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20908"
                            >
                              <a href="">
                                Software and Technology
                              </a>
                            </li>
                            <li
                              id="menu-item-20909"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20909"
                            >
                              <a href="">
                                Wholesale & Distribution
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20910"
                    className="style-purple menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20910"
                  >
                    <a
                      href=""
                      data-role="sub-mega-menu-action"
                    >
                      Retail ManagementTrue omnichannel experience
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href=""
                          className="menu-item-parent-link"
                        >
                          Retail ManagementTrue omnichannel experience
                        </a>{" "}
                        <li
                          id="menu-item-20911"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20911"
                        >
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20912"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20912"
                            >
                              <a href="">
                                Customer loyalty management
                              </a>
                            </li>
                            <li
                              id="menu-item-20913"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20913"
                            >
                              <a
                                href=""
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                E-commerce
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20914"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20914"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    OneCore Full Cart Mode
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-20915"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20915"
                            >
                              <a href="">
                                Gift Card Management
                              </a>
                            </li>
                            <li
                              id="menu-item-20916"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20916"
                            >
                              <a
                                href=""
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                Head Office
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20917"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20917"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Inventory control
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20918"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20918"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Purchasing
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20919"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20919"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Omnichannel CRM
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-20920"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20920"
                            >
                              <a href="">
                                Order Management
                              </a>
                            </li>
                            <li
                              id="menu-item-27053"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27053"
                            >
                              <a href="">
                                Priority MyBranch
                              </a>
                            </li>
                            <li
                              id="menu-item-20921"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20921"
                            >
                              <a
                                href=""
                                className="nav__link"
                                data-role="show-sub-menu"
                                title=""
                              >
                                POS & Back Office
                                <span className="sub-menu-toggle"></span>
                              </a>
                              <ul className="sub-menu">
                                <li
                                  id="menu-item-20922"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20922"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Priority POS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20923"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20923"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    TPOS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20924"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20924"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    QPOS
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20925"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20925"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Self Service Kiosk
                                  </a>
                                </li>
                                <li
                                  id="menu-item-20926"
                                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20926"
                                >
                                  <a
                                    href=""
                                    className="nav__link"
                                    title=""
                                  >
                                    Mobile Back Office
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li
                              id="menu-item-27777"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-27777"
                            >
                              <a href="">
                                Priority MyBranch
                              </a>
                            </li>
                            <li
                              id="menu-item-20927"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20927"
                            >
                              <a href="">
                                Replenishment
                              </a>
                            </li>
                            <li
                              id="menu-item-20928"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20928"
                            >
                              <a href="">
                                Retail ERP Software
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20929"
                          className="two-columns menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20929"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20930"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20930"
                            >
                              <a href="">
                                Apparel & Footwear
                              </a>
                            </li>
                            <li
                              id="menu-item-20931"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20931"
                            >
                              <a href="">
                                Bookstores & Record shops
                              </a>
                            </li>
                            <li
                              id="menu-item-20932"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20932"
                            >
                              <a href="">
                                Building Material, Garden Equipment, and
                                Hardware
                              </a>
                            </li>
                            <li
                              id="menu-item-20933"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20933"
                            >
                              <a href="">
                                Cellular, Electronics & Computers
                              </a>
                            </li>
                            <li
                              id="menu-item-20934"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20934"
                            >
                              <a href="">
                                Convenience Stores
                              </a>
                            </li>
                            <li
                              id="menu-item-20935"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20935"
                            >
                              <a href="">
                                Cosmetics
                              </a>
                            </li>
                            <li
                              id="menu-item-20936"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20936"
                            >
                              <a href="">
                                Duty Free
                              </a>
                            </li>
                            <li
                              id="menu-item-20937"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20937"
                            >
                              <a href="">
                                Furniture & Home Decor
                              </a>
                            </li>
                            <li
                              id="menu-item-20938"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20938"
                            >
                              <a href="">
                                Electrical Appliances & Lighting Showrooms
                              </a>
                            </li>
                            <li
                              id="menu-item-20939"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20939"
                            >
                              <a href="">
                                Jewelry
                              </a>
                            </li>
                            <li
                              id="menu-item-20940"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20940"
                            >
                              <a href="">
                                Liquor / Spirits / Tobacco
                              </a>
                            </li>
                            <li
                              id="menu-item-20941"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20941"
                            >
                              <a href="">
                                Office supplies & general retail
                              </a>
                            </li>
                            <li
                              id="menu-item-20942"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20942"
                            >
                              <a href="">
                                Pet and Animal Supplies
                              </a>
                            </li>
                            <li
                              id="menu-item-20943"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20943"
                            >
                              <a href="">
                                Sporting Goods
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20944"
                    className="style-light-blue menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20944"
                  >
                    <a
                      href=""
                      data-role="sub-mega-menu-action"
                    >
                      Hospitality Management
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href=""
                          className="menu-item-parent-link"
                        >
                          Hospitality Management
                        </a>{" "}
                        <li
                          id="menu-item-20945"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20945"
                        >
                          <a href="#">Products</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20946"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20946"
                            >
                              <a href="">
                                Optima PMS
                              </a>
                            </li>
                            <li
                              id="menu-item-20947"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20947"
                            >
                              <a href="">
                                Optima Cloud PMS
                              </a>
                            </li>
                            <li
                              id="menu-item-20949"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20949"
                            >
                              <a href="">
                                Channel Manager
                              </a>
                            </li>
                            <li
                              id="menu-item-24801"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24801"
                            >
                              <a href="">
                                Optima CRM
                              </a>
                            </li>
                            <li
                              id="menu-item-24800"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24800"
                            >
                              <a href="">
                                Optima POS
                              </a>
                            </li>
                            <li
                              id="menu-item-20948"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20948"
                            >
                              <a href="">
                                Optima Marketplace
                              </a>
                            </li>
                            <li
                              id="menu-item-26836"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26836"
                            >
                              <a href="">
                                Optima Event Management
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li
                          id="menu-item-20950"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20950"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-24796"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24796"
                            >
                              <a href="">
                                Boutique hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-24797"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24797"
                            >
                              <a href="">
                                Business hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-26835"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26835"
                            >
                              <a href="">
                                Hostels management
                              </a>
                            </li>
                            <li
                              id="menu-item-20952"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20952"
                            >
                              <a href="">
                                Hotel chains and groups management
                              </a>
                            </li>
                            <li
                              id="menu-item-20951"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20951"
                            >
                              <a href="">
                                Independent hotels management
                              </a>
                            </li>
                            <li
                              id="menu-item-24799"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-24799"
                            >
                              <a href="">
                                Resorts management
                              </a>
                            </li>
                            <li
                              id="menu-item-28924"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-28924"
                            >
                              <a href="">
                                Vacation resorts
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li
                    id="menu-item-20953"
                    className="style-coral menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20953"
                  >
                    <a
                      href=""
                      data-role="sub-mega-menu-action"
                    >
                      School Management
                    </a>
                    <div className="fixed-menu-wrapper js-fixed-menu-wrapper">
                      <ul className="sub-menu">
                        <button
                          className="return-back"
                          data-role="sub-mega-menu-action"
                        >
                          Solutions
                        </button>
                        <a
                          href=""
                          className="menu-item-parent-link"
                        >
                          School Management
                        </a>{" "}
                        <li
                          id="menu-item-20954"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-20954"
                        >
                          <a href="#">Categories</a>
                          <ul className="sub-menu">
                            <li
                              id="menu-item-20955"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20955"
                            >
                              <a href="">
                                Teachers
                              </a>
                            </li>
                            <li
                              id="menu-item-20956"
                              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20956"
                            >
                              <a href="">
                                Students and Parents
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20957"
                onClick={() => handleToggle("menu-item-20957")}
  className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20957 ${
    activeMenu["menu-item-20957"] ? "active" : ""
  }`}
              >
                <a
                  href=""
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                  onClick={(e) => e.preventDefault()}
                >
                  Partners<span className="sub-menu-toggle"></span>
                </a>
                <ul 
                className={`sub-menu ${
                  activeMenu["menu-item-20957"] ? "active" : ""
                }`}
                style={{
                  maxHeight: activeMenu["menu-item-20957"] ? "241px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
                onClick={() => handleToggle("menu-item-20957")}
                >
                  <li
                    id="menu-item-20958"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20958"
                  >
                    <a href="">
                      Hospitality marketplace
                    </a>
                  </li>
                  <li
                    id="menu-item-20959"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20959"
                  >
                    <a href="">
                      Become a partner
                    </a>
                  </li>
                  <li
                    id="menu-item-20960"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20960"
                  >
                    <a href="">
                      Technology partners
                    </a>
                  </li>
                  <li
                    id="menu-item-20961"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20961"
                  >
                    <a href="">
                      AWS partner
                    </a>
                  </li>
                  <li
                    id="menu-item-20962"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20962"
                  >
                    <a href="">
                      Priority Market
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20963"
                onClick={() => handleToggle("menu-item-20963")}
  className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20963 ${
    activeMenu["menu-item-20963"] ? "active" : ""
  }`}
              >
                <a
                  href=""
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                  onClick={(e) => e.preventDefault()}
                >
                  Company<span className="sub-menu-toggle"></span>
                </a>
                <ul className={`sub-menu ${
      activeMenu["menu-item-20963"] ? "active" : ""
    }`}
    style={{
      maxHeight: activeMenu["menu-item-20963"] ? "241px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    }}>
                  <li
                    id="menu-item-20964"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20964"
                  >
                    <a href="">
                      About us
                    </a>
                  </li>
                  <li
                    id="menu-item-20965"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20965"
                  >
                    <a href="">
                      Case studies
                    </a>
                  </li>
                  <li
                    id="menu-item-20966"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20966"
                  >
                    <a href="">
                      Events
                    </a>
                  </li>
                  <li
                    id="menu-item-20967"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20967"
                  >
                    <a href="">News</a>
                  </li>
                  <li
                    id="menu-item-20968"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20968"
                  >
                    <a href="">
                      Careers
                    </a>
                  </li>
                  <li
                    id="menu-item-26837"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26837"
                  >
                    <a href="">
                      Contact us
                    </a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20969"
                onClick={() => handleToggle("menu-item-20969")}
  className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-20969 ${
    activeMenu["menu-item-20969"] ? "active" : ""
  }`}
              >
                <a
                  href=""
                  className="nav__link"
                  data-role="show-sub-menu"
                  title=""
                  onClick={(e) => e.preventDefault()} 
                >
                  Resources<span className="sub-menu-toggle"></span>
                </a>
                <ul className={`sub-menu ${
      activeMenu["menu-item-20969"] ? "active" : ""
    }`}
    style={{
      maxHeight: activeMenu["menu-item-20969"] ? "241px" : "0px",
      overflow: "hidden",
      transition: "max-height 0.3s ease",
    }}>
                  <li
                    id="menu-item-20970"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20970"
                  >
                    <a href="">
                      Articles
                    </a>
                  </li>
                  <li
                    id="menu-item-20971"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20971"
                  >
                    <a href="">
                      Brochures
                    </a>
                  </li>
                  <li
                    id="menu-item-26843"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-26843"
                  >
                    <a href="">
                      Webinars
                    </a>
                  </li>
                  <li
                    id="menu-item-20973"
                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20973"
                  >
                    <a href="">
                      Videos
                    </a>
                  </li>
                  <li
                    id="menu-item-20974"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20974"
                  >
                    <a href="">
                      FAQ
                    </a>
                  </li>
                  <li
                    id="menu-item-20975"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-20975"
                  >
                    <a href="">Blog</a>
                  </li>
                </ul>
              </li>
              <li
                id="menu-item-20976"
                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-20976"
              >
                <a href="">Support</a>
              </li>
            </ul>
          </nav>
          <a
            href=""
            className="mobile-menu__button"
          >
            Get a Demo
          </a>{" "}
        </div>
      </div>
    </header>
  );
}

export default Navbar;