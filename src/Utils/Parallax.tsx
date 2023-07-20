export const Parallax = (elem: any) => {
  window.addEventListener("mousemove", function (e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    if (elem !== null) {
      elem.current.style.transform =
        "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
    }
  });
};
