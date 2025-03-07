import { Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useThemeContext } from "../context/ThemeContextProvider";
import SKILL_SETS from '../data/skills.json'

const Skills = () => {
  const { darkMode } = useThemeContext();

    return (
        <>
          <Typography variant="h4" style={{ marginTop: "2rem" }}>
            Core Skills
          </Typography>
          <Grid container spacing={2} style={{ marginTop: "1rem" }}>
            {SKILL_SETS.map(skill => (
              <Grid item key={skill} size={{xs: 6, sm: 4, md: 3}}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <Card style={{ backgroundColor: darkMode ? "#424242" : "#f5f5f5" }}>
                    <CardContent>
                      <Typography variant="h6" align="center">{skill}</Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </>
    );
}

export default Skills;