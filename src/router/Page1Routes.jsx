import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page1DetailB } from "../Page1DetailB";

export const Page1Routes = [
  { path: "/", exact: true, childeren: <Page1 /> },
  { path: "/detailA", exact: false, childeren: <Page1DetailA /> },
  { path: "/detailB", exact: false, childeren: <Page1DetailB /> }
];
