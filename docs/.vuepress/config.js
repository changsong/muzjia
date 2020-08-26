const fs = require("fs");

const resumeSidebar = fs
  .readdirSync(`${__dirname}/../resume/`)
  .filter((val) => val !== "README.md");
const interviewSidebar = fs
  .readdirSync(`${__dirname}/../interview/`)
  .filter((val) => val !== "README.md");
// const techSidebar = fs
//   .readdirSync(`${__dirname}/../tech/cache/`)
//   .filter((val) => val !== "README.md");

module.exports = {
    title: '木子家',
    description: '欢迎大家',

     /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/mzjia_logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/mzjia_logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/mzjia_logo.png",
      },
    ]
  ],

 themeConfig: {
        logo: 'https://jsong-data.oss-cn-hangzhou.aliyuncs.com/image/mzjia_logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '笔试面试题', link: '/interview/' },
            { text: '技术基础', link: '/tech/' },
            { text: '优秀简历', link: '/resume/' }
        ],
        sidebar: {
          "/resume/": resumeSidebar,
          "/interview/": interviewSidebar,
          "/tech/": [
                    '',
                    'code-guide/ali_code_guide',
                    'code-guide/html_guide',
                    'code-guide/javascript_guide',
                    'code-guide/json_guide',
                    'code-guide/object-c_guide',
                    'code-guide/plugs_guide',
                    'code-guide/python_guide',
                    'code-guide/shell_guide',
                    'algorithm/common-algorithm',
                    'algorithm/Consistent-Hash',
                    'algorithm/Consistent-hash-implement',
                    'algorithm/guava-bloom-filter',
                    'algorithm/Limiting',
                    'thread/ArrayBlockingQueue',
                    'thread/ConcurrentHashMap',
                    'thread/Java-lock',
                    'thread/ReentrantLock',
                    'thread/Synchronize',
                    'thread/Thread-common-problem',
                    'thread/thread-communication',
                    'thread/thread-gone',
                    'thread/thread-gone2',
                    'thread/Threadcore',
                    'thread/ThreadPoolExecutor',
                    'additional-skills/how-to-use-git-efficiently',
                    'architecture-design/million-sms-push',
                    'architecture-design/seconds-kill',
                    'architecture-design/Spike',
                    'cache/Cache-design',
                    'cache/LRU-cache',
                    'collections/ArrayList',
                    'collections/HashMap',
                    'collections/HashSet',
                    'collections/LinkedHashMap',
                    'collections/LinkedList',
                    'concurrent/ConcurrentHashMap',
                    'concurrent/Consistent-Hash',
                    'concurrent/Java-lock',
                    'concurrent/ReentrantLock',
                    'concurrent/Synchronize',
                    'concurrent/thread-communication',
                    'concurrent/volatile',
                    'db/DB-split',
                    'db/index_doc',
                    'db/lock',
                    'db/MySQL-Index',
                    'db/sharding-db',
                    'db/SQL-optimization',
                    'db/stored_procedure',
                    'db/transaction',
                    // 'db-design-guide/mysql_design_guide',
                    'distributed/Distributed-Limit',
                    'distributed/distributed-lock-redis',
                    'distributed/ID-generator',
                    'frame/guava-cache',
                    'frame/kafka-consumer',
                    'frame/kafka-product',
                    'frame/spring-bean-lifecycle',
                    'frame/SpringAOP',
                    'jvm/ClassLoad',
                    'jvm/cpu-percent-100',
                    'jvm/GarbageCollection',
                    'jvm/GC',
                    'jvm/JVM-concurrent-HashSet-problem',
                    'jvm/MemoryAllocation',
                    'jvm/newObject',
                    'jvm/OOM-analysis',
                    'jvm/OOM-Disruptor',
                    'jvm/volatile',
                    'kafka/kafka-product',
                    'net-work/TCP-IP',
                    'netty/cicada',
                    'netty/cim',
                    'netty/Netty(1)TCP-Heartbeat',
                    'netty/Netty(1)TCP-Heartbeat',
                    'oo-design/oo-design',
                    'server/command',
                    'server/dd',
                    'shell/log',
                    'spring/spring-bean-lifecycle',
                    'spring/SpringAOP',
                    'sql-optimization/SQL-optimization',
                    'sys_optimize/Limiting',
                    'sys-design/Spike',
                    'third-party-component/cicada',
                    'third-party-component/guava-cache',
                    'third-party-component/seconds-kill'
                    ]
        }
        // sidebar: [
        //     {
        //       title: '笔试面试',
        //       path: '/interview/',   
        //       children: [
        //       {
        //         '/interview/': [
        //         '',  /* /interview/ */
        //         'alibaba',  /* /interview/alibaba.html */
        //         'amazon',/* /interview/amazon.html */
        //         'baidu',  /* /interview/baidu.html */
        //         'meituan',  /* /interview/meituan.html */
        //         'tencent',  /* /interview/tencent.html */
        //         'database',  /* /interview/database.html */
        //         'java_base',  /* /interview/java_base.html */
        //         'javascript',/* /interview/javascript.html */
        //         'os',/* /interview/os.html */
        //         'spring',  /* /interview/spring.html */
        //         'sql'   /* /interview/sql.html */
        //         ]
        //       }
        //     ]
        //    },

        //    {
        //     title: '优秀简历样本',
        //     path: '/resume/',   
        //     children: [
        //       {'/resume/': [
        //         '',   /* /resume/ */
        //         'good_arch_sample_1', /* /additional-skills/how-to-use-git-efficiently.html */
        //         'good_dev_sample_1'  /* /algorithm/common-algorithm.html */
        //       ]},
        //     ]
        //   },

        //   {
        //     title: '技术基础',
        //     path: '/tech/', 
        //     children: [
        //       {'/tech/': [
        //         '',   /* /resume/ */
        //         'additional-skills/how-to-use-git-efficiently', /* /additional-skills/how-to-use-git-efficiently.html */
        //         'algorithm/common-algorithm',/* /algorithm/common-algorithm.html */
        //         'algorithm/Consistent-Hash',/* /algorithm/Consistent-Hash.html */
        //         'algorithm/consistent-hash-implement',/* /algorithm/consistent-hash-implement.html */
        //         'algorithm/guava-bloom-filter',/* /algorithm/guava-bloom-filter.html */
        //         'algorithm/Limiting' 
        //       ]
        //      },
        //     ]
        //   }

        // ]
    }
}
