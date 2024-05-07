/* eslint-disable react/prop-types */
export default function Heading({ children }) {
  return (
    <h1 className="font-semibold font-mono text-4xl leading-normal text-white text-center md:text-left mb-4">
      {children}
    </h1>
  );
}
