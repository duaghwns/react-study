import React, { Component} from 'react';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject  from './components/Subject';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      subject:{title:'WEB', sub:'World Wide Web!'},
      welcome:{title:'Welcome', desc:'Hello, React!'},
      content:[
        {id:1, title: 'HTML', desc: 'HTML is for information'},
        {id:2, title: 'CSS', desc: 'CSS is for design'},
        {id:3, title: 'JavaScript', desc: 'JavaScript is for interactive'},
      ]
    }
  }
    
    render() {
     console.log(`App render`);
    let _title, _content = null;

    if(this.state.mode === 'welcome'){
      _title = 'Welcome';
      _content = 'Welcome to React!';
    } else if(this.state.mode === 'read'){
      _title = this.state.content[0].title;
      _content = this.state.content[0].desc;
    }
    return (
      <div className="App">
      {/*<Subject 
        title={this.state.subject.title} 
        sub={this.state.subject.sub}>
      </Subject>*/}
      <header>
        <h1>
          <a href="/" onClick={function(e) {
            e.preventDefault();
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            });
          }.bind(this)}>
            {this.state.subject.title}
          </a>
        </h1>
        {this.state.subject.sub}
      </header>
      <TOC data={this.state.content}></TOC>
      <Content title={_title} desc={_content}></Content>
    </div>
    );
  }
}

export default App;
