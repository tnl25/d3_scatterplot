var data = [30, 86, 168, 281, 303, 365]

var scale = d3.scale.linear()
    .domain([0,500])
    .range([0,300])

d3.select('.chart')
	.selectAll('div')
	.data(data)
	.enter()
	.append('div')
	.style('width', function(d) { return scale(d) * 2 + 'px' })
	.text(function(d) { return '$ ' + d })