/* eslint-disable @next/next/no-img-element */
import ItemCard from '../../../components/UI/ItemCard';
import { Fragment } from 'react';
import CustomOpening from '../../../components/Openings/CustomOpening';
import { getDatabase, ref, onValue, updateStarCount } from 'firebase/database';
import { useEffect, useState } from 'react';

let retrievedData;
const db = getDatabase();
const starCountRef = ref(db, 'products/');
const dataArr = [];

onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  for (const key in data) {
    dataArr.push(data[key]);
  }
  console.log(dataArr);
});

const DUMMY__DATA = [
  {
    title: 'Woman Shirt 1',
    imageUrl: '/women_shirt/woman_shirt-1.png',
    genre: 'woman',
    category: 'shirt',
    id: 'ws1',
    price: 300,
    description: 'This is a different, open t-shirt for women.',
    stock: 15,
  },
  {
    title: 'Woman Shirt 2',
    imageUrl: '/women_shirt/woman_shirt-2.png',
    genre: 'woman',
    category: 'shirt',
    id: 'ws2',
    price: 400,
    description: 'This is a white, open t-shirt for women.',
    stock: 30,
  },
  {
    title: 'Woman Shirt 3',
    imageUrl: '/women_shirt/woman_shirt-3.png',
    genre: 'woman',
    category: 'shirt',
    id: 'ws3',
    price: 7500,
    description: 'Modern, Luxury, closed t-shirt for women.',
    stock: 5,
  },
];

const WomenShirt = () => {
  // console.log(arr.map((item) => console.log(item)));
  return (
    <Fragment>
      <CustomOpening>
        <h2>Women Shirts</h2>
        <h3>Here can find any kind of women shirt</h3>
      </CustomOpening>
      <section className="w-full">
        <div className="bg-blue-200 h-[600px] flex flex-row items-center justify-around">
          {dataArr.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default WomenShirt;
