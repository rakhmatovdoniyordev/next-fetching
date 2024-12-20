"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaStar } from "react-icons/fa6";

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


const Fetch = ({data}) => {
    console.log(data);
    const router = useRouter()
  return (
    <div className="grid grid-cols-4 gap-5">
        {
            data?.products.map(pro => (
                <div className=" bg-white rounded-xl border" key={pro.id}>
                    <div className="space-y-3">
                    <div className="relative aspect-square w-full bg-[#FAFAFA] rounded-xl">
                        <Image
                        src={pro.thumbnail}
                        alt="Baltsar Chair"
                        fill
                        className="object-cover rounded-lg w-full h-full"
                        onClick={()=> router.push(`product/${pro.id}`)}
                        />
                    </div>
                    <div className="space-y-1 p-4" >
                        <p className="text-sm text-muted-foreground text-[#8D8D8D]">{pro.category}</p>
                        <h3 className="font-medium text-black text-[22px] line-clamp-1" title={pro.title}>{pro.title}</h3>
                        <div className="flex">
                        <StarRating rating={pro?.rating}/>
                        </div>
                    </div>
                        <div className="flex items-center justify-between p-4">
                        <p className="text-lg font-semibold">${pro.price}</p>
                        <button size="icon" className="rounded-full h-8 w-8 bg-black text-white">
                            +
                        </button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  );
};

export default Fetch;
