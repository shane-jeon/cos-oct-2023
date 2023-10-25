import "@splidejs/react-splide/css";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export default function Carousel() {
	// return <h1>"Hello World"</h1>;
	return (
		<div>
			<Splide>
				<SplideSlide>
					<img src="https://s1.ticketm.net/dam/a/139/c8020758-7aaf-40e9-b3ab-2dad77f61139_1286271_RETINA_PORTRAIT_16_9.jpg" />
				</SplideSlide>
				<SplideSlide>
					<img src="https://s1.ticketm.net/dam/a/5eb/9d6670df-9dd6-4463-90a1-ca27d074f5eb_1722401_RETINA_PORTRAIT_16_9.jpg" />
				</SplideSlide>
			</Splide>
		</div>
	);
}
