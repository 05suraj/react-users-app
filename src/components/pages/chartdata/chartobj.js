

const configObj = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Laptop market shares in January, 2021 '
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Dell',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'HP',
            y: 11.84
        }, {
            name: 'APPLE',
            y: 10.85
        }, {
            name: 'ASUS',
            y: 4.67
        }, {
            name: 'MI',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
}

export default configObj