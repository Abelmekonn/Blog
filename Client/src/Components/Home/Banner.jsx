import React, { useEffect, useState } from 'react'

const Banner = ({ Bgimgage1, Bgimage2, text }) => {
    const [currentBG, setCurrentBG] = useState(Bgimgage1)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBG(currentBG === Bgimgage1 ? Bgimage2 : Bgimgage1)
        }, 5000);
        return () => clearInterval(interval);
    }, [currentBG])




    return (
        <div className='W-full'
            style={{
                backgroundImage: `url(${currentBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '60vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '4rem',
                textTransform: 'uppercase',
                fontWeight: 'bold',
            }}
        >
            <h1>{text}</h1>
        </div>
    )
}

export default Banner
