import Layout from "@web/core/layout";
import "@web/core/styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { FC, ReactElement } from "react";

const App: FC<AppProps> = ({ Component, pageProps }): ReactElement => {
	return (
		<>
			<Head>
				<title>NX-NEXT-STARTER</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
};

export default App;
