import React from 'react';

import { Container, Main } from './style';
import Header from './Header';
import Footer from './Footer';

function AppLayout({ children }) {
    return (
        <>
            <Container>
                <Header />
                <Main>{children}</Main>
                <Footer />
            </Container>
        </>
    );
}

export default AppLayout;