import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import EXPERIENCE from "../data/experience";
import { useThemeContext } from "../context/ThemeContextProvider";

const Experience = () => {
    const { darkMode } = useThemeContext();
    return (
        <>
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            Experience
          </Typography>
          <Grid container spacing={3} style={{ marginTop: "1rem" }}>
            {EXPERIENCE.map((experience) => (
              <Grid item size={{xs: 12}}>
                <motion.div whileHover={{ scale: 1.05 }}>
                    <Card style={{ backgroundColor: darkMode ? "#424242" : "#f5f5f5" }}>
                      <CardContent>
                        <Typography variant="h5">{experience.position} - {experience.company}</Typography>
                        <Typography variant="body2">{experience.startDate} - {experience.endDate}</Typography>
                        <Typography variant="body2" sx={{pt: 3}}>{experience.description}</Typography>
                        {experience.note && <Typography variant="body2" sx={{pt: 3}}>Note: {experience.note}</Typography>}
                      </CardContent>
                    </Card>
                </motion.div>
              </Grid>
          ))}
          </Grid>
        </>
    )
}

export default Experience;