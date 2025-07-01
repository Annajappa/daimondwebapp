"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathname = usePathname();

  const value = pathname === "/contact" ? "contact" : "default";

  return <Footer value={value} />;
};

export default FooterWrapper;
