const categories = [
  { id: "ramen", label: "라멘" },
  { id: "side", label: "사이드" },
  { id: "drink", label: "음료" },
  { id: "service", label: "직원호출" },
];

const toppingsCatalog = [
  { id: "extra-chashu", name: "차슈 추가", price: 3000, visual: "chashu" },
  { id: "extra-spinach", name: "시금치 추가", price: 1000, visual: "spinach" },
  { id: "extra-menma", name: "멘마 추가", price: 1500, visual: "menma" },
  { id: "extra-egg", name: "아지타마고", price: 1500, visual: "egg" },
];

const optionSets = {
  saltiness: ["싱겁게", "보통", "짜게", "매우짜게"],
  noodleThickness: ["얇게", "보통", "굵게"],
  noodleFirmness: ["부드럽게", "보통", "꼬들하게", "단단하게"],
  oilIntensity: ["연하게", "보통", "진하게", "매우 진하게"],
};

const spiceLevels = [
  { emoji: "😊", label: "기본", fill: "linear-gradient(90deg, #f2f3ae, #edd382)" },
  { emoji: "😅", label: "살짝 매움", fill: "linear-gradient(90deg, #edd382, #fc9e4f)" },
  { emoji: "🥵", label: "강한 매움", fill: "linear-gradient(90deg, #fc9e4f, #f4442e)" },
  { emoji: "💀", label: "도전 지옥맛", fill: "linear-gradient(90deg, #f4442e, #020122)" },
];

const ITEMS_PER_PAGE = 4;

const menuImageMap = {
  shoyu: "assets/menu/shio-special.png",
  "shoyu-special": "assets/menu/shoyu-special.png",
  shio: "assets/menu/shio.png",
  "shio-special": "assets/menu/shio-alt.png",
  "black-shoyu": "assets/menu/shoyu.png",
  "black-shoyu-special": "assets/menu/black-shoyu.png",
  "shin-ramen": "assets/menu/pc-ramen.png",
  "black-shin": "assets/menu/black-shin-pack.png",
  hangang: "assets/menu/hangang-pack.png",
  "pc-ramen": "assets/menu/shin-ramen.png",
  "chashu-rice": "assets/menu/chashu-rice.png",
  gyoza: "assets/menu/gyoza.png",
  cola: "assets/menu/cola.png",
  cider: "assets/menu/cider.png",
  beer: "assets/menu/beer.png",
};

const toppingImageMap = {
  "extra-spinach": "assets/menu/spinach.png",
  "extra-menma": "assets/menu/menma.png",
  "extra-egg": "assets/menu/ajitama.png",
};

