import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "./button/Button";

const About = ({ history }) => {
	const box = document.getElementById("About-box");

	let location = useLocation();

	const goBack = (e) => {
		if (
			location.pathname === "/about" &&
			!(box === e.target) &&
			e.target === document.getElementById("About-page")
		) {
			history.goBack("click");
		}
	};

	useEffect(() => {
		window.addEventListener("click", goBack);
		return () => {
			window.removeEventListener("click", goBack);
		};
	}, []);

	return (
		<div className="About" id="About-page">
			<Button type="closeBtn" onClick={() => history.goBack()}>
				&times;
			</Button>
			<div className="About-box" id="About-box">
				<div className="About-box__section">
					<h4>Hej där, och välkommen till digitala karriärrevet!</h4>
				</div>
				<div className="About-box__section">
					<p>
						TEST Karriärrevet är till för dig som vill veta mer om medietekniks
						masterprogram och de valbara kurser som finns att välja mellan i
						årskurs 3. Karriärrevet arrangeras av <b>NLG</b> och sker vanligtvis
						i samband med en torsdagspub i META eller i en annan lokal på KTH.
						För att göra detta event tillgängligt för fler studenter så har vi i
						år valt att hålla det digitalt! Dessutom råkar det vara väldigt
						pandemi-vänligt.{" "}
					</p>
					<p>
						Med terminslut kommer ibland vissa kluriga beslut. Vilka kurser ska
						jag välja? Vad verkar roligt? Hur ser ens den där mastern ut?
					</p>
					<p>
						Vi vet att det kan finnas många förvirrade tvåor och treor där ute
						och det här projektet är för att hjälpa er! Vi har samlat intervjuer
						med studenter som förhoppningsvis kan hjälpa er i beslutsångesten,
						eller i alla fall hjälpa er att få en klarare bild över en valbar
						kurs eller ett masterprogram.{" "}
					</p>
					<p>Scrolla på och njut!</p>
					<p className="signature">{`// Vi i NLG`}</p>
				</div>
			</div>
		</div>
	);
};

export default About;
