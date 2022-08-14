import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import { CSSObject } from "highcharts";

export const useHighChartOptions = (): Highcharts.Options => {
  const { palette } = useTheme();
  const [backgroundColor, setBackgroundColor] = useState<string>();
  const [textColor, setTextColor] = useState<CSSObject>({ color: palette.text.primary });

  useEffect(() => {
    if (palette.mode === 'dark') setBackgroundColor("#181d1f");
    if (palette.mode === 'light') setBackgroundColor(palette.background.default);
    setTextColor({color: palette.text.primary})
  }, [palette, palette.mode])

  return {
    chart: {
      type: "column",
      backgroundColor: backgroundColor,
    },
    title: {
      text: "Monthly Repo Revenue",
      style: textColor,
    },
    subtitle: {
      text: "Endcash for Repo types",
      style: textColor,
    },
    legend: {
      itemStyle: textColor,
    },
    xAxis: {
      title: {
        style: textColor,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "End Cash ($)",
        style: textColor,
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: 
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm </b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      }
    }
  }
}
