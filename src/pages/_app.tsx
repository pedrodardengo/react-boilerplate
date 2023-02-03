import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'src/styles/global'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title> React Avançado - BoilerPlate</title>
				<link rel="shortcut icon" href="/public/next.svg" />
				<link rel="apple-touch-icon" href="/public/next.svg" />
				<meta
					name="description"
					content="A simple project Starter to work with Typescript, React,
				 Next JS, and Styled Components"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	)
}
