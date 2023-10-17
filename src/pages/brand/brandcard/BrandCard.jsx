import React from 'react'
import "./BrandCard.css"

const BrandCard = ({ brand }) => {
    return (
        <>

            <div className="brandcard_parent">
                <img src={brand?.image} alt="" className='brandcard_preview' />
                <div className="brandcard_name"><p>{brand?.name}</p></div>

                <a
                    className='brandcard_downloadbtn'
                    href={brand?.image}
                    download
                >
                    PNG
                </a>
            </div>

        </>
    )
}

export default BrandCard