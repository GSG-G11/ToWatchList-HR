import {Component} from 'react';
import movies from '../movies';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        const {title} = this.state.movie;
        if(title){
            movies.push(this.state.movie);
            toast.success(title +' has been added to the library');
        }else{
            toast.error('Please make sure your input is correct');
        }
        
    }
    render() {
        return (
<><ToastContainer />
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
        </>
        );
    }
}
 
export default Form;