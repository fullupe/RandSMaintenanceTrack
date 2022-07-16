//import React from 'react'
import React, { useEffect } from "react";

function Adsense() {

    const loadAds = () => {
        try {
          if (typeof window !== "undefined") {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        } catch (error) {
          console.log("adsense error", error.message);
        }
      };
    
      useEffect(() => {
        loadAds();
      }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6532090720746655"
      data-ad-slot="4806443973"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  )
}

export default Adsense
