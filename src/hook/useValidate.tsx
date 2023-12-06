import { useState } from "react";

interface UseInputValidationProps {
  required?: boolean;
  errName?: string;
}

const useValidate = ({
  required = false,
  errName = "",
}: UseInputValidationProps) => {
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<boolean>(false);

  const handleInputBlur = (value: string) => {
    setFocused(false);

    if (required && value.trim() === "") {
      setError(errName);
      setFocused(true);
    } else {
      setError(null);
      setFocused(true);
    }
  };

  const handleInputFocus = () => {};

  return { error, focused, handleInputBlur, handleInputFocus };
};

export default useValidate;
