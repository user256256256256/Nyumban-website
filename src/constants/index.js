import { facebook, instagram, shieldTick, support, truckFast, twitter, youtube, whatsapp, linkedin, tiktok } from "../assets/icons";
import { mockup1, mockup2, mockup3, mockup4, mockup5, mockup6, mockup7, thumbnailMockup1, thumbnailMockup2, thumbnailMockup3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#get-started", label: "Get Started" },
    { href: "#about", label: "About" },
    { href: "#newsletter", label: "Newsletter" },
    { href: "/faqs", label: "FAQs" },
    { href: "/Blogs", label: "Blogs" }
];

export const faqData = [
    {
      question: "How do I make an Accordion?",
      answer:
        "You can create an accordion using React state to track which item is open, and Tailwind classes to animate the height and visibility. This helps keep the UI clean and interactive.",
    },
    {
      question: "Is this project mobile responsive?",
      answer:
        "Yes, it uses Tailwind CSS, which includes mobile-first utility classes to ensure responsiveness on all screen sizes.",
    },
    {
      question: "Where is my data stored?",
      answer:
        "Your data is securely stored on our encrypted servers. We follow best practices in data privacy and security compliance.",
    },
  ]

export const npsDefinition = {
    definition: 'Nyumbani Property Solutions(NPS) is a mobile app real tailored to meet the needs of the Ugandan market. It provides a mobile-optimized solution for renting properties in Uganda, connecting landlords and tenants through a seamless and efficient digital experience.'
}

export const getStarted = {
    description: "Join the NPS in just a few minutes."
}

export const npsMotto = [
    { motto1: 'Simplifying Renting, list or find a property at no cost'},
    { motto2: 'Formalizing and modernizing Uganda\'s rental market'}
]

export const aboutCaption = {
    description: "Nyumbani’s renting service is a free designed to address the key challenges within Uganda’s rental market, such as inadequate documentation, trust issues, and poor communication between tenants and landlords. By providing secure payment methods, transparent rental agreements, maintenance tracking, and effective dispute resolution, Nyumbani establishes a reliable platform for both parties to engage confidently in the rental process."
}

export const mockups = [
    {
      thumbnail: thumbnailMockup1,
      bigMockup: mockup1,
      caption: {
        text: "Find Your Perfect Home, Effortlessly",
        description: "Filter listings by location, budget, and features to discover your ideal rental property."
      }
    },
    {
      thumbnail: thumbnailMockup2,
      bigMockup: mockup2,
      caption: {
        text: "Simplifying Rental Agreements.",
        description: "Create, sign, and store rental contracts securely—no more confusion or disputes."
      }
    },
    {
      thumbnail: thumbnailMockup3,
      bigMockup: mockup3,
      caption: {
        text: "Building Trust, One Click at a Time.",
        description: "Background checks and verified listings for safe, reliable renting."
      }
    }
  ];

export const statistics = [
    { value: '0', label: 'Downloads' },
    { value: '0', label: 'Tenants' },
    { value: '0', label: 'Landlords' }
];

export const guides = [
    {
        imgURL: mockup4,
        name: "Step 1",
        description: "Lorem ipsum dolor si amet, consectetur ",
    },
    {
        imgURL: mockup5,
        name: "Step 2",
        description: "Lorem ipsum dolo sit amet, consectetur ",
    },
    {
        imgURL: mockup6,
        name: "Step 3",
        description: "Lorem ipsum dolor sit amet, consectetur ",
    },

    {
        imgURL: mockup7,
        name: "Step 4",
        description: "Lorem ipsum dolo sit amet, consectetur ",
    },
];

export const solutions = [
    {
        imgURL: truckFast,
        label: "Easy to use",
        subtext: "Easily Find or List Your Property. Simplify the process of finding a good property or list one with our simple to use platform."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payments",
        subtext: "Safe & Secure Payments. Enjoy worry-free transactions with our integrated, secure payment system."
    },
    {
        imgURL: support,
        label: "We’re Here to Help",
        subtext: "Dedicated Support for You. Our support team is always ready to assist both tenants and landlords with any issues."
    },
];

export const footerCaption = {
    description: "This service is dedicated to formalizing and modernizing Uganda's rental market, promoting greater efficiency, transparency, and security for both landlords and tenants."
}

export const footerLinks = [
    {
        title: "Lorem",
        links: [
            { name: "Lorm ipsum", link: "/" },
            { name: "Lrem ipsum", link: "/" },
            { name: "Loem ipsum", link: "/" },
            { name: "Lore ipsum", link: "/" },
        ],
    },
    {
        title: "Consectetur",
        links: [
            { name: "Consecttur ", link: "/" },
            { name: "Iipsum", link: "/" },
            { name: "Consetetur", link: "/" },
            { name: "Conectetur", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "support@nyumbanipropertyservices.com", link: "mailto:support@nyumbanipropertyservices.com" },
            { name: "Location: Kampala, Uganda", link: "#" },
            { name: "customer@nyumbanipropertyservices.com", link: "mailto:customer@nyumbanipropertyservices.com" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
    { src: youtube, alt: "youtube logo" },
    { src: whatsapp, alt: "whatsapp logo" },
    { src: linkedin, alt: "linkedin logo" },
    { src: tiktok, alt: "tiktok logo" }
];