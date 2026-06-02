import { Circle } from "lucide-react";

export const Circulos = ({ colors }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      className="flex gap-4 mt-6 justify-center lg:justify-start"
    >
      {colors.map((color, index) => (
        <Circle
          key={index}
          className={`w-4 h-4 ${color}`}
        />
      ))}
    </div>
  );
};