"use client";

import React, { useContext, useState } from "react";

type CurrentValueContextType = {
  rentalFleet: string;
  setRentalFleet: React.Dispatch<React.SetStateAction<string>>;
};

const CurrentValueContext = React.createContext<CurrentValueContextType>({
  rentalFleet: "Honda Civic",
  setRentalFleet: () => {},
});

export const useCurrentValueContext = () => useContext(CurrentValueContext);

export const CurrentValueProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [rentalFleet, setRentalFleet] = useState("Honda Civic");

  return (
    <CurrentValueContext.Provider
      value={{
        rentalFleet,
        setRentalFleet,
      }}
    >
      {children}
    </CurrentValueContext.Provider>
  );
};
