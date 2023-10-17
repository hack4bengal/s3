import React, { useEffect } from 'react'
import "./Brand.css"
import Navbar from '../../components/navbar/Navbar'
import brandassetsData from './BrandAssetsData'
import BrandCard from './brandcard/BrandCard'

const Brand = () => {


    return (
        <>
            <Navbar />
            <div className="brandPage_parent">
                <h1>Brands</h1>
                <hr />
                <br />
                <br />

                <div className="brandPage_brandCard_parent">
                    {brandassetsData.map((brand) => {
                        return (
                            <BrandCard brand={brand} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Brand