/* eslint-disable @next/next/no-img-element */
const ItemCard = ({ title, imageUrl, price, description }) => {
  return (
    <article className="w-80 flex flex-col group rounded-lg overflow-hidden shadow-lg hover:cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={description}
          className="h-full group-hover:scale-110 transition-transform duration-500 min-h-[320px]"
        />
      </div>
      <div className="bg-white py-4 px-6 min-h-[140px]">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-bold">${price}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </article>
  );
};

export default ItemCard;
