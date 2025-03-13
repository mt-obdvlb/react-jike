import * as echarts from "echarts"
import { useEffect, useRef } from "react"

const BarChart = () => {
  const chartRef = useRef(null)
  useEffect(() => {
    const chartDom = chartRef.current
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: "前端框架",
      },
      xAxis: {
        type: "category",
        data: [
          "vue",
          "react",
          "angular",
          "jquery",
          "bootstrap",
          "antd",
          "element",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    }

    option && myChart.setOption(option)
  }, [])
  return <div
    ref={chartRef}
    id="main"
    style={{
      width: "600px",
      height: "400px",
    }}
  ></div>
}

export default BarChart