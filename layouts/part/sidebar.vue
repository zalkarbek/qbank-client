<template>
  <aside class="aside aside-fixed">
    <div class="aside-header">
      <nuxt-link to="/" class="aside-logo" style="font-weight: bolder">
        РСК <span>Банк</span>
      </nuxt-link>
      <a href="" class="aside-menu-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </a>
    </div>
    <div class="aside-body ps ps--active-y">
      <div class="aside-loggedin">
        <div class="d-flex align-items-center justify-content-start">
          <a href="" class="avatar">
            <img src="/images/user.png" class="rounded-circle" alt="">
          </a>
          <div class="aside-alert-link">
            <!--            <a href="" class="new" data-toggle="tooltip" title="" data-original-title="You have 2 unread messages"><svg-->
            <!--              xmlns="http://www.w3.org/2000/svg"-->
            <!--              width="24"-->
            <!--              height="24"-->
            <!--              viewBox="0 0 24 24"-->
            <!--              fill="none"-->
            <!--              stroke="currentColor"-->
            <!--              stroke-width="2"-->
            <!--              stroke-linecap="round"-->
            <!--              stroke-linejoin="round"-->
            <!--              class="feather feather-message-square"-->
            <!--            ><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></a>-->
            <!--            <a href="" class="new" data-toggle="tooltip" title="" data-original-title="You have 4 new notifications"><svg-->
            <!--              xmlns="http://www.w3.org/2000/svg"-->
            <!--              width="24"-->
            <!--              height="24"-->
            <!--              viewBox="0 0 24 24"-->
            <!--              fill="none"-->
            <!--              stroke="currentColor"-->
            <!--              stroke-width="2"-->
            <!--              stroke-linecap="round"-->
            <!--              stroke-linejoin="round"-->
            <!--              class="feather feather-bell"-->
            <!--            ><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0" /></svg></a>-->
            <!--            <a href="" data-toggle="tooltip" title="" data-original-title="Sign out"><svg-->
            <!--              xmlns="http://www.w3.org/2000/svg"-->
            <!--              width="24"-->
            <!--              height="24"-->
            <!--              viewBox="0 0 24 24"-->
            <!--              fill="none"-->
            <!--              stroke="currentColor"-->
            <!--              stroke-width="2"-->
            <!--              stroke-linecap="round"-->
            <!--              stroke-linejoin="round"-->
            <!--              class="feather feather-log-out"-->
            <!--            ><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg></a>-->
          </div>
        </div>
        <div class="aside-loggedin-user">
          <div class="d-flex align-items-center justify-content-between mg-b-2" data-toggle="collapse">
            <h6 class="tx-semibold mg-b-0">
              Админ
            </h6>
          </div>
          <p class="tx-color-03 tx-12 mg-b-0">
            Administrator
          </p>
        </div>
        <div id="loggedinMenu" class="collapse show">
          <ul class="nav nav-aside mg-b-0">
            <!--            <li class="nav-item">-->
            <!--              <a href="" class="nav-link">-->
            <!--                <svg-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                  width="24"-->
            <!--                  height="24"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  fill="none"-->
            <!--                  stroke="currentColor"-->
            <!--                  stroke-width="2"-->
            <!--                  stroke-linecap="round"-->
            <!--                  stroke-linejoin="round"-->
            <!--                  class="feather feather-edit"-->
            <!--                >-->
            <!--                  <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />-->
            <!--                  <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />-->
            <!--                </svg>-->
            <!--                <span>Edit Profile</span>-->
            <!--              </a>-->
            <!--            </li>-->
            <!--            <li class="nav-item">-->
            <!--              <a href="" class="nav-link">-->
            <!--                <svg-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                  width="24"-->
            <!--                  height="24"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  fill="none"-->
            <!--                  stroke="currentColor"-->
            <!--                  stroke-width="2"-->
            <!--                  stroke-linecap="round"-->
            <!--                  stroke-linejoin="round"-->
            <!--                  class="feather feather-user"-->
            <!--                >-->
            <!--                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />-->
            <!--                  <circle cx="12" cy="7" r="4" />-->
            <!--                </svg>-->
            <!--                <span>View Profile</span>-->
            <!--              </a>-->
            <!--            </li>-->
            <!--            <li class="nav-item">-->
            <!--              <a href="" class="nav-link">-->
            <!--                <svg-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                  width="24"-->
            <!--                  height="24"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  fill="none"-->
            <!--                  stroke="currentColor"-->
            <!--                  stroke-width="2"-->
            <!--                  stroke-linecap="round"-->
            <!--                  stroke-linejoin="round"-->
            <!--                  class="feather feather-settings"-->
            <!--                >-->
            <!--                  <circle cx="12" cy="12" r="3" />-->
            <!--                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />-->
            <!--                </svg>-->
            <!--                <span>Account Settings</span>-->
            <!--              </a>-->
            <!--            </li>-->
            <!--            <li class="nav-item">-->
            <!--              <a href="" class="nav-link">-->
            <!--                <svg-->
            <!--                  xmlns="http://www.w3.org/2000/svg"-->
            <!--                  width="24"-->
            <!--                  height="24"-->
            <!--                  viewBox="0 0 24 24"-->
            <!--                  fill="none"-->
            <!--                  stroke="currentColor"-->
            <!--                  stroke-width="2"-->
            <!--                  stroke-linecap="round"-->
            <!--                  stroke-linejoin="round"-->
            <!--                  class="feather feather-help-circle"-->
            <!--                >-->
            <!--                  <circle cx="12" cy="12" r="10" />-->
            <!--                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />-->
            <!--                  <line x1="12" y1="17" x2="12" y2="17" />-->
            <!--                </svg>-->
            <!--                <span>Help Center</span>-->
            <!--              </a>-->
            <!--            </li>-->
            <li class="nav-item">
              <a href="" class="nav-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                <span>Выйти</span>
              </a>
            </li>
          </ul>
        </div>
      </div><!-- aside-loggedin -->
      <ul class="nav nav-aside">
        <li class="nav-label">
          Медиа контент
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/ads">
            <span>Загрузка видео/фото</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/ads/ticker-text">
            <span>Бегущая строка</span>
          </nuxt-link>
        </li>

        <li class="nav-label mg-t-25">
          Отчет за сегодня
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/today" class="nav-link">
            <span>За сегодня</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/operator-today-served" class="nav-link">
            <span>По сотрудникам</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/service-today-served" class="nav-link">
            <span>По услугам</span>
          </nuxt-link>
        </li>

        <li class="nav-label mg-t-25">
          Диапазон
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/range-list" class="nav-link">
            <span>Общий список</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/operator-range-served" class="nav-link">
            <span>По сотрудникам</span>
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/service-range-served" class="nav-link">
            <span>По услугам</span>
          </nuxt-link>
        </li>

        <li class="nav-label mg-t-25">
          Сравнительный отчет
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/compares" class="nav-link">
            <span>Сравнение</span>
          </nuxt-link>
        </li>

        <li class="nav-label mg-t-25">
          Графический отчет
        </li>
        <li class="nav-item">
          <nuxt-link to="/turns/graph-stream" class="nav-link">
            <span>График линейная</span>
          </nuxt-link>
        </li>

        <!--        <li class="nav-label mg-t-25">-->
        <!--          Pages-->
        <!--        </li>-->
        <!--        <li class="nav-item with-sub">-->
        <!--          <a href="" class="nav-link"><svg-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            stroke-width="2"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            class="feather feather-user"-->
        <!--          ><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> <span>User Pages</span></a>-->
        <!--          <ul>-->
        <!--            <li><a href="page-profile-view.html">View Profile</a></li>-->
        <!--            <li><a href="page-connections.html">Connections</a></li>-->
        <!--            <li><a href="page-groups.html">Groups</a></li>-->
        <!--            <li><a href="page-events.html">Events</a></li>-->
        <!--          </ul>-->
        <!--        </li>-->
        <!--        <li class="nav-item with-sub">-->
        <!--          <a href="" class="nav-link"><svg-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            stroke-width="2"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            class="feather feather-file"-->
        <!--          ><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><polyline points="13 2 13 9 20 9" /></svg> <span>Other Pages</span></a>-->
        <!--          <ul>-->
        <!--            <li><a href="page-timeline.html">Timeline</a></li>-->
        <!--          </ul>-->
        <!--        </li>-->
        <!--        <li class="nav-label mg-t-25">-->
        <!--          User Interface-->
        <!--        </li>-->
        <!--        <li class="nav-item">-->
        <!--          <a href="../../components" class="nav-link"><svg-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            stroke-width="2"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            class="feather feather-layers"-->
        <!--          ><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg> <span>Components</span></a>-->
        <!--        </li>-->
        <!--        <li class="nav-item">-->
        <!--          <a href="../../collections" class="nav-link"><svg-->
        <!--            xmlns="http://www.w3.org/2000/svg"-->
        <!--            width="24"-->
        <!--            height="24"-->
        <!--            viewBox="0 0 24 24"-->
        <!--            fill="none"-->
        <!--            stroke="currentColor"-->
        <!--            stroke-width="2"-->
        <!--            stroke-linecap="round"-->
        <!--            stroke-linejoin="round"-->
        <!--            class="feather feather-box"-->
        <!--          ><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z" /><polyline points="2.32 6.16 12 11 21.68 6.16" /><line x1="12" y1="22.76" x2="12" y2="11" /></svg> <span>Collections</span></a>-->
        <!--        </li>-->
      </ul>
    </div>
  </aside>
</template>
