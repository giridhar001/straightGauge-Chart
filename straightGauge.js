var clientWidth = document.getElementById('chart').clientWidth;
var width = clientWidth
var height = clientWidth*0.5 



var margin={top:20,right:20,bottom:20,left:20}

width = width-margin.right-margin.left
height = height-margin.top-margin.bottom 

var totalLength = 50
var value = 40

// var showLable = 'absoluteValue' //if we want to show the percentage otherwise actualValue/totalValue
var showLable = 'percentage'

var outerRectangleWidth = width*0.5
var outerRectangleHeight = outerRectangleWidth * 0.10
// console.log(width)
// console.log(height)
// var totalLength = outerRectangleWidth
// var value = 40

var svg = d3.select('#chart')
			.append('svg')
			.attr('width',width)
			.attr('height',height)

var g = svg.append('g')
			.attr('transform','translate('+(width/4)+','+height/4+')')

var startX=0
var startY=0

var hollowRect = g.append('rect')
			.attr("rx", 6)
    		.attr("ry", 6)
			.attr('x',startX)
			.attr('y',startY)
			.attr('width',outerRectangleWidth)
			.attr('height',outerRectangleHeight)
			.attr('fill','none')
			.attr('stroke','black')
			.attr('stroke-width',2)

var innerRectangleWidth = outerRectangleWidth
var innerRectangleHeight = outerRectangleHeight*0.95		

value = (value > totalLength) ? totalLength : value ;
value = (value < 0)? 0:value

if(value > 0){
var fillRect = g.append('rect')
				.attr("rx", 6)
    			.attr("ry", 6)
				.attr('x',startX+outerRectangleWidth*.01)
				.attr('y',startY+outerRectangleHeight*.1)
				.attr('width',((value/totalLength)*innerRectangleWidth)-outerRectangleWidth*.02)
				.attr('height',(outerRectangleHeight - outerRectangleHeight*.2))
				.attr('fill','#02435C')
}



if (showLable == 'percentage'){
var text = g.append('text')
			.attr('class','text1')
			.attr('x',outerRectangleWidth+(outerRectangleWidth * 0.05))
			.attr('y',outerRectangleHeight/1.7)
			.text((value/totalLength)*100 +'%')

}
else if(showLable == 'absoluteValue'){
	var text = g.append('text')
				.attr('class','text1')
				.attr('x',outerRectangleWidth+(outerRectangleWidth * 0.05))
				.attr('y',outerRectangleHeight/1.7)
				.text(value+'/'+totalLength)
}