

var body = $response.body.replace(/is_free":\w+/g,'is_free":true')
.replace(/concurrent":\w+/g,'concurrent":true')

$done({ body });
