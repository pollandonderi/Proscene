import React from "react";
import './Footer.css';
import logo from './assets/log.png';
import avixamember from './assets/avixamember.png';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Copyright from "./Copyright";

const Footer = () => {
    const solutionsSubMenuItems = [
        { label: 'Audio Visual Integration', href: '/avIntegration' },
        { label: 'Collaboration Solutions', href: '/collaborationSolutions' },
        { label: 'Digital Media', href: '/digitalMedia' },
        { label: 'Automation Solutions', href: '/automationSolutions' },
        { label: 'Interactive Technology', href: '/interactiveTechnology' },
        {label: 'About', href: '/about'}
    ];

    const sectorsSubMenuItems = [
        { label: 'Corporate', href: '/corporate' },
        { label: 'Education', href: '/education' },
        { label: 'Public Sector', href: '/publicSector' },
        { label: 'Healthcare', href: '/healthcare' },
        { label: 'Legal Collaboration', href: '/legalCollaboration' },
    ];

    const servicesSubMenuItems = [
        { label: 'Unified Communications', href: '/unifiedCommunications' },
        { label: 'Training and Support', href: '/trainingAndSupport' },
        { label: 'On-site Support', href: '/onSiteSupport' },
        { label: 'Equipment Repair', href: '/equipmentRepair' },
        { label: 'Leasing', href: '/leasing' },
        { label: 'Video Conference Rental', href: '/videoConferenceRental' },
    ];

    return (
        <div className="footer">
            <main className="main-container max-w-7xl mx-auto">
                <div className="logo" style={{margin:'10px 60px 10px 10px'}}>
                    <Link to="/">
                        <img src={logo} alt="Company Logo" />
                    </Link>
                </div>

                {/* Solutions Section */}
                <div className="footer-section">
                    <h3 className="h3footer">Solutions</h3>
                    {solutionsSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Sectors Section */}
                <div className="footer-section">
                    <h3>Sectors</h3>
                    {sectorsSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Services Section */}
                <div className="footer-section">
                    <h3>Services</h3>
                    {servicesSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Partners Section */}
                {/* <div className="footer-section">
                    <h3>Partners</h3>
                    {partnersSubMenuItems.map(item => (
                        <Link key={item.href} to={item.href} className="footer-link">
                            {item.label}
                        </Link>
                    ))}
                </div> */}

                {/* Social Media To proscene*/}
                <div className="social-icons flex">
                    <a href="https://www.facebook.com/proscenesystems" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://x.com/AudioVisualEA" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.linkedin.com/company/proscene-systems-ltd/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.instagram.com/proscenesystems/?__pwa=1#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>                
            </main>
            
            <div className="legal-links max-w-7xl mx-auto ">
                <div className="logo" style={{margin:'10px 60px 10px 10px'}}>
                    <Link to="/">
                        <img src={avixamember} alt="Avixa Logo" />
                    </Link>
                </div>                
                <div className="flex flex-col sm:flex-row w-full" style={{justifyContent:'space-between' ,gap:'clamp(2rem, 1.9322rem + 0.339vw, 2.25rem)'}}>
                
                    <div className="flex flex-col sm:flex-row" style={{gap:'clamp(2rem, 1.9322rem + 0.339vw, 2.25rem)'}}>
                        <Link to="/terms-and-conditions" className="footer-link" style={{color:'white'}}>Terms & Conditions</Link>
                        <Link to="/privacy-policy" className="footer-link" style={{color:'white'}}>Privacy Policy</Link>
                    </div>
                    <div className="mr-5"><Copyright/></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
