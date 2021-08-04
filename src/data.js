/* npm install uuid to generate random uuid for each song */
import { v4 as uuidv4 } from 'uuid';


function musicList(){
    return [{
        name:"City Ruins",
        artist:"Keiichi Okabe",
        cover:"https://i.scdn.co/image/ab67616d00001e02ed95475b3dc851763cd858a8",
        id: uuidv4(),
        active:true,
        color:["#5A7265","#E4EFF7"],
        music:'../music/Nier-OST_City_Ruins.mp3'
    },{
        name:"Dynamite",
        artist:"BTS",
        cover:"https://i.scdn.co/image/ab67616d00001e02755995e9ff2b1b0c753f5eb8",
        id: uuidv4(),
        active:false,
        color:["#754E87","#F0557D"],
        music:'../music/BTS-Dynamite.mp3'
    },{
        name:"Peaches",
        artist:"Justin Bieber - Peaches ft. Daniel Caesar, Giveon",
        cover:"https://i.scdn.co/image/ab67616d00001e02e6f407c7f3a0ec98845e4431",
        id: uuidv4(),
        active:false,
        color:["#08F1EB","#BACE51"],
        music:'../music/Peaches.mp3'
    },
    {
        name:"Tie Me Down",
        artist:"Gryffin ft. Elley Duhé",
        cover:"https://i.scdn.co/image/ab67616d00001e022ebfbbd6e66e5bb54f30fb0f",
        id: uuidv4(),
        active:false,
        color:["#00506C","#603446"],
        music:'../music/Tie-Me-Down.mp3'
    },{
        name:"I won't find",
        artist:"Park eunok",
        cover:"https://i.scdn.co/image/ab67616d00001e029f0b16a20e9bdaf206663157",
        id: uuidv4(),
        active:false,
        color:["#F9D6B3","#D3FFFE"],
        music:'../music/I_wont_find.mp3'
    },{
        name:"7!!",
        artist:"Orange ",
        cover:"https://i.scdn.co/image/ab67616d00001e023dfa792536844032b9561aea",
        id: uuidv4(),
        active:false,
        color:["#00506C","#25B3DB"],
        music:'../music/7!!.mp3'
    },{
        name:"Happy For You",
        artist:"Lukas Graham ft. Vũ",
        cover:"https://i.scdn.co/image/ab67616d00001e022d9cbe24c345cf83b2f62384",
        id: uuidv4(),
        active:false,
        color:["#CCC4B1","#1E2225"],
        music:'../music/Happy-For-You.mp3'
    },{
        name:"Tie Me Down",
        artist:"Gryffin ft. Elley Duhé",
        cover:"https://i.scdn.co/image/ab67616d00001e022ebfbbd6e66e5bb54f30fb0f",
        id: uuidv4(),
        active:false,
        color:["#00506C","#603446"],
        music:'../music/Tie-Me-Down.mp3'
    }]
}

export default musicList;

