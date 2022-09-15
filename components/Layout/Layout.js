import { Fragment } from 'react';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

const Layout = (props) => {
  return (
    <Fragment>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
