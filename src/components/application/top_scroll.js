import React, { Component } from "react";

export default class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true
      });
    } else {
      this.setState({
        is_visible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const { is_visible } = this.state;
    return (
      <div className={'scroll-to-top' + (is_visible ? ' visible' : '')}>
        {is_visible && (
          <div onClick={() => this.scrollToTop()}>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              xlink="http://www.w3.org/1999/xlink"
              width="43px" height="50px">
              <image  x="0px" y="0px" width="43px" height="50px"  href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAyCAMAAADyWtKhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABrVBMVEWZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJmZAJn///8+lb1UAAAAjXRSTlMADVe55daAIgMzgcbx/tigWQ8BKWGq9dGDOwURQKH2yWMeCiyJ2frotggjeMH51JhDIVWf6b13OgISN4wYGnn9PxZms+Pwz5A2FVBqJXGav+D37ez05Kf8yi9/r0sbXsB16teeRCj78gkXRZzIZx8LKq2GRi6HzO7cpVHFEAdPsnMONHC4k0jQwueLKwS12WyfAAAAAWJLR0SOggWzbwAAAAd0SU1FB+UKDQoZHccWoPoAAAFzSURBVEjHY2DAAIxMzCysbOwcDIQBJxc3Ty8vH7+AIAGFQsIiomK9YCAuIYlPtZS0jKxcLxzIKygq4VSrrKIqx4tQq6auwaSJXaWWto56LyrQ1dM3EMJUaWhkbNKLBZiamaOabWFpZc3SiwMwM9kgq7a105Ozx6VWTV3WAR7Yjk7OLr34gKubuwdYpaeXvmovISDn7K3MwODjy0dQJQiI8Tsw+LHwEqWWV9efIYAolSAQyCBGtNpehiAS1AaPqh1VO6oWQy0peSiEBLWhRCvVZQgj1sHhEQyRUS5EKbWPjmFgiI0LI6w6PF7bwwJcpCf4J+JVKZaUnAIvq1OtXdJ4cdqe7uyVgSjXOTKzsl1xqc3JzctHrVsKFAp5sKmULypmxKyJSkrLytGtr6iswl7DWZj7heoie961OrcGV71Z61hXj6SWtUG4UYgBJ5Bqam4Jh6isaG3zJFDTMzi4twPr74DoXBtCKoHAUqGjs6KruwdDAgDyDXfdtGavkwAAAABJRU5ErkJggg==" />
              <image  x="5px" y="9px" width="33px" height="32px"  href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAMAAACrZuH4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA/FBMVEX/zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP//zP////+Ph//DAAAAUnRSTlMANK/by3QBP+2cA+ybmgI9meuYO+qWOjmV6JI45zbpzdz9tvyRHcZBaSzm0Ex4iLDSH89O/uPRHnkgeo7TIXsPrcN29EJlSwdgWk+3N8cKf/Mm7MR96wAAAAFiS0dEU3pnHQYAAAAHdElNRQflCg0KGR3HFqD6AAAA/ElEQVQ4y93RWVPCMBQF4CNqrWwVRUFklUUBd1SUHUVlUcD7/3+MnbQpJCT4znm5J5lv7mQmgJAt3/bOrgF99kyys+/XgwCxBP3/AKJQWAksk7yEVG+xArSUg9UtVoSEHMrkKEpSjkVwEiFaS2JRUiS+eG7slJRJcHCWJFpLUml+kcmykTvP85uCuCFTLDnl4tLbUjBQrvBDtYiq065w7ZEb3PJ6d4/wg1NrWJBHPLntuY5lgRdOkHU3vEIUaHDRZKPVhizQYd1Et2ePPgOSwNs7UcXuxuDj8wsqgfJwVBf/Txar2Sjh/u1YKzBxxLdejBj4meoFZnMb/ApXf4Onj0ZDRTtwAAAAAElFTkSuQmCC" />
            </svg>
          </div>
        )}
      </div>
    );
  }
}
