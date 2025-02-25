export default function Card({ title, imageUrl, link }) {
  return (
    <a 
    href={link} 
    className="group block bg-white rounded-lg transform transition hover:scale-105"
    >
    <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="text-center">
      <div className="h-[1px] w-3/5 bg-blueblack mx-auto mt-6" />
      <h3 className="mt-3 text-blueblack text-sm font-medium pb-4">{title}</h3>
    </div>
    </a>
  );
}