import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  Button,
  Chip,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AnalyticsIcon from "@mui/icons-material/Analytics";

export default function Navbar({
  user,
  setIsLoggedIn,
  onMenuClick,
}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    closeMenu();
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(250,248,245,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        borderBottom: "1px solid #ece7e2",
      }}
    >
      <Toolbar
        sx={{
          px: { xs: 2, md: 4 },
          minHeight: "72px",
        }}
      >
        {/* LEFT */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flex: 0.4,
          }}
        >
          <IconButton
            onClick={onMenuClick}
            sx={{
              color: "#2d2a26",
              background: "rgba(193,127,89,0.08)",

              "&:hover": {
                background: "rgba(193,127,89,0.15)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 36,
                height: 36,
                borderRadius: "10px",
                background:
                  "linear-gradient(135deg,#c17f59,#e09d72)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 800,
                fontSize: "18px",
              }}
            >
              E
            </Box>

            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                color: "#2d2a26",
                letterSpacing: "1px",
              }}
            >
              EMIPI
            </Typography>
          </Box>
        </Box>

        {/* CENTER NAVIGATION */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
            flex: 1,
          }}
        >
          {[
            "Features",
            "Pricing",
            "Docs",
            "Contact",
          ].map((item) => (
            <Typography
              key={item}
              sx={{
                cursor: "pointer",
                fontWeight: 500,
                color: "#2d2a26",
                transition: "all .3s ease",

                "&:hover": {
                  color: "#c17f59",
                  transform: "translateY(-2px)",
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Chip
            label="Chrome Extension"
            sx={{
              display: { xs: "none", lg: "flex" },
              background: "#fff4ed",
              color: "#c17f59",
              fontWeight: 600,
              border: "1px solid #f0d6c6",
            }}
          />

          <IconButton
            sx={{
              color: "#2d2a26",

              "&:hover": {
                background:
                  "rgba(193,127,89,0.08)",
              },
            }}
          >
            <NotificationsIcon />
          </IconButton>

          <Button
            variant="contained"
            sx={{
              background: "#c17f59",
              borderRadius: "14px",
              px: 3,
              py: 1.2,
              textTransform: "none",
              fontWeight: 600,
              boxShadow:
                "0 10px 25px rgba(193,127,89,0.25)",

              "&:hover": {
                background: "#b56d48",
                transform: "translateY(-2px)",
                boxShadow:
                  "0 14px 35px rgba(193,127,89,0.35)",
              },

              transition: "all .3s ease",
            }}
          >
            Install Extension
          </Button>

          {user && (
            <>
              <Box
                onClick={openMenu}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1.5,
                  cursor: "pointer",
                  px: 1.5,
                  py: 1,
                  borderRadius: 3,
                  transition: "all .3s ease",

                  "&:hover": {
                    background:
                      "rgba(193,127,89,0.08)",
                    transform:
                      "translateY(-2px)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#c17f59",
                    fontSize: "1rem",
                    fontWeight: 700,
                    transition: "all .3s ease",

                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {user.name?.[0]?.toUpperCase()}
                </Avatar>

                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                    },
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 600,
                      color: "#2d2a26",
                    }}
                  >
                    {user.name}
                  </Typography>
                </Box>
              </Box>

              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={closeMenu}
                PaperProps={{
                  sx: {
                    mt: 1.5,
                    minWidth: 240,
                    borderRadius: 4,
                    border:
                      "1px solid #ece7e2",
                    boxShadow:
                      "0 20px 60px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <MenuItem disabled>
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      {user.name}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        color: "#777",
                      }}
                    >
                      {user.email}
                    </Typography>
                  </Box>
                </MenuItem>

                <Divider />

                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    closeMenu();
                  }}
                >
                  <PersonIcon
                    sx={{
                      mr: 2,
                      color: "#c17f59",
                    }}
                  />
                  Profile
                </MenuItem>

                <MenuItem>
                  <AnalyticsIcon
                    sx={{
                      mr: 2,
                      color: "#c17f59",
                    }}
                  />
                  Analytics
                </MenuItem>

                <MenuItem>
                  <SettingsIcon
                    sx={{
                      mr: 2,
                      color: "#8b9a7d",
                    }}
                  />
                  Settings
                </MenuItem>

                <Divider />

                <MenuItem onClick={logout}>
                  <LogoutIcon
                    sx={{
                      mr: 2,
                      color: "#c17f59",
                    }}
                  />
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
