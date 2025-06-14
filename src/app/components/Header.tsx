import React from 'react';
import StickyNavbar from '@/app/components/StickyNavbar';
import HeaderInfoSection from '@/app/components/HeaderInfoSection';

const Header = () => {
    return (
        <div className="relative">
            
            <HeaderInfoSection />
            <StickyNavbar />            
        </div>
    );
}
export default Header;