import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    console.log(data)
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img
                    alt="NA"
                    src={
                        process.env.REACT_APP_STRIPE_APP_DEV_URL +
                        data.img.data[0]?.attributes.url
                    }
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.Title}</span>
                <span className="price">Rs.{data.Price}</span>
            </div>
        </div>
    );
};

export default Product;
