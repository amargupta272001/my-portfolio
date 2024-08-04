import React from 'react'

const Layout = ({ children, className = "" }) => {
    return (
        <div className={`w-full h-full inline-block max-w-[1440px] mx-auto z-0 p-32 xl:p-24 lg:p-16 mb:p-12 sm:p-8 ${className}`}>{children}</div>
    )
}

export default Layout