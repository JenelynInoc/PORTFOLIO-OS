import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <main className="min-h-screen w-full bg-[#F6E0B5] p-6 md:p-12">
      
      {/* --- TOP NAVIGATION --- */}
      <div className="flex justify-between items-center mb-16">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#3D342F] hover:text-[#E89F88] transition-colors">
          <ArrowLeft className="w-6 h-6" /> 
          <span className="uppercase tracking-widest text-sm">Back to Home</span>
        </Link>
      </div>

      {/* --- PAGE HEADER --- */}
      <header className="mb-16 border-b-2 border-black pb-8">
        <h1 className="text-6xl md:text-9xl font-display text-[#3D342F] uppercase tracking-tighter">
          Projects<span className="font-pixel text-[#E89F88] text-5xl md:text-7xl"></span>
        </h1>
        <p className="mt-4 text-[#5C4F48] font-medium max-w-xl text-lg">
          A collection of my web development projects, featuring responsive designs and complex logic implementations.
        </p>
      </header>

      {/* --- PROJECTS GRID --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* --- PROJECT 1: BISAKOL SHOP --- */}
        <a 
          href="https://bisakolshop.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group block bg-[#F6E0B5] border-2 border-black rounded-[2rem] overflow-hidden shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all duration-300"
        >
          {/* Preview Window */}
          <div className="h-72 bg-[#3D342F] border-b-2 border-black flex items-center justify-center relative overflow-hidden">
             <div className="relative w-full h-full">
                <Image 
                  src="/images/shop.jpg" 
                  alt="Bisakol Shop" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>
          
          {/* Details */}
          <div className="p-8">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-display text-[#3D342F]">Bisakol Shop</h3>
                <ArrowUpRight className="w-8 h-8 text-[#3D342F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
             <p className="text-base font-medium text-[#5C4F48] mb-6 leading-relaxed">
               A modern e-commerce platform designed for seamless online shopping experiences. Features product listings, carts, and a responsive layout.
             </p>
             <div className="flex flex-wrap gap-3">
                <span className="border-2 border-black px-3 py-1 rounded-full bg-white text-xs font-bold uppercase tracking-wide">Next.js</span>
                <span className="border-2 border-black px-3 py-1 rounded-full bg-white text-xs font-bold uppercase tracking-wide">E-Commerce</span>
                <span className="border-2 border-black px-3 py-1 rounded-full bg-white text-xs font-bold uppercase tracking-wide">Vercel</span>
             </div>
          </div>
        </a>

        {/* --- PROJECT 2: CPU Scheduler (UPDATED IMAGE) --- */}
        <a 
          href="https://cpu-scheduling-plum.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block bg-[#F6E0B5] border-2 border-black rounded-[2rem] overflow-hidden shadow-[4px_4px_0px_0px_#000] hover:shadow-[8px_8px_0px_0px_#000] hover:-translate-y-1 transition-all duration-300"
        >
          {/* Preview Window */}
          <div className="h-72 bg-[#E89F88] border-b-2 border-black flex items-center justify-center relative overflow-hidden">
             <div className="relative w-full h-full">
                <Image 
                  src="/images/cpu-sched.png" 
                  alt="CPU Scheduler Visualization" 
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
             </div>
          </div>
          
          {/* Details */}
          <div className="p-8">
             <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-display text-[#3D342F]">SJF Non-Preemptive</h3>
                <ArrowUpRight className="w-8 h-8 text-[#3D342F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
             </div>
             <p className="text-base font-medium text-[#5C4F48] mb-6 leading-relaxed">
               An interactive visualization tool for SJF Preemptive CPU scheduling algorithms, complete with dynamic Gantt charts.
             </p>
             <div className="flex flex-wrap gap-3">
                <span className="border-2 border-black px-3 py-1 rounded-full bg-white text-xs font-bold uppercase tracking-wide">React</span>
                <span className="border-2 border-black px-3 py-1 rounded-full bg-white text-xs font-bold uppercase tracking-wide">Algorithms</span>
             </div>
          </div>
        </a>

      </div>

      {/* --- CONTACT / FOOTER SECTION --- */}
      <div className="mt-24 border-t-2 border-black pt-12">
        <div className="max-w-4xl mx-auto text-center">
          
          <h2 className="text-4xl md:text-6xl font-display text-[#3D342F] mb-6 uppercase tracking-tighter">
            Let's <span className="text-[#E89F88] font-pixel">Connect</span>
          </h2>
          
          <p className="text-[#5C4F48] font-medium text-lg mb-8 max-w-xl mx-auto">
            I'm currently looking for internships and new opportunities. 
            Have a project in mind or just want to chat about Front-End Tech?
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            
            {/* Email Button */}
            <a 
              href="https://mail.google.com/mail/u/0/#inbox"
              className="px-8 py-4 bg-[#E89F88] border-2 border-black font-bold text-[#3D342F] shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all uppercase tracking-widest"
            >
              Send an Email
            </a>

            {/* Social Links Container */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/JenelynInoc" 
                target="_blank" 
                className="p-4 bg-white border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="font-bold text-sm">GH</span>
              </a>
              <a 
                href="https://www.instagram.com/jsi_urbabe/" 
                target="_blank" 
                className="p-4 bg-[#0077B5] border-2 border-black text-white shadow-[4px_4px_0px_0px_#000] hover:shadow-[2px_2px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                <span className="font-bold text-sm">IG</span>
              </a>
            </div>

          </div>

          <div className="mt-16 text-[#5C4F48] opacity-60 text-sm font-pixel">
            © 2025 Jenelyn. All rights reserved.
          </div>

        </div>
      </div>
    </main>
  );
}