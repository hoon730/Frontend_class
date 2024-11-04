enum Role {
  ADMIN,
  USR,
  GUEST,
}

export const user1 = {
  name: "David",
  role: Role.ADMIN,
};

const user2 = {
  name: "David",
  role: Role.USR,
};

const user3 = {
  name: "Romeo",
  role: Role.GUEST,
};
