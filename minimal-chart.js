$('#container').highcharts({
    chart: {
        plotBackgroundColor: 'white', //not needed
        type: 'line',
        showAxes: false
    },
    title: {text: null},
    exporting: false,
    credits: {enabled: false},
    xAxis: {
        categories: [1,2],
        lineColor: 'transparent',
        labels: {
            enabled: false   
        },
        tickColor: '#fff'
    },
    yAxis: {
        plotLines: [{
            value: 0,
            width: 1,
            color: '#fff'
        }],
        title: {
            enabled: false
        },
        labels: {
            enabled:false
        },
        min: 0,
        gridLineWidth: 0,
        minorGridLineWidth: 0
    },
    series: [{
        data: ['test1','test2']
    }],
    plotOptions: {
        line: {
            color: 'gray',
            marker: {
                symbol: 'circle',
                enabled: false
            }
        },
        series: {
            animation: {
                duration: 2500
             }
        }
    },
    tooltip: {
        enabled: true
    },
    legend: {enabled: false}
});