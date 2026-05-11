const state = {
  route: "home",
  previous: "home",
  menuOffset: 0,
};

const titles = {
  home: "校园食堂",
  feed: "校园食堂",
  map: "CampusCanteen",
  canteen: "校园餐厅",
  people: "校园食堂",
  groups: "校园食堂",
  stats: "校园餐厅",
  reservation: "预警详情",
  notifications: "校园食堂",
  profile: "校园食堂",
};

const flows = [
  { name: "北广场食堂", wait: "5分钟 / 45号", state: "free", label: "空闲", bars: [20, 28, 36, 42, 54, 30, 20] },
  { name: "橙狐小馆", wait: "约12分钟", state: "medium", label: "适中", bars: [15, 22, 44, 50, 56, 68, 22] },
];

const dishes = [
  {
    name: "经典田园沙拉",
    price: "$6.00",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "番茄罗勒浓汤",
    price: "$4.50",
    img: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "香草烤鸡饭",
    price: "$7.20",
    img: "https://images.unsplash.com/photo-1543353071-10c8ba85a904?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "咖喱豆腐碗",
    price: "$5.80",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=80",
  },
];

const posts = [
  {
    user: "Alex Rivera",
    meta: "2分钟前 · 中央大厅",
    text: "中央大厅新出的藜麦碗真的很惊喜，酱汁清爽，午饭刚好。",
    img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80",
    likes: 128,
    comments: 24,
  },
  {
    user: "Jordan Smith",
    meta: "5分钟前 · 图书馆咖啡厅",
    text: "周五夜市的甜点窗口开始营业了，排队不算久。",
    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=700&q=80",
    likes: 89,
    comments: 12,
  },
  {
    user: "Maya Kapoor",
    meta: "今天 · 绿台餐厅",
    text: "今天尝试了素食咖喱，层次很柔和，适合想吃清淡的人。",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=700&q=80",
    likes: 76,
    comments: 8,
  },
];

const menus = [
  { name: "牛油果藜麦碗", price: "$8.50", tags: "营养、清爽、低负担", hot: true },
  { name: "香辣烤鸡卷", price: "$12.00", tags: "微辣、高蛋白、饱腹", hot: false },
];

const infos = [
  {
    title: "校园营养指南",
    text: "来自学生服务部的最新动态，帮助你更轻松地平衡饮食。",
    img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "新食堂开业经典",
    text: "北广场餐厅新增一组早餐窗口，开放时间延长至上午 10 点。",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Top 10 菜单",
    text: "看看本周同学们最常点的菜品，收藏你的下一顿灵感。",
    img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=80",
  },
];

const groups = [
  { name: "午餐伙伴", meta: "4 名成员 · 正在计划去中央食堂吃午餐", tag: "活跃中", avatars: ["A", "J", "M", "+1"] },
  { name: "302 宿舍吃货团", meta: "2 名成员 · 正在寻找披萨店", tag: "计划中", avatars: ["L", "W"] },
  { name: "周五晚咖喱团", meta: "8 名成员 · 每月挑战新菜", tag: "空闲", avatars: ["S", "K", "P", "+5"] },
];

const notices = [
  { kind: "warning", title: "中央大厅非常拥挤！", text: "目前排队时间超过 25 分钟，建议前往北广场食堂。", icon: "triangle-alert" },
  { kind: "success", title: "您的预订餐点已就绪", text: "请前往 4 号窗口取餐，不要忘记带上您的取餐码。", icon: "check-circle-2" },
  { kind: "info", title: "限量供应：香辣烧烤拼盘", text: "仅剩 5 份，先到先得。", icon: "info" },
  { kind: "info", title: "周一开启素食周", text: "在所有餐厅探索 12 款全新植物基菜谱。", icon: "sparkles" },
];

