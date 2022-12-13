import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Currency from "react-currency-formatter";
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product }) => {
    const { id, title, price, description, category, image, rating, hasPrime } = product;

    const dispath = useDispatch();

    const addItemToBasket = () => {
        dispath(addToBasket(product));
    }

    const removeItemToBasket = () => {
        dispath(removeFromBasket(id));
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} alt={description} />

            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    ))}
                </div>
                <p className="text-xs my-2 line-clamp-3">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img
                            className="w-12"
                            src="https://links.papareact.com/fdw"
                            alt=""
                            loading="lazy" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>

                )}
            </div>

            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button onClick={addItemToBasket} className="button mt-auto">Add to Basket</button>
                <button onClick={removeItemToBasket} className="button mt-auto">Remove from Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
