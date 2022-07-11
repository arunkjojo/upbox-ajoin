import React from 'react';
import './App.css';

// tob-bar-image
import topbar from './assets/TOPBAR 1.png'

// logo-image
import logo from './assets/Logo.png'

// hero_images
import box from './assets/BOX.png'
import marker from './assets/Marker.png'

// plan_images
import plain_underline from './assets/underline 1.png'
import plan_left_bg from './assets/box1.png'
import plan_right_bg from './assets/box2.png'

// work_images
import work_underline from './assets/underline.png'
import work_body_1 from './assets/Mask Group1.png'
import work_body_1_art from './assets/art1.png'
import work_body_2 from './assets/box2 1.png'
import work_body_2_art from './assets/art2.png'
import work_body_2_bg from './assets/Vector.png'
import work_body_3 from './assets/Mask Group2.png'
import work_body_3_art from './assets/art3.png'

// social_post_images
import social_post_1 from './assets/img1.png'
import social_post_2 from './assets/img2.png'
import social_post_3 from './assets/img3.png'
import social_post_4 from './assets/img4.png'


// footer_images
import footer_logo from './assets/Logo_Footer.png'
import footer_divider from './assets/footer_divider.png'

import {Instagram, Facebook, Twitter} from '@mui/icons-material';

function App() {
  return (
    <div className="App">
      {/* Nav-Bar */}
      <div className='navbar'>
        {/* Top-Bar-Image */}
        <div className='topbar_img'></div>
        {/* Nav-Bar-Logo */}
        <div className='navbar_logo'>
          {/* Nav-Bar-Logo-Image */}
          <img src={logo} alt="navbar_logo_img" className='navbar_logo_img'/>
          {/* Nav-Bar-Logo-Text */}
          <span className='navbar_logo_text'>UPBOX</span>
        </div>
        {/* Nav-Bar-Menu-Bar */}
        <div className='navbar_menu'>
          {/* Nav-Bar-Menu-List */}
          <li className='navbar_menu_item'>THIS MONTH</li>
          <li className='navbar_menu_item'>SKIN</li>
          <li className='navbar_menu_item'>HAIR</li>
          <li className='navbar_menu_item'>BATH</li>
          <li className='navbar_menu_item'>SALE</li>
          {/* Nav-Bar-Button */}
          <div className='navbar_btn'>
            {/* Nav-Bar-Lobin-Button */}
            <button className='navbar_login_btn'>
              {/* Nav-Bar-Lobin-Button-Text */}
              <span className='navbar_login_btn_text'>LOG IN {'>'}</span></button>
          </div>
        </div>
      </div>
      {/* Hero */}
      <div className='hero'>
        {/* Hero-Left */}
        <div className='hero_left'>
          {/* Hero-Left-Title */}
          <span className='hero_left_title'>Look good without leaving your house.</span>
          {/* Hero-Left-Paragraph */}
          <span className='hero_left_para'>
          Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month.
          </span>
          {/* Hero-Left-Button */}
          <div className='hero_left_btn'>
            {/* Hero-Left-Signup-Button */}
            <button className='hero_left_signup_btn'>
              {/* Hero-Left-Signup-Button-Text */}
              <span className='hero_left_signup_btn_text'>SIGN UP {'>'}</span></button>
          </div>
        </div>
        {/* Hero-Right */}
        <div className='hero_right'>
          {/* Hero-Right-Marker-Image */}
          <img src={marker} alt="hero_right_marker_img" className='hero_right_marker_img' />
          {/* Hero-Right-Box-Image */}
          <img src={box} alt="hero_right_box_img" className='hero_right_box_img'/>
        </div>
      </div>

      {/* Hero-Mask */}
      <div className='hero_mask'></div>
      
      {/* Pick-Your-Plan */}
      <div className='plan'>
        {/* Plan-Header */}
        <div className='plan_header'>
          {/* Plan-Heading-Underline-Image */}
          <img src={plain_underline} alt="plan_header_underline" className='plan_header_underline' />
          {/* Plan-Header-Title */}
          <span className='plan_header_title'>Pick your plan</span>
        </div>
        {/* Plan-Body */}
        <div className='plan_body'>
          {/* Plan-Body-Left */}
          <div className='plan_body_left'>
            {/* Plan-Body-Left-Background-Image */}
            <img src={plan_left_bg} alt='plan_body_left_bg_image' className='plan_body_left_bg_image' />
            {/* Plan-Body-Left-Main-Heading */}
            <h3 className='plan_body_left_main_heading'>Monthly</h3>
            {/* Plan-Body-Left-Sub-Heading */}
            <h4 className='plan_body_left_sub_heading'>$18/mo</h4>
            {/* Plan-Body-Left-Plan-Button */}
            <button className='plan_body_left_plan_button'>FIND YOUR BOX</button>
          </div>
          {/* Plan-Body-Right */}
          <div className='plan_body_right'>
            {/* Plan-Body-Right-Background-Image */}
            <img src={plan_right_bg} alt='plan_body_right_bg_image' className='plan_body_right_bg_image' />
            {/* Plan-Body-Right-Main-Heading */}
            <h3 className='plan_body_right_main_heading'>Yearly</h3>
            {/* Plan-Body-Right-Sub-Heading */}
            <h4 className='plan_body_right_sub_heading'>$15/mo</h4>
            {/* Plan-Body-Right-Plan-Button */}
            <button className='plan_body_right_plan_button'>FIND YOUR BOX</button>
          </div>
        </div>
        {/* Plan-Footer */}
        <div className='plan_footer'>
          {/* Plan-Footer-Paragraph */}
          <p className='plan_footer_paragraph'>
            Your plan auto-renews at the end of 30 days from the 1st day you signed-up.
          </p>
        </div>
      </div>

      {/* How-Its-Work */}
      <div className='work'>
        {/* Plan-Header */}
        <div className='work_header'>
          {/* Plan-Header-Title */}
          <h2 className='work_header_title'>How it works?</h2>
          {/* Plan-Heading-Underline-Image */}
          <img src={work_underline} alt="work_header_underline" className='work_header_underline' />
        </div>
        {/* Work-Body */}
        <div className='work_body'>
          {/* Work-Body-1 */}
          <div className='work_body_1'>
            {/* Work-Body-1-Art-Image */}
            <img src={work_body_1_art} alt='work_body_1_art_image' className='work_body_1_art_image' />
            {/* Work-Body-1-Image */}
            <img src={work_body_1} alt='work_body_1_image' className='work_body_1_image' />
            {/* Work-Body-1-Number */}
            <h3 className='work_body_1_number'>1</h3>
            {/* Work-Body-1-Heading */}
            <h3 className='work_body_1_heading'>Setup your profile & preferences</h3>
            {/* Work-Body-1-Paragraph */}
            <p className='work_body_1_paragraph'>Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you.</p>
          </div>
          {/* Work-Body-2 */}
          <div className='work_body_2'>
            {/* Work-Body-2-Art-Image */}
            <img src={work_body_2_art} alt='work_body_1_art_image' className='work_body_1_art_image' />
            {/* Work-Body-2-Image */}
            <img src={work_body_2} alt='work_body_2_image' className='work_body_2_image' />
            {/* Work-Body-2-Bg-Image */}
            <img src={work_body_2_bg} alt='work_body_2_bg_image' className='work_body_2_bg_image' />
            {/* Work-Body-3-Number */}
            <h3 className='work_body_3_number'>2</h3>
            {/* Work-Body-2-Heading */}
            <h3 className='work_body_2_heading'>Review your custom box</h3>
            {/* Work-Body-2-Paragraph */}
            <p className='work_body_2_paragraph'>Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house.</p>
          </div>
          {/* Work-Body-3 */}
          <div className='work_body_3'>
            {/* Work-Body-3-Art-Image */}
            <img src={work_body_3_art} alt='work_body_1_art_image' className='work_body_1_art_image' />
            {/* Work-Body-3-Image */}
            <img src={work_body_3} alt='work_body_3_image' className='work_body_3_image' />
            {/* Work-Body-3-Number */}
            <h3 className='work_body_3_number'>3</h3>
            {/* Work-Body-3-Heading */}
            <h3 className='work_body_3_heading'>Try it on at home</h3>
            {/* Work-Body-3-Paragraph */}
            <p className='work_body_3_paragraph'>Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with.</p>
          </div>
        </div>
        {/* Work-Footer */}
        <div className='work_footer'>
          {/* Work-Footer-Try-button */}
          <button className='work_footer_paragraph'>
          TRY IT FOR YOURSELF {'>'}
          </button>
        </div>
      </div>

      {/* Social-Post */}
      <div className='social_post'>
        {/* Social-Post-Header */}
        <div className='social_post_header'>
          {/* Social-Post-Title */}
          <h2 className='social_post_header_title'>Social Post</h2>
        </div>
        {/* Social-Post-Body */}
        <div className='social_post_body'>
          {/* Social-Post-Body-1 */}
          <div className='social_post_body_1'>
            {/* Social-Post-Body-1-Image */}
            <img src={social_post_1} alt='social_post_body_1_image' className='social_post_body_1_image' />
            {/* Social-Post-Body-1-Paragraph */}
            <p className='social_post_body_1_paragraph'>How to rock the lip look that turns heads</p>
          </div>
          {/* Social-Post-Body-2 */}
          <div className='social_post_body_2'>
            {/* Social-Post-Body-2-Image */}
            <img src={social_post_2} alt='social_post_body_2_image' className='social_post_body_2_image' />
            {/* Social-Post-Body-2-Paragraph */}
            <p className='social_post_body_2_paragraph'>Find the perfect shade for the season</p>
          </div>
          {/* Social-Post-Body-3 */}
          <div className='social_post_body_3'>
            {/* Social-Post-Body-3-Image */}
            <img src={social_post_3} alt='social_post_body_3_image' className='social_post_body_3_image' />
            {/* Social-Post-Body-3-Paragraph */}
            <p className='social_post_body_3_paragraph'>The 5 eye shadow secrets you never knew</p>
          </div>
          {/* Social-Post-Body-4 */}
          <div className='social_post_body_4'>
            {/* Social-Post-Body-4-Image */}
            <img src={social_post_4} alt='social_post_body_4_image' className='social_post_body_4_image' />
            {/* Social-Post-Body-1-Paragraph */}
            <p className='social_post_body_4_paragraph'>The pro-tips for at home hair dying</p>
          </div>
        </div>
        {/* Social-Post-Footer */}
        <div className='social_post_footer'>
          {/* Social-Post-Footer-Button */}
          <button className='social_post_footer_button'>FOLLOW US ON INSTAGRAM</button>
        </div>
      </div>

      {/* Footer */}
      <div className='footer'>
        {/* Footer-Top */}
        <div className='footer_top'>
          {/* Footer-Top-Logo */}
          <div className='footer_top_logo'>
            {/* Footer-Top-Logo-Image */}
            <img src={footer_logo} alt='footer_top_logo_image' className='footer_top_logo_image' />
          </div>
          {/* Footer-Top-Socila */}
          <div className='footer_top_social'>
            <i className='footer_social_instagram'><Instagram /></i>
            <i className='footer_social_facebook'><Facebook /></i>
            <i className='footer_social_twitter'><Twitter /></i>
            <i className='footer_social_snapchat'></i>
          </div>
        </div>
        {/* Footer-Content */}
        <div className='footer_content'>
          {/* Footer-Content-1 */}
          <div className='footer_content_1'>
            {/* Footer-Content-1-Heading */}
            <h3>UPBOX</h3>
            {/* Footer-Content-1-Link */}
            <div className='footer_content_1_link'>
              <li className='footer_content_1_link_item'>Upbox Bag</li>
              <li className='footer_content_1_link_item'>Upbox Box Platinum</li>
              <li className='footer_content_1_link_item'>Upbox Box VIP</li>
              <li className='footer_content_1_link_item'>Deals</li>
              <li className='footer_content_1_link_item'>Seasonal Items</li>
              <li className='footer_content_1_link_item'>Upbox Promise</li>
            </div>
          </div>
          {/* Footer-Content-2 */}
          <div className='footer_content_2'>
            {/* Footer-Content-2-Heading */}
            <h3>Find Us On</h3>
            {/* Footer-Content-2-Link */}
            <div className='footer_content_2_link'>
              <li className='footer_content_2_link_item'>Instagram</li>
              <li className='footer_content_2_link_item'>Facebook</li>
              <li className='footer_content_2_link_item'>Tik Toc</li>
              <li className='footer_content_2_link_item'>Snap Chat</li>
              <li className='footer_content_2_link_item'>Twitter</li>
            </div>
          </div>
          {/* Footer-Content-3 */}
          <div className='footer_content_3'>
            {/* Footer-Content-3-Heading */}
            <h3>Product</h3>
            {/* Footer-Content-3-Link */}
            <div className='footer_content_3_link'>
              <li className='footer_content_3_link_item'>Get the App</li>
              <li className='footer_content_3_link_item'>Loyalty Program</li>
              <li className='footer_content_3_link_item'>Affiliates</li>
              <li className='footer_content_3_link_item'>Press</li>
            </div>
          </div>
          {/* Footer-Content-4 */}
          <div className='footer_content_4'>
            {/* Footer-Content-4-Heading */}
            <h3>Help</h3>
            {/* Footer-Content-4-Link */}
            <div className='footer_content_4_link'>
              <li className='footer_content_4_link_item'>Returns</li>
              <li className='footer_content_4_link_item'>FAQ</li>
              <li className='footer_content_4_link_item'>Contact</li>
              <li className='footer_content_4_link_item'>Community</li>
              <li className='footer_content_4_link_item'>Videos</li>
            </div>
          </div>
        </div>
        {/* Footer-Divider */}
        <div className='footer_devider'>
          {/* Footer-Divider-Image */}
          <img src={footer_divider} alt='footer_divider_image' className='footer_divider_image' />
        </div>
        {/* Footer-Bottom */}
        <div className='footer_bottom'>
          {/* Footer-Bottom-Copyright */}
          <p className='footer_bottom_copyright'>© 2020 Quest AI. Upbox is a Sample Project and open source design project free for personal and commercial use.</p>

          {/* Footer-Bottom-Copyright */}
          <p className='footer_bottom_terms'>Terms</p>

          {/* Footer-Bottom-Copyright */}
          <p className='footer_bottom_policy'>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default App;
