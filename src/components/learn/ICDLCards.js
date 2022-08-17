import exel from "../../images/item/ICDL/exel.png";
import win from "../../images/item/ICDL/win.jpg";
import net from "../../images/item/ICDL/net.jpg";
import word from "../../images/item/ICDL/word.png";
import power from "../../images/item/ICDL/power.png";
import access from "../../images/item/ICDL/access.png";

const ICDLCards = () =>{
    const cards = [
        {
          imageSrc: `${win}`,
          title: "آموزش ویندوز 10",
          content: "استاد همتی",
          price: "0 ت",
          url: "#win",
          rating: "5.0",
          reviews: "87" 
        },
        {
          imageSrc: `${net}`,
          title: "آموزش اینترنت",
          content: "استاد همتی",
          price: "0 ت",
          url: "#",
        },
        {
          imageSrc: `${word}`,
          title: "آموزش ورد",
          content: "استاد همتی",
          price: "0 ت",
          url: "#word",
        },
        {
          imageSrc: `${power}`,
          title: "آموزش پاور پوینت",
          content: "استاد همتی",
          price: "0 ت",
          url: "#power",
        },
        {
          imageSrc: `${exel}`,
          title: "آموزش اکسل",
          content: "استاد همتی",
          price: "0 ت",
          url: "#exel",
        },
        {
          imageSrc: `${access}`,
          title: "آموزش اکسس",
          content: "استاد همتی",
          price: "0 ت",
          url: "#",
        }
    ];

    return cards;
}

export default ICDLCards;