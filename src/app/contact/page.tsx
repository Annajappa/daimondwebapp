import React from 'react'
import ConnectUs from "../components/ConnectUs";
import ContactInfo from '../components/ContactInfo';
import FAQSection from '../components/FAQSection';
import ViewWishlistFeatures from '../components/ViewWishListFeactures';
import JewelryShowcase from '../components/JewelaryShowCase';

const page = () => {
  return (
    <>
    <ConnectUs />
    <ContactInfo />
    <ViewWishlistFeatures/>
    <FAQSection />
    <JewelryShowcase />
    </>
  )
}

export default page