import { ReactNode } from "react";
export enum SelectedPage  {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourClasses",
  ContactUs = "contactUs",
}

export interface BenefitType {
  icon: ReactNode;
  title: string;
  description: string;
}