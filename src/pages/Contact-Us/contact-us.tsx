import React, { FC } from 'react';

import Navbar from '../../components/NavBar/navbar';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUsers } from '@fortawesome/free-solid-svg-icons';

import './contact-us.scss';

const ContactUs: FC = (): JSX.Element => {
    return (
        <>
            <Navbar />
            <main className="contact-body">
                <div className="splash-content">
                    <section className="Header text-3xl md:text-5xl">
                        <h1>Ways to contact us</h1>
                    </section>
                    <section className="splash-section">
                        <a href="mailto:general@hackmerced.com?subject=HackMerced Questions&amp;body=Dear HackMerced,">
                            <FontAwesomeIcon icon={faEnvelope} className="fa" />
                        </a>
                        <h4>Email us at general@hackmerced.com</h4>
                    </section>
                    <section className="splash-section">
                        <FontAwesomeIcon icon={faUsers} className="fa" />
                        <h4>Connect with our social medias: @hackmerced</h4>
                    </section>
                    <Form formTitle="Message Us" askCompany={false} />
                </div>
            </main>
            <Footer />
        </>
    );
};

export default ContactUs;
