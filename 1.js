
function  isValidated(dd) {
        var reg = /^1[3456789]\d{9}$/;
        var reg2 = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
        if (reg.test(dd) ) {
          console.log('合法');
        }else if( reg2.test(dd)){
            console.log('合法');
        }
        else {
            console.log('不合法');
          return false
        }
        // return !/^https?:\/\/.{3,}/.test(this.url)
      }


      isValidated('13345678901')