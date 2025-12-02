import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react"; 

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#E8E4D6] flex flex-col items-center pb-20">
      
      {/* --- HEADER SECTION --- */}
      <header className="w-full bg-[#D6CEB5] text-[#3D342F] p-4 md:p-8 rounded-b-[3rem] md:rounded-b-[5rem] mb-12 shadow-[4px_4px_0px_0px_#000] border-b-2 border-black">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-[12vw] md:text-[150px] leading-none font-display uppercase tracking-tighter text-[#3D342F]">
            Portfolio<span className="font-pixel text-[#E8E4D6] text-[8vw] md:text-[100px]"></span>
          </h1>
          <div className="flex justify-between items-center mt-4 border-t-2 border-black/20 pt-4 text-xs md:text-sm font-bold uppercase tracking-widest text-[#3D342F]">
            <span>Front-End Dev</span>
            <span>UI/UX Design</span>
          </div>
        </div>
      </header>

      {/* --- MAIN GRID LAYOUT --- */}
      <div className="w-full max-w-6xl px-4 grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* --- LEFT COLUMN (Avatar + About) - CLICKABLE --- */}
        <Link href="/about" className="md:col-span-8 group block">
            <div className="bg-[#E8E4D6] border-2 border-black rounded-[2rem] p-6 relative shadow-[4px_4px_0px_0px_#000] overflow-hidden flex flex-col md:flex-row gap-6 transition-transform group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_#000]">
                <div className="absolute top-6 left-6 z-20 bg-[#D6CEB5] border-2 border-black px-4 py-1 rounded-full -rotate-12 shadow-[2px_2px_0px_0px_#000]">
                    <span className="font-bold font-display text-[#3D342F]">Hello</span>
                </div>
                <div className="w-full md:w-1/2 bg-[#D6CEB5] rounded-t-[10rem] rounded-b-[2rem] border-2 border-black flex items-end justify-center overflow-hidden h-[400px] md:h-auto relative">
                    <div className="relative w-full h-full">
                    <Image 
                        src="/images/jen.jpg" 
                        alt="Jenelyn Inoc" 
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    </div>
                    <div className="absolute top-10 right-10 text-[#E8E4D6] text-4xl z-10">✦</div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 pt-8 md:pt-0">
                    <div className="flex items-center gap-2">
                        <h2 className="text-3xl font-display text-[#3D342F]">About me</h2>
                        <ArrowUpRight className="text-[#3D342F] w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed border-l-2 border-black pl-4 text-[#3D342F]">
                        Hello, I'm <span className="font-bold">Jenelyn Inoc</span>. <br/>
                        Currently, I am a student and Front-End Developer. I have a passion for building clean, functional websites using Next.js and TypeScript.
                    </p>
                    <p className="text-xs text-[#5C4F48]">
                        I am also a sociable person, knowing how to connect with people around me.
                    </p>
                    <p className="text-xs font-bold underline decoration-[#D6CEB5] text-[#3D342F] mt-2">Read more about me</p>
                </div>
            </div>
        </Link>

        {/* --- RIGHT COLUMN (Resume + Contact) --- */}
        <div className="md:col-span-4 flex flex-col gap-6">
            
            {/* --- CLICKABLE RESUME BUTTON --- */}
            <Link href="/resume" className="group">
                <div className="bg-[#D6CEB5] border-2 border-black rounded-[1rem] p-2 shadow-[4px_4px_0px_0px_#000] transition-transform group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0px_0px_#000] cursor-pointer">
                     <div className="flex justify-end items-center gap-2">
                         <h2 className="text-5xl font-display text-[#3D342F] uppercase tracking-tighter text-right">
                            Resume<span className="font-pixel text-4xl text-[#E8E4D6]"></span>
                         </h2>
                         <ArrowUpRight className="w-8 h-8 text-[#3D342F] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                     </div>
                </div>
            </Link>

            {/* --- CONTACT BOX --- */}
            <div className="bg-[#E8E4D6] border-2 border-black rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-center h-full">
                <div className="flex justify-between items-start mb-4">
                     <h3 className="text-2xl font-display text-[#3D342F]">Contact</h3>
                     <ArrowUpRight className="w-6 h-6 text-[#3D342F]" />
                </div>
                <div className="space-y-4 text-sm font-bold text-[#3D342F]">
                    <p>+63 926 199 396</p>
                    <p title="inocjenelyn1@gmail.com" className="truncate">inocjenelyn1@gmail.com</p>
                    <p>Catarman, Cordova</p>
                </div>
            </div>
        </div>

        {/* --- BOTTOM ROW --- */}
        
        {/* --- PROJECTS LINK --- */}
        <Link href="/projects" className="md:col-span-4 block group">
            <div className="bg-[#E8E4D6] border-2 border-black rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_#000] h-full transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#000]">
                 <div className="flex items-center gap-2 mb-4">
                    <h3 className="text-xl font-display text-[#3D342F]">Projects</h3>
                    <ArrowUpRight className="w-5 h-5 text-[#3D342F] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                 </div>
                 <ul className="space-y-2 text-sm font-bold pl-4 list-disc marker:text-[#D6CEB5] text-[#3D342F]">
                    <li>Web Development</li>
                    <li>UI Implementation</li>
                    <li>Responsive Design</li>
                    <li>System Analysis</li>
                 </ul>
                 <p className="mt-4 text-xs font-bold underline decoration-[#D6CEB5] text-[#3D342F]">Click to view all</p>
            </div>
        </Link>

        {/* --- SKILLS SECTION --- */}
        <div className="md:col-span-8 bg-[#E8E4D6] border-2 border-black rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_#000]">
             <div className="flex items-center gap-2 mb-6">
                <h3 className="text-xl font-display text-[#3D342F]">Skills</h3>
                <ArrowUpRight className="w-5 h-5 text-[#3D342F]" />
             </div>
             <div className="flex flex-wrap gap-4">
                <span className="px-6 py-3 bg-[#3D342F] text-[#E8E4D6] flex items-center justify-center font-bold font-display text-sm rounded-xl border-2 border-black hover:bg-[#D6CEB5] hover:text-[#3D342F] transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1">
                    Next.js
                </span>
                <span className="px-6 py-3 bg-[#3D342F] text-[#E8E4D6] flex items-center justify-center font-bold font-display text-sm rounded-xl border-2 border-black hover:bg-[#D6CEB5] hover:text-[#3D342F] transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1">
                    Tailwind CSS
                </span>
                <span className="px-6 py-3 bg-[#3D342F] text-[#E8E4D6] flex items-center justify-center font-bold font-display text-sm rounded-xl border-2 border-black hover:bg-[#D6CEB5] hover:text-[#3D342F] transition-colors shadow-[2px_2px_0px_0px_#000] hover:shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1">
                    TypeScript
                </span>
             </div>
        </div>

      </div>
    </main>
  );
}