import React, { useState, useEffect } from "react";

import { CreditCard } from "./CreditCard/CreditCard";
import './CreditCardUI.css'

export const CreditCardUI = () => {
  const [card, setCard] = useState({
    cardNumber: "1234 5678 9012 3456",
    cardHolder: "KOWALSKI ADAM",
    validThrough: "08/12",
    bankName: "YOU BANK NAME",
    cvc:"512"
  });
  const [selectedFile, setSelectedFile] = useState("");
  const [image, setImage] = useState("");
  const [cardNumber, setCardNumber] = React.useState("");
  const [isFront, setIsFront] = useState(true);

  const handleChange = (e) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const reader = new FileReader();
    const url = reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (e) {
      setImage(reader.result);
    };
  };

  return (
      <div className="ui-container">
        <h2>Credit Card Data</h2>
      <div className="ui-form">
        <label for="cardNumber">Card Number</label>
      <input
        placeholder="Card Number"
        name="cardNumber"
        onChange={handleChange}
        type="text"
        onClick={()=>setIsFront(true)}
      />
        <label for="cardHolder">cardHolder</label>
      <input
        placeholder="Card Holder"
        name="cardHolder"
        onChange={handleChange}
        type="text"
        onClick={()=>setIsFront(true)}
      />
        <label for="validThrough">validThrough</label>
      <input
        placeholder="Valid through"
        name="validThrough"
        onChange={handleChange}
        type="text"
        onClick={()=>setIsFront(true)}
      />
        <label for="cardNumber">Card Number</label>
      <input
        placeholder="Bank name"
        name="bankName"
        onChange={handleChange}
        type="text"
        onClick={()=>setIsFront(true)}
      />
        <label for="cvc">CVC</label>
      <input
        placeholder="CVC"
        name="cvc"
        onChange={handleChange}
        type="text"
        onClick={()=>setIsFront(false)}
      />
      <input
        onChange={(e) => handleImageUpload(e)}
        type="file"
        onClick={(e) => (e.target.value = "")}
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
      <CreditCard
        number={card.cardNumber}
        cardHolder={card.cardHolder}
        validThrough={card.validThrough}
        bankName={card.bankName}
        cvc={card.cvc}
        image ={image}
        isFront={isFront}
        setIsFront={setIsFront}
        
      />
      </div>
           </div>
  );
};
