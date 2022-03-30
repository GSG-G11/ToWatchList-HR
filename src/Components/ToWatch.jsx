import '../css/CardList.css';
import Card from './Card';

const ToWatch = ({moviesList, change}) => {
  return (
    <div className="card-side">
    <h3 className='headers'>To Watch</h3>
    {moviesList.filter(data => data.status === false).map(element => ( < Card key={element.title} change={change} title={element.title} status={element.status}/> ) )}
  </div>
  );
};

export default ToWatch;