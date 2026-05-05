import { useState } from 'react';

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

  const visiblePhotos = [0, 1, 2].map((offset) => {
    const photoIndex = (photoStartIndex + offset) % photos.length;
    return photos[photoIndex];
  });

  const showNextPhotos = () => {
    setPhotoStartIndex((currentIndex) => (currentIndex + 1) % photos.length);
  };

  return (
    <>
      <HeadContent />

      <header className="site-header">
        <div className="brand-wrap">
          <img
            className="brand-logo"
            src="/images/Elevated-Stays-Colorado-Logo.png"
            alt="Elevated Stays Colorado logo"
          />
        </div>
        <nav className="desktop-nav">
          <a href="#photos">Photos</a>
          <a href="#amenities">Amenities</a>
          <a href="#reviews">Reviews</a>
          <a href="#details">Details</a>
          <a href="https://www.airbnb.com/h/the-living-room" className="nav-button">Book Now</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="photos">
          <div className="hero-carousel" aria-label="The Living Room photo carousel">
            {visiblePhotos.map((photo, index) => (
              <div className="carousel-photo image-card" key={`${photo}-${index}`}>
                <img src={photo} alt={`The Living Room retreat photo ${index + 1}`} />

                {index === 0 && (
                  <div className="hero-overlay">
                    <p className="eyebrow">Divide, Colorado</p>
                    <h1>Private Luxury Spa Retreat: Hot Tub, Sauna & Views</h1>
                    <p>Designed for couples who want to relax, reconnect, and experience the quiet beauty of the Colorado mountains.</p>
                  </div>
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
            <div className="breadcrumb">All Properties / The Living Room</div>
            <h2>The Living Room by Elevated Stays Colorado</h2>
            <p className="location">Divide, Colorado · Luxury Couples Retreat</p>

            <div className="stats-row">
              <div><strong>2</strong><span>Guests</span></div>
              <div><strong>1</strong><span>Bedroom</span></div>
              <div><strong>1</strong><span>Bathroom</span></div>
              <div><strong>1,400</strong><span>Sq. Ft.</span></div>
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

          <aside className="booking-card">
            <p className="eyebrow">Ready to unwind?</p>
            <h3>Book The Living Room</h3>
            <p>Check availability, rates, and secure your stay through Airbnb.</p>
            <a href="https://www.airbnb.com/h/the-living-room" className="primary-button">Check Availability</a>
            <a href="mailto:info@elevatedstayscolorado.com" className="secondary-button">Ask a Question</a>
            <div className="trust-note">Warmly hosted by Mark & Renee</div>
          </aside>
        </section>

        <section className="page-shell" id="amenities">
          <div className="section-heading">
            <p className="eyebrow">Features & Amenities</p>
            <h2>Everything you need for a restorative mountain escape</h2>
          </div>
          <div className="amenity-grid">
            {amenities.map((item) => (
              <div className="amenity" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
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
        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          color: #2f2a24;
          background: #fbf8f2;
        }
        a { color: inherit; text-decoration: none; }
        img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 5vw;
          background: rgba(251, 248, 242, 0.92);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(91, 70, 48, 0.12);
        }
        .brand-wrap { display: flex; align-items: center; gap: 12px; }
        .brand-logo {
          width: 512px;
          height: 256px;
          object-fit: contain;
          display: block;
        }
        .brand-wrap strong { font-size: 18px; }
        .desktop-nav { display: flex; align-items: center; gap: 26px; font-size: 14px; }
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
        .secondary-button { border: 1px solid #c8b59f; color: #4c3a2b; margin-top: 12px; }
        .primary-button:hover, .nav-button:hover, .secondary-button:hover { transform: translateY(-2px); }

        .hero { padding: 28px 5vw 0; }
        .hero-carousel {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 1420px;
          margin: 0 auto;
        }
        .image-card { border-radius: 24px; overflow: hidden; background: #ded3c5; position: relative; }
        .carousel-photo { height: 540px; }
        .hero-overlay {
          position: absolute;
          inset: auto 0 0;
          padding: 42px;
          background: linear-gradient(transparent, rgba(0,0,0,.68));
          color: white;
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
          border-radius: 50%;
          background: rgba(255, 249, 241, .30);
          color: #3d2f24;
          font-size: 30px;
          line-height: 1;
          cursor: pointer;
          box-shadow: 0 12px 28px rgba(0, 0, 0, .22);
          transition: transform .2s ease, background .2s ease;
        }
        .carousel-arrow:hover { transform: translateY(-50%) scale(1.06); background: rgba(255, 249, 241, .55); }

        .page-shell { width: min(1180px, 90vw); margin: 0 auto; }
        .intro-layout {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: 54px;
          padding: 58px 0;
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
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin: 28px 0;
        }
        .stats-row div, .booking-card, .review-card, .details-card, .feature-card {
          background: #fffdf8;
          border: 1px solid rgba(99, 75, 52, .12);
          border-radius: 24px;
          box-shadow: 0 18px 42px rgba(77, 55, 35, .08);
        }
        .stats-row div { padding: 22px; }
        .stats-row strong { display: block; font-size: 30px; color: #6d4c32; }
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

        .section-heading { max-width: 760px; margin-bottom: 28px; }
        .centered { text-align: center; margin-left: auto; margin-right: auto; }
        .amenity-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
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

        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .hero-carousel { grid-template-columns: 1fr; }
          .carousel-photo { height: 420px; }
          .carousel-photo:nth-child(2), .carousel-photo:nth-child(3) { display: none; }
          .carousel-arrow { display: flex; align-items: center; justify-content: center; right: 18px; }
          .intro-layout, .feature-layout, .details-layout { grid-template-columns: 1fr; }
          .booking-card { position: static; }
          .amenity-grid { grid-template-columns: repeat(2, 1fr); }
          .review-grid { grid-template-columns: 1fr; }
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .highlights { grid-template-columns: 1fr; }
        }

        @media (max-width: 560px) {
          .site-header { padding: 14px 20px; }
          .hero { padding: 16px 16px 0; }
          .carousel-photo { height: 520px; }
          .hero-overlay { padding: 28px; }
          .page-shell { width: min(100% - 32px, 1180px); }
          .amenity-grid, .stats-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}
