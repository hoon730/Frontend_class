import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// 사용자로부터 정보값을 받는 firebase 함수

const firebaseConfig = {
  apiKey: "AIzaSyAIpCx_9U6XSTBGXsR1qMBjDSWrYcOHrfk",
  authDomain: "sns-platform-5c897.firebaseapp.com",
  projectId: "sns-platform-5c897",
  storageBucket: "sns-platform-5c897.appspot.com",
  messagingSenderId: "458748192605",
  appId: "1:458748192605:web:f06aa3365f3c309a9c6ab4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);


// Firebase > Firebase Database 공간 생성

// 이름 = 컬렉션 // ID = sns (겉으로 보여지는 이름) = 식별하기 위한 목적의 ID

// 각각의 독립적인 필드로 구성!!!

// ex)
// A필드(*사용자가 작성한 컨텐츠 내용)
// B필드(*해당 컨텐츠를 작성한 사용자의 정보)
// C필드(*해당 컨텐츠를 작성후 받은 좋아요 수)