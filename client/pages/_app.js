// pages/_app.js
import '../src/app/globals.css';
import Header from '../src/app/components/Header'; // Adjust the path as necessary
import Footer from '../src/app/components/Footer'; // Adjust the path as necessary

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
