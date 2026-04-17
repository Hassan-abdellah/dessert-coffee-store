const RemoveIconSVG = ({
  pathClassNames = "fill-rose-300",
  classNames = "w-3 h-3",
}: {
  pathClassNames: string;
  classNames?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classNames}
      fill="none"
      viewBox="0 0 10 10"
    >
      <path
        className={pathClassNames}
        d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
      />
    </svg>
  );
};

export default RemoveIconSVG;
