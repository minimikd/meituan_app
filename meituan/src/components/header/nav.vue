<template>
  <div class="m-nav">
    <ul class="nav">
      <li class="list my">
        <router-link :to="{name: 'my'}">我的美团</router-link>
        <dl>
          <dd>
            <router-link to="/">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link :to="{name: 'my'}">手机APP</router-link>

        <!-- <router-link to="/">手机APP</router-link> -->
      </li>
      <li class="list bd">
        <router-link :to="{name: 'my'}">商家中心</router-link>
        <dl>
          <dd>
            <router-link :to="{path: '/'}">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">我想合作</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li class="list">
        <router-link :to="{path: '/'}">美团规则</router-link>
        <dl>
          <dd>
            <router-link :to="{path: '/'}">规则中心</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">规则目录</router-link>
          </dd>
          <dd>
            <router-link :to="{path: '/'}">规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="list site">
        <router-link :to="{path: '/'}">网站导航</router-link>
        <div class="subContainer">
          <dl class="hotel">
            <dt>酒店旅游</dt>
            <dd>
              <router-link :to="{path: '/'}">国际机票</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">火车票</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">主题酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">商务酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">公寓</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">豪华酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">客栈</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">青年旅社</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">度假酒店</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">别墅</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">农家院</router-link>
            </dd>
          </dl>
          <!-- 吃美食 -->
          <dl class="food">
            <dt>吃美食</dt>
            <dd>
              <router-link :to="{path: '/'}">烤鱼</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">特色小吃</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">烧烤</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">自助餐</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">火锅</router-link>
            </dd>
            <dd>
              <router-link :to="{path: '/'}">代金券</router-link>
            </dd>
          </dl>
          <!-- 看电影 -->
          <dl class="movie">
            <dt>看电影</dt>
            <dd>
              <router-link to="/">热映电影</router-link>
            </dd>
            <dd>
              <router-link to="/">热门影院</router-link>
            </dd>
            <dd>
              <router-link to="/">热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="/">最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="/">国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">北美票房榜</router-link>
            </dd>
            <dd>
              <router-link to="/">电影排行榜</router-link>
            </dd>
          </dl>
          <!-- 手机应用 -->
          <dl class="app">
            <dt>手机应用</dt>
            <dd>
              <a href="https://i.meituan.com/mobile/down/meituan" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <img
                class="appicon"
                src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                title="外卖app"
                alt="外卖app"
              />
            </dd>
            <dd>
              <a href="https://phoenix.meituan.com/app/" target="_blank">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                  title="榛果app"
                  alt="榛果app"
                />
              </a>
            </dd>
            <dd>
              <!-- <a href="#"> -->
              <a href="https://www.dianping.com/events/m/index.htm" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </a>
              <!-- </a> -->
            </dd>
            <dd>
              <!-- <a href="#"> -->
              <a href="https://maoyan.com/app" target="_blank">
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                />
              </a>
              <!-- </a> -->
            </dd>
          </dl>
        </div>
      </li>
    </ul>
  </div>
</template>
