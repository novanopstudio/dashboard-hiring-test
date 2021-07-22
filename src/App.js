import { useState } from 'react';
import ChartSection from './components/ChartSection/ChartSection';
import TableSection from './components/TableSection/TableSection';
import './styles/styles.scss';
import NoInternetModal from './components/NoInternetModal/NoInternetModal';
import CookiesBanner from './components/CookiesBanner/CookiesBanner';



function App() {
  const [mode, setMode] = useState('online')

  window.addEventListener('offline', (event) => {
    setMode('offline');
  });

  console.log(mode)

  return (
    <div className="main-container">
      <CookiesBanner />
      <div className="wrapper-container">
        <div className="main-header">
          <h1 className="title">Charts and Table Visualization</h1>
        </div>
        <ChartSection />
        <TableSection />
      </div>
      {mode === 'offline' && <NoInternetModal setMode={setMode} />}
    </div>
  );
}

export default App;
