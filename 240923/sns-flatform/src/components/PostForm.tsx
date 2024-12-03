import { addDoc, collection, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db, storage } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TextArea = styled.textarea`
  background: #000;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 20px;
  padding: 20px;
  font-size: 16px;
  width: 100%;
  height: 250px;
  resize: none;
  &::placeholder {
    font-size: 20px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    transition: opacity 0.3s;
  }
  &:focus {
    &::placeholder {
      opacity: 0;
    }
    outline: none;
    border-color: #1d9bf9;
  }
`;

const AttachFileButton = styled.label`
  width: 100%;
  color: #1d9bf9;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #1d9bf9;
  border-radius: 20px;
  text-align: center;
  padding: 10px 0;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid transparent;
    background: #1d9bf9;
    color: #fff;
  }
`;

const AttachFileInput = styled.input`
  display: none;
`;

const SubmitBtn = styled.input`
  background: #fff;
  color: #1d9bf9;
  border: none;
  border-radius: 20px;
  padding: 10px 0;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover,
  &:active {
    opacity: 0.9;
  }
`;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const maxFileSize = 7 * 1024 * 1024; // 5Mb

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPost(e.target.value);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e.target.files);
    // e.target.files
    const { files } = e.target;
    if (files && files.length === 1) {
      if (files[0].size > maxFileSize) {
        alert("The Maximum Capacity that can be uploaded is 5MB");
        return;
      }
      setFile(files[0])
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user || isLoading || post === "" || post.length > 180) return;
    try {
      setIsLoading(true);
      const doc = await addDoc(collection(db, "contents"), {
        post,
        createAt: Date.now(),
        userName: user?.displayName || "Anonymous",
        userId: user.uid,
      });
      if (file) {
        const locationRef = ref(storage, `contents/${user.uid}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        const fileType = file.type;
        if (fileType.startsWith("image/")) {
          await updateDoc(doc, {
            photo: url,
          });
        }
        if (fileType.startsWith("video/")) {
          await updateDoc(doc, {
            video: url,
          });
        }
      }
      setPost("");
      setFile(null);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextArea
        onChange={onChange}
        value={post}
        name="contents"
        id="contents"
        placeholder="What is Happening"
        required
      ></TextArea>
      <AttachFileButton htmlFor="file">
        {file ? "Contents Added✅" : "Add ⬆"}
      </AttachFileButton>
      <AttachFileInput
        onChange={onFileChange}
        type="file"
        id="file"
        accept="video/*, image/*"
      />
      <SubmitBtn type="submit" value={isLoading ? "Posting..." : "Post"} />
    </Form>
  );
};

export default PostForm;

// *firebase >
// - User Info 생성
// - Authentication 인증
// - 외부 계정 인증
// DB 물리적 공간 생성
// 각각의 창고 = storage

// 1. Authentication
// - 회원가입 기능 구현
// - 신규 생성된 회원정보 > 로그인 기능 구현
// - SNS 계정연동 > 로그인 기능 구현

// 2. Firestore Database
// - UI 화면을 통해서 사용자로부터 입력받은 data활용 > 컬렉션 > 문서 > 필드
// 컬렉션 : 데이터가 저장될 상위 카테고리
// 문서 : 새로운 컨텐츠 저장(업로드)될 때마다 신규로 생성 되는 카테고리 (*고유한 ID값으로 생성)
// 필드 : 컨텐츠가 신규로 생성 필요한 세부정보를 담고 있음 (* 컨텐츠 생성된 날짜 정보 // 컨텐츠 내용 // 해당 컨텐츠 고유 ID // 컨텐츠 생성한 사용자의 정보)

// 3. Storage
// - 이미지 혹은 동영상 물리적으로 업로드 //
// 컬렉션 : 이미지 혹은 동영상 컨텐츠가 저장될 상위 카테고리
// 문서 : 새로운 이미지 혹은 동영상 컨텐츠가 저장(업로드)될 때마다 신규로 생성되는 카테고리
// - 필드 : 업로드한 이미지 혹은 동영상 세부 address 정보가 담긴 필드
