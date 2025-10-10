import type { JSX, SVGProps } from "react";
import { RootIcons } from "../ui-kit/icons";

export const BRANCHES_DATA: {
  id: string;
  key: string;
  label: string;
  photoCount: number;
  imgSrc: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}[] = [
  {
    id: "auto",
    key: "auto",
    label: "Автотенты",
    photoCount: 5,
    imgSrc: "/branches/furi-branch.jpg",
    Icon: RootIcons.TruckIcon,
  },
  {
    id: "basseini",
    key: "basseini",
    label: "Бассейны",
    photoCount: 7,
    imgSrc: "/branches/basseini-branch.jpg",
    Icon: RootIcons.PoolIcon,
  },
  {
    id: "selhoz-ukritya",
    key: "selhoz-ukritya",
    label: "Сельхозукрытия",
    photoCount: 1,
    imgSrc: "/branches/selhoz-ukritya-branch.jpg",
    Icon: RootIcons.WheatIcon,
  },
  {
    id: "laguni",
    key: "laguni",
    label: "Лагуны",
    photoCount: 14,
    imgSrc: "/branches/laguni-branch.jpg",
    Icon: RootIcons.LagoonIcon,
  },
  {
    id: "angari",
    key: "angari",
    label: "Ангары",
    photoCount: 9,
    imgSrc: "/branches/angari-branch.jpg",
    Icon: RootIcons.WarehouseIcon,
  },
  {
    id: "paviloni",
    key: "paviloni",
    label: "Павильоны",
    photoCount: 12,
    imgSrc: "/branches/paviloni-branch.jpg",
    Icon: RootIcons.StoreIcon,
  },
  {
    id: "krovlya",
    key: "krovlya",
    label: "Кровля",
    photoCount: 7,
    imgSrc: "/branches/krovlya-branch.jpg",
    Icon: RootIcons.RoofIcon,
  },
  {
    id: "burovie-ukritya",
    key: "burovie-ukritya",
    label: "Буровые укрытия",
    photoCount: 9,
    imgSrc: "/branches/burovie-ukritya-branch.jpg",
    Icon: RootIcons.BackhoeIcon,
  },
  {
    id: "myagkie-okna",
    key: "myagkie-okna",
    label: "Мягкие окна",
    photoCount: 4,
    imgSrc: "/branches/myagkie-okna-branch.jpg",
    Icon: RootIcons.WindowIcon,
  },
];
