import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Aesthetic Color Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-60 mix-blend-multiply">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/15 blur-[100px] animate-blob1" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-sky-400/15 blur-[100px] animate-blob2" />
        <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-400/15 blur-[100px] animate-blob3" />
      </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12 uppercase tracking-wide">OUR CORE VALUES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Excellence", desc: "Premium quality in every dish, every theater screening, and every interaction." },
              { title: "Innovation", desc: "Constantly evolving our entertainment systems, gaming consoles, and menu selections." },
              { title: "Community", desc: "A welcoming, safe space for friends, families, and colleagues to connect and play." }
            ].map((value, idx) => (
               <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="glass-panel p-8 sm:p-12 text-center border border-black/5 hover:border-brand-red/20 shadow-xl transition-all duration-300"
               >
                 <h3 className="text-2xl font-extrabold mb-4 text-slate-900 font-heading">{value.title}</h3>
                 <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">{value.desc}</p>
               </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
