import Image from "next/image";



const SearchBar = () => {
  return (
    <div className="relative w-full max-w-[361px]">
      <input
        type="search"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 text-sm text-[#333]/50 font-normal border border-foreground rounded-full focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent transition-all"
      />
      <Image
        src="/images/search.svg"
        alt="Search"
        width={20}
        height={20}
        className="absolute top-1/2 left-3 transform -translate-y-1/2"
      />
    </div>
  );
};

export default SearchBar;
