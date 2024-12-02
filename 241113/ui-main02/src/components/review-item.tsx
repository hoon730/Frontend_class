import React from "react";
import { ReviewData } from "@/types";
import style from "./review-item.module.css";

const ReviewItem = ({ id, content, author, createdAt, bookId }: ReviewData) => {
  return (
    <div>
      <div>{author}</div>
      <div>{content}</div>
      <div>
        <div>{new Date(createdAt).toLocaleString()}</div>
        <div>삭제하기</div>
      </div>
    </div>
  );
};

export default ReviewItem;
