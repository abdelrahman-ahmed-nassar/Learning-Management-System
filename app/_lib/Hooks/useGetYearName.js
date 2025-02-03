import { useState, useEffect } from 'react';

const getYear = (year) => {
  if(year == 1) return "الصف الأول الثانوي";
  if(year == 2) return "الصف الثاني الثانوي";
  if(year == 3) return "الصف الثالث الثانوي";
}
const useGetYearName = (year) => {
  const [yearName, setYearName] = useState('');

  useEffect(() => {
    setYearName(getYear(year));
  }, [year]);

  return yearName;
};

export default useGetYearName;