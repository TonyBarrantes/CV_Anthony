import React from 'react';
import Link from 'next/link';

const Footer = () => {
    const footerStyle: React.CSSProperties = {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #e9ecef',
    };

    const linkStyle: React.CSSProperties = {
        color: '#007bff',
        textDecoration: 'none',
        margin: '0 10px',
    };

    return (
        <footer style={footerStyle}>
            <Link href="tel:+506 84912832" style={linkStyle}>Teléfono</Link> |
            <Link href="https://www.Instagram.com/tonybarrantes09" legacyBehavior>
                <a target="_blank" style={linkStyle}>Instagram</a>
            </Link> |
            <Link href="https://www.facebook.com/anthony.barrantesrojas.56?mibextid=LQQJ4d" style={linkStyle}>Facebook</Link> |
            <Link href="https://twitter.com/Tony_barra09" legacyBehavior>
                <a target="_blank" style={linkStyle}>Twitter</a>
            </Link>
        </footer>
    );
};

export default Footer;

