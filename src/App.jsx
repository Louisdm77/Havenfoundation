import { useState } from "react";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState("");

  const quickAmounts = [10, 25, 50, 100];

  // ================== CRYPTO ADDRESSES  ==================
  const btcAddress = "19CJmDdLkmSKb77LvhPUXih4yEFxYw4WBr"; 
  const usdtAddress = "THUYdMzcT8HgU1afsivDtyDUCGxxiiVsYw";

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    const btn = document.getElementById(`copy-${type}`);
    if (btn) {
      const original = btn.innerText;
      btn.innerText = "✓ Copied!";
      setTimeout(() => { btn.innerText = original; }, 2000);
    }
  };

  const handleDonatePayPal = (e) => {
    e.preventDefault();
    const amount = customAmount ? parseFloat(customAmount) : selectedAmount;
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YOUR_PAYPAL_EMAIL&item_name=Donation+to+Paws+%26+Hearts+Haven&currency_code=USD&amount=${amount}`;
    window.open(paypalUrl, "_blank");
  };

  // Sample data (unchanged)
  const teamMembers = [
    { name: "Jennifer Aniston", role: "Founder & CEO", img: "https://i.pinimg.com/736x/e5/ba/5d/e5ba5d42ba1dcb0f59ab42532ee7b03b.jpg", bio: "Humanitarian who has rescued & rehomed over 1,200 animals." },
    { name: "Dr. Bella Carroll", role: "Pet Rescue Lead", img: "https://i.pinimg.com/736x/d6/e7/65/d6e7655a95c2fc06da21c080ef0f619a.jpg", bio: "Pediatrician & animal lover on a mission to heal both hearts and paws." },
    { name: "Emmanuel Smith", role: "Orphan Care Director", img: "https://i.pinimg.com/736x/b3/d9/8c/b3d98c38b0c627565f98e2430615c334.jpg", bio: "Former orphanage manager bringing joy to 300+ children yearly." },
    { name: "Simon Rory", role: "Community Outreach", img: "https://i.pinimg.com/736x/ba/fd/9d/bafd9dd382ef2f7a6df4d4214578100f.jpg", bio: "Volunteer coordinator & storyteller." },
  ];

  const galleryImages = [
    "https://i.pinimg.com/736x/b3/e8/f5/b3e8f5d85c91fb372e6e8e1cd0b50b3a.jpg",
    "https://i.pinimg.com/736x/b6/01/2d/b6012d2cb8a095851884659f3b0be9cd.jpg",
    "https://i.pinimg.com/736x/83/de/a8/83dea81d8a10f00e26e350a1a1e36620.jpg",
    "https://i.pinimg.com/736x/32/2a/17/322a173e22b0cd9affc1d4f32394954e.jpg",
    "https://i.pinimg.com/736x/c2/b9/16/c2b916624deb48882a68f5dc6a648574.jpg",
    "https://i.pinimg.com/1200x/ed/b5/08/edb5083704907b2f22f685d6ed704109.jpg",
  ];

  return (
    <>
      {/* NAVBAR - Classy & Responsive */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white text-2xl">🐾❤️</div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">Paws &amp; Hearts</h1>
              <p className="text-[10px] text-emerald-600 -mt-1">Haven Foundation</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <a href="#about" className="hover:text-emerald-600 transition">About</a>
            <a href="#causes" className="hover:text-emerald-600 transition">Causes</a>
            <a href="#impact" className="hover:text-emerald-600 transition">Impact</a>
            <a href="#team" className="hover:text-emerald-600 transition">Team</a>
            <a href="#gallery" className="hover:text-emerald-600 transition">Gallery</a>
            <a href="#donate" className="hover:text-emerald-600 transition">Donate</a>
          </div>

          <button
            onClick={() => setDonateModalOpen(true)}
            className="hidden md:block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-md"
          >
            Donate Now
          </button>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-3xl">
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-4 text-lg">
            <a href="#about" onClick={() => setMobileOpen(false)}>About Us</a>
            <a href="#causes" onClick={() => setMobileOpen(false)}>Our Causes</a>
            <a href="#impact" onClick={() => setMobileOpen(false)}>Our Impact</a>
            <a href="#team" onClick={() => setMobileOpen(false)}>Meet the Team</a>
            <a href="#gallery" onClick={() => setMobileOpen(false)}>Gallery</a>
            <button
              onClick={() => { setDonateModalOpen(true); setMobileOpen(false); }}
              className="bg-emerald-600 text-white py-3 rounded-xl font-semibold"
            >
              Donate Now
            </button>
          </div>
        )}
      </nav>

      {/* HERO - Full bleed, responsive */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('https://picsum.photos/id/1015/1920/1080')] bg-cover bg-center"
          style={{ filter: "brightness(0.65)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6">
            ONE HOME.<br />TWO HEARTS.
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
            Rescuing orphan children and abandoned pets, giving them a forever family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setDonateModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-semibold px-10 py-4 rounded-2xl transition shadow-xl"
            >
              Donate with PayPal
            </button>
            <a href="#causes" className="border-2 border-white text-white hover:bg-white/10 text-xl font-semibold px-10 py-4 rounded-2xl transition">
              Learn More
            </a>
            <button
              onClick={() => setDonateModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-semibold px-10 py-4 rounded-2xl transition shadow-xl"
            >
              Donate with Crypto
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white text-4xl">↓</div>
      </header>

      {/* ABOUT - unchanged */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[3px] text-emerald-600 text-sm font-semibold">Since 2019 • Carlifornia, USA</span>
            <h2 className="text-5xl font-bold text-slate-900 mt-3 leading-tight">We believe every child and every animal deserves love.</h2>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              Paws &amp; Hearts Haven Foundation is a registered American charity that operates two rescue programs under one roof:
              a children's home for orphans and a state-of-the-art animal shelter.
              We have already placed 187 children in loving adoptive families and rehomed 1,342 pets.
            </p>
            <div className="mt-10 flex gap-8">
              <div>
                <div className="text-4xl font-bold text-emerald-600">187</div>
                <div className="text-sm text-slate-500">Children Adopted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-600">1,342</div>
                <div className="text-sm text-slate-500">Pets Rehomed</div>
              </div>
            </div>
          </div>
          <img src="https://i.pinimg.com/736x/41/b8/05/41b8053aa9a60ad3b9df0fa2621a7373.jpg" alt="Children and puppies playing together" className="rounded-3xl shadow-2xl" />
        </div>
      </section>

      {/* CAUSES - unchanged */}
      <section id="causes" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Our Two Causes</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <img src="https://i.pinimg.com/1200x/87/c1/a2/87c1a2d52e4996392c47f8167cc75bff.jpg" alt="Orphan children" className="w-full h-80 object-cover" />
              <div className="p-10">
                <h3 className="text-3xl font-semibold mb-4">Orphan Children</h3>
                <p className="text-slate-600">We provide education, healthcare, nutrition, and emotional support in our safe home in the United States.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> School fees for 120 children</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> Medical care &amp; counseling</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> Adoption matching program</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
              <img src="https://i.pinimg.com/736x/e0/66/d7/e066d732706ea0de297c6c3e344cf93a.jpg" alt="Rescued animals" className="w-full h-80 object-cover" />
              <div className="p-10">
                <h3 className="text-3xl font-semibold mb-4">Pet Rescue &amp; Shelter</h3>
                <p className="text-slate-600">We rescue street animals, provide veterinary care, spay/neuter programs, and find forever homes.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> 24/7 emergency rescue</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> Modern clinic &amp; rehabilitation</li>
                  <li className="flex items-center gap-3"><span className="text-emerald-500">✔</span> Free adoption events monthly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT - unchanged */}
      <section id="impact" className="py-24 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <div>
            <div className="text-6xl font-bold mb-2">4.2M</div>
            <div className="text-emerald-200">Meals served to children &amp; animals</div>
          </div>
          <div>
            <div className="text-6xl font-bold mb-2">312</div>
            <div className="text-emerald-200">Lives saved this year</div>
          </div>
          <div>
            <div className="text-6xl font-bold mb-2">89%</div>
            <div className="text-emerald-200">Donations reach programs directly</div>
          </div>
          <div>
            <div className="text-6xl font-bold mb-2">18</div>
            <div className="text-emerald-200">Schools &amp; shelters built</div>
          </div>
        </div>
      </section>

      {/* TEAM - unchanged */}
      <section id="team" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Meet the Hearts Behind the Haven</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {teamMembers.map((member, i) => (
              <div key={i} className="group">
                <img src={member.img} alt={member.name} className="rounded-3xl w-full aspect-square object-cover shadow-xl group-hover:scale-105 transition duration-300" />
                <div className="mt-6 text-center">
                  <h4 className="font-semibold text-xl">{member.name}</h4>
                  <p className="text-emerald-600">{member.role}</p>
                  <p className="text-slate-600 text-sm mt-3">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY - unchanged */}
      <section id="gallery" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">Moments of Hope</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <img key={i} src={img} alt="Gallery" className="rounded-3xl shadow-md hover:shadow-2xl transition object-cover aspect-video" />
            ))}
          </div>
        </div>
      </section>

      {/* DONATE SECTION - Added Crypto section below PayPal button */}
      <section id="donate" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center ">
          <h2 className="text-5xl font-bold mb-4">Every Dollar Counts</h2>
          <p className="text-xl text-slate-600 mb-12">Your donation directly feeds a child, vaccinates a puppy, or pays school fees.</p>

          <button
            onClick={() => setDonateModalOpen(true)}
            className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white text-2xl font-bold px-16 py-6 rounded-3xl shadow-2xl hover:scale-105 transition"
          >
            DONATE WITH PAYPAL NOW
          </button>

          {/* NEW CRYPTO DONATION SECTION */}
          <div className="mt-16 border-t pt-12">
            <h3 className="text-3xl font-semibold mb-6">Or Donate with Crypto</h3>
            <p className="text-slate-600 mb-8">Bitcoin (BTC) and USDT accepted. All donations are anonymous and 100% transparent.</p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* BTC Card */}
              <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">₿</div>
                <h4 className="font-semibold text-xl mb-2">Bitcoin (BTC)</h4>
                 <p className="text-xs text-amber-600 mb-3">Send on BTC network only</p>
                <div className="bg-slate-100 p-4 rounded-2xl font-mono text-sm break-all mb-4 text-left">
                  {btcAddress}
                </div>
                <button
                  onClick={() => copyToClipboard(btcAddress, "btc")}
                  id="copy-btc"
                  className="w-full bg-slate-800 hover:bg-black text-white py-3 rounded-2xl font-medium transition"
                >
                  Copy BTC Address
                </button>
              </div>

              {/* USDT Card */}
              <div className="border border-slate-200 rounded-3xl p-8 hover:shadow-xl transition">
                <div className="text-5xl mb-4">₮</div>
                <h4 className="font-semibold text-xl mb-2">USDT (Tether)</h4>
                <p className="text-xs text-amber-600 mb-3">Send on TRC-20 (Tron) network only</p>
                <div className="bg-slate-100 p-4 rounded-2xl font-mono text-sm break-all mb-4 text-left">
                  {usdtAddress}
                </div>
                <button
                  onClick={() => copyToClipboard(usdtAddress, "usdt")}
                  id="copy-usdt"
                  className="w-full bg-slate-800 hover:bg-black text-white py-3 rounded-2xl font-medium transition"
                >
                  Copy USDT Address
                </button>
              </div>
            </div>
          </div>

          <p className="mt-12 text-sm text-slate-500">100% transparent • Tax-deductible in The US • PayPal, BTC &amp; USDT accepted</p>
        </div>
      </section>

      {/* DONATION MODAL - Now includes PayPal + Crypto Tabs */}
      {/* DONATION MODAL - Fixed Header + Better Layout */}
      {donateModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[95vh] overflow-hidden flex flex-col">

            {/* Header - Always visible */}
            <div className="p-8 border-b flex justify-between items-center bg-white sticky top-0 z-10">
              <h3 className="text-3xl font-bold text-slate-900">Make a Difference Today</h3>
              <button
                onClick={() => setDonateModalOpen(false)}
                className="text-4xl leading-none text-slate-400 hover:text-slate-600 transition"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-8">
              <div className="border-b pt-6">
                <h4 className="font-semibold text-lg mb-6 text-center"> Donate with Crypto</h4>

                <div className="space-y-8">
                  {/* Bitcoin */}
                  <div className="border border-slate-200 rounded-3xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">₿</span>
                      <div>
                        <p className="font-semibold text-lg">Bitcoin (BTC)</p>
                        <p className="text-sm text-slate-500">Bitcoin Network</p>
                      </div>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-2xl font-mono text-sm break-all mb-4">
                      {btcAddress}
                    </div>
                    <button
                      id="copy-btc"
                      onClick={() => copyToClipboard(btcAddress, "btc")}
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3.5 rounded-2xl font-medium transition"
                    >
                      Copy BTC Address
                    </button>
                  </div>

                  {/* USDT */}
                  <div className="border border-slate-200 rounded-3xl p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-5xl">₮</span>
                      <div>
                        <p className="font-semibold text-lg">USDT (Tether)</p>
                        <p className="text-sm text-amber-600">TRC-20 (TRON Network Only)</p>
                      </div>
                    </div>
                    <div className="bg-slate-100 p-4 rounded-2xl font-mono text-sm break-all mb-4">
                      {usdtAddress}
                    </div>
                    <button
                      id="copy-usdt"
                      onClick={() => copyToClipboard(usdtAddress, "usdt")}
                      className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3.5 rounded-2xl font-medium transition"
                    >
                      Copy USDT Address
                    </button>
                  </div>
                </div>
              </div>
              {/* PayPal Section */}
              <div className="mb-12">
                <h4 className="font-semibold text-lg mb-5 text-emerald-700 mt-6">💳 Or Pay with PayPal</h4>

                <div className="grid grid-cols-4 gap-3 mb-6">
                  {quickAmounts.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                      className={`py-4 rounded-2xl font-semibold transition ${selectedAmount === amt && !customAmount ? "bg-emerald-600 text-white" : "bg-slate-100 hover:bg-slate-200"}`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>

                <div className="relative mb-8">
                  <input
                    type="number"
                    placeholder="Custom amount (USD)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full border-2 border-slate-200 focus:border-emerald-600 rounded-2xl px-6 py-4 text-3xl font-medium outline-none"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-3xl text-slate-400">USD</span>
                </div>

                <form onSubmit={handleDonatePayPal}>
                  <button
                    type="submit"
                    className="w-full bg-[#003087] hover:bg-[#002a6b] text-white py-6 rounded-3xl text-xl font-bold flex items-center justify-center gap-3 shadow-xl transition"
                  >
                    <img src="https://www.paypalobjects.com/webstatic/icon/pp_logo.svg" alt="PayPal" className="h-6" />
                    PAY SECURELY WITH PAYPAL
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER - Updated to California */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center text-2xl">🐾❤️</div>
              <span className="text-2xl font-bold">Paws &amp; Hearts Haven</span>
            </div>
            <p className="text-slate-400">Los Angeles, California, United States of America</p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about">About Us</a></li>
                <li><a href="#causes">Causes</a></li>
                <li><a href="#team">Our Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Get Involved</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Volunteer</li>
                <li>Corporate Sponsorship</li>
                <li>Monthly Giving</li>
              </ul>
            </div>
          </div>

          <div>
            <p className="text-sm text-slate-400">Follow our journey</p>
            <div className="flex gap-6 mt-4 text-3xl">
              <span>📘</span><span>📸</span><span>🐦</span>
            </div>
            <p className="text-xs text-slate-500 mt-12">© 2026 Paws &amp; Hearts Haven Foundation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;