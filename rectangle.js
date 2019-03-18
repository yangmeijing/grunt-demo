$(function(){
  var $width=$('#width'),
      $height=$('#length'),
      $btn=$('#btn'),
      $per=$('#perimeter'),
      $area=$('#area');

  $btn.click(function(){
    var rect = rectangle();
    $per.val(rect.perimeter($width.val(), $height.val()));
    $area.val(rect.area($width.val(), $height.val()));
  });
});
