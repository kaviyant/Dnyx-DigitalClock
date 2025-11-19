import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      background: '#000',
      fontFamily: 'Arial, sans-serif'
    },
    content: {
      textAlign: 'center'
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '30px'
    },
    clockBox: {
      background: '#000',
      border: '2px solid #00d4ff',
      borderRadius: '10px',
      padding: '30px 40px'
    },
    clock: {
      fontSize: '80px',
      fontFamily: 'monospace',
      fontWeight: 'bold',
      color: '#00d4ff',
      letterSpacing: '5px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Digital Clock</h1>
        <div style={styles.clockBox}>
          <div style={styles.clock}>
            {hours}:{minutes}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
