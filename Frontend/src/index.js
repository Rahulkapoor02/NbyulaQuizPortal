import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const reCaptchaKey = "6LfcNn4gAAAAAFiGgn5dC5fwgxvhA0rgm5w7e36M";

ReactDOM.render(
	<React.StrictMode>
		<GoogleReCaptchaProvider
			reCaptchaKey={reCaptchaKey}
		>
			<App />
		</GoogleReCaptchaProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
