import { Card, CardContent, CardHeader, CardMedia, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useThemeContext } from "../context/ThemeContextProvider";
import PROJECT from '../data/projects';

const Projects = () => {
  const { darkMode } = useThemeContext();


    return (
        <>
        <Typography variant="h4" style={{ marginTop: "2rem" }}>
            Projects
          </Typography>
          <Grid container spacing={3} style={{ marginTop: "1rem" }}>
            { PROJECT.map((project) => (
              <Grid item size={{xs: 12, sm: 6, md: 4}}>
                <motion.div whileHover={{ scale: 1.05, rotate: 2 }}>
                    <Card style={{ backgroundColor: darkMode ? "#424242" : "#f5f5f5" }}>
                      <CardHeader title={project.name} />
                      <CardContent>
                        <Typography variant="body2">{project.description}</Typography>
                        <Typography variant="body2" sx={{pt: 3}}>Tech Stack: {project.technologies.join(', ')}</Typography>
                        <Link href={project.url} style={{ display: "block", marginTop: "1rem" }}>
                          View Project
                        </Link>
                      </CardContent>
                    </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </>
    );
}

export default Projects;