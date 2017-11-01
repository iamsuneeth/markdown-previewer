import React, { Component } from 'react';
import marked from 'marked';
import './App.css';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Toggle from 'material-ui/Toggle';

const MarkDown = props => {
  return(
    <div dangerouslySetInnerHTML={{__html:marked(props.text,{sanitize:true,gfm:props.gfm})}}>
    </div>
  )
  
}


class App extends Component {

  constructor(props){
    super(props);
    this.state={
      text:'',
      gfm:false,
      minHeight:window.innerHeight*0.5
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span className="App-title">MarkDown Previewer</span>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
            <Card style={{minHeight:this.state.minHeight,marginBottom:'20px'}}>
              <CardHeader
                title="Type Here"
                subtitle={this.state.gfm?"github flavored markdown":"markdown"}
              />
              <CardText>
              <Toggle
                toggled={this.state.gfm}
                onToggle={()=>this.setState({gfm:!this.state.gfm})}
                labelPosition="right"
                label="Github flavored markdown"
              />
              <TextField
              style={{textAlign:'left'}}
              fullWidth={true}
              multiLine={true}
              rows={Math.floor(this.state.minHeight*0.6/24)}
              onChange={(event) => this.setState({text:event.target.value})}
              />
              </CardText>
            </Card>
            </div>
            <div className='col-sm'>
            <Card style={{minHeight:this.state.minHeight,marginBottom:'20px'}}>
              <CardHeader
                title="Preview"
                subtitle="HTML"
              />
              <CardText>
                {<MarkDown text={this.state.text} gfm={this.state.gfm}/>}
              </CardText>
            </Card>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
