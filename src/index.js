module.exports = function toReadable (number) {
    
    let registration = '';
    let numStr = String(number);
    
    let num0 = `zero`;
    let num1 = `one`;
    let num2 = `two`;
    let num3 = `three`;
    let num4 = `four`;
    let num5 = `five`;
    let num6 = `six`;
    let num7 = `seven`;
    let num8 = `eight`;
    let num9 = `nine`;
    let num10 = `ten`;
    let num11 = `eleven`;
    let num12 = `twelve`;
    let num13 = `thirteen`;
    let num14 = `fourteen`;
    let num15 = `fifteen`;
    let num16 = `sixteen`;
    let num17 = `seventeen`;
    let num18 = `eighteen`;
    let num19 = `nineteen`;
    let num20 = `twenty`;
    let num30 = `thirty`;
    let num40 = `forty`;
    let num50 = `fifty`;
    let num60 = `sixty`;
    let num70 = `seventy`;
    let num80 = `eighty`;
    let num90 = `ninety`;
    
        if (number === 0) {
        registration = num0;
      } if (numStr.length > 2) {
        switch (numStr[0]) {
          case '1': registration =`${num1} hundred `
          break;
          case '2': registration =`${num2} hundred `
          break;
          case '3': registration =`${num3} hundred `
          break;
          case '4': registration =`${num4} hundred `
          break;
          case '5': registration =`${num5} hundred `
          break;
          case '6': registration =`${num6} hundred `
          break;
          case '7': registration =`${num7} hundred `
          break;
          case '8': registration =`${num8} hundred `
          break;
          case '9': registration =`${num9} hundred `
          break;
        }
      } if (numStr.length > 1 && numStr.slice(-2, -1) !== '1') {
        switch (numStr.slice(-2, -1)) {
          case '2': registration =`${registration}${num20} `
          break;
          case '3': registration =`${registration}${num30} `
          break;
          case '4': registration =`${registration}${num40} `
          break;
          case '5': registration =`${registration}${num50} `
          break;
          case '6': registration =`${registration}${num60} `
          break;
          case '7': registration =`${registration}${num70} `
          break;
          case '8': registration =`${registration}${num80} `
          break;
          case '9': registration =`${registration}${num90} `
          break;
        }
      } if (numStr.length > 1 && numStr.slice(-2, -1) === '1') {
        switch (numStr.slice(-1)) {
          case '0': registration =`${registration}${num10}`
          break;
          case '1': registration =`${registration}${num11}`
          break;
          case '2': registration =`${registration}${num12}`
          break;
          case '3': registration =`${registration}${num13}`
          break;
          case '4': registration =`${registration}${num14}`
          break;
          case '5': registration =`${registration}${num15}`
          break;
          case '6': registration =`${registration}${num16}`
          break;
          case '7': registration =`${registration}${num17}`
          break;
          case '8': registration =`${registration}${num18}`
          break;
          case '9': registration =`${registration}${num19}`
          break;
        }
      } if (number !== 0 && numStr.slice(-2, -1) !== '1') {
        switch (numStr.slice(-1)) {
          case '1': registration =`${registration}${num1}`
          break;
          case '2': registration =`${registration}${num2}`
          break;
          case '3': registration =`${registration}${num3}`
          break;
          case '4': registration =`${registration}${num4}`
          break;
          case '5': registration =`${registration}${num5}`
          break;
          case '6': registration =`${registration}${num6}`
          break;
          case '7': registration =`${registration}${num7}`
          break;
          case '8': registration =`${registration}${num8}`
          break;
          case '9': registration =`${registration}${num9}`
          break;
        }
      }
  
    return registration.trim();
  }