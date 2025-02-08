import "../styles/globals.css"; // Ensures Tailwind CSS is applied globally

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
