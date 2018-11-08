fetch('http://my-little-cors-proxy.herokuapp.com/https://api.edamam.com/search?app_id=465e8fb2&app_key=b951ee476fa65f83dbc1eca090bb0c92&q=pasta')
    .then(stuff => stuff.json())
    .then(jsonstuff => jsonstuff['hits'])
    .then(hits => console.log(hits));