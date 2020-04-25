import React, { Component } from 'react';

class Editable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.defaultText,
      editing: false
    };

    this.getPlainView = this.getPlainView.bind(this);
    this.getEditView = this.getEditView.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggleEdit() {
    const { editing } = this.state;

    this.setState({
      editing: !editing
    });
  }

  getPlainView() {
    const { text } = this.state;

    return <p onDoubleClick={this.toggleEdit}>{text}</p>;
  }

  submit(e) {
    if (e.target.value === "") {
      this.toggleEdit();
      this.setState({
        text: this.props.defaultText
      });
      
      alert('Board item must not be empty');
      return;
    }
    
    this.props.update(e.target.value);
    this.toggleEdit();
  }

  getEditView() {
    const { text } = this.state;
    const { className } = this.props;

    return (
      <div>
        <textarea
          autoFocus
          className={className}
          onBlur={this.submit}
          value={text}
          onChange={(e) => this.setState({text: e.target.value})}
        >
        </textarea>
       <button 
         className="button button--action"
         onClick={this.submit}
       >
         Done
       </button>
      </div>
    );
  }

  render() {
    const { editing } = this.state;

    return editing 
      ? this.getEditView() 
      : this.getPlainView();
  }
}

export default Editable;
