import { facebook, instagram, shieldTick, support, truckFast, twitter, youtube, whatsapp, linkedin, tiktok, profileIcon } from "../assets/icons";
import { mockup1, mockup2, mockup3, mockup4, mockup5, mockup6, mockup7, thumbnailMockup1, thumbnailMockup2, thumbnailMockup3 } from "../assets/images";

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
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

export const tabData = [
    { label: 'All', content: 'All the latest Nyumbani updates, news and stories.' },
    { label: 'Tutorials', content: 'Step-by-step guides and tutorials to help you use Nyumbani effectively.' },
    { label: 'Case Studies', content: 'Success stories and deep dives from real Nyumbani users.' },
    { label: 'News', content: 'Company announcements, industry news and upcoming changes.' },
    { label: 'Events', content: 'Workshops, webinars, and community events you shouldn’t miss.' },
]
  

export const npsDefinition = {
    definition: 'Nyumbani Property Solutions(NPS) is a mobile app real tailored to meet the needs of the Ugandan market. It provides a mobile-optimized solution for renting properties in Uganda, connecting landlords and tenants through a seamless and efficient digital experience.'
}

export const getStarted = {
    description: "Join the NPS in just a few minutes."
}

export const npsMotto = [
    { motto1: 'Simplifying Renting, finding a property and listing'},
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
export const footerLinks = [
    {
        title: "EXPLORE",
        links: [
            { name: "Forum", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Code of Conduct", link: "/" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: youtube, alt: "youtube logo" },
    { src: whatsapp, alt: "whatsapp logo" },
];

export const blogPosts = [
  {
    id: 1,
    title: 'How to Get Started',
    category: 'Tutorials',
    date: '2025-04-01',
    author: 'Jane Doe',
    authorImage: profileIcon,
    description: 'Learn how to quickly set up and start using Nyumbani.',
    link: '/blog/1',
  },
  {
    id: 2,
    title: 'Nyumbani Success Story',
    category: 'Case Studies',
    date: '2025-03-28',
    author: 'John Smith',
    authorImage: profileIcon,
    description: 'Discover how a local business transformed using Nyumbani.',
    link: '/blog/2',
  },
  {
    id: 3,
    title: 'New Features in April',
    category: 'News',
    date: '2025-04-10',
    author: 'Emily Rose',
    authorImage: profileIcon,
    description: 'A roundup of all the exciting new features this month.',
    link: '/blog/3',
  },
  {
    id: 4,
    title: 'Upcoming Nyumbani Webinar',
    category: 'Events',
    date: '2025-04-15',
    author: 'Samuel Wanjala',
    authorImage: profileIcon,
    description: 'Join us for a live session on growing your digital home.',
    link: '/blog/4',
  },
  {
    id: 5,
    title: 'Welcome to Nyumbani',
    category: 'Tutorials',
    date: '2025-03-15',
    author: 'Alice Kimani',
    authorImage: profileIcon,
    description: 'Your introduction to the Nyumbani platform and what it offers.',
    link: '/blog/5',
  },
  {
    id: 6,
    title: 'Our Journey So Far',
    category: 'Case Studies',
    date: '2025-02-27',
    author: 'Brian Oduor',
    authorImage: profileIcon,
    description: 'Reflections and milestones in our Nyumbani journey.',
    link: '/blog/6',
  },
  // --- Additional test posts below ---
  ...Array.from({ length: 100 }, (_, i) => ({
    id: i + 7,
    title: `Sample Blog Post #${i + 7}`,
    category: ['Tutorials', 'News', 'Events', 'Case Studies'][i % 4],
    date: `2025-03-${String((i % 28) + 1).padStart(2, '0')}`,
    author: `Author ${i + 7}`,
    authorImage: profileIcon,
    description: `This is a sample description for blog post #${i + 7}.`,
    link: `/blog/${i + 7}`,
  }))
]

/* 

{
  "id": "abc123",
  "slug": "how-to-get-started",
  "title": "How to Get Started",
  "category": "Tutorials",
  "layout": "tutorial", // key for rendering layout later
  "authorId": "user1",
  "publishedDate": "2025-04-01T10:00:00Z",
  "coverImage": "/images/blogs/get-started.jpg",
  "content": "# Welcome to Nyumbani\nHere's how you get started...",
  "tags": ["beginner", "setup"]
}

{
  "id": "user1",
  "name": "Jane Doe",
  "profileImage": "/images/authors/jane.jpg",
  "bio": "Tech writer and community builder."
}


Title, author, etc. are stored as structured fields.

✅ Content is stored as:

Rich HTML (if you're using a CMS or markdown parser)

Or Markdown (cleaner and dev-friendly)

🔥 Pro Tip: Markdown is often stored and 
converted to HTML on the frontend using 
something like react-markdown.

const BlogDetail = ({ article }) => {
  switch (article.layout) {
    case 'tutorial':
      return <TutorialLayout content={article} />
    case 'news':
      return <NewsLayout content={article} />
    case 'case-study':
      return <CaseStudyLayout content={article} />
    default:
      return <DefaultLayout content={article} />
  }
}

Suggested layouts "https://developer.mozilla.org/en-US/blog/global-privacy-control/" non tutorial
                  "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics" tutorial layout
*/