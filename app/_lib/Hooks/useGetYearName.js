
const getYear = (year) => {
  if(year == 1) return "الصف الأول الثانوي";
  if(year == 2) return "الصف الثاني الثانوي";
  if(year == 3) return "الصف الثالث الثانوي";
}
const useGetYearName = (year) => {
  return getYear(year);
};

export default useGetYearName;