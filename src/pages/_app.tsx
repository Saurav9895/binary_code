import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>Binary&apos;s Code</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/top-logo.png' />
				<meta
					name='description'
					content='Best web application to practice the problems.'
				/>
			</Head>
			<ToastContainer />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}
