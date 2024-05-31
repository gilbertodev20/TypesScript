import React from "react"
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Background pink</h1>
            {children}
        </div>
    )
}
export default Layout