const chat = [
  { type: "assistant", text: "实时信息显示，北广场目前处于高峰容量。为了节省时间，建议查看附近的备选地点。" },
  { type: "user", text: "谢谢提醒！图书馆咖啡厅有季节限定套餐吗？" },
  { type: "assistant", text: "有的。南瓜香料拿铁目前在图书馆咖啡厅有供应，吧台无需排队。" },
];

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function renderFlow() {
  qs("#flow-list").innerHTML = flows
    .map(
      (flow) => `
        <article class="flow-card" data-state="${flow.state === "medium" ? "medium" : "busy"}">
          <div class="flow-top">
            <div>
              <strong>${flow.name}</strong>
              <span>等待 ${flow.wait}</span>
            </div>
            <span class="status-chip ${flow.state === "free" ? "green" : "amber"}">${flow.label}</span>
          </div>
          <div class="bars">
            ${flow.bars.map((height) => `<span style="height:${height}%"></span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderDishes() {
  const rotated = [...dishes.slice(state.menuOffset), ...dishes.slice(0, state.menuOffset)];
  qs("#dish-strip").innerHTML = rotated
    .map(
      (dish) => `
        <article class="dish-card">
          <img src="${dish.img}" alt="${dish.name}" />
          <div>
            <h4>${dish.name}</h4>
            <p>${dish.price}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderFeed() {
  qs("#feed-tabs").innerHTML = ["最新", "热门", "我的收藏"]
    .map((tab, index) => `<button class="${index === 0 ? "is-active" : ""}" type="button">${tab}</button>`)
    .join("");

  qs("#post-list").innerHTML = posts
    .map(
      (post) => `
        <article class="post-card">
          <div class="post-author">
            <span class="mini-avatar">${post.user.slice(0, 2).toUpperCase()}</span>
            <div>
              <strong>${post.user}</strong>
              <span>${post.meta}</span>
            </div>
            <button class="icon-btn ghost" type="button" aria-label="更多">${icon("more-vertical")}</button>
          </div>
          <img class="post-image" src="${post.img}" alt="${post.name || "校园食堂动态"}" />
          <p>${post.text}</p>
          <div class="post-actions">
            <span>${icon("heart")} ${post.likes}</span>
            <span>${icon("message-circle")} ${post.comments}</span>
            <span>${icon("bookmark")}</span>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderCharts() {
  qs("#people-chart").innerHTML = [24, 42, 64, 88, 58, 42, 28, 22, 44, 56]
    .map((height, index) => `<span class="${index === 3 ? "is-hot" : ""}" style="height:${height}%"></span>`)
    .join("");

  qs("#peak-chart").innerHTML = [22, 54, 78, 88, 33, 42, 66]
    .map((height, index) => `<span class="${[1, 2, 3, 6].includes(index) ? "hot" : ""}" style="height:${height}%"></span>`)
    .join("");

  qs("#ranking-list").innerHTML = ["绿台餐厅", "科技园熟食店", "咖啡烘焙坊"]
    .map(
      (name, index) => `
        <div class="ranking-row">
          <span class="rank-dot">${index + 1}</span>
          <strong>${name}</strong>
          <span>★★★★★</span>
        </div>
      `,
    )
    .join("");
}

function renderMenus() {
  qs("#menu-list").innerHTML = menus
    .map(
      (menu, index) => `
        <article class="menu-row">
          <img class="menu-thumb" src="${index === 0 ? dishes[0].img : dishes[2].img}" alt="${menu.name}" />
          <div>
            <h4>${menu.name}</h4>
            <p>${menu.hot ? icon("flame") : icon("leaf")} ${menu.tags}</p>
          </div>
          <strong>${menu.price}</strong>
        </article>
      `,
    )
    .join("");
}

function renderInfo() {
  qs("#info-list").innerHTML = infos
    .map(
      (item) => `
        <article class="info-card">
          <img src="${item.img}" alt="${item.title}" />
          <div>
            <h4>${item.title}</h4>
            <p>${item.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderGroups() {
  qs("#group-list").innerHTML = groups
    .map(
      (group) => `
        <article class="group-card" data-open="reservation">
          <div class="avatar-stack">
            ${group.avatars.map((avatar) => `<span>${avatar}</span>`).join("")}
          </div>
          <div>
            <h4>${group.name}</h4>
            <span>${group.meta}</span>
          </div>
          <strong class="tag">${group.tag}</strong>
          ${icon("chevron-right")}
        </article>
      `,
    )
    .join("");
}

function renderNotices() {
  qs("#notice-list").innerHTML = notices
    .map(
      (notice) => `
        <article class="notice-card ${notice.kind}">
          <span class="notice-icon">${icon(notice.icon)}</span>
          <div>
            <strong>${notice.title}</strong>
            <p>${notice.text}</p>
          </div>
          ${icon("chevron-right")}
        </article>
      `,
    )
    .join("");
}

function renderChat() {
  qs("#chat-thread").innerHTML = chat
    .map((item) => `<div class="bubble ${item.type}">${item.text}</div>`)
    .join("");
}

function syncIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function setRoute(route) {
  if (!titles[route]) return;
  state.previous = state.route;
  state.route = route;
  qsa(".screen").forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === route));
  qsa(".rail-item, .bottom-item").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.route === route);
  });
  qs("#screen-title").textContent = titles[route];
  qs(".back-button").style.display = ["home", "map", "feed", "people", "stats"].includes(route) ? "none" : "grid";
  syncIcons();
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const routeButton = event.target.closest("[data-route]");
    const routeTarget = event.target.closest("[data-route-target]");
    const openButton = event.target.closest("[data-open]");
    const action = event.target.closest("[data-action]");

    if (routeButton) {
      setRoute(routeButton.dataset.route);
    }

    if (routeTarget) {
      setRoute(routeTarget.dataset.routeTarget);
    }

    if (openButton) {
      setRoute(openButton.dataset.open);
    }

    if (action?.dataset.action === "shuffle-menu") {
      state.menuOffset = (state.menuOffset + 1) % dishes.length;
      renderDishes();
      syncIcons();
    }

    if (action?.dataset.action === "create-group") {
      groups.unshift({
        name: "新建午餐小队",
        meta: "3 名成员 · 等待确认目的地",
        tag: "新建",
        avatars: ["我", "+2"],
      });
      renderGroups();
      setRoute("groups");
    }
  });

  qs(".back-button").addEventListener("click", () => setRoute(["reservation", "canteen"].includes(state.route) ? "map" : "home"));
}

function renderAll() {
  renderFlow();
  renderDishes();
  renderFeed();
  renderCharts();
  renderMenus();
  renderInfo();
  renderGroups();
  renderNotices();
  renderChat();
  bindEvents();
  syncIcons();
}

document.addEventListener("DOMContentLoaded", renderAll);
