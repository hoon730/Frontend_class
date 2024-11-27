import React from "react";
import style from "./page.module.css";
import { BookData } from "@/types";
import { notFound } from "next/navigation";

// export const dynamicParams = false;

const Booktail = async ({ bookId }: { bookId: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류가 발생했습니다...</div>;
  }

  const book: BookData = await response.json();

  const { title, subTitle, description, author, publisher, coverImgUrl } = book;
  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url("${coverImgUrl})` }}
      >
        <img src={coverImgUrl} alt={title} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.sub_title}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
};

const ReviewEditor = () => {
  const createReviewAction = async (formData: FormData) => {
    "use server";

    const content = formData.get("content");
    const author = formData.get("authoer");
    console.log(content, author);
  };

  return (
    <section>
      <form action={createReviewAction}>
        <input type="text" name="content" placeholder="리뷰내용은" />
        <input type="text" name="author" placeholder="작성자" />
        <input type="submit" value="작성하기" />
      </form>
    </section>
  );
};

// Static Parameter 생성하는 함수!!!
export const generateStaticParams = () => {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  return (
    <div className={style.container}>
      <Booktail bookId={(await params).id} />
      <ReviewEditor />
    </div>
  );
};

export default Page;
