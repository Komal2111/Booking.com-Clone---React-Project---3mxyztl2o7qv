import React from 'react'
import "./featured.css"
export default function Featured() {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <img src="https://www.hotelierindia.com/public/images/2020/02/20/Image_Radisson-Hotel-Group-Starts-2020-On-A-High-With-17-New-Hotels-In-India.jpg" alt="" className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Image1</h1>
                    <h2>1</h2>
                </div>
            </div>
            <div className='featuredItem'>
                <img src="https://www.hotelierindia.com/public/images/2020/02/20/Image_Radisson-Hotel-Group-Starts-2020-On-A-High-With-17-New-Hotels-In-India.jpg" alt="" className='featuredImg' />
                <div className='featuredTitles'><h1>Image2</h1>
                    <h2>2</h2></div>
            </div>
            <div className='featuredItem'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hotelscombined.com%2Fnews%2Fwp-content%2Fuploads%2Fsites%2F314%2F2020%2F09%2FPark-Hyatt-Melbourne-ICE-49863-62541586_3XL-307397-scaled.jpg&f=1&nofb=1&ipt=7f61f484bf40a2939b05709a2aa69d8099062b9135c2ee93bd4f011c31054f76&ipo=images" alt="" className='featuredImg' />
                <div className='featuredTitles'>
                    <h1>Image3</h1>
                    <h2>3</h2>
                </div>
            </div>
        </div>)
}
