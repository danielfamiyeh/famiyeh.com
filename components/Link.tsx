import NextLink, { LinkProps } from "next/link";

export default function Link(
  props: LinkProps & {
    children: any;
    className?: string;
    target?: string;
    rel?: string;
  }
) {
  return (
    <NextLink
      {...props}
      className={`text-[#eeeeee] hover:opacity-50 transform transition duration-300 ease-in-out ${
        props.className ?? ""
      }`}
    />
  );
}
