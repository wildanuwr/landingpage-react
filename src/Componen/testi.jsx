import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { LockClosedIcon, ServerIcon, CodeBracketIcon } from "@heroicons/react/20/solid";

const features = [
  {
    name: "Pembuatan Website.",
    description: "Tim berpengalaman dalam membangun aplikasi web, desain UI/UX, dan sistem terintegrasi.",
    icon: CodeBracketIcon,
  },
  {
    name: "Pengembangan Aplikasi Web",
    description: "Kami mendesain solusi berdasarkan kebutuhan spesifik Anda.",
    icon: LockClosedIcon,
  },
  {
    name: "Pemeliharaan Website",
    description: "Menggunakan teknologi terbaru untuk memastikan performa terbaik.",
    icon: ServerIcon,
  },
];

const AnimatedBoxes = ({ inView }) => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (inView) {
      // Tunggu animasi tetesan air selesai sebelum memulai animasi kotak
      setTimeout(() => {
        setAnimationStarted(true);
      }, 5000); // Waktu sesuai durasi animasi tetesan air (misalnya 3 detik)
    }
  }, [inView]);

  return (
    <div className="relative w-full h-screen flex items-center max-lg:-mt-10 max-lg:ml-5 max-lg:items-end justify-end mr-40">
      <div
        className={`grid grid-cols-2  max-lg:grid-cols-4 gap-6 max-lg:gap-40 transition-all duration-1000 ease-in-out ${
          animationStarted ? "merged-state" : "spread-state"
        }`}
      >
        {/* Persegi 1 */}
        <div className="box bg-blue-500 ">
          <img src="../logo.png" alt="Logo 1" className="h-20 w-20 " />
        </div>

        {/* Persegi 2 */}
        <div className="box bg-green-500">
          <img src="../logo.png" alt="Logo 2" className="h-20 w-20" />
        </div>

        {/* Persegi 3 */}
        <div className="box bg-red-500">
          <img src="../logo.png" alt="Logo 3" className="h-20 w-20" />
        </div>

        {/* Persegi 4 */}
        <div className="box bg-yellow-500">
          <img src="../logo.png" alt="Logo 4" className="h-20 w-20" />
        </div>
      </div>
    </div>
  );
};

const PaintDrip1Container = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya diputar sekali
    threshold: 0.3, // 30% elemen terlihat di viewport
  });

  return (
    <div ref={ref} className="absolute paint-drip1-container -mt-3 -z-1">
      {/* Tetesan air hanya muncul saat elemen sudah di dalam viewport */}
      {inView && Array.from({ length: 20 }).map((_, i) => <div key={i} className="drip1"></div>)}
      
      <div className="ml-20 max-md:ml-5 absolute pt-60 z-1">
        <div className="lg:max-w-lg">
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Projek Yang sudah Kami buat
          </p>
          <p className="mt-6 text-lg/8 font-semibold text-white"></p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 font-semibold text-white lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-white" />
                  {feature.name}
                </dt>{" "}
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <AnimatedBoxes inView={inView} />
    </div>
  );
};

export default function SectionTesti() {
  return (
    <div className="relative-container relative">
      <PaintDrip1Container />
    </div>
  );
}
