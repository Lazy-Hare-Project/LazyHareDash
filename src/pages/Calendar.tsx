import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
export default function BasicDateCalendar() {
  const date = new Date();

  const UTC : number = date.getTimezoneOffset();
  const [value,setValue] = React.useState<Dayjs | null> (dayjs()); //set it to now

  return (
    //Basic Calendar.
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker orientation='landscape' value = {value} 
      onAccept={newVal => setValue(newVal)}/>
      </LocalizationProvider>
      <h2>{`${value}`}</h2>
      <h2> TODO: Implements SelectedDateDetail and Create Event</h2>
    </React.Fragment>

  );
}