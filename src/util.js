import { v4 as uuidv4 } from "uuid";

 export default function chillhop(){
            return(
                [
                    {
       name: "let's Ride",
       artist :"Teddy Roxpin",
       cover : "https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg",
       id: uuidv4(),
       active: true,
       color: ["#E9CA92","#2F2319"],
       audio: "//mp3.chillhop.com/serve.php/?mp3=45229" 
                    },
                    {
        name:'funky record',
        artist: 'Toddy Roxpin',
        cover: 'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
        color:["#E9CA92","#2F2319"],
        audio:"https://mp3.chillhop.com/serve.php/?mp3=45230",
        //  audio:'https://mp3.chillhop.com/serve.php/?mp3=42241',

        active: false,
       id: uuidv4(),


                    },
                    {
            name: "nightcrawler",
            artist: "Toddy Roxpin",
            cover:'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
            color:["#E9CA92","#2F2319"],
            audio:"https://mp3.chillhop.com/serve.php/?mp3=45232",
            active:false,
            id: uuidv4(),
            
                    },

                   {
                    name:"one for mac",
                    artist:"Toddy Roxpin",
                    cover:'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
                    color:["#E9CA92","#2F2319"],
                    audio:"https://mp3.chillhop.com/serve.php/?mp3=45231",
                    active:false,
                    id: uuidv4(),

                   },
                   {
                    name:"about it",
                    artist:"Toddy Roxpin",
                    cover:'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
                    color:["#E9CA92","#2F2319"],
                    active:false,
                    audio:"https://mp3.chillhop.com/serve.php/?mp3=45233",
                    id: uuidv4(),

                   },
                   {
                    name:"Green valley trail",
                    artist: "Toddy Roxpin",
                    active:false,
                    cover:'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
                    color:["#E9CA92","#2F2319"],
                    audio:"https://mp3.chillhop.com/serve.php/?mp3=41930",
                    id: uuidv4(),

                   },
                   {
                    name: "highland park after",
                    artist: "Toddy Roxpin",
                    color: ["#000000","#5A4531"],
                    cover:'https://chillhop.com/wp-content/uploads/2022/09/8504dc266e0c0d7c3c9e3581b1c34426648a4027-1024x1024.jpg',
                    audio:"https://mp3.chillhop.com/serve.php/?mp3=41931",
                    active:false,
                    id: uuidv4(),
                    
                   }
                ]
            )

}