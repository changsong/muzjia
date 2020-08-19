module.exports = {
    title: '木子家 - 程序员的大家庭',
    description: '欢迎大家',
    themeConfig: {
        logo: '/assets/img/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { text: '笔试面试题', link: '/interview/' },
            { text: '技术基础', link: '/tech/' },
            { text: '优秀简历', link: '/resume/' }
        ],
        sidebar: 'auto',
        sidebar: {
            '/interview/': [
              '',     /* /foo/ */
              'one',  /* /foo/one.html */
              'two'   /* /foo/two.html */
            ],
      
            '/resume/': [
              'README',      /* /bar/ */
              'good_arch_sample_1', /* /bar/three.html */
              'good_dev_sample_1'   /* /bar/four.html */
            ],
      
            // fallback
            '/tech/': [
              '',        /* /tech/ */
              'contact', /* /contact.html */
              'about'    /* /about.html */
            ]
          }
    }
}
