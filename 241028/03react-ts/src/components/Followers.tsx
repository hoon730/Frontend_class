import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<FollowersContext>();
  return <div>Here are {nameOfMyUser}의 Followers</div>;
};

export default Followers;
