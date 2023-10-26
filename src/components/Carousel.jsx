import "@splidejs/react-splide/css";
// import { useState } from "react";
import React, { useEffect, useState, useRef } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { URLHash } from "@splidejs/splide-extension-url-hash";
import "./Carousel.css";

const slidesData = [
	{
		src: "https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg",
		alt: "Rage Against the Machine",
		hash: "rage-against-the-machine",
		id: 1,
	},
	{
		src: "https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg",
		alt: "Kid Cudi",
		hash: "kid-cudi",
		id: 2,
	},
	{
		src: "https://consequence.net/wp-content/uploads/2022/05/Harry-Styles-2022.jpeg?quality=80",
		alt: "Harry Styles",
		hash: "harry-styles",
		id: 3,
	},
	{
		src: "https://s1.ticketm.net/dam/a/63b/af7004ce-1b0c-4523-8e27-975ccbbb863b_1707461_RETINA_PORTRAIT_16_9.jpg",
		alt: "Demi Lovato",
		hash: "demi-lovato",
		id: 4,
	},
	{
		src: "https://s1.ticketm.net/dam/a/158/c4163788-def4-40a4-af51-df3bc0eaf158_1719771_RETINA_PORTRAIT_16_9.jpg",
		alt: "The Mars Volta",
		hash: "the-mars-volta",
		id: 5,
	},
	{
		src: "https://s1.ticketm.net/dam/a/40c/c3796189-4b81-425d-ab1b-f2b34c38f40c_1714331_RETINA_PORTRAIT_16_9.jpg",
		alt: "Post Malone",
		hash: "post-malone",
		id: 6,
	},
	{
		src: "https://s1.ticketm.net/dam/a/9f3/9b28e63a-467b-4bcc-b86e-0990372789f3_1695141_RETINA_PORTRAIT_16_9.jpg",
		alt: "Kendrick Lamar",
		hash: "kendrick-lamar",
		id: 7,
	},
	{
		src: "https://s1.ticketm.net/dam/a/3c8/535b4cbd-e6c0-4735-adbc-29390b4073c8_1706671_RETINA_PORTRAIT_16_9.jpg",
		alt: "Carly Rae Jespen",
		hash: "carly-rae-jespen",
		id: 8,
	},
	{
		src: "https://s1.ticketm.net/dam/a/4b5/1120696d-e3d3-41df-bf8c-f8236b1484b5_1690811_RETINA_PORTRAIT_16_9.jpg",
		alt: "Gorillaz",
		hash: "gorillaz",
		id: 9,
	},
	{
		src: "https://s1.ticketm.net/dam/a/1ba/96c9fddd-645d-4d41-83b0-962f7308b1ba_1705011_RETINA_PORTRAIT_16_9.jpg",
		alt: "Panic at the Disco",
		hash: "panic-at-the-disco",
		id: 10,
	},
];

export default function Carousel() {
	const [count, setCount] = useState(0);

	function incrementCount() {
		setCount((prevCount) => count + 1);
	}

	const mainRef = useRef();
	const thumbsRef = useRef();

	useEffect(() => {
		if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
			mainRef.current.sync(thumbsRef.current.splide);
		}
	}, []);

	const eventSlides = slidesData.map((slidesData) => (
		<SplideSlide
			key={slidesData.id}
			data-splide-hash={slidesData.hash}
			className="splide__slide">
			<img src={slidesData.src} alt={slidesData.alt} />
		</SplideSlide>
	));

	// const extensions = {
	// 	urlhash: URLHash,
	// };
	const mainOptions = {
		type: "fade",
		rewind: true,
		pagination: false,
		arrows: true,
	};

	const thumbsOptions = {
		fixedWidth: 100,
		fixedHeight: 60,
		gap: 10,
		rewind: true,
		pagination: false,
		isNavigation: true,
		breakpoints: {
			600: {
				fixedWidth: 60,
				fixedHeight: 44,
			},
		},
	};

	return (
		<div className="splide">
			<Splide
				hasTrack={false}
				tag="section"
				extensions={{ URLHash }}
				options={mainOptions}
				ref={mainRef}>
				<SplideTrack className="splide__track">{eventSlides}</SplideTrack>
			</Splide>
			<Splide options={thumbsOptions} ref={thumbsRef}>
				{eventSlides}
			</Splide>
		</div>
	);
}
