import { Circle } from "lucide-react";

export default function Circulos() {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      className="flex gap-4 mt-6 justify-center lg:justify-start"
    >
      <Circle className="w-4 h-4 text-white" />
      <Circle className="w-4 h-4 text-yellow-500" />
      <Circle className="w-4 h-4 text-white" />
    </div>
  );
}