import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CanvasJSReact from '../canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class HostStatusChart extends Component {
    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
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
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Host Usage Overview"
			},
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
				dataPoints: [
					{ x: 1, y: 56 },
					{ x: 2, y: 45 },
					{ x: 3, y: 71 },
					{ x: 4, y: 41 },
					{ x: 5, y: 60 },
					{ x: 6, y: 75 },
					{ x: 7, y: 98 }
				]
			},
			{
				type: "stackedBar",
				name: "Currently running jobs",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 56 },
					{ x: 2, y: 45 },
					{ x: 3, y: 71 },
					{ x: 4, y: 41 },
					{ x: 5, y: 60 },
					{ x: 6, y: 75 },
					{ x: 7, y: 98 }
				]
			},
            {
				type: "stackedBar",
				name: "Available job slots",
				showInLegend: "true",
				xValueFormatString: "",
				yValueFormatString: "",
				dataPoints: [
					{ x: 1, y: 56 },
					{ x: 2, y: 45 },
					{ x: 3, y: 71 },
					{ x: 4, y: 41 },
					{ x: 5, y: 60 },
					{ x: 6, y: 75 },
					{ x: 7, y: 98 }
				]
			}
            ]}
		return (
		<div>
			<CanvasJSChart options = {options}
				// onRef={ref => this.chart = ref}
			/>
		</div>
		);
	}
}

export default HostStatusChart;