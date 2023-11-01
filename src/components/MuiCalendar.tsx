import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
/**
 * dayjs -> a js lib for parsing, validating, and manipulating, and formating dates.
 * you can - add, substract and perform operations on date and time.
 *  - format and parseing, format date into string or parse string into date object { now = dayjs(), now.add(7, 'days'), now.format('YYY-MM-DD')}
 *  - calculate and display relative time. dayjs().fromNow()
 *  - immutatble date object
 *  - light weight
 * @returns 
 */

export default function BasicDateCalendar() {
    const [value,setValue] = React.useState<Dayjs | null> (dayjs('2022-04-17'));

  return (
    <React.Fragment>
        <h2>Basic Calendar</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
        </LocalizationProvider>
        <h2>Controlled vs Uncontrolled</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateCalendar', 'DateCalendar']}>
                <DemoItem label="Uncontrolled calendar">
                <DateCalendar defaultValue={dayjs('2022-04-17')} />
                </DemoItem>
                <DemoItem label="Controlled calendar">
                <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                </DemoItem>
            </DemoContainer>
        </LocalizationProvider>
    </React.Fragment>


    //uncontrolled vs controlled value.
    
  );
}