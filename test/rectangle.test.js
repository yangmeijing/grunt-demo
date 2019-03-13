const expect = require('chai').expect;

describe('矩形计算器HTTP API接口测试',function(){
  it('正确请求格式测试',function(){
    const http = require('http');
    var addr = 'http://localhost:8080/rectangle?width=20&height=20';

    http.get(global.encodeURI(addr), (res) => {
        var result = '';

        res.on('data', (data) => {
              result += data.toString('utf8');
                
        });

        res.on('end', () => {
              var rect = JSON.parse(result);
              console.log(rect);
              expect(rect.area).to.be.equal(400);
              expect(rect.perimeter).to.be.equal(80);
              
        });

    });
  })
})
