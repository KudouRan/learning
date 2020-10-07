/*
 * 分类菜单
 */

(() => {
      const eF = {
        menuElm: document.getElementById('J_categoryList'),
        rowSelector: 'li.category-item',
        submenuSelector: '*',
        submenuDirection: 'right',
        tolerance: 75,
        enter(e) {
          for (let child of eF.menuElm.children) {
            eF.deactivate(child);
          }
          eF.activate(e.target);
        },
        exit() {
        },
        activate(el) {
          el.classList.add('category-item-active');
        },
        deactivate(el) {
          el.classList.remove('category-item-active');
        },
        exitMenu() {
          for (let child of eF.menuElm.children) {
            eF.deactivate(child);
          }
        }
      };

      //存坐标点
      let xyz = [];

      window.eF = eF;

      //获取菜单栏及其子元素
      const categoryList = document.getElementById('J_categoryList');
      const categoryItems = categoryList.getElementsByClassName('category-item');
      const categoryActive = categoryList.getElementsByClassName(
          'category-item-active'
      )[0];

      //给每个菜单栏中的li绑定移入事件
      for (let categoryItem of categoryItems) {
        categoryItem.addEventListener('mouseenter', mouseenter, false);
      }

      //给菜单栏整体监听移出事件,用于清除状态
      categoryList.addEventListener('mouseleave', leaveList, false);

      function leaveList() {
        eF.exitMenu();
      }

      function mouseenter(e) {
        eF.enter(e);
      }

        // categoryList.addEventListener('mousemove', move, false);
      //
      // function move(e) {
      //   xyz.push({x: e.pageX, y: e.pageY}), xyz.length > 3 && xyz.shift();
      //   // console.log(xyz);
      //   let k = getk();
      //   // if (k === Infinity || k === -Infinity) {
      //   //   console.log('y轴上移动', Math.abs(getTanDeg(k)));
      //   // } else if (k === 1) {
      //   //   console.log('k=1', Math.abs(getTanDeg(k)));
      //   // } else if (k === 0) {
      //   //   console.log('x轴上移动', Math.abs(getTanDeg(k)));
      //   // } else {
      //   //   console.log(k, Math.abs(getTanDeg(k)));
      //   // }
      //
      //   if (Math.abs(getTanDeg(k)) <= 60) {
      //     console.log('不可', Math.abs(getTanDeg(k)));
      //   } else {
      //     console.log('可')
      //   }
      // }
      //
      //
      // function getk() {
      //   let p2 = xyz[xyz.length - 1];
      //   let p1 = xyz[0];
      //   // console.log((p2.y - p1.y) / (p2.x - p1.x));
      //   return (p2.y - p1.y) / (p2.x - p1.x);
      // }
      //
      // function getTanDeg(tan) {
      //   let result = Math.atan(tan) / (Math.PI / 180);
      //   result = Math.round(result);
      //   return result;
      // }

    })();


  // categoryList.addEventListener('mousemove', move, false);
      //
      // function move(e) {
      //   xyz.push({x: e.pageX, y: e.pageY}), xyz.length > 3 && xyz.shift();
      //   // console.log(xyz);
      //   let k = getk();
      //   // if (k === Infinity || k === -Infinity) {
      //   //   console.log('y轴上移动', Math.abs(getTanDeg(k)));
      //   // } else if (k === 1) {
      //   //   console.log('k=1', Math.abs(getTanDeg(k)));
      //   // } else if (k === 0) {
      //   //   console.log('x轴上移动', Math.abs(getTanDeg(k)));
      //   // } else {
      //   //   console.log(k, Math.abs(getTanDeg(k)));
      //   // }
      //
      //   if (Math.abs(getTanDeg(k)) <= 60) {
      //     console.log('不可', Math.abs(getTanDeg(k)));
      //   } else {
      //     console.log('可')
      //   }
      // }
      //
      //
      // function getk() {
      //   let p2 = xyz[xyz.length - 1];
      //   let p1 = xyz[0];
      //   // console.log((p2.y - p1.y) / (p2.x - p1.x));
      //   return (p2.y - p1.y) / (p2.x - p1.x);
      // }
      //
      // function getTanDeg(tan) {
      //   let result = Math.atan(tan) / (Math.PI / 180);
      //   result = Math.round(result);
      //   return result;
      // }