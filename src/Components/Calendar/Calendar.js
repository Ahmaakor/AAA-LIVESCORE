import React, { useState, useEffect, useRef } from 'react';
import styles from './Calendar.module.css';

function Calendar({ onDateChange }) {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);
  const [calendarMonth, setCalendarMonth] = useState(today);
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef();

  // Close chart only when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        chartRef.current &&
        !chartRef.current.contains(e.target) &&
        !e.target.closest(`.${styles.selectDate}`)
      ) {
        setChartVisible(false);
      }
    };

    // Delay event binding slightly
    if (chartVisible) {
      const timeout = setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeout);
        document.removeEventListener('click', handleClickOutside);
      };
    }
  }, [chartVisible]);

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  const handleDayClick = (day) => {
    const picked = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth(), day);
    if (isFutureLimitExceeded(picked)) return;

    setSelectedDate(picked);
    if (onDateChange) onDateChange(picked);
    setChartVisible(false);
  };

  const handlePrevChartMonth = () => {
    const prev = new Date(calendarMonth);
    prev.setMonth(prev.getMonth() - 1);
    setCalendarMonth(prev);
  };

  const handleNextChartMonth = () => {
    const next = new Date(calendarMonth);
    next.setMonth(next.getMonth() + 1);
    setCalendarMonth(next);
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

  const renderDays = () => {
    const year = calendarMonth.getFullYear();
    const month = calendarMonth.getMonth();
    const totalDays = daysInMonth(month, year);
    const firstDayOfWeek = new Date(year, month, 1).getDay(); // Sunday = 0

    const days = [];

    // Empty slots before the first day
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<span key={`empty-${i}`}></span>);
    }

    // Actual days
    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      const isSelected =
        selectedDate.getDate() === i &&
        selectedDate.getMonth() === month &&
        selectedDate.getFullYear() === year;

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

  const weekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

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
          <div className={styles.calendarChart} ref={chartRef}>
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

            <div className={styles.daysGrid}>
              {weekdays.map((day, index) => (
                <strong key={`week-${index}`}>{day}</strong>
              ))}
              {renderDays()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendar;