const menuItems = [
  {
    id: "shoyu",
    category: "ramen",
    name: "쇼유 라멘",
    price: 10000,
    badge: "정통",
    glyph: "醤",
    brothDepth: 0.16,
    description:
      "닭과 돼지를 베이스로 한 맑고 깊은 육수에 특제 간장 타레를 더한 기본에 충실한 한 그릇.",
    visuals: ["noodles", "chashu", "scallion"],
  },
  {
    id: "shoyu-special",
    category: "ramen",
    name: "쇼유 라멘(특선)",
    price: 14000,
    badge: "추천",
    glyph: "特",
    brothDepth: 0.2,
    description:
      "기본 쇼유 라멘에 차슈, 아지타마고, 멘마 등 풍성한 토핑이 더해져 든든한 한 끼로 좋은 메뉴.",
    visuals: ["noodles", "chashu", "egg", "menma", "scallion"],
  },
  {
    id: "shio",
    category: "ramen",
    name: "시오라멘",
    price: 10000,
    badge: "담백",
    glyph: "塩",
    brothDepth: 0.1,
    description:
      "소금을 베이스로 한 담백하고 깔끔한 국물의 라멘으로, 재료 본연의 맛을 살린 맑은 육수가 특징.",
    visuals: ["noodles", "fishcake", "scallion"],
  },
  {
    id: "shio-special",
    category: "ramen",
    name: "시오라멘(특선)",
    price: 14000,
    badge: "특선",
    glyph: "塩特",
    brothDepth: 0.14,
    description:
      "담백한 시오 라멘에 다양한 토핑을 더해 깔끔함과 풍성함을 동시에 즐길 수 있는 메뉴.",
    visuals: ["noodles", "egg", "menma", "chashu", "scallion"],
  },
  {
    id: "black-shoyu",
    category: "ramen",
    name: "블랙쇼유라멘",
    price: 10000,
    badge: "진한맛",
    glyph: "黒",
    brothDepth: 0.28,
    description:
      "진하게 볶은 간장과 향미유가 어우러진 깊고 묵직한 국물. 마늘 풍미가 살아있는 강한 스타일.",
    visuals: ["noodles", "chashu", "chili", "scallion"],
  },
  {
    id: "black-shoyu-special",
    category: "ramen",
    name: "블랙쇼유라멘(특선)",
    price: 14000,
    badge: "인기",
    glyph: "黒特",
    brothDepth: 0.34,
    description:
      "블랙 쇼유 라멘에 풍성한 토핑을 더한 만족감 높은 한 그릇. 진한 국물과 다양한 식감의 조화가 매력적.",
    visuals: ["noodles", "chashu", "egg", "menma", "chili", "scallion"],
  },
  {
    id: "shin-ramen",
    category: "ramen",
    name: "신라면",
    price: 3000,
    badge: "밈픽",
    glyph: "辛",
    brothDepth: 0.18,
    description:
      "전 국민이 이미 알고 있는 그 맛. 공부하다, 게임하다, 인생이 힘들 때 조용히 위로해주는 국물.",
    visuals: ["noodles", "chili", "scallion"],
  },
  {
    id: "black-shin",
    category: "ramen",
    name: "블랙신라면",
    price: 4000,
    badge: "업그레이드",
    glyph: "辛黑",
    brothDepth: 0.22,
    description:
      "돈 조금 더 쓰고 자존감 챙기는 메뉴. 익숙한 매움 위에 더 깊은 풍미가 얹힌 상위호환 라면.",
    visuals: ["noodles", "egg", "chili"],
  },
  {
    id: "hangang",
    category: "ramen",
    name: "한강라면",
    price: 6000,
    badge: "감성",
    glyph: "江",
    brothDepth: 0.14,
    description:
      "여기서 먹는데 왜 한강이 생각나는지 모를 정도로 감성을 살린 메뉴. 야외 아니어도 분위기 완료.",
    visuals: ["noodles", "egg", "fishcake"],
  },
  {
    id: "pc-ramen",
    category: "ramen",
    name: "PC방 라면",
    price: 4000,
    badge: "도파민",
    glyph: "PC",
    brothDepth: 0.18,
    description:
      "게임 안 해도 먹어도 되는 그 라면. 계란과 익숙한 맛의 조합으로 가볍게 만족감이 터지는 메뉴.",
    visuals: ["noodles", "egg", "scallion"],
  },
  {
    id: "chashu-rice",
    category: "side",
    name: "차슈덮밥",
    price: 5000,
    badge: "베스트",
    glyph: "飯",
    description:
      "부드럽게 조리한 차슈를 듬뿍 올린 일본식 덮밥. 달짝지근한 특제 소스와 밥의 조화가 일품인 사이드 메뉴.",
    visuals: ["chashu", "scallion"],
  },
  {
    id: "gyoza",
    category: "side",
    name: "교자",
    price: 3000,
    badge: "바사삭",
    glyph: "餃",
    description:
      "겉은 바삭하고 속은 촉촉한 일본식 군만두. 한 입 베어 물면 육즙이 살아있는 기본 사이드.",
    visuals: ["gyoza"],
  },
  {
    id: "cola",
    category: "drink",
    name: "콜라",
    price: 2000,
    badge: "탄산",
    glyph: "C",
    description: "라멘의 짭조름한 풍미를 시원하게 정리해주는 클래식 탄산음료.",
    visuals: [],
  },
  {
    id: "cider",
    category: "drink",
    name: "사이다",
    price: 2000,
    badge: "청량",
    glyph: "S",
    description: "깔끔한 단맛과 탄산으로 입안을 리셋해주는 시원한 한 잔.",
    visuals: [],
  },
  {
    id: "oolong",
    category: "drink",
    name: "우롱차",
    price: 3000,
    badge: "밸런스",
    glyph: "茶",
    description: "기름기를 잡아주는 깔끔한 차 한 잔. 라멘과 가장 잘 어울리는 일본식 음료.",
    visuals: [],
  },
  {
    id: "beer",
    category: "drink",
    name: "맥주",
    price: 5000,
    badge: "페어링",
    glyph: "麦",
    description:
      "라멘 한 입, 맥주 한 모금. 식사와 함께 즐기는 최고의 한 잔으로 분위기까지 완성해줍니다.",
    visuals: [],
  },
  {
    id: "staff-help",
    category: "service",
    name: "직원 호출",
    price: 0,
    badge: "서비스",
    glyph: "呼",
    description:
      "물, 앞치마, 주문 문의가 필요하면 눌러주세요. 호출 즉시 안내 메시지가 표시됩니다.",
    visuals: [],
  },
];

const state = {
  activeCategory: "ramen",
  currentPage: 1,
  cart: [],
  configDraft: null,
  drag: null,
  resultMode: null,
};

