import React from "react";
import { carDetails, cars } from "../data/content";
import { useCurrentValueContext } from "../context/currentValue";
import Image from "next/image";

function RentalFleet() {
  const { rentalFleet, setRentalFleet } = useCurrentValueContext();

  const carDetail = carDetails.find((data) => data.car === rentalFleet);

  if (!carDetail) return null;

  return (
    <section id="rental-fleet">
      <div className="px-8 lg:px-28 py-16 text-center space-y-8 lg:space-y-16">
        <div className="font-bold space-y-2">
          <h3 className="text-xl">Vehicle Models</h3>
          <h1 className="text-4xl leading-tight lg:text-5xl">
            Our rental fleet
          </h1>
          <p className="font-normal text-custom-grey p-4">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip
          </p>
        </div>
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex flex-col gap-2 lg:basis-1/5">
            {cars.map((data) => (
              <button
                key={data.id}
                className={`${
                  rentalFleet === data.car
                    ? "bg-custom-orange text-white"
                    : "bg-lighter-grey text-black"
                } text-left p-4 text-xl font-semibold hover:bg-custom-orange hover:text-white transition-all duration-300 ease-linear`}
                onClick={() => setRentalFleet(data.car)}
              >
                {data.car}
              </button>
            ))}
          </div>
          <div className="lg:basis-3/5">
            <Image
              src={`/images/${carDetail.car}.png`}
              alt={carDetail.car}
              width={500}
              height={500}
              className="m-auto"
            />
          </div>
          <div className="w-fit m-auto space-y-4 lg:space-y-6 lg:basis-1/5">
            <div>
              <h1 className="bg-custom-orange p-2 text-white flex items-center gap-2 justify-center">
                <span className="text-2xl font-bold">Rs {carDetail.price}</span>
                <span className="text-lg">/ rent per day</span>
              </h1>
              <table>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Model
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.model}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Mark
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.mark}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Year
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.year}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Doors
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.doors}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    AC
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.ac}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Transmission
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.transmission}
                  </td>
                </tr>
                <tr>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    Fuel
                  </td>
                  <td className="border-2 border-dark-grey py-2 px-6 text-sm">
                    {carDetail.fuel}
                  </td>
                </tr>
              </table>
            </div>
            <div>
              <a
                href="#booking"
                className="text-xl block w-full font-bold bg-custom-orange p-2 text-white shadow-orange-bottom hover:shadow-orange-bottom-hov transition-all duration-300 ease-linear rounded"
              >
                Reserve Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RentalFleet;
