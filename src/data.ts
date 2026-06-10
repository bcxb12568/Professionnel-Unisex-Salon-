import { Service, Stylist, Product, BlogPost, GalleryItem } from './types';

export const SERVICES: Service[] = [
  // Hair Care
  {
    id: 's1',
    name: 'Advanced Keratin Treatment',
    category: 'Hair Care',
    gender: 'unisex',
    price: 4999,
    duration: 150,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=80',
    description: 'A premium protein re-conditioning treatment that eliminates frizz, provides deep nourishment, and gives a sleek, ultra-smooth shine for up to 4 months.',
    benefits: ['100% frizz-free hair', 'Intense nutritional recovery', 'Cuts styling time in half', 'Adds dazzling glass-like shine'],
    steps: ['Clarifying wash to open cuticles', 'Keratin formula infusing', 'Precision blow dry', 'Flat-iron sealing at 450°F'],
    stylistRecommendation: 'Recommended for dry, chemically damaged, curly, or unruly hair types.'
  },
  {
    id: 's2',
    name: 'Premium Haircut & Styling',
    category: 'Hair Care',
    gender: 'unisex',
    price: 899,
    duration: 45,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    description: 'Expert consultation followed by a relaxing head wash, precision scalp massage, standard custom-fitted haircut, and standard blow dry styling.',
    benefits: ['Tailored to face structure', 'Volume restoration', 'Healthy split-end removal', 'Relaxing hot towel finish'],
    steps: ['Custom style consultation', 'Nourishing herbal hair wash', 'Signature scissor/clipper cut', 'Blow-dry with style spray'],
    stylistRecommendation: 'Excellent to refresh your style every 4-6 weeks.'
  },
  {
    id: 's3',
    name: 'Sulfate-Free Oil Ritual Spa',
    category: 'Hair Care',
    gender: 'unisex',
    price: 1599,
    duration: 60,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    description: 'Deep hair wash & scalp massage with premium organic essential oils and steam, designed to alleviate dandruff, boost roots, and trigger blood circulation.',
    benefits: ['Root strengthening', 'Immediate stress relief', 'Reduces seasonal hair fall', 'Clears dandruff & dry scalp'],
    steps: ['Aromatherapy scalp massage', 'Therapeutic steam treatment', 'Gentle residue washout', 'Leave-in peptide serum apply'],
    stylistRecommendation: 'Perfect for working professionals facing city stress and scalp oiliness.'
  },

  // Hair Color & Highlights
  {
    id: 's4',
    name: 'Signature Balayage & Olaplex',
    category: 'Hair Color & Highlights',
    gender: 'women',
    price: 6999,
    duration: 180,
    image: 'https://images.unsplash.com/photo-1620331713243-7185fe473fac?auto=format&fit=crop&w=600&q=80',
    description: 'Exquisite hand-painted color highlights blended with high-class Olaplex active bond multipliers, guaranteeing minimum damage and premium shade depth.',
    benefits: ['Soft natural-looking grows', 'Olaplex structural hair guard', 'Perfect shade customization', 'Longer-lasting metallic tones'],
    steps: ['Shade consultation & skin check', 'Precise hand-painting dye application', 'Nourishing wash & Olaplex Bond 2', 'Toner shine lock-in & blowout'],
    stylistRecommendation: 'Keep highlighted hair vibrant with color-safe sulfate-free shampoo.'
  },
  {
    id: 's5',
    name: 'Root Touch-Up (Ammonia-Free)',
    category: 'Hair Color & Highlights',
    gender: 'unisex',
    price: 1499,
    duration: 60,
    image: 'https://images.unsplash.com/photo-1605497746444-ac9dbd39f4fe?auto=format&fit=crop&w=600&q=80',
    description: 'Touch up grey lines or new root growths with premium, nourishing, 100% ammonia-free color systems that preserve natural oil balances.',
    benefits: ['Full grey hair coverage', 'Odour-free, scalp-safe formula', 'Rich color saturation', 'Zero dry hair texture'],
    steps: ['Scalp barrier protection oil', 'Precise root dye alignment', 'Emulsification & washout', 'Moisture-balancing blow dry'],
    stylistRecommendation: 'Recommended every 3-4 weeks for perfect hair uniformness.'
  },

  // Skin & Facial
  {
    id: 's6',
    name: 'Hydra-Facial Deep Radiance Lift',
    category: 'Skin & Facial',
    gender: 'unisex',
    price: 3499,
    duration: 75,
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    description: 'A non-invasive 6-stage clinical facial combining skin exfoliation, blackhead extraction, intense hyaluronic moisture-infusion, and therapeutic cold blue-light shielding.',
    benefits: ['Removes deeply rooted whiteheads', 'Smoothes fine lines & sun damage', 'Gives an instant red-carpet glow', 'Stimulates natural skin elasticity'],
    steps: ['Exfoliation & peel scrub', 'Vortex-suction extraction', 'Antioxidant skin-infusion', 'LED photo-therapy styling'],
    stylistRecommendation: 'The ultimate prep step 2-3 days before any major wedding or celebration.'
  },
  {
    id: 's7',
    name: 'Activated Charcoal Tan Removal',
    category: 'Skin & Facial',
    gender: 'men',
    price: 1299,
    duration: 50,
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=600&q=80',
    description: 'Formulated with organic bamboo charcoal to pull toxins, deep-seated dirt, and excess oils while reversing stubborn outdoor Mumbai sun tan.',
    benefits: ['Restores original complexion', 'Tightens skin pores', 'Dead skin elimination', 'Controls sebum breakouts'],
    steps: ['Facial dynamic steam', 'Charcoal micro-clog scrub', 'Clay absorption mask', 'Nourishing SPF moisturization'],
    stylistRecommendation: 'A must-do treatment for daily bike riders and commuters facing heavy pollution.'
  },

  // Beard Grooming
  {
    id: 's8',
    name: 'Royal Beard Sculpt & Hot Towel Shave',
    category: 'Beard Grooming',
    gender: 'men',
    price: 499,
    duration: 30,
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    description: 'Sharp razor styling with specialized sandalwood lather, dynamic massage oil, and a calming cold-towel peppermint compression.',
    benefits: ['Perfect symmetrical beard lines', 'Soothes razor bumps & itchiness', 'Moisturizes dry under-beard skin', 'Extremely relaxing experience'],
    steps: ['Hot herbal steam towel wrap', 'Beard shaping & line trimming', 'Straight razor contouring', 'Calm balm massage & cold towel close'],
    stylistRecommendation: 'Keeps face lines extremely sharp. Apply beard oil daily.'
  },

  // Nails & Spa
  {
    id: 's9',
    name: 'Premium Gel Pedicure & Massage',
    category: 'Nails & Spa',
    gender: 'unisex',
    price: 1299,
    duration: 60,
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=600&q=80',
    description: 'Soothing crystal-salt bubble bath soak, premium micro-scrub exfoliation, cuticle trimming, relaxing massage, and high-shine gel nail gloss selection.',
    benefits: ['Softens cracked coarse heels', 'Induces deep muscle relaxation', 'Polished, extremely hygienic nails', 'Boosts feet blood flow'],
    steps: ['Sea salt soak & disinfection', 'Pumice stone scrub & cuticle care', 'Refreshing mud mask wrap', '20-min deep reflexology massage'],
    stylistRecommendation: 'Highly suggested to restore heavy walking stress and tired feet.'
  },

  // Bridal & Party
  {
    id: 's10',
    name: 'Glamour Party Styling & Makeup',
    category: 'Bridal & Party',
    gender: 'women',
    price: 3999,
    duration: 90,
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80',
    description: 'High-definition photography-ready cosmetics application tailored to your costume, paired with glamorous hair-curling or designer buns.',
    benefits: ['8-Hour waterproof wear', 'Flawless camera finish', 'Custom lashes & hair styling included', 'Covers skin blemishes perfectly'],
    steps: ['Costume & look color alignment', 'Airbrush foundation application', 'Precision eye and lip contouring', 'Hair setting with firm-hold spray'],
    stylistRecommendation: 'Book at least 2 hours prior to your travel time to ensure perfect drying.'
  },

  // Packages
  {
    id: 's11',
    name: 'The Professionnel Groom Essential Suite',
    category: 'Packages',
    gender: 'men',
    price: 2499,
    duration: 120,
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    description: 'A robust luxury combo featuring our Precision Haircut + Royal Hot Towel Shave + Activated Charcoal facial + Head massage. Save ₹700.',
    benefits: ['Full-body relaxation', 'Complete style upgrade', 'Incredible bundled savings', 'Complimentary premium espresso'],
    steps: ['All inclusive grooming session'],
    stylistRecommendation: 'Great prep package for groomsmen, dynamic business meetings, or dates.'
  },
  {
    id: 's12',
    name: 'The Queen Glamour Wellness Day',
    category: 'Packages',
    gender: 'women',
    price: 6499,
    duration: 180,
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffdb5965e4?auto=format&fit=crop&w=600&q=80',
    description: 'The ultimate royal package: Balayage Highlights + Sulfate-Free Hair Wash Spa + Deep Radiance Hydra-Facial + Salon Pedicure. Save ₹1800.',
    benefits: ['Total hair-to-toe pampering', 'Deep, long-lasting color & skin glow', 'Relaxing aromatherapy lounge access', 'Full premium service roster'],
    steps: ['Comprehensive day spa sequencing'],
    stylistRecommendation: 'Perfect for pre-wedding glow-ups, self-care days, and anniversaries.'
  }
];

