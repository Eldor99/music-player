import {
    v4 as uuidv4
} from 'uuid';

function chillHop() {
    return [{
            name: 'There and Back',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            artist: 'Shopan',
            id: uuidv4(),
            active: false,
            color: ['#C8B1C5', '#275564'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10311'
        },
        {
            name: 'You and I',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            artist: 'melodiesinfonie',
            id: uuidv4(),
            active: false,
            color: ['#C8B1C5', '#275564'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10339'
        },
        {
            name: 'Frozen Time',
            cover: 'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
            artist: 'Kendall Milles',
            id: uuidv4(),
            active: false,
            color: ['#C8B1C5', '#275564'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=10329'
        }

    ]
}