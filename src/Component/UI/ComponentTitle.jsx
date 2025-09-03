import React, { forwardRef } from 'react';
import { Box, Typography } from "@mui/material";
import './ComponentTitle.css';

/**
 * A reusable component for section titles.
 * @param {object} props - The component props.
 * @param {string} props.title - The main title text.
 * @param {Ref} ref - A forwarded ref for the main container.
 */
const ComponentTitle = forwardRef(({ title }, ref) => {
  return (
    <Box
      className="heading"
      ref={ref} // Attach the forwarded ref to the root element
      sx={{
        mb: 4,
        position: 'relative',
      }}
    >
      <Typography variant="h5" sx={{ textTransform: "uppercase" }}>
        {title}
      </Typography>
      <Typography variant="h2">
        <span className="heading-border"></span>
        {title.toUpperCase()}
        <span className="heading-border"></span>
      </Typography>
    </Box>
  );
});

export default ComponentTitle;