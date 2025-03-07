import { IconButton, Typography } from "@mui/material";
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Contact = () => {
    return(
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <IconButton color="primary" href="https://github.com/NiranjanaBinoy" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton color="primary" href="https://www.linkedin.com/in/niranjana-binoy/" target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton color="primary" href="mailto:niranjanabinoy@gmail.com">
              <Email />
            </IconButton>
          </motion.div>
        </>
    )
};

export default Contact;