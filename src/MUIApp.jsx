import React from "react";
import "./style.css";

// tob-bar-image
import topbar from "./assets/TOPBAR 1.png";

// logo-image
import logo from "./assets/Logo.png";

// hero_images
import box from "./assets/BOX.png";
import marker from "./assets/Marker.png";

// plan_images
import plain_underline from "./assets/underline 1.png";
import plan_left_bg from "./assets/box1.png";
import plan_right_bg from "./assets/box2.png";

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
import social_post_bg_img_1 from "./assets/squig1.png";
import social_post_bg_img_2 from "./assets/squig2.png";

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
  Avatar,
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
      {/* <Container> */}
      {/* Top-Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid lg={12}>
            <img src={topbar} alt="topbar_img" className="topbar_img" />
          </Grid>
        </Grid>
      </Box>

      {/* Nav-Bar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#ffffff",
          color: "rgba(0,0,0,1)",
          boxShadow: "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-around" }}>
            <Typography
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
            >
              <Avatar
                src={logo}
                alt="UPBOX LOGO"
                sx={{ display: { xs: "none", sm: "flex" }, mr: 1 }}
              />
              UPBOX
            </Typography>
            <></>
            <Box
              sx={{
                flexGrow: 0,
                display: { xs: "none", sm: "flex" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem sx={{ my: 2, display: { xs: "none", sm: "flex" } }}>
                <Typography textAlign="center">LOGIN</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", sm: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
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
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row">
          <Grid xs={12} sm={4}>
            <div className="hero_left">
              {/* Hero-Left-Title */}
              <h1 className="hero_left_title">
                Look good without leaving your house.
              </h1>
              {/* Hero-Left-Paragraph */}
              <p className="hero_left_para">
                Upbox is the easiest way to look your best without having to
                hunt for the perfect makeup combination. Our stylists curate the
                latest trends and send them directly to your door every month.
              </p>
              {/* Hero-Left-Button */}
              <div className="hero_left_btn">
                {/* Hero-Left-Signup-Button */}
                <button className="hero_left_signup_btn">
                  {/* Hero-Left-Signup-Button-Text */}
                  <span className="hero_left_signup_btn_text">
                    SIGN UP {">"}
                  </span>
                </button>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={8}>
            <div className="hero_right">
              {/* Hero-Right-Marker-Image */}
              <img
                src={marker}
                alt="hero_right_marker_img"
                className="hero_right_marker_img"
              />
              {/* Hero-Right-Box-Image */}
              <img
                src={box}
                alt="hero_right_box_img"
                className="hero_right_box_img"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <div className="hero_mask"></div>
        </Grid>
      </Box>

      {/* Pick-Your-Plan */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12}>
            <div className="plan_header">
              {/* Plan-Header-Title */}
              <h2 className="plan_header_title">Pick your plan</h2>
              {/* Plan-Heading-Underline-Image */}
              <img
                src={plain_underline}
                alt="plan_header_underline"
                className="plan_header_underline"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12} sm={6} md={6} lg={6}>
            {/* Plan-Body-Left */}
            <div className="plan_body_left">
              {/* Plan-Body-Left-Background-Image */}
              <img
                src={plan_left_bg}
                alt="plan_body_left_bg_image"
                className="plan_body_left_bg_image"
                style={{ width: `calc(99%)` }}
              />
              {/* Plan-Body-Left-Main-Heading */}
              <h3 className="plan_body_left_main_heading">Monthly</h3>
              {/* Plan-Body-Left-Sub-Heading */}
              <h4 className="plan_body_left_sub_heading">$18/mo</h4>
              {/* Plan-Body-Left-Plan-Button */}
              <button className="plan_body_left_plan_button">
                FIND YOUR BOX
              </button>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
            {/* Plan-Body-Right */}
            <div className="plan_body_right">
              {/* Plan-Body-Right-Background-Image */}
              <img
                src={plan_right_bg}
                alt="plan_body_right_bg_image"
                className="plan_body_right_bg_image"
                style={{ width: `calc(99%)` }}
              />
              {/* Plan-Body-Right-Main-Heading */}
              <h3 className="plan_body_right_main_heading">Yearly</h3>
              {/* Plan-Body-Right-Sub-Heading */}
              <h4 className="plan_body_right_sub_heading">$15/mo</h4>
              {/* Plan-Body-Right-Plan-Button */}
              <button className="plan_body_right_plan_button">
                FIND YOUR BOX
              </button>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12}>
            {/* Plan-Footer */}
            <div className="plan_footer">
              {/* Plan-Footer-Paragraph */}
              <p className="plan_footer_paragraph">
                Your plan auto-renews at the end of 30 days from the 1st day you
                signed-up.
              </p>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* How-Its-Work */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12}>
            {/* Plan-Header */}
            <div className="work_header">
              {/* Plan-Header-Title */}
              <h2 className="work_header_title">How it works?</h2>
              {/* Plan-Heading-Underline-Image */}
              <img
                src={work_underline}
                alt="work_header_underline"
                className="work_header_underline center"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {/* Work-Body-1 */}
            <div className="work_body_1">
              {/* Work-Body-1-Art-Image */}
              <div className="work_body_1_art_image">
                {/* Work-Body-1-Image */}
                <img
                  src={work_body_1}
                  alt="work_body_1_image"
                  className="work_body_1_image"
                />
              </div>
              {/* Work-Body-1-Number */}
              <span className="work_body_1_number">1</span>
              {/* Work-Body-1-Heading */}
              <h1 className="work_body_1_heading">
                Setup your profile & preferences
              </h1>
              {/* Work-Body-1-Paragraph */}
              <p className="work_body_1_paragraph">
                Once you create an account, you can start to tell us your likes
                and dislikes so we can tailor the experience just for you.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* Work-Body-2 */}
            <div className="work_body_2">
              {/* Work-Body-2-Art-Image */}
              <div className="work_body_2_bg_image">
                <div className="work_body_2_art_image">
                  {/* Work-Body-2-Image */}
                  <img
                    src={work_body_2}
                    alt="work_body_2_image"
                    className="work_body_2_image"
                  />
                </div>
                {/* Work-Body-2-Bg-Image */}
              </div>
              {/* Work-Body-3-Number */}
              <span className="work_body_2_number">2</span>
              {/* Work-Body-2-Heading */}
              <h3 className="work_body_2_heading">Review your custom box</h3>
              {/* Work-Body-2-Paragraph */}
              <p className="work_body_2_paragraph">
                Once we get to know you, we will show you the box we’ve crafted.
                This is your chance to approve it before we ship it to your
                house.
              </p>
            </div>
          </Grid>
          <Grid item xs={12}>
            {/* Work-Body-3 */}
            <div className="work_body_3">
              {/* Work-Body-3-Art-Image */}
              <div className="work_body_3_art_image">
                {/* Work-Body-3-Image */}
                <img
                  src={work_body_3}
                  alt="work_body_3_image"
                  className="work_body_3_image"
                />
              </div>
              {/* Work-Body-3-Number */}
              <span className="work_body_3_number">3</span>
              {/* Work-Body-3-Heading */}
              <h3 className="work_body_3_heading">Try it on at home</h3>
              {/* Work-Body-3-Paragraph */}
              <p className="work_body_3_paragraph">
                Your box will arrive within 3-5 days (usually sooner) and you
                get the joy to unbox your Upbox. Try it all on and send back
                whatever you’re not in love with.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={12}>
            {/* Work-Footer */}
            <div className="work_footer">
              {/* Work-Footer-Try-button */}
              <button className="work_footer_paragraph">
                TRY IT FOR YOURSELF {">"}
              </button>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* Social-Post */}
      <Box sx={{ flexGrow: 1 }} className="social_post">
        <img
          src={social_post_bg_img_1}
          className="social_post_bg_img_1"
          alt="social_post_bg_img_1"
        />
        <img
          src={social_post_bg_img_2}
          className="social_post_bg_img_2"
          alt="social_post_bg_img_2"
        />
        <Grid container>
          <Grid xs={12}>
            {/* Social-Post-Header */}
            <div className="social_post_header">
              {/* Social-Post-Title */}
              <h2 className="social_post_header_title">Social Post</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} lg={3} className="social_post_body">
            {/* Social-Post-Body-1 */}
            {/* <div className="social_post_body"> */}
            {/* Social-Post-Body-1-Image */}
            <img
              src={social_post_1}
              alt="social_post_body_image"
              className="social_post_body_image"
            />
            {/* Social-Post-Body-1-Paragraph */}
            <p className="social_post_body_paragraph">
              How to rock the lip look that turns heads
            </p>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className="social_post_body">
            {/* Social-Post-Body-2 */}
            {/* <div className="social_post_body"> */}
            {/* Social-Post-Body-2-Image */}
            <img
              src={social_post_2}
              alt="social_post_body_image"
              className="social_post_body_image"
            />
            {/* Social-Post-Body-2-Paragraph */}
            <p className="social_post_body_paragraph">
              Find the perfect shade for the season
            </p>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className="social_post_body">
            {/* Social-Post-Body-3 */}
            {/* <div className="social_post_body"> */}
            {/* Social-Post-Body-3-Image */}
            <img
              src={social_post_3}
              alt="social_post_body_image"
              className="social_post_body_image"
            />
            {/* Social-Post-Body-3-Paragraph */}
            <p className="social_post_body_paragraph">
              The 5 eye shadow secrets you never knew
            </p>
            {/* </div> */}
          </Grid>
          <Grid item xs={12} sm={6} lg={3} className="social_post_body">
            {/* Social-Post-Body-4 */}
            {/* <div className="social_post_body"> */}
            {/* Social-Post-Body-4-Image */}
            <img
              src={social_post_4}
              alt="social_post_body_image"
              className="social_post_body_image"
            />
            {/* Social-Post-Body-1-Paragraph */}
            <p className="social_post_body_paragraph">
              The pro-tips for at home hair dying
            </p>
            {/* </div> */}
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid xs={12}>
            {/* Social-Post-Footer */}
            <div className="social_post_footer">
              {/* Social-Post-Footer-Button */}
              <div className="social_post_footer_button">
                <span className="social_post_footer_button_text">
                  FOLLOW US ON INSTAGRAM
                </span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box sx={{ flexGrow: 1 }} className="footer">
        <Grid container direction="row" justifyContent="space-between">
          <Grid xs={8} sm={6} lg={4}>
            {/* Footer-Top-Logo */}
            <div className="footer_top_logo">
              {/* Footer-Top-Logo-Image */}
              <img
                src={footer_logo}
                alt="footer_top_logo_image"
                className="footer_top_logo_image"
              />
            </div>
          </Grid>
          <Grid sx={{ display: { xs: "none", sm: "block" } }} sm={6} lg={4}>
            {/* Footer-Top-Socila */}
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
        <Grid container direction="row" justifyContent="space-around">
          <Grid xs={6} lg={3}>
            {/* Footer-Content-1 */}
            <div className="footer_content_1">
              {/* Footer-Content-1-Heading */}
              <h3 className="footer_content_1_heading">UPBOX</h3>
              {/* Footer-Content-1-Link */}
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
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            {/* Footer-Content-2 */}
            <div className="footer_content_2">
              {/* Footer-Content-2-Heading */}
              <h3 className="footer_content_2_heading">Find Us On</h3>
              {/* Footer-Content-2-Link */}
              <div className="footer_content_2_link">
                <li className="footer_content_2_link_item">Instagram</li>
                <li className="footer_content_2_link_item">Facebook</li>
                <li className="footer_content_2_link_item">Tik Toc</li>
                <li className="footer_content_2_link_item">Snap Chat</li>
                <li className="footer_content_2_link_item">Twitter</li>
              </div>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            {/* Footer-Content-3 */}
            <div className="footer_content_3">
              {/* Footer-Content-3-Heading */}
              <h3 className="footer_content_3_heading">Product</h3>
              {/* Footer-Content-3-Link */}
              <div className="footer_content_3_link">
                <li className="footer_content_3_link_item">Get the App</li>
                <li className="footer_content_3_link_item">Loyalty Program</li>
                <li className="footer_content_3_link_item">Affiliates</li>
                <li className="footer_content_3_link_item">Press</li>
              </div>
            </div>
          </Grid>
          <Grid xs={6} lg={3}>
            {/* Footer-Content-4 */}
            <div className="footer_content_4">
              {/* Footer-Content-4-Heading */}
              <h3 className="footer_content_4_heading">Help</h3>
              {/* Footer-Content-4-Link */}
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
            {/* Footer-Divider */}
            <div className="footer_devider">
              {/* Footer-Divider-Image */}
              <img
                src={footer_divider}
                alt="footer_divider_image"
                className="footer_divider_image"
              />
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={2} order={{ xs: 1, lg: 2 }}>
            {/* Footer-Bottom-Copyright */}
            <p className="footer_bottom_terms">Terms</p>
          </Grid>
          <Grid xs={2} order={{ xs: 2, lg: 3 }}>
            {/* Footer-Bottom-Copyright */}
            <p className="footer_bottom_policy">Privacy Policy</p>
          </Grid>
          <Grid xs={12} lg={8} order={{ xs: 3, lg: 1 }}>
            {/* Footer-Bottom-Copyright */}
            <p className="footer_bottom_copyright">
              © 2020 Quest AI. Upbox is a Sample Project and open source design
              project free for personal and commercial use.
            </p>
          </Grid>
        </Grid>
      </Box>
      {/* </Container> */}
    </div>
  );
}

export default ResponsiveApp;
