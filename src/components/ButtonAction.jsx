// eslint-disable-next-line react/prop-types
export default function ButtonAction({ className, onClick, children }) {
  const buttonClassName = "bg-white p-2 rounded-lg".split(" ");
  buttonClassName.push(className);

  return (
    <button className={buttonClassName.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
