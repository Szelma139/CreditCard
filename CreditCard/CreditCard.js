import React, { useState } from "react";

import "./CreditCard.css";

import styled from "styled-components";

export const CreditCard = ({
  number,
  cardHolder,
  bankName = "You bank name",
  validThrough = "02/92",
  image = "https://motionarray.imgix.net/preview-265157-dH8wzdo5uq-high_0011.jpg",
  cvc,
  isFront, setIsFront
}) => {


  return (
    <>
      <div className="flip-card">
        <div className={`flip-card-inner ${isFront ? "rotate" : ""}`}>
          <div
            className={` ${
              !isFront ? "hidden" : ""
            } flip-card-front card-background`}
            style={{
              backgroundImage: !image
                ? `url("https://motionarray.imgix.net/preview-265157-dH8wzdo5uq-high_0011.jpg")`
                : `url(${image})`,
            }}
          >
            <h2 className="card-name card-font">{bankName}</h2>
            <div className="card-second-row">
              <img width="48px" src="/images/chip.png" alt="chip" />
              <img
                width="32px"
                height="48px"
                src="/images/wifi.png"
                alt="field"
              />
            </div>
            <div className="card-info-container card-font uppercase">
              <div className="card-number">{number}</div>
              <div className="card-columns">
                <div>
                  <span> {cardHolder}</span>
                </div>
                <div>
                  <span className="valid-through">{validThrough}</span>
                </div>
                <div className="logo-container">
                  <img height="60px" width="100px" src="/images/visa.png" />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${
              isFront ? "hidden" : ""
            } flip-card-back card-background`}
            style={{
              backgroundImage: !image
                ? `url("https://motionarray.imgix.net/preview-265157-dH8wzdo5uq-high_0011.jpg")`
                : `url(${image})`,
            }}
          >
            <div className="magnetic-strip"></div>
            <div className="signature-container">
              <div className="signature">Adam</div>

              <div className="cvc">{cvc}</div>
            </div>
            <img
              className="hologram"
              width="48px"
              src="images/hologram.png"
              alt="holo"
            />
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsFront(!isFront)}
        style={{
          padding: "1rem",
          border: 0,
          borderRadius: "5px",
          marginTop: "1rem",
          backgroundColor: "rgba(28, 100, 242, 1)",
          color: "#fff",
          fontWeight:800,
          fontSize:"15px"
        }}
      >
        Change side
      </button>
    </>
  );
};
