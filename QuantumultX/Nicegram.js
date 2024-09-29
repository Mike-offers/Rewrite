const QuantumultX = typeof $task !== "undefined";
var Mike = JSON.parse($response.body);
const Subscription = /https:\/\/nicegram\.cloud\/api\/v\d\/user\/info/;
const Premium = /https:\/\/restore-access\.indream\.app\/restoreAccess/;

if (Subscription.test($request.url)) {
  Mike.data.user = {
    ...Mike.data.user,
    subscription: true,
    store_subscription: true,
    lifetime_subscription: true
  };
}

if (Premium.test($request.url)) {
  Mike["data"] = {
    "premiumAccess": true
  };
}

function finalizeResponse(Message) {
  return { 
    status: QuantumultX ? "HTTP/1.1 200 OK" : 200, 
    headers: $response.headers, 
    body: JSON.stringify(Message) 
  };
}
$done(QuantumultX ? finalizeResponse(Mike) : Mike);
