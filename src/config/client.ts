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
    { name: "Abdul Alim", rating: 5, text: "Amazing experience! From the very beginning, this company impressed us with their professionalism, flexibility, and clear communication. They took the time to visit our garden and worked closely with us to bring our ideas to life. …  +3 ", date: "7 months ago" },
    { name: "Kate London", rating: 5, text: "We had our balcony transformed by My Lovely Lawn earlier this year, and the whole experience was great from start to finish. We dealt with Shalani and Adam, who were friendly, professional, and always available whenever we needed them. …  ", date: "5 months ago" },
    { name: "Mariam Gulzar", rating: 5, text: "We recently ordered natural garden turfs from this company, and the entire experience was excellent from start to finish. The team took care of everything,  from handling the order of all materials  to setting it all up with true …  ", date: "7 months ago" },
    { name: "Jo", rating: 5, text: "Amazing job from start to finish. The team were so professional and friendly.  We love it. Transformed from a dust pit, our garden is now a pleasure to sit in. The dogs love it.  No more muddy paw prints   Huge  thanks to Adam, Tom, Clebio and team.", date: "7 months ago" },
    { name: "William Bamford", rating: 5, text: "We could not be happier with the service from My Lovely Lawn to replace our old rotten decking to new stone paving and astroturf, with new sleepers for our garden bed. From start to finish the service was exemplary. We had constant …  +3 ", date: "9 months ago" },
    { name: "James Kirkness", rating: 5, text: "We had a pretty difficult job to be fair. A tree stump removal, where the stump had grown into the retaining wall, half concrete and half earth, kinda out of level. …  ", date: "11 months ago" },
    { name: "Ben West", rating: 5, text: "We couldn’t be happier with the experience we had with My Lovely Lawn London.  From the outset, Tom was superb, he scoped out the works with great attention to …  ", date: "9 months ago" },
    { name: "matt bryant", rating: 5, text: "We recently had artificial grass installed, sleeper borders added, and our patio repointed by My Lovely Lawn, and we couldn’t be happier with the results. Anderson and his team were incredibly hardworking and professional throughout the …  ", date: "10 months ago" },
    { name: "Mark Bennett", rating: 5, text: "Shalini and her team were fantastic, right from day 1. Communication was great with regular updates, and the guys that completed the works couldn't have been more helpful and friendly. Absolutely delighted with the finished product and …  ", date: "4 months ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "My Lovely Lawn London | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
