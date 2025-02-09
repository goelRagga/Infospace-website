"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <Marquee>
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </Marquee>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
