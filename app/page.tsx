export default function UnforgettableStaysHomepage() {
  const properties = [
    {
      name: "THE CABIN",
      description:
        "A cozy, romantic retreat with rustic charm, a sauna, and a hot tub under the stars.",
      image: "/images/the-cabin.jpg", // Replace with your actual Cabin image file
      badge: "Rustic • Romantic • Relaxing",
    },
    {
      name: "THE LIVING ROOM",
      description:
        "A luxury mountain experience with spa amenities, expansive views, and elevated comfort throughout.",
      image: "/images/the-living-room.jpg", // Replace with your actual Living Room image file
      badge: "Luxury • Scenic • Restorative",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      {/* HERO WITH MASTER BRAND LOCKUP */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-background.jpg')", // Twilight property image
          }}
        />
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center items-center px-6 py-16 lg:px-10 text-center">
          {/* MASTER BRAND LOCKUP IMAGE */}
          <img
            src="/images/master-brand-lockup.png" // Your actual lockup image
            alt="Unforgettable Stays Colorado"
            className="mb-8 w-full max-w-3xl drop-shadow-2xl"
          />

          <p className="max-w-2xl text-lg leading-8 text-stone-100 md:text-xl">
            Private, spa-like mountain escapes designed for couples to relax,
            reconnect, and recharge.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-amber-700 px-7 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-[1.02] hover:bg-amber-800">
              Check Availability
            </button>
            <button className="rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-medium text-white transition hover:bg-white/20">
              Explore Our Stays
            </button>
          </div>
        </div>
      </section>

      {/* PROPERTY SHOWCASE */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Choose Your Stay
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {properties.map((property) => (
              <div
                key={property.name}
                className="group overflow-hidden rounded-[2rem] bg-stone-50 shadow-xl ring-1 ring-stone-200"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/15 to-transparent" />
                </div>

                <div className="p-8 text-center">
                  <h3 className="text-3xl font-semibold tracking-tight">
                    {property.name}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    {property.description}
                  </p>
                  <button className="mt-6 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-900 hover:text-white">
                    View {property.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Your Unforgettable Stay Awaits
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-slate-950 px-7 py-3 text-sm font-medium text-white shadow transition hover:scale-[1.02]">
              Book Direct
            </button>
            <button className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
