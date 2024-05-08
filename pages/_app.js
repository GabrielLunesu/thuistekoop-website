// pages/_app.js
import '../src/app/globals.css';
import Header from '../src/app/components/Header'; // Adjust the path as necessary
import Footer from '../src/app/components/Footer'; // Adjust the path as necessary
import { UserProvider } from '@auth0/nextjs-auth0/client';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}

export default MyApp;
