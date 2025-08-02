'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6"
        style={{
          backgroundImage: `url(${"/headerImage.avif"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Together We Can Change <br />
            <span className="text-red-600">THE WORLD</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200">
            We don{'"'}t ask for much, just help us with what you can – be it Money, Skill, or Time.
          </p>
          <Link href='/login'><button className="mt-8 bg-red-600 px-6 py-3 rounded-xl text-white font-semibold shadow hover:bg-red-700 transition">
            Donate Now!
          </button></Link>
        </div>
      </section>

      {/* About Section */}
      <section id='about' className="max-w-5xl mx-auto mt-20 px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About She Can</h2>
          <p className="text-gray-600 text-lg">
            {'"'}She Can{'"'} is a non-profit foundation focused on helping women and girls achieve their full potential.
            We run impactful programs on education, health, and career support in underserved communities.
          </p>
        </div>
        <div>
          <Image
            src="/womenEmpowerment.avif"
            alt="Empowering Women"
            width={500}
            height={350}
            className="rounded-xl shadow-xl"
          />
        </div>
      </section>

      {/* Programs Section */}
      <section id="mission" className="max-w-6xl mx-auto mt-24 px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Education", desc: "Scholarships, after-school support, and digital literacy." },
            { title: "Health", desc: "Hygiene awareness, health camps, and nutrition programs." },
            { title: "Livelihood", desc: "Skill training, job placement, and self-help groups." }
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl text-purple-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="text-center mt-24 px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
          Want to be a part of change?
        </h2>
          <Link href='/login'> <button className="bg-green-600 px-8 py-3 rounded-xl text-white font-semibold shadow hover:bg-green-700 transition">
          Join Us
        </button></Link>
       
      </section>
    </main>
  );
}