const elements = {
  categoryTabs: document.getElementById("categoryTabs"),
  menuGrid: document.getElementById("menuGrid"),
  menuPagination: document.getElementById("menuPagination"),
  pageIndicator: document.getElementById("pageIndicator"),
  randomPickButton: document.getElementById("randomPickButton"),
  dropZone: document.getElementById("dropZone"),
  queueTags: document.getElementById("queueTags"),
  cartList: document.getElementById("cartList"),
  cartCount: document.getElementById("cartCount"),
  cartTotal: document.getElementById("cartTotal"),
  clearCartButton: document.getElementById("clearCartButton"),
  placeOrderButton: document.getElementById("placeOrderButton"),
  staffCallButton: document.getElementById("staffCallButton"),
  ingredientLayer: document.getElementById("ingredientLayer"),
  brothFill: document.getElementById("brothFill"),
  configModal: document.getElementById("configModal"),
  configTitle: document.getElementById("configTitle"),
  configPreview: document.getElementById("configPreview"),
  spiceBlock: document.getElementById("spiceBlock"),
  spiceEmoji: document.getElementById("spiceEmoji"),
  spiceLabel: document.getElementById("spiceLabel"),
  spiceStatusText: document.getElementById("spiceStatusText"),
  spiceGaugeFill: document.getElementById("spiceGaugeFill"),
  spiceHoldButton: document.getElementById("spiceHoldButton"),
  resetSpiceButton: document.getElementById("resetSpiceButton"),
  saltinessOptions: document.getElementById("saltinessOptions"),
  noodleThicknessOptions: document.getElementById("noodleThicknessOptions"),
  noodleFirmnessOptions: document.getElementById("noodleFirmnessOptions"),
  oilOptions: document.getElementById("oilOptions"),
  toppingOptions: document.getElementById("toppingOptions"),
  configPrice: document.getElementById("configPrice"),
  confirmConfigButton: document.getElementById("confirmConfigButton"),
  closeConfigButton: document.getElementById("closeConfigButton"),
  resultModal: document.getElementById("resultModal"),
  resultList: document.getElementById("resultList"),
  resultTotal: document.getElementById("resultTotal"),
  closeResultButton: document.getElementById("closeResultButton"),
  closeResultAction: document.getElementById("closeResultAction"),
  dragGhost: document.getElementById("dragGhost"),
};

const holdState = {
  timeoutId: null,
  intervalId: null,
};

function formatPrice(value) {
  return `${value.toLocaleString("ko-KR")}원`;
}

