import Script from 'next/script';
import { useEffect, useState } from 'react';

export default function Home() {
  const amenities = [
    'Private Hot Tub',
    'Private Sauna',
    'Mountain Views',
    'Radiant Heated Floors',
    'Grand Fireplace',
    '86” Smart TV',
    'Fast Wi‑Fi',
    'Towel Warmers',
    'Private Patio',
    'Luxury King Bedroom',
    'Peaceful Walking Trails',
    'Fresh Hot Tub Water'
  ];

  const amenityGroups = [
    {
      title: 'Kitchen',
      items: [
        'Baking sheet',
        'Blender',
        'Coffee – Nespresso pods',
        'Nespresso coffee maker',
        'Coffee maker and filters',
        'Cooking basics – pots, pans, oil, salt, and pepper',
        'Dishes and silverware',
        'Dishwasher',
        'Freezer',
        'Hot water kettle',
        'Microwave',
        'XL toaster oven air fryer',
        'Refrigerator',
        'Toaster',
        'Wine glasses'
      ]
    },
    {
      title: 'Bathroom',
      items: [
        'Body soap',
        'Conditioner',
        'Heated towel rack',
        'Toilet paper',
        'Towels',
        'Walk-in shower',
        'Hair dryer',
        'Shampoo',
        'Shower gel'
      ]
    },
    {
      title: 'Bedroom',
      items: [
        'Bed linens',
        'Clothing storage',
        'Extra pillows and blankets',
        'Hangers',
        'Iron',
        'King bed – fully motor adjustable',
        'Room-darkening shades',
        '55” smart TV'
      ]
    },
    {
      title: 'Indoor Features',
      items: [
        'Air conditioning',
        'Board games',
        'Ceiling fans',
        'Dedicated workspace',
        'Dining table',
        'Radiant floor heating',
        'Hot water',
        'Indoor gas fireplace',
        'Sectional with 4 recliners',
        'Soft bed',
        'Sound system',
        '86” smart TV'
      ]
    },
    {
      title: 'Safety',
      items: [
        'Carbon monoxide alarm',
        'Fire extinguisher',
        'First aid kit',
        'Fireplace guards',
        'Outlet covers',
        'Smoke alarm'
      ]
    },
    {
      title: 'Outdoor Features',
      items: [
        'Backyard',
        'Gas BBQ grill',
        'Barbecue utensils',
        'Fire pit',
        'Forest views',
        'Free parking on premises',
        'Hot tub – freshly filled',
        'Mountain views',
        'Outdoor dining area',
        'Outdoor furniture',
        'Patio',
        'Sauna',
        'Sun loungers',
        'Private forest trails'
      ]
    },
    {
      title: 'Other Features',
      items: [
        'Laundromat nearby',
        'Luggage drop-off allowed',
        'Highchair upon request',
        'Pack ’n play / travel crib upon request',
        'Portable fans',
        'Privacy – no shared spaces except forest trails',
        'Private entrance',
        'Wi-Fi over 400 Mbps'
      ]
    }
  ];

  const reviews = [
    {
      title: 'A peaceful luxury retreat',
      name: 'Guest Review',
      text: 'The Living Room is peaceful, private, beautifully designed, and filled with thoughtful touches. The hot tub, sauna, views, and fireplace made it feel like a true retreat.'
    },
    {
      title: 'Ritz in the Rockies',
      name: 'Guest Review',
      text: 'Every detail was considered — from the heated floors and towel warmers to the organized guide and relaxing outdoor spaces. It felt elevated, comfortable, and unforgettable.'
    },
    {
      title: 'The perfect couples getaway',
      name: 'Guest Review',
      text: 'A wonderful place to relax, reconnect, and enjoy the quiet beauty of Colorado. We loved the privacy, amenities, and mountain setting.'
    }
  ];

  const photos = [
    '/images/living-room-hero.png',
    '/images/living-room-hot-tub.png',
    '/images/living-room-sauna.png',
    '/images/living-room-bedroom.png',
    '/images/living-room-patio.png',
    '/images/living-room-fireplace.png',
    '/images/living-room-view.png',
    '/images/living-room-bathroom.png'
  ];

  const [photoStartIndex, setPhotoStartIndex] = useState(0);
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [showCompleteDescription, setShowCompleteDescription] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);
  const [isBookingCardFloating, setIsBookingCardFloating] = useState(false);

  const galleryPhotos = [
    '/images/living-room-gallery/1_Photo_Gallery.png',
    '/images/living-room-gallery/2_Photo_Gallery.png',
    '/images/living-room-gallery/3_Photo_Gallery.png',
    '/images/living-room-gallery/4_Photo_Gallery.png',
    '/images/living-room-gallery/5_Photo_Gallery.png',
    '/images/living-room-gallery/6_Photo_Gallery.png',
    '/images/living-room-gallery/7_Photo_Gallery.png',
    '/images/living-room-gallery/8_Photo_Gallery.png',
    '/images/living-room-gallery/9_Photo_Gallery.png',
    '/images/living-room-gallery/10_Photo_Gallery.png',
    '/images/living-room-gallery/11_Photo_Gallery.png',
    '/images/living-room-gallery/12_Photo_Gallery.png',
    '/images/living-room-gallery/13_Photo_Gallery.png',
    '/images/living-room-gallery/14_Photo_Gallery.png',
    '/images/living-room-gallery/15_Photo_Gallery.png',
    '/images/living-room-gallery/16_Photo_Gallery.png',
    '/images/living-room-gallery/17_Photo_Gallery.png',
    '/images/living-room-gallery/18_Photo_Gallery.png',
    '/images/living-room-gallery/19_Photo_Gallery.png',
    '/images/living-room-gallery/20_Photo_Gallery.png',
    '/images/living-room-gallery/21_Photo_Gallery.png',
    '/images/living-room-gallery/22_Photo_Gallery.png',
    '/images/living-room-gallery/23_Photo_Gallery.png',
    '/images/living-room-gallery/24_Photo_Gallery.png',
    '/images/living-room-gallery/25_Photo_Gallery.png',
    '/images/living-room-gallery/26_Photo_Gallery.png',
    '/images/living-room-gallery/27_Photo_Gallery.png',
    '/images/living-room-gallery/28_Photo_Gallery.png',
    '/images/living-room-gallery/29_Photo_Gallery.png',
    '/images/living-room-gallery/30_Photo_Gallery.png',
    '/images/living-room-gallery/31_Photo_Gallery.png',
    '/images/living-room-gallery/32_Photo_Gallery.png',
    '/images/living-room-gallery/33_Photo_Gallery.png',
    '/images/living-room-gallery/34_Photo_Gallery.png',
    '/images/living-room-gallery/35_Photo_Gallery.png',
    '/images/living-room-gallery/36_Photo_Gallery.png',
    '/images/living-room-gallery/37_Photo_Gallery.png',
    '/images/living-room-gallery/38_Photo_Gallery.png',
    '/images/living-room-gallery/39_Photo_Gallery.png',
    '/images/living-room-gallery/40_Photo_Gallery.png',
    '/images/living-room-gallery/41_Photo_Gallery.png',
    '/images/living-room-gallery/42_Photo_Gallery.png',
    '/images/living-room-gallery/43_Photo_Gallery.png',
    '/images/living-room-gallery/44_Photo_Gallery.png',
    '/images/living-room-gallery/45_Photo_Gallery.png',
    '/images/living-room-gallery/46_Photo_Gallery.png',
    '/images/living-room-gallery/47_Photo_Gallery.png',
    '/images/living-room-gallery/48_Photo_Gallery.png',
    '/images/living-room-gallery/49_Photo_Gallery.png',
    '/images/living-room-gallery/50_Photo_Gallery.png',
    '/images/living-room-gallery/51_Photo_Gallery.png'
  ];

  const visiblePhotos = [0, 1, 2].map((offset) => {
    const photoIndex = (photoStartIndex + offset) % photos.length;
    return photos[photoIndex];
  });

  const showNextPhotos = () => {
    setPhotoStartIndex((currentIndex) => (currentIndex + 1) % photos.length);
  };

  const showPreviousPhotos = () => {
    setPhotoStartIndex((currentIndex) => (currentIndex - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setPhotoStartIndex((currentIndex) => (currentIndex + 1) % photos.length);
    }, 5000);

    return () => clearInterval(carouselTimer);
  }, [photos.length]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        setIsBookingCardFloating(scrollY > 420);

        setIsHeaderCompact((currentlyCompact) => {
          // Only shrink after scrolling well past the top.
          if (!currentlyCompact && scrollY > 160) {
            return true;
          }

          // Only expand when almost completely back to the top.
          if (currentlyCompact && scrollY < 8) {
            return false;
          }

          return currentlyCompact;
        });

        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <HeadContent />

      <Script
        src="https://platform.hostfully.com/assets/js/orbirental_calendar_widget_v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.orbiwidget) {
            new window.orbiwidget('widget222768', {
              id: 222768,
              showTentative: 0,
              monthsToDisplay: 2,
              name: 'The Living Room'
            });
          }
        }}
      />

      <Script
        src="https://platform.hostfully.com/assets/js/pikaday.js"
        strategy="afterInteractive"
      />

      <Script
        src="https://platform.hostfully.com/assets/js/leadCaptureWidget_2.0.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.Widget) {
            new window.Widget('leadWidget', '466e439f-ae4b-4ef0-94c5-8cb63da0f2b1', {
              maximun_availability: '2029-05-08T00:13:33.698Z',
              type: 'agency',
              fields: [],
              showAvailability: true,
              lang: 'US',
              minStay: true,
              price: false,
              hidePriceWithoutDates: false,
              cc: false,
              emailClient: true,
              saveCookie: true,
              showDynamicMinStay: true,
              backgroundColor: '#FFFFFF',
              buttonSubmit: {
                backgroundColor: '#6d4c32'
              },
              showPriceDetailsLink: true,
              showGetQuoteLink: false,
              labelColor: '#6d4c32',
              showTotalWithoutSD: true,
              redirectURL: false,
              showDiscount: true,
              includeReferrerToRequest: true,
              customDomainName: null,
              source: null,
              aid: 'ORB-49587220416635719',
              clickID: null,
              valuesByDefaults: {
                checkIn: { value: '' },
                checkOut: { value: '' },
                guests: { value: '' },
                discountCode: { value: '' }
              },
              pathRoot: 'https://platform.hostfully.com/'
            });
          }
        }}
      />

      <header className={`site-header ${isHeaderCompact ? 'site-header-compact' : ''}`}>
        <div className="brand-wrap">
          <img
            className="brand-logo"
            src="/images/Elevated-Stays-Colorado-Logo.png"
            alt="Elevated Stays Colorado logo"
          />

        </div>
        <nav className="desktop-nav">
          <div className="nav-dropdown">
            <button className="nav-link-button" type="button">Properties</button>
            <div className="dropdown-menu">
              <a href="#the-cabin">The Cabin</a>
              <a href="#the-living-room">The Living Room</a>
            </div>
          </div>
          <a href="#directions">Directions</a>

          <div className="nav-dropdown">
            <button className="nav-link-button" type="button">Shop Your Stay</button>
            <div className="dropdown-menu">
              <a href="#shop-your-stay-cabin">Shop Your Stay: The Cabin</a>
              <a href="#shop-your-stay-living-room">Shop Your Stay: The Living Room</a>
            </div>
          </div>
          <a href="#description">Description</a>
          <a href="#amenities-title">Amenities</a>
          <a href="#reviews">Reviews</a>
          <a href="#details">Details</a>
          <a href="https://www.airbnb.com/h/the-living-room" className="nav-button">Book Now</a>
          <div className="social-icons">
            <a href="#facebook" aria-label="Visit us on Facebook" className="social-icon" target="_blank" rel="noopener noreferrer" data-tooltip="Facebook">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.5h2V5.3c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05v2.8H5v3.6h3.13V24h3.84v-7.4h3.01l.48-3.6h-3.49v-2.44c0-1.04.29-1.76 2.03-1.76Z" />
              </svg>
            </a>
            <a href="#instagram" aria-label="Visit us on Instagram" className="social-icon" target="_blank" rel="noopener noreferrer" data-tooltip="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5Zm4.25 3.3A4.7 4.7 0 1 1 7.3 12 4.71 4.71 0 0 1 12 7.3Zm0 2A2.7 2.7 0 1 0 14.7 12 2.7 2.7 0 0 0 12 9.3Zm5.05-2.55a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
              </svg>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="photos">
          <div className="property-wordmark-wrap">
            <img
              className="property-wordmark"
              src="/images/The_Living_Room_Wording_Chat_Colored.png"
              alt="The Living Room"
            />
          </div>

          <div className="hero-carousel" aria-label="The Living Room photo carousel">
            {visiblePhotos.map((photo, index) => (
              <div className="carousel-photo image-card" key={`${photo}-${index}`}>
                <img src={photo} alt={`The Living Room retreat photo ${index + 1}`} />

                {index === 0 && (
                  <>
                    <button
                      className="carousel-arrow carousel-arrow-left"
                      onClick={showPreviousPhotos}
                      aria-label="Show previous photos"
                      type="button"
                    >
                      ←
                    </button>
                    <button
                      className="more-photos-button"
                      onClick={() => setShowPhotoGallery(true)}
                      type="button"
                    >
                      <img
                        className="camera-icon"
                        src="/images/More-Photos-Camera-Icon.png"
                        alt=""
                        aria-hidden="true"
                      />
                      More Photos
                    </button>

                  </>
                )}

                {index === 2 && (
                  <button
                    className="carousel-arrow"
                    onClick={showNextPhotos}
                    aria-label="Show next photos"
                    type="button"
                  >
                    →
                  </button>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="page-shell intro-layout">
          <div className="property-main">
            <p className="location">A Luxury Couples Retreat - Divide, Colorado</p>

            <div className="stats-row">
              <div className="guests-stat">
                <div className="guests-stat-content">
                  <div className="stat-text-stack">
                    <strong>2</strong>
                    <span>Guests</span>
                  </div>
                  <img
                    className="guests-stat-icon"
                    src="/images/man-with-luggage-brown.png"
                    alt="Guests icon"
                  />
                </div>
              </div>
              <div className="bedroom-stat">
                <div className="bedroom-stat-content">
                  <div className="stat-text-stack">
                    <strong>1</strong>
                    <span>Bedroom</span>
                  </div>
                  <img
                    className="bedroom-stat-icon"
                    src="/images/side-view-of-a-black-bed-silhouette-vector.png"
                    alt="Bed icon"
                  />
                </div>
              </div>
              <div className="bathroom-stat">
                <div className="bathroom-stat-content">
                  <div className="stat-text-stack">
                    <strong>1</strong>
                    <span>Bathroom</span>
                  </div>
                  <img
                    className="bathroom-stat-icon"
                    src="/images/shower-icon-for-bathroom-with-water-spray-vector-brown.png"
                    alt="Shower icon"
                  />
                </div>
              </div>
              <div><strong>1,400</strong><span>Sq. Ft.</span></div>
            </div>

            <div id="directions" className="directions-heading-wrap">
              <h2>Directions</h2>
            </div>

            <div className="property-map">
              <iframe
                title="Map to The Living Room in Divide, CO"
                src="https://www.google.com/maps?q=Divide%2C%20CO&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>

            <div id="description" className="description-heading-wrap">
              <h2>Description</h2>
            </div>

            <p className="lead">
              Welcome to The Living Room — a private, spa-inspired mountain retreat created for rest, romance, and renewal. Enjoy a freshly filled hot tub, a private sauna, radiant heated floors, a grand fireplace, expansive patio space, and peaceful views near Pikes Peak.
            </p>

            <div className="highlights">
              <p>☀ Private hot tub filled with fresh water for every guest</p>
              <p>☀ Private sauna for a relaxing spa experience</p>
              <p>☀ Grand fireplace, heated floors, and towel warmers</p>
              <p>☀ 86” smart TV, fast Wi‑Fi, and a peaceful work-friendly setting</p>
              <p>☀ Private walking trails and a quiet mountain atmosphere</p>
            </div>
          </div>

          <aside className={`booking-card ${isBookingCardFloating ? 'booking-card-floating' : ''}`}>
            <p className="eyebrow">Ready to unwind?</p>
            <h3>Book The Living Room</h3>
            <p>Check availability, rates, and secure your stay through Airbnb.</p>
            <a href="#rates-availability" className="primary-button">Check Availability</a>
            <a href="mailto:info@elevatedstayscolorado.com" className="secondary-button">Ask a Question</a>
            <div className="trust-note">Warmly hosted by Mark & Renee</div>
          </aside>
        </section>

        <section className="page-shell complete-description-link-wrap">
          <button
            className="complete-description-button"
            onClick={() => setShowCompleteDescription(true)}
            type="button"
          >
            Complete Description
          </button>
        </section>

        <section className="page-shell" id="amenities">
          <div id="amenities-title" className="section-heading amenities-heading-wrap">
            <h2>Features &amp; Amenities</h2>
          </div>
          <div className="amenity-grid">
            {amenities.map((item) => (
              <div className="amenity" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="show-all-amenities-wrap">
            <button
              className="complete-description-button"
              onClick={() => setShowAllAmenities(true)}
              type="button"
            >
              Show All
            </button>
          </div>

          <div className="rates-availability-section" id="rates-availability">
            <div className="rates-title-row">
              <h2>Rates and Availability</h2>
              <span></span>
            </div>

            <div className="rates-availability-layout">
              <div className="rates-calendar-panel">
                <div id="widget222768" className="hostfully-calendar-widget"></div>
              </div>

              <aside className="rates-booking-card hostfully-booking-card">
                <div id="leadWidget" className="hostfully-booking-widget"></div>
              </aside>
            </div>
          </div>
        </section>

        <section className="wide-feature">
          <div className="page-shell feature-layout">
            <div>
              <p className="eyebrow">The Experience</p>
              <h2>A destination created for couples to relax and rejuvenate</h2>
              <p>
                The Living Room is more than a place to sleep — it is an experience. Soak under the stars, warm up in the sauna, relax by the fireplace, and enjoy a quiet setting that feels private, peaceful, and elevated.
              </p>
            </div>
            <div className="feature-card">
              <h3>Guest Favorites</h3>
              <ul>
                <li>Fresh hot tub water for every stay</li>
                <li>Private sauna and spa-like amenities</li>
                <li>Beautiful patio with mountain atmosphere</li>
                <li>Thoughtful labels, guidebook, and easy instructions</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="page-shell" id="reviews">
          <div className="section-heading centered">
            <p className="eyebrow">What Guests Are Saying</p>
            <h2>Warm reviews from peaceful stays</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.title}>
                <div className="stars">★★★★★</div>
                <h3>{review.title}</h3>
                <p>{review.text}</p>
                <span>{review.name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="page-shell details-layout" id="details">
          <div>
            <p className="eyebrow">Description</p>
            <h2>Private, peaceful, and thoughtfully designed</h2>
            <p>
              Step into a newly renovated retreat with a luxurious ground-level penthouse feel. With 31 windows, warm natural light, radiant heat, and inviting spaces indoors and outdoors, The Living Room was designed to help guests slow down and feel cared for.
            </p>

            <h3>Living Space</h3>
            <p>
              The spacious living area features a grand fireplace, comfortable seating, an 86” smart TV, fast Wi‑Fi, and a refined atmosphere that feels both luxurious and comfortable.
            </p>

            <h3>Outdoor Spa Area</h3>
            <p>
              Enjoy the private hot tub, sauna, exterior lighting, fresh mountain air, and approximately 1,200 square feet of patio space for quiet mornings, peaceful evenings, and beautiful Colorado moments.
            </p>
          </div>

          <div className="details-card">
            <h3>Good to Know</h3>
            <p><strong>Check-in:</strong> 4:00 PM</p>
            <p><strong>Check-out:</strong> 10:00 AM</p>
            <p><strong>Best for:</strong> Couples, anniversaries, romantic getaways, peaceful retreats</p>
            <p><strong>Laundry:</strong> No washer/dryer onsite; a 24-hour laundromat is about 10 minutes away.</p>
          </div>
        </section>

        <section className="final-cta">
          <div className="page-shell">
            <p className="eyebrow">Your mountain retreat is waiting</p>
            <h2>Come relax, reconnect, and experience The Living Room.</h2>
            <a href="https://www.airbnb.com/h/the-living-room" className="primary-button light">Book Your Stay</a>
          </div>
        </section>
      </main>

      {showCompleteDescription && (
        <div className="description-modal" role="dialog" aria-modal="true" aria-label="Complete description for The Living Room">
          <button
            className="description-close-button"
            onClick={() => setShowCompleteDescription(false)}
            aria-label="Close complete description"
            type="button"
          >
            ×
          </button>

          <div className="description-modal-content">
            <div className="description-row">
              <h2>Listing Description</h2>
              <p>
                Welcome to your romantic and luxurious mountain retreat at Eagle Ridge! The Living Room is a stunning 1400 sf newly renovated home situated in a gated 43-acre property with stunning views of Pikes Peak and exclusive use of the freshly filled hot tub and custom-built sauna. With a large 1200 sf patio and access to walking trails on this private property, this space has everything you need for a peaceful and rejuvenating vacation retreat -- a hotel penthouse experience on ground level!
              </p>
            </div>

            <div className="description-row">
              <h2>What you will experience</h2>
              <div className="description-text">
                <p>Escape to the mountains of Colorado in this beautiful home. Inside you'll find a perfect blend of modern and rustic design with radiant floor heating, a grand feature fireplace, and 31 windows that flood the space with natural light.</p>

                <p>The large leather sectional with 4 built in motorized recliners and adjustable head rests allows you to enjoy relaxing moments by the fireplace. The spacious main room boasts an 86&quot; smart TV and lightning-fast Wi-Fi with speeds up to 400 Mbps, creating the perfect spot for movie nights or remote work sessions.</p>

                <p>The smart TV provides access to 100's of internet TV channels and apps like YouTube, with the option to add your own account credentials for account-based apps like Netflix. Alternatively, you can simply screen share from your laptop or phone.</p>

                <p>Experience the powerful surround sound system for watching movies, sports or playing music from your mobile phone.</p>

                <p>Sleep soundly in the loft bedroom with a luxurious adjustable base king-size bed with infinite ergonomic positions. Rest your head on premium hotel grade pillows: your choice of goose down feather pillows or non-feather pillows. With a 55&quot; Roku smart TV and IOS Airplay and Android screen sharing capabilities, you can relax and unwind with your favorite shows or movies.</p>

                <p>Step out of the king size bed and continue living like a king or queen by slipping on a plush spa bath robe and slippers.</p>

                <p>For your comfort, protection and as a sign of outstanding cleanliness, all beds are prepared with quality linens, clean ironed sheets, down duvets, freshly laundered duvet covers and bedspreads, mattress protectors and pillow protectors.</p>

                <p>Need more sleeping space? On the main floor you will find the queen-size sofa bed by American Leather, which is the best on the market, with a thick, plush, high-density foam Premier mattress for ultimate comfort. The sofa bed mattress sits on a platform, eliminating the traditional sofa bed bars and springs. The bed can fold out and be ready in minutes.</p>

                <p>The bathroom ... you'll say &quot;Wow&quot; every time you see it featuring its floating back-lit circular mirror and radiant heated floor. High quality soap, shampoo and conditioner are provided, as well as a hair dryer, make-up remover wipes, and a back-lit make-up mirror. And last but not least, a towel warming rack to add to the pampered spa experience.</p>

                <p>The quartz counter-topped kitchen is fully equipped, including items such as a reverse osmosis water filter, insta-hot faucet, microwave oven, full sized fridge, Nespresso coffee maker with multiple pod flavors, regular coffee maker, Nutri Bullet blender combo, toaster, an extra-large air fryer/toaster oven which is large enough for a 15&quot; pizza and adequate for any normal cooking needs and a double burner hot plate. The kitchen is also fully outfitted with dishes, utensils, pots, and pans needed for preparing delicious meals. In addition, the BBQ grill with side burner is available year-round.</p>

                <p>Step outside onto your private patio oasis and take in the stunning view of Pikes Peak, America’s most visited mountain. Enjoy the view while relaxing in one of six comfortable Adirondak chairs.</p>

                <p>Fire up the natural gas barbecue grill or gather around the feature natural gas fire pit for a cozy evening under the stars. For your comfort, cushions are available while sitting on the patio chairs or at the fire pit. If the evening is cool while sitting at the fire pit, wrap yourself in the warm wool fireside blankets.</p>

                <p>If you are planning on riding ATVs in the nearby National Forest, there is ample space and secure parking for your ATV trailer.</p>

                <p>Step into the 6 person 80 jet hot tub and continue to soak up the views. The hot tub is drained and refilled with fresh, clean mountain water before each guest check-in. While sitting inside, out on the patio, or walking the private trail through the forest and meadows, enjoy observing wildlife in their natural habitat, including deer, owls, rabbits, and a variety of birds, with occasional elk sightings.</p>

                <p>Get the full mountain spa experience with your own private custom-built western red cedar sauna.</p>

                <p>Relax and sip coffee, tea, wine, or your favorite drink on the private patio outside or on the luxurious curved leather sofa inside and witness breathtaking views of double rainbows, radiant sunrises / sunsets, and lingering evening alpenglow.</p>

                <p>Air conditioning is available. However, the many large windows provide refreshing ventilation on warm summer days. Evenings in the summer are rarely over 60F and daytime highs are usually mid 70's and rarely hit 80F. This is the perfect retreat from the summer heat.</p>

                <p>Fall and winter are exceptional times at the Living Room with brilliant autumn colors and scenic winter snowscapes outside and a warm romantic atmosphere and huge cozy fireplace inside.</p>

                <p>Enjoy Thanksgiving and Christmas decorations throughout November and December.</p>

                <p>There is beautiful snowfall in the winter months. All roads to and on the property are well maintained and plowed to ensure easy passage with your two-wheel or four-wheel drive vehicle.</p>

                <p>After you make your reservation, we will make available to you our tour guidebook. In the book there are over 50 attractions in the area, including restaurants, outdoor adventures, tourist stops, parks and driving tours. Most of these attractions are available all year round.</p>

                <p>During ski season, you can enjoy an early breakfast at the Living Room, leave at 7:30 and be at the Breckenridge ski area when they open for a day of skiing.</p>

                <p>This home is ideal for honeymoons, anniversaries, and birthday luxury getaways. While there are other homes on the property, and from the Living Room other acreages are in view, your home is completely private with its own patio, hot tub, sauna, and fire pit. It has its own private driveway, parking area, and entrance, ensuring your privacy throughout your stay. With access to private walking trails, for you and the other guests on the property, through the forest and meadows, you can immerse yourself in the natural beauty of Colorado without ever leaving the property.</p>

                <p>Book your stay today and experience the ultimate mountain getaway!</p>
              </div>
            </div>

            <div className="description-row">
              <h2>Guest access</h2>
              <div className="description-text">
                <p>The entire 1400 sq ft home and 1200 sq ft patio are for your private use and are not shared with anyone else. The trails and the forest on the property are shared with the owner and other guests. This place is ideal for celebrating special occasions like a honeymoon or anniversary.</p>

                <p>For guests who book the same day they plan to arrive, please confirm the check-in time with the host as we may need up to 4 hours to clean and prepare for your arrival.</p>

                <h3>Additional Guests</h3>
                <p>Peace and security are important to us and to all other guests and residents who are on the property. Therefore, only registered guests are allowed on the property. Additional guests, during the daytime or overnight, are not allowed.</p>

                <p>No parties or events are allowed.</p>
              </div>
            </div>

            <div className="description-row">
              <h2>Interaction with Guests</h2>
              <div className="description-text">
                <p>With self-check in, you can make your stay totally private.</p>

                <p>If there is snow in the forecast, we will leave a shovel and broom outside on the patio for your use. We will be plowing the driveway as needed.</p>

                <p>If you need any assistance shoveling, please let us know.</p>

                <p>Your privacy is of upmost importance to us. We will not enter your private space, inside or outside, unless requested by you. For example, we would only drop off fresh towels at the outside bench if requested.</p>

                <p>We are available at any time if you have any questions.</p>

                <p>Mark &amp; Renee</p>
              </div>
            </div>

            <div className="description-row">
              <h2>Other Details to Note</h2>
              <div className="description-text">
                <p>At night, the city lights are far away, providing an ideal setting for stargazing. Book now for a unique Colorado adventure that you'll never forget!</p>

                <p>The sofa bed is always ready. You simply need to pull it out if needed. The feather duvet and pillows are in the ottoman.</p>

                <p>The property does have air conditioning, but it is rarely needed as the evenings are cool and there are many windows that can be opened for excellent ventilation during the day. There are also two powerful ceiling fans for additional comfort.</p>

                <p>This property is close to 9,150 feet above sea level. Good hydration is effective for acclimatization.</p>

                <p>Although this beautiful space is one of several homes on the Eagle Ridge property, it offers a completely private and peaceful retreat.</p>

                <p>This property must remain allergy-free from any pets. Having a certified service dog requires prior approval along with a non-refundable pet deposit of $350 paid in advance. There are no exceptions to this requirement.</p>

                <p>The property is located 35 minutes west of Colorado Springs and is close to many hiking trails, ATV trails, Mueller State Park, Florissant Fossil Beds National Monument, and the Colorado Wolf and Wildlife Center. The property is also 10 minutes away from Charis Bible College and just 12 minutes away is picturesque Woodland Park, with its many coffee shops, restaurants, and parks.</p>

                <p>Planning to ski in Breckenridge? Save a fortune by staying here in luxury and enjoying a 1 hour 35-minute drive to the mountain.</p>

                <p>We have a guidebook available to all guests with over 50 activities and scenic drives in the area.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAllAmenities && (
        <div className="amenities-modal" role="dialog" aria-modal="true" aria-label="Complete amenities for The Living Room">
          <button
            className="amenities-close-button"
            onClick={() => setShowAllAmenities(false)}
            aria-label="Close amenities list"
            type="button"
          >
            ×
          </button>

          <div className="amenities-modal-content">
            <div className="amenities-modal-heading">
              <p className="eyebrow">The Living Room</p>
              <h2>Complete Amenities</h2>
              <p>Every detail is prepared to make your stay feel easy, comfortable, and thoughtfully cared for.</p>
            </div>

            <div className="amenities-modal-grid">
              {amenityGroups.map((group) => (
                <section className="amenity-category-card" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      )}

      {showPhotoGallery && (
        <div className="photo-gallery-modal" role="dialog" aria-modal="true" aria-label="The Living Room photo gallery">
          <button
            className="gallery-close-button"
            onClick={() => setShowPhotoGallery(false)}
            aria-label="Close photo gallery"
            type="button"
          >
            ×
          </button>

          <div className="gallery-grid">
            {galleryPhotos.map((photo, index) => (
              <div className="gallery-photo" key={`${photo}-${index}`}>
                <img src={photo} alt={`The Living Room gallery photo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function HeadContent() {
  return (
    <>
      <title>The Living Room | Elevated Stays Colorado</title>
      <meta name="description" content="The Living Room is a private luxury spa retreat in Divide, Colorado with a hot tub, sauna, mountain views, fireplace, and peaceful couples-focused experience." />
      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @font-face {
          font-family: 'La Luxes Serif';
          src: url('/fonts/La-Luxes-Serif.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #2f2a24;
          background: #fbf8f2;
        }
        a { color: inherit; text-decoration: none; }
        button { font-family: inherit; }
        img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2px 5vw;
          background: rgba(251, 248, 242, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(91, 70, 48, 0.12);
          transition: padding .32s ease, box-shadow .32s ease;
        }
        .site-header-compact {
          padding-top: 0;
          padding-bottom: 0;
          box-shadow: 0 10px 28px rgba(77, 55, 35, .08);
        }
        .brand-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        .brand-logo {
          width: 220px;
          height: 76px;
          object-fit: contain;
          display: block;
          transition: width .32s ease, height .32s ease;
        }
        .site-header-compact .brand-logo {
          width: 190px;
          height: 46px;
        }
        .property-wordmark-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          max-width: 1420px;
          margin: -10px auto 4px;
        }
        .property-wordmark {
          width: 440px;
          max-width: 90vw;
          height: auto;
          display: block;
          object-fit: contain;
        }
        .brand-wrap strong { font-size: 18px; }
        .desktop-nav { display: flex; align-items: center; gap: 26px; font-size: 14px; }
        .desktop-nav > a,
        .nav-dropdown > .nav-link-button {
          position: relative;
          padding: 8px 0;
        }
        .desktop-nav > a::after,
        .nav-dropdown > .nav-link-button::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #6d4c32;
          transform: translateX(-50%);
          transition: width .28s ease;
        }
        .desktop-nav > a:hover::after,
        .nav-dropdown:hover > .nav-link-button::after,
        .nav-dropdown:focus-within > .nav-link-button::after {
          width: 100%;
        }
        .nav-link-button {
          border: none;
          background: transparent;
          color: inherit;
          padding: 0;
          font-size: 14px;
          cursor: pointer;
        }
        .nav-link-button:hover { color: #6d4c32; }
        .nav-dropdown {
          position: relative;
          display: inline-flex;
          align-items: center;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 100;
          min-width: 255px;
          display: none;
          flex-direction: column;
          gap: 0;
          padding: 10px 0;
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .14);
          box-shadow: 0 18px 42px rgba(77, 55, 35, .14);
        }
        .dropdown-menu a {
          display: block;
          padding: 12px 16px;
          font-size: 14px;
          white-space: nowrap;
        }
        .dropdown-menu a:hover {
          background: #f3ebdf;
          color: #6d4c32;
        }
        .nav-dropdown:hover .dropdown-menu,
        .nav-dropdown:focus-within .dropdown-menu {
          display: flex;
        }
        .social-icons {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-left: -12px;
        }
        .social-icon {
          position: relative;
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(99, 75, 52, .18);
          background: #fffdf8;
          color: #3d2f24;
          transition: transform .2s ease, background .2s ease, color .2s ease;
        }
        .social-icon svg {
          width: 18px;
          height: 18px;
          fill: currentColor;
        }
        .social-icon:hover {
          transform: translateY(-2px);
          background: #6d4c32;
          color: #fff9f1;
        }
        .social-icon::after {
          content: attr(data-tooltip);
          position: absolute;
          top: calc(100% + 10px);
          left: 50%;
          transform: translateX(-50%) translateY(-4px);
          opacity: 0;
          pointer-events: none;
          padding: 7px 10px;
          background: #3d2f24;
          color: #fff9f1;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: 0 10px 24px rgba(0, 0, 0, .18);
          transition: opacity .2s ease, transform .2s ease;
        }
        .social-icon:hover::after {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
        .nav-button, .primary-button, .secondary-button {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          min-height: 46px;
          padding: 0 22px;
          border-radius: 999px;
          font-weight: 700;
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .nav-button, .primary-button { background: #6d4c32; color: #fff9f1; box-shadow: 0 12px 24px rgba(73, 48, 30, .18); }
        .nav-button { border-radius: 0; }
        .secondary-button { border: 1px solid #c8b59f; color: #4c3a2b; margin-top: 12px; }
        .primary-button:hover, .nav-button:hover, .secondary-button:hover { transform: translateY(-2px); }

        .hero { padding: 8px 5vw 0; }
        .hero-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 1420px;
          margin: 0 auto;
        }
        .image-card { border-radius: 24px; overflow: hidden; background: #ded3c5; position: relative; }
        .carousel-photo {
          height: 270px;
          border-radius: 0;
        }
        .hero-overlay {
          position: absolute;
          inset: auto 0 0;
          padding: 42px;
          background: linear-gradient(transparent, rgba(0,0,0,.68));
          color: white;
          z-index: 2;
          pointer-events: none;
        }
        .hero-overlay h1 {
          max-width: 760px;
          margin: 8px 0 12px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(30px, 3.7vw, 52px);
          line-height: .95;
          letter-spacing: -1.5px;
        }
        .hero-overlay p:last-child { max-width: 620px; font-size: 17px; line-height: 1.55; }
        .carousel-arrow {
          position: absolute;
          right: 22px;
          top: 50%;
          transform: translateY(-50%);
          width: 54px;
          height: 54px;
          border: none;
          border-radius: 0;
          background: rgba(255, 249, 241, .30);
          color: #3d2f24;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0, 0, 0, .22);
          transition: transform .2s ease, background .2s ease;
          z-index: 10;
          pointer-events: auto;
        }
        .carousel-arrow-left {
          left: 22px;
          right: auto;
        }
        .more-photos-button {
          position: absolute;
          left: 22px;
          bottom: 18px;
          z-index: 11;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: none;
          background: rgba(255, 249, 241, .50);
          color: #3d2f24;
          padding: 12px 18px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0, 0, 0, .18);
          transition: transform .2s ease, background .2s ease;
        }
        .more-photos-button:hover {
          transform: translateY(-2px);
          background: #fff9f1;
        }
        .camera-icon {
          width: 14px;
          height: 14px;
          object-fit: contain;
          display: inline-block;
          opacity: .50;
        }
        .carousel-arrow:hover { transform: translateY(-50%) scale(1.06); background: rgba(255, 249, 241, .55); }

        .page-shell { width: min(1180px, 90vw); margin: 0 auto; }
        .intro-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 54px;
          padding: 32px 0 58px;
          align-items: start;
        }
        .breadcrumb, .location { color: #7b6c5c; }
        h2 {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.05;
          margin: 10px 0 12px;
          color: #30261d;
        }
        h3 { color: #33281f; }
        p { line-height: 1.7; }
        .eyebrow {
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 2.2px;
          font-size: 12px;
          font-weight: 800;
          color: #8a6040;
        }
        .small { font-size: 10px; }
        .lead { font-size: 18px; color: #4d433a; }
        .directions-heading-wrap,
        .description-heading-wrap,
        .amenities-heading-wrap {
          scroll-margin-top: 120px;
          margin: 30px 0 8px;
        }
        .description-heading-wrap {
          margin-top: 28px;
          margin-bottom: 8px;
        }
        .amenities-heading-wrap h2,
        .directions-heading-wrap h2,
        .description-heading-wrap h2 {
          margin: 0;
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          font-family: inherit;
          text-transform: none;
          letter-spacing: 0;
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
          color: #2f2a24;
        }
        .directions-heading-wrap h2::after,
        .description-heading-wrap h2::after,
        .amenities-heading-wrap h2::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(48, 38, 29, 0.35);
          transform: translateY(1px);
        }
        .property-map {
          width: 100%;
          height: 340px;
          margin: 0 0 26px;
          overflow: hidden;
          border: 1px solid rgba(99, 75, 52, .14);
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
          background: #ded3c5;
        }
        .property-map iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: 28px 0;
        }
        .stats-row > div, .booking-card, .review-card, .details-card, .feature-card {
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .12);
          border-radius: 24px;
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
        }
        .stats-row > div { padding: 22px; }
        .stats-row strong {
          display: block;
          font-size: 30px;
          color: #6d4c32;
        }

        .guests-stat,
        .bedroom-stat,
        .bathroom-stat {
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          padding: 0 !important;
        }

        .guests-stat-content,
        .bedroom-stat-content,
        .bathroom-stat-content {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 22px;
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .12);
          border-radius: 24px;
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
        }

        .stat-text-stack {
          display: flex;
          flex-direction: column;
        }

        .guests-stat-icon,
        .bedroom-stat-icon,
        .bathroom-stat-icon {
          width: 84px;
          height: 64px;
          object-fit: contain;
          display: block;
        }
        .stats-row span { color: #7b6c5c; font-size: 14px; }
        .highlights {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 8px 20px;
          margin-top: 24px;
        }
        .highlights p { margin: 0; color: #46382c; }

        .booking-card {
          position: sticky;
          top: 96px;
          padding: 28px;
        }
        .booking-card h3 { font-size: 28px; margin: 8px 0; }
        .booking-card .primary-button, .booking-card .secondary-button { width: 100%; }
        .trust-note { margin-top: 18px; padding-top: 18px; border-top: 1px solid #eee2d5; color: #7b6c5c; font-size: 14px; }

        .complete-description-link-wrap {
          margin-top: -16px;
          margin-bottom: 36px;
        }
        .complete-description-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 22px;
          border: none;
          background: #6d4c32;
          color: #fff9f1;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 12px 24px rgba(73, 48, 30, .18);
          transition: transform .2s ease, box-shadow .2s ease;
        }
        .complete-description-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 30px rgba(73, 48, 30, .22);
        }
        .section-heading { max-width: 760px; margin-bottom: 28px; }
        .centered { text-align: center; margin-left: auto; margin-right: auto; }
        .amenity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .show-all-amenities-wrap {
          margin-top: 24px;
        }

        .rates-availability-section {
          margin-top: 54px;
          padding: 0;
          background: transparent;
          border: none;
          border-radius: 0;
          box-shadow: none;
        }

        .rates-title-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 34px;
        }

        .rates-title-row h2 {
          margin: 0;
          font-family: inherit;
          font-size: 30px;
          font-weight: 400;
          line-height: 1.2;
          color: #2f2a24;
          white-space: nowrap;
        }

        .rates-title-row span {
          display: block;
          flex: 1;
          height: 1px;
          background: rgba(48, 38, 29, 0.35);
        }

        .rates-availability-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 48px;
          align-items: start;
        }

        .rates-calendar-panel {
          background: transparent;
          border: none;
          box-shadow: none;
          padding: 0;
          min-height: 420px;
        }

        .hostfully-calendar-widget {
          width: 100%;
          min-height: 420px;
        }

        .rates-booking-card {
          background: #fffdf8;
          border: none;
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
          padding: 28px;
        }

        .hostfully-booking-card {
          min-height: 460px;
        }

        .hostfully-booking-widget {
          width: 100%;
          min-height: 420px;
        }

        .coupon-row button:hover,
        .price-details-button:hover {
          background: #f3ebdf;
        }

        .total-row {
          font-size: 18px;
          font-weight: 800;
          color: #2f2a24;
        }

        .price-details-button {
          width: 100%;
          margin-top: 16px;
          min-height: 46px;
        }

        .hostfully-widget-card {
          min-height: 360px;
        }

        .hostfully-calendar-widget {
          margin-top: 18px;
          width: 100%;
          min-height: 300px;
        }
        .amenity {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px;
          border-radius: 18px;
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .1);
        }
        .amenity span {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #efe3d3;
          color: #6d4c32;
          font-weight: 900;
        }
        .amenity p { margin: 0; font-weight: 650; }

        .wide-feature {
          margin: 72px 0;
          padding: 72px 0;
          background: #33291f;
          color: #fff9f1;
        }
        .wide-feature h2, .wide-feature h3 { color: #fff9f1; }
        .wide-feature p { color: #eadfce; }
        .feature-layout { display: grid; grid-template-columns: 1fr 380px; gap: 54px; align-items: center; }
        .feature-card { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.16); padding: 28px; box-shadow: none; }
        .feature-card li { margin-bottom: 12px; line-height: 1.5; }

        .review-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .review-card { padding: 28px; }
        .stars { color: #b37a3f; letter-spacing: 2px; }
        .review-card h3 { font-size: 22px; margin-bottom: 6px; }
        .review-card span { color: #7b6c5c; font-weight: 700; }

        .details-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 52px;
          padding: 78px 0;
        }
        .details-card { padding: 28px; align-self: start; }
        .details-card p { margin: 0 0 14px; }

        .final-cta {
          padding: 88px 0;
          background: linear-gradient(rgba(38,31,24,.72), rgba(38,31,24,.72)), url('/images/living-room-cta.png') center/cover;
          color: white;
          text-align: center;
        }
        .final-cta h2 { color: white; max-width: 780px; margin-left: auto; margin-right: auto; }
        .light { background: #fff9f1; color: #3d2f24; }

        .description-modal {
          position: fixed;
          inset: 4vh 4vw;
          z-index: 998;
          overflow-y: auto;
          background: #fbf8f2;
          border: 1px solid rgba(99, 75, 52, .16);
          box-shadow: 0 24px 80px rgba(37, 29, 22, .28);
          padding: 90px 5vw 60px;
        }
        .description-close-button {
          position: fixed;
          top: 4vh;
          right: 4vw;
          z-index: 1000;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(99, 75, 52, .18);
          background: #fffdf8;
          color: #3d2f24;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(77, 55, 35, .12);
        }
        .description-modal-content {
          max-width: 1120px;
          margin: 0 auto;
          clear: both;
        }
        .description-row {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 48px;
          align-items: start;
          padding-bottom: 42px;
          border-bottom: 1px solid rgba(99, 75, 52, .14);
        }
        .description-row h2 {
          margin-top: 0;
          font-size: clamp(28px, 3vw, 42px);
        }
        .description-row p,
        .description-text p {
          margin-top: 0;
          font-size: 18px;
          line-height: 1.8;
          color: #4d433a;
        }
        .description-text h3 {
          margin: 26px 0 10px;
          font-size: 22px;
          color: #33281f;
        }
        .description-row + .description-row {
          padding-top: 42px;
        }

        .amenities-modal {
          position: fixed;
          inset: 4vh 4vw;
          z-index: 998;
          overflow-y: auto;
          background: #fbf8f2;
          border: 1px solid rgba(99, 75, 52, .16);
          box-shadow: 0 24px 80px rgba(37, 29, 22, .28);
          padding: 86px 5vw 60px;
        }
        .amenities-close-button {
          position: fixed;
          top: 4vh;
          right: 4vw;
          z-index: 1000;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(99, 75, 52, .18);
          background: #fffdf8;
          color: #3d2f24;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(77, 55, 35, .12);
        }
        .amenities-modal-content {
          max-width: 1180px;
          margin: 0 auto;
        }
        .amenities-modal-heading {
          max-width: 720px;
          margin-bottom: 30px;
        }
        .amenities-modal-heading h2 {
          margin: 8px 0 10px;
        }
        .amenities-modal-heading p:last-child {
          margin: 0;
          font-size: 18px;
          color: #4d433a;
        }
        .amenities-modal-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }
        .amenity-category-card {
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .12);
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
          padding: 24px;
        }
        .amenity-category-card h3 {
          margin: 0 0 14px;
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 25px;
          color: #30261d;
        }
        .amenity-category-card ul {
          margin: 0;
          padding: 0;
          list-style: none;
          columns: 2;
          column-gap: 26px;
        }
        .amenity-category-card li {
          break-inside: avoid;
          position: relative;
          padding-left: 18px;
          margin-bottom: 10px;
          line-height: 1.45;
          color: #4d433a;
        }
        .amenity-category-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #8a6040;
          font-weight: 900;
        }

        .photo-gallery-modal {
          position: fixed;
          inset: 0;
          z-index: 999;
          overflow-y: auto;
          background: #fbf8f2;
          padding: 76px 32px 32px;
        }
        .gallery-close-button {
          position: fixed;
          top: 18px;
          right: 22px;
          width: 48px;
          height: 48px;
          border: 1px solid rgba(99, 75, 52, .18);
          background: #fffdf8;
          color: #3d2f24;
          font-size: 34px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(77, 55, 35, .12);
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          max-width: 1500px;
          margin: 0 auto;
        }
        .gallery-photo {
          aspect-ratio: 4 / 3;
          background: #ded3c5;
          overflow: hidden;
        }

        @media (min-width: 901px) {
          .booking-card-floating {
            position: fixed;
            top: 96px;
            right: max(5vw, calc((100vw - 1180px) / 2));
            width: 350px;
            z-index: 45;
          }

          .complete-description-link-wrap,
          #amenities {
            width: min(calc(90vw - 404px), 776px);
            margin-left: max(5vw, calc((100vw - 1180px) / 2));
            margin-right: auto;
          }
        }

        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .hero-carousel { grid-template-columns: 1fr; }
          .carousel-photo {
            height: 210px;
            border-radius: 0;
          }
          .carousel-photo:nth-child(2), .carousel-photo:nth-child(3) { display: none; }
          .carousel-arrow { display: flex; align-items: center; justify-content: center; right: 18px; }
          .intro-layout, .feature-layout, .details-layout { grid-template-columns: 1fr; }
          .booking-card { position: static; }
          .amenity-grid { grid-template-columns: repeat(2, 1fr); }
          .review-grid { grid-template-columns: 1fr; }
          .gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .description-row { grid-template-columns: 1fr; gap: 18px; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .highlights { grid-template-columns: 1fr; }
          .rates-availability-layout { grid-template-columns: 1fr; }
          .rates-booking-card { max-width: 420px; }
          .rates-form-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .site-header { padding: 2px 20px; }
          .site-header-compact { padding-top: 0; padding-bottom: 0; }
          .hero { padding: 6px 16px 0; }
          .carousel-photo {
            height: 260px;
            border-radius: 0;
          }
          .hero-overlay { padding: 28px; }
          .page-shell { width: min(100% - 32px, 1180px); }
          .photo-gallery-modal { padding: 72px 16px 24px; }
          .gallery-grid { grid-template-columns: 1fr; gap: 10px; }
          .description-modal,
          .amenities-modal { inset: 3vh 3vw; padding: 82px 24px 42px; }
          .amenities-modal-grid { grid-template-columns: 1fr; }
          .amenity-category-card ul { columns: 1; }
          .description-close-button,
          .amenities-close-button {
            top: 3vh;
            right: 3vw;
          }
          .amenity-grid, .stats-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
