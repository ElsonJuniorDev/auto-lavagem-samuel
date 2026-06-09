export default function ServiceCard({
  icon,
  title,
  description,
}) {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="100"
      className="
      bg-white
      w-[320px]
      min-h-[290px]
      rounded-3xl
      p-6
      shadow-2xl
      transition-all
      duration-300
      hover:-translate-y-2
      "
    >  

        <div
         className="
           w-12
           h-12
           rounded-xl
           bg-yellow-100
           flex
           items-center
           justify-center
           mb-2
          "
          >
        {icon}
        </div>

        <h3 className="text-xl font-semibold text-gray-900">
        {title}
        </h3>

        <p className="mt-2 text-gray-600 leading-relaxed">
        {description}
      </p>
      
    </div>
  );
}