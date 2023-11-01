import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs, { Dayjs } from 'dayjs';

export default function BasicDateCalendar() {
  const [value,setValue] = React.useState<Dayjs | null> (dayjs()); //set it to now
  const date = new Date();
  const utcOffset = date.getTimezoneOffset();
  console.log(utcOffset);
  return (
    //Basic Calendar.
    <div>
      <h1>{`Current Date: ${value}`}</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value = {value} onChange={(newValue) => setValue(newValue)}/>
      </LocalizationProvider>
    </div>

  );
}