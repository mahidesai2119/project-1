function Header() {
    return (
        <main style={main.navstyle}>
            <div>
                <img style={main.logostyle} src="https://bookscape.com/_next/static/media/bookscapelogo.3fe396d0.svg" alt="logo" />
            </div>

            <div>
                <ul style={main.ulstyle}>
                    <li>Home</li>
                    <li>Service</li>
                    <li>About</li>
                    <li>Contact-Us</li>
                </ul>
            </div>
        </main>
    );
}

const main = {
    navstyle: {
        width: "100%",
        height: "75px",
        padding: "0 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #e8e1d8",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)",
        boxSizing: "border-box"
    },

    logostyle: {
        width: "120px",
        height: "50px",
        objectFit: "contain"
    },

    ulstyle: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "35px",
        listStyle: "none",
        margin: 0,
        padding: 0,
        color: "#3d352d",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer"
    }
};

export default Header;