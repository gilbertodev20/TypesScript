import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./sidebar";

import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.conteiner}>
            <Header />
            <div className={styles.mais}>
                <Sidebar />
                <div className={styles.content}>{children}</div>
            </div>
           <Footer/>
        </div>
    )
}
export default Layout