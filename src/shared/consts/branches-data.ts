import type { PHOTO_DATA } from "./photo-data";

export const BRANCHES_DATA: {
  id: string;
  key: keyof typeof PHOTO_DATA;
  label: string;
  photoCount: number;
  imgSrc: string;
}[] = [
  {
    id: "1",
    key: "furi",
    label: "Тенты на фуры",
    photoCount: 5,
    imgSrc: "/branches/furi-branch.jpg",
  },
  {
    id: "2",
    key: "pricepi",
    label: "Тенты на прицепы",
    photoCount: 9,
    imgSrc: "/branches/pricepi-branch.jpg",
  },
  {
    id: "3",
    key: "basseini",
    label: "Бассейны",
    photoCount: 7,
    imgSrc: "/branches/basseini-branch.jpg",
  },
  {
    id: "4",
    key: "selhoz-ukritya",
    label: "Сельхозукрытия",
    photoCount: 9,
    imgSrc: "/branches/selhoz-ukritya-branch.jpg",
  },
  {
    id: "5",
    key: "laguni",
    label: "Лагуны",
    photoCount: 14,
    imgSrc: "/branches/laguni-branch.jpg",
  },
  {
    id: "6",
    key: "angari",
    label: "Ангары",
    photoCount: 9,
    imgSrc: "/branches/angari-branch.jpg",
  },
  {
    id: "7",
    key: "paviloni",
    label: "Павильоны",
    photoCount: 9,
    imgSrc: "/branches/paviloni-branch.jpg",
  },
  {
    id: "8",
    key: "krovlya",
    label: "Кровля",
    photoCount: 7,
    imgSrc: "/branches/krovlya-branch.jpg",
  },
  {
    id: "9",
    key: "burovie-ukritya",
    label: "Буровые укрытия",
    photoCount: 9,
    imgSrc: "/branches/burovie-ukritya-branch.jpg",
  },
  {
    id: "10",
    key: "myagkie-okna",
    label: "Мягкие окна",
    photoCount: 9,
    imgSrc: "/branches/myagkie-okna-branch.jpg",
  },
];
