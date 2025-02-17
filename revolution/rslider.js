function shouldReload() {
  if (window.location.pathname === "/") {
    if (!localStorage.getItem("shouldReload")) {
      localStorage.setItem("shouldReload", "true");
      return true;
    }
  } else if (window.location.pathname !== "/")  {
    console.log(window.location.pathname);
    localStorage.removeItem("shouldReload");
  }
  return false;
}

window.addEventListener("popstate", function (event) {
  if (shouldReload()) {
    location.reload();
  }
});

function resetShouldReload() {
  if (window.location.pathname !== "/") {
    localStorage.removeItem("shouldReload");
  }
}

window.addEventListener("popstate", resetShouldReload);

shouldReload();

function rslider() {
  var tpj = jQuery;
  if (window.RS_MODULES === undefined) window.RS_MODULES = {};
  if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
  RS_MODULES.modules["revslider11"] = {
    once:
      RS_MODULES.modules["revslider11"] !== undefined
        ? RS_MODULES.modules["revslider11"].once
        : undefined,
    init: function () {
      window.revapi1 =
        window.revapi1 === undefined ||
        window.revapi1 === null ||
        window.revapi1.length === 0
          ? document.getElementById("rev_slider_1_1")
          : window.revapi1;
      if (
        window.revapi1 === null ||
        window.revapi1 === undefined ||
        window.revapi1.length == 0
      ) {
        window.revapi1initTry =
          window.revapi1initTry === undefined ? 0 : window.revapi1initTry + 1;
        if (window.revapi1initTry < 20)
          requestAnimationFrame(function () {
            RS_MODULES.modules["revslider11"].init();
          });
        return;
      }
      window.revapi1 = jQuery(window.revapi1);
      if (window.revapi1.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_1_1");
        return;
      }
      revapi1.revolutionInit({
        revapi: "revapi1",
        DPR: "dpr",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: "1524,1024,778,480",
        gridheight: "950,800,700,550",
        perspective: 600,
        perspectiveType: "global",
        editorheight: "950,800,700,550",
        responsiveLevels: "1240,1024,778,480",
        progressBar: { disableProgressBar: true },
        navigation: {
          wheelCallDelay: 1000,
          onHoverStop: false,
          arrows: {
            enable: true,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            style: "zeus",
            hide_onmobile: true,
            hide_under: "1024px",
            left: {
              container: "layergrid",
              h_align: "right",
              h_offset: 0,
            },
            right: {
              container: "layergrid",
              h_offset: 0,
              v_offset: 80,
            },
          },
        },
        viewPort: {
          global: false,
          globalDist: "-200px",
          enable: false,
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true,
        },
      });
    },
  }; // End of RevInitScript
  if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
  }

  /* Slider 2*/
  var tpj = jQuery;
  if (window.RS_MODULES === undefined) window.RS_MODULES = {};
  if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
  RS_MODULES.modules["revslider21"] = {
    once:
      RS_MODULES.modules["revslider21"] !== undefined
        ? RS_MODULES.modules["revslider21"].once
        : undefined,
    init: function () {
      window.revapi2 =
        window.revapi2 === undefined ||
        window.revapi2 === null ||
        window.revapi2.length === 0
          ? document.getElementById("rev_slider_2_1")
          : window.revapi2;
      if (
        window.revapi2 === null ||
        window.revapi2 === undefined ||
        window.revapi2.length == 0
      ) {
        window.revapi2initTry =
          window.revapi2initTry === undefined ? 0 : window.revapi2initTry + 1;
        if (window.revapi2initTry < 20)
          requestAnimationFrame(function () {
            RS_MODULES.modules["revslider21"].init();
          });
        return;
      }
      window.revapi2 = jQuery(window.revapi2);
      if (window.revapi2.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_2_1");
        return;
      }
      revapi2.revolutionInit({
        revapi: "revapi2",
        DPR: "dpr",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: "1524,1024,778,480",
        gridheight: "950,800,700,550",
        perspective: 600,
        perspectiveType: "global",
        editorheight: "950,800,700,550",
        responsiveLevels: "1240,1024,778,480",
        progressBar: { disableProgressBar: true },
        navigation: {
          wheelCallDelay: 1000,
          onHoverStop: false,
          bullets: {
            enable: true,
            tmp: '<span class="tp-bullet-inner"></span>',
            style: "uranus",
            hide_onmobile: true,
            hide_under: "1200px",
            h_align: "left",
            v_align: "center",
            v_offset: 50,
            direction: "vertical",
            container: "layergrid",
          },
        },
        viewPort: {
          global: false,
          globalDist: "-200px",
          enable: false,
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true,
        },
      });
    },
  }; // End of RevInitScript
  if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
  }

  /* Slider 03 */
  var tpj = jQuery;
  if (window.RS_MODULES === undefined) window.RS_MODULES = {};
  if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
  RS_MODULES.modules["revslider31"] = {
    once:
      RS_MODULES.modules["revslider31"] !== undefined
        ? RS_MODULES.modules["revslider31"].once
        : undefined,
    init: function () {
      window.revapi3 =
        window.revapi3 === undefined ||
        window.revapi3 === null ||
        window.revapi3.length === 0
          ? document.getElementById("rev_slider_3_1")
          : window.revapi3;
      if (
        window.revapi3 === null ||
        window.revapi3 === undefined ||
        window.revapi3.length == 0
      ) {
        window.revapi3initTry =
          window.revapi3initTry === undefined ? 0 : window.revapi3initTry + 1;
        if (window.revapi3initTry < 20)
          requestAnimationFrame(function () {
            RS_MODULES.modules["revslider31"].init();
          });
        return;
      }
      window.revapi3 = jQuery(window.revapi3);
      if (window.revapi3.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_3_1");
        return;
      }
      revapi3.revolutionInit({
        revapi: "revapi3",
        DPR: "dpr",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: "1524,1024,778,480",
        gridheight: "815,750,650,550",
        perspective: 600,
        perspectiveType: "global",
        editorheight: "815,750,650,550",
        responsiveLevels: "1240,1024,778,480",
        progressBar: { disableProgressBar: true },
        navigation: {
          wheelCallDelay: 1000,
          onHoverStop: false,
          bullets: {
            enable: true,
            tmp: '<span class="tp-bullet-inner"></span>',
            style: "uranus",
            hide_onmobile: true,
            hide_under: "991px",
            v_offset: 30,
          },
        },
        viewPort: {
          global: false,
          globalDist: "-200px",
          enable: false,
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true,
        },
      });
    },
  }; // End of RevInitScript
  if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
  }

  /* Slider 04 */
  var tpj = jQuery;
  if (window.RS_MODULES === undefined) window.RS_MODULES = {};
  if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
  RS_MODULES.modules["revslider41"] = {
    once:
      RS_MODULES.modules["revslider41"] !== undefined
        ? RS_MODULES.modules["revslider41"].once
        : undefined,
    init: function () {
      window.revapi4 =
        window.revapi4 === undefined ||
        window.revapi4 === null ||
        window.revapi4.length === 0
          ? document.getElementById("rev_slider_4_1")
          : window.revapi4;
      if (
        window.revapi4 === null ||
        window.revapi4 === undefined ||
        window.revapi4.length == 0
      ) {
        window.revapi4initTry =
          window.revapi4initTry === undefined ? 0 : window.revapi4initTry + 1;
        if (window.revapi4initTry < 20)
          requestAnimationFrame(function () {
            RS_MODULES.modules["revslider41"].init();
          });
        return;
      }
      window.revapi4 = jQuery(window.revapi4);
      if (window.revapi4.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_4_1");
        return;
      }
      revapi4.revolutionInit({
        revapi: "revapi4",
        DPR: "dpr",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: "1524,1024,778,480",
        gridheight: "850,700,600,500",
        perspective: 600,
        perspectiveType: "global",
        editorheight: "850,700,600,500",
        responsiveLevels: "1240,1024,778,480",
        progressBar: { disableProgressBar: true },
        navigation: {
          wheelCallDelay: 1000,
          onHoverStop: false,
          arrows: {
            enable: true,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            style: "zeus",
            hide_onmobile: true,
            hide_under: "1024px",
            left: {
              container: "layergrid",
              h_align: "right",
              h_offset: 30,
              v_offset: -35,
            },
            right: {
              container: "layergrid",
              h_offset: 30,
              v_offset: 35,
            },
          },
        },
        viewPort: {
          global: false,
          globalDist: "-200px",
          enable: false,
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true,
        },
      });
    },
  }; // End of RevInitScript
  if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
  }

  /* Slider 04 */
  var tpj = jQuery;
  if (window.RS_MODULES === undefined) window.RS_MODULES = {};
  if (RS_MODULES.modules === undefined) RS_MODULES.modules = {};
  RS_MODULES.modules["revslider51"] = {
    once:
      RS_MODULES.modules["revslider51"] !== undefined
        ? RS_MODULES.modules["revslider51"].once
        : undefined,
    init: function () {
      window.revapi5 =
        window.revapi5 === undefined ||
        window.revapi5 === null ||
        window.revapi5.length === 0
          ? document.getElementById("rev_slider_5_1")
          : window.revapi5;
      if (
        window.revapi5 === null ||
        window.revapi5 === undefined ||
        window.revapi5.length == 0
      ) {
        window.revapi5initTry =
          window.revapi5initTry === undefined ? 0 : window.revapi5initTry + 1;
        if (window.revapi5initTry < 20)
          requestAnimationFrame(function () {
            RS_MODULES.modules["revslider51"].init();
          });
        return;
      }
      window.revapi5 = jQuery(window.revapi5);
      if (window.revapi5.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_5_1");
        return;
      }
      revapi5.revolutionInit({
        revapi: "revapi5",
        DPR: "dpr",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: "1524,1024,778,480",
        gridheight: "850,700,600,500",
        perspective: 600,
        perspectiveType: "global",
        editorheight: "850,700,600,500",
        responsiveLevels: "1240,1024,778,480",
        progressBar: { disableProgressBar: true },
        navigation: {
          wheelCallDelay: 1000,
          onHoverStop: false,
          arrows: {
            enable: true,
            style: "persephone",
            hide_onmobile: true,
            hide_under: "1024px",
            left: {
              container: "layergrid",
              h_align: "right",
              h_offset: 30,
              v_offset: -35,
            },
            right: {
              container: "layergrid",
              h_offset: 30,
              v_offset: 35,
            },
          },
        },
        viewPort: {
          global: false,
          globalDist: "-200px",
          enable: false,
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true,
        },
      });
    },
  }; // End of RevInitScript
  if (window.RS_MODULES.checkMinimal !== undefined) {
    window.RS_MODULES.checkMinimal();
  }
}

rslider();
