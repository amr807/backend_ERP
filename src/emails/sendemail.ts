import { BadRequestException, Logger, UnauthorizedException } from "@nestjs/common";

const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
module.exports = async (email, url) => {
	const txt=
	`<!DOCTYPE html>
	<html>
	<head>
	
	  <meta charset="utf-8">
	  <meta http-equiv="x-ua-compatible" content="ie=edge">
	  <title>Email Confirmation</title>
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  <style type="text/css">
	  /**
	   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
	   */
	  @media screen {
		@font-face {
		  font-family: 'Source Sans Pro';
		  font-style: normal;
		  font-weight: 400;
		  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
		}
		@font-face {
		  font-family: 'Source Sans Pro';
		  font-style: normal;
		  font-weight: 700;
		  src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
		}
	  }
	  /**
	   * Avoid browser level font resizing.
	   * 1. Windows Mobile
	   * 2. iOS / OSX
	   */
	  body,
	  table,
	  td,
	  a {
		-ms-text-size-adjust: 100%; /* 1 */
		-webkit-text-size-adjust: 100%; /* 2 */
	  }
	  /**
	   * Remove extra space added to tables and cells in Outlook.
	   */
	  table,
	
	  /**
	   * Better fluid images in Internet Explorer.
	   */
	  img {
		-ms-interpolation-mode: bicubic;
	  }
	  /**
	   * Remove blue links for iOS devices.
	   */
	  a[x-apple-data-detectors] {
		font-family: inherit !important;
		font-size: inherit !important;
		font-weight: inherit !important;
		line-height: inherit !important;
		color: inherit !important;
		text-decoration: none !important;
	  }
	  /**
	   * Fix centering issues in Android 4.4.
	   */
	  div[style*="margin: 16px 0;"] {
		margin: 0 !important;
	  }
	  body {
		width: 100% !important;
		height: 100% !important;
		padding: 0 !important;
		margin: 0 !important;
	  }
	  /**
	   * Collapse table borders to avoid space between cells.
	   */
	  table {
		border-collapse: collapse !important;
	  }
	  a {
		color: #1a82e2;
	  }
	  img {
		height: auto;
		line-height: 100%;
		text-decoration: none;
		border: 0;
		outline: none;
	  }
	  </style>
	
	</head>
	<body style="background-color: #e9ecef;">
	
	  <!-- start preheader -->
	  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
		A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
	  </div>
	  <!-- end preheader -->
	
	  <!-- start body -->
	  <table border="0" cellpadding="0" cellspacing="0" width="100%">
	
		<!-- start hero -->
		<tr>
		  <td align="center" bgcolor="#e9ecef">
			<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
			<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
			  <tr>
				<td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
				  <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Thanks for signing up for My website</h1>
				</td>
			  </tr>
			</table>
			<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
		  </td>
		</tr>
		<!-- end hero -->
	
		<!-- start copy block -->
		<tr>
		  <td align="center" bgcolor="#e9ecef">
			<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
			<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
	
			  <!-- start copy -->
			  <tr>
				<td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
				  <p style="margin: 0;">We're happy you're here. Let's get your email address verified:
 
				</td>
			  </tr>
			  <!-- end copy -->
	
			  <!-- start button -->
			  <tr>
				<td align="left" bgcolor="#ffffff">
				  <table border="0" cellpadding="0" cellspacing="0" width="100%">
					<tr>
					  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
						<table border="0" cellpadding="0" cellspacing="0">
						  <tr>
							<td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
							  <a href=${url} target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">Click to Activate your Account</a>
							</td>
						  </tr>
						</table>
					  </td>
					</tr>
				  </table>
				</td>
			  </tr>
			  <!-- end button -->
	
			  <!-- start copy -->
			  <tr>
				<td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
				 
				</td>
			  </tr>
			  <!-- end copy -->
	
			  <!-- start copy -->
			  <tr>
			  		

				<td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
							  <h4 style="margin: 0;">Have A Nice Day 😊</h4>
  <p style="margin: 0;">Sincarely,<br> Amr</p>
				</td>
			  </tr>
			  <!-- end copy -->
	
			</table>
			<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
		  </td>
		</tr>
		<!-- end copy block -->
	
		<!-- start footer -->
		<tr>
		  <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
			<!--[if (gte mso 9)|(IE)]>
			<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
			<tr>
			<td align="center" valign="top" width="600">
			<![endif]-->
			<table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
	
			  <!-- start permission -->
			  <tr>
				<td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
				  <p style="margin: 0;">You received this email because we received a request for confirm  for your account.</p>
				</td>
			  </tr>
			  <!-- end permission -->
	
			  <tr>
				<td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
			   
				  <p style="margin: 0;">Giza -Cairo</p>
				</td>
			  </tr>
			  <!-- end unsubscribe -->
	
			</table>
			<!--[if (gte mso 9)|(IE)]>
			</td>
			</tr>
			</table>
			<![endif]-->
		  </td>
		</tr>
		<!-- end footer -->
	
	  </table>
	  <!-- end body -->
	
	</body>
	</html>`
	try {
		const transporter = nodemailer.createTransport({

			service: process.env.SERVICE,
			port:465,
			secure:true,
			Logger:true,
			debugger:true,
			secureConnection:false,
			tls:{
				rejectUnAuthorized:true
			},
			
			auth: {
				user: process.env.USER,
				pass: process.env.PASSWORD,
			},
		});
		
let mail ={
			from: process.env.USER,
			to: email,
			subject: "Verify Your Account",
			html: txt,
		}
		const info=await transporter.sendMail(mail) 
		console.log("Email sent:", info.response);
		return { success: true, message: "Email sent successfully" };
	  } catch (error) {
		console.error("Email sending failed:", error);
		console.log(process.env.SERVICE)

		throw new BadRequestException({
		  success: false,
		  message: "Failed to send email",
		  error: error.message,
		});
	
		
	}}
dotenv.config()
