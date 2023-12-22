import React from "react";
import {
	Box,
	FooterContainer,
	Row,
	Column,
	FooterLink,
	Heading,
} from './Footerstyles';

const Footer = () => {
	return (
		<Box>
			<h1
				style={{
					color:"hotpink",
					textAlign: "center",
					marginBottom:"10px",
				}}
			>
				LIFE INSURANCE
				
			</h1><br></br>
			<FooterContainer>
				<Row>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">
							Aim
						</FooterLink>
						<FooterLink href="#">
							Vision
						</FooterLink>
						<FooterLink href="#">
							Testimonials
						</FooterLink>
					</Column>
					<Column>
					
						<Heading>Services</Heading>
						<FooterLink href="#">
							Car Insurance
						</FooterLink>
						<FooterLink href="#">
							Home Insurance
						</FooterLink>
						<FooterLink href="#">
							Investment
						</FooterLink>
						<FooterLink href="#">
							Health Insurance
						</FooterLink>
						<FooterLink href="#">
							Business
						</FooterLink>
					</Column>

					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">
							Uttar Pradesh
						</FooterLink>
						<FooterLink href="#">
							Ahemdabad
						</FooterLink>
						<FooterLink href="#">
							Indore
						</FooterLink>
						<FooterLink href="#">
							Mumbai
						</FooterLink>
					</Column>

					<Column>
					
					<Heading>Social Media</Heading>
					<FooterLink href="#">
					Facebook
					</FooterLink>
					<FooterLink href="#">
						Instagram
					</FooterLink>
					<FooterLink href="#">
						Twitter
					</FooterLink>
					<FooterLink href="#">
						WhatsApp
					</FooterLink>
					<FooterLink href="#">
						Youtube
					</FooterLink>
				</Column>





					{/* <Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span
									style={{
										marginLeft: "10px",
									}}
								>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column> */}
				</Row>
			</FooterContainer>
		</Box>
	);
};
export default Footer;
