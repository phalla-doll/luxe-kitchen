import Image from 'next/image';
import { ArrowRight, CheckCircle2, Compass, PenTool, Layers, Facebook, Twitter, Instagram, Linkedin, Menu } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#121212] text-white selection:bg-[#C5A059] selection:text-black">
      <Navbar />
      <Hero />
      <ValueProp />
      <Gallery />
      <StatsReviews />
      <Philosophy />
      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 flex justify-between items-center">
      <div className="font-display text-2xl font-bold tracking-widest uppercase text-white">
        Luxe.
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-neutral-300">
        <a href="#" className="hover:text-white transition-colors">Portfolio</a>
        <a href="#" className="hover:text-white transition-colors">Services</a>
        <a href="#" className="hover:text-white transition-colors">About</a>
        <a href="#" className="hover:text-white transition-colors">Journal</a>
      </div>
      <button className="hidden md:block px-6 py-2 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
        Consultation
      </button>
      <button className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/kitchen-luxury-dark/1920/1080"
          alt="Luxury Modern Kitchen"
          fill
          className="object-cover opacity-60"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#121212]/40 to-[#121212]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          Design Your Kitchen <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">with the Experts</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-10 font-light">
          Elevate your home with bespoke culinary spaces crafted for aesthetics, functionality, and timeless elegance.
        </p>
        <button className="bg-white text-black px-8 py-4 rounded-full font-medium tracking-wide hover:bg-[#C5A059] hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
          Start Your Project <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

function ValueProp() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            Creative solutions by <br/><span className="text-[#C5A059] italic font-light">professional designers</span>
          </h2>
          <p className="text-neutral-400 text-lg mb-8 leading-relaxed font-light">
            We believe the kitchen is the heart of the home. Our approach combines architectural precision with an intimate understanding of how you live, cook, and entertain. Every cabinet, countertop, and lighting fixture is meticulously chosen to reflect your personal style while maximizing utility.
          </p>
          <div className="space-y-4">
            {['Bespoke cabinetry & millwork', 'Premium material sourcing', 'Seamless appliance integration'].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="text-[#C5A059] w-5 h-5" />
                <span className="text-neutral-200 tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/kitchen-details-wood/800/1200"
            alt="Kitchen Details"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold mb-4">Explore our kitchen designs</h2>
            <p className="text-neutral-400 max-w-xl font-light">A curated selection of our most recent transformations, showcasing diverse styles from ultra-modern minimalism to warm, transitional spaces.</p>
          </div>
          <button className="mt-6 md:mt-0 pb-1 border-b border-[#C5A059] text-[#C5A059] hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm font-medium">
            View Full Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-6">
            <div className="relative h-[400px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-modern-1/600/800" alt="Kitchen 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="relative h-[300px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-classic-2/600/600" alt="Kitchen 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
          <div className="space-y-6 lg:mt-12">
            <div className="relative h-[300px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-marble-3/600/600" alt="Kitchen 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="relative h-[500px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-dark-4/600/1000" alt="Kitchen 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative h-[500px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-minimal-5/600/1000" alt="Kitchen 5" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="relative h-[300px] w-full group overflow-hidden rounded-xl">
              <Image src="https://picsum.photos/seed/kitchen-bright-6/600/600" alt="Kitchen 6" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsReviews() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-b border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col sm:flex-row gap-12">
          <div>
            <div className="font-display text-6xl md:text-8xl font-bold text-[#C5A059] mb-2">25<span className="text-4xl">+</span></div>
            <div className="text-neutral-400 uppercase tracking-widest text-sm font-medium">Years Experience</div>
          </div>
          <div>
            <div className="font-display text-6xl md:text-8xl font-bold text-[#C5A059] mb-2">93<span className="text-4xl">+</span></div>
            <div className="text-neutral-400 uppercase tracking-widest text-sm font-medium">Awards Won</div>
          </div>
        </div>
        
        <div className="lg:col-span-7 bg-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm border border-white/10 relative">
          <div className="text-[#C5A059] text-6xl absolute top-6 left-6 opacity-20 font-serif leading-none">&quot;</div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-200 mb-8 relative z-10">
            The attention to detail and the seamless integration of modern appliances into our historic home was nothing short of miraculous. They didn&apos;t just build a kitchen; they crafted an experience.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden relative">
              <Image src="https://picsum.photos/seed/portrait-client-1/100/100" alt="Client" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-medium text-white">Eleanor Vance</div>
              <div className="text-sm text-neutral-500">Residential Client, New York</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  const pillars = [
    {
      icon: <Compass className="w-8 h-8 text-[#C5A059]" />,
      title: "Spatial Planning",
      desc: "We optimize every square inch, ensuring a flawless flow between cooking, dining, and living areas."
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#C5A059]" />,
      title: "Material Selection",
      desc: "Sourcing only the finest, sustainable materials that age gracefully and withstand the test of time."
    },
    {
      icon: <Layers className="w-8 h-8 text-[#C5A059]" />,
      title: "3D Visualization",
      desc: "Experience your new space before construction begins with our photorealistic rendering technology."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">Modern Design Philosophy</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto font-light text-lg">Our methodology is rooted in the belief that form and function must exist in perfect harmony.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {pillars.map((pillar, i) => (
          <div key={i} className="group">
            <div className="mb-6 p-4 bg-white/5 inline-block rounded-2xl group-hover:bg-[#C5A059]/10 transition-colors duration-300">
              {pillar.icon}
            </div>
            <h3 className="text-xl font-medium mb-4 text-white">{pillar.title}</h3>
            <p className="text-neutral-400 font-light leading-relaxed">{pillar.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <div className="font-display text-2xl font-bold tracking-widest uppercase mb-6 text-white">Luxe.</div>
          <p className="text-neutral-500 font-light text-sm leading-relaxed mb-6">
            Redefining the heart of the home with uncompromising quality and visionary design.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-neutral-500 hover:text-[#C5A059] transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-500 hover:text-[#C5A059] transition-colors"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-500 hover:text-[#C5A059] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-neutral-500 hover:text-[#C5A059] transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Services</h4>
          <ul className="space-y-4 text-neutral-500 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Kitchen Remodeling</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Custom Cabinetry</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Interior Architecture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Project Management</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-4 text-neutral-500 font-light text-sm">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
          <p className="text-neutral-500 font-light text-sm mb-4">Subscribe to receive design inspiration and studio updates.</p>
          <div className="flex">
            <input type="email" placeholder="Your email" className="bg-white/5 border border-white/10 text-white px-4 py-2 rounded-l-md focus:outline-none focus:border-[#C5A059] w-full text-sm font-light" />
            <button className="bg-[#C5A059] text-black px-4 py-2 rounded-r-md font-medium text-sm hover:bg-white transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 font-light">
        <p>&copy; {new Date().getFullYear()} Luxe Kitchen Design. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
