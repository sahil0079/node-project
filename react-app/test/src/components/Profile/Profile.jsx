import React from 'react';
import './Profile.css';


const user = {
    name: "John",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroDla1sUxmbFyA7Ot-7vpV3l6suHiZtGBXzwQwmpdcA&s",
    imageSize: 100
}

export default function Profile() {
    return (
        <div>
            <h1> {user.name} </h1>
            <img
                className='avatar'
                src={user.imageUrl}
                alt="photo"
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </div>
    )
}

