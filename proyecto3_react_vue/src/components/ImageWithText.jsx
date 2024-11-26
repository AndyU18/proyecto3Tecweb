import React from "react";
import { motion } from "framer-motion";

export default function ImageWithText() {
  return (
    <section style={{ display: "flex", alignItems: "center", padding: "40px 0" }}>
      <motion.img
        src="/images/sports.jpg"
        alt="Sports"
        style={{ width: "50%", height: "auto", borderRadius: "10px" }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        style={{ marginLeft: "20px", flex: 1 }}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Calidad que inspira</h2>
        <p>
          En Llamita Sports, ofrecemos ropa que se adapta a tus necesidades, brindándote comodidad
          y estilo.
        </p>
      </motion.div>
    </section>
  );
}
