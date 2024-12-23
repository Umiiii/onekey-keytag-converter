'use client';
import { useState, useEffect } from 'react';

export default function NetworkDetector() {
  const [isOnline, setIsOnline] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch('https://www.bing.com', { mode: 'no-cors' });
        setIsOnline(true);
      } catch (error) {
        setIsOnline(false);
      }
    };

    checkConnection();
    const interval = setInterval(checkConnection, 10000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, []);

  if (!isOnline) {
    return (
      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
        Safe: You are offline. It's safe to convert your mnemonic.
      </div>
    );
  }

  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
      Unsafe: Your network is connected. It is not safe to convert your mnemonic.
    </div>
  );
} 