import e1 from "./assets/e1.jpg";
import e2 from "./assets/e2.jpg";

import k1 from "./assets/k1.jpg";
import k2 from "./assets/k2.jpg";
import k3 from "./assets/k3.jpg";
import k4 from "./assets/k4.jpg";

import l1 from "./assets/l1.jpg";
import l2 from "./assets/l2.jpg";
import l3 from "./assets/l3.jpg";
import l4 from "./assets/l4.jpg";

import m1 from "./assets/m1.jpg";
import m2 from "./assets/m2.webp";

import p1 from "./assets/p1.png";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.webp";
import p4 from "./assets/p4.webp";

import t1 from "./assets/t1.webp";
import t2 from "./assets/t2.jpg";

export const FilterType = [
  "Laptop",
  "Phone",
  "Earbud",
  "Keyboard",
  "Mouse",
  "Peripheral",
  "Table",
  "Productivity",
];

export const Products = [
  {
    id: 1,
    productName: "nothingPhone",
    price: 899.0,
    productImage: p1,
    bg: "bg-dark",
    desc: "Introducing the NothingPhone, a sophisticated and minimalist smartphone that seamlessly integrates into your connected lifestyle. With its cutting-edge features and elegant design, the NothingPhone empowers you to stay connected, capture memories, and experience the world at your fingertips.",
    spec: {
      Design: "Sleek and minimalistic design with an edge-to-edge display",
      Camera: "High-resolution camera for stunning photos and videos",
      Performance: "Powerful processor and ample RAM for seamless multitasking",
      "User Interface": "Intuitive and user-friendly interface",
      "Battery Life": "Long-lasting battery for uninterrupted usage",
      Security: "Advanced biometric authentication for enhanced privacy",
      Connectivity: "4G/5G and Wi-Fi connectivity for seamless browsing",
    },
    homePageText: "Most Advanced Phone Yet.",
    skills: ["Phone", "Productivity"],
  },
  {
    id: 2,
    productName: "nothingEarBud",
    price: 199.0,
    productImage: e1,
    bg: "bg-light",
    desc: "Introducing the NothingBuds Earbuds, the perfect blend of simplicity and intelligence, designed to elevate your audio experience on the go. With their sleek design and advanced features, these earbuds offer a seamless and immersive sound experience.",
    spec: {
      Design:
        "Compact and lightweight design with a comfortable and secure fit",
      Connectivity:
        "Advanced Bluetooth technology for seamless wireless audio streaming",
      "Noise-Canceling":
        "Advanced noise-canceling technology for immersive audio",
      "Touch Controls":
        "Intuitive touch controls for easy playback and call management",
      "Voice Assistant Integration":
        "Seamless integration with digital voice assistants",
      "Battery Life":
        "Long-lasting battery life for hours of uninterrupted use",
      "Charging Case":
        "Compact charging case for storage and on-the-go charging",
      "Audio Quality":
        "High-fidelity audio drivers for rich and balanced sound",
      Durability: "Sweat and water resistance for an active lifestyle",
    },
    homePageText: "Seemless Transition To Your Ears.",
    skills: ["Earbud", "Productivity", "Peripheral"],
  },
  {
    id: 3,
    productName: "nothingTable Pro",
    price: 499.0,
    productImage: t1,
    bg: "bg-light",
    desc: "Introducing the Nothing Height-Adjustable Table, a minimal and intelligent solution designed to enhance your productivity and comfort. With its sleek design and advanced features, this table seamlessly blends into any modern workspace while offering customizable functionality.",
    spec: {
      Design: "Clean and minimalist design with a sleek and elegant aesthetic",
      "Bluetooth Connectivity":
        "Wireless control of height adjustment via Bluetooth-enabled devices",
      "Height Adjustment":
        "Motorized height adjustment for ergonomic flexibility",
      "Silent Operation": "Smooth and quiet height adjustment mechanism",
      "Sturdy Construction":
        "High-quality materials for durability and stability",
      "Integrated Charging Ports":
        "Built-in USB ports for convenient device charging",
      "Cable Management System":
        "Discreet channels and compartments for organized cable management",
    },
    homePageText: "Unmatched Productivity.",
    skills: ["Table", "Productivity"],
  },
  {
    id: 4,
    productName: "nothingLaptop Pro",
    price: 1399.0,
    productImage: l1,
    bg: "bg-light",
    desc: "Introducing the NothingLaptop, a remarkable device that embodies the perfect fusion of power, elegance, and portability. With its sleek and slim design, the NothingLaptop sets a new standard for modern computing.",
    spec: {
      Processor: "Ultra-fast quad-core processor running at 3.5 GHz",
      Memory: "16GB RAM for seamless multitasking",
      Storage: "1TB lightning-fast solid-state drive (SSD)",
      Graphics: "Dedicated graphics card for enhanced visual performance",
      Display:
        "15.6-inch Retina display with a high resolution of 2880 x 1800 pixels",
      BatteryLife: "Up to 10 hours of usage on a single charge",
      Connectivity:
        "Multiple USB-C ports, USB-A ports, HDMI port, and SD card slot",
      OperatingSystem: "Latest user-friendly operating system",
      Security:
        "Biometric authentication (fingerprint or facial recognition) and encrypted storage",
      Design: "Slim and lightweight with a sleek and minimalist aesthetic",
    },
    homePageText: "Thinnest Laptop In The World.",
    skills: ["Laptop", "Productivity"],
  },
  {
    id: 5,
    productName: "nothingKeyboard",
    price: 99.0,
    productImage: k1,
    bg: "bg-dark",
    desc: "Introducing the NothingKeyboard, a sleek and minimalistic keyboard designed to enhance your typing experience. With its smart features and ergonomic design, this keyboard offers both style and functionality for seamless productivity.",
    spec: {
      Design: "Slim and compact design with a minimalist layout",
      Connectivity: "Bluetooth 5.0 for wireless connectivity",
      Keys: "Responsive and tactile low-profile keys",
      Compatibility: "Seamless compatibility with various operating systems",
      "Programmable Keys": "Customizable shortcuts and macros",
      Ergonomics: "Adjustable tilt angle for ergonomic typing",
      Durability: "High-quality construction for long-lasting use",
    },
    homePageText: "",
    skills: ["Keyboard", "Productivity", "Peripheral"],
  },
  {
    id: 6,
    productName: "nothingMouse",
    price: 19.0,
    productImage: m1,
    bg: "bg-dark",
    desc: "Introducing the Nothing Gaming Mouse, a sleek and intelligent companion that enhances your gaming performance with simplicity and precision. Designed for gamers of all levels, this mouse offers a seamless and intuitive experience that adapts to your gaming style.",
    spec: {
      "DPI Range": "Adjustable DPI settings from 800 to 10,000",
      "Optical Sensor": "High-precision optical sensor for accurate tracking",
      "Ergonomic Design":
        "Streamlined and ergonomic shape for comfortable grip",
      "Programmable Buttons":
        "Customizable buttons for assigning macros and quick actions",
      "Plug-and-Play": "No software installation required",
      "RGB Lighting":
        "Customizable RGB lighting with a range of vibrant colors and effects",
      Connectivity: "Wired USB connection",
      Compatibility:
        "Compatible with Windows, macOS, and popular gaming consoles",
      "Polling Rate": "High polling rate of 1000Hz",
      Durability: "Built with durable materials and high-quality switches",
    },
    homePageText: "",
    skills: ["Mouse", "Productivity", "Peripheral"],
  },
  {
    id: 7,
    productName: "nothingPhone",
    price: 299.0,
    productImage: p2,
    bg: "bg-dark",
    desc: "",
    spec: {
      Design: "Sleek and minimalistic design with an edge-to-edge display",
      Camera: "High-resolution camera for stunning photos and videos",
      Performance: "Powerful processor and ample RAM for seamless multitasking",
      "User Interface": "Intuitive and user-friendly interface",
      "Battery Life": "Long-lasting battery for uninterrupted usage",
      Security: "Advanced biometric authentication for enhanced privacy",
      Connectivity: "4G/5G and Wi-Fi connectivity for seamless browsing",
    },
    homePageText: "",
    skills: ["Phone", "Productivity"],
  },
  {
    id: 8,
    productName: "nothingPhone",
    price: 699.0,
    productImage: p3,
    bg: "bg-dark",
    desc: "",
    spec: {
      Design: "Sleek and minimalistic design with an edge-to-edge display",
      Camera: "High-resolution camera for stunning photos and videos",
      Performance: "Powerful processor and ample RAM for seamless multitasking",
      "User Interface": "Intuitive and user-friendly interface",
      "Battery Life": "Long-lasting battery for uninterrupted usage",
      Security: "Advanced biometric authentication for enhanced privacy",
      Connectivity: "4G/5G and Wi-Fi connectivity for seamless browsing",
    },
    homePageText: "",
    skills: ["Phone", "Productivity"],
  },
  {
    id: 9,
    productName: "nothingPhone Special Edition",
    price: 599.0,
    productImage: p4,
    bg: "bg-dark",
    desc: "",
    spec: {
      Design: "Sleek and minimalistic design with an edge-to-edge display",
      Camera: "High-resolution camera for stunning photos and videos",
      Performance: "Powerful processor and ample RAM for seamless multitasking",
      "User Interface": "Intuitive and user-friendly interface",
      "Battery Life": "Long-lasting battery for uninterrupted usage",
      Security: "Advanced biometric authentication for enhanced privacy",
      Connectivity: "4G/5G and Wi-Fi connectivity for seamless browsing",
    },
    homePageText: "",
    skills: ["Phone", "Productivity"],
  },
  {
    id: 10,
    productName: "nothingEarBud Lite",
    price: 99.0,
    productImage: e2,
    bg: "bg-light",
    desc: "Introducing the NothingBuds Earbuds, the perfect blend of simplicity and intelligence, designed to elevate your audio experience on the go. With their sleek design and advanced features, these earbuds offer a seamless and immersive sound experience.",
    spec: {
      Design:
        "Compact and lightweight design with a comfortable and secure fit",
      Connectivity:
        "Advanced Bluetooth technology for seamless wireless audio streaming",
      "Noise-Canceling":
        "Advanced noise-canceling technology for immersive audio",
      "Touch Controls":
        "Intuitive touch controls for easy playback and call management",
      "Voice Assistant Integration":
        "Seamless integration with digital voice assistants",
      "Battery Life":
        "Long-lasting battery life for hours of uninterrupted use",
      "Charging Case":
        "Compact charging case for storage and on-the-go charging",
      "Audio Quality":
        "High-fidelity audio drivers for rich and balanced sound",
      Durability: "Sweat and water resistance for an active lifestyle",
    },
    homePageText: "Seemless Transition To Your Ears.",
    skills: ["Earbud", "Productivity", "Peripheral"],
  },
  {
    id: 11,
    productName: "nothingTable Lite",
    price: 399.0,
    productImage: t2,
    bg: "bg-light",
    desc: "Introducing the Nothing Height-Adjustable Table, a minimal and intelligent solution designed to enhance your productivity and comfort. With its sleek design and advanced features, this table seamlessly blends into any modern workspace while offering customizable functionality.",
    spec: {
      Design: "Clean and minimalist design with a sleek and elegant aesthetic",
      "Bluetooth Connectivity":
        "Wireless control of height adjustment via Bluetooth-enabled devices",
      "Height Adjustment":
        "Motorized height adjustment for ergonomic flexibility",
      "Silent Operation": "Smooth and quiet height adjustment mechanism",
      "Sturdy Construction":
        "High-quality materials for durability and stability",
      "Integrated Charging Ports":
        "Built-in USB ports for convenient device charging",
      "Cable Management System":
        "Discreet channels and compartments for organized cable management",
    },
    homePageText: "Unmatched Productivity.",
    skills: ["Table", "Productivity"],
  },
  {
    id: 12,
    productName: "nothingLaptop Lite",
    price: 699.0,
    productImage: l2,
    bg: "bg-light",
    desc: "Introducing the NothingLaptop, a remarkable device that embodies the perfect fusion of power, elegance, and portability. With its sleek and slim design, the NothingLaptop sets a new standard for modern computing.",
    spec: {
      Processor: "Ultra-fast quad-core processor running at 3.5 GHz",
      Memory: "16GB RAM for seamless multitasking",
      Storage: "1TB lightning-fast solid-state drive (SSD)",
      Graphics: "Dedicated graphics card for enhanced visual performance",
      Display:
        "15.6-inch Retina display with a high resolution of 2880 x 1800 pixels",
      BatteryLife: "Up to 10 hours of usage on a single charge",
      Connectivity:
        "Multiple USB-C ports, USB-A ports, HDMI port, and SD card slot",
      OperatingSystem: "Latest user-friendly operating system",
      Security:
        "Biometric authentication (fingerprint or facial recognition) and encrypted storage",
      Design: "Slim and lightweight with a sleek and minimalist aesthetic",
    },
    homePageText: "Thinnest Laptop In The World.",
    skills: ["Laptop", "Productivity"],
  },
  {
    id: 13,
    productName: "nothingLaptop",
    price: 1199.0,
    productImage: l3,
    bg: "bg-light",
    desc: "Introducing the NothingLaptop, a remarkable device that embodies the perfect fusion of power, elegance, and portability. With its sleek and slim design, the NothingLaptop sets a new standard for modern computing.",
    spec: {
      Processor: "Ultra-fast quad-core processor running at 3.5 GHz",
      Memory: "16GB RAM for seamless multitasking",
      Storage: "1TB lightning-fast solid-state drive (SSD)",
      Graphics: "Dedicated graphics card for enhanced visual performance",
      Display:
        "15.6-inch Retina display with a high resolution of 2880 x 1800 pixels",
      BatteryLife: "Up to 10 hours of usage on a single charge",
      Connectivity:
        "Multiple USB-C ports, USB-A ports, HDMI port, and SD card slot",
      OperatingSystem: "Latest user-friendly operating system",
      Security:
        "Biometric authentication (fingerprint or facial recognition) and encrypted storage",
      Design: "Slim and lightweight with a sleek and minimalist aesthetic",
    },
    homePageText: "Thinnest Laptop In The World.",
    skills: ["Laptop", "Productivity"],
  },
  {
    id: 14,
    productName: "nothingLaptop 2",
    price: 1299.0,
    productImage: l4,
    bg: "bg-light",
    desc: "Introducing the NothingLaptop, a remarkable device that embodies the perfect fusion of power, elegance, and portability. With its sleek and slim design, the NothingLaptop sets a new standard for modern computing.",
    spec: {
      Processor: "Ultra-fast quad-core processor running at 3.5 GHz",
      Memory: "16GB RAM for seamless multitasking",
      Storage: "1TB lightning-fast solid-state drive (SSD)",
      Graphics: "Dedicated graphics card for enhanced visual performance",
      Display:
        "15.6-inch Retina display with a high resolution of 2880 x 1800 pixels",
      BatteryLife: "Up to 10 hours of usage on a single charge",
      Connectivity:
        "Multiple USB-C ports, USB-A ports, HDMI port, and SD card slot",
      OperatingSystem: "Latest user-friendly operating system",
      Security:
        "Biometric authentication (fingerprint or facial recognition) and encrypted storage",
      Design: "Slim and lightweight with a sleek and minimalist aesthetic",
    },
    homePageText: "Thinnest Laptop In The World.",
    skills: ["Laptop", "Productivity"],
  },
  {
    id: 15,
    productName: "nothingKeyboard 2",
    price: 129.0,
    productImage: k2,
    bg: "bg-dark",
    desc: "Introducing the NothingKeyboard, a sleek and minimalistic keyboard designed to enhance your typing experience. With its smart features and ergonomic design, this keyboard offers both style and functionality for seamless productivity.",
    spec: {
      Design: "Slim and compact design with a minimalist layout",
      Connectivity: "Bluetooth 5.0 for wireless connectivity",
      Keys: "Responsive and tactile low-profile keys",
      Compatibility: "Seamless compatibility with various operating systems",
      "Programmable Keys": "Customizable shortcuts and macros",
      Ergonomics: "Adjustable tilt angle for ergonomic typing",
      Durability: "High-quality construction for long-lasting use",
    },
    homePageText: "",
    skills: ["Keyboard", "Productivity", "Peripheral"],
  },
  {
    id: 16,
    productName: "nothingKeyboard 1.2",
    price: 149.0,
    productImage: k3,
    bg: "bg-dark",
    desc: "Introducing the NothingKeyboard, a sleek and minimalistic keyboard designed to enhance your typing experience. With its smart features and ergonomic design, this keyboard offers both style and functionality for seamless productivity.",
    spec: {
      Design: "Slim and compact design with a minimalist layout",
      Connectivity: "Bluetooth 5.0 for wireless connectivity",
      Keys: "Responsive and tactile low-profile keys",
      Compatibility: "Seamless compatibility with various operating systems",
      "Programmable Keys": "Customizable shortcuts and macros",
      Ergonomics: "Adjustable tilt angle for ergonomic typing",
      Durability: "High-quality construction for long-lasting use",
    },
    homePageText: "",
    skills: ["Keyboard", "Productivity", "Peripheral"],
  },
  {
    id: 17,
    productName: "nothingKeyboard Pro",
    price: 159.0,
    productImage: k4,
    bg: "bg-dark",
    desc: "Introducing the NothingKeyboard, a sleek and minimalistic keyboard designed to enhance your typing experience. With its smart features and ergonomic design, this keyboard offers both style and functionality for seamless productivity.",
    spec: {
      Design: "Slim and compact design with a minimalist layout",
      Connectivity: "Bluetooth 5.0 for wireless connectivity",
      Keys: "Responsive and tactile low-profile keys",
      Compatibility: "Seamless compatibility with various operating systems",
      "Programmable Keys": "Customizable shortcuts and macros",
      Ergonomics: "Adjustable tilt angle for ergonomic typing",
      Durability: "High-quality construction for long-lasting use",
    },
    homePageText: "",
    skills: ["Keyboard", "Productivity", "Peripheral"],
  },
  {
    id: 18,
    productName: "nothingMouse Lite",
    price: 14.9,
    productImage: m1,
    bg: "bg-dark",
    desc: "Introducing the Nothing Gaming Mouse, a sleek and intelligent companion that enhances your gaming performance with simplicity and precision. Designed for gamers of all levels, this mouse offers a seamless and intuitive experience that adapts to your gaming style.",
    spec: {
      "DPI Range": "Adjustable DPI settings from 800 to 10,000",
      "Optical Sensor": "High-precision optical sensor for accurate tracking",
      "Ergonomic Design":
        "Streamlined and ergonomic shape for comfortable grip",
      "Programmable Buttons":
        "Customizable buttons for assigning macros and quick actions",
      "Plug-and-Play": "No software installation required",
      "RGB Lighting":
        "Customizable RGB lighting with a range of vibrant colors and effects",
      Connectivity: "Wired USB connection",
      Compatibility:
        "Compatible with Windows, macOS, and popular gaming consoles",
      "Polling Rate": "High polling rate of 1000Hz",
      Durability: "Built with durable materials and high-quality switches",
    },
    homePageText: "",
    skills: ["Mouse", "Productivity", "Peripheral"],
  },
];
