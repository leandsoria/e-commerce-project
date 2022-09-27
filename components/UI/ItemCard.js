/* eslint-disable @next/next/no-img-element */
const ItemCard = ({ title, imageUrl, price, description }) => {
  return (
    <article className="w-80 border-gray-500 border-4 flex flex-col group">
      <div className="overflow-hidden ">
        <img
          src={imageUrl}
          alt={description}
          className="h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="bg-white py-4 px-6">
        <h3 className="font-semibold">{title}</h3>
        <p className="font-bold">${price}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </article>
  );
};

export default ItemCard;
