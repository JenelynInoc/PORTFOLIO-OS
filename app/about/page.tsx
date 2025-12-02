
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, GraduationCap, Heart } from "lucide-react";

export default function About() {
  return (
    // Updated background to #E8E4D6
    <main className="min-h-screen w-full bg-[#E8E4D6] p-4 md:p-12 font-sans pb-20">
      
      {/* --- TOP NAV --- */}
      <div className="flex items-center mb-8 max-w-6xl mx-auto">
        {/* Updated hover text color to #D6CEB5 */}
        <Link href="/" className="inline-flex items-center gap-2 font-bold text-[#3D342F] hover:text-[#D6CEB5] transition-colors">
          <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" /> 
          <span className="uppercase tracking-widest text-xs md:text-sm font-display">Back to Home</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* --- LEFT COLUMN: PHOTO & INTRO --- */}
        <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Photo Card */}
            {/* Updated card background to #D6CEB5 */}
            <div className="bg-[#D6CEB5] border-2 border-black rounded-[2rem] p-4 shadow-[4px_4px_0px_0px_#000]">
                {/* Updated inner background to #E8E4D6 */}
                <div className="aspect-[3/4] w-full relative bg-[#E8E4D6] rounded-[1.5rem] overflow-hidden border-2 border-black">
                     <Image 
                        src="/images/jen.jpg" 
                        alt="Jenelyn Inoc" 
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Quick Details */}
            <div className="bg-white border-2 border-black rounded-[2rem] p-6 shadow-[4px_4px_0px_0px_#000]">
                <h3 className="font-display text-xl mb-4 text-[#3D342F]">Location</h3>
                <div className="flex items-start gap-3 text-[#5C4F48]">
                    {/* Updated icon background to #E8E4D6 */}
                    <div className="bg-[#E8E4D6] p-2 rounded-lg border-2 border-black">
                        <MapPin className="w-5 h-5 text-[#3D342F]" />
                    </div>
                    <div>
                        <p className="font-bold text-[#3D342F]">Catarman, Cordova</p>
                        <p className="text-sm">Cebu, Philippines 6017</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- RIGHT COLUMN: BIO & EDUCATION --- */}
        <div className="md:col-span-7 flex flex-col gap-8">
            
            {/* Header */}
            <div>
                <h1 className="text-5xl md:text-8xl font-display text-[#3D342F] uppercase tracking-tighter leading-none mb-4">
                    About <span className="text-[#D6CEB5]">Me</span> {/* Updated accent text to #D6CEB5 */}
                </h1>
                <p className="text-lg md:text-xl font-medium text-[#5C4F48] leading-relaxed">
                    I'm Jenelyn, a Web Developer and Designer dedicated to building web applications where form meets function.
                </p>
            </div>

            {/* Main Bio Content */}
            {/* Updated background to #E8E4D6 */}
            <div className="bg-[#E8E4D6] border-2 border-black rounded-[2rem] p-6 md:p-8 shadow-[4px_4px_0px_0px_#000]">
                <h2 className="text-2xl font-display uppercase mb-4 flex items-center gap-2">
                    <Heart className="fill-[#3D342F] w-5 h-5" /> My Philosophy
                </h2>
                <div className="space-y-4 text-[#3D342F] leading-relaxed">
                    <p>
                        I specialize in developing high-performance, responsive interfaces using <span className="font-bold bg-white px-1 border border-black rounded">React</span> and <span className="font-bold bg-white px-1 border border-black rounded">Next.js</span>.
                    </p>
                    <p>
                        My goal is to craft clean, aesthetically pleasing user experiences that adhere strictly to minimalist design principles, proving that the most simple and clean websites are often the most powerful and impactful.
                    </p>
                    <p>
                        Beyond code, I am a sociable person who loves connecting with people. I believe that good communication is just as important as good code when it comes to building successful projects.
                    </p>
                </div>
            </div>

            {/* Education Timeline */}
            <div className="bg-white border-2 border-black rounded-[2rem] p-6 md:p-8 shadow-[4px_4px_0px_0px_#000]">
                <div className="flex items-center gap-3 mb-8">
                    {/* Updated icon background to #D6CEB5 */}
                    <div className="bg-[#D6CEB5] p-2 rounded-lg border-2 border-black">
                        <GraduationCap className="w-6 h-6 text-[#3D342F]" />
                    </div>
                    <h2 className="text-3xl font-display text-[#3D342F] uppercase">Education</h2>
                </div>

                <div className="space-y-8 relative pl-2">
                    {/* Vertical Line */}
                    <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-[#3D342F]"></div>

                    {/* Item 1 */}
                    <div className="relative pl-8">
                        {/* Updated dot to #D6CEB5 */}
                        <div className="absolute left-0 top-1 w-6 h-6 bg-[#D6CEB5] border-2 border-black rounded-full z-10"></div>
                        <h3 className="text-xl font-bold text-[#3D342F]">Cordova Public College</h3>
                        {/* Updated label text to #D6CEB5 */}
                        <p className="text-sm font-bold text-[#D6CEB5] uppercase tracking-wider mb-1">Tertiary</p>
                        <p className="text-[#5C4F48]">Bachelor of Science in Information Technology</p>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-8">
                        {/* Updated dot to #E8E4D6 */}
                        <div className="absolute left-0 top-1 w-6 h-6 bg-[#E8E4D6] border-2 border-black rounded-full z-10"></div>
                        <h3 className="text-xl font-bold text-[#3D342F]">Babag National High School</h3>
                        {/* Updated label text to #D6CEB5 */}
                        <p className="text-sm font-bold text-[#D6CEB5] uppercase tracking-wider mb-1">Secondary</p>
                    </div>

                    {/* Item 3 */}
                    <div className="relative pl-8">
                        <div className="absolute left-0 top-1 w-6 h-6 bg-white border-2 border-black rounded-full z-10"></div>
                        <h3 className="text-xl font-bold text-[#3D342F]">Cordova Central Elementary School</h3>
                        {/* Updated label text to #D6CEB5 */}
                        <p className="text-sm font-bold text-[#D6CEB5] uppercase tracking-wider mb-1">Elementary</p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}