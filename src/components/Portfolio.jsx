import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Experience from "./Experience";
import Skills from "./Skills";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import { useThemeContext } from "../context/ThemeContextProvider";

export default function Portfolio() {
  const { darkMode, handleTheme } = useThemeContext();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Niranjana Binoy
            </Typography>
            <IconButton color="inherit" onClick={handleTheme}>
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container style={{ padding: "2rem 0" }}>
          {/* About Section */}
          <AboutMe />

          {/* Skills Section */}
          <Skills />

          {/* Projects Section */}
          <Projects />

          {/* Experience Section */}
          <Experience />

        </Container>
      </motion.div>
    </ThemeProvider>
  );
}
