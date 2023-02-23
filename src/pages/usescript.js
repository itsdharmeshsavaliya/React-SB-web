import { useEffect } from 'react';

const useScript = (modulename) => {
  useEffect(() => {
    let arr = {};
    arr[home] = ["%PUBLIC_URL%/js/slider.js"];
    let alljs = arr[modulename];
    const script = document.createElement('script');

    script.src = alljs;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [modulename]);
};

export default useScript;