export const STYLISTS: Stylist[] = [
  {
    id: 'st1',
    name: 'Vikram Salvi',
    role: 'Art Director & Master Hair Designer',
    experience: '12 Years',
    specialty: ['Precision Bob Cuts', 'Fade Specialists', 'French Balayage', 'Hair Rebonding'],
    rating: 4.93,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'Having trained in London and worked with leading celebrities in Mumbai, Vikram brings unmatched vision to fashion haircuts and high-contrast color blendings.'
  },
  {
    id: 'st2',
    name: 'Priyanka Sen',
    role: 'Chief Skin Therapist & Bridal Makeup Lead',
    experience: '9 Years',
    specialty: ['Advanced Hydra-Facials', 'Bridal Aesthetics', 'Airbrush Makeup', 'Dermaplaning'],
    rating: 4.95,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    bio: 'Priyanka is a certified aesthetician who understands Indian skin textures flawlessly. She crafts healthy, radiant glows using scientifically-grounded ingredients.'
  },
  {
    id: 'st3',
    name: 'Arjun Mehra',
    role: 'Senior Men Barber & Beard Grooming Specialist',
    experience: '8 Years',
    specialty: ['Royal Hot Towel Shaves', 'Beard Contouring', 'Hair Tattooing', 'Classic Scissors Style'],
    rating: 4.91,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'Arjun treats beards as a work of art. Known for razor sharp symmetries and relaxing steam compressions, he has a loyal following across South Mumbai.'
  },
  {
    id: 'st4',
    name: 'Lisa D’Souza',
    role: 'Nail technician & Aromatherapist Lead',
    experience: '7 Years',
    specialty: ['Gel Extension Art', 'Nail Overlay Sculpting', 'Reflexology Massages', 'Organic Pedicures'],
    rating: 4.89,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Lisa blends absolute precision nail designs with deeply therapeutic massage gestures that will melt your workweek fatigue completely away.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Kérastase Nutritive Bain Satin Shampoo',
    category: 'shampoo',
    price: 2450,
    originalPrice: 2800,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=400&q=80',
    description: 'An exceptional high-nutrition shampoo for dry hair. Gently cleanses while preparing fibers for deep restoration, leaving hair exceptionally soft and lightweight.',
    brand: 'Kérastase Paris',
    rating: 4.8,
    reviewsCount: 142,
    isBestSeller: true
  },
  {
    id: 'p2',
    name: 'L’Oréal Professionnel Absolut Repair Conditioner',
    category: 'conditioner',
    price: 1850,
    originalPrice: 2100,
    image: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=400&q=80',
    description: 'Resurfacing nourishing conditioner infused with Gold Quinoa and Wheat Protein. Instantly restructures dry, damaged lengths with a soft, silky exterior finish.',
    brand: 'L’Oréal Professionnel',
    rating: 4.7,
    reviewsCount: 94
  },
  {
    id: 'p3',
    name: 'Moroccanoil Treatment Original Serum',
    category: 'serum',
    price: 3600,
    originalPrice: 4000,
    image: 'https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&w=400&q=80',
    description: 'The revolutionary pioneering oil treatment infused with premium antioxidant-rich Argan oil. Detangles, speeds up blow drying time, and locks in a glossy finish.',
    brand: 'Moroccanoil',
    rating: 4.9,
    reviewsCount: 204,
    isBestSeller: true
  },
  {
    id: 'p4',
    name: 'Beardo Irish Beard Oil & Wax Combo',
    category: 'beard',
    price: 699,
    originalPrice: 850,
    image: 'https://images.unsplash.com/photo-1590156546746-c58be2733855?auto=format&fit=crop&w=400&q=80',
    description: 'Premium conditioning blend of almond, argan, and rosemary oils. Softens crisp, rough beard fibers and keeps standard skin hydrated under thick facial hair growth.',
    brand: 'Beardo India',
    rating: 4.6,
    reviewsCount: 78
  },
  {
    id: 'p5',
    name: 'Aveda Botanical Repair Strengthening Masque',
    category: 'conditioner',
    price: 2900,
    originalPrice: 3200,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=400&q=80',
    description: 'Transformative plant-derived treatment that instantly constructs active bonds to reinforce dry hair fibers from within. Smoothes, detangles, and prevents split hair end breakage.',
    brand: 'Aveda',
    rating: 4.8,
    reviewsCount: 65
  },
  {
    id: 'p6',
    name: 'Plum 3% Niacinamide Clear Serum',
    category: 'face',
    price: 550,
    originalPrice: 650,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=400&q=80',
    description: 'Lightweight fluid packed with pure fermented rice water extract to clear acne marks, control sebum, and brighten uneven Mumbai pollution-affected facial skin tone.',
    brand: 'Plum Goodness',
    rating: 4.5,
    reviewsCount: 112
  },
  {
    id: 'p7',
    name: 'Olaplex No. 7 Bonding Styling Oil',
    category: 'oil',
    price: 2950,
    originalPrice: 3300,
    image: 'https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?auto=format&fit=crop&w=400&q=80',
    description: 'A highly-concentrated, ultra-light styling oil. Patented bond-building technology protects hair against temperatures up to 450°F while drastically enhancing softness.',
    brand: 'Olaplex',
    rating: 4.9,
    reviewsCount: 189,
    isBestSeller: true
  },
  {
    id: 'p8',
    name: 'Dyson Supersonic Ceramic Styling Pack',
    category: 'tools',
    price: 34900,
    originalPrice: 39900,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=400&q=80',
    description: 'Our top recommendation for domestic professional styling. Intelligent heat-control measures air flow temperature 40 times per second to secure cuticles from heat damage.',
    brand: 'Dyson',
    rating: 4.9,
    reviewsCount: 43
  }
];

