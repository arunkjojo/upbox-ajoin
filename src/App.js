import React from "react";
import "./style.css";

// tob-bar-image
import topbar from "./assets/TOPBAR 1.png";

// logo-image
import logo from "./assets/Logo.png";

// hero_images
import box from "./assets/BOX.png";

// plan_images
import plain_underline from "./assets/underline 1.png";

// work_images
import work_underline from "./assets/underline.png";
import work_body_1 from "./assets/Mask Group1.png";
import work_body_2 from "./assets/box2-1.png";
import work_body_3 from "./assets/Mask Group2.png";

// social_post_images
import social_post_1 from "./assets/img1.png";
import social_post_2 from "./assets/img2.png";
import social_post_3 from "./assets/img3.png";
import social_post_4 from "./assets/img4.png";
// import social_post_bg_img_1 from "./assets/squig1.png";
// import social_post_bg_img_2 from "./assets/squig2.png";

// footer_images
import footer_logo from "./assets/Logo_Footer.png";
import footer_divider from "./assets/footer_divider.png";

import { Instagram, Facebook, Twitter } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  MenuItem,
  Box,
  Grid,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["THIS MONTH", "SKIN", "HAIR", "BATH", "SALE"];

function ResponsiveApp() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="App">
      <Grid lg={12}>
        <img src={topbar} alt="topbar_img" className="topbar_img" />
      </Grid>
      <Container disableGutters={false} className="App-body">
        
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#ffffff",
            color: "rgba(0,0,0,1)",
            boxShadow: "none",
          }}
        >
          <Toolbar disableGutters className="navbar">
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            > */}
            <div className="logo">
              <img src={logo} alt="UPBOX LOGO" className="logo_image" />
              <span className="logo_txt">UPBOX</span>
            </div>
            {/* </Typography> */}
            <></>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {pages.map((page) => (
                <MenuItem className="menu-link" key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem >
                <div className="login_button">LOGIN {">"}</div>
              </MenuItem>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }} 
                className="menu-icon">
              <IconButton
                size="large"
                aria-label="more link"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  sx={{ display: { xs: "flex", sm: "none" } }}
                >
                  <div className="login_button">LOGIN {">"}</div>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1 }}  className="hero">
          <Grid container direction="row">
            <Grid xs={12} sm={12} md={5} lg={4}className="hero_left">
              <h1 className="hero_title">
                Look good without leaving your house.
              </h1>

              <p className="hero_para">
                Upbox is the easiest way to look your best without having to
                hunt for the perfect makeup combination. Our stylists curate the
                latest trends and send them directly to your door every month.
              </p>
              <button className="hero_signup_btn">SIGN UP {">"}</button>
            </Grid>
            <Grid xs={12} sm={12} md={7} lg={8}>
              <div className="hero_right">
                <img src={box} alt="hero_box_img" className="hero_box_img" />
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="pick_plan">
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <h2 className="plan_header_title">Pick your plan</h2>

              <img
                src={plain_underline}
                alt="plan_header_underline"
                className="plan_header_underline center"
              />
            </Grid>
            <Container>
              <Grid container>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.75} className="plan_body_left">
                    <h1 className="plan_body_main_heading">Monthly</h1>

                    <h1 className="plan_body_sub_heading">$18/mo</h1>

                    <div className="plan_body_btn">
                      <button className="plan_body_button center">
                        FIND YOUR BOX
                      </button>
                    </div>
                  {/* </div> */}
                </Grid>
                <Grid item xs={12} sm={5.5} md={5.5} lg={5.75} className="plan_body_right">
                    <h1 className="plan_body_main_heading">Yearly</h1>

                    <h1 className="plan_body_sub_heading">$15/mo</h1>

                    <div className="plan_body_btn">
                      <button className="plan_body_button center">
                        FIND YOUR BOX
                      </button>
                    </div>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <p className="plan_footer_paragraph">
                  Your plan auto-renews at the end of 30 days from the 1st day
                  you signed-up.
                </p>
              </Grid>
            </Container>
          </Grid>
        </Box>

        <Box display="flex" sx={{ flexGrow: 1 }} className="work">
          <Container>
            <Grid container>
              <Grid sx={{maxHeight: 'fit-content'}} item xs={12} sm={12} md={12} lg={12}>
                <h2 className="work_header_title">How it works?</h2>

                <img
                  src={work_underline}
                  alt="work_header_underline"
                  className="work_header_underline center"
                />
              </Grid>
              <Grid sx={{maxHeight: 'fit-content'}} item xs={12} sm={12} md={12} lg={12} container>
                <Grid item xs={12} sm={6} md={4} lg={4} className='work_1_img'>
                  <div className="work_body_1_art_image">
                    <img
                      src={work_body_1}
                      alt="work_body_1_image"
                      className="work_body_1_image"
                    />
                  </div>

                  <span className="work_body_1_number">1</span>
                </Grid>
                <Grid item xs={12} sm={6} className='work_1_txt'>
                    <h1 className="work_body_1_heading">
                      Setup your profile & preferences
                    </h1>
                    <p className="work_body_1_paragraph">
                      Once you create an account, you can start to tell us your
                      likes and dislikes so we can tailor the experience just for
                      you.
                    </p>
                </Grid>
              </Grid>
              <Grid sx={{maxHeight: 'fit-content'}} item xs={12} sm={12} md={12} lg={12} container className="work_2">
                <Grid item xs={12} sm={4} className='work_2_img'>
                  <div className="work_body_2_bg_image">
                    <div className="work_body_2_art_image">
                      <img
                        src={work_body_2}
                        alt="work_body_2_image"
                        className="work_body_2_image"
                      />
                    </div>
                  </div>
                  <span className="work_body_2_number">2</span>
                </Grid>
                <Grid item xs={12} sm={12} lg={12} className='work_2_txt'>
                    <h3 className="work_body_2_heading">Review your custom box</h3>

                    <p className="work_body_2_paragraph">
                      Once we get to know you, we will show you the box we’ve
                      crafted. This is your chance to approve it before we ship it
                      to your house.
                    </p>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} container>
                <Grid item xs={12} sm={6} md={4} lg={4} className='work_3_img'>
                  <div className="work_body_3_art_image">
                    <img
                      src={work_body_3}
                      alt="work_body_3_image"
                      className="work_body_3_image"
                    />
                  </div>
                  <span className="work_body_3_number">3</span>
                </Grid>
                <Grid item xs={12} sm={6} className='work_3_txt'>
                  <h3 className="work_body_3_heading">Try it on at home</h3>

                  <p className="work_body_3_paragraph">
                    Your box will arrive within 3-5 days (usually sooner) and you
                    get the joy to unbox your Upbox. Try it all on and send back
                    whatever you’re not in love with.
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <button className="center work_footer_button">
                  TRY IT FOR YOURSELF {">"}
                </button>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box sx={{ flexGrow: 1, marginTop: 10 }} className="social_post">
          <Grid container>
            <Grid xs={12}>
              <div className="social_post_header">
                <h2 className="social_post_header_title">Social Post</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="social_post_body">
              <img
                src={social_post_1}
                alt="social_post_body_image"
                className="social_post_body_image"
              />

              <p className="social_post_body_paragraph">
                How to rock the lip look that turns heads
              </p>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="social_post_body">
              <img
                src={social_post_2}
                alt="social_post_body_image"
                className="social_post_body_image"
              />

              <p className="social_post_body_paragraph">
                Find the perfect shade for the season
              </p>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="social_post_body">
              <img
                src={social_post_3}
                alt="social_post_body_image"
                className="social_post_body_image"
              />

              <p className="social_post_body_paragraph">
                The 5 eye shadow secrets you never knew
              </p>
            </Grid>
            <Grid item xs={12} sm={6} lg={3} className="social_post_body">
              <img
                src={social_post_4}
                alt="social_post_body_image"
                className="social_post_body_image"
              />

              <p className="social_post_body_paragraph">
                The pro-tips for at home hair dying
              </p>
            </Grid>
            <Grid xs={12}>
              <button className="center social_post_footer_button">
                FOLLOW US ON INSTAGRAM
              </button>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1 }} className="footer">
          <Grid container direction="row" justifyContent="space-between">
            <Grid xs={8} sm={6} lg={4}>
              <div className="footer_top_logo">
                <img
                  src={footer_logo}
                  alt="footer_top_logo_image"
                  className="footer_top_logo_image"
                />
              </div>
            </Grid>
            <Grid sx={{ display: { xs: "none", sm: "block" } }} sm={6} lg={4}>
              <div className="footer_top_social">
                <i className="footer_social_instagram">
                  <Instagram />
                </i>
                <i className="footer_social_facebook">
                  <Facebook />
                </i>
                <i className="footer_social_twitter">
                  <Twitter />
                </i>
                <i className="footer_social_snapchat"></i>
              </div>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item xs={6} sm={6} md={3} lg={3}  className="footer_content_1">
                <h3 className="footer_content_1_heading">UPBOX</h3>

                <div className="footer_content_1_link">
                  <li className="footer_content_1_link_item">Upbox Bag</li>
                  <li className="footer_content_1_link_item">
                    Upbox Box Platinum
                  </li>
                  <li className="footer_content_1_link_item">Upbox Box VIP</li>
                  <li className="footer_content_1_link_item">Deals</li>
                  <li className="footer_content_1_link_item">Seasonal Items</li>
                  <li className="footer_content_1_link_item">Upbox Promise</li>
                </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div className="footer_content_2">
                <h3 className="footer_content_2_heading">Find Us On</h3>

                <div className="footer_content_2_link">
                  <li className="footer_content_2_link_item">Instagram</li>
                  <li className="footer_content_2_link_item">Facebook</li>
                  <li className="footer_content_2_link_item">Tik Toc</li>
                  <li className="footer_content_2_link_item">Snap Chat</li>
                  <li className="footer_content_2_link_item">Twitter</li>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div className="footer_content_3">
                <h3 className="footer_content_3_heading">Product</h3>

                <div className="footer_content_3_link">
                  <li className="footer_content_3_link_item">Get the App</li>
                  <li className="footer_content_3_link_item">
                    Loyalty Program
                  </li>
                  <li className="footer_content_3_link_item">Affiliates</li>
                  <li className="footer_content_3_link_item">Press</li>
                </div>
              </div>
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <div className="footer_content_4">
                <h3 className="footer_content_4_heading">Help</h3>

                <div className="footer_content_4_link">
                  <li className="footer_content_4_link_item">Returns</li>
                  <li className="footer_content_4_link_item">FAQ</li>
                  <li className="footer_content_4_link_item">Contact</li>
                  <li className="footer_content_4_link_item">Community</li>
                  <li className="footer_content_4_link_item">Videos</li>
                </div>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12}>
              <div className="footer_devider">
                <img
                  src={footer_divider}
                  alt="footer_divider_image"
                  className="footer_divider_image"
                />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} sm={2} md={2} lg={2} order={{ xs: 1, sm:1, md:2, lg: 2 }}>
              <p className="footer_bottom_terms">Terms</p>
            </Grid>
            <Grid xs={12} sm={2} md={2} lg={2} order={{ xs: 2, sm:2, md:3, lg: 3 }}>
              <p className="footer_bottom_policy">Privacy Policy</p>
            </Grid>
            <Grid xs={11} sm={12} md={8}  lg={8} order={{ xs: 3, sm:3, md:1, lg: 1 }}>
              <p className="footer_bottom_copyright">
                © 2020 Quest AI. Upbox is a Sample Project and open source
                design project free for personal and commercial use.
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default ResponsiveApp;
