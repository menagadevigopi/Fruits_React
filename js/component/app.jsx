import React from 'react';
import Fruit from './fruit.jsx';
import Header from './fruithead.jsx';
let parent;
 class App extends React.Component{
constructor(){
		super();
		this.state= {
			data:"",
			dataKey:""	
				
	};
	};

	componentDidMount() {
	    $.ajax({
	      url: './data1.json',
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	        parent=data;
	        
	       this.setState({dataKey:Object.keys(data)})
	       
          
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)

	    })
	    
	  }

 render(){
 return(
 
 <div className="wrapper">
<Header/>
<Fruit child={parent} />
</div>
 );
 }
 }
 export default App;