import React from 'react';

function Chart() {
    //const value = //database //day of activity
    //const value2 = //database //count of activities
    //const word1 = //database //name of user?? 
    //const word2 = //database //name of activity
    //const chartText = `&chl=%7C%7C{word1}%7C{word2}%`
    //const chartPercent = `&chd=a%3A${value}%7C${value2}`;
    //const chartColor = '&chco=CFB948,E3E3E3';
   // const chartURL = `https://image-charts.com/chart?${chartPercent}&chs=700x190${chartColor}&cht=bhs{chartText}`
    const chartEx = 'https://image-charts.com/chart?chd=a%3A50%7C100&chs=700x80&cht=bhs'
    const chartEx2 = 'https://image-charts.com/chart?chd=a%3A20%7C100&chs=700x200&cht=pc'
   const chartEx3 = "https://image-charts.com/chart?chco=7059EF%7C0CE858&chd=t%3A40%2C60%2C10%2C_%2C47%2C40%2C12%2C_%2C10%2C10%2C20%2C_%2C20%2C40%2C40%7C50%2C30%2C5%2C_%2C5%2C5%2C_%2C20%2C20%2C6&chma=0%2C0%2C20&chs=700x300&cht=bb&chxt=x%2Cy"
    const chartEx4 = "https://image-charts.com/chart?chco=fdb45c%2C27c9c2%2C1869b7&chd=s%3AFOETHECat%2Clkjtf3asv%2CKATYPSNXJ&chs=700x125&cht=lc&chxl=0%3A%7COct%7CNov%7CDec%7C1%3A%7C%7C20K%7C%7C60K%7C%7C100K&chxt=x%2Cy" 
    return (
    <>
        <img src={chartEx} alt="chart"/>
        <img src={chartEx2} alt="chart"/>
        <img src={chartEx3} alt="chart"/>
        <img src={chartEx4} alt="chart"/>
    </>
  );
}

export default Chart;