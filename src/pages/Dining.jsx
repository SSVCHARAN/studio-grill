import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Navigation, Armchair, Ticket } from 'lucide-react';

const Dining = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const menuItems = [
    { name: "Tandoori Kebab Platter", desc: "Assortment of classic North Indian chicken tandoori, seekh kebabs, and paneer tikka, perfectly charred and smoky, served with mint chutney", price: "₹899" },
    { name: "Butter Chicken Delhi Style", desc: "Rich, creamy cashew and tomato gravy with tender shredded clay-oven cooked chicken, finished with fresh butter and cream, served with garlic naan", price: "₹549" },
    { name: "Szechuan Hakka Noodles", desc: "Spicy Chinese wok-tossed noodles with colorful julienned vegetables, spring onions, and signature Szechuan peppercorn sauce", price: "₹349" },
    { name: "Grilled Continental Steak", desc: "Premium ribeye cut seasoned with rosemary, garlic, and sea salt, served with red wine reduction, buttery mashed potatoes and grilled asparagus", price: "₹999" },
    { name: "Crispy Golden Spring Rolls", desc: "Fresh glass noodles and mixed vegetables wrapped in a light pastry, deep-fried until golden brown, served with hot sweet chili dip", price: "₹299" }
  ];

  const cocktailItems = [
    { name: "The Studio Smash", desc: "Fine Kentucky bourbon whiskey muddled with fresh organic blackberries, mint leaves, squeezed lemon, and organic simple syrup", price: "₹499" },
    { name: "Neon Margarita", desc: "Premium blanco tequila shaken with blue curaçao, fresh lime juice, agave nectar, served in a glass rimmed with sea salt", price: "₹449" },
    { name: "Smoked Old Fashioned", desc: "Aged rye whiskey, maple syrup, and orange bitters, cold-smoked in-glass with applewood smoke before serving", price: "₹549" },
    { name: "Velvet Espresso Martini", desc: "Double shot of fresh espresso shaken with premium vodka, coffee liqueur, and smooth Madagascar vanilla bean syrup", price: "₹499" }
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
            MULTI-CUISINE <span className="text-brand-red animate-[glow_2s_ease-in-out_infinite_alternate]">EXCELLENCE</span>
          </h1>
          <div className="w-24 h-1 bg-brand-red mx-auto mb-6 rounded-full" />
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            A diverse culinary journey featuring North Indian, Tandoori, Chinese, and Continental delicacies.
          </p>
        </motion.div>

        {/* Dining Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {[
            {
              icon: <Utensils className="text-brand-red" size={24} />,
              title: "Online Delivery",
              desc: "Order your favorites directly to your doorstep or drop by for a quick takeaway."
            },
            {
              icon: <Armchair className="text-brand-red" size={24} />,
              title: "Extended Seating",
              desc: "Enjoy your meals in our spacious indoor lounge halls or relaxing outdoor seating areas."
            },
            {
              icon: <Ticket className="text-brand-red" size={24} />,
              title: "In-Theatre Dining",
              desc: "Experience private butler dining service right at your seat while watching movies."
            },
            {
              icon: <Navigation className="text-brand-red" size={24} />,
              title: "Accessibility",
              desc: "Fully wheelchair-accessible entry and seating configurations across all our dining zones."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-8 text-center border border-black/5 hover:border-brand-red/20 shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mx-auto mb-6 shadow-md">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-900 mb-3 text-lg font-heading">{item.title}</h4>
              <p className="text-sm text-slate-600 font-light leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner with image */}
        <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glass-panel p-2 mb-24 border border-black/5 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop" 
            alt="Fine Dining" 
            className="w-full h-full object-cover rounded-xl" 
          />
          <div className="absolute inset-0 bg-black/45 flex items-center justify-center rounded-2xl">
            <div className="text-center px-4 space-y-3">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-widest uppercase font-heading">
                TASTE THE WORLD
              </h2>
              <p className="text-slate-200 font-light tracking-wide text-xs sm:text-sm max-w-md mx-auto">
                Gourmet recipes crafted by world-class chefs, served fresh in private screening halls or open gardens.
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          <button 
            onClick={() => setActiveTab('menu')}
            className={`text-lg sm:text-xl font-extrabold pb-3 transition-all relative font-heading ${
              activeTab === 'menu' ? 'text-brand-red' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Multi-Cuisine Menu
            {activeTab === 'menu' && (
              <motion.div 
                layoutId="activeTabLine"
                className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-red rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
          <button 
            onClick={() => setActiveTab('cocktails')}
            className={`text-lg sm:text-xl font-extrabold pb-3 transition-all relative font-heading ${
              activeTab === 'cocktails' ? 'text-brand-red' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Beverages & Mixology
            {activeTab === 'cocktails' && (
              <motion.div 
                layoutId="activeTabLine"
                className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-red rounded-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>

        {/* Menu Listings */}
        <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-16 border border-black/5 shadow-2xl relative">
          {/* Ambient background decoration */}
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-10"
            >
              {(activeTab === 'menu' ? menuItems : cocktailItems).map((item, idx) => (
                <div key={idx} className="group">
                  <div className="flex justify-between items-baseline mb-3 pb-3 border-b border-black/5">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-brand-red transition-colors duration-300 font-heading">
                      {item.name}
                    </h3>
                    <div className="h-px bg-white/60 flex-grow mx-4 border-dotted border-b hidden sm:block" />
                    <span className="text-lg sm:text-xl font-black text-brand-red font-heading">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-slate-600 font-light text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Dining;
