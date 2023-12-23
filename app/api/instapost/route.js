export async function POST(request) {
    const { post:code } = await request.json();

    var myHeaders = new Headers();
    myHeaders.append("authority", "www.instagram.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "fr-FR,fr;q=0.9");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("cookie", "csrftoken=qnwDrGBLYvmFSqWXiJL0h-; mid=ZYb-5gALAAEmimRXZCXxfYnrr-ri; ig_did=91437D88-3330-48BC-8279-E54599B55FE0; ig_nrcb=1; _js_ig_did=91437D88-3330-48BC-8279-E54599B55FE0; _js_datr=5P6GZZFDDaIiZ2caLcJOkk9u; csrftoken=J6D8F9W32Kq7g3FgfXIREkY9Lj80C2Kq; datr=yyB7ZTCqfqoS7AlWRxg5-j3q; ig_did=91437D88-3330-48BC-8279-E54599B55FE0");
    myHeaders.append("dpr", "1");
    myHeaders.append("origin", "https://www.instagram.com");
    myHeaders.append("referer", `https://www.instagram.com/reel/${code}/`);
    myHeaders.append("sec-ch-prefers-color-scheme", "dark");
    myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"");
    myHeaders.append("sec-ch-ua-full-version-list", "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.110\", \"Google Chrome\";v=\"120.0.6099.110\"");
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-model", "\"\"");
    myHeaders.append("sec-ch-ua-platform", "\"Windows\"");
    myHeaders.append("sec-ch-ua-platform-version", "\"15.0.0\"");
    myHeaders.append("sec-fetch-dest", "empty");
    myHeaders.append("sec-fetch-mode", "cors");
    myHeaders.append("sec-fetch-site", "same-origin");
    myHeaders.append("user-agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
    myHeaders.append("viewport-width", "1366");
    myHeaders.append("x-asbd-id", "129477");
    myHeaders.append("x-csrftoken", "qnwDrGBLYvmFSqWXiJL0h-");
    myHeaders.append("x-fb-friendly-name", "PolarisPostActionLoadPostQueryQuery");
    myHeaders.append("x-fb-lsd", "AVrcynbmFyQ");
    myHeaders.append("x-ig-app-id", "936619743392459");

    var urlencoded = new URLSearchParams();
    urlencoded.append("av", "0");
    urlencoded.append("__d", "www");
    urlencoded.append("__user", "0");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "3");
    urlencoded.append("__hs", "19714.HYP:instagram_web_pkg.2.1..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "UNKNOWN");
    urlencoded.append("__rev", "1010579544");
    urlencoded.append("__s", "y644ou:megsit:f046r5");
    urlencoded.append("__hsi", "7315814901285928159");
    urlencoded.append("__dyn", "7xeUjG1mxu1syUbFp60DU98nwgU29zEdEc8co2qwJw5ux609vCwjE1xoswIwuo2awlU-cw5Mx62G3i1ywOwv89k2C1Fwc60AEC7U2czXwae4UaEW2G1NwwwNwKwHw8Xxm16wUwtEvw4JwJwSyES1Twoob82ZwrUdUbGwmk1xwmo6O1FwlE6PhA6fxy4UjxK");
    urlencoded.append("__csr", "gDMkETsgyOOlLrO4V9eiXoMyGAiBh5GXQ9p-F8BUZyEJ29oBeb_WHhEK6oqJ1XiGnybUSaHSmUKuKtCDURvBgzBGQ8gx2aGinGQ8KAEG9xzxmpai9x24oeE01cHk0f9S08w8bw1vi074E6_fa0VU2Aw90w3byE0Ii0UUy9EE25wtA1Xw77w25U3Np9QawjU02Dew");
    urlencoded.append("__comet_req", "7");
    urlencoded.append("lsd", "AVrcynbmFyQ");
    urlencoded.append("jazoest", "21074");
    urlencoded.append("__spin_r", "1010579544");
    urlencoded.append("__spin_b", "trunk");
    urlencoded.append("__spin_t", "1703345892");
    urlencoded.append("fb_api_caller_class", "RelayModern");
    urlencoded.append("fb_api_req_friendly_name", "PolarisPostActionLoadPostQueryQuery");
    urlencoded.append("variables", `{\"shortcode\":\"${code}\",\"fetch_comment_count\":40,\"fetch_related_profile_media_count\":3,\"parent_comment_count\":24,\"child_comment_count\":3,\"fetch_like_count\":10,\"fetch_tagged_user_count\":null,\"fetch_preview_comment_count\":2,\"has_threaded_comments\":true,\"hoisted_comment_id\":null,\"hoisted_reply_id\":null}`);
    urlencoded.append("server_timestamps", "true");
    urlencoded.append("doc_id", "10015901848480474");

    try {
        const response = await fetch('https://www.instagram.com/api/graphql', {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        });
        
        if (response.status !== 200) {
            return Response.json({ error: 'Failed to fetch instagram' }, {
            status: 500,
            });
        }

        const jsonData = await response.json();
        const data = jsonData.data.xdt_shortcode_media;
    
        return Response.json({ data: data }, {
            status: 200,
        });
  
    } catch (error) {
        console.error('Error occured:', error);
        return Response.json({ error: 'Internal server error' }, {
            status: 500,
        });
    }
}
    