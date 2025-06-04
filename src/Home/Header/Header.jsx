import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Header.css";
const Header = () => {
  return (
    <div className="home-page-header">
      <div className="page-header-chile">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{ margin: "0 0 10px 0" }}
        >
          Classic Exclusive
        </motion.p>

        {/* eslint-disable-next-line react/no-unescaped-entities */}

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontSize: "40px",
            fontWeight: "800",
            fontFamily: "'Jost', sans-serif",
            marginTop: "0",
          }}
        >
          Woman's Collection
        </motion.h1>
        <Link className="header-Btn" to="/shop">
          Show More
        </Link>
      </div>

      <img
        className="banner-pic"
        src="../../../public/img/homeBanner.png"
        alt=""
      />
    </div>
  );
};

export default Header;
