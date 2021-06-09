(function () {
  //这是准备显示的数据
  const data = [
    { name: 'Shao-Kui', value: 6 },
    { name: 'Wen-Yang', value: 6 },
    { name: 'Cai Yun', value: 16 },
    { name: 'Liang Yuan', value: 10 },
    { name: 'Yuan-Chen', value: 6 },
    { name: 'Rui-Long', value: 10 },
    { name: 'Dong Xin', value: 12 },
    { name: 'He Yu', value: 20 },
    { name: 'Xiang-Li', value: 12 },
    { name: 'Godness', value: 20 },
    { name: 'Wei-Yu', value: 15 },
    { name: 'Chen Zheng', value: 14 },
    { name: 'Yu Peng', value: 15 },
    { name: 'Li Jian', value: 18 },
  ];

  const data1 = [
    { name: 'Shao-Kui', value: 20 },
    { name: 'Wen-Yang', value: 15 },
    { name: 'Cai Yun', value: 16 },
    { name: 'Liang Yuan', value: 10 },
    { name: 'Yuan-Chen', value: 6 },
    { name: 'Rui-Long', value: 10 },
    { name: 'Dong Xin', value: 12 },
    { name: 'He Yu', value: 20 },
    { name: 'Xiang-Li', value: 12 },
    { name: 'Godness', value: 20 },
    { name: 'Wei-Yu', value: 15 },
    { name: 'Chen Zheng', value: 14 },
    { name: 'Yu Peng', value: 15 },
    { name: 'Li Jian', value: 18 },
  ];

  const data2 = [
    { name: 'Wen-Yang', value: 20 },
    { name: 'Shao-Kui', value: 10 },
    { name: 'Cai Yun', value: 16 },
    { name: 'Liang Yuan', value: 10 },
    { name: 'Yuan-Chen', value: 6 },
    { name: 'Rui-Long', value: 10 },
    { name: 'Dong Xin', value: 12 },
    { name: 'He Yu', value: 20 },
    { name: 'Xiang-Li', value: 12 },
    { name: 'Godness', value: 20 },
    { name: 'Wei-Yu', value: 15 },
    { name: 'Chen Zheng', value: 14 },
    { name: 'Yu Peng', value: 15 },
    { name: 'Li Jian', value: 18 },
  ];

  //准备好图形的大小
  const svg = d3.select('#mainsvg'),
    width = Number(svg.attr('width')),
    height = Number(svg.attr('height')),
    margin = { top: 60, right: 40, bottom: 60, left: 130 },
    innerWidth = width - margin.right - margin.left,
    innerHeigth = height - margin.top - margin.bottom;

  //分组用于控制内容位置
  const g = svg
    .append('g')
    .attr('id', 'maingroup')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const xScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, item => item.value)])
    .range([0, innerWidth]);

  const yScale = d3
    .scaleBand()
    .domain(data.map(item => item.name))
    .range([0, innerHeigth])
    .padding(0.2);

  const react = g
    .selectAll('react')
    .data(data)
    .enter()
    .append('rect')
    .attr('width', d => xScale(d.value))
    .attr('y', d => yScale(d.name))
    .attr('height', yScale.bandwidth())
    .attr('fill', '#73d13d');

  const btns = document.querySelectorAll('button');
  btns[0].addEventListener('click', () => {
    react
      .data(data)
      .attr('fill', 'red')
  });

  const yAxis = d3.axisLeft(yScale),
    xAxis = d3.axisBottom(xScale);

  g.append('g').call(yAxis);
  g.append('g').call(xAxis).attr('transform', `translate(0,${innerHeigth})`);

  d3.selectAll('.tick text').attr('font-size', '16px');
  g.append('text')
    .text('这是一个标题')
    .attr('font-size', '3em')
    .attr('y', -10)
    .attr('x', innerWidth / 2 - 200);
})();
