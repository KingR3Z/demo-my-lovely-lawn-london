export const client = {
  // Business Details
  name: "My Lovely Lawn London",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "020 3432 3002",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "9",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Victoria Morgan", rating: 5, text: "Clebio and the rest of the install team were brilliant throughout. They worked incredibly hard and they were super friendly, even when my toddlers were trying to get involved and ‘help’. They done everything exactly as I wanted and went above and beyond. Additionally, all my communication with Shalini including initial quotes, making arrangements and checking in throughout were incredibly easy and helpful. Would 100% recommend", date: "3 days ago" },
    { name: "Jules T.", rating: 5, text: "Tom and his team and super friendly and professional, always willing to compromise to make things work with us. It's a real pleasure to work with them!", date: "6 days ago", badge: "Local Guide" },
    { name: "Bhavin Tailor", rating: 5, text: "My Lovely Lawn delivered an exceptional service from start to finish. Shalini was great from the initial call all the way through to the completion of the project—clear communication, helpful guidance, and a genuinely friendly approach throughout.  The team members, Adam, Vitor, and Nic, were equally impressive. They were knowledgeable, incredibly hardworking, and always approachable. All materials were delivered on time, and even when there were challenges getting materials through the service road, they always found a solution without any fuss.  A truly smooth experience from beginning to end. I’m looking forward to enjoying the results this summer. Highly recommend My Lovely Lawn for anyone looking for reliable, high‑quality landscaping work.", date: "a week ago" },
    { name: "Reshma Mehta", rating: 5, text: "Highly recommend My Lovely Lawn. They have been fantastic right from initial site visit through to the very end. They worked to what we wanted in our budget and made sure we were happy with the work before proceeding. The best experience was that during the actual work they took care of everything right from the skip to materials. Everyone turned up on time and they completed the garden in the time they said it would take. Also very clean and tidy. It's so nice knowing we have a wonderful outdoor space to use that has been completed with such care. Special mentions to Raahil, Shalini, Nik, Cleb and his team. Massive thank you!!", date: "2 weeks ago" },
    { name: "Tina Griffith", rating: 5, text: "What an amazing experience, I was concerned they would run across trouble, but nothing too much for them, lovely guys, highly recommend Vitor, John and Laun, polite friendly, and a thank you to Shalini was a pleasure to speak to in the office.", date: "Edited 3 months ago" },
    { name: "David Beardwell", rating: 5, text: "From the moment the workers arrived early i knew this was going to be a good job. Recommend them 100%", date: "3 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "My Lovely Lawn London | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
