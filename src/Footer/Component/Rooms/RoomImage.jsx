import React from 'react';
import { Link } from 'react-router-dom';

const RoomImage = ({data}) => {
    return (
        <div>
        <Link to={`/${data.room_name}`}>
        <img src={data.image} alt="" />
        </Link>
        </div>
    );
};

export default RoomImage;