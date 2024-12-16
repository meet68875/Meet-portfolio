import React from "react";
import "../Component/Services.css";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
function Services() {
  return (
    <>
      <div className="heading" id="education">
        <h5>EDUCATION </h5>
        <h2>
          <span class="heading-border"></span>EDUCATION
          <span class="heading-border"></span>
        </h2>

        <div className="container education">
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#ef7641",
                    height: "15px",
                    width: "15px",
                  }}
                />

                <TimelineConnector
                  style={{ backgroundColor: "#ef7641", height: "8rem" }}
                />
              </TimelineSeparator>
              <TimelineContent style={{ height: "12em" }}>
                <Typography variant="h1" style={{ fontSize: "2vw" }}>
                  SHREE SWAMINARAYAN GURUKUL OF COMPUTER SCIENCE, BHAVNAGAR
                </Typography>
                2020- 2023
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  style={{
                    backgroundColor: "#ef7641",
                    height: "15px",
                    width: "15px",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h1" style={{ fontSize: "2vw" }}>
                  B M COMMERCE HIGH SCHOOL, BHAVNAGAR
                </Typography>
                2020 - 2023
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default Services;
