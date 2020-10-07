(function ($) {

  $.fn.menuAim = function (opts) {
    // Initialize menu-aim for all elements in jQuery collection
    this.each(function () {
      init.call(this, opts);
    });

    return this;
  };

  function init(opts) {
    let n = function () {

    };
    let $menu = $(this),
        activeRow = null,   //一级菜单中当前的焦点行
        mouseLocs = [],     //鼠标相对于doc位置
        lastDelayLoc = null,  //存储最近有延迟的坐标
        timeoutId = null,   //定时器
        options = $.extend({  //默认配置
          rowSelector: "li.category-item",
          submenuSelector: "*",
          submenuDirection: "right",
          tolerance: 75,  // bigger = more forgivey when entering submenu
          enter: n,
          exit: n,
          activate: n,
          deactivate: n,
          exitMenu: n
        }, opts);

    let MOUSE_LOCS_TRACKED = 3,  // number of past mouse locations to track
        DELAY = 300;  // ms delay when user appears to be entering submenu

    /**
     * Keep track of the last few locations of the mouse.
     */
    let mousemoveDocument = function (e) {
      mouseLocs.push({x: e.pageX, y: e.pageY});

      if (mouseLocs.length > MOUSE_LOCS_TRACKED) {
        mouseLocs.shift();
      }
    };

    /**
     * Cancel possible row activations when leaving the menu entirely
     */
    let mouseleaveMenu = function () {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      // If exitMenu is supplied and returns true, deactivate the
      // currently active row on menu exit.
      if (options.exitMenu(this)) {
        if (activeRow) {
          options.deactivate(activeRow);
        }

        activeRow = null;
      }
    };

    /**
     * Trigger a possible row activation whenever entering a new row.
     */
    let mouseenterRow = function () {
          if (timeoutId) {
            // Cancel any previous activation delays
            clearTimeout(timeoutId);
          }

          options.enter(this);
          possiblyActivate(this);
        },
        mouseleaveRow = function () {
          options.exit(this);
        };

    /*
     * Immediately activate a row if the user clicks on it.
     */
    let clickRow = function () {
      activate(this);
    };

    /**
     * Activate a menu row.
     */
    let activate = function (row) {
      if (row === activeRow) {
        return;
      }

      if (activeRow) {
        options.deactivate(activeRow);
      }

      options.activate(row);
      activeRow = row;
    };

    /**
     * Possibly activate a menu row. If mouse movement indicates that we
     * shouldn't activate yet because user may be trying to enter
     * a submenu's content, then delay and check again later.
     */
    let possiblyActivate = function (row) {
      let delay = activationDelay();

      if (delay) {
        timeoutId = setTimeout(function () {
          possiblyActivate(row);
        }, delay);
      } else {
        activate(row);
      }
    };

    /**
     * Return the amount of time that should be used as a delay before the
     * currently hovered row is activated.
     *
     * Returns 0 if the activation should happen immediately. Otherwise,
     * returns the number of milliseconds that should be delayed before
     * checking again to see if the row should be activated.
     */
    let activationDelay = function () {
      if (!activeRow || !$(activeRow).is(options.submenuSelector)) {
        // If there is no other submenu row already active, then
        // go ahead and activate immediately.
        return 0;
      }

      let a = {
          width: document.body.offsetWidth,
          width2:  document.body.scrollWidth,
        width3:  document.body.clientWidth,
          height: document.documentElement.offsetHeight,
          height2: document.documentElement.scrollHeight
        };
      console.log($menu.outerWidth(),$menu.outerHeight());
      console.log(a);

      // console.log($menu.offset());
      console.log(document.getElementById('J_navCategory').querySelectorAll(options.rowSelector)[4].getBoundingClientRect())
      window.elem2 = document.getElementById('J_navCategory');
      window.elem3 = document.querySelector('#J_navCategory');
      let offset = $menu.offset(),
          upperLeft = {
            x: offset.left,
            y: offset.top - options.tolerance
          },
          upperRight = {
            x: offset.left + $menu.outerWidth(),
            y: upperLeft.y
          },
          lowerLeft = {
            x: offset.left,
            y: offset.top + $menu.outerHeight() + options.tolerance
          },
          lowerRight = {
            x: offset.left + $menu.outerWidth(),
            y: lowerLeft.y
          },
          loc = mouseLocs[mouseLocs.length - 1],
          prevLoc = mouseLocs[0];

      if (!loc) {
        return 0;
      }

      if (!prevLoc) {
        prevLoc = loc;
      }

      if (prevLoc.x < offset.left || prevLoc.x > lowerRight.x ||
          prevLoc.y < offset.top || prevLoc.y > lowerRight.y) {

        return 0;
      }

      if (lastDelayLoc &&
          loc.x === lastDelayLoc.x && loc.y === lastDelayLoc.y) {
        return 0;
      }


      function slope(a, b) {
        return (b.y - a.y) / (b.x - a.x);
      };

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
        // Mouse is moving from previous location towards the
        // currently activated submenu. Delay before activating a
        // new menu row, because user may be moving into submenu.
        lastDelayLoc = loc;
        return DELAY;
      }

      lastDelayLoc = null;
      return 0;
    };

    /**
     * Hook up initial menu events
     */
    document.getElementById('J_navCategory').addEventListener('mouseleave', mouseleaveMenu, false);
    document.getElementById('J_navCategory').querySelectorAll(options.rowSelector).forEach(el => {
      el.addEventListener('mouseenter', mouseenterRow, false);
      el.addEventListener('mouseleave', mouseleaveRow, false);
    });

    document.addEventListener('mousemove', mousemoveDocument, false);

  };
})(jQuery);

