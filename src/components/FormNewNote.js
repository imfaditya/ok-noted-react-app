import React from "react";

class FormNewNote extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  onTitleChangeHandler(event){
    let title = event.target.value;

    if (title.length > 5) {
      title.slice(1);
    }

    
    this.setState(() => {
      return {
        title,
      }
    })
    console.log(this.state.title)
  }

  onBodyChangeHandler(event){
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitHandler(event){
    event.preventDefault();
    this.props.onAddNoteHandler(this.state);
    this.props.toggleAddNewNote();
  }

  closeForm(event){
    event.preventDefault();
    this.props.toggleAddNewNote();
  }

  render () {
    return (
      <div className="overlay">
          <form className="form-new-note__card" onSubmit={this.onSubmitHandler}>
            <input className="form-new-note__input-title" placeholder="Title..." type="text" value={this.state.title} onChange={this.onTitleChangeHandler}/>
            <textarea placeholder="Write here..." className="form-new-note__input-body" rows={10} value={this.state.body} onChange={this.onBodyChangeHandler}></textarea>
            <div className="form-new-note__button">
              <button className="btn button__add-note" type="submit">Add Note</button>
              <button className="btn button__cencel" type="reset" onClick={this.closeForm}>Cencel</button>
            </div>
          </form>
      </div>
    )
  }
}

export default FormNewNote;