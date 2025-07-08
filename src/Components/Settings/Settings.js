import React, { useEffect, useState, useRef } from 'react';
import styles from './Settings.module.css';
import { timezones } from '../../Data/timezones';

// Convert "UTC +02:30" to 2.5, "UTC -01:00" to -1
const parseTimezoneOffset = (tzString) => {
  const match = tzString.match(/UTC ([+-])(\d{2}):(\d{2})/);
  if (!match) return 0;
  const sign = match[1] === '+' ? 1 : -1;
  const hours = parseInt(match[2]);
  const minutes = parseInt(match[3]);
  return sign * (hours + minutes / 60);
};

// Get browser timezone as "UTC +01:00"
const getBrowserTimezoneString = () => {
  const offset = -new Date().getTimezoneOffset(); // in minutes
  const hours = Math.floor(Math.abs(offset) / 60);
  const minutes = Math.abs(offset) % 60;
  const sign = offset >= 0 ? '+' : '-';
  return `UTC ${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
};

// Public utility to get current numeric offset
export const getUserTimezoneOffset = () => {
  const auto = localStorage.getItem('autoTimezone') === 'true';
  if (auto) {
    return parseFloat((-new Date().getTimezoneOffset() / 60).toFixed(2));
  } else {
    const stored = localStorage.getItem('userTimezone');
    return parseFloat(parseTimezoneOffset(stored));
  }
};

function Settings() {
  const [selectedTimezone, setSelectedTimezone] = useState('');
  const [isAutoDetect, setIsAutoDetect] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Load timezone on first render
  useEffect(() => {
    const savedTz = localStorage.getItem('userTimezone');
    const auto = localStorage.getItem('autoTimezone') === 'true';

    if (savedTz && !auto) {
      setSelectedTimezone(savedTz);
      setIsAutoDetect(false);
    } else {
      const browserTz = getBrowserTimezoneString();
      setSelectedTimezone(browserTz);
      setIsAutoDetect(true);
      localStorage.setItem('userTimezone', browserTz);
      localStorage.setItem('userTimezoneOffset', parseTimezoneOffset(browserTz));
      localStorage.setItem('autoTimezone', 'true');
    }
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Apply selected settings
  const handleApply = () => {
    const offset = parseTimezoneOffset(selectedTimezone);
    localStorage.setItem('userTimezone', selectedTimezone);
    localStorage.setItem('userTimezoneOffset', offset);
    localStorage.setItem('autoTimezone', isAutoDetect.toString());
    alert(`Timezone set to ${isAutoDetect ? 'Automatic' : selectedTimezone} (Offset: ${offset})`);
  };

  // Handle dropdown selection
  const handleSelect = (tz) => {
    setSelectedTimezone(tz);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Settings</h2>

      <label className={styles.label}>Timezone</label>

      <div
        className={`${styles.customDropdown} ${isAutoDetect ? styles.disabled : ''}`}
        onClick={() => !isAutoDetect && setDropdownOpen(!dropdownOpen)}
        ref={dropdownRef}
        tabIndex={isAutoDetect ? -1 : 0}
      >
        <span className={styles.selectedValue}>
          {selectedTimezone || 'Select timezone'}
        </span>
        <span className={styles.dropdownArrow}>&#9662;</span>

        {dropdownOpen && !isAutoDetect && (
          <ul className={styles.dropdownList}>
            {timezones.map((tz, i) => (
              <li
                key={i}
                className={`${styles.dropdownOption} ${tz === selectedTimezone ? styles.selected : ''}`}
                onClick={() => handleSelect(tz)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleSelect(tz)}
                tabIndex={0}
              >
                {tz}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.switchWrapper}>
        <label>
          <input
            type="checkbox"
            checked={isAutoDetect}
            onChange={(e) => setIsAutoDetect(e.target.checked)}
          />
          <span className={styles.switchLabel}>Detect Timezone Automatically</span>
        </label>
      </div>

      <button onClick={handleApply} className={styles.button}>Apply</button>
    </div>
  );
}

export default Settings;
