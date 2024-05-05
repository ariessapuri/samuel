(self["webpackChunk"] = self["webpackChunk"] || []).push([["widgets"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue3-apexcharts */ "./node_modules/vue3-apexcharts/dist/vue3-apexcharts.js");
/* harmony import */ var _assets_sass_widgets_widgets_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/sass/widgets/widgets.scss */ "./resources/js/src/assets/sass/widgets/widgets.scss");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm-bundler.js");
/* harmony import */ var _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/composables/use-meta */ "./resources/js/src/composables/use-meta.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'widgets',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;

    __expose();

    (0,_composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta)({
      title: 'Widgets'
    });
    var store = (0,vuex__WEBPACK_IMPORTED_MODULE_4__.useStore)();
    var code_arr = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([]); //Daily Sales

    var daily_sales_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [44, 55, 41, 67, 22, 43, 21]
    }, {
      name: 'Last Week',
      data: [13, 23, 20, 8, 13, 27, 33]
    }]); //Total Orders

    var total_orders_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40]
    }]); //Revenue

    var revenue_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Income',
      data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000]
    }, {
      name: 'Expenses',
      data: [16500, 17500, 16200, 17300, 16000, 19500, 16000, 17000, 16000, 19000, 18000, 19000]
    }]); //Sales by Category

    var sales_donut_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([985, 737, 270]); //Statistics

    var total_visit_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      data: [21, 9, 36, 12, 44, 25, 59, 41, 66, 25]
    }]);
    var paid_visit_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      data: [22, 19, 30, 47, 32, 44, 34, 55, 41, 69]
    }]); //unique visitors

    var unique_visitor_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Direct',
      data: [58, 44, 55, 57, 56, 61, 58, 63, 60, 66, 56, 63]
    }, {
      name: 'Organic',
      data: [91, 76, 85, 101, 98, 87, 105, 91, 114, 94, 66, 70]
    }]); //Followers

    var followers_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [38, 60, 38, 52, 36, 40, 28]
    }]); //Referral

    var referral_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [60, 28, 52, 38, 40, 36, 38]
    }]); //Engagement

    var engagement_series = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)([{
      name: 'Sales',
      data: [28, 50, 36, 60, 38, 52, 38]
    }]); //Revenue

    var revenue_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          fontFamily: 'Nunito, sans-serif',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          curve: 'smooth',
          width: 2,
          lineCap: 'square'
        },
        dropShadow: {
          enabled: true,
          opacity: 0.2,
          blur: 10,
          left: -7,
          top: 22
        },
        colors: is_dark ? ['#2196f3', '#e7515a'] : ['#1b55e2', '#e7515a'],
        markers: {
          discrete: [{
            seriesIndex: 0,
            dataPointIndex: 6,
            fillColor: '#1b55e2',
            strokeColor: '#fff',
            size: 7
          }, {
            seriesIndex: 1,
            dataPointIndex: 5,
            fillColor: '#e7515a',
            strokeColor: '#fff',
            size: 7
          }]
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs: {
            show: true
          },
          labels: {
            offsetX: 0,
            offsetY: 5,
            style: {
              fontSize: '12px',
              fontFamily: 'Nunito, sans-serif',
              cssClass: 'apexcharts-xaxis-title'
            }
          }
        },
        yaxis: {
          tickAmount: 7,
          labels: {
            formatter: function formatter(value) {
              return value / 1000 + 'K';
            },
            offsetX: -10,
            offsetY: 0,
            style: {
              fontSize: '12px',
              fontFamily: 'Nunito, sans-serif',
              cssClass: 'apexcharts-yaxis-title'
            }
          }
        },
        grid: {
          borderColor: is_dark ? '#191e3a' : '#e0e6ed',
          strokeDashArray: 5,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          offsetY: 0,
          fontSize: '16px',
          fontFamily: 'Nunito, sans-serif',
          markers: {
            width: 10,
            height: 10,
            strokeWidth: 0,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 20,
            vertical: 5
          }
        },
        tooltip: {
          theme: 'dark',
          marker: {
            show: true
          },
          x: {
            show: false
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: is_dark ? 0.19 : 0.28,
            opacityTo: 0.05,
            stops: is_dark ? [100, 100] : [45, 100]
          }
        }
      };
    }); //Daily Sales

    var daily_sales_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return {
        chart: {
          toolbar: {
            show: false
          },
          stacked: true,
          stackType: '100%'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 1
        },
        colors: ['#e2a03f', '#e0e6ed'],
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        xaxis: {
          labels: {
            show: false
          },
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        },
        yaxis: {
          show: false
        },
        fill: {
          opacity: 1
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '25%'
          }
        },
        legend: {
          show: false
        },
        grid: {
          show: false,
          xaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 10,
            right: -20,
            bottom: -20,
            left: -20
          }
        }
      };
    }); //Total Orders

    var total_orders_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: is_dark ? ['#1abc9c'] : ['#fff'],
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        yaxis: {
          min: 0,
          show: false
        },
        grid: {
          padding: {
            top: 125,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        fill: {
          opacity: 1,
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: is_dark ? 0.3 : 0.4,
            opacityTo: 0.05,
            stops: is_dark ? [100, 100] : [45, 100]
          }
        },
        tooltip: {
          x: {
            show: false
          },
          theme: 'dark'
        }
      };
    }); //Sales by Category

    var sales_donut_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {},
        dataLabels: {
          enabled: false
        },
        expandOnClick: is_dark ? false : true,
        stroke: {
          show: true,
          width: 25,
          colors: is_dark ? '#0e1726' : '#fff'
        },
        colors: is_dark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 10,
            height: 10
          },
          height: 50,
          offsetY: 20,
          itemMargin: {
            horizontal: 8,
            vertical: 0
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '65%',
              background: 'transparent',
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: '29px',
                  fontFamily: 'Nunito, sans-serif',
                  offsetY: -10
                },
                value: {
                  show: true,
                  fontSize: '26px',
                  fontFamily: 'Nunito, sans-serif',
                  color: is_dark ? '#bfc9d4' : undefined,
                  offsetY: 16,
                  formatter: function formatter(val) {
                    return val;
                  }
                },
                total: {
                  show: true,
                  label: 'Total',
                  color: '#888ea8',
                  fontSize: '29px',
                  formatter: function formatter(w) {
                    return w.globals.seriesTotals.reduce(function (a, b) {
                      return a + b;
                    }, 0);
                  }
                }
              }
            }
          }
        },
        labels: ['Apparel', 'Sports', 'Others']
      };

      if (is_dark) {
        option['states'] = {
          hover: {
            filter: {
              type: 'none'
            }
          },
          active: {
            filter: {
              type: 'none'
            }
          }
        };
      }

      return option;
    }); //Statistics

    var total_visit_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 3,
            left: 1,
            blur: 3,
            color: '#009688',
            opacity: 0.7
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        colors: ['#009688'],
        grid: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter() {
                return '';
              }
            }
          }
        },
        responsive: [{
          breakPoint: 576,
          options: {
            chart: {
              height: 95
            },
            grid: {
              padding: {
                top: 45,
                bottom: 0,
                left: 0
              }
            }
          }
        }]
      };
    });
    var paid_visit_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          sparkline: {
            enabled: true
          },
          dropShadow: {
            enabled: true,
            top: 1,
            left: 1,
            blur: 2,
            color: '#e2a03f',
            opacity: 0.7
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        markers: {
          size: 0
        },
        colors: ['#e2a03f'],
        grid: {
          padding: {
            top: 0,
            bottom: 0,
            left: 0
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          },
          y: {
            title: {
              formatter: function formatter() {
                return '';
              }
            }
          }
        },
        responsive: [{
          breakPoint: 576,
          options: {
            chart: {
              height: 95
            },
            grid: {
              padding: {
                top: 35,
                bottom: 0,
                left: 0
              }
            }
          }
        }]
      };
    }); //unique visitors

    var unique_visitor_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      return {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        colors: ['#5c1ac3', '#ffbb44'],
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 1,
          left: 1,
          top: 1,
          color: '#515365'
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            borderRadius: 10
          }
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '14px',
          markers: {
            width: 12,
            height: 12
          },
          itemMargin: {
            horizontal: 0,
            vertical: 8
          }
        },
        grid: {
          borderColor: is_dark ? '#191e3a' : '#e0e6ed'
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          axisBorder: {
            show: true,
            color: is_dark ? '#3b3f5c' : '#e0e6ed'
          }
        },
        yaxis: {
          tickAmount: 6
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: is_dark ? 'dark' : 'light',
            type: 'vertical',
            shadeIntensity: 0.3,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100]
          }
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          y: {
            formatter: function formatter(val) {
              return val;
            }
          }
        }
      };
    }); //Followers

    var followers_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#4361ee'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    }); //Referral

    var referral_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#e7515a'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    }); //Engagement

    var engagement_options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var is_dark = store.state.is_dark_mode;
      var option = {
        chart: {
          sparkline: {
            enabled: true
          }
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#1abc9c'],
        yaxis: {
          min: 0,
          show: false
        },
        tooltip: {
          theme: is_dark ? 'dark' : 'light',
          x: {
            show: false
          }
        }
      };

      if (is_dark) {
        option['fill'] = {
          type: 'gradient',
          gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: !1,
            opacityFrom: 0.3,
            opacityTo: 0.05,
            stops: [100, 100]
          }
        };
      }

      return option;
    });
    var __returned__ = {
      store: store,
      code_arr: code_arr,
      daily_sales_series: daily_sales_series,
      total_orders_series: total_orders_series,
      revenue_series: revenue_series,
      sales_donut_series: sales_donut_series,
      total_visit_series: total_visit_series,
      paid_visit_series: paid_visit_series,
      unique_visitor_series: unique_visitor_series,
      followers_series: followers_series,
      referral_series: referral_series,
      engagement_series: engagement_series,
      revenue_options: revenue_options,
      daily_sales_options: daily_sales_options,
      total_orders_options: total_orders_options,
      sales_donut_options: sales_donut_options,
      total_visit_options: total_visit_options,
      paid_visit_options: paid_visit_options,
      unique_visitor_options: unique_visitor_options,
      followers_options: followers_options,
      referral_options: referral_options,
      engagement_options: engagement_options,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,

      get apexchart() {
        return vue3_apexcharts__WEBPACK_IMPORTED_MODULE_1__["default"];
      },

      get useStore() {
        return vuex__WEBPACK_IMPORTED_MODULE_4__.useStore;
      },

      get useMeta() {
        return _composables_use_meta__WEBPACK_IMPORTED_MODULE_3__.useMeta;
      }

    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _assets_images_profile_32_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/profile-32.jpeg */ "./resources/js/src/assets/images/profile-32.jpeg");
/* harmony import */ var _assets_images_profile_32_jpeg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_32_jpeg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_profile_13_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/profile-13.jpeg */ "./resources/js/src/assets/images/profile-13.jpeg");
/* harmony import */ var _assets_images_profile_13_jpeg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_13_jpeg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_profile_7_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/images/profile-7.jpeg */ "./resources/js/src/assets/images/profile-7.jpeg");
/* harmony import */ var _assets_images_profile_7_jpeg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_7_jpeg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_images_profile_10_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/profile-10.jpeg */ "./resources/js/src/assets/images/profile-10.jpeg");
/* harmony import */ var _assets_images_profile_10_jpeg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_10_jpeg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_images_profile_5_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/profile-5.jpeg */ "./resources/js/src/assets/images/profile-5.jpeg");
/* harmony import */ var _assets_images_profile_5_jpeg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_5_jpeg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_profile_4_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/profile-4.jpeg */ "./resources/js/src/assets/images/profile-4.jpeg");
/* harmony import */ var _assets_images_profile_4_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_4_jpeg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_profile_11_jpeg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/profile-11.jpeg */ "./resources/js/src/assets/images/profile-11.jpeg");
/* harmony import */ var _assets_images_profile_11_jpeg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_11_jpeg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_product_headphones_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/assets/images/product-headphones.jpg */ "./resources/js/src/assets/images/product-headphones.jpg");
/* harmony import */ var _assets_images_product_headphones_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_product_headphones_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_product_shoes_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/images/product-shoes.jpg */ "./resources/js/src/assets/images/product-shoes.jpg");
/* harmony import */ var _assets_images_product_shoes_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_product_shoes_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_product_watch_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/images/product-watch.jpg */ "./resources/js/src/assets/images/product-watch.jpg");
/* harmony import */ var _assets_images_product_watch_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_product_watch_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_product_laptop_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/assets/images/product-laptop.jpg */ "./resources/js/src/assets/images/product-laptop.jpg");
/* harmony import */ var _assets_images_product_laptop_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_product_laptop_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_product_camera_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/assets/images/product-camera.jpg */ "./resources/js/src/assets/images/product-camera.jpg");
/* harmony import */ var _assets_images_product_camera_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_product_camera_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_images_profile_19_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/assets/images/profile-19.jpeg */ "./resources/js/src/assets/images/profile-19.jpeg");
/* harmony import */ var _assets_images_profile_19_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_19_jpeg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_images_g_8_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/assets/images/g-8.png */ "./resources/js/src/assets/images/g-8.png");
/* harmony import */ var _assets_images_g_8_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_images_g_8_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_images_profile_6_jpeg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/assets/images/profile-6.jpeg */ "./resources/js/src/assets/images/profile-6.jpeg");
/* harmony import */ var _assets_images_profile_6_jpeg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_6_jpeg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_images_profile_8_jpeg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/assets/images/profile-8.jpeg */ "./resources/js/src/assets/images/profile-8.jpeg");
/* harmony import */ var _assets_images_profile_8_jpeg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_8_jpeg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_images_profile_3_jpeg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/assets/images/profile-3.jpeg */ "./resources/js/src/assets/images/profile-3.jpeg");
/* harmony import */ var _assets_images_profile_3_jpeg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_images_profile_3_jpeg__WEBPACK_IMPORTED_MODULE_17__);


















var _hoisted_1 = {
  "class": "layout-px-spacing"
};

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "navbar-nav flex-row"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "page-header"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("nav", {
  "class": "breadcrumb-one",
  "aria-label": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ol", {
  "class": "breadcrumb"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", {
  "class": "breadcrumb-item active",
  "aria-current": "page"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Widgets")])])])])])], -1
/* HOISTED */
);

var _hoisted_3 = {
  "class": "row layout-top-spacing"
};
var _hoisted_4 = {
  "class": "col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_5 = {
  "class": "widget widget-revenue"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Revenue</h5><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlRevenue\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlRevenue\"><li><a href=\"javascript:;\" class=\"dropdown-item\">Weekly</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Monthly</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Yearly</a></li></ul></div></div>", 1);

var _hoisted_7 = {
  "class": "widget-content"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "chart-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Total Profit "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "text-primary ms-1"
}, "$10,840")], -1
/* HOISTED */
);

var _hoisted_9 = {
  "class": "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_10 = {
  "class": "widget widget-sales-category"
};

var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Sales by Category")], -1
/* HOISTED */
);

var _hoisted_12 = {
  "class": "widget-content"
};
var _hoisted_13 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing"
};
var _hoisted_14 = {
  "class": "widget widget-dailysales"
};

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div><h5>Daily sales</h5><span class=\"sub-title\">Go to columns for details.</span></div><div class=\"w-icon text-warning\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-dollar-sign\"><line x1=\"12\" y1=\"1\" x2=\"12\" y2=\"23\"></line><path d=\"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6\"></path></svg></div></div>", 1);

var _hoisted_16 = {
  "class": "widget-content"
};

var _hoisted_17 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-summary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Summary"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown btn-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  id: "ddlSummary",
  "class": "btn dropdown-toggle btn-icon-only",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-more-horizontal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "19",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "5",
  cy: "12",
  r: "1"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "ddlSummary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "View Report")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Edit Report")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Mark as Done")])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-shopping-bag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3",
  y1: "6",
  x2: "21",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M16 10a4 4 0 0 1-8 0"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Income"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$92,600")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "90",
  "class": "progress-bar bg-gradient-secondary",
  style: {
    "width": "90%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-tag"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "7",
  y1: "7",
  x2: "7",
  y2: "7"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Profit"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$37,515")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-gradient-success",
  style: {
    "width": "65%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "summary-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "17",
  height: "17",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-credit-card"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "1",
  y: "4",
  width: "22",
  height: "16",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "1",
  y1: "10",
  x2: "23",
  y2: "10"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "summary-count"
}, "$55,085")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-summary-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "80",
  "class": "progress-bar bg-gradient-warning",
  style: {
    "width": "80%"
  }
})])])])])])])], -1
/* HOISTED */
);

var _hoisted_18 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_19 = {
  "class": "widget widget-total-order"
};

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg></div><div><div class=\"w-value\">3,192</div><div class=\"w-numeric-title\">Total Orders</div></div></div>", 1);

var _hoisted_21 = {
  "class": "widget-content p-0"
};
var _hoisted_22 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_23 = {
  "class": "widget widget-recent-activity"
};

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Recent Activities")], -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "widget-content"
};

var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Updated"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Server Logs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-primary outline-badge-primary icon-fill-primary"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "Just Now")])], -1
/* HOISTED */
);

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send Mail to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "2 min ago")])], -1
/* HOISTED */
);

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Backup "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Files EOD")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-danger outline-badge-danger icon-fill-danger"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "14:00")])], -1
/* HOISTED */
);

var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Collect documents from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "16:00")])], -1
/* HOISTED */
);

var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conference call with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Marketing Manager"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "In progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-secondary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Rebooted Server"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Send contract details to Freelancer"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "18:00")])], -1
/* HOISTED */
);

var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Kelly want to increase the time of the project."), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "In Progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "19:00")])], -1
/* HOISTED */
);

var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Server down for maintanence"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "19:00")])], -1
/* HOISTED */
);

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-secondary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Malicious link detected"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-secondary outline-badge-secondary icon-fill-secondary"
}, "Block"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "20:00")])], -1
/* HOISTED */
);

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Rebooted Server"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "23:00")])], -1
/* HOISTED */
);

var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-primary"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Updated"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Server Logs")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-primary outline-badge-primary icon-fill-primary"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "Just Now")])], -1
/* HOISTED */
);

var _hoisted_38 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-success"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Send Mail to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-success outline-badge-success icon-fill-success"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "2 min ago")])], -1
/* HOISTED */
);

var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-danger"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Backup "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Files EOD")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-danger outline-badge-danger icon-fill-danger"
}, "Pending"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "14:00")])], -1
/* HOISTED */
);

var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-dark"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Collect documents from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-dark outline-badge-dark icon-fill-dark"
}, "Completed"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "16:00")])], -1
/* HOISTED */
);

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline timeline-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "badge badge-warning"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-text"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Conference call with "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Marketing Manager"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(".")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "badge badge-outline-warning outline-badge-warning icon-fill-warning"
}, "In progress"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "t-time"
}, "17:00")])], -1
/* HOISTED */
);

var _hoisted_42 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"tm-action-btn\"><button type=\"button\" class=\"btn btn-default\"><span>View All</span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-right\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg></button></div>", 1);

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-transaction\"><div class=\"widget-heading\"><h5>Transactions</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlTransactions\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlTransactions\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div><div class=\"widget-content\"><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-info me-2 badge-info rounded-circle\"><span class=\"b-avatar-text\"><span>SP</span></span></span><div class=\"t-name\"><h4>Shaun Park</h4><p>10 Jan 1:00PM</p></div></div><div class=\"text-success\">+$36.11</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-warning me-2 badge-warning rounded-circle\"><span class=\"b-avatar-custom\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></span></span><div class=\"t-name\"><h4>Electricity Bill</h4><p>04 Jan 1:00PM</p></div></div><div class=\"text-danger\">-$16.44</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-danger me-2 badge-danger rounded-circle\"><span class=\"b-avatar-text\"><span>AD</span></span></span><div class=\"t-name\"><h4>Amy Diaz</h4><p>31 Jan 1:00PM</p></div></div><div class=\"text-success\">+$66.44</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-secondary me-2 badge-secondary rounded-circle\"><span class=\"b-avatar-custom\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"19\" height=\"19\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg></span></span><div class=\"t-name\"><h4>Netflix</h4><p>02 Feb 1:00PM</p></div></div><div class=\"text-danger\">-$32.00</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-info me-2 badge-info rounded-circle\"><span class=\"b-avatar-text\"><span>DA</span></span></span><div class=\"t-name\"><h4>Daisy Anderson</h4><p>15 Feb 1:00PM</p></div></div><div class=\"text-success\">+$10.08</div></div><div class=\"transactions-list\"><div><span class=\"b-avatar icon-fill-danger me-2 badge-danger rounded-circle\"><span class=\"b-avatar-text\"><span>OG</span></span></span><div class=\"t-name\"><h4>Oscar Garner</h4><p>20 Feb 1:00PM</p></div></div><div class=\"text-danger\">-$22.00</div></div></div></div></div><div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-wallet-balance\"><div class=\"widget-heading d-block\"><div class=\"wallet-usr-info\"><div class=\"usr-name\"><span><img src=\"" + (_assets_images_profile_32_jpeg__WEBPACK_IMPORTED_MODULE_1___default()) + "\" alt=\"admin-profile\" class=\"img-fluid\"> Alan Green</span></div><div class=\"add\"><span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span></div></div><div class=\"wallet-balance\"><p>Wallet Balance</p><h5><span class=\"w-currency\">$</span>2953</h5></div></div><div class=\"widget-amount\"><div class=\"w-a-info funds-received me-3\"><span>Received <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-up text-success float-end\"><polyline points=\"18 15 12 9 6 15\"></polyline></svg></span><p>$97.99</p></div><div class=\"w-a-info funds-spent\"><span>Spent <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevron-down text-danger float-end\"><polyline points=\"6 9 12 15 18 9\"></polyline></svg></span><p>$53.00</p></div></div><div class=\"widget-content\"><div class=\"bills-stats mb-4\"><span>Pending</span></div><div class=\"invoice-list\"><div class=\"inv-detail mb-4\"><div class=\"info-detail-1\"><p>Netflix</p><p><span class=\"w-currency\">$</span> <span class=\"bill-amount\">13.85</span></p></div><div class=\"info-detail-2\"><p>BlueHost VPN</p><p><span class=\"w-currency\">$</span> <span class=\"bill-amount\">15.66</span></p></div></div><div class=\"inv-action\"><a href=\"javascript:;\" class=\"btn view-details btn-outline-secondary\">View Details</a><a href=\"javascript:;\" class=\"btn pay-now btn-outline-success\">Pay Now $29.51</a></div></div></div></div></div><div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-recent-orders\"><div class=\"widget-heading\"><h5>Recent Orders</h5></div><div class=\"widget-content table-responsive\"><table class=\"table\"><thead><tr><th><div class=\"th-content\">Customer</div></th><th><div class=\"th-content\">Product</div></th><th><div class=\"th-content\">Invoice</div></th><th><div class=\"th-content th-heading\">Price</div></th><th><div class=\"th-content\">Status</div></th></tr></thead><tbody><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_13_jpeg__WEBPACK_IMPORTED_MODULE_2___default()) + "\" alt=\"avatar\"><span>Luke Ivory</span></div></td><td><div class=\"td-content text-primary\">Headphone</div></td><td><div class=\"td-content\">#46894</div></td><td><div class=\"td-content\"><span>$56.07</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_7_jpeg__WEBPACK_IMPORTED_MODULE_3___default()) + "\" alt=\"avatar\"><span>Andy King</span></div></td><td><div class=\"td-content text-warning\">Nike Sport</div></td><td><div class=\"td-content\">#76894</div></td><td><div class=\"td-content\"><span>$88.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-primary\">Shipped</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_10_jpeg__WEBPACK_IMPORTED_MODULE_4___default()) + "\" alt=\"avatar\"><span>Laurie Fox</span></div></td><td><div class=\"td-content text-danger\">Sunglasses</div></td><td><div class=\"td-content\">#66894</div></td><td><div class=\"td-content\"><span>$126.04</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_5_jpeg__WEBPACK_IMPORTED_MODULE_5___default()) + "\" alt=\"avatar\"><span>Ryan Collins</span></div></td><td><div class=\"td-content text-warning\">Sport</div></td><td><div class=\"td-content\">#89891</div></td><td><div class=\"td-content\"><span>$108.09</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-primary\">Shipped</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_4_jpeg__WEBPACK_IMPORTED_MODULE_6___default()) + "\" alt=\"avatar\"><span>Irene Collins</span></div></td><td><div class=\"td-content text-primary\">Speakers</div></td><td><div class=\"td-content\">#75844</div></td><td><div class=\"td-content\"><span>$84.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-danger\">Pending</span></div></td></tr><tr><td><div class=\"td-content\"><img src=\"" + (_assets_images_profile_11_jpeg__WEBPACK_IMPORTED_MODULE_7___default()) + "\" alt=\"avatar\"><span>Sonia Shaw</span></div></td><td><div class=\"td-content text-danger\">Watch</div></td><td><div class=\"td-content\">#76844</div></td><td><div class=\"td-content\"><span>$110.00</span></div></td><td><div class=\"td-content\"><span class=\"badge badge-success\">Paid</span></div></td></tr></tbody></table></div></div></div><div class=\"col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-top-selling-products\"><div class=\"widget-heading\"><h5>Top Selling Product</h5></div><div class=\"widget-content table-responsive\"><table class=\"table\"><thead><tr><th><div class=\"th-content\">Product</div></th><th><div class=\"th-content th-heading\">Price</div></th><th><div class=\"th-content th-heading\">Discount</div></th><th><div class=\"th-content\">Sold</div></th><th><div class=\"th-content\">Source</div></th></tr></thead><tbody><tr><td><div class=\"td-content d-flex\"><img src=\"" + (_assets_images_product_headphones_jpg__WEBPACK_IMPORTED_MODULE_8___default()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Headphone</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$168.09</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$60.09</span></div></td><td><div class=\"td-content\">170</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-danger\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Direct</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + (_assets_images_product_shoes_jpg__WEBPACK_IMPORTED_MODULE_9___default()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Shoes</p><p class=\"prd-category text-warning\">Faishon</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$108.09</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$47.09</span></div></td><td><div class=\"td-content\">130</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Google</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + (_assets_images_product_watch_jpg__WEBPACK_IMPORTED_MODULE_10___default()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Watch</p><p class=\"prd-category text-danger\">Accessories</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$88.00</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$20.00</span></div></td><td><div class=\"td-content\">66</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-warning\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Ads</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + (_assets_images_product_laptop_jpg__WEBPACK_IMPORTED_MODULE_11___default()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Laptop</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$110.00</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$33.00</span></div></td><td><div class=\"td-content\">35</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-info\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Email</a></div></td></tr><tr><td><div class=\"td-content d-flex\"><img src=\"" + (_assets_images_product_camera_jpg__WEBPACK_IMPORTED_MODULE_12___default()) + "\" alt=\"product\"><div class=\"align-self-center\"><p class=\"prd-name\">Camera</p><p class=\"prd-category text-primary\">Digital</p></div></div></td><td><div class=\"td-content\"><span class=\"pricing\">$126.04</span></div></td><td><div class=\"td-content\"><span class=\"discount-pricing\">$26.04</span></div></td><td><div class=\"td-content\">30</div></td><td><div class=\"td-content\"><a href=\"javascript:void(0);\" class=\"text-secondary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg> Referral</a></div></td></tr></tbody></table></div></div></div>", 4);

var _hoisted_47 = {
  "class": "col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_48 = {
  "class": "widget widget-statistics"
};

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Statistics</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlStatistics\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlStatistics\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1);

var _hoisted_50 = {
  "class": "widget-content"
};
var _hoisted_51 = {
  "class": "row"
};
var _hoisted_52 = {
  "class": "col-6"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-detail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-title"
}, "Total Visits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-stats"
}, "423,964")], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "col-6"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-detail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-title"
}, "Paid Visits"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "w-stats"
}, "7,929")], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-expenses"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Expenses"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "task-action"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "dropdown btn-group"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  id: "ddlExpenses",
  "class": "btn dropdown-toggle btn-icon-only",
  "data-bs-toggle": "dropdown",
  "aria-expanded": "false"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-more-horizontal"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "19",
  cy: "12",
  r: "1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "5",
  cy: "12",
  r: "1"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
  "class": "dropdown-menu dropdown-menu-end",
  "aria-labelledby": "ddlExpenses"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "This Week")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Last Week")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:;",
  "class": "dropdown-item"
}, "Last Month")])])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "value"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" $ 45,141 "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "this week "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-trending-up"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "23 6 13.5 15.5 8.5 10.5 1 18"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "17 6 23 6 23 12"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-progress-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "57",
  "class": "progress-bar bg-gradient-secondary",
  style: {
    "width": "57%"
  }
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon"
}, "57%")])])])], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-total-balance\"><div class=\"widget-content\"><div class=\"account-box\"><div class=\"info\"><div class=\"inv-title\"><h5>Total Balance</h5></div><div class=\"inv-balance-info\"><p class=\"inv-balance\">$ 41,741.42</p><span class=\"inv-stats balance-credited\">+ 2453</span></div></div><div class=\"acc-action\"><div><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></a><a href=\"javascript:void(0);\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-credit-card\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line></svg></a></div><a href=\"javascript:void(0);\">Upgrade</a></div></div></div></div></div>", 1);

var _hoisted_58 = {
  "class": "col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing"
};
var _hoisted_59 = {
  "class": "widget widget-unique-visitors"
};

var _hoisted_60 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Unique Visitors</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlVisitors\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlVisitors\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Update</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Download</a></li></ul></div></div></div>", 1);

var _hoisted_61 = {
  "class": "widget-content"
};
var _hoisted_62 = {
  "class": "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_63 = {
  "class": "widget widget-active-log"
};

var _hoisted_64 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><h5>Activity Log</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlActivity\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlActivity\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View All</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Read</a></li></ul></div></div></div>", 1);

var _hoisted_65 = {
  "class": "widget-content"
};

var _hoisted_66 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-shadow-top"
}, null, -1
/* HOISTED */
);

var _hoisted_67 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "timeline-line"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-secondary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-plus"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "12",
  y1: "5",
  x2: "12",
  y2: "19"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" New project created : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javscript:void(0);"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "[Cork Admin Template]")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "27 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-success"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-mail"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "22,6 12,13 2,6"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Mail sent to "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "HR"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" and "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Admin")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "28 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "20 6 9 17 4 12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Server Logs Updated")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "27 Feb, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-check"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "20 6 9 17 4 12"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Task Completed : "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javscript:void(0);"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "[Backup Files EOD]")])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "01 Mar, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-file"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "13 2 13 9 20 9"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Documents Submitted from "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
  href: "javascript:void(0);"
}, "Sara")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "10 Mar, 2020")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "item-timeline"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dot"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-dark"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-server"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "2",
  y: "2",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  x: "2",
  y: "14",
  width: "20",
  height: "8",
  rx: "2",
  ry: "2"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "6",
  x2: "6",
  y2: "6"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "6",
  y1: "18",
  x2: "6",
  y2: "18"
})])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "t-uppercontent"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Server rebooted successfully"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "06 Apr, 2020")])])], -1
/* HOISTED */
);

var _hoisted_68 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-shadow-bottom"
}, null, -1
/* HOISTED */
);

var _hoisted_69 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget widget-visitor-by-browser"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-heading"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", null, "Visitors by Browser")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "widget-content"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-primary"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-chrome"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "21.17",
  y1: "8",
  x2: "12",
  y2: "8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "3.95",
  y1: "6.06",
  x2: "8.54",
  y2: "14"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "10.88",
  y1: "21.94",
  x2: "15.46",
  y2: "14"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Chrome"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "65%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-gradient-primary",
  style: {
    "width": "65%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-danger"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-compass"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polygon", {
  points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Safari"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "25%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "35",
  "class": "progress-bar bg-gradient-danger",
  style: {
    "width": "35%"
  }
})])])])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "browser-list"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-icon icon-fill-warning"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-globe"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("line", {
  x1: "2",
  y1: "12",
  x2: "22",
  y2: "12"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-details"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, "Others"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "browser-count"
}, "15%")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "w-browser-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "15",
  "class": "progress-bar bg-gradient-warning",
  style: {
    "width": "15%"
  }
})])])])])])])], -1
/* HOISTED */
);

var _hoisted_70 = {
  "class": "col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12"
};
var _hoisted_71 = {
  "class": "row widget-statistic"
};
var _hoisted_72 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_73 = {
  "class": "widget"
};

var _hoisted_74 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-primary\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg></div><div><p class=\"w-value\">31.6K</p><h5>Followers</h5></div></div></div>", 1);

var _hoisted_75 = {
  "class": "widget-content"
};
var _hoisted_76 = {
  "class": "w-chart"
};
var _hoisted_77 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_78 = {
  "class": "widget"
};

var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-danger\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-link\"><path d=\"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71\"></path><path d=\"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71\"></path></svg></div><div><p class=\"w-value\">1,900</p><h5>Referral</h5></div></div></div>", 1);

var _hoisted_80 = {
  "class": "widget-content"
};
var _hoisted_81 = {
  "class": "w-chart"
};
var _hoisted_82 = {
  "class": "col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 layout-spacing"
};
var _hoisted_83 = {
  "class": "widget"
};

var _hoisted_84 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><div class=\"w-title\"><div class=\"w-icon icon-fill-success\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-message-circle\"><path d=\"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z\"></path></svg></div><div><p class=\"w-value\">18.2%</p><h5>Engagement</h5></div></div></div>", 1);

var _hoisted_85 = {
  "class": "widget-content"
};
var _hoisted_86 = {
  "class": "w-chart"
};

var _hoisted_87 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-card-one\"><div class=\"widget-heading\"><div class=\"media\"><div class=\"media-aside align-self-start\"><div class=\"w-img\"><img src=\"" + (_assets_images_profile_19_jpeg__WEBPACK_IMPORTED_MODULE_13___default()) + "\" alt=\"avatar\"></div></div><div class=\"media-body\"><h6>Jimmy Turner</h6><p class=\"meta-date-time\">Monday, Nov 18</p></div></div></div><div class=\"widget-content\"><p>&quot;Duis aute irure dolor&quot; in reprehenderit in voluptate velit esse cillum &quot;dolore eu fugiat&quot; nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p><div class=\"w-action\"><div class=\"card-like\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-thumbs-up\"><path d=\"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3\"></path></svg><span>551 Likes</span></div><div class=\"read-more\"><a href=\"javascript:void(0);\">Read More <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-chevrons-right\"><polyline points=\"13 17 18 12 13 7\"></polyline><polyline points=\"6 17 11 12 6 7\"></polyline></svg></a></div></div></div></div></div><div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing\"><div class=\"widget widget-card-two\"><div class=\"widget-heading\"><div class=\"media\"><div class=\"media-aside align-self-start\"><div class=\"w-img\"><img src=\"" + (_assets_images_g_8_png__WEBPACK_IMPORTED_MODULE_14___default()) + "\" alt=\"avatar\"></div></div><div class=\"media-body\"><h6>Dev Summit - New York</h6><p class=\"meta-date-time\">Bronx, NY</p></div></div></div><div class=\"widget-content\"><h5>4 Members Going</h5><div class=\"img-group\"><img src=\"" + (_assets_images_profile_19_jpeg__WEBPACK_IMPORTED_MODULE_13___default()) + "\" alt=\"avatar\"><img src=\"" + (_assets_images_profile_6_jpeg__WEBPACK_IMPORTED_MODULE_15___default()) + "\" alt=\"avatar\"><img src=\"" + (_assets_images_profile_8_jpeg__WEBPACK_IMPORTED_MODULE_16___default()) + "\" alt=\"avatar\"><img src=\"" + (_assets_images_profile_3_jpeg__WEBPACK_IMPORTED_MODULE_17___default()) + "\" alt=\"avatar\"></div><a href=\"javascript:;\" class=\"btn btn-secondary\">View Details</a></div></div></div>", 2);

var _hoisted_89 = {
  "class": "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 layout-spacing"
};
var _hoisted_90 = {
  "class": "widget widget-card-three"
};

var _hoisted_91 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"widget-heading\"><a href=\"javascript:void(0)\" class=\"task-info\"><div class=\"usr-avatar\"><span>FD</span></div><div class=\"w-title\"><h5>Figma Design</h5><span>Design Reset</span></div></a><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlDesign\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlDesign\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Project</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Project</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div>", 1);

var _hoisted_92 = {
  "class": "widget-content"
};

var _hoisted_93 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Doloribus nisi vel suscipit modi, optio ex repudiandae voluptatibus officiis commodi. Nesciunt quas aut neque incidunt!", -1
/* HOISTED */
);

var _hoisted_94 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-data"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-info"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "task-count"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-check-square"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "9 11 12 14 22 4"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "5 Tasks")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress-stats"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "86.2%")])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "progress"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  role: "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": "65",
  "class": "progress-bar bg-primary",
  style: {
    "width": "65%"
  }
})])], -1
/* HOISTED */
);

var _hoisted_95 = {
  "class": "meta-info"
};

var _hoisted_96 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "due-time"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  "class": "feather feather-clock"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("circle", {
  cx: "12",
  cy: "12",
  r: "10"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("polyline", {
  points: "12 6 12 12 16 14"
})]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" 3 Days Left ")])], -1
/* HOISTED */
);

var _hoisted_97 = {
  "class": "avatar--group"
};

var _hoisted_98 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "b-avatar avatar more-group badge-default rounded"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "b-avatar-custom"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "avatar-title"
}, "+6")])], -1
/* HOISTED */
);

var _hoisted_99 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_100 = {
  "class": "b-avatar-img"
};
var _hoisted_101 = ["src"];
var _hoisted_102 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_103 = {
  "class": "b-avatar-img"
};
var _hoisted_104 = ["src"];
var _hoisted_105 = {
  "class": "b-avatar avatar badge-default rounded"
};
var _hoisted_106 = {
  "class": "b-avatar-img"
};
var _hoisted_107 = ["src"];

var _hoisted_108 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 layout-spacing\"><div class=\"widget widget-summary-1\"><div class=\"widget-heading\"><h5>Summary</h5><div class=\"task-action\"><div class=\"dropdown btn-group\"><a href=\"javascript:;\" id=\"ddlSummary\" class=\"btn dropdown-toggle btn-icon-only\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-more-horizontal\"><circle cx=\"12\" cy=\"12\" r=\"1\"></circle><circle cx=\"19\" cy=\"12\" r=\"1\"></circle><circle cx=\"5\" cy=\"12\" r=\"1\"></circle></svg></a><ul class=\"dropdown-menu dropdown-menu-end\" aria-labelledby=\"ddlSummary\"><li><a href=\"javascript:;\" class=\"dropdown-item\">View Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Edit Report</a></li><li><a href=\"javascript:;\" class=\"dropdown-item\">Mark as Done</a></li></ul></div></div></div><div class=\"widget-content\"><div class=\"order-summary\"><div class=\"summary-list summary-income\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Income <span class=\"summary-count\">$92,600 </span></h6><p class=\"summary-average\">90%</p></div></div></div></div><div class=\"summary-list summary-profit\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-tag\"><path d=\"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z\"></path><line x1=\"7\" y1=\"7\" x2=\"7\" y2=\"7\"></line></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Profit <span class=\"summary-count\">$37,515</span></h6><p class=\"summary-average\">65%</p></div></div></div></div><div class=\"summary-list summary-expenses\"><div class=\"summery-info\"><div class=\"w-icon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-credit-card\"><rect x=\"1\" y=\"4\" width=\"22\" height=\"16\" rx=\"2\" ry=\"2\"></rect><line x1=\"1\" y1=\"10\" x2=\"23\" y2=\"10\"></line></svg></div><div class=\"w-summary-details\"><div class=\"w-summary-info\"><h6>Expenses <span class=\"summary-count\">$55,085</span></h6><p class=\"summary-average\">80%</p></div></div></div></div></div></div></div></div>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_perfect_scrollbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("perfect-scrollbar");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "#breadcrumb"
  }, [_hoisted_2])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_hoisted_8, $setup.revenue_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "325",
    type: "area",
    options: $setup.revenue_options,
    series: $setup.revenue_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [$setup.sales_donut_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "460",
    type: "donut",
    options: $setup.sales_donut_options,
    series: $setup.sales_donut_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [$setup.daily_sales_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "bar",
    options: $setup.daily_sales_options,
    series: $setup.daily_sales_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), _hoisted_17, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [$setup.total_orders_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "290",
    type: "area",
    options: $setup.total_orders_options,
    series: $setup.total_orders_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "timeline-line"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_26, _hoisted_27, _hoisted_28, _hoisted_29, _hoisted_30, _hoisted_31, _hoisted_32, _hoisted_33, _hoisted_34, _hoisted_35, _hoisted_36, _hoisted_37, _hoisted_38, _hoisted_39, _hoisted_40, _hoisted_41];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_42])])]), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, $setup.total_visit_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "58",
    type: "line",
    options: $setup.total_visit_options,
    series: $setup.total_visit_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [_hoisted_55, $setup.paid_visit_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "58",
    type: "line",
    options: $setup.paid_visit_options,
    series: $setup.paid_visit_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])]), _hoisted_56, _hoisted_57, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [$setup.unique_visitor_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "350",
    type: "bar",
    options: $setup.unique_visitor_options,
    series: $setup.unique_visitor_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [_hoisted_64, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [_hoisted_66, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_perfect_scrollbar, {
    "class": "mt-container mx-auto"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_67];
    }),
    _: 1
    /* STABLE */

  }), _hoisted_68])])]), _hoisted_69, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_hoisted_74, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [$setup.followers_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.followers_options,
    series: $setup.followers_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_80, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [$setup.referral_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.referral_options,
    series: $setup.referral_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_hoisted_84, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [$setup.engagement_options ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["apexchart"], {
    key: 0,
    height: "160",
    type: "area",
    options: $setup.engagement_options,
    series: $setup.engagement_series
  }, null, 8
  /* PROPS */
  , ["options", "series"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])])])])]), _hoisted_87, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [_hoisted_91, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_92, [_hoisted_93, _hoisted_94, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_95, [_hoisted_96, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_97, [_hoisted_98, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_99, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_100, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! @/assets/images/profile-8.jpeg */ "./resources/js/src/assets/images/profile-8.jpeg"),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_101)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_102, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_103, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! @/assets/images/profile-12.jpeg */ "./resources/js/src/assets/images/profile-12.jpeg"),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_104)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_105, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_106, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: __webpack_require__(/*! @/assets/images/profile-19.jpeg */ "./resources/js/src/assets/images/profile-19.jpeg"),
    alt: "avatar"
  }, null, 8
  /* PROPS */
  , _hoisted_107)])])])])])])]), _hoisted_108])]);
}

/***/ }),

/***/ "./resources/js/src/assets/images/g-8.png":
/*!************************************************!*\
  !*** ./resources/js/src/assets/images/g-8.png ***!
  \************************************************/
/***/ ((module) => {

module.exports = "/images/g-8-2277c5980263c72654cf6f869f7defa8.png";

/***/ }),

/***/ "./resources/js/src/assets/images/product-camera.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-camera.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-camera-18c4d47be8f6e1262099669611bf73a9.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-headphones.jpg":
/*!***************************************************************!*\
  !*** ./resources/js/src/assets/images/product-headphones.jpg ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = "/images/product-headphones-98afa574e3e39c76ab8ef8c6b9ab7333.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-laptop.jpg":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/images/product-laptop.jpg ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = "/images/product-laptop-10a375ed7252da64296515557fa78a88.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-shoes.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-shoes.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-shoes-bb208df6b3feb6a275aba0792f3911d5.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/product-watch.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/src/assets/images/product-watch.jpg ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "/images/product-watch-7ce41da4d6689a530e7bbf73f3bcda0e.jpg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-10.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-10.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-10-8ed024b4035189204ca907fef8be93fe.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-11.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-11.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-11-80d0de0e88aaadff32fac5df9ac84ff6.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-12.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-12.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-12-a7808c08c8cc0f64bc17e498a0434f91.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-13.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-13.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-13-8d35c0a20b5d253c2d7a849a86bd4fa8.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-19.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-19.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-19-1de6117cbebe6c6e4dc692d3bf17ec32.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-3.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-3.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-3-ab2d579c360f31c986d98f5bdcffbcdb.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-32.jpeg":
/*!********************************************************!*\
  !*** ./resources/js/src/assets/images/profile-32.jpeg ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "/images/profile-32-868df2c85b88c8f83554b2245237d5c9.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-4.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-4.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-4-8a4c33cc905139db289ede8060640b69.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-5.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-5.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-5-05b70ad96255ec3cdf0a840f74fa41d3.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-6.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-6.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-6-c53ec44e2743a6cb8b5865ebd91e3a70.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-7.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-7.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-7-72dcc5961b1b6ee0a1e6284c72fae404.jpeg";

/***/ }),

/***/ "./resources/js/src/assets/images/profile-8.jpeg":
/*!*******************************************************!*\
  !*** ./resources/js/src/assets/images/profile-8.jpeg ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "/images/profile-8-82d3e90e675362b74a84f1771c017a3c.jpeg";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/widgets/widgets.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/widgets/widgets.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n\t===============================\n\t\t\t@Import\tMixins\n\t===============================\n*/\n.dash_1 .layout-spacing,\n.dash_2 .layout-spacing {\n  padding-bottom: 24px;\n}\n\n.widget {\n  position: relative;\n  background: #fff;\n  border: 1px solid #e0e6ed;\n  box-shadow: 0 0 40px 0 rgba(94, 92, 154, 0.06);\n  border-radius: 6px;\n  color: #212529;\n  height: 100%;\n  /*Revenue*/\n  /*Sales by Category*/\n  /*Daily Sales*/\n  /*Summary*/\n  /*Total Order*/\n  /*Recent Activities*/\n  /*Transactions*/\n  /*Wallet Balance*/\n  /*Recent Orders*/\n  /*Top Selling Products*/\n  /*Statistics*/\n  /*Expenses*/\n  /*Total Balance*/\n  /*Unique Visitors*/\n  /*Activity Log*/\n  /*Visitors by Browser*/\n  /*Card One|Two|Three*/\n  /*Summary 1*/\n}\n\n.widget h5 {\n  margin: 0;\n  letter-spacing: 0;\n  color: #0e1726;\n  font-weight: 600;\n}\n\n.widget .icon-fill-primary {\n  color: #4361ee;\n  background-color: #eaf1ff;\n}\n\n.widget .icon-fill-info {\n  color: #2196f3;\n  background-color: #bae7ff;\n}\n\n.widget .icon-fill-secondary {\n  color: #805dca;\n  background-color: #dccff7;\n}\n\n.widget .icon-fill-danger {\n  color: #e7515a;\n  background-color: #ffe1e2;\n}\n\n.widget .icon-fill-warning {\n  color: #e2a03f;\n  background-color: #ffeccb;\n}\n\n.widget .icon-fill-success {\n  color: #009688;\n  background-color: #ddf5f0;\n}\n\n.widget .icon-fill-dark {\n  color: #3b3f5c;\n  background-color: #e3e4eb;\n}\n\n.widget .widget-heading {\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.widget .widget-heading h5 {\n  font-size: 19px;\n}\n\n.widget .widget-heading .sub-title {\n  font-size: 13px;\n  color: #888ea8;\n  font-weight: 600;\n}\n\n.widget .widget-heading .dropdown-toggle svg {\n  color: #888ea8;\n}\n\n.widget .widget-content {\n  padding: 0 20px 20px;\n}\n\n.widget .widget-content .chart-title {\n  font-size: 18px;\n}\n\n.widget.widget-revenue .apexcharts-legend-series {\n  margin-left: 20px;\n}\n\n.widget.widget-revenue .apexcharts-legend-series .apexcharts-legend-marker {\n  left: -5px !important;\n}\n\n.widget.widget-sales-category .apexcharts-legend-series .apexcharts-legend-marker {\n  left: -5px !important;\n}\n\n.widget.widget-dailysales .widget-heading .w-icon {\n  background: #ffeccb;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 45px;\n  width: 45px;\n}\n\n.widget.widget-dailysales .widget-content .apexcharts-canvas {\n  padding-top: 25px;\n}\n\n.widget.widget-summary .widget-content {\n  display: grid;\n  gap: 32px;\n  padding-top: 30px;\n}\n\n.widget.widget-summary .widget-content .summary-list {\n  display: flex;\n}\n\n.widget.widget-summary .widget-content .summary-list .w-icon {\n  width: 34px;\n  height: 34px;\n  border-radius: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n}\n\n.widget.widget-summary .widget-content .summary-list:nth-child(1) .w-icon {\n  background: rgba(220, 207, 247, 0.55);\n  color: #805dca;\n}\n\n.widget.widget-summary .widget-content .summary-list:nth-child(2) .w-icon {\n  background: rgba(199, 230, 228, 0.62);\n  color: #009688;\n}\n\n.widget.widget-summary .widget-content .summary-list:nth-child(3) .w-icon {\n  background: rgba(255, 236, 203, 0.51);\n  color: #e2a03f;\n}\n\n.widget.widget-summary .widget-content .summary-list .w-summary-details {\n  flex: 1 1 0%;\n}\n\n.widget.widget-summary .widget-content .summary-list .w-summary-details .w-summary-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.widget.widget-summary .widget-content .summary-list .w-summary-details .w-summary-info h6,\n.widget.widget-summary .widget-content .summary-list .w-summary-details .w-summary-info p {\n  color: #888ea8;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.widget.widget-summary .widget-content .summary-list .w-summary-details .w-summary-stats .progress {\n  margin-bottom: 0;\n  height: 6px;\n  border-radius: 20px;\n  box-shadow: 0 2px 2px rgba(224, 230, 237, 0.46), 1px 6px 7px rgba(224, 230, 237, 0.46);\n}\n\n.widget.widget-total-order {\n  background: rgb(115, 70, 211);\n}\n\n.widget.widget-total-order .widget-heading {\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n\n.widget.widget-total-order .widget-heading .w-icon {\n  height: 45px;\n  width: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #dccff7;\n  border-radius: 12px;\n}\n\n.widget.widget-total-order .widget-heading .w-icon svg {\n  color: #7346d3;\n  fill: rgba(128, 93, 202, 0.46);\n}\n\n.widget.widget-total-order .widget-heading div:last-child {\n  text-align: right;\n  font-weight: 600;\n  color: #e0e6ed;\n}\n\n.widget.widget-total-order .widget-heading div:last-child .w-value {\n  font-size: 26px;\n}\n\n.widget.widget-total-order .widget-heading div:last-child .w-numeric-title {\n  font-size: 13px;\n  letter-spacing: 1px;\n}\n\n.widget.widget-recent-activity .widget-content {\n  padding-right: 8px;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line {\n  height: 326px;\n  overflow: hidden;\n  position: relative;\n  padding-right: 12px;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline {\n  display: flex;\n  align-items: center;\n  padding: 8px 0;\n  transition: 0.5s;\n  position: relative;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline .badge:empty {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  padding: 0;\n  border-radius: 100%;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline .t-text {\n  margin-left: 6px;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  transition: 0.5s;\n  padding: 0;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline .t-text p {\n  margin: 0;\n  font-size: 13px;\n  letter-spacing: 0;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline .t-text p.t-time {\n  text-align: right;\n  color: #888ea8;\n  font-size: 10px;\n  padding: 0;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline .t-text span.badge {\n  position: absolute;\n  right: 0;\n  padding: 2px 4px;\n  font-size: 10px;\n  letter-spacing: 1px;\n  opacity: 0;\n  font-weight: 600;\n  transform: none;\n  top: 6px;\n}\n\n.widget.widget-recent-activity .widget-content .timeline-line .item-timeline:hover span.badge {\n  opacity: 1;\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn button {\n  background: transparent;\n  box-shadow: none;\n  padding: 0;\n  color: #030305;\n  font-weight: 800;\n  letter-spacing: 0;\n  border: none;\n  font-size: 14px;\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn button span {\n  margin-right: 6px;\n  display: inline-block;\n  transition: 0.5s;\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn button svg {\n  width: 17px;\n  height: 17px;\n  vertical-align: sub;\n  color: #e3e4eb;\n  stroke-width: 2.5px;\n  transition: 0.5s;\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn button:hover span {\n  transform: translateX(-6px);\n}\n\n.widget.widget-recent-activity .widget-content .tm-action-btn button:hover svg {\n  transform: translateX(6px);\n}\n\n.widget.widget-transaction .widget-content {\n  padding-top: 10px;\n}\n\n.widget.widget-transaction .widget-content .transactions-list {\n  display: flex;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.widget.widget-transaction .widget-content .transactions-list:not(:last-child) {\n  margin-bottom: 24px;\n}\n\n.widget.widget-transaction .widget-content .transactions-list > div {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n}\n\n.widget.widget-transaction .widget-content .transactions-list > div .b-avatar {\n  border-radius: 12px !important;\n}\n\n.widget.widget-transaction .widget-content .transactions-list > div .t-name h4 {\n  font-size: 14px;\n  font-weight: 700;\n  margin-bottom: 0;\n}\n\n.widget.widget-transaction .widget-content .transactions-list > div .t-name p {\n  font-size: 12px;\n  margin-bottom: 0;\n  font-weight: 500;\n  color: #888ea8;\n}\n\n.widget.widget-wallet-balance {\n  background: #fdfdfd;\n  border-top-right-radius: 25px;\n  border-top-left-radius: 25px;\n}\n\n.widget.widget-wallet-balance .widget-heading {\n  padding: 24px 30px 63px 30px;\n  border-radius: 15px;\n  background-color: rgb(22, 15, 107);\n  background-image: linear-gradient(315deg, #160f6b 0%, #4361ee 74%);\n  min-height: 213px;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-usr-info {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-usr-info span {\n  display: inline-block;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 5px 12px 5px 6px;\n  border-radius: 21px;\n  position: relative;\n  font-size: 13px;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-usr-info span img {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 3px solid rgba(255, 255, 255, 0.18);\n}\n\n.widget.widget-wallet-balance .widget-heading .add span {\n  padding: 6px;\n  border-radius: 12px;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-balance {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 37px;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-balance p {\n  margin-bottom: 0;\n  align-self: center;\n  font-size: 19px;\n  color: #fff;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-balance h5 {\n  font-size: 28px;\n  color: #fff;\n  margin-top: 0;\n  font-weight: 500;\n}\n\n.widget.widget-wallet-balance .widget-heading .wallet-balance h5 .w-currency {\n  color: #bfc9d4;\n}\n\n.widget.widget-wallet-balance .widget-amount {\n  text-align: center;\n  margin-top: -48px;\n}\n\n.widget.widget-wallet-balance .widget-amount .w-a-info {\n  display: inline-block;\n  padding: 12px 23px;\n  background: #fff;\n  text-align: left;\n  border-radius: 6px;\n  width: 40%;\n  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);\n  color: #151516;\n  font-weight: 600;\n}\n\n.widget.widget-wallet-balance .widget-amount p {\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 0;\n  text-align: center;\n  background: #ebedf2;\n  border-radius: 6px;\n  margin-top: 10px;\n  padding: 3px 0;\n  color: #515365;\n}\n\n.widget.widget-wallet-balance .widget-content {\n  padding: 20px;\n}\n\n.widget.widget-wallet-balance .widget-content .bills-stats span {\n  display: inline-block;\n  color: #fff;\n  background: rgba(0, 0, 0, 0.4);\n  padding: 4px 12px 4px 20px;\n  border-radius: 21px;\n  position: relative;\n  font-size: 12px;\n  letter-spacing: 1px;\n  background-color: #1b2e4b;\n}\n\n.widget.widget-wallet-balance .widget-content .bills-stats span:before {\n  content: \"\";\n  position: absolute;\n  height: 6px;\n  width: 6px;\n  background: white;\n  border-radius: 50%;\n  left: 9px;\n  top: 9.5px;\n}\n\n.widget.widget-wallet-balance .widget-content [class*=info-detail-]:not(.info-sub) {\n  display: flex;\n  justify-content: space-between;\n}\n\n.widget.widget-wallet-balance .widget-content [class*=info-detail-]:not(.info-sub) p {\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 13px;\n  align-self: center;\n}\n\n.widget.widget-wallet-balance .widget-content [class*=info-detail-]:not(.info-sub) p span {\n  font-weight: 700;\n}\n\n.widget.widget-wallet-balance .widget-content [class*=info-detail-]:not(.info-sub) p span.w-currency {\n  font-size: 16px;\n  color: #888ea8;\n  font-weight: 500;\n}\n\n.widget.widget-wallet-balance .widget-content [class*=info-detail-]:not(.info-sub) p span.bill-amount {\n  font-size: 14px;\n  color: #030305;\n  font-weight: 700;\n}\n\n.widget.widget-wallet-balance .widget-content .inv-action {\n  text-align: center;\n  display: flex;\n  justify-content: space-around;\n}\n\n.widget.widget-wallet-balance .widget-content .inv-action a {\n  border: none !important;\n  font-size: 13px;\n  padding: 6px 11px;\n  font-weight: 600;\n  letter-spacing: 1px;\n}\n\n.widget.widget-wallet-balance .widget-content .inv-action a.view-details {\n  color: #805dca !important;\n  background: rgba(92, 26, 195, 0.17);\n}\n\n.widget.widget-wallet-balance .widget-content .inv-action a.pay-now {\n  color: #009688 !important;\n  background: rgba(0, 150, 136, 0.1882352941);\n}\n\n.widget.widget-recent-orders .widget-content .table-responsive {\n  margin-bottom: 0;\n}\n\n.widget.widget-recent-orders .widget-content thead > tr > th {\n  text-transform: initial;\n  border: none;\n  background: rgba(186, 231, 255, 0.34);\n  padding: 10px 15px;\n}\n\n.widget.widget-recent-orders .widget-content thead > tr > th:first-child {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.widget.widget-recent-orders .widget-content thead > tr > th:last-child {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.widget.widget-recent-orders .widget-content thead > tr > th .th-content {\n  color: #515365;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.widget.widget-recent-orders .widget-content tbody > tr > td {\n  border: none;\n  padding: 10px 15px;\n}\n\n.widget.widget-recent-orders .widget-content tbody > tr > td:first-child .td-content {\n  color: #515365;\n}\n\n.widget.widget-recent-orders .widget-content tbody > tr > td .td-content {\n  cursor: pointer;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n.widget.widget-recent-orders .widget-content tbody > tr > td .td-content img {\n  width: 34px;\n  height: 34px;\n  border-radius: 6px;\n  margin-right: 10px;\n  padding: 2px;\n}\n\n.widget.widget-recent-orders .widget-content tbody > tr:hover > td .td-content {\n  color: #515365;\n}\n\n.widget.widget-top-selling-products .widget-content .table-responsive {\n  margin-bottom: 0;\n}\n\n.widget.widget-top-selling-products .widget-content thead > tr > th {\n  text-transform: initial;\n  border: none;\n  background: rgba(186, 231, 255, 0.34);\n  padding: 10px 15px;\n}\n\n.widget.widget-top-selling-products .widget-content thead > tr > th:first-child {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px;\n}\n\n.widget.widget-top-selling-products .widget-content thead > tr > th:last-child {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px;\n}\n\n.widget.widget-top-selling-products .widget-content thead > tr > th .th-content {\n  color: #515365;\n  font-weight: 600;\n  font-size: 14px;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td {\n  border: none;\n  padding: 12px 15px;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td:first-child .td-content {\n  color: #515365;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content {\n  cursor: pointer;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content img {\n  width: 42px;\n  height: 42px;\n  border-radius: 6px;\n  margin-right: 10px;\n  padding: 2px;\n  box-shadow: 1px 1px 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content p {\n  font-weight: 700;\n  margin-bottom: 0;\n  font-size: 13px;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content p.prd-category {\n  font-size: 12px;\n  font-weight: 600;\n  text-shadow: 1px 1px 7px rgba(0, 0, 0, 0.26);\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content a {\n  font-size: 13px;\n  font-weight: normal;\n  display: flex;\n  align-items: center;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content a:hover {\n  text-decoration: underline !important;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr > td .td-content a svg {\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n}\n\n.widget.widget-top-selling-products .widget-content tbody > tr:hover > td .td-content {\n  color: #515365;\n}\n\n.widget.widget-statistics .widget-content {\n  padding: 20px;\n}\n\n.widget.widget-statistics .widget-content p {\n  margin-bottom: 0;\n  font-weight: 700;\n}\n\n.widget.widget-statistics .widget-content p.w-title {\n  font-size: 13px;\n}\n\n.widget.widget-statistics .widget-content p.w-stats {\n  color: #f8538d;\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n\n.widget.widget-expenses .widget-content {\n  padding: 20px;\n}\n\n.widget.widget-expenses .widget-content > p {\n  color: #e95f2b;\n  font-size: 30px;\n  margin-bottom: 0;\n}\n\n.widget.widget-expenses .widget-content > p span {\n  font-size: 15px;\n  color: #030305;\n  font-weight: 700;\n}\n\n.widget.widget-expenses .widget-content > p svg {\n  width: 16px;\n  height: 16px;\n  color: #009688;\n  margin-top: 7px;\n}\n\n.widget.widget-expenses .widget-content .w-progress-stats {\n  display: flex;\n  margin-top: 30px;\n}\n\n.widget.widget-expenses .widget-content .w-progress-stats .progress {\n  margin-bottom: 0;\n  height: 20px;\n  padding: 4px;\n  border-radius: 20px;\n  box-shadow: 0 2px 2px rgba(224, 230, 237, 0.46);\n  width: 100%;\n  align-self: flex-end;\n  margin-right: 22px;\n  background-color: #ebedf2;\n}\n\n.widget.widget-expenses .widget-content .w-progress-stats .progress .progress-bar.bg-gradient-secondary {\n  position: relative;\n  background-color: #fc5296;\n  background-image: linear-gradient(315deg, #805dca, #4361ee 74%);\n}\n\n.widget.widget-expenses .widget-content .w-progress-stats .progress .progress-bar.bg-gradient-secondary:before {\n  content: \"\";\n  height: 6px;\n  width: 6px;\n  background: #fff;\n  position: absolute;\n  right: 3px;\n  border-radius: 50%;\n  top: 3px;\n}\n\n.widget.widget-total-balance {\n  z-index: 0;\n  overflow: hidden;\n  background-image: linear-gradient(0deg, #00c6fb -227%, #005bea) !important;\n}\n\n.widget.widget-total-balance:before {\n  content: \"\";\n  position: absolute;\n  height: 382px;\n  width: 382px;\n  background-color: #1937cc;\n  top: -76px;\n  left: 50%;\n  z-index: 1;\n  border-radius: 50%;\n}\n\n.widget.widget-total-balance .widget-content {\n  padding: 20px;\n}\n\n.widget.widget-total-balance .widget-content .account-box {\n  position: relative;\n  z-index: 1;\n}\n\n.widget.widget-total-balance .widget-content .account-box .info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 86px;\n}\n\n.widget.widget-total-balance .widget-content .account-box .info h5 {\n  color: #e0e6ed;\n  margin-bottom: 0;\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 5px;\n}\n\n.widget.widget-total-balance .widget-content .account-box .info .inv-balance-info {\n  text-align: right;\n}\n\n.widget.widget-total-balance .widget-content .account-box .info .inv-balance-info p {\n  color: #e0e6ed;\n  margin-bottom: 4px;\n  font-size: 20px;\n}\n\n.widget.widget-total-balance .widget-content .account-box .info .inv-balance-info .inv-stats {\n  padding: 4px 5px;\n  background: #4361ee;\n  color: #d3d3d3;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 4px;\n}\n\n.widget.widget-total-balance .widget-content .account-box .acc-action {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.widget.widget-total-balance .widget-content .account-box .acc-action a {\n  display: inline-flex;\n  align-items: center;\n  padding: 6px;\n  border-radius: 6px;\n  color: #e0e6ed;\n  box-shadow: 0 0 2px 0 #bfc9d4;\n}\n\n.widget.widget-total-balance .widget-content .account-box .acc-action a:first-child {\n  margin-right: 4px;\n}\n\n.widget.widget-total-balance .widget-content .account-box .acc-action a svg {\n  width: 17px;\n  height: 17px;\n  stroke-width: 1.7;\n}\n\n.widget.widget-unique-visitors .widget-heading {\n  border-bottom: 1px dashed #e0e6ed;\n}\n\n.widget.widget-unique-visitors .widget-content {\n  padding: 0;\n}\n\n.widget.widget-unique-visitors .widget-content .apexcharts-legend-series[rel=\"1\"] {\n  margin-right: 12px !important;\n}\n\n.widget.widget-unique-visitors .widget-content .apexcharts-legend-text {\n  margin-top: 2px;\n  margin-left: 2px;\n}\n\n.widget.widget-active-log .widget-heading {\n  border-bottom: 1px dashed #e0e6ed;\n}\n\n.widget.widget-active-log .widget-content {\n  padding-top: 10px;\n  padding-right: 10px;\n}\n\n.widget.widget-active-log .widget-content .w-shadow-top,\n.widget.widget-active-log .widget-content .w-shadow-bottom {\n  display: block;\n  position: absolute;\n  z-index: 2;\n  height: 17px;\n  width: 97%;\n  pointer-events: none;\n  margin-top: -10px;\n  left: 2px;\n  filter: blur(9px);\n  background: linear-gradient(180deg, #fff 44%, hsla(0, 0%, 100%, 0.8705882353) 73%, rgba(44, 48, 60, 0));\n}\n\n.widget.widget-active-log .widget-content .w-shadow-bottom {\n  margin-top: -3px;\n}\n\n.widget.widget-active-log .widget-content .mt-container {\n  position: relative;\n  height: 340px;\n  padding: 15px 12px 0 12px;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline {\n  display: flex;\n  margin-bottom: 35px;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot {\n  position: relative;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot:before {\n  content: none;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div {\n  background: transparent;\n  border-radius: 100%;\n  margin-right: 10px;\n  height: 32px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-secondary {\n  background-color: #805dca;\n  box-shadow: 0 10px 20px -8px #805dca;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-success {\n  background-color: #009688;\n  box-shadow: 0 10px 20px -8px #009688;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-danger {\n  background-color: #e7515a;\n  box-shadow: 0 10px 20px -8px #e7515a;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-primary {\n  background-color: #4361ee;\n  box-shadow: 0 10px 20px -8px #1b55e2;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-warning {\n  background-color: #e2a03f;\n  box-shadow: 0 10px 20px -8px #e2a03f;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div.t-dark {\n  background-color: #3b3f5c;\n  box-shadow: 0 10px 20px -8px #3b3f5c;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-dot div svg {\n  color: #fff;\n  height: 15px;\n  width: 15px;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline:not(:last-child) .t-dot:after {\n  content: \"\";\n  position: absolute;\n  border-left: 1px solid #bfc9d4;\n  left: 39%;\n  transform: translateX(-50%);\n  width: 0;\n  height: auto;\n  top: 45px;\n  bottom: -23px;\n  border-radius: 0;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-content .t-uppercontent {\n  display: flex;\n  justify-content: space-between;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-content .t-uppercontent h5 {\n  font-size: 14px;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-content .t-uppercontent span {\n  font-size: 13px;\n  color: #009688;\n}\n\n.widget.widget-active-log .widget-content .mt-container .timeline-line .item-timeline .t-content p {\n  margin-bottom: 0;\n  font-size: 12px;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list {\n  display: flex;\n  align-items: center;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list:not(:last-child) {\n  margin-bottom: 30px;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-icon {\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  height: 35px;\n  width: 35px;\n  margin-right: 12px;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-icon svg {\n  width: 18px;\n  height: 18px;\n  stroke-width: 1px;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details {\n  width: 100%;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .w-browser-info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1px;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details h6,\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details p {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #888ea8;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details p {\n  font-size: 12px;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress {\n  margin-bottom: 0;\n  height: 22px;\n  padding: 4px;\n  border-radius: 20px;\n  box-shadow: 0 2px 2px rgba(224, 230, 237, 0.46), 1px 6px 7px rgba(224, 230, 237, 0.46);\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress .progress-bar {\n  position: relative;\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress .progress-bar.bg-gradient-primary {\n  background-color: #2a2a72;\n  background-image: linear-gradient(315deg, #2a2a72, #009ffd 74%);\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress .progress-bar.bg-gradient-danger {\n  background-image: linear-gradient(315deg, #3f0d12, #a71d31 74%);\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress .progress-bar.bg-gradient-warning {\n  background-color: #fc9842;\n  background-image: linear-gradient(315deg, #fc9842, #fe5f75 74%);\n}\n\n.widget.widget-visitor-by-browser .widget-content .browser-list .w-browser-details .progress .progress-bar:before {\n  content: \"\";\n  height: 7px;\n  width: 7px;\n  background: #fff;\n  position: absolute;\n  right: 3px;\n  border-radius: 50%;\n  top: 3.4px;\n}\n\n.widget.widget-card-one .widget-heading {\n  border-bottom: 1px dashed #e0e6ed;\n}\n\n.widget.widget-card-one .widget-heading .media {\n  align-items: center;\n}\n\n.widget.widget-card-one .widget-heading .w-img img {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  border: 3px solid #e0e6ed;\n}\n\n.widget.widget-card-one .widget-heading h6 {\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 0;\n  margin-bottom: 0;\n}\n\n.widget.widget-card-one .widget-heading p {\n  font-size: 13px;\n  letter-spacing: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #888ea8;\n  padding: 0;\n}\n\n.widget.widget-card-one .widget-content {\n  padding: 20px;\n}\n\n.widget.widget-card-one .widget-content p {\n  font-weight: 600;\n  font-size: 13px;\n  margin-bottom: 65px;\n}\n\n.widget.widget-card-one .widget-content .w-action {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.widget.widget-card-one .widget-content .w-action svg {\n  color: #2196f3;\n  fill: #e7f7ff;\n  margin-right: 8px;\n  stroke-width: 1.5;\n}\n\n.widget.widget-card-one .widget-content .w-action span {\n  vertical-align: sub;\n  font-weight: 700;\n  color: #0e1726;\n  letter-spacing: 1px;\n}\n\n.widget.widget-card-one .widget-content .w-action .read-more a {\n  padding: 4px 5px;\n  background: rgba(0, 150, 136, 0.26);\n  color: #009688;\n  font-size: 12px;\n  font-weight: 600;\n  border-radius: 4px;\n}\n\n.widget.widget-card-one .widget-content .w-action .read-more a svg {\n  margin-right: 0;\n  color: #009688;\n  width: 16px;\n  height: 16px;\n  fill: transparent;\n  stroke-width: 1.8;\n}\n\n.widget.widget-card-one .widget-content .w-action .read-more a:hover {\n  box-shadow: 0 0 30px #e0f0ef;\n}\n\n.widget.widget-card-two .widget-heading {\n  border-bottom: 1px dashed #e0e6ed;\n}\n\n.widget.widget-card-two .widget-heading .media {\n  align-items: center;\n}\n\n.widget.widget-card-two .widget-heading .w-img img {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n  border: 3px solid #e0e6ed;\n}\n\n.widget.widget-card-two .widget-heading h6 {\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 0;\n  margin-bottom: 0;\n}\n\n.widget.widget-card-two .widget-heading p {\n  margin-bottom: 0;\n  font-weight: 600;\n  color: #888ea8;\n}\n\n.widget.widget-card-two .widget-content {\n  text-align: center;\n  padding: 20px;\n}\n\n.widget.widget-card-two .widget-content h5 {\n  font-size: 14px;\n  color: #009688;\n  font-weight: 700;\n  margin-bottom: 20px;\n}\n\n.widget.widget-card-two .widget-content .img-group img {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  border: 2px solid #e0e6ed;\n}\n\n.widget.widget-card-two .widget-content .img-group img:not(:last-child) {\n  margin-right: 5px;\n}\n\n.widget.widget-card-two .widget-content a {\n  display: block;\n  margin-top: 25px;\n  background: #4361ee;\n  padding: 10px 10px;\n  font-size: 15px;\n  font-weight: 600;\n  letter-spacing: 1px;\n  border: none;\n  background-image: linear-gradient(315deg, #1e9afe, #3d38e1 74%);\n}\n\n.widget.widget-card-two .widget-content a:hover {\n  box-shadow: none;\n}\n\n.widget.widget-card-three .widget-heading .task-info {\n  display: flex;\n}\n\n.widget.widget-card-three .widget-heading .task-info .usr-avatar {\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background-color: #805dca;\n  color: #f3effc;\n}\n\n.widget.widget-card-three .widget-heading .task-info .usr-avatar span {\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.widget.widget-card-three .widget-heading .task-info .w-title {\n  align-self: center;\n}\n\n.widget.widget-card-three .widget-heading .task-info .w-title h5 {\n  color: #3b3f5c;\n  font-weight: 700;\n  font-size: 15px;\n  letter-spacing: 0;\n  margin-bottom: 0;\n}\n\n.widget.widget-card-three .widget-heading .task-info .w-title span {\n  font-size: 12px;\n  font-weight: 500;\n}\n\n.widget.widget-card-three .widget-content p {\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 14px;\n  color: #888ea8;\n}\n\n.widget.widget-card-three .widget-content .progress-data {\n  margin-top: 20px;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress-info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress-info .task-count {\n  display: flex;\n  align-items: center;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress-info .task-count svg {\n  margin-right: 6px;\n  width: 15px;\n  height: 15px;\n  color: #009688;\n  fill: rgba(199, 230, 228, 0.46);\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress-info .task-count p {\n  font-weight: 700;\n  font-size: 12px;\n  color: #515365;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress-info .progress-stats p {\n  font-weight: 600;\n  color: #4361ee;\n  font-size: 15px;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress {\n  border-radius: 30px;\n  height: 12px;\n}\n\n.widget.widget-card-three .widget-content .progress-data .progress .progress-bar {\n  margin: 3px;\n  background-color: #60dfcd;\n  background-image: linear-gradient(315deg, #60dfcd, #1e9afe 74%);\n}\n\n.widget.widget-card-three .widget-content .meta-info {\n  display: flex;\n  justify-content: space-between;\n}\n\n.widget.widget-card-three .widget-content .meta-info .due-time {\n  align-self: center;\n}\n\n.widget.widget-card-three .widget-content .meta-info .due-time p {\n  font-weight: 600;\n  font-size: 11px;\n  padding: 4px 6px 4px 6px;\n  background: #fff5f5;\n  border-radius: 30px;\n  color: #e7515a;\n}\n\n.widget.widget-card-three .widget-content .meta-info .due-time p svg {\n  width: 14px;\n  height: 15px;\n  vertical-align: text-bottom;\n}\n\n.widget.widget-card-three .widget-content .meta-info .avatar--group {\n  display: inline-flex;\n}\n\n.widget.widget-card-three .widget-content .meta-info .avatar--group .more-group {\n  margin-right: 5px;\n  opacity: 0;\n}\n\n.widget.widget-card-three .widget-content .meta-info .avatar--group .avatar {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 36px;\n  font-size: 1rem;\n  transition: 0.5s;\n}\n\n.widget.widget-card-three .widget-content .meta-info .avatar--group .avatar img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border: 3px solid #fff;\n  border-radius: 12px;\n}\n\n.widget.widget-card-three .widget-content .meta-info .avatar--group .avatar .avatar-title {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  background-color: #bfc9d4;\n  color: #fff;\n  border-radius: 12px;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.widget.widget-card-three .widget-content:hover .avatar--group .more-group {\n  opacity: 1;\n}\n\n.widget.widget-card-three .widget-content:hover .avatar:not(:first-child) {\n  margin-left: -0.75rem;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list {\n  position: relative;\n  padding: 15px;\n  background: rgba(224, 230, 237, 0.4);\n  border-radius: 6px;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list:not(:last-child) {\n  margin-bottom: 15px;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-income {\n  background: rgba(220, 207, 247, 0.34);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-income .summery-info .w-icon svg {\n  color: #805dca;\n  fill: rgba(92, 26, 195, 0.16);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-income .summery-info .summary-average {\n  color: #805dca;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-profit {\n  background: rgba(186, 231, 255, 0.34);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-profit .summery-info .w-icon svg {\n  color: #2196f3;\n  fill: rgba(33, 150, 243, 0.16);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-profit .summery-info .summary-average {\n  color: #2196f3;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-expenses {\n  background: rgba(255, 236, 203, 0.34);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-expenses .summery-info .w-icon svg {\n  color: #e2a03f;\n  fill: rgba(226, 160, 63, 0.16);\n}\n\n.widget.widget-summary-1 .widget-content .summary-list.summary-expenses .summery-info .summary-average {\n  color: #e2a03f;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info {\n  display: flex;\n  align-items: center;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info .w-icon {\n  border-radius: 12px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 35px;\n  width: 35px;\n  margin-right: 12px;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info .w-icon svg {\n  width: 22px;\n  height: 22px;\n  stroke-width: 1px;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info h6 {\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 0;\n  color: #888ea8;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info h6 span {\n  display: block;\n  font-size: 16px;\n  margin-top: 4px;\n  font-weight: 600;\n  color: #515365;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info .w-summary-details {\n  width: 100%;\n  align-self: center;\n}\n\n.widget.widget-summary-1 .widget-content .summary-list .summery-info .w-summary-details .w-summary-info {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1px;\n}\n\n/*Followers|Referral|Engagement*/\n.widget-statistic .widget-heading .w-title {\n  display: flex;\n}\n\n.widget-statistic .widget-heading .w-title .w-icon {\n  align-self: center;\n  padding: 10px;\n  border-radius: 12px;\n  margin-right: 16px;\n}\n\n.widget-statistic .widget-heading .w-title .w-icon svg {\n  width: 22px;\n  height: 22px;\n}\n\n.widget-statistic .widget-heading .w-title .w-value,\n.widget-statistic .widget-heading .w-title h5 {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 0;\n}\n\n.widget-statistic .widget-heading .w-title h5 {\n  font-size: 13px;\n  color: #506690;\n}\n\n.widget-statistic .widget-content {\n  padding: 20px 0 0;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/src/assets/sass/widgets/widgets.scss":
/*!***********************************************************!*\
  !*** ./resources/js/src/assets/sass/widgets/widgets.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_widgets_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./widgets.scss */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[0]!./resources/js/src/assets/sass/widgets/widgets.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_widgets_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_0_widgets_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/widgets.vue":
/*!********************************************!*\
  !*** ./resources/js/src/views/widgets.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.vue?vue&type=template&id=6b4101d6 */ "./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6");
/* harmony import */ var _widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets.vue?vue&type=script&setup=true&lang=js */ "./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/src/views/widgets.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widgets.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6 ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_widgets_vue_vue_type_template_id_6b4101d6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./widgets.vue?vue&type=template&id=6b4101d6 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/src/views/widgets.vue?vue&type=template&id=6b4101d6");


/***/ }),

/***/ "./node_modules/vue3-apexcharts/dist/vue3-apexcharts.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue3-apexcharts/dist/vue3-apexcharts.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ qe)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

function ei(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var Ue = { exports: {} };
/*!
 * ApexCharts v3.45.2
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
(function(_, Re) {
  function Ae(y, e) {
    var t = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(y);
      e && (i = i.filter(function(a) {
        return Object.getOwnPropertyDescriptor(y, a).enumerable;
      })), t.push.apply(t, i);
    }
    return t;
  }
  function X(y) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e] != null ? arguments[e] : {};
      e % 2 ? Ae(Object(t), !0).forEach(function(i) {
        ee(y, i, t[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(t)) : Ae(Object(t)).forEach(function(i) {
        Object.defineProperty(y, i, Object.getOwnPropertyDescriptor(t, i));
      });
    }
    return y;
  }
  function U(y) {
    return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
      return typeof e;
    } : function(e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    }, U(y);
  }
  function F(y, e) {
    if (!(y instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function ce(y, e) {
    for (var t = 0; t < e.length; t++) {
      var i = e[t];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(y, i.key, i);
    }
  }
  function Y(y, e, t) {
    return e && ce(y.prototype, e), t && ce(y, t), y;
  }
  function ee(y, e, t) {
    return e in y ? Object.defineProperty(y, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : y[e] = t, y;
  }
  function ge(y, e) {
    if (typeof e != "function" && e !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(e && e.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), e && Se(y, e);
  }
  function me(y) {
    return me = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
      return e.__proto__ || Object.getPrototypeOf(e);
    }, me(y);
  }
  function Se(y, e) {
    return Se = Object.setPrototypeOf || function(t, i) {
      return t.__proto__ = i, t;
    }, Se(y, e);
  }
  function ze(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function ue(y) {
    var e = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var t, i = me(y);
      if (e) {
        var a = me(this).constructor;
        t = Reflect.construct(i, arguments, a);
      } else
        t = i.apply(this, arguments);
      return function(s, r) {
        if (r && (typeof r == "object" || typeof r == "function"))
          return r;
        if (r !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return ze(s);
      }(this, t);
    };
  }
  function Me(y, e) {
    return function(t) {
      if (Array.isArray(t))
        return t;
    }(y) || function(t, i) {
      var a = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
      if (a != null) {
        var s, r, n = [], o = !0, h = !1;
        try {
          for (a = a.call(t); !(o = (s = a.next()).done) && (n.push(s.value), !i || n.length !== i); o = !0)
            ;
        } catch (c) {
          h = !0, r = c;
        } finally {
          try {
            o || a.return == null || a.return();
          } finally {
            if (h)
              throw r;
          }
        }
        return n;
      }
    }(y, e) || Xe(y, e) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function J(y) {
    return function(e) {
      if (Array.isArray(e))
        return Ce(e);
    }(y) || function(e) {
      if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
        return Array.from(e);
    }(y) || Xe(y) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function Xe(y, e) {
    if (y) {
      if (typeof y == "string")
        return Ce(y, e);
      var t = Object.prototype.toString.call(y).slice(8, -1);
      return t === "Object" && y.constructor && (t = y.constructor.name), t === "Map" || t === "Set" ? Array.from(y) : t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Ce(y, e) : void 0;
    }
  }
  function Ce(y, e) {
    (e == null || e > y.length) && (e = y.length);
    for (var t = 0, i = new Array(e); t < e; t++)
      i[t] = y[t];
    return i;
  }
  var P = function() {
    function y() {
      F(this, y);
    }
    return Y(y, [{ key: "shadeRGBColor", value: function(e, t) {
      var i = t.split(","), a = e < 0 ? 0 : 255, s = e < 0 ? -1 * e : e, r = parseInt(i[0].slice(4), 10), n = parseInt(i[1], 10), o = parseInt(i[2], 10);
      return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - n) * s) + n) + "," + (Math.round((a - o) * s) + o) + ")";
    } }, { key: "shadeHexColor", value: function(e, t) {
      var i = parseInt(t.slice(1), 16), a = e < 0 ? 0 : 255, s = e < 0 ? -1 * e : e, r = i >> 16, n = i >> 8 & 255, o = 255 & i;
      return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - n) * s) + n) + (Math.round((a - o) * s) + o)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(e, t) {
      return y.isColorHex(t) ? this.shadeHexColor(e, t) : this.shadeRGBColor(e, t);
    } }], [{ key: "bind", value: function(e, t) {
      return function() {
        return e.apply(t, arguments);
      };
    } }, { key: "isObject", value: function(e) {
      return e && U(e) === "object" && !Array.isArray(e) && e != null;
    } }, { key: "is", value: function(e, t) {
      return Object.prototype.toString.call(t) === "[object " + e + "]";
    } }, { key: "listToArray", value: function(e) {
      var t, i = [];
      for (t = 0; t < e.length; t++)
        i[t] = e[t];
      return i;
    } }, { key: "extend", value: function(e, t) {
      var i = this;
      typeof Object.assign != "function" && (Object.assign = function(s) {
        if (s == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(s), n = 1; n < arguments.length; n++) {
          var o = arguments[n];
          if (o != null)
            for (var h in o)
              o.hasOwnProperty(h) && (r[h] = o[h]);
        }
        return r;
      });
      var a = Object.assign({}, e);
      return this.isObject(e) && this.isObject(t) && Object.keys(t).forEach(function(s) {
        i.isObject(t[s]) && s in e ? a[s] = i.extend(e[s], t[s]) : Object.assign(a, ee({}, s, t[s]));
      }), a;
    } }, { key: "extendArray", value: function(e, t) {
      var i = [];
      return e.map(function(a) {
        i.push(y.extend(t, a));
      }), e = i;
    } }, { key: "monthMod", value: function(e) {
      return e % 12;
    } }, { key: "clone", value: function(e) {
      if (y.is("Array", e)) {
        for (var t = [], i = 0; i < e.length; i++)
          t[i] = this.clone(e[i]);
        return t;
      }
      if (y.is("Null", e))
        return null;
      if (y.is("Date", e))
        return e;
      if (U(e) === "object") {
        var a = {};
        for (var s in e)
          e.hasOwnProperty(s) && (a[s] = this.clone(e[s]));
        return a;
      }
      return e;
    } }, { key: "log10", value: function(e) {
      return Math.log(e) / Math.LN10;
    } }, { key: "roundToBase10", value: function(e) {
      return Math.pow(10, Math.floor(Math.log10(e)));
    } }, { key: "roundToBase", value: function(e, t) {
      return Math.pow(t, Math.floor(Math.log(e) / Math.log(t)));
    } }, { key: "parseNumber", value: function(e) {
      return e === null ? e : parseFloat(e);
    } }, { key: "stripNumber", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      return Number.isInteger(e) ? e : parseFloat(e.toPrecision(t));
    } }, { key: "randomId", value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    } }, { key: "noExponents", value: function(e) {
      var t = String(e).split(/[eE]/);
      if (t.length === 1)
        return t[0];
      var i = "", a = e < 0 ? "-" : "", s = t[0].replace(".", ""), r = Number(t[1]) + 1;
      if (r < 0) {
        for (i = a + "0."; r++; )
          i += "0";
        return i + s.replace(/^-/, "");
      }
      for (r -= s.length; r--; )
        i += "0";
      return s + i;
    } }, { key: "getDimensions", value: function(e) {
      var t = getComputedStyle(e, null), i = e.clientHeight, a = e.clientWidth;
      return i -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), [a -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight), i];
    } }, { key: "getBoundingClientRect", value: function(e) {
      var t = e.getBoundingClientRect();
      return { top: t.top, right: t.right, bottom: t.bottom, left: t.left, width: e.clientWidth, height: e.clientHeight, x: t.left, y: t.top };
    } }, { key: "getLargestStringFromArr", value: function(e) {
      return e.reduce(function(t, i) {
        return Array.isArray(i) && (i = i.reduce(function(a, s) {
          return a.length > s.length ? a : s;
        })), t.length > i.length ? t : i;
      }, 0);
    } }, { key: "hexToRgba", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
      e.substring(0, 1) !== "#" && (e = "#999999");
      var i = e.replace("#", "");
      i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
      for (var a = 0; a < i.length; a++)
        i[a] = parseInt(i[a].length === 1 ? i[a] + i[a] : i[a], 16);
      return t !== void 0 && i.push(t), "rgba(" + i.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(e) {
      return parseFloat(e.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(e) {
      return (e = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && e.length === 4 ? "#" + ("0" + parseInt(e[1], 10).toString(16)).slice(-2) + ("0" + parseInt(e[2], 10).toString(16)).slice(-2) + ("0" + parseInt(e[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(e) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(e);
    } }, { key: "getPolygonPos", value: function(e, t) {
      for (var i = [], a = 2 * Math.PI / t, s = 0; s < t; s++) {
        var r = {};
        r.x = e * Math.sin(s * a), r.y = -e * Math.cos(s * a), i.push(r);
      }
      return i;
    } }, { key: "polarToCartesian", value: function(e, t, i, a) {
      var s = (a - 90) * Math.PI / 180;
      return { x: e + i * Math.cos(s), y: t + i * Math.sin(s) };
    } }, { key: "escapeString", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i = e.toString().slice();
      return i = i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, t);
    } }, { key: "negToZero", value: function(e) {
      return e < 0 ? 0 : e;
    } }, { key: "moveIndexInArray", value: function(e, t, i) {
      if (i >= e.length)
        for (var a = i - e.length + 1; a--; )
          e.push(void 0);
      return e.splice(i, 0, e.splice(t, 1)[0]), e;
    } }, { key: "extractNumber", value: function(e) {
      return parseFloat(e.replace(/[^\d.]*/g, ""));
    } }, { key: "findAncestor", value: function(e, t) {
      for (; (e = e.parentElement) && !e.classList.contains(t); )
        ;
      return e;
    } }, { key: "setELstyles", value: function(e, t) {
      for (var i in t)
        t.hasOwnProperty(i) && (e.style.key = t[i]);
    } }, { key: "isNumber", value: function(e) {
      return !isNaN(e) && parseFloat(Number(e)) === e && !isNaN(parseInt(e, 10));
    } }, { key: "isFloat", value: function(e) {
      return Number(e) === e && e % 1 != 0;
    } }, { key: "isSafari", value: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    } }, { key: "isFirefox", value: function() {
      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    } }, { key: "isIE11", value: function() {
      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || window.navigator.appVersion.indexOf("Trident/") > -1)
        return !0;
    } }, { key: "isIE", value: function() {
      var e = window.navigator.userAgent, t = e.indexOf("MSIE ");
      if (t > 0)
        return parseInt(e.substring(t + 5, e.indexOf(".", t)), 10);
      if (e.indexOf("Trident/") > 0) {
        var i = e.indexOf("rv:");
        return parseInt(e.substring(i + 3, e.indexOf(".", i)), 10);
      }
      var a = e.indexOf("Edge/");
      return a > 0 && parseInt(e.substring(a + 5, e.indexOf(".", a)), 10);
    } }]), y;
  }(), de = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.setEasingFunctions();
    }
    return Y(y, [{ key: "setEasingFunctions", value: function() {
      var e;
      if (!this.w.globals.easing) {
        switch (this.w.config.chart.animations.easing) {
          case "linear":
            e = "-";
            break;
          case "easein":
            e = "<";
            break;
          case "easeout":
            e = ">";
            break;
          case "easeinout":
          default:
            e = "<>";
            break;
          case "swing":
            e = function(t) {
              var i = 1.70158;
              return (t -= 1) * t * ((i + 1) * t + i) + 1;
            };
            break;
          case "bounce":
            e = function(t) {
              return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375 : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            };
            break;
          case "elastic":
            e = function(t) {
              return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
            };
        }
        this.w.globals.easing = e;
      }
    } }, { key: "animateLine", value: function(e, t, i, a) {
      e.attr(t).animate(a).attr(i);
    } }, { key: "animateMarker", value: function(e, t, i, a, s, r) {
      t || (t = 0), e.attr({ r: t, width: t, height: t }).animate(a, s).attr({ r: i, width: i.width, height: i.height }).afterAll(function() {
        r();
      });
    } }, { key: "animateCircle", value: function(e, t, i, a, s) {
      e.attr({ r: t.r, cx: t.cx, cy: t.cy }).animate(a, s).attr({ r: i.r, cx: i.cx, cy: i.cy });
    } }, { key: "animateRect", value: function(e, t, i, a, s) {
      e.attr(t).animate(a).attr(i).afterAll(function() {
        return s();
      });
    } }, { key: "animatePathsGradually", value: function(e) {
      var t = e.el, i = e.realIndex, a = e.j, s = e.fill, r = e.pathFrom, n = e.pathTo, o = e.speed, h = e.delay, c = this.w, d = 0;
      c.config.chart.animations.animateGradually.enabled && (d = c.config.chart.animations.animateGradually.delay), c.config.chart.animations.dynamicAnimation.enabled && c.globals.dataChanged && c.config.chart.type !== "bar" && (d = 0), this.morphSVG(t, i, a, c.config.chart.type !== "line" || c.globals.comboCharts ? s : "stroke", r, n, o, h * d);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach(function(e) {
        var t = e.el;
        t.classList.remove("apexcharts-element-hidden"), t.classList.add("apexcharts-hidden-element-shown");
      });
    } }, { key: "animationCompleted", value: function(e) {
      var t = this.w;
      t.globals.animationEnded || (t.globals.animationEnded = !0, this.showDelayedElements(), typeof t.config.chart.events.animationEnd == "function" && t.config.chart.events.animationEnd(this.ctx, { el: e, w: t }));
    } }, { key: "morphSVG", value: function(e, t, i, a, s, r, n, o) {
      var h = this, c = this.w;
      s || (s = e.attr("pathFrom")), r || (r = e.attr("pathTo"));
      var d = function(g) {
        return c.config.chart.type === "radar" && (n = 1), "M 0 ".concat(c.globals.gridHeight);
      };
      (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = d()), (!r || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = d()), c.globals.shouldAnimate || (n = 1), e.plot(s).animate(1, c.globals.easing, o).plot(s).animate(n, c.globals.easing, o).plot(r).afterAll(function() {
        P.isNumber(i) ? i === c.globals.series[c.globals.maxValsInArrayIndex].length - 2 && c.globals.shouldAnimate && h.animationCompleted(e) : a !== "none" && c.globals.shouldAnimate && (!c.globals.comboCharts && t === c.globals.series.length - 1 || c.globals.comboCharts) && h.animationCompleted(e), h.showDelayedElements();
      });
    } }]), y;
  }(), Z = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "getDefaultFilter", value: function(e, t) {
      var i = this.w;
      e.unfilter(!0), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), i.config.states.normal.filter !== "none" ? this.applyFilter(e, t, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(e, i.config.chart.dropShadow, t);
    } }, { key: "addNormalFilter", value: function(e, t) {
      var i = this.w;
      i.config.chart.dropShadow.enabled && !e.node.classList.contains("apexcharts-marker") && this.dropShadow(e, i.config.chart.dropShadow, t);
    } }, { key: "addLightenFilter", value: function(e, t, i) {
      var a = this, s = this.w, r = i.intensity;
      e.unfilter(!0), new window.SVG.Filter(), e.filter(function(n) {
        var o = s.config.chart.dropShadow;
        (o.enabled ? a.addShadow(n, t, o) : n).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r } });
      }), e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node);
    } }, { key: "addDarkenFilter", value: function(e, t, i) {
      var a = this, s = this.w, r = i.intensity;
      e.unfilter(!0), new window.SVG.Filter(), e.filter(function(n) {
        var o = s.config.chart.dropShadow;
        (o.enabled ? a.addShadow(n, t, o) : n).componentTransfer({ rgb: { type: "linear", slope: r } });
      }), e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node);
    } }, { key: "applyFilter", value: function(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
      switch (i) {
        case "none":
          this.addNormalFilter(e, t);
          break;
        case "lighten":
          this.addLightenFilter(e, t, { intensity: a });
          break;
        case "darken":
          this.addDarkenFilter(e, t, { intensity: a });
      }
    } }, { key: "addShadow", value: function(e, t, i) {
      var a = i.blur, s = i.top, r = i.left, n = i.color, o = i.opacity, h = e.flood(Array.isArray(n) ? n[t] : n, o).composite(e.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(e.source);
      return e.blend(e.source, h);
    } }, { key: "dropShadow", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = t.top, s = t.left, r = t.blur, n = t.color, o = t.opacity, h = t.noUserSpaceOnUse, c = this.w;
      return e.unfilter(!0), P.isIE() && c.config.chart.type === "radialBar" || (n = Array.isArray(n) ? n[i] : n, e.filter(function(d) {
        var g = null;
        g = P.isSafari() || P.isFirefox() || P.isIE() ? d.flood(n, o).composite(d.sourceAlpha, "in").offset(s, a).gaussianBlur(r) : d.flood(n, o).composite(d.sourceAlpha, "in").offset(s, a).gaussianBlur(r).merge(d.source), d.blend(d.source, g);
      }), h || e.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(e.filterer.node)), e;
    } }, { key: "setSelectionFilter", value: function(e, t, i) {
      var a = this.w;
      if (a.globals.selectedDataPoints[t] !== void 0 && a.globals.selectedDataPoints[t].indexOf(i) > -1) {
        e.node.setAttribute("selected", !0);
        var s = a.config.states.active.filter;
        s !== "none" && this.applyFilter(e, t, s.type, s.value);
      }
    } }, { key: "_scaleFilterSize", value: function(e) {
      (function(t) {
        for (var i in t)
          t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    } }]), y;
  }(), M = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "roundPathCorners", value: function(e, t) {
      function i(S, C, L) {
        var I = C.x - S.x, z = C.y - S.y, T = Math.sqrt(I * I + z * z);
        return a(S, C, Math.min(1, L / T));
      }
      function a(S, C, L) {
        return { x: S.x + (C.x - S.x) * L, y: S.y + (C.y - S.y) * L };
      }
      function s(S, C) {
        S.length > 2 && (S[S.length - 2] = C.x, S[S.length - 1] = C.y);
      }
      function r(S) {
        return { x: parseFloat(S[S.length - 2]), y: parseFloat(S[S.length - 1]) };
      }
      e.indexOf("NaN") > -1 && (e = "");
      var n = e.split(/[,\s]/).reduce(function(S, C) {
        var L = C.match("([a-zA-Z])(.+)");
        return L ? (S.push(L[1]), S.push(L[2])) : S.push(C), S;
      }, []).reduce(function(S, C) {
        return parseFloat(C) == C && S.length ? S[S.length - 1].push(C) : S.push([C]), S;
      }, []), o = [];
      if (n.length > 1) {
        var h = r(n[0]), c = null;
        n[n.length - 1][0] == "Z" && n[0].length > 2 && (c = ["L", h.x, h.y], n[n.length - 1] = c), o.push(n[0]);
        for (var d = 1; d < n.length; d++) {
          var g = o[o.length - 1], p = n[d], f = p == c ? n[1] : n[d + 1];
          if (f && g && g.length > 2 && p[0] == "L" && f.length > 2 && f[0] == "L") {
            var b, m, w = r(g), A = r(p), l = r(f);
            b = i(A, w, t), m = i(A, l, t), s(p, b), p.origPoint = A, o.push(p);
            var u = a(b, A, 0.5), x = a(A, m, 0.5), v = ["C", u.x, u.y, x.x, x.y, m.x, m.y];
            v.origPoint = A, o.push(v);
          } else
            o.push(p);
        }
        if (c) {
          var k = r(o[o.length - 1]);
          o.push(["Z"]), s(o[0], k);
        }
      } else
        o = n;
      return o.reduce(function(S, C) {
        return S + C.join(" ") + " ";
      }, "");
    } }, { key: "drawLine", value: function(e, t, i, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, o = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: e, y1: t, x2: i, y2: a, stroke: s, "stroke-dasharray": r, "stroke-width": n, "stroke-linecap": o });
    } }, { key: "drawRect", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, o = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, h = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, d = this.w.globals.dom.Paper.rect();
      return d.attr({ x: e, y: t, width: i > 0 ? i : 0, height: a > 0 ? a : 0, rx: s, ry: s, opacity: n, "stroke-width": o !== null ? o : 0, stroke: h !== null ? h : "none", "stroke-dasharray": c }), d.node.setAttribute("fill", r), d;
    } }, { key: "drawPolygon", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(e).attr({ fill: a, stroke: t, "stroke-width": i });
    } }, { key: "drawCircle", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      e < 0 && (e = 0);
      var i = this.w.globals.dom.Paper.circle(2 * e);
      return t !== null && i.attr(t), i;
    } }, { key: "drawPath", value: function(e) {
      var t = e.d, i = t === void 0 ? "" : t, a = e.stroke, s = a === void 0 ? "#a8a8a8" : a, r = e.strokeWidth, n = r === void 0 ? 1 : r, o = e.fill, h = e.fillOpacity, c = h === void 0 ? 1 : h, d = e.strokeOpacity, g = d === void 0 ? 1 : d, p = e.classes, f = e.strokeLinecap, b = f === void 0 ? null : f, m = e.strokeDashArray, w = m === void 0 ? 0 : m, A = this.w;
      return b === null && (b = A.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(A.globals.gridHeight)), A.globals.dom.Paper.path(i).attr({ fill: o, "fill-opacity": c, stroke: s, "stroke-opacity": g, "stroke-linecap": b, "stroke-width": n, "stroke-dasharray": w, class: p });
    } }, { key: "group", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w.globals.dom.Paper.group();
      return e !== null && t.attr(e), t;
    } }, { key: "move", value: function(e, t) {
      var i = ["M", e, t].join(" ");
      return i;
    } }, { key: "line", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = null;
      return i === null ? a = [" L", e, t].join(" ") : i === "H" ? a = [" H", e].join(" ") : i === "V" && (a = [" V", t].join(" ")), a;
    } }, { key: "curve", value: function(e, t, i, a, s, r) {
      var n = ["C", e, t, i, a, s, r].join(" ");
      return n;
    } }, { key: "quadraticCurve", value: function(e, t, i, a) {
      return ["Q", e, t, i, a].join(" ");
    } }, { key: "arc", value: function(e, t, i, a, s, r, n) {
      var o = "A";
      arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (o = "a");
      var h = [o, e, t, i, a, s, r, n].join(" ");
      return h;
    } }, { key: "renderPaths", value: function(e) {
      var t, i = e.j, a = e.realIndex, s = e.pathFrom, r = e.pathTo, n = e.stroke, o = e.strokeWidth, h = e.strokeLinecap, c = e.fill, d = e.animationDelay, g = e.initialSpeed, p = e.dataChangeSpeed, f = e.className, b = e.shouldClipToGrid, m = b === void 0 || b, w = e.bindEventsOnPaths, A = w === void 0 || w, l = e.drawShadow, u = l === void 0 || l, x = this.w, v = new Z(this.ctx), k = new de(this.ctx), S = this.w.config.chart.animations.enabled, C = S && this.w.config.chart.animations.dynamicAnimation.enabled, L = !!(S && !x.globals.resized || C && x.globals.dataChanged && x.globals.shouldAnimate);
      L ? t = s : (t = r, x.globals.animationEnded = !0);
      var I = x.config.stroke.dashArray, z = 0;
      z = Array.isArray(I) ? I[a] : x.config.stroke.dashArray;
      var T = this.drawPath({ d: t, stroke: n, strokeWidth: o, fill: c, fillOpacity: 1, classes: f, strokeLinecap: h, strokeDashArray: z });
      if (T.attr("index", a), m && T.attr({ "clip-path": "url(#gridRectMask".concat(x.globals.cuid, ")") }), x.config.states.normal.filter.type !== "none")
        v.getDefaultFilter(T, a);
      else if (x.config.chart.dropShadow.enabled && u && (!x.config.chart.dropShadow.enabledOnSeries || x.config.chart.dropShadow.enabledOnSeries && x.config.chart.dropShadow.enabledOnSeries.indexOf(a) !== -1)) {
        var E = x.config.chart.dropShadow;
        v.dropShadow(T, E, a);
      }
      A && (T.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, T)), T.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, T)), T.node.addEventListener("mousedown", this.pathMouseDown.bind(this, T))), T.attr({ pathTo: r, pathFrom: s });
      var R = { el: T, j: i, realIndex: a, pathFrom: s, pathTo: r, fill: c, strokeWidth: o, delay: d };
      return !S || x.globals.resized || x.globals.dataChanged ? !x.globals.resized && x.globals.dataChanged || k.showDelayedElements() : k.animatePathsGradually(X(X({}, R), {}, { speed: g })), x.globals.dataChanged && C && L && k.animatePathsGradually(X(X({}, R), {}, { speed: p })), T;
    } }, { key: "drawPattern", value: function(e, t, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(t, i, function(r) {
        e === "horizontalLines" ? r.line(0, 0, i, 0).stroke({ color: a, width: s + 1 }) : e === "verticalLines" ? r.line(0, 0, 0, t).stroke({ color: a, width: s + 1 }) : e === "slantedLines" ? r.line(0, 0, t, i).stroke({ color: a, width: s }) : e === "squares" ? r.rect(t, i).fill("none").stroke({ color: a, width: s }) : e === "circles" && r.circle(t).fill("none").stroke({ color: a, width: s });
      });
    } }, { key: "drawGradient", value: function(e, t, i, a, s) {
      var r, n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, h = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, d = this.w;
      t.length < 9 && t.indexOf("#") === 0 && (t = P.hexToRgba(t, a)), i.length < 9 && i.indexOf("#") === 0 && (i = P.hexToRgba(i, s));
      var g = 0, p = 1, f = 1, b = null;
      o !== null && (g = o[0] !== void 0 ? o[0] / 100 : 0, p = o[1] !== void 0 ? o[1] / 100 : 1, f = o[2] !== void 0 ? o[2] / 100 : 1, b = o[3] !== void 0 ? o[3] / 100 : null);
      var m = !(d.config.chart.type !== "donut" && d.config.chart.type !== "pie" && d.config.chart.type !== "polarArea" && d.config.chart.type !== "bubble");
      if (r = h === null || h.length === 0 ? d.globals.dom.Paper.gradient(m ? "radial" : "linear", function(l) {
        l.at(g, t, a), l.at(p, i, s), l.at(f, i, s), b !== null && l.at(b, t, a);
      }) : d.globals.dom.Paper.gradient(m ? "radial" : "linear", function(l) {
        (Array.isArray(h[c]) ? h[c] : h).forEach(function(u) {
          l.at(u.offset / 100, u.color, u.opacity);
        });
      }), m) {
        var w = d.globals.gridWidth / 2, A = d.globals.gridHeight / 2;
        d.config.chart.type !== "bubble" ? r.attr({ gradientUnits: "userSpaceOnUse", cx: w, cy: A, r: n }) : r.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else
        e === "vertical" ? r.from(0, 0).to(0, 1) : e === "diagonal" ? r.from(0, 0).to(1, 1) : e === "horizontal" ? r.from(0, 1).to(1, 1) : e === "diagonal2" && r.from(1, 0).to(0, 1);
      return r;
    } }, { key: "getTextBasedOnMaxWidth", value: function(e) {
      var t = e.text, i = e.maxWidth, a = e.fontSize, s = e.fontFamily, r = this.getTextRects(t, a, s), n = r.width / t.length, o = Math.floor(i / n);
      return i < r.width ? t.slice(0, o - 3) + "..." : t;
    } }, { key: "drawText", value: function(e) {
      var t = this, i = e.x, a = e.y, s = e.text, r = e.textAnchor, n = e.fontSize, o = e.fontFamily, h = e.fontWeight, c = e.foreColor, d = e.opacity, g = e.maxWidth, p = e.cssClass, f = p === void 0 ? "" : p, b = e.isPlainText, m = b === void 0 || b, w = e.dominantBaseline, A = w === void 0 ? "auto" : w, l = this.w;
      s === void 0 && (s = "");
      var u = s;
      r || (r = "start"), c && c.length || (c = l.config.chart.foreColor), o = o || l.config.chart.fontFamily, h = h || "regular";
      var x, v = { maxWidth: g, fontSize: n = n || "11px", fontFamily: o };
      return Array.isArray(s) ? x = l.globals.dom.Paper.text(function(k) {
        for (var S = 0; S < s.length; S++)
          u = s[S], g && (u = t.getTextBasedOnMaxWidth(X({ text: s[S] }, v))), S === 0 ? k.tspan(u) : k.tspan(u).newLine();
      }) : (g && (u = this.getTextBasedOnMaxWidth(X({ text: s }, v))), x = m ? l.globals.dom.Paper.plain(s) : l.globals.dom.Paper.text(function(k) {
        return k.tspan(u);
      })), x.attr({ x: i, y: a, "text-anchor": r, "dominant-baseline": A, "font-size": n, "font-family": o, "font-weight": h, fill: c, class: "apexcharts-text " + f }), x.node.style.fontFamily = o, x.node.style.opacity = d, x;
    } }, { key: "drawMarker", value: function(e, t, i) {
      e = e || 0;
      var a = i.pSize || 0, s = null;
      if (i.shape === "square" || i.shape === "rect") {
        var r = i.pRadius === void 0 ? a / 2 : i.pRadius;
        t !== null && a || (a = 0, r = 0);
        var n = 1.2 * a + r, o = this.drawRect(n, n, n, n, r);
        o.attr({ x: e - n / 2, y: t - n / 2, cx: e, cy: t, class: i.class ? i.class : "", fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, stroke: i.pointStrokeColor, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }), s = o;
      } else
        i.shape !== "circle" && i.shape || (P.isNumber(t) || (a = 0, t = 0), s = this.drawCircle(a, { cx: e, cy: t, class: i.class ? i.class : "", stroke: i.pointStrokeColor, fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }));
      return s;
    } }, { key: "pathMouseEnter", value: function(e, t) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
      if (typeof i.config.chart.events.dataPointMouseEnter == "function" && i.config.chart.events.dataPointMouseEnter(t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), (i.config.states.active.filter.type === "none" || e.node.getAttribute("selected") !== "true") && i.config.states.hover.filter.type !== "none" && !i.globals.isTouchDevice) {
        var n = i.config.states.hover.filter;
        a.applyFilter(e, s, n.type, n.value);
      }
    } }, { key: "pathMouseLeave", value: function(e, t) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10);
      typeof i.config.chart.events.dataPointMouseLeave == "function" && i.config.chart.events.dataPointMouseLeave(t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [t, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), i.config.states.active.filter.type !== "none" && e.node.getAttribute("selected") === "true" || i.config.states.hover.filter.type !== "none" && a.getDefaultFilter(e, s);
    } }, { key: "pathMouseDown", value: function(e, t) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(e.node.getAttribute("index"), 10), r = parseInt(e.node.getAttribute("j"), 10), n = "false";
      if (e.node.getAttribute("selected") === "true") {
        if (e.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(r) > -1) {
          var o = i.globals.selectedDataPoints[s].indexOf(r);
          i.globals.selectedDataPoints[s].splice(o, 1);
        }
      } else {
        if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
          i.globals.selectedDataPoints = [];
          var h = i.globals.dom.Paper.select(".apexcharts-series path").members, c = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, d = function(f) {
            Array.prototype.forEach.call(f, function(b) {
              b.node.setAttribute("selected", "false"), a.getDefaultFilter(b, s);
            });
          };
          d(h), d(c);
        }
        e.node.setAttribute("selected", "true"), n = "true", i.globals.selectedDataPoints[s] === void 0 && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r);
      }
      if (n === "true") {
        var g = i.config.states.active.filter;
        if (g !== "none")
          a.applyFilter(e, s, g.type, g.value);
        else if (i.config.states.hover.filter !== "none" && !i.globals.isTouchDevice) {
          var p = i.config.states.hover.filter;
          a.applyFilter(e, s, p.type, p.value);
        }
      } else
        i.config.states.active.filter.type !== "none" && (i.config.states.hover.filter.type === "none" || i.globals.isTouchDevice ? a.getDefaultFilter(e, s) : (p = i.config.states.hover.filter, a.applyFilter(e, s, p.type, p.value)));
      typeof i.config.chart.events.dataPointSelection == "function" && i.config.chart.events.dataPointSelection(t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }), t && this.ctx.events.fireEvent("dataPointSelection", [t, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }]);
    } }, { key: "rotateAroundCenter", value: function(e) {
      var t = {};
      return e && typeof e.getBBox == "function" && (t = e.getBBox()), { x: t.x + t.width / 2, y: t.y + t.height / 2 };
    } }, { key: "getTextRects", value: function(e, t, i, a) {
      var s = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], r = this.w, n = this.drawText({ x: -200, y: -200, text: e, textAnchor: "start", fontSize: t, fontFamily: i, foreColor: "#fff", opacity: 0 });
      a && n.attr("transform", a), r.globals.dom.Paper.add(n);
      var o = n.bbox();
      return s || (o = n.node.getBoundingClientRect()), n.remove(), { width: o.width, height: o.height };
    } }, { key: "placeTextWithEllipsis", value: function(e, t, i) {
      if (typeof e.getComputedTextLength == "function" && (e.textContent = t, t.length > 0 && e.getComputedTextLength() >= i / 1.1)) {
        for (var a = t.length - 3; a > 0; a -= 3)
          if (e.getSubStringLength(0, a) <= i / 1.1)
            return void (e.textContent = t.substring(0, a) + "...");
        e.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(e, t) {
      for (var i in t)
        t.hasOwnProperty(i) && e.setAttribute(i, t[i]);
    } }]), y;
  }(), q = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "getStackedSeriesTotals", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = this.w, i = [];
      if (t.globals.series.length === 0)
        return i;
      for (var a = 0; a < t.globals.series[t.globals.maxValsInArrayIndex].length; a++) {
        for (var s = 0, r = 0; r < t.globals.series.length; r++)
          t.globals.series[r][a] !== void 0 && e.indexOf(r) === -1 && (s += t.globals.series[r][a]);
        i.push(s);
      }
      return i;
    } }, { key: "getSeriesTotalByIndex", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return e === null ? this.w.config.series.reduce(function(t, i) {
        return t + i;
      }, 0) : this.w.globals.series[e].reduce(function(t, i) {
        return t + i;
      }, 0);
    } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
      var e = this, t = this.w, i = [];
      return t.globals.seriesGroups.forEach(function(a) {
        var s = [];
        t.config.series.forEach(function(n, o) {
          a.indexOf(n.name) > -1 && s.push(o);
        });
        var r = t.globals.series.map(function(n, o) {
          return s.indexOf(o) === -1 ? o : -1;
        }).filter(function(n) {
          return n !== -1;
        });
        i.push(e.getStackedSeriesTotals(r));
      }), i;
    } }, { key: "isSeriesNull", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return (e === null ? this.w.config.series.filter(function(t) {
        return t !== null;
      }) : this.w.config.series[e].data.filter(function(t) {
        return t !== null;
      })).length === 0;
    } }, { key: "seriesHaveSameValues", value: function(e) {
      return this.w.globals.series[e].every(function(t, i, a) {
        return t === a[0];
      });
    } }, { key: "getCategoryLabels", value: function(e) {
      var t = this.w, i = e.slice();
      return t.config.xaxis.convertedCatToNumeric && (i = e.map(function(a, s) {
        return t.config.xaxis.labels.formatter(a - t.globals.minX + 1);
      })), i;
    } }, { key: "getLargestSeries", value: function() {
      var e = this.w;
      e.globals.maxValsInArrayIndex = e.globals.series.map(function(t) {
        return t.length;
      }).indexOf(Math.max.apply(Math, e.globals.series.map(function(t) {
        return t.length;
      })));
    } }, { key: "getLargestMarkerSize", value: function() {
      var e = this.w, t = 0;
      return e.globals.markers.size.forEach(function(i) {
        t = Math.max(t, i);
      }), e.config.markers.discrete && e.config.markers.discrete.length && e.config.markers.discrete.forEach(function(i) {
        t = Math.max(t, i.size);
      }), t > 0 && (t += e.config.markers.hover.sizeOffset + 1), e.globals.markers.largestSize = t, t;
    } }, { key: "getSeriesTotals", value: function() {
      var e = this.w;
      e.globals.seriesTotals = e.globals.series.map(function(t, i) {
        var a = 0;
        if (Array.isArray(t))
          for (var s = 0; s < t.length; s++)
            a += t[s];
        else
          a += t;
        return a;
      });
    } }, { key: "getSeriesTotalsXRange", value: function(e, t) {
      var i = this.w;
      return i.globals.series.map(function(a, s) {
        for (var r = 0, n = 0; n < a.length; n++)
          i.globals.seriesX[s][n] > e && i.globals.seriesX[s][n] < t && (r += a[n]);
        return r;
      });
    } }, { key: "getPercentSeries", value: function() {
      var e = this.w;
      e.globals.seriesPercent = e.globals.series.map(function(t, i) {
        var a = [];
        if (Array.isArray(t))
          for (var s = 0; s < t.length; s++) {
            var r = e.globals.stackedSeriesTotals[s], n = 0;
            r && (n = 100 * t[s] / r), a.push(n);
          }
        else {
          var o = 100 * t / e.globals.seriesTotals.reduce(function(h, c) {
            return h + c;
          }, 0);
          a.push(o);
        }
        return a;
      });
    } }, { key: "getCalculatedRatios", value: function() {
      var e, t, i, a = this.w.globals, s = [], r = 0, n = [], o = 0.1, h = 0;
      if (a.yRange = [], a.isMultipleYAxis)
        for (var c = 0; c < a.minYArr.length; c++)
          a.yRange.push(Math.abs(a.minYArr[c] - a.maxYArr[c])), n.push(0);
      else
        a.yRange.push(Math.abs(a.minY - a.maxY));
      a.xRange = Math.abs(a.maxX - a.minX), a.zRange = Math.abs(a.maxZ - a.minZ);
      for (var d = 0; d < a.yRange.length; d++)
        s.push(a.yRange[d] / a.gridHeight);
      if (t = a.xRange / a.gridWidth, e = a.yRange / a.gridWidth, i = a.xRange / a.gridHeight, (r = a.zRange / a.gridHeight * 16) || (r = 1), a.minY !== Number.MIN_VALUE && Math.abs(a.minY) !== 0 && (a.hasNegs = !0), a.isMultipleYAxis) {
        n = [];
        for (var g = 0; g < s.length; g++)
          n.push(-a.minYArr[g] / s[g]);
      } else
        n.push(-a.minY / s[0]), a.minY !== Number.MIN_VALUE && Math.abs(a.minY) !== 0 && (o = -a.minY / e, h = a.minX / t);
      return { yRatio: s, invertedYRatio: e, zRatio: r, xRatio: t, invertedXRatio: i, baseLineInvertedY: o, baseLineY: n, baseLineX: h };
    } }, { key: "getLogSeries", value: function(e) {
      var t = this, i = this.w;
      return i.globals.seriesLog = e.map(function(a, s) {
        return i.config.yaxis[s] && i.config.yaxis[s].logarithmic ? a.map(function(r) {
          return r === null ? null : t.getLogVal(i.config.yaxis[s].logBase, r, s);
        }) : a;
      }), i.globals.invalidLogScale ? e : i.globals.seriesLog;
    } }, { key: "getBaseLog", value: function(e, t) {
      return Math.log(t) / Math.log(e);
    } }, { key: "getLogVal", value: function(e, t, i) {
      if (t === 0)
        return 0;
      var a = this.w, s = a.globals.minYArr[i] === 0 ? -1 : this.getBaseLog(e, a.globals.minYArr[i]), r = (a.globals.maxYArr[i] === 0 ? 0 : this.getBaseLog(e, a.globals.maxYArr[i])) - s;
      return t < 1 ? t / r : (this.getBaseLog(e, t) - s) / r;
    } }, { key: "getLogYRatios", value: function(e) {
      var t = this, i = this.w, a = this.w.globals;
      return a.yLogRatio = e.slice(), a.logYRange = a.yRange.map(function(s, r) {
        if (i.config.yaxis[r] && t.w.config.yaxis[r].logarithmic) {
          var n, o = -Number.MAX_VALUE, h = Number.MIN_VALUE;
          return a.seriesLog.forEach(function(c, d) {
            c.forEach(function(g) {
              i.config.yaxis[d] && i.config.yaxis[d].logarithmic && (o = Math.max(g, o), h = Math.min(g, h));
            });
          }), n = Math.pow(a.yRange[r], Math.abs(h - o) / a.yRange[r]), a.yLogRatio[r] = n / a.gridHeight, n;
        }
      }), a.invalidLogScale ? e.slice() : a.yLogRatio;
    } }], [{ key: "checkComboSeries", value: function(e) {
      var t = !1, i = 0, a = 0;
      return e.length && e[0].type !== void 0 && e.forEach(function(s) {
        s.type !== "bar" && s.type !== "column" && s.type !== "candlestick" && s.type !== "boxPlot" || i++, s.type !== void 0 && a++;
      }), a > 0 && (t = !0), { comboBarCount: i, comboCharts: t };
    } }, { key: "extendArrayProps", value: function(e, t, i) {
      return t.yaxis && (t = e.extendYAxis(t, i)), t.annotations && (t.annotations.yaxis && (t = e.extendYAxisAnnotations(t)), t.annotations.xaxis && (t = e.extendXAxisAnnotations(t)), t.annotations.points && (t = e.extendPointAnnotations(t))), t;
    } }]), y;
  }(), ve = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.annoCtx = e;
    }
    return Y(y, [{ key: "setOrientations", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.w;
      if (e.label.orientation === "vertical") {
        var a = t !== null ? t : 0, s = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
        if (s !== null) {
          var r = s.getBoundingClientRect();
          s.setAttribute("x", parseFloat(s.getAttribute("x")) - r.height + 4), e.label.position === "top" ? s.setAttribute("y", parseFloat(s.getAttribute("y")) + r.width) : s.setAttribute("y", parseFloat(s.getAttribute("y")) - r.width);
          var n = this.annoCtx.graphics.rotateAroundCenter(s), o = n.x, h = n.y;
          s.setAttribute("transform", "rotate(-90 ".concat(o, " ").concat(h, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(e, t) {
      var i = this.w;
      if (!e || t.label.text === void 0 || t.label.text !== void 0 && !String(t.label.text).trim())
        return null;
      var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s = e.getBoundingClientRect(), r = t.label.style.padding.left, n = t.label.style.padding.right, o = t.label.style.padding.top, h = t.label.style.padding.bottom;
      t.label.orientation === "vertical" && (o = t.label.style.padding.left, h = t.label.style.padding.right, r = t.label.style.padding.top, n = t.label.style.padding.bottom);
      var c = s.left - a.left - r, d = s.top - a.top - o, g = this.annoCtx.graphics.drawRect(c - i.globals.barPadForNumericAxis, d, s.width + r + n, s.height + o + h, t.label.borderRadius, t.label.style.background, 1, t.label.borderWidth, t.label.borderColor, 0);
      return t.id && g.node.classList.add(t.id), g;
    } }, { key: "annotationsBackground", value: function() {
      var e = this, t = this.w, i = function(a, s, r) {
        var n = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(s, "']"));
        if (n) {
          var o = n.parentNode, h = e.addBackgroundToAnno(n, a);
          h && (o.insertBefore(h.node, n), a.label.mouseEnter && h.node.addEventListener("mouseenter", a.label.mouseEnter.bind(e, a)), a.label.mouseLeave && h.node.addEventListener("mouseleave", a.label.mouseLeave.bind(e, a)), a.label.click && h.node.addEventListener("click", a.label.click.bind(e, a)));
        }
      };
      t.config.annotations.xaxis.map(function(a, s) {
        i(a, s, "xaxis");
      }), t.config.annotations.yaxis.map(function(a, s) {
        i(a, s, "yaxis");
      }), t.config.annotations.points.map(function(a, s) {
        i(a, s, "point");
      });
    } }, { key: "getY1Y2", value: function(e, t) {
      var i, a = e === "y1" ? t.y : t.y2, s = this.w;
      if (this.annoCtx.invertAxis) {
        var r = s.globals.labels.indexOf(a);
        s.config.xaxis.convertedCatToNumeric && (r = s.globals.categoryLabels.indexOf(a));
        var n = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r + 1) + ")");
        n && (i = parseFloat(n.getAttribute("y"))), t.seriesIndex !== void 0 && s.globals.barHeight && (i = i - s.globals.barHeight / 2 * (s.globals.series.length - 1) + s.globals.barHeight * t.seriesIndex);
      } else {
        var o;
        s.config.yaxis[t.yAxisIndex].logarithmic ? o = (a = new q(this.annoCtx.ctx).getLogVal(a, t.yAxisIndex)) / s.globals.yLogRatio[t.yAxisIndex] : o = (a - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight), i = s.globals.gridHeight - o, !t.marker || t.y !== void 0 && t.y !== null || (i = 0), s.config.yaxis[t.yAxisIndex] && s.config.yaxis[t.yAxisIndex].reversed && (i = o);
      }
      return typeof a == "string" && a.indexOf("px") > -1 && (i = parseFloat(a)), i;
    } }, { key: "getX1X2", value: function(e, t) {
      var i = this.w, a = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX, s = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX, r = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange, n = (t.x - a) / (r / i.globals.gridWidth);
      this.annoCtx.inversedReversedAxis && (n = (s - t.x) / (r / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (n = this.getStringX(t.x));
      var o = (t.x2 - a) / (r / i.globals.gridWidth);
      return this.annoCtx.inversedReversedAxis && (o = (s - t.x2) / (r / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (o = this.getStringX(t.x2)), t.x !== void 0 && t.x !== null || !t.marker || (n = i.globals.gridWidth), e === "x1" && typeof t.x == "string" && t.x.indexOf("px") > -1 && (n = parseFloat(t.x)), e === "x2" && typeof t.x2 == "string" && t.x2.indexOf("px") > -1 && (o = parseFloat(t.x2)), t.seriesIndex !== void 0 && i.globals.barWidth && !this.annoCtx.invertAxis && (n = n - i.globals.barWidth / 2 * (i.globals.series.length - 1) + i.globals.barWidth * t.seriesIndex), e === "x1" ? n : o;
    } }, { key: "getStringX", value: function(e) {
      var t = this.w, i = e;
      t.config.xaxis.convertedCatToNumeric && t.globals.categoryLabels.length && (e = t.globals.categoryLabels.indexOf(e) + 1);
      var a = t.globals.labels.indexOf(e), s = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a + 1) + ")");
      return s && (i = parseFloat(s.getAttribute("x"))), i;
    } }]), y;
  }(), Oe = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.annoCtx = e, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new ve(this.annoCtx);
    }
    return Y(y, [{ key: "addXaxisAnnotation", value: function(e, t, i) {
      var a, s = this.w, r = this.helpers.getX1X2("x1", e), n = e.label.text, o = e.strokeDashArray;
      if (P.isNumber(r)) {
        if (e.x2 === null || e.x2 === void 0) {
          var h = this.annoCtx.graphics.drawLine(r + e.offsetX, 0 + e.offsetY, r + e.offsetX, s.globals.gridHeight + e.offsetY, e.borderColor, o, e.borderWidth);
          t.appendChild(h.node), e.id && h.node.classList.add(e.id);
        } else {
          if ((a = this.helpers.getX1X2("x2", e)) < r) {
            var c = r;
            r = a, a = c;
          }
          var d = this.annoCtx.graphics.drawRect(r + e.offsetX, 0 + e.offsetY, a - r, s.globals.gridHeight + e.offsetY, 0, e.fillColor, e.opacity, 1, e.borderColor, o);
          d.node.classList.add("apexcharts-annotation-rect"), d.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), t.appendChild(d.node), e.id && d.node.classList.add(e.id);
        }
        var g = this.annoCtx.graphics.getTextRects(n, parseFloat(e.label.style.fontSize)), p = e.label.position === "top" ? 4 : e.label.position === "center" ? s.globals.gridHeight / 2 + (e.label.orientation === "vertical" ? g.width / 2 : 0) : s.globals.gridHeight, f = this.annoCtx.graphics.drawText({ x: r + e.label.offsetX, y: p + e.label.offsetY - (e.label.orientation === "vertical" ? e.label.position === "top" ? g.width / 2 - 12 : -g.width / 2 : 0), text: n, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        f.attr({ rel: i }), t.appendChild(f.node), this.annoCtx.helpers.setOrientations(e, i);
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return t.config.annotations.xaxis.map(function(a, s) {
        e.addXaxisAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), He = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.annoCtx = e, this.helpers = new ve(this.annoCtx);
    }
    return Y(y, [{ key: "addYaxisAnnotation", value: function(e, t, i) {
      var a, s = this.w, r = e.strokeDashArray, n = this.helpers.getY1Y2("y1", e), o = e.label.text;
      if (e.y2 === null || e.y2 === void 0) {
        var h = this.annoCtx.graphics.drawLine(0 + e.offsetX, n + e.offsetY, this._getYAxisAnnotationWidth(e), n + e.offsetY, e.borderColor, r, e.borderWidth);
        t.appendChild(h.node), e.id && h.node.classList.add(e.id);
      } else {
        if ((a = this.helpers.getY1Y2("y2", e)) > n) {
          var c = n;
          n = a, a = c;
        }
        var d = this.annoCtx.graphics.drawRect(0 + e.offsetX, a + e.offsetY, this._getYAxisAnnotationWidth(e), n - a, 0, e.fillColor, e.opacity, 1, e.borderColor, r);
        d.node.classList.add("apexcharts-annotation-rect"), d.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), t.appendChild(d.node), e.id && d.node.classList.add(e.id);
      }
      var g = e.label.position === "right" ? s.globals.gridWidth : e.label.position === "center" ? s.globals.gridWidth / 2 : 0, p = this.annoCtx.graphics.drawText({ x: g + e.label.offsetX, y: (a ?? n) + e.label.offsetY - 3, text: o, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
      p.attr({ rel: i }), t.appendChild(p.node);
    } }, { key: "_getYAxisAnnotationWidth", value: function(e) {
      var t = this.w;
      return t.globals.gridWidth, (e.width.indexOf("%") > -1 ? t.globals.gridWidth * parseInt(e.width, 10) / 100 : parseInt(e.width, 10)) + e.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return t.config.annotations.yaxis.map(function(a, s) {
        e.addYaxisAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), pe = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.annoCtx = e, this.helpers = new ve(this.annoCtx);
    }
    return Y(y, [{ key: "addPointAnnotation", value: function(e, t, i) {
      this.w;
      var a = this.helpers.getX1X2("x1", e), s = this.helpers.getY1Y2("y1", e);
      if (P.isNumber(a)) {
        var r = { pSize: e.marker.size, pointStrokeWidth: e.marker.strokeWidth, pointFillColor: e.marker.fillColor, pointStrokeColor: e.marker.strokeColor, shape: e.marker.shape, pRadius: e.marker.radius, class: "apexcharts-point-annotation-marker ".concat(e.marker.cssClass, " ").concat(e.id ? e.id : "") }, n = this.annoCtx.graphics.drawMarker(a + e.marker.offsetX, s + e.marker.offsetY, r);
        t.appendChild(n.node);
        var o = e.label.text ? e.label.text : "", h = this.annoCtx.graphics.drawText({ x: a + e.label.offsetX, y: s + e.label.offsetY - e.marker.size - parseFloat(e.label.style.fontSize) / 1.6, text: o, textAnchor: e.label.textAnchor, fontSize: e.label.style.fontSize, fontFamily: e.label.style.fontFamily, fontWeight: e.label.style.fontWeight, foreColor: e.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(e.label.style.cssClass, " ").concat(e.id ? e.id : "") });
        if (h.attr({ rel: i }), t.appendChild(h.node), e.customSVG.SVG) {
          var c = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + e.customSVG.cssClass });
          c.attr({ transform: "translate(".concat(a + e.customSVG.offsetX, ", ").concat(s + e.customSVG.offsetY, ")") }), c.node.innerHTML = e.customSVG.SVG, t.appendChild(c.node);
        }
        if (e.image.path) {
          var d = e.image.width ? e.image.width : 20, g = e.image.height ? e.image.height : 20;
          n = this.annoCtx.addImage({ x: a + e.image.offsetX - d / 2, y: s + e.image.offsetY - g / 2, width: d, height: g, path: e.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        e.mouseEnter && n.node.addEventListener("mouseenter", e.mouseEnter.bind(this, e)), e.mouseLeave && n.node.addEventListener("mouseleave", e.mouseLeave.bind(this, e)), e.click && n.node.addEventListener("click", e.click.bind(this, e));
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var e = this, t = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return t.config.annotations.points.map(function(a, s) {
        e.addPointAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), H = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, G = function() {
    function y() {
      F(this, y), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return Y(y, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "transparent", locales: [H], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", dateFormatter: function(e) {
        return new Date(e).toDateString();
      } }, png: { filename: void 0 }, svg: { filename: void 0 } }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(e) {
        return e;
      } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(e) {
        return e + "%";
      } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(e) {
        return e.globals.seriesTotals.reduce(function(t, i) {
          return t + i;
        }, 0) / e.globals.series.length + "%";
      } } }, barLabels: { enabled: !1, margin: 5, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(e) {
        return e;
      }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(e) {
        return e;
      } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(e) {
        return e;
      } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(e) {
        return e.globals.seriesTotals.reduce(function(t, i) {
          return t + i;
        }, 0);
      } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(e) {
        return e !== null ? e : "";
      }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: !1 }, markers: { width: 12, height: 12, strokeWidth: 0, fillColors: void 0, strokeColor: "#fff", radius: 12, customHTML: void 0, offsetX: 0, offsetY: 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 2 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", width: 8, height: 8, radius: 2, offsetX: 0, offsetY: 0, onClick: void 0, onDblClick: void 0, showNullDataPoints: !0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(e) {
        return e ? e + ": " : "";
      } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "light", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
    } }]), y;
  }(), ie = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.graphics = new M(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new ve(this), this.xAxisAnnotations = new Oe(this), this.yAxisAnnotations = new He(this), this.pointsAnnotations = new pe(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return Y(y, [{ key: "drawAxesAnnotations", value: function() {
      var e = this.w;
      if (e.globals.axisCharts) {
        for (var t = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = e.config.chart.animations.enabled, r = [t, i, a], n = [i.node, t.node, a.node], o = 0; o < 3; o++)
          e.globals.dom.elGraphical.add(r[o]), !s || e.globals.resized || e.globals.dataChanged || e.config.chart.type !== "scatter" && e.config.chart.type !== "bubble" && e.globals.dataPoints > 1 && n[o].classList.add("apexcharts-element-hidden"), e.globals.delayedElements.push({ el: n[o], index: 0 });
        this.helpers.annotationsBackground();
      }
    } }, { key: "drawImageAnnos", value: function() {
      var e = this;
      this.w.config.annotations.images.map(function(t, i) {
        e.addImage(t, i);
      });
    } }, { key: "drawTextAnnos", value: function() {
      var e = this;
      this.w.config.annotations.texts.map(function(t, i) {
        e.addText(t, i);
      });
    } }, { key: "addXaxisAnnotation", value: function(e, t, i) {
      this.xAxisAnnotations.addXaxisAnnotation(e, t, i);
    } }, { key: "addYaxisAnnotation", value: function(e, t, i) {
      this.yAxisAnnotations.addYaxisAnnotation(e, t, i);
    } }, { key: "addPointAnnotation", value: function(e, t, i) {
      this.pointsAnnotations.addPointAnnotation(e, t, i);
    } }, { key: "addText", value: function(e, t) {
      var i = e.x, a = e.y, s = e.text, r = e.textAnchor, n = e.foreColor, o = e.fontSize, h = e.fontFamily, c = e.fontWeight, d = e.cssClass, g = e.backgroundColor, p = e.borderWidth, f = e.strokeDashArray, b = e.borderRadius, m = e.borderColor, w = e.appendTo, A = w === void 0 ? ".apexcharts-svg" : w, l = e.paddingLeft, u = l === void 0 ? 4 : l, x = e.paddingRight, v = x === void 0 ? 4 : x, k = e.paddingBottom, S = k === void 0 ? 2 : k, C = e.paddingTop, L = C === void 0 ? 2 : C, I = this.w, z = this.graphics.drawText({ x: i, y: a, text: s, textAnchor: r || "start", fontSize: o || "12px", fontWeight: c || "regular", fontFamily: h || I.config.chart.fontFamily, foreColor: n || I.config.chart.foreColor, cssClass: d }), T = I.globals.dom.baseEl.querySelector(A);
      T && T.appendChild(z.node);
      var E = z.bbox();
      if (s) {
        var R = this.graphics.drawRect(E.x - u, E.y - L, E.width + u + v, E.height + S + L, b, g || "transparent", 1, p, m, f);
        T.insertBefore(R.node, z.node);
      }
    } }, { key: "addImage", value: function(e, t) {
      var i = this.w, a = e.path, s = e.x, r = s === void 0 ? 0 : s, n = e.y, o = n === void 0 ? 0 : n, h = e.width, c = h === void 0 ? 20 : h, d = e.height, g = d === void 0 ? 20 : d, p = e.appendTo, f = p === void 0 ? ".apexcharts-svg" : p, b = i.globals.dom.Paper.image(a);
      b.size(c, g).move(r, o);
      var m = i.globals.dom.baseEl.querySelector(f);
      return m && m.appendChild(b.node), b;
    } }, { key: "addXaxisAnnotationExternal", value: function(e, t, i) {
      return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
    } }, { key: "addYaxisAnnotationExternal", value: function(e, t, i) {
      return this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
    } }, { key: "addPointAnnotationExternal", value: function(e, t, i) {
      return this.invertAxis === void 0 && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: e, pushToMemory: t, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
    } }, { key: "addAnnotationExternal", value: function(e) {
      var t = e.params, i = e.pushToMemory, a = e.context, s = e.type, r = e.contextMethod, n = a, o = n.w, h = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")), c = h.childNodes.length + 1, d = new G(), g = Object.assign({}, s === "xaxis" ? d.xAxisAnnotation : s === "yaxis" ? d.yAxisAnnotation : d.pointAnnotation), p = P.extend(g, t);
      switch (s) {
        case "xaxis":
          this.addXaxisAnnotation(p, h, c);
          break;
        case "yaxis":
          this.addYaxisAnnotation(p, h, c);
          break;
        case "point":
          this.addPointAnnotation(p, h, c);
      }
      var f = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(c, "']")), b = this.helpers.addBackgroundToAnno(f, p);
      return b && h.insertBefore(b.node, f), i && o.globals.memory.methodsToExec.push({ context: n, id: p.id ? p.id : P.randomId(), method: r, label: "addAnnotation", params: t }), a;
    } }, { key: "clearAnnotations", value: function(e) {
      var t = e.w, i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
      t.globals.memory.methodsToExec.map(function(a, s) {
        a.label !== "addText" && a.label !== "addAnnotation" || t.globals.memory.methodsToExec.splice(s, 1);
      }), i = P.listToArray(i), Array.prototype.forEach.call(i, function(a) {
        for (; a.firstChild; )
          a.removeChild(a.firstChild);
      });
    } }, { key: "removeAnnotation", value: function(e, t) {
      var i = e.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(t));
      a && (i.globals.memory.methodsToExec.map(function(s, r) {
        s.id === t && i.globals.memory.methodsToExec.splice(r, 1);
      }), Array.prototype.forEach.call(a, function(s) {
        s.parentElement.removeChild(s);
      }));
    } }]), y;
  }(), B = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return Y(y, [{ key: "isValidDate", value: function(e) {
      return typeof e != "number" && !isNaN(this.parseDate(e));
    } }, { key: "getTimeStamp", value: function(e) {
      return Date.parse(e) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toISOString().substr(0, 25)).getTime() : new Date(e).getTime() : e;
    } }, { key: "getDate", value: function(e) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(e).toUTCString()) : new Date(e);
    } }, { key: "parseDate", value: function(e) {
      var t = Date.parse(e);
      if (!isNaN(t))
        return this.getTimeStamp(e);
      var i = Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return i = this.getTimeStamp(i);
    } }, { key: "parseDateWithTimezone", value: function(e) {
      return Date.parse(e.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    } }, { key: "formatDate", value: function(e, t) {
      var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC, s = ["\0"].concat(J(i.months)), r = [""].concat(J(i.shortMonths)), n = [""].concat(J(i.days)), o = [""].concat(J(i.shortDays));
      function h(S, C) {
        var L = S + "";
        for (C = C || 2; L.length < C; )
          L = "0" + L;
        return L;
      }
      var c = a ? e.getUTCFullYear() : e.getFullYear();
      t = (t = (t = t.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
      var d = (a ? e.getUTCMonth() : e.getMonth()) + 1;
      t = (t = (t = (t = t.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(d))).replace(/(^|[^\\])M/g, "$1" + d);
      var g = a ? e.getUTCDate() : e.getDate();
      t = (t = (t = (t = t.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + o[0])).replace(/(^|[^\\])dd/g, "$1" + h(g))).replace(/(^|[^\\])d/g, "$1" + g);
      var p = a ? e.getUTCHours() : e.getHours(), f = p > 12 ? p - 12 : p === 0 ? 12 : p;
      t = (t = (t = (t = t.replace(/(^|[^\\])HH+/g, "$1" + h(p))).replace(/(^|[^\\])H/g, "$1" + p)).replace(/(^|[^\\])hh+/g, "$1" + h(f))).replace(/(^|[^\\])h/g, "$1" + f);
      var b = a ? e.getUTCMinutes() : e.getMinutes();
      t = (t = t.replace(/(^|[^\\])mm+/g, "$1" + h(b))).replace(/(^|[^\\])m/g, "$1" + b);
      var m = a ? e.getUTCSeconds() : e.getSeconds();
      t = (t = t.replace(/(^|[^\\])ss+/g, "$1" + h(m))).replace(/(^|[^\\])s/g, "$1" + m);
      var w = a ? e.getUTCMilliseconds() : e.getMilliseconds();
      t = t.replace(/(^|[^\\])fff+/g, "$1" + h(w, 3)), w = Math.round(w / 10), t = t.replace(/(^|[^\\])ff/g, "$1" + h(w)), w = Math.round(w / 10);
      var A = p < 12 ? "AM" : "PM";
      t = (t = (t = t.replace(/(^|[^\\])f/g, "$1" + w)).replace(/(^|[^\\])TT+/g, "$1" + A)).replace(/(^|[^\\])T/g, "$1" + A.charAt(0));
      var l = A.toLowerCase();
      t = (t = t.replace(/(^|[^\\])tt+/g, "$1" + l)).replace(/(^|[^\\])t/g, "$1" + l.charAt(0));
      var u = -e.getTimezoneOffset(), x = a || !u ? "Z" : u > 0 ? "+" : "-";
      if (!a) {
        var v = (u = Math.abs(u)) % 60;
        x += h(Math.floor(u / 60)) + ":" + h(v);
      }
      t = t.replace(/(^|[^\\])K/g, "$1" + x);
      var k = (a ? e.getUTCDay() : e.getDay()) + 1;
      return t = (t = (t = (t = (t = t.replace(new RegExp(n[0], "g"), n[k])).replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(s[0], "g"), s[d])).replace(new RegExp(r[0], "g"), r[d])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(e, t, i) {
      var a = this.w;
      a.config.xaxis.min !== void 0 && (e = a.config.xaxis.min), a.config.xaxis.max !== void 0 && (t = a.config.xaxis.max);
      var s = this.getDate(e), r = this.getDate(t), n = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "), o = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(n[6], 10), maxMillisecond: parseInt(o[6], 10), minSecond: parseInt(n[5], 10), maxSecond: parseInt(o[5], 10), minMinute: parseInt(n[4], 10), maxMinute: parseInt(o[4], 10), minHour: parseInt(n[3], 10), maxHour: parseInt(o[3], 10), minDate: parseInt(n[2], 10), maxDate: parseInt(o[2], 10), minMonth: parseInt(n[1], 10) - 1, maxMonth: parseInt(o[1], 10) - 1, minYear: parseInt(n[0], 10), maxYear: parseInt(o[0], 10) };
    } }, { key: "isLeapYear", value: function(e) {
      return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(e, t, i) {
      return this.determineDaysOfMonths(e, t) - i;
    } }, { key: "determineDaysOfYear", value: function(e) {
      var t = 365;
      return this.isLeapYear(e) && (t = 366), t;
    } }, { key: "determineRemainingDaysOfYear", value: function(e, t, i) {
      var a = this.daysCntOfYear[t] + i;
      return t > 1 && this.isLeapYear() && a++, a;
    } }, { key: "determineDaysOfMonths", value: function(e, t) {
      var i = 30;
      switch (e = P.monthMod(e), !0) {
        case this.months30.indexOf(e) > -1:
          e === 2 && (i = this.isLeapYear(t) ? 29 : 28);
          break;
        case this.months31.indexOf(e) > -1:
        default:
          i = 31;
      }
      return i;
    } }]), y;
  }(), re = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.tooltipKeyFormat = "dd MMM";
    }
    return Y(y, [{ key: "xLabelFormat", value: function(e, t, i, a) {
      var s = this.w;
      if (s.config.xaxis.type === "datetime" && s.config.xaxis.labels.formatter === void 0 && s.config.tooltip.x.formatter === void 0) {
        var r = new B(this.ctx);
        return r.formatDate(r.getDate(t), s.config.tooltip.x.format);
      }
      return e(t, i, a);
    } }, { key: "defaultGeneralFormatter", value: function(e) {
      return Array.isArray(e) ? e.map(function(t) {
        return t;
      }) : e;
    } }, { key: "defaultYFormatter", value: function(e, t, i) {
      var a = this.w;
      return P.isNumber(e) && (e = a.globals.yValueDecimal !== 0 ? e.toFixed(t.decimalsInFloat !== void 0 ? t.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? e.toFixed(1) : e.toFixed(0)), e;
    } }, { key: "setLabelFormatters", value: function() {
      var e = this, t = this.w;
      return t.globals.xaxisTooltipFormatter = function(i) {
        return e.defaultGeneralFormatter(i);
      }, t.globals.ttKeyFormatter = function(i) {
        return e.defaultGeneralFormatter(i);
      }, t.globals.ttZFormatter = function(i) {
        return i;
      }, t.globals.legendFormatter = function(i) {
        return e.defaultGeneralFormatter(i);
      }, t.config.xaxis.labels.formatter !== void 0 ? t.globals.xLabelFormatter = t.config.xaxis.labels.formatter : t.globals.xLabelFormatter = function(i) {
        if (P.isNumber(i)) {
          if (!t.config.xaxis.convertedCatToNumeric && t.config.xaxis.type === "numeric") {
            if (P.isNumber(t.config.xaxis.decimalsInFloat))
              return i.toFixed(t.config.xaxis.decimalsInFloat);
            var a = t.globals.maxX - t.globals.minX;
            return a > 0 && a < 100 ? i.toFixed(1) : i.toFixed(0);
          }
          return t.globals.isBarHorizontal && t.globals.maxY - t.globals.minYArr < 4 ? i.toFixed(1) : i.toFixed(0);
        }
        return i;
      }, typeof t.config.tooltip.x.formatter == "function" ? t.globals.ttKeyFormatter = t.config.tooltip.x.formatter : t.globals.ttKeyFormatter = t.globals.xLabelFormatter, typeof t.config.xaxis.tooltip.formatter == "function" && (t.globals.xaxisTooltipFormatter = t.config.xaxis.tooltip.formatter), (Array.isArray(t.config.tooltip.y) || t.config.tooltip.y.formatter !== void 0) && (t.globals.ttVal = t.config.tooltip.y), t.config.tooltip.z.formatter !== void 0 && (t.globals.ttZFormatter = t.config.tooltip.z.formatter), t.config.legend.formatter !== void 0 && (t.globals.legendFormatter = t.config.legend.formatter), t.config.yaxis.forEach(function(i, a) {
        i.labels.formatter !== void 0 ? t.globals.yLabelFormatters[a] = i.labels.formatter : t.globals.yLabelFormatters[a] = function(s) {
          return t.globals.xyCharts ? Array.isArray(s) ? s.map(function(r) {
            return e.defaultYFormatter(r, i, a);
          }) : e.defaultYFormatter(s, i, a) : s;
        };
      }), t.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var e = this.w;
      if (e.config.chart.type === "heatmap") {
        e.globals.yAxisScale[0].result = e.globals.seriesNames.slice();
        var t = e.globals.seriesNames.reduce(function(i, a) {
          return i.length > a.length ? i : a;
        }, 0);
        e.globals.yAxisScale[0].niceMax = t, e.globals.yAxisScale[0].niceMin = t;
      }
    } }]), y;
  }(), fe = function(y) {
    var e, t = y.isTimeline, i = y.ctx, a = y.seriesIndex, s = y.dataPointIndex, r = y.y1, n = y.y2, o = y.w, h = o.globals.seriesRangeStart[a][s], c = o.globals.seriesRangeEnd[a][s], d = o.globals.labels[s], g = o.config.series[a].name ? o.config.series[a].name : "", p = o.globals.ttKeyFormatter, f = o.config.tooltip.y.title.formatter, b = { w: o, seriesIndex: a, dataPointIndex: s, start: h, end: c };
    typeof f == "function" && (g = f(g, b)), (e = o.config.series[a].data[s]) !== null && e !== void 0 && e.x && (d = o.config.series[a].data[s].x), t || o.config.xaxis.type === "datetime" && (d = new re(i).xLabelFormat(o.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new B(i).formatDate, w: o })), typeof p == "function" && (d = p(d, b)), Number.isFinite(r) && Number.isFinite(n) && (h = r, c = n);
    var m = "", w = "", A = o.globals.colors[a];
    if (o.config.tooltip.x.formatter === void 0)
      if (o.config.xaxis.type === "datetime") {
        var l = new B(i);
        m = l.formatDate(l.getDate(h), o.config.tooltip.x.format), w = l.formatDate(l.getDate(c), o.config.tooltip.x.format);
      } else
        m = h, w = c;
    else
      m = o.config.tooltip.x.formatter(h), w = o.config.tooltip.x.formatter(c);
    return { start: h, end: c, startVal: m, endVal: w, ylabel: d, color: A, seriesName: g };
  }, ne = function(y) {
    var e = y.color, t = y.seriesName, i = y.ylabel, a = y.start, s = y.end, r = y.seriesIndex, n = y.dataPointIndex, o = y.ctx.tooltip.tooltipLabels.getFormatters(r);
    a = o.yLbFormatter(a), s = o.yLbFormatter(s);
    var h = o.yLbFormatter(y.w.globals.series[r][n]), c = `<span class="value start-value">
  `.concat(a, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(s, `
  </span>`);
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e + '">' + (t || "") + '</span></div><div> <span class="category">' + i + ": </span> " + (y.w.globals.comboCharts ? y.w.config.series[r].type === "rangeArea" || y.w.config.series[r].type === "rangeBar" ? c : "<span>".concat(h, "</span>") : c) + " </div></div>";
  }, oe = function() {
    function y(e) {
      F(this, y), this.opts = e;
    }
    return Y(y, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
    } }, { key: "line", value: function() {
      return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(e) {
      return this.hideYAxis(), P.extend(e, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
    } }, { key: "bar", value: function() {
      return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square", radius: 2, size: 8 } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), X(X({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
    } }, { key: "candlestick", value: function() {
      var e = this;
      return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
        var i = t.seriesIndex, a = t.dataPointIndex, s = t.w;
        return e._getBoxTooltip(s, i, a, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var e = this;
      return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(t) {
        var i = t.seriesIndex, a = t.dataPointIndex, s = t.w;
        return e._getBoxTooltip(s, i, a, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 5, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(e, t) {
        t.ctx;
        var i = t.seriesIndex, a = t.dataPointIndex, s = t.w, r = function() {
          var n = s.globals.seriesRangeStart[i][a];
          return s.globals.seriesRangeEnd[i][a] - n;
        };
        return s.globals.comboCharts ? s.config.series[i].type === "rangeBar" || s.config.series[i].type === "rangeArea" ? r() : e : r();
      }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(e) {
        return e.w.config.plotOptions && e.w.config.plotOptions.bar && e.w.config.plotOptions.bar.horizontal ? function(t) {
          var i = fe(X(X({}, t), {}, { isTimeline: !0 })), a = i.color, s = i.seriesName, r = i.ylabel, n = i.startVal, o = i.endVal;
          return ne(X(X({}, t), {}, { color: a, seriesName: s, ylabel: r, start: n, end: o }));
        }(e) : function(t) {
          var i = fe(t), a = i.color, s = i.seriesName, r = i.ylabel, n = i.start, o = i.end;
          return ne(X(X({}, t), {}, { color: a, seriesName: s, ylabel: r, start: n, end: o }));
        }(e);
      } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
    } }, { key: "dumbbell", value: function(e) {
      var t, i;
      return (t = e.plotOptions.bar) !== null && t !== void 0 && t.barHeight || (e.plotOptions.bar.barHeight = 2), (i = e.plotOptions.bar) !== null && i !== void 0 && i.columnWidth || (e.plotOptions.bar.columnWidth = 2), e;
    } }, { key: "area", value: function() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
    } }, { key: "rangeArea", value: function() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(e) {
        return function(t) {
          var i = fe(t), a = i.color, s = i.seriesName, r = i.ylabel, n = i.start, o = i.end;
          return ne(X(X({}, t), {}, { color: a, seriesName: s, ylabel: r, start: n, end: o }));
        }(e);
      } } };
    } }, { key: "brush", value: function(e) {
      return P.extend(e, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
    } }, { key: "stacked100", value: function(e) {
      e.dataLabels = e.dataLabels || {}, e.dataLabels.formatter = e.dataLabels.formatter || void 0;
      var t = e.dataLabels.formatter;
      return e.yaxis.forEach(function(i, a) {
        e.yaxis[a].min = 0, e.yaxis[a].max = 100;
      }), e.chart.type === "bar" && (e.dataLabels.formatter = t || function(i) {
        return typeof i == "number" && i ? i.toFixed(0) + "%" : i;
      }), e;
    } }, { key: "stackedBars", value: function() {
      var e = this.bar();
      return X(X({}, e), {}, { plotOptions: X(X({}, e.plotOptions), {}, { bar: X(X({}, e.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(e) {
      return e.xaxis.convertedCatToNumeric = !0, e;
    } }, { key: "convertCatToNumericXaxis", value: function(e, t, i) {
      e.xaxis.type = "numeric", e.xaxis.labels = e.xaxis.labels || {}, e.xaxis.labels.formatter = e.xaxis.labels.formatter || function(r) {
        return P.isNumber(r) ? Math.floor(r) : r;
      };
      var a = e.xaxis.labels.formatter, s = e.xaxis.categories && e.xaxis.categories.length ? e.xaxis.categories : e.labels;
      return i && i.length && (s = i.map(function(r) {
        return Array.isArray(r) ? r : String(r);
      })), s && s.length && (e.xaxis.labels.formatter = function(r) {
        return P.isNumber(r) ? a(s[Math.floor(r) - 1]) : a(r);
      }), e.xaxis.categories = [], e.labels = [], e.xaxis.tickAmount = e.xaxis.tickAmount || "dataPoints", e;
    } }, { key: "bubble", value: function() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    } }, { key: "scatter", value: function() {
      return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    } }, { key: "heatmap", value: function() {
      return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square", size: 10, offsetY: 2 } }, grid: { padding: { right: 20 } } };
    } }, { key: "treemap", value: function() {
      return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
    } }, { key: "pie", value: function() {
      return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "donut", value: function() {
      return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "polarArea", value: function() {
      return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(e) {
        return e.toFixed(1) + "%";
      }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "radar", value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1 }, xaxis: { labels: { formatter: function(e) {
        return e;
      }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
    } }, { key: "radialBar", value: function() {
      return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 } };
    } }, { key: "_getBoxTooltip", value: function(e, t, i, a, s) {
      var r = e.globals.seriesCandleO[t][i], n = e.globals.seriesCandleH[t][i], o = e.globals.seriesCandleM[t][i], h = e.globals.seriesCandleL[t][i], c = e.globals.seriesCandleC[t][i];
      return e.config.series[t].type && e.config.series[t].type !== s ? `<div class="apexcharts-custom-tooltip">
          `.concat(e.config.series[t].name ? e.config.series[t].name : "series-" + (t + 1), ": <strong>").concat(e.globals.series[t][i], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(e.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + r + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + n + "</span></div>" + (o ? "<div>".concat(a[2], ': <span class="value">') + o + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + h + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + c + "</span></div></div>";
    } }]), y;
  }(), Le = function() {
    function y(e) {
      F(this, y), this.opts = e;
    }
    return Y(y, [{ key: "init", value: function(e) {
      var t = e.responsiveOverride, i = this.opts, a = new G(), s = new oe(i);
      this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
      var r = a.init(), n = {};
      if (i && U(i) === "object") {
        var o, h, c, d, g, p, f, b, m = {};
        m = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) !== -1 ? s[i.chart.type]() : s.line(), (o = i.plotOptions) !== null && o !== void 0 && (h = o.bar) !== null && h !== void 0 && h.isFunnel && (m = s.funnel()), i.chart.stacked && i.chart.type === "bar" && (m = s.stackedBars()), (c = i.chart.brush) !== null && c !== void 0 && c.enabled && (m = s.brush(m)), i.chart.stacked && i.chart.stackType === "100%" && (i = s.stacked100(i)), (d = i.plotOptions) !== null && d !== void 0 && (g = d.bar) !== null && g !== void 0 && g.isDumbbell && (i = s.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, t || (i.xaxis.convertedCatToNumeric = !1), ((p = (i = this.checkForCatToNumericXAxis(this.chartType, m, i)).chart.sparkline) !== null && p !== void 0 && p.enabled || (f = window.Apex.chart) !== null && f !== void 0 && (b = f.sparkline) !== null && b !== void 0 && b.enabled) && (m = s.sparkline(m)), n = P.extend(r, m);
      }
      var w = P.extend(n, window.Apex);
      return r = P.extend(w, i), r = this.handleUserInputErrors(r);
    } }, { key: "checkForCatToNumericXAxis", value: function(e, t, i) {
      var a, s, r = new oe(i), n = (e === "bar" || e === "boxPlot") && ((a = i.plotOptions) === null || a === void 0 || (s = a.bar) === null || s === void 0 ? void 0 : s.horizontal), o = e === "pie" || e === "polarArea" || e === "donut" || e === "radar" || e === "radialBar" || e === "heatmap", h = i.xaxis.type !== "datetime" && i.xaxis.type !== "numeric", c = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : t.xaxis && t.xaxis.tickPlacement;
      return n || o || !h || c === "between" || (i = r.convertCatToNumeric(i)), i;
    } }, { key: "extendYAxis", value: function(e, t) {
      var i = new G();
      (e.yaxis === void 0 || !e.yaxis || Array.isArray(e.yaxis) && e.yaxis.length === 0) && (e.yaxis = {}), e.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (e.yaxis = P.extend(e.yaxis, window.Apex.yaxis)), e.yaxis.constructor !== Array ? e.yaxis = [P.extend(i.yAxis, e.yaxis)] : e.yaxis = P.extendArray(e.yaxis, i.yAxis);
      var a = !1;
      e.yaxis.forEach(function(r) {
        r.logarithmic && (a = !0);
      });
      var s = e.series;
      return t && !s && (s = t.config.series), a && s.length !== e.yaxis.length && s.length && (e.yaxis = s.map(function(r, n) {
        if (r.name || (s[n].name = "series-".concat(n + 1)), e.yaxis[n])
          return e.yaxis[n].seriesName = s[n].name, e.yaxis[n];
        var o = P.extend(i.yAxis, e.yaxis[0]);
        return o.show = !1, o;
      })), a && s.length > 1 && s.length !== e.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), e;
    } }, { key: "extendAnnotations", value: function(e) {
      return e.annotations === void 0 && (e.annotations = {}, e.annotations.yaxis = [], e.annotations.xaxis = [], e.annotations.points = []), e = this.extendYAxisAnnotations(e), e = this.extendXAxisAnnotations(e), e = this.extendPointAnnotations(e);
    } }, { key: "extendYAxisAnnotations", value: function(e) {
      var t = new G();
      return e.annotations.yaxis = P.extendArray(e.annotations.yaxis !== void 0 ? e.annotations.yaxis : [], t.yAxisAnnotation), e;
    } }, { key: "extendXAxisAnnotations", value: function(e) {
      var t = new G();
      return e.annotations.xaxis = P.extendArray(e.annotations.xaxis !== void 0 ? e.annotations.xaxis : [], t.xAxisAnnotation), e;
    } }, { key: "extendPointAnnotations", value: function(e) {
      var t = new G();
      return e.annotations.points = P.extendArray(e.annotations.points !== void 0 ? e.annotations.points : [], t.pointAnnotation), e;
    } }, { key: "checkForDarkTheme", value: function(e) {
      e.theme && e.theme.mode === "dark" && (e.tooltip || (e.tooltip = {}), e.tooltip.theme !== "light" && (e.tooltip.theme = "dark"), e.chart.foreColor || (e.chart.foreColor = "#f6f7f8"), e.chart.background || (e.chart.background = "#424242"), e.theme.palette || (e.theme.palette = "palette4"));
    } }, { key: "handleUserInputErrors", value: function(e) {
      var t = e;
      if (t.tooltip.shared && t.tooltip.intersect)
        throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if (t.chart.type === "bar" && t.plotOptions.bar.horizontal) {
        if (t.yaxis.length > 1)
          throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        t.yaxis[0].reversed && (t.yaxis[0].opposite = !0), t.xaxis.tooltip.enabled = !1, t.yaxis[0].tooltip.enabled = !1, t.chart.zoom.enabled = !1;
      }
      return t.chart.type !== "bar" && t.chart.type !== "rangeBar" || t.tooltip.shared && t.xaxis.crosshairs.width === "barWidth" && t.series.length > 1 && (t.xaxis.crosshairs.width = "tickWidth"), t.chart.type !== "candlestick" && t.chart.type !== "boxPlot" || t.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(t.chart.type, " chart is not supported.")), t.yaxis[0].reversed = !1), t;
    } }]), y;
  }(), Ze = function() {
    function y() {
      F(this, y);
    }
    return Y(y, [{ key: "initGlobalVars", value: function(e) {
      e.series = [], e.seriesCandleO = [], e.seriesCandleH = [], e.seriesCandleM = [], e.seriesCandleL = [], e.seriesCandleC = [], e.seriesRangeStart = [], e.seriesRangeEnd = [], e.seriesRange = [], e.seriesPercent = [], e.seriesGoals = [], e.seriesX = [], e.seriesZ = [], e.seriesNames = [], e.seriesTotals = [], e.seriesLog = [], e.seriesColors = [], e.stackedSeriesTotals = [], e.seriesXvalues = [], e.seriesYvalues = [], e.labels = [], e.hasXaxisGroups = !1, e.groups = [], e.hasSeriesGroups = !1, e.seriesGroups = [], e.categoryLabels = [], e.timescaleLabels = [], e.noLabelsProvided = !1, e.resizeTimer = null, e.selectionResizeTimer = null, e.delayedElements = [], e.pointsArray = [], e.dataLabelsRects = [], e.isXNumeric = !1, e.skipLastTimelinelabel = !1, e.skipFirstTimelinelabel = !1, e.isDataXYZ = !1, e.isMultiLineX = !1, e.isMultipleYAxis = !1, e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE, e.minYArr = [], e.maxYArr = [], e.maxX = -Number.MAX_VALUE, e.minX = Number.MAX_VALUE, e.initialMaxX = -Number.MAX_VALUE, e.initialMinX = Number.MAX_VALUE, e.maxDate = 0, e.minDate = Number.MAX_VALUE, e.minZ = Number.MAX_VALUE, e.maxZ = -Number.MAX_VALUE, e.minXDiff = Number.MAX_VALUE, e.yAxisScale = [], e.xAxisScale = null, e.xAxisTicksPositions = [], e.yLabelsCoords = [], e.yTitleCoords = [], e.barPadForNumericAxis = 0, e.padHorizontal = 0, e.xRange = 0, e.yRange = [], e.zRange = 0, e.dataPoints = 0, e.xTickAmount = 0;
    } }, { key: "globalVars", value: function(e) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: e.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], yAxisSameScaleIndices: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: e.chart.toolbar.autoSelected === "zoom" && e.chart.toolbar.tools.zoom && e.chart.zoom.enabled, panEnabled: e.chart.toolbar.autoSelected === "pan" && e.chart.toolbar.tools.pan, selectionEnabled: e.chart.toolbar.autoSelected === "selection" && e.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null };
    } }, { key: "init", value: function(e) {
      var t = this.globalVars(e);
      return this.initGlobalVars(t), t.initialConfig = P.extend({}, e), t.initialSeries = P.clone(e.series), t.lastXAxis = P.clone(t.initialConfig.xaxis), t.lastYAxis = P.clone(t.initialConfig.yaxis), t;
    } }]), y;
  }(), ft = function() {
    function y(e) {
      F(this, y), this.opts = e;
    }
    return Y(y, [{ key: "init", value: function() {
      var e = new Le(this.opts).init({ responsiveOverride: !1 });
      return { config: e, globals: new Ze().init(e) };
    } }]), y;
  }(), ae = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.opts = null, this.seriesIndex = 0;
    }
    return Y(y, [{ key: "clippedImgArea", value: function(e) {
      var t = this.w, i = t.config, a = parseInt(t.globals.gridWidth, 10), s = parseInt(t.globals.gridHeight, 10), r = a > s ? a : s, n = e.image, o = 0, h = 0;
      e.width === void 0 && e.height === void 0 ? i.fill.image.width !== void 0 && i.fill.image.height !== void 0 ? (o = i.fill.image.width + 1, h = i.fill.image.height) : (o = r + 1, h = r) : (o = e.width, h = e.height);
      var c = document.createElementNS(t.globals.SVGNS, "pattern");
      M.setAttrs(c, { id: e.patternID, patternUnits: e.patternUnits ? e.patternUnits : "userSpaceOnUse", width: o + "px", height: h + "px" });
      var d = document.createElementNS(t.globals.SVGNS, "image");
      c.appendChild(d), d.setAttributeNS(window.SVG.xlink, "href", n), M.setAttrs(d, { x: 0, y: 0, preserveAspectRatio: "none", width: o + "px", height: h + "px" }), d.style.opacity = e.opacity, t.globals.dom.elDefs.node.appendChild(c);
    } }, { key: "getSeriesIndex", value: function(e) {
      var t = this.w, i = t.config.chart.type;
      return (i === "bar" || i === "rangeBar") && t.config.plotOptions.bar.distributed || i === "heatmap" || i === "treemap" ? this.seriesIndex = e.seriesNumber : this.seriesIndex = e.seriesNumber % t.globals.series.length, this.seriesIndex;
    } }, { key: "fillPath", value: function(e) {
      var t = this.w;
      this.opts = e;
      var i, a, s, r = this.w.config;
      this.seriesIndex = this.getSeriesIndex(e);
      var n = this.getFillColors()[this.seriesIndex];
      t.globals.seriesColors[this.seriesIndex] !== void 0 && (n = t.globals.seriesColors[this.seriesIndex]), typeof n == "function" && (n = n({ seriesIndex: this.seriesIndex, dataPointIndex: e.dataPointIndex, value: e.value, w: t }));
      var o = e.fillType ? e.fillType : this.getFillType(this.seriesIndex), h = Array.isArray(r.fill.opacity) ? r.fill.opacity[this.seriesIndex] : r.fill.opacity;
      e.color && (n = e.color), n || (n = "#fff", console.warn("undefined color - ApexCharts"));
      var c = n;
      if (n.indexOf("rgb") === -1 ? n.length < 9 && (c = P.hexToRgba(n, h)) : n.indexOf("rgba") > -1 && (h = P.getOpacityFromRGBA(n)), e.opacity && (h = e.opacity), o === "pattern" && (a = this.handlePatternFill({ fillConfig: e.fillConfig, patternFill: a, fillColor: n, fillOpacity: h, defaultColor: c })), o === "gradient" && (s = this.handleGradientFill({ fillConfig: e.fillConfig, fillColor: n, fillOpacity: h, i: this.seriesIndex })), o === "image") {
        var d = r.fill.image.src, g = e.patternID ? e.patternID : "";
        this.clippedImgArea({ opacity: h, image: Array.isArray(d) ? e.seriesNumber < d.length ? d[e.seriesNumber] : d[0] : d, width: e.width ? e.width : void 0, height: e.height ? e.height : void 0, patternUnits: e.patternUnits, patternID: "pattern".concat(t.globals.cuid).concat(e.seriesNumber + 1).concat(g) }), i = "url(#pattern".concat(t.globals.cuid).concat(e.seriesNumber + 1).concat(g, ")");
      } else
        i = o === "gradient" ? s : o === "pattern" ? a : c;
      return e.solid && (i = c), i;
    } }, { key: "getFillType", value: function(e) {
      var t = this.w;
      return Array.isArray(t.config.fill.type) ? t.config.fill.type[e] : t.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var e = this.w, t = e.config, i = this.opts, a = [];
      return e.globals.comboCharts ? e.config.series[this.seriesIndex].type === "line" ? Array.isArray(e.globals.stroke.colors) ? a = e.globals.stroke.colors : a.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? a = e.globals.fill.colors : a.push(e.globals.fill.colors) : t.chart.type === "line" ? Array.isArray(e.globals.stroke.colors) ? a = e.globals.stroke.colors : a.push(e.globals.stroke.colors) : Array.isArray(e.globals.fill.colors) ? a = e.globals.fill.colors : a.push(e.globals.fill.colors), i.fillColors !== void 0 && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a;
    } }, { key: "handlePatternFill", value: function(e) {
      var t = e.fillConfig, i = e.patternFill, a = e.fillColor, s = e.fillOpacity, r = e.defaultColor, n = this.w.config.fill;
      t && (n = t);
      var o = this.opts, h = new M(this.ctx), c = Array.isArray(n.pattern.strokeWidth) ? n.pattern.strokeWidth[this.seriesIndex] : n.pattern.strokeWidth, d = a;
      return Array.isArray(n.pattern.style) ? i = n.pattern.style[o.seriesNumber] !== void 0 ? h.drawPattern(n.pattern.style[o.seriesNumber], n.pattern.width, n.pattern.height, d, c, s) : r : i = h.drawPattern(n.pattern.style, n.pattern.width, n.pattern.height, d, c, s), i;
    } }, { key: "handleGradientFill", value: function(e) {
      var t = e.fillColor, i = e.fillOpacity, a = e.fillConfig, s = e.i, r = this.w.config.fill;
      a && (r = X(X({}, r), a));
      var n, o = this.opts, h = new M(this.ctx), c = new P(), d = r.gradient.type, g = t, p = r.gradient.opacityFrom === void 0 ? i : Array.isArray(r.gradient.opacityFrom) ? r.gradient.opacityFrom[s] : r.gradient.opacityFrom;
      g.indexOf("rgba") > -1 && (p = P.getOpacityFromRGBA(g));
      var f = r.gradient.opacityTo === void 0 ? i : Array.isArray(r.gradient.opacityTo) ? r.gradient.opacityTo[s] : r.gradient.opacityTo;
      if (r.gradient.gradientToColors === void 0 || r.gradient.gradientToColors.length === 0)
        n = r.gradient.shade === "dark" ? c.shadeColor(-1 * parseFloat(r.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? P.rgb2hex(t) : t) : c.shadeColor(parseFloat(r.gradient.shadeIntensity), t.indexOf("rgb") > -1 ? P.rgb2hex(t) : t);
      else if (r.gradient.gradientToColors[o.seriesNumber]) {
        var b = r.gradient.gradientToColors[o.seriesNumber];
        n = b, b.indexOf("rgba") > -1 && (f = P.getOpacityFromRGBA(b));
      } else
        n = t;
      if (r.gradient.gradientFrom && (g = r.gradient.gradientFrom), r.gradient.gradientTo && (n = r.gradient.gradientTo), r.gradient.inverseColors) {
        var m = g;
        g = n, n = m;
      }
      return g.indexOf("rgb") > -1 && (g = P.rgb2hex(g)), n.indexOf("rgb") > -1 && (n = P.rgb2hex(n)), h.drawGradient(d, g, n, p, f, o.size, r.gradient.stops, r.gradient.colorStops, s);
    } }]), y;
  }(), Pe = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "setGlobalMarkerSize", value: function() {
      var e = this.w;
      if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], e.globals.markers.size.length > 0) {
        if (e.globals.markers.size.length < e.globals.series.length + 1)
          for (var t = 0; t <= e.globals.series.length; t++)
            e.globals.markers.size[t] === void 0 && e.globals.markers.size.push(e.globals.markers.size[0]);
      } else
        e.globals.markers.size = e.config.series.map(function(i) {
          return e.config.markers.size;
        });
    } }, { key: "plotChartMarkers", value: function(e, t, i, a) {
      var s, r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], n = this.w, o = t, h = e, c = null, d = new M(this.ctx), g = n.config.markers.discrete && n.config.markers.discrete.length;
      if ((n.globals.markers.size[t] > 0 || r || g) && (c = d.group({ class: r || g ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), Array.isArray(h.x))
        for (var p = 0; p < h.x.length; p++) {
          var f = i;
          i === 1 && p === 0 && (f = 0), i === 1 && p === 1 && (f = 1);
          var b = "apexcharts-marker";
          if (n.config.chart.type !== "line" && n.config.chart.type !== "area" || n.globals.comboCharts || n.config.tooltip.intersect || (b += " no-pointer-events"), (Array.isArray(n.config.markers.size) ? n.globals.markers.size[t] > 0 : n.config.markers.size > 0) || r || g) {
            P.isNumber(h.y[p]) ? b += " w".concat(P.randomId()) : b = "apexcharts-nullpoint";
            var m = this.getMarkerConfig({ cssClass: b, seriesIndex: t, dataPointIndex: f });
            n.config.series[o].data[f] && (n.config.series[o].data[f].fillColor && (m.pointFillColor = n.config.series[o].data[f].fillColor), n.config.series[o].data[f].strokeColor && (m.pointStrokeColor = n.config.series[o].data[f].strokeColor)), a && (m.pSize = a), (h.x[p] < 0 || h.x[p] > n.globals.gridWidth || h.y[p] < -n.globals.markers.largestSize || h.y[p] > n.globals.gridHeight + n.globals.markers.largestSize) && (m.pSize = 0), (s = d.drawMarker(h.x[p], h.y[p], m)).attr("rel", f), s.attr("j", f), s.attr("index", t), s.node.setAttribute("default-marker-size", m.pSize), new Z(this.ctx).setSelectionFilter(s, t, f), this.addEvents(s), c && c.add(s);
          } else
            n.globals.pointsArray[t] === void 0 && (n.globals.pointsArray[t] = []), n.globals.pointsArray[t].push([h.x[p], h.y[p]]);
        }
      return c;
    } }, { key: "getMarkerConfig", value: function(e) {
      var t = e.cssClass, i = e.seriesIndex, a = e.dataPointIndex, s = a === void 0 ? null : a, r = e.finishRadius, n = r === void 0 ? null : r, o = this.w, h = this.getMarkerStyle(i), c = o.globals.markers.size[i], d = o.config.markers;
      return s !== null && d.discrete.length && d.discrete.map(function(g) {
        g.seriesIndex === i && g.dataPointIndex === s && (h.pointStrokeColor = g.strokeColor, h.pointFillColor = g.fillColor, c = g.size, h.pointShape = g.shape);
      }), { pSize: n === null ? c : n, pRadius: d.radius, width: Array.isArray(d.width) ? d.width[i] : d.width, height: Array.isArray(d.height) ? d.height[i] : d.height, pointStrokeWidth: Array.isArray(d.strokeWidth) ? d.strokeWidth[i] : d.strokeWidth, pointStrokeColor: h.pointStrokeColor, pointFillColor: h.pointFillColor, shape: h.pointShape || (Array.isArray(d.shape) ? d.shape[i] : d.shape), class: t, pointStrokeOpacity: Array.isArray(d.strokeOpacity) ? d.strokeOpacity[i] : d.strokeOpacity, pointStrokeDashArray: Array.isArray(d.strokeDashArray) ? d.strokeDashArray[i] : d.strokeDashArray, pointFillOpacity: Array.isArray(d.fillOpacity) ? d.fillOpacity[i] : d.fillOpacity, seriesIndex: i };
    } }, { key: "addEvents", value: function(e) {
      var t = this.w, i = new M(this.ctx);
      e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, e)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, e)), e.node.addEventListener("click", t.config.markers.onClick), e.node.addEventListener("dblclick", t.config.markers.onDblClick), e.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, e), { passive: !0 });
    } }, { key: "getMarkerStyle", value: function(e) {
      var t = this.w, i = t.globals.markers.colors, a = t.config.markers.strokeColor || t.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(a) ? a[e] : a, pointFillColor: Array.isArray(i) ? i[e] : i };
    } }]), y;
  }(), $e = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }
    return Y(y, [{ key: "draw", value: function(e, t, i) {
      var a = this.w, s = new M(this.ctx), r = i.realIndex, n = i.pointsPos, o = i.zRatio, h = i.elParent, c = s.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type) });
      if (c.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(n.x))
        for (var d = 0; d < n.x.length; d++) {
          var g = t + 1, p = !0;
          t === 0 && d === 0 && (g = 0), t === 0 && d === 1 && (g = 1);
          var f = 0, b = a.globals.markers.size[r];
          if (o !== 1 / 0) {
            var m = a.config.plotOptions.bubble;
            b = a.globals.seriesZ[r][g], m.zScaling && (b /= o), m.minBubbleRadius && b < m.minBubbleRadius && (b = m.minBubbleRadius), m.maxBubbleRadius && b > m.maxBubbleRadius && (b = m.maxBubbleRadius);
          }
          a.config.chart.animations.enabled || (f = b);
          var w = n.x[d], A = n.y[d];
          if (f = f || 0, A !== null && a.globals.series[r][g] !== void 0 || (p = !1), p) {
            var l = this.drawPoint(w, A, f, b, r, g, t);
            c.add(l);
          }
          h.add(c);
        }
    } }, { key: "drawPoint", value: function(e, t, i, a, s, r, n) {
      var o = this.w, h = s, c = new de(this.ctx), d = new Z(this.ctx), g = new ae(this.ctx), p = new Pe(this.ctx), f = new M(this.ctx), b = p.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: h, dataPointIndex: r, finishRadius: o.config.chart.type === "bubble" || o.globals.comboCharts && o.config.series[s] && o.config.series[s].type === "bubble" ? a : null });
      a = b.pSize;
      var m, w = g.fillPath({ seriesNumber: s, dataPointIndex: r, color: b.pointFillColor, patternUnits: "objectBoundingBox", value: o.globals.series[s][n] });
      if (b.shape === "circle" ? m = f.drawCircle(i) : b.shape !== "square" && b.shape !== "rect" || (m = f.drawRect(0, 0, b.width - b.pointStrokeWidth / 2, b.height - b.pointStrokeWidth / 2, b.pRadius)), o.config.series[h].data[r] && o.config.series[h].data[r].fillColor && (w = o.config.series[h].data[r].fillColor), m.attr({ x: e - b.width / 2 - b.pointStrokeWidth / 2, y: t - b.height / 2 - b.pointStrokeWidth / 2, cx: e, cy: t, fill: w, "fill-opacity": b.pointFillOpacity, stroke: b.pointStrokeColor, r: a, "stroke-width": b.pointStrokeWidth, "stroke-dasharray": b.pointStrokeDashArray, "stroke-opacity": b.pointStrokeOpacity }), o.config.chart.dropShadow.enabled) {
        var A = o.config.chart.dropShadow;
        d.dropShadow(m, A, s);
      }
      if (!this.initialAnim || o.globals.dataChanged || o.globals.resized)
        o.globals.animationEnded = !0;
      else {
        var l = o.config.chart.animations.speed;
        c.animateMarker(m, 0, b.shape === "circle" ? a : { width: b.width, height: b.height }, l, o.globals.easing, function() {
          window.setTimeout(function() {
            c.animationCompleted(m);
          }, 100);
        });
      }
      if (o.globals.dataChanged && b.shape === "circle")
        if (this.dynamicAnim) {
          var u, x, v, k, S = o.config.chart.animations.dynamicAnimation.speed;
          (k = o.globals.previousPaths[s] && o.globals.previousPaths[s][n]) != null && (u = k.x, x = k.y, v = k.r !== void 0 ? k.r : a);
          for (var C = 0; C < o.globals.collapsedSeries.length; C++)
            o.globals.collapsedSeries[C].index === s && (S = 1, a = 0);
          e === 0 && t === 0 && (a = 0), c.animateCircle(m, { cx: u, cy: x, r: v }, { cx: e, cy: t, r: a }, S, o.globals.easing);
        } else
          m.attr({ r: a });
      return m.attr({ rel: r, j: r, index: s, "default-marker-size": a }), d.setSelectionFilter(m, s, r), p.addEvents(m), m.node.classList.add("apexcharts-marker"), m;
    } }, { key: "centerTextInBubble", value: function(e) {
      var t = this.w;
      return { y: e += parseInt(t.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), y;
  }(), ye = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "dataLabelsCorrection", value: function(e, t, i, a, s, r, n) {
      var o = this.w, h = !1, c = new M(this.ctx).getTextRects(i, n), d = c.width, g = c.height;
      t < 0 && (t = 0), t > o.globals.gridHeight + g && (t = o.globals.gridHeight + g / 2), o.globals.dataLabelsRects[a] === void 0 && (o.globals.dataLabelsRects[a] = []), o.globals.dataLabelsRects[a].push({ x: e, y: t, width: d, height: g });
      var p = o.globals.dataLabelsRects[a].length - 2, f = o.globals.lastDrawnDataLabelsIndexes[a] !== void 0 ? o.globals.lastDrawnDataLabelsIndexes[a][o.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
      if (o.globals.dataLabelsRects[a][p] !== void 0) {
        var b = o.globals.dataLabelsRects[a][f];
        (e > b.x + b.width || t > b.y + b.height || t + g < b.y || e + d < b.x) && (h = !0);
      }
      return (s === 0 || r) && (h = !0), { x: e, y: t, textRects: c, drawnextLabel: h };
    } }, { key: "drawDataLabel", value: function(e) {
      var t = this, i = e.type, a = e.pos, s = e.i, r = e.j, n = e.isRangeStart, o = e.strokeWidth, h = o === void 0 ? 2 : o, c = this.w, d = new M(this.ctx), g = c.config.dataLabels, p = 0, f = 0, b = r, m = null;
      if (!g.enabled || !Array.isArray(a.x))
        return m;
      m = d.group({ class: "apexcharts-data-labels" });
      for (var w = 0; w < a.x.length; w++)
        if (p = a.x[w] + g.offsetX, f = a.y[w] + g.offsetY + h, !isNaN(p)) {
          r === 1 && w === 0 && (b = 0), r === 1 && w === 1 && (b = 1);
          var A = c.globals.series[s][b];
          i === "rangeArea" && (A = n ? c.globals.seriesRangeStart[s][b] : c.globals.seriesRangeEnd[s][b]);
          var l = "", u = function(x) {
            return c.config.dataLabels.formatter(x, { ctx: t.ctx, seriesIndex: s, dataPointIndex: b, w: c });
          };
          c.config.chart.type === "bubble" ? (l = u(A = c.globals.seriesZ[s][b]), f = a.y[w], f = new $e(this.ctx).centerTextInBubble(f, s, b).y) : A !== void 0 && (l = u(A)), this.plotDataLabelsText({ x: p, y: f, text: l, i: s, j: b, parent: m, offsetCorrection: !0, dataLabelsConfig: c.config.dataLabels });
        }
      return m;
    } }, { key: "plotDataLabelsText", value: function(e) {
      var t = this.w, i = new M(this.ctx), a = e.x, s = e.y, r = e.i, n = e.j, o = e.text, h = e.textAnchor, c = e.fontSize, d = e.parent, g = e.dataLabelsConfig, p = e.color, f = e.alwaysDrawDataLabel, b = e.offsetCorrection;
      if (!(Array.isArray(t.config.dataLabels.enabledOnSeries) && t.config.dataLabels.enabledOnSeries.indexOf(r) < 0)) {
        var m = { x: a, y: s, drawnextLabel: !0, textRects: null };
        b && (m = this.dataLabelsCorrection(a, s, o, r, n, f, parseInt(g.style.fontSize, 10))), t.globals.zoomed || (a = m.x, s = m.y), m.textRects && (a < -20 - m.textRects.width || a > t.globals.gridWidth + m.textRects.width + 30) && (o = "");
        var w = t.globals.dataLabels.style.colors[r];
        ((t.config.chart.type === "bar" || t.config.chart.type === "rangeBar") && t.config.plotOptions.bar.distributed || t.config.dataLabels.distributed) && (w = t.globals.dataLabels.style.colors[n]), typeof w == "function" && (w = w({ series: t.globals.series, seriesIndex: r, dataPointIndex: n, w: t })), p && (w = p);
        var A = g.offsetX, l = g.offsetY;
        if (t.config.chart.type !== "bar" && t.config.chart.type !== "rangeBar" || (A = 0, l = 0), m.drawnextLabel) {
          var u = i.drawText({ width: 100, height: parseInt(g.style.fontSize, 10), x: a + A, y: s + l, foreColor: w, textAnchor: h || g.textAnchor, text: o, fontSize: c || g.style.fontSize, fontFamily: g.style.fontFamily, fontWeight: g.style.fontWeight || "normal" });
          if (u.attr({ class: "apexcharts-datalabel", cx: a, cy: s }), g.dropShadow.enabled) {
            var x = g.dropShadow;
            new Z(this.ctx).dropShadow(u, x);
          }
          d.add(u), t.globals.lastDrawnDataLabelsIndexes[r] === void 0 && (t.globals.lastDrawnDataLabelsIndexes[r] = []), t.globals.lastDrawnDataLabelsIndexes[r].push(n);
        }
      }
    } }, { key: "addBackgroundToDataLabel", value: function(e, t) {
      var i = this.w, a = i.config.dataLabels.background, s = a.padding, r = a.padding / 2, n = t.width, o = t.height, h = new M(this.ctx).drawRect(t.x - s, t.y - r / 2, n + 2 * s, o + r, a.borderRadius, i.config.chart.background === "transparent" ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
      return a.dropShadow.enabled && new Z(this.ctx).dropShadow(h, a.dropShadow), h;
    } }, { key: "dataLabelsBackground", value: function() {
      var e = this.w;
      if (e.config.chart.type !== "bubble")
        for (var t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < t.length; i++) {
          var a = t[i], s = a.getBBox(), r = null;
          if (s.width && s.height && (r = this.addBackgroundToDataLabel(a, s)), r) {
            a.parentNode.insertBefore(r.node, a);
            var n = a.getAttribute("fill");
            e.config.chart.animations.enabled && !e.globals.resized && !e.globals.dataChanged ? r.animate().attr({ fill: n }) : r.attr({ fill: n }), a.setAttribute("fill", e.config.dataLabels.background.foreColor);
          }
        }
    } }, { key: "bringForward", value: function() {
      for (var e = this.w, t = e.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = e.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < t.length; a++)
        i && i.insertBefore(t[a], i.nextSibling);
    } }]), y;
  }(), te = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return Y(y, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(e) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(P.escapeString(e), "']"));
    } }, { key: "isSeriesHidden", value: function(e) {
      var t = this.getSeriesByName(e), i = parseInt(t.getAttribute("data:realIndex"), 10);
      return { isHidden: t.classList.contains("apexcharts-series-collapsed"), realIndex: i };
    } }, { key: "addCollapsedClassToSeries", value: function(e, t) {
      var i = this.w;
      function a(s) {
        for (var r = 0; r < s.length; r++)
          s[r].index === t && e.node.classList.add("apexcharts-series-collapsed");
      }
      a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries);
    } }, { key: "toggleSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      return this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, t.isHidden), t.isHidden;
    } }, { key: "showSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      t.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !0);
    } }, { key: "hideSeries", value: function(e) {
      var t = this.isSeriesHidden(e);
      t.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(t.realIndex, !1);
    } }, { key: "resetSeries", value: function() {
      var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w, s = P.clone(a.globals.initialSeries);
      a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, e && (t && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(e) {
      for (var t = this.w, i = 0; i < e.length; i++)
        t.globals.collapsedSeriesIndices.indexOf(i) > -1 && (e[i].data = []);
      return e;
    } }, { key: "toggleSeriesOnHover", value: function(e, t) {
      var i = this.w;
      t || (t = e.target);
      var a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
      if (e.type === "mousemove") {
        var s = parseInt(t.getAttribute("rel"), 10) - 1, r = null, n = null;
        i.globals.axisCharts || i.config.chart.type === "radialBar" ? i.globals.axisCharts ? (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']")) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path"));
        for (var o = 0; o < a.length; o++)
          a[o].classList.add(this.legendInactiveClass);
        r !== null && (i.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), n !== null && n.classList.remove(this.legendInactiveClass));
      } else if (e.type === "mouseout")
        for (var h = 0; h < a.length; h++)
          a[h].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(e, t) {
      var i = this, a = this.w, s = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r = function(o) {
        for (var h = 0; h < s.length; h++)
          s[h].classList[o](i.legendInactiveClass);
      };
      if (e.type === "mousemove") {
        var n = parseInt(t.getAttribute("rel"), 10) - 1;
        r("add"), function(o) {
          for (var h = 0; h < s.length; h++) {
            var c = parseInt(s[h].getAttribute("val"), 10);
            c >= o.from && c <= o.to && s[h].classList.remove(i.legendInactiveClass);
          }
        }(a.config.plotOptions.heatmap.colorScale.ranges[n]);
      } else
        e.type === "mouseout" && r("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = this.w, a = 0;
      if (i.config.series.length > 1) {
        for (var s = i.config.series.map(function(n, o) {
          return n.data && n.data.length > 0 && i.globals.collapsedSeriesIndices.indexOf(o) === -1 && (!i.globals.comboCharts || t.length === 0 || t.length && t.indexOf(i.config.series[o].type) > -1) ? o : -1;
        }), r = e === "asc" ? 0 : s.length - 1; e === "asc" ? r < s.length : r >= 0; e === "asc" ? r++ : r--)
          if (s[r] !== -1) {
            a = s[r];
            break;
          }
      }
      return a;
    } }, { key: "getBarSeriesIndices", value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map(function(e, t) {
        return e.type === "bar" || e.type === "column" ? t : -1;
      }).filter(function(e) {
        return e !== -1;
      }) : this.w.config.series.map(function(e, t) {
        return t;
      });
    } }, { key: "getPreviousPaths", value: function() {
      var e = this.w;
      function t(r, n, o) {
        for (var h = r[n].childNodes, c = { type: o, paths: [], realIndex: r[n].getAttribute("data:realIndex") }, d = 0; d < h.length; d++)
          if (h[d].hasAttribute("pathTo")) {
            var g = h[d].getAttribute("pathTo");
            c.paths.push({ d: g });
          }
        e.globals.previousPaths.push(c);
      }
      e.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(r) {
        for (var n, o = (n = r, e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n, "-series .apexcharts-series"))), h = 0; h < o.length; h++)
          t(o, h, r);
      }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
      var i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series"));
      if (i.length > 0)
        for (var a = function(r) {
          for (var n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(r, "'] rect")), o = [], h = function(d) {
            var g = function(f) {
              return n[d].getAttribute(f);
            }, p = { x: parseFloat(g("x")), y: parseFloat(g("y")), width: parseFloat(g("width")), height: parseFloat(g("height")) };
            o.push({ rect: p, color: n[d].getAttribute("color") });
          }, c = 0; c < n.length; c++)
            h(c);
          e.globals.previousPaths.push(o);
        }, s = 0; s < i.length; s++)
          a(s);
      e.globals.axisCharts || (e.globals.previousPaths = e.globals.series);
    } }, { key: "handlePrevBubbleScatterPaths", value: function(e) {
      var t = this.w, i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e, "-series .apexcharts-series"));
      if (i.length > 0)
        for (var a = 0; a < i.length; a++) {
          for (var s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(e, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), r = [], n = 0; n < s.length; n++)
            r.push({ x: s[n].getAttribute("cx"), y: s[n].getAttribute("cy"), r: s[n].getAttribute("r") });
          t.globals.previousPaths.push(r);
        }
    } }, { key: "clearPreviousPaths", value: function() {
      var e = this.w;
      e.globals.previousPaths = [], e.globals.allSeriesCollapsed = !1;
    } }, { key: "handleNoData", value: function() {
      var e = this.w, t = e.config.noData, i = new M(this.ctx), a = e.globals.svgWidth / 2, s = e.globals.svgHeight / 2, r = "middle";
      if (e.globals.noData = !0, e.globals.animationEnded = !0, t.align === "left" ? (a = 10, r = "start") : t.align === "right" && (a = e.globals.svgWidth - 10, r = "end"), t.verticalAlign === "top" ? s = 50 : t.verticalAlign === "bottom" && (s = e.globals.svgHeight - 50), a += t.offsetX, s = s + parseInt(t.style.fontSize, 10) + 2 + t.offsetY, t.text !== void 0 && t.text !== "") {
        var n = i.drawText({ x: a, y: s, text: t.text, textAnchor: r, fontSize: t.style.fontSize, fontFamily: t.style.fontFamily, foreColor: t.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        e.globals.dom.Paper.add(n);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(e) {
      for (var t = this.w, i = 0; i < e.length; i++)
        if (e[i].length === 0)
          for (var a = 0; a < e[t.globals.maxValsInArrayIndex].length; a++)
            e[i].push(0);
      return e;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var e = !0, t = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)
        if (i[a][0] !== i[a + 1][0]) {
          e = !1;
          break;
        }
      return t.globals.allSeriesHasEqualX = e, e;
    } }, { key: "filteredSeriesX", value: function() {
      var e = this.w.globals.seriesX.map(function(t) {
        return t.length > 0 ? t : [];
      });
      return e;
    } }]), y;
  }(), Je = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new q(this.ctx);
    }
    return Y(y, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var e = this.w.config.series.slice(), t = new te(this.ctx);
      if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].x !== void 0 && e[this.activeSeriesIndex].data[0] !== null)
        return !0;
    } }, { key: "isFormat2DArray", value: function() {
      var e = this.w.config.series.slice(), t = new te(this.ctx);
      if (this.activeSeriesIndex = t.getActiveConfigSeriesIndex(), e[this.activeSeriesIndex].data !== void 0 && e[this.activeSeriesIndex].data.length > 0 && e[this.activeSeriesIndex].data[0] !== void 0 && e[this.activeSeriesIndex].data[0] !== null && e[this.activeSeriesIndex].data[0].constructor === Array)
        return !0;
    } }, { key: "handleFormat2DArray", value: function(e, t) {
      for (var i = this.w.config, a = this.w.globals, s = i.chart.type === "boxPlot" || i.series[t].type === "boxPlot", r = 0; r < e[t].data.length; r++)
        if (e[t].data[r][1] !== void 0 && (Array.isArray(e[t].data[r][1]) && e[t].data[r][1].length === 4 && !s ? this.twoDSeries.push(P.parseNumber(e[t].data[r][1][3])) : e[t].data[r].length >= 5 ? this.twoDSeries.push(P.parseNumber(e[t].data[r][4])) : this.twoDSeries.push(P.parseNumber(e[t].data[r][1])), a.dataFormatXNumeric = !0), i.xaxis.type === "datetime") {
          var n = new Date(e[t].data[r][0]);
          n = new Date(n).getTime(), this.twoDSeriesX.push(n);
        } else
          this.twoDSeriesX.push(e[t].data[r][0]);
      for (var o = 0; o < e[t].data.length; o++)
        e[t].data[o][2] !== void 0 && (this.threeDSeries.push(e[t].data[o][2]), a.isDataXYZ = !0);
    } }, { key: "handleFormatXY", value: function(e, t) {
      var i = this.w.config, a = this.w.globals, s = new B(this.ctx), r = t;
      a.collapsedSeriesIndices.indexOf(t) > -1 && (r = this.activeSeriesIndex);
      for (var n = 0; n < e[t].data.length; n++)
        e[t].data[n].y !== void 0 && (Array.isArray(e[t].data[n].y) ? this.twoDSeries.push(P.parseNumber(e[t].data[n].y[e[t].data[n].y.length - 1])) : this.twoDSeries.push(P.parseNumber(e[t].data[n].y))), e[t].data[n].goals !== void 0 && Array.isArray(e[t].data[n].goals) ? (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(e[t].data[n].goals)) : (this.seriesGoals[t] === void 0 && (this.seriesGoals[t] = []), this.seriesGoals[t].push(null));
      for (var o = 0; o < e[r].data.length; o++) {
        var h = typeof e[r].data[o].x == "string", c = Array.isArray(e[r].data[o].x), d = !c && !!s.isValidDate(e[r].data[o].x);
        if (h || d)
          if (h || i.xaxis.convertedCatToNumeric) {
            var g = a.isBarHorizontal && a.isRangeData;
            i.xaxis.type !== "datetime" || g ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[o].x), isNaN(e[r].data[o].x) || this.w.config.xaxis.type === "category" || typeof e[r].data[o].x == "string" || (a.isXNumeric = !0)) : this.twoDSeriesX.push(s.parseDate(e[r].data[o].x));
          } else
            i.xaxis.type === "datetime" ? this.twoDSeriesX.push(s.parseDate(e[r].data[o].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(e[r].data[o].x)));
        else
          c ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(e[r].data[o].x)) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(e[r].data[o].x));
      }
      if (e[t].data[0] && e[t].data[0].z !== void 0) {
        for (var p = 0; p < e[t].data.length; p++)
          this.threeDSeries.push(e[t].data[p].z);
        a.isDataXYZ = !0;
      }
    } }, { key: "handleRangeData", value: function(e, t) {
      var i = this.w.globals, a = {};
      return this.isFormat2DArray() ? a = this.handleRangeDataFormat("array", e, t) : this.isFormatXY() && (a = this.handleRangeDataFormat("xy", e, t)), i.seriesRangeStart.push(a.start), i.seriesRangeEnd.push(a.end), i.seriesRange.push(a.rangeUniques), i.seriesRange.forEach(function(s, r) {
        s && s.forEach(function(n, o) {
          n.y.forEach(function(h, c) {
            for (var d = 0; d < n.y.length; d++)
              if (c !== d) {
                var g = h.y1, p = h.y2, f = n.y[d].y1;
                g <= n.y[d].y2 && f <= p && (n.overlaps.indexOf(h.rangeName) < 0 && n.overlaps.push(h.rangeName), n.overlaps.indexOf(n.y[d].rangeName) < 0 && n.overlaps.push(n.y[d].rangeName));
              }
          });
        });
      }), a;
    } }, { key: "handleCandleStickBoxData", value: function(e, t) {
      var i = this.w.globals, a = {};
      return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", e, t) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", e, t)), i.seriesCandleO[t] = a.o, i.seriesCandleH[t] = a.h, i.seriesCandleM[t] = a.m, i.seriesCandleL[t] = a.l, i.seriesCandleC[t] = a.c, a;
    } }, { key: "handleRangeDataFormat", value: function(e, t, i) {
      var a = [], s = [], r = t[i].data.filter(function(c, d, g) {
        return d === g.findIndex(function(p) {
          return p.x === c.x;
        });
      }).map(function(c, d) {
        return { x: c.x, overlaps: [], y: [] };
      });
      if (e === "array")
        for (var n = 0; n < t[i].data.length; n++)
          Array.isArray(t[i].data[n]) ? (a.push(t[i].data[n][1][0]), s.push(t[i].data[n][1][1])) : (a.push(t[i].data[n]), s.push(t[i].data[n]));
      else if (e === "xy")
        for (var o = function(c) {
          var d = Array.isArray(t[i].data[c].y), g = P.randomId(), p = t[i].data[c].x, f = { y1: d ? t[i].data[c].y[0] : t[i].data[c].y, y2: d ? t[i].data[c].y[1] : t[i].data[c].y, rangeName: g };
          t[i].data[c].rangeName = g;
          var b = r.findIndex(function(m) {
            return m.x === p;
          });
          r[b].y.push(f), a.push(f.y1), s.push(f.y2);
        }, h = 0; h < t[i].data.length; h++)
          o(h);
      return { start: a, end: s, rangeUniques: r };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(e, t, i) {
      var a = this.w, s = a.config.chart.type === "boxPlot" || a.config.series[i].type === "boxPlot", r = [], n = [], o = [], h = [], c = [];
      if (e === "array")
        if (s && t[i].data[0].length === 6 || !s && t[i].data[0].length === 5)
          for (var d = 0; d < t[i].data.length; d++)
            r.push(t[i].data[d][1]), n.push(t[i].data[d][2]), s ? (o.push(t[i].data[d][3]), h.push(t[i].data[d][4]), c.push(t[i].data[d][5])) : (h.push(t[i].data[d][3]), c.push(t[i].data[d][4]));
        else
          for (var g = 0; g < t[i].data.length; g++)
            Array.isArray(t[i].data[g][1]) && (r.push(t[i].data[g][1][0]), n.push(t[i].data[g][1][1]), s ? (o.push(t[i].data[g][1][2]), h.push(t[i].data[g][1][3]), c.push(t[i].data[g][1][4])) : (h.push(t[i].data[g][1][2]), c.push(t[i].data[g][1][3])));
      else if (e === "xy")
        for (var p = 0; p < t[i].data.length; p++)
          Array.isArray(t[i].data[p].y) && (r.push(t[i].data[p].y[0]), n.push(t[i].data[p].y[1]), s ? (o.push(t[i].data[p].y[2]), h.push(t[i].data[p].y[3]), c.push(t[i].data[p].y[4])) : (h.push(t[i].data[p].y[2]), c.push(t[i].data[p].y[3])));
      return { o: r, h: n, m: o, l: h, c };
    } }, { key: "parseDataAxisCharts", value: function(e) {
      var t, i = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, s = this.w.config, r = this.w.globals, n = new B(a), o = s.labels.length > 0 ? s.labels.slice() : s.xaxis.categories.slice();
      if (r.isRangeBar = s.chart.type === "rangeBar" && r.isBarHorizontal, r.hasXaxisGroups = s.xaxis.type === "category" && s.xaxis.group.groups.length > 0, r.hasXaxisGroups && (r.groups = s.xaxis.group.groups), r.hasSeriesGroups = (t = e[0]) === null || t === void 0 ? void 0 : t.group, r.hasSeriesGroups) {
        var h = [], c = J(new Set(e.map(function(f) {
          return f.group;
        })));
        e.forEach(function(f, b) {
          var m = c.indexOf(f.group);
          h[m] || (h[m] = []), h[m].push(f.name);
        }), r.seriesGroups = h;
      }
      for (var d = function() {
        for (var f = 0; f < o.length; f++)
          if (typeof o[f] == "string") {
            if (!n.isValidDate(o[f]))
              throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
            i.twoDSeriesX.push(n.parseDate(o[f]));
          } else
            i.twoDSeriesX.push(o[f]);
      }, g = 0; g < e.length; g++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], e[g].data === void 0)
          return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if (s.chart.type !== "rangeBar" && s.chart.type !== "rangeArea" && e[g].type !== "rangeBar" && e[g].type !== "rangeArea" || (r.isRangeData = !0, s.chart.type !== "rangeBar" && s.chart.type !== "rangeArea" || this.handleRangeData(e, g)), this.isMultiFormat())
          this.isFormat2DArray() ? this.handleFormat2DArray(e, g) : this.isFormatXY() && this.handleFormatXY(e, g), s.chart.type !== "candlestick" && e[g].type !== "candlestick" && s.chart.type !== "boxPlot" && e[g].type !== "boxPlot" || this.handleCandleStickBoxData(e, g), r.series.push(this.twoDSeries), r.labels.push(this.twoDSeriesX), r.seriesX.push(this.twoDSeriesX), r.seriesGoals = this.seriesGoals, g !== this.activeSeriesIndex || this.fallbackToCategory || (r.isXNumeric = !0);
        else {
          s.xaxis.type === "datetime" ? (r.isXNumeric = !0, d(), r.seriesX.push(this.twoDSeriesX)) : s.xaxis.type === "numeric" && (r.isXNumeric = !0, o.length > 0 && (this.twoDSeriesX = o, r.seriesX.push(this.twoDSeriesX))), r.labels.push(this.twoDSeriesX);
          var p = e[g].data.map(function(f) {
            return P.parseNumber(f);
          });
          r.series.push(p);
        }
        r.seriesZ.push(this.threeDSeries), e[g].name !== void 0 ? r.seriesNames.push(e[g].name) : r.seriesNames.push("series-" + parseInt(g + 1, 10)), e[g].color !== void 0 ? r.seriesColors.push(e[g].color) : r.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(e) {
      var t = this.w.globals, i = this.w.config;
      t.series = e.slice(), t.seriesNames = i.labels.slice();
      for (var a = 0; a < t.series.length; a++)
        t.seriesNames[a] === void 0 && t.seriesNames.push("series-" + (a + 1));
      return this.w;
    } }, { key: "handleExternalLabelsData", value: function(e) {
      var t = this.w.config, i = this.w.globals;
      t.xaxis.categories.length > 0 ? i.labels = t.xaxis.categories : t.labels.length > 0 ? i.labels = t.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map(function(a) {
        a.forEach(function(s) {
          i.labels.indexOf(s.x) < 0 && s.x && i.labels.push(s.x);
        });
      }), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), t.xaxis.convertedCatToNumeric && (new oe(t).convertCatToNumericXaxis(t, this.ctx, i.seriesX[0]), this._generateExternalLabels(e))) : this._generateExternalLabels(e);
    } }, { key: "_generateExternalLabels", value: function(e) {
      var t = this.w.globals, i = this.w.config, a = [];
      if (t.axisCharts) {
        if (t.series.length > 0)
          if (this.isFormatXY())
            for (var s = i.series.map(function(d, g) {
              return d.data.filter(function(p, f, b) {
                return b.findIndex(function(m) {
                  return m.x === p.x;
                }) === f;
              });
            }), r = s.reduce(function(d, g, p, f) {
              return f[d].length > g.length ? d : p;
            }, 0), n = 0; n < s[r].length; n++)
              a.push(n + 1);
          else
            for (var o = 0; o < t.series[t.maxValsInArrayIndex].length; o++)
              a.push(o + 1);
        t.seriesX = [];
        for (var h = 0; h < e.length; h++)
          t.seriesX.push(a);
        this.w.globals.isBarHorizontal || (t.isXNumeric = !0);
      }
      if (a.length === 0) {
        a = t.axisCharts ? [] : t.series.map(function(d, g) {
          return g + 1;
        });
        for (var c = 0; c < e.length; c++)
          t.seriesX.push(a);
      }
      t.labels = a, i.xaxis.convertedCatToNumeric && (t.categoryLabels = a.map(function(d) {
        return i.xaxis.labels.formatter(d);
      })), t.noLabelsProvided = !0;
    } }, { key: "parseData", value: function(e) {
      var t = this.w, i = t.config, a = t.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? (this.parseDataAxisCharts(e), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(e), i.chart.stacked) {
        var s = new te(this.ctx);
        a.series = s.setNullSeriesToZeroValues(a.series);
      }
      this.coreUtils.getSeriesTotals(), a.axisCharts && (a.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && (i.xaxis.type !== "numeric" || i.labels.length !== 0 || i.xaxis.categories.length !== 0) || this.handleExternalLabelsData(e);
      for (var r = this.coreUtils.getCategoryLabels(a.labels), n = 0; n < r.length; n++)
        if (Array.isArray(r[n])) {
          a.isMultiLineX = !0;
          break;
        }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var e = this, t = this.w;
      t.globals.ignoreYAxisIndexes = t.globals.collapsedSeries.map(function(i, a) {
        if (e.w.globals.isMultipleYAxis && !t.config.chart.stacked)
          return i.index;
      });
    } }]), y;
  }(), xe = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "getLabel", value: function(e, t, i, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", n = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], o = this.w, h = e[a] === void 0 ? "" : e[a], c = h, d = o.globals.xLabelFormatter, g = o.config.xaxis.labels.formatter, p = !1, f = new re(this.ctx), b = h;
      n && (c = f.xLabelFormat(d, h, b, { i: a, dateFormatter: new B(this.ctx).formatDate, w: o }), g !== void 0 && (c = g(h, e[a], { i: a, dateFormatter: new B(this.ctx).formatDate, w: o })));
      var m, w;
      t.length > 0 ? (m = t[a].unit, w = null, t.forEach(function(x) {
        x.unit === "month" ? w = "year" : x.unit === "day" ? w = "month" : x.unit === "hour" ? w = "day" : x.unit === "minute" && (w = "hour");
      }), p = w === m, i = t[a].position, c = t[a].value) : o.config.xaxis.type === "datetime" && g === void 0 && (c = ""), c === void 0 && (c = ""), c = Array.isArray(c) ? c : c.toString();
      var A = new M(this.ctx), l = {};
      l = o.globals.rotateXLabels && n ? A.getTextRects(c, parseInt(r, 10), null, "rotate(".concat(o.config.xaxis.labels.rotate, " 0 0)"), !1) : A.getTextRects(c, parseInt(r, 10));
      var u = !o.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(c) && (c.indexOf("NaN") === 0 || c.toLowerCase().indexOf("invalid") === 0 || c.toLowerCase().indexOf("infinity") >= 0 || s.indexOf(c) >= 0 && u) && (c = ""), { x: i, text: c, textRect: l, isBold: p };
    } }, { key: "checkLabelBasedOnTickamount", value: function(e, t, i) {
      var a = this.w, s = a.config.xaxis.tickAmount;
      return s === "dataPoints" && (s = Math.round(a.globals.gridWidth / 120)), s > i || e % Math.round(i / (s + 1)) == 0 || (t.text = ""), t;
    } }, { key: "checkForOverflowingLabels", value: function(e, t, i, a, s) {
      var r = this.w;
      if (e === 0 && r.globals.skipFirstTimelinelabel && (t.text = ""), e === i - 1 && r.globals.skipLastTimelinelabel && (t.text = ""), r.config.xaxis.labels.hideOverlappingLabels && a.length > 0) {
        var n = s[s.length - 1];
        t.x < n.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + n.x && (t.text = "");
      }
      return t;
    } }, { key: "checkForReversedLabels", value: function(e, t) {
      var i = this.w;
      return i.config.yaxis[e] && i.config.yaxis[e].reversed && t.reverse(), t;
    } }, { key: "isYAxisHidden", value: function(e) {
      var t = this.w, i = new q(this.ctx);
      return !t.config.yaxis[e].show || !t.config.yaxis[e].showForNullSeries && i.isSeriesNull(e) && t.globals.collapsedSeriesIndices.indexOf(e) === -1;
    } }, { key: "getYAxisForeColor", value: function(e, t) {
      var i = this.w;
      return Array.isArray(e) && i.globals.yAxisScale[t] && this.ctx.theme.pushExtraColors(e, i.globals.yAxisScale[t].result.length, !1), e;
    } }, { key: "drawYAxisTicks", value: function(e, t, i, a, s, r, n) {
      var o = this.w, h = new M(this.ctx), c = o.globals.translateY;
      if (a.show && t > 0) {
        o.config.yaxis[s].opposite === !0 && (e += a.width);
        for (var d = t; d >= 0; d--) {
          var g = c + t / 10 + o.config.yaxis[s].labels.offsetY - 1;
          o.globals.isBarHorizontal && (g = r * d), o.config.chart.type === "heatmap" && (g += r / 2);
          var p = h.drawLine(e + i.offsetX - a.width + a.offsetX, g + a.offsetY, e + i.offsetX + a.offsetX, g + a.offsetY, a.color);
          n.add(p), c += r;
        }
      }
    } }]), y;
  }(), Ee = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "scaleSvgNode", value: function(e, t) {
      var i = parseFloat(e.getAttributeNS(null, "width")), a = parseFloat(e.getAttributeNS(null, "height"));
      e.setAttributeNS(null, "width", i * t), e.setAttributeNS(null, "height", a * t), e.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a);
    } }, { key: "fixSvgStringForIe11", value: function(e) {
      if (!P.isIE11())
        return e.replace(/&nbsp;/g, "&#160;");
      var t = 0, i = e.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function(a) {
        return ++t === 2 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : a;
      });
      return i = (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1");
    } }, { key: "getSvgString", value: function(e) {
      e == null && (e = 1);
      var t = this.w.globals.dom.Paper.svg();
      if (e !== 1) {
        var i = this.w.globals.dom.Paper.node.cloneNode(!0);
        this.scaleSvgNode(i, e), t = new XMLSerializer().serializeToString(i);
      }
      return this.fixSvgStringForIe11(t);
    } }, { key: "cleanup", value: function() {
      var e = this.w, t = e.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i = e.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
      Array.prototype.forEach.call(a, function(s) {
        s.setAttribute("width", 0);
      }), t && t[0] && (t[0].setAttribute("x", -500), t[0].setAttribute("x1", -500), t[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100));
    } }, { key: "svgUrl", value: function() {
      this.cleanup();
      var e = this.getSvgString(), t = new Blob([e], { type: "image/svg+xml;charset=utf-8" });
      return URL.createObjectURL(t);
    } }, { key: "dataURI", value: function(e) {
      var t = this;
      return new Promise(function(i) {
        var a = t.w, s = e ? e.scale || e.width / a.globals.svgWidth : 1;
        t.cleanup();
        var r = document.createElement("canvas");
        r.width = a.globals.svgWidth * s, r.height = parseInt(a.globals.dom.elWrap.style.height, 10) * s;
        var n = a.config.chart.background === "transparent" ? "#fff" : a.config.chart.background, o = r.getContext("2d");
        o.fillStyle = n, o.fillRect(0, 0, r.width * s, r.height * s);
        var h = t.getSvgString(s);
        if (window.canvg && P.isIE11()) {
          var c = window.canvg.Canvg.fromString(o, h, { ignoreClear: !0, ignoreDimensions: !0 });
          c.start();
          var d = r.msToBlob();
          c.stop(), i({ blob: d });
        } else {
          var g = "data:image/svg+xml," + encodeURIComponent(h), p = new Image();
          p.crossOrigin = "anonymous", p.onload = function() {
            if (o.drawImage(p, 0, 0), r.msToBlob) {
              var f = r.msToBlob();
              i({ blob: f });
            } else {
              var b = r.toDataURL("image/png");
              i({ imgURI: b });
            }
          }, p.src = g;
        }
      });
    } }, { key: "exportToSVG", value: function() {
      this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
    } }, { key: "exportToPng", value: function() {
      var e = this;
      this.dataURI().then(function(t) {
        var i = t.imgURI, a = t.blob;
        a ? navigator.msSaveOrOpenBlob(a, e.w.globals.chartID + ".png") : e.triggerDownload(i, e.w.config.chart.toolbar.export.png.filename, ".png");
      });
    } }, { key: "exportToCSV", value: function(e) {
      var t = this, i = e.series, a = e.fileName, s = e.columnDelimiter, r = s === void 0 ? "," : s, n = e.lineDelimiter, o = n === void 0 ? `
` : n, h = this.w;
      i || (i = h.config.series);
      var c, d, g = [], p = [], f = "", b = h.globals.series.map(function(v, k) {
        return h.globals.collapsedSeriesIndices.indexOf(k) === -1 ? v : [];
      }), m = function(v) {
        return h.config.xaxis.type === "datetime" && String(v).length >= 10;
      }, w = Math.max.apply(Math, J(i.map(function(v) {
        return v.data ? v.data.length : 0;
      }))), A = new Je(this.ctx), l = new xe(this.ctx), u = function(v) {
        var k = "";
        if (h.globals.axisCharts) {
          if (h.config.xaxis.type === "category" || h.config.xaxis.convertedCatToNumeric)
            if (h.globals.isBarHorizontal) {
              var S = h.globals.yLabelFormatters[0], C = new te(t.ctx).getActiveConfigSeriesIndex();
              k = S(h.globals.labels[v], { seriesIndex: C, dataPointIndex: v, w: h });
            } else
              k = l.getLabel(h.globals.labels, h.globals.timescaleLabels, 0, v).text;
          h.config.xaxis.type === "datetime" && (h.config.xaxis.categories.length ? k = h.config.xaxis.categories[v] : h.config.labels.length && (k = h.config.labels[v]));
        } else
          k = h.config.labels[v];
        return Array.isArray(k) && (k = k.join(" ")), P.isNumber(k) ? k : k.split(r).join("");
      }, x = function(v, k) {
        if (g.length && k === 0 && p.push(g.join(r)), v.data) {
          v.data = v.data.length && v.data || J(Array(w)).map(function() {
            return "";
          });
          for (var S = 0; S < v.data.length; S++) {
            g = [];
            var C = u(S);
            if (C || (A.isFormatXY() ? C = i[k].data[S].x : A.isFormat2DArray() && (C = i[k].data[S] ? i[k].data[S][0] : "")), k === 0) {
              g.push(m(C) ? h.config.chart.toolbar.export.csv.dateFormatter(C) : P.isNumber(C) ? C : C.split(r).join(""));
              for (var L = 0; L < h.globals.series.length; L++) {
                var I;
                A.isFormatXY() ? g.push((I = i[L].data[S]) === null || I === void 0 ? void 0 : I.y) : g.push(b[L][S]);
              }
            }
            (h.config.chart.type === "candlestick" || v.type && v.type === "candlestick") && (g.pop(), g.push(h.globals.seriesCandleO[k][S]), g.push(h.globals.seriesCandleH[k][S]), g.push(h.globals.seriesCandleL[k][S]), g.push(h.globals.seriesCandleC[k][S])), (h.config.chart.type === "boxPlot" || v.type && v.type === "boxPlot") && (g.pop(), g.push(h.globals.seriesCandleO[k][S]), g.push(h.globals.seriesCandleH[k][S]), g.push(h.globals.seriesCandleM[k][S]), g.push(h.globals.seriesCandleL[k][S]), g.push(h.globals.seriesCandleC[k][S])), h.config.chart.type === "rangeBar" && (g.pop(), g.push(h.globals.seriesRangeStart[k][S]), g.push(h.globals.seriesRangeEnd[k][S])), g.length && p.push(g.join(r));
          }
        }
      };
      g.push(h.config.chart.toolbar.export.csv.headerCategory), h.config.chart.type === "boxPlot" ? (g.push("minimum"), g.push("q1"), g.push("median"), g.push("q3"), g.push("maximum")) : h.config.chart.type === "candlestick" ? (g.push("open"), g.push("high"), g.push("low"), g.push("close")) : h.config.chart.type === "rangeBar" ? (g.push("minimum"), g.push("maximum")) : i.map(function(v, k) {
        var S = (v.name ? v.name : "series-".concat(k)) + "";
        h.globals.axisCharts && g.push(S.split(r).join("") ? S.split(r).join("") : "series-".concat(k));
      }), h.globals.axisCharts || (g.push(h.config.chart.toolbar.export.csv.headerValue), p.push(g.join(r))), h.globals.allSeriesHasEqualX || !h.globals.axisCharts || h.config.xaxis.categories.length || h.config.labels.length ? i.map(function(v, k) {
        h.globals.axisCharts ? x(v, k) : ((g = []).push(h.globals.labels[k].split(r).join("")), g.push(b[k]), p.push(g.join(r)));
      }) : (c = /* @__PURE__ */ new Set(), d = {}, i.forEach(function(v, k) {
        v == null || v.data.forEach(function(S) {
          var C, L;
          if (A.isFormatXY())
            C = S.x, L = S.y;
          else {
            if (!A.isFormat2DArray())
              return;
            C = S[0], L = S[1];
          }
          d[C] || (d[C] = Array(i.length).fill("")), d[C][k] = L, c.add(C);
        });
      }), g.length && p.push(g.join(r)), Array.from(c).sort().forEach(function(v) {
        p.push([m(v) && h.config.xaxis.type === "datetime" ? h.config.chart.toolbar.export.csv.dateFormatter(v) : P.isNumber(v) ? v : v.split(r).join(""), d[v].join(r)]);
      })), f += p.join(o), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + f), a || h.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(e, t, i) {
      var a = document.createElement("a");
      a.href = e, a.download = (t || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
    } }]), y;
  }(), Ie = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.elgrid = t, this.w = e.w;
      var i = this.w;
      this.axesUtils = new xe(e), this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories && (this.xaxisLabels = i.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], i.config.xaxis.position === "top" ? this.offY = 0 : this.offY = i.globals.gridHeight + 1, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0];
    }
    return Y(y, [{ key: "drawXaxis", value: function() {
      var e = this.w, t = new M(this.ctx), i = t.group({ class: "apexcharts-xaxis", transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")") }), a = t.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
      i.add(a);
      for (var s = [], r = 0; r < this.xaxisLabels.length; r++)
        s.push(this.xaxisLabels[r]);
      if (this.drawXAxisLabelAndGroup(!0, t, a, s, e.globals.isXNumeric, function(f, b) {
        return b;
      }), e.globals.hasXaxisGroups) {
        var n = e.globals.groups;
        s = [];
        for (var o = 0; o < n.length; o++)
          s.push(n[o].title);
        var h = {};
        e.config.xaxis.group.style && (h.xaxisFontSize = e.config.xaxis.group.style.fontSize, h.xaxisFontFamily = e.config.xaxis.group.style.fontFamily, h.xaxisForeColors = e.config.xaxis.group.style.colors, h.fontWeight = e.config.xaxis.group.style.fontWeight, h.cssClass = e.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, t, a, s, !1, function(f, b) {
          return n[f].cols * b;
        }, h);
      }
      if (e.config.xaxis.title.text !== void 0) {
        var c = t.group({ class: "apexcharts-xaxis-title" }), d = t.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (e.config.xaxis.position === "bottom" ? e.globals.xAxisLabelsHeight : -e.globals.xAxisLabelsHeight - 10) + e.config.xaxis.title.offsetY, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
        c.add(d), i.add(c);
      }
      if (e.config.xaxis.axisBorder.show) {
        var g = e.globals.barPadForNumericAxis, p = t.drawLine(e.globals.padHorizontal + e.config.xaxis.axisBorder.offsetX - g, this.offY, this.xaxisBorderWidth + g, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(p) : i.add(p);
      }
      return i;
    } }, { key: "drawXAxisLabelAndGroup", value: function(e, t, i, a, s, r) {
      var n, o = this, h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, c = [], d = [], g = this.w, p = h.xaxisFontSize || this.xaxisFontSize, f = h.xaxisFontFamily || this.xaxisFontFamily, b = h.xaxisForeColors || this.xaxisForeColors, m = h.fontWeight || g.config.xaxis.labels.style.fontWeight, w = h.cssClass || g.config.xaxis.labels.style.cssClass, A = g.globals.padHorizontal, l = a.length, u = g.config.xaxis.type === "category" ? g.globals.dataPoints : l;
      if (u === 0 && l > u && (u = l), s) {
        var x = u > 1 ? u - 1 : u;
        n = g.globals.gridWidth / Math.min(x, l - 1), A = A + r(0, n) / 2 + g.config.xaxis.labels.offsetX;
      } else
        n = g.globals.gridWidth / u, A = A + r(0, n) + g.config.xaxis.labels.offsetX;
      for (var v = function(S) {
        var C = A - r(S, n) / 2 + g.config.xaxis.labels.offsetX;
        S === 0 && l === 1 && n / 2 === A && u === 1 && (C = g.globals.gridWidth / 2);
        var L = o.axesUtils.getLabel(a, g.globals.timescaleLabels, C, S, c, p, e), I = 28;
        if (g.globals.rotateXLabels && e && (I = 22), g.config.xaxis.title.text && g.config.xaxis.position === "top" && (I += parseFloat(g.config.xaxis.title.style.fontSize) + 2), e || (I = I + parseFloat(p) + (g.globals.xAxisLabelsHeight - g.globals.xAxisGroupLabelsHeight) + (g.globals.rotateXLabels ? 10 : 0)), L = g.config.xaxis.tickAmount !== void 0 && g.config.xaxis.tickAmount !== "dataPoints" && g.config.xaxis.type !== "datetime" ? o.axesUtils.checkLabelBasedOnTickamount(S, L, l) : o.axesUtils.checkForOverflowingLabels(S, L, l, c, d), g.config.xaxis.labels.show) {
          var z = t.drawText({ x: L.x, y: o.offY + g.config.xaxis.labels.offsetY + I - (g.config.xaxis.position === "top" ? g.globals.xAxisHeight + g.config.xaxis.axisTicks.height - 2 : 0), text: L.text, textAnchor: "middle", fontWeight: L.isBold ? 600 : m, fontSize: p, fontFamily: f, foreColor: Array.isArray(b) ? e && g.config.xaxis.convertedCatToNumeric ? b[g.globals.minX + S - 1] : b[S] : b, isPlainText: !1, cssClass: (e ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + w });
          if (i.add(z), z.on("click", function(E) {
            if (typeof g.config.chart.events.xAxisLabelClick == "function") {
              var R = Object.assign({}, g, { labelIndex: S });
              g.config.chart.events.xAxisLabelClick(E, o.ctx, R);
            }
          }), e) {
            var T = document.createElementNS(g.globals.SVGNS, "title");
            T.textContent = Array.isArray(L.text) ? L.text.join(" ") : L.text, z.node.appendChild(T), L.text !== "" && (c.push(L.text), d.push(L));
          }
        }
        S < l - 1 && (A += r(S + 1, n));
      }, k = 0; k <= l - 1; k++)
        v(k);
    } }, { key: "drawXaxisInversed", value: function(e) {
      var t, i, a = this, s = this.w, r = new M(this.ctx), n = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[e] : 0, o = r.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: e }), h = r.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + n + ", 0)" });
      o.add(h);
      var c = [];
      if (s.config.yaxis[e].show)
        for (var d = 0; d < this.xaxisLabels.length; d++)
          c.push(this.xaxisLabels[d]);
      t = s.globals.gridHeight / c.length, i = -t / 2.2;
      var g = s.globals.yLabelFormatters[0], p = s.config.yaxis[0].labels;
      if (p.show)
        for (var f = function(x) {
          var v = c[x] === void 0 ? "" : c[x];
          v = g(v, { seriesIndex: e, dataPointIndex: x, w: s });
          var k = a.axesUtils.getYAxisForeColor(p.style.colors, e), S = 0;
          Array.isArray(v) && (S = v.length / 2 * parseInt(p.style.fontSize, 10));
          var C = p.offsetX - 15, L = "end";
          a.yaxis.opposite && (L = "start"), s.config.yaxis[0].labels.align === "left" ? (C = p.offsetX, L = "start") : s.config.yaxis[0].labels.align === "center" ? (C = p.offsetX, L = "middle") : s.config.yaxis[0].labels.align === "right" && (L = "end");
          var I = r.drawText({ x: C, y: i + t + p.offsetY - S, text: v, textAnchor: L, foreColor: Array.isArray(k) ? k[x] : k, fontSize: p.style.fontSize, fontFamily: p.style.fontFamily, fontWeight: p.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + p.style.cssClass, maxWidth: p.maxWidth });
          h.add(I), I.on("click", function(E) {
            if (typeof s.config.chart.events.xAxisLabelClick == "function") {
              var R = Object.assign({}, s, { labelIndex: x });
              s.config.chart.events.xAxisLabelClick(E, a.ctx, R);
            }
          });
          var z = document.createElementNS(s.globals.SVGNS, "title");
          if (z.textContent = Array.isArray(v) ? v.join(" ") : v, I.node.appendChild(z), s.config.yaxis[e].labels.rotate !== 0) {
            var T = r.rotateAroundCenter(I.node);
            I.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[e].labels.rotate, " 0 ").concat(T.y, ")"));
          }
          i += t;
        }, b = 0; b <= c.length - 1; b++)
          f(b);
      if (s.config.yaxis[0].title.text !== void 0) {
        var m = r.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + n + ", 0)" }), w = r.drawText({ x: s.config.yaxis[0].title.offsetX, y: s.globals.gridHeight / 2 + s.config.yaxis[0].title.offsetY, text: s.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s.config.yaxis[0].title.style.color, fontSize: s.config.yaxis[0].title.style.fontSize, fontWeight: s.config.yaxis[0].title.style.fontWeight, fontFamily: s.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass });
        m.add(w), o.add(m);
      }
      var A = 0;
      this.isCategoryBarHorizontal && s.config.yaxis[0].opposite && (A = s.globals.gridWidth);
      var l = s.config.xaxis.axisBorder;
      if (l.show) {
        var u = r.drawLine(s.globals.padHorizontal + l.offsetX + A, 1 + l.offsetY, s.globals.padHorizontal + l.offsetX + A, s.globals.gridHeight + l.offsetY, l.color, 0);
        this.elgrid && this.elgrid.elGridBorders && s.config.grid.show ? this.elgrid.elGridBorders.add(u) : o.add(u);
      }
      return s.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(A, c.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, t, o), o;
    } }, { key: "drawXaxisTicks", value: function(e, t, i) {
      var a = this.w, s = e;
      if (!(e < 0 || e - 2 > a.globals.gridWidth)) {
        var r = this.offY + a.config.xaxis.axisTicks.offsetY;
        if (t = t + r + a.config.xaxis.axisTicks.height, a.config.xaxis.position === "top" && (t = r - a.config.xaxis.axisTicks.height), a.config.xaxis.axisTicks.show) {
          var n = new M(this.ctx).drawLine(e + a.config.xaxis.axisTicks.offsetX, r + a.config.xaxis.offsetY, s + a.config.xaxis.axisTicks.offsetX, t + a.config.xaxis.offsetY, a.config.xaxis.axisTicks.color);
          i.add(n), n.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var e = this.w, t = [], i = this.xaxisLabels.length, a = e.globals.padHorizontal;
      if (e.globals.timescaleLabels.length > 0)
        for (var s = 0; s < i; s++)
          a = this.xaxisLabels[s].position, t.push(a);
      else
        for (var r = i, n = 0; n < r; n++) {
          var o = r;
          e.globals.isXNumeric && e.config.chart.type !== "bar" && (o -= 1), a += e.globals.gridWidth / o, t.push(a);
        }
      return t;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var e = this.w, t = new M(this.ctx), i = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (e.globals.rotateXLabels || e.config.xaxis.labels.rotateAlways)
        for (var n = 0; n < a.length; n++) {
          var o = t.rotateAroundCenter(a[n]);
          o.y = o.y - 1, o.x = o.x + 1, a[n].setAttribute("transform", "rotate(".concat(e.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), a[n].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
          var h = a[n].childNodes;
          e.config.xaxis.labels.trim && Array.prototype.forEach.call(h, function(p) {
            t.placeTextWithEllipsis(p, p.textContent, e.globals.xAxisLabelsHeight - (e.config.legend.position === "bottom" ? 20 : 10));
          });
        }
      else
        (function() {
          for (var p = e.globals.gridWidth / (e.globals.labels.length + 1), f = 0; f < a.length; f++) {
            var b = a[f].childNodes;
            e.config.xaxis.labels.trim && e.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(b, function(m) {
              t.placeTextWithEllipsis(m, m.textContent, p);
            });
          }
        })();
      if (s.length > 0) {
        var c = s[s.length - 1].getBBox(), d = s[0].getBBox();
        c.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), d.x + d.width > e.globals.gridWidth && !e.globals.isBarHorizontal && s[0].parentNode.removeChild(s[0]);
        for (var g = 0; g < r.length; g++)
          t.placeTextWithEllipsis(r[g], r[g].textContent, e.config.yaxis[0].labels.maxWidth - (e.config.yaxis[0].title.text ? 2 * parseFloat(e.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), y;
  }(), Qe = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.xaxisLabels = t.globals.labels.slice(), this.axesUtils = new xe(e), this.isRangeBar = t.globals.seriesRange.length && t.globals.isBarHorizontal, t.globals.timescaleLabels.length > 0 && (this.xaxisLabels = t.globals.timescaleLabels.slice());
    }
    return Y(y, [{ key: "drawGridArea", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, t = this.w, i = new M(this.ctx);
      e === null && (e = i.group({ class: "apexcharts-grid" }));
      var a = i.drawLine(t.globals.padHorizontal, 1, t.globals.padHorizontal, t.globals.gridHeight, "transparent"), s = i.drawLine(t.globals.padHorizontal, t.globals.gridHeight, t.globals.gridWidth, t.globals.gridHeight, "transparent");
      return e.add(s), e.add(a), e;
    } }, { key: "drawGrid", value: function() {
      var e = null;
      return this.w.globals.axisCharts && (e = this.renderGrid(), this.drawGridArea(e.el)), e;
    } }, { key: "createGridMask", value: function() {
      var e = this.w, t = e.globals, i = new M(this.ctx), a = Array.isArray(e.config.stroke.width) ? 0 : e.config.stroke.width;
      if (Array.isArray(e.config.stroke.width)) {
        var s = 0;
        e.config.stroke.width.forEach(function(d) {
          s = Math.max(s, d);
        }), a = s;
      }
      t.dom.elGridRectMask = document.createElementNS(t.SVGNS, "clipPath"), t.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(t.cuid)), t.dom.elGridRectMarkerMask = document.createElementNS(t.SVGNS, "clipPath"), t.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(t.cuid)), t.dom.elForecastMask = document.createElementNS(t.SVGNS, "clipPath"), t.dom.elForecastMask.setAttribute("id", "forecastMask".concat(t.cuid)), t.dom.elNonForecastMask = document.createElementNS(t.SVGNS, "clipPath"), t.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(t.cuid));
      var r = e.config.chart.type, n = 0, o = 0;
      (r === "bar" || r === "rangeBar" || r === "candlestick" || r === "boxPlot" || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && (n = e.config.grid.padding.left, o = e.config.grid.padding.right, t.barPadForNumericAxis > n && (n = t.barPadForNumericAxis, o = t.barPadForNumericAxis)), t.dom.elGridRect = i.drawRect(-a - n - 2, 2 * -a - 2, t.gridWidth + a + o + n + 4, t.gridHeight + 4 * a + 4, 0, "#fff");
      var h = e.globals.markers.largestSize + 1;
      t.dom.elGridRectMarker = i.drawRect(2 * -h, 2 * -h, t.gridWidth + 4 * h, t.gridHeight + 4 * h, 0, "#fff"), t.dom.elGridRectMask.appendChild(t.dom.elGridRect.node), t.dom.elGridRectMarkerMask.appendChild(t.dom.elGridRectMarker.node);
      var c = t.dom.baseEl.querySelector("defs");
      c.appendChild(t.dom.elGridRectMask), c.appendChild(t.dom.elForecastMask), c.appendChild(t.dom.elNonForecastMask), c.appendChild(t.dom.elGridRectMarkerMask);
    } }, { key: "_drawGridLines", value: function(e) {
      var t = e.i, i = e.x1, a = e.y1, s = e.x2, r = e.y2, n = e.xCount, o = e.parent, h = this.w;
      if (!(t === 0 && h.globals.skipFirstTimelinelabel || t === n - 1 && h.globals.skipLastTimelinelabel && !h.config.xaxis.labels.formatter || h.config.chart.type === "radar")) {
        h.config.grid.xaxis.lines.show && this._drawGridLine({ i: t, x1: i, y1: a, x2: s, y2: r, xCount: n, parent: o });
        var c = 0;
        if (h.globals.hasXaxisGroups && h.config.xaxis.tickPlacement === "between") {
          var d = h.globals.groups;
          if (d) {
            for (var g = 0, p = 0; g < t && p < d.length; p++)
              g += d[p].cols;
            g === t && (c = 0.6 * h.globals.xAxisLabelsHeight);
          }
        }
        new Ie(this.ctx).drawXaxisTicks(i, c, h.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(e) {
      var t = e.i, i = e.x1, a = e.y1, s = e.x2, r = e.y2, n = e.xCount, o = e.parent, h = this.w, c = !1, d = o.node.classList.contains("apexcharts-gridlines-horizontal"), g = h.config.grid.strokeDashArray, p = h.globals.barPadForNumericAxis;
      (a === 0 && r === 0 || i === 0 && s === 0) && (c = !0), a === h.globals.gridHeight && r === h.globals.gridHeight && (c = !0), !h.globals.isBarHorizontal || t !== 0 && t !== n - 1 || (c = !0);
      var f = new M(this).drawLine(i - (d ? p : 0), a, s + (d ? p : 0), r, h.config.grid.borderColor, g);
      f.node.classList.add("apexcharts-gridline"), c && h.config.grid.show ? this.elGridBorders.add(f) : o.add(f);
    } }, { key: "_drawGridBandRect", value: function(e) {
      var t = e.c, i = e.x1, a = e.y1, s = e.x2, r = e.y2, n = e.type, o = this.w, h = new M(this.ctx), c = o.globals.barPadForNumericAxis;
      if (n !== "column" || o.config.xaxis.type !== "datetime") {
        var d = o.config.grid[n].colors[t], g = h.drawRect(i - (n === "row" ? c : 0), a, s + (n === "row" ? 2 * c : 0), r, 0, d, o.config.grid[n].opacity);
        this.elg.add(g), g.attr("clip-path", "url(#gridRectMask".concat(o.globals.cuid, ")")), g.node.classList.add("apexcharts-grid-".concat(n));
      }
    } }, { key: "_drawXYLines", value: function(e) {
      var t = this, i = e.xCount, a = e.tickAmount, s = this.w;
      if (s.config.grid.xaxis.lines.show || s.config.xaxis.axisTicks.show) {
        var r, n = s.globals.padHorizontal, o = s.globals.gridHeight;
        s.globals.timescaleLabels.length ? function(f) {
          for (var b = f.xC, m = f.x1, w = f.y1, A = f.x2, l = f.y2, u = 0; u < b; u++)
            m = t.xaxisLabels[u].position, A = t.xaxisLabels[u].position, t._drawGridLines({ i: u, x1: m, y1: w, x2: A, y2: l, xCount: i, parent: t.elgridLinesV });
        }({ xC: i, x1: n, y1: 0, x2: r, y2: o }) : (s.globals.isXNumeric && (i = s.globals.xAxisScale.result.length), function(f) {
          for (var b = f.xC, m = f.x1, w = f.y1, A = f.x2, l = f.y2, u = 0; u < b + (s.globals.isXNumeric ? 0 : 1); u++)
            u === 0 && b === 1 && s.globals.dataPoints === 1 && (A = m = s.globals.gridWidth / 2), t._drawGridLines({ i: u, x1: m, y1: w, x2: A, y2: l, xCount: i, parent: t.elgridLinesV }), A = m += s.globals.gridWidth / (s.globals.isXNumeric ? b - 1 : b);
        }({ xC: i, x1: n, y1: 0, x2: r, y2: o }));
      }
      if (s.config.grid.yaxis.lines.show) {
        var h = 0, c = 0, d = s.globals.gridWidth, g = a + 1;
        this.isRangeBar && (g = s.globals.labels.length);
        for (var p = 0; p < g + (this.isRangeBar ? 1 : 0); p++)
          this._drawGridLine({ i: p, xCount: g + (this.isRangeBar ? 1 : 0), x1: 0, y1: h, x2: d, y2: c, parent: this.elgridLinesH }), c = h += s.globals.gridHeight / (this.isRangeBar ? g : a);
      }
    } }, { key: "_drawInvertedXYLines", value: function(e) {
      var t = e.xCount, i = this.w;
      if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
        for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, n = 0; n < t + 1; n++)
          i.config.grid.xaxis.lines.show && this._drawGridLine({ i: n, xCount: t + 1, x1: s, y1: 0, x2: a, y2: r, parent: this.elgridLinesV }), new Ie(this.ctx).drawXaxisTicks(s, 0, i.globals.dom.elGraphical), a = s = s + i.globals.gridWidth / t + 0.3;
      if (i.config.grid.yaxis.lines.show)
        for (var o = 0, h = 0, c = i.globals.gridWidth, d = 0; d < i.globals.dataPoints + 1; d++)
          this._drawGridLine({ i: d, xCount: i.globals.dataPoints + 1, x1: 0, y1: o, x2: c, y2: h, parent: this.elgridLinesH }), h = o += i.globals.gridHeight / i.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var e = this.w, t = new M(this.ctx);
      this.elg = t.group({ class: "apexcharts-grid" }), this.elgridLinesH = t.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = t.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = t.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), e.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var i, a = e.globals.yAxisScale.length ? e.globals.yAxisScale[0].result.length - 1 : 5, s = 0; s < e.globals.series.length && (e.globals.yAxisScale[s] !== void 0 && (a = e.globals.yAxisScale[s].result.length - 1), !(a > 2)); s++)
        ;
      if (!e.globals.isBarHorizontal || this.isRangeBar) {
        var r, n, o;
        i = this.xaxisLabels.length, this.isRangeBar && (i--, a = e.globals.labels.length, e.config.xaxis.tickAmount && e.config.xaxis.labels.formatter && (i = e.config.xaxis.tickAmount), ((r = e.globals.yAxisScale) === null || r === void 0 || (n = r[0]) === null || n === void 0 || (o = n.result) === null || o === void 0 ? void 0 : o.length) > 0 && e.config.xaxis.type !== "datetime" && (i = e.globals.yAxisScale[0].result.length - 1)), this._drawXYLines({ xCount: i, tickAmount: a });
      } else
        i = a, a = e.globals.xTickAmount, this._drawInvertedXYLines({ xCount: i, tickAmount: a });
      return this.drawGridBands(i, a), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: e.globals.gridWidth / i };
    } }, { key: "drawGridBands", value: function(e, t) {
      var i = this.w;
      if (i.config.grid.row.colors !== void 0 && i.config.grid.row.colors.length > 0)
        for (var a = 0, s = i.globals.gridHeight / t, r = i.globals.gridWidth, n = 0, o = 0; n < t; n++, o++)
          o >= i.config.grid.row.colors.length && (o = 0), this._drawGridBandRect({ c: o, x1: 0, y1: a, x2: r, y2: s, type: "row" }), a += i.globals.gridHeight / t;
      if (i.config.grid.column.colors !== void 0 && i.config.grid.column.colors.length > 0)
        for (var h = i.globals.isBarHorizontal || i.config.xaxis.tickPlacement !== "on" || i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric ? e : e - 1, c = i.globals.padHorizontal, d = i.globals.padHorizontal + i.globals.gridWidth / h, g = i.globals.gridHeight, p = 0, f = 0; p < e; p++, f++)
          f >= i.config.grid.column.colors.length && (f = 0), this._drawGridBandRect({ c: f, x1: c, y1: 0, x2: d, y2: g, type: "column" }), c += i.globals.gridWidth / h;
    } }]), y;
  }(), we = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "niceScale", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 ? arguments[4] : void 0, r = this.w, n = Math.abs(t - e);
      if ((i = this._adjustTicksForSmallRange(i, a, n)) === "dataPoints" && (i = r.globals.dataPoints - 1), e === Number.MIN_VALUE && t === 0 || !P.isNumber(e) && !P.isNumber(t) || e === Number.MIN_VALUE && t === -Number.MAX_VALUE)
        return e = 0, t = i, this.linearScale(e, t, i, a, r.config.yaxis[a].stepSize);
      e > t ? (console.warn("axis.min cannot be greater than axis.max"), t = e + 0.1) : e === t && (e = e === 0 ? 0 : e - 0.5, t = t === 0 ? 2 : t + 0.5);
      var o = [];
      n < 1 && s && (r.config.chart.type === "candlestick" || r.config.series[a].type === "candlestick" || r.config.chart.type === "boxPlot" || r.config.series[a].type === "boxPlot" || r.globals.isRangeData) && (t *= 1.01);
      var h = i + 1;
      h < 2 ? h = 2 : h > 2 && (h -= 2);
      var c = n / h, d = Math.floor(P.log10(c)), g = Math.pow(10, d), p = Math.round(c / g);
      p < 1 && (p = 1);
      var f = p * g;
      r.config.yaxis[a].stepSize && (f = r.config.yaxis[a].stepSize), r.globals.isBarHorizontal && r.config.xaxis.stepSize && r.config.xaxis.type !== "datetime" && (f = r.config.xaxis.stepSize);
      var b = f * Math.floor(e / f), m = f * Math.ceil(t / f), w = b;
      if (s && n > 2) {
        for (; o.push(P.stripNumber(w, 7)), !((w += f) > m); )
          ;
        return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
      }
      var A = e;
      (o = []).push(P.stripNumber(A, 7));
      for (var l = Math.abs(t - e) / i, u = 0; u <= i; u++)
        A += l, o.push(A);
      return o[o.length - 2] >= t && o.pop(), { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
    } }, { key: "linearScale", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r = Math.abs(t - e);
      (i = this._adjustTicksForSmallRange(i, a, r)) === "dataPoints" && (i = this.w.globals.dataPoints - 1), s || (s = r / i), i === Number.MAX_VALUE && (i = 5, s = 1);
      for (var n = [], o = e; i >= 0; )
        n.push(o), o += s, i -= 1;
      return { result: n, niceMin: n[0], niceMax: n[n.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(e, t, i) {
      t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
      for (var a = [], s = Math.ceil(Math.log(t) / Math.log(i) + 1), r = Math.floor(Math.log(e) / Math.log(i)); r < s; r++)
        a.push(Math.pow(i, r));
      return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
    } }, { key: "logarithmicScale", value: function(e, t, i) {
      t <= 0 && (t = Math.max(e, i)), e <= 0 && (e = Math.min(t, i));
      for (var a = [], s = Math.log(t) / Math.log(i), r = Math.log(e) / Math.log(i), n = s - r, o = Math.round(n), h = n / o, c = 0, d = r; c < o; c++, d += h)
        a.push(Math.pow(i, d));
      return a.push(Math.pow(i, s)), { result: a, niceMin: e, niceMax: t };
    } }, { key: "_adjustTicksForSmallRange", value: function(e, t, i) {
      var a = e;
      if (t !== void 0 && this.w.config.yaxis[t].labels.formatter && this.w.config.yaxis[t].tickAmount === void 0) {
        var s = Number(this.w.config.yaxis[t].labels.formatter(1));
        P.isNumber(s) && this.w.globals.yValueDecimal === 0 && (a = Math.ceil(i));
      }
      return a < e ? a : e;
    } }, { key: "setYScaleForIndex", value: function(e, t, i) {
      var a = this.w.globals, s = this.w.config, r = a.isBarHorizontal ? s.xaxis : s.yaxis[e];
      a.yAxisScale[e] === void 0 && (a.yAxisScale[e] = []);
      var n = Math.abs(i - t);
      if (r.logarithmic && n <= 5 && (a.invalidLogScale = !0), r.logarithmic && n > 5)
        a.allSeriesCollapsed = !1, a.yAxisScale[e] = this.logarithmicScale(t, i, r.logBase), a.yAxisScale[e] = r.forceNiceScale ? this.logarithmicScaleNice(t, i, r.logBase) : this.logarithmicScale(t, i, r.logBase);
      else if (i !== -Number.MAX_VALUE && P.isNumber(i))
        if (a.allSeriesCollapsed = !1, r.min === void 0 && r.max === void 0 || r.forceNiceScale) {
          var o = s.yaxis[e].max === void 0 && s.yaxis[e].min === void 0 || s.yaxis[e].forceNiceScale;
          a.yAxisScale[e] = this.niceScale(t, i, r.tickAmount ? r.tickAmount : n < 5 && n > 1 ? n + 1 : 5, e, o);
        } else
          a.yAxisScale[e] = this.linearScale(t, i, r.tickAmount, e, s.yaxis[e].stepSize);
      else
        a.yAxisScale[e] = this.linearScale(0, 5, 5, e, s.yaxis[e].stepSize);
    } }, { key: "setXScale", value: function(e, t) {
      var i = this.w, a = i.globals, s = Math.abs(t - e);
      return t !== -Number.MAX_VALUE && P.isNumber(t) ? a.xAxisScale = this.linearScale(e, t, i.config.xaxis.tickAmount ? i.config.xaxis.tickAmount : s < 5 && s > 1 ? s + 1 : 5, 0, i.config.xaxis.stepSize) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale;
    } }, { key: "setMultipleYScales", value: function() {
      var e = this, t = this.w.globals, i = this.w.config, a = t.minYArr.concat([]), s = t.maxYArr.concat([]), r = [];
      i.yaxis.forEach(function(n, o) {
        var h = o;
        i.series.forEach(function(g, p) {
          g.name === n.seriesName && (h = p, o !== p ? r.push({ index: p, similarIndex: o, alreadyExists: !0 }) : r.push({ index: p }));
        });
        var c = a[h], d = s[h];
        e.setYScaleForIndex(o, c, d);
      }), this.sameScaleInMultipleAxes(a, s, r);
    } }, { key: "sameScaleInMultipleAxes", value: function(e, t, i) {
      var a = this, s = this.w.config, r = this.w.globals, n = [];
      i.forEach(function(b) {
        b.alreadyExists && (n[b.index] === void 0 && (n[b.index] = []), n[b.index].push(b.index), n[b.index].push(b.similarIndex));
      }), r.yAxisSameScaleIndices = n, n.forEach(function(b, m) {
        n.forEach(function(w, A) {
          var l, u;
          m !== A && (l = b, u = w, l.filter(function(x) {
            return u.indexOf(x) !== -1;
          })).length > 0 && (n[m] = n[m].concat(n[A]));
        });
      });
      var o = n.map(function(b) {
        return b.filter(function(m, w) {
          return b.indexOf(m) === w;
        });
      }).map(function(b) {
        return b.sort();
      });
      n = n.filter(function(b) {
        return !!b;
      });
      var h = o.slice(), c = h.map(function(b) {
        return JSON.stringify(b);
      });
      h = h.filter(function(b, m) {
        return c.indexOf(JSON.stringify(b)) === m;
      });
      var d = [], g = [];
      e.forEach(function(b, m) {
        h.forEach(function(w, A) {
          w.indexOf(m) > -1 && (d[A] === void 0 && (d[A] = [], g[A] = []), d[A].push({ key: m, value: b }), g[A].push({ key: m, value: t[m] }));
        });
      });
      var p = Array.apply(null, Array(h.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), f = Array.apply(null, Array(h.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
      d.forEach(function(b, m) {
        b.forEach(function(w, A) {
          p[m] = Math.min(w.value, p[m]);
        });
      }), g.forEach(function(b, m) {
        b.forEach(function(w, A) {
          f[m] = Math.max(w.value, f[m]);
        });
      }), e.forEach(function(b, m) {
        g.forEach(function(w, A) {
          var l = p[A], u = f[A];
          s.chart.stacked && (u = 0, w.forEach(function(x, v) {
            x.value !== -Number.MAX_VALUE && (u += x.value), l !== Number.MIN_VALUE && (l += d[A][v].value);
          })), w.forEach(function(x, v) {
            w[v].key === m && (s.yaxis[m].min !== void 0 && (l = typeof s.yaxis[m].min == "function" ? s.yaxis[m].min(r.minY) : s.yaxis[m].min), s.yaxis[m].max !== void 0 && (u = typeof s.yaxis[m].max == "function" ? s.yaxis[m].max(r.maxY) : s.yaxis[m].max), a.setYScaleForIndex(m, l, u));
          });
        });
      });
    } }, { key: "autoScaleY", value: function(e, t, i) {
      e || (e = this);
      var a = e.w;
      if (a.globals.isMultipleYAxis || a.globals.collapsedSeries.length)
        return console.warn("autoScaleYaxis not supported in a multi-yaxis chart."), t;
      var s = a.globals.seriesX[0], r = a.config.chart.stacked;
      return t.forEach(function(n, o) {
        for (var h = 0, c = 0; c < s.length; c++)
          if (s[c] >= i.xaxis.min) {
            h = c;
            break;
          }
        var d, g, p = a.globals.minYArr[o], f = a.globals.maxYArr[o], b = a.globals.stackedSeriesTotals;
        a.globals.series.forEach(function(m, w) {
          var A = m[h];
          r ? (A = b[h], d = g = A, b.forEach(function(l, u) {
            s[u] <= i.xaxis.max && s[u] >= i.xaxis.min && (l > g && l !== null && (g = l), m[u] < d && m[u] !== null && (d = m[u]));
          })) : (d = g = A, m.forEach(function(l, u) {
            if (s[u] <= i.xaxis.max && s[u] >= i.xaxis.min) {
              var x = l, v = l;
              a.globals.series.forEach(function(k, S) {
                l !== null && (x = Math.min(k[u], x), v = Math.max(k[u], v));
              }), v > g && v !== null && (g = v), x < d && x !== null && (d = x);
            }
          })), d === void 0 && g === void 0 && (d = p, g = f), g *= g < 0 ? 0.9 : 1.1, (d *= d < 0 ? 1.1 : 0.9) === 0 && g === 0 && (d = -1, g = 1), g < 0 && g < f && (g = f), d < 0 && d > p && (d = p), t.length > 1 ? (t[w].min = n.min === void 0 ? d : n.min, t[w].max = n.max === void 0 ? g : n.max) : (t[0].min = n.min === void 0 ? d : n.min, t[0].max = n.max === void 0 ? g : n.max);
        });
      }), t;
    } }]), y;
  }(), De = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.scales = new we(e);
    }
    return Y(y, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w.config, r = this.w.globals, n = -Number.MAX_VALUE, o = Number.MIN_VALUE;
      a === null && (a = e + 1);
      var h = r.series, c = h, d = h;
      s.chart.type === "candlestick" ? (c = r.seriesCandleL, d = r.seriesCandleH) : s.chart.type === "boxPlot" ? (c = r.seriesCandleO, d = r.seriesCandleC) : r.isRangeData && (c = r.seriesRangeStart, d = r.seriesRangeEnd);
      for (var g = e; g < a; g++) {
        r.dataPoints = Math.max(r.dataPoints, h[g].length), r.categoryLabels.length && (r.dataPoints = r.categoryLabels.filter(function(b) {
          return b !== void 0;
        }).length), r.labels.length && s.xaxis.type !== "datetime" && r.series.reduce(function(b, m) {
          return b + m.length;
        }, 0) !== 0 && (r.dataPoints = Math.max(r.dataPoints, r.labels.length));
        for (var p = 0; p < r.series[g].length; p++) {
          var f = h[g][p];
          f !== null && P.isNumber(f) ? (d[g][p] !== void 0 && (n = Math.max(n, d[g][p]), t = Math.min(t, d[g][p])), c[g][p] !== void 0 && (t = Math.min(t, c[g][p]), i = Math.max(i, c[g][p])), this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" && this.w.config.chart.type === "rangeArea" && this.w.config.chart.type === "rangeBar" || (this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" || r.seriesCandleC[g][p] !== void 0 && (n = Math.max(n, r.seriesCandleO[g][p]), n = Math.max(n, r.seriesCandleH[g][p]), n = Math.max(n, r.seriesCandleL[g][p]), n = Math.max(n, r.seriesCandleC[g][p]), this.w.config.chart.type === "boxPlot" && (n = Math.max(n, r.seriesCandleM[g][p]))), !s.series[g].type || s.series[g].type === "candlestick" && s.series[g].type === "boxPlot" && s.series[g].type === "rangeArea" && s.series[g].type === "rangeBar" || (n = Math.max(n, r.series[g][p]), t = Math.min(t, r.series[g][p])), i = n), r.seriesGoals[g] && r.seriesGoals[g][p] && Array.isArray(r.seriesGoals[g][p]) && r.seriesGoals[g][p].forEach(function(b) {
            o !== Number.MIN_VALUE && (o = Math.min(o, b.value), t = o), n = Math.max(n, b.value), i = n;
          }), P.isFloat(f) && (f = P.noExponents(f), r.yValueDecimal = Math.max(r.yValueDecimal, f.toString().split(".")[1].length)), o > c[g][p] && c[g][p] < 0 && (o = c[g][p])) : r.hasNullValues = !0;
        }
      }
      return s.chart.type === "rangeBar" && r.seriesRangeStart.length && r.isBarHorizontal && (o = t), s.chart.type === "bar" && (o < 0 && n < 0 && (n = 0), o === Number.MIN_VALUE && (o = 0)), { minY: o, maxY: n, lowestY: t, highestY: i };
    } }, { key: "setYRange", value: function() {
      var e = this.w.globals, t = this.w.config;
      e.maxY = -Number.MAX_VALUE, e.minY = Number.MIN_VALUE;
      var i = Number.MAX_VALUE;
      if (e.isMultipleYAxis)
        for (var a = 0; a < e.series.length; a++) {
          var s = this.getMinYMaxY(a, i, null, a + 1);
          e.minYArr.push(s.minY), e.maxYArr.push(s.maxY), i = s.lowestY;
        }
      var r = this.getMinYMaxY(0, i, null, e.series.length);
      if (e.minY = r.minY, e.maxY = r.maxY, i = r.lowestY, t.chart.stacked && this._setStackedMinMax(), (t.chart.type === "line" || t.chart.type === "area" || t.chart.type === "candlestick" || t.chart.type === "boxPlot" || t.chart.type === "rangeBar" && !e.isBarHorizontal) && e.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== e.maxY) {
        var n = e.maxY - i;
        (i >= 0 && i <= 10 || t.yaxis[0].min !== void 0 || t.yaxis[0].max !== void 0) && (n = 0), e.minY = i - 5 * n / 100, i > 0 && e.minY < 0 && (e.minY = 0), e.maxY = e.maxY + 5 * n / 100;
      }
      return t.yaxis.forEach(function(o, h) {
        o.max !== void 0 && (typeof o.max == "number" ? e.maxYArr[h] = o.max : typeof o.max == "function" && (e.maxYArr[h] = o.max(e.isMultipleYAxis ? e.maxYArr[h] : e.maxY)), e.maxY = e.maxYArr[h]), o.min !== void 0 && (typeof o.min == "number" ? e.minYArr[h] = o.min : typeof o.min == "function" && (e.minYArr[h] = o.min(e.isMultipleYAxis ? e.minYArr[h] === Number.MIN_VALUE ? 0 : e.minYArr[h] : e.minY)), e.minY = e.minYArr[h]);
      }), e.isBarHorizontal && ["min", "max"].forEach(function(o) {
        t.xaxis[o] !== void 0 && typeof t.xaxis[o] == "number" && (o === "min" ? e.minY = t.xaxis[o] : e.maxY = t.xaxis[o]);
      }), e.isMultipleYAxis ? (this.scales.setMultipleYScales(), e.minY = i, e.yAxisScale.forEach(function(o, h) {
        e.minYArr[h] = o.niceMin, e.maxYArr[h] = o.niceMax;
      })) : (this.scales.setYScaleForIndex(0, e.minY, e.maxY), e.minY = e.yAxisScale[0].niceMin, e.maxY = e.yAxisScale[0].niceMax, e.minYArr[0] = e.yAxisScale[0].niceMin, e.maxYArr[0] = e.yAxisScale[0].niceMax), { minY: e.minY, maxY: e.maxY, minYArr: e.minYArr, maxYArr: e.maxYArr, yAxisScale: e.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var e = this.w.globals, t = this.w.config, i = t.xaxis.type === "numeric" || t.xaxis.type === "datetime" || t.xaxis.type === "category" && !e.noLabelsProvided || e.noLabelsProvided || e.isXNumeric;
      if (e.isXNumeric && function() {
        for (var n = 0; n < e.series.length; n++)
          if (e.labels[n])
            for (var o = 0; o < e.labels[n].length; o++)
              e.labels[n][o] !== null && P.isNumber(e.labels[n][o]) && (e.maxX = Math.max(e.maxX, e.labels[n][o]), e.initialMaxX = Math.max(e.maxX, e.labels[n][o]), e.minX = Math.min(e.minX, e.labels[n][o]), e.initialMinX = Math.min(e.minX, e.labels[n][o]));
      }(), e.noLabelsProvided && t.xaxis.categories.length === 0 && (e.maxX = e.labels[e.labels.length - 1], e.initialMaxX = e.labels[e.labels.length - 1], e.minX = 1, e.initialMinX = 1), e.isXNumeric || e.noLabelsProvided || e.dataFormatXNumeric) {
        var a;
        if (t.xaxis.tickAmount === void 0 ? (a = Math.round(e.svgWidth / 150), t.xaxis.type === "numeric" && e.dataPoints < 30 && (a = e.dataPoints - 1), a > e.dataPoints && e.dataPoints !== 0 && (a = e.dataPoints - 1)) : t.xaxis.tickAmount === "dataPoints" ? (e.series.length > 1 && (a = e.series[e.maxValsInArrayIndex].length - 1), e.isXNumeric && (a = e.maxX - e.minX - 1)) : a = t.xaxis.tickAmount, e.xTickAmount = a, t.xaxis.max !== void 0 && typeof t.xaxis.max == "number" && (e.maxX = t.xaxis.max), t.xaxis.min !== void 0 && typeof t.xaxis.min == "number" && (e.minX = t.xaxis.min), t.xaxis.range !== void 0 && (e.minX = e.maxX - t.xaxis.range), e.minX !== Number.MAX_VALUE && e.maxX !== -Number.MAX_VALUE)
          if (t.xaxis.convertedCatToNumeric && !e.dataFormatXNumeric) {
            for (var s = [], r = e.minX - 1; r < e.maxX; r++)
              s.push(r + 1);
            e.xAxisScale = { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
          } else
            e.xAxisScale = this.scales.setXScale(e.minX, e.maxX);
        else
          e.xAxisScale = this.scales.linearScale(0, a, a, 0, t.xaxis.stepSize), e.noLabelsProvided && e.labels.length > 0 && (e.xAxisScale = this.scales.linearScale(1, e.labels.length, a - 1, 0, t.xaxis.stepSize), e.seriesX = e.labels.slice());
        i && (e.labels = e.xAxisScale.result.slice());
      }
      return e.isBarHorizontal && e.labels.length && (e.xTickAmount = e.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: e.minX, maxX: e.maxX };
    } }, { key: "setZRange", value: function() {
      var e = this.w.globals;
      if (e.isDataXYZ) {
        for (var t = 0; t < e.series.length; t++)
          if (e.seriesZ[t] !== void 0)
            for (var i = 0; i < e.seriesZ[t].length; i++)
              e.seriesZ[t][i] !== null && P.isNumber(e.seriesZ[t][i]) && (e.maxZ = Math.max(e.maxZ, e.seriesZ[t][i]), e.minZ = Math.min(e.minZ, e.seriesZ[t][i]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var e = this.w.globals, t = this.w.config;
      if (e.minX === e.maxX) {
        var i = new B(this.ctx);
        if (t.xaxis.type === "datetime") {
          var a = i.getDate(e.minX);
          t.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() - 2) : a.setDate(a.getDate() - 2), e.minX = new Date(a).getTime();
          var s = i.getDate(e.maxX);
          t.xaxis.labels.datetimeUTC ? s.setUTCDate(s.getUTCDate() + 2) : s.setDate(s.getDate() + 2), e.maxX = new Date(s).getTime();
        } else
          (t.xaxis.type === "numeric" || t.xaxis.type === "category" && !e.noLabelsProvided) && (e.minX = e.minX - 2, e.initialMinX = e.minX, e.maxX = e.maxX + 2, e.initialMaxX = e.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var e = this.w.globals;
      e.isXNumeric && e.seriesX.forEach(function(t, i) {
        t.length === 1 && t.push(e.seriesX[e.maxValsInArrayIndex][e.seriesX[e.maxValsInArrayIndex].length - 1]);
        var a = t.slice();
        a.sort(function(s, r) {
          return s - r;
        }), a.forEach(function(s, r) {
          if (r > 0) {
            var n = s - a[r - 1];
            n > 0 && (e.minXDiff = Math.min(n, e.minXDiff));
          }
        }), e.dataPoints !== 1 && e.minXDiff !== Number.MAX_VALUE || (e.minXDiff = 0.5);
      });
    } }, { key: "_setStackedMinMax", value: function() {
      var e = this, t = this.w.globals;
      if (t.series.length) {
        var i = t.seriesGroups;
        i.length || (i = [this.w.config.series.map(function(r) {
          return r.name;
        })]);
        var a = {}, s = {};
        i.forEach(function(r) {
          a[r] = [], s[r] = [], e.w.config.series.map(function(n, o) {
            return r.indexOf(n.name) > -1 ? o : null;
          }).filter(function(n) {
            return n !== null;
          }).forEach(function(n) {
            for (var o = 0; o < t.series[t.maxValsInArrayIndex].length; o++) {
              var h, c;
              a[r][o] === void 0 && (a[r][o] = 0, s[r][o] = 0), (e.w.config.chart.stacked && !t.comboCharts || e.w.config.chart.stacked && t.comboCharts && (!e.w.config.chart.stackOnlyBar || ((h = e.w.config.series) === null || h === void 0 || (c = h[n]) === null || c === void 0 ? void 0 : c.type) === "bar")) && t.series[n][o] !== null && P.isNumber(t.series[n][o]) && (t.series[n][o] > 0 ? a[r][o] += parseFloat(t.series[n][o]) + 1e-4 : s[r][o] += parseFloat(t.series[n][o]));
            }
          });
        }), Object.entries(a).forEach(function(r) {
          var n = Me(r, 1)[0];
          a[n].forEach(function(o, h) {
            t.maxY = Math.max(t.maxY, a[n][h]), t.minY = Math.min(t.minY, s[n][h]);
          });
        });
      }
    } }]), y;
  }(), Ne = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.elgrid = t, this.w = e.w;
      var i = this.w;
      this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, i.config.xaxis.position === "bottom" && (this.xAxisoffX = i.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new xe(e);
    }
    return Y(y, [{ key: "drawYaxis", value: function(e) {
      var t = this, i = this.w, a = new M(this.ctx), s = i.config.yaxis[e].labels.style, r = s.fontSize, n = s.fontFamily, o = s.fontWeight, h = a.group({ class: "apexcharts-yaxis", rel: e, transform: "translate(" + i.globals.translateYAxisX[e] + ", 0)" });
      if (this.axesUtils.isYAxisHidden(e))
        return h;
      var c = a.group({ class: "apexcharts-yaxis-texts-g" });
      h.add(c);
      var d = i.globals.yAxisScale[e].result.length - 1, g = i.globals.gridHeight / d, p = i.globals.translateY, f = i.globals.yLabelFormatters[e], b = i.globals.yAxisScale[e].result.slice();
      b = this.axesUtils.checkForReversedLabels(e, b);
      var m = "";
      if (i.config.yaxis[e].labels.show)
        for (var w = function(C) {
          var L = b[C];
          L = f(L, C, i);
          var I = i.config.yaxis[e].labels.padding;
          i.config.yaxis[e].opposite && i.config.yaxis.length !== 0 && (I *= -1);
          var z = "end";
          i.config.yaxis[e].opposite && (z = "start"), i.config.yaxis[e].labels.align === "left" ? z = "start" : i.config.yaxis[e].labels.align === "center" ? z = "middle" : i.config.yaxis[e].labels.align === "right" && (z = "end");
          var T = t.axesUtils.getYAxisForeColor(s.colors, e), E = i.config.yaxis[e].labels.offsetY;
          i.config.chart.type === "heatmap" && (E -= (i.globals.gridHeight / i.globals.series.length - 1) / 2);
          var R = a.drawText({ x: I, y: p + d / 10 + E + 1, text: L, textAnchor: z, fontSize: r, fontFamily: n, fontWeight: o, maxWidth: i.config.yaxis[e].labels.maxWidth, foreColor: Array.isArray(T) ? T[C] : T, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + s.cssClass });
          C === d && (m = R), c.add(R);
          var O = document.createElementNS(i.globals.SVGNS, "title");
          if (O.textContent = Array.isArray(L) ? L.join(" ") : L, R.node.appendChild(O), i.config.yaxis[e].labels.rotate !== 0) {
            var D = a.rotateAroundCenter(m.node), W = a.rotateAroundCenter(R.node);
            R.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[e].labels.rotate, " ").concat(D.x, " ").concat(W.y, ")"));
          }
          p += g;
        }, A = d; A >= 0; A--)
          w(A);
      if (i.config.yaxis[e].title.text !== void 0) {
        var l = a.group({ class: "apexcharts-yaxis-title" }), u = 0;
        i.config.yaxis[e].opposite && (u = i.globals.translateYAxisX[e]);
        var x = a.drawText({ x: u, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[e].title.offsetY, text: i.config.yaxis[e].title.text, textAnchor: "end", foreColor: i.config.yaxis[e].title.style.color, fontSize: i.config.yaxis[e].title.style.fontSize, fontWeight: i.config.yaxis[e].title.style.fontWeight, fontFamily: i.config.yaxis[e].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[e].title.style.cssClass });
        l.add(x), h.add(l);
      }
      var v = i.config.yaxis[e].axisBorder, k = 31 + v.offsetX;
      if (i.config.yaxis[e].opposite && (k = -31 - v.offsetX), v.show) {
        var S = a.drawLine(k, i.globals.translateY + v.offsetY - 2, k, i.globals.gridHeight + i.globals.translateY + v.offsetY + 2, v.color, 0, v.width);
        h.add(S);
      }
      return i.config.yaxis[e].axisTicks.show && this.axesUtils.drawYAxisTicks(k, d, v, i.config.yaxis[e].axisTicks, e, g, h), h;
    } }, { key: "drawYaxisInversed", value: function(e) {
      var t = this.w, i = new M(this.ctx), a = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
      a.add(s);
      var r = t.globals.yAxisScale[e].result.length - 1, n = t.globals.gridWidth / r + 0.1, o = n + t.config.xaxis.labels.offsetX, h = t.globals.xLabelFormatter, c = t.globals.yAxisScale[e].result.slice(), d = t.globals.timescaleLabels;
      d.length > 0 && (this.xaxisLabels = d.slice(), r = (c = d.slice()).length), c = this.axesUtils.checkForReversedLabels(e, c);
      var g = d.length;
      if (t.config.xaxis.labels.show)
        for (var p = g ? 0 : r; g ? p < g : p >= 0; g ? p++ : p--) {
          var f = c[p];
          f = h(f, p, t);
          var b = t.globals.gridWidth + t.globals.padHorizontal - (o - n + t.config.xaxis.labels.offsetX);
          if (d.length) {
            var m = this.axesUtils.getLabel(c, d, b, p, this.drawnLabels, this.xaxisFontSize);
            b = m.x, f = m.text, this.drawnLabels.push(m.text), p === 0 && t.globals.skipFirstTimelinelabel && (f = ""), p === c.length - 1 && t.globals.skipLastTimelinelabel && (f = "");
          }
          var w = i.drawText({ x: b, y: this.xAxisoffX + t.config.xaxis.labels.offsetY + 30 - (t.config.xaxis.position === "top" ? t.globals.xAxisHeight + t.config.xaxis.axisTicks.height - 2 : 0), text: f, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[e] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: t.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + t.config.xaxis.labels.style.cssClass });
          s.add(w), w.tspan(f);
          var A = document.createElementNS(t.globals.SVGNS, "title");
          A.textContent = f, w.node.appendChild(A), o += n;
        }
      return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a;
    } }, { key: "inversedYAxisBorder", value: function(e) {
      var t = this.w, i = new M(this.ctx), a = t.config.xaxis.axisBorder;
      if (a.show) {
        var s = 0;
        t.config.chart.type === "bar" && t.globals.isXNumeric && (s -= 15);
        var r = i.drawLine(t.globals.padHorizontal + s + a.offsetX, this.xAxisoffX, t.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
        this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(r) : e.add(r);
      }
    } }, { key: "inversedYAxisTitleText", value: function(e) {
      var t = this.w, i = new M(this.ctx);
      if (t.config.xaxis.title.text !== void 0) {
        var a = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s = i.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(t.config.xaxis.title.style.fontSize) + t.config.xaxis.title.offsetY + 20, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass });
        a.add(s), e.add(a);
      }
    } }, { key: "yAxisTitleRotate", value: function(e, t) {
      var i = this.w, a = new M(this.ctx), s = { width: 0, height: 0 }, r = { width: 0, height: 0 }, n = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g"));
      n !== null && (s = n.getBoundingClientRect());
      var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-title text"));
      if (o !== null && (r = o.getBoundingClientRect()), o !== null) {
        var h = this.xPaddingForYAxisTitle(e, s, r, t);
        o.setAttribute("x", h.xPos - (t ? 10 : 0));
      }
      if (o !== null) {
        var c = a.rotateAroundCenter(o);
        o.setAttribute("transform", "rotate(".concat(t ? -1 * i.config.yaxis[e].title.rotate : i.config.yaxis[e].title.rotate, " ").concat(c.x, " ").concat(c.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(e, t, i, a) {
      var s = this.w, r = 0, n = 0, o = 10;
      return s.config.yaxis[e].title.text === void 0 || e < 0 ? { xPos: n, padd: 0 } : (a ? (n = t.width + s.config.yaxis[e].title.offsetX + i.width / 2 + o / 2, (r += 1) === 0 && (n -= o / 2)) : (n = -1 * t.width + s.config.yaxis[e].title.offsetX + o / 2 + i.width / 2, s.globals.isBarHorizontal && (o = 25, n = -1 * t.width - s.config.yaxis[e].title.offsetX - o)), { xPos: n, padd: o });
    } }, { key: "setYAxisXPosition", value: function(e, t) {
      var i = this.w, a = 0, s = 0, r = 18, n = 1;
      i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map(function(o, h) {
        var c = i.globals.ignoreYAxisIndexes.indexOf(h) > -1 || !o.show || o.floating || e[h].width === 0, d = e[h].width + t[h].width;
        o.opposite ? i.globals.isBarHorizontal ? (s = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[h] = s - o.labels.offsetX) : (s = i.globals.gridWidth + i.globals.translateX + n, c || (n = n + d + 20), i.globals.translateYAxisX[h] = s - o.labels.offsetX + 20) : (a = i.globals.translateX - r, c || (r = r + d + 20), i.globals.translateYAxisX[h] = a + o.labels.offsetX);
      });
    } }, { key: "setYAxisTextAlignments", value: function() {
      var e = this.w, t = e.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
      (t = P.listToArray(t)).forEach(function(i, a) {
        var s = e.config.yaxis[a];
        if (s && !s.floating && s.labels.align !== void 0) {
          var r = e.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-texts-g")), n = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-label"));
          n = P.listToArray(n);
          var o = r.getBoundingClientRect();
          s.labels.align === "left" ? (n.forEach(function(h, c) {
            h.setAttribute("text-anchor", "start");
          }), s.opposite || r.setAttribute("transform", "translate(-".concat(o.width, ", 0)"))) : s.labels.align === "center" ? (n.forEach(function(h, c) {
            h.setAttribute("text-anchor", "middle");
          }), r.setAttribute("transform", "translate(".concat(o.width / 2 * (s.opposite ? 1 : -1), ", 0)"))) : s.labels.align === "right" && (n.forEach(function(h, c) {
            h.setAttribute("text-anchor", "end");
          }), s.opposite && r.setAttribute("transform", "translate(".concat(o.width, ", 0)")));
        }
      });
    } }]), y;
  }(), xt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.documentEvent = P.bind(this.documentEvent, this);
    }
    return Y(y, [{ key: "addEventListener", value: function(e, t) {
      var i = this.w;
      i.globals.events.hasOwnProperty(e) ? i.globals.events[e].push(t) : i.globals.events[e] = [t];
    } }, { key: "removeEventListener", value: function(e, t) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(e)) {
        var a = i.globals.events[e].indexOf(t);
        a !== -1 && i.globals.events[e].splice(a, 1);
      }
    } }, { key: "fireEvent", value: function(e, t) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(e)) {
        t && t.length || (t = []);
        for (var a = i.globals.events[e], s = a.length, r = 0; r < s; r++)
          a[r].apply(null, t);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var e = this, t = this.w, i = this.ctx, a = t.globals.dom.baseEl.querySelector(t.globals.chartClass);
      this.ctx.eventList.forEach(function(s) {
        a.addEventListener(s, function(r) {
          var n = Object.assign({}, t, { seriesIndex: t.globals.capturedSeriesIndex, dataPointIndex: t.globals.capturedDataPointIndex });
          r.type === "mousemove" || r.type === "touchmove" ? typeof t.config.chart.events.mouseMove == "function" && t.config.chart.events.mouseMove(r, i, n) : r.type === "mouseleave" || r.type === "touchleave" ? typeof t.config.chart.events.mouseLeave == "function" && t.config.chart.events.mouseLeave(r, i, n) : (r.type === "mouseup" && r.which === 1 || r.type === "touchend") && (typeof t.config.chart.events.click == "function" && t.config.chart.events.click(r, i, n), i.ctx.events.fireEvent("click", [r, i, n]));
        }, { capture: !1, passive: !0 });
      }), this.ctx.eventList.forEach(function(s) {
        t.globals.dom.baseEl.addEventListener(s, e.documentEvent, { passive: !0 });
      }), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(e) {
      var t = this.w, i = e.target.className;
      if (e.type === "click") {
        var a = t.globals.dom.baseEl.querySelector(".apexcharts-menu");
        a && a.classList.contains("apexcharts-menu-open") && i !== "apexcharts-menu-icon" && a.classList.remove("apexcharts-menu-open");
      }
      t.globals.clientX = e.type === "touchmove" ? e.touches[0].clientX : e.clientX, t.globals.clientY = e.type === "touchmove" ? e.touches[0].clientY : e.clientY;
    } }]), y;
  }(), bt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "setCurrentLocaleValues", value: function(e) {
      var t = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i = t.filter(function(s) {
        return s.name === e;
      })[0];
      if (!i)
        throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var a = P.extend(H, i);
      this.w.globals.locale = a.options;
    } }]), y;
  }(), mt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "drawAxis", value: function(e, t) {
      var i, a, s = this, r = this.w.globals, n = this.w.config, o = new Ie(this.ctx, t), h = new Ne(this.ctx, t);
      r.axisCharts && e !== "radar" && (r.isBarHorizontal ? (a = h.drawYaxisInversed(0), i = o.drawXaxisInversed(0), r.dom.elGraphical.add(i), r.dom.elGraphical.add(a)) : (i = o.drawXaxis(), r.dom.elGraphical.add(i), n.yaxis.map(function(c, d) {
        if (r.ignoreYAxisIndexes.indexOf(d) === -1 && (a = h.drawYaxis(d), r.dom.Paper.add(a), s.w.config.grid.position === "back")) {
          var g = r.dom.Paper.children()[1];
          g.remove(), r.dom.Paper.add(g);
        }
      })));
    } }]), y;
  }(), We = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "drawXCrosshairs", value: function() {
      var e = this.w, t = new M(this.ctx), i = new Z(this.ctx), a = e.config.xaxis.crosshairs.fill.gradient, s = e.config.xaxis.crosshairs.dropShadow, r = e.config.xaxis.crosshairs.fill.type, n = a.colorFrom, o = a.colorTo, h = a.opacityFrom, c = a.opacityTo, d = a.stops, g = s.enabled, p = s.left, f = s.top, b = s.blur, m = s.color, w = s.opacity, A = e.config.xaxis.crosshairs.fill.color;
      if (e.config.xaxis.crosshairs.show) {
        r === "gradient" && (A = t.drawGradient("vertical", n, o, h, c, null, d, null));
        var l = t.drawRect();
        e.config.xaxis.crosshairs.width === 1 && (l = t.drawLine());
        var u = e.globals.gridHeight;
        (!P.isNumber(u) || u < 0) && (u = 0);
        var x = e.config.xaxis.crosshairs.width;
        (!P.isNumber(x) || x < 0) && (x = 0), l.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: u, width: x, height: u, fill: A, filter: "none", "fill-opacity": e.config.xaxis.crosshairs.opacity, stroke: e.config.xaxis.crosshairs.stroke.color, "stroke-width": e.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": e.config.xaxis.crosshairs.stroke.dashArray }), g && (l = i.dropShadow(l, { left: p, top: f, blur: b, color: m, opacity: w })), e.globals.dom.elGraphical.add(l);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var e = this.w, t = new M(this.ctx), i = e.config.yaxis[0].crosshairs, a = e.globals.barPadForNumericAxis;
      if (e.config.yaxis[0].crosshairs.show) {
        var s = t.drawLine(-a, 0, e.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
        s.attr({ class: "apexcharts-ycrosshairs" }), e.globals.dom.elGraphical.add(s);
      }
      var r = t.drawLine(-a, 0, e.globals.gridWidth + a, 0, i.stroke.color, 0, 0);
      r.attr({ class: "apexcharts-ycrosshairs-hidden" }), e.globals.dom.elGraphical.add(r);
    } }]), y;
  }(), vt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "checkResponsiveConfig", value: function(e) {
      var t = this, i = this.w, a = i.config;
      if (a.responsive.length !== 0) {
        var s = a.responsive.slice();
        s.sort(function(h, c) {
          return h.breakpoint > c.breakpoint ? 1 : c.breakpoint > h.breakpoint ? -1 : 0;
        }).reverse();
        var r = new Le({}), n = function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = s[0].breakpoint, d = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (d > c) {
            var g = q.extendArrayProps(r, i.globals.initialConfig, i);
            h = P.extend(g, h), h = P.extend(i.config, h), t.overrideResponsiveOptions(h);
          } else
            for (var p = 0; p < s.length; p++)
              d < s[p].breakpoint && (h = q.extendArrayProps(r, s[p].options, i), h = P.extend(i.config, h), t.overrideResponsiveOptions(h));
        };
        if (e) {
          var o = q.extendArrayProps(r, e, i);
          o = P.extend(i.config, o), n(o = P.extend(o, e));
        } else
          n({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(e) {
      var t = new Le(e).init({ responsiveOverride: !0 });
      this.w.config = t;
    } }]), y;
  }(), yt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.colors = [], this.w = e.w;
      var t = this.w;
      this.isColorFn = !1, this.isHeatmapDistributed = t.config.chart.type === "treemap" && t.config.plotOptions.treemap.distributed || t.config.chart.type === "heatmap" && t.config.plotOptions.heatmap.distributed, this.isBarDistributed = t.config.plotOptions.bar.distributed && (t.config.chart.type === "bar" || t.config.chart.type === "rangeBar");
    }
    return Y(y, [{ key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var e, t = this, i = this.w, a = new P();
      if (i.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(i.config.theme.mode)), i.config.colors === void 0 || ((e = i.config.colors) === null || e === void 0 ? void 0 : e.length) === 0 ? i.globals.colors = this.predefined() : (i.globals.colors = i.config.colors, Array.isArray(i.config.colors) && i.config.colors.length > 0 && typeof i.config.colors[0] == "function" && (i.globals.colors = i.config.series.map(function(f, b) {
        var m = i.config.colors[b];
        return m || (m = i.config.colors[0]), typeof m == "function" ? (t.isColorFn = !0, m({ value: i.globals.axisCharts ? i.globals.series[b][0] ? i.globals.series[b][0] : 0 : i.globals.series[b], seriesIndex: b, dataPointIndex: b, w: i })) : m;
      }))), i.globals.seriesColors.map(function(f, b) {
        f && (i.globals.colors[b] = f);
      }), i.config.theme.monochrome.enabled) {
        var s = [], r = i.globals.series.length;
        (this.isBarDistributed || this.isHeatmapDistributed) && (r = i.globals.series[0].length * i.globals.series.length);
        for (var n = i.config.theme.monochrome.color, o = 1 / (r / i.config.theme.monochrome.shadeIntensity), h = i.config.theme.monochrome.shadeTo, c = 0, d = 0; d < r; d++) {
          var g = void 0;
          h === "dark" ? (g = a.shadeColor(-1 * c, n), c += o) : (g = a.shadeColor(c, n), c += o), s.push(g);
        }
        i.globals.colors = s.slice();
      }
      var p = i.globals.colors.slice();
      this.pushExtraColors(i.globals.colors), ["fill", "stroke"].forEach(function(f) {
        i.config[f].colors === void 0 ? i.globals[f].colors = t.isColorFn ? i.config.colors : p : i.globals[f].colors = i.config[f].colors.slice(), t.pushExtraColors(i.globals[f].colors);
      }), i.config.dataLabels.style.colors === void 0 ? i.globals.dataLabels.style.colors = p : i.globals.dataLabels.style.colors = i.config.dataLabels.style.colors.slice(), this.pushExtraColors(i.globals.dataLabels.style.colors, 50), i.config.plotOptions.radar.polygons.fill.colors === void 0 ? i.globals.radarPolygons.fill.colors = [i.config.theme.mode === "dark" ? "#424242" : "none"] : i.globals.radarPolygons.fill.colors = i.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(i.globals.radarPolygons.fill.colors, 20), i.config.markers.colors === void 0 ? i.globals.markers.colors = p : i.globals.markers.colors = i.config.markers.colors.slice(), this.pushExtraColors(i.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = t || a.globals.series.length;
      if (i === null && (i = this.isBarDistributed || this.isHeatmapDistributed || a.config.chart.type === "heatmap" && a.config.plotOptions.heatmap.colorScale.inverse), i && a.globals.series.length && (s = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), e.length < s)
        for (var r = s - e.length, n = 0; n < r; n++)
          e.push(e[n]);
    } }, { key: "updateThemeOptions", value: function(e) {
      e.chart = e.chart || {}, e.tooltip = e.tooltip || {};
      var t = e.theme.mode || "light", i = e.theme.palette ? e.theme.palette : t === "dark" ? "palette4" : "palette1", a = e.chart.foreColor ? e.chart.foreColor : t === "dark" ? "#f6f7f8" : "#373d3f";
      return e.tooltip.theme = t, e.chart.foreColor = a, e.theme.palette = i, e;
    } }, { key: "predefined", value: function() {
      switch (this.w.config.theme.palette) {
        case "palette1":
        default:
          this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
          break;
        case "palette2":
          this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
          break;
        case "palette3":
          this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
          break;
        case "palette4":
          this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
          break;
        case "palette5":
          this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
          break;
        case "palette6":
          this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
          break;
        case "palette7":
          this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
          break;
        case "palette8":
          this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
          break;
        case "palette9":
          this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
          break;
        case "palette10":
          this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
      }
      return this.colors;
    } }]), y;
  }(), wt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(e) {
      var t = this.w, i = e === "title" ? t.config.title : t.config.subtitle, a = t.globals.svgWidth / 2, s = i.offsetY, r = "middle";
      if (i.align === "left" ? (a = 10, r = "start") : i.align === "right" && (a = t.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, i.text !== void 0) {
        var n = new M(this.ctx).drawText({ x: a, y: s, text: i.text, textAnchor: r, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
        n.node.setAttribute("class", "apexcharts-".concat(e, "-text")), t.globals.dom.Paper.add(n);
      }
    } }]), y;
  }(), kt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.dCtx = e;
    }
    return Y(y, [{ key: "getTitleSubtitleCoords", value: function(e) {
      var t = this.w, i = 0, a = 0, s = e === "title" ? t.config.title.floating : t.config.subtitle.floating, r = t.globals.dom.baseEl.querySelector(".apexcharts-".concat(e, "-text"));
      if (r !== null && !s) {
        var n = r.getBoundingClientRect();
        i = n.width, a = t.globals.axisCharts ? n.height + 5 : n.height;
      }
      return { width: i, height: a };
    } }, { key: "getLegendsRect", value: function() {
      var e = this.w, t = e.globals.dom.elLegendWrap;
      e.config.legend.height || e.config.legend.position !== "top" && e.config.legend.position !== "bottom" || (t.style.maxHeight = e.globals.svgHeight / 2 + "px");
      var i = Object.assign({}, P.getBoundingClientRect(t));
      return t !== null && !e.config.legend.floating && e.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: i.height === 0 ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, e.config.legend.position !== "left" && e.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > e.globals.svgWidth && (this.dCtx.lgRect.width = e.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getLargestStringFromMultiArr", value: function(e, t) {
      var i = e;
      if (this.w.globals.isMultiLineX) {
        var a = t.map(function(r, n) {
          return Array.isArray(r) ? r.length : 1;
        }), s = Math.max.apply(Math, J(a));
        i = t[a.indexOf(s)];
      }
      return i;
    } }]), y;
  }(), At = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.dCtx = e;
    }
    return Y(y, [{ key: "getxAxisLabelsCoords", value: function() {
      var e, t = this.w, i = t.globals.labels.slice();
      if (t.config.xaxis.convertedCatToNumeric && i.length === 0 && (i = t.globals.categoryLabels), t.globals.timescaleLabels.length > 0) {
        var a = this.getxAxisTimeScaleLabelsCoords();
        e = { width: a.width, height: a.height }, t.globals.rotateXLabels = !1;
      } else {
        this.dCtx.lgWidthForSideLegends = t.config.legend.position !== "left" && t.config.legend.position !== "right" || t.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var s = t.globals.xLabelFormatter, r = P.getLargestStringFromArr(i), n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i);
        t.globals.isBarHorizontal && (n = r = t.globals.yAxisScale[0].result.reduce(function(f, b) {
          return f.length > b.length ? f : b;
        }, 0));
        var o = new re(this.dCtx.ctx), h = r;
        r = o.xLabelFormat(s, r, h, { i: void 0, dateFormatter: new B(this.dCtx.ctx).formatDate, w: t }), n = o.xLabelFormat(s, n, h, { i: void 0, dateFormatter: new B(this.dCtx.ctx).formatDate, w: t }), (t.config.xaxis.convertedCatToNumeric && r === void 0 || String(r).trim() === "") && (n = r = "1");
        var c = new M(this.dCtx.ctx), d = c.getTextRects(r, t.config.xaxis.labels.style.fontSize), g = d;
        if (r !== n && (g = c.getTextRects(n, t.config.xaxis.labels.style.fontSize)), (e = { width: d.width >= g.width ? d.width : g.width, height: d.height >= g.height ? d.height : g.height }).width * i.length > t.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && t.config.xaxis.labels.rotate !== 0 || t.config.xaxis.labels.rotateAlways) {
          if (!t.globals.isBarHorizontal) {
            t.globals.rotateXLabels = !0;
            var p = function(f) {
              return c.getTextRects(f, t.config.xaxis.labels.style.fontSize, t.config.xaxis.labels.style.fontFamily, "rotate(".concat(t.config.xaxis.labels.rotate, " 0 0)"), !1);
            };
            d = p(r), r !== n && (g = p(n)), e.height = (d.height > g.height ? d.height : g.height) / 1.5, e.width = d.width > g.width ? d.width : g.width;
          }
        } else
          t.globals.rotateXLabels = !1;
      }
      return t.config.xaxis.labels.show || (e = { width: 0, height: 0 }), { width: e.width, height: e.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var e, t = this.w;
      if (!t.globals.hasXaxisGroups)
        return { width: 0, height: 0 };
      var i, a = ((e = t.config.xaxis.group.style) === null || e === void 0 ? void 0 : e.fontSize) || t.config.xaxis.labels.style.fontSize, s = t.globals.groups.map(function(d) {
        return d.title;
      }), r = P.getLargestStringFromArr(s), n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, s), o = new M(this.dCtx.ctx), h = o.getTextRects(r, a), c = h;
      return r !== n && (c = o.getTextRects(n, a)), i = { width: h.width >= c.width ? h.width : c.width, height: h.height >= c.height ? h.height : c.height }, t.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var e = this.w, t = 0, i = 0;
      if (e.config.xaxis.title.text !== void 0) {
        var a = new M(this.dCtx.ctx).getTextRects(e.config.xaxis.title.text, e.config.xaxis.title.style.fontSize);
        t = a.width, i = a.height;
      }
      return { width: t, height: i };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var e, t = this.w;
      this.dCtx.timescaleLabels = t.globals.timescaleLabels.slice();
      var i = this.dCtx.timescaleLabels.map(function(s) {
        return s.value;
      }), a = i.reduce(function(s, r) {
        return s === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : s.length > r.length ? s : r;
      }, 0);
      return 1.05 * (e = new M(this.dCtx.ctx).getTextRects(a, t.config.xaxis.labels.style.fontSize)).width * i.length > t.globals.gridWidth && t.config.xaxis.labels.rotate !== 0 && (t.globals.overlappingXLabels = !0), e;
    } }, { key: "additionalPaddingXLabels", value: function(e) {
      var t = this, i = this.w, a = i.globals, s = i.config, r = s.xaxis.type, n = e.width;
      a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1;
      var o = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, h = function(c, d) {
        s.yaxis.length > 1 && function(g) {
          return a.collapsedSeriesIndices.indexOf(g) !== -1;
        }(d) || function(g) {
          if (t.dCtx.timescaleLabels && t.dCtx.timescaleLabels.length) {
            var p = t.dCtx.timescaleLabels[0], f = t.dCtx.timescaleLabels[t.dCtx.timescaleLabels.length - 1].position + n / 1.75 - t.dCtx.yAxisWidthRight, b = p.position - n / 1.75 + t.dCtx.yAxisWidthLeft, m = i.config.legend.position === "right" && t.dCtx.lgRect.width > 0 ? t.dCtx.lgRect.width : 0;
            f > a.svgWidth - a.translateX - m && (a.skipLastTimelinelabel = !0), b < -(g.show && !g.floating || s.chart.type !== "bar" && s.chart.type !== "candlestick" && s.chart.type !== "rangeBar" && s.chart.type !== "boxPlot" ? 10 : n / 1.75) && (a.skipFirstTimelinelabel = !0);
          } else
            r === "datetime" ? t.dCtx.gridPad.right < n && !a.rotateXLabels && (a.skipLastTimelinelabel = !0) : r !== "datetime" && t.dCtx.gridPad.right < n / 2 - t.dCtx.yAxisWidthRight && !a.rotateXLabels && !i.config.xaxis.labels.trim && (i.config.xaxis.tickPlacement !== "between" || i.globals.isBarHorizontal) && (t.dCtx.xPadRight = n / 2 + 1);
        }(c);
      };
      s.yaxis.forEach(function(c, d) {
        o ? (t.dCtx.gridPad.left < n && (t.dCtx.xPadLeft = n / 2 + 1), t.dCtx.xPadRight = n / 2 + 1) : h(c, d);
      });
    } }]), y;
  }(), St = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.dCtx = e;
    }
    return Y(y, [{ key: "getyAxisLabelsCoords", value: function() {
      var e = this, t = this.w, i = [], a = 10, s = new xe(this.dCtx.ctx);
      return t.config.yaxis.map(function(r, n) {
        var o = { seriesIndex: n, dataPointIndex: -1, w: t }, h = t.globals.yAxisScale[n], c = 0;
        if (!s.isYAxisHidden(n) && r.labels.show && r.labels.minWidth !== void 0 && (c = r.labels.minWidth), !s.isYAxisHidden(n) && r.labels.show && h.result.length) {
          var d = t.globals.yLabelFormatters[n], g = h.niceMin === Number.MIN_VALUE ? 0 : h.niceMin, p = h.result.reduce(function(u, x) {
            var v, k;
            return ((v = String(d(u, o))) === null || v === void 0 ? void 0 : v.length) > ((k = String(d(x, o))) === null || k === void 0 ? void 0 : k.length) ? u : x;
          }, g), f = p = d(p, o);
          if (p !== void 0 && p.length !== 0 || (p = h.niceMax), t.globals.isBarHorizontal) {
            a = 0;
            var b = t.globals.labels.slice();
            p = P.getLargestStringFromArr(b), p = d(p, { seriesIndex: n, dataPointIndex: -1, w: t }), f = e.dCtx.dimHelpers.getLargestStringFromMultiArr(p, b);
          }
          var m = new M(e.dCtx.ctx), w = "rotate(".concat(r.labels.rotate, " 0 0)"), A = m.getTextRects(p, r.labels.style.fontSize, r.labels.style.fontFamily, w, !1), l = A;
          p !== f && (l = m.getTextRects(f, r.labels.style.fontSize, r.labels.style.fontFamily, w, !1)), i.push({ width: (c > l.width || c > A.width ? c : l.width > A.width ? l.width : A.width) + a, height: l.height > A.height ? l.height : A.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var e = this, t = this.w, i = [];
      return t.config.yaxis.map(function(a, s) {
        if (a.show && a.title.text !== void 0) {
          var r = new M(e.dCtx.ctx), n = "rotate(".concat(a.title.rotate, " 0 0)"), o = r.getTextRects(a.title.text, a.title.style.fontSize, a.title.style.fontFamily, n, !1);
          i.push({ width: o.width, height: o.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var e = this.w, t = 0, i = 0, a = 0, s = e.globals.yAxisScale.length > 1 ? 10 : 0, r = new xe(this.dCtx.ctx), n = function(o, h) {
        var c = e.config.yaxis[h].floating, d = 0;
        o.width > 0 && !c ? (d = o.width + s, function(g) {
          return e.globals.ignoreYAxisIndexes.indexOf(g) > -1;
        }(h) && (d = d - o.width - s)) : d = c || r.isYAxisHidden(h) ? 0 : 5, e.config.yaxis[h].opposite ? a += d : i += d, t += d;
      };
      return e.globals.yLabelsCoords.map(function(o, h) {
        n(o, h);
      }), e.globals.yTitleCoords.map(function(o, h) {
        n(o, h);
      }), e.globals.isBarHorizontal && !e.config.yaxis[0].floating && (t = e.globals.yLabelsCoords[0].width + e.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = a, t;
    } }]), y;
  }(), Ct = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.dCtx = e;
    }
    return Y(y, [{ key: "gridPadForColumnsInNumericAxis", value: function(e) {
      var t = this.w;
      if (t.globals.noData || t.globals.allSeriesCollapsed)
        return 0;
      var i = function(c) {
        return c === "bar" || c === "rangeBar" || c === "candlestick" || c === "boxPlot";
      }, a = t.config.chart.type, s = 0, r = i(a) ? t.config.series.length : 1;
      if (t.globals.comboBarCount > 0 && (r = t.globals.comboBarCount), t.globals.collapsedSeries.forEach(function(c) {
        i(c.type) && (r -= 1);
      }), t.config.chart.stacked && (r = 1), (i(a) || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && r > 0) {
        var n, o, h = Math.abs(t.globals.initialMaxX - t.globals.initialMinX);
        h <= 3 && (h = t.globals.dataPoints), n = h / e, t.globals.minXDiff && t.globals.minXDiff / n > 0 && (o = t.globals.minXDiff / n), o > e / 2 && (o /= 2), (s = o / r * parseInt(t.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (s = 1), s = s / (r > 1 ? 1 : 1.5) + 5, t.globals.barPadForNumericAxis = s;
      }
      return s;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var e = this, t = this.w, i = t.globals, a = this.dCtx.isSparkline || !t.globals.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(n) {
        t.config[n].text !== void 0 ? a += t.config[n].margin : a += e.dCtx.isSparkline || !t.globals.axisCharts ? 0 : 5;
      }), !t.config.legend.show || t.config.legend.position !== "bottom" || t.config.legend.floating || t.globals.axisCharts || (a += 10);
      var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i.gridHeight = i.gridHeight - s.height - r.height - a, i.translateY = i.translateY + s.height + r.height + a;
    } }, { key: "setGridXPosForDualYAxis", value: function(e, t) {
      var i = this.w, a = new xe(this.dCtx.ctx);
      i.config.yaxis.map(function(s, r) {
        i.globals.ignoreYAxisIndexes.indexOf(r) !== -1 || s.floating || a.isYAxisHidden(r) || (s.opposite && (i.globals.translateX = i.globals.translateX - (t[r].width + e[r].width) - parseInt(i.config.yaxis[r].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2));
      });
    } }]), y;
  }(), Ye = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new kt(this), this.dimYAxis = new St(this), this.dimXAxis = new At(this), this.dimGrid = new Ct(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return Y(y, [{ key: "plotCoords", value: function() {
      var e = this, t = this.w, i = t.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && ((t.config.markers.discrete.length > 0 || t.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(s) {
        var r = Me(s, 2), n = r[0], o = r[1];
        e.gridPad[n] = Math.max(o, e.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(t.config.stroke.width / 2, this.gridPad.top), this.gridPad.bottom = Math.max(t.config.stroke.width / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var a = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
      i.gridWidth = i.gridWidth - 2 * a, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (a > 0 ? a + 4 : 0), i.translateY = i.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var e = this, t = this.w, i = t.globals, a = this.dimYAxis.getyAxisLabelsCoords(), s = this.dimYAxis.getyAxisTitleCoords();
      t.globals.yLabelsCoords = [], t.globals.yTitleCoords = [], t.config.yaxis.map(function(p, f) {
        t.globals.yLabelsCoords.push({ width: a[f].width, index: f }), t.globals.yTitleCoords.push({ width: s[f].width, index: f });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var r = this.dimXAxis.getxAxisLabelsCoords(), n = this.dimXAxis.getxAxisGroupLabelsCoords(), o = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(r, o, n), i.translateXAxisY = t.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = t.globals.rotateXLabels && t.globals.isXNumeric && t.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, t.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(t.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + t.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + t.config.xaxis.labels.offsetX;
      var h = this.yAxisWidth, c = this.xAxisHeight;
      i.xAxisLabelsHeight = this.xAxisHeight - o.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - r.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
      var d = 10;
      (t.config.chart.type === "radar" || this.isSparkline) && (h = 0, c = i.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || t.config.chart.type === "treemap") && (h = 0, c = 0, d = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r);
      var g = function() {
        i.translateX = h, i.gridHeight = i.svgHeight - e.lgRect.height - c - (e.isSparkline || t.config.chart.type === "treemap" ? 0 : t.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - h;
      };
      switch (t.config.xaxis.position === "top" && (d = i.xAxisHeight - t.config.xaxis.axisTicks.height - 5), t.config.legend.position) {
        case "bottom":
          i.translateY = d, g();
          break;
        case "top":
          i.translateY = this.lgRect.height + d, g();
          break;
        case "left":
          i.translateY = d, i.translateX = this.lgRect.width + h, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h;
          break;
        case "right":
          i.translateY = d, i.translateX = h, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(s, a), new Ne(this.ctx).setYAxisXPosition(a, s);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var e = this.w, t = e.globals, i = e.config, a = 0;
      e.config.legend.show && !e.config.legend.floating && (a = 20);
      var s = i.chart.type === "pie" || i.chart.type === "polarArea" || i.chart.type === "donut" ? "pie" : "radialBar", r = i.plotOptions[s].offsetY, n = i.plotOptions[s].offsetX;
      if (!i.legend.show || i.legend.floating)
        return t.gridHeight = t.svgHeight - i.grid.padding.left + i.grid.padding.right, t.gridWidth = t.gridHeight, t.translateY = r, void (t.translateX = n + (t.svgWidth - t.gridWidth) / 2);
      switch (i.legend.position) {
        case "bottom":
          t.gridHeight = t.svgHeight - this.lgRect.height - t.goldenPadding, t.gridWidth = t.svgWidth, t.translateY = r - 10, t.translateX = n + (t.svgWidth - t.gridWidth) / 2;
          break;
        case "top":
          t.gridHeight = t.svgHeight - this.lgRect.height - t.goldenPadding, t.gridWidth = t.svgWidth, t.translateY = this.lgRect.height + r + 10, t.translateX = n + (t.svgWidth - t.gridWidth) / 2;
          break;
        case "left":
          t.gridWidth = t.svgWidth - this.lgRect.width - a, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = n + this.lgRect.width + a;
          break;
        case "right":
          t.gridWidth = t.svgWidth - this.lgRect.width - a - 5, t.gridHeight = i.chart.height !== "auto" ? t.svgHeight : t.gridWidth, t.translateY = r, t.translateX = n + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(e, t, i) {
      var a = this.w, s = a.globals.hasXaxisGroups ? 2 : 1, r = i.height + e.height + t.height, n = a.globals.isMultiLineX ? 1.2 : a.globals.LINE_HEIGHT_RATIO, o = a.globals.rotateXLabels ? 22 : 10, h = a.globals.rotateXLabels && a.config.legend.position === "bottom" ? 10 : 0;
      this.xAxisHeight = r * n + s * o + h, this.xAxisWidth = e.width, this.xAxisHeight - t.height > a.config.xaxis.labels.maxHeight && (this.xAxisHeight = a.config.xaxis.labels.maxHeight), a.config.xaxis.labels.minHeight && this.xAxisHeight < a.config.xaxis.labels.minHeight && (this.xAxisHeight = a.config.xaxis.labels.minHeight), a.config.xaxis.floating && (this.xAxisHeight = 0);
      var c = 0, d = 0;
      a.config.yaxis.forEach(function(g) {
        c += g.labels.minWidth, d += g.labels.maxWidth;
      }), this.yAxisWidth < c && (this.yAxisWidth = c), this.yAxisWidth > d && (this.yAxisWidth = d);
    } }]), y;
  }(), Lt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.lgCtx = e;
    }
    return Y(y, [{ key: "getLegendStyles", value: function() {
      var e, t, i, a = document.createElement("style");
      a.setAttribute("type", "text/css");
      var s = ((e = this.lgCtx.ctx) === null || e === void 0 || (t = e.opts) === null || t === void 0 || (i = t.chart) === null || i === void 0 ? void 0 : i.nonce) || this.w.config.chart.nonce;
      s && a.setAttribute("nonce", s);
      var r = document.createTextNode(`
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
      }
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin-right: 3px;
        border-style: solid;
      }

      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{
        display: inline-block;
      }
      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }`);
      return a.appendChild(r), a;
    } }, { key: "getLegendBBox", value: function() {
      var e = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), t = e.width;
      return { clwh: e.height, clww: t };
    } }, { key: "appendToForeignObject", value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(e, t) {
      var i = this, a = this.w;
      if (a.globals.axisCharts || a.config.chart.type === "radialBar") {
        a.globals.resized = !0;
        var s = null, r = null;
        a.globals.risingSeries = [], a.globals.axisCharts ? (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "']")), r = parseInt(s.getAttribute("data:realIndex"), 10)) : (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(e + 1, "']")), r = parseInt(s.getAttribute("rel"), 10) - 1), t ? [{ cs: a.globals.collapsedSeries, csi: a.globals.collapsedSeriesIndices }, { cs: a.globals.ancillaryCollapsedSeries, csi: a.globals.ancillaryCollapsedSeriesIndices }].forEach(function(c) {
          i.riseCollapsedSeries(c.cs, c.csi, r);
        }) : this.hideSeries({ seriesEl: s, realIndex: r });
      } else {
        var n = a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(e + 1, "'] path")), o = a.config.chart.type;
        if (o === "pie" || o === "polarArea" || o === "donut") {
          var h = a.config.plotOptions.pie.donut.labels;
          new M(this.lgCtx.ctx).pathMouseDown(n.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(n.members[0].node, h);
        }
        n.fire("click");
      }
    } }, { key: "hideSeries", value: function(e) {
      var t = e.seriesEl, i = e.realIndex, a = this.w, s = P.clone(a.config.series);
      if (a.globals.axisCharts) {
        var r = !1;
        if (a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (r = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({ index: i, data: s[i].data.slice(), type: t.parentNode.className.baseVal.split("-")[1] }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !r) {
          a.globals.collapsedSeries.push({ index: i, data: s[i].data.slice(), type: t.parentNode.className.baseVal.split("-")[1] }), a.globals.collapsedSeriesIndices.push(i);
          var n = a.globals.risingSeries.indexOf(i);
          a.globals.risingSeries.splice(n, 1);
        }
      } else
        a.globals.collapsedSeries.push({ index: i, data: s[i] }), a.globals.collapsedSeriesIndices.push(i);
      for (var o = t.childNodes, h = 0; h < o.length; h++)
        o[h].classList.contains("apexcharts-series-markers-wrap") && (o[h].classList.contains("apexcharts-hide") ? o[h].classList.remove("apexcharts-hide") : o[h].classList.add("apexcharts-hide"));
      a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(e, t, i) {
      var a = this.w, s = P.clone(a.config.series);
      if (e.length > 0) {
        for (var r = 0; r < e.length; r++)
          e[r].index === i && (a.globals.axisCharts ? (s[i].data = e[r].data.slice(), e.splice(r, 1), t.splice(r, 1), a.globals.risingSeries.push(i)) : (s[i] = e[r].data, e.splice(r, 1), t.splice(r, 1), a.globals.risingSeries.push(i)));
        s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(e) {
      var t = this.w;
      return t.globals.axisCharts ? e.forEach(function(i, a) {
        t.globals.collapsedSeriesIndices.indexOf(a) > -1 && (e[a].data = []);
      }) : e.forEach(function(i, a) {
        t.globals.collapsedSeriesIndices.indexOf(a) > -1 && (e[a] = 0);
      }), e;
    } }]), y;
  }(), Ke = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new Lt(this);
    }
    return Y(y, [{ key: "init", value: function() {
      var e = this.w, t = e.globals, i = e.config;
      if ((i.legend.showForSingleSeries && t.series.length === 1 || this.isBarsDistributed || t.series.length > 1 || !t.axisCharts) && i.legend.show) {
        for (; t.dom.elLegendWrap.firstChild; )
          t.dom.elLegendWrap.removeChild(t.dom.elLegendWrap.firstChild);
        this.drawLegends(), P.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), i.legend.position === "bottom" || i.legend.position === "top" ? this.legendAlignHorizontal() : i.legend.position !== "right" && i.legend.position !== "left" || this.legendAlignVertical();
      }
    } }, { key: "drawLegends", value: function() {
      var e = this, t = this.w, i = t.config.legend.fontFamily, a = t.globals.seriesNames, s = t.globals.colors.slice();
      if (t.config.chart.type === "heatmap") {
        var r = t.config.plotOptions.heatmap.colorScale.ranges;
        a = r.map(function(T) {
          return T.name ? T.name : T.from + " - " + T.to;
        }), s = r.map(function(T) {
          return T.color;
        });
      } else
        this.isBarsDistributed && (a = t.globals.labels.slice());
      t.config.legend.customLegendItems.length && (a = t.config.legend.customLegendItems);
      for (var n = t.globals.legendFormatter, o = t.config.legend.inverseOrder, h = o ? a.length - 1 : 0; o ? h >= 0 : h <= a.length - 1; o ? h-- : h++) {
        var c, d = n(a[h], { seriesIndex: h, w: t }), g = !1, p = !1;
        if (t.globals.collapsedSeries.length > 0)
          for (var f = 0; f < t.globals.collapsedSeries.length; f++)
            t.globals.collapsedSeries[f].index === h && (g = !0);
        if (t.globals.ancillaryCollapsedSeriesIndices.length > 0)
          for (var b = 0; b < t.globals.ancillaryCollapsedSeriesIndices.length; b++)
            t.globals.ancillaryCollapsedSeriesIndices[b] === h && (p = !0);
        var m = document.createElement("span");
        m.classList.add("apexcharts-legend-marker");
        var w = t.config.legend.markers.offsetX, A = t.config.legend.markers.offsetY, l = t.config.legend.markers.height, u = t.config.legend.markers.width, x = t.config.legend.markers.strokeWidth, v = t.config.legend.markers.strokeColor, k = t.config.legend.markers.radius, S = m.style;
        S.background = s[h], S.color = s[h], S.setProperty("background", s[h], "important"), t.config.legend.markers.fillColors && t.config.legend.markers.fillColors[h] && (S.background = t.config.legend.markers.fillColors[h]), t.globals.seriesColors[h] !== void 0 && (S.background = t.globals.seriesColors[h], S.color = t.globals.seriesColors[h]), S.height = Array.isArray(l) ? parseFloat(l[h]) + "px" : parseFloat(l) + "px", S.width = Array.isArray(u) ? parseFloat(u[h]) + "px" : parseFloat(u) + "px", S.left = (Array.isArray(w) ? parseFloat(w[h]) : parseFloat(w)) + "px", S.top = (Array.isArray(A) ? parseFloat(A[h]) : parseFloat(A)) + "px", S.borderWidth = Array.isArray(x) ? x[h] : x, S.borderColor = Array.isArray(v) ? v[h] : v, S.borderRadius = Array.isArray(k) ? parseFloat(k[h]) + "px" : parseFloat(k) + "px", t.config.legend.markers.customHTML && (Array.isArray(t.config.legend.markers.customHTML) ? t.config.legend.markers.customHTML[h] && (m.innerHTML = t.config.legend.markers.customHTML[h]()) : m.innerHTML = t.config.legend.markers.customHTML()), M.setAttrs(m, { rel: h + 1, "data:collapsed": g || p }), (g || p) && m.classList.add("apexcharts-inactive-legend");
        var C = document.createElement("div"), L = document.createElement("span");
        L.classList.add("apexcharts-legend-text"), L.innerHTML = Array.isArray(d) ? d.join(" ") : d;
        var I = t.config.legend.labels.useSeriesColors ? t.globals.colors[h] : Array.isArray(t.config.legend.labels.colors) ? (c = t.config.legend.labels.colors) === null || c === void 0 ? void 0 : c[h] : t.config.legend.labels.colors;
        I || (I = t.config.chart.foreColor), L.style.color = I, L.style.fontSize = parseFloat(t.config.legend.fontSize) + "px", L.style.fontWeight = t.config.legend.fontWeight, L.style.fontFamily = i || t.config.chart.fontFamily, M.setAttrs(L, { rel: h + 1, i: h, "data:default-text": encodeURIComponent(d), "data:collapsed": g || p }), C.appendChild(m), C.appendChild(L);
        var z = new q(this.ctx);
        t.config.legend.showForZeroSeries || z.getSeriesTotalByIndex(h) === 0 && z.seriesHaveSameValues(h) && !z.isSeriesNull(h) && t.globals.collapsedSeriesIndices.indexOf(h) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && C.classList.add("apexcharts-hidden-zero-series"), t.config.legend.showForNullSeries || z.isSeriesNull(h) && t.globals.collapsedSeriesIndices.indexOf(h) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && C.classList.add("apexcharts-hidden-null-series"), t.globals.dom.elLegendWrap.appendChild(C), t.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(t.config.legend.horizontalAlign)), t.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + t.config.legend.position), C.classList.add("apexcharts-legend-series"), C.style.margin = "".concat(t.config.legend.itemMargin.vertical, "px ").concat(t.config.legend.itemMargin.horizontal, "px"), t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : "", t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : "", M.setAttrs(C, { rel: h + 1, seriesName: P.escapeString(a[h]), "data:collapsed": g || p }), (g || p) && C.classList.add("apexcharts-inactive-legend"), t.config.legend.onItemClick.toggleDataSeries || C.classList.add("apexcharts-no-click");
      }
      t.globals.dom.elWrap.addEventListener("click", e.onLegendClick, !0), t.config.legend.onItemHover.highlightDataSeries && t.config.legend.customLegendItems.length === 0 && (t.globals.dom.elWrap.addEventListener("mousemove", e.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", e.onLegendHovered, !0));
    } }, { key: "setLegendWrapXY", value: function(e, t) {
      var i = this.w, a = i.globals.dom.elLegendWrap, s = a.getBoundingClientRect(), r = 0, n = 0;
      if (i.config.legend.position === "bottom")
        n += i.globals.svgHeight - s.height / 2;
      else if (i.config.legend.position === "top") {
        var o = new Ye(this.ctx), h = o.dimHelpers.getTitleSubtitleCoords("title").height, c = o.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        n = n + (h > 0 ? h - 10 : 0) + (c > 0 ? c - 10 : 0);
      }
      a.style.position = "absolute", r = r + e + i.config.legend.offsetX, n = n + t + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = n + "px", i.config.legend.position === "bottom" ? (a.style.top = "auto", a.style.bottom = 5 - i.config.legend.offsetY + "px") : i.config.legend.position === "right" && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach(function(d) {
        a.style[d] && (a.style[d] = parseInt(i.config.legend[d], 10) + "px");
      });
    } }, { key: "legendAlignHorizontal", value: function() {
      var e = this.w;
      e.globals.dom.elLegendWrap.style.right = 0;
      var t = this.legendHelpers.getLegendBBox(), i = new Ye(this.ctx), a = i.dimHelpers.getTitleSubtitleCoords("title"), s = i.dimHelpers.getTitleSubtitleCoords("subtitle"), r = 0;
      e.config.legend.position === "bottom" ? r = -t.clwh / 1.8 : e.config.legend.position === "top" && (r = a.height + s.height + e.config.title.margin + e.config.subtitle.margin - 10), this.setLegendWrapXY(20, r);
    } }, { key: "legendAlignVertical", value: function() {
      var e = this.w, t = this.legendHelpers.getLegendBBox(), i = 0;
      e.config.legend.position === "left" && (i = 20), e.config.legend.position === "right" && (i = e.globals.svgWidth - t.clww - 10), this.setLegendWrapXY(i, 20);
    } }, { key: "onLegendHovered", value: function(e) {
      var t = this.w, i = e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker");
      if (t.config.chart.type === "heatmap" || this.isBarsDistributed) {
        if (i) {
          var a = parseInt(e.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new te(this.ctx).highlightRangeInSeries(e, e.target);
        }
      } else
        !e.target.classList.contains("apexcharts-inactive-legend") && i && new te(this.ctx).toggleSeriesOnHover(e, e.target);
    } }, { key: "onLegendClick", value: function(e) {
      var t = this.w;
      if (!t.config.legend.customLegendItems.length && (e.target.classList.contains("apexcharts-legend-series") || e.target.classList.contains("apexcharts-legend-text") || e.target.classList.contains("apexcharts-legend-marker"))) {
        var i = parseInt(e.target.getAttribute("rel"), 10) - 1, a = e.target.getAttribute("data:collapsed") === "true", s = this.w.config.chart.events.legendClick;
        typeof s == "function" && s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
        var r = this.w.config.legend.markers.onClick;
        typeof r == "function" && e.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), t.config.chart.type !== "treemap" && t.config.chart.type !== "heatmap" && !this.isBarsDistributed && t.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a);
      }
    } }]), y;
  }(), et = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = t.globals.minX, this.maxX = t.globals.maxX;
    }
    return Y(y, [{ key: "createToolbar", value: function() {
      var e = this, t = this.w, i = function() {
        return document.createElement("div");
      }, a = i();
      if (a.setAttribute("class", "apexcharts-toolbar"), a.style.top = t.config.chart.toolbar.offsetY + "px", a.style.right = 3 - t.config.chart.toolbar.offsetX + "px", t.globals.dom.elWrap.appendChild(a), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
        for (var s = 0; s < this.t.customIcons.length; s++)
          this.elCustomIcons.push(i());
      var r = [], n = function(d, g, p) {
        var f = d.toLowerCase();
        e.t[f] && t.config.chart.zoom.enabled && r.push({ el: g, icon: typeof e.t[f] == "string" ? e.t[f] : p, title: e.localeValues[d], class: "apexcharts-".concat(f, "-icon") });
      };
      n("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), n("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
      var o = function(d) {
        e.t[d] && t.config.chart[d].enabled && r.push({ el: d === "zoom" ? e.elZoom : e.elSelection, icon: typeof e.t[d] == "string" ? e.t[d] : d === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: e.localeValues[d === "zoom" ? "selectionZoom" : "selection"], class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(d, "-icon") });
      };
      o("zoom"), o("selection"), this.t.pan && t.config.chart.zoom.enabled && r.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: t.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), n("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && r.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var h = 0; h < this.elCustomIcons.length; h++)
        r.push({ el: this.elCustomIcons[h], icon: this.t.customIcons[h].icon, title: this.t.customIcons[h].title, index: this.t.customIcons[h].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[h].class });
      r.forEach(function(d, g) {
        d.index && P.moveIndexInArray(r, g, d.index);
      });
      for (var c = 0; c < r.length; c++)
        M.setAttrs(r[c].el, { class: r[c].class, title: r[c].title }), r[c].el.innerHTML = r[c].icon, a.appendChild(r[c].el);
      this._createHamburgerMenu(a), t.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : t.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : t.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(e) {
      this.elMenuItems = [], e.appendChild(this.elMenu), M.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var t = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i = 0; i < t.length; i++)
        this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = t[i].title, M.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(t[i].name), title: t[i].title }), this.elMenu.appendChild(this.elMenuItems[i]);
    } }, { key: "addToolbarEventListeners", value: function() {
      var e = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(i) {
        i.classList.contains("exportSVG") ? i.addEventListener("click", e.handleDownload.bind(e, "svg")) : i.classList.contains("exportPNG") ? i.addEventListener("click", e.handleDownload.bind(e, "png")) : i.classList.contains("exportCSV") && i.addEventListener("click", e.handleDownload.bind(e, "csv"));
      });
      for (var t = 0; t < this.t.customIcons.length; t++)
        this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click.bind(this, this.ctx, this.ctx.w));
    } }, { key: "toggleZoomSelection", value: function(e) {
      this.ctx.getSyncedCharts().forEach(function(t) {
        t.ctx.toolbar.toggleOtherControls();
        var i = e === "selection" ? t.ctx.toolbar.elSelection : t.ctx.toolbar.elZoom, a = e === "selection" ? "selectionEnabled" : "zoomEnabled";
        t.w.globals[a] = !t.w.globals[a], i.classList.contains(t.ctx.toolbar.selectedClass) ? i.classList.remove(t.ctx.toolbar.selectedClass) : i.classList.add(t.ctx.toolbar.selectedClass);
      });
    } }, { key: "getToolbarIconsReference", value: function() {
      var e = this.w;
      this.elZoom || (this.elZoom = e.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = e.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = e.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    } }, { key: "enableZoomPanFromToolbar", value: function(e) {
      this.toggleOtherControls(), e === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
      var t = e === "pan" ? this.elPan : this.elZoom, i = e === "pan" ? this.elZoom : this.elPan;
      t && t.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass);
    } }, { key: "togglePanning", value: function() {
      this.ctx.getSyncedCharts().forEach(function(e) {
        e.ctx.toolbar.toggleOtherControls(), e.w.globals.panEnabled = !e.w.globals.panEnabled, e.ctx.toolbar.elPan.classList.contains(e.ctx.toolbar.selectedClass) ? e.ctx.toolbar.elPan.classList.remove(e.ctx.toolbar.selectedClass) : e.ctx.toolbar.elPan.classList.add(e.ctx.toolbar.selectedClass);
      });
    } }, { key: "toggleOtherControls", value: function() {
      var e = this, t = this.w;
      t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(i) {
        i && i.classList.remove(e.selectedClass);
      });
    } }, { key: "handleZoomIn", value: function() {
      var e = this.w;
      e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY);
      var t = (this.minX + this.maxX) / 2, i = (this.minX + t) / 2, a = (this.maxX + t) / 2, s = this._getNewMinXMaxX(i, a);
      e.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var e = this.w;
      if (e.globals.isRangeBar && (this.minX = e.globals.minY, this.maxX = e.globals.maxY), !(e.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var t = (this.minX + this.maxX) / 2, i = this.minX - (t - this.minX), a = this.maxX - (t - this.maxX), s = this._getNewMinXMaxX(i, a);
        e.globals.disableZoomOut || this.zoomUpdateOptions(s.minX, s.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(e, t) {
      var i = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: i ? Math.floor(e) : e, maxX: i ? Math.floor(t) : t };
    } }, { key: "zoomUpdateOptions", value: function(e, t) {
      var i = this.w;
      if (e !== void 0 || t !== void 0) {
        if (!(i.config.xaxis.convertedCatToNumeric && (e < 1 && (e = 1, t = i.globals.dataPoints), t - e < 2))) {
          var a = { min: e, max: t }, s = this.getBeforeZoomRange(a);
          s && (a = s.xaxis);
          var r = { xaxis: a }, n = P.clone(i.globals.initialConfig.yaxis);
          i.config.chart.zoom.autoScaleYaxis && (n = new we(this.ctx).autoScaleY(this.ctx, n, { xaxis: a })), i.config.chart.group || (r.yaxis = n), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, n);
        }
      } else
        this.handleZoomReset();
    } }, { key: "zoomCallback", value: function(e, t) {
      typeof this.ev.zoomed == "function" && this.ev.zoomed(this.ctx, { xaxis: e, yaxis: t });
    } }, { key: "getBeforeZoomRange", value: function(e, t) {
      var i = null;
      return typeof this.ev.beforeZoom == "function" && (i = this.ev.beforeZoom(this, { xaxis: e, yaxis: t })), i;
    } }, { key: "toggleMenu", value: function() {
      var e = this;
      window.setTimeout(function() {
        e.elMenu.classList.contains("apexcharts-menu-open") ? e.elMenu.classList.remove("apexcharts-menu-open") : e.elMenu.classList.add("apexcharts-menu-open");
      }, 0);
    } }, { key: "handleDownload", value: function(e) {
      var t = this.w, i = new Ee(this.ctx);
      switch (e) {
        case "svg":
          i.exportToSVG(this.ctx);
          break;
        case "png":
          i.exportToPng(this.ctx);
          break;
        case "csv":
          i.exportToCSV({ series: t.config.series, columnDelimiter: t.config.chart.toolbar.export.csv.columnDelimiter });
      }
    } }, { key: "handleZoomReset", value: function(e) {
      this.ctx.getSyncedCharts().forEach(function(t) {
        var i = t.w;
        if (i.globals.lastXAxis.min = i.globals.initialConfig.xaxis.min, i.globals.lastXAxis.max = i.globals.initialConfig.xaxis.max, t.updateHelpers.revertDefaultAxisMinMax(), typeof i.config.chart.events.beforeResetZoom == "function") {
          var a = i.config.chart.events.beforeResetZoom(t, i);
          a && t.updateHelpers.revertDefaultAxisMinMax(a);
        }
        typeof i.config.chart.events.zoomed == "function" && t.ctx.toolbar.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), i.globals.zoomed = !1;
        var s = t.ctx.series.emptyCollapsedSeries(P.clone(i.globals.initialSeries));
        t.updateHelpers._updateSeries(s, i.config.chart.animations.dynamicAnimation.enabled);
      });
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), y;
  }(), Pt = function(y) {
    ge(t, et);
    var e = ue(t);
    function t(i) {
      var a;
      return F(this, t), (a = e.call(this, i)).ctx = i, a.w = i.w, a.dragged = !1, a.graphics = new M(a.ctx), a.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], a.clientX = 0, a.clientY = 0, a.startX = 0, a.endX = 0, a.dragX = 0, a.startY = 0, a.endY = 0, a.dragY = 0, a.moveDirection = "none", a;
    }
    return Y(t, [{ key: "init", value: function(i) {
      var a = this, s = i.xyRatios, r = this.w, n = this;
      this.xyRatios = s, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = r.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), r.globals.dom.elGraphical.add(this.zoomRect), r.globals.dom.elGraphical.add(this.selectionRect), r.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: r.globals.gridWidth, maxY: r.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : r.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: r.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = r.globals.dom.baseEl.querySelector("".concat(r.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(o) {
        a.hoverArea.addEventListener(o, n.svgMouseEvents.bind(n, s), { capture: !1, passive: !0 });
      });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(i, a) {
      var s = this.w, r = this, n = this.ctx.toolbar, o = s.globals.zoomEnabled ? s.config.chart.zoom.type : s.config.chart.selection.type, h = s.config.chart.toolbar.autoSelected;
      if (a.shiftKey ? (this.shiftWasPressed = !0, n.enableZoomPanFromToolbar(h === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (n.enableZoomPanFromToolbar(h), this.shiftWasPressed = !1), a.target) {
        var c, d = a.target.classList;
        if (a.target.parentNode && a.target.parentNode !== null && (c = a.target.parentNode.classList), !(d.contains("apexcharts-selection-rect") || d.contains("apexcharts-legend-marker") || d.contains("apexcharts-legend-text") || c && c.contains("apexcharts-toolbar"))) {
          if (r.clientX = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientX : a.type === "touchend" ? a.changedTouches[0].clientX : a.clientX, r.clientY = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientY : a.type === "touchend" ? a.changedTouches[0].clientY : a.clientY, a.type === "mousedown" && a.which === 1) {
            var g = r.gridRect.getBoundingClientRect();
            r.startX = r.clientX - g.left, r.startY = r.clientY - g.top, r.dragged = !1, r.w.globals.mousedown = !0;
          }
          if ((a.type === "mousemove" && a.which === 1 || a.type === "touchmove") && (r.dragged = !0, s.globals.panEnabled ? (s.globals.selection = null, r.w.globals.mousedown && r.panDragging({ context: r, zoomtype: o, xyRatios: i })) : (r.w.globals.mousedown && s.globals.zoomEnabled || r.w.globals.mousedown && s.globals.selectionEnabled) && (r.selection = r.selectionDrawing({ context: r, zoomtype: o }))), a.type === "mouseup" || a.type === "touchend" || a.type === "mouseleave") {
            var p = r.gridRect.getBoundingClientRect();
            r.w.globals.mousedown && (r.endX = r.clientX - p.left, r.endY = r.clientY - p.top, r.dragX = Math.abs(r.endX - r.startX), r.dragY = Math.abs(r.endY - r.startY), (s.globals.zoomEnabled || s.globals.selectionEnabled) && r.selectionDrawn({ context: r, zoomtype: o }), s.globals.panEnabled && s.config.xaxis.convertedCatToNumeric && r.delayedPanScrolled()), s.globals.zoomEnabled && r.hideSelectionRect(this.selectionRect), r.dragged = !1, r.w.globals.mousedown = !1;
          }
          this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var i = this.w;
      if (this.selectionRect) {
        var a = this.selectionRect.node.getBoundingClientRect();
        a.width > 0 && a.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: i.globals.gridWidth, maxY: i.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
      }
    } }, { key: "preselectedSelection", value: function() {
      var i = this.w, a = this.xyRatios;
      if (!i.globals.zoomEnabled) {
        if (i.globals.selection !== void 0 && i.globals.selection !== null)
          this.drawSelectionRect(i.globals.selection);
        else if (i.config.chart.selection.xaxis.min !== void 0 && i.config.chart.selection.xaxis.max !== void 0) {
          var s = (i.config.chart.selection.xaxis.min - i.globals.minX) / a.xRatio, r = i.globals.gridWidth - (i.globals.maxX - i.config.chart.selection.xaxis.max) / a.xRatio - s;
          i.globals.isRangeBar && (s = (i.config.chart.selection.xaxis.min - i.globals.yAxisScale[0].niceMin) / a.invertedYRatio, r = (i.config.chart.selection.xaxis.max - i.config.chart.selection.xaxis.min) / a.invertedYRatio);
          var n = { x: s, y: 0, width: r, height: i.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
          this.drawSelectionRect(n), this.makeSelectionRectDraggable(), typeof i.config.chart.events.selection == "function" && i.config.chart.events.selection(this.ctx, { xaxis: { min: i.config.chart.selection.xaxis.min, max: i.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(i) {
      var a = i.x, s = i.y, r = i.width, n = i.height, o = i.translateX, h = o === void 0 ? 0 : o, c = i.translateY, d = c === void 0 ? 0 : c, g = this.w, p = this.zoomRect, f = this.selectionRect;
      if (this.dragged || g.globals.selection !== null) {
        var b = { transform: "translate(" + h + ", " + d + ")" };
        g.globals.zoomEnabled && this.dragged && (r < 0 && (r = 1), p.attr({ x: a, y: s, width: r, height: n, fill: g.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": g.config.chart.zoom.zoomedArea.fill.opacity, stroke: g.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": g.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": g.config.chart.zoom.zoomedArea.stroke.opacity }), M.setAttrs(p.node, b)), g.globals.selectionEnabled && (f.attr({ x: a, y: s, width: r > 0 ? r : 0, height: n > 0 ? n : 0, fill: g.config.chart.selection.fill.color, "fill-opacity": g.config.chart.selection.fill.opacity, stroke: g.config.chart.selection.stroke.color, "stroke-width": g.config.chart.selection.stroke.width, "stroke-dasharray": g.config.chart.selection.stroke.dashArray, "stroke-opacity": g.config.chart.selection.stroke.opacity }), M.setAttrs(f.node, b));
      }
    } }, { key: "hideSelectionRect", value: function(i) {
      i && i.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(i) {
      var a = i.context, s = i.zoomtype, r = this.w, n = a, o = this.gridRect.getBoundingClientRect(), h = n.startX - 1, c = n.startY, d = !1, g = !1, p = n.clientX - o.left - h, f = n.clientY - o.top - c, b = {};
      return Math.abs(p + h) > r.globals.gridWidth ? p = r.globals.gridWidth - h : n.clientX - o.left < 0 && (p = h), h > n.clientX - o.left && (d = !0, p = Math.abs(p)), c > n.clientY - o.top && (g = !0, f = Math.abs(f)), b = s === "x" ? { x: d ? h - p : h, y: 0, width: p, height: r.globals.gridHeight } : s === "y" ? { x: 0, y: g ? c - f : c, width: r.globals.gridWidth, height: f } : { x: d ? h - p : h, y: g ? c - f : c, width: p, height: f }, n.drawSelectionRect(b), n.selectionDragging("resizing"), b;
    } }, { key: "selectionDragging", value: function(i, a) {
      var s = this, r = this.w, n = this.xyRatios, o = this.selectionRect, h = 0;
      i === "resizing" && (h = 30);
      var c = function(g) {
        return parseFloat(o.node.getAttribute(g));
      }, d = { x: c("x"), y: c("y"), width: c("width"), height: c("height") };
      r.globals.selection = d, typeof r.config.chart.events.selection == "function" && r.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var g, p, f, b, m = s.gridRect.getBoundingClientRect(), w = o.node.getBoundingClientRect();
        r.globals.isRangeBar ? (g = r.globals.yAxisScale[0].niceMin + (w.left - m.left) * n.invertedYRatio, p = r.globals.yAxisScale[0].niceMin + (w.right - m.left) * n.invertedYRatio, f = 0, b = 1) : (g = r.globals.xAxisScale.niceMin + (w.left - m.left) * n.xRatio, p = r.globals.xAxisScale.niceMin + (w.right - m.left) * n.xRatio, f = r.globals.yAxisScale[0].niceMin + (m.bottom - w.bottom) * n.yRatio[0], b = r.globals.yAxisScale[0].niceMax - (w.top - m.top) * n.yRatio[0]);
        var A = { xaxis: { min: g, max: p }, yaxis: { min: f, max: b } };
        r.config.chart.events.selection(s.ctx, A), r.config.chart.brush.enabled && r.config.chart.events.brushScrolled !== void 0 && r.config.chart.events.brushScrolled(s.ctx, A);
      }, h));
    } }, { key: "selectionDrawn", value: function(i) {
      var a = i.context, s = i.zoomtype, r = this.w, n = a, o = this.xyRatios, h = this.ctx.toolbar;
      if (n.startX > n.endX) {
        var c = n.startX;
        n.startX = n.endX, n.endX = c;
      }
      if (n.startY > n.endY) {
        var d = n.startY;
        n.startY = n.endY, n.endY = d;
      }
      var g = void 0, p = void 0;
      r.globals.isRangeBar ? (g = r.globals.yAxisScale[0].niceMin + n.startX * o.invertedYRatio, p = r.globals.yAxisScale[0].niceMin + n.endX * o.invertedYRatio) : (g = r.globals.xAxisScale.niceMin + n.startX * o.xRatio, p = r.globals.xAxisScale.niceMin + n.endX * o.xRatio);
      var f = [], b = [];
      if (r.config.yaxis.forEach(function(k, S) {
        f.push(r.globals.yAxisScale[S].niceMax - o.yRatio[S] * n.startY), b.push(r.globals.yAxisScale[S].niceMax - o.yRatio[S] * n.endY);
      }), n.dragged && (n.dragX > 10 || n.dragY > 10) && g !== p) {
        if (r.globals.zoomEnabled) {
          var m = P.clone(r.globals.initialConfig.yaxis), w = P.clone(r.globals.initialConfig.xaxis);
          if (r.globals.zoomed = !0, r.config.xaxis.convertedCatToNumeric && (g = Math.floor(g), p = Math.floor(p), g < 1 && (g = 1, p = r.globals.dataPoints), p - g < 2 && (p = g + 1)), s !== "xy" && s !== "x" || (w = { min: g, max: p }), s !== "xy" && s !== "y" || m.forEach(function(k, S) {
            m[S].min = b[S], m[S].max = f[S];
          }), r.config.chart.zoom.autoScaleYaxis) {
            var A = new we(n.ctx);
            m = A.autoScaleY(n.ctx, m, { xaxis: w });
          }
          if (h) {
            var l = h.getBeforeZoomRange(w, m);
            l && (w = l.xaxis ? l.xaxis : w, m = l.yaxis ? l.yaxis : m);
          }
          var u = { xaxis: w };
          r.config.chart.group || (u.yaxis = m), n.ctx.updateHelpers._updateOptions(u, !1, n.w.config.chart.animations.dynamicAnimation.enabled), typeof r.config.chart.events.zoomed == "function" && h.zoomCallback(w, m);
        } else if (r.globals.selectionEnabled) {
          var x, v = null;
          x = { min: g, max: p }, s !== "xy" && s !== "y" || (v = P.clone(r.config.yaxis)).forEach(function(k, S) {
            v[S].min = b[S], v[S].max = f[S];
          }), r.globals.selection = n.selection, typeof r.config.chart.events.selection == "function" && r.config.chart.events.selection(n.ctx, { xaxis: x, yaxis: v });
        }
      }
    } }, { key: "panDragging", value: function(i) {
      var a = i.context, s = this.w, r = a;
      if (s.globals.lastClientPosition.x !== void 0) {
        var n = s.globals.lastClientPosition.x - r.clientX, o = s.globals.lastClientPosition.y - r.clientY;
        Math.abs(n) > Math.abs(o) && n > 0 ? this.moveDirection = "left" : Math.abs(n) > Math.abs(o) && n < 0 ? this.moveDirection = "right" : Math.abs(o) > Math.abs(n) && o > 0 ? this.moveDirection = "up" : Math.abs(o) > Math.abs(n) && o < 0 && (this.moveDirection = "down");
      }
      s.globals.lastClientPosition = { x: r.clientX, y: r.clientY };
      var h = s.globals.isRangeBar ? s.globals.minY : s.globals.minX, c = s.globals.isRangeBar ? s.globals.maxY : s.globals.maxX;
      s.config.xaxis.convertedCatToNumeric || r.panScrolled(h, c);
    } }, { key: "delayedPanScrolled", value: function() {
      var i = this.w, a = i.globals.minX, s = i.globals.maxX, r = (i.globals.maxX - i.globals.minX) / 2;
      this.moveDirection === "left" ? (a = i.globals.minX + r, s = i.globals.maxX + r) : this.moveDirection === "right" && (a = i.globals.minX - r, s = i.globals.maxX - r), a = Math.floor(a), s = Math.floor(s), this.updateScrolledChart({ xaxis: { min: a, max: s } }, a, s);
    } }, { key: "panScrolled", value: function(i, a) {
      var s = this.w, r = this.xyRatios, n = P.clone(s.globals.initialConfig.yaxis), o = r.xRatio, h = s.globals.minX, c = s.globals.maxX;
      s.globals.isRangeBar && (o = r.invertedYRatio, h = s.globals.minY, c = s.globals.maxY), this.moveDirection === "left" ? (i = h + s.globals.gridWidth / 15 * o, a = c + s.globals.gridWidth / 15 * o) : this.moveDirection === "right" && (i = h - s.globals.gridWidth / 15 * o, a = c - s.globals.gridWidth / 15 * o), s.globals.isRangeBar || (i < s.globals.initialMinX || a > s.globals.initialMaxX) && (i = h, a = c);
      var d = { min: i, max: a };
      s.config.chart.zoom.autoScaleYaxis && (n = new we(this.ctx).autoScaleY(this.ctx, n, { xaxis: d }));
      var g = { xaxis: { min: i, max: a } };
      s.config.chart.group || (g.yaxis = n), this.updateScrolledChart(g, i, a);
    } }, { key: "updateScrolledChart", value: function(i, a, s) {
      var r = this.w;
      this.ctx.updateHelpers._updateOptions(i, !1, !1), typeof r.config.chart.events.scrolled == "function" && r.config.chart.events.scrolled(this.ctx, { xaxis: { min: a, max: s } });
    } }]), t;
  }(), tt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx;
    }
    return Y(y, [{ key: "getNearestValues", value: function(e) {
      var t = e.hoverArea, i = e.elGrid, a = e.clientX, s = e.clientY, r = this.w, n = i.getBoundingClientRect(), o = n.width, h = n.height, c = o / (r.globals.dataPoints - 1), d = h / r.globals.dataPoints, g = this.hasBars();
      !r.globals.comboCharts && !g || r.config.xaxis.convertedCatToNumeric || (c = o / r.globals.dataPoints);
      var p = a - n.left - r.globals.barPadForNumericAxis, f = s - n.top;
      p < 0 || f < 0 || p > o || f > h ? (t.classList.remove("hovering-zoom"), t.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (t.classList.remove("hovering-pan"), t.classList.add("hovering-zoom")) : r.globals.panEnabled && (t.classList.remove("hovering-zoom"), t.classList.add("hovering-pan"));
      var b = Math.round(p / c), m = Math.floor(f / d);
      g && !r.config.xaxis.convertedCatToNumeric && (b = Math.ceil(p / c), b -= 1);
      var w = null, A = null, l = r.globals.seriesXvalues.map(function(S) {
        return S.filter(function(C) {
          return P.isNumber(C);
        });
      }), u = r.globals.seriesYvalues.map(function(S) {
        return S.filter(function(C) {
          return P.isNumber(C);
        });
      });
      if (r.globals.isXNumeric) {
        var x = this.ttCtx.getElGrid().getBoundingClientRect(), v = p * (x.width / o), k = f * (x.height / h);
        w = (A = this.closestInMultiArray(v, k, l, u)).index, b = A.j, w !== null && (l = r.globals.seriesXvalues[w], b = (A = this.closestInArray(v, l)).index);
      }
      return r.globals.capturedSeriesIndex = w === null ? -1 : w, (!b || b < 1) && (b = 0), r.globals.isBarHorizontal ? r.globals.capturedDataPointIndex = m : r.globals.capturedDataPointIndex = b, { capturedSeries: w, j: r.globals.isBarHorizontal ? m : b, hoverX: p, hoverY: f };
    } }, { key: "closestInMultiArray", value: function(e, t, i, a) {
      var s = this.w, r = 0, n = null, o = -1;
      s.globals.series.length > 1 ? r = this.getFirstActiveXArray(i) : n = 0;
      var h = i[r][0], c = Math.abs(e - h);
      if (i.forEach(function(p) {
        p.forEach(function(f, b) {
          var m = Math.abs(e - f);
          m <= c && (c = m, o = b);
        });
      }), o !== -1) {
        var d = a[r][o], g = Math.abs(t - d);
        n = r, a.forEach(function(p, f) {
          var b = Math.abs(t - p[o]);
          b <= g && (g = b, n = f);
        });
      }
      return { index: n, j: o };
    } }, { key: "getFirstActiveXArray", value: function(e) {
      for (var t = this.w, i = 0, a = e.map(function(r, n) {
        return r.length > 0 ? n : -1;
      }), s = 0; s < a.length; s++)
        if (a[s] !== -1 && t.globals.collapsedSeriesIndices.indexOf(s) === -1 && t.globals.ancillaryCollapsedSeriesIndices.indexOf(s) === -1) {
          i = a[s];
          break;
        }
      return i;
    } }, { key: "closestInArray", value: function(e, t) {
      for (var i = t[0], a = null, s = Math.abs(e - i), r = 0; r < t.length; r++) {
        var n = Math.abs(e - t[r]);
        n < s && (s = n, a = r);
      }
      return { index: a };
    } }, { key: "isXoverlap", value: function(e) {
      var t = [], i = this.w.globals.seriesX.filter(function(s) {
        return s[0] !== void 0;
      });
      if (i.length > 0)
        for (var a = 0; a < i.length - 1; a++)
          i[a][e] !== void 0 && i[a + 1][e] !== void 0 && i[a][e] !== i[a + 1][e] && t.push("unEqual");
      return t.length === 0;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var e = !0, t = this.w.globals.initialSeries, i = 0; i < t.length - 1; i++)
        if (t[i].data.length !== t[i + 1].data.length) {
          e = !1;
          break;
        }
      return e;
    } }, { key: "getBarsHeight", value: function(e) {
      return J(e).reduce(function(t, i) {
        return t + i.getBBox().height;
      }, 0);
    } }, { key: "getElMarkers", value: function(e) {
      return typeof e == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      (e = J(e)).sort(function(i, a) {
        var s = Number(i.getAttribute("data:realIndex")), r = Number(a.getAttribute("data:realIndex"));
        return r < s ? 1 : r > s ? -1 : 0;
      });
      var t = [];
      return e.forEach(function(i) {
        t.push(i.querySelector(".apexcharts-marker"));
      }), t;
    } }, { key: "hasMarkers", value: function(e) {
      return this.getElMarkers(e).length > 0;
    } }, { key: "getElBars", value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    } }, { key: "hasBars", value: function() {
      return this.getElBars().length > 0;
    } }, { key: "getHoverMarkerSize", value: function(e) {
      var t = this.w, i = t.config.markers.hover.size;
      return i === void 0 && (i = t.globals.markers.size[e] + t.config.markers.hover.sizeOffset), i;
    } }, { key: "toggleAllTooltipSeriesGroups", value: function(e) {
      var t = this.w, i = this.ttCtx;
      i.allTooltipSeriesGroups.length === 0 && (i.allTooltipSeriesGroups = t.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++)
        e === "enable" ? (a[s].classList.add("apexcharts-active"), a[s].style.display = t.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none");
    } }]), y;
  }(), It = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.ctx = e.ctx, this.ttCtx = e, this.tooltipUtil = new tt(e);
    }
    return Y(y, [{ key: "drawSeriesTexts", value: function(e) {
      var t = e.shared, i = t === void 0 || t, a = e.ttItems, s = e.i, r = s === void 0 ? 0 : s, n = e.j, o = n === void 0 ? null : n, h = e.y1, c = e.y2, d = e.e, g = this.w;
      g.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: r, j: o, y1: h, y2: c, w: g }) : this.toggleActiveInactiveSeries(i);
      var p = this.getValuesToPrint({ i: r, j: o });
      this.printLabels({ i: r, j: o, values: p, ttItems: a, shared: i, e: d });
      var f = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = f.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = f.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(e) {
      var t, i = this, a = e.i, s = e.j, r = e.values, n = e.ttItems, o = e.shared, h = e.e, c = this.w, d = [], g = function(x) {
        return c.globals.seriesGoals[x] && c.globals.seriesGoals[x][s] && Array.isArray(c.globals.seriesGoals[x][s]);
      }, p = r.xVal, f = r.zVal, b = r.xAxisTTVal, m = "", w = c.globals.colors[a];
      s !== null && c.config.plotOptions.bar.distributed && (w = c.globals.colors[s]);
      for (var A = function(x, v) {
        var k = i.getFormatters(a);
        m = i.getSeriesName({ fn: k.yLbTitleFormatter, index: a, seriesIndex: a, j: s }), c.config.chart.type === "treemap" && (m = k.yLbTitleFormatter(String(c.config.series[a].data[s].x), { series: c.globals.series, seriesIndex: a, dataPointIndex: s, w: c }));
        var S = c.config.tooltip.inverseOrder ? v : x;
        if (c.globals.axisCharts) {
          var C = function(z) {
            var T, E, R, O;
            return c.globals.isRangeData ? k.yLbFormatter((T = c.globals.seriesRangeStart) === null || T === void 0 || (E = T[z]) === null || E === void 0 ? void 0 : E[s], { series: c.globals.seriesRangeStart, seriesIndex: z, dataPointIndex: s, w: c }) + " - " + k.yLbFormatter((R = c.globals.seriesRangeEnd) === null || R === void 0 || (O = R[z]) === null || O === void 0 ? void 0 : O[s], { series: c.globals.seriesRangeEnd, seriesIndex: z, dataPointIndex: s, w: c }) : k.yLbFormatter(c.globals.series[z][s], { series: c.globals.series, seriesIndex: z, dataPointIndex: s, w: c });
          };
          if (o)
            k = i.getFormatters(S), m = i.getSeriesName({ fn: k.yLbTitleFormatter, index: S, seriesIndex: a, j: s }), w = c.globals.colors[S], t = C(S), g(S) && (d = c.globals.seriesGoals[S][s].map(function(z) {
              return { attrs: z, val: k.yLbFormatter(z.value, { seriesIndex: S, dataPointIndex: s, w: c }) };
            }));
          else {
            var L, I = h == null || (L = h.target) === null || L === void 0 ? void 0 : L.getAttribute("fill");
            I && (w = I.indexOf("url") !== -1 ? document.querySelector(I.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : I), t = C(a), g(a) && Array.isArray(c.globals.seriesGoals[a][s]) && (d = c.globals.seriesGoals[a][s].map(function(z) {
              return { attrs: z, val: k.yLbFormatter(z.value, { seriesIndex: a, dataPointIndex: s, w: c }) };
            }));
          }
        }
        s === null && (t = k.yLbFormatter(c.globals.series[a], X(X({}, c), {}, { seriesIndex: a, dataPointIndex: a }))), i.DOMHandling({ i: a, t: S, j: s, ttItems: n, values: { val: t, goalVals: d, xVal: p, xAxisTTVal: b, zVal: f }, seriesName: m, shared: o, pColor: w });
      }, l = 0, u = c.globals.series.length - 1; l < c.globals.series.length; l++, u--)
        A(l, u);
    } }, { key: "getFormatters", value: function(e) {
      var t, i = this.w, a = i.globals.yLabelFormatters[e];
      return i.globals.ttVal !== void 0 ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[e] && i.globals.ttVal[e].formatter, t = i.globals.ttVal[e] && i.globals.ttVal[e].title && i.globals.ttVal[e].title.formatter) : (a = i.globals.ttVal.formatter, typeof i.globals.ttVal.title.formatter == "function" && (t = i.globals.ttVal.title.formatter)) : t = i.config.tooltip.y.title.formatter, typeof a != "function" && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(s) {
        return s;
      }), typeof t != "function" && (t = function(s) {
        return s;
      }), { yLbFormatter: a, yLbTitleFormatter: t };
    } }, { key: "getSeriesName", value: function(e) {
      var t = e.fn, i = e.index, a = e.seriesIndex, s = e.j, r = this.w;
      return t(String(r.globals.seriesNames[i]), { series: r.globals.series, seriesIndex: a, dataPointIndex: s, w: r });
    } }, { key: "DOMHandling", value: function(e) {
      e.i;
      var t = e.t, i = e.j, a = e.ttItems, s = e.values, r = e.seriesName, n = e.shared, o = e.pColor, h = this.w, c = this.ttCtx, d = s.val, g = s.goalVals, p = s.xVal, f = s.xAxisTTVal, b = s.zVal, m = null;
      m = a[t].children, h.config.tooltip.fillSeriesColor && (a[t].style.backgroundColor = o, m[0].style.display = "none"), c.showTooltipTitle && (c.tooltipTitle === null && (c.tooltipTitle = h.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), c.tooltipTitle.innerHTML = p), c.isXAxisTooltipEnabled && (c.xaxisTooltipText.innerHTML = f !== "" ? f : p);
      var w = a[t].querySelector(".apexcharts-tooltip-text-y-label");
      w && (w.innerHTML = r || "");
      var A = a[t].querySelector(".apexcharts-tooltip-text-y-value");
      A && (A.innerHTML = d !== void 0 ? d : ""), m[0] && m[0].classList.contains("apexcharts-tooltip-marker") && (h.config.tooltip.marker.fillColors && Array.isArray(h.config.tooltip.marker.fillColors) && (o = h.config.tooltip.marker.fillColors[t]), m[0].style.backgroundColor = o), h.config.tooltip.marker.show || (m[0].style.display = "none");
      var l = a[t].querySelector(".apexcharts-tooltip-text-goals-label"), u = a[t].querySelector(".apexcharts-tooltip-text-goals-value");
      if (g.length && h.globals.seriesGoals[t]) {
        var x = function() {
          var S = "<div >", C = "<div>";
          g.forEach(function(L, I) {
            S += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(L.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(L.attrs.name, "</div>"), C += "<div>".concat(L.val, "</div>");
          }), l.innerHTML = S + "</div>", u.innerHTML = C + "</div>";
        };
        n ? h.globals.seriesGoals[t][i] && Array.isArray(h.globals.seriesGoals[t][i]) ? x() : (l.innerHTML = "", u.innerHTML = "") : x();
      } else
        l.innerHTML = "", u.innerHTML = "";
      if (b !== null && (a[t].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = h.config.tooltip.z.title, a[t].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = b !== void 0 ? b : ""), n && m[0]) {
        if (h.config.tooltip.hideEmptySeries) {
          var v = a[t].querySelector(".apexcharts-tooltip-marker"), k = a[t].querySelector(".apexcharts-tooltip-text");
          parseFloat(d) == 0 ? (v.style.display = "none", k.style.display = "none") : (v.style.display = "block", k.style.display = "block");
        }
        d == null || h.globals.ancillaryCollapsedSeriesIndices.indexOf(t) > -1 || h.globals.collapsedSeriesIndices.indexOf(t) > -1 ? m[0].parentNode.style.display = "none" : m[0].parentNode.style.display = h.config.tooltip.items.display;
      }
    } }, { key: "toggleActiveInactiveSeries", value: function(e) {
      var t = this.w;
      if (e)
        this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var i = t.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
        i && (i.classList.add("apexcharts-active"), i.style.display = t.config.tooltip.items.display);
      }
    } }, { key: "getValuesToPrint", value: function(e) {
      var t = e.i, i = e.j, a = this.w, s = this.ctx.series.filteredSeriesX(), r = "", n = "", o = null, h = null, c = { series: a.globals.series, seriesIndex: t, dataPointIndex: i, w: a }, d = a.globals.ttZFormatter;
      i === null ? h = a.globals.series[t] : a.globals.isXNumeric && a.config.chart.type !== "treemap" ? (r = s[t][i], s[t].length === 0 && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = a.globals.labels[i] !== void 0 ? a.globals.labels[i] : "";
      var g = r;
      return a.globals.isXNumeric && a.config.xaxis.type === "datetime" ? r = new re(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, g, g, { i: void 0, dateFormatter: new B(this.ctx).formatDate, w: this.w }) : r = a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](g, c) : a.globals.xLabelFormatter(g, c), a.config.tooltip.x.formatter !== void 0 && (r = a.globals.ttKeyFormatter(g, c)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[t].length > 0 && (o = d(a.globals.seriesZ[t][i], a)), n = typeof a.config.xaxis.tooltip.formatter == "function" ? a.globals.xaxisTooltipFormatter(g, c) : r, { val: Array.isArray(h) ? h.join(" ") : h, xVal: Array.isArray(r) ? r.join(" ") : r, xAxisTTVal: Array.isArray(n) ? n.join(" ") : n, zVal: o };
    } }, { key: "handleCustomTooltip", value: function(e) {
      var t = e.i, i = e.j, a = e.y1, s = e.y2, r = e.w, n = this.ttCtx.getElTooltip(), o = r.config.tooltip.custom;
      Array.isArray(o) && o[t] && (o = o[t]), n.innerHTML = o({ ctx: this.ctx, series: r.globals.series, seriesIndex: t, dataPointIndex: i, y1: a, y2: s, w: r });
    } }]), y;
  }(), it = function() {
    function y(e) {
      F(this, y), this.ttCtx = e, this.ctx = e.ctx, this.w = e.w;
    }
    return Y(y, [{ key: "moveXCrosshairs", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.ttCtx, a = this.w, s = i.getElXCrosshairs(), r = e - i.xcrosshairsWidth / 2, n = a.globals.labels.slice().length;
      if (t !== null && (r = a.globals.gridWidth / n * t), s === null || a.globals.isBarHorizontal || (s.setAttribute("x", r), s.setAttribute("x1", r), s.setAttribute("x2", r), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), r < 0 && (r = 0), r > a.globals.gridWidth && (r = a.globals.gridWidth), i.isXAxisTooltipEnabled) {
        var o = r;
        a.config.xaxis.crosshairs.width !== "tickWidth" && a.config.xaxis.crosshairs.width !== "barWidth" || (o = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o);
      }
    } }, { key: "moveYCrosshairs", value: function(e) {
      var t = this.ttCtx;
      t.ycrosshairs !== null && M.setAttrs(t.ycrosshairs, { y1: e, y2: e }), t.ycrosshairsHidden !== null && M.setAttrs(t.ycrosshairsHidden, { y1: e, y2: e });
    } }, { key: "moveXAxisTooltip", value: function(e) {
      var t = this.w, i = this.ttCtx;
      if (i.xaxisTooltip !== null && i.xcrosshairsWidth !== 0) {
        i.xaxisTooltip.classList.add("apexcharts-active");
        var a = i.xaxisOffY + t.config.xaxis.tooltip.offsetY + t.globals.translateY + 1 + t.config.xaxis.offsetY;
        if (e -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(e)) {
          e += t.globals.translateX;
          var s;
          s = new M(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = e + "px", i.xaxisTooltip.style.top = a + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(e) {
      var t = this.w, i = this.ttCtx;
      i.yaxisTTEls === null && (i.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = t.globals.translateY + a, r = i.yaxisTTEls[e].getBoundingClientRect().height, n = t.globals.translateYAxisX[e] - 2;
      t.config.yaxis[e].opposite && (n -= 26), s -= r / 2, t.globals.ignoreYAxisIndexes.indexOf(e) === -1 ? (i.yaxisTTEls[e].classList.add("apexcharts-active"), i.yaxisTTEls[e].style.top = s + "px", i.yaxisTTEls[e].style.left = n + t.config.yaxis[e].tooltip.offsetX + "px") : i.yaxisTTEls[e].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = this.ttCtx, r = s.getElTooltip(), n = s.tooltipRect, o = i !== null ? parseFloat(i) : 1, h = parseFloat(e) + o + 5, c = parseFloat(t) + o / 2;
      if (h > a.globals.gridWidth / 2 && (h = h - n.ttWidth - o - 10), h > a.globals.gridWidth - n.ttWidth - 10 && (h = a.globals.gridWidth - n.ttWidth), h < -20 && (h = -20), a.config.tooltip.followCursor) {
        var d = s.getElGrid().getBoundingClientRect();
        (h = s.e.clientX - d.left) > a.globals.gridWidth / 2 && (h -= s.tooltipRect.ttWidth), (c = s.e.clientY + a.globals.translateY - d.top) > a.globals.gridHeight / 2 && (c -= s.tooltipRect.ttHeight);
      } else
        a.globals.isBarHorizontal || n.ttHeight / 2 + c > a.globals.gridHeight && (c = a.globals.gridHeight - n.ttHeight + a.globals.translateY);
      isNaN(h) || (h += a.globals.translateX, r.style.left = h + "px", r.style.top = c + "px");
    } }, { key: "moveMarkers", value: function(e, t) {
      var i = this.w, a = this.ttCtx;
      if (i.globals.markers.size[e] > 0)
        for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-marker")), r = 0; r < s.length; r++)
          parseInt(s[r].getAttribute("rel"), 10) === t && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(t, s[r]));
      else
        a.marker.resetPointsSize(), this.moveDynamicPointOnHover(t, e);
    } }, { key: "moveDynamicPointOnHover", value: function(e, t) {
      var i, a, s = this.w, r = this.ttCtx, n = s.globals.pointsArray, o = r.tooltipUtil.getHoverMarkerSize(t), h = s.config.series[t].type;
      if (!h || h !== "column" && h !== "candlestick" && h !== "boxPlot") {
        i = n[t][e][0], a = n[t][e][1] ? n[t][e][1] : 0;
        var c = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers circle"));
        c && a < s.globals.gridHeight && a > 0 && (c.setAttribute("r", o), c.setAttribute("cx", i), c.setAttribute("cy", a)), this.moveXCrosshairs(i), r.fixedTooltip || this.moveTooltip(i, a, o);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(e) {
      var t, i = this.ttCtx, a = i.w, s = 0, r = 0, n = a.globals.pointsArray;
      t = new te(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var o = i.tooltipUtil.getHoverMarkerSize(t);
      n[t] && (s = n[t][e][0], r = n[t][e][1]);
      var h = i.tooltipUtil.getAllMarkers();
      if (h !== null)
        for (var c = 0; c < a.globals.series.length; c++) {
          var d = n[c];
          if (a.globals.comboCharts && d === void 0 && h.splice(c, 0, null), d && d.length) {
            var g = n[c][e][1], p = void 0;
            if (h[c].setAttribute("cx", s), a.config.chart.type === "rangeArea" && !a.globals.comboCharts) {
              var f = e + a.globals.series[c].length;
              p = n[c][f][1], g -= Math.abs(g - p) / 2;
            }
            g !== null && !isNaN(g) && g < a.globals.gridHeight + o && g + o > 0 ? (h[c] && h[c].setAttribute("r", o), h[c] && h[c].setAttribute("cy", g)) : h[c] && h[c].setAttribute("r", 0);
          }
        }
      this.moveXCrosshairs(s), i.fixedTooltip || this.moveTooltip(s, r || a.globals.gridHeight, o);
    } }, { key: "moveStickyTooltipOverBars", value: function(e, t) {
      var i = this.w, a = this.ttCtx, s = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length, r = s >= 2 && s % 2 == 0 ? Math.floor(s / 2) : Math.floor(s / 2) + 1;
      i.globals.isBarHorizontal && (r = new te(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(e, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(e, "']"));
      n || typeof t != "number" || (n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(t, "'] path[j='").concat(e, "']")));
      var o = n ? parseFloat(n.getAttribute("cx")) : 0, h = n ? parseFloat(n.getAttribute("cy")) : 0, c = n ? parseFloat(n.getAttribute("barWidth")) : 0, d = a.getElGrid().getBoundingClientRect(), g = n && (n.classList.contains("apexcharts-candlestick-area") || n.classList.contains("apexcharts-boxPlot-area"));
      i.globals.isXNumeric ? (n && !g && (o -= s % 2 != 0 ? c / 2 : 0), n && g && i.globals.comboCharts && (o -= c / 2)) : i.globals.isBarHorizontal || (o = a.xAxisTicksPositions[e - 1] + a.dataPointsDividedWidth / 2, isNaN(o) && (o = a.xAxisTicksPositions[e] - a.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? h -= a.tooltipRect.ttHeight : i.config.tooltip.followCursor ? h = a.e.clientY - d.top - a.tooltipRect.ttHeight / 2 : h + a.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (h = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(o), a.fixedTooltip || this.moveTooltip(o, h || i.globals.gridHeight);
    } }]), y;
  }(), Tt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.ttCtx = e, this.ctx = e.ctx, this.tooltipPosition = new it(e);
    }
    return Y(y, [{ key: "drawDynamicPoints", value: function() {
      var e = this.w, t = new M(this.ctx), i = new Pe(this.ctx), a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      a = J(a), e.config.chart.stacked && a.sort(function(d, g) {
        return parseFloat(d.getAttribute("data:realIndex")) - parseFloat(g.getAttribute("data:realIndex"));
      });
      for (var s = 0; s < a.length; s++) {
        var r = a[s].querySelector(".apexcharts-series-markers-wrap");
        if (r !== null) {
          var n = void 0, o = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          e.config.chart.type !== "line" && e.config.chart.type !== "area" || e.globals.comboCharts || e.config.tooltip.intersect || (o += " no-pointer-events");
          var h = i.getMarkerConfig({ cssClass: o, seriesIndex: Number(r.getAttribute("data:realIndex")) });
          (n = t.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
          var c = document.createElementNS(e.globals.SVGNS, "g");
          c.classList.add("apexcharts-series-markers"), c.appendChild(n.node), r.appendChild(c);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w;
      s.config.chart.type !== "bubble" && this.newPointSize(e, t);
      var r = t.getAttribute("cx"), n = t.getAttribute("cy");
      if (i !== null && a !== null && (r = i, n = a), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) {
        if (s.config.chart.type === "radar") {
          var o = this.ttCtx.getElGrid().getBoundingClientRect();
          r = this.ttCtx.e.clientX - o.left;
        }
        this.tooltipPosition.moveTooltip(r, n, s.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(e) {
      for (var t = this.w, i = this, a = this.ttCtx, s = e, r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = t.config.markers.hover.size, o = 0; o < r.length; o++) {
        var h = r[o].getAttribute("rel"), c = r[o].getAttribute("index");
        if (n === void 0 && (n = t.globals.markers.size[c] + t.config.markers.hover.sizeOffset), s === parseInt(h, 10)) {
          i.newPointSize(s, r[o]);
          var d = r[o].getAttribute("cx"), g = r[o].getAttribute("cy");
          i.tooltipPosition.moveXCrosshairs(d), a.fixedTooltip || i.tooltipPosition.moveTooltip(d, g, n);
        } else
          i.oldPointSize(r[o]);
      }
    } }, { key: "newPointSize", value: function(e, t) {
      var i = this.w, a = i.config.markers.hover.size, s = e === 0 ? t.parentNode.firstChild : t.parentNode.lastChild;
      if (s.getAttribute("default-marker-size") !== "0") {
        var r = parseInt(s.getAttribute("index"), 10);
        a === void 0 && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), a < 0 && (a = 0), s.setAttribute("r", a);
      }
    } }, { key: "oldPointSize", value: function(e) {
      var t = parseFloat(e.getAttribute("default-marker-size"));
      e.setAttribute("r", t);
    } }, { key: "resetPointsSize", value: function() {
      for (var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), t = 0; t < e.length; t++) {
        var i = parseFloat(e[t].getAttribute("default-marker-size"));
        P.isNumber(i) && i >= 0 ? e[t].setAttribute("r", i) : e[t].setAttribute("r", 0);
      }
    } }]), y;
  }(), zt = function() {
    function y(e) {
      F(this, y), this.w = e.w;
      var t = this.w;
      this.ttCtx = e, this.isVerticalGroupedRangeBar = !t.globals.isBarHorizontal && t.config.chart.type === "rangeBar" && t.config.plotOptions.bar.rangeBarGroupRows;
    }
    return Y(y, [{ key: "getAttr", value: function(e, t) {
      return parseFloat(e.target.getAttribute(t));
    } }, { key: "handleHeatTreeTooltip", value: function(e) {
      var t = e.e, i = e.opt, a = e.x, s = e.y, r = e.type, n = this.ttCtx, o = this.w;
      if (t.target.classList.contains("apexcharts-".concat(r, "-rect"))) {
        var h = this.getAttr(t, "i"), c = this.getAttr(t, "j"), d = this.getAttr(t, "cx"), g = this.getAttr(t, "cy"), p = this.getAttr(t, "width"), f = this.getAttr(t, "height");
        if (n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: h, j: c, shared: !1, e: t }), o.globals.capturedSeriesIndex = h, o.globals.capturedDataPointIndex = c, a = d + n.tooltipRect.ttWidth / 2 + p, s = g + n.tooltipRect.ttHeight / 2 - f / 2, n.tooltipPosition.moveXCrosshairs(d + p / 2), a > o.globals.gridWidth / 2 && (a = d - n.tooltipRect.ttWidth / 2 + p), n.w.config.tooltip.followCursor) {
          var b = o.globals.dom.elWrap.getBoundingClientRect();
          a = o.globals.clientX - b.left - (a > o.globals.gridWidth / 2 ? n.tooltipRect.ttWidth : 0), s = o.globals.clientY - b.top - (s > o.globals.gridHeight / 2 ? n.tooltipRect.ttHeight : 0);
        }
      }
      return { x: a, y: s };
    } }, { key: "handleMarkerTooltip", value: function(e) {
      var t, i, a = e.e, s = e.opt, r = e.x, n = e.y, o = this.w, h = this.ttCtx;
      if (a.target.classList.contains("apexcharts-marker")) {
        var c = parseInt(s.paths.getAttribute("cx"), 10), d = parseInt(s.paths.getAttribute("cy"), 10), g = parseFloat(s.paths.getAttribute("val"));
        if (i = parseInt(s.paths.getAttribute("rel"), 10), t = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, h.intersect) {
          var p = P.findAncestor(s.paths, "apexcharts-series");
          p && (t = parseInt(p.getAttribute("data:realIndex"), 10));
        }
        if (h.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: t, j: i, shared: !h.showOnIntersect && o.config.tooltip.shared, e: a }), a.type === "mouseup" && h.markerClick(a, t, i), o.globals.capturedSeriesIndex = t, o.globals.capturedDataPointIndex = i, r = c, n = d + o.globals.translateY - 1.4 * h.tooltipRect.ttHeight, h.w.config.tooltip.followCursor) {
          var f = h.getElGrid().getBoundingClientRect();
          n = h.e.clientY + o.globals.translateY - f.top;
        }
        g < 0 && (n = d), h.marker.enlargeCurrentPoint(i, s.paths, r, n);
      }
      return { x: r, y: n };
    } }, { key: "handleBarTooltip", value: function(e) {
      var t, i, a = e.e, s = e.opt, r = this.w, n = this.ttCtx, o = n.getElTooltip(), h = 0, c = 0, d = 0, g = this.getBarTooltipXY({ e: a, opt: s });
      t = g.i;
      var p = g.barHeight, f = g.j;
      r.globals.capturedSeriesIndex = t, r.globals.capturedDataPointIndex = f, r.globals.isBarHorizontal && n.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (c = g.x, d = g.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[t] : r.config.stroke.width, h = c) : r.globals.comboCharts || r.config.tooltip.shared || (h /= 2), isNaN(d) && (d = r.globals.svgHeight - n.tooltipRect.ttHeight);
      var b = parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10), m = r.globals.isMultipleYAxis ? r.config.yaxis[b] && r.config.yaxis[b].reversed : r.config.yaxis[0].reversed;
      if (c + n.tooltipRect.ttWidth > r.globals.gridWidth && !m ? c -= n.tooltipRect.ttWidth : c < 0 && (c = 0), n.w.config.tooltip.followCursor) {
        var w = n.getElGrid().getBoundingClientRect();
        d = n.e.clientY - w.top;
      }
      n.tooltip === null && (n.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboBarCount > 0 ? n.tooltipPosition.moveXCrosshairs(h + i / 2) : n.tooltipPosition.moveXCrosshairs(h)), !n.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && n.tooltipUtil.hasBars()) && (m && (c -= n.tooltipRect.ttWidth) < 0 && (c = 0), !m || r.globals.isBarHorizontal && n.tooltipUtil.hasBars() || (d = d + p - 2 * (r.globals.series[t][f] < 0 ? p : 0)), d = d + r.globals.translateY - n.tooltipRect.ttHeight / 2, o.style.left = c + r.globals.translateX + "px", o.style.top = d + "px");
    } }, { key: "getBarTooltipXY", value: function(e) {
      var t = this, i = e.e, a = e.opt, s = this.w, r = null, n = this.ttCtx, o = 0, h = 0, c = 0, d = 0, g = 0, p = i.target.classList;
      if (p.contains("apexcharts-bar-area") || p.contains("apexcharts-candlestick-area") || p.contains("apexcharts-boxPlot-area") || p.contains("apexcharts-rangebar-area")) {
        var f = i.target, b = f.getBoundingClientRect(), m = a.elGrid.getBoundingClientRect(), w = b.height;
        g = b.height;
        var A = b.width, l = parseInt(f.getAttribute("cx"), 10), u = parseInt(f.getAttribute("cy"), 10);
        d = parseFloat(f.getAttribute("barWidth"));
        var x = i.type === "touchmove" ? i.touches[0].clientX : i.clientX;
        r = parseInt(f.getAttribute("j"), 10), o = parseInt(f.parentNode.getAttribute("rel"), 10) - 1;
        var v = f.getAttribute("data-range-y1"), k = f.getAttribute("data-range-y2");
        s.globals.comboCharts && (o = parseInt(f.parentNode.getAttribute("data:realIndex"), 10));
        var S = function(L) {
          return s.globals.isXNumeric ? l - A / 2 : t.isVerticalGroupedRangeBar ? l + A / 2 : l - n.dataPointsDividedWidth + A / 2;
        }, C = function() {
          return u - n.dataPointsDividedHeight + w / 2 - n.tooltipRect.ttHeight / 2;
        };
        n.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: o, j: r, y1: v ? parseInt(v, 10) : null, y2: k ? parseInt(k, 10) : null, shared: !n.showOnIntersect && s.config.tooltip.shared, e: i }), s.config.tooltip.followCursor ? s.globals.isBarHorizontal ? (h = x - m.left + 15, c = C()) : (h = S(), c = i.clientY - m.top - n.tooltipRect.ttHeight / 2 - 15) : s.globals.isBarHorizontal ? ((h = l) < n.xyRatios.baseLineInvertedY && (h = l - n.tooltipRect.ttWidth), c = C()) : (h = S(), c = u);
      }
      return { x: h, y: c, barHeight: g, barWidth: d, i: o, j: r };
    } }]), y;
  }(), Mt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.ttCtx = e;
    }
    return Y(y, [{ key: "drawXaxisTooltip", value: function() {
      var e = this.w, t = this.ttCtx, i = e.config.xaxis.position === "bottom";
      t.xaxisOffY = i ? e.globals.gridHeight + 1 : -e.globals.xAxisHeight - e.config.xaxis.axisTicks.height + 3;
      var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s = e.globals.dom.elWrap;
      t.isXAxisTooltipEnabled && e.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (t.xaxisTooltip = document.createElement("div"), t.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + e.config.tooltip.theme), s.appendChild(t.xaxisTooltip), t.xaxisTooltipText = document.createElement("div"), t.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), t.xaxisTooltipText.style.fontFamily = e.config.xaxis.tooltip.style.fontFamily || e.config.chart.fontFamily, t.xaxisTooltipText.style.fontSize = e.config.xaxis.tooltip.style.fontSize, t.xaxisTooltip.appendChild(t.xaxisTooltipText));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var e = this.w, t = this.ttCtx, i = function(s) {
        var r = e.config.yaxis[s].opposite || e.config.yaxis[s].crosshairs.opposite;
        t.yaxisOffX = r ? e.globals.gridWidth + 1 : 1;
        var n = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(s, r ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
        e.globals.yAxisSameScaleIndices.map(function(h, c) {
          h.map(function(d, g) {
            g === s && (n += e.config.yaxis[g].show ? " " : " apexcharts-yaxistooltip-hidden");
          });
        });
        var o = e.globals.dom.elWrap;
        e.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(s)) === null && (t.yaxisTooltip = document.createElement("div"), t.yaxisTooltip.setAttribute("class", n + " apexcharts-theme-" + e.config.tooltip.theme), o.appendChild(t.yaxisTooltip), s === 0 && (t.yaxisTooltipText = []), t.yaxisTooltipText[s] = document.createElement("div"), t.yaxisTooltipText[s].classList.add("apexcharts-yaxistooltip-text"), t.yaxisTooltip.appendChild(t.yaxisTooltipText[s]));
      }, a = 0; a < e.config.yaxis.length; a++)
        i(a);
    } }, { key: "setXCrosshairWidth", value: function() {
      var e = this.w, t = this.ttCtx, i = t.getElXCrosshairs();
      if (t.xcrosshairsWidth = parseInt(e.config.xaxis.crosshairs.width, 10), e.globals.comboCharts) {
        var a = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (a !== null && e.config.xaxis.crosshairs.width === "barWidth") {
          var s = parseFloat(a.getAttribute("barWidth"));
          t.xcrosshairsWidth = s;
        } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
          var r = e.globals.labels.length;
          t.xcrosshairsWidth = e.globals.gridWidth / r;
        }
      } else if (e.config.xaxis.crosshairs.width === "tickWidth") {
        var n = e.globals.labels.length;
        t.xcrosshairsWidth = e.globals.gridWidth / n;
      } else if (e.config.xaxis.crosshairs.width === "barWidth") {
        var o = e.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (o !== null) {
          var h = parseFloat(o.getAttribute("barWidth"));
          t.xcrosshairsWidth = h;
        } else
          t.xcrosshairsWidth = 1;
      }
      e.globals.isBarHorizontal && (t.xcrosshairsWidth = 0), i !== null && t.xcrosshairsWidth > 0 && i.setAttribute("width", t.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var e = this.w, t = this.ttCtx;
      t.ycrosshairs = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), t.ycrosshairsHidden = e.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(e, t, i) {
      var a = this.ttCtx, s = this.w, r = s.globals.yLabelFormatters[e];
      if (a.yaxisTooltips[e]) {
        var n = a.getElGrid().getBoundingClientRect(), o = (t - n.top) * i.yRatio[e], h = s.globals.maxYArr[e] - s.globals.minYArr[e], c = s.globals.minYArr[e] + (h - o);
        a.tooltipPosition.moveYCrosshairs(t - n.top), a.yaxisTooltipText[e].innerHTML = r(c), a.tooltipPosition.moveYAxisTooltip(e);
      }
    } }]), y;
  }(), at = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.tConfig = t.config.tooltip, this.tooltipUtil = new tt(this), this.tooltipLabels = new It(this), this.tooltipPosition = new it(this), this.marker = new Tt(this), this.intersect = new zt(this), this.axesTooltip = new Mt(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !t.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return Y(y, [{ key: "getElTooltip", value: function(e) {
      return e || (e = this), e.w.globals.dom.baseEl ? e.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(e) {
      var t = this.w;
      this.xyRatios = e, this.isXAxisTooltipEnabled = t.config.xaxis.tooltip.enabled && t.globals.axisCharts, this.yaxisTooltips = t.config.yaxis.map(function(r, n) {
        return !!(r.show && r.tooltip.enabled && t.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], t.globals.axisCharts || (this.showTooltipTitle = !1);
      var i = document.createElement("div");
      if (i.classList.add("apexcharts-tooltip"), t.config.tooltip.cssClass && i.classList.add(t.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), t.globals.dom.elWrap.appendChild(i), t.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var a = new Ie(this.ctx);
        this.xAxisTicksPositions = a.getXAxisTicksPositions();
      }
      if (!t.globals.comboCharts && !this.tConfig.intersect && t.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), t.config.markers.size !== 0 && t.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), t.globals.collapsedSeries.length !== t.globals.series.length) {
        this.dataPointsDividedHeight = t.globals.gridHeight / t.globals.dataPoints, this.dataPointsDividedWidth = t.globals.gridWidth / t.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || t.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
        var s = t.globals.series.length;
        (t.globals.xyCharts || t.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : t.globals.series.length), this.legendLabels = t.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(e) {
      for (var t = this, i = this.w, a = [], s = this.getElTooltip(), r = function(o) {
        var h = document.createElement("div");
        h.classList.add("apexcharts-tooltip-series-group"), h.style.order = i.config.tooltip.inverseOrder ? e - o : o + 1, t.tConfig.shared && t.tConfig.enabledOnSeries && Array.isArray(t.tConfig.enabledOnSeries) && t.tConfig.enabledOnSeries.indexOf(o) < 0 && h.classList.add("apexcharts-tooltip-series-group-hidden");
        var c = document.createElement("span");
        c.classList.add("apexcharts-tooltip-marker"), c.style.backgroundColor = i.globals.colors[o], h.appendChild(c);
        var d = document.createElement("div");
        d.classList.add("apexcharts-tooltip-text"), d.style.fontFamily = t.tConfig.style.fontFamily || i.config.chart.fontFamily, d.style.fontSize = t.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(g) {
          var p = document.createElement("div");
          p.classList.add("apexcharts-tooltip-".concat(g, "-group"));
          var f = document.createElement("span");
          f.classList.add("apexcharts-tooltip-text-".concat(g, "-label")), p.appendChild(f);
          var b = document.createElement("span");
          b.classList.add("apexcharts-tooltip-text-".concat(g, "-value")), p.appendChild(b), d.appendChild(p);
        }), h.appendChild(d), s.appendChild(h), a.push(h);
      }, n = 0; n < e; n++)
        r(n);
      return a;
    } }, { key: "addSVGEvents", value: function() {
      var e = this.w, t = e.config.chart.type, i = this.getElTooltip(), a = !(t !== "bar" && t !== "candlestick" && t !== "boxPlot" && t !== "rangeBar"), s = t === "area" || t === "line" || t === "scatter" || t === "bubble" || t === "radar", r = e.globals.dom.Paper.node, n = this.getElGrid();
      n && (this.seriesBound = n.getBoundingClientRect());
      var o, h = [], c = [], d = { hoverArea: r, elGrid: n, tooltipEl: i, tooltipY: h, tooltipX: c, ttItems: this.ttItems };
      if (e.globals.axisCharts && (s ? o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : t !== "heatmap" && t !== "treemap" || (o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), o && o.length))
        for (var g = 0; g < o.length; g++)
          h.push(o[g].getAttribute("cy")), c.push(o[g].getAttribute("cx"));
      if (e.globals.xyCharts && !this.showOnIntersect || e.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared)
        this.addPathsEventListeners([r], d);
      else if (a && !e.globals.comboCharts || s && this.showOnIntersect)
        this.addDatapointEventsListeners(d);
      else if (!e.globals.axisCharts || t === "heatmap" || t === "treemap") {
        var p = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(p, d);
      }
      if (this.showOnIntersect) {
        var f = e.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        f.length > 0 && this.addPathsEventListeners(f, d), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(d);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var e = this.w, t = this.getElTooltip(), i = t.getBoundingClientRect(), a = i.width + 10, s = i.height + 10, r = this.tConfig.fixed.offsetX, n = this.tConfig.fixed.offsetY, o = this.tConfig.fixed.position.toLowerCase();
      return o.indexOf("right") > -1 && (r = r + e.globals.svgWidth - a + 10), o.indexOf("bottom") > -1 && (n = n + e.globals.svgHeight - s - 10), t.style.left = r + "px", t.style.top = n + "px", { x: r, y: n, ttWidth: a, ttHeight: s };
    } }, { key: "addDatapointEventsListeners", value: function(e) {
      var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(t, e);
    } }, { key: "addPathsEventListeners", value: function(e, t) {
      for (var i = this, a = function(r) {
        var n = { paths: e[r], tooltipEl: t.tooltipEl, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: t.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(o) {
          return e[r].addEventListener(o, i.onSeriesHover.bind(i, n), { capture: !1, passive: !0 });
        });
      }, s = 0; s < e.length; s++)
        a(s);
    } }, { key: "onSeriesHover", value: function(e, t) {
      var i = this, a = Date.now() - this.lastHoverTime;
      a >= 100 ? this.seriesHover(e, t) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        i.seriesHover(e, t);
      }, 100 - a));
    } }, { key: "seriesHover", value: function(e, t) {
      var i = this;
      this.lastHoverTime = Date.now();
      var a = [], s = this.w;
      s.config.chart.group && (a = this.ctx.getGroupedCharts()), s.globals.axisCharts && (s.globals.minX === -1 / 0 && s.globals.maxX === 1 / 0 || s.globals.dataPoints === 0) || (a.length ? a.forEach(function(r) {
        var n = i.getElTooltip(r), o = { paths: e.paths, tooltipEl: n, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: r.w.globals.tooltip.ttItems };
        r.w.globals.minX === i.w.globals.minX && r.w.globals.maxX === i.w.globals.maxX && r.w.globals.tooltip.seriesHoverByContext({ chartCtx: r, ttCtx: r.w.globals.tooltip, opt: o, e: t });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: e, e: t }));
    } }, { key: "seriesHoverByContext", value: function(e) {
      var t = e.chartCtx, i = e.ttCtx, a = e.opt, s = e.e, r = t.w, n = this.getElTooltip();
      n && (i.tooltipRect = { x: 0, y: 0, ttWidth: n.getBoundingClientRect().width, ttHeight: n.getBoundingClientRect().height }, i.e = s, i.tooltipUtil.hasBars() && !r.globals.comboCharts && !i.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new te(t).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), r.globals.axisCharts ? i.axisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }));
    } }, { key: "axisChartsTooltips", value: function(e) {
      var t, i, a = e.e, s = e.opt, r = this.w, n = s.elGrid.getBoundingClientRect(), o = a.type === "touchmove" ? a.touches[0].clientX : a.clientX, h = a.type === "touchmove" ? a.touches[0].clientY : a.clientY;
      if (this.clientY = h, this.clientX = o, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, h < n.top || h > n.top + n.height)
        this.handleMouseOut(s);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) {
          var c = parseInt(s.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(c) < 0)
            return void this.handleMouseOut(s);
        }
        var d = this.getElTooltip(), g = this.getElXCrosshairs(), p = r.globals.xyCharts || r.config.chart.type === "bar" && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars();
        if (a.type === "mousemove" || a.type === "touchmove" || a.type === "mouseup") {
          if (r.globals.collapsedSeries.length + r.globals.ancillaryCollapsedSeries.length === r.globals.series.length)
            return;
          g !== null && g.classList.add("apexcharts-active");
          var f = this.yaxisTooltips.filter(function(w) {
            return w === !0;
          });
          if (this.ycrosshairs !== null && f.length && this.ycrosshairs.classList.add("apexcharts-active"), p && !this.showOnIntersect)
            this.handleStickyTooltip(a, o, h, s);
          else if (r.config.chart.type === "heatmap" || r.config.chart.type === "treemap") {
            var b = this.intersect.handleHeatTreeTooltip({ e: a, opt: s, x: t, y: i, type: r.config.chart.type });
            t = b.x, i = b.y, d.style.left = t + "px", d.style.top = i + "px";
          } else
            this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a, opt: s }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a, opt: s, x: t, y: i });
          if (this.yaxisTooltips.length)
            for (var m = 0; m < r.config.yaxis.length; m++)
              this.axesTooltip.drawYaxisTooltipText(m, h, this.xyRatios);
          s.tooltipEl.classList.add("apexcharts-active");
        } else
          a.type !== "mouseout" && a.type !== "touchend" || this.handleMouseOut(s);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(e) {
      var t = e.e, i = e.opt, a = e.tooltipRect, s = this.w, r = i.paths.getAttribute("rel"), n = this.getElTooltip(), o = s.globals.dom.elWrap.getBoundingClientRect();
      if (t.type === "mousemove" || t.type === "touchmove") {
        n.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(r, 10) - 1, shared: !1 });
        var h = s.globals.clientX - o.left - a.ttWidth / 2, c = s.globals.clientY - o.top - a.ttHeight - 10;
        if (n.style.left = h + "px", n.style.top = c + "px", s.config.legend.tooltipHoverFormatter) {
          var d = r - 1, g = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[d].getAttribute("data:default-text"), { seriesIndex: d, dataPointIndex: d, w: s });
          this.legendLabels[d].innerHTML = g;
        }
      } else
        t.type !== "mouseout" && t.type !== "touchend" || (n.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(p) {
          var f = p.getAttribute("data:default-text");
          p.innerHTML = decodeURIComponent(f);
        }));
    } }, { key: "handleStickyTooltip", value: function(e, t, i, a) {
      var s = this.w, r = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a.hoverArea, elGrid: a.elGrid, clientX: t, clientY: i }), n = r.j, o = r.capturedSeries;
      s.globals.collapsedSeriesIndices.includes(o) && (o = null);
      var h = a.elGrid.getBoundingClientRect();
      if (r.hoverX < 0 || r.hoverX > h.width)
        this.handleMouseOut(a);
      else if (o !== null)
        this.handleStickyCapturedSeries(e, o, a, n);
      else if (this.tooltipUtil.isXoverlap(n) || s.globals.isBarHorizontal) {
        var c = s.globals.series.findIndex(function(d, g) {
          return !s.globals.collapsedSeriesIndices.includes(g);
        });
        this.create(e, this, c, n, a.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(e, t, i, a) {
      var s = this.w;
      if (!this.tConfig.shared && s.globals.series[t][a] === null)
        return void this.handleMouseOut(i);
      if (s.globals.series[t][a] !== void 0)
        this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(e, this, t, a, i.ttItems) : this.create(e, this, t, a, i.ttItems, !1);
      else if (this.tooltipUtil.isXoverlap(a)) {
        var r = s.globals.series.findIndex(function(n, o) {
          return !s.globals.collapsedSeriesIndices.includes(o);
        });
        this.create(e, this, r, a, i.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var e = this.w, t = new M(this.ctx), i = e.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++)
        t.pathMouseLeave(i[a]);
    } }, { key: "handleMouseOut", value: function(e) {
      var t = this.w, i = this.getElXCrosshairs();
      if (e.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), t.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i !== null && i.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        this.yaxisTTEls === null && (this.yaxisTTEls = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var a = 0; a < this.yaxisTTEls.length; a++)
          this.yaxisTTEls[a].classList.remove("apexcharts-active");
      }
      t.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(s) {
        var r = s.getAttribute("data:default-text");
        s.innerHTML = decodeURIComponent(r);
      });
    } }, { key: "markerClick", value: function(e, t, i) {
      var a = this.w;
      typeof a.config.chart.events.markerClick == "function" && a.config.chart.events.markerClick(e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: a }), this.ctx.events.fireEvent("markerClick", [e, this.ctx, { seriesIndex: t, dataPointIndex: i, w: a }]);
    } }, { key: "create", value: function(e, t, i, a, s) {
      var r, n, o, h, c, d, g, p, f, b, m, w, A, l, u, x, v = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, k = this.w, S = t;
      e.type === "mouseup" && this.markerClick(e, i, a), v === null && (v = this.tConfig.shared);
      var C = this.tooltipUtil.hasMarkers(i), L = this.tooltipUtil.getElBars();
      if (k.config.legend.tooltipHoverFormatter) {
        var I = k.config.legend.tooltipHoverFormatter, z = Array.from(this.legendLabels);
        z.forEach(function(se) {
          var K = se.getAttribute("data:default-text");
          se.innerHTML = decodeURIComponent(K);
        });
        for (var T = 0; T < z.length; T++) {
          var E = z[T], R = parseInt(E.getAttribute("i"), 10), O = decodeURIComponent(E.getAttribute("data:default-text")), D = I(O, { seriesIndex: v ? R : i, dataPointIndex: a, w: k });
          if (v)
            E.innerHTML = k.globals.collapsedSeriesIndices.indexOf(R) < 0 ? D : O;
          else if (E.innerHTML = R === i ? D : O, i === R)
            break;
        }
      }
      var W = X(X({ ttItems: s, i, j: a }, ((r = k.globals.seriesRange) === null || r === void 0 || (n = r[i]) === null || n === void 0 || (o = n[a]) === null || o === void 0 || (h = o.y[0]) === null || h === void 0 ? void 0 : h.y1) !== void 0 && { y1: (c = k.globals.seriesRange) === null || c === void 0 || (d = c[i]) === null || d === void 0 || (g = d[a]) === null || g === void 0 || (p = g.y[0]) === null || p === void 0 ? void 0 : p.y1 }), ((f = k.globals.seriesRange) === null || f === void 0 || (b = f[i]) === null || b === void 0 || (m = b[a]) === null || m === void 0 || (w = m.y[0]) === null || w === void 0 ? void 0 : w.y2) !== void 0 && { y2: (A = k.globals.seriesRange) === null || A === void 0 || (l = A[i]) === null || l === void 0 || (u = l[a]) === null || u === void 0 || (x = u.y[0]) === null || x === void 0 ? void 0 : x.y2 });
      if (v) {
        if (S.tooltipLabels.drawSeriesTexts(X(X({}, W), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), C)
          k.globals.markers.largestSize > 0 ? S.marker.enlargePoints(a) : S.tooltipPosition.moveDynamicPointsOnHover(a);
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L), this.barSeriesHeight > 0)) {
          var N = new M(this.ctx), V = k.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a, i);
          for (var j = 0; j < V.length; j++)
            N.pathMouseEnter(V[j]);
        }
      } else
        S.tooltipLabels.drawSeriesTexts(X({ shared: !1 }, W)), this.tooltipUtil.hasBars() && S.tooltipPosition.moveStickyTooltipOverBars(a, i), C && S.tooltipPosition.moveMarkers(i, a);
    } }]), y;
  }(), Xt = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.barCtx = e, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return Y(y, [{ key: "handleBarDataLabels", value: function(e) {
      var t = e.x, i = e.y, a = e.y1, s = e.y2, r = e.i, n = e.j, o = e.realIndex, h = e.groupIndex, c = e.series, d = e.barHeight, g = e.barWidth, p = e.barXPosition, f = e.barYPosition, b = e.visibleSeries, m = e.renderedPath, w = this.w, A = new M(this.barCtx.ctx), l = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[o] : this.barCtx.strokeWidth, u = t + parseFloat(g * b), x = i + parseFloat(d * b);
      w.globals.isXNumeric && !w.globals.isBarHorizontal && (u = t + parseFloat(g * (b + 1)), x = i + parseFloat(d * (b + 1)) - l);
      var v, k = null, S = t, C = i, L = {}, I = w.config.dataLabels, z = this.barCtx.barOptions.dataLabels, T = this.barCtx.barOptions.dataLabels.total;
      f !== void 0 && this.barCtx.isRangeBar && (x = f, C = f), p !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (u = p, S = p);
      var E = I.offsetX, R = I.offsetY, O = { width: 0, height: 0 };
      if (w.config.dataLabels.enabled) {
        var D = this.barCtx.series[r][n];
        O = A.getTextRects(w.globals.yLabelFormatters[0](D), parseFloat(I.style.fontSize));
      }
      var W = { x: t, y: i, i: r, j: n, realIndex: o, groupIndex: h || -1, renderedPath: m, bcx: u, bcy: x, barHeight: d, barWidth: g, textRects: O, strokeWidth: l, dataLabelsX: S, dataLabelsY: C, dataLabelsConfig: I, barDataLabelsConfig: z, barTotalDataLabelsConfig: T, offX: E, offY: R };
      return L = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(W) : this.calculateColumnsDataLabelsPosition(W), m.attr({ cy: L.bcy, cx: L.bcx, j: n, val: c[r][n], barHeight: d, barWidth: g }), v = this.drawCalculatedDataLabels({ x: L.dataLabelsX, y: L.dataLabelsY, val: this.barCtx.isRangeBar ? [a, s] : c[r][n], i: o, j: n, barWidth: g, barHeight: d, textRects: O, dataLabelsConfig: I }), w.config.chart.stacked && T.enabled && (k = this.drawTotalDataLabels({ x: L.totalDataLabelsX, y: L.totalDataLabelsY, barWidth: g, barHeight: d, realIndex: o, textAnchor: L.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: o, j: n }), dataLabelsConfig: I, barTotalDataLabelsConfig: T })), { dataLabels: v, totalDataLabels: k };
    } }, { key: "getStackedTotalDataLabel", value: function(e) {
      var t = e.realIndex, i = e.j, a = this.w, s = this.barCtx.stackedSeriesTotals[i];
      return this.totalFormatter && (s = this.totalFormatter(s, X(X({}, a), {}, { seriesIndex: t, dataPointIndex: i, w: a }))), s;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(e) {
      var t, i, a = this.w, s = e.i, r = e.j, n = e.realIndex, o = e.groupIndex, h = e.y, c = e.bcx, d = e.barWidth, g = e.barHeight, p = e.textRects, f = e.dataLabelsX, b = e.dataLabelsY, m = e.dataLabelsConfig, w = e.barDataLabelsConfig, A = e.barTotalDataLabelsConfig, l = e.strokeWidth, u = e.offX, x = e.offY;
      g = Math.abs(g);
      var v = a.config.plotOptions.bar.dataLabels.orientation === "vertical", k = this.barCtx.barHelpers.getZeroValueEncounters({ i: s, j: r }).zeroEncounters;
      c = c - l / 2 + (o !== -1 ? o * d : 0);
      var S = a.globals.gridWidth / a.globals.dataPoints;
      this.barCtx.isVerticalGroupedRangeBar ? f += d / 2 : (f = a.globals.isXNumeric ? c - d / 2 + u : c - S + d / 2 + u, k > 0 && a.config.plotOptions.bar.hideZeroBarsWhenGrouped && (f -= d * k)), v && (f = f + p.height / 2 - l / 2 - 2);
      var C = this.barCtx.series[s][r] < 0, L = h;
      switch (this.barCtx.isReversed && (L = h - g + (C ? 2 * g : 0), h -= g), w.position) {
        case "center":
          b = v ? C ? L - g / 2 + x : L + g / 2 - x : C ? L - g / 2 + p.height / 2 + x : L + g / 2 + p.height / 2 - x;
          break;
        case "bottom":
          b = v ? C ? L - g + x : L + g - x : C ? L - g + p.height + l + x : L + g - p.height / 2 + l - x;
          break;
        case "top":
          b = v ? C ? L + x : L - x : C ? L - p.height / 2 - x : L + p.height + x;
      }
      if (this.barCtx.lastActiveBarSerieIndex === n && A.enabled) {
        var I = new M(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: n, j: r }), m.fontSize);
        t = C ? L - I.height / 2 - x - A.offsetY + 18 : L + I.height + x + A.offsetY - 18, i = f + A.offsetX;
      }
      return a.config.chart.stacked || (b < 0 ? b = 0 + l : b + p.height / 3 > a.globals.gridHeight && (b = a.globals.gridHeight - l)), { bcx: c, bcy: h, dataLabelsX: f, dataLabelsY: b, totalDataLabelsX: i, totalDataLabelsY: t, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(e) {
      var t = this.w, i = e.x, a = e.i, s = e.j, r = e.realIndex, n = e.groupIndex, o = e.bcy, h = e.barHeight, c = e.barWidth, d = e.textRects, g = e.dataLabelsX, p = e.strokeWidth, f = e.dataLabelsConfig, b = e.barDataLabelsConfig, m = e.barTotalDataLabelsConfig, w = e.offX, A = e.offY, l = t.globals.gridHeight / t.globals.dataPoints;
      c = Math.abs(c);
      var u, x, v = (o += n !== -1 ? n * h : 0) - (this.barCtx.isRangeBar ? 0 : l) + h / 2 + d.height / 2 + A - 3, k = "start", S = this.barCtx.series[a][s] < 0, C = i;
      switch (this.barCtx.isReversed && (C = i + c - (S ? 2 * c : 0), i = t.globals.gridWidth - c), b.position) {
        case "center":
          g = S ? C + c / 2 - w : Math.max(d.width / 2, C - c / 2) + w;
          break;
        case "bottom":
          g = S ? C + c - p - Math.round(d.width / 2) - w : C - c + p + Math.round(d.width / 2) + w;
          break;
        case "top":
          g = S ? C - p + Math.round(d.width / 2) - w : C - p - Math.round(d.width / 2) + w;
      }
      if (this.barCtx.lastActiveBarSerieIndex === r && m.enabled) {
        var L = new M(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: s }), f.fontSize);
        S ? (u = C - p + Math.round(L.width / 2) - w - m.offsetX - 15, k = "end") : u = C - p - Math.round(L.width / 2) + w + m.offsetX + 15, x = v + m.offsetY;
      }
      return t.config.chart.stacked || (g < 0 ? g = g + d.width + p : g + d.width / 2 > t.globals.gridWidth && (g = t.globals.gridWidth - d.width - p)), { bcx: i, bcy: o, dataLabelsX: g, dataLabelsY: v, totalDataLabelsX: u, totalDataLabelsY: x, totalDataLabelsAnchor: k };
    } }, { key: "drawCalculatedDataLabels", value: function(e) {
      var t = e.x, i = e.y, a = e.val, s = e.i, r = e.j, n = e.textRects, o = e.barHeight, h = e.barWidth, c = e.dataLabelsConfig, d = this.w, g = "rotate(0)";
      d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (g = "rotate(-90, ".concat(t, ", ").concat(i, ")"));
      var p = new ye(this.barCtx.ctx), f = new M(this.barCtx.ctx), b = c.formatter, m = null, w = d.globals.collapsedSeriesIndices.indexOf(s) > -1;
      if (c.enabled && !w) {
        m = f.group({ class: "apexcharts-data-labels", transform: g });
        var A = "";
        a !== void 0 && (A = b(a, X(X({}, d), {}, { seriesIndex: s, dataPointIndex: r, w: d }))), !a && d.config.plotOptions.bar.hideZeroBarsWhenGrouped && (A = "");
        var l = d.globals.series[s][r] < 0, u = d.config.plotOptions.bar.dataLabels.position;
        d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (u === "top" && (c.textAnchor = l ? "end" : "start"), u === "center" && (c.textAnchor = "middle"), u === "bottom" && (c.textAnchor = l ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h < f.getTextRects(A, parseFloat(c.style.fontSize)).width && (A = ""), d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n.width / 1.6 > Math.abs(h) && (A = "") : n.height / 1.6 > Math.abs(o) && (A = ""));
        var x = X({}, c);
        this.barCtx.isHorizontal && a < 0 && (c.textAnchor === "start" ? x.textAnchor = "end" : c.textAnchor === "end" && (x.textAnchor = "start")), p.plotDataLabelsText({ x: t, y: i, text: A, i: s, j: r, parent: m, dataLabelsConfig: x, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
      }
      return m;
    } }, { key: "drawTotalDataLabels", value: function(e) {
      var t, i = e.x, a = e.y, s = e.val, r = e.barWidth, n = e.barHeight, o = e.realIndex, h = e.textAnchor, c = e.barTotalDataLabelsConfig, d = this.w, g = new M(this.barCtx.ctx);
      return c.enabled && i !== void 0 && a !== void 0 && this.barCtx.lastActiveBarSerieIndex === o && (t = g.drawText({ x: i - (!d.globals.isBarHorizontal && d.globals.seriesGroups.length ? r / d.globals.seriesGroups.length : 0), y: a - (d.globals.isBarHorizontal && d.globals.seriesGroups.length ? n / d.globals.seriesGroups.length : 0), foreColor: c.style.color, text: s, textAnchor: h, fontFamily: c.style.fontFamily, fontSize: c.style.fontSize, fontWeight: c.style.fontWeight })), t;
    } }]), y;
  }(), Et = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.barCtx = e;
    }
    return Y(y, [{ key: "initVariables", value: function(e) {
      var t = this.w;
      this.barCtx.series = e, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i = 0; i < e.length; i++)
        if (e[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += e[i].length), t.globals.isXNumeric)
          for (var a = 0; a < e[i].length; a++)
            t.globals.seriesX[i][a] > t.globals.minX && t.globals.seriesX[i][a] < t.globals.maxX && this.barCtx.visibleItems++;
        else
          this.barCtx.visibleItems = t.globals.dataPoints;
      this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], t.globals.comboCharts || this.checkZeroSeries({ series: e });
    } }, { key: "initialPositions", value: function() {
      var e, t, i, a, s, r, n, o, h = this.w, c = h.globals.dataPoints;
      this.barCtx.isRangeBar && (c = h.globals.labels.length);
      var d = this.barCtx.seriesLen;
      if (h.config.plotOptions.bar.rangeBarGroupRows && (d = 1), this.barCtx.isHorizontal)
        s = (i = h.globals.gridHeight / c) / d, h.globals.isXNumeric && (s = (i = h.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s = s * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (s = parseInt(this.barCtx.barOptions.barHeight, 10)), o = this.barCtx.baseLineInvertedY + h.globals.padHorizontal + (this.barCtx.isReversed ? h.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (o = h.globals.gridWidth / 2), t = (i - s * this.barCtx.seriesLen) / 2;
      else {
        if (a = h.globals.gridWidth / this.barCtx.visibleItems, h.config.xaxis.convertedCatToNumeric && (a = h.globals.gridWidth / h.globals.dataPoints), r = a / d * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h.globals.isXNumeric) {
          var g = this.barCtx.xRatio;
          h.globals.minXDiff && h.globals.minXDiff !== 0.5 && h.globals.minXDiff / g > 0 && (a = h.globals.minXDiff / g), (r = a / d * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r = 1);
        }
        String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.columnWidth, 10)), n = h.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? h.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), e = h.globals.padHorizontal + (a - r * this.barCtx.seriesLen) / 2;
      }
      return h.globals.barHeight = s, h.globals.barWidth = r, { x: e, y: t, yDivision: i, xDivision: a, barHeight: s, barWidth: r, zeroH: n, zeroW: o };
    } }, { key: "initializeStackedPrevVars", value: function(e) {
      var t = e.w;
      t.globals.hasSeriesGroups ? t.globals.seriesGroups.forEach(function(i) {
        e[i] || (e[i] = {}), e[i].prevY = [], e[i].prevX = [], e[i].prevYF = [], e[i].prevXF = [], e[i].prevYVal = [], e[i].prevXVal = [];
      }) : (e.prevY = [], e.prevX = [], e.prevYF = [], e.prevXF = [], e.prevYVal = [], e.prevXVal = []);
    } }, { key: "initializeStackedXYVars", value: function(e) {
      var t = e.w;
      t.globals.hasSeriesGroups ? t.globals.seriesGroups.forEach(function(i) {
        e[i] || (e[i] = {}), e[i].xArrj = [], e[i].xArrjF = [], e[i].xArrjVal = [], e[i].yArrj = [], e[i].yArrjF = [], e[i].yArrjVal = [];
      }) : (e.xArrj = [], e.xArrjF = [], e.xArrjVal = [], e.yArrj = [], e.yArrjF = [], e.yArrjVal = []);
    } }, { key: "getPathFillColor", value: function(e, t, i, a) {
      var s, r, n, o, h = this.w, c = new ae(this.barCtx.ctx), d = null, g = this.barCtx.barOptions.distributed ? i : t;
      return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(p) {
        e[t][i] >= p.from && e[t][i] <= p.to && (d = p.color);
      }), h.config.series[t].data[i] && h.config.series[t].data[i].fillColor && (d = h.config.series[t].data[i].fillColor), c.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? g : a, dataPointIndex: i, color: d, value: e[t][i], fillConfig: (s = h.config.series[t].data[i]) === null || s === void 0 ? void 0 : s.fill, fillType: (r = h.config.series[t].data[i]) !== null && r !== void 0 && (n = r.fill) !== null && n !== void 0 && n.type ? (o = h.config.series[t].data[i]) === null || o === void 0 ? void 0 : o.fill.type : Array.isArray(h.config.fill.type) ? h.config.fill.type[t] : h.config.fill.type });
    } }, { key: "getStrokeWidth", value: function(e, t, i) {
      var a = 0, s = this.w;
      return this.barCtx.series[e][t] === void 0 || this.barCtx.series[e][t] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a;
    } }, { key: "shouldApplyRadius", value: function(e) {
      var t = this.w, i = !1;
      return t.config.plotOptions.bar.borderRadius > 0 && (t.config.chart.stacked && t.config.plotOptions.bar.borderRadiusWhenStacked === "last" ? this.barCtx.lastActiveBarSerieIndex === e && (i = !0) : i = !0), i;
    } }, { key: "barBackground", value: function(e) {
      var t = e.j, i = e.i, a = e.x1, s = e.x2, r = e.y1, n = e.y2, o = e.elSeries, h = this.w, c = new M(this.barCtx.ctx), d = new te(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && d === i) {
        t >= this.barCtx.barOptions.colors.backgroundBarColors.length && (t %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var g = this.barCtx.barOptions.colors.backgroundBarColors[t], p = c.drawRect(a !== void 0 ? a : 0, r !== void 0 ? r : 0, s !== void 0 ? s : h.globals.gridWidth, n !== void 0 ? n : h.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, g, this.barCtx.barOptions.colors.backgroundBarOpacity);
        o.add(p), p.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(e) {
      var t, i = e.barWidth, a = e.barXPosition, s = e.y1, r = e.y2, n = e.strokeWidth, o = e.seriesGroup, h = e.realIndex, c = e.i, d = e.j, g = e.w, p = new M(this.barCtx.ctx);
      (n = Array.isArray(n) ? n[h] : n) || (n = 0);
      var f = i, b = a;
      (t = g.config.series[h].data[d]) !== null && t !== void 0 && t.columnWidthOffset && (b = a - g.config.series[h].data[d].columnWidthOffset / 2, f = i + g.config.series[h].data[d].columnWidthOffset);
      var m = b, w = b + f;
      s += 1e-3, r += 1e-3;
      var A = p.move(m, s), l = p.move(m, s), u = p.line(w - n, s);
      if (g.globals.previousPaths.length > 0 && (l = this.barCtx.getPreviousPath(h, d, !1)), A = A + p.line(m, r) + p.line(w - n, r) + p.line(w - n, s) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), l = l + p.line(m, s) + u + u + u + u + u + p.line(m, s) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(h) && (A = p.roundPathCorners(A, g.config.plotOptions.bar.borderRadius)), g.config.chart.stacked) {
        var x = this.barCtx;
        g.globals.hasSeriesGroups && o && (x = this.barCtx[o]), x.yArrj.push(r), x.yArrjF.push(Math.abs(s - r)), x.yArrjVal.push(this.barCtx.series[c][d]);
      }
      return { pathTo: A, pathFrom: l };
    } }, { key: "getBarpaths", value: function(e) {
      var t, i = e.barYPosition, a = e.barHeight, s = e.x1, r = e.x2, n = e.strokeWidth, o = e.seriesGroup, h = e.realIndex, c = e.i, d = e.j, g = e.w, p = new M(this.barCtx.ctx);
      (n = Array.isArray(n) ? n[h] : n) || (n = 0);
      var f = i, b = a;
      (t = g.config.series[h].data[d]) !== null && t !== void 0 && t.barHeightOffset && (f = i - g.config.series[h].data[d].barHeightOffset / 2, b = a + g.config.series[h].data[d].barHeightOffset);
      var m = f, w = f + b;
      s += 1e-3, r += 1e-3;
      var A = p.move(s, m), l = p.move(s, m);
      g.globals.previousPaths.length > 0 && (l = this.barCtx.getPreviousPath(h, d, !1));
      var u = p.line(s, w - n);
      if (A = A + p.line(r, m) + p.line(r, w - n) + u + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), l = l + p.line(s, m) + u + u + u + u + u + p.line(s, m) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(h) && (A = p.roundPathCorners(A, g.config.plotOptions.bar.borderRadius)), g.config.chart.stacked) {
        var x = this.barCtx;
        g.globals.hasSeriesGroups && o && (x = this.barCtx[o]), x.xArrj.push(r), x.xArrjF.push(Math.abs(s - r)), x.xArrjVal.push(this.barCtx.series[c][d]);
      }
      return { pathTo: A, pathFrom: l };
    } }, { key: "checkZeroSeries", value: function(e) {
      for (var t = e.series, i = this.w, a = 0; a < t.length; a++) {
        for (var s = 0, r = 0; r < t[i.globals.maxValsInArrayIndex].length; r++)
          s += t[a][r];
        s === 0 && this.barCtx.zeroSerieses.push(a);
      }
    } }, { key: "getXForValue", value: function(e, t) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? t : null;
      return e != null && (i = t + e / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? e / this.barCtx.invertedYRatio : 0)), i;
    } }, { key: "getYForValue", value: function(e, t) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? t : null;
      return e != null && (i = t - e / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? e / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), i;
    } }, { key: "getGoalValues", value: function(e, t, i, a, s) {
      var r = this, n = this.w, o = [], h = function(g, p) {
        var f;
        o.push((ee(f = {}, e, e === "x" ? r.getXForValue(g, t, !1) : r.getYForValue(g, i, !1)), ee(f, "attrs", p), f));
      };
      if (n.globals.seriesGoals[a] && n.globals.seriesGoals[a][s] && Array.isArray(n.globals.seriesGoals[a][s]) && n.globals.seriesGoals[a][s].forEach(function(g) {
        h(g.value, g);
      }), this.barCtx.barOptions.isDumbbell && n.globals.seriesRange.length) {
        var c = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : n.globals.colors, d = { strokeHeight: e === "x" ? 0 : n.globals.markers.size[a], strokeWidth: e === "x" ? n.globals.markers.size[a] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(c[a]) ? c[a][0] : c[a] };
        h(n.globals.seriesRangeStart[a][s], d), h(n.globals.seriesRangeEnd[a][s], X(X({}, d), {}, { strokeColor: Array.isArray(c[a]) ? c[a][1] : c[a] }));
      }
      return o;
    } }, { key: "drawGoalLine", value: function(e) {
      var t = e.barXPosition, i = e.barYPosition, a = e.goalX, s = e.goalY, r = e.barWidth, n = e.barHeight, o = new M(this.barCtx.ctx), h = o.group({ className: "apexcharts-bar-goals-groups" });
      h.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: h.node }), h.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var c = null;
      return this.barCtx.isHorizontal ? Array.isArray(a) && a.forEach(function(d) {
        var g = d.attrs.strokeHeight !== void 0 ? d.attrs.strokeHeight : n / 2, p = i + g + n / 2;
        c = o.drawLine(d.x, p - 2 * g, d.x, p, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeWidth ? d.attrs.strokeWidth : 2, d.attrs.strokeLineCap), h.add(c);
      }) : Array.isArray(s) && s.forEach(function(d) {
        var g = d.attrs.strokeWidth !== void 0 ? d.attrs.strokeWidth : r / 2, p = t + g + r / 2;
        c = o.drawLine(p - 2 * g, d.y, p, d.y, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeHeight ? d.attrs.strokeHeight : 2, d.attrs.strokeLineCap), h.add(c);
      }), h;
    } }, { key: "drawBarShadow", value: function(e) {
      var t = e.prevPaths, i = e.currPaths, a = e.color, s = this.w, r = t.x, n = t.x1, o = t.barYPosition, h = i.x, c = i.x1, d = i.barYPosition, g = o + i.barHeight, p = new M(this.barCtx.ctx), f = new P(), b = p.move(n, g) + p.line(r, g) + p.line(h, d) + p.line(c, d) + p.line(n, g) + (s.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z");
      return p.drawPath({ d: b, fill: f.shadeColor(0.5, P.rgb2hex(a)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
    } }, { key: "getZeroValueEncounters", value: function(e) {
      var t = e.i, i = e.j, a = this.w, s = 0, r = 0;
      return a.globals.seriesPercent.forEach(function(n, o) {
        n[i] && s++, o < t && n[i] === 0 && r++;
      }), { nonZeroColumns: s, zeroEncounters: r };
    } }]), y;
  }(), ke = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.w = e.w;
      var i = this.w;
      this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isRangeBar = i.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && i.globals.seriesRange.length && i.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = t, this.xyRatios !== null && (this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.invertedXRatio = t.invertedXRatio, this.invertedYRatio = t.invertedYRatio, this.baseLineY = t.baseLineY, this.baseLineInvertedY = t.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var a = new te(this.ctx);
      this.lastActiveBarSerieIndex = a.getActiveConfigSeriesIndex("desc", ["bar", "column"]);
      var s = a.getBarSeriesIndices(), r = new q(this.ctx);
      this.stackedSeriesTotals = r.getStackedSeriesTotals(this.w.config.series.map(function(n, o) {
        return s.indexOf(o) === -1 ? o : -1;
      }).filter(function(n) {
        return n !== -1;
      })), this.barHelpers = new Et(this);
    }
    return Y(y, [{ key: "draw", value: function(e, t) {
      var i = this.w, a = new M(this.ctx), s = new q(this.ctx, i);
      e = s.getLogSeries(e), this.series = e, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(e);
      var r = a.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var n = 0, o = 0; n < e.length; n++, o++) {
        var h, c, d, g, p = void 0, f = void 0, b = [], m = [], w = i.globals.comboCharts ? t[n] : n, A = a.group({ class: "apexcharts-series", rel: n + 1, seriesName: P.escapeString(i.globals.seriesNames[w]), "data:realIndex": w });
        this.ctx.series.addCollapsedClassToSeries(A, w), e[n].length > 0 && (this.visibleI = this.visibleI + 1);
        var l = 0, u = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = w), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
        var x = this.barHelpers.initialPositions();
        f = x.y, l = x.barHeight, c = x.yDivision, g = x.zeroW, p = x.x, u = x.barWidth, h = x.xDivision, d = x.zeroH, this.horizontal || m.push(p + u / 2);
        var v = a.group({ class: "apexcharts-datalabels", "data:realIndex": w });
        i.globals.delayedElements.push({ el: v.node }), v.node.classList.add("apexcharts-element-hidden");
        var k = a.group({ class: "apexcharts-bar-goals-markers" }), S = a.group({ class: "apexcharts-bar-shadows" });
        i.globals.delayedElements.push({ el: S.node }), S.node.classList.add("apexcharts-element-hidden");
        for (var C = 0; C < i.globals.dataPoints; C++) {
          var L = this.barHelpers.getStrokeWidth(n, C, w), I = null, z = { indexes: { i: n, j: C, realIndex: w, bc: o }, x: p, y: f, strokeWidth: L, elSeries: A };
          this.isHorizontal ? (I = this.drawBarPaths(X(X({}, z), {}, { barHeight: l, zeroW: g, yDivision: c })), u = this.series[n][C] / this.invertedYRatio) : (I = this.drawColumnPaths(X(X({}, z), {}, { xDivision: h, barWidth: u, zeroH: d })), l = this.series[n][C] / this.yRatio[this.yaxisIndex]);
          var T = this.barHelpers.getPathFillColor(e, n, C, w);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && C > 0) {
            var E = this.barHelpers.drawBarShadow({ color: typeof T == "string" && (T == null ? void 0 : T.indexOf("url")) === -1 ? T : P.hexToRgba(i.globals.colors[n]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: I });
            E && S.add(E);
          }
          this.pathArr.push(I);
          var R = this.barHelpers.drawGoalLine({ barXPosition: I.barXPosition, barYPosition: I.barYPosition, goalX: I.goalX, goalY: I.goalY, barHeight: l, barWidth: u });
          R && k.add(R), f = I.y, p = I.x, C > 0 && m.push(p + u / 2), b.push(f), this.renderSeries({ realIndex: w, pathFill: T, j: C, i: n, pathFrom: I.pathFrom, pathTo: I.pathTo, strokeWidth: L, elSeries: A, x: p, y: f, series: e, barHeight: I.barHeight ? I.barHeight : l, barWidth: I.barWidth ? I.barWidth : u, elDataLabelsWrap: v, elGoalsMarkers: k, elBarShadows: S, visibleSeries: this.visibleI, type: "bar" });
        }
        i.globals.seriesXvalues[w] = m, i.globals.seriesYvalues[w] = b, r.add(A);
      }
      return r;
    } }, { key: "renderSeries", value: function(e) {
      var t = e.realIndex, i = e.pathFill, a = e.lineFill, s = e.j, r = e.i, n = e.groupIndex, o = e.pathFrom, h = e.pathTo, c = e.strokeWidth, d = e.elSeries, g = e.x, p = e.y, f = e.y1, b = e.y2, m = e.series, w = e.barHeight, A = e.barWidth, l = e.barXPosition, u = e.barYPosition, x = e.elDataLabelsWrap, v = e.elGoalsMarkers, k = e.elBarShadows, S = e.visibleSeries, C = e.type, L = this.w, I = new M(this.ctx);
      a || (a = this.barOptions.distributed ? L.globals.stroke.colors[s] : L.globals.stroke.colors[t]), L.config.series[r].data[s] && L.config.series[r].data[s].strokeColor && (a = L.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none");
      var z = s / L.config.chart.animations.animateGradually.delay * (L.config.chart.animations.speed / L.globals.dataPoints) / 2.4, T = I.renderPaths({ i: r, j: s, realIndex: t, pathFrom: o, pathTo: h, stroke: a, strokeWidth: c, strokeLineCap: L.config.stroke.lineCap, fill: i, animationDelay: z, initialSpeed: L.config.chart.animations.speed, dataChangeSpeed: L.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(C, "-area") });
      T.attr("clip-path", "url(#gridRectMask".concat(L.globals.cuid, ")"));
      var E = L.config.forecastDataPoints;
      E.count > 0 && s >= L.globals.dataPoints - E.count && (T.node.setAttribute("stroke-dasharray", E.dashArray), T.node.setAttribute("stroke-width", E.strokeWidth), T.node.setAttribute("fill-opacity", E.fillOpacity)), f !== void 0 && b !== void 0 && (T.attr("data-range-y1", f), T.attr("data-range-y2", b)), new Z(this.ctx).setSelectionFilter(T, t, s), d.add(T);
      var R = new Xt(this).handleBarDataLabels({ x: g, y: p, y1: f, y2: b, i: r, j: s, series: m, realIndex: t, groupIndex: n, barHeight: w, barWidth: A, barXPosition: l, barYPosition: u, renderedPath: T, visibleSeries: S });
      return R.dataLabels !== null && x.add(R.dataLabels), R.totalDataLabels && x.add(R.totalDataLabels), d.add(x), v && d.add(v), k && d.add(k), d;
    } }, { key: "drawBarPaths", value: function(e) {
      var t, i = e.indexes, a = e.barHeight, s = e.strokeWidth, r = e.zeroW, n = e.x, o = e.y, h = e.yDivision, c = e.elSeries, d = this.w, g = i.i, p = i.j;
      if (d.globals.isXNumeric)
        t = (o = (d.globals.seriesX[g][p] - d.globals.minX) / this.invertedXRatio - a) + a * this.visibleI;
      else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var f = 0, b = 0;
        d.globals.seriesPercent.forEach(function(w, A) {
          w[p] && f++, A < g && w[p] === 0 && b++;
        }), f > 0 && (a = this.seriesLen * a / f), t = o + a * this.visibleI, t -= a * b;
      } else
        t = o + a * this.visibleI;
      this.isFunnel && (r -= (this.barHelpers.getXForValue(this.series[g][p], r) - r) / 2), n = this.barHelpers.getXForValue(this.series[g][p], r);
      var m = this.barHelpers.getBarpaths({ barYPosition: t, barHeight: a, x1: r, x2: n, strokeWidth: s, series: this.series, realIndex: i.realIndex, i: g, j: p, w: d });
      return d.globals.isXNumeric || (o += h), this.barHelpers.barBackground({ j: p, i: g, y1: t - a * this.visibleI, y2: a * this.seriesLen, elSeries: c }), { pathTo: m.pathTo, pathFrom: m.pathFrom, x1: r, x: n, y: o, goalX: this.barHelpers.getGoalValues("x", r, null, g, p), barYPosition: t, barHeight: a };
    } }, { key: "drawColumnPaths", value: function(e) {
      var t, i = e.indexes, a = e.x, s = e.y, r = e.xDivision, n = e.barWidth, o = e.zeroH, h = e.strokeWidth, c = e.elSeries, d = this.w, g = i.realIndex, p = i.i, f = i.j, b = i.bc;
      if (d.globals.isXNumeric) {
        var m = this.getBarXForNumericXAxis({ x: a, j: f, realIndex: g, barWidth: n });
        a = m.x, t = m.barXPosition;
      } else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var w = this.barHelpers.getZeroValueEncounters({ i: p, j: f }), A = w.nonZeroColumns, l = w.zeroEncounters;
        A > 0 && (n = this.seriesLen * n / A), t = a + n * this.visibleI, t -= n * l;
      } else
        t = a + n * this.visibleI;
      s = this.barHelpers.getYForValue(this.series[p][f], o);
      var u = this.barHelpers.getColumnPaths({ barXPosition: t, barWidth: n, y1: o, y2: s, strokeWidth: h, series: this.series, realIndex: i.realIndex, i: p, j: f, w: d });
      return d.globals.isXNumeric || (a += r), this.barHelpers.barBackground({ bc: b, j: f, i: p, x1: t - h / 2 - n * this.visibleI, x2: n * this.seriesLen + h / 2, elSeries: c }), { pathTo: u.pathTo, pathFrom: u.pathFrom, x: a, y: s, goalY: this.barHelpers.getGoalValues("y", null, o, p, f), barXPosition: t, barWidth: n };
    } }, { key: "getBarXForNumericXAxis", value: function(e) {
      var t = e.x, i = e.barWidth, a = e.realIndex, s = e.j, r = this.w, n = a;
      return r.globals.seriesX[a].length || (n = r.globals.maxValsInArrayIndex), r.globals.seriesX[n][s] && (t = (r.globals.seriesX[n][s] - r.globals.minX) / this.xRatio - i * this.seriesLen / 2), { barXPosition: t + i * this.visibleI, x: t };
    } }, { key: "getPreviousPath", value: function(e, t) {
      for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) {
        var r = a.globals.previousPaths[s];
        r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(e, 10) && a.globals.previousPaths[s].paths[t] !== void 0 && (i = a.globals.previousPaths[s].paths[t].d);
      }
      return i;
    } }]), y;
  }(), st = function(y) {
    ge(t, ke);
    var e = ue(t);
    function t() {
      return F(this, t), e.apply(this, arguments);
    }
    return Y(t, [{ key: "draw", value: function(i, a) {
      var s = this, r = this.w;
      this.graphics = new M(this.ctx), this.bar = new ke(this.ctx, this.xyRatios);
      var n = new q(this.ctx, r);
      i = n.getLogSeries(i), this.yRatio = n.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i), r.config.chart.stackType === "100%" && (i = r.globals.seriesPercent.slice()), this.series = i, this.barHelpers.initializeStackedPrevVars(this);
      for (var o = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), h = 0, c = 0, d = function(f, b) {
        var m = void 0, w = void 0, A = void 0, l = void 0, u = -1;
        s.groupCtx = s, r.globals.seriesGroups.forEach(function(V, j) {
          V.indexOf(r.config.series[f].name) > -1 && (u = j);
        }), u !== -1 && (s.groupCtx = s[r.globals.seriesGroups[u]]);
        var x = [], v = [], k = r.globals.comboCharts ? a[f] : f;
        s.yRatio.length > 1 && (s.yaxisIndex = k), s.isReversed = r.config.yaxis[s.yaxisIndex] && r.config.yaxis[s.yaxisIndex].reversed;
        var S = s.graphics.group({ class: "apexcharts-series", seriesName: P.escapeString(r.globals.seriesNames[k]), rel: f + 1, "data:realIndex": k });
        s.ctx.series.addCollapsedClassToSeries(S, k);
        var C = s.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": k }), L = s.graphics.group({ class: "apexcharts-bar-goals-markers" }), I = 0, z = 0, T = s.initialPositions(h, c, m, w, A, l);
        c = T.y, I = T.barHeight, w = T.yDivision, l = T.zeroW, h = T.x, z = T.barWidth, m = T.xDivision, A = T.zeroH, r.globals.barHeight = I, r.globals.barWidth = z, s.barHelpers.initializeStackedXYVars(s), s.groupCtx.prevY.length === 1 && s.groupCtx.prevY[0].every(function(V) {
          return isNaN(V);
        }) && (s.groupCtx.prevY[0] = s.groupCtx.prevY[0].map(function(V) {
          return A;
        }), s.groupCtx.prevYF[0] = s.groupCtx.prevYF[0].map(function(V) {
          return 0;
        }));
        for (var E = 0; E < r.globals.dataPoints; E++) {
          var R = s.barHelpers.getStrokeWidth(f, E, k), O = { indexes: { i: f, j: E, realIndex: k, bc: b }, strokeWidth: R, x: h, y: c, elSeries: S, groupIndex: u, seriesGroup: r.globals.seriesGroups[u] }, D = null;
          s.isHorizontal ? (D = s.drawStackedBarPaths(X(X({}, O), {}, { zeroW: l, barHeight: I, yDivision: w })), z = s.series[f][E] / s.invertedYRatio) : (D = s.drawStackedColumnPaths(X(X({}, O), {}, { xDivision: m, barWidth: z, zeroH: A })), I = s.series[f][E] / s.yRatio[s.yaxisIndex]);
          var W = s.barHelpers.drawGoalLine({ barXPosition: D.barXPosition, barYPosition: D.barYPosition, goalX: D.goalX, goalY: D.goalY, barHeight: I, barWidth: z });
          W && L.add(W), c = D.y, h = D.x, x.push(h), v.push(c);
          var N = s.barHelpers.getPathFillColor(i, f, E, k);
          S = s.renderSeries({ realIndex: k, pathFill: N, j: E, i: f, groupIndex: u, pathFrom: D.pathFrom, pathTo: D.pathTo, strokeWidth: R, elSeries: S, x: h, y: c, series: i, barHeight: I, barWidth: z, elDataLabelsWrap: C, elGoalsMarkers: L, type: "bar", visibleSeries: 0 });
        }
        r.globals.seriesXvalues[k] = x, r.globals.seriesYvalues[k] = v, s.groupCtx.prevY.push(s.groupCtx.yArrj), s.groupCtx.prevYF.push(s.groupCtx.yArrjF), s.groupCtx.prevYVal.push(s.groupCtx.yArrjVal), s.groupCtx.prevX.push(s.groupCtx.xArrj), s.groupCtx.prevXF.push(s.groupCtx.xArrjF), s.groupCtx.prevXVal.push(s.groupCtx.xArrjVal), o.add(S);
      }, g = 0, p = 0; g < i.length; g++, p++)
        d(g, p);
      return o;
    } }, { key: "initialPositions", value: function(i, a, s, r, n, o) {
      var h, c, d, g, p = this.w;
      return this.isHorizontal ? (d = (d = r = p.globals.gridHeight / p.globals.dataPoints) * parseInt(p.config.plotOptions.bar.barHeight, 10) / 100, String(p.config.plotOptions.bar.barHeight).indexOf("%") === -1 && (d = parseInt(p.config.plotOptions.bar.barHeight, 10)), o = this.baseLineInvertedY + p.globals.padHorizontal + (this.isReversed ? p.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), a = (r - d) / 2) : (g = s = p.globals.gridWidth / p.globals.dataPoints, g = p.globals.isXNumeric && p.globals.dataPoints > 1 ? (s = p.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : g * parseInt(p.config.plotOptions.bar.columnWidth, 10) / 100, String(p.config.plotOptions.bar.columnWidth).indexOf("%") === -1 && (g = parseInt(p.config.plotOptions.bar.columnWidth, 10)), n = p.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? p.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), i = p.globals.padHorizontal + (s - g) / 2), { x: i, y: a, yDivision: r, xDivision: s, barHeight: (h = p.globals.seriesGroups) !== null && h !== void 0 && h.length ? d / p.globals.seriesGroups.length : d, barWidth: (c = p.globals.seriesGroups) !== null && c !== void 0 && c.length ? g / p.globals.seriesGroups.length : g, zeroH: n, zeroW: o };
    } }, { key: "drawStackedBarPaths", value: function(i) {
      for (var a, s = i.indexes, r = i.barHeight, n = i.strokeWidth, o = i.zeroW, h = i.x, c = i.y, d = i.groupIndex, g = i.seriesGroup, p = i.yDivision, f = i.elSeries, b = this.w, m = c + (d !== -1 ? d * r : 0), w = s.i, A = s.j, l = 0, u = 0; u < this.groupCtx.prevXF.length; u++)
        l += this.groupCtx.prevXF[u][A];
      var x = w;
      if (g && (x = g.indexOf(b.config.series[w].name)), x > 0) {
        var v = o;
        this.groupCtx.prevXVal[x - 1][A] < 0 ? v = this.series[w][A] >= 0 ? this.groupCtx.prevX[x - 1][A] + l - 2 * (this.isReversed ? l : 0) : this.groupCtx.prevX[x - 1][A] : this.groupCtx.prevXVal[x - 1][A] >= 0 && (v = this.series[w][A] >= 0 ? this.groupCtx.prevX[x - 1][A] : this.groupCtx.prevX[x - 1][A] - l + 2 * (this.isReversed ? l : 0)), a = v;
      } else
        a = o;
      h = this.series[w][A] === null ? a : a + this.series[w][A] / this.invertedYRatio - 2 * (this.isReversed ? this.series[w][A] / this.invertedYRatio : 0);
      var k = this.barHelpers.getBarpaths({ barYPosition: m, barHeight: r, x1: a, x2: h, strokeWidth: n, series: this.series, realIndex: s.realIndex, seriesGroup: g, i: w, j: A, w: b });
      return this.barHelpers.barBackground({ j: A, i: w, y1: m, y2: r, elSeries: f }), c += p, { pathTo: k.pathTo, pathFrom: k.pathFrom, goalX: this.barHelpers.getGoalValues("x", o, null, w, A), barYPosition: m, x: h, y: c };
    } }, { key: "drawStackedColumnPaths", value: function(i) {
      var a = i.indexes, s = i.x, r = i.y, n = i.xDivision, o = i.barWidth, h = i.zeroH, c = i.groupIndex, d = i.seriesGroup, g = i.elSeries, p = this.w, f = a.i, b = a.j, m = a.bc;
      if (p.globals.isXNumeric) {
        var w = p.globals.seriesX[f][b];
        w || (w = 0), s = (w - p.globals.minX) / this.xRatio - o / 2, p.globals.seriesGroups.length && (s = (w - p.globals.minX) / this.xRatio - o / 2 * p.globals.seriesGroups.length);
      }
      for (var A, l = s + (c !== -1 ? c * o : 0), u = 0, x = 0; x < this.groupCtx.prevYF.length; x++)
        u += isNaN(this.groupCtx.prevYF[x][b]) ? 0 : this.groupCtx.prevYF[x][b];
      var v = f;
      if (d && (v = d.indexOf(p.config.series[f].name)), v > 0 && !p.globals.isXNumeric || v > 0 && p.globals.isXNumeric && p.globals.seriesX[f - 1][b] === p.globals.seriesX[f][b]) {
        var k, S, C, L = Math.min(this.yRatio.length + 1, f + 1);
        if (this.groupCtx.prevY[v - 1] !== void 0 && this.groupCtx.prevY[v - 1].length)
          for (var I = 1; I < L; I++) {
            var z;
            if (!isNaN((z = this.groupCtx.prevY[v - I]) === null || z === void 0 ? void 0 : z[b])) {
              C = this.groupCtx.prevY[v - I][b];
              break;
            }
          }
        for (var T = 1; T < L; T++) {
          var E, R;
          if (((E = this.groupCtx.prevYVal[v - T]) === null || E === void 0 ? void 0 : E[b]) < 0) {
            S = this.series[f][b] >= 0 ? C - u + 2 * (this.isReversed ? u : 0) : C;
            break;
          }
          if (((R = this.groupCtx.prevYVal[v - T]) === null || R === void 0 ? void 0 : R[b]) >= 0) {
            S = this.series[f][b] >= 0 ? C : C + u - 2 * (this.isReversed ? u : 0);
            break;
          }
        }
        S === void 0 && (S = p.globals.gridHeight), A = (k = this.groupCtx.prevYF[0]) !== null && k !== void 0 && k.every(function(D) {
          return D === 0;
        }) && this.groupCtx.prevYF.slice(1, v).every(function(D) {
          return D.every(function(W) {
            return isNaN(W);
          });
        }) ? h : S;
      } else
        A = h;
      r = this.series[f][b] ? A - this.series[f][b] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[f][b] / this.yRatio[this.yaxisIndex] : 0) : A;
      var O = this.barHelpers.getColumnPaths({ barXPosition: l, barWidth: o, y1: A, y2: r, yRatio: this.yRatio[this.yaxisIndex], strokeWidth: this.strokeWidth, series: this.series, seriesGroup: d, realIndex: a.realIndex, i: f, j: b, w: p });
      return this.barHelpers.barBackground({ bc: m, j: b, i: f, x1: l, x2: o, elSeries: g }), s += n, { pathTo: O.pathTo, pathFrom: O.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, h, f, b), barXPosition: l, x: p.globals.isXNumeric ? s - n : s, y: r };
    } }]), t;
  }(), Be = function(y) {
    ge(t, ke);
    var e = ue(t);
    function t() {
      return F(this, t), e.apply(this, arguments);
    }
    return Y(t, [{ key: "draw", value: function(i, a, s) {
      var r = this, n = this.w, o = new M(this.ctx), h = n.globals.comboCharts ? a : n.config.chart.type, c = new ae(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = n.config.plotOptions.bar.horizontal;
      var d = new q(this.ctx, n);
      i = d.getLogSeries(i), this.series = i, this.yRatio = d.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i);
      for (var g = o.group({ class: "apexcharts-".concat(h, "-series apexcharts-plot-series") }), p = function(b) {
        r.isBoxPlot = n.config.chart.type === "boxPlot" || n.config.series[b].type === "boxPlot";
        var m, w, A, l, u = void 0, x = void 0, v = [], k = [], S = n.globals.comboCharts ? s[b] : b, C = o.group({ class: "apexcharts-series", seriesName: P.escapeString(n.globals.seriesNames[S]), rel: b + 1, "data:realIndex": S });
        r.ctx.series.addCollapsedClassToSeries(C, S), i[b].length > 0 && (r.visibleI = r.visibleI + 1);
        var L, I;
        r.yRatio.length > 1 && (r.yaxisIndex = S);
        var z = r.barHelpers.initialPositions();
        x = z.y, L = z.barHeight, w = z.yDivision, l = z.zeroW, u = z.x, I = z.barWidth, m = z.xDivision, A = z.zeroH, k.push(u + I / 2);
        for (var T = o.group({ class: "apexcharts-datalabels", "data:realIndex": S }), E = function(O) {
          var D = r.barHelpers.getStrokeWidth(b, O, S), W = null, N = { indexes: { i: b, j: O, realIndex: S }, x: u, y: x, strokeWidth: D, elSeries: C };
          W = r.isHorizontal ? r.drawHorizontalBoxPaths(X(X({}, N), {}, { yDivision: w, barHeight: L, zeroW: l })) : r.drawVerticalBoxPaths(X(X({}, N), {}, { xDivision: m, barWidth: I, zeroH: A })), x = W.y, u = W.x, O > 0 && k.push(u + I / 2), v.push(x), W.pathTo.forEach(function(V, j) {
            var se = !r.isBoxPlot && r.candlestickOptions.wick.useFillColor ? W.color[j] : n.globals.stroke.colors[b], K = c.fillPath({ seriesNumber: S, dataPointIndex: O, color: W.color[j], value: i[b][O] });
            r.renderSeries({ realIndex: S, pathFill: K, lineFill: se, j: O, i: b, pathFrom: W.pathFrom, pathTo: V, strokeWidth: D, elSeries: C, x: u, y: x, series: i, barHeight: L, barWidth: I, elDataLabelsWrap: T, visibleSeries: r.visibleI, type: n.config.chart.type });
          });
        }, R = 0; R < n.globals.dataPoints; R++)
          E(R);
        n.globals.seriesXvalues[S] = k, n.globals.seriesYvalues[S] = v, g.add(C);
      }, f = 0; f < i.length; f++)
        p(f);
      return g;
    } }, { key: "drawVerticalBoxPaths", value: function(i) {
      var a = i.indexes, s = i.x;
      i.y;
      var r = i.xDivision, n = i.barWidth, o = i.zeroH, h = i.strokeWidth, c = this.w, d = new M(this.ctx), g = a.i, p = a.j, f = !0, b = c.config.plotOptions.candlestick.colors.upward, m = c.config.plotOptions.candlestick.colors.downward, w = "";
      this.isBoxPlot && (w = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var A = this.yRatio[this.yaxisIndex], l = a.realIndex, u = this.getOHLCValue(l, p), x = o, v = o;
      u.o > u.c && (f = !1);
      var k = Math.min(u.o, u.c), S = Math.max(u.o, u.c), C = u.m;
      c.globals.isXNumeric && (s = (c.globals.seriesX[l][p] - c.globals.minX) / this.xRatio - n / 2);
      var L = s + n * this.visibleI;
      this.series[g][p] === void 0 || this.series[g][p] === null ? (k = o, S = o) : (k = o - k / A, S = o - S / A, x = o - u.h / A, v = o - u.l / A, C = o - u.m / A);
      var I = d.move(L, o), z = d.move(L + n / 2, k);
      return c.globals.previousPaths.length > 0 && (z = this.getPreviousPath(l, p, !0)), I = this.isBoxPlot ? [d.move(L, k) + d.line(L + n / 2, k) + d.line(L + n / 2, x) + d.line(L + n / 4, x) + d.line(L + n - n / 4, x) + d.line(L + n / 2, x) + d.line(L + n / 2, k) + d.line(L + n, k) + d.line(L + n, C) + d.line(L, C) + d.line(L, k + h / 2), d.move(L, C) + d.line(L + n, C) + d.line(L + n, S) + d.line(L + n / 2, S) + d.line(L + n / 2, v) + d.line(L + n - n / 4, v) + d.line(L + n / 4, v) + d.line(L + n / 2, v) + d.line(L + n / 2, S) + d.line(L, S) + d.line(L, C) + "z"] : [d.move(L, S) + d.line(L + n / 2, S) + d.line(L + n / 2, x) + d.line(L + n / 2, S) + d.line(L + n, S) + d.line(L + n, k) + d.line(L + n / 2, k) + d.line(L + n / 2, v) + d.line(L + n / 2, k) + d.line(L, k) + d.line(L, S - h / 2)], z += d.move(L, k), c.globals.isXNumeric || (s += r), { pathTo: I, pathFrom: z, x: s, y: S, barXPosition: L, color: this.isBoxPlot ? w : f ? [b] : [m] };
    } }, { key: "drawHorizontalBoxPaths", value: function(i) {
      var a = i.indexes;
      i.x;
      var s = i.y, r = i.yDivision, n = i.barHeight, o = i.zeroW, h = i.strokeWidth, c = this.w, d = new M(this.ctx), g = a.i, p = a.j, f = this.boxOptions.colors.lower;
      this.isBoxPlot && (f = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var b = this.invertedYRatio, m = a.realIndex, w = this.getOHLCValue(m, p), A = o, l = o, u = Math.min(w.o, w.c), x = Math.max(w.o, w.c), v = w.m;
      c.globals.isXNumeric && (s = (c.globals.seriesX[m][p] - c.globals.minX) / this.invertedXRatio - n / 2);
      var k = s + n * this.visibleI;
      this.series[g][p] === void 0 || this.series[g][p] === null ? (u = o, x = o) : (u = o + u / b, x = o + x / b, A = o + w.h / b, l = o + w.l / b, v = o + w.m / b);
      var S = d.move(o, k), C = d.move(u, k + n / 2);
      return c.globals.previousPaths.length > 0 && (C = this.getPreviousPath(m, p, !0)), S = [d.move(u, k) + d.line(u, k + n / 2) + d.line(A, k + n / 2) + d.line(A, k + n / 2 - n / 4) + d.line(A, k + n / 2 + n / 4) + d.line(A, k + n / 2) + d.line(u, k + n / 2) + d.line(u, k + n) + d.line(v, k + n) + d.line(v, k) + d.line(u + h / 2, k), d.move(v, k) + d.line(v, k + n) + d.line(x, k + n) + d.line(x, k + n / 2) + d.line(l, k + n / 2) + d.line(l, k + n - n / 4) + d.line(l, k + n / 4) + d.line(l, k + n / 2) + d.line(x, k + n / 2) + d.line(x, k) + d.line(v, k) + "z"], C += d.move(u, k), c.globals.isXNumeric || (s += r), { pathTo: S, pathFrom: C, x, y: s, barYPosition: k, color: f };
    } }, { key: "getOHLCValue", value: function(i, a) {
      var s = this.w;
      return { o: this.isBoxPlot ? s.globals.seriesCandleH[i][a] : s.globals.seriesCandleO[i][a], h: this.isBoxPlot ? s.globals.seriesCandleO[i][a] : s.globals.seriesCandleH[i][a], m: s.globals.seriesCandleM[i][a], l: this.isBoxPlot ? s.globals.seriesCandleC[i][a] : s.globals.seriesCandleL[i][a], c: this.isBoxPlot ? s.globals.seriesCandleL[i][a] : s.globals.seriesCandleC[i][a] };
    } }]), t;
  }(), rt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "checkColorRange", value: function() {
      var e = this.w, t = !1, i = e.config.plotOptions[e.config.chart.type];
      return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map(function(a, s) {
        a.from <= 0 && (t = !0);
      }), t;
    } }, { key: "getShadeColor", value: function(e, t, i, a) {
      var s = this.w, r = 1, n = s.config.plotOptions[e].shadeIntensity, o = this.determineColor(e, t, i);
      s.globals.hasNegs || a ? r = s.config.plotOptions[e].reverseNegativeShade ? o.percent < 0 ? o.percent / 100 * (1.25 * n) : (1 - o.percent / 100) * (1.25 * n) : o.percent <= 0 ? 1 - (1 + o.percent / 100) * n : (1 - o.percent / 100) * n : (r = 1 - o.percent / 100, e === "treemap" && (r = (1 - o.percent / 100) * (1.25 * n)));
      var h = o.color, c = new P();
      return s.config.plotOptions[e].enableShades && (h = this.w.config.theme.mode === "dark" ? P.hexToRgba(c.shadeColor(-1 * r, o.color), s.config.fill.opacity) : P.hexToRgba(c.shadeColor(r, o.color), s.config.fill.opacity)), { color: h, colorProps: o };
    } }, { key: "determineColor", value: function(e, t, i) {
      var a = this.w, s = a.globals.series[t][i], r = a.config.plotOptions[e], n = r.colorScale.inverse ? i : t;
      r.distributed && a.config.chart.type === "treemap" && (n = i);
      var o = a.globals.colors[n], h = null, c = Math.min.apply(Math, J(a.globals.series[t])), d = Math.max.apply(Math, J(a.globals.series[t]));
      r.distributed || e !== "heatmap" || (c = a.globals.minY, d = a.globals.maxY), r.colorScale.min !== void 0 && (c = r.colorScale.min < a.globals.minY ? r.colorScale.min : a.globals.minY, d = r.colorScale.max > a.globals.maxY ? r.colorScale.max : a.globals.maxY);
      var g = Math.abs(d) + Math.abs(c), p = 100 * s / (g === 0 ? g - 1e-6 : g);
      return r.colorScale.ranges.length > 0 && r.colorScale.ranges.map(function(f, b) {
        if (s >= f.from && s <= f.to) {
          o = f.color, h = f.foreColor ? f.foreColor : null, c = f.from, d = f.to;
          var m = Math.abs(d) + Math.abs(c);
          p = 100 * s / (m === 0 ? m - 1e-6 : m);
        }
      }), { color: o, foreColor: h, percent: p };
    } }, { key: "calculateDataLabels", value: function(e) {
      var t = e.text, i = e.x, a = e.y, s = e.i, r = e.j, n = e.colorProps, o = e.fontSize, h = this.w.config.dataLabels, c = new M(this.ctx), d = new ye(this.ctx), g = null;
      if (h.enabled) {
        g = c.group({ class: "apexcharts-data-labels" });
        var p = h.offsetX, f = h.offsetY, b = i + p, m = a + parseFloat(h.style.fontSize) / 3 + f;
        d.plotDataLabelsText({ x: b, y: m, text: t, i: s, j: r, color: n.foreColor, parent: g, fontSize: o, dataLabelsConfig: h });
      }
      return g;
    } }, { key: "addListeners", value: function(e) {
      var t = new M(this.ctx);
      e.node.addEventListener("mouseenter", t.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", t.pathMouseLeave.bind(this, e)), e.node.addEventListener("mousedown", t.pathMouseDown.bind(this, e));
    } }]), y;
  }(), Yt = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.w = e.w, this.xRatio = t.xRatio, this.yRatio = t.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new rt(e), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return Y(y, [{ key: "draw", value: function(e) {
      var t = this.w, i = new M(this.ctx), a = i.group({ class: "apexcharts-heatmap" });
      a.attr("clip-path", "url(#gridRectMask".concat(t.globals.cuid, ")"));
      var s = t.globals.gridWidth / t.globals.dataPoints, r = t.globals.gridHeight / t.globals.series.length, n = 0, o = !1;
      this.negRange = this.helpers.checkColorRange();
      var h = e.slice();
      t.config.yaxis[0].reversed && (o = !0, h.reverse());
      for (var c = o ? 0 : h.length - 1; o ? c < h.length : c >= 0; o ? c++ : c--) {
        var d = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: P.escapeString(t.globals.seriesNames[c]), rel: c + 1, "data:realIndex": c });
        if (this.ctx.series.addCollapsedClassToSeries(d, c), t.config.chart.dropShadow.enabled) {
          var g = t.config.chart.dropShadow;
          new Z(this.ctx).dropShadow(d, g, c);
        }
        for (var p = 0, f = t.config.plotOptions.heatmap.shadeIntensity, b = 0; b < h[c].length; b++) {
          var m = this.helpers.getShadeColor(t.config.chart.type, c, b, this.negRange), w = m.color, A = m.colorProps;
          t.config.fill.type === "image" && (w = new ae(this.ctx).fillPath({ seriesNumber: c, dataPointIndex: b, opacity: t.globals.hasNegs ? A.percent < 0 ? 1 - (1 + A.percent / 100) : f + A.percent / 100 : A.percent / 100, patternID: P.randomId(), width: t.config.fill.image.width ? t.config.fill.image.width : s, height: t.config.fill.image.height ? t.config.fill.image.height : r }));
          var l = this.rectRadius, u = i.drawRect(p, n, s, r, l);
          if (u.attr({ cx: p, cy: n }), u.node.classList.add("apexcharts-heatmap-rect"), d.add(u), u.attr({ fill: w, i: c, index: c, j: b, val: e[c][b], "stroke-width": this.strokeWidth, stroke: t.config.plotOptions.heatmap.useFillColorAsStroke ? w : t.globals.stroke.colors[0], color: w }), this.helpers.addListeners(u), t.config.chart.animations.enabled && !t.globals.dataChanged) {
            var x = 1;
            t.globals.resized || (x = t.config.chart.animations.speed), this.animateHeatMap(u, p, n, s, r, x);
          }
          if (t.globals.dataChanged) {
            var v = 1;
            if (this.dynamicAnim.enabled && t.globals.shouldAnimate) {
              v = this.dynamicAnim.speed;
              var k = t.globals.previousPaths[c] && t.globals.previousPaths[c][b] && t.globals.previousPaths[c][b].color;
              k || (k = "rgba(255, 255, 255, 0)"), this.animateHeatColor(u, P.isColorHex(k) ? k : P.rgb2hex(k), P.isColorHex(w) ? w : P.rgb2hex(w), v);
            }
          }
          var S = (0, t.config.dataLabels.formatter)(t.globals.series[c][b], { value: t.globals.series[c][b], seriesIndex: c, dataPointIndex: b, w: t }), C = this.helpers.calculateDataLabels({ text: S, x: p + s / 2, y: n + r / 2, i: c, j: b, colorProps: A, series: h });
          C !== null && d.add(C), p += s;
        }
        n += r, a.add(d);
      }
      var L = t.globals.yAxisScale[0].result.slice();
      return t.config.yaxis[0].reversed ? L.unshift("") : L.push(""), t.globals.yAxisScale[0].result = L, a;
    } }, { key: "animateHeatMap", value: function(e, t, i, a, s, r) {
      var n = new de(this.ctx);
      n.animateRect(e, { x: t + a / 2, y: i + s / 2, width: 0, height: 0 }, { x: t, y: i, width: a, height: s }, r, function() {
        n.animationCompleted(e);
      });
    } }, { key: "animateHeatColor", value: function(e, t, i, a) {
      e.attr({ fill: t }).animate(a).attr({ fill: i });
    } }]), y;
  }(), nt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "drawYAxisTexts", value: function(e, t, i, a) {
      var s = this.w, r = s.config.yaxis[0], n = s.globals.yLabelFormatters[0];
      return new M(this.ctx).drawText({ x: e + r.labels.offsetX, y: t + r.labels.offsetY, text: n(a, i), textAnchor: "middle", fontSize: r.labels.style.fontSize, fontFamily: r.labels.style.fontFamily, foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors });
    } }]), y;
  }(), ot = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
      var t = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = Math.min(t.globals.gridWidth, t.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = t.globals.gridWidth / 2, t.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(t.config.plotOptions.pie.endAngle - t.config.plotOptions.pie.startAngle), this.initialAngle = t.config.plotOptions.pie.startAngle % this.fullAngle, t.globals.radialSize = this.defaultSize / 2.05 - t.config.stroke.width - (t.config.chart.sparkline.enabled ? 0 : t.config.chart.dropShadow.blur), this.donutSize = t.globals.radialSize * parseInt(t.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return Y(y, [{ key: "draw", value: function(e) {
      var t = this, i = this.w, a = new M(this.ctx);
      if (this.ret = a.group({ class: "apexcharts-pie" }), i.globals.noData)
        return this.ret;
      for (var s = 0, r = 0; r < e.length; r++)
        s += P.negToZero(e[r]);
      var n = [], o = a.group();
      s === 0 && (s = 1e-5), e.forEach(function(k) {
        t.maxY = Math.max(t.maxY, k);
      }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), i.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(this.ret);
      for (var h = 0; h < e.length; h++) {
        var c = this.fullAngle * P.negToZero(e[h]) / s;
        n.push(c), this.chartType === "polarArea" ? (n[h] = this.fullAngle / e.length, this.sliceSizes.push(i.globals.radialSize * e[h] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize);
      }
      if (i.globals.dataChanged) {
        for (var d, g = 0, p = 0; p < i.globals.previousPaths.length; p++)
          g += P.negToZero(i.globals.previousPaths[p]);
        for (var f = 0; f < i.globals.previousPaths.length; f++)
          d = this.fullAngle * P.negToZero(i.globals.previousPaths[f]) / g, this.prevSectorAngleArr.push(d);
      }
      this.donutSize < 0 && (this.donutSize = 0);
      var b = i.config.plotOptions.pie.customScale, m = i.globals.gridWidth / 2, w = i.globals.gridHeight / 2, A = m - i.globals.gridWidth / 2 * b, l = w - i.globals.gridHeight / 2 * b;
      if (this.chartType === "donut") {
        var u = a.drawCircle(this.donutSize);
        u.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), o.add(u);
      }
      var x = this.drawArcs(n, e);
      if (this.sliceLabels.forEach(function(k) {
        x.add(k);
      }), o.attr({ transform: "translate(".concat(A, ", ").concat(l, ") scale(").concat(b, ")") }), o.add(x), this.ret.add(o), this.donutDataLabels.show) {
        var v = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: A, translateY: l });
        this.ret.add(v);
      }
      return i.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(this.ret), this.ret;
    } }, { key: "drawArcs", value: function(e, t) {
      var i = this.w, a = new Z(this.ctx), s = new M(this.ctx), r = new ae(this.ctx), n = s.group({ class: "apexcharts-slices" }), o = this.initialAngle, h = this.initialAngle, c = this.initialAngle, d = this.initialAngle;
      this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
      for (var g = 0; g < e.length; g++) {
        var p = s.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: P.escapeString(i.globals.seriesNames[g]), rel: g + 1, "data:realIndex": g });
        n.add(p), h = d, c = (o = c) + e[g], d = h + this.prevSectorAngleArr[g];
        var f = c < o ? this.fullAngle + c - o : c - o, b = r.fillPath({ seriesNumber: g, size: this.sliceSizes[g], value: t[g] }), m = this.getChangedPath(h, d), w = s.drawPath({ d: m, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[g] : this.lineColorArr, strokeWidth: 0, fill: b, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(g) });
        if (w.attr({ index: 0, j: g }), a.setSelectionFilter(w, 0, g), i.config.chart.dropShadow.enabled) {
          var A = i.config.chart.dropShadow;
          a.dropShadow(w, A, g);
        }
        this.addListeners(w, this.donutDataLabels), M.setAttrs(w.node, { "data:angle": f, "data:startAngle": o, "data:strokeWidth": this.strokeWidth, "data:value": t[g] });
        var l = { x: 0, y: 0 };
        this.chartType === "pie" || this.chartType === "polarArea" ? l = P.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (o + f / 2) % this.fullAngle) : this.chartType === "donut" && (l = P.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (o + f / 2) % this.fullAngle)), p.add(w);
        var u = 0;
        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((u = f / this.fullAngle * i.config.chart.animations.speed) === 0 && (u = 1), this.animDur = u + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(w, { size: this.sliceSizes[g], endAngle: c, startAngle: o, prevStartAngle: h, prevEndAngle: d, animateStartingPos: !0, i: g, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(w, { size: this.sliceSizes[g], endAngle: c, startAngle: o, i: g, totalItems: e.length - 1, animBeginArr: this.animBeginArr, dur: u }), i.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && w.click(this.pieClicked.bind(this, g)), i.globals.selectedDataPoints[0] !== void 0 && i.globals.selectedDataPoints[0].indexOf(g) > -1 && this.pieClicked(g), i.config.dataLabels.enabled) {
          var x = l.x, v = l.y, k = 100 * f / this.fullAngle + "%";
          if (f !== 0 && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < e[g]) {
            var S = i.config.dataLabels.formatter;
            S !== void 0 && (k = S(i.globals.seriesPercent[g][0], { seriesIndex: g, w: i }));
            var C = i.globals.dataLabels.style.colors[g], L = s.group({ class: "apexcharts-datalabels" }), I = s.drawText({ x, y: v, text: k, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: C });
            if (L.add(I), i.config.dataLabels.dropShadow.enabled) {
              var z = i.config.dataLabels.dropShadow;
              a.dropShadow(I, z);
            }
            I.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && i.globals.resized === !1 && (I.node.classList.add("apexcharts-pie-label-delay"), I.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L);
          }
        }
      }
      return n;
    } }, { key: "addListeners", value: function(e, t) {
      var i = new M(this.ctx);
      e.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, e)), e.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, e)), e.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", i.pathMouseDown.bind(this, e)), this.donutDataLabels.total.showAlways || (e.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, e.node, t)), e.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, e.node, t)));
    } }, { key: "animatePaths", value: function(e, t) {
      var i = this.w, a = t.endAngle < t.startAngle ? this.fullAngle + t.endAngle - t.startAngle : t.endAngle - t.startAngle, s = a, r = t.startAngle, n = t.startAngle;
      t.prevStartAngle !== void 0 && t.prevEndAngle !== void 0 && (r = t.prevEndAngle, s = t.prevEndAngle < t.prevStartAngle ? this.fullAngle + t.prevEndAngle - t.prevStartAngle : t.prevEndAngle - t.prevStartAngle), t.i === i.config.series.length - 1 && (a + n > this.fullAngle ? t.endAngle = t.endAngle - (a + n) : a + n < this.fullAngle && (t.endAngle = t.endAngle + (this.fullAngle - (a + n)))), a === this.fullAngle && (a = this.fullAngle - 0.01), this.animateArc(e, r, n, a, s, t);
    } }, { key: "animateArc", value: function(e, t, i, a, s, r) {
      var n, o = this, h = this.w, c = new de(this.ctx), d = r.size;
      (isNaN(t) || isNaN(s)) && (t = i, s = a, r.dur = 0);
      var g = a, p = i, f = t < i ? this.fullAngle + t - i : t - i;
      h.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (n = o.getPiePath({ me: o, startAngle: r.prevStartAngle, angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle, size: d }), e.attr({ d: n })), r.dur !== 0 ? e.animate(r.dur, h.globals.easing, r.animBeginArr[r.i]).afterAll(function() {
        o.chartType !== "pie" && o.chartType !== "donut" && o.chartType !== "polarArea" || this.animate(h.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": o.strokeWidth }), r.i === h.config.series.length - 1 && c.animationCompleted(e);
      }).during(function(b) {
        g = f + (a - f) * b, r.animateStartingPos && (g = s + (a - s) * b, p = t - s + (i - (t - s)) * b), n = o.getPiePath({ me: o, startAngle: p, angle: g, size: d }), e.node.setAttribute("data:pathOrig", n), e.attr({ d: n });
      }) : (n = o.getPiePath({ me: o, startAngle: p, angle: a, size: d }), r.isTrack || (h.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", n), e.attr({ d: n, "stroke-width": o.strokeWidth }));
    } }, { key: "pieClicked", value: function(e) {
      var t, i = this.w, a = this, s = a.sliceSizes[e] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), r = i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(e)).members[0];
      if (r.attr("data:pieClicked") !== "true") {
        var n = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(n, function(d) {
          d.setAttribute("data:pieClicked", "false");
          var g = d.getAttribute("data:pathOrig");
          g && d.setAttribute("d", g);
        }), r.attr("data:pieClicked", "true");
        var o = parseInt(r.attr("data:startAngle"), 10), h = parseInt(r.attr("data:angle"), 10);
        t = a.getPiePath({ me: a, startAngle: o, angle: h, size: s }), h !== 360 && r.plot(t);
      } else {
        r.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r.node, this.donutDataLabels);
        var c = r.attr("data:pathOrig");
        r.attr({ d: c });
      }
    } }, { key: "getChangedPath", value: function(e, t) {
      var i = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: e, angle: t - e, size: this.size })), i;
    } }, { key: "getPiePath", value: function(e) {
      var t, i = e.me, a = e.startAngle, s = e.angle, r = e.size, n = new M(this.ctx), o = a, h = Math.PI * (o - 90) / 180, c = s + a;
      Math.ceil(c) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (c = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(c) > this.fullAngle && (c -= this.fullAngle);
      var d = Math.PI * (c - 90) / 180, g = i.centerX + r * Math.cos(h), p = i.centerY + r * Math.sin(h), f = i.centerX + r * Math.cos(d), b = i.centerY + r * Math.sin(d), m = P.polarToCartesian(i.centerX, i.centerY, i.donutSize, c), w = P.polarToCartesian(i.centerX, i.centerY, i.donutSize, o), A = s > 180 ? 1 : 0, l = ["M", g, p, "A", r, r, 0, A, 1, f, b];
      return t = i.chartType === "donut" ? [].concat(l, ["L", m.x, m.y, "A", i.donutSize, i.donutSize, 0, A, 0, w.x, w.y, "L", g, p, "z"]).join(" ") : i.chartType === "pie" || i.chartType === "polarArea" ? [].concat(l, ["L", i.centerX, i.centerY, "L", g, p]).join(" ") : [].concat(l).join(" "), n.roundPathCorners(t, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(e) {
      var t = this.w, i = new we(this.ctx), a = new M(this.ctx), s = new nt(this.ctx), r = a.group(), n = a.group(), o = i.niceScale(0, Math.ceil(this.maxY), t.config.yaxis[0].tickAmount, 0, !0), h = o.result.reverse(), c = o.result.length;
      this.maxY = o.niceMax;
      for (var d = t.globals.radialSize, g = d / (c - 1), p = 0; p < c - 1; p++) {
        var f = a.drawCircle(d);
        if (f.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": t.config.plotOptions.polarArea.rings.strokeWidth, stroke: t.config.plotOptions.polarArea.rings.strokeColor }), t.config.yaxis[0].show) {
          var b = s.drawYAxisTexts(this.centerX, this.centerY - d + parseInt(t.config.yaxis[0].labels.style.fontSize, 10) / 2, p, h[p]);
          n.add(b);
        }
        r.add(f), d -= g;
      }
      this.drawSpokes(e), e.add(r), e.add(n);
    } }, { key: "renderInnerDataLabels", value: function(e, t) {
      var i = this.w, a = new M(this.ctx), s = a.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(t.translateX ? t.translateX : 0, ", ").concat(t.translateY ? t.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), r = e.total.show;
      s.node.style.opacity = t.opacity;
      var n, o, h = t.centerX, c = t.centerY;
      n = e.name.color === void 0 ? i.globals.colors[0] : e.name.color;
      var d = e.name.fontSize, g = e.name.fontFamily, p = e.name.fontWeight;
      o = e.value.color === void 0 ? i.config.chart.foreColor : e.value.color;
      var f = e.value.formatter, b = "", m = "";
      if (r ? (n = e.total.color, d = e.total.fontSize, g = e.total.fontFamily, p = e.total.fontWeight, m = e.total.label, b = e.total.formatter(i)) : i.globals.series.length === 1 && (b = f(i.globals.series[0], i), m = i.globals.seriesNames[0]), m && (m = e.name.formatter(m, e.total.show, i)), e.name.show) {
        var w = a.drawText({ x: h, y: c + parseFloat(e.name.offsetY), text: m, textAnchor: "middle", foreColor: n, fontSize: d, fontWeight: p, fontFamily: g });
        w.node.classList.add("apexcharts-datalabel-label"), s.add(w);
      }
      if (e.value.show) {
        var A = e.name.show ? parseFloat(e.value.offsetY) + 16 : e.value.offsetY, l = a.drawText({ x: h, y: c + A, text: b, textAnchor: "middle", foreColor: o, fontWeight: e.value.fontWeight, fontSize: e.value.fontSize, fontFamily: e.value.fontFamily });
        l.node.classList.add("apexcharts-datalabel-value"), s.add(l);
      }
      return s;
    } }, { key: "printInnerLabels", value: function(e, t, i, a) {
      var s, r = this.w;
      a ? s = e.name.color === void 0 ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : e.name.color : r.globals.series.length > 1 && e.total.show && (s = e.total.color);
      var n = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i = (0, e.value.formatter)(i, r), a || typeof e.total.formatter != "function" || (i = e.total.formatter(r));
      var h = t === e.total.label;
      t = e.name.formatter(t, h, r), n !== null && (n.textContent = t), o !== null && (o.textContent = i), n !== null && (n.style.fill = s);
    } }, { key: "printDataLabelsInner", value: function(e, t) {
      var i = this.w, a = e.getAttribute("data:value"), s = i.globals.seriesNames[parseInt(e.parentNode.getAttribute("rel"), 10) - 1];
      i.globals.series.length > 1 && this.printInnerLabels(t, s, a, e);
      var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      r !== null && (r.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(e) {
      var t = this, i = this.w, a = new M(this.ctx), s = i.config.plotOptions.polarArea.spokes;
      if (s.strokeWidth !== 0) {
        for (var r = [], n = 360 / i.globals.series.length, o = 0; o < i.globals.series.length; o++)
          r.push(P.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + n * o));
        r.forEach(function(h, c) {
          var d = a.drawLine(h.x, h.y, t.centerX, t.centerY, Array.isArray(s.connectorColors) ? s.connectorColors[c] : s.connectorColors);
          e.add(d);
        });
      }
    } }, { key: "revertDataLabelsInner", value: function(e, t, i) {
      var a = this, s = this.w, r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), n = !1, o = s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), h = function(g) {
        var p = g.makeSliceOut, f = g.printLabel;
        Array.prototype.forEach.call(o, function(b) {
          b.getAttribute("data:pieClicked") === "true" && (p && (n = !0), f && a.printDataLabelsInner(b, t));
        });
      };
      if (h({ makeSliceOut: !0, printLabel: !1 }), t.total.show && s.globals.series.length > 1)
        n && !t.total.showAlways ? h({ makeSliceOut: !1, printLabel: !0 }) : this.printInnerLabels(t, t.total.label, t.total.formatter(s));
      else if (h({ makeSliceOut: !1, printLabel: !0 }), !n)
        if (s.globals.selectedDataPoints.length && s.globals.series.length > 1)
          if (s.globals.selectedDataPoints[0].length > 0) {
            var c = s.globals.selectedDataPoints[0], d = s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c));
            this.printDataLabelsInner(d, t);
          } else
            r && s.globals.selectedDataPoints.length && s.globals.selectedDataPoints[0].length === 0 && (r.style.opacity = 0);
        else
          r && s.globals.series.length > 1 && (r.style.opacity = 0);
    } }]), y;
  }(), Ft = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var t = this.w;
      this.graphics = new M(this.ctx), this.lineColorArr = t.globals.stroke.colors !== void 0 ? t.globals.stroke.colors : t.globals.colors, this.defaultSize = t.globals.svgHeight < t.globals.svgWidth ? t.globals.gridHeight + 1.5 * t.globals.goldenPadding : t.globals.gridWidth, this.isLog = t.config.yaxis[0].logarithmic, this.coreUtils = new q(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(t.globals.maxY, 0) : t.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : t.globals.minY, this.polygons = t.config.plotOptions.radar.polygons, this.strokeWidth = t.config.stroke.show ? t.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - t.config.chart.dropShadow.blur, t.config.xaxis.labels.show && (this.size = this.size - t.globals.xAxisLabelsWidth / 1.75), t.config.plotOptions.radar.size !== void 0 && (this.size = t.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return Y(y, [{ key: "draw", value: function(e) {
      var t = this, i = this.w, a = new ae(this.ctx), s = [], r = new ye(this.ctx);
      e.length && (this.dataPointsLen = e[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var n = i.globals.gridWidth / 2, o = i.globals.gridHeight / 2, h = n + i.config.plotOptions.radar.offsetX, c = o + i.config.plotOptions.radar.offsetY, d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(c || 0, ")") }), g = [], p = null, f = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), e.forEach(function(m, w) {
        var A = m.length === i.globals.dataPoints, l = t.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": A, seriesName: P.escapeString(i.globals.seriesNames[w]), rel: w + 1, "data:realIndex": w });
        t.dataRadiusOfPercent[w] = [], t.dataRadius[w] = [], t.angleArr[w] = [], m.forEach(function(T, E) {
          var R = Math.abs(t.maxValue - t.minValue);
          T += Math.abs(t.minValue), t.isLog && (T = t.coreUtils.getLogVal(T, 0)), t.dataRadiusOfPercent[w][E] = T / R, t.dataRadius[w][E] = t.dataRadiusOfPercent[w][E] * t.size, t.angleArr[w][E] = E * t.disAngle;
        }), g = t.getDataPointsPos(t.dataRadius[w], t.angleArr[w]);
        var u = t.createPaths(g, { x: 0, y: 0 });
        p = t.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), f = t.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": w }), i.globals.delayedElements.push({ el: p.node, index: w });
        var x = { i: w, realIndex: w, animationDelay: w, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[w], strokeLineCap: i.config.stroke.lineCap }, v = null;
        i.globals.previousPaths.length > 0 && (v = t.getPreviousPath(w));
        for (var k = 0; k < u.linePathsTo.length; k++) {
          var S = t.graphics.renderPaths(X(X({}, x), {}, { pathFrom: v === null ? u.linePathsFrom[k] : v, pathTo: u.linePathsTo[k], strokeWidth: Array.isArray(t.strokeWidth) ? t.strokeWidth[w] : t.strokeWidth, fill: "none", drawShadow: !1 }));
          l.add(S);
          var C = a.fillPath({ seriesNumber: w }), L = t.graphics.renderPaths(X(X({}, x), {}, { pathFrom: v === null ? u.areaPathsFrom[k] : v, pathTo: u.areaPathsTo[k], strokeWidth: 0, fill: C, drawShadow: !1 }));
          if (i.config.chart.dropShadow.enabled) {
            var I = new Z(t.ctx), z = i.config.chart.dropShadow;
            I.dropShadow(L, Object.assign({}, z, { noUserSpaceOnUse: !0 }), w);
          }
          l.add(L);
        }
        m.forEach(function(T, E) {
          var R = new Pe(t.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: w, dataPointIndex: E }), O = t.graphics.drawMarker(g[E].x, g[E].y, R);
          O.attr("rel", E), O.attr("j", E), O.attr("index", w), O.node.setAttribute("default-marker-size", R.pSize);
          var D = t.graphics.group({ class: "apexcharts-series-markers" });
          D && D.add(O), p.add(D), l.add(p);
          var W = i.config.dataLabels;
          if (W.enabled) {
            var N = W.formatter(i.globals.series[w][E], { seriesIndex: w, dataPointIndex: E, w: i });
            r.plotDataLabelsText({ x: g[E].x, y: g[E].y, text: N, textAnchor: "middle", i: w, j: w, parent: f, offsetCorrection: !1, dataLabelsConfig: X({}, W) });
          }
          l.add(f);
        }), s.push(l);
      }), this.drawPolygons({ parent: d }), i.config.xaxis.labels.show) {
        var b = this.drawXAxisTexts();
        d.add(b);
      }
      return s.forEach(function(m) {
        d.add(m);
      }), d.add(this.yaxisLabels), d;
    } }, { key: "drawPolygons", value: function(e) {
      for (var t = this, i = this.w, a = e.parent, s = new nt(this.ctx), r = i.globals.yAxisScale[0].result.reverse(), n = r.length, o = [], h = this.size / (n - 1), c = 0; c < n; c++)
        o[c] = h * c;
      o.reverse();
      var d = [], g = [];
      o.forEach(function(p, f) {
        var b = P.getPolygonPos(p, t.dataPointsLen), m = "";
        b.forEach(function(w, A) {
          if (f === 0) {
            var l = t.graphics.drawLine(w.x, w.y, 0, 0, Array.isArray(t.polygons.connectorColors) ? t.polygons.connectorColors[A] : t.polygons.connectorColors);
            g.push(l);
          }
          A === 0 && t.yaxisLabelsTextsPos.push({ x: w.x, y: w.y }), m += w.x + "," + w.y + " ";
        }), d.push(m);
      }), d.forEach(function(p, f) {
        var b = t.polygons.strokeColors, m = t.polygons.strokeWidth, w = t.graphics.drawPolygon(p, Array.isArray(b) ? b[f] : b, Array.isArray(m) ? m[f] : m, i.globals.radarPolygons.fill.colors[f]);
        a.add(w);
      }), g.forEach(function(p) {
        a.add(p);
      }), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(p, f) {
        var b = s.drawYAxisTexts(p.x, p.y, f, r[f]);
        t.yaxisLabels.add(b);
      });
    } }, { key: "drawXAxisTexts", value: function() {
      var e = this, t = this.w, i = t.config.xaxis.labels, a = this.graphics.group({ class: "apexcharts-xaxis" }), s = P.getPolygonPos(this.size, this.dataPointsLen);
      return t.globals.labels.forEach(function(r, n) {
        var o = t.config.xaxis.labels.formatter, h = new ye(e.ctx);
        if (s[n]) {
          var c = e.getTextPos(s[n], e.size), d = o(r, { seriesIndex: -1, dataPointIndex: n, w: t });
          h.plotDataLabelsText({ x: c.newX, y: c.newY, text: d, textAnchor: c.textAnchor, i: n, j: n, parent: a, color: Array.isArray(i.style.colors) && i.style.colors[n] ? i.style.colors[n] : "#a8a8a8", dataLabelsConfig: X({ textAnchor: c.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 });
        }
      }), a;
    } }, { key: "createPaths", value: function(e, t) {
      var i = this, a = [], s = [], r = [], n = [];
      if (e.length) {
        s = [this.graphics.move(t.x, t.y)], n = [this.graphics.move(t.x, t.y)];
        var o = this.graphics.move(e[0].x, e[0].y), h = this.graphics.move(e[0].x, e[0].y);
        e.forEach(function(c, d) {
          o += i.graphics.line(c.x, c.y), h += i.graphics.line(c.x, c.y), d === e.length - 1 && (o += "Z", h += "Z");
        }), a.push(o), r.push(h);
      }
      return { linePathsFrom: s, linePathsTo: a, areaPathsFrom: n, areaPathsTo: r };
    } }, { key: "getTextPos", value: function(e, t) {
      var i = "middle", a = e.x, s = e.y;
      return Math.abs(e.x) >= 10 ? e.x > 0 ? (i = "start", a += 10) : e.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(e.y) >= t - 10 && (e.y < 0 ? s -= 10 : e.y > 0 && (s += 10)), { textAnchor: i, newX: a, newY: s };
    } }, { key: "getPreviousPath", value: function(e) {
      for (var t = this.w, i = null, a = 0; a < t.globals.previousPaths.length; a++) {
        var s = t.globals.previousPaths[a];
        s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(e, 10) && t.globals.previousPaths[a].paths[0] !== void 0 && (i = t.globals.previousPaths[a].paths[0].d);
      }
      return i;
    } }, { key: "getDataPointsPos", value: function(e, t) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
      e = e || [], t = t || [];
      for (var a = [], s = 0; s < i; s++) {
        var r = {};
        r.x = e[s] * Math.sin(t[s]), r.y = -e[s] * Math.cos(t[s]), a.push(r);
      }
      return a;
    } }]), y;
  }(), Rt = function(y) {
    ge(t, ot);
    var e = ue(t);
    function t(i) {
      var a;
      F(this, t), (a = e.call(this, i)).ctx = i, a.w = i.w, a.animBeginArr = [0], a.animDur = 0;
      var s = a.w;
      return a.startAngle = s.config.plotOptions.radialBar.startAngle, a.endAngle = s.config.plotOptions.radialBar.endAngle, a.totalAngle = Math.abs(s.config.plotOptions.radialBar.endAngle - s.config.plotOptions.radialBar.startAngle), a.trackStartAngle = s.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle = s.config.plotOptions.radialBar.track.endAngle, a.barLabels = a.w.config.plotOptions.radialBar.barLabels, a.donutDataLabels = a.w.config.plotOptions.radialBar.dataLabels, a.radialDataLabels = a.donutDataLabels, a.trackStartAngle || (a.trackStartAngle = a.startAngle), a.trackEndAngle || (a.trackEndAngle = a.endAngle), a.endAngle === 360 && (a.endAngle = 359.99), a.margin = parseInt(s.config.plotOptions.radialBar.track.margin, 10), a.onBarLabelClick = a.onBarLabelClick.bind(ze(a)), a;
    }
    return Y(t, [{ key: "draw", value: function(i) {
      var a = this.w, s = new M(this.ctx), r = s.group({ class: "apexcharts-radialbar" });
      if (a.globals.noData)
        return r;
      var n = s.group(), o = this.defaultSize / 2, h = a.globals.gridWidth / 2, c = this.defaultSize / 2.05;
      a.config.chart.sparkline.enabled || (c = c - a.config.stroke.width - a.config.chart.dropShadow.blur);
      var d = a.globals.fill.colors;
      if (a.config.plotOptions.radialBar.track.show) {
        var g = this.drawTracks({ size: c, centerX: h, centerY: o, colorArr: d, series: i });
        n.add(g);
      }
      var p = this.drawArcs({ size: c, centerX: h, centerY: o, colorArr: d, series: i }), f = 360;
      a.config.plotOptions.radialBar.startAngle < 0 && (f = this.totalAngle);
      var b = (360 - f) / 360;
      if (a.globals.radialSize = c - c * b, this.radialDataLabels.value.show) {
        var m = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        a.globals.radialSize += m * b;
      }
      return n.add(p.g), a.config.plotOptions.radialBar.hollow.position === "front" && (p.g.add(p.elHollow), p.dataLabels && p.g.add(p.dataLabels)), r.add(n), r;
    } }, { key: "drawTracks", value: function(i) {
      var a = this.w, s = new M(this.ctx), r = s.group({ class: "apexcharts-tracks" }), n = new Z(this.ctx), o = new ae(this.ctx), h = this.getStrokeWidth(i);
      i.size = i.size - h / 2;
      for (var c = 0; c < i.series.length; c++) {
        var d = s.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        r.add(d), d.attr({ rel: c + 1 }), i.size = i.size - h - this.margin;
        var g = a.config.plotOptions.radialBar.track, p = o.fillPath({ seriesNumber: 0, size: i.size, fillColors: Array.isArray(g.background) ? g.background[c] : g.background, solid: !0 }), f = this.trackStartAngle, b = this.trackEndAngle;
        Math.abs(b) + Math.abs(f) >= 360 && (b = 360 - Math.abs(this.startAngle) - 0.1);
        var m = s.drawPath({ d: "", stroke: p, strokeWidth: h * parseInt(g.strokeWidth, 10) / 100, fill: "none", strokeOpacity: g.opacity, classes: "apexcharts-radialbar-area" });
        if (g.dropShadow.enabled) {
          var w = g.dropShadow;
          n.dropShadow(m, w);
        }
        d.add(m), m.attr("id", "apexcharts-radialbarTrack-" + c), this.animatePaths(m, { centerX: i.centerX, centerY: i.centerY, endAngle: b, startAngle: f, size: i.size, i: c, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: a.globals.easing });
      }
      return r;
    } }, { key: "drawArcs", value: function(i) {
      var a = this.w, s = new M(this.ctx), r = new ae(this.ctx), n = new Z(this.ctx), o = s.group(), h = this.getStrokeWidth(i);
      i.size = i.size - h / 2;
      var c = a.config.plotOptions.radialBar.hollow.background, d = i.size - h * i.series.length - this.margin * i.series.length - h * parseInt(a.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, g = d - a.config.plotOptions.radialBar.hollow.margin;
      a.config.plotOptions.radialBar.hollow.image !== void 0 && (c = this.drawHollowImage(i, o, d, c));
      var p = this.drawHollow({ size: g, centerX: i.centerX, centerY: i.centerY, fill: c || "transparent" });
      if (a.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var f = a.config.plotOptions.radialBar.hollow.dropShadow;
        n.dropShadow(p, f);
      }
      var b = 1;
      !this.radialDataLabels.total.show && a.globals.series.length > 1 && (b = 0);
      var m = null;
      this.radialDataLabels.show && (m = this.renderInnerDataLabels(this.radialDataLabels, { hollowSize: d, centerX: i.centerX, centerY: i.centerY, opacity: b })), a.config.plotOptions.radialBar.hollow.position === "back" && (o.add(p), m && o.add(m));
      var w = !1;
      a.config.plotOptions.radialBar.inverseOrder && (w = !0);
      for (var A = w ? i.series.length - 1 : 0; w ? A >= 0 : A < i.series.length; w ? A-- : A++) {
        var l = s.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: P.escapeString(a.globals.seriesNames[A]) });
        o.add(l), l.attr({ rel: A + 1, "data:realIndex": A }), this.ctx.series.addCollapsedClassToSeries(l, A), i.size = i.size - h - this.margin;
        var u = r.fillPath({ seriesNumber: A, size: i.size, value: i.series[A] }), x = this.startAngle, v = void 0, k = P.negToZero(i.series[A] > 100 ? 100 : i.series[A]) / 100, S = Math.round(this.totalAngle * k) + this.startAngle, C = void 0;
        a.globals.dataChanged && (v = this.startAngle, C = Math.round(this.totalAngle * P.negToZero(a.globals.previousPaths[A]) / 100) + v), Math.abs(S) + Math.abs(x) >= 360 && (S -= 0.01), Math.abs(C) + Math.abs(v) >= 360 && (C -= 0.01);
        var L = S - x, I = Array.isArray(a.config.stroke.dashArray) ? a.config.stroke.dashArray[A] : a.config.stroke.dashArray, z = s.drawPath({ d: "", stroke: u, strokeWidth: h, fill: "none", fillOpacity: a.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + A, strokeDashArray: I });
        if (M.setAttrs(z.node, { "data:angle": L, "data:value": i.series[A] }), a.config.chart.dropShadow.enabled) {
          var T = a.config.chart.dropShadow;
          n.dropShadow(z, T, A);
        }
        if (n.setSelectionFilter(z, 0, A), this.addListeners(z, this.radialDataLabels), l.add(z), z.attr({ index: 0, j: A }), this.barLabels.enabled) {
          var E = P.polarToCartesian(i.centerX, i.centerY, i.size, x), R = this.barLabels.formatter(a.globals.seriesNames[A], { seriesIndex: A, w: a }), O = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || O.push("apexcharts-no-click");
          var D = this.barLabels.useSeriesColors ? a.globals.colors[A] : a.config.chart.foreColor;
          D || (D = a.config.chart.foreColor);
          var W = E.x - this.barLabels.margin, N = E.y, V = s.drawText({ x: W, y: N, text: R, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: D, cssClass: O.join(" ") });
          V.on("click", this.onBarLabelClick), V.attr({ rel: A + 1 }), x !== 0 && V.attr({ "transform-origin": "".concat(W, " ").concat(N), transform: "rotate(".concat(x, " 0 0)") }), l.add(V);
        }
        var j = 0;
        !this.initialAnim || a.globals.resized || a.globals.dataChanged || (j = a.config.chart.animations.speed), a.globals.dataChanged && (j = a.config.chart.animations.dynamicAnimation.speed), this.animDur = j / (1.2 * i.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(z, { centerX: i.centerX, centerY: i.centerY, endAngle: S, startAngle: x, prevEndAngle: C, prevStartAngle: v, size: i.size, i: A, totalItems: 2, animBeginArr: this.animBeginArr, dur: j, shouldSetPrevPaths: !0, easing: a.globals.easing });
      }
      return { g: o, elHollow: p, dataLabels: m };
    } }, { key: "drawHollow", value: function(i) {
      var a = new M(this.ctx).drawCircle(2 * i.size);
      return a.attr({ class: "apexcharts-radialbar-hollow", cx: i.centerX, cy: i.centerY, r: i.size, fill: i.fill }), a;
    } }, { key: "drawHollowImage", value: function(i, a, s, r) {
      var n = this.w, o = new ae(this.ctx), h = P.randomId(), c = n.config.plotOptions.radialBar.hollow.image;
      if (n.config.plotOptions.radialBar.hollow.imageClipped)
        o.clippedImgArea({ width: s, height: s, image: c, patternID: "pattern".concat(n.globals.cuid).concat(h) }), r = "url(#pattern".concat(n.globals.cuid).concat(h, ")");
      else {
        var d = n.config.plotOptions.radialBar.hollow.imageWidth, g = n.config.plotOptions.radialBar.hollow.imageHeight;
        if (d === void 0 && g === void 0) {
          var p = n.globals.dom.Paper.image(c).loaded(function(b) {
            this.move(i.centerX - b.width / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - b.height / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          a.add(p);
        } else {
          var f = n.globals.dom.Paper.image(c).loaded(function(b) {
            this.move(i.centerX - d / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - g / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(d, g);
          });
          a.add(f);
        }
      }
      return r;
    } }, { key: "getStrokeWidth", value: function(i) {
      var a = this.w;
      return i.size * (100 - parseInt(a.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (i.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(i) {
      var a = parseInt(i.target.getAttribute("rel"), 10) - 1, s = this.barLabels.onClick, r = this.w;
      s && s(r.globals.seriesNames[a], { w: r, seriesIndex: a });
    } }]), t;
  }(), Ot = function(y) {
    ge(t, ke);
    var e = ue(t);
    function t() {
      return F(this, t), e.apply(this, arguments);
    }
    return Y(t, [{ key: "draw", value: function(i, a) {
      var s = this.w, r = new M(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = i, this.seriesRangeStart = s.globals.seriesRangeStart, this.seriesRangeEnd = s.globals.seriesRangeEnd, this.barHelpers.initVariables(i);
      for (var n = r.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), o = 0; o < i.length; o++) {
        var h, c, d, g, p = void 0, f = void 0, b = s.globals.comboCharts ? a[o] : o, m = r.group({ class: "apexcharts-series", seriesName: P.escapeString(s.globals.seriesNames[b]), rel: o + 1, "data:realIndex": b });
        this.ctx.series.addCollapsedClassToSeries(m, b), i[o].length > 0 && (this.visibleI = this.visibleI + 1);
        var w = 0, A = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = b);
        var l = this.barHelpers.initialPositions();
        f = l.y, g = l.zeroW, p = l.x, A = l.barWidth, w = l.barHeight, h = l.xDivision, c = l.yDivision, d = l.zeroH;
        for (var u = r.group({ class: "apexcharts-datalabels", "data:realIndex": b }), x = r.group({ class: "apexcharts-rangebar-goals-markers" }), v = 0; v < s.globals.dataPoints; v++) {
          var k, S = this.barHelpers.getStrokeWidth(o, v, b), C = this.seriesRangeStart[o][v], L = this.seriesRangeEnd[o][v], I = null, z = null, T = null, E = { x: p, y: f, strokeWidth: S, elSeries: m }, R = this.seriesLen;
          if (s.config.plotOptions.bar.rangeBarGroupRows && (R = 1), s.config.series[o].data[v] === void 0)
            break;
          if (this.isHorizontal) {
            T = f + w * this.visibleI;
            var O = (c - w * R) / 2;
            if (s.config.series[o].data[v].x) {
              var D = this.detectOverlappingBars({ i: o, j: v, barYPosition: T, srty: O, barHeight: w, yDivision: c, initPositions: l });
              w = D.barHeight, T = D.barYPosition;
            }
            A = (I = this.drawRangeBarPaths(X({ indexes: { i: o, j: v, realIndex: b }, barHeight: w, barYPosition: T, zeroW: g, yDivision: c, y1: C, y2: L }, E))).barWidth;
          } else {
            s.globals.isXNumeric && (p = (s.globals.seriesX[o][v] - s.globals.minX) / this.xRatio - A / 2), z = p + A * this.visibleI;
            var W = (h - A * R) / 2;
            if (s.config.series[o].data[v].x) {
              var N = this.detectOverlappingBars({ i: o, j: v, barXPosition: z, srtx: W, barWidth: A, xDivision: h, initPositions: l });
              A = N.barWidth, z = N.barXPosition;
            }
            w = (I = this.drawRangeColumnPaths(X({ indexes: { i: o, j: v, realIndex: b }, barWidth: A, barXPosition: z, zeroH: d, xDivision: h }, E))).barHeight;
          }
          var V = this.barHelpers.drawGoalLine({ barXPosition: I.barXPosition, barYPosition: T, goalX: I.goalX, goalY: I.goalY, barHeight: w, barWidth: A });
          V && x.add(V), f = I.y, p = I.x;
          var j = this.barHelpers.getPathFillColor(i, o, v, b), se = s.globals.stroke.colors[b];
          this.renderSeries((ee(k = { realIndex: b, pathFill: j, lineFill: se, j: v, i: o, x: p, y: f, y1: C, y2: L, pathFrom: I.pathFrom, pathTo: I.pathTo, strokeWidth: S, elSeries: m, series: i, barHeight: w, barWidth: A, barXPosition: z, barYPosition: T }, "barWidth", A), ee(k, "elDataLabelsWrap", u), ee(k, "elGoalsMarkers", x), ee(k, "visibleSeries", this.visibleI), ee(k, "type", "rangebar"), k));
        }
        n.add(m);
      }
      return n;
    } }, { key: "detectOverlappingBars", value: function(i) {
      var a = i.i, s = i.j, r = i.barYPosition, n = i.barXPosition, o = i.srty, h = i.srtx, c = i.barHeight, d = i.barWidth, g = i.yDivision, p = i.xDivision, f = i.initPositions, b = this.w, m = [], w = b.config.series[a].data[s].rangeName, A = b.config.series[a].data[s].x, l = Array.isArray(A) ? A.join(" ") : A, u = b.globals.labels.map(function(v) {
        return Array.isArray(v) ? v.join(" ") : v;
      }).indexOf(l), x = b.globals.seriesRange[a].findIndex(function(v) {
        return v.x === l && v.overlaps.length > 0;
      });
      return this.isHorizontal ? (r = b.config.plotOptions.bar.rangeBarGroupRows ? o + g * u : o + c * this.visibleI + g * u, x > -1 && !b.config.plotOptions.bar.rangeBarOverlap && (m = b.globals.seriesRange[a][x].overlaps).indexOf(w) > -1 && (r = (c = f.barHeight / m.length) * this.visibleI + g * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + c * (this.visibleI + m.indexOf(w)) + g * u)) : (u > -1 && (n = b.config.plotOptions.bar.rangeBarGroupRows ? h + p * u : h + d * this.visibleI + p * u), x > -1 && !b.config.plotOptions.bar.rangeBarOverlap && (m = b.globals.seriesRange[a][x].overlaps).indexOf(w) > -1 && (n = (d = f.barWidth / m.length) * this.visibleI + p * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + d * (this.visibleI + m.indexOf(w)) + p * u)), { barYPosition: r, barXPosition: n, barHeight: c, barWidth: d };
    } }, { key: "drawRangeColumnPaths", value: function(i) {
      var a = i.indexes, s = i.x, r = i.xDivision, n = i.barWidth, o = i.barXPosition, h = i.zeroH, c = this.w, d = a.i, g = a.j, p = this.yRatio[this.yaxisIndex], f = a.realIndex, b = this.getRangeValue(f, g), m = Math.min(b.start, b.end), w = Math.max(b.start, b.end);
      this.series[d][g] === void 0 || this.series[d][g] === null ? m = h : (m = h - m / p, w = h - w / p);
      var A = Math.abs(w - m), l = this.barHelpers.getColumnPaths({ barXPosition: o, barWidth: n, y1: m, y2: w, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: a.realIndex, i: f, j: g, w: c });
      if (c.globals.isXNumeric) {
        var u = this.getBarXForNumericXAxis({ x: s, j: g, realIndex: f, barWidth: n });
        s = u.x, o = u.barXPosition;
      } else
        s += r;
      return { pathTo: l.pathTo, pathFrom: l.pathFrom, barHeight: A, x: s, y: w, goalY: this.barHelpers.getGoalValues("y", null, h, d, g), barXPosition: o };
    } }, { key: "drawRangeBarPaths", value: function(i) {
      var a = i.indexes, s = i.y, r = i.y1, n = i.y2, o = i.yDivision, h = i.barHeight, c = i.barYPosition, d = i.zeroW, g = this.w, p = d + r / this.invertedYRatio, f = d + n / this.invertedYRatio, b = Math.abs(f - p), m = this.barHelpers.getBarpaths({ barYPosition: c, barHeight: h, x1: p, x2: f, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: a.realIndex, realIndex: a.realIndex, j: a.j, w: g });
      return g.globals.isXNumeric || (s += o), { pathTo: m.pathTo, pathFrom: m.pathFrom, barWidth: b, x: f, goalX: this.barHelpers.getGoalValues("x", d, null, a.realIndex, a.j), y: s };
    } }, { key: "getRangeValue", value: function(i, a) {
      var s = this.w;
      return { start: s.globals.seriesRangeStart[i][a], end: s.globals.seriesRangeEnd[i][a] };
    } }]), t;
  }(), Ht = function() {
    function y(e) {
      F(this, y), this.w = e.w, this.lineCtx = e;
    }
    return Y(y, [{ key: "sameValueSeriesFix", value: function(e, t) {
      var i = this.w;
      if ((i.config.fill.type === "gradient" || i.config.fill.type[e] === "gradient") && new q(this.lineCtx.ctx, i).seriesHaveSameValues(e)) {
        var a = t[e].slice();
        a[a.length - 1] = a[a.length - 1] + 1e-6, t[e] = a;
      }
      return t;
    } }, { key: "calculatePoints", value: function(e) {
      var t = e.series, i = e.realIndex, a = e.x, s = e.y, r = e.i, n = e.j, o = e.prevY, h = this.w, c = [], d = [];
      if (n === 0) {
        var g = this.lineCtx.categoryAxisCorrection + h.config.markers.offsetX;
        h.globals.isXNumeric && (g = (h.globals.seriesX[i][0] - h.globals.minX) / this.lineCtx.xRatio + h.config.markers.offsetX), c.push(g), d.push(P.isNumber(t[r][0]) ? o + h.config.markers.offsetY : null), c.push(a + h.config.markers.offsetX), d.push(P.isNumber(t[r][n + 1]) ? s + h.config.markers.offsetY : null);
      } else
        c.push(a + h.config.markers.offsetX), d.push(P.isNumber(t[r][n + 1]) ? s + h.config.markers.offsetY : null);
      return { x: c, y: d };
    } }, { key: "checkPreviousPaths", value: function(e) {
      for (var t = e.pathFromLine, i = e.pathFromArea, a = e.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
        var n = s.globals.previousPaths[r];
        (n.type === "line" || n.type === "area") && n.paths.length > 0 && parseInt(n.realIndex, 10) === parseInt(a, 10) && (n.type === "line" ? (this.lineCtx.appendPathFrom = !1, t = s.globals.previousPaths[r].paths[0].d) : n.type === "area" && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && s.globals.previousPaths[r].paths[1] && (t = s.globals.previousPaths[r].paths[1].d)));
      }
      return { pathFromLine: t, pathFromArea: i };
    } }, { key: "determineFirstPrevY", value: function(e) {
      var t, i, a = e.i, s = e.series, r = e.prevY, n = e.lineYPosition, o = this.w, h = o.config.chart.stacked && !o.globals.comboCharts || o.config.chart.stacked && o.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[a]) === null || t === void 0 ? void 0 : t.type) === "bar");
      if (((i = s[a]) === null || i === void 0 ? void 0 : i[0]) !== void 0)
        r = (n = h && a > 0 ? this.lineCtx.prevSeriesY[a - 1][0] : this.lineCtx.zeroY) - s[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? s[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
      else if (h && a > 0 && s[a][0] === void 0) {
        for (var c = a - 1; c >= 0; c--)
          if (s[c][0] !== null && s[c][0] !== void 0) {
            r = n = this.lineCtx.prevSeriesY[c][0];
            break;
          }
      }
      return { prevY: r, lineYPosition: n };
    } }]), y;
  }(), Dt = function(y) {
    for (var e, t, i, a, s = function(c) {
      for (var d = [], g = c[0], p = c[1], f = d[0] = Ve(g, p), b = 1, m = c.length - 1; b < m; b++)
        g = p, p = c[b + 1], d[b] = 0.5 * (f + (f = Ve(g, p)));
      return d[b] = f, d;
    }(y), r = y.length - 1, n = [], o = 0; o < r; o++)
      i = Ve(y[o], y[o + 1]), Math.abs(i) < 1e-6 ? s[o] = s[o + 1] = 0 : (a = (e = s[o] / i) * e + (t = s[o + 1] / i) * t) > 9 && (a = 3 * i / Math.sqrt(a), s[o] = a * e, s[o + 1] = a * t);
    for (var h = 0; h <= r; h++)
      a = (y[Math.min(r, h + 1)][0] - y[Math.max(0, h - 1)][0]) / (6 * (1 + s[h] * s[h])), n.push([a || 0, s[h] * a || 0]);
    return n;
  }, Ge = function(y) {
    for (var e = "", t = 0; t < y.length; t++) {
      var i = y[t], a = i.length;
      a > 4 ? (e += "C".concat(i[0], ", ").concat(i[1]), e += ", ".concat(i[2], ", ").concat(i[3]), e += ", ".concat(i[4], ", ").concat(i[5])) : a > 2 && (e += "S".concat(i[0], ", ").concat(i[1]), e += ", ".concat(i[2], ", ").concat(i[3]));
    }
    return e;
  }, lt = function(y) {
    var e = Dt(y), t = y[1], i = y[0], a = [], s = e[1], r = e[0];
    a.push(i, [i[0] + r[0], i[1] + r[1], t[0] - s[0], t[1] - s[1], t[0], t[1]]);
    for (var n = 2, o = e.length; n < o; n++) {
      var h = y[n], c = e[n];
      a.push([h[0] - c[0], h[1] - c[1], h[0], h[1]]);
    }
    return a;
  };
  function Ve(y, e) {
    return (e[1] - y[1]) / (e[0] - y[0]);
  }
  var je = function() {
    function y(e, t, i) {
      F(this, y), this.ctx = e, this.w = e.w, this.xyRatios = t, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || i, this.scatter = new $e(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Ht(this), this.markers = new Pe(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return Y(y, [{ key: "draw", value: function(e, t, i, a) {
      var s, r = this.w, n = new M(this.ctx), o = r.globals.comboCharts ? t : r.config.chart.type, h = n.group({ class: "apexcharts-".concat(o, "-series apexcharts-plot-series") }), c = new q(this.ctx, r);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, e = c.getLogSeries(e), this.yRatio = c.getLogYRatios(this.yRatio);
      for (var d = [], g = 0; g < e.length; g++) {
        e = this.lineHelpers.sameValueSeriesFix(g, e);
        var p = r.globals.comboCharts ? i[g] : g;
        this._initSerieVariables(e, g, p);
        var f = [], b = [], m = [], w = r.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, p), r.globals.isXNumeric && r.globals.seriesX.length > 0 && (w = (r.globals.seriesX[p][0] - r.globals.minX) / this.xRatio), m.push(w);
        var A, l = w, u = void 0, x = l, v = this.zeroY, k = this.zeroY;
        v = this.lineHelpers.determineFirstPrevY({ i: g, series: e, prevY: v, lineYPosition: 0 }).prevY, r.config.stroke.curve === "monotonCubic" && e[g][0] === null ? f.push(null) : f.push(v), A = v, o === "rangeArea" && (u = k = this.lineHelpers.determineFirstPrevY({ i: g, series: a, prevY: k, lineYPosition: 0 }).prevY, b.push(k));
        var S = { type: o, series: e, realIndex: p, i: g, x: w, y: 1, pX: l, pY: A, pathsFrom: this._calculatePathsFrom({ type: o, series: e, i: g, realIndex: p, prevX: x, prevY: v, prevY2: k }), linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: m, yArrj: f, y2Arrj: b, seriesRangeEnd: a }, C = this._iterateOverDataPoints(X(X({}, S), {}, { iterations: o === "rangeArea" ? e[g].length - 1 : void 0, isRangeStart: !0 }));
        if (o === "rangeArea") {
          var L = this._calculatePathsFrom({ series: a, i: g, realIndex: p, prevX: x, prevY: k }), I = this._iterateOverDataPoints(X(X({}, S), {}, { series: a, pY: u, pathsFrom: L, iterations: a[g].length - 1, isRangeStart: !1 }));
          C.linePaths[0] = I.linePath + C.linePath, C.pathFromLine = I.pathFromLine + C.pathFromLine;
        }
        this._handlePaths({ type: o, realIndex: p, i: g, paths: C }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), d.push(this.elSeries);
      }
      if (((s = r.config.series[0]) === null || s === void 0 ? void 0 : s.zIndex) !== void 0 && d.sort(function(E, R) {
        return Number(E.node.getAttribute("zIndex")) - Number(R.node.getAttribute("zIndex"));
      }), r.config.chart.stacked)
        for (var z = d.length; z > 0; z--)
          h.add(d[z - 1]);
      else
        for (var T = 0; T < d.length; T++)
          h.add(d[T]);
      return h;
    } }, { key: "_initSerieVariables", value: function(e, t, i) {
      var a = this.w, s = new M(this.ctx);
      this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - (a.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || a.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({ class: "apexcharts-series", zIndex: a.config.series[i].zIndex !== void 0 ? a.config.series[i].zIndex : i, seriesName: P.escapeString(a.globals.seriesNames[i]) }), this.elPointsMain = s.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), this.elDataLabelsWrap = s.group({ class: "apexcharts-datalabels", "data:realIndex": i });
      var r = e[t].length === a.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": r, rel: t + 1, "data:realIndex": i }), this.appendPathFrom = !0;
    } }, { key: "_calculatePathsFrom", value: function(e) {
      var t, i, a, s, r = e.type, n = e.series, o = e.i, h = e.realIndex, c = e.prevX, d = e.prevY, g = e.prevY2, p = this.w, f = new M(this.ctx);
      if (n[o][0] === null) {
        for (var b = 0; b < n[o].length; b++)
          if (n[o][b] !== null) {
            c = this.xDivision * b, d = this.zeroY - n[o][b] / this.yRatio[this.yaxisIndex], t = f.move(c, d), i = f.move(c, this.areaBottomY);
            break;
          }
      } else
        t = f.move(c, d), r === "rangeArea" && (t = f.move(c, g) + f.line(c, d)), i = f.move(c, this.areaBottomY) + f.line(c, d);
      if (a = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), s = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), p.globals.previousPaths.length > 0) {
        var m = this.lineHelpers.checkPreviousPaths({ pathFromLine: a, pathFromArea: s, realIndex: h });
        a = m.pathFromLine, s = m.pathFromArea;
      }
      return { prevX: c, prevY: d, linePath: t, areaPath: i, pathFromLine: a, pathFromArea: s };
    } }, { key: "_handlePaths", value: function(e) {
      var t = e.type, i = e.realIndex, a = e.i, s = e.paths, r = this.w, n = new M(this.ctx), o = new ae(this.ctx);
      this.prevSeriesY.push(s.yArrj), r.globals.seriesXvalues[i] = s.xArrj, r.globals.seriesYvalues[i] = s.yArrj;
      var h = r.config.forecastDataPoints;
      if (h.count > 0 && t !== "rangeArea") {
        var c = r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length - h.count - 1], d = n.drawRect(c, 0, r.globals.gridWidth, r.globals.gridHeight, 0);
        r.globals.dom.elForecastMask.appendChild(d.node);
        var g = n.drawRect(0, 0, c, r.globals.gridHeight, 0);
        r.globals.dom.elNonForecastMask.appendChild(g.node);
      }
      this.pointsChart || r.globals.delayedElements.push({ el: this.elPointsMain.node, index: i });
      var p = { i: a, realIndex: i, animationDelay: a, initialSpeed: r.config.chart.animations.speed, dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(t) };
      if (t === "area")
        for (var f = o.fillPath({ seriesNumber: i }), b = 0; b < s.areaPaths.length; b++) {
          var m = n.renderPaths(X(X({}, p), {}, { pathFrom: s.pathFromArea, pathTo: s.areaPaths[b], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: f }));
          this.elSeries.add(m);
        }
      if (r.config.stroke.show && !this.pointsChart) {
        var w = null;
        if (t === "line")
          w = o.fillPath({ seriesNumber: i, i: a });
        else if (r.config.stroke.fill.type === "solid")
          w = r.globals.stroke.colors[i];
        else {
          var A = r.config.fill;
          r.config.fill = r.config.stroke.fill, w = o.fillPath({ seriesNumber: i, i: a }), r.config.fill = A;
        }
        for (var l = 0; l < s.linePaths.length; l++) {
          var u = w;
          t === "rangeArea" && (u = o.fillPath({ seriesNumber: i }));
          var x = X(X({}, p), {}, { pathFrom: s.pathFromLine, pathTo: s.linePaths[l], stroke: w, strokeWidth: this.strokeWidth, strokeLineCap: r.config.stroke.lineCap, fill: t === "rangeArea" ? u : "none" }), v = n.renderPaths(x);
          if (this.elSeries.add(v), v.attr("fill-rule", "evenodd"), h.count > 0 && t !== "rangeArea") {
            var k = n.renderPaths(x);
            k.node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && k.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(k), k.attr("clip-path", "url(#forecastMask".concat(r.globals.cuid, ")")), v.attr("clip-path", "url(#nonForecastMask".concat(r.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(e) {
      var t, i = this, a = e.type, s = e.series, r = e.iterations, n = e.realIndex, o = e.i, h = e.x, c = e.y, d = e.pX, g = e.pY, p = e.pathsFrom, f = e.linePaths, b = e.areaPaths, m = e.seriesIndex, w = e.lineYPosition, A = e.xArrj, l = e.yArrj, u = e.y2Arrj, x = e.isRangeStart, v = e.seriesRangeEnd, k = this.w, S = new M(this.ctx), C = this.yRatio, L = p.prevY, I = p.linePath, z = p.areaPath, T = p.pathFromLine, E = p.pathFromArea, R = P.isNumber(k.globals.minYArr[n]) ? k.globals.minYArr[n] : k.globals.minY;
      r || (r = k.globals.dataPoints > 1 ? k.globals.dataPoints - 1 : k.globals.dataPoints);
      for (var O = function(le, he) {
        return he - le / C[i.yaxisIndex] + 2 * (i.isReversed ? le / C[i.yaxisIndex] : 0);
      }, D = c, W = k.config.chart.stacked && !k.globals.comboCharts || k.config.chart.stacked && k.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((t = this.w.config.series[n]) === null || t === void 0 ? void 0 : t.type) === "bar"), N = 0; N < r; N++) {
        var V = s[o][N + 1] === void 0 || s[o][N + 1] === null;
        if (k.globals.isXNumeric) {
          var j = k.globals.seriesX[n][N + 1];
          k.globals.seriesX[n][N + 1] === void 0 && (j = k.globals.seriesX[n][r - 1]), h = (j - k.globals.minX) / this.xRatio;
        } else
          h += this.xDivision;
        W ? o > 0 && k.globals.collapsedSeries.length < k.config.series.length - 1 ? w = this.prevSeriesY[function(le) {
          for (var he = le, $ = 0; $ < k.globals.series.length; $++)
            if (k.globals.collapsedSeriesIndices.indexOf(le) > -1) {
              he--;
              break;
            }
          return he >= 0 ? he : 0;
        }(o - 1)][N + 1] : w = this.zeroY : w = this.zeroY, V ? c = O(R, w) : (c = O(s[o][N + 1], w), a === "rangeArea" && (D = O(v[o][N + 1], w))), A.push(h), V && k.config.stroke.curve === "smooth" ? l.push(null) : l.push(c), u.push(D);
        var se = this.lineHelpers.calculatePoints({ series: s, x: h, y: c, realIndex: n, i: o, j: N, prevY: L }), K = this._createPaths({ type: a, series: s, i: o, realIndex: n, j: N, x: h, y: c, y2: D, xArrj: A, yArrj: l, y2Arrj: u, pX: d, pY: g, linePath: I, areaPath: z, linePaths: f, areaPaths: b, seriesIndex: m, isRangeStart: x });
        b = K.areaPaths, f = K.linePaths, d = K.pX, g = K.pY, z = K.areaPath, I = K.linePath, !this.appendPathFrom || k.config.stroke.curve === "monotoneCubic" && a === "rangeArea" || (T += S.line(h, this.zeroY), E += S.line(h, this.zeroY)), this.handleNullDataPoints(s, se, o, N, n), this._handleMarkersAndLabels({ type: a, pointsPos: se, i: o, j: N, realIndex: n, isRangeStart: x });
      }
      return { yArrj: l, xArrj: A, pathFromArea: E, areaPaths: b, pathFromLine: T, linePaths: f, linePath: I, areaPath: z };
    } }, { key: "_handleMarkersAndLabels", value: function(e) {
      var t = e.type, i = e.pointsPos, a = e.isRangeStart, s = e.i, r = e.j, n = e.realIndex, o = this.w, h = new ye(this.ctx);
      if (this.pointsChart)
        this.scatter.draw(this.elSeries, r, { realIndex: n, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        o.globals.series[s].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var c = this.markers.plotChartMarkers(i, n, r + 1);
        c !== null && this.elPointsMain.add(c);
      }
      var d = h.drawDataLabel({ type: t, isRangeStart: a, pos: i, i: n, j: r + 1 });
      d !== null && this.elDataLabelsWrap.add(d);
    } }, { key: "_createPaths", value: function(e) {
      var t = e.type, i = e.series, a = e.i, s = e.realIndex, r = e.j, n = e.x, o = e.y, h = e.xArrj, c = e.yArrj, d = e.y2, g = e.y2Arrj, p = e.pX, f = e.pY, b = e.linePath, m = e.areaPath, w = e.linePaths, A = e.areaPaths, l = e.seriesIndex, u = e.isRangeStart, x = this.w, v = new M(this.ctx), k = x.config.stroke.curve, S = this.areaBottomY;
      if (Array.isArray(x.config.stroke.curve) && (k = Array.isArray(l) ? x.config.stroke.curve[l[a]] : x.config.stroke.curve[a]), t === "rangeArea" && (x.globals.hasNullValues || x.config.forecastDataPoints.count > 0) && k === "monotoneCubic" && (k = "straight"), k === "monotoneCubic") {
        var C = t === "rangeArea" ? h.length === x.globals.dataPoints : r === i[a].length - 2, L = h.map(function(W, N) {
          return [h[N], c[N]];
        }).filter(function(W) {
          return W[1] !== null;
        });
        if (C && L.length > 1) {
          var I = lt(L);
          if (b += Ge(I), i[a][0] === null ? m = b : m += Ge(I), t === "rangeArea" && u) {
            b += v.line(h[h.length - 1], g[g.length - 1]);
            var z = h.slice().reverse(), T = g.slice().reverse(), E = z.map(function(W, N) {
              return [z[N], T[N]];
            }), R = lt(E);
            m = b += Ge(R);
          } else
            m += v.line(L[L.length - 1][0], S) + v.line(L[0][0], S) + v.move(L[0][0], L[0][1]) + "z";
          w.push(b), A.push(m);
        }
      } else if (k === "smooth") {
        var O = 0.35 * (n - p);
        x.globals.hasNullValues ? (i[a][r] !== null && (i[a][r + 1] !== null ? (b = v.move(p, f) + v.curve(p + O, f, n - O, o, n + 1, o), m = v.move(p + 1, f) + v.curve(p + O, f, n - O, o, n + 1, o) + v.line(n, S) + v.line(p, S) + "z") : (b = v.move(p, f), m = v.move(p, f) + "z")), w.push(b), A.push(m)) : (b += v.curve(p + O, f, n - O, o, n, o), m += v.curve(p + O, f, n - O, o, n, o)), p = n, f = o, r === i[a].length - 2 && (m = m + v.curve(p, f, n, o, n, S) + v.move(n, o) + "z", t === "rangeArea" && u ? b = b + v.curve(p, f, n, o, n, d) + v.move(n, d) + "z" : x.globals.hasNullValues || (w.push(b), A.push(m)));
      } else {
        if (i[a][r + 1] === null) {
          b += v.move(n, o);
          var D = x.globals.isXNumeric ? (x.globals.seriesX[s][r] - x.globals.minX) / this.xRatio : n - this.xDivision;
          m = m + v.line(D, S) + v.move(n, o) + "z";
        }
        i[a][r] === null && (b += v.move(n, o), m += v.move(n, S)), k === "stepline" ? (b = b + v.line(n, null, "H") + v.line(null, o, "V"), m = m + v.line(n, null, "H") + v.line(null, o, "V")) : k === "straight" && (b += v.line(n, o), m += v.line(n, o)), r === i[a].length - 2 && (m = m + v.line(n, S) + v.move(n, o) + "z", t === "rangeArea" && u ? b = b + v.line(n, d) + v.move(n, d) + "z" : (w.push(b), A.push(m)));
      }
      return { linePaths: w, areaPaths: A, pX: p, pY: f, linePath: b, areaPath: m };
    } }, { key: "handleNullDataPoints", value: function(e, t, i, a, s) {
      var r = this.w;
      if (e[i][a] === null && r.config.markers.showNullDataPoints || e[i].length === 1) {
        var n = this.markers.plotChartMarkers(t, s, a + 1, this.strokeWidth - r.config.markers.strokeWidth / 2, !0);
        n !== null && this.elPointsMain.add(n);
      }
    } }]), y;
  }();
  window.TreemapSquared = {}, window.TreemapSquared.generate = function() {
    function y(n, o, h, c) {
      this.xoffset = n, this.yoffset = o, this.height = c, this.width = h, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(d) {
        var g, p = [], f = this.xoffset, b = this.yoffset, m = s(d) / this.height, w = s(d) / this.width;
        if (this.width >= this.height)
          for (g = 0; g < d.length; g++)
            p.push([f, b, f + m, b + d[g] / m]), b += d[g] / m;
        else
          for (g = 0; g < d.length; g++)
            p.push([f, b, f + d[g] / w, b + w]), f += d[g] / w;
        return p;
      }, this.cutArea = function(d) {
        var g;
        if (this.width >= this.height) {
          var p = d / this.height, f = this.width - p;
          g = new y(this.xoffset + p, this.yoffset, f, this.height);
        } else {
          var b = d / this.width, m = this.height - b;
          g = new y(this.xoffset, this.yoffset + b, this.width, m);
        }
        return g;
      };
    }
    function e(n, o, h, c, d) {
      c = c === void 0 ? 0 : c, d = d === void 0 ? 0 : d;
      var g = t(function(p, f) {
        var b, m = [], w = f / s(p);
        for (b = 0; b < p.length; b++)
          m[b] = p[b] * w;
        return m;
      }(n, o * h), [], new y(c, d, o, h), []);
      return function(p) {
        var f, b, m = [];
        for (f = 0; f < p.length; f++)
          for (b = 0; b < p[f].length; b++)
            m.push(p[f][b]);
        return m;
      }(g);
    }
    function t(n, o, h, c) {
      var d, g, p;
      if (n.length !== 0)
        return d = h.shortestEdge(), function(f, b, m) {
          var w;
          if (f.length === 0)
            return !0;
          (w = f.slice()).push(b);
          var A = i(f, m), l = i(w, m);
          return A >= l;
        }(o, g = n[0], d) ? (o.push(g), t(n.slice(1), o, h, c)) : (p = h.cutArea(s(o), c), c.push(h.getCoordinates(o)), t(n, [], p, c)), c;
      c.push(h.getCoordinates(o));
    }
    function i(n, o) {
      var h = Math.min.apply(Math, n), c = Math.max.apply(Math, n), d = s(n);
      return Math.max(Math.pow(o, 2) * c / Math.pow(d, 2), Math.pow(d, 2) / (Math.pow(o, 2) * h));
    }
    function a(n) {
      return n && n.constructor === Array;
    }
    function s(n) {
      var o, h = 0;
      for (o = 0; o < n.length; o++)
        h += n[o];
      return h;
    }
    function r(n) {
      var o, h = 0;
      if (a(n[0]))
        for (o = 0; o < n.length; o++)
          h += r(n[o]);
      else
        h = s(n);
      return h;
    }
    return function n(o, h, c, d, g) {
      d = d === void 0 ? 0 : d, g = g === void 0 ? 0 : g;
      var p, f, b = [], m = [];
      if (a(o[0])) {
        for (f = 0; f < o.length; f++)
          b[f] = r(o[f]);
        for (p = e(b, h, c, d, g), f = 0; f < o.length; f++)
          m.push(n(o[f], p[f][2] - p[f][0], p[f][3] - p[f][1], p[f][0], p[f][1]));
      } else
        m = e(o, h, c, d, g);
      return m;
    };
  }();
  var be, Fe, Nt = function() {
    function y(e, t) {
      F(this, y), this.ctx = e, this.w = e.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new rt(e), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return Y(y, [{ key: "draw", value: function(e) {
      var t = this, i = this.w, a = new M(this.ctx), s = new ae(this.ctx), r = a.group({ class: "apexcharts-treemap" });
      if (i.globals.noData)
        return r;
      var n = [];
      return e.forEach(function(o) {
        var h = o.map(function(c) {
          return Math.abs(c);
        });
        n.push(h);
      }), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach(function(o, h) {
        o.data.forEach(function(c) {
          Array.isArray(t.labels[h]) || (t.labels[h] = []), t.labels[h].push(c.x);
        });
      }), window.TreemapSquared.generate(n, i.globals.gridWidth, i.globals.gridHeight).forEach(function(o, h) {
        var c = a.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: P.escapeString(i.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
        if (i.config.chart.dropShadow.enabled) {
          var d = i.config.chart.dropShadow;
          new Z(t.ctx).dropShadow(r, d, h);
        }
        var g = a.group({ class: "apexcharts-data-labels" });
        o.forEach(function(p, f) {
          var b = p[0], m = p[1], w = p[2], A = p[3], l = a.drawRect(b, m, w - b, A - m, i.config.plotOptions.treemap.borderRadius, "#fff", 1, t.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? x : i.globals.stroke.colors[h]);
          l.attr({ cx: b, cy: m, index: h, i: h, j: f, width: w - b, height: A - m });
          var u = t.helpers.getShadeColor(i.config.chart.type, h, f, t.negRange), x = u.color;
          i.config.series[h].data[f] !== void 0 && i.config.series[h].data[f].fillColor && (x = i.config.series[h].data[f].fillColor);
          var v = s.fillPath({ color: x, seriesNumber: h, dataPointIndex: f });
          l.node.classList.add("apexcharts-treemap-rect"), l.attr({ fill: v }), t.helpers.addListeners(l);
          var k = { x: b + (w - b) / 2, y: m + (A - m) / 2, width: 0, height: 0 }, S = { x: b, y: m, width: w - b, height: A - m };
          if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
            var C = 1;
            i.globals.resized || (C = i.config.chart.animations.speed), t.animateTreemap(l, k, S, C);
          }
          if (i.globals.dataChanged) {
            var L = 1;
            t.dynamicAnim.enabled && i.globals.shouldAnimate && (L = t.dynamicAnim.speed, i.globals.previousPaths[h] && i.globals.previousPaths[h][f] && i.globals.previousPaths[h][f].rect && (k = i.globals.previousPaths[h][f].rect), t.animateTreemap(l, k, S, L));
          }
          var I = t.getFontSize(p), z = i.config.dataLabels.formatter(t.labels[h][f], { value: i.globals.series[h][f], seriesIndex: h, dataPointIndex: f, w: i });
          i.config.plotOptions.treemap.dataLabels.format === "truncate" && (I = parseInt(i.config.dataLabels.style.fontSize, 10), z = t.truncateLabels(z, I, b, m, w, A));
          var T = t.helpers.calculateDataLabels({ text: z, x: (b + w) / 2, y: (m + A) / 2 + t.strokeWidth / 2 + I / 3, i: h, j: f, colorProps: u, fontSize: I, series: e });
          i.config.dataLabels.enabled && T && t.rotateToFitLabel(T, I, z, b, m, w, A), c.add(l), T !== null && c.add(T);
        }), c.add(g), r.add(c);
      }), r;
    } }, { key: "getFontSize", value: function(e) {
      var t = this.w, i, a, s, r, n = function o(h) {
        var c, d = 0;
        if (Array.isArray(h[0]))
          for (c = 0; c < h.length; c++)
            d += o(h[c]);
        else
          for (c = 0; c < h.length; c++)
            d += h[c].length;
        return d;
      }(this.labels) / function o(h) {
        var c, d = 0;
        if (Array.isArray(h[0]))
          for (c = 0; c < h.length; c++)
            d += o(h[c]);
        else
          for (c = 0; c < h.length; c++)
            d += 1;
        return d;
      }(this.labels);
      return i = e[2] - e[0], a = e[3] - e[1], s = i * a, r = Math.pow(s, 0.5), Math.min(r / n, parseInt(t.config.dataLabels.style.fontSize, 10));
    } }, { key: "rotateToFitLabel", value: function(e, t, i, a, s, r, n) {
      var o = new M(this.ctx), h = o.getTextRects(i, t);
      if (h.width + this.w.config.stroke.width + 5 > r - a && h.width <= n - s) {
        var c = o.rotateAroundCenter(e.node);
        e.node.setAttribute("transform", "rotate(-90 ".concat(c.x, " ").concat(c.y, ") translate(").concat(h.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(e, t, i, a, s, r) {
      var n = new M(this.ctx), o = n.getTextRects(e, t).width + this.w.config.stroke.width + 5 > s - i && r - a > s - i ? r - a : s - i, h = n.getTextBasedOnMaxWidth({ text: e, maxWidth: o, fontSize: t });
      return e.length !== h.length && o / t < 5 ? "" : h;
    } }, { key: "animateTreemap", value: function(e, t, i, a) {
      var s = new de(this.ctx);
      s.animateRect(e, { x: t.x, y: t.y, width: t.width, height: t.height }, { x: i.x, y: i.y, width: i.width, height: i.height }, a, function() {
        s.animationCompleted(e);
      });
    } }]), y;
  }(), Wt = 86400, Bt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return Y(y, [{ key: "calculateTimeScaleTicks", value: function(e, t) {
      var i = this, a = this.w;
      if (a.globals.allSeriesCollapsed)
        return a.globals.labels = [], a.globals.timescaleLabels = [], [];
      var s = new B(this.ctx), r = (t - e) / 864e5;
      this.determineInterval(r), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, r < 11574074074074075e-20 ? a.globals.disableZoomIn = !0 : r > 5e4 && (a.globals.disableZoomOut = !0);
      var n = s.getTimeUnitsfromTimestamp(e, t, this.utc), o = a.globals.gridWidth / r, h = o / 24, c = h / 60, d = c / 60, g = Math.floor(24 * r), p = Math.floor(1440 * r), f = Math.floor(r * Wt), b = Math.floor(r), m = Math.floor(r / 30), w = Math.floor(r / 365), A = { minMillisecond: n.minMillisecond, minSecond: n.minSecond, minMinute: n.minMinute, minHour: n.minHour, minDate: n.minDate, minMonth: n.minMonth, minYear: n.minYear }, l = { firstVal: A, currentMillisecond: A.minMillisecond, currentSecond: A.minSecond, currentMinute: A.minMinute, currentHour: A.minHour, currentMonthDate: A.minDate, currentDate: A.minDate, currentMonth: A.minMonth, currentYear: A.minYear, daysWidthOnXAxis: o, hoursWidthOnXAxis: h, minutesWidthOnXAxis: c, secondsWidthOnXAxis: d, numberOfSeconds: f, numberOfMinutes: p, numberOfHours: g, numberOfDays: b, numberOfMonths: m, numberOfYears: w };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(l);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(l);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(l);
          break;
        case "hours":
          this.generateHourScale(l);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(l);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(l);
      }
      var u = this.timeScaleArray.map(function(x) {
        var v = { position: x.position, unit: x.unit, year: x.year, day: x.day ? x.day : 1, hour: x.hour ? x.hour : 0, month: x.month + 1 };
        return x.unit === "month" ? X(X({}, v), {}, { day: 1, value: x.value + 1 }) : x.unit === "day" || x.unit === "hour" ? X(X({}, v), {}, { value: x.value }) : x.unit === "minute" ? X(X({}, v), {}, { value: x.value, minute: x.value }) : x.unit === "second" ? X(X({}, v), {}, { value: x.value, minute: x.minute, second: x.second }) : x;
      });
      return u.filter(function(x) {
        var v = 1, k = Math.ceil(a.globals.gridWidth / 120), S = x.value;
        a.config.xaxis.tickAmount !== void 0 && (k = a.config.xaxis.tickAmount), u.length > k && (v = Math.floor(u.length / k));
        var C = !1, L = !1;
        switch (i.tickInterval) {
          case "years":
            x.unit === "year" && (C = !0);
            break;
          case "half_year":
            v = 7, x.unit === "year" && (C = !0);
            break;
          case "months":
            v = 1, x.unit === "year" && (C = !0);
            break;
          case "months_fortnight":
            v = 15, x.unit !== "year" && x.unit !== "month" || (C = !0), S === 30 && (L = !0);
            break;
          case "months_days":
            v = 10, x.unit === "month" && (C = !0), S === 30 && (L = !0);
            break;
          case "week_days":
            v = 8, x.unit === "month" && (C = !0);
            break;
          case "days":
            v = 1, x.unit === "month" && (C = !0);
            break;
          case "hours":
            x.unit === "day" && (C = !0);
            break;
          case "minutes_fives":
          case "seconds_fives":
            S % 5 != 0 && (L = !0);
            break;
          case "seconds_tens":
            S % 10 != 0 && (L = !0);
        }
        if (i.tickInterval === "hours" || i.tickInterval === "minutes_fives" || i.tickInterval === "seconds_tens" || i.tickInterval === "seconds_fives") {
          if (!L)
            return !0;
        } else if ((S % v == 0 || C) && !L)
          return !0;
      });
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(e, t) {
      var i = this.w, a = this.formatDates(e), s = this.removeOverlappingTS(a);
      i.globals.timescaleLabels = s.slice(), new Ye(this.ctx).plotCoords();
    } }, { key: "determineInterval", value: function(e) {
      var t = 24 * e, i = 60 * t;
      switch (!0) {
        case e / 365 > 5:
          this.tickInterval = "years";
          break;
        case e > 800:
          this.tickInterval = "half_year";
          break;
        case e > 180:
          this.tickInterval = "months";
          break;
        case e > 90:
          this.tickInterval = "months_fortnight";
          break;
        case e > 60:
          this.tickInterval = "months_days";
          break;
        case e > 30:
          this.tickInterval = "week_days";
          break;
        case e > 2:
          this.tickInterval = "days";
          break;
        case t > 2.4:
          this.tickInterval = "hours";
          break;
        case i > 15:
          this.tickInterval = "minutes_fives";
          break;
        case i > 5:
          this.tickInterval = "minutes";
          break;
        case i > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * i > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    } }, { key: "generateYearScale", value: function(e) {
      var t = e.firstVal, i = e.currentMonth, a = e.currentYear, s = e.daysWidthOnXAxis, r = e.numberOfYears, n = t.minYear, o = 0, h = new B(this.ctx), c = "year";
      if (t.minDate > 1 || t.minMonth > 0) {
        var d = h.determineRemainingDaysOfYear(t.minYear, t.minMonth, t.minDate);
        o = (h.determineDaysOfYear(t.minYear) - d + 1) * s, n = t.minYear + 1, this.timeScaleArray.push({ position: o, value: n, unit: c, year: n, month: P.monthMod(i + 1) });
      } else
        t.minDate === 1 && t.minMonth === 0 && this.timeScaleArray.push({ position: o, value: n, unit: c, year: a, month: P.monthMod(i + 1) });
      for (var g = n, p = o, f = 0; f < r; f++)
        g++, p = h.determineDaysOfYear(g - 1) * s + p, this.timeScaleArray.push({ position: p, value: g, unit: c, year: g, month: 1 });
    } }, { key: "generateMonthScale", value: function(e) {
      var t = e.firstVal, i = e.currentMonthDate, a = e.currentMonth, s = e.currentYear, r = e.daysWidthOnXAxis, n = e.numberOfMonths, o = a, h = 0, c = new B(this.ctx), d = "month", g = 0;
      if (t.minDate > 1) {
        h = (c.determineDaysOfMonths(a + 1, t.minYear) - i + 1) * r, o = P.monthMod(a + 1);
        var p = s + g, f = P.monthMod(o), b = o;
        o === 0 && (d = "year", b = p, f = 1, p += g += 1), this.timeScaleArray.push({ position: h, value: b, unit: d, year: p, month: f });
      } else
        this.timeScaleArray.push({ position: h, value: o, unit: d, year: s, month: P.monthMod(a) });
      for (var m = o + 1, w = h, A = 0, l = 1; A < n; A++, l++) {
        (m = P.monthMod(m)) === 0 ? (d = "year", g += 1) : d = "month";
        var u = this._getYear(s, m, g);
        w = c.determineDaysOfMonths(m, u) * r + w;
        var x = m === 0 ? u : m;
        this.timeScaleArray.push({ position: w, value: x, unit: d, year: u, month: m === 0 ? 1 : m }), m++;
      }
    } }, { key: "generateDayScale", value: function(e) {
      var t = e.firstVal, i = e.currentMonth, a = e.currentYear, s = e.hoursWidthOnXAxis, r = e.numberOfDays, n = new B(this.ctx), o = "day", h = t.minDate + 1, c = h, d = function(l, u, x) {
        return l > n.determineDaysOfMonths(u + 1, x) && (c = 1, o = "month", p = u += 1), u;
      }, g = (24 - t.minHour) * s, p = h, f = d(c, i, a);
      t.minHour === 0 && t.minDate === 1 ? (g = 0, p = P.monthMod(t.minMonth), o = "month", c = t.minDate) : t.minDate !== 1 && t.minHour === 0 && t.minMinute === 0 && (g = 0, h = t.minDate, p = h, f = d(c = h, i, a)), this.timeScaleArray.push({ position: g, value: p, unit: o, year: this._getYear(a, f, 0), month: P.monthMod(f), day: c });
      for (var b = g, m = 0; m < r; m++) {
        o = "day", f = d(c += 1, f, this._getYear(a, f, 0));
        var w = this._getYear(a, f, 0);
        b = 24 * s + b;
        var A = c === 1 ? P.monthMod(f) : c;
        this.timeScaleArray.push({ position: b, value: A, unit: o, year: w, month: P.monthMod(f), day: A });
      }
    } }, { key: "generateHourScale", value: function(e) {
      var t = e.firstVal, i = e.currentDate, a = e.currentMonth, s = e.currentYear, r = e.minutesWidthOnXAxis, n = e.numberOfHours, o = new B(this.ctx), h = "hour", c = function(v, k) {
        return v > o.determineDaysOfMonths(k + 1, s) && (m = 1, k += 1), { month: k, date: m };
      }, d = function(v, k) {
        return v > o.determineDaysOfMonths(k + 1, s) ? k += 1 : k;
      }, g = 60 - (t.minMinute + t.minSecond / 60), p = g * r, f = t.minHour + 1, b = f;
      g === 60 && (p = 0, b = f = t.minHour);
      var m = i;
      b >= 24 && (b = 0, m += 1, h = "day");
      var w = c(m, a).month;
      w = d(m, w), this.timeScaleArray.push({ position: p, value: f, unit: h, day: m, hour: b, year: s, month: P.monthMod(w) }), b++;
      for (var A = p, l = 0; l < n; l++) {
        h = "hour", b >= 24 && (b = 0, h = "day", w = c(m += 1, w).month, w = d(m, w));
        var u = this._getYear(s, w, 0);
        A = 60 * r + A;
        var x = b === 0 ? m : b;
        this.timeScaleArray.push({ position: A, value: x, unit: h, hour: b, day: m, year: u, month: P.monthMod(w) }), b++;
      }
    } }, { key: "generateMinuteScale", value: function(e) {
      for (var t = e.currentMillisecond, i = e.currentSecond, a = e.currentMinute, s = e.currentHour, r = e.currentDate, n = e.currentMonth, o = e.currentYear, h = e.minutesWidthOnXAxis, c = e.secondsWidthOnXAxis, d = e.numberOfMinutes, g = a + 1, p = r, f = n, b = o, m = s, w = (60 - i - t / 1e3) * c, A = 0; A < d; A++)
        g >= 60 && (g = 0, (m += 1) === 24 && (m = 0)), this.timeScaleArray.push({ position: w, value: g, unit: "minute", hour: m, minute: g, day: p, year: this._getYear(b, f, 0), month: P.monthMod(f) }), w += h, g++;
    } }, { key: "generateSecondScale", value: function(e) {
      for (var t = e.currentMillisecond, i = e.currentSecond, a = e.currentMinute, s = e.currentHour, r = e.currentDate, n = e.currentMonth, o = e.currentYear, h = e.secondsWidthOnXAxis, c = e.numberOfSeconds, d = i + 1, g = a, p = r, f = n, b = o, m = s, w = (1e3 - t) / 1e3 * h, A = 0; A < c; A++)
        d >= 60 && (d = 0, ++g >= 60 && (g = 0, ++m === 24 && (m = 0))), this.timeScaleArray.push({ position: w, value: d, unit: "second", hour: m, minute: g, second: d, day: p, year: this._getYear(b, f, 0), month: P.monthMod(f) }), w += h, d++;
    } }, { key: "createRawDateString", value: function(e, t) {
      var i = e.year;
      return e.month === 0 && (e.month = 1), i += "-" + ("0" + e.month.toString()).slice(-2), e.unit === "day" ? i += e.unit === "day" ? "-" + ("0" + t).slice(-2) : "-01" : i += "-" + ("0" + (e.day ? e.day : "1")).slice(-2), e.unit === "hour" ? i += e.unit === "hour" ? "T" + ("0" + t).slice(-2) : "T00" : i += "T" + ("0" + (e.hour ? e.hour : "0")).slice(-2), e.unit === "minute" ? i += ":" + ("0" + t).slice(-2) : i += ":" + (e.minute ? ("0" + e.minute).slice(-2) : "00"), e.unit === "second" ? i += ":" + ("0" + t).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i;
    } }, { key: "formatDates", value: function(e) {
      var t = this, i = this.w;
      return e.map(function(a) {
        var s = a.value.toString(), r = new B(t.ctx), n = t.createRawDateString(a, s), o = r.getDate(r.parseDate(n));
        if (t.utc || (o = r.getDate(r.parseDateWithTimezone(n))), i.config.xaxis.labels.format === void 0) {
          var h = "dd MMM", c = i.config.xaxis.labels.datetimeFormatter;
          a.unit === "year" && (h = c.year), a.unit === "month" && (h = c.month), a.unit === "day" && (h = c.day), a.unit === "hour" && (h = c.hour), a.unit === "minute" && (h = c.minute), a.unit === "second" && (h = c.second), s = r.formatDate(o, h);
        } else
          s = r.formatDate(o, i.config.xaxis.labels.format);
        return { dateString: n, position: a.position, value: s, unit: a.unit, year: a.year, month: a.month };
      });
    } }, { key: "removeOverlappingTS", value: function(e) {
      var t, i = this, a = new M(this.ctx), s = !1;
      e.length > 0 && e[0].value && e.every(function(o) {
        return o.value.length === e[0].value.length;
      }) && (s = !0, t = a.getTextRects(e[0].value).width);
      var r = 0, n = e.map(function(o, h) {
        if (h > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
          var c = s ? t : a.getTextRects(e[r].value).width, d = e[r].position;
          return o.position > d + c + 10 ? (r = h, o) : null;
        }
        return o;
      });
      return n = n.filter(function(o) {
        return o !== null;
      });
    } }, { key: "_getYear", value: function(e, t, i) {
      return e + Math.floor(t / 12) + i;
    } }]), y;
  }(), Gt = function() {
    function y(e, t) {
      F(this, y), this.ctx = t, this.w = t.w, this.el = e;
    }
    return Y(y, [{ key: "setupElements", value: function() {
      var e = this.w.globals, t = this.w.config, i = t.chart.type;
      e.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, e.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i) > -1, e.isBarHorizontal = (t.chart.type === "bar" || t.chart.type === "rangeBar" || t.chart.type === "boxPlot") && t.plotOptions.bar.horizontal, e.chartClass = ".apexcharts" + e.chartID, e.dom.baseEl = this.el, e.dom.elWrap = document.createElement("div"), M.setAttrs(e.dom.elWrap, { id: e.chartClass.substring(1), class: "apexcharts-canvas " + e.chartClass.substring(1) }), this.el.appendChild(e.dom.elWrap), e.dom.Paper = new window.SVG.Doc(e.dom.elWrap), e.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(t.chart.offsetX, ", ").concat(t.chart.offsetY, ")") }), e.dom.Paper.node.style.background = t.theme.mode !== "dark" || t.chart.background ? t.chart.background : "rgba(0, 0, 0, 0.8)", this.setSVGDimensions(), e.dom.elLegendForeign = document.createElementNS(e.SVGNS, "foreignObject"), M.setAttrs(e.dom.elLegendForeign, { x: 0, y: 0, width: e.svgWidth, height: e.svgHeight }), e.dom.elLegendWrap = document.createElement("div"), e.dom.elLegendWrap.classList.add("apexcharts-legend"), e.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.dom.elLegendForeign.appendChild(e.dom.elLegendWrap), e.dom.Paper.node.appendChild(e.dom.elLegendForeign), e.dom.elGraphical = e.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), e.dom.elDefs = e.dom.Paper.defs(), e.dom.Paper.add(e.dom.elGraphical), e.dom.elGraphical.add(e.dom.elDefs);
    } }, { key: "plotChartType", value: function(e, t) {
      var i = this.w, a = i.config, s = i.globals, r = { series: [], i: [] }, n = { series: [], i: [] }, o = { series: [], i: [] }, h = { series: [], i: [] }, c = { series: [], i: [] }, d = { series: [], i: [] }, g = { series: [], i: [] }, p = { series: [], i: [] }, f = { series: [], seriesRangeEnd: [], i: [] };
      s.series.map(function(k, S) {
        var C = 0;
        e[S].type !== void 0 ? (e[S].type === "column" || e[S].type === "bar" ? (s.series.length > 1 && a.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), c.series.push(k), c.i.push(S), C++, i.globals.columnSeries = c.series) : e[S].type === "area" ? (n.series.push(k), n.i.push(S), C++) : e[S].type === "line" ? (r.series.push(k), r.i.push(S), C++) : e[S].type === "scatter" ? (o.series.push(k), o.i.push(S)) : e[S].type === "bubble" ? (h.series.push(k), h.i.push(S), C++) : e[S].type === "candlestick" ? (d.series.push(k), d.i.push(S), C++) : e[S].type === "boxPlot" ? (g.series.push(k), g.i.push(S), C++) : e[S].type === "rangeBar" ? (p.series.push(k), p.i.push(S), C++) : e[S].type === "rangeArea" ? (f.series.push(s.seriesRangeStart[S]), f.seriesRangeEnd.push(s.seriesRangeEnd[S]), f.i.push(S), C++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea"), C > 1 && (s.comboCharts = !0)) : (r.series.push(k), r.i.push(S));
      });
      var b = new je(this.ctx, t), m = new Be(this.ctx, t);
      this.ctx.pie = new ot(this.ctx);
      var w = new Rt(this.ctx);
      this.ctx.rangeBar = new Ot(this.ctx, t);
      var A = new Ft(this.ctx), l = [];
      if (s.comboCharts) {
        if (n.series.length > 0 && l.push(b.draw(n.series, "area", n.i)), c.series.length > 0)
          if (i.config.chart.stacked) {
            var u = new st(this.ctx, t);
            l.push(u.draw(c.series, c.i));
          } else
            this.ctx.bar = new ke(this.ctx, t), l.push(this.ctx.bar.draw(c.series, c.i));
        if (f.series.length > 0 && l.push(b.draw(f.series, "rangeArea", f.i, f.seriesRangeEnd)), r.series.length > 0 && l.push(b.draw(r.series, "line", r.i)), d.series.length > 0 && l.push(m.draw(d.series, "candlestick", d.i)), g.series.length > 0 && l.push(m.draw(g.series, "boxPlot", g.i)), p.series.length > 0 && l.push(this.ctx.rangeBar.draw(p.series, p.i)), o.series.length > 0) {
          var x = new je(this.ctx, t, !0);
          l.push(x.draw(o.series, "scatter", o.i));
        }
        if (h.series.length > 0) {
          var v = new je(this.ctx, t, !0);
          l.push(v.draw(h.series, "bubble", h.i));
        }
      } else
        switch (a.chart.type) {
          case "line":
            l = b.draw(s.series, "line");
            break;
          case "area":
            l = b.draw(s.series, "area");
            break;
          case "bar":
            a.chart.stacked ? l = new st(this.ctx, t).draw(s.series) : (this.ctx.bar = new ke(this.ctx, t), l = this.ctx.bar.draw(s.series));
            break;
          case "candlestick":
            l = new Be(this.ctx, t).draw(s.series, "candlestick");
            break;
          case "boxPlot":
            l = new Be(this.ctx, t).draw(s.series, a.chart.type);
            break;
          case "rangeBar":
            l = this.ctx.rangeBar.draw(s.series);
            break;
          case "rangeArea":
            l = b.draw(s.seriesRangeStart, "rangeArea", void 0, s.seriesRangeEnd);
            break;
          case "heatmap":
            l = new Yt(this.ctx, t).draw(s.series);
            break;
          case "treemap":
            l = new Nt(this.ctx, t).draw(s.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            l = this.ctx.pie.draw(s.series);
            break;
          case "radialBar":
            l = w.draw(s.series);
            break;
          case "radar":
            l = A.draw(s.series);
            break;
          default:
            l = b.draw(s.series);
        }
      return l;
    } }, { key: "setSVGDimensions", value: function() {
      var e = this.w.globals, t = this.w.config;
      e.svgWidth = t.chart.width, e.svgHeight = t.chart.height;
      var i = P.getDimensions(this.el), a = t.chart.width.toString().split(/[0-9]+/g).pop();
      a === "%" ? P.isNumber(i[0]) && (i[0].width === 0 && (i = P.getDimensions(this.el.parentNode)), e.svgWidth = i[0] * parseInt(t.chart.width, 10) / 100) : a !== "px" && a !== "" || (e.svgWidth = parseInt(t.chart.width, 10));
      var s = t.chart.height.toString().split(/[0-9]+/g).pop();
      if (e.svgHeight !== "auto" && e.svgHeight !== "")
        if (s === "%") {
          var r = P.getDimensions(this.el.parentNode);
          e.svgHeight = r[1] * parseInt(t.chart.height, 10) / 100;
        } else
          e.svgHeight = parseInt(t.chart.height, 10);
      else
        e.axisCharts ? e.svgHeight = e.svgWidth / 1.61 : e.svgHeight = e.svgWidth / 1.2;
      if (e.svgWidth < 0 && (e.svgWidth = 0), e.svgHeight < 0 && (e.svgHeight = 0), M.setAttrs(e.dom.Paper.node, { width: e.svgWidth, height: e.svgHeight }), s !== "%") {
        var n = t.chart.sparkline.enabled ? 0 : e.axisCharts ? t.chart.parentHeightOffset : 0;
        e.dom.Paper.node.parentNode.parentNode.style.minHeight = e.svgHeight + n + "px";
      }
      e.dom.elWrap.style.width = e.svgWidth + "px", e.dom.elWrap.style.height = e.svgHeight + "px";
    } }, { key: "shiftGraphPosition", value: function() {
      var e = this.w.globals, t = e.translateY, i = { transform: "translate(" + e.translateX + ", " + t + ")" };
      M.setAttrs(e.dom.elGraphical.node, i);
    } }, { key: "resizeNonAxisCharts", value: function() {
      var e = this.w, t = e.globals, i = 0, a = e.config.chart.sparkline.enabled ? 1 : 15;
      a += e.config.grid.padding.bottom, e.config.legend.position !== "top" && e.config.legend.position !== "bottom" || !e.config.legend.show || e.config.legend.floating || (i = new Ke(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
      var s = e.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r = 2.05 * e.globals.radialSize;
      if (s && !e.config.chart.sparkline.enabled && e.config.plotOptions.radialBar.startAngle !== 0) {
        var n = P.getBoundingClientRect(s);
        r = n.bottom;
        var o = n.bottom - n.top;
        r = Math.max(2.05 * e.globals.radialSize, o);
      }
      var h = r + t.translateY + i + a;
      t.dom.elLegendForeign && t.dom.elLegendForeign.setAttribute("height", h), e.config.chart.height && String(e.config.chart.height).indexOf("%") > 0 || (t.dom.elWrap.style.height = h + "px", M.setAttrs(t.dom.Paper.node, { height: h }), t.dom.Paper.node.parentNode.parentNode.style.minHeight = h + "px");
    } }, { key: "coreCalculations", value: function() {
      new De(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var e = this, t = function() {
        return e.w.config.series.map(function(s) {
          return [];
        });
      }, i = new Ze(), a = this.w.globals;
      i.initGlobalVars(a), a.seriesXvalues = t(), a.seriesYvalues = t();
    } }, { key: "isMultipleY", value: function() {
      if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1)
        return this.w.globals.isMultipleYAxis = !0, !0;
    } }, { key: "xySettings", value: function() {
      var e = null, t = this.w;
      if (t.globals.axisCharts) {
        if (t.config.xaxis.crosshairs.position === "back" && new We(this.ctx).drawXCrosshairs(), t.config.yaxis[0].crosshairs.position === "back" && new We(this.ctx).drawYCrosshairs(), t.config.xaxis.type === "datetime" && t.config.xaxis.labels.formatter === void 0) {
          this.ctx.timeScale = new Bt(this.ctx);
          var i = [];
          isFinite(t.globals.minX) && isFinite(t.globals.maxX) && !t.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minX, t.globals.maxX) : t.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(t.globals.minY, t.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
        }
        e = new q(this.ctx).getCalculatedRatios();
      }
      return e;
    } }, { key: "updateSourceChart", value: function(e) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: e.w.globals.minX, max: e.w.globals.maxX } } } }, !1, !1);
    } }, { key: "setupBrushHandler", value: function() {
      var e = this, t = this.w;
      if (t.config.chart.brush.enabled && typeof t.config.chart.events.selection != "function") {
        var i = Array.isArray(t.config.chart.brush.targets) ? t.config.chart.brush.targets : [t.config.chart.brush.target];
        i.forEach(function(a) {
          var s = ApexCharts.getChartByID(a);
          s.w.globals.brushSource = e.ctx, typeof s.w.config.chart.events.zoomed != "function" && (s.w.config.chart.events.zoomed = function() {
            e.updateSourceChart(s);
          }), typeof s.w.config.chart.events.scrolled != "function" && (s.w.config.chart.events.scrolled = function() {
            e.updateSourceChart(s);
          });
        }), t.config.chart.events.selection = function(a, s) {
          i.forEach(function(r) {
            var n = ApexCharts.getChartByID(r), o = P.clone(t.config.yaxis);
            if (t.config.chart.brush.autoScaleYaxis && n.w.globals.series.length === 1) {
              var h = new we(n);
              o = h.autoScaleY(n, o, s);
            }
            var c = n.w.config.yaxis.reduce(function(d, g, p) {
              return [].concat(J(d), [X(X({}, n.w.config.yaxis[p]), {}, { min: o[0].min, max: o[0].max })]);
            }, []);
            n.ctx.updateHelpers._updateOptions({ xaxis: { min: s.xaxis.min, max: s.xaxis.max }, yaxis: c }, !1, !1, !1, !1);
          });
        };
      }
    } }]), y;
  }(), Vt = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "_updateOptions", value: function(e) {
      var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
      return new Promise(function(n) {
        var o = [t.ctx];
        s && (o = t.ctx.getSyncedCharts()), t.ctx.w.globals.isExecCalled && (o = [t.ctx], t.ctx.w.globals.isExecCalled = !1), o.forEach(function(h, c) {
          var d = h.w;
          if (d.globals.shouldAnimate = a, i || (d.globals.resized = !0, d.globals.dataChanged = !0, a && h.series.getPreviousPaths()), e && U(e) === "object" && (h.config = new Le(e), e = q.extendArrayProps(h.config, e, d), h.w.globals.chartID !== t.ctx.w.globals.chartID && delete e.series, d.config = P.extend(d.config, e), r && (d.globals.lastXAxis = e.xaxis ? P.clone(e.xaxis) : [], d.globals.lastYAxis = e.yaxis ? P.clone(e.yaxis) : [], d.globals.initialConfig = P.extend({}, d.config), d.globals.initialSeries = P.clone(d.config.series), e.series))) {
            for (var g = 0; g < d.globals.collapsedSeriesIndices.length; g++) {
              var p = d.config.series[d.globals.collapsedSeriesIndices[g]];
              d.globals.collapsedSeries[g].data = d.globals.axisCharts ? p.data.slice() : p;
            }
            for (var f = 0; f < d.globals.ancillaryCollapsedSeriesIndices.length; f++) {
              var b = d.config.series[d.globals.ancillaryCollapsedSeriesIndices[f]];
              d.globals.ancillaryCollapsedSeries[f].data = d.globals.axisCharts ? b.data.slice() : b;
            }
            h.series.emptyCollapsedSeries(d.config.series);
          }
          return h.update(e).then(function() {
            c === o.length - 1 && n(h);
          });
        });
      });
    } }, { key: "_updateSeries", value: function(e, t) {
      var i = this, a = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(s) {
        var r, n = i.w;
        return n.globals.shouldAnimate = t, n.globals.dataChanged = !0, t && i.ctx.series.getPreviousPaths(), n.globals.axisCharts ? ((r = e.map(function(o, h) {
          return i._extendSeries(o, h);
        })).length === 0 && (r = [{ data: [] }]), n.config.series = r) : n.config.series = e.slice(), a && (n.globals.initialConfig.series = P.clone(n.config.series), n.globals.initialSeries = P.clone(n.config.series)), i.ctx.update().then(function() {
          s(i.ctx);
        });
      });
    } }, { key: "_extendSeries", value: function(e, t) {
      var i = this.w, a = i.config.series[t];
      return X(X({}, i.config.series[t]), {}, { name: e.name ? e.name : a == null ? void 0 : a.name, color: e.color ? e.color : a == null ? void 0 : a.color, type: e.type ? e.type : a == null ? void 0 : a.type, group: e.group ? e.group : a == null ? void 0 : a.group, data: e.data ? e.data : a == null ? void 0 : a.data, zIndex: e.zIndex !== void 0 ? e.zIndex : t });
    } }, { key: "toggleDataPointSelection", value: function(e, t) {
      var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(e, "']");
      return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "'], ").concat(s, " circle[j='").concat(t, "'], ").concat(s, " rect[j='").concat(t, "']")).members[0] : t === void 0 && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "']")).members[0], i.config.chart.type !== "pie" && i.config.chart.type !== "polarArea" && i.config.chart.type !== "donut" || this.ctx.pie.pieClicked(e)), a ? (new M(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(e) {
      var t = this.w;
      if (["min", "max"].forEach(function(a) {
        e.xaxis[a] !== void 0 && (t.config.xaxis[a] = e.xaxis[a], t.globals.lastXAxis[a] = e.xaxis[a]);
      }), e.xaxis.categories && e.xaxis.categories.length && (t.config.xaxis.categories = e.xaxis.categories), t.config.xaxis.convertedCatToNumeric) {
        var i = new oe(e);
        e = i.convertCatToNumericXaxis(e, this.ctx);
      }
      return e;
    } }, { key: "forceYAxisUpdate", value: function(e) {
      return e.chart && e.chart.stacked && e.chart.stackType === "100%" && (Array.isArray(e.yaxis) ? e.yaxis.forEach(function(t, i) {
        e.yaxis[i].min = 0, e.yaxis[i].max = 100;
      }) : (e.yaxis.min = 0, e.yaxis.max = 100)), e;
    } }, { key: "revertDefaultAxisMinMax", value: function(e) {
      var t = this, i = this.w, a = i.globals.lastXAxis, s = i.globals.lastYAxis;
      e && e.xaxis && (a = e.xaxis), e && e.yaxis && (s = e.yaxis), i.config.xaxis.min = a.min, i.config.xaxis.max = a.max;
      var r = function(n) {
        s[n] !== void 0 && (i.config.yaxis[n].min = s[n].min, i.config.yaxis[n].max = s[n].max);
      };
      i.config.yaxis.map(function(n, o) {
        i.globals.zoomed || s[o] !== void 0 ? r(o) : t.ctx.opts.yaxis[o] !== void 0 && (n.min = t.ctx.opts.yaxis[o].min, n.max = t.ctx.opts.yaxis[o].max);
      });
    } }]), y;
  }();
  be = typeof window < "u" ? window : void 0, Fe = function(y, e) {
    var t = (this !== void 0 ? this : y).SVG = function(l) {
      if (t.supported)
        return l = new t.Doc(l), t.parser.draw || t.prepare(), l;
    };
    if (t.ns = "http://www.w3.org/2000/svg", t.xmlns = "http://www.w3.org/2000/xmlns/", t.xlink = "http://www.w3.org/1999/xlink", t.svgjs = "http://svgjs.dev", t.supported = !0, !t.supported)
      return !1;
    t.did = 1e3, t.eid = function(l) {
      return "Svgjs" + c(l) + t.did++;
    }, t.create = function(l) {
      var u = e.createElementNS(this.ns, l);
      return u.setAttribute("id", this.eid(l)), u;
    }, t.extend = function() {
      var l, u;
      u = (l = [].slice.call(arguments)).pop();
      for (var x = l.length - 1; x >= 0; x--)
        if (l[x])
          for (var v in u)
            l[x].prototype[v] = u[v];
      t.Set && t.Set.inherit && t.Set.inherit();
    }, t.invent = function(l) {
      var u = typeof l.create == "function" ? l.create : function() {
        this.constructor.call(this, t.create(l.create));
      };
      return l.inherit && (u.prototype = new l.inherit()), l.extend && t.extend(u, l.extend), l.construct && t.extend(l.parent || t.Container, l.construct), u;
    }, t.adopt = function(l) {
      return l ? l.instance ? l.instance : ((u = l.nodeName == "svg" ? l.parentNode instanceof y.SVGElement ? new t.Nested() : new t.Doc() : l.nodeName == "linearGradient" ? new t.Gradient("linear") : l.nodeName == "radialGradient" ? new t.Gradient("radial") : t[c(l.nodeName)] ? new t[c(l.nodeName)]() : new t.Element(l)).type = l.nodeName, u.node = l, l.instance = u, u instanceof t.Doc && u.namespace().defs(), u.setData(JSON.parse(l.getAttribute("svgjs:data")) || {}), u) : null;
      var u;
    }, t.prepare = function() {
      var l = e.getElementsByTagName("body")[0], u = (l ? new t.Doc(l) : t.adopt(e.documentElement).nested()).size(2, 0);
      t.parser = { body: l || e.documentElement, draw: u.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: u.polyline().node, path: u.path().node, native: t.create("svg") };
    }, t.parser = { native: t.create("svg") }, e.addEventListener("DOMContentLoaded", function() {
      t.parser.draw || t.prepare();
    }, !1), t.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, t.utils = { map: function(l, u) {
      for (var x = l.length, v = [], k = 0; k < x; k++)
        v.push(u(l[k]));
      return v;
    }, filter: function(l, u) {
      for (var x = l.length, v = [], k = 0; k < x; k++)
        u(l[k]) && v.push(l[k]);
      return v;
    }, filterSVGElements: function(l) {
      return this.filter(l, function(u) {
        return u instanceof y.SVGElement;
      });
    } }, t.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, t.Color = function(l) {
      var u, x;
      this.r = 0, this.g = 0, this.b = 0, l && (typeof l == "string" ? t.regex.isRgb.test(l) ? (u = t.regex.rgb.exec(l.replace(t.regex.whitespace, "")), this.r = parseInt(u[1]), this.g = parseInt(u[2]), this.b = parseInt(u[3])) : t.regex.isHex.test(l) && (u = t.regex.hex.exec((x = l).length == 4 ? ["#", x.substring(1, 2), x.substring(1, 2), x.substring(2, 3), x.substring(2, 3), x.substring(3, 4), x.substring(3, 4)].join("") : x), this.r = parseInt(u[1], 16), this.g = parseInt(u[2], 16), this.b = parseInt(u[3], 16)) : U(l) === "object" && (this.r = l.r, this.g = l.g, this.b = l.b));
    }, t.extend(t.Color, { toString: function() {
      return this.toHex();
    }, toHex: function() {
      return "#" + d(this.r) + d(this.g) + d(this.b);
    }, toRgb: function() {
      return "rgb(" + [this.r, this.g, this.b].join() + ")";
    }, brightness: function() {
      return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
    }, morph: function(l) {
      return this.destination = new t.Color(l), this;
    }, at: function(l) {
      return this.destination ? (l = l < 0 ? 0 : l > 1 ? 1 : l, new t.Color({ r: ~~(this.r + (this.destination.r - this.r) * l), g: ~~(this.g + (this.destination.g - this.g) * l), b: ~~(this.b + (this.destination.b - this.b) * l) })) : this;
    } }), t.Color.test = function(l) {
      return l += "", t.regex.isHex.test(l) || t.regex.isRgb.test(l);
    }, t.Color.isRgb = function(l) {
      return l && typeof l.r == "number" && typeof l.g == "number" && typeof l.b == "number";
    }, t.Color.isColor = function(l) {
      return t.Color.isRgb(l) || t.Color.test(l);
    }, t.Array = function(l, u) {
      (l = (l || []).valueOf()).length == 0 && u && (l = u.valueOf()), this.value = this.parse(l);
    }, t.extend(t.Array, { toString: function() {
      return this.value.join(" ");
    }, valueOf: function() {
      return this.value;
    }, parse: function(l) {
      return l = l.valueOf(), Array.isArray(l) ? l : this.split(l);
    } }), t.PointArray = function(l, u) {
      t.Array.call(this, l, u || [[0, 0]]);
    }, t.PointArray.prototype = new t.Array(), t.PointArray.prototype.constructor = t.PointArray;
    for (var i = { M: function(l, u, x) {
      return u.x = x.x = l[0], u.y = x.y = l[1], ["M", u.x, u.y];
    }, L: function(l, u) {
      return u.x = l[0], u.y = l[1], ["L", l[0], l[1]];
    }, H: function(l, u) {
      return u.x = l[0], ["H", l[0]];
    }, V: function(l, u) {
      return u.y = l[0], ["V", l[0]];
    }, C: function(l, u) {
      return u.x = l[4], u.y = l[5], ["C", l[0], l[1], l[2], l[3], l[4], l[5]];
    }, Q: function(l, u) {
      return u.x = l[2], u.y = l[3], ["Q", l[0], l[1], l[2], l[3]];
    }, S: function(l, u) {
      return u.x = l[2], u.y = l[3], ["S", l[0], l[1], l[2], l[3]];
    }, Z: function(l, u, x) {
      return u.x = x.x, u.y = x.y, ["Z"];
    } }, a = "mlhvqtcsaz".split(""), s = 0, r = a.length; s < r; ++s)
      i[a[s]] = function(l) {
        return function(u, x, v) {
          if (l == "H")
            u[0] = u[0] + x.x;
          else if (l == "V")
            u[0] = u[0] + x.y;
          else if (l == "A")
            u[5] = u[5] + x.x, u[6] = u[6] + x.y;
          else
            for (var k = 0, S = u.length; k < S; ++k)
              u[k] = u[k] + (k % 2 ? x.y : x.x);
          if (i && typeof i[l] == "function")
            return i[l](u, x, v);
        };
      }(a[s].toUpperCase());
    t.PathArray = function(l, u) {
      t.Array.call(this, l, u || [["M", 0, 0]]);
    }, t.PathArray.prototype = new t.Array(), t.PathArray.prototype.constructor = t.PathArray, t.extend(t.PathArray, { toString: function() {
      return function(l) {
        for (var u = 0, x = l.length, v = ""; u < x; u++)
          v += l[u][0], l[u][1] != null && (v += l[u][1], l[u][2] != null && (v += " ", v += l[u][2], l[u][3] != null && (v += " ", v += l[u][3], v += " ", v += l[u][4], l[u][5] != null && (v += " ", v += l[u][5], v += " ", v += l[u][6], l[u][7] != null && (v += " ", v += l[u][7])))));
        return v + " ";
      }(this.value);
    }, move: function(l, u) {
      var x = this.bbox();
      return x.x, x.y, this;
    }, at: function(l) {
      if (!this.destination)
        return this;
      for (var u = this.value, x = this.destination.value, v = [], k = new t.PathArray(), S = 0, C = u.length; S < C; S++) {
        v[S] = [u[S][0]];
        for (var L = 1, I = u[S].length; L < I; L++)
          v[S][L] = u[S][L] + (x[S][L] - u[S][L]) * l;
        v[S][0] === "A" && (v[S][4] = +(v[S][4] != 0), v[S][5] = +(v[S][5] != 0));
      }
      return k.value = v, k;
    }, parse: function(l) {
      if (l instanceof t.PathArray)
        return l.valueOf();
      var u, x = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      l = typeof l == "string" ? l.replace(t.regex.numbersWithDots, o).replace(t.regex.pathLetters, " $& ").replace(t.regex.hyphen, "$1 -").trim().split(t.regex.delimiter) : l.reduce(function(I, z) {
        return [].concat.call(I, z);
      }, []);
      var v = [], k = new t.Point(), S = new t.Point(), C = 0, L = l.length;
      do
        t.regex.isPathLetter.test(l[C]) ? (u = l[C], ++C) : u == "M" ? u = "L" : u == "m" && (u = "l"), v.push(i[u].call(null, l.slice(C, C += x[u.toUpperCase()]).map(parseFloat), k, S));
      while (L > C);
      return v;
    }, bbox: function() {
      return t.parser.draw || t.prepare(), t.parser.path.setAttribute("d", this.toString()), t.parser.path.getBBox();
    } }), t.Number = t.invent({ create: function(l, u) {
      this.value = 0, this.unit = u || "", typeof l == "number" ? this.value = isNaN(l) ? 0 : isFinite(l) ? l : l < 0 ? -34e37 : 34e37 : typeof l == "string" ? (u = l.match(t.regex.numberAndUnit)) && (this.value = parseFloat(u[1]), u[5] == "%" ? this.value /= 100 : u[5] == "s" && (this.value *= 1e3), this.unit = u[5]) : l instanceof t.Number && (this.value = l.valueOf(), this.unit = l.unit);
    }, extend: { toString: function() {
      return (this.unit == "%" ? ~~(1e8 * this.value) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
    }, toJSON: function() {
      return this.toString();
    }, valueOf: function() {
      return this.value;
    }, plus: function(l) {
      return l = new t.Number(l), new t.Number(this + l, this.unit || l.unit);
    }, minus: function(l) {
      return l = new t.Number(l), new t.Number(this - l, this.unit || l.unit);
    }, times: function(l) {
      return l = new t.Number(l), new t.Number(this * l, this.unit || l.unit);
    }, divide: function(l) {
      return l = new t.Number(l), new t.Number(this / l, this.unit || l.unit);
    }, to: function(l) {
      var u = new t.Number(this);
      return typeof l == "string" && (u.unit = l), u;
    }, morph: function(l) {
      return this.destination = new t.Number(l), l.relative && (this.destination.value += this.value), this;
    }, at: function(l) {
      return this.destination ? new t.Number(this.destination).minus(this).times(l).plus(this) : this;
    } } }), t.Element = t.invent({ create: function(l) {
      this._stroke = t.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = l) && (this.type = l.nodeName, this.node.instance = this, this._stroke = l.getAttribute("stroke") || this._stroke);
    }, extend: { x: function(l) {
      return this.attr("x", l);
    }, y: function(l) {
      return this.attr("y", l);
    }, cx: function(l) {
      return l == null ? this.x() + this.width() / 2 : this.x(l - this.width() / 2);
    }, cy: function(l) {
      return l == null ? this.y() + this.height() / 2 : this.y(l - this.height() / 2);
    }, move: function(l, u) {
      return this.x(l).y(u);
    }, center: function(l, u) {
      return this.cx(l).cy(u);
    }, width: function(l) {
      return this.attr("width", l);
    }, height: function(l) {
      return this.attr("height", l);
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.width(new t.Number(x.width)).height(new t.Number(x.height));
    }, clone: function(l) {
      this.writeDataToDom();
      var u = b(this.node.cloneNode(!0));
      return l ? l.add(u) : this.after(u), u;
    }, remove: function() {
      return this.parent() && this.parent().removeElement(this), this;
    }, replace: function(l) {
      return this.after(l).remove(), l;
    }, addTo: function(l) {
      return l.put(this);
    }, putIn: function(l) {
      return l.add(this);
    }, id: function(l) {
      return this.attr("id", l);
    }, show: function() {
      return this.style("display", "");
    }, hide: function() {
      return this.style("display", "none");
    }, visible: function() {
      return this.style("display") != "none";
    }, toString: function() {
      return this.attr("id");
    }, classes: function() {
      var l = this.attr("class");
      return l == null ? [] : l.trim().split(t.regex.delimiter);
    }, hasClass: function(l) {
      return this.classes().indexOf(l) != -1;
    }, addClass: function(l) {
      if (!this.hasClass(l)) {
        var u = this.classes();
        u.push(l), this.attr("class", u.join(" "));
      }
      return this;
    }, removeClass: function(l) {
      return this.hasClass(l) && this.attr("class", this.classes().filter(function(u) {
        return u != l;
      }).join(" ")), this;
    }, toggleClass: function(l) {
      return this.hasClass(l) ? this.removeClass(l) : this.addClass(l);
    }, reference: function(l) {
      return t.get(this.attr(l));
    }, parent: function(l) {
      var u = this;
      if (!u.node.parentNode)
        return null;
      if (u = t.adopt(u.node.parentNode), !l)
        return u;
      for (; u && u.node instanceof y.SVGElement; ) {
        if (typeof l == "string" ? u.matches(l) : u instanceof l)
          return u;
        if (!u.node.parentNode || u.node.parentNode.nodeName == "#document")
          return null;
        u = t.adopt(u.node.parentNode);
      }
    }, doc: function() {
      return this instanceof t.Doc ? this : this.parent(t.Doc);
    }, parents: function(l) {
      var u = [], x = this;
      do {
        if (!(x = x.parent(l)) || !x.node)
          break;
        u.push(x);
      } while (x.parent);
      return u;
    }, matches: function(l) {
      return function(u, x) {
        return (u.matches || u.matchesSelector || u.msMatchesSelector || u.mozMatchesSelector || u.webkitMatchesSelector || u.oMatchesSelector).call(u, x);
      }(this.node, l);
    }, native: function() {
      return this.node;
    }, svg: function(l) {
      var u = e.createElement("svg");
      if (!(l && this instanceof t.Parent))
        return u.appendChild(l = e.createElement("svg")), this.writeDataToDom(), l.appendChild(this.node.cloneNode(!0)), u.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
      u.innerHTML = "<svg>" + l.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
      for (var x = 0, v = u.firstChild.childNodes.length; x < v; x++)
        this.node.appendChild(u.firstChild.firstChild);
      return this;
    }, writeDataToDom: function() {
      return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
        this.writeDataToDom();
      }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
    }, setData: function(l) {
      return this.dom = l, this;
    }, is: function(l) {
      return function(u, x) {
        return u instanceof x;
      }(this, l);
    } } }), t.easing = { "-": function(l) {
      return l;
    }, "<>": function(l) {
      return -Math.cos(l * Math.PI) / 2 + 0.5;
    }, ">": function(l) {
      return Math.sin(l * Math.PI / 2);
    }, "<": function(l) {
      return 1 - Math.cos(l * Math.PI / 2);
    } }, t.morph = function(l) {
      return function(u, x) {
        return new t.MorphObj(u, x).at(l);
      };
    }, t.Situation = t.invent({ create: function(l) {
      this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new t.Number(l.duration).valueOf(), this.delay = new t.Number(l.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = l.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
    } }), t.FX = t.invent({ create: function(l) {
      this._target = l, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
    }, extend: { animate: function(l, u, x) {
      U(l) === "object" && (u = l.ease, x = l.delay, l = l.duration);
      var v = new t.Situation({ duration: l || 1e3, delay: x || 0, ease: t.easing[u || "-"] || u });
      return this.queue(v), this;
    }, target: function(l) {
      return l && l instanceof t.Element ? (this._target = l, this) : this._target;
    }, timeToAbsPos: function(l) {
      return (l - this.situation.start) / (this.situation.duration / this._speed);
    }, absPosToTime: function(l) {
      return this.situation.duration / this._speed * l + this.situation.start;
    }, startAnimFrame: function() {
      this.stopAnimFrame(), this.animationFrame = y.requestAnimationFrame((function() {
        this.step();
      }).bind(this));
    }, stopAnimFrame: function() {
      y.cancelAnimationFrame(this.animationFrame);
    }, start: function() {
      return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
    }, startCurrent: function() {
      return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
    }, queue: function(l) {
      return (typeof l == "function" || l instanceof t.Situation) && this.situations.push(l), this.situation || (this.situation = this.situations.shift()), this;
    }, dequeue: function() {
      return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof t.Situation ? this.start() : this.situation.call(this)), this;
    }, initAnimations: function() {
      var l, u = this.situation;
      if (u.init)
        return this;
      for (var x in u.animations) {
        l = this.target()[x](), Array.isArray(l) || (l = [l]), Array.isArray(u.animations[x]) || (u.animations[x] = [u.animations[x]]);
        for (var v = l.length; v--; )
          u.animations[x][v] instanceof t.Number && (l[v] = new t.Number(l[v])), u.animations[x][v] = l[v].morph(u.animations[x][v]);
      }
      for (var x in u.attrs)
        u.attrs[x] = new t.MorphObj(this.target().attr(x), u.attrs[x]);
      for (var x in u.styles)
        u.styles[x] = new t.MorphObj(this.target().style(x), u.styles[x]);
      return u.initialTransformation = this.target().matrixify(), u.init = !0, this;
    }, clearQueue: function() {
      return this.situations = [], this;
    }, clearCurrent: function() {
      return this.situation = null, this;
    }, stop: function(l, u) {
      var x = this.active;
      return this.active = !1, u && this.clearQueue(), l && this.situation && (!x && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
    }, after: function(l) {
      var u = this.last();
      return this.target().on("finished.fx", function x(v) {
        v.detail.situation == u && (l.call(this, u), this.off("finished.fx", x));
      }), this._callStart();
    }, during: function(l) {
      var u = this.last(), x = function(v) {
        v.detail.situation == u && l.call(this, v.detail.pos, t.morph(v.detail.pos), v.detail.eased, u);
      };
      return this.target().off("during.fx", x).on("during.fx", x), this.after(function() {
        this.off("during.fx", x);
      }), this._callStart();
    }, afterAll: function(l) {
      var u = function x(v) {
        l.call(this), this.off("allfinished.fx", x);
      };
      return this.target().off("allfinished.fx", u).on("allfinished.fx", u), this._callStart();
    }, last: function() {
      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
    }, add: function(l, u, x) {
      return this.last()[x || "animations"][l] = u, this._callStart();
    }, step: function(l) {
      var u, x, v;
      l || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), this.situation.loops !== !1 ? (u = Math.max(this.absPos, 0), x = Math.floor(u), this.situation.loops === !0 || x < this.situation.loops ? (this.pos = u - x, v = this.situation.loop, this.situation.loop = x) : (this.absPos = this.situation.loops, this.pos = 1, v = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != !!((this.situation.loop - v) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
      var k = this.situation.ease(this.pos);
      for (var S in this.situation.once)
        S > this.lastPos && S <= k && (this.situation.once[S].call(this.target(), this.pos, k), delete this.situation.once[S]);
      return this.active && this.target().fire("during", { pos: this.pos, eased: k, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0 ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = k, this) : this;
    }, eachAt: function() {
      var l, u = this, x = this.target(), v = this.situation;
      for (var k in v.animations)
        l = [].concat(v.animations[k]).map(function(L) {
          return typeof L != "string" && L.at ? L.at(v.ease(u.pos), u.pos) : L;
        }), x[k].apply(x, l);
      for (var k in v.attrs)
        l = [k].concat(v.attrs[k]).map(function(I) {
          return typeof I != "string" && I.at ? I.at(v.ease(u.pos), u.pos) : I;
        }), x.attr.apply(x, l);
      for (var k in v.styles)
        l = [k].concat(v.styles[k]).map(function(I) {
          return typeof I != "string" && I.at ? I.at(v.ease(u.pos), u.pos) : I;
        }), x.style.apply(x, l);
      if (v.transforms.length) {
        l = v.initialTransformation, k = 0;
        for (var S = v.transforms.length; k < S; k++) {
          var C = v.transforms[k];
          C instanceof t.Matrix ? l = C.relative ? l.multiply(new t.Matrix().morph(C).at(v.ease(this.pos))) : l.morph(C).at(v.ease(this.pos)) : (C.relative || C.undo(l.extract()), l = l.multiply(C.at(v.ease(this.pos))));
        }
        x.matrix(l);
      }
      return this;
    }, once: function(l, u, x) {
      var v = this.last();
      return x || (l = v.ease(l)), v.once[l] = u, this;
    }, _callStart: function() {
      return setTimeout((function() {
        this.start();
      }).bind(this), 0), this;
    } }, parent: t.Element, construct: { animate: function(l, u, x) {
      return (this.fx || (this.fx = new t.FX(this))).animate(l, u, x);
    }, delay: function(l) {
      return (this.fx || (this.fx = new t.FX(this))).delay(l);
    }, stop: function(l, u) {
      return this.fx && this.fx.stop(l, u), this;
    }, finish: function() {
      return this.fx && this.fx.finish(), this;
    } } }), t.MorphObj = t.invent({ create: function(l, u) {
      return t.Color.isColor(u) ? new t.Color(l).morph(u) : t.regex.delimiter.test(l) ? t.regex.pathLetters.test(l) ? new t.PathArray(l).morph(u) : new t.Array(l).morph(u) : t.regex.numberAndUnit.test(u) ? new t.Number(l).morph(u) : (this.value = l, void (this.destination = u));
    }, extend: { at: function(l, u) {
      return u < 1 ? this.value : this.destination;
    }, valueOf: function() {
      return this.value;
    } } }), t.extend(t.FX, { attr: function(l, u, x) {
      if (U(l) === "object")
        for (var v in l)
          this.attr(v, l[v]);
      else
        this.add(l, u, "attrs");
      return this;
    }, plot: function(l, u, x, v) {
      return arguments.length == 4 ? this.plot([l, u, x, v]) : this.add("plot", new (this.target()).morphArray(l));
    } }), t.Box = t.invent({ create: function(l, u, x, v) {
      if (!(U(l) !== "object" || l instanceof t.Element))
        return t.Box.call(this, l.left != null ? l.left : l.x, l.top != null ? l.top : l.y, l.width, l.height);
      var k;
      arguments.length == 4 && (this.x = l, this.y = u, this.width = x, this.height = v), (k = this).x == null && (k.x = 0, k.y = 0, k.width = 0, k.height = 0), k.w = k.width, k.h = k.height, k.x2 = k.x + k.width, k.y2 = k.y + k.height, k.cx = k.x + k.width / 2, k.cy = k.y + k.height / 2;
    } }), t.BBox = t.invent({ create: function(l) {
      if (t.Box.apply(this, [].slice.call(arguments)), l instanceof t.Element) {
        var u;
        try {
          if (!e.documentElement.contains) {
            for (var x = l.node; x.parentNode; )
              x = x.parentNode;
            if (x != e)
              throw new Error("Element not in the dom");
          }
          u = l.node.getBBox();
        } catch {
          if (l instanceof t.Shape) {
            t.parser.draw || t.prepare();
            var v = l.clone(t.parser.draw.instance).show();
            v && v.node && typeof v.node.getBBox == "function" && (u = v.node.getBBox()), v && typeof v.remove == "function" && v.remove();
          } else
            u = { x: l.node.clientLeft, y: l.node.clientTop, width: l.node.clientWidth, height: l.node.clientHeight };
        }
        t.Box.call(this, u);
      }
    }, inherit: t.Box, parent: t.Element, construct: { bbox: function() {
      return new t.BBox(this);
    } } }), t.BBox.prototype.constructor = t.BBox, t.Matrix = t.invent({ create: function(l) {
      var u = f([1, 0, 0, 1, 0, 0]);
      l = l === null ? u : l instanceof t.Element ? l.matrixify() : typeof l == "string" ? f(l.split(t.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? f([].slice.call(arguments)) : Array.isArray(l) ? f(l) : l && U(l) === "object" ? l : u;
      for (var x = w.length - 1; x >= 0; --x)
        this[w[x]] = l[w[x]] != null ? l[w[x]] : u[w[x]];
    }, extend: { extract: function() {
      var l = p(this, 0, 1);
      p(this, 1, 0);
      var u = 180 / Math.PI * Math.atan2(l.y, l.x) - 90;
      return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(u * Math.PI / 180) + this.f * Math.sin(u * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(u * Math.PI / 180) + this.e * Math.sin(-u * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: u, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new t.Matrix(this) };
    }, clone: function() {
      return new t.Matrix(this);
    }, morph: function(l) {
      return this.destination = new t.Matrix(l), this;
    }, multiply: function(l) {
      return new t.Matrix(this.native().multiply(function(u) {
        return u instanceof t.Matrix || (u = new t.Matrix(u)), u;
      }(l).native()));
    }, inverse: function() {
      return new t.Matrix(this.native().inverse());
    }, translate: function(l, u) {
      return new t.Matrix(this.native().translate(l || 0, u || 0));
    }, native: function() {
      for (var l = t.parser.native.createSVGMatrix(), u = w.length - 1; u >= 0; u--)
        l[w[u]] = this[w[u]];
      return l;
    }, toString: function() {
      return "matrix(" + m(this.a) + "," + m(this.b) + "," + m(this.c) + "," + m(this.d) + "," + m(this.e) + "," + m(this.f) + ")";
    } }, parent: t.Element, construct: { ctm: function() {
      return new t.Matrix(this.node.getCTM());
    }, screenCTM: function() {
      if (this instanceof t.Nested) {
        var l = this.rect(1, 1), u = l.node.getScreenCTM();
        return l.remove(), new t.Matrix(u);
      }
      return new t.Matrix(this.node.getScreenCTM());
    } } }), t.Point = t.invent({ create: function(l, u) {
      var x;
      x = Array.isArray(l) ? { x: l[0], y: l[1] } : U(l) === "object" ? { x: l.x, y: l.y } : l != null ? { x: l, y: u ?? l } : { x: 0, y: 0 }, this.x = x.x, this.y = x.y;
    }, extend: { clone: function() {
      return new t.Point(this);
    }, morph: function(l, u) {
      return this.destination = new t.Point(l, u), this;
    } } }), t.extend(t.Element, { point: function(l, u) {
      return new t.Point(l, u).transform(this.screenCTM().inverse());
    } }), t.extend(t.Element, { attr: function(l, u, x) {
      if (l == null) {
        for (l = {}, x = (u = this.node.attributes).length - 1; x >= 0; x--)
          l[u[x].nodeName] = t.regex.isNumber.test(u[x].nodeValue) ? parseFloat(u[x].nodeValue) : u[x].nodeValue;
        return l;
      }
      if (U(l) === "object")
        for (var v in l)
          this.attr(v, l[v]);
      else if (u === null)
        this.node.removeAttribute(l);
      else {
        if (u == null)
          return (u = this.node.getAttribute(l)) == null ? t.defaults.attrs[l] : t.regex.isNumber.test(u) ? parseFloat(u) : u;
        l == "stroke-width" ? this.attr("stroke", parseFloat(u) > 0 ? this._stroke : null) : l == "stroke" && (this._stroke = u), l != "fill" && l != "stroke" || (t.regex.isImage.test(u) && (u = this.doc().defs().image(u, 0, 0)), u instanceof t.Image && (u = this.doc().defs().pattern(0, 0, function() {
          this.add(u);
        }))), typeof u == "number" ? u = new t.Number(u) : t.Color.isColor(u) ? u = new t.Color(u) : Array.isArray(u) && (u = new t.Array(u)), l == "leading" ? this.leading && this.leading(u) : typeof x == "string" ? this.node.setAttributeNS(x, l, u.toString()) : this.node.setAttribute(l, u.toString()), !this.rebuild || l != "font-size" && l != "x" || this.rebuild(l, u);
      }
      return this;
    } }), t.extend(t.Element, { transform: function(l, u) {
      var x;
      return U(l) !== "object" ? (x = new t.Matrix(this).extract(), typeof l == "string" ? x[l] : x) : (x = new t.Matrix(this), u = !!u || !!l.relative, l.a != null && (x = u ? x.multiply(new t.Matrix(l)) : new t.Matrix(l)), this.attr("transform", x));
    } }), t.extend(t.Element, { untransform: function() {
      return this.attr("transform", null);
    }, matrixify: function() {
      return (this.attr("transform") || "").split(t.regex.transforms).slice(0, -1).map(function(l) {
        var u = l.trim().split("(");
        return [u[0], u[1].split(t.regex.delimiter).map(function(x) {
          return parseFloat(x);
        })];
      }).reduce(function(l, u) {
        return u[0] == "matrix" ? l.multiply(f(u[1])) : l[u[0]].apply(l, u[1]);
      }, new t.Matrix());
    }, toParent: function(l) {
      if (this == l)
        return this;
      var u = this.screenCTM(), x = l.screenCTM().inverse();
      return this.addTo(l).untransform().transform(x.multiply(u)), this;
    }, toDoc: function() {
      return this.toParent(this.doc());
    } }), t.Transformation = t.invent({ create: function(l, u) {
      if (arguments.length > 1 && typeof u != "boolean")
        return this.constructor.call(this, [].slice.call(arguments));
      if (Array.isArray(l))
        for (var x = 0, v = this.arguments.length; x < v; ++x)
          this[this.arguments[x]] = l[x];
      else if (l && U(l) === "object")
        for (x = 0, v = this.arguments.length; x < v; ++x)
          this[this.arguments[x]] = l[this.arguments[x]];
      this.inversed = !1, u === !0 && (this.inversed = !0);
    } }), t.Translate = t.invent({ parent: t.Matrix, inherit: t.Transformation, create: function(l, u) {
      this.constructor.apply(this, [].slice.call(arguments));
    }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), t.extend(t.Element, { style: function(l, u) {
      if (arguments.length == 0)
        return this.node.style.cssText || "";
      if (arguments.length < 2)
        if (U(l) === "object")
          for (var x in l)
            this.style(x, l[x]);
        else {
          if (!t.regex.isCss.test(l))
            return this.node.style[h(l)];
          for (l = l.split(/\s*;\s*/).filter(function(v) {
            return !!v;
          }).map(function(v) {
            return v.split(/\s*:\s*/);
          }); u = l.pop(); )
            this.style(u[0], u[1]);
        }
      else
        this.node.style[h(l)] = u === null || t.regex.isBlank.test(u) ? "" : u;
      return this;
    } }), t.Parent = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Element, extend: { children: function() {
      return t.utils.map(t.utils.filterSVGElements(this.node.childNodes), function(l) {
        return t.adopt(l);
      });
    }, add: function(l, u) {
      return u == null ? this.node.appendChild(l.node) : l.node != this.node.childNodes[u] && this.node.insertBefore(l.node, this.node.childNodes[u]), this;
    }, put: function(l, u) {
      return this.add(l, u), l;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return [].slice.call(this.node.childNodes).indexOf(l.node);
    }, get: function(l) {
      return t.adopt(this.node.childNodes[l]);
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.node.childNodes.length - 1);
    }, each: function(l, u) {
      for (var x = this.children(), v = 0, k = x.length; v < k; v++)
        x[v] instanceof t.Element && l.apply(x[v], [v, x]), u && x[v] instanceof t.Container && x[v].each(l, u);
      return this;
    }, removeElement: function(l) {
      return this.node.removeChild(l.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, this;
    }, defs: function() {
      return this.doc().defs();
    } } }), t.extend(t.Parent, { ungroup: function(l, u) {
      return u === 0 || this instanceof t.Defs || this.node == t.parser.draw || (l = l || (this instanceof t.Doc ? this : this.parent(t.Parent)), u = u || 1 / 0, this.each(function() {
        return this instanceof t.Defs ? this : this instanceof t.Parent ? this.ungroup(l, u - 1) : this.toParent(l);
      }), this.node.firstChild || this.remove()), this;
    }, flatten: function(l, u) {
      return this.ungroup(l, u);
    } }), t.Container = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Parent }), t.ViewBox = t.invent({ parent: t.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(l) {
      t.Element.prototype[l] = function(u) {
        return t.on(this.node, l, u), this;
      };
    }), t.listeners = [], t.handlerMap = [], t.listenerId = 0, t.on = function(l, u, x, v, k) {
      var S = x.bind(v || l.instance || l), C = (t.handlerMap.indexOf(l) + 1 || t.handlerMap.push(l)) - 1, L = u.split(".")[0], I = u.split(".")[1] || "*";
      t.listeners[C] = t.listeners[C] || {}, t.listeners[C][L] = t.listeners[C][L] || {}, t.listeners[C][L][I] = t.listeners[C][L][I] || {}, x._svgjsListenerId || (x._svgjsListenerId = ++t.listenerId), t.listeners[C][L][I][x._svgjsListenerId] = S, l.addEventListener(L, S, k || { passive: !0 });
    }, t.off = function(l, u, x) {
      var v = t.handlerMap.indexOf(l), k = u && u.split(".")[0], S = u && u.split(".")[1], C = "";
      if (v != -1)
        if (x) {
          if (typeof x == "function" && (x = x._svgjsListenerId), !x)
            return;
          t.listeners[v][k] && t.listeners[v][k][S || "*"] && (l.removeEventListener(k, t.listeners[v][k][S || "*"][x], !1), delete t.listeners[v][k][S || "*"][x]);
        } else if (S && k) {
          if (t.listeners[v][k] && t.listeners[v][k][S]) {
            for (var L in t.listeners[v][k][S])
              t.off(l, [k, S].join("."), L);
            delete t.listeners[v][k][S];
          }
        } else if (S)
          for (var I in t.listeners[v])
            for (var C in t.listeners[v][I])
              S === C && t.off(l, [I, S].join("."));
        else if (k) {
          if (t.listeners[v][k]) {
            for (var C in t.listeners[v][k])
              t.off(l, [k, C].join("."));
            delete t.listeners[v][k];
          }
        } else {
          for (var I in t.listeners[v])
            t.off(l, I);
          delete t.listeners[v], delete t.handlerMap[v];
        }
    }, t.extend(t.Element, { on: function(l, u, x, v) {
      return t.on(this.node, l, u, x, v), this;
    }, off: function(l, u) {
      return t.off(this.node, l, u), this;
    }, fire: function(l, u) {
      return l instanceof y.Event ? this.node.dispatchEvent(l) : this.node.dispatchEvent(l = new t.CustomEvent(l, { detail: u, cancelable: !0 })), this._event = l, this;
    }, event: function() {
      return this._event;
    } }), t.Defs = t.invent({ create: "defs", inherit: t.Container }), t.G = t.invent({ create: "g", inherit: t.Container, extend: { x: function(l) {
      return l == null ? this.transform("x") : this.transform({ x: l - this.x() }, !0);
    } }, construct: { group: function() {
      return this.put(new t.G());
    } } }), t.Doc = t.invent({ create: function(l) {
      l && ((l = typeof l == "string" ? e.getElementById(l) : l).nodeName == "svg" ? this.constructor.call(this, l) : (this.constructor.call(this, t.create("svg")), l.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
    }, inherit: t.Container, extend: { namespace: function() {
      return this.attr({ xmlns: t.ns, version: "1.1" }).attr("xmlns:xlink", t.xlink, t.xmlns).attr("xmlns:svgjs", t.svgjs, t.xmlns);
    }, defs: function() {
      var l;
      return this._defs || ((l = this.node.getElementsByTagName("defs")[0]) ? this._defs = t.adopt(l) : this._defs = new t.Defs(), this.node.appendChild(this._defs.node)), this._defs;
    }, parent: function() {
      return this.node.parentNode && this.node.parentNode.nodeName != "#document" ? this.node.parentNode : null;
    }, remove: function() {
      return this.parent() && this.parent().removeChild(this.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, t.parser.draw && !t.parser.draw.parentNode && this.node.appendChild(t.parser.draw), this;
    }, clone: function(l) {
      this.writeDataToDom();
      var u = this.node, x = b(u.cloneNode(!0));
      return l ? (l.node || l).appendChild(x.node) : u.parentNode.insertBefore(x.node, u.nextSibling), x;
    } } }), t.extend(t.Element, {}), t.Gradient = t.invent({ create: function(l) {
      this.constructor.call(this, t.create(l + "Gradient")), this.type = l;
    }, inherit: t.Container, extend: { at: function(l, u, x) {
      return this.put(new t.Stop()).update(l, u, x);
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, fill: function() {
      return "url(#" + this.id() + ")";
    }, toString: function() {
      return this.fill();
    }, attr: function(l, u, x) {
      return l == "transform" && (l = "gradientTransform"), t.Container.prototype.attr.call(this, l, u, x);
    } }, construct: { gradient: function(l, u) {
      return this.defs().gradient(l, u);
    } } }), t.extend(t.Gradient, t.FX, { from: function(l, u) {
      return (this._target || this).type == "radial" ? this.attr({ fx: new t.Number(l), fy: new t.Number(u) }) : this.attr({ x1: new t.Number(l), y1: new t.Number(u) });
    }, to: function(l, u) {
      return (this._target || this).type == "radial" ? this.attr({ cx: new t.Number(l), cy: new t.Number(u) }) : this.attr({ x2: new t.Number(l), y2: new t.Number(u) });
    } }), t.extend(t.Defs, { gradient: function(l, u) {
      return this.put(new t.Gradient(l)).update(u);
    } }), t.Stop = t.invent({ create: "stop", inherit: t.Element, extend: { update: function(l) {
      return (typeof l == "number" || l instanceof t.Number) && (l = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), l.opacity != null && this.attr("stop-opacity", l.opacity), l.color != null && this.attr("stop-color", l.color), l.offset != null && this.attr("offset", new t.Number(l.offset)), this;
    } } }), t.Pattern = t.invent({ create: "pattern", inherit: t.Container, extend: { fill: function() {
      return "url(#" + this.id() + ")";
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, toString: function() {
      return this.fill();
    }, attr: function(l, u, x) {
      return l == "transform" && (l = "patternTransform"), t.Container.prototype.attr.call(this, l, u, x);
    } }, construct: { pattern: function(l, u, x) {
      return this.defs().pattern(l, u, x);
    } } }), t.extend(t.Defs, { pattern: function(l, u, x) {
      return this.put(new t.Pattern()).update(x).attr({ x: 0, y: 0, width: l, height: u, patternUnits: "userSpaceOnUse" });
    } }), t.Shape = t.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: t.Element }), t.Symbol = t.invent({ create: "symbol", inherit: t.Container, construct: { symbol: function() {
      return this.put(new t.Symbol());
    } } }), t.Use = t.invent({ create: "use", inherit: t.Shape, extend: { element: function(l, u) {
      return this.attr("href", (u || "") + "#" + l, t.xlink);
    } }, construct: { use: function(l, u) {
      return this.put(new t.Use()).element(l, u);
    } } }), t.Rect = t.invent({ create: "rect", inherit: t.Shape, construct: { rect: function(l, u) {
      return this.put(new t.Rect()).size(l, u);
    } } }), t.Circle = t.invent({ create: "circle", inherit: t.Shape, construct: { circle: function(l) {
      return this.put(new t.Circle()).rx(new t.Number(l).divide(2)).move(0, 0);
    } } }), t.extend(t.Circle, t.FX, { rx: function(l) {
      return this.attr("r", l);
    }, ry: function(l) {
      return this.rx(l);
    } }), t.Ellipse = t.invent({ create: "ellipse", inherit: t.Shape, construct: { ellipse: function(l, u) {
      return this.put(new t.Ellipse()).size(l, u).move(0, 0);
    } } }), t.extend(t.Ellipse, t.Rect, t.FX, { rx: function(l) {
      return this.attr("rx", l);
    }, ry: function(l) {
      return this.attr("ry", l);
    } }), t.extend(t.Circle, t.Ellipse, { x: function(l) {
      return l == null ? this.cx() - this.rx() : this.cx(l + this.rx());
    }, y: function(l) {
      return l == null ? this.cy() - this.ry() : this.cy(l + this.ry());
    }, cx: function(l) {
      return l == null ? this.attr("cx") : this.attr("cx", l);
    }, cy: function(l) {
      return l == null ? this.attr("cy") : this.attr("cy", l);
    }, width: function(l) {
      return l == null ? 2 * this.rx() : this.rx(new t.Number(l).divide(2));
    }, height: function(l) {
      return l == null ? 2 * this.ry() : this.ry(new t.Number(l).divide(2));
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.rx(new t.Number(x.width).divide(2)).ry(new t.Number(x.height).divide(2));
    } }), t.Line = t.invent({ create: "line", inherit: t.Shape, extend: { array: function() {
      return new t.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }, plot: function(l, u, x, v) {
      return l == null ? this.array() : (l = u !== void 0 ? { x1: l, y1: u, x2: x, y2: v } : new t.PointArray(l).toLine(), this.attr(l));
    }, move: function(l, u) {
      return this.attr(this.array().move(l, u).toLine());
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.attr(this.array().size(x.width, x.height).toLine());
    } }, construct: { line: function(l, u, x, v) {
      return t.Line.prototype.plot.apply(this.put(new t.Line()), l != null ? [l, u, x, v] : [0, 0, 0, 0]);
    } } }), t.Polyline = t.invent({ create: "polyline", inherit: t.Shape, construct: { polyline: function(l) {
      return this.put(new t.Polyline()).plot(l || new t.PointArray());
    } } }), t.Polygon = t.invent({ create: "polygon", inherit: t.Shape, construct: { polygon: function(l) {
      return this.put(new t.Polygon()).plot(l || new t.PointArray());
    } } }), t.extend(t.Polyline, t.Polygon, { array: function() {
      return this._array || (this._array = new t.PointArray(this.attr("points")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("points", typeof l == "string" ? l : this._array = new t.PointArray(l));
    }, clear: function() {
      return delete this._array, this;
    }, move: function(l, u) {
      return this.attr("points", this.array().move(l, u));
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.attr("points", this.array().size(x.width, x.height));
    } }), t.extend(t.Line, t.Polyline, t.Polygon, { morphArray: t.PointArray, x: function(l) {
      return l == null ? this.bbox().x : this.move(l, this.bbox().y);
    }, y: function(l) {
      return l == null ? this.bbox().y : this.move(this.bbox().x, l);
    }, width: function(l) {
      var u = this.bbox();
      return l == null ? u.width : this.size(l, u.height);
    }, height: function(l) {
      var u = this.bbox();
      return l == null ? u.height : this.size(u.width, l);
    } }), t.Path = t.invent({ create: "path", inherit: t.Shape, extend: { morphArray: t.PathArray, array: function() {
      return this._array || (this._array = new t.PathArray(this.attr("d")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("d", typeof l == "string" ? l : this._array = new t.PathArray(l));
    }, clear: function() {
      return delete this._array, this;
    } }, construct: { path: function(l) {
      return this.put(new t.Path()).plot(l || new t.PathArray());
    } } }), t.Image = t.invent({ create: "image", inherit: t.Shape, extend: { load: function(l) {
      if (!l)
        return this;
      var u = this, x = new y.Image();
      return t.on(x, "load", function() {
        t.off(x);
        var v = u.parent(t.Pattern);
        v !== null && (u.width() == 0 && u.height() == 0 && u.size(x.width, x.height), v && v.width() == 0 && v.height() == 0 && v.size(u.width(), u.height()), typeof u._loaded == "function" && u._loaded.call(u, { width: x.width, height: x.height, ratio: x.width / x.height, url: l }));
      }), t.on(x, "error", function(v) {
        t.off(x), typeof u._error == "function" && u._error.call(u, v);
      }), this.attr("href", x.src = this.src = l, t.xlink);
    }, loaded: function(l) {
      return this._loaded = l, this;
    }, error: function(l) {
      return this._error = l, this;
    } }, construct: { image: function(l, u, x) {
      return this.put(new t.Image()).load(l).size(u || 0, x || u || 0);
    } } }), t.Text = t.invent({ create: function() {
      this.constructor.call(this, t.create("text")), this.dom.leading = new t.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", t.defaults.attrs["font-family"]);
    }, inherit: t.Shape, extend: { x: function(l) {
      return l == null ? this.attr("x") : this.attr("x", l);
    }, text: function(l) {
      if (l === void 0) {
        l = "";
        for (var u = this.node.childNodes, x = 0, v = u.length; x < v; ++x)
          x != 0 && u[x].nodeType != 3 && t.adopt(u[x]).dom.newLined == 1 && (l += `
`), l += u[x].textContent;
        return l;
      }
      if (this.clear().build(!0), typeof l == "function")
        l.call(this, this);
      else {
        x = 0;
        for (var k = (l = l.split(`
`)).length; x < k; x++)
          this.tspan(l[x]).newLine();
      }
      return this.build(!1).rebuild();
    }, size: function(l) {
      return this.attr("font-size", l).rebuild();
    }, leading: function(l) {
      return l == null ? this.dom.leading : (this.dom.leading = new t.Number(l), this.rebuild());
    }, lines: function() {
      var l = (this.textPath && this.textPath() || this).node, u = t.utils.map(t.utils.filterSVGElements(l.childNodes), function(x) {
        return t.adopt(x);
      });
      return new t.Set(u);
    }, rebuild: function(l) {
      if (typeof l == "boolean" && (this._rebuild = l), this._rebuild) {
        var u = this, x = 0, v = this.dom.leading * new t.Number(this.attr("font-size"));
        this.lines().each(function() {
          this.dom.newLined && (u.textPath() || this.attr("x", u.attr("x")), this.text() == `
` ? x += v : (this.attr("dy", v + x), x = 0));
        }), this.fire("rebuild");
      }
      return this;
    }, build: function(l) {
      return this._build = !!l, this;
    }, setData: function(l) {
      return this.dom = l, this.dom.leading = new t.Number(l.leading || 1.3), this;
    } }, construct: { text: function(l) {
      return this.put(new t.Text()).text(l);
    }, plain: function(l) {
      return this.put(new t.Text()).plain(l);
    } } }), t.Tspan = t.invent({ create: "tspan", inherit: t.Shape, extend: { text: function(l) {
      return l == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof l == "function" ? l.call(this, this) : this.plain(l), this);
    }, dx: function(l) {
      return this.attr("dx", l);
    }, dy: function(l) {
      return this.attr("dy", l);
    }, newLine: function() {
      var l = this.parent(t.Text);
      return this.dom.newLined = !0, this.dy(l.dom.leading * l.attr("font-size")).attr("x", l.x());
    } } }), t.extend(t.Text, t.Tspan, { plain: function(l) {
      return this._build === !1 && this.clear(), this.node.appendChild(e.createTextNode(l)), this;
    }, tspan: function(l) {
      var u = (this.textPath && this.textPath() || this).node, x = new t.Tspan();
      return this._build === !1 && this.clear(), u.appendChild(x.node), x.text(l);
    }, clear: function() {
      for (var l = (this.textPath && this.textPath() || this).node; l.hasChildNodes(); )
        l.removeChild(l.lastChild);
      return this;
    }, length: function() {
      return this.node.getComputedTextLength();
    } }), t.TextPath = t.invent({ create: "textPath", inherit: t.Parent, parent: t.Text, construct: { morphArray: t.PathArray, array: function() {
      var l = this.track();
      return l ? l.array() : null;
    }, plot: function(l) {
      var u = this.track(), x = null;
      return u && (x = u.plot(l)), l == null ? x : this;
    }, track: function() {
      var l = this.textPath();
      if (l)
        return l.reference("href");
    }, textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == "textPath")
        return t.adopt(this.node.firstChild);
    } } }), t.Nested = t.invent({ create: function() {
      this.constructor.call(this, t.create("svg")), this.style("overflow", "visible");
    }, inherit: t.Container, construct: { nested: function() {
      return this.put(new t.Nested());
    } } });
    var n = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(l, u) {
      return u == "color" ? l : l + "-" + u;
    } };
    function o(l, u, x, v) {
      return x + v.replace(t.regex.dots, " .");
    }
    function h(l) {
      return l.toLowerCase().replace(/-(.)/g, function(u, x) {
        return x.toUpperCase();
      });
    }
    function c(l) {
      return l.charAt(0).toUpperCase() + l.slice(1);
    }
    function d(l) {
      var u = l.toString(16);
      return u.length == 1 ? "0" + u : u;
    }
    function g(l, u, x) {
      if (u == null || x == null) {
        var v = l.bbox();
        u == null ? u = v.width / v.height * x : x == null && (x = v.height / v.width * u);
      }
      return { width: u, height: x };
    }
    function p(l, u, x) {
      return { x: u * l.a + x * l.c + 0, y: u * l.b + x * l.d + 0 };
    }
    function f(l) {
      return { a: l[0], b: l[1], c: l[2], d: l[3], e: l[4], f: l[5] };
    }
    function b(l) {
      for (var u = l.childNodes.length - 1; u >= 0; u--)
        l.childNodes[u] instanceof y.SVGElement && b(l.childNodes[u]);
      return t.adopt(l).id(t.eid(l.nodeName));
    }
    function m(l) {
      return Math.abs(l) > 1e-37 ? l : 0;
    }
    ["fill", "stroke"].forEach(function(l) {
      var u = {};
      u[l] = function(x) {
        if (x === void 0)
          return this;
        if (typeof x == "string" || t.Color.isRgb(x) || x && typeof x.fill == "function")
          this.attr(l, x);
        else
          for (var v = n[l].length - 1; v >= 0; v--)
            x[n[l][v]] != null && this.attr(n.prefix(l, n[l][v]), x[n[l][v]]);
        return this;
      }, t.extend(t.Element, t.FX, u);
    }), t.extend(t.Element, t.FX, { translate: function(l, u) {
      return this.transform({ x: l, y: u });
    }, matrix: function(l) {
      return this.attr("transform", new t.Matrix(arguments.length == 6 ? [].slice.call(arguments) : l));
    }, opacity: function(l) {
      return this.attr("opacity", l);
    }, dx: function(l) {
      return this.x(new t.Number(l).plus(this instanceof t.FX ? 0 : this.x()), !0);
    }, dy: function(l) {
      return this.y(new t.Number(l).plus(this instanceof t.FX ? 0 : this.y()), !0);
    } }), t.extend(t.Path, { length: function() {
      return this.node.getTotalLength();
    }, pointAt: function(l) {
      return this.node.getPointAtLength(l);
    } }), t.Set = t.invent({ create: function(l) {
      Array.isArray(l) ? this.members = l : this.clear();
    }, extend: { add: function() {
      for (var l = [].slice.call(arguments), u = 0, x = l.length; u < x; u++)
        this.members.push(l[u]);
      return this;
    }, remove: function(l) {
      var u = this.index(l);
      return u > -1 && this.members.splice(u, 1), this;
    }, each: function(l) {
      for (var u = 0, x = this.members.length; u < x; u++)
        l.apply(this.members[u], [u, this.members]);
      return this;
    }, clear: function() {
      return this.members = [], this;
    }, length: function() {
      return this.members.length;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return this.members.indexOf(l);
    }, get: function(l) {
      return this.members[l];
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.members.length - 1);
    }, valueOf: function() {
      return this.members;
    } }, construct: { set: function(l) {
      return new t.Set(l);
    } } }), t.FX.Set = t.invent({ create: function(l) {
      this.set = l;
    } }), t.Set.inherit = function() {
      var l = [];
      for (var u in t.Shape.prototype)
        typeof t.Shape.prototype[u] == "function" && typeof t.Set.prototype[u] != "function" && l.push(u);
      for (var u in l.forEach(function(v) {
        t.Set.prototype[v] = function() {
          for (var k = 0, S = this.members.length; k < S; k++)
            this.members[k] && typeof this.members[k][v] == "function" && this.members[k][v].apply(this.members[k], arguments);
          return v == "animate" ? this.fx || (this.fx = new t.FX.Set(this)) : this;
        };
      }), l = [], t.FX.prototype)
        typeof t.FX.prototype[u] == "function" && typeof t.FX.Set.prototype[u] != "function" && l.push(u);
      l.forEach(function(x) {
        t.FX.Set.prototype[x] = function() {
          for (var v = 0, k = this.set.members.length; v < k; v++)
            this.set.members[v].fx[x].apply(this.set.members[v].fx, arguments);
          return this;
        };
      });
    }, t.extend(t.Element, {}), t.extend(t.Element, { remember: function(l, u) {
      if (U(arguments[0]) === "object")
        for (var x in l)
          this.remember(x, l[x]);
      else {
        if (arguments.length == 1)
          return this.memory()[l];
        this.memory()[l] = u;
      }
      return this;
    }, forget: function() {
      if (arguments.length == 0)
        this._memory = {};
      else
        for (var l = arguments.length - 1; l >= 0; l--)
          delete this.memory()[arguments[l]];
      return this;
    }, memory: function() {
      return this._memory || (this._memory = {});
    } }), t.get = function(l) {
      var u = e.getElementById(function(x) {
        var v = (x || "").toString().match(t.regex.reference);
        if (v)
          return v[1];
      }(l) || l);
      return t.adopt(u);
    }, t.select = function(l, u) {
      return new t.Set(t.utils.map((u || e).querySelectorAll(l), function(x) {
        return t.adopt(x);
      }));
    }, t.extend(t.Parent, { select: function(l) {
      return t.select(l, this.node);
    } });
    var w = "abcdef".split("");
    if (typeof y.CustomEvent != "function") {
      var A = function(l, u) {
        u = u || { bubbles: !1, cancelable: !1, detail: void 0 };
        var x = e.createEvent("CustomEvent");
        return x.initCustomEvent(l, u.bubbles, u.cancelable, u.detail), x;
      };
      A.prototype = y.Event.prototype, t.CustomEvent = A;
    } else
      t.CustomEvent = y.CustomEvent;
    return t;
  }, U(Re) === "object" ? _.exports = be.document ? Fe(be, be.document) : function(y) {
    return Fe(y, y.document);
  } : be.SVG = Fe(be, be.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
  (function() {
    SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(r, n) {
      return this.add(r, n), !r.attr("in") && this.autoSetIn && r.attr("in", this.source), r.attr("result") || r.attr("result", r), r;
    }, blend: function(r, n, o) {
      return this.put(new SVG.BlendEffect(r, n, o));
    }, colorMatrix: function(r, n) {
      return this.put(new SVG.ColorMatrixEffect(r, n));
    }, convolveMatrix: function(r) {
      return this.put(new SVG.ConvolveMatrixEffect(r));
    }, componentTransfer: function(r) {
      return this.put(new SVG.ComponentTransferEffect(r));
    }, composite: function(r, n, o) {
      return this.put(new SVG.CompositeEffect(r, n, o));
    }, flood: function(r, n) {
      return this.put(new SVG.FloodEffect(r, n));
    }, offset: function(r, n) {
      return this.put(new SVG.OffsetEffect(r, n));
    }, image: function(r) {
      return this.put(new SVG.ImageEffect(r));
    }, merge: function() {
      var r = [void 0];
      for (var n in arguments)
        r.push(arguments[n]);
      return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, r))());
    }, gaussianBlur: function(r, n) {
      return this.put(new SVG.GaussianBlurEffect(r, n));
    }, morphology: function(r, n) {
      return this.put(new SVG.MorphologyEffect(r, n));
    }, diffuseLighting: function(r, n, o) {
      return this.put(new SVG.DiffuseLightingEffect(r, n, o));
    }, displacementMap: function(r, n, o, h, c) {
      return this.put(new SVG.DisplacementMapEffect(r, n, o, h, c));
    }, specularLighting: function(r, n, o, h) {
      return this.put(new SVG.SpecularLightingEffect(r, n, o, h));
    }, tile: function() {
      return this.put(new SVG.TileEffect());
    }, turbulence: function(r, n, o, h, c) {
      return this.put(new SVG.TurbulenceEffect(r, n, o, h, c));
    }, toString: function() {
      return "url(#" + this.attr("id") + ")";
    } } }), SVG.extend(SVG.Defs, { filter: function(r) {
      var n = this.put(new SVG.Filter());
      return typeof r == "function" && r.call(n, n), n;
    } }), SVG.extend(SVG.Container, { filter: function(r) {
      return this.defs().filter(r);
    } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(r) {
      return this.filterer = r instanceof SVG.Element ? r : this.doc().filter(r), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
    }, unfilter: function(r) {
      return this.filterer && r === !0 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
    } }), SVG.Effect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", r);
    }, result: function(r) {
      return r == null ? this.attr("result") : this.attr("result", r);
    }, toString: function() {
      return this.result();
    } } }), SVG.ParentEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Parent, extend: { in: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", r);
    }, result: function(r) {
      return r == null ? this.attr("result") : this.attr("result", r);
    }, toString: function() {
      return this.result();
    } } });
    var y = { blend: function(r, n) {
      return this.parent() && this.parent().blend(this, r, n);
    }, colorMatrix: function(r, n) {
      return this.parent() && this.parent().colorMatrix(r, n).in(this);
    }, convolveMatrix: function(r) {
      return this.parent() && this.parent().convolveMatrix(r).in(this);
    }, componentTransfer: function(r) {
      return this.parent() && this.parent().componentTransfer(r).in(this);
    }, composite: function(r, n) {
      return this.parent() && this.parent().composite(this, r, n);
    }, flood: function(r, n) {
      return this.parent() && this.parent().flood(r, n);
    }, offset: function(r, n) {
      return this.parent() && this.parent().offset(r, n).in(this);
    }, image: function(r) {
      return this.parent() && this.parent().image(r);
    }, merge: function() {
      return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
    }, gaussianBlur: function(r, n) {
      return this.parent() && this.parent().gaussianBlur(r, n).in(this);
    }, morphology: function(r, n) {
      return this.parent() && this.parent().morphology(r, n).in(this);
    }, diffuseLighting: function(r, n, o) {
      return this.parent() && this.parent().diffuseLighting(r, n, o).in(this);
    }, displacementMap: function(r, n, o, h) {
      return this.parent() && this.parent().displacementMap(this, r, n, o, h);
    }, specularLighting: function(r, n, o, h) {
      return this.parent() && this.parent().specularLighting(r, n, o, h).in(this);
    }, tile: function() {
      return this.parent() && this.parent().tile().in(this);
    }, turbulence: function(r, n, o, h, c) {
      return this.parent() && this.parent().turbulence(r, n, o, h, c).in(this);
    } };
    SVG.extend(SVG.Effect, y), SVG.extend(SVG.ParentEffect, y), SVG.ChildEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(r) {
      this.attr("in", r);
    } } });
    var e = { blend: function(r, n, o) {
      this.attr({ in: r, in2: n, mode: o || "normal" });
    }, colorMatrix: function(r, n) {
      r == "matrix" && (n = a(n)), this.attr({ type: r, values: n === void 0 ? null : n });
    }, convolveMatrix: function(r) {
      r = a(r), this.attr({ order: Math.sqrt(r.split(" ").length), kernelMatrix: r });
    }, composite: function(r, n, o) {
      this.attr({ in: r, in2: n, operator: o });
    }, flood: function(r, n) {
      this.attr("flood-color", r), n != null && this.attr("flood-opacity", n);
    }, offset: function(r, n) {
      this.attr({ dx: r, dy: n });
    }, image: function(r) {
      this.attr("href", r, SVG.xlink);
    }, displacementMap: function(r, n, o, h, c) {
      this.attr({ in: r, in2: n, scale: o, xChannelSelector: h, yChannelSelector: c });
    }, gaussianBlur: function(r, n) {
      r != null || n != null ? this.attr("stdDeviation", function(o) {
        if (!Array.isArray(o))
          return o;
        for (var h = 0, c = o.length, d = []; h < c; h++)
          d.push(o[h]);
        return d.join(" ");
      }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
    }, morphology: function(r, n) {
      this.attr({ operator: r, radius: n });
    }, tile: function() {
    }, turbulence: function(r, n, o, h, c) {
      this.attr({ numOctaves: n, seed: o, stitchTiles: h, baseFrequency: r, type: c });
    } }, t = { merge: function() {
      var r;
      if (arguments[0] instanceof SVG.Set) {
        var n = this;
        arguments[0].each(function(h) {
          this instanceof SVG.MergeNode ? n.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && n.put(new SVG.MergeNode(this));
        });
      } else {
        r = Array.isArray(arguments[0]) ? arguments[0] : arguments;
        for (var o = 0; o < r.length; o++)
          r[o] instanceof SVG.MergeNode ? this.put(r[o]) : this.put(new SVG.MergeNode(r[o]));
      }
    }, componentTransfer: function(r) {
      if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach((function(o) {
        this[o] = new SVG["Func" + o.toUpperCase()]("identity"), this.rgb.add(this[o]), this.node.appendChild(this[o].node);
      }).bind(this)), r)
        for (var n in r.rgb && (["r", "g", "b"].forEach((function(o) {
          this[o].attr(r.rgb);
        }).bind(this)), delete r.rgb), r)
          this[n].attr(r[n]);
    }, diffuseLighting: function(r, n, o) {
      this.attr({ surfaceScale: r, diffuseConstant: n, kernelUnitLength: o });
    }, specularLighting: function(r, n, o, h) {
      this.attr({ surfaceScale: r, diffuseConstant: n, specularExponent: o, kernelUnitLength: h });
    } }, i = { distantLight: function(r, n) {
      this.attr({ azimuth: r, elevation: n });
    }, pointLight: function(r, n, o) {
      this.attr({ x: r, y: n, z: o });
    }, spotLight: function(r, n, o, h, c, d) {
      this.attr({ x: r, y: n, z: o, pointsAtX: h, pointsAtY: c, pointsAtZ: d });
    }, mergeNode: function(r) {
      this.attr("in", r);
    } };
    function a(r) {
      return Array.isArray(r) && (r = new SVG.Array(r)), r.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function s() {
      var r = function() {
      };
      for (var n in typeof arguments[arguments.length - 1] == "function" && (r = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
        for (var o in arguments[n])
          r(arguments[n][o], o, arguments[n]);
    }
    ["r", "g", "b", "a"].forEach(function(r) {
      i["Func" + r.toUpperCase()] = function(n) {
        switch (this.attr("type", n), n) {
          case "table":
            this.attr("tableValues", arguments[1]);
            break;
          case "linear":
            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
            break;
          case "gamma":
            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
        }
      };
    }), s(e, function(r, n) {
      var o = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[o + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + o)), r.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.Effect, extend: {} });
    }), s(t, function(r, n) {
      var o = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[o + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + o)), r.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.ParentEffect, extend: {} });
    }), s(i, function(r, n) {
      var o = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[o] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + o)), r.apply(this, arguments);
      }, inherit: SVG.ChildEffect, extend: {} });
    }), SVG.extend(SVG.MergeEffect, { in: function(r) {
      return r instanceof SVG.MergeNode ? this.add(r, 0) : this.add(new SVG.MergeNode(r), 0), this;
    } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", r);
    } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  }).call(void 0), function() {
    function y(s, r, n, o, h, c, d) {
      for (var g = s.slice(r, n || d), p = o.slice(h, c || d), f = 0, b = { pos: [0, 0], start: [0, 0] }, m = { pos: [0, 0], start: [0, 0] }; g[f] = e.call(b, g[f]), p[f] = e.call(m, p[f]), g[f][0] != p[f][0] || g[f][0] == "M" || g[f][0] == "A" && (g[f][4] != p[f][4] || g[f][5] != p[f][5]) ? (Array.prototype.splice.apply(g, [f, 1].concat(i.call(b, g[f]))), Array.prototype.splice.apply(p, [f, 1].concat(i.call(m, p[f])))) : (g[f] = t.call(b, g[f]), p[f] = t.call(m, p[f])), !(++f == g.length && f == p.length); )
        f == g.length && g.push(["C", b.pos[0], b.pos[1], b.pos[0], b.pos[1], b.pos[0], b.pos[1]]), f == p.length && p.push(["C", m.pos[0], m.pos[1], m.pos[0], m.pos[1], m.pos[0], m.pos[1]]);
      return { start: g, dest: p };
    }
    function e(s) {
      switch (s[0]) {
        case "z":
        case "Z":
          s[0] = "L", s[1] = this.start[0], s[2] = this.start[1];
          break;
        case "H":
          s[0] = "L", s[2] = this.pos[1];
          break;
        case "V":
          s[0] = "L", s[2] = s[1], s[1] = this.pos[0];
          break;
        case "T":
          s[0] = "Q", s[3] = s[1], s[4] = s[2], s[1] = this.reflection[1], s[2] = this.reflection[0];
          break;
        case "S":
          s[0] = "C", s[6] = s[4], s[5] = s[3], s[4] = s[2], s[3] = s[1], s[2] = this.reflection[1], s[1] = this.reflection[0];
      }
      return s;
    }
    function t(s) {
      var r = s.length;
      return this.pos = [s[r - 2], s[r - 1]], "SCQT".indexOf(s[0]) != -1 && (this.reflection = [2 * this.pos[0] - s[r - 4], 2 * this.pos[1] - s[r - 3]]), s;
    }
    function i(s) {
      var r = [s];
      switch (s[0]) {
        case "M":
          return this.pos = this.start = [s[1], s[2]], r;
        case "L":
          s[5] = s[3] = s[1], s[6] = s[4] = s[2], s[1] = this.pos[0], s[2] = this.pos[1];
          break;
        case "Q":
          s[6] = s[4], s[5] = s[3], s[4] = 1 * s[4] / 3 + 2 * s[2] / 3, s[3] = 1 * s[3] / 3 + 2 * s[1] / 3, s[2] = 1 * this.pos[1] / 3 + 2 * s[2] / 3, s[1] = 1 * this.pos[0] / 3 + 2 * s[1] / 3;
          break;
        case "A":
          r = function(n, o) {
            var h, c, d, g, p, f, b, m, w, A, l, u, x, v, k, S, C, L, I, z, T, E, R, O, D, W, N = Math.abs(o[1]), V = Math.abs(o[2]), j = o[3] % 360, se = o[4], K = o[5], le = o[6], he = o[7], $ = new SVG.Point(n), Q = new SVG.Point(le, he), dt = [];
            if (N === 0 || V === 0 || $.x === Q.x && $.y === Q.y)
              return [["C", $.x, $.y, Q.x, Q.y, Q.x, Q.y]];
            for (h = new SVG.Point(($.x - Q.x) / 2, ($.y - Q.y) / 2).transform(new SVG.Matrix().rotate(j)), (c = h.x * h.x / (N * N) + h.y * h.y / (V * V)) > 1 && (N *= c = Math.sqrt(c), V *= c), d = new SVG.Matrix().rotate(j).scale(1 / N, 1 / V).rotate(-j), $ = $.transform(d), Q = Q.transform(d), g = [Q.x - $.x, Q.y - $.y], f = g[0] * g[0] + g[1] * g[1], p = Math.sqrt(f), g[0] /= p, g[1] /= p, b = f < 4 ? Math.sqrt(1 - f / 4) : 0, se === K && (b *= -1), m = new SVG.Point((Q.x + $.x) / 2 + b * -g[1], (Q.y + $.y) / 2 + b * g[0]), w = new SVG.Point($.x - m.x, $.y - m.y), A = new SVG.Point(Q.x - m.x, Q.y - m.y), l = Math.acos(w.x / Math.sqrt(w.x * w.x + w.y * w.y)), w.y < 0 && (l *= -1), u = Math.acos(A.x / Math.sqrt(A.x * A.x + A.y * A.y)), A.y < 0 && (u *= -1), K && l > u && (u += 2 * Math.PI), !K && l < u && (u -= 2 * Math.PI), v = Math.ceil(2 * Math.abs(l - u) / Math.PI), S = [], C = l, x = (u - l) / v, k = 4 * Math.tan(x / 4) / 3, T = 0; T <= v; T++)
              I = Math.cos(C), L = Math.sin(C), z = new SVG.Point(m.x + I, m.y + L), S[T] = [new SVG.Point(z.x + k * L, z.y - k * I), z, new SVG.Point(z.x - k * L, z.y + k * I)], C += x;
            for (S[0][0] = S[0][1].clone(), S[S.length - 1][2] = S[S.length - 1][1].clone(), d = new SVG.Matrix().rotate(j).scale(N, V).rotate(-j), T = 0, E = S.length; T < E; T++)
              S[T][0] = S[T][0].transform(d), S[T][1] = S[T][1].transform(d), S[T][2] = S[T][2].transform(d);
            for (T = 1, E = S.length; T < E; T++)
              R = (z = S[T - 1][2]).x, O = z.y, D = (z = S[T][0]).x, W = z.y, le = (z = S[T][1]).x, he = z.y, dt.push(["C", R, O, D, W, le, he]);
            return dt;
          }(this.pos, s), s = r[0];
      }
      return s[0] = "C", this.pos = [s[5], s[6]], this.reflection = [2 * s[5] - s[3], 2 * s[6] - s[4]], r;
    }
    function a(s, r) {
      if (r === !1)
        return !1;
      for (var n = r, o = s.length; n < o; ++n)
        if (s[n][0] == "M")
          return n;
      return !1;
    }
    SVG.extend(SVG.PathArray, { morph: function(s) {
      for (var r = this.value, n = this.parse(s), o = 0, h = 0, c = !1, d = !1; o !== !1 || h !== !1; ) {
        var g;
        c = a(r, o !== !1 && o + 1), d = a(n, h !== !1 && h + 1), o === !1 && (o = (g = new SVG.PathArray(p.start).bbox()).height == 0 || g.width == 0 ? r.push(r[0]) - 1 : r.push(["M", g.x + g.width / 2, g.y + g.height / 2]) - 1), h === !1 && (h = (g = new SVG.PathArray(p.dest).bbox()).height == 0 || g.width == 0 ? n.push(n[0]) - 1 : n.push(["M", g.x + g.width / 2, g.y + g.height / 2]) - 1);
        var p = y(r, o, c, n, h, d);
        r = r.slice(0, o).concat(p.start, c === !1 ? [] : r.slice(c)), n = n.slice(0, h).concat(p.dest, d === !1 ? [] : n.slice(d)), o = c !== !1 && o + p.start.length, h = d !== !1 && h + p.dest.length;
      }
      return this.value = r, this.destination = new SVG.PathArray(), this.destination.value = n, this;
    } });
  }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
  (function() {
    function y(e) {
      e.remember("_draggable", this), this.el = e;
    }
    y.prototype.init = function(e, t) {
      var i = this;
      this.constraint = e, this.value = t, this.el.on("mousedown.drag", function(a) {
        i.start(a);
      }), this.el.on("touchstart.drag", function(a) {
        i.start(a);
      });
    }, y.prototype.transformPoint = function(e, t) {
      var i = (e = e || window.event).changedTouches && e.changedTouches[0] || e;
      return this.p.x = i.clientX - (t || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m);
    }, y.prototype.getBBox = function() {
      var e = this.el.bbox();
      return this.el instanceof SVG.Nested && (e = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (e.x = this.el.x(), e.y = this.el.y()), e;
    }, y.prototype.start = function(e) {
      if (e.type != "click" && e.type != "mousedown" && e.type != "mousemove" || (e.which || e.buttons) == 1) {
        var t = this;
        if (this.el.fire("beforedrag", { event: e, handler: this }), !this.el.event().defaultPrevented) {
          e.preventDefault(), e.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
          var i, a = this.getBBox();
          if (this.el instanceof SVG.Text)
            switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
              case "middle":
                i /= 2;
                break;
              case "start":
                i = 0;
            }
          this.startPoints = { point: this.transformPoint(e, i), box: a, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(s) {
            t.drag(s);
          }), SVG.on(window, "touchmove.drag", function(s) {
            t.drag(s);
          }), SVG.on(window, "mouseup.drag", function(s) {
            t.end(s);
          }), SVG.on(window, "touchend.drag", function(s) {
            t.end(s);
          }), this.el.fire("dragstart", { event: e, p: this.startPoints.point, m: this.m, handler: this });
        }
      }
    }, y.prototype.drag = function(e) {
      var t = this.getBBox(), i = this.transformPoint(e), a = this.startPoints.box.x + i.x - this.startPoints.point.x, s = this.startPoints.box.y + i.y - this.startPoints.point.y, r = this.constraint, n = i.x - this.startPoints.point.x, o = i.y - this.startPoints.point.y;
      if (this.el.fire("dragmove", { event: e, p: i, m: this.m, handler: this }), this.el.event().defaultPrevented)
        return i;
      if (typeof r == "function") {
        var h = r.call(this.el, a, s, this.m);
        typeof h == "boolean" && (h = { x: h, y: h }), h.x === !0 ? this.el.x(a) : h.x !== !1 && this.el.x(h.x), h.y === !0 ? this.el.y(s) : h.y !== !1 && this.el.y(h.y);
      } else
        typeof r == "object" && (r.minX != null && a < r.minX ? n = (a = r.minX) - this.startPoints.box.x : r.maxX != null && a > r.maxX - t.width && (n = (a = r.maxX - t.width) - this.startPoints.box.x), r.minY != null && s < r.minY ? o = (s = r.minY) - this.startPoints.box.y : r.maxY != null && s > r.maxY - t.height && (o = (s = r.maxY - t.height) - this.startPoints.box.y), r.snapToGrid != null && (a -= a % r.snapToGrid, s -= s % r.snapToGrid, n -= n % r.snapToGrid, o -= o % r.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: n, y: o }, !0) : this.el.move(a, s));
      return i;
    }, y.prototype.end = function(e) {
      var t = this.drag(e);
      this.el.fire("dragend", { event: e, p: t, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, { draggable: function(e, t) {
      typeof e != "function" && typeof e != "object" || (t = e, e = !0);
      var i = this.remember("_draggable") || new y(this);
      return (e = e === void 0 || e) ? i.init(t || {}, e) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
    } });
  }).call(void 0), function() {
    function y(e) {
      this.el = e, e.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(t, i, a) {
        var s = typeof t != "string" ? t : i[t];
        return a ? s / 2 : s;
      }, this.pointCoords = function(t, i) {
        var a = this.pointsList[t];
        return { x: this.pointCoord(a[0], i, t === "t" || t === "b"), y: this.pointCoord(a[1], i, t === "r" || t === "l") };
      };
    }
    y.prototype.init = function(e, t) {
      var i = this.el.bbox();
      this.options = {};
      var a = this.el.selectize.defaults.points;
      for (var s in this.el.selectize.defaults)
        this.options[s] = this.el.selectize.defaults[s], t[s] !== void 0 && (this.options[s] = t[s]);
      var r = ["points", "pointsExclude"];
      for (var s in r) {
        var n = this.options[r[s]];
        typeof n == "string" ? n = n.length > 0 ? n.split(/\s*,\s*/i) : [] : typeof n == "boolean" && r[s] === "points" && (n = n ? a : []), this.options[r[s]] = n;
      }
      this.options.points = [a, this.options.points].reduce(function(o, h) {
        return o.filter(function(c) {
          return h.indexOf(c) > -1;
        });
      }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(o, h) {
        return o.filter(function(c) {
          return h.indexOf(c) < 0;
        });
      }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && ["line", "polyline", "polygon"].indexOf(this.el.type) !== -1 ? this.selectPoints(e) : this.selectRect(e), this.observe(), this.cleanup();
    }, y.prototype.selectPoints = function(e) {
      return this.pointSelection.isSelected = e, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, y.prototype.getPointArray = function() {
      var e = this.el.bbox();
      return this.el.array().valueOf().map(function(t) {
        return [t[0] - e.x, t[1] - e.y];
      });
    }, y.prototype.drawPoints = function() {
      for (var e = this, t = this.getPointArray(), i = 0, a = t.length; i < a; ++i) {
        var s = function(n) {
          return function(o) {
            (o = o || window.event).preventDefault ? o.preventDefault() : o.returnValue = !1, o.stopPropagation();
            var h = o.pageX || o.touches[0].pageX, c = o.pageY || o.touches[0].pageY;
            e.el.fire("point", { x: h, y: c, i: n, event: o });
          };
        }(i), r = this.drawPoint(t[i][0], t[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s);
        this.pointSelection.set.add(r);
      }
    }, y.prototype.drawPoint = function(e, t) {
      var i = this.options.pointType;
      switch (i) {
        case "circle":
          return this.drawCircle(e, t);
        case "rect":
          return this.drawRect(e, t);
        default:
          if (typeof i == "function")
            return i.call(this, e, t);
          throw new Error("Unknown " + i + " point type!");
      }
    }, y.prototype.drawCircle = function(e, t) {
      return this.nested.circle(this.options.pointSize).center(e, t);
    }, y.prototype.drawRect = function(e, t) {
      return this.nested.rect(this.options.pointSize, this.options.pointSize).center(e, t);
    }, y.prototype.updatePointSelection = function() {
      var e = this.getPointArray();
      this.pointSelection.set.each(function(t) {
        this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1]);
      });
    }, y.prototype.updateRectSelection = function() {
      var e = this, t = this.el.bbox();
      if (this.rectSelection.set.get(0).attr({ width: t.width, height: t.height }), this.options.points.length && this.options.points.map(function(a, s) {
        var r = e.pointCoords(a, t);
        e.rectSelection.set.get(s + 1).center(r.x, r.y);
      }), this.options.rotationPoint) {
        var i = this.rectSelection.set.length();
        this.rectSelection.set.get(i - 1).center(t.width / 2, 20);
      }
    }, y.prototype.selectRect = function(e) {
      var t = this, i = this.el.bbox();
      function a(n) {
        return function(o) {
          (o = o || window.event).preventDefault ? o.preventDefault() : o.returnValue = !1, o.stopPropagation();
          var h = o.pageX || o.touches[0].pageX, c = o.pageY || o.touches[0].pageY;
          t.el.fire(n, { x: h, y: c, event: o });
        };
      }
      if (this.rectSelection.isSelected = e, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(n, o) {
        var h = t.pointCoords(n, i), c = t.drawPoint(h.x, h.y).attr("class", t.options.classPoints + "_" + n).on("mousedown", a(n)).on("touchstart", a(n));
        t.rectSelection.set.add(c);
      }), this.rectSelection.set.each(function() {
        this.addClass(t.options.classPoints);
      })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
        var s = function(n) {
          (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
          var o = n.pageX || n.touches[0].pageX, h = n.pageY || n.touches[0].pageY;
          t.el.fire("rot", { x: o, y: h, event: n });
        }, r = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s).on("mousedown", s);
        this.rectSelection.set.add(r);
      }
    }, y.prototype.handler = function() {
      var e = this.el.bbox();
      this.nested.matrix(new SVG.Matrix(this.el).translate(e.x, e.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, y.prototype.observe = function() {
      var e = this;
      if (MutationObserver)
        if (this.rectSelection.isSelected || this.pointSelection.isSelected)
          this.observerInst = this.observerInst || new MutationObserver(function() {
            e.handler();
          }), this.observerInst.observe(this.el.node, { attributes: !0 });
        else
          try {
            this.observerInst.disconnect(), delete this.observerInst;
          } catch {
          }
      else
        this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
          e.handler();
        });
    }, y.prototype.cleanup = function() {
      !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
        this.remove();
      }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
        this.remove();
      }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, { selectize: function(e, t) {
      return typeof e == "object" && (t = e, e = !0), (this.remember("_selectHandler") || new y(this)).init(e === void 0 || e, t || {}), this;
    } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" };
  }(), function() {
    (function() {
      function y(e) {
        e.remember("_resizeHandler", this), this.el = e, this.parameters = {}, this.lastUpdateCall = null, this.p = e.doc().node.createSVGPoint();
      }
      y.prototype.transformPoint = function(e, t, i) {
        return this.p.x = e - (this.offset.x - window.pageXOffset), this.p.y = t - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m);
      }, y.prototype._extractPosition = function(e) {
        return { x: e.clientX != null ? e.clientX : e.touches[0].clientX, y: e.clientY != null ? e.clientY : e.touches[0].clientY };
      }, y.prototype.init = function(e) {
        var t = this;
        if (this.stop(), e !== "stop") {
          for (var i in this.options = {}, this.el.resize.defaults)
            this.options[i] = this.el.resize.defaults[i], e[i] !== void 0 && (this.options[i] = e[i]);
          this.el.on("lt.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("rt.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("rb.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("lb.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("t.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("r.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("b.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("l.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("rot.resize", function(a) {
            t.resize(a || window.event);
          }), this.el.on("point.resize", function(a) {
            t.resize(a || window.event);
          }), this.update();
        }
      }, y.prototype.stop = function() {
        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
      }, y.prototype.resize = function(e) {
        var t = this;
        this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
        var i = this._extractPosition(e.detail.event);
        if (this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: e.detail.x, y: e.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, this.el.type === "text" && (this.parameters.fontSize = this.el.attr()["font-size"]), e.detail.i !== void 0) {
          var a = this.el.array().valueOf();
          this.parameters.i = e.detail.i, this.parameters.pointCoords = [a[e.detail.i][0], a[e.detail.i][1]];
        }
        switch (e.type) {
          case "lt":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r);
              if (this.parameters.box.width - n[0] > 0 && this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - n[0]);
                n = this.checkAspectRatio(n), this.el.move(this.parameters.box.x + n[0], this.parameters.box.y + n[1]).size(this.parameters.box.width - n[0], this.parameters.box.height - n[1]);
              }
            };
            break;
          case "rt":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 2);
              if (this.parameters.box.width + n[0] > 0 && this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + n[0]);
                n = this.checkAspectRatio(n, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + n[1]).size(this.parameters.box.width + n[0], this.parameters.box.height - n[1]);
              }
            };
            break;
          case "rb":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 0);
              if (this.parameters.box.width + n[0] > 0 && this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + n[0]);
                n = this.checkAspectRatio(n), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + n[0], this.parameters.box.height + n[1]);
              }
            };
            break;
          case "lb":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 1);
              if (this.parameters.box.width - n[0] > 0 && this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - n[0]);
                n = this.checkAspectRatio(n, !0), this.el.move(this.parameters.box.x + n[0], this.parameters.box.y).size(this.parameters.box.width - n[0], this.parameters.box.height + n[1]);
              }
            };
            break;
          case "t":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 2);
              if (this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y + n[1]).height(this.parameters.box.height - n[1]);
              }
            };
            break;
          case "r":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 0);
              if (this.parameters.box.width + n[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + n[0]);
              }
            };
            break;
          case "b":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 0);
              if (this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + n[1]);
              }
            };
            break;
          case "l":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, 1);
              if (this.parameters.box.width - n[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x + n[0], this.parameters.box.y).width(this.parameters.box.width - n[0]);
              }
            };
            break;
          case "rot":
            this.calc = function(s, r) {
              var n = s + this.parameters.p.x, o = r + this.parameters.p.y, h = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), c = Math.atan2(o - this.parameters.box.y - this.parameters.box.height / 2, n - this.parameters.box.x - this.parameters.box.width / 2), d = this.parameters.rotation + 180 * (c - h) / Math.PI + this.options.snapToAngle / 2;
              this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(d - d % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
            };
            break;
          case "point":
            this.calc = function(s, r) {
              var n = this.snapToGrid(s, r, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), o = this.el.array().valueOf();
              o[this.parameters.i][0] = this.parameters.pointCoords[0] + n[0], o[this.parameters.i][1] = this.parameters.pointCoords[1] + n[1], this.el.plot(o);
            };
        }
        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: e }), SVG.on(window, "touchmove.resize", function(s) {
          t.update(s || window.event);
        }), SVG.on(window, "touchend.resize", function() {
          t.done();
        }), SVG.on(window, "mousemove.resize", function(s) {
          t.update(s || window.event);
        }), SVG.on(window, "mouseup.resize", function() {
          t.done();
        });
      }, y.prototype.update = function(e) {
        if (e) {
          var t = this._extractPosition(e), i = this.transformPoint(t.x, t.y), a = i.x - this.parameters.p.x, s = i.y - this.parameters.p.y;
          this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", { dx: a, dy: s, event: e });
        } else
          this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
      }, y.prototype.done = function() {
        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
      }, y.prototype.snapToGrid = function(e, t, i, a) {
        var s;
        return a !== void 0 ? s = [(i + e) % this.options.snapToGrid, (a + t) % this.options.snapToGrid] : (i = i ?? 3, s = [(this.parameters.box.x + e + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + t + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), e < 0 && (s[0] -= this.options.snapToGrid), t < 0 && (s[1] -= this.options.snapToGrid), e -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), t -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(e, t, i, a);
      }, y.prototype.constraintToBox = function(e, t, i, a) {
        var s, r, n = this.options.constraint || {};
        return a !== void 0 ? (s = i, r = a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), r = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), n.minX !== void 0 && s + e < n.minX && (e = n.minX - s), n.maxX !== void 0 && s + e > n.maxX && (e = n.maxX - s), n.minY !== void 0 && r + t < n.minY && (t = n.minY - r), n.maxY !== void 0 && r + t > n.maxY && (t = n.maxY - r), [e, t];
      }, y.prototype.checkAspectRatio = function(e, t) {
        if (!this.options.saveAspectRatio)
          return e;
        var i = e.slice(), a = this.parameters.box.width / this.parameters.box.height, s = this.parameters.box.width + e[0], r = this.parameters.box.height - e[1], n = s / r;
        return n < a ? (i[1] = s / a - this.parameters.box.height, t && (i[1] = -i[1])) : n > a && (i[0] = this.parameters.box.width - r * a, t && (i[0] = -i[0])), i;
      }, SVG.extend(SVG.Element, { resize: function(e) {
        return (this.remember("_resizeHandler") || new y(this)).init(e || {}), this;
      } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 };
    }).call(this);
  }(), window.Apex === void 0 && (window.Apex = {});
  var ht = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new de(this.ctx), this.ctx.axes = new mt(this.ctx), this.ctx.core = new Gt(this.ctx.el, this.ctx), this.ctx.config = new Le({}), this.ctx.data = new Je(this.ctx), this.ctx.grid = new Qe(this.ctx), this.ctx.graphics = new M(this.ctx), this.ctx.coreUtils = new q(this.ctx), this.ctx.crosshairs = new We(this.ctx), this.ctx.events = new xt(this.ctx), this.ctx.exports = new Ee(this.ctx), this.ctx.localization = new bt(this.ctx), this.ctx.options = new G(), this.ctx.responsive = new vt(this.ctx), this.ctx.series = new te(this.ctx), this.ctx.theme = new yt(this.ctx), this.ctx.formatters = new re(this.ctx), this.ctx.titleSubtitle = new wt(this.ctx), this.ctx.legend = new Ke(this.ctx), this.ctx.toolbar = new et(this.ctx), this.ctx.tooltip = new at(this.ctx), this.ctx.dimensions = new Ye(this.ctx), this.ctx.updateHelpers = new Vt(this.ctx), this.ctx.zoomPanSelection = new Pt(this.ctx), this.ctx.w.globals.tooltip = new at(this.ctx);
    } }]), y;
  }(), ct = function() {
    function y(e) {
      F(this, y), this.ctx = e, this.w = e.w;
    }
    return Y(y, [{ key: "clear", value: function(e) {
      var t = e.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: t });
    } }, { key: "killSVG", value: function(e) {
      e.each(function(t, i) {
        this.removeClass("*"), this.off(), this.stop();
      }, !0), e.ungroup(), e.clear();
    } }, { key: "clearDomElements", value: function(e) {
      var t = this, i = e.isUpdating, a = this.w.globals.dom.Paper.node;
      a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset");
      var s = this.w.globals.dom.baseEl;
      s && this.ctx.eventList.forEach(function(n) {
        s.removeEventListener(n, t.ctx.events.documentEvent);
      });
      var r = this.w.globals.dom;
      if (this.ctx.el !== null)
        for (; this.ctx.el.firstChild; )
          this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elLegendWrap = null, r.elLegendForeign = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectMarkerMask = null, r.elForecastMask = null, r.elNonForecastMask = null, r.elDefs = null;
    } }]), y;
  }(), _e = /* @__PURE__ */ new WeakMap(), jt = function() {
    function y(e, t) {
      F(this, y), this.opts = t, this.ctx = this, this.w = new ft(t).init(), this.el = e, this.w.globals.cuid = P.randomId(), this.w.globals.chartID = this.w.config.chart.id ? P.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new ht(this).initModules(), this.create = P.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return Y(y, [{ key: "render", value: function() {
      var e = this;
      return new Promise(function(t, i) {
        if (e.el !== null) {
          Apex._chartInstances === void 0 && (Apex._chartInstances = []), e.w.config.chart.id && Apex._chartInstances.push({ id: e.w.globals.chartID, group: e.w.config.chart.group, chart: e }), e.setLocale(e.w.config.chart.defaultLocale);
          var a = e.w.config.chart.events.beforeMount;
          if (typeof a == "function" && a(e, e.w), e.events.fireEvent("beforeMount", [e, e.w]), window.addEventListener("resize", e.windowResizeHandler), function(g, p) {
            var f = !1;
            if (g.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var b = g.getBoundingClientRect();
              g.style.display !== "none" && b.width !== 0 || (f = !0);
            }
            var m = new ResizeObserver(function(w) {
              f && p.call(g, w), f = !0;
            });
            g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(g.children).forEach(function(w) {
              return m.observe(w);
            }) : m.observe(g), _e.set(p, m);
          }(e.el.parentNode, e.parentResizeHandler), !e.css) {
            var s = e.el.getRootNode && e.el.getRootNode(), r = P.is("ShadowRoot", s), n = e.el.ownerDocument, o = n.getElementById("apexcharts-css");
            if (r || !o) {
              var h;
              e.css = document.createElement("style"), e.css.id = "apexcharts-css", e.css.textContent = `@keyframes opaque {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

@keyframes resizeanim {
  0%,to {
      opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 1px rgba(255,255,255,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

.legend-mouseover-inactive {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255,255,255,.96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30,30,30,.8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0,0,0,.7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0;
  margin-right: 10px;
  border-radius: 50%
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-series-group-hidden {
  opacity: 0;
  height: 0;
  line-height: 0;
  padding: 0!important
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0,0,0,.7);
  border: 1px solid rgba(0,0,0,.5);
  color: #fff
}

.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0,0,0,.5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0,0,0,.5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0,0,0,.7);
  border: 1px solid rgba(0,0,0,.5);
  color: #fff
}

.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0,0,0,.5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0,0,0,.5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_boundingRect,.svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0,0,0,.7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
      opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {
  opacity: 0
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}
.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {
  pointer-events: none
}

.apexcharts-marker {
  transition: .15s ease all
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,.resize-triggers,.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers{
  pointer-events: none
}

.apexcharts-bar-shadows{
  pointer-events: none
}

.apexcharts-rangebar-goals-markers{
  pointer-events: none
}`;
              var c = ((h = e.opts.chart) === null || h === void 0 ? void 0 : h.nonce) || e.w.config.chart.nonce;
              c && e.css.setAttribute("nonce", c), r ? s.prepend(e.css) : n.head.appendChild(e.css);
            }
          }
          var d = e.create(e.w.config.series, {});
          if (!d)
            return t(e);
          e.mount(d).then(function() {
            typeof e.w.config.chart.events.mounted == "function" && e.w.config.chart.events.mounted(e, e.w), e.events.fireEvent("mounted", [e, e.w]), t(d);
          }).catch(function(g) {
            i(g);
          });
        } else
          i(new Error("Element not found"));
      });
    } }, { key: "create", value: function(e, t) {
      var i = this.w;
      new ht(this).initModules();
      var a = this.w.globals;
      if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(t), i.config.xaxis.convertedCatToNumeric && new oe(i.config).convertCatToNumericXaxis(i.config, this.ctx), this.el === null || (this.core.setupElements(), i.config.chart.type === "treemap" && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), a.svgWidth === 0))
        return a.animationEnded = !0, null;
      var s = q.checkComboSeries(e);
      a.comboCharts = s.comboCharts, a.comboBarCount = s.comboBarCount;
      var r = e.every(function(c) {
        return c.data && c.data.length === 0;
      });
      (e.length === 0 || r) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(e), this.theme.init(), new Pe(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), i.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new q(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var n = this.core.xySettings();
      this.grid.createGridMask();
      var o = this.core.plotChartType(e, n), h = new ye(this);
      return h.bringForward(), i.config.dataLabels.background.enabled && h.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: o, xyRatios: n, dimensions: { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this, a = i.w;
      return new Promise(function(s, r) {
        if (i.el === null)
          return r(new Error("Not enough data to display or target element not found"));
        (t === null || a.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new Qe(i);
        var n, o, h = i.grid.drawGrid();
        if (i.annotations = new ie(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), a.config.grid.position === "back" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (n = h.elGridBorders) !== null && n !== void 0 && n.node && a.globals.dom.elGraphical.add(h.elGridBorders)), Array.isArray(t.elGraph))
          for (var c = 0; c < t.elGraph.length; c++)
            a.globals.dom.elGraphical.add(t.elGraph[c]);
        else
          a.globals.dom.elGraphical.add(t.elGraph);
        a.config.grid.position === "front" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (o = h.elGridBorders) !== null && o !== void 0 && o.node && a.globals.dom.elGraphical.add(h.elGridBorders)), a.config.xaxis.crosshairs.position === "front" && i.crosshairs.drawXCrosshairs(), a.config.yaxis[0].crosshairs.position === "front" && i.crosshairs.drawYCrosshairs(), a.config.chart.type !== "treemap" && i.axes.drawAxis(a.config.chart.type, h);
        var d = new Ie(e.ctx, h), g = new Ne(e.ctx, h);
        if (h !== null && (d.xAxisLabelCorrections(h.xAxisTickWidth), g.setYAxisTextAlignments(), a.config.yaxis.map(function(f, b) {
          a.globals.ignoreYAxisIndexes.indexOf(b) === -1 && g.yAxisTitleRotate(b, f.opposite);
        })), i.annotations.drawAxesAnnotations(), !a.globals.noData) {
          if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(t.xyRatios), a.globals.axisCharts && (a.globals.isXNumeric || a.config.xaxis.convertedCatToNumeric || a.globals.isRangeBar))
            (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: t.xyRatios });
          else {
            var p = a.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(f) {
              p[f] = !1;
            });
          }
          a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar();
        }
        a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach(function(f) {
          f.method(f.params, !1, f.context);
        }), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), s(i);
      });
    } }, { key: "destroy", value: function() {
      var e, t;
      window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, e = this.parentResizeHandler, (t = _e.get(e)) && (t.disconnect(), _e.delete(e));
      var i = this.w.config.chart.id;
      i && Apex._chartInstances.forEach(function(a, s) {
        a.id === P.escapeString(i) && Apex._chartInstances.splice(s, 1);
      }), new ct(this.ctx).clear({ isUpdating: !1 });
    } }, { key: "updateOptions", value: function(e) {
      var t = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], n = this.w;
      return n.globals.selection = void 0, e.series && (this.series.resetSeries(!1, !0, !1), e.series.length && e.series[0].data && (e.series = e.series.map(function(o, h) {
        return t.updateHelpers._extendSeries(o, h);
      })), this.updateHelpers.revertDefaultAxisMinMax()), e.xaxis && (e = this.updateHelpers.forceXAxisUpdate(e)), e.yaxis && (e = this.updateHelpers.forceYAxisUpdate(e)), n.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), e.theme && (e = this.theme.updateThemeOptions(e)), this.updateHelpers._updateOptions(e, i, a, s, r);
    } }, { key: "updateSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
      return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(e, t, i);
    } }, { key: "appendSeries", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w.config.series.slice();
      return a.push(e), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, t, i);
    } }, { key: "appendData", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = this;
      i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
      for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++)
        if (e[s] !== null && e[s] !== void 0)
          for (var r = 0; r < e[s].data.length; r++)
            a[s].data.push(e[s].data[r]);
      return i.w.config.series = a, t && (i.w.globals.initialSeries = P.clone(i.w.config.series)), this.update();
    } }, { key: "update", value: function(e) {
      var t = this;
      return new Promise(function(i, a) {
        new ct(t.ctx).clear({ isUpdating: !0 });
        var s = t.create(t.w.config.series, e);
        if (!s)
          return i(t);
        t.mount(s).then(function() {
          typeof t.w.config.chart.events.updated == "function" && t.w.config.chart.events.updated(t, t.w), t.events.fireEvent("updated", [t, t.w]), t.w.globals.isDirty = !0, i(t);
        }).catch(function(r) {
          a(r);
        });
      });
    } }, { key: "getSyncedCharts", value: function() {
      var e = this.getGroupedCharts(), t = [this];
      return e.length && (t = [], e.forEach(function(i) {
        t.push(i);
      })), t;
    } }, { key: "getGroupedCharts", value: function() {
      var e = this;
      return Apex._chartInstances.filter(function(t) {
        if (t.group)
          return !0;
      }).map(function(t) {
        return e.w.config.chart.group === t.group ? t.chart : e;
      });
    } }, { key: "toggleSeries", value: function(e) {
      return this.series.toggleSeries(e);
    } }, { key: "highlightSeriesOnLegendHover", value: function(e, t) {
      return this.series.toggleSeriesOnHover(e, t);
    } }, { key: "showSeries", value: function(e) {
      this.series.showSeries(e);
    } }, { key: "hideSeries", value: function(e) {
      this.series.hideSeries(e);
    } }, { key: "isSeriesHidden", value: function(e) {
      this.series.isSeriesHidden(e);
    } }, { key: "resetSeries", value: function() {
      var e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      this.series.resetSeries(e, t);
    } }, { key: "addEventListener", value: function(e, t) {
      this.events.addEventListener(e, t);
    } }, { key: "removeEventListener", value: function(e, t) {
      this.events.removeEventListener(e, t);
    } }, { key: "addXaxisAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addXaxisAnnotationExternal(e, t, a);
    } }, { key: "addYaxisAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addYaxisAnnotationExternal(e, t, a);
    } }, { key: "addPointAnnotation", value: function(e) {
      var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addPointAnnotationExternal(e, t, a);
    } }, { key: "clearAnnotations", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, t = this;
      e && (t = e), t.annotations.clearAnnotations(t);
    } }, { key: "removeAnnotation", value: function(e) {
      var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this;
      t && (i = t), i.annotations.removeAnnotation(i, e);
    } }, { key: "getChartArea", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    } }, { key: "getSeriesTotalXRange", value: function(e, t) {
      return this.coreUtils.getSeriesTotalsXRange(e, t);
    } }, { key: "getHighestValueInSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new De(this.ctx).getMinYMaxY(e).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new De(this.ctx).getMinYMaxY(e).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(e, t) {
      return this.updateHelpers.toggleDataPointSelection(e, t);
    } }, { key: "zoomX", value: function(e, t) {
      this.ctx.toolbar.zoomUpdateOptions(e, t);
    } }, { key: "setLocale", value: function(e) {
      this.localization.setCurrentLocaleValues(e);
    } }, { key: "dataURI", value: function(e) {
      return new Ee(this.ctx).dataURI(e);
    } }, { key: "exportToCSV", value: function() {
      var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return new Ee(this.ctx).exportToCSV(e);
    } }, { key: "paper", value: function() {
      return this.w.globals.dom.Paper;
    } }, { key: "_parentResizeCallback", value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    } }, { key: "_windowResize", value: function() {
      var e = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
        e.w.globals.resized = !0, e.w.globals.dataChanged = !1, e.ctx.update();
      }, 150);
    } }, { key: "_windowResizeHandler", value: function() {
      var e = this.w.config.chart.redrawOnWindowResize;
      typeof e == "function" && (e = e()), e && this._windowResize();
    } }], [{ key: "getChartByID", value: function(e) {
      var t = P.escapeString(e);
      if (Apex._chartInstances) {
        var i = Apex._chartInstances.filter(function(a) {
          return a.id === t;
        })[0];
        return i && i.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var e = document.querySelectorAll("[data-apexcharts]"), t = 0; t < e.length; t++)
        new y(e[t], JSON.parse(e[t].getAttribute("data-options"))).render();
    } }, { key: "exec", value: function(e, t) {
      var i = this.getChartByID(e);
      if (i) {
        i.w.globals.isExecCalled = !0;
        var a = null;
        if (i.publicMethods.indexOf(t) !== -1) {
          for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), n = 2; n < s; n++)
            r[n - 2] = arguments[n];
          a = i[t].apply(i, r);
        }
        return a;
      }
    } }, { key: "merge", value: function(e, t) {
      return P.extend(e, t);
    } }]), y;
  }();
  _.exports = jt;
})(Ue, Ue.exports);
var ti = Ue.exports;
const ut = /* @__PURE__ */ ei(ti), pt = [
  "animationEnd",
  "beforeMount",
  "mounted",
  "updated",
  "click",
  "mouseMove",
  "mouseLeave",
  "legendClick",
  "markerClick",
  "selection",
  "dataPointSelection",
  "dataPointMouseEnter",
  "dataPointMouseLeave",
  "beforeZoom",
  "beforeResetZoom",
  "zoomed",
  "scrolled",
  "brushScrolled"
], qe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name: "apexchart",
  props: {
    options: {
      type: Object
    },
    type: {
      type: String
    },
    series: {
      type: Array,
      required: !0
    },
    width: {
      default: "100%"
    },
    height: {
      default: "auto"
    }
  },
  // events emitted by this component
  emits: pt,
  setup(_, { emit: Re }) {
    const Ae = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), X = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null), U = (H) => H && typeof H == "object" && !Array.isArray(H) && H != null, F = (H, G) => {
      typeof Object.assign != "function" && function() {
        Object.assign = function(B) {
          if (B == null)
            throw new TypeError("Cannot convert undefined or null to object");
          let re = Object(B);
          for (let fe = 1; fe < arguments.length; fe++) {
            let ne = arguments[fe];
            if (ne != null)
              for (let oe in ne)
                ne.hasOwnProperty(oe) && (re[oe] = ne[oe]);
          }
          return re;
        };
      }();
      let ie = Object.assign({}, H);
      return U(H) && U(G) && Object.keys(G).forEach((B) => {
        U(G[B]) ? B in H ? ie[B] = F(H[B], G[B]) : Object.assign(ie, {
          [B]: G[B]
        }) : Object.assign(ie, {
          [B]: G[B]
        });
      }), ie;
    }, ce = async () => {
      if (await (0,vue__WEBPACK_IMPORTED_MODULE_0__.nextTick)(), X.value)
        return;
      const H = {
        chart: {
          type: _.type || _.options.chart.type || "line",
          height: _.height,
          width: _.width,
          events: {}
        },
        series: _.series
      };
      pt.forEach((ie) => {
        let B = (...re) => Re(ie, ...re);
        H.chart.events[ie] = B;
      });
      const G = F(_.options, H);
      return X.value = new ut(Ae.value, G), X.value.render();
    }, Y = () => (ee(), ce()), ee = () => {
      X.value.destroy();
    }, ge = (H, G) => X.value.updateSeries(H, G), me = (H, G, ie, B) => X.value.updateOptions(H, G, ie, B), Se = (H) => X.value.toggleSeries(H), ze = (H) => {
      X.value.showSeries(H);
    }, ue = (H) => {
      X.value.hideSeries(H);
    }, Me = (H, G) => X.value.appendSeries(H, G), J = () => {
      X.value.resetSeries();
    }, Xe = (H, G) => {
      X.value.toggleDataPointSelection(H, G);
    }, Ce = (H) => X.value.appendData(H), P = (H, G) => X.value.zoomX(H, G), de = (H) => X.value.dataURI(H), Z = (H) => X.value.setLocale(H), M = (H, G) => {
      X.value.addXaxisAnnotation(H, G);
    }, q = (H, G) => {
      X.value.addYaxisAnnotation(H, G);
    }, ve = (H, G) => {
      X.value.addPointAnnotation(H, G);
    }, Oe = (H, G) => {
      X.value.removeAnnotation(H, G);
    }, He = () => {
      X.value.clearAnnotations();
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeMount)(() => {
      window.ApexCharts = ut;
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(() => {
      Ae.value = (0,vue__WEBPACK_IMPORTED_MODULE_0__.getCurrentInstance)().proxy.$el, ce();
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(() => {
      X.value && ee();
    });
    const pe = (0,vue__WEBPACK_IMPORTED_MODULE_0__.toRefs)(_);
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pe.options, () => {
      !X.value && _.options ? ce() : X.value.updateOptions(_.options);
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(
      pe.series,
      () => {
        !X.value && _.series ? ce() : X.value.updateSeries(_.series);
      },
      { deep: !0 }
    ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pe.type, () => {
      Y();
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pe.width, () => {
      Y();
    }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(pe.height, () => {
      Y();
    }), {
      chart: X,
      init: ce,
      refresh: Y,
      destroy: ee,
      updateOptions: me,
      updateSeries: ge,
      toggleSeries: Se,
      showSeries: ze,
      hideSeries: ue,
      resetSeries: J,
      zoomX: P,
      toggleDataPointSelection: Xe,
      appendData: Ce,
      appendSeries: Me,
      addXaxisAnnotation: M,
      addYaxisAnnotation: q,
      addPointAnnotation: ve,
      removeAnnotation: Oe,
      clearAnnotations: He,
      setLocale: Z,
      dataURI: de
    };
  },
  render() {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.h)("div", {
      class: "vue-apexcharts"
    });
  }
}), ii = (_) => {
  _.component(qe.name, qe);
};
qe.install = ii;



/***/ })

}]);