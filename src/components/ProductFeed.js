import Product from "./Product";

const ProductFeed = ({ products }) => {
    return (
        <div>
            <h1>products here...</h1>
            {products.map(({ id, title, price, descreiption, category, image }) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    descreiption={descreiption}
                    category={category}
                    image={image}
                />
            ))}
        </div>
    )
}

export default ProductFeed