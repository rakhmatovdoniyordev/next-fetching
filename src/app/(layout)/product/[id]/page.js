import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}


const Detail = async ({ params }) => {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await data.json();
  console.log(product);
  const averageRating =
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length;
  return (
    <section className="mt-36">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
            <Image
              src={product?.thumbnail}
              alt={product?.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2">{product?.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={averageRating} />
              <span className="text-gray-600 text-sm">
                ({product.reviews.length} reviews)
              </span>
            </div>
            <p className="text-2xl font-semibold text-blue-600 mb-4">
              ${product?.price}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Dimensions</h3>
                <p className="text-sm">
                  W: {product.dimensions.width} cm
                  <br />
                  H: {product.dimensions.height} cm
                  <br />
                  D: {product.dimensions.depth} cm
                </p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Weight</h3>
                <p className="text-sm">{product.weight} kg</p>
              </div>
            </div>
            <div className="space-y-2 mb-6">
              <p>
                <span className="font-semibold">Availability:</span>{" "}
                <span className="text-orange-500">
                  {product.availabilityStatus}
                </span>
              </p>
              <p>
                <span className="font-semibold">Shipping:</span>{" "}
                {product.shippingInformation}
              </p>
              <p>
                <span className="font-semibold">Warranty:</span>{" "}
                {product.warrantyInformation}
              </p>
              <p>
                <span className="font-semibold">Return Policy:</span>{" "}
                {product.returnPolicy}
              </p>
            </div>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b pb-6">
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review.rating} />
                  <span className="font-semibold">{review.reviewerName}</span>
                  <span className="text-gray-500 text-sm">
                    {formatDate(review.date)}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      );
    </section>
  );
};

export default Detail;
