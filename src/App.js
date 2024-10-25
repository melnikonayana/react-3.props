import './App.css';
import Stars from './films/Stars';
import Listing from './listing/Listing';
import data from './listing/data';

function App() {
  return (
      <div>
        <div className="task-1">
          <Stars count={1} />
          <Stars count={2} />
          <Stars count={3} />
          <Stars count={4} />
          <Stars count={5} />
        </div>
        <div className="task-2">
          <Listing items={data} />
        </div>
      </div>
  );
}

export default App;
