import React from 'react';
let fruit;
class Fruit extends React.Component{
	show(){
	let key=this;
	console.log(key);
	let clickedfruit=Object.values(fruit)[key].content;
	console.log(clickedfruit);
	$('.fruitdetail').empty();
	let detail=$('<p></p>').text(clickedfruit);
	let img=$('<img/>').attr('src',Object.values(fruit)[key].src)
	$('.fruitdetail').append(img).append(detail);


	}

	render(){
	let array=[];
	fruit=this.props.child;
	if(fruit!=undefined){
	console.log(Object.values(fruit)[0].content);
	let fruitKey=Object.keys(fruit);
	console.log(fruitKey)
	for(let i=0;i<fruitKey.length;i++){
	let handle=this.show.bind(i);
     array.push(<li key={fruitKey[i]} onClick={handle}>{fruitKey[i]}</li>)
	}
	let initialdetail=Object.values(fruit)[0].content;
	let value=$('<p></p>').text(initialdetail);
	let img=$('<img/>').attr('src',Object.values(fruit)[0].src)
	$('.fruitdetail').append(img).append(value);
	
	}
	
	return(
	<section>
	<ul className="fruitlist">
	{array}
	</ul>
	<div className="fruitdetail"></div>
	</section>
	);
	}
}
export default Fruit;