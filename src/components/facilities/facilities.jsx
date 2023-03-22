import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { getFacilitiesChartData } from "../../config/services";


export const FacilitiesChart = () => {
    const [data, setData] = useState([])
    const [chartData, setchartData] = useState({})

    useEffect(() => {
        getFacilitiesChartData().then(res =>
            setData(res.data)
        )
    }, [])

    useEffect(() => {
        setchartData({
            series: [{
                name: 'Books',
                type: 'column',
                data: data.map(x => x.books)
            }, {
                name: 'Titles',
                type: 'column',
                data: data.map(x => x.titles)
            },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'bar',
                    stacked: false
                },
                dataLabels: {
                    enabled: true,
                    orientation: 'horizontal',
                    position: 'top',
                    offsetY: -12,
                    background:{
                        enabled:false
                    }
                    // formatter: function (val) {
                    //     return val
                    // }
                },
                stroke: {
                    width: [1, 1]
                },
                title: {
                    text: 'Central Library - Details Of Books Available (Department wise)',
                    align: 'center',
                    offsetX: 0
                },
                xaxis: {
                    categories: [],
                    labels: {
                        formatter: function (val) {
                            return data.filter(x => x.id == val).map(y => y.dept).toString()
                        },
                        style: {
                            colors: '#000000',
                        }
                    },
                    type: 'numeric',
                    tickAmount: 'dataPoints'
                },
                yaxis: [
                    {
                        seriesName: 'Titles',
                        opposite: false,
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: '#008FFB',
                            }
                        },
                        title: {
                            text: "Books",
                            style: {
                                color: '#008FFB',
                            }
                        },
                        tooltip: {
                            enabled: true
                        }
                    },
                    {
                        seriesName: 'Titles',
                        opposite: true,
                        axisTicks: {
                            show: false,
                        },
                        axisBorder: {
                            show: false,
                        },
                        labels: {
                            style: {
                                colors: '#00E396',
                            }
                        },
                        title: {
                            text: "Titles",
                            style: {
                                color: '#00E396',
                            }
                        },
                    }
                ],
                tooltip: {
                    // fixed: {
                    //     enabled: true,
                    //     position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                    //     offsetY: 30,
                    //     offsetX: 60
                    // },
                    enabled:true,
                   
                },
                legend: {
                    position: 'top',
                    horizontalAlign: 'center',
                    offsetX: 0,
                    offsetY: 0,
                    itemMargin: {
                        horizontal: 25,
                        vertical: 25
                    },
                }
            }
        })
    }, [data])


    return (
        <div id="chart" className="mt-5">
            {(!!chartData.options && !!chartData.series) && <ReactApexChart options={chartData.options} series={chartData.series} height={350} />}
        </div>
    );
}