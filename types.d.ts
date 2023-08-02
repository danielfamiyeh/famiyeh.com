export type Experience = {
  title: string;
  logo: string;
  employer: string;
  description: string[];
  skills: string[];
  startDate: Date;
  endDate?: Date;
};

export type Project = Omit<Experience, "logo", "employer"> & {
  images: string[];
  subtitle: string;
  links: { site: string; url: string }[];
};
