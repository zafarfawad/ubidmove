import "./style.css";


const React = require('react')
const ReactTags = require('react-tag-autocomplete')

 
// class Tags extends React.Component {
//   constructor (props) {
//     super(props)
 
//     this.state = {
//       tags: [
//         { id: 1, name: "Loading/Unloading" },
//         { id: 2, name: "All Apartment Sizes" },
//       ],
//       suggestions: [
//         { id: 3, name: "Packing" },
//         { id: 4, name: "Unpacking" },
//         { id: 5, name: "Moving" },
//         { id: 6, name: "State to State" },
//         { id: 7, name: "City to City" },
//         { id: 8, name: "One Bed Apartment"},
//         { id: 9, name: "Two Bed Apartment"},
//         { id: 10, name: "Three Bed Apartment" },
//         { id: 11, name: "Houses" },
//         { id: 12, name: "Piana Moving" },
//       ]
//     }
//   }
 
//   handleDelete (i) {
//     const tags = this.state.tags.slice(0)
//     tags.splice(i, 1)
//     this.setState({ tags })
//   }
 
//   handleAddition (tag) {
//     const tags = [].concat(this.state.tags, tag)
//     this.setState({ tags })
//   }
 
const Tags = (props) => {
    return (
      <ReactTags
        // tags={this.state.tags}
        tags={props.tags}
        suggestions={props.suggestions}
        handleDelete={props.handleDelete}
        handleAddition={props.handleAddition} />
    )
  };


 
export default Tags;