function makeUid() {
  return `item-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function getMenuById(menuId) {
  return menuItems.find((item) => item.id === menuId);
}

function getMenuImage(menuId) {
  return menuImageMap[menuId] || "";
}

function getToppingImage(toppingId) {
  return toppingImageMap[toppingId] || "";
}

function getFilteredItems() {
  return menuItems.filter((item) => item.category === state.activeCategory);
}

function getTotalPages(itemCount) {
  return Math.max(1, Math.ceil(itemCount / ITEMS_PER_PAGE));
}

function getSpiceLevelIndex(progress) {
  const ratio = Math.max(0, Math.min(100, progress));
  if (ratio === 0) {
    return 0;
  }

  return Math.min(spiceLevels.length - 1, Math.floor((ratio - 1) / 25));
}

function renderCategories() {
  elements.categoryTabs.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-tab ${state.activeCategory === category.id ? "active" : ""}"
          type="button"
          data-category="${category.id}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");
}

function renderMenu() {
  const filtered = getFilteredItems();
  const totalPages = getTotalPages(filtered.length);
  state.currentPage = Math.min(state.currentPage, totalPages);
  const startIndex = (state.currentPage - 1) * ITEMS_PER_PAGE;
  const pagedItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  elements.randomPickButton.classList.toggle("hidden", state.activeCategory === "service");

  elements.menuGrid.innerHTML = pagedItems
    .map(
      (item) => `
        <article class="menu-card" data-menu-id="${item.id}" data-drag-id="${item.id}">
          <div class="menu-visual ${getMenuImage(item.id) ? "" : "fallback"}" data-glyph="${item.glyph}">
            <span class="menu-badge">${item.badge}</span>
            ${
              getMenuImage(item.id)
                ? `<img class="menu-photo" src="${getMenuImage(item.id)}" alt="${item.name} 사진" draggable="false">`
                : ""
            }
          </div>
          <div class="menu-title">
            <strong>${item.name}</strong>
            <span class="menu-price">${formatPrice(item.price)}</span>
          </div>
          <p class="menu-desc">${item.description}</p>
          <div class="card-actions">
            <span class="drag-tip">카드째 끌어 담기</span>
            <button class="primary-button add-button" type="button" data-add-id="${item.id}">
              ${item.category === "ramen" ? "옵션 선택" : item.category === "service" ? "호출하기" : "바로 담기"}
            </button>
          </div>
        </article>
      `
    )
    .join("");

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  elements.pageIndicator.textContent = `${state.currentPage} / ${totalPages}`;
  elements.menuPagination.innerHTML = Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return `
      <button class="page-button ${page === state.currentPage ? "active" : ""}" type="button" data-page="${page}">
        ${page}
      </button>
    `;
  }).join("");
}

function buildConfigPreview(menu, draft) {
  const toppingNames = draft.toppings.map((id) => toppingsCatalog.find((item) => item.id === id)?.name).filter(Boolean);
  const image = getMenuImage(menu.id);
  return `
    <div class="preview-figure ${image ? "" : "fallback"}" data-glyph="${menu.glyph}">
      ${image ? `<img class="preview-image" src="${image}" alt="${menu.name} 사진">` : ""}
    </div>
    <p class="eyebrow">SELECTED MENU</p>
    <h4>${menu.name}</h4>
    <p>${menu.description}</p>
    <div class="cart-meta">
      <span>염도 ${draft.saltiness}</span>
      <span>굵기 ${draft.noodleThickness}</span>
      <span>익힘 ${draft.noodleFirmness}</span>
      <span>향미유 ${draft.oilIntensity}</span>
      ${toppingNames.length ? `<span>토핑 ${toppingNames.join(", ")}</span>` : ""}
    </div>
  `;
}

function createDefaultDraft(menu) {
  return {
    menuId: menu.id,
    spiceProgress: 0,
    saltiness: "보통",
    noodleThickness: "보통",
    noodleFirmness: "보통",
    oilIntensity: "보통",
    toppings: [],
  };
}

function renderChoiceButtons(container, options, selected, key, isTopping = false) {
  container.innerHTML = options
    .map((option) => {
      if (isTopping) {
        const active = selected.includes(option.id);
        const image = getToppingImage(option.id);
        return `
          <button class="chip-button ${active ? "active" : ""}" type="button" data-draft-key="${key}" data-value="${option.id}">
            <span class="topping-thumb ${image ? "" : "fallback"}" data-glyph="${option.name.slice(0, 1)}">
              ${image ? `<img class="topping-thumb-image" src="${image}" alt="${option.name} 사진">` : ""}
            </span>
            <span class="topping-info">
              <span>${option.name}</span>
              <span class="topping-price">+ ${formatPrice(option.price)}</span>
            </span>
          </button>
        `;
      }

      return `
        <button class="chip-button ${selected === option ? "active" : ""}" type="button" data-draft-key="${key}" data-value="${option}">
          ${option}
        </button>
      `;
    })
    .join("");
}

function openConfigModal(menuId) {
  const menu = getMenuById(menuId);
  if (!menu) {
    return;
  }

  state.configDraft = createDefaultDraft(menu);
  elements.configTitle.textContent = `${menu.name} 옵션 선택`;
  renderConfigModal();
  elements.configModal.classList.remove("hidden");
  elements.configModal.setAttribute("aria-hidden", "false");
}

function closeConfigModal() {
  stopSpiceHold();
  state.configDraft = null;
  elements.configModal.classList.add("hidden");
  elements.configModal.setAttribute("aria-hidden", "true");
}

function renderConfigModal() {
  if (!state.configDraft) {
    return;
  }

  const menu = getMenuById(state.configDraft.menuId);
  const spiceIndex = getSpiceLevelIndex(state.configDraft.spiceProgress);
  const spice = spiceLevels[spiceIndex];
  const extraPrice = state.configDraft.toppings.reduce((sum, toppingId) => {
    const topping = toppingsCatalog.find((entry) => entry.id === toppingId);
    return sum + (topping?.price || 0);
  }, 0);

  elements.configPreview.innerHTML = buildConfigPreview(menu, state.configDraft);
  elements.spiceBlock.classList.toggle("hidden", menu.category !== "ramen");
  elements.spiceEmoji.textContent = spice.emoji;
  elements.spiceEmoji.style.transform = `scale(${1 + spiceIndex * 0.12})`;
  elements.spiceLabel.textContent = spice.label;
  elements.spiceStatusText.textContent =
    state.configDraft.spiceProgress > 0
      ? `현재 게이지 ${Math.round(state.configDraft.spiceProgress)}%. 원하는 지점에서 손을 떼면 선택됩니다.`
      : "게이지를 채워 원하는 맵기에서 손을 떼세요.";
  elements.spiceGaugeFill.style.width = `${state.configDraft.spiceProgress}%`;
  elements.spiceGaugeFill.style.background = spice.fill;
  renderChoiceButtons(elements.saltinessOptions, optionSets.saltiness, state.configDraft.saltiness, "saltiness");
  renderChoiceButtons(
    elements.noodleThicknessOptions,
    optionSets.noodleThickness,
    state.configDraft.noodleThickness,
    "noodleThickness"
  );
  renderChoiceButtons(
    elements.noodleFirmnessOptions,
    optionSets.noodleFirmness,
    state.configDraft.noodleFirmness,
    "noodleFirmness"
  );
  renderChoiceButtons(elements.oilOptions, optionSets.oilIntensity, state.configDraft.oilIntensity, "oilIntensity");
  renderChoiceButtons(elements.toppingOptions, toppingsCatalog, state.configDraft.toppings, "toppings", true);
  elements.configPrice.textContent = formatPrice(menu.price + extraPrice);
}

function addServiceCall() {
  state.resultMode = "service";
  elements.resultList.innerHTML = `
    <div class="result-item">
      <div class="result-top">
        <strong>직원 호출이 접수되었습니다</strong>
        <span>즉시 안내</span>
      </div>
      <div class="cart-meta">
        <span>물/앞치마/주문 문의를 도와드릴게요</span>
      </div>
    </div>
  `;
  elements.resultTotal.innerHTML = `<span>안내 메시지</span><strong>잠시만 기다려 주세요</strong>`;
  elements.resultModal.classList.remove("hidden");
  elements.resultModal.setAttribute("aria-hidden", "false");
}

function addToCart(menuId, config = null) {
  const menu = getMenuById(menuId);
  if (!menu || menu.category === "service") {
    return;
  }

  const chosenToppings = (config?.toppings || [])
    .map((toppingId) => toppingsCatalog.find((item) => item.id === toppingId))
    .filter(Boolean);

  const extraPrice = chosenToppings.reduce((sum, topping) => sum + topping.price, 0);
  const spiceIndex = menu.category === "ramen" ? getSpiceLevelIndex(config?.spiceProgress ?? 0) : null;
  const cartItem = {
    uid: makeUid(),
    menuId: menu.id,
    name: menu.name,
    category: menu.category,
    price: menu.price,
    totalPrice: menu.price + extraPrice,
    spiceIndex,
    options:
      menu.category === "ramen"
        ? {
            saltiness: config?.saltiness || "보통",
            noodleThickness: config?.noodleThickness || "보통",
            noodleFirmness: config?.noodleFirmness || "보통",
            oilIntensity: config?.oilIntensity || "보통",
            toppings: chosenToppings,
          }
        : null,
  };

  state.cart.push(cartItem);
  renderCart();
  renderBowl();
}

function buildCartMeta(item) {
  if (!item.options) {
    return [];
  }

  const meta = [
    `염도 ${item.options.saltiness}`,
    `굵기 ${item.options.noodleThickness}`,
    `익힘 ${item.options.noodleFirmness}`,
    `향미유 ${item.options.oilIntensity}`,
  ];

  if (item.options.toppings.length) {
    meta.push(`토핑 ${item.options.toppings.map((entry) => entry.name).join(", ")}`);
  }

  return meta;
}

function renderCart() {
  if (!state.cart.length) {
    elements.cartList.innerHTML = `
      <div class="empty-cart">
        <div>
          <strong>아직 담긴 메뉴가 없어요</strong>
          <p>메뉴를 드래그해서 그릇에 담거나 옵션을 선택해보세요.</p>
        </div>
      </div>
    `;
  } else {
    elements.cartList.innerHTML = state.cart
      .map((item) => {
        const meta = buildCartMeta(item)
          .map((entry) => `<span>${entry}</span>`)
          .join("");
        const spiceBadge =
          item.spiceIndex !== null ? `<span class="spice-badge">${spiceLevels[item.spiceIndex].emoji}</span>` : "";

        return `
          <article class="cart-item">
            <div class="cart-main">
              <strong>${spiceBadge}${item.name}</strong>
              <span class="item-price">${formatPrice(item.totalPrice)}</span>
            </div>
            ${meta ? `<div class="cart-meta">${meta}</div>` : ""}
            <div class="cart-footer">
              <span>${item.category === "drink" ? "음료" : item.category === "side" ? "사이드" : "라멘"}</span>
              <button class="remove-button" type="button" data-remove-id="${item.uid}">✕ 삭제</button>
            </div>
          </article>
        `;
      })
      .join("");
  }

  const total = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  elements.cartCount.textContent = `${state.cart.length}개`;
  elements.cartTotal.textContent = formatPrice(total);
  renderQueueTags();
}

function mixColor(start, end, ratio) {
  const normalized = Math.max(0, Math.min(1, ratio));
  const startRgb = start.match(/\w\w/g).map((hex) => parseInt(hex, 16));
  const endRgb = end.match(/\w\w/g).map((hex) => parseInt(hex, 16));
  const mixed = startRgb.map((channel, index) => Math.round(channel + (endRgb[index] - channel) * normalized));
  return `rgb(${mixed.join(", ")})`;
}

function getVisualIngredients() {
  const visuals = [];
  let depth = 0;

  state.cart.forEach((item) => {
    const menu = getMenuById(item.menuId);
    if (!menu) {
      return;
    }

    if (menu.category === "ramen") {
      depth += menu.brothDepth + (item.spiceIndex || 0) * 0.04;
      visuals.push(...menu.visuals);

      if (item.spiceIndex >= 2) {
        visuals.push("chili");
      }

      item.options?.toppings.forEach((topping) => visuals.push(topping.visual));
    }

    if (menu.id === "gyoza") {
      visuals.push("gyoza");
    }

    if (menu.id === "chashu-rice") {
      visuals.push("chashu");
    }
  });

  return {
    depth: Math.min(depth, 1),
    visuals: visuals.slice(-12),
  };
}

function renderIngredient(type, x, y, rotation) {
  switch (type) {
    case "noodles":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <path d="M-38 -6 C-26 -18 -10 -18 2 -6 C14 6 28 6 40 -6" fill="none" stroke="#f8d96a" stroke-width="8" stroke-linecap="round"></path>
          <path d="M-34 8 C-20 -2 -6 -2 8 8 C20 16 30 16 40 8" fill="none" stroke="#f5cb47" stroke-width="7" stroke-linecap="round"></path>
        </g>
      `;
    case "chashu":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <ellipse rx="34" ry="24" fill="#f2b2a6" stroke="#d97a63" stroke-width="5"></ellipse>
          <ellipse rx="18" ry="11" fill="#f7dfd8"></ellipse>
        </g>
      `;
    case "egg":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <ellipse rx="24" ry="18" fill="#fff7ea"></ellipse>
          <circle r="9" fill="#f6b73d"></circle>
        </g>
      `;
    case "menma":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <rect x="-24" y="-5" width="48" height="10" rx="5" fill="#d3b07a"></rect>
          <rect x="-16" y="6" width="38" height="9" rx="4.5" fill="#c29c62"></rect>
        </g>
      `;
    case "spinach":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <path d="M0 -24 C16 -10 18 8 0 24 C-18 8 -16 -10 0 -24 Z" fill="#4f9c4b"></path>
          <path d="M0 -22 L0 22" stroke="#8bd475" stroke-width="3"></path>
        </g>
      `;
    case "fishcake":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <circle r="18" fill="#fff2f2"></circle>
          <path d="M0 -10 C8 -10 12 -4 12 0 C12 8 4 12 0 12 C-4 12 -12 8 -12 0 C-12 -4 -8 -10 0 -10 Z" fill="#ff84a0"></path>
        </g>
      `;
    case "scallion":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <rect x="-20" y="-4" width="16" height="8" rx="4" fill="#66b85e"></rect>
          <rect x="-2" y="-8" width="14" height="8" rx="4" fill="#82d77a"></rect>
          <rect x="10" y="-2" width="16" height="8" rx="4" fill="#5ea859"></rect>
        </g>
      `;
    case "chili":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <path d="M-16 10 C-18 -10 6 -20 20 -10 C12 2 8 12 -8 14 Z" fill="#f4442e"></path>
          <path d="M15 -8 C18 -18 24 -16 26 -8" fill="none" stroke="#2f7d32" stroke-width="3" stroke-linecap="round"></path>
        </g>
      `;
    case "gyoza":
      return `
        <g class="ingredient" transform="translate(${x} ${y}) rotate(${rotation})">
          <path d="M-30 0 C-18 -16 18 -16 30 0 C18 18 -18 18 -30 0 Z" fill="#f8dbad" stroke="#e7b97a" stroke-width="4"></path>
          <path d="M-22 0 H22" fill="none" stroke="#d49f5c" stroke-width="3" stroke-dasharray="4 5"></path>
        </g>
      `;
    default:
      return "";
  }
}

function renderBowl() {
  const { depth, visuals } = getVisualIngredients();
  const brothColor = mixColor("F7D781", "844021", depth);
  elements.brothFill.style.fill = brothColor;

  const positions = [
    [145, 132, -10],
    [212, 122, 8],
    [275, 136, 14],
    [132, 172, -18],
    [204, 170, 6],
    [286, 174, 20],
    [164, 206, 12],
    [234, 206, -8],
    [304, 208, 18],
    [182, 144, -14],
    [246, 150, 10],
    [208, 214, -4],
  ];

  elements.ingredientLayer.innerHTML = visuals
    .map((visual, index) => {
      const [x, y, rotation] = positions[index % positions.length];
      return renderIngredient(visual, x, y, rotation);
    })
    .join("");
}

function renderQueueTags() {
  const tags = state.cart.map((item) => {
    if (item.category === "drink") {
      return `<span class="queue-tag">${item.name} <strong>음료 대기</strong></span>`;
    }

    if (item.category === "side") {
      return `<span class="queue-tag">${item.name} <strong>사이드 추가</strong></span>`;
    }

    return `<span class="queue-tag">${item.name} ${spiceLevels[item.spiceIndex || 0].emoji}</span>`;
  });

  elements.queueTags.innerHTML = tags.length ? tags.join("") : `<span class="queue-tag">그릇이 비어 있어요</span>`;
}

function startSelectionFlow(menuId) {
  const menu = getMenuById(menuId);
  if (!menu) {
    return;
  }

  if (menu.category === "service") {
    addServiceCall();
    return;
  }

  if (menu.category === "ramen") {
    openConfigModal(menuId);
    return;
  }

  addToCart(menuId);
}

function updateDraft(key, value) {
  if (!state.configDraft) {
    return;
  }

  if (key === "toppings") {
    const exists = state.configDraft.toppings.includes(value);
    state.configDraft.toppings = exists
      ? state.configDraft.toppings.filter((entry) => entry !== value)
      : [...state.configDraft.toppings, value];
  } else {
    state.configDraft[key] = value;
  }

  renderConfigModal();
}

function updateSpiceProgress(delta) {
  if (!state.configDraft) {
    return;
  }

  state.configDraft.spiceProgress = Math.max(0, Math.min(100, state.configDraft.spiceProgress + delta));
  renderConfigModal();
}

function resetSpiceSelection() {
  if (!state.configDraft) {
    return;
  }

  state.configDraft.spiceProgress = 0;
  renderConfigModal();
}

function startSpiceHold(event) {
  event?.preventDefault();
  stopSpiceHold();
  updateSpiceProgress(6);
  holdState.timeoutId = window.setTimeout(() => {
    holdState.intervalId = window.setInterval(() => {
      updateSpiceProgress(4);
    }, 60);
  }, 120);
}

function stopSpiceHold() {
  window.clearTimeout(holdState.timeoutId);
  window.clearInterval(holdState.intervalId);
  holdState.timeoutId = null;
  holdState.intervalId = null;
}

function openResultModal() {
  state.resultMode = "order";
  const total = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  elements.resultList.innerHTML = state.cart
    .map((item) => {
      const meta = buildCartMeta(item)
        .map((entry) => `<span>${entry}</span>`)
        .join("");

      return `
        <article class="result-item">
          <div class="result-top">
            <strong>${item.name}</strong>
            <span>${formatPrice(item.totalPrice)}</span>
          </div>
          <div class="cart-meta">
            ${item.spiceIndex !== null ? `<span>맵기 ${spiceLevels[item.spiceIndex].emoji}</span>` : ""}
            ${meta}
          </div>
        </article>
      `;
    })
    .join("");
  elements.resultTotal.innerHTML = `<span>최종 합계</span><strong>${formatPrice(total)}</strong>`;
  elements.resultModal.classList.remove("hidden");
  elements.resultModal.setAttribute("aria-hidden", "false");
}

function closeResultModal() {
  const shouldClearOrder = state.resultMode === "order";
  state.resultMode = null;
  elements.resultModal.classList.add("hidden");
  elements.resultModal.setAttribute("aria-hidden", "true");

  if (shouldClearOrder) {
    clearCart();
  }
}

function completeOrder() {
  if (!state.cart.length) {
    elements.dropZone.classList.add("active");
    window.setTimeout(() => elements.dropZone.classList.remove("active"), 520);
    return;
  }

  openResultModal();
}

function clearCart() {
  state.cart = [];
  renderCart();
  renderBowl();
}

function pointInsideDropZone(clientX, clientY) {
  const rect = elements.dropZone.getBoundingClientRect();
  return clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;
}

function setDropHighlight(isActive) {
  elements.dropZone.classList.toggle("active", isActive);
}

function cleanupDrag() {
  if (!state.drag) {
    return;
  }

  state.drag = null;
  elements.dragGhost.classList.add("hidden");
  elements.dragGhost.style.transform = "translate(-9999px, -9999px)";
  setDropHighlight(false);
}

function onDragMove(event) {
  if (!state.drag || event.pointerId !== state.drag.pointerId) {
    return;
  }

  const ghostX = event.clientX + 18;
  const ghostY = event.clientY + 18;
  elements.dragGhost.style.transform = `translate(${ghostX}px, ${ghostY}px)`;
  setDropHighlight(pointInsideDropZone(event.clientX, event.clientY));
}

function onDragEnd(event) {
  if (!state.drag || event.pointerId !== state.drag.pointerId) {
    return;
  }

  const shouldAdd = pointInsideDropZone(event.clientX, event.clientY);
  const menuId = state.drag.menuId;
  cleanupDrag();
  window.removeEventListener("pointermove", onDragMove);
  window.removeEventListener("pointerup", onDragEnd);
  window.removeEventListener("pointercancel", onDragEnd);

  if (shouldAdd) {
    startSelectionFlow(menuId);
  }
}

function beginDrag(event, menuId) {
  event.preventDefault();
  const menu = getMenuById(menuId);
  if (!menu) {
    return;
  }

  state.drag = {
    pointerId: event.pointerId,
    menuId,
  };

  elements.dragGhost.textContent = menu.name;
  elements.dragGhost.classList.remove("hidden");
  elements.dragGhost.style.transform = `translate(${event.clientX + 18}px, ${event.clientY + 18}px)`;
  window.addEventListener("pointermove", onDragMove);
  window.addEventListener("pointerup", onDragEnd);
  window.addEventListener("pointercancel", onDragEnd);
}

function bindEvents() {
  elements.categoryTabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) {
      return;
    }

    state.activeCategory = button.dataset.category;
    state.currentPage = 1;
    renderCategories();
    renderMenu();
  });

  elements.menuPagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-page]");
    if (!button) {
      return;
    }

    state.currentPage = Number(button.dataset.page);
    renderMenu();
  });

  elements.menuGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-id]");
    if (!addButton) {
      return;
    }

    startSelectionFlow(addButton.dataset.addId);
  });

  elements.menuGrid.addEventListener("pointerdown", (event) => {
    if (event.target.closest(".add-button")) {
      return;
    }

    const card = event.target.closest(".menu-card[data-drag-id]");
    if (!card) {
      return;
    }

    beginDrag(event, card.dataset.dragId);
  });

  elements.cartList.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-id]");
    if (!removeButton) {
      return;
    }

    state.cart = state.cart.filter((item) => item.uid !== removeButton.dataset.removeId);
    renderCart();
    renderBowl();
  });

  elements.clearCartButton.addEventListener("click", clearCart);
  elements.placeOrderButton.addEventListener("click", completeOrder);
  elements.staffCallButton.addEventListener("click", addServiceCall);
  elements.randomPickButton.addEventListener("click", () => {
    const filtered = getFilteredItems().filter((item) => item.category !== "service");
    if (!filtered.length) {
      return;
    }

    const picked = filtered[Math.floor(Math.random() * filtered.length)];
    startSelectionFlow(picked.id);
  });

  [elements.saltinessOptions, elements.noodleThicknessOptions, elements.noodleFirmnessOptions, elements.oilOptions, elements.toppingOptions].forEach(
    (container) => {
      container.addEventListener("click", (event) => {
        const button = event.target.closest("[data-draft-key]");
        if (!button) {
          return;
        }

        updateDraft(button.dataset.draftKey, button.dataset.value);
      });
    }
  );

  elements.spiceHoldButton.addEventListener("pointerdown", startSpiceHold);
  elements.spiceHoldButton.addEventListener("pointerup", stopSpiceHold);
  elements.spiceHoldButton.addEventListener("pointerleave", stopSpiceHold);
  elements.spiceHoldButton.addEventListener("pointercancel", stopSpiceHold);
  elements.spiceHoldButton.addEventListener("keydown", (event) => {
    if (event.key === " " || event.key === "Enter") {
      startSpiceHold(event);
    }
  });
  elements.spiceHoldButton.addEventListener("keyup", (event) => {
    if (event.key === " " || event.key === "Enter") {
      stopSpiceHold();
    }
  });
  elements.resetSpiceButton.addEventListener("click", resetSpiceSelection);

  elements.confirmConfigButton.addEventListener("click", () => {
    if (!state.configDraft) {
      return;
    }

    addToCart(state.configDraft.menuId, state.configDraft);
    closeConfigModal();
  });

  elements.closeConfigButton.addEventListener("click", closeConfigModal);
  elements.configModal.addEventListener("click", (event) => {
    if (event.target === elements.configModal) {
      closeConfigModal();
    }
  });

  elements.closeResultButton.addEventListener("click", closeResultModal);
  elements.closeResultAction.addEventListener("click", closeResultModal);
  elements.resultModal.addEventListener("click", (event) => {
    if (event.target === elements.resultModal) {
      closeResultModal();
    }
  });
}

function init() {
  renderCategories();
  renderMenu();
  renderCart();
  renderBowl();
  bindEvents();
}

init();
