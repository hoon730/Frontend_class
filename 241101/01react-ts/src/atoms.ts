import { atom } from "recoil";

export interface List {
  id: number;
  song: string;
  singer: string;
  albumImg: string;
}

interface PlaylistState {
  [key: string]: List[];
}

export const PlaylistState = atom<PlaylistState>({
  key: "list",
  default: {
    공부: [
      { id: 1, song: "Hello", singer: "Adele", albumImg: "https://i.scdn.co/image/ab6761610000e5eb200000000000000000000000" },
      { id: 2, song: "World", singer: "Adele", albumImg: "https://i.scdn.co/image/ab6761610000e5eb200000000000000000000000" },
    ],
    운동: [],
    드라이브: [],
  },
});
