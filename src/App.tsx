// React imports
import { useState }     from 'react'

// Component imports
import PageHeader       from './components/PageHeader'
import MathChooseNumber from './components/MathChooseNumber'
import MathCard         from './components/MathCard'

// Context imports
import MathContext      from './context'

export default function App() {
  const [num, setNum] = useState(1);
  return (
		<main className="d-flex flex-column flex-md-row">
      <MathContext.Provider value={{ num, setNum }}>
        <div className="header">
          <PageHeader />
          <MathChooseNumber />
        </div>
        <MathCard />
      </MathContext.Provider>
		</main>
  );
};
