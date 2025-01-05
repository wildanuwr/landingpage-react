import React from "react";
import { useInView } from "react-intersection-observer";
import { ServerStackIcon, PhotoIcon, CodeBracketIcon } from "@heroicons/react/20/solid";
import "../App.css";

const features = [
  {
    name: "Keahlian Profesional.",
    description: "Tim berpengalaman dalam membangun aplikasi web, desain UI/UX, dan sistem terintegrasi.",
    icon: CodeBracketIcon,
  },
  {
    name: "Solusi Kustom.",
    description: "Kami mendesain solusi berdasarkan kebutuhan spesifik Anda.",
    icon: PhotoIcon,
  },
  {
    name: "Teknologi Terkini.",
    description: "Menggunakan teknologi terbaru untuk memastikan performa terbaik.",
    icon: ServerStackIcon,
  },
];

const PaintDripContainer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya diputar sekali
    threshold: 0.3, // 30% elemen terlihat di viewport
  });

  return (
    <div ref={ref} className="absolute paint-drip-container -mt-3 -z-1">
      {inView && Array.from({ length: 20 }).map((_, i) => <div key={i} className="drip"></div>)}

      <div className="ml-20 max-md:ml-5 max-lg:ml-4 absolute pt-60 max-md:mt-20 max-lg:pt-80 z-1">
        <div className="lg:max-w-lg">
          <h2 className="text-base/7 font-semibold text-white">Mengapa Memilih Kami?</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">Workflow Efisien, Hasil Maksimal</p>
          <p className="mt-6 text-lg/8 font-semibold text-white">
            Kami menawarkan solusi inovatif untuk membantu bisnis Anda bekerja lebih cerdas dan efisien. Temukan cara baru untuk meningkatkan produktivitas melalui teknologi modern dan layanan yang disesuaikan.
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 font-semibold text-white lg:max-w-none">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-white" />
                  {feature.name}
                </dt>
                <dd className="inline">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="absolute z-1 right-24 max-md:right-0 mt-28 max-md:mt-9 max-md:w-[200px] max-lg:right-0 max-lg:w-[200px]">
        <img src="../logo.png" alt="logo" />
      </div>
    </div>
  );
};

export default function SectionHead() {
  return (
    <div className="relative max-md:pt-20">
      <PaintDripContainer />
    </div>
  );
}
