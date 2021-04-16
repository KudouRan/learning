(() => {
  function f(op) {
    function p() {
    }

    let activeRow = null, //菜单中当前的焦点行
        mouseLocs = [], //存储鼠标相当于文档的坐标位置
        lastDelayLoc = null, //存储最近有延迟的坐标
        timeoutId = null, //用于存储定时器
        options = Object.assign({}, {
          menuElm: null,  //菜单元素
          rowSelector: "li.category-item", //菜单项元素
          submenuSelector: "*",
          submenuDirection: "right", //子菜单位置
          tolerance: 75,  //容忍度,与三角的大小有关
          enter: p,   //进入菜单行
          exit: p,  //离开菜单行
          activate: p,  //菜单行激活
          deactivate: p,  //菜单行取消激活
          exitMenu: p //离开菜单时所触发的事件
        }, op);

    const maxLocs = 3; //坐标数组长度
    const delay = 300; //默认的延迟毫秒书

    let mousemoveDocument = function (e) {
      mouseLocs.push({x: e.pageX, y: e.pageY}); //记录坐标
      if (mouseLocs.length > maxLocs) {
        mouseLocs.shift();  //始终保持长度为3且最新
      }
    };

    let mouseleaveMenu = function () {
      timeoutId && clearTimeout(timeoutId);  //记得清楚定时器

      if (options.exitMenu(this)) {
        if (activeRow) {
          options.deactivate(activeRow);  //触发取消激活的事件
        }

        activeRow = null;  //把激活行的引用也清空
      }
    };

    let mouseenterRow = function () {
          timeoutId && clearTimeout(timeoutId);
          options.enter(this);    //触发鼠标进入当前行的事件
          possiblyActivate(this);
        },
        mouseleaveRow = function () {
          options.exit(this); //触发鼠标离开当前行的事件
        };

    let activate = function (row) {
      if (row === activeRow) return;  //如果当前行就是activeRow

      if (activeRow) options.deactivate(activeRow); //如果activeRow有值

      options.activate(row);  //激活当前行,并储存activeRow
      activeRow = row;
    };

    let possiblyActivate = function (row) {
      let delay = activationDelay();  //返回延迟时间
      if (delay) {
        timeoutId = setTimeout(() => {
          possiblyActivate(row);
        }, delay)
      } else {
        activate(row);  //无延时,则直接调用active方法
      }
    };

    function offset(e) {
      let t = document.documentElement,
          a = e.getBoundingClientRect();
      return (
          {
            top: a.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || 0),
            left: a.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
          });
    }

    let activationDelay = function () {
      if (!activeRow || !activeRow.matches(options.submenuSelector)) {
        return 0;
      }


      let ofel = options.menuElm;
      let e = offset(ofel);
      let a = {
        width: ofel.offsetWidth,
        height: ofel.offsetHeight
      };
      let upperLeft = {
            x: e.left,
            y: e.top - options.tolerance
          },
          upperRight = {
            x: e.left + a.width,
            y: upperLeft.y
          },
          lowerLeft = {
            x: e.left,
            y: e.top + a.height + options.tolerance,
          },
          lowerRight = {
            x: e.left + a.width,
            y: lowerLeft.y
          },
          loc = mouseLocs[mouseLocs.length - 1],
          prevLoc = mouseLocs[0];

      if (!loc) return 0;

      if (!prevLoc) prevLoc = loc;

      if (prevLoc.x < e.left || prevLoc.x > lowerRight.x || prevLoc.y < e.top || prevLoc.y > lowerRight.y) {
        return 0;
      }

      if (lastDelayLoc && loc.x === lastDelayLoc.x && loc.y === lastDelayLoc.y) {
        return 0;
      }

      function slope(a, b) {
        console.log((b.y - a.y) / (b.x - a.x));
        return (b.y - a.y) / (b.x - a.x);
      }

      let decreasingCorner = upperRight,
          increasingCorner = lowerRight;

      if (options.submenuDirection === "left") {
        decreasingCorner = lowerLeft;
        increasingCorner = upperLeft;
      } else if (options.submenuDirection === "below") {
        decreasingCorner = lowerRight;
        increasingCorner = lowerLeft;
      } else if (options.submenuDirection === "above") {
        decreasingCorner = upperLeft;
        increasingCorner = upperRight;
      }

      let decreasingSlope = slope(loc, decreasingCorner),
          increasingSlope = slope(loc, increasingCorner),
          prevDecreasingSlope = slope(prevLoc, decreasingCorner),
          prevIncreasingSlope = slope(prevLoc, increasingCorner);

      if (decreasingSlope < prevDecreasingSlope &&
          increasingSlope > prevIncreasingSlope) {
        lastDelayLoc = loc;
        return delay;
      }

      lastDelayLoc = null;
      return 0;
    };

    options.menuElm.addEventListener('mouseleave', mouseleaveMenu, false);
    options.menuElm.querySelectorAll(options.rowSelector).forEach(el => {
      el.addEventListener('mouseenter', mouseenterRow, false);
      el.addEventListener('mouseleave', mouseleaveRow, false);
    });

    document.addEventListener('mousemove', mousemoveDocument, false);

  }

  f({
    menuElm: document.getElementById('J_categoryList'),
    activate(el) {
      el.classList.add('category-item-active');
    },
    deactivate(el) {
      el.classList.remove('category-item-active');
    },
    exitMenu() {
      return true;
    }
  });
})();