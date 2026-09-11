var __webpack_modules__ = {
  "./src/新建为src文件夹中的文件夹/脚本/变量结构/index.ts"(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
    eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Schema: () => (/* binding */ Schema)\n/* harmony export */ });\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zod */ \"zod\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zod__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n// 必须加上这两行，相当于把工具（zod 和 lodash）带进这个文件\n\n\nconst Schema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n    世界: zod__WEBPACK_IMPORTED_MODULE_0__.z\n        .object({\n        时间: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n        地点: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n        天气: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n        温度: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n    })\n        .prefault({}),\n    角色: zod__WEBPACK_IMPORTED_MODULE_0__.z\n        .record(zod__WEBPACK_IMPORTED_MODULE_0__.z.string().describe('角色名'), zod__WEBPACK_IMPORTED_MODULE_0__.z.object({\n        情感依恋: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce\n            .number()\n            .transform(value => lodash__WEBPACK_IMPORTED_MODULE_1___default().clamp(Math.round(value * 2) / 2, 0, 100))\n            .prefault(0),\n        肉体吸引: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce\n            .number()\n            .transform(value => lodash__WEBPACK_IMPORTED_MODULE_1___default().clamp(Math.round(value * 2) / 2, 0, 100))\n            .prefault(0),\n        关系意愿: zod__WEBPACK_IMPORTED_MODULE_0__.z.coerce\n            .number()\n            .transform(value => lodash__WEBPACK_IMPORTED_MODULE_1___default().clamp(Math.round(value * 2) / 2, 0, 100))\n            .prefault(0),\n        服饰: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n        表情: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n        心声: zod__WEBPACK_IMPORTED_MODULE_0__.z.string().prefault(''),\n    }))\n        .prefault({}),\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMv5paw5bu65Li6c3Jj5paH5Lu25aS55Lit55qE5paH5Lu25aS5L+iEmuacrC/lj5jph4/nu5PmnoQvaW5kZXgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxxQ0FBcUM7QUFDYjtBQUNEO0FBRWhCLE1BQU0sTUFBTSxHQUFHLGtDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzdCLEVBQUUsRUFBRSxrQ0FBQztTQUNGLE1BQU0sQ0FBQztRQUNOLEVBQUUsRUFBRSxrQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDM0IsRUFBRSxFQUFFLGtDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUMzQixFQUFFLEVBQUUsa0NBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzNCLEVBQUUsRUFBRSxrQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDNUIsQ0FBQztTQUNELFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDZixFQUFFLEVBQUUsa0NBQUM7U0FDRixNQUFNLENBQ0wsa0NBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQzFCLGtDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ1AsSUFBSSxFQUFFLGtDQUFDLENBQUMsTUFBTTthQUNYLE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1EQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5RCxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGtDQUFDLENBQUMsTUFBTTthQUNYLE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1EQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5RCxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGtDQUFDLENBQUMsTUFBTTthQUNYLE1BQU0sRUFBRTthQUNSLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1EQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5RCxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2QsRUFBRSxFQUFFLGtDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUMzQixFQUFFLEVBQUUsa0NBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzNCLEVBQUUsRUFBRSxrQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7S0FDNUIsQ0FBQyxDQUNIO1NBQ0EsUUFBUSxDQUFDLEVBQUUsQ0FBQztDQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbInNyYzovL3RhdmVybl9oZWxwZXJfdGVtcGxhdGUvc3JjL+aWsOW7uuS4unNyY+aWh+S7tuWkueS4reeahOaWh+S7tuWkuS/ohJrmnKwv5Y+Y6YeP57uT5p6EL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIOW/hemhu+WKoOS4iui/meS4pOihjO+8jOebuOW9k+S6juaKiuW3peWFt++8iHpvZCDlkowgbG9kYXNo77yJ5bim6L+b6L+Z5Liq5paH5Lu2XG5pbXBvcnQgeyB6IH0gZnJvbSAnem9kJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBjb25zdCBTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIOS4lueVjDogelxuICAgIC5vYmplY3Qoe1xuICAgICAg5pe26Ze0OiB6LnN0cmluZygpLnByZWZhdWx0KCcnKSxcbiAgICAgIOWcsOeCuTogei5zdHJpbmcoKS5wcmVmYXVsdCgnJyksXG4gICAgICDlpKnmsJQ6IHouc3RyaW5nKCkucHJlZmF1bHQoJycpLFxuICAgICAg5rip5bqmOiB6LnN0cmluZygpLnByZWZhdWx0KCcnKSxcbiAgICB9KVxuICAgIC5wcmVmYXVsdCh7fSksXG4gIOinkuiJsjogelxuICAgIC5yZWNvcmQoXG4gICAgICB6LnN0cmluZygpLmRlc2NyaWJlKCfop5LoibLlkI0nKSxcbiAgICAgIHoub2JqZWN0KHtcbiAgICAgICAg5oOF5oSf5L6d5oGLOiB6LmNvZXJjZVxuICAgICAgICAgIC5udW1iZXIoKVxuICAgICAgICAgIC50cmFuc2Zvcm0odmFsdWUgPT4gXy5jbGFtcChNYXRoLnJvdW5kKHZhbHVlICogMikgLyAyLCAwLCAxMDApKVxuICAgICAgICAgIC5wcmVmYXVsdCgwKSxcbiAgICAgICAg6IKJ5L2T5ZC45byVOiB6LmNvZXJjZVxuICAgICAgICAgIC5udW1iZXIoKVxuICAgICAgICAgIC50cmFuc2Zvcm0odmFsdWUgPT4gXy5jbGFtcChNYXRoLnJvdW5kKHZhbHVlICogMikgLyAyLCAwLCAxMDApKVxuICAgICAgICAgIC5wcmVmYXVsdCgwKSxcbiAgICAgICAg5YWz57O75oSP5oS/OiB6LmNvZXJjZVxuICAgICAgICAgIC5udW1iZXIoKVxuICAgICAgICAgIC50cmFuc2Zvcm0odmFsdWUgPT4gXy5jbGFtcChNYXRoLnJvdW5kKHZhbHVlICogMikgLyAyLCAwLCAxMDApKVxuICAgICAgICAgIC5wcmVmYXVsdCgwKSxcbiAgICAgICAg5pyN6aWwOiB6LnN0cmluZygpLnByZWZhdWx0KCcnKSxcbiAgICAgICAg6KGo5oOFOiB6LnN0cmluZygpLnByZWZhdWx0KCcnKSxcbiAgICAgICAg5b+D5aOwOiB6LnN0cmluZygpLnByZWZhdWx0KCcnKSxcbiAgICAgIH0pLFxuICAgIClcbiAgICAucHJlZmF1bHQoe30pLFxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/新建为src文件夹中的文件夹/脚本/变量结构/index.ts\n\n}");
  },
  lodash(module) {
    module.exports = _;
  },
  zod(module) {
    module.exports = z;
  }
};

const __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  const cachedModule = __webpack_module_cache__[moduleId];
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  const module = __webpack_module_cache__[moduleId] = {
    exports: {}
  };
  if (!(moduleId in __webpack_modules__)) {
    delete __webpack_module_cache__[moduleId];
    const e = new Error("Cannot find module '" + moduleId + "'");
    e.code = "MODULE_NOT_FOUND";
    throw e;
  }
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  return module.exports;
}

__webpack_require__.n = module => {
  const getter = module && module.__esModule ? () => module["default"] : () => module;
  __webpack_require__.d(getter, {
    a: getter
  });
  return getter;
};

__webpack_require__.d = (exports, definition) => {
  for (var key in definition) {
    if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: definition[key]
      });
    }
  }
};

__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

__webpack_require__.r = exports => {
  Object.defineProperty(exports, Symbol.toStringTag, {
    value: "Module"
  });
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
};

let __webpack_exports__ = __webpack_require__("./src/新建为src文件夹中的文件夹/脚本/变量结构/index.ts");

const __webpack_exports__Schema = __webpack_exports__.Schema;

export { __webpack_exports__Schema as Schema };