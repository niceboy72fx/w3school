export const Button: React.FC<{ children: React.ReactNode; onClick: any }> = ({
  children,
  onClick,
}) => {
  return (
    <div className="frame-name-button  flex justify-center">
      <button
        onClick={onClick}
        className="name-button-browse rounded-md py-2 px-7"
      >
        {children}
      </button>
    </div>
  );
};
