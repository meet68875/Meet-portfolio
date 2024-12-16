import React from "react";
import "./Resume.css";
import resumeImage from "./Meet_Shah_Resume_page-0001.jpg";
import resumeImage1 from "./Meet_Shah_Resume_page-0002.jpg";
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";

function Resume() {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <div className="heading">
        <h5>RESUME</h5>
        <h2>
          <span className="heading-border"></span>MY RESUME
          <span className="heading-border"></span>
        </h2>
      </div>

      {/* Resume Preview Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px", // Add spacing below the header
          width: "100%",

        }}
      >
        {/* Cards in a Row */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ width: "100%", marginBottom: "20px" }}
        >
          {/* First Resume Page */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={resumeImage}
                alt="Resume Page 1 Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderBottom: "1px solid #ddd",
                }}
              />
            </Card>
          </Grid>

          {/* Second Resume Page */}
          <Grid item xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <CardMedia
                component="img"
                image={resumeImage1}
                alt="Resume Page 2 Preview"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderBottom: "1px solid #ddd",
                }}
              />
            </Card>
          </Grid>
        </Grid>

        {/* Download Button */}
        <Button
          variant="contained"
          href="/Meet-Shah-Resume.pdf"
          download="Meet_Shah_Resume.pdf"
          sx={{
            backgroundColor: "#ea4020",
            color: "#fff",
            fontSize: "16px",
            padding: "10px 20px",
            textTransform: "uppercase",
            fontWeight: 600,
            borderRadius: "5px",
            marginBottom:"5rem",
            "&:hover": {
              backgroundColor: "#c32e18",
              color:"white"
            },
          }}
        >
          Download Resume
        </Button>
      </Box>
    </div>
  );
}

export default Resume;
