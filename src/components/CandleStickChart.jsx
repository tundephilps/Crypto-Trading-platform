import React from "react";
import {
  ChartCanvas,
  Chart,
  CandlestickSeries,
  BarSeries,
  XAxis,
  YAxis,
  discontinuousTimeScaleProvider,
} from "react-financial-charts";

const Candlestick = ({ data }) => {
  const xScaleProvider = discontinuousTimeScaleProvider.inputDateAccessor(
    (d) => new Date(d.date)
  );

  const {
    data: chartData,
    xScale,
    xAccessor,
    displayXAccessor,
  } = xScaleProvider(data);

  const margin = { left: 70, right: 70, top: 20, bottom: 30 };
  const height = 400;
  const width = 800;

  return (
    <ChartCanvas
      height={height}
      width={width}
      ratio={3}
      margin={margin}
      seriesName="BTC/USD"
      data={chartData}
      xScale={xScale}
      xAccessor={xAccessor}
      displayXAccessor={displayXAccessor}
    >
      <Chart id={1} yExtents={(d) => [d.high, d.low]}>
        <XAxis axisAt="bottom" orient="bottom" />
        <YAxis axisAt="right" orient="right" />

        <CandlestickSeries />
      </Chart>

      <Chart
        id={2}
        yExtents={(d) => d.volume}
        height={150}
        origin={(w, h) => [0, h - 150]}
      >
        <YAxis axisAt="left" orient="left" />
        <BarSeries yAccessor={(d) => d.volume} />
      </Chart>
    </ChartCanvas>
  );
};

// Example Data
const exampleData = [
  {
    date: "2022-03-01",
    open: 36000,
    high: 36500,
    low: 35000,
    close: 36400,
    volume: 45234,
  },
  {
    date: "2022-03-02",
    open: 36400,
    high: 36600,
    low: 35500,
    close: 36150,
    volume: 51234,
  },
  {
    date: "2022-03-03",
    open: 36150,
    high: 36300,
    low: 35000,
    close: 35200,
    volume: 31250,
  },
  {
    date: "2022-03-04",
    open: 35200,
    high: 35800,
    low: 34800,
    close: 35600,
    volume: 26500,
  },
  {
    date: "2022-03-05",
    open: 35600,
    high: 36400,
    low: 35500,
    close: 36200,
    volume: 51250,
  },
];

export default function CandlestickChart() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <Candlestick data={exampleData} />
    </div>
  );
}
