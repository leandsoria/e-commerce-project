/* eslint-disable @next/next/no-img-element */
import ItemCard from '../../../components/UI/ItemCard';
import { Fragment, useState, useEffect } from 'react';
import CustomOpening from '../../../components/Openings/CustomOpening';
import { getDatabase, ref, onValue, updateStarCount } from 'firebase/database';

let retrievedData;
const db = getDatabase();
const starCountRef = ref(db, 'products/');

const WomenShirt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [itemArr, setItemArr] = useState();

  useEffect(() => {
    const getItemsRequest = async () => {
      setIsLoading(true);
      try {
        onValue(starCountRef, async (snapshot) => {
          const data = await snapshot.val();
          const dataArr = [];
          for (const key in data) {
            dataArr.push(data[key]);
          }
          setItemArr(dataArr);
        });
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    };
    getItemsRequest();
  }, []);

  return (
    <Fragment>
      <CustomOpening>
        <h2>Women Shirts</h2>
        <h3>Here can find any kind of women shirt</h3>
      </CustomOpening>
      <section className="w-full">
        <div className="bg-blue-200 h-[600px] flex flex-row items-center justify-around">
          {itemArr &&
            itemArr.map((item) => (
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
