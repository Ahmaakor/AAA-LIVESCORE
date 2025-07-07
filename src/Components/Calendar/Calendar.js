import React, { useState} from 'react';
import styles from './Calendar.module.css';

function Calendar({ onDateChange }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [calendarMonth, setCalendarMonth] = useState(today);
  const [chartVisible, setChartVisible] = useState(false);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day) => {
    const picked = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
    if (isFutureLimitExceeded(picked)) return;

    setSelectedDate(picked);
    if (onDateChange) onDateChange(picked);
    setChartVisible(false);
  };

  const handlePrevChartMonth = () => {
    const newMonth = new Date(calendarMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCalendarMonth(newMonth);
  };

  const handleNextChartMonth = () => {
    const newMonth = new Date(calendarMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCalendarMonth(newMonth);
  };

  const handlePrevDate = () => {
    const prevDate = new Date(selectedDate);
    prevDate.setDate(prevDate.getDate() - 1);
    setSelectedDate(prevDate);
    if (onDateChange) onDateChange(prevDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(selectedDate);
    nextDate.setDate(nextDate.getDate() + 1);
    if (isFutureLimitExceeded(nextDate)) return;

    setSelectedDate(nextDate);
    if (onDateChange) onDateChange(nextDate);
  };

  const isFutureLimitExceeded = (date) => {
    const oneYearLater = new Date(today);
    oneYearLater.setFullYear(today.getFullYear() + 1);
    return date > oneYearLater;
  };

  const renderDays = () => {
    const totalDays = daysInMonth(calendarMonth.getMonth(), calendarMonth.getFullYear());
    const days = [];
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), i);
      const isSelected =
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === calendarMonth.getMonth() &&
        selectedDate.getFullYear() === calendarMonth.getFullYear();

      const disabled = isFutureLimitExceeded(date);

      days.push(
        <span
          key={i}
          className={`${styles.day} ${isSelected ? styles.active : ''} ${disabled ? styles.disabled : ''}`}
          onClick={() => !disabled && handleDayClick(i)}
        >
          {i}
        </span>
      );
    }
    return days;
  };

  const getDisplayLabel = () => {
    const s = selectedDate.toDateString();
    const t = today.toDateString();

    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (s === t) return "Today";
    if (s === yesterday.toDateString()) return "Yesterday";
    if (s === tomorrow.toDateString()) return "Tomorrow";

    return selectedDate.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className={styles.calendar}>
      <div className={styles.dateDisplay}>
        <span className={styles.prev} onClick={handlePrevDate}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
        <div className={styles.date}>{getDisplayLabel()}</div>
        <span className={styles.next} onClick={handleNextDate}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </div>

      <div className={styles.selectDate} onClick={() => setChartVisible(!chartVisible)}>
        <ion-icon name="calendar-clear-outline"></ion-icon>
        <span className={styles.dateNum}>{selectedDate.getDate()}</span>

        {chartVisible && (
          <div className={styles.calendarChart}>
            <div className={styles.calsHead}>
              <p>
                {calendarMonth.toLocaleString('default', { month: 'long' })}{' '}
                {calendarMonth.getFullYear()}
              </p>
              <span className={styles.back} onClick={handlePrevChartMonth}>
                <ion-icon name="chevron-back-outline"></ion-icon>
              </span>
              <span className={styles.forward} onClick={handleNextChartMonth}>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </span>
            </div>
            <div className={styles.daysGrid}>{renderDays()}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
