import decrease from './src/assets/decrease.svg';
import increase from './src/assets/increase.svg';
import green from './src/assets/green.svg';
import red from './src/assets/red.svg';
import rotate from './src/assets/rotate.svg';
import boxtick from './src/assets/boxtick.svg';
import coin from './src/assets/coin.svg';
import cart from './src/assets/cart.svg';
import image from './src/assets/image.png';
import image1 from './src/assets/image1.png';
import image2 from './src/assets/image2.png';
import image3 from './src/assets/image3.png';
import image4 from './src/assets/image4.png';

export const platform = [
    {
        id: 1,
        amount: 2500000,
        title: "Book Bazaar",
        percent: 15,
        color:"#6160DC",
    },
    {
        id: 2,
        amount: 1800000,
        title: "Artisan Aisle",
        percent: 10,
        color:"#54C5EB",
    },
    {
        id: 3,
        amount: 1200000,
        title: "Toy Troop",
        percent: 8,
        color:"#FFB74A",
    },
    {
        id: 4,
        amount: 600000,
        title: "XStore",
        percent: 5,
        color:"#FF4A55",
    },
]

export const order = [
    {
        id:1,
        img:image,
        name:'Marcus Bergson',
        date:'Nov 15, 2023',
        amount:'80,000',
        status:'Paid',
        color:'#34CAA5'
    },
    {
        id:2,
        img:image1,
        name:'Jaydon Vaccaro',
        date:'Nov 15, 2023',
        amount:'150,000',
        status:'Refund',
        color:'#ED544E'
    },
    {
        id:3,
        img:image2,
        name:'Corey Schleifer',
        date:'Nov 14, 2023',
        amount:'87,000',
        status:'Paid',
        color:'#34CAA5'
    },
    {
        id:4,
        img:image3,
        name:'Corey Press',
        date:'Nov 14, 2023',
        amount:'100,000',
        status:'Refund',
        color:'#ED544E'
    },
    {
        id:5,
        img:image4,
        name:'Phillip Lubin',
        date:'Nov 13, 2023',
        amount:'78,000',
        status:'Paid',
        color:'#34CAA5'
    },
]

export const report = [
    {
        id:1,
        icon:boxtick,
        status:green,
        title:'Total Order',
        amount:350,
        percent:'23.5%',
        status1:increase,
        color:'#34CAA5',
        backgroundColor: '52, 202, 165',
    },
    {
        id:2,
        icon:rotate,
        status:red,
        title:'Total Refund',
        amount:270,
        percent:'23.5%',
        status1:decrease,
        color:'#ED544E',
        backgroundColor: '237, 84, 78',
    },
    {
        id:3,
        icon:cart,
        status:red,
        title:'Total Refund',
        amount:1567,
        percent:'23.5%',
        status1:decrease,
        color:'#ED544E',
        backgroundColor: '237, 84, 78',
    },
    {
        id:4,
        icon:coin,
        status:green,
        title:'Average Sales',
        amount:'$350,000',
        percent:'23.5%',
        status1:increase,
        color:'#34CAA5',
        backgroundColor: '52, 202, 165',
    },
]