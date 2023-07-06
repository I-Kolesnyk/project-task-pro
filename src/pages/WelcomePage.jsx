import { motion } from 'framer-motion';
import Welcome from 'components/Welcome/Welcome';
import { WelcomePageContainer, StyledLink } from './styled/WelcomePage.styled';

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <div>
        <Welcome />
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          <StyledLink to="/register">Registration</StyledLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <StyledLink to="/login">Log In</StyledLink>
        </motion.div>
      </div>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
