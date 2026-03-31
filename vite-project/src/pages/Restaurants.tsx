interface RestaurantProps {
  name: string;
  image: string;
  category: string;
  rating: number;
}

const RestaurantsCard = ({ name, image, category, rating }: RestaurantProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:scale-105 transition-transform duration-300">
      <img className="w-full h-48 object-cover" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-bold text-xl uppercase">{name}</h2>
          <span className="text-yellow-500 font-bold">⭐ {rating}</span>
        </div>
        <p className="text-gray-600 text-sm">
          Catégorie : <span className="font-semibold">{category}</span>
        </p>
      </div>
      <div className="px-6 pb-4">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors">
          Réserver une table
        </button>
      </div>
    </div>
  );
};

export default RestaurantsCard;