window.addEventListener("DOMContentLoaded", function () {
  activeNav();
});

function activeNav() {
  // 기존 스크롤 이벤트 리스너
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      const navbarHeight = document.querySelector(".navbar").offsetHeight;
      console.log(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    });
  });

  // 새로운 함수: 현재 활성 섹션 확인 및 링크 스타일 업데이트
  function updateActiveLink() {
    const scrollPosition = window.scrollY;
    const navbarHeight = document.querySelector(".navbar").offsetHeight;

    document.querySelectorAll(".section").forEach((section) => {
      const sectionTop = section.offsetTop - navbarHeight - 5; // 5px 여유 추가
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.id;
        document.querySelectorAll(".nav-link").forEach((link) => {
          if (link.getAttribute("data-section") === sectionId) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });
  }

  // 스크롤 이벤트 리스너 추가
  window.addEventListener("scroll", updateActiveLink);

  // 페이지 로드 시 초기 실행
  window.addEventListener("load", updateActiveLink);
}
