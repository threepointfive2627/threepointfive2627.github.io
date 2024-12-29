import { useState } from 'react';
import './gallery.css';
import CloseIcon from '@mui/icons-material/Close';
import Img1 from './images/image1.jpg';
import Img2 from './images/image2.jpg';
import Img3 from './images/image3.jpg';
import Img4 from './images/image4.jpg';
import Img5 from './images/image5.jpg';
import Img6 from './images/image6.jpg';
import Img7 from './images/image7.jpg';
import Img8 from './images/image8.jpg';
import Img9 from './images/image9.jpg';
import Img10 from './images/image10.jpg';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: Img1,
            name: 'Drip',
            price: '$50',
        },
        {
            id: 2,
            imgSrc: Img2,
            name: 'Fire Pants',
            price: '$70',
        },
        {
            id: 3,
            imgSrc: Img3,
            name: 'T-Shirt',
            price: '$40',
        },
        {
            id: 4,
            imgSrc: Img4,
            name: 'Nathan T-Shirt',
            price: '$60',
        },
        {
            id: 5,
            imgSrc: Img5,
            name: 'Ethan Pants',
            price: '$80',
        },
        {
            id: 6,
            imgSrc: Img6,
            name: 'Byron Sweatshirt',
            price: '$55',
        },
        {
            id: 7,
            imgSrc: Img7,
            name: 'Henry Shorts',
            price: '$65',
        },
        {
            id: 8,
            imgSrc: Img8,
            name: 'Fire Drip',
            price: '$45',
        },
        {
            id: 9,
            imgSrc: Img9,
            name: 'Christmas Drip',
            price: '$75',
        },
        {
            id: 10,
            imgSrc: Img10,
            name: 'Frosty The Snowman',
            price: '$50',
        },
    ];

    const [model, setModel] = useState(false);
    const [tempImg, setTempImg] = useState({ imgSrc: '', name: '', price: '' });

    const getImg = (item) => {
        setTempImg(item);
        setModel(true);
    };
    
    return (
        <>
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImg.imgSrc} alt={tempImg.name} />
                <div className="image-details">
                    <h2>{tempImg.name}</h2>
                    <p>{tempImg.price}</p>
                </div>
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div
                            className="pics"
                            key={index}
                            onClick={() => getImg(item)}
                        >
                            <img src={item.imgSrc} alt={item.name} />
                            <div className="info">
                                <h3>{item.name}</h3>
                                <span>{item.price}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Gallery;
