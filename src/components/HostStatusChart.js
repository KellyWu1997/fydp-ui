import './HostStatusChart.css'

import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let statusData = require('../statusData.json');

class HostStatusChart extends Component {
    constructor() {
		super();
		this.state = {
            currentData: statusData[0]
        };
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
    }
	
	componentDidMount() {
        setInterval(() => {
            let random = Math.floor(Math.random() * statusData.length);
            let data = statusData[random];
            this.setState({
                currentData: data
            })
        }, 2000)
    }
	
	
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
    }
    
	render() {
		let { currentData } = this.state;
		let dataPoints_occupied = [];
		let dataPoints_current= [];
		let dataPoints_available = [];


		currentData.map((host)=> {
			let point_occupied = {};
			point_occupied['x'] = parseInt(host.id);
			point_occupied['y'] = parseInt(host.num_jobs);
			dataPoints_occupied.push(point_occupied);

			let point_current = {};
			point_current['x'] = parseInt(host.id);
			point_current['y'] = parseInt(host.num_jobs_running);
			dataPoints_current.push(point_current);

			let point_available = {};
			point_available['x'] = parseInt(host.id);
			point_available['y'] = host.max_jobs - host.num_jobs;
			dataPoints_available.push(point_available);
		})

		console.log(dataPoints_current)
		

		const options = {
			animationEnabled: true,
			theme: "light2",
			axisX: {
				prefix: "Host "
			},
			axisY: {
				prefix: ""
			},
			toolTip: {
				shared: true
			},
			legend:{
				cursor: "pointer",
				itemclick: this.toggleDataSeries
			},
			data: [{
				type: "stackedBar",
				name: "Occupied job slots",
				showInLegend: "true",
				xValueFormatString: "Host",
                yValueFormatString: "",
                color: "#C5C6C7",
				dataPoints: dataPoints_occupied
			},
			{
				type: "stackedBar",
				name: "Currently running jobs",
				showInLegend: "true",
				xValueFormatString: "",
                yValueFormatString: "",
                color: "#FFE4B5",
				dataPoints: dataPoints_current
			},
            {
				type: "stackedBar",
				name: "Available job slots",
				showInLegend: "true",
				xValueFormatString: "",
                yValueFormatString: "",
                color: "#45A29E",
				dataPoints: dataPoints_available
			}
			]}
			console.log(options.data[0].dataPoints)
		return (
			<div className="HostStatusChart">
				<CanvasJSChart options = {options}/>
			</div>
		);
	}
}

export default HostStatusChart;