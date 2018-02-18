import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      seen: 'visible'
    };
  }

  handlePoem = event => {
    this.setState({
      poem: event.target.value,
    })

    let poemArray = event.target.value.split('\n')

    if (poemArray.length === 3) {
      let line1 = poemArray[0].split(' ')
      let line2 = poemArray[1].split(' ')
      let line3 = poemArray[2].split(' ')


      line1 = line1.filter(word => {
        return word !== ''
      })

      line2 = line2.filter(word => {
        return word !== ''
      })

      line3 = line3.filter(word => {
        return word !== ''
      })

      if (line1.length === 5 && line2.length === 3 && line3.length === 5) {
        this.setState({
          seen: 'hidden'
        })
      } else {
        console.log("FAIL")
      }
    } else {
      console.log("FAIL")
    }
  }



  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.poem} onChange={this.handlePoem}/>
        <div id="poem-validation-error" style={{ color: "red", visibility: this.state.seen }}>
          This poem is not written in the right structure!
        </div>
      </div>
    );
  }
}

export default PoemWriter;


//
// Open the components/PoemWriter.js file.
// You'll find one <textarea> in this component. Make this a controlled component. Recall that controlled components in React render dynamically based on some piece of props or state. Its value should be saved in the components state.
// You'll also find an error element in the markup. This element should only be shown if the poem is not valid.
// The rules for a valid poem structure are as follows:
// The poem has three lines.
// The first line has five words.
// The second line has three words.
// The third line has five words.
// Be sure to account for users accidentally adding too many spaces! This means that ' I am a furry dog ' is not a valid first line of the poem.
// Make sure the error message is still showing if the user deletes all of their content from the textarea box
