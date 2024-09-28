var Mike = JSON.parse($response.body);

Mike.profile.is_premium = true;
Mike.profile.end_of_premium = 4070914800;
Mike.profile.has_2fa = true;

$done({ body: JSON.stringify(Mike) });
