// var table = d3.select('#metaTable')

d3.json('/database').then(function(data) {
    console.log(data)
})