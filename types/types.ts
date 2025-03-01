import { ReactNode } from "react";

export interface Post {
  slug: string;
  title: string;
  date: string;
  status: string;
}

export interface Project {
  title: string;
  description: ReactNode;
  image: string;
  type: string;
  livedemo: string;
  github: string;
}