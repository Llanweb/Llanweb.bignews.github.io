// 沙箱模式
(function (w) {
    // 基地址
    var baseURL = 'http://localhost:8080/api/v1';
    var bigNews = {
        big: baseURL,
        admin_login: baseURL + '/admin/user/login',//用户登录
        admin_info: baseURL + '/admin/user/info',//获取用户信息
        admin_detail: baseURL + '/admin /user/detail',//获取用户详情
        admin_edit: baseURL + '/admin/user/edit',//编辑用户信息
        admin_list: baseURL + '/admin/category/list',//所有文章类别
        admin_add: baseURL + '/admin/category/add',//新增文章类别
        admin_search: baseURL + '/admin/category/search',//根据id查询指定文章类别
        admin_catEdit: baseURL + '/admin/category/edit',//编辑文章类别
        admin_delete: baseURL + '/admin/category/delete',//删除文章类别
        admin_query: baseURL + '/admin/article/query',//文章搜索
        admin_publish: baseURL + '/admin/article/publish',//发布文章
        admin_art_search: baseURL + '/admin/article/search',//根据id获取文章信息
        admin_artEdit: baseURL + '/admin/article/edit',//文章编辑
        admin_artDelete: baseURL + '/admin/article/delete',//删除文章
        admin_dataInfo: baseURL + '/admin/data/info',//获取统计数据
        admin_article: baseURL + '/admin/data/article',//日新增文章数量统计
        admin_category: baseURL + '/admin/data/category',//各类型文章数量统计
        admin_visit: baseURL + '/admin/data/visit',//日文章访问量
        admin_comSearch: baseURL + '/admin/comment/search',//文章评论搜索
        admin_pass: baseURL + '/admin/comment/pass',//评论审核通过
        admin_reject: baseURL + '/admin/comment/reject',//评论审核不通过
        admin_comDelete: baseURL + '/admin/comment/delete',//删除评论

        // 用户模块 
        index_hotpic: baseURL + '/index/hotpic',//首页焦点图
        index_category: baseURL + '/index/category',//文章类型
        index_latest: baseURL + '/index/latest',//最新资讯
        index_rank: baseURL + '/index/rank',//热门排行
        index_latest_comment: baseURL + '/index/latest_comment',//最新评论
        index_attention: baseURL + '/index/attention',//焦点关注 
        index_article: baseURL + '/index/article',//文章详细内容
        index_get_comment: baseURL + '/index/get_comment',//评论列表
        index_post_comment: baseURL + '/index/post_comment',//发表评论
        index_search: baseURL + '/index/search',//文章搜索

    }

    w.bigNews = bigNews;
})(window);
