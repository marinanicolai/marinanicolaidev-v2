import styled from "styled-components";
import { motion } from "framer-motion";

const StyledComponent = styled(motion.nav)`
  ${({ theme }) => theme.mixins.flexBetween};
  color: ${({ theme }) => theme.color.textPrimary + "b2"};
`;

export default StyledComponent;
