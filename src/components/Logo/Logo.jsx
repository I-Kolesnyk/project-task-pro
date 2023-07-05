import { motion } from 'framer-motion';
import sprite from 'assets/sprite.svg';
import { StyledLogo, StyledWrapper, StyledSpanLogo } from './Logo.styled';

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: -100, rotate: -45 }}
      animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledWrapper>
        <StyledLogo width="32px" height="32px">
          <use href={`${sprite}#logo1`} />
        </StyledLogo>
        <StyledSpanLogo>Task Pro</StyledSpanLogo>
      </StyledWrapper>
    </motion.div>
  );
};

export default Logo;
