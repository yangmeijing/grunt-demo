const expect = require('chai').expect;

describe('天气预报接口测试套件',function(){
  it('石家庄的天气条件',function(){
    const http = require('http');
    var addr = 'http://v.juhe.cn/weather/index?cityname=石家庄&key=70b20823f67b5f0ca3358b796fd83260';

    http.get(global.encodeURI(addr), (res) => {
        var result = '';

        res.on('data', (data) => {
              result += data.toString('utf8');
                
        });

        res.on('end', () => {
              var weather = JSON.parse(result);
              console.log(weather);
              expect(weather.resultcode).to.be.equal(200);
                    
        });

    });
  })
})
