# CampusCanteen

这是根据 Canva 第 35-37 页截图还原的校园食堂交互原型。项目是纯静态前端，适合直接部署到 GitHub Pages。

## 页面与交互

- 首页：搜索、今日推荐、食堂人流量、精选菜品。
- 地图：校园食堂状态点，支持进入食堂详情和预警详情。
- 动态：学生评价流与菜品帖子。
- 人群：校园资讯与食堂公告。
- 统计：月度流量、高峰时段和餐厅排名。
- 用餐小组：小组列表、创建小组、进入预约场景。
- 通知与个人中心：模拟通知提醒和个人周概览。

## 本地运行

直接打开：

```text
index.html
```

或者在仓库根目录启动静态服务：

```bash
python -m http.server 8000
```

访问：

```text
http://localhost:8000/
```

## GitHub Pages

把仓库推到 GitHub 后，可以用 Pages 部署根目录，然后访问：

```text
https://你的用户名.github.io/campus-canteen/
```