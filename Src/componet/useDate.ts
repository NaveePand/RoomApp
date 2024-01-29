import moment from "moment";
import { useState } from "react";

export function useDate(minDate: any, maxDate: any) {
  const minYear = moment(new Date(minDate)).year();
  const maxYear = moment(new Date(maxDate)).year();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  // console.log(minDate, maxDate);

  const handlePrevClick = () => {
    setCurrentYear(currentYear - 20);
  };

  const handleNextClick = () => {
    setCurrentYear(currentYear + 20);
  };

  function generateNumberArray(start: number, end: number) {
    const yearList = [];
    for (let year = start; year <= end; year++) {
      if (minDate && maxDate) {
        if (minYear <= year && year <= maxYear) {
          yearList.push(year);
        }
      } else if (maxDate) {
        if (year <= maxYear) {
          yearList.push(year);
        }
      } else {
        yearList.push(year);
      }
    }
    return yearList;
  }
  const listOfYears = generateNumberArray(currentYear, currentYear + 19);
  return {
    currentYear,
    handlePrevClick,
    handleNextClick,
    listOfYears,
  };
}
