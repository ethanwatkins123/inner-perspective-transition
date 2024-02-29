import React from "react";
import Navbar from "../components/Navbar";
import Inner from "../components/layout/Inner";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Inner>
        <Navbar />
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          voluptatem debitis voluptatum iure libero recusandae eius iusto at
          vero molestias! Ad, nemo cum sequi illo laboriosam ipsa ea itaque
          officiis.
        </p>
      </Inner>
    </>
  );
}
