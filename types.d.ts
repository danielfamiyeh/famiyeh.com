import { Component } from "react";

export type Experience = {
  title: string;
  logo: string;
  logoBg?: boolean;
  employer: string;
  description: string[];
  skills: string[];
  startDate: Date;
  endDate?: Date;
};

export type Project = Omit<Experience, "logo", "employer"> & {
  images: string[];
  subtitle: string;
  links: ExternalLink[];
};

export type ExternalLink = {
  site: string;
  url: string;
  Icon?: typeof Component;
};
