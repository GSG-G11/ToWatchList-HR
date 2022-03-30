import '../css/CardList.css';
import ToWatchCard from './ToWatchCard';
import movies from '../movies.js'

function ToWatch () {
  return (
      <div className="left-card-side">
        <h3>To Watch</h3>
        {movies.map(element => (<ToWatchCard key={element.title} title={element.title} status={element.status}/>))}
      </div>
  );
};

export default ToWatch;