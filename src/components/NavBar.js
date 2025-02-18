const NavBar = () => {

    const NavBarStyle = {
        backgroundColor: 'rgb(135, 206, 235)',
        padding: '10px 20px',
        width: '60%',
        display: 'flex',
        gap: '20px',
        margin: '10px auto',
        borderRadius: '50px',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }

    const NavBarButtonStyle = {
        borderRadius: '30px',
        backgroundColor: 'white',
        padding: '8px 20px',
        color: '#333',
        fontSize: '16px',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
    }

    const handleHoverIn = (e) => {
        e.target.style.backgroundColor = '#ddd';
        e.target.style.transform = 'scale(1.1)';
    }

    const handleHoverOut = (e) => {
        e.target.style.backgroundColor = 'white';
        e.target.style.transform = 'scale(1)';
    }

    return (
        <div style={NavBarStyle}>
            <button
                style={NavBarButtonStyle}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
            >
                Home
            </button>
            <button
                style={NavBarButtonStyle}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
            >
                Blogs
            </button>
            <button
                style={NavBarButtonStyle}
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
            >
                Contact Me
            </button>
        </div>
    );
}

export default NavBar;
