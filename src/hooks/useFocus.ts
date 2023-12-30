import { useEffect, useRef, useState } from "react";

const useFocus = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inFocus, setInFocus] = useState(false);
  const setFocus = () => inputRef.current?.focus();
  useEffect(() => {
    const onFocus = () => setInFocus(true);
    const onBlur = () => setInFocus(false);
    const input = inputRef.current;
    input?.addEventListener("focus", onFocus);
    input?.addEventListener("blur", onBlur);
    return () => {
      input?.removeEventListener("blur", onBlur);
      input?.removeEventListener("focus", onFocus);
    };
  }, [inputRef]);

  return { inputRef, inFocus, setFocus };
};

export default useFocus;
