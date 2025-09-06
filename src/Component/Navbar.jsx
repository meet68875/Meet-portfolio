import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Project", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const underlineStyles = {
    position: "relative",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "0",
      height: "2px",
      backgroundColor: "#ea4020",
      transition: "width 0.3s ease-in-out",
    },
    "&:hover:after": {
      width: "calc(100% - 16px)", // Adjust width to be slightly smaller than the text
    },
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "#ffffff", boxShadow: "none", py: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
              color: "black",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.7rem" },
            }}
          >
            MEET SHAH
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                aria-label="menu"
                onClick={handleMenu}
                sx={{ color: "black" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                  "& .MuiPaper-root": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem
                    key={item.name}
                    onClick={handleClose}
                    component="a"
                    href={item.href}
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                    }}
                  >
                    {item.name}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  href={item.href}
                  sx={{
                    color: "black",
                    textTransform: "none",
                    fontWeight: 500,
                    mx: { md: 1, lg: 2 },
                    fontSize: { md: "1rem", lg: "1.1rem" },
                    ...underlineStyles,
                    "&:hover": {
                      bgcolor: "transparent",
                      color: "#ea4020",
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;