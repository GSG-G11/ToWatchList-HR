import '../css/CardList.css';
import Card from './Card';

const Finished = ({moviesList, change}) => {
  return (
    <div className="card-side">
    <h3 className='headers'>Finished</h3>
    {moviesList.filter(data => data.status === true).map(element => ( < Card key={element.title} change={change} title={element.title} status={element.status}/> ) )}
  </div>
  );
};

export default Finished;