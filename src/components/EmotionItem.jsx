import React from "react";

import { getEmotionImage } from "../util/get-emotion-images";

import "./EmotionItem.css";

function EmotionItem({ emotionId, emotionName, isSelected }) {
  return (
    <div
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img
        className="emotion_img"
        src={getEmotionImage(emotionId)}
        alt={emotionName}
      />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
}

export default EmotionItem;
