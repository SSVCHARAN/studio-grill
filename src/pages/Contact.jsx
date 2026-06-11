import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full pt-32 pb-24 bg-slate-50 relative overflow-hidden">
      {/* Animated Aesthetic Color Blobs */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none opacity-60 mix-blend-multiply">
        <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-brand-red/15 blur-[100px] animate-blob1" />
        <div className="absolute top-[10%] -right-[10%] w-[45vw] h-[45vw] max-w-[500px] max-h-[500px] rounded-full bg-sky-400/15 blur-[100px] animate-blob2" />
        <div className="absolute -bottom-[20%] left-[15%] w-[55vw] h-[55vw] max-w-[600px] max-h-[600px] rounded-full bg-amber-400/15 blur-[100px] animate-blob3" />
      </div>
      </div>
    </div>
  );
};

export default Contact;
