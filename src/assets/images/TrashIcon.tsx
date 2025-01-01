import { FC, SVGProps } from "react";

interface Props {
  className?: string;
}

export const TrashIcon: FC<SVGProps<SVGElement>> = ({ className }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="30"
      height="30"
      viewBox="0 0 256 256"
      className={className}
    >
      <defs></defs>
      <g
        stroke="none"
        strokeWidth="0"
        strokeDasharray="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        fill="none"
        fillRule="nonzero"
        opacity="1"
        transform="translate(22.611673151750978 22.61167315175095) scale(2.33 2.33)"
      >
        <path
          d="M 68.162 10.398 H 21.838 c -5.38 0 -9.742 4.362 -9.742 9.742 v 3.065 h 65.808 V 20.14 C 77.904 14.76 73.542 10.398 68.162 10.398 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(11,97,139)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 57.628 14.469 H 32.373 c -1.104 0 -2 -0.896 -2 -2 C 30.373 5.593 35.966 0 42.841 0 h 4.318 c 6.875 0 12.469 5.593 12.469 12.469 C 59.628 13.573 58.732 14.469 57.628 14.469 z M 34.611 10.469 H 55.39 C 54.488 6.761 51.141 4 47.159 4 h -4.318 C 38.86 4 35.512 6.761 34.611 10.469 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(11,97,139)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 16.154 27.346 l 3.555 60.704 C 19.773 89.145 20.679 90 21.776 90 h 46.449 c 1.097 0 2.003 -0.855 2.068 -1.949 l 3.554 -60.704 H 16.154 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(11,97,139)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 32.87 81.108 c -0.04 0.003 -0.079 0.004 -0.119 0.004 c -1.051 0 -1.933 -0.82 -1.995 -1.883 l -2.275 -38.856 c -0.064 -1.103 0.777 -2.049 1.88 -2.113 c 1.088 -0.066 2.049 0.777 2.113 1.88 l 2.275 38.855 C 34.814 80.098 33.973 81.044 32.87 81.108 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(255,255,255)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 47 79.112 c 0 1.104 -0.896 2 -2 2 s -2 -0.896 -2 -2 V 40.256 c 0 -1.104 0.896 -2 2 -2 s 2 0.896 2 2 V 79.112 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(255,255,255)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
        <path
          d="M 59.244 79.229 c -0.063 1.063 -0.944 1.883 -1.995 1.883 c -0.039 0 -0.079 -0.001 -0.119 -0.003 c -1.103 -0.065 -1.944 -1.012 -1.88 -2.114 l 2.275 -38.855 c 0.063 -1.103 0.992 -1.947 2.113 -1.88 c 1.103 0.064 1.944 1.011 1.879 2.113 L 59.244 79.229 z"
          stroke="none"
          strokeWidth="1"
          strokeDasharray="none"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          fill="rgb(255,255,255)"
          fillRule="nonzero"
          opacity="1"
          transform=" matrix(1 0 0 1 0 0) "
        />
      </g>
    </svg>
  );
};
