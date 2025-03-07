import { Box, Typography } from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Contact from './Contact';

const AboutMe = () => {
    return (
        <>
            <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <Typography variant="h4" gutterBottom>
                    About Me
                  </Typography>
                  <Contact />
                </Box>
                <Typography variant="body1">
                  I'm a product-minded Software Engineer specializing in React, Node.js, TypeScript, and JavaScript, with experience in blockchain interactions. I build high-performance web applications and thrive in collaborative environments, turning ideas into impactful products.                
                </Typography>
            </motion.div>
        </>
    )
}

export default AboutMe;