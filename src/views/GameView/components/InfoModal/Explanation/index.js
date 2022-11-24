import { useState } from "react";

import Header from "views/GameView/components/InfoModal/Explanation/Header";

import Body from "./Body";

function Explanation({ propertyName }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} title={propertyName} />
      <Body isOpen={isOpen} propertyName={propertyName}/>
    </>
  )
}

export default Explanation;
