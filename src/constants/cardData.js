import cafeImage from '../asset/images/Cards_images/cafe.jpeg';
import washRoomImage from '../asset/images/Cards_images/wash_room.jpeg';
import portableToiletImage from '../asset/images/Cards_images/portable_toilet.jpeg';
import containerHomeImage from '../asset/images/Cards_images/container_home.jpg';
import kitchenImage from '../asset/images/Cards_images/kitchen.jpg';
import prefabHomesImage from '../asset/images/Cards_images/prefab_homes.jpeg';
import ResturantImage1 from '../asset/images/card_items_details_images/container_resturant.jpeg';
import ResturantImage2 from '../asset/images/card_items_details_images/resturant_container_2.jpeg';
import ResturantImage3 from '../asset/images/card_items_details_images/transport_container.jpeg';
import ResturantImage4 from '../asset/images/card_items_details_images/resturant_container.jpeg';
import PortableToilet1 from '../asset/images/card_items_details_images/portable_toilet.jpeg'
import PortableToilet2 from '../asset/images/card_items_details_images/portable-toilets3.jpeg'
import PortabaleToilet3 from "../asset/images/card_items_details_images/container_portable_washroom.jpeg"
import WashRoom1 from "../asset/images/card_items_details_images/wash_room.png"
import WashRoom2 from "../asset/images/card_items_details_images/washroom_2.jpeg"
import WashRoom3 from "../asset/images/card_items_details_images/wash_room_white.jpeg"
import WashRoom4 from "../asset/images/card_items_details_images/washroom4.jpeg"
import ContianerHome1 from "../asset/images/card_items_details_images/container_home1.jpeg"
import ContainerHome2 from "../asset/images/card_items_details_images/container_home2.jpeg"
import WashRoomVideo1 from "../asset/video/wash_room.mp4"
import WashRoomVideo2 from "../asset/video/wash_room2.mp4"



const cardData = [
  {
    title: "Mobile Bistro",
    description: "A fully-equipped container restaurant solution designed for easy setup and relocation. Perfect for construction sites, pop-up events, and outdoor locations, providing a modern and eco-friendly dining experience.",
    image: cafeImage,
    images: [
      ResturantImage1,
      ResturantImage2,
      ResturantImage3,
      ResturantImage4 
    ],
    link: "/details",
    slug: "container-bistro",
    advantages: [
      "Quick and easy setup, ideal for short-term and pop-up installations.",
      "Portable and designed for seamless transportation to various locations.",
      "Built with durable, weather-resistant materials suitable for all environments.",
      "Eco-friendly and sustainable, repurposing shipping containers as functional spaces.",
      "Minimal onsite construction needed, reducing setup time and labor costs.",
      "Customizable interior to fit specific themes or operational requirements."
    ]
  },
  {
    title: "Portable Toilets",
    description: "A practical and mobile sanitation solution designed for outdoor events, construction sites, and temporary setups. These portable toilets prioritize hygiene, convenience, and ease of use in any setting.",
    image: portableToiletImage,
    images: [
      PortableToilet1,
      PortableToilet2,
      PortabaleToilet3 

    ],
    link: "/details",
    slug: "portable-toilets",
    advantages: [
      "Easily transportable, ideal for outdoor events and remote locations.",
      "Quick setup with minimal space requirements, providing immediate access.",
      "Available in a variety of styles, including models with deluxe features.",
      "Built with durable materials to withstand frequent use and various climates.",
      "Regular maintenance services ensure sanitation and user comfort."
    ]
  },
  {
    title: "Container Homes",
    description: "Modern, eco-friendly container homes designed for sustainable living. These homes offer a perfect blend of style, functionality, and sustainability, ideal for urban and remote environments alike.",
    image: containerHomeImage,
    images: [
      ContianerHome1,
      ContainerHome2,
      containerHomeImage,
    ],
    link: "/details",
    slug: "container-homes",
    advantages: [
      "Constructed from recycled materials, promoting sustainability and reducing waste.",
      "Efficient construction process, significantly reducing build time and labor costs.",
      "Energy-efficient designs minimize energy consumption and reduce utility costs.",
      "Durable and weather-resistant, suitable for a variety of climates.",
      "Flexible layouts and designs, allowing for customization based on user preferences."
    ]
  },
  {
    title: "Wash Rooms",
    description: "Efficient and affordable prefab homes that offer comfort, quality, and flexibility. Perfect for those seeking quick construction times without sacrificing design or durability.",
    image:  washRoomImage,
    images: [
      WashRoom1,
      WashRoom2,
      WashRoom4,
      WashRoom3,
    
    ],
    videos:[
      WashRoomVideo2,
      WashRoomVideo1,
  

    ],
    link: "/details",
    slug: "modern-washrooms",
    advantages: [
      "Rapid assembly process, enabling faster move-in times compared to traditional builds.",
      "Cost-effective solution that reduces overall building expenses.",
      "Constructed with high-quality materials that meet safety and durability standards.",
      "Eco-friendly construction methods minimize environmental impact.",
      "Available in various layouts, making it easy to customize based on lifestyle needs."
    ]
  },
  {
    title: "Modular Kitchens",
    description: "Innovative, space-efficient kitchen solutions that enhance both functionality and style. Modular kitchens are tailored to fit any space, providing a streamlined cooking experience with high-quality finishes.",
    image: kitchenImage,
    images: [
      kitchenImage,
      washRoomImage,
      portableToiletImage
    ],
    link: "/details",
    slug: "modular-kitchens",
    advantages: [
      "Custom-designed layouts to optimize space and enhance functionality.",
      "Premium materials ensure durability and long-lasting quality.",
      "Integrated appliance options for a modern, streamlined appearance.",
      "Easily adjustable components allow for future expansions or reconfigurations.",
      "Quick and easy installation with minimal onsite construction required."
    ]
  },
  {
    title: "Prefab Homes",
    description: "Efficient and affordable prefab homes that offer comfort, quality, and flexibility. Perfect for those seeking quick construction times without sacrificing design or durability.",
    image: prefabHomesImage,
    images: [
      prefabHomesImage,
      kitchenImage,
      containerHomeImage
    ],
    link: "/details",
    slug: "prefab-homes",
    advantages: [
      "Rapid assembly process, enabling faster move-in times compared to traditional builds.",
      "Cost-effective solution that reduces overall building expenses.",
      "Constructed with high-quality materials that meet safety and durability standards.",
      "Eco-friendly construction methods minimize environmental impact.",
      "Available in various layouts, making it easy to customize based on lifestyle needs."
    ]
  }
];

export default cardData;
