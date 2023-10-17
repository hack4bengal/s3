import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

const Bingo = () => {

    const navigate=useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/bingo') {
            setTimeout(() => {
                window.location.href = "https://hack4bengals2.notion.site/Challenges-228509b136194c21b9a73a12c861dbef";
            }, 0);
        }
    }, []);

    return (
        <>            
        
        <div className="hack4bengal__navbar-container">
        <Navbar />
    </div>


            <div className='externalpage' style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 'auto', justifyItems: 'center', fontWeight: '600', fontFamily: 'sans-serif', fontSize: '3rem', height: '100vh' }}>
                <p> Loading Bingo 🚀 </p>
            </div>

        </>
    );
}

export default Bingo

