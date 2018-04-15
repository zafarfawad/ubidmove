import "./style.css";


const React = require('react')
const ReactTags = require('react-tag-autocomplete')


 
const Tags = (props) => {
    return (
      <ReactTags
        // tags={this.state.tags}
        tags={props.tags}
        suggestions={props.suggestions}
        handleDelete={props.handleDelete}
        handleAddition={props.handleAddition} 
        handleInputChange = {props.handleInputChange} />
    )
  };


 
export default Tags;