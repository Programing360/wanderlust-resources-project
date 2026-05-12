import { Separator } from "@heroui/react";
import { Search, MapPin, Calendar, CircleDollarSign, Users } from "lucide-react"; // Optional: Adding icons for a premium look

const Banner = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
        style={{ zIndex: -2 }}
      />
      <div className="absolute inset-0 bg-black/40" style={{ zIndex: -1 }} />

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-20 pb-10 text-center flex flex-col items-center flex-1 justify-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6">
          Discover Your <br /> 
          <span className="text-cyan-400">Next Adventure</span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10 leading-relaxed">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences tailored just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <button className="uppercase bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/30 cursor-pointer">
            Explore Now
          </button>
          <button className="uppercase bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full font-semibold transition-all cursor-pointer">
            View Destinations
          </button>
        </div>
      </div>

      {/* Floating Search Bar Section */}
      <div className="w-full max-w-6xl px-4 pb-12">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-full p-2 md:pl-8 flex flex-col md:flex-row items-center gap-4 shadow-2xl">
          
          {/* Location */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1 p-3">
            <MapPin className="text-cyan-400 shrink-0" size={20} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">Location</h3>
              <input 
                type="text" 
                placeholder="Where to?" 
                className="bg-transparent border-none outline-none text-sm placeholder:text-gray-400 w-full"
              />
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Date */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1 p-3">
            <Calendar className="text-cyan-400 shrink-0" size={20} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">Duration</h3>
              <p className="text-sm font-medium whitespace-nowrap">Anytime • 3 Days</p>
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Budget */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1 p-3">
            <CircleDollarSign className="text-cyan-400 shrink-0" size={20} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">Budget</h3>
              <p className="text-sm font-medium whitespace-nowrap">$0 - $3000</p>
            </div>
          </div>

          <Separator className="hidden md:block h-10 bg-white/20" orientation="vertical" />

          {/* Guests */}
          <div className="flex items-center gap-3 w-full md:w-auto flex-1 p-3">
            <Users className="text-cyan-400 shrink-0" size={20} />
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-300">People</h3>
              <p className="text-sm font-medium whitespace-nowrap">5-10 Guests</p>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors w-full md:w-auto px-10 py-4 md:py-5 rounded-xl md:rounded-full flex items-center justify-center gap-2 font-bold cursor-pointer">
            <Search size={20} />
            <span className="md:hidden">Search</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;