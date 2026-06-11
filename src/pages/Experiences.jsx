import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MonitorPlay, Gamepad2, CalendarHeart, Music, Trophy } from 'lucide-react';

const Experiences = () => {
  const experiences = [
    {
      title: "Private Screening Theatres",
      desc: "Immerse yourself in cinematic brilliance with our private movie screening theatres. Featuring massive 170” 4K laser screens and Dolby Atmos sound. Enjoy access to OTT platforms like Netflix and Aha, complete with private in-theatre food dining service.",
      img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2670&auto=format&fit=crop",
      features: ["170” 4K Laser Screens", "Dolby Atmos Sound", "In-Theatre Dining Service", "OTT Streaming Access (Netflix, Aha, etc.)"],
      icon: <MonitorPlay className="text-brand-red" size={28} />
    },
    {
      title: "24/7 Sports Turfs & Courts",
      desc: "Play round the clock on our premium, roof-covered sports turfs designed for box cricket and football. We also feature dedicated Pickleball courts and Beach Volleyball courts for the ultimate sporting experience.",
      img: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=2670&auto=format&fit=crop",
      features: ["Roof-Covered Box Cricket & Football", "Dedicated Pickleball Courts", "Beach Volleyball Courts", "Open 24/7 with Floodlights"],
      icon: <Trophy className="text-brand-red" size={28} />
    },
    {
      title: "Console Gaming Hub",
      desc: "Level up your hangout with our dedicated Xbox console gaming setups. Play the latest hits with friends in a comfortable, high-energy environment.",
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2519&auto=format&fit=crop",
      features: ["Latest Xbox Consoles", "Co-op & Competitive Multiplayer Setups", "Ergonomic Gaming Chairs & Surround Sound"],
      icon: <Gamepad2 className="text-brand-red" size={28} />
    },
    {
      title: "Custom Event Hosting",
      desc: "Make your birthdays and anniversaries truly unforgettable. We offer custom theme event decorations including spectacular balloon styling, dramatic fog entries, and magical bubble effects.",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2670&auto=format&fit=crop",
      features: ["Birthday & Anniversary Event Hosting", "Custom Theme Decorations", "Fog Entries & Bubble Effects", "In-house Catering & Audio"],
      icon: <CalendarHeart className="text-brand-red" size={28} />
    },
    {
      title: "Live Music & Jamming",
      desc: "Vibe with the community at our open-air jamming sessions and live music events. The perfect backdrop for an evening of great food and great company.",
      img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2574&auto=format&fit=crop",
      features: ["Open-Air Community Jamming", "Live Local Bands & Acoustical Acts", "Cozy Outdoor Lighting & Firepits"],
      icon: <Music className="text-brand-red" size={28} />
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
