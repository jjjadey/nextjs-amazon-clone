import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { StarIcon } from '@heroicons/react/24/solid';
import Currency from "react-currency-formatter";
import { addToBasket } from "../slices/basketSlice";

const minRating = 1;
const maxRating = 5;

const Product = ({ id, title, price, description, category, image }) => {
    const dispatch = useDispatch();
    const [rating, setRating] = useState()
    const [hasPrime, setHasPrime] = useState()

    useEffect(() => {
        const randomRating = Math.floor(Math.random() * (maxRating - minRating + 1)) + minRating;
        setRating(randomRating);

        const randomHasPrime = Math.random() < 0.5;
        setHasPrime(randomHasPrime);

    }, []);

    const addItemToBasket = () => {
        const product = [{ id, title, price, description, category, image }];
        dispatch(addToBasket(product));
    }


    return (
        <div className="relative flex flex-col m-5 bg-white z-30 p-10">
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <div class="flex justify-center">
                <Image src={image} height={200} width={200} objectFit="contain" alt={description} />
            </div>
            <h4 className="my-3">{title}</h4>

            <div className="flex">
                {Array(rating).fill().map((_, i) => (
                    <StarIcon className="h-5 text-yellow-500" key={i} />
                ))}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency quantity={price} currency="GBP" />
            </div>

            {hasPrime && (
                <div className="flex item-center space-x-2 -mt-1">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
                    <p className="text-xs text-gray-500 mt-3">Free Next-day Delivery</p>
                </div>
            )}
            <button className="mt-auto button" onClick={() => addItemToBasket()}>Add to Basket</button>
        </div>
    )
}

export default Product