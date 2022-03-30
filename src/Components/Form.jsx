import {Component} from 'react';
import movies from '../movies';
class Form extends Component {
    
    state = {

    movie: {}
        
    } 

    inputHandler(event){
        const title = event.target.value;
        this.setState({movie:{title, status:false}});
    }

    submitHandler(event){
        event.preventDefault();
        movies.push(this.state.movie)
        alert('New Book Submitted');
    }
    render() {
        console.log(movies)
        return (
        <section className="header">
            <div className="form">
                <h1 className="form_title">Add your Movie</h1>
                <div className="form_content"> 
                <form method="get" onSubmit={this.submitHandler.bind(this)}>
                <input type="text" name="title" placeholder='Add your movie' onChange={this.inputHandler.bind(this)}/>
                <button className="button" type="submit">Add Movie</button>
                </form>
                </div>
            </div>

            <div className="form">
                <h1 className="form_title">Add your Movie</h1>
                <div className="form_content"> 
                <input type="text"  placeholder='Add your movie'/>
                <input type="text"  placeholder='Add your movie'/>
                <button className="button" type="button">Add Movie</button>
                </div>
            </div>

        </section>
        );
    }
}
 
export default Form;