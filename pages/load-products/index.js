import { useRef, useState } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

function writeUserData(
  title,
  genre,
  category,
  price,
  id,
  description,
  imageUrl,
  stock
) {
  const db = getDatabase();
  set(ref(db, 'products/' + id), {
    title,
    genre,
    category,
    price,
    id,
    description,
    imageUrl,
    stock,
  });
}

const LoadProducts = () => {
  const [genreSelected, setGenreSelected] = useState('Woman');
  const [categorySelected, setCategorySelected] = useState('Shoes');
  const titleRef = useRef();
  const categoryRef = useRef();
  const priceRef = useRef();
  const idRef = useRef();
  const descriptionRef = useRef();
  const imageUrlRef = useRef();
  const stockRef = useRef();

  const genreHanlder = (e) => {
    setGenreSelected(e.target.value);
  };
  const categoryHandler = (e) => {
    console.log(e.target.value);
    setCategorySelected(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const genre = genreSelected;
    const category = categorySelected;
    const price = priceRef.current.value;
    const id = idRef.current.value;
    const description = descriptionRef.current.value;
    const imageUrl = imageUrlRef.current.value;
    const stock = stockRef.current.value;
    if (
      title === '' ||
      genre === '' ||
      category === '' ||
      price === '' ||
      id === '' ||
      description === '' ||
      imageUrl === '' ||
      stock === ''
    )
      return;

    writeUserData(
      title,
      genre,
      category,
      price,
      id,
      description,
      imageUrl,
      stock
    );
    titleRef.current.value = '';
    priceRef.current.value = '';
    idRef.current.value = '';
    descriptionRef.current.value = '';
    imageUrlRef.current.value = '';
    stockRef.current.value = '';
    console.log('Product updated');
  };
  return (
    <section className="min-h-[400px] w-full flex flex-col justify-center items-center">
      <div className="py-24">
        <h1>Load your products here!</h1>
        <form className="flex flex-col justify-center  max-w-xl text-left m-auto">
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Title:
          </label>
          <input
            type="name"
            id="title"
            ref={titleRef}
            placeholder="Title"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Genre:
          </label>
          <select
            name="genre"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            value={genreSelected}
            onChange={genreHanlder}
            required
          >
            <option value="Women">Woman</option>
            <option value="Men">Men</option>
            <option value="Children">Children</option>
          </select>

          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Category:
          </label>
          <select
            name="genre"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            value={categorySelected}
            onChange={categoryHandler}
            required
          >
            <option value="Shoes">Shoes</option>
            <option value="Shirt">Shirt</option>
            <option value="Pants">Pants</option>
          </select>

          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Price
          </label>
          <input
            type="tel"
            id="price"
            ref={priceRef}
            placeholder="Price"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Id:
          </label>
          <input
            type="name"
            id="id"
            ref={idRef}
            placeholder="Id"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Description:
          </label>
          <input
            type="name"
            id="description"
            ref={descriptionRef}
            placeholder="Description"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Image URL:
          </label>
          <input
            type="name"
            id="imageUrl"
            ref={imageUrlRef}
            placeholder="Image URL"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <label className="font-semibold mb-2 mt-4 uppercase text-lg">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            ref={stockRef}
            placeholder="Stock available"
            className="px-4 py-2 border-2 border-gray-400 rounded-md outline-none focus:border-orange-300 transition-colors duration-200 w-full"
            required
          />
          <button
            onClick={submitHandler}
            className="mt-8 uppercase border-2 border-orange-500 min-w-[150px] px-4 py-2 font-bold text-orange-500 hover:bg-orange-500 hover:text-white transition-color duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoadProducts;
