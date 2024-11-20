import ClientComponent from "@/components/client-component";
import React from "react";

const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) => {
  const { q } = await searchParams;
  console.log(q);
  return (
    <div>
      Search 페이지 : {q}
      <ClientComponent>
        <></>
      </ClientComponent>
    </div>
  );
};

export default Page;
