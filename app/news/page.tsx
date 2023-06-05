import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("🚀 ~ file: page.tsx:5 ~ getData ~ res:", res);
  return res.json();
};
("----------------------------------------------------------------------");
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log("🚀 ~ file: page.tsx:5 ~ getData ~ res:", res);
  return res.json();
};

("----------------------------------------------------------------------");

const getDogs = async () => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-store",
  });
  return res.json();
};


("----------------------------------------------------------------------");
// const getDogs = async () => {
//   const res = await fetch("https://dog.ceo/api/breeds/image/random", {
//     next: {
//       revalidate :5
//     },
//   });
//   return res.json();
// };

async function News() {
  const [posts, users, dogs] = await Promise.all([
    getData(),
    getUsers(),
    getDogs(),
  ]);
  return (
    <>
        <Image src={dogs.message} alt="dog" width={300} height={300} />
      {posts.map((post: any) => {
        return <div>{post.title}</div>;
      })}

      <p>
        ---------------------------------------------------------------------------------
      </p>

      {users.map((user: any) => {
        return <div>{user.name}</div>;
      })}

       <p>
        ---------------------------------------------------------------------------------
      </p>

   
    

    </>
  );
}

export default News;
