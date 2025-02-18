
const Biography = () => {

    const BiographyContainerStyle = {
        width: '50%',
        height: '250px',
        margin: '10px auto',
        display: 'flex',
        displayDirection: 'column',
        gap: '20px'
    }

    const BioImageStyle = {
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1);'
    }

    return (
        <div style={BiographyContainerStyle}>
            <div style={{'width' :'80%', 'display' : 'flex', 'flexDirection' : 'column'}}>
                <h1>Hello Friends!</h1>
                <p>My name is Bismillah, Millah for short! I am an Entrepreneur, a Data Scientist and a Software Developer.
                    I love programming, playing with data 
                </p>
            </div>
            <img 
                style={BioImageStyle}
                src="IMG_6559.jpeg">
            </img>
        </div>
    )
}


export default Biography;