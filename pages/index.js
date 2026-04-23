export default function Home() {
  const properties = [
    {
      name: "THE CABIN",
      description:
        "A cozy, romantic retreat with rustic charm, a sauna, and a hot tub under the stars.",
      image: "/images/the-cabin.jpg",
    },
    {
      name: "THE LIVING ROOM",
      description:
        "A luxury mountain experience with spa amenities, expansive views, and elevated comfort throughout.",
      image: "/images/the-living-room.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f5f4", color: "#0f172a" }}>
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "60px 20px",
          backgroundImage: "url('/images/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(2, 6, 23, 0.6)",
          }}
        />
        <div style={{ position: "relative", maxWidth: "900px", zIndex: 1 }}>
          <img
            src="/images/master-brand-lockup.png"
            alt="Unforgettable Stays Colorado"
            style={{ width: "100%", maxWidth: "700px", marginBottom: "30px" }}
          />
          <p style={{ color: "#fff", fontSize: "22px", lineHeight: 1.6, marginBottom: "30px" }}>
            Private, spa-like mountain escapes designed for couples to relax,
            reconnect, and recharge.
          </p>
          <div>
            <button
              style={{
                background: "#b45309",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "14px 24px",
                marginRight: "12px",
                cursor: "pointer",
              }}
            >
              Check Availability
            </button>
            <button
              style={{
                background: "rgba(255,255,255,0.12)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
                borderRadius: "999px",
                padding: "14px 24px",
                cursor: "pointer",
              }}
            >
              Explore Our Stays
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: "#fff" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "42px", marginBottom: "40px" }}>
            Choose Your Stay
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "30px",
            }}
          >
            {properties.map((property) => (
              <div
                key={property.name}
                style={{
                  background: "#fafaf9",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >
                <img
                  src={property.image}
                  alt={property.name}
                  style={{ width: "100%", height: "320px", objectFit: "cover" }}
                />
                <div style={{ padding: "30px", textAlign: "center" }}>
                  <h3 style={{ fontSize: "32px", marginBottom: "16px" }}>{property.name}</h3>
                  <p style={{ fontSize: "18px", lineHeight: 1.7, color: "#334155" }}>
                    {property.description}
                  </p>
                  <button
                    style={{
                      marginTop: "24px",
                      background: "#fff",
                      color: "#0f172a",
                      border: "1px solid #cbd5e1",
                      borderRadius: "999px",
                      padding: "12px 22px",
                      cursor: "pointer",
                    }}
                  >
                    View {property.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 20px", background: "#e7e5e4", textAlign: "center" }}>
        <h2 style={{ fontSize: "42px", marginBottom: "24px" }}>
          Your Unforgettable Stay Awaits
        </h2>
        <div>
          <button
            style={{
              background: "#0f172a",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "14px 24px",
              marginRight: "12px",
              cursor: "pointer",
            }}
          >
            Book Direct
          </button>
          <button
            style={{
              background: "#fff",
              color: "#0f172a",
              border: "1px solid #cbd5e1",
              borderRadius: "999px",
              padding: "14px 24px",
              cursor: "pointer",
            }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
