import {Component} from 'react';
class Form extends Component {
    // state = {  } 
    render() { 
        return (
            <section className="header">
            <div className="form">
                <h1 className="form_title">Add your Movie</h1>
                <div className="form_content"> 
                <input type="text" name="title" placeholder='Add your movie'/>
                <input type="text" name="title" placeholder='Add your movie'/>
                <button className="button" type="button">Add Movie</button>
                </div>
            </div>
            <div className="form">
                <h1 className="form_title">Add your Movie</h1>
                <div className="form_content"> 
                <input type="text" name="title" placeholder='Add your movie'/>
                <input type="text" name="title" placeholder='Add your movie'/>
                <button className="button" type="button">Add Movie</button>
                </div>
            </div>

        </section>
        );
    }
}
 
export default Form;