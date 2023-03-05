import { MotionConfig } from 'framer-motion';
import React from 'react'
import StyledComponent from '../styles/StyledComponent';
import {motion} from "framer-motion";
import {StyledMN} from "../styles/NavStyles/StyledMN";

const Navbar = () => { 
  return (
    <StyledComponent>
      <motion.a 
        id="logo"
        href="#home"
      >
        <StyledMN size="40" title="Marina Nicolai logo" />
      </motion.a>
    <h1>Navbar</h1>
    </StyledComponent>
  )
}

export default Navbar