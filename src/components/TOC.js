import React, { Component} from 'react';

class TOC extends Component {
  
  render() {
      const data = this.props.data;
      let i =0;
      let list = [];
      while(i<data.length) {
        list.push(<li key={data[i].id}><a href={"/content/" + data[i].id} onClick={function(e){
          e.preventDefault();
          this.props.onChangePage();
        }}>{data[i].title}</a></li>);
        i++;
      }
      return (
        <nav>
              <ul>
                  {list}
              </ul>
          </nav>
      )
    }
  }

  export default TOC;