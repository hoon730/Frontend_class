import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import Post from "./Post";

export interface IPost {
  id: string;
  createAt: number;
  photo?: string;
  video?: string;
  post: string;
  userId: string;
  userName: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* overflow-y: scroll; */
  padding: 0 10px;
`;

const TimeLine = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null; //firebase/firestore
    const fetchPosts = async () => {
      const postQuery = query(
        collection(db, "contents"),
        orderBy("createAt", "desc"),
        limit(25)
      );
      unsubscribe = await onSnapshot(postQuery, (snapshot) => {
        const posts = snapshot.docs.map((doc) => {
          const { createAt, photo, video, post, userId, userName } = doc.data();
          return {
            id: doc.id,
            createAt,
            photo,
            video,
            post,
            userId,
            userName,
          };
        });
        setPosts(posts);
      });
    };
    fetchPosts();
    return () => {
      unsubscribe && unsubscribe();
    }
  }, []);
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

export default TimeLine;
