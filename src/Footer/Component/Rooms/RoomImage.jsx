import React from 'react';
import { Link } from 'react-router-dom';

const RoomImage = ({data}) => {
    return (
        <div>
        <Link to={`/${data.room_name}`}>
        <div>
        <img className='relative' src={data.image} alt="" />
        < p className='absolute top-0 left-1 text-4xl font-bold '>{data.room_name}</p>
        </div>
        </Link>
        </div>
    );
};

export default RoomImage;