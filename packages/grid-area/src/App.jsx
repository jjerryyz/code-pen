import { defineComponent } from "vue";
import "./index.scss";
import "//at.alicdn.com/t/c/font_3713959_jnhvpjz1y9f.js";

const icons = ["rocket", "event_seat", "translate", "watch_later", "savings", "language"];

const colors = ["white", "red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const views = ["view_week", "view_module", "view_timeline"];

const bottomIcons = ["star_rate", "favorite", "pentagon", "rectangle", "hexagon", "change_history"];

export default defineComponent({
  setup() {
    const leftNavBox = (
      <div class="left-nav-box">
        {icons.map((icon) => (
          <div class="icon">
            <span class="material-icons">{icon}</span>
          </div>
        ))}
      </div>
    );

    const colorBox = (
      <div class="color-box">
        {colors.map((color) => (
          <input type="radio" name="theme" value={color} />
        ))}
      </div>
    );

    const viewsBox = (
      <div class=" views-box">
        <span>View</span>
        {views.map((icon) => (
          <div class="icon">
            <span class="material-icons">{icon}</span>
          </div>
        ))}
      </div>
    );

    const searchBox = (
      <div class=" search-box">
        <input />
      </div>
    );

    const picsBox = (
      <div class=" pics-box">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
          alt="Nature!"
        />
      </div>
    );

    const bottomNavBox = (
      <div class="bottom-nav-box">
        {bottomIcons.map((icon) => (
          <div class="icon">
            <span class="material-icons">{icon}</span>
          </div>
        ))}
      </div>
    );

    return () => (
      <div id="container">
        {leftNavBox}
        {colorBox}
        {searchBox}
        {viewsBox}
        {picsBox}
        {bottomNavBox}
      </div>
    );
  },
});
