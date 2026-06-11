import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      title: "Private Screenings",
      category: "Entertainment"
    },
    {
      src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      title: "Sports Turf Under Lights",
      category: "Sports"
    },
    {
      src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2670&auto=format&fit=crop",
      title: "Gourmet Platters",
      category: "Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2519&auto=format&fit=crop",
      title: "Console Gaming Setup",
      category: "Gaming"
    },
    {
      src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop",
      title: "Live Jamming Session",
      category: "Music"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop",
      title: "Custom Event Decor",
      category: "Events"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2574&auto=format&fit=crop",
      title: "Extended Indoor Lounge",
      category: "Dining"
    },
    {
      src: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=2629&auto=format&fit=crop",
      title: "Open Air Seating",
      category: "Vibe"
    },
    {
      src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      title: "Pickleball Courts",
      category: "Sports"
    }
  ];

  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Aesthetic Color Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-60 mix-blend-multiply">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/15 blur-[100px] animate-blob1" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-sky-400/15 blur-[100px] animate-blob2" />
        <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-400/15 blur-[100px] animate-blob3" />
      </div>
      {/* Decorative ambient glows */}
            
      <div className="container">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-wider">
            OUR <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">GALLERY</span>
          </h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            A glimpse into the extraordinary spaces and experiences waiting for you at Studio Grill.
          </p>
        </motion.div>

        {/* Portfolio Masonry-like Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, idx) => (
             <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-black/5 shadow-xl hover:border-brand-red/20 transition-all duration-300"
             >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 scale-100 group-hover:scale-105" 
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/10 opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs uppercase tracking-widest text-brand-red font-bold mb-1 font-heading">
                    {item.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                    {item.title}
                  </h3>
                </div>
             </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
