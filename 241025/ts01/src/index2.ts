interface Developer {
  type: string;
  skill: string;
}

interface Student {
  type: string;
  school: string;
}

// 서로소 유니온 타입
interface User<T> {
  name: string;
  profile: T;
}

const developerUser: User<Developer> = {
  name: "Hoon",
  profile: {
    type: "developer",
    skill: "typescript",
  },
};

const studentUser: User<Student> = {
  name: "Ki",
  profile: {
    type: "student",
    school: "서울대학교",
  },
};

const gotoSchool = (user: User<Student>) => {
  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
};
