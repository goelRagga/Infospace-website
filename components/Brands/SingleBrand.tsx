import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Brand } from "@/types/brand";
import { motion } from "framer-motion";

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, href, name, imageLight, id } = brand;

  return (
    <>
      <motion.a
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_top relative mx-4 block h-[80px] w-[200px] rounded-md bg-white  shadow-[0_0_10px_rgba(0,0,0,0.1)]"
      >
        <Image className="rounded-md px-2 py-1" src={image} alt={name} fill />
      </motion.a>
    </>
  );
};

export default SingleBrand;
