import {Component} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
        const {title} = this.state.movie;
        if(title){
            this.props.movie(this.state.movie);
            toast.success(title +' has been added to the library');
        }else{
            toast.error('Please make sure your input is correct');
        }
        
    }
    render() {

        return (
        <><ToastContainer />
    <div className="modal">
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
        </section>
    </div>
        </>
        );
    }
}
 
export default Form;