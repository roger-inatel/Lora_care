import { useState, useEffect } from 'react';
import './Notification.css';

export default function Notification({ message, duration }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration || 3000);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!visible) return null;

  return (
    <div className="notification">
      {message}
    </div>
  );
}
