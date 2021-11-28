const Layout = ({ children }) => {
    return (
        <div className="content bg-black justify-center flex min-h-screen w-full">
            { children }
        </div>
    );
}

export default Layout;