export const BLOGS: BlogPost[] = [
  {
    id: 'b1',
    title: 'Defeating Monsoon Frizz: A Mumbai Guide',
    excerpt: 'High humidity in Mumbai can ruin the best styles. Here are 5 hair expert secrets to keeping your locks flat, smooth, and full of volume through heavy rain seasons.',
    content: [
      'Mumbai is gorgeous when it rains, but for our hair, the 90%+ humidity is our worst enemy. When moist air meets dry, porous hair fibers, the cuticles swell instantly, leading to rough textures and unruly curls.',
      'The key to defeating monsoon frizz starts with proper dynamic moisture balance. When your hair is fully hydrated from within, it stops absorbing external environmental humidity. That is where sulfate-free oils and keratin shields come to play.',
      '1. Stop Using Sulfates: Sulfate cleansing strips essential natural oils, leaving hair dry and extremely thirsty for atmospheric water. Switch to mild, moisture-locking shampoos.',
      '2. Seal With Silicons or Argan: Applying premium Argan-based serums on damp locks wraps a microscopic hydrophobic barrier over individual cuticles, preventing rain humidity from swelling the fibers.',
      '3. Sleep on Satin or Silk: Traditional cotton pillowcases create micro-friction during sleep, roughing up the cuticles and setting up morning frizz. Smooth textures prevent damage.',
      '4. Invest in Professional Keratin: If your hair is notoriously frizz-prone, booking a keratin treatment acts as a semi-permanent waterproofing shield, keeping hair glass-sleek and tangle-free for 12-16 weeks.'
    ],
    category: 'Hair Care',
    readTime: '4 Min Read',
    image: 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=600&q=80',
    date: 'June 4, 2026',
    author: 'Vikram Salvi'
  },
  {
    id: 'b2',
    title: 'Top 5 Haircut Trends for Mumbai Men in 2026',
    excerpt: 'From sharp mid-skin fades to textured crop fringes, discover the stylish hairstyles taking over the streets of Dadar and Bandra this year.',
    content: [
      'Men’s grooming has evolved from a chore to a pure statement of personal branding. In Mumbai, where warm climates demand freshness but nightlife demands flair, hairstyles must be both functional and trendy.',
      'Here are the most popular haircuts our clients are booking in 2026:',
      '1. The Dadar Mid-Skin Fade: A sharp clipper gradient starts tight from the ears, seamlessly feeding into a dense top. It keeps the neck cool during humid commutes while keeping lines incredibly sleek.',
      '2. Textured French Crop: Clean, blunt fringes pushed forward with heavy styling clay. This is a brilliant solution for concealing receding corners while keeping low-maintenance hair styling.',
      '3. The Modern Pompadour: High volume top brushed backward with high-shine wet styling wax. It fits suits and business meetings flawlessly but can be styled messy for a casual beach look.',
      '4. Classic Scissor Flow: No clippers, just absolute shears precision. Grown-out, side-parted hair with soft tuck-outs behind ears. It project an artistic, upscale aesthetic popular with models.'
    ],
    category: 'Men Styling',
    readTime: '3 Min Read',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    date: 'May 28, 2026',
    author: 'Arjun Mehra'
  },
  {
    id: 'b3',
    title: 'The Hydra-Facial Benefit: Science Behind The Glow',
    excerpt: 'Why is everyone in Mumbai booking Hydra-facials before major events? We break down the clinical technology that makes this treatment so powerful.',
    content: [
      'Historically, traditional facials involved manual extraction of blackheads, heavy abrasive scrubs, and painful squeezing. This often led to red, inflamed skin and broken capillaries.',
      'Enter the Hydra-Facial: a multi-step technology that utilizes water vortex vacuuming instead of abrasive friction. This medical-grade technology delivers instant, visible pore clearance and deep peptide hydration simultaneously.',
      'How it works: First, a mild glycolic acid peel softens cellular dead layers. Next, the spiral vortex suction tip glides over the face, vacuuming blackheads, excess oil, and impurities without any physical irritation.',
      'Finally, high-pressure infusion pours antioxidant cocktails and hyaluronic acid deep into the newly emptied pores, leaving the face look plump, bright, and deeply radiant.',
      'For city dwellers, this pore-vacuuming action is a game changer for removing dense atmospheric soot and toxic dirt build-ups.'
    ],
    category: 'Skin Science',
    readTime: '5 Min Read',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    date: 'May 12, 2026',
    author: 'Priyanka Sen'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    type: 'transformation',
    title: 'Sleek Balayage Makeover',
    beforeImage: 'https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&w=600&q=80', // dry frizzy dark
    afterImage: 'https://images.unsplash.com/photo-1620331713243-7185fe473fac?auto=format&fit=crop&w=600&q=80', // stylish balayage
    image: 'https://images.unsplash.com/photo-1620331713243-7185fe473fac?auto=format&fit=crop&w=600&q=80',
    category: 'hair'
  },
  {
    id: 'g2',
    type: 'transformation',
    title: 'Precision Mid-Fade Beard Alignment',
    beforeImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80', // fuzzy beard
    afterImage: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80', // neat stylish barber cut
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    category: 'beard'
  },
  {
    id: 'g3',
    type: 'ambiance',
    title: 'Modern Salon Workstations',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80',
    category: 'hair'
  },
  {
    id: 'g4',
    type: 'transformation',
    title: 'Hydra-Facial Active Glow Results',
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80', // dry skin
    afterImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80', // glossy skin treatment
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=600&q=80',
    category: 'skin'
  },
  {
    id: 'g5',
    type: 'ambiance',
    title: 'Aromatherapy Reflexology Room',
    image: 'https://images.unsplash.com/photo-1600948836101-f9ffdb5965e4?auto=format&fit=crop&w=600&q=80',
    category: 'women'
  },
  {
    id: 'g6',
    type: 'event',
    title: 'Annual Style & Celebration Gala',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    category: 'hair'
  }
];
