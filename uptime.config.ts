const pageConfig = {
  // Title for your status page
  title: "Windelingの間",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/windeling', label: 'GitHub' },
    { link: 'https://blog.windeling.com', label: 'Blog' },
    { link: 'mailto:public@windeling.com', label: 'Email Me', highlight: true },
  ],
  // [OPTIONAL] Group your monitors
  // If not specified, all monitors will be shown in a single list
  // If specified, monitors will be grouped and ordered, not-listed monitors will be invisble (but still monitored)
  group: {
    "🌐 公开": ['blog_monitor',"drive_monitor","yf_monitor"],
    "🔐 私有": ['ccb_monitor'],
  },
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog_monitor',
      // `name` is used at status page and callback message
      name: 'Windelingの間',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.windeling.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Windelingの間主站点检测',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://blog.windeling.com',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
     // timeout: 10000,
      //[OPTIONAL] headers to be sent
    //  headers: {
     //   'User-Agent': 'Uptimeflare',
     //   Authorization: 'Bearer YOUR_TOKEN_HERE',
    //  },
      // [OPTIONAL] body to be sent
    //  body: 'text',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //    responseKeyword: 'Success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
   //   responseForbiddenKeyword: 'Bad gateway',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //    checkLocationWorkerRoute: 'https://xxx.example.com',
    },

    
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'yf_monitor',
      // `name` is used at status page and callback message
      name: '驅逐入侵校區計畫',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://stupidyf.pages.dev/',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '驅逐入侵校區計畫页面监测',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://stupidyf.pages.dev/',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
     // timeout: 10000,
      //[OPTIONAL] headers to be sent
    //  headers: {
     //   'User-Agent': 'Uptimeflare',
     //   Authorization: 'Bearer YOUR_TOKEN_HERE',
    //  },
      // [OPTIONAL] body to be sent
    //  body: 'text',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
  //    responseKeyword: 'Success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
   //   responseForbiddenKeyword: 'Bad gateway',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
  //    checkLocationWorkerRoute: 'https://xxx.example.com',
    },
//text
   {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'ccb_monitor',
      // `name` is used at status page and callback message
      name: '云剪切板服务',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://ccb.windeling.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '个人云端剪切板服务状况监测',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://ccb.windeling.com',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
    //  timeout: 10000,
      // [OPTIONAL] headers to be sent
    //  headers: {
    //    'User-Agent': 'Uptimeflare',
   //     Authorization: 'Bearer YOUR_TOKEN_HERE',
  //    },
      // [OPTIONAL] body to be sent
   //   body: 'text',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
     // responseKeyword: 'Success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
   //   responseForbiddenKeyword: 'Bad gateway',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
//      checkLocationWorkerRoute: 'https://xxx.example.com',
    },

    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'drive_monitor',
      // `name` is used at status page and callback message
      name: 'Cloudflare云存储服务',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://drive.windeling.com',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: '网盘服务状况监测',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://drive.windeling.com',
      // [OPTIONAL] `hideLatencyChart` will hide status page latency chart if set to true
      hideLatencyChart: false,
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
    //  timeout: 10000,
      // [OPTIONAL] headers to be sent
    //  headers: {
    //    'User-Agent': 'Uptimeflare',
   //     Authorization: 'Bearer YOUR_TOKEN_HERE',
  //    },
      // [OPTIONAL] body to be sent
   //   body: 'text',
      // [OPTIONAL] if specified, the response must contains the keyword to be considered as operational.
     // responseKeyword: 'Success',
      // [OPTIONAL] if specified, the response must NOT contains the keyword to be considered as operational.
   //   responseForbiddenKeyword: 'Bad gateway',
      // [OPTIONAL] if specified, the check will run in your specified region,
      // refer to docs https://github.com/lyc8503/UptimeFlare/wiki/Geo-specific-checks-setup before setting this value
//      checkLocationWorkerRoute: 'https://xxx.example.com',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
