import React from "react";
import HighchartsReact from "highcharts-react-official";
import '../styles/Graphs.css'

var Highcharts = require("highcharts");
require("highcharts/modules/exporting")(Highcharts);

const Graphs = (props) => {
  const getYearsList = (minYear, maxYear) => {
    if (minYear === null || maxYear === null) {
      return [];
    }
    const result = [];
    for (let i = minYear; i <= maxYear; i++) {
      result.push(i.toString());
    }
    return result;
  };

  const getYearsForSeries = (citationsList, years) => {
    const result = [];
    for (let i = 0; i < years.length; i++) {
      const year = years[i];
      let res = citationsList.filter((citation) => citation.year === year)[0];
      if (res) {
        result.push(parseInt(res.count));
      } else {
        result.push(0);
      }
    }
    return result;
  };

  const getSeries = (tool) => {
    const result = [];
    const years = getYearsList(tool.min_year, tool.max_year);
    for (let i = 0; i < tool.publications.length; i++) {
      const publication = tool.publications[i];
      const citations = publication.citations_list;
      if (citations.length !== 0) {
        const yearsFromSeries = getYearsForSeries(citations, years);
        if (yearsFromSeries.reduce((a, b) => a + b, 0) > 0) {
          result.push({
            name: publication.pmid,
            data: yearsFromSeries,
          });
        }
      }
    }
    if (result.length > 1) {
      const totalCitations = [...result[0].data];
      for (let i = 1; i < result.length; i++) {
        const series = result[i].data;
        for (let j = 0; j < series.length; j++) {
          totalCitations[j] += series[j];
        }
      }
      result.push({
        name: "Total citations",
        data: totalCitations,
      })
    }

    return result;
  };

  const getNewOptions = (tool) => {
    return {
      title: {
        text: `Citations for ${tool.name}`,
      },

      exporting: {
        filename: `chart_${tool.name}`,
        buttons: {
          contextButton: {
            text: "Generate",
            symbolY: 15,
          },
        },
        chartOptions: {
          plotOptions: {
            series: {
              dataLabels: {
                enabled: true,
              },
            },
          },
        },
      },

      chart: {
        type: "column",
      },

      tooltip: {
        shared: true,
      },

      xAxis: {
        categories: getYearsList(tool.min_year, tool.max_year),
      },

      yAxis: {
        title: {
          text: "Citations",
        },
        allowDecimals: false,
      },

      plotOptions: {
        series: {
          pointWidth: 20,
        }
      },

      series: getSeries(tool),
    };
  };

  return (
    <div className="graph-container">
      {props.tools.map(
        (tool) =>
        <div>
        {getSeries(tool).length !== 0 && (
          <HighchartsReact
            highcharts={Highcharts}
            options={getNewOptions(tool)}
          ></HighchartsReact>
        )}
      </div>
      )}
    </div>
  );
};

export default Graphs;
