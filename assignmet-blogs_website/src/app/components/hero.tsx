import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="text-white py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left: Text Section */}
          <div className="flex flex-col w-full md:w-1/2 justify-center items-start p-8">
  <h1 className="text-4xl md:text-6xl text-blue-300 tracking-wide mb-4 font-extrabold">
    Welcome to Our Blog
  </h1>
  <h2 className="text-2xl md:text-4xl text-black leading-snug mb-6 font-bold">
    Stay Updated with the Latest in Tech and Gadgets
  </h2>
  <p className="text-base md:text-lg text-gray-900 mb-6 max-w-lg">
    Dive into insightful articles, reviews, and tips about the latest tech, gadgets, and everything in between. 
    Whether you're a gaming enthusiast or a tech lover, our blog has something for everyone.
  </p>
  <a
    href="#"
    className="bg-blue-300 text-black hover:bg-blue-400 rounded-lg shadow-lg hover:shadow-xl py-3 px-6 text-lg transition duration-300 ease-in-out transform hover:scale-105"
  >
    Explore Our Posts
  </a>
</div>

          {/* Right: Image Section */}
          <div className="relative z-10 w-[298px] h-[198px] lg:w-[550px] lg:h-[400px] overflow-hidden order-1 xl:order-none mb-4 xl:mb-4 xl:mr-8 ">
        <Image
          src="/img/hero.avif"
          priority
          quality={100}
          fill
          alt="profile picture"
          className="object-cover"
        />
      </div>
        </div>
      </div>
    </section>
  );
}
