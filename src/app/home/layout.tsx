import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import GoToTop from '@/app/components/GoToTop';
export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>

            <Header />

            {children}
            {/* <GoToTop /> */}
            <GoToTop />
            <Footer />
        </>
    );
}