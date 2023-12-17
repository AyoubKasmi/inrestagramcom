export async function POST(request) {
    const { post:code } = await request.json();

    var myHeaders = new Headers();
    myHeaders.append("authority", "www.instagram.com");
    myHeaders.append("accept", "*/*");
    myHeaders.append("accept-language", "fr-FR,fr;q=0.9");
    myHeaders.append("content-type", "application/x-www-form-urlencoded");
    myHeaders.append("cookie", "csrftoken=qGaEPcbe2JEsw5rGDWRTqZ; ig_did=D0CA400F-3F07-4F02-B4F2-B3221D1B172C; datr=4wJ_Zaue2M6Qpe42U3GddY22; ig_nrcb=1; mid=ZX8C5AALAAErPekyL5kYByqbfOSF; csrftoken=J6D8F9W32Kq7g3FgfXIREkY9Lj80C2Kq; datr=yyB7ZTCqfqoS7AlWRxg5-j3q; ig_did=C6B8C40F-00E4-4421-BE92-17E218FEAE44");
    myHeaders.append("dpr", "1");
    myHeaders.append("origin", "https://www.instagram.com");
    myHeaders.append("referer", `https://www.instagram.com/reel/${code}/`);
    myHeaders.append("sec-ch-prefers-color-scheme", "dark");
    myHeaders.append("sec-ch-ua", "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"");
    myHeaders.append("sec-ch-ua-full-version-list", "\"Not_A Brand\";v=\"8.0.0.0\", \"Chromium\";v=\"120.0.6099.109\", \"Google Chrome\";v=\"120.0.6099.109\"");
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
    myHeaders.append("x-csrftoken", "qGaEPcbe2JEsw5rGDWRTqZ");
    myHeaders.append("x-fb-friendly-name", "PolarisPostActionLoadPostQueryQuery");
    myHeaders.append("x-fb-lsd", "AVrufBOdDEY");
    myHeaders.append("x-ig-app-id", "936619743392459");

    var urlencoded = new URLSearchParams();
    urlencoded.append("av", "0");
    urlencoded.append("__d", "www");
    urlencoded.append("__user", "0");
    urlencoded.append("__a", "1");
    urlencoded.append("__req", "b");
    urlencoded.append("__hs", "19708.HYP:instagram_web_pkg.2.1..0.0");
    urlencoded.append("dpr", "1");
    urlencoded.append("__ccg", "UNKNOWN");
    urlencoded.append("__rev", "1010470296");
    urlencoded.append("__s", "3s3vf4:l3x3ro:9kjlt3");
    urlencoded.append("__hsi", "7313567495419610128");
    urlencoded.append("__dyn", "7xeUjG1mxu1syUbFp60DU98nwgU29zEdEc8co2qwJw5ux609vCwjE1xoswIwuo2awlU-cw5Mx62G3i1ywOwv89k2C1Fwc60D8vw8OfK0EUjwGzEaE7622362W2K0zK5o4q3y1Sx-0iS2S3qazo7u1xwIwbS1LwTwKG1pg661pwr86C1mwraCgo-68jxe");
    urlencoded.append("__csr", "gjMD24hsrn-L_aQe-WldV6hZGLmmCUwyBGhAy-cjALJ93ejiKHy9FpayWBF2kF94cG9GaQmqUOmiAVkEPh9lSiuloLle9KpeqmGXGu8DAZykWyoOqdhEmBUiV9oWawAAw04P3U7Mw0lJAu069E08384Ykp0Ig6S3i0esw4-40uovw6XwjUCO06Tw5IwhA00FuE");
    urlencoded.append("__comet_req", "7");
    urlencoded.append("lsd", "AVrufBOdDEY");
    urlencoded.append("jazoest", "2955");
    urlencoded.append("__spin_r", "1010470296");
    urlencoded.append("__spin_b", "trunk");
    urlencoded.append("__spin_t", "1702822627");
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
    