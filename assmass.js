var obj ={
  name: "Obj",
  code: 123
}

obj["text"]= "текст"

for (k=1; k<=5; k++){
      obj["symbol ="+k]=String.fromCharCode("A".charCodeAt(0)+k-1)
}
  for (var s in obj){
    document.write ("Свойство "+s+" "+obj[s]+"<br>")

  }
  var list = Object.keys(obj)
  with(document){
    write(list.join(" | "))
  }
