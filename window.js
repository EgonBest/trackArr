function tracking2Array() {
  var tracking = document.getElementById('input').value;
  var trackingarray = "[";

  var skript = tracking.match(/<script(.*)><\/script>/gi);
  console.log(skript);
  if(Array.isArray(skript))
    skript.forEach(getSkSrc);
  var bild = tracking.match(/<img(.*)>/gi);
  if(Array.isArray(bild))
    bild.forEach(getImSrc);
  var EIframe = tracking.match(/<iframe(.*)><\/iframe>/gi);
  if(Array.isArray(EIframe))
    EIframe.forEach(getIfSrc);
  function getSkSrc(item,index){
    var result = getSrc(item);
    trackingarray=trackingarray+"{'name':'" + result + "' ,'tech':'script'},";
    return false;
  }
  function getImSrc(item,index){
    var result = getSrc(item);
    trackingarray=trackingarray+"{'name':'" + result + "' ,'tech':'image'},";
    return false;
  }
  function getIfSrc(item,index){
    var result = getSrc(item);
    trackingarray=trackingarray+"{'name':'" + result + "' ,'tech':'iframe'},";
    return false;
  }
  function getSrc(Text){
    console.log(Text);
    return Text.match(/src=['"](.*?)['"]/)[1];
  }

  document.getElementById('output').innerText = trackingarray.slice(0, -1) + "]";
  return true;
}

window.onload = function () {
  document.getElementById('input').addEventListener('blur', tracking2Array);
  document.getElementById('submit').addEventListener('click', tracking2Array);
};
