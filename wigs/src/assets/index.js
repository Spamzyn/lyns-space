// src/assets/index.js

// Importing existing images
import logo from './brand4.jpeg'; // Updated logo import
import heroImg from './menu1.jpg';
import aboutImg from './menu150.jpg';
import contactImg from './menu113.jpg';

// Importing wig images
import wig1 from './wig1.jpeg';
import wig2 from './wig2.jpeg';
import wig3 from './wig3.jpeg';
import wig4 from './wig4.jpeg';

// Exporting assets
export const assets = {
    logo,          // Logo image
    heroImg,       // Hero section image
    aboutImg,      // About Us section image
    contactImg,    // Contact Us section image
    wigs: {        // Wig images grouped under 'wigs'
        wig1,
        wig2,
        wig3,
        wig4,
    },
};
