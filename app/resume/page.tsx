"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Download, Mail, Phone, MapPin } from "lucide-react";

export default function Resume() {
  return (
    // Main background changed to #E8E4D6
    <main className="min-h-screen w-full bg-[#E8E4D6] p-3 md:p-12 font-sans pb-20">
      
      {/* --- TOP NAV --- */}
      <div className="flex flex-wrap justify-between items-center mb-6 max-w-5xl mx-auto gap-4">
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#3D342F] hover:text-[#D6CEB5] transition-colors">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" /> 
          <span className="uppercase tracking-widest text-xs md:text-sm font-display">Back to Home</span>
        </Link>
        
        {/* Print / Download Button */}
        <button 
          onClick={() => window.print()}
          // Button background changed to #D6CEB5, text to #3D342F
          className="inline-flex items-center gap-2 bg-[#D6CEB5] text-[#3D342F] px-3 py-2 md:px-4 md:py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] md:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-transform font-bold text-xs md:text-sm active:translate-y-0 active:shadow-none"
        >
           <Download className="w-4 h-4" /> Save PDF
        </button>
      </div>

      {/* --- RESUME PAPER --- */}
      {/* Paper background remains white for contrast, but you could change to #E8E4D6 if preferred */}
      <div className="max-w-5xl mx-auto bg-white border-2 border-black rounded-[1rem] md:rounded-[2rem] shadow-[4px_4px_0px_0px_#000] md:shadow-[8px_8px_0px_0px_#000] overflow-hidden">
        
        {/* --- HEADER SECTION --- */}
        {/* Header background changed to #D6CEB5 */}
        <div className="bg-[#D6CEB5] border-b-2 border-black p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
            
            {/* Profile Picture */}
            {/* Circle background changed to #E8E4D6 */}
            <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 bg-[#E8E4D6] border-2 border-black rounded-full overflow-hidden shadow-[2px_2px_0px_0px_#000] md:shadow-[4px_4px_0px_0px_#000] relative">
               <Image 
                 src="/images/resumepf.png" 
                 alt="Jenelyn Inoc" 
                 fill
                 className="object-cover"
               />
            </div>

            {/* Name & Contact */}
            <div className="flex-1 space-y-4 w-full">
               <div>
                  <h1 className="text-3xl md:text-6xl font-display text-[#3D342F] uppercase tracking-tighter mb-2 leading-none">
                    Jenelyn <span className="text-white text-stroke-black">Inoc</span>
                  </h1>
                  {/* Tag background changed to #E8E4D6 */}
                  <p className="font-pixel text-[#3D342F] text-xs md:text-base bg-[#E8E4D6] inline-block px-3 py-1 border border-black rounded mt-1">
                     Web Developer & Designer
                  </p>
               </div>

               <div className="grid grid-cols-1 gap-2 text-sm font-medium text-[#3D342F] md:grid-cols-2 md:gap-3">
                  <div className="flex items-center gap-2 justify-center md:justify-start bg-white/30 p-1 rounded md:bg-transparent md:p-0">
                    <Phone className="w-4 h-4 shrink-0" /> 
                    <span>(63) 926199396</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start bg-white/30 p-1 rounded md:bg-transparent md:p-0">
                    <Mail className="w-4 h-4 shrink-0" /> 
                    <span className="break-all">inocjenelyn1@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center md:justify-start bg-white/30 p-1 rounded md:bg-transparent md:p-0 md:col-span-2">
                    <MapPin className="w-4 h-4 shrink-0" /> 
                    <span>Catarman, Cordova, Cebu 6017</span>
                  </div>
               </div>
            </div>
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="p-5 md:p-12 space-y-10 md:space-y-12 text-[#3D342F]">

           {/* 1. ABOUT ME */}
           <section>
              {/* Underline color changed to #D6CEB5 */}
              <h2 className="text-xl md:text-2xl font-display uppercase border-b-4 border-[#D6CEB5] inline-block mb-4 md:mb-6 pr-8">
                 About Me
              </h2>
              <p className="leading-relaxed font-medium text-[#5C4F48] text-sm md:text-base text-justify md:text-left">
                I'm <span className="font-bold text-black">Jenelyn</span>, a Web Developer and Designer dedicated to building web applications where form meets function. 
                {/* Highlight background changed to #E8E4D6 */}
                I specialize in developing high-performance, responsive interfaces using <span className="bg-[#E8E4D6] px-1 border border-black rounded text-xs font-bold">React</span> and <span className="bg-[#E8E4D6] px-1 border border-black rounded text-xs font-bold">Next.js</span>. 
                My goal is to craft clean, aesthetically pleasing user experiences that adhere strictly to minimalist design principles.
              </p>
           </section>

           {/* 2. TECHNICAL SKILLS */}
           <section>
              {/* Underline color changed to #D6CEB5 */}
              <h2 className="text-xl md:text-2xl font-display uppercase border-b-4 border-[#D6CEB5] inline-block mb-4 md:mb-6 pr-8">
                 Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                 <div className="space-y-4">
                    {/* Skill category background changed to #E8E4D6/30, title text to #D6CEB5 */}
                    <div className="bg-[#E8E4D6]/30 p-3 rounded-lg border border-black/10 md:border-0 md:bg-transparent md:p-0">
                        <h3 className="font-bold font-pixel text-xs mb-1 uppercase text-[#D6CEB5]">Languages</h3>
                        <p className="font-medium text-sm md:text-base">JavaScript, TypeScript, HTML5, CSS3</p>
                    </div>
                    <div className="bg-[#E8E4D6]/30 p-3 rounded-lg border border-black/10 md:border-0 md:bg-transparent md:p-0">
                        <h3 className="font-bold font-pixel text-xs mb-1 uppercase text-[#D6CEB5]">Frameworks</h3>
                        <p className="font-medium text-sm md:text-base">React, Next.js, Node.js, Express.js</p>
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="bg-[#E8E4D6]/30 p-3 rounded-lg border border-black/10 md:border-0 md:bg-transparent md:p-0">
                        <h3 className="font-bold font-pixel text-xs mb-1 uppercase text-[#D6CEB5]">Databases</h3>
                        <p className="font-medium text-sm md:text-base">MySQL, PostgreSQL</p>
                    </div>
                    <div className="bg-[#E8E4D6]/30 p-3 rounded-lg border border-black/10 md:border-0 md:bg-transparent md:p-0">
                        <h3 className="font-bold font-pixel text-xs mb-1 uppercase text-[#D6CEB5]">Tools & Concepts</h3>
                        <p className="font-medium text-sm md:text-base leading-relaxed">
                          Git/GitHub, REST APIs, OOP, CPU Scheduling, System Architecture
                        </p>
                    </div>
                 </div>
              </div>
           </section>

           {/* 3. PORTFOLIO PROJECTS */}
           <section>
              {/* Underline color changed to #D6CEB5 */}
              <h2 className="text-xl md:text-2xl font-display uppercase border-b-4 border-[#D6CEB5] inline-block mb-6 pr-8">
                 Portfolio Projects
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                  {/* Project A */}
                  {/* Card background changed to #E8E4D6 */}
                  <div className="bg-[#E8E4D6] border-2 border-black p-5 md:p-6 rounded-xl shadow-[4px_4px_0px_0px_#000]">
                      <h3 className="text-lg md:text-xl font-bold font-display mb-1">SJF Non-Preemptive Scheduling</h3>
                      {/* Subtitle color changed to #D6CEB5 */}
                      <p className="text-xs md:text-sm font-bold text-[#D6CEB5] mb-3 uppercase tracking-wide">Short Job First Non-Preemptive</p>
                      <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm font-medium text-[#5C4F48]">
                          <li>Visually demonstrates the <strong className="text-black">SJF</strong> CPU scheduling algorithm.</li>
                          <li>Real-time calculation of Waiting Time and Turnaround Time.</li>
                          <li><strong>Stack:</strong> React, Next.js, JavaScript.</li>
                      </ul>
                  </div>

                  {/* Project B */}
                  {/* Card background changed to #E8E4D6 */}
                  <div className="bg-[#E8E4D6] border-2 border-black p-5 md:p-6 rounded-xl shadow-[4px_4px_0px_0px_#000]">
                      <h3 className="text-lg md:text-xl font-bold font-display mb-1">BisakolShop</h3>
                      {/* Subtitle color changed to #D6CEB5 */}
                      <p className="text-xs md:text-sm font-bold text-[#D6CEB5] mb-3 uppercase tracking-wide">E-Commerce Platform</p>
                      <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm font-medium text-[#5C4F48]">
                          <li>Modern shopping experience with product catalog and cart.</li>
                          <li>Features user authentication and search functionality.</li>
                          <li><strong>Stack:</strong> React, Next.js, Context API, Tailwind.</li>
                      </ul>
                  </div>
              </div>
           </section>

           {/* 4. EXPERIENCE & EDUCATION GRID */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
               
               {/* Experience */}
               <section>
                  {/* Underline color changed to #D6CEB5 */}
                  <h2 className="text-xl md:text-2xl font-display uppercase border-b-4 border-[#D6CEB5] inline-block mb-4 md:mb-6 pr-8">
                     Experience
                  </h2>
                  <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-black">
                          {/* Bullet point color changed to #D6CEB5 */}
                          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#D6CEB5] border-2 border-black rounded-full"></div>
                          <h3 className="font-bold text-base md:text-lg">Web Development Projects</h3>
                          <p className="text-xs md:text-sm text-[#5C4F48] mt-2 leading-relaxed">
                             Built interactive tools such as a CPU Scheduling Simulator and other frontend-focused projects using React/Next.js.
                          </p>
                      </div>
                      <div className="relative pl-6 border-l-2 border-black">
                          {/* Bullet point color changed to #D6CEB5 */}
                          <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#D6CEB5] border-2 border-black rounded-full"></div>
                          <h3 className="font-bold text-base md:text-lg">Collaborative Coursework</h3>
                          <p className="text-xs md:text-sm text-[#5C4F48] mt-2 leading-relaxed">
                             Completed team-based projects involving planning and UI/UX design. Practiced version control with Git.
                          </p>
                      </div>
                  </div>
               </section>

               {/* Education */}
               <section>
                  {/* Underline color changed to #D6CEB5 */}
                  <h2 className="text-xl md:text-2xl font-display uppercase border-b-4 border-[#D6CEB5] inline-block mb-4 md:mb-6 pr-8">
                     Education
                  </h2>
                  <div className="space-y-3 md:space-y-4">
                      <div className="bg-white border border-black p-3 md:p-4 rounded-lg shadow-sm">
                          <h3 className="font-bold text-sm md:text-md">Cordova Public College</h3>
                          {/* Level text color changed to #D6CEB5 */}
                          <p className="text-xs md:text-sm text-[#D6CEB5] font-bold">Tertiary</p>
                      </div>
                      <div className="bg-white border border-black p-3 md:p-4 rounded-lg shadow-sm opacity-75">
                          <h3 className="font-bold text-sm md:text-md">Babag National High School</h3>
                          {/* Level text color changed to #D6CEB5 */}
                          <p className="text-xs md:text-sm text-[#D6CEB5] font-bold">Secondary</p>
                      </div>
                  </div>
               </section>

           </div>

        </div>
      </div>
    </main>
  );
}