import React, { useLayoutEffect, useState, useRef, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';



import video from "../assets/images/video.mp4"
import logo from "../assets/images/logo.png"
import smarthome from "../assets/images/smarthome.png"

import product1 from "../assets/images/product1.jpg"
import product2 from "../assets/images/product2.jpg"
import robot_vacuum from "../assets/images/robot_vacuum.png"

import { ProductCard, ProductImage, ProductInfo, ProductImg } from './homeStyle';


import { StickyContainer, Sticky } from 'react-sticky';
import "animate.css"

const Home = () => {
	const [elmentHeight, setHeight] = useState(0);
	const imgRef = useRef(null);

	useLayoutEffect(() => {
		function updateSize() {
			setHeight(2*imgRef.current.offsetWidth * 806 / 1600);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);

	const elmentStyle = {
		height:elmentHeight+"px"
	}

	return (
	<>
		<section className="banner" style={{height:892+"px"}}>

			<div className="video-parent">
				<video muted autoPlay loop className="homeVideo" playsInline>
					<source src={video} type="video/mp4" />
				</video>
			</div>
			<Container>
				<Row className="aligh-items-center">
					<Col>
						<TrackVisibility offset={100}>
						{({ isVisible }) =>
							<div className={"main-text-box"+ ` ${isVisible ? "animate__animated animate__fadeInLeft" : ""}`}>
								<img src={logo} />
								<div className="about-text p-2">
									<h1>با آپادانا</h1>
									<div>
										<h3>خونتو هوشمند کن</h3>
										<h3>خونتو هوشمند کن</h3>
									</div>
								</div>
							</div>
						}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
    
		<section className="sec-down sec d-flex justify-content-center align-items-center flex-column">
			<div className="align-self-center text-center auwidth p-4">
				<img src={smarthome} />
			</div>
			<div className="d-flex flex-column align-self-center auwidth p-4">
				<div className="about-text p-2">
					<h2>چرا خانه هوشمند؟</h2>
					<div>
						<h3>آپادانا <strong className="title-box">بهترین</strong> گزینه</h3>
						<h3>برای خانه هوشمند شما</h3>
					</div>
				</div>
				<p className="p-2">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
				<div className="d-flex justify-content-around">
					<button className="contact-btn">بیشتر بخوانید</button>
					{/*<AwesomeButton type="primary">Primary</AwesomeButton>*/}
				</div>
			</div>

		</section>

		<StickyContainer>
		<section className={"sec sec-top d-flex  product-example"} style={elmentStyle}>
			<Sticky topOffset={20}>
				{({ style }) => 
				<div style={style}>
					<div className="model-info">
						<div className="about-text p-2">
							<h2>با آپادانا</h2>
							<div>
								<h3>آپادانا  گزینه</h3>
								<h3>برای خانه هوشمند شما</h3>
							</div>
						</div>
					</div>
				</div>
				}
				
			</Sticky>
			<div className="model-image align-content-end" ref={imgRef}>
				<TrackVisibility once>
				{({ isVisible }) => <img src={product1} className={` ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`} /> }
				</TrackVisibility>

				<TrackVisibility once>
				{({ isVisible }) => <img src={product2} className={` ${isVisible ? "animate__animated animate__fadeIn" : "opacity-0"}`} /> }
				</TrackVisibility>
			</div>

		</section>
		</StickyContainer>
		<section className="sec sec-down d-flex justify-content-center align-items-center ">
			
			<ProductCard>
				<ProductImage>
					<ProductImg src={robot_vacuum} />
				</ProductImage>
				

				<ProductInfo />
			</ProductCard>


		</section>
		<section className="sec sec-down"></section>
		<section className="sec sec-down"></section>
		<section className="sec sec-down"></section>
		<section className="sec sec-down"></section>
		<section className="sec sec-down"></section>
		<section className="sec sec-down"></section>

	</>
	);
};

export default Home;
