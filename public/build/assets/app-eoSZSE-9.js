var _i =
    typeof globalThis < 'u'
        ? globalThis
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : typeof self < 'u'
              ? self
              : {};
function Ei(Q) {
    return Q &&
        Q.__esModule &&
        Object.prototype.hasOwnProperty.call(Q, 'default')
        ? Q.default
        : Q;
}
var bi = { exports: {} };
(function (Q, z) {
    (function (f, i) {
        Q.exports = i();
    })(typeof self < 'u' ? self : _i, function () {
        return (function (s) {
            var f = {};
            function i(l) {
                if (f[l]) return f[l].exports;
                var a = (f[l] = { i: l, l: !1, exports: {} });
                return (
                    s[l].call(a.exports, a, a.exports, i), (a.l = !0), a.exports
                );
            }
            return (
                (i.m = s),
                (i.c = f),
                (i.d = function (l, a, u) {
                    i.o(l, a) ||
                        Object.defineProperty(l, a, {
                            configurable: !1,
                            enumerable: !0,
                            get: u,
                        });
                }),
                (i.r = function (l) {
                    Object.defineProperty(l, '__esModule', { value: !0 });
                }),
                (i.n = function (l) {
                    var a =
                        l && l.__esModule
                            ? function () {
                                  return l.default;
                              }
                            : function () {
                                  return l;
                              };
                    return i.d(a, 'a', a), a;
                }),
                (i.o = function (l, a) {
                    return Object.prototype.hasOwnProperty.call(l, a);
                }),
                (i.p = ''),
                i((i.s = 0))
            );
        })({
            './dist/icons.json': function (s) {
                s.exports = {
                    activity:
                        '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                    airplay:
                        '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                    'alert-circle':
                        '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                    'alert-octagon':
                        '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',
                    'alert-triangle':
                        '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                    'align-center':
                        '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                    'align-justify':
                        '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                    'align-left':
                        '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                    'align-right':
                        '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                    anchor: '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                    aperture:
                        '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                    archive:
                        '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                    'arrow-down-circle':
                        '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                    'arrow-down-left':
                        '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                    'arrow-down-right':
                        '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                    'arrow-down':
                        '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                    'arrow-left-circle':
                        '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                    'arrow-left':
                        '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                    'arrow-right-circle':
                        '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'arrow-right':
                        '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                    'arrow-up-circle':
                        '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                    'arrow-up-left':
                        '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                    'arrow-up-right':
                        '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                    'arrow-up':
                        '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                    'at-sign':
                        '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                    award: '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                    'bar-chart-2':
                        '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                    'bar-chart':
                        '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                    'battery-charging':
                        '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                    battery:
                        '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                    'bell-off':
                        '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                    bluetooth:
                        '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                    bold: '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                    'book-open':
                        '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                    book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                    bookmark:
                        '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                    box: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    briefcase:
                        '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                    calendar:
                        '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                    'camera-off':
                        '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                    camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                    cast: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',
                    'check-circle':
                        '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                    'check-square':
                        '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                    check: '<polyline points="20 6 9 17 4 12"></polyline>',
                    'chevron-down':
                        '<polyline points="6 9 12 15 18 9"></polyline>',
                    'chevron-left':
                        '<polyline points="15 18 9 12 15 6"></polyline>',
                    'chevron-right':
                        '<polyline points="9 18 15 12 9 6"></polyline>',
                    'chevron-up':
                        '<polyline points="18 15 12 9 6 15"></polyline>',
                    'chevrons-down':
                        '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                    'chevrons-left':
                        '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                    'chevrons-right':
                        '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                    'chevrons-up':
                        '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                    chrome: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                    circle: '<circle cx="12" cy="12" r="10"></circle>',
                    clipboard:
                        '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                    clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                    'cloud-drizzle':
                        '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    'cloud-lightning':
                        '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                    'cloud-off':
                        '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    'cloud-rain':
                        '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                    'cloud-snow':
                        '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',
                    cloud: '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                    code: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                    codepen:
                        '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                    codesandbox:
                        '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    coffee: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                    columns:
                        '<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',
                    command:
                        '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                    compass:
                        '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                    copy: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                    'corner-down-left':
                        '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                    'corner-down-right':
                        '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                    'corner-left-down':
                        '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                    'corner-left-up':
                        '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                    'corner-right-down':
                        '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                    'corner-right-up':
                        '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                    'corner-up-left':
                        '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                    'corner-up-right':
                        '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                    cpu: '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                    'credit-card':
                        '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                    crop: '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                    crosshair:
                        '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                    database:
                        '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                    delete: '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                    disc: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                    'divide-circle':
                        '<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',
                    'divide-square':
                        '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                    divide: '<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',
                    'dollar-sign':
                        '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                    'download-cloud':
                        '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                    download:
                        '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                    dribbble:
                        '<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',
                    droplet:
                        '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                    'edit-2':
                        '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                    'edit-3':
                        '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                    edit: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                    'external-link':
                        '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                    'eye-off':
                        '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                    facebook:
                        '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                    'fast-forward':
                        '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                    feather:
                        '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                    figma: '<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',
                    'file-minus':
                        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                    'file-plus':
                        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                    'file-text':
                        '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                    file: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                    film: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                    'folder-minus':
                        '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                    'folder-plus':
                        '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                    folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                    framer: '<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',
                    frown: '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    gift: '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                    'git-branch':
                        '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                    'git-commit':
                        '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                    'git-merge':
                        '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                    'git-pull-request':
                        '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                    gitlab: '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                    globe: '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                    grid: '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                    'hard-drive':
                        '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',
                    hash: '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                    headphones:
                        '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                    heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                    'help-circle':
                        '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
                    hexagon:
                        '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',
                    home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                    image: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                    info: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',
                    instagram:
                        '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',
                    italic: '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                    key: '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                    layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                    layout: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                    'life-buoy':
                        '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                    'link-2':
                        '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                    linkedin:
                        '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                    list: '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',
                    loader: '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                    lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                    'log-in':
                        '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                    'log-out':
                        '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                    mail: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                    'map-pin':
                        '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                    map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                    'maximize-2':
                        '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    maximize:
                        '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                    meh: '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    menu: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                    'message-circle':
                        '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                    'message-square':
                        '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                    'mic-off':
                        '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    mic: '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                    'minimize-2':
                        '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                    minimize:
                        '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                    'minus-circle':
                        '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'minus-square':
                        '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                    minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                    monitor:
                        '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                    moon: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                    'more-horizontal':
                        '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                    'more-vertical':
                        '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                    'mouse-pointer':
                        '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                    move: '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                    music: '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                    'navigation-2':
                        '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                    navigation:
                        '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                    octagon:
                        '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                    package:
                        '<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
                    paperclip:
                        '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                    'pause-circle':
                        '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                    pause: '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                    'pen-tool':
                        '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                    percent:
                        '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                    'phone-call':
                        '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-forwarded':
                        '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-incoming':
                        '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-missed':
                        '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'phone-off':
                        '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                    'phone-outgoing':
                        '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                    'pie-chart':
                        '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                    'play-circle':
                        '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                    play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                    'plus-circle':
                        '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    'plus-square':
                        '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                    plus: '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                    pocket: '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                    power: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                    printer:
                        '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                    radio: '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                    'refresh-ccw':
                        '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                    'refresh-cw':
                        '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                    repeat: '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                    rewind: '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                    'rotate-ccw':
                        '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                    'rotate-cw':
                        '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                    rss: '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                    save: '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                    scissors:
                        '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                    search: '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                    send: '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                    server: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',
                    settings:
                        '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                    'share-2':
                        '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                    'shield-off':
                        '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                    'shopping-bag':
                        '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                    'shopping-cart':
                        '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                    shuffle:
                        '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                    sidebar:
                        '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                    'skip-back':
                        '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                    'skip-forward':
                        '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                    slack: '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                    slash: '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                    sliders:
                        '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                    smartphone:
                        '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                    smile: '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                    speaker:
                        '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',
                    square: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                    'stop-circle':
                        '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                    sun: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                    sunrise:
                        '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                    sunset: '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                    table: '<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',
                    tablet: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',
                    tag: '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',
                    target: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                    terminal:
                        '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                    thermometer:
                        '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                    'thumbs-down':
                        '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                    'thumbs-up':
                        '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                    'toggle-left':
                        '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                    'toggle-right':
                        '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
                    'trash-2':
                        '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                    trash: '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                    trello: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                    'trending-down':
                        '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                    'trending-up':
                        '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                    triangle:
                        '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                    truck: '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                    tv: '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                    twitch: '<path d="M21 2H3v16h5v4l4-4h5l4-4V2zM11 11V7M16 11V7"></path>',
                    twitter:
                        '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                    type: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                    umbrella:
                        '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                    underline:
                        '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                    unlock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                    'upload-cloud':
                        '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                    'user-check':
                        '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                    'user-minus':
                        '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                    'user-plus':
                        '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                    'user-x':
                        '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                    'video-off':
                        '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                    video: '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                    voicemail:
                        '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                    'volume-1':
                        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    'volume-2':
                        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                    'volume-x':
                        '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                    watch: '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                    'wifi-off':
                        '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                    wifi: '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
                    wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                    'x-circle':
                        '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                    'x-octagon':
                        '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                    'x-square':
                        '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                    x: '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                    youtube:
                        '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                    'zap-off':
                        '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                    zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                    'zoom-in':
                        '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                    'zoom-out':
                        '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                };
            },
            './node_modules/classnames/dedupe.js': function (s, f, i) {
                var l, a;
                /*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ (function () {
                    var u = (function () {
                        function p() {}
                        p.prototype = Object.create(null);
                        function h(T, w) {
                            for (var S = w.length, L = 0; L < S; ++L)
                                v(T, w[L]);
                        }
                        var g = {}.hasOwnProperty;
                        function m(T, w) {
                            T[w] = !0;
                        }
                        function E(T, w) {
                            for (var S in w) g.call(w, S) && (T[S] = !!w[S]);
                        }
                        var A = /\s+/;
                        function _(T, w) {
                            for (
                                var S = w.split(A), L = S.length, W = 0;
                                W < L;
                                ++W
                            )
                                T[S[W]] = !0;
                        }
                        function v(T, w) {
                            if (w) {
                                var S = typeof w;
                                S === 'string'
                                    ? _(T, w)
                                    : Array.isArray(w)
                                      ? h(T, w)
                                      : S === 'object'
                                        ? E(T, w)
                                        : S === 'number' && m(T, w);
                            }
                        }
                        function O() {
                            for (
                                var T = arguments.length, w = Array(T), S = 0;
                                S < T;
                                S++
                            )
                                w[S] = arguments[S];
                            var L = new p();
                            h(L, w);
                            var W = [];
                            for (var D in L) L[D] && W.push(D);
                            return W.join(' ');
                        }
                        return O;
                    })();
                    typeof s < 'u' && s.exports
                        ? (s.exports = u)
                        : ((l = []),
                          (a = function () {
                              return u;
                          }.apply(f, l)),
                          a !== void 0 && (s.exports = a));
                })();
            },
            './node_modules/core-js/es/array/from.js': function (s, f, i) {
                i('./node_modules/core-js/modules/es.string.iterator.js'),
                    i('./node_modules/core-js/modules/es.array.from.js');
                var l = i('./node_modules/core-js/internals/path.js');
                s.exports = l.Array.from;
            },
            './node_modules/core-js/internals/a-function.js': function (s, f) {
                s.exports = function (i) {
                    if (typeof i != 'function')
                        throw TypeError(String(i) + ' is not a function');
                    return i;
                };
            },
            './node_modules/core-js/internals/an-object.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/is-object.js');
                s.exports = function (a) {
                    if (!l(a)) throw TypeError(String(a) + ' is not an object');
                    return a;
                };
            },
            './node_modules/core-js/internals/array-from.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/bind-context.js'),
                    a = i('./node_modules/core-js/internals/to-object.js'),
                    u = i(
                        './node_modules/core-js/internals/call-with-safe-iteration-closing.js'
                    ),
                    p = i(
                        './node_modules/core-js/internals/is-array-iterator-method.js'
                    ),
                    h = i('./node_modules/core-js/internals/to-length.js'),
                    g = i(
                        './node_modules/core-js/internals/create-property.js'
                    ),
                    m = i(
                        './node_modules/core-js/internals/get-iterator-method.js'
                    );
                s.exports = function (A) {
                    var _ = a(A),
                        v = typeof this == 'function' ? this : Array,
                        O = arguments.length,
                        T = O > 1 ? arguments[1] : void 0,
                        w = T !== void 0,
                        S = 0,
                        L = m(_),
                        W,
                        D,
                        $,
                        H;
                    if (
                        (w && (T = l(T, O > 2 ? arguments[2] : void 0, 2)),
                        L != null && !(v == Array && p(L)))
                    )
                        for (
                            H = L.call(_), D = new v();
                            !($ = H.next()).done;
                            S++
                        )
                            g(D, S, w ? u(H, T, [$.value, S], !0) : $.value);
                    else
                        for (W = h(_.length), D = new v(W); W > S; S++)
                            g(D, S, w ? T(_[S], S) : _[S]);
                    return (D.length = S), D;
                };
            },
            './node_modules/core-js/internals/array-includes.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                        './node_modules/core-js/internals/to-indexed-object.js'
                    ),
                    a = i('./node_modules/core-js/internals/to-length.js'),
                    u = i(
                        './node_modules/core-js/internals/to-absolute-index.js'
                    );
                s.exports = function (p) {
                    return function (h, g, m) {
                        var E = l(h),
                            A = a(E.length),
                            _ = u(m, A),
                            v;
                        if (p && g != g) {
                            for (; A > _; )
                                if (((v = E[_++]), v != v)) return !0;
                        } else
                            for (; A > _; _++)
                                if ((p || _ in E) && E[_] === g)
                                    return p || _ || 0;
                        return !p && -1;
                    };
                };
            },
            './node_modules/core-js/internals/bind-context.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/a-function.js');
                s.exports = function (a, u, p) {
                    if ((l(a), u === void 0)) return a;
                    switch (p) {
                        case 0:
                            return function () {
                                return a.call(u);
                            };
                        case 1:
                            return function (h) {
                                return a.call(u, h);
                            };
                        case 2:
                            return function (h, g) {
                                return a.call(u, h, g);
                            };
                        case 3:
                            return function (h, g, m) {
                                return a.call(u, h, g, m);
                            };
                    }
                    return function () {
                        return a.apply(u, arguments);
                    };
                };
            },
            './node_modules/core-js/internals/call-with-safe-iteration-closing.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/an-object.js');
                    s.exports = function (a, u, p, h) {
                        try {
                            return h ? u(l(p)[0], p[1]) : u(p);
                        } catch (m) {
                            var g = a.return;
                            throw (g !== void 0 && l(g.call(a)), m);
                        }
                    };
                },
            './node_modules/core-js/internals/check-correctness-of-iteration.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/well-known-symbol.js'
                        ),
                        a = l('iterator'),
                        u = !1;
                    try {
                        var p = 0,
                            h = {
                                next: function () {
                                    return { done: !!p++ };
                                },
                                return: function () {
                                    u = !0;
                                },
                            };
                        (h[a] = function () {
                            return this;
                        }),
                            Array.from(h, function () {
                                throw 2;
                            });
                    } catch {}
                    s.exports = function (g, m) {
                        if (!m && !u) return !1;
                        var E = !1;
                        try {
                            var A = {};
                            (A[a] = function () {
                                return {
                                    next: function () {
                                        return { done: (E = !0) };
                                    },
                                };
                            }),
                                g(A);
                        } catch {}
                        return E;
                    };
                },
            './node_modules/core-js/internals/classof-raw.js': function (s, f) {
                var i = {}.toString;
                s.exports = function (l) {
                    return i.call(l).slice(8, -1);
                };
            },
            './node_modules/core-js/internals/classof.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/classof-raw.js'),
                    a = i(
                        './node_modules/core-js/internals/well-known-symbol.js'
                    ),
                    u = a('toStringTag'),
                    p =
                        l(
                            (function () {
                                return arguments;
                            })()
                        ) == 'Arguments',
                    h = function (g, m) {
                        try {
                            return g[m];
                        } catch {}
                    };
                s.exports = function (g) {
                    var m, E, A;
                    return g === void 0
                        ? 'Undefined'
                        : g === null
                          ? 'Null'
                          : typeof (E = h((m = Object(g)), u)) == 'string'
                            ? E
                            : p
                              ? l(m)
                              : (A = l(m)) == 'Object' &&
                                  typeof m.callee == 'function'
                                ? 'Arguments'
                                : A;
                };
            },
            './node_modules/core-js/internals/copy-constructor-properties.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/has.js'),
                        a = i('./node_modules/core-js/internals/own-keys.js'),
                        u = i(
                            './node_modules/core-js/internals/object-get-own-property-descriptor.js'
                        ),
                        p = i(
                            './node_modules/core-js/internals/object-define-property.js'
                        );
                    s.exports = function (h, g) {
                        for (
                            var m = a(g), E = p.f, A = u.f, _ = 0;
                            _ < m.length;
                            _++
                        ) {
                            var v = m[_];
                            l(h, v) || E(h, v, A(g, v));
                        }
                    };
                },
            './node_modules/core-js/internals/correct-prototype-getter.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/fails.js');
                    s.exports = !l(function () {
                        function a() {}
                        return (
                            (a.prototype.constructor = null),
                            Object.getPrototypeOf(new a()) !== a.prototype
                        );
                    });
                },
            './node_modules/core-js/internals/create-iterator-constructor.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/iterators-core.js'
                        ).IteratorPrototype,
                        a = i(
                            './node_modules/core-js/internals/object-create.js'
                        ),
                        u = i(
                            './node_modules/core-js/internals/create-property-descriptor.js'
                        ),
                        p = i(
                            './node_modules/core-js/internals/set-to-string-tag.js'
                        ),
                        h = i('./node_modules/core-js/internals/iterators.js'),
                        g = function () {
                            return this;
                        };
                    s.exports = function (m, E, A) {
                        var _ = E + ' Iterator';
                        return (
                            (m.prototype = a(l, { next: u(1, A) })),
                            p(m, _, !1, !0),
                            (h[_] = g),
                            m
                        );
                    };
                },
            './node_modules/core-js/internals/create-property-descriptor.js':
                function (s, f) {
                    s.exports = function (i, l) {
                        return {
                            enumerable: !(i & 1),
                            configurable: !(i & 2),
                            writable: !(i & 4),
                            value: l,
                        };
                    };
                },
            './node_modules/core-js/internals/create-property.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/to-primitive.js'),
                    a = i(
                        './node_modules/core-js/internals/object-define-property.js'
                    ),
                    u = i(
                        './node_modules/core-js/internals/create-property-descriptor.js'
                    );
                s.exports = function (p, h, g) {
                    var m = l(h);
                    m in p ? a.f(p, m, u(0, g)) : (p[m] = g);
                };
            },
            './node_modules/core-js/internals/define-iterator.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/export.js'),
                    a = i(
                        './node_modules/core-js/internals/create-iterator-constructor.js'
                    ),
                    u = i(
                        './node_modules/core-js/internals/object-get-prototype-of.js'
                    ),
                    p = i(
                        './node_modules/core-js/internals/object-set-prototype-of.js'
                    ),
                    h = i(
                        './node_modules/core-js/internals/set-to-string-tag.js'
                    ),
                    g = i('./node_modules/core-js/internals/hide.js'),
                    m = i('./node_modules/core-js/internals/redefine.js'),
                    E = i(
                        './node_modules/core-js/internals/well-known-symbol.js'
                    ),
                    A = i('./node_modules/core-js/internals/is-pure.js'),
                    _ = i('./node_modules/core-js/internals/iterators.js'),
                    v = i('./node_modules/core-js/internals/iterators-core.js'),
                    O = v.IteratorPrototype,
                    T = v.BUGGY_SAFARI_ITERATORS,
                    w = E('iterator'),
                    S = 'keys',
                    L = 'values',
                    W = 'entries',
                    D = function () {
                        return this;
                    };
                s.exports = function ($, H, ue, ht, Te, tn, Mt) {
                    a(ue, H, ht);
                    var Oe = function (pe) {
                            if (pe === Te && ge) return ge;
                            if (!T && pe in le) return le[pe];
                            switch (pe) {
                                case S:
                                    return function () {
                                        return new ue(this, pe);
                                    };
                                case L:
                                    return function () {
                                        return new ue(this, pe);
                                    };
                                case W:
                                    return function () {
                                        return new ue(this, pe);
                                    };
                            }
                            return function () {
                                return new ue(this);
                            };
                        },
                        ft = H + ' Iterator',
                        Xe = !1,
                        le = $.prototype,
                        _e = le[w] || le['@@iterator'] || (Te && le[Te]),
                        ge = (!T && _e) || Oe(Te),
                        Ct = (H == 'Array' && le.entries) || _e,
                        Ee,
                        Se,
                        De;
                    if (
                        (Ct &&
                            ((Ee = u(Ct.call(new $()))),
                            O !== Object.prototype &&
                                Ee.next &&
                                (!A &&
                                    u(Ee) !== O &&
                                    (p
                                        ? p(Ee, O)
                                        : typeof Ee[w] != 'function' &&
                                          g(Ee, w, D)),
                                h(Ee, ft, !0, !0),
                                A && (_[ft] = D))),
                        Te == L &&
                            _e &&
                            _e.name !== L &&
                            ((Xe = !0),
                            (ge = function () {
                                return _e.call(this);
                            })),
                        (!A || Mt) && le[w] !== ge && g(le, w, ge),
                        (_[H] = ge),
                        Te)
                    )
                        if (
                            ((Se = {
                                values: Oe(L),
                                keys: tn ? ge : Oe(S),
                                entries: Oe(W),
                            }),
                            Mt)
                        )
                            for (De in Se)
                                (T || Xe || !(De in le)) && m(le, De, Se[De]);
                        else l({ target: H, proto: !0, forced: T || Xe }, Se);
                    return Se;
                };
            },
            './node_modules/core-js/internals/descriptors.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/fails.js');
                s.exports = !l(function () {
                    return (
                        Object.defineProperty({}, 'a', {
                            get: function () {
                                return 7;
                            },
                        }).a != 7
                    );
                });
            },
            './node_modules/core-js/internals/document-create-element.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/global.js'),
                        a = i('./node_modules/core-js/internals/is-object.js'),
                        u = l.document,
                        p = a(u) && a(u.createElement);
                    s.exports = function (h) {
                        return p ? u.createElement(h) : {};
                    };
                },
            './node_modules/core-js/internals/enum-bug-keys.js': function (
                s,
                f
            ) {
                s.exports = [
                    'constructor',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'toLocaleString',
                    'toString',
                    'valueOf',
                ];
            },
            './node_modules/core-js/internals/export.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i(
                        './node_modules/core-js/internals/object-get-own-property-descriptor.js'
                    ).f,
                    u = i('./node_modules/core-js/internals/hide.js'),
                    p = i('./node_modules/core-js/internals/redefine.js'),
                    h = i('./node_modules/core-js/internals/set-global.js'),
                    g = i(
                        './node_modules/core-js/internals/copy-constructor-properties.js'
                    ),
                    m = i('./node_modules/core-js/internals/is-forced.js');
                s.exports = function (E, A) {
                    var _ = E.target,
                        v = E.global,
                        O = E.stat,
                        T,
                        w,
                        S,
                        L,
                        W,
                        D;
                    if (
                        (v
                            ? (w = l)
                            : O
                              ? (w = l[_] || h(_, {}))
                              : (w = (l[_] || {}).prototype),
                        w)
                    )
                        for (S in A) {
                            if (
                                ((W = A[S]),
                                E.noTargetGet
                                    ? ((D = a(w, S)), (L = D && D.value))
                                    : (L = w[S]),
                                (T = m(
                                    v ? S : _ + (O ? '.' : '#') + S,
                                    E.forced
                                )),
                                !T && L !== void 0)
                            ) {
                                if (typeof W == typeof L) continue;
                                g(W, L);
                            }
                            (E.sham || (L && L.sham)) && u(W, 'sham', !0),
                                p(w, S, W, E);
                        }
                };
            },
            './node_modules/core-js/internals/fails.js': function (s, f) {
                s.exports = function (i) {
                    try {
                        return !!i();
                    } catch {
                        return !0;
                    }
                };
            },
            './node_modules/core-js/internals/function-to-string.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/shared.js');
                s.exports = l('native-function-to-string', Function.toString);
            },
            './node_modules/core-js/internals/get-iterator-method.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/classof.js'),
                        a = i('./node_modules/core-js/internals/iterators.js'),
                        u = i(
                            './node_modules/core-js/internals/well-known-symbol.js'
                        ),
                        p = u('iterator');
                    s.exports = function (h) {
                        if (h != null)
                            return h[p] || h['@@iterator'] || a[l(h)];
                    };
                },
            './node_modules/core-js/internals/global.js': function (s, f, i) {
                (function (l) {
                    var a = 'object',
                        u = function (p) {
                            return p && p.Math == Math && p;
                        };
                    s.exports =
                        u(typeof globalThis == a && globalThis) ||
                        u(typeof window == a && window) ||
                        u(typeof self == a && self) ||
                        u(typeof l == a && l) ||
                        Function('return this')();
                }).call(this, i('./node_modules/webpack/buildin/global.js'));
            },
            './node_modules/core-js/internals/has.js': function (s, f) {
                var i = {}.hasOwnProperty;
                s.exports = function (l, a) {
                    return i.call(l, a);
                };
            },
            './node_modules/core-js/internals/hidden-keys.js': function (s, f) {
                s.exports = {};
            },
            './node_modules/core-js/internals/hide.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/descriptors.js'),
                    a = i(
                        './node_modules/core-js/internals/object-define-property.js'
                    ),
                    u = i(
                        './node_modules/core-js/internals/create-property-descriptor.js'
                    );
                s.exports = l
                    ? function (p, h, g) {
                          return a.f(p, h, u(1, g));
                      }
                    : function (p, h, g) {
                          return (p[h] = g), p;
                      };
            },
            './node_modules/core-js/internals/html.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = l.document;
                s.exports = a && a.documentElement;
            },
            './node_modules/core-js/internals/ie8-dom-define.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/descriptors.js'),
                    a = i('./node_modules/core-js/internals/fails.js'),
                    u = i(
                        './node_modules/core-js/internals/document-create-element.js'
                    );
                s.exports =
                    !l &&
                    !a(function () {
                        return (
                            Object.defineProperty(u('div'), 'a', {
                                get: function () {
                                    return 7;
                                },
                            }).a != 7
                        );
                    });
            },
            './node_modules/core-js/internals/indexed-object.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/fails.js'),
                    a = i('./node_modules/core-js/internals/classof-raw.js'),
                    u = ''.split;
                s.exports = l(function () {
                    return !Object('z').propertyIsEnumerable(0);
                })
                    ? function (p) {
                          return a(p) == 'String' ? u.call(p, '') : Object(p);
                      }
                    : Object;
            },
            './node_modules/core-js/internals/internal-state.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                        './node_modules/core-js/internals/native-weak-map.js'
                    ),
                    a = i('./node_modules/core-js/internals/global.js'),
                    u = i('./node_modules/core-js/internals/is-object.js'),
                    p = i('./node_modules/core-js/internals/hide.js'),
                    h = i('./node_modules/core-js/internals/has.js'),
                    g = i('./node_modules/core-js/internals/shared-key.js'),
                    m = i('./node_modules/core-js/internals/hidden-keys.js'),
                    E = a.WeakMap,
                    A,
                    _,
                    v,
                    O = function ($) {
                        return v($) ? _($) : A($, {});
                    },
                    T = function ($) {
                        return function (H) {
                            var ue;
                            if (!u(H) || (ue = _(H)).type !== $)
                                throw TypeError(
                                    'Incompatible receiver, ' + $ + ' required'
                                );
                            return ue;
                        };
                    };
                if (l) {
                    var w = new E(),
                        S = w.get,
                        L = w.has,
                        W = w.set;
                    (A = function ($, H) {
                        return W.call(w, $, H), H;
                    }),
                        (_ = function ($) {
                            return S.call(w, $) || {};
                        }),
                        (v = function ($) {
                            return L.call(w, $);
                        });
                } else {
                    var D = g('state');
                    (m[D] = !0),
                        (A = function ($, H) {
                            return p($, D, H), H;
                        }),
                        (_ = function ($) {
                            return h($, D) ? $[D] : {};
                        }),
                        (v = function ($) {
                            return h($, D);
                        });
                }
                s.exports = {
                    set: A,
                    get: _,
                    has: v,
                    enforce: O,
                    getterFor: T,
                };
            },
            './node_modules/core-js/internals/is-array-iterator-method.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/well-known-symbol.js'
                        ),
                        a = i('./node_modules/core-js/internals/iterators.js'),
                        u = l('iterator'),
                        p = Array.prototype;
                    s.exports = function (h) {
                        return h !== void 0 && (a.Array === h || p[u] === h);
                    };
                },
            './node_modules/core-js/internals/is-forced.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/fails.js'),
                    a = /#|\.prototype\./,
                    u = function (E, A) {
                        var _ = h[p(E)];
                        return _ == m
                            ? !0
                            : _ == g
                              ? !1
                              : typeof A == 'function'
                                ? l(A)
                                : !!A;
                    },
                    p = (u.normalize = function (E) {
                        return String(E).replace(a, '.').toLowerCase();
                    }),
                    h = (u.data = {}),
                    g = (u.NATIVE = 'N'),
                    m = (u.POLYFILL = 'P');
                s.exports = u;
            },
            './node_modules/core-js/internals/is-object.js': function (s, f) {
                s.exports = function (i) {
                    return typeof i == 'object'
                        ? i !== null
                        : typeof i == 'function';
                };
            },
            './node_modules/core-js/internals/is-pure.js': function (s, f) {
                s.exports = !1;
            },
            './node_modules/core-js/internals/iterators-core.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                        './node_modules/core-js/internals/object-get-prototype-of.js'
                    ),
                    a = i('./node_modules/core-js/internals/hide.js'),
                    u = i('./node_modules/core-js/internals/has.js'),
                    p = i(
                        './node_modules/core-js/internals/well-known-symbol.js'
                    ),
                    h = i('./node_modules/core-js/internals/is-pure.js'),
                    g = p('iterator'),
                    m = !1,
                    E = function () {
                        return this;
                    },
                    A,
                    _,
                    v;
                [].keys &&
                    ((v = [].keys()),
                    'next' in v
                        ? ((_ = l(l(v))), _ !== Object.prototype && (A = _))
                        : (m = !0)),
                    A == null && (A = {}),
                    !h && !u(A, g) && a(A, g, E),
                    (s.exports = {
                        IteratorPrototype: A,
                        BUGGY_SAFARI_ITERATORS: m,
                    });
            },
            './node_modules/core-js/internals/iterators.js': function (s, f) {
                s.exports = {};
            },
            './node_modules/core-js/internals/native-symbol.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/fails.js');
                s.exports =
                    !!Object.getOwnPropertySymbols &&
                    !l(function () {
                        return !String(Symbol());
                    });
            },
            './node_modules/core-js/internals/native-weak-map.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i(
                        './node_modules/core-js/internals/function-to-string.js'
                    ),
                    u = l.WeakMap;
                s.exports =
                    typeof u == 'function' && /native code/.test(a.call(u));
            },
            './node_modules/core-js/internals/object-create.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/an-object.js'),
                    a = i(
                        './node_modules/core-js/internals/object-define-properties.js'
                    ),
                    u = i('./node_modules/core-js/internals/enum-bug-keys.js'),
                    p = i('./node_modules/core-js/internals/hidden-keys.js'),
                    h = i('./node_modules/core-js/internals/html.js'),
                    g = i(
                        './node_modules/core-js/internals/document-create-element.js'
                    ),
                    m = i('./node_modules/core-js/internals/shared-key.js'),
                    E = m('IE_PROTO'),
                    A = 'prototype',
                    _ = function () {},
                    v = function () {
                        var O = g('iframe'),
                            T = u.length,
                            w = '<',
                            S = 'script',
                            L = '>',
                            W = 'java' + S + ':',
                            D;
                        for (
                            O.style.display = 'none',
                                h.appendChild(O),
                                O.src = String(W),
                                D = O.contentWindow.document,
                                D.open(),
                                D.write(
                                    w +
                                        S +
                                        L +
                                        'document.F=Object' +
                                        w +
                                        '/' +
                                        S +
                                        L
                                ),
                                D.close(),
                                v = D.F;
                            T--;

                        )
                            delete v[A][u[T]];
                        return v();
                    };
                (s.exports =
                    Object.create ||
                    function (T, w) {
                        var S;
                        return (
                            T !== null
                                ? ((_[A] = l(T)),
                                  (S = new _()),
                                  (_[A] = null),
                                  (S[E] = T))
                                : (S = v()),
                            w === void 0 ? S : a(S, w)
                        );
                    }),
                    (p[E] = !0);
            },
            './node_modules/core-js/internals/object-define-properties.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/descriptors.js'
                        ),
                        a = i(
                            './node_modules/core-js/internals/object-define-property.js'
                        ),
                        u = i('./node_modules/core-js/internals/an-object.js'),
                        p = i(
                            './node_modules/core-js/internals/object-keys.js'
                        );
                    s.exports = l
                        ? Object.defineProperties
                        : function (g, m) {
                              u(g);
                              for (
                                  var E = p(m), A = E.length, _ = 0, v;
                                  A > _;

                              )
                                  a.f(g, (v = E[_++]), m[v]);
                              return g;
                          };
                },
            './node_modules/core-js/internals/object-define-property.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/descriptors.js'
                        ),
                        a = i(
                            './node_modules/core-js/internals/ie8-dom-define.js'
                        ),
                        u = i('./node_modules/core-js/internals/an-object.js'),
                        p = i(
                            './node_modules/core-js/internals/to-primitive.js'
                        ),
                        h = Object.defineProperty;
                    f.f = l
                        ? h
                        : function (m, E, A) {
                              if ((u(m), (E = p(E, !0)), u(A), a))
                                  try {
                                      return h(m, E, A);
                                  } catch {}
                              if ('get' in A || 'set' in A)
                                  throw TypeError('Accessors not supported');
                              return 'value' in A && (m[E] = A.value), m;
                          };
                },
            './node_modules/core-js/internals/object-get-own-property-descriptor.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/descriptors.js'
                        ),
                        a = i(
                            './node_modules/core-js/internals/object-property-is-enumerable.js'
                        ),
                        u = i(
                            './node_modules/core-js/internals/create-property-descriptor.js'
                        ),
                        p = i(
                            './node_modules/core-js/internals/to-indexed-object.js'
                        ),
                        h = i(
                            './node_modules/core-js/internals/to-primitive.js'
                        ),
                        g = i('./node_modules/core-js/internals/has.js'),
                        m = i(
                            './node_modules/core-js/internals/ie8-dom-define.js'
                        ),
                        E = Object.getOwnPropertyDescriptor;
                    f.f = l
                        ? E
                        : function (_, v) {
                              if (((_ = p(_)), (v = h(v, !0)), m))
                                  try {
                                      return E(_, v);
                                  } catch {}
                              if (g(_, v)) return u(!a.f.call(_, v), _[v]);
                          };
                },
            './node_modules/core-js/internals/object-get-own-property-names.js':
                function (s, f, i) {
                    var l = i(
                            './node_modules/core-js/internals/object-keys-internal.js'
                        ),
                        a = i(
                            './node_modules/core-js/internals/enum-bug-keys.js'
                        ),
                        u = a.concat('length', 'prototype');
                    f.f =
                        Object.getOwnPropertyNames ||
                        function (h) {
                            return l(h, u);
                        };
                },
            './node_modules/core-js/internals/object-get-own-property-symbols.js':
                function (s, f) {
                    f.f = Object.getOwnPropertySymbols;
                },
            './node_modules/core-js/internals/object-get-prototype-of.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/has.js'),
                        a = i('./node_modules/core-js/internals/to-object.js'),
                        u = i('./node_modules/core-js/internals/shared-key.js'),
                        p = i(
                            './node_modules/core-js/internals/correct-prototype-getter.js'
                        ),
                        h = u('IE_PROTO'),
                        g = Object.prototype;
                    s.exports = p
                        ? Object.getPrototypeOf
                        : function (m) {
                              return (
                                  (m = a(m)),
                                  l(m, h)
                                      ? m[h]
                                      : typeof m.constructor == 'function' &&
                                          m instanceof m.constructor
                                        ? m.constructor.prototype
                                        : m instanceof Object
                                          ? g
                                          : null
                              );
                          };
                },
            './node_modules/core-js/internals/object-keys-internal.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/has.js'),
                        a = i(
                            './node_modules/core-js/internals/to-indexed-object.js'
                        ),
                        u = i(
                            './node_modules/core-js/internals/array-includes.js'
                        ),
                        p = i(
                            './node_modules/core-js/internals/hidden-keys.js'
                        ),
                        h = u(!1);
                    s.exports = function (g, m) {
                        var E = a(g),
                            A = 0,
                            _ = [],
                            v;
                        for (v in E) !l(p, v) && l(E, v) && _.push(v);
                        for (; m.length > A; )
                            l(E, (v = m[A++])) && (~h(_, v) || _.push(v));
                        return _;
                    };
                },
            './node_modules/core-js/internals/object-keys.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                        './node_modules/core-js/internals/object-keys-internal.js'
                    ),
                    a = i('./node_modules/core-js/internals/enum-bug-keys.js');
                s.exports =
                    Object.keys ||
                    function (p) {
                        return l(p, a);
                    };
            },
            './node_modules/core-js/internals/object-property-is-enumerable.js':
                function (s, f, i) {
                    var l = {}.propertyIsEnumerable,
                        a = Object.getOwnPropertyDescriptor,
                        u = a && !l.call({ 1: 2 }, 1);
                    f.f = u
                        ? function (h) {
                              var g = a(this, h);
                              return !!g && g.enumerable;
                          }
                        : l;
                },
            './node_modules/core-js/internals/object-set-prototype-of.js':
                function (s, f, i) {
                    var l = i(
                        './node_modules/core-js/internals/validate-set-prototype-of-arguments.js'
                    );
                    s.exports =
                        Object.setPrototypeOf ||
                        ('__proto__' in {}
                            ? (function () {
                                  var a = !1,
                                      u = {},
                                      p;
                                  try {
                                      (p = Object.getOwnPropertyDescriptor(
                                          Object.prototype,
                                          '__proto__'
                                      ).set),
                                          p.call(u, []),
                                          (a = u instanceof Array);
                                  } catch {}
                                  return function (g, m) {
                                      return (
                                          l(g, m),
                                          a ? p.call(g, m) : (g.__proto__ = m),
                                          g
                                      );
                                  };
                              })()
                            : void 0);
                },
            './node_modules/core-js/internals/own-keys.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i(
                        './node_modules/core-js/internals/object-get-own-property-names.js'
                    ),
                    u = i(
                        './node_modules/core-js/internals/object-get-own-property-symbols.js'
                    ),
                    p = i('./node_modules/core-js/internals/an-object.js'),
                    h = l.Reflect;
                s.exports =
                    (h && h.ownKeys) ||
                    function (m) {
                        var E = a.f(p(m)),
                            A = u.f;
                        return A ? E.concat(A(m)) : E;
                    };
            },
            './node_modules/core-js/internals/path.js': function (s, f, i) {
                s.exports = i('./node_modules/core-js/internals/global.js');
            },
            './node_modules/core-js/internals/redefine.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i('./node_modules/core-js/internals/shared.js'),
                    u = i('./node_modules/core-js/internals/hide.js'),
                    p = i('./node_modules/core-js/internals/has.js'),
                    h = i('./node_modules/core-js/internals/set-global.js'),
                    g = i(
                        './node_modules/core-js/internals/function-to-string.js'
                    ),
                    m = i('./node_modules/core-js/internals/internal-state.js'),
                    E = m.get,
                    A = m.enforce,
                    _ = String(g).split('toString');
                a('inspectSource', function (v) {
                    return g.call(v);
                }),
                    (s.exports = function (v, O, T, w) {
                        var S = w ? !!w.unsafe : !1,
                            L = w ? !!w.enumerable : !1,
                            W = w ? !!w.noTargetGet : !1;
                        if (
                            (typeof T == 'function' &&
                                (typeof O == 'string' &&
                                    !p(T, 'name') &&
                                    u(T, 'name', O),
                                (A(T).source = _.join(
                                    typeof O == 'string' ? O : ''
                                ))),
                            v === l)
                        ) {
                            L ? (v[O] = T) : h(O, T);
                            return;
                        } else S ? !W && v[O] && (L = !0) : delete v[O];
                        L ? (v[O] = T) : u(v, O, T);
                    })(Function.prototype, 'toString', function () {
                        return (
                            (typeof this == 'function' && E(this).source) ||
                            g.call(this)
                        );
                    });
            },
            './node_modules/core-js/internals/require-object-coercible.js':
                function (s, f) {
                    s.exports = function (i) {
                        if (i == null)
                            throw TypeError("Can't call method on " + i);
                        return i;
                    };
                },
            './node_modules/core-js/internals/set-global.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i('./node_modules/core-js/internals/hide.js');
                s.exports = function (u, p) {
                    try {
                        a(l, u, p);
                    } catch {
                        l[u] = p;
                    }
                    return p;
                };
            },
            './node_modules/core-js/internals/set-to-string-tag.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                        './node_modules/core-js/internals/object-define-property.js'
                    ).f,
                    a = i('./node_modules/core-js/internals/has.js'),
                    u = i(
                        './node_modules/core-js/internals/well-known-symbol.js'
                    ),
                    p = u('toStringTag');
                s.exports = function (h, g, m) {
                    h &&
                        !a((h = m ? h : h.prototype), p) &&
                        l(h, p, { configurable: !0, value: g });
                };
            },
            './node_modules/core-js/internals/shared-key.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/shared.js'),
                    a = i('./node_modules/core-js/internals/uid.js'),
                    u = l('keys');
                s.exports = function (p) {
                    return u[p] || (u[p] = a(p));
                };
            },
            './node_modules/core-js/internals/shared.js': function (s, f, i) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i('./node_modules/core-js/internals/set-global.js'),
                    u = i('./node_modules/core-js/internals/is-pure.js'),
                    p = '__core-js_shared__',
                    h = l[p] || a(p, {});
                (s.exports = function (g, m) {
                    return h[g] || (h[g] = m !== void 0 ? m : {});
                })('versions', []).push({
                    version: '3.1.3',
                    mode: u ? 'pure' : 'global',
                    copyright: '© 2019 Denis Pushkarev (zloirock.ru)',
                });
            },
            './node_modules/core-js/internals/string-at.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/to-integer.js'),
                    a = i(
                        './node_modules/core-js/internals/require-object-coercible.js'
                    );
                s.exports = function (u, p, h) {
                    var g = String(a(u)),
                        m = l(p),
                        E = g.length,
                        A,
                        _;
                    return m < 0 || m >= E
                        ? h
                            ? ''
                            : void 0
                        : ((A = g.charCodeAt(m)),
                          A < 55296 ||
                          A > 56319 ||
                          m + 1 === E ||
                          (_ = g.charCodeAt(m + 1)) < 56320 ||
                          _ > 57343
                              ? h
                                  ? g.charAt(m)
                                  : A
                              : h
                                ? g.slice(m, m + 2)
                                : ((A - 55296) << 10) + (_ - 56320) + 65536);
                };
            },
            './node_modules/core-js/internals/to-absolute-index.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/to-integer.js'),
                    a = Math.max,
                    u = Math.min;
                s.exports = function (p, h) {
                    var g = l(p);
                    return g < 0 ? a(g + h, 0) : u(g, h);
                };
            },
            './node_modules/core-js/internals/to-indexed-object.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/indexed-object.js'),
                    a = i(
                        './node_modules/core-js/internals/require-object-coercible.js'
                    );
                s.exports = function (u) {
                    return l(a(u));
                };
            },
            './node_modules/core-js/internals/to-integer.js': function (s, f) {
                var i = Math.ceil,
                    l = Math.floor;
                s.exports = function (a) {
                    return isNaN((a = +a)) ? 0 : (a > 0 ? l : i)(a);
                };
            },
            './node_modules/core-js/internals/to-length.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/to-integer.js'),
                    a = Math.min;
                s.exports = function (u) {
                    return u > 0 ? a(l(u), 9007199254740991) : 0;
                };
            },
            './node_modules/core-js/internals/to-object.js': function (
                s,
                f,
                i
            ) {
                var l = i(
                    './node_modules/core-js/internals/require-object-coercible.js'
                );
                s.exports = function (a) {
                    return Object(l(a));
                };
            },
            './node_modules/core-js/internals/to-primitive.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/is-object.js');
                s.exports = function (a, u) {
                    if (!l(a)) return a;
                    var p, h;
                    if (
                        (u &&
                            typeof (p = a.toString) == 'function' &&
                            !l((h = p.call(a)))) ||
                        (typeof (p = a.valueOf) == 'function' &&
                            !l((h = p.call(a)))) ||
                        (!u &&
                            typeof (p = a.toString) == 'function' &&
                            !l((h = p.call(a))))
                    )
                        return h;
                    throw TypeError("Can't convert object to primitive value");
                };
            },
            './node_modules/core-js/internals/uid.js': function (s, f) {
                var i = 0,
                    l = Math.random();
                s.exports = function (a) {
                    return 'Symbol('.concat(
                        a === void 0 ? '' : a,
                        ')_',
                        (++i + l).toString(36)
                    );
                };
            },
            './node_modules/core-js/internals/validate-set-prototype-of-arguments.js':
                function (s, f, i) {
                    var l = i('./node_modules/core-js/internals/is-object.js'),
                        a = i('./node_modules/core-js/internals/an-object.js');
                    s.exports = function (u, p) {
                        if ((a(u), !l(p) && p !== null))
                            throw TypeError(
                                "Can't set " + String(p) + ' as a prototype'
                            );
                    };
                },
            './node_modules/core-js/internals/well-known-symbol.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/global.js'),
                    a = i('./node_modules/core-js/internals/shared.js'),
                    u = i('./node_modules/core-js/internals/uid.js'),
                    p = i('./node_modules/core-js/internals/native-symbol.js'),
                    h = l.Symbol,
                    g = a('wks');
                s.exports = function (m) {
                    return (
                        g[m] ||
                        (g[m] = (p && h[m]) || (p ? h : u)('Symbol.' + m))
                    );
                };
            },
            './node_modules/core-js/modules/es.array.from.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/export.js'),
                    a = i('./node_modules/core-js/internals/array-from.js'),
                    u = i(
                        './node_modules/core-js/internals/check-correctness-of-iteration.js'
                    ),
                    p = !u(function (h) {
                        Array.from(h);
                    });
                l({ target: 'Array', stat: !0, forced: p }, { from: a });
            },
            './node_modules/core-js/modules/es.string.iterator.js': function (
                s,
                f,
                i
            ) {
                var l = i('./node_modules/core-js/internals/string-at.js'),
                    a = i('./node_modules/core-js/internals/internal-state.js'),
                    u = i(
                        './node_modules/core-js/internals/define-iterator.js'
                    ),
                    p = 'String Iterator',
                    h = a.set,
                    g = a.getterFor(p);
                u(
                    String,
                    'String',
                    function (m) {
                        h(this, { type: p, string: String(m), index: 0 });
                    },
                    function () {
                        var E = g(this),
                            A = E.string,
                            _ = E.index,
                            v;
                        return _ >= A.length
                            ? { value: void 0, done: !0 }
                            : ((v = l(A, _, !0)),
                              (E.index += v.length),
                              { value: v, done: !1 });
                    }
                );
            },
            './node_modules/webpack/buildin/global.js': function (s, f) {
                var i;
                i = (function () {
                    return this;
                })();
                try {
                    i = i || Function('return this')() || (0, eval)('this');
                } catch {
                    typeof window == 'object' && (i = window);
                }
                s.exports = i;
            },
            './src/default-attrs.json': function (s) {
                s.exports = {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: 24,
                    height: 24,
                    viewBox: '0 0 24 24',
                    fill: 'none',
                    stroke: 'currentColor',
                    'stroke-width': 2,
                    'stroke-linecap': 'round',
                    'stroke-linejoin': 'round',
                };
            },
            './src/icon.js': function (s, f, i) {
                Object.defineProperty(f, '__esModule', { value: !0 });
                var l =
                        Object.assign ||
                        function (v) {
                            for (var O = 1; O < arguments.length; O++) {
                                var T = arguments[O];
                                for (var w in T)
                                    Object.prototype.hasOwnProperty.call(
                                        T,
                                        w
                                    ) && (v[w] = T[w]);
                            }
                            return v;
                        },
                    a = (function () {
                        function v(O, T) {
                            for (var w = 0; w < T.length; w++) {
                                var S = T[w];
                                (S.enumerable = S.enumerable || !1),
                                    (S.configurable = !0),
                                    'value' in S && (S.writable = !0),
                                    Object.defineProperty(O, S.key, S);
                            }
                        }
                        return function (O, T, w) {
                            return T && v(O.prototype, T), w && v(O, w), O;
                        };
                    })(),
                    u = i('./node_modules/classnames/dedupe.js'),
                    p = m(u),
                    h = i('./src/default-attrs.json'),
                    g = m(h);
                function m(v) {
                    return v && v.__esModule ? v : { default: v };
                }
                function E(v, O) {
                    if (!(v instanceof O))
                        throw new TypeError(
                            'Cannot call a class as a function'
                        );
                }
                var A = (function () {
                    function v(O, T) {
                        var w =
                            arguments.length > 2 && arguments[2] !== void 0
                                ? arguments[2]
                                : [];
                        E(this, v),
                            (this.name = O),
                            (this.contents = T),
                            (this.tags = w),
                            (this.attrs = l({}, g.default, {
                                class: 'feather feather-' + O,
                            }));
                    }
                    return (
                        a(v, [
                            {
                                key: 'toSvg',
                                value: function () {
                                    var T =
                                            arguments.length > 0 &&
                                            arguments[0] !== void 0
                                                ? arguments[0]
                                                : {},
                                        w = l({}, this.attrs, T, {
                                            class: (0, p.default)(
                                                this.attrs.class,
                                                T.class
                                            ),
                                        });
                                    return (
                                        '<svg ' +
                                        _(w) +
                                        '>' +
                                        this.contents +
                                        '</svg>'
                                    );
                                },
                            },
                            {
                                key: 'toString',
                                value: function () {
                                    return this.contents;
                                },
                            },
                        ]),
                        v
                    );
                })();
                function _(v) {
                    return Object.keys(v)
                        .map(function (O) {
                            return O + '="' + v[O] + '"';
                        })
                        .join(' ');
                }
                f.default = A;
            },
            './src/icons.js': function (s, f, i) {
                Object.defineProperty(f, '__esModule', { value: !0 });
                var l = i('./src/icon.js'),
                    a = m(l),
                    u = i('./dist/icons.json'),
                    p = m(u),
                    h = i('./src/tags.json'),
                    g = m(h);
                function m(E) {
                    return E && E.__esModule ? E : { default: E };
                }
                f.default = Object.keys(p.default)
                    .map(function (E) {
                        return new a.default(E, p.default[E], g.default[E]);
                    })
                    .reduce(function (E, A) {
                        return (E[A.name] = A), E;
                    }, {});
            },
            './src/index.js': function (s, f, i) {
                var l = i('./src/icons.js'),
                    a = m(l),
                    u = i('./src/to-svg.js'),
                    p = m(u),
                    h = i('./src/replace.js'),
                    g = m(h);
                function m(E) {
                    return E && E.__esModule ? E : { default: E };
                }
                s.exports = {
                    icons: a.default,
                    toSvg: p.default,
                    replace: g.default,
                };
            },
            './src/replace.js': function (s, f, i) {
                Object.defineProperty(f, '__esModule', { value: !0 });
                var l =
                        Object.assign ||
                        function (_) {
                            for (var v = 1; v < arguments.length; v++) {
                                var O = arguments[v];
                                for (var T in O)
                                    Object.prototype.hasOwnProperty.call(
                                        O,
                                        T
                                    ) && (_[T] = O[T]);
                            }
                            return _;
                        },
                    a = i('./node_modules/classnames/dedupe.js'),
                    u = g(a),
                    p = i('./src/icons.js'),
                    h = g(p);
                function g(_) {
                    return _ && _.__esModule ? _ : { default: _ };
                }
                function m() {
                    var _ =
                        arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : {};
                    if (typeof document > 'u')
                        throw new Error(
                            '`feather.replace()` only works in a browser environment.'
                        );
                    var v = document.querySelectorAll('[data-feather]');
                    Array.from(v).forEach(function (O) {
                        return E(O, _);
                    });
                }
                function E(_) {
                    var v =
                            arguments.length > 1 && arguments[1] !== void 0
                                ? arguments[1]
                                : {},
                        O = A(_),
                        T = O['data-feather'];
                    delete O['data-feather'];
                    var w = h.default[T].toSvg(
                            l({}, v, O, {
                                class: (0, u.default)(v.class, O.class),
                            })
                        ),
                        S = new DOMParser().parseFromString(w, 'image/svg+xml'),
                        L = S.querySelector('svg');
                    _.parentNode.replaceChild(L, _);
                }
                function A(_) {
                    return Array.from(_.attributes).reduce(function (v, O) {
                        return (v[O.name] = O.value), v;
                    }, {});
                }
                f.default = m;
            },
            './src/tags.json': function (s) {
                s.exports = {
                    activity: ['pulse', 'health', 'action', 'motion'],
                    airplay: ['stream', 'cast', 'mirroring'],
                    'alert-circle': ['warning', 'alert', 'danger'],
                    'alert-octagon': ['warning', 'alert', 'danger'],
                    'alert-triangle': ['warning', 'alert', 'danger'],
                    'align-center': ['text alignment', 'center'],
                    'align-justify': ['text alignment', 'justified'],
                    'align-left': ['text alignment', 'left'],
                    'align-right': ['text alignment', 'right'],
                    anchor: [],
                    archive: ['index', 'box'],
                    'at-sign': ['mention', 'at', 'email', 'message'],
                    award: ['achievement', 'badge'],
                    aperture: ['camera', 'photo'],
                    'bar-chart': ['statistics', 'diagram', 'graph'],
                    'bar-chart-2': ['statistics', 'diagram', 'graph'],
                    battery: ['power', 'electricity'],
                    'battery-charging': ['power', 'electricity'],
                    bell: ['alarm', 'notification', 'sound'],
                    'bell-off': ['alarm', 'notification', 'silent'],
                    bluetooth: ['wireless'],
                    'book-open': ['read', 'library'],
                    book: [
                        'read',
                        'dictionary',
                        'booklet',
                        'magazine',
                        'library',
                    ],
                    bookmark: ['read', 'clip', 'marker', 'tag'],
                    box: ['cube'],
                    briefcase: ['work', 'bag', 'baggage', 'folder'],
                    calendar: ['date'],
                    camera: ['photo'],
                    cast: ['chromecast', 'airplay'],
                    'chevron-down': ['expand'],
                    'chevron-up': ['collapse'],
                    circle: ['off', 'zero', 'record'],
                    clipboard: ['copy'],
                    clock: ['time', 'watch', 'alarm'],
                    'cloud-drizzle': ['weather', 'shower'],
                    'cloud-lightning': ['weather', 'bolt'],
                    'cloud-rain': ['weather'],
                    'cloud-snow': ['weather', 'blizzard'],
                    cloud: ['weather'],
                    codepen: ['logo'],
                    codesandbox: ['logo'],
                    code: ['source', 'programming'],
                    coffee: [
                        'drink',
                        'cup',
                        'mug',
                        'tea',
                        'cafe',
                        'hot',
                        'beverage',
                    ],
                    columns: ['layout'],
                    command: ['keyboard', 'cmd', 'terminal', 'prompt'],
                    compass: ['navigation', 'safari', 'travel', 'direction'],
                    copy: ['clone', 'duplicate'],
                    'corner-down-left': ['arrow', 'return'],
                    'corner-down-right': ['arrow'],
                    'corner-left-down': ['arrow'],
                    'corner-left-up': ['arrow'],
                    'corner-right-down': ['arrow'],
                    'corner-right-up': ['arrow'],
                    'corner-up-left': ['arrow'],
                    'corner-up-right': ['arrow'],
                    cpu: ['processor', 'technology'],
                    'credit-card': ['purchase', 'payment', 'cc'],
                    crop: ['photo', 'image'],
                    crosshair: ['aim', 'target'],
                    database: ['storage', 'memory'],
                    delete: ['remove'],
                    disc: ['album', 'cd', 'dvd', 'music'],
                    'dollar-sign': ['currency', 'money', 'payment'],
                    droplet: ['water'],
                    edit: ['pencil', 'change'],
                    'edit-2': ['pencil', 'change'],
                    'edit-3': ['pencil', 'change'],
                    eye: ['view', 'watch'],
                    'eye-off': ['view', 'watch', 'hide', 'hidden'],
                    'external-link': ['outbound'],
                    facebook: ['logo', 'social'],
                    'fast-forward': ['music'],
                    figma: ['logo', 'design', 'tool'],
                    'file-minus': ['delete', 'remove', 'erase'],
                    'file-plus': ['add', 'create', 'new'],
                    'file-text': ['data', 'txt', 'pdf'],
                    film: ['movie', 'video'],
                    filter: ['funnel', 'hopper'],
                    flag: ['report'],
                    'folder-minus': ['directory'],
                    'folder-plus': ['directory'],
                    folder: ['directory'],
                    framer: ['logo', 'design', 'tool'],
                    frown: ['emoji', 'face', 'bad', 'sad', 'emotion'],
                    gift: ['present', 'box', 'birthday', 'party'],
                    'git-branch': ['code', 'version control'],
                    'git-commit': ['code', 'version control'],
                    'git-merge': ['code', 'version control'],
                    'git-pull-request': ['code', 'version control'],
                    github: ['logo', 'version control'],
                    gitlab: ['logo', 'version control'],
                    globe: ['world', 'browser', 'language', 'translate'],
                    'hard-drive': ['computer', 'server', 'memory', 'data'],
                    hash: ['hashtag', 'number', 'pound'],
                    headphones: ['music', 'audio', 'sound'],
                    heart: ['like', 'love', 'emotion'],
                    'help-circle': ['question mark'],
                    hexagon: ['shape', 'node.js', 'logo'],
                    home: ['house', 'living'],
                    image: ['picture'],
                    inbox: ['email'],
                    instagram: ['logo', 'camera'],
                    key: ['password', 'login', 'authentication', 'secure'],
                    layers: ['stack'],
                    layout: ['window', 'webpage'],
                    'life-buoy': ['help', 'life ring', 'support'],
                    link: ['chain', 'url'],
                    'link-2': ['chain', 'url'],
                    linkedin: ['logo', 'social media'],
                    list: ['options'],
                    lock: ['security', 'password', 'secure'],
                    'log-in': ['sign in', 'arrow', 'enter'],
                    'log-out': ['sign out', 'arrow', 'exit'],
                    mail: ['email', 'message'],
                    'map-pin': ['location', 'navigation', 'travel', 'marker'],
                    map: ['location', 'navigation', 'travel'],
                    maximize: ['fullscreen'],
                    'maximize-2': ['fullscreen', 'arrows', 'expand'],
                    meh: ['emoji', 'face', 'neutral', 'emotion'],
                    menu: ['bars', 'navigation', 'hamburger'],
                    'message-circle': ['comment', 'chat'],
                    'message-square': ['comment', 'chat'],
                    'mic-off': ['record', 'sound', 'mute'],
                    mic: ['record', 'sound', 'listen'],
                    minimize: ['exit fullscreen', 'close'],
                    'minimize-2': ['exit fullscreen', 'arrows', 'close'],
                    minus: ['subtract'],
                    monitor: ['tv', 'screen', 'display'],
                    moon: ['dark', 'night'],
                    'more-horizontal': ['ellipsis'],
                    'more-vertical': ['ellipsis'],
                    'mouse-pointer': ['arrow', 'cursor'],
                    move: ['arrows'],
                    music: ['note'],
                    navigation: ['location', 'travel'],
                    'navigation-2': ['location', 'travel'],
                    octagon: ['stop'],
                    package: ['box', 'container'],
                    paperclip: ['attachment'],
                    pause: ['music', 'stop'],
                    'pause-circle': ['music', 'audio', 'stop'],
                    'pen-tool': ['vector', 'drawing'],
                    percent: ['discount'],
                    'phone-call': ['ring'],
                    'phone-forwarded': ['call'],
                    'phone-incoming': ['call'],
                    'phone-missed': ['call'],
                    'phone-off': ['call', 'mute'],
                    'phone-outgoing': ['call'],
                    phone: ['call'],
                    play: ['music', 'start'],
                    'pie-chart': ['statistics', 'diagram'],
                    'play-circle': ['music', 'start'],
                    plus: ['add', 'new'],
                    'plus-circle': ['add', 'new'],
                    'plus-square': ['add', 'new'],
                    pocket: ['logo', 'save'],
                    power: ['on', 'off'],
                    printer: ['fax', 'office', 'device'],
                    radio: ['signal'],
                    'refresh-cw': ['synchronise', 'arrows'],
                    'refresh-ccw': ['arrows'],
                    repeat: ['loop', 'arrows'],
                    rewind: ['music'],
                    'rotate-ccw': ['arrow'],
                    'rotate-cw': ['arrow'],
                    rss: ['feed', 'subscribe'],
                    save: ['floppy disk'],
                    scissors: ['cut'],
                    search: ['find', 'magnifier', 'magnifying glass'],
                    send: [
                        'message',
                        'mail',
                        'email',
                        'paper airplane',
                        'paper aeroplane',
                    ],
                    settings: ['cog', 'edit', 'gear', 'preferences'],
                    'share-2': ['network', 'connections'],
                    shield: ['security', 'secure'],
                    'shield-off': ['security', 'insecure'],
                    'shopping-bag': ['ecommerce', 'cart', 'purchase', 'store'],
                    'shopping-cart': ['ecommerce', 'cart', 'purchase', 'store'],
                    shuffle: ['music'],
                    'skip-back': ['music'],
                    'skip-forward': ['music'],
                    slack: ['logo'],
                    slash: ['ban', 'no'],
                    sliders: ['settings', 'controls'],
                    smartphone: ['cellphone', 'device'],
                    smile: ['emoji', 'face', 'happy', 'good', 'emotion'],
                    speaker: ['audio', 'music'],
                    star: ['bookmark', 'favorite', 'like'],
                    'stop-circle': ['media', 'music'],
                    sun: ['brightness', 'weather', 'light'],
                    sunrise: ['weather', 'time', 'morning', 'day'],
                    sunset: ['weather', 'time', 'evening', 'night'],
                    tablet: ['device'],
                    tag: ['label'],
                    target: ['logo', 'bullseye'],
                    terminal: ['code', 'command line', 'prompt'],
                    thermometer: [
                        'temperature',
                        'celsius',
                        'fahrenheit',
                        'weather',
                    ],
                    'thumbs-down': ['dislike', 'bad', 'emotion'],
                    'thumbs-up': ['like', 'good', 'emotion'],
                    'toggle-left': ['on', 'off', 'switch'],
                    'toggle-right': ['on', 'off', 'switch'],
                    tool: ['settings', 'spanner'],
                    trash: ['garbage', 'delete', 'remove', 'bin'],
                    'trash-2': ['garbage', 'delete', 'remove', 'bin'],
                    triangle: ['delta'],
                    truck: [
                        'delivery',
                        'van',
                        'shipping',
                        'transport',
                        'lorry',
                    ],
                    tv: ['television', 'stream'],
                    twitch: ['logo'],
                    twitter: ['logo', 'social'],
                    type: ['text'],
                    umbrella: ['rain', 'weather'],
                    unlock: ['security'],
                    'user-check': ['followed', 'subscribed'],
                    'user-minus': [
                        'delete',
                        'remove',
                        'unfollow',
                        'unsubscribe',
                    ],
                    'user-plus': [
                        'new',
                        'add',
                        'create',
                        'follow',
                        'subscribe',
                    ],
                    'user-x': [
                        'delete',
                        'remove',
                        'unfollow',
                        'unsubscribe',
                        'unavailable',
                    ],
                    user: ['person', 'account'],
                    users: ['group'],
                    'video-off': ['camera', 'movie', 'film'],
                    video: ['camera', 'movie', 'film'],
                    voicemail: ['phone'],
                    volume: ['music', 'sound', 'mute'],
                    'volume-1': ['music', 'sound'],
                    'volume-2': ['music', 'sound'],
                    'volume-x': ['music', 'sound', 'mute'],
                    watch: ['clock', 'time'],
                    'wifi-off': ['disabled'],
                    wifi: ['connection', 'signal', 'wireless'],
                    wind: ['weather', 'air'],
                    'x-circle': [
                        'cancel',
                        'close',
                        'delete',
                        'remove',
                        'times',
                        'clear',
                    ],
                    'x-octagon': [
                        'delete',
                        'stop',
                        'alert',
                        'warning',
                        'times',
                        'clear',
                    ],
                    'x-square': [
                        'cancel',
                        'close',
                        'delete',
                        'remove',
                        'times',
                        'clear',
                    ],
                    x: [
                        'cancel',
                        'close',
                        'delete',
                        'remove',
                        'times',
                        'clear',
                    ],
                    youtube: ['logo', 'video', 'play'],
                    'zap-off': ['flash', 'camera', 'lightning'],
                    zap: ['flash', 'camera', 'lightning'],
                    'zoom-in': ['magnifying glass'],
                    'zoom-out': ['magnifying glass'],
                };
            },
            './src/to-svg.js': function (s, f, i) {
                Object.defineProperty(f, '__esModule', { value: !0 });
                var l = i('./src/icons.js'),
                    a = u(l);
                function u(h) {
                    return h && h.__esModule ? h : { default: h };
                }
                function p(h) {
                    var g =
                        arguments.length > 1 && arguments[1] !== void 0
                            ? arguments[1]
                            : {};
                    if (
                        (console.warn(
                            'feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead.'
                        ),
                        !h)
                    )
                        throw new Error(
                            'The required `key` (icon name) parameter is missing.'
                        );
                    if (!a.default[h])
                        throw new Error(
                            "No icon matching '" +
                                h +
                                "'. See the complete list of icons at https://feathericons.com"
                        );
                    return a.default[h].toSvg(g);
                }
                f.default = p;
            },
            0: function (s, f, i) {
                i('./node_modules/core-js/es/array/from.js'),
                    (s.exports = i('./src/index.js'));
            },
        });
    });
})(bi);
var sc = bi.exports;
const ac = Ei(sc);
var Ai = { exports: {} };
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (Q, z) {
    (function (s, f) {
        Q.exports = f();
    })(_i, function () {
        const s = new Map(),
            f = {
                set(n, e, t) {
                    s.has(n) || s.set(n, new Map());
                    const r = s.get(n);
                    if (!r.has(e) && r.size !== 0) {
                        console.error(
                            `Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`
                        );
                        return;
                    }
                    r.set(e, t);
                },
                get(n, e) {
                    return (s.has(n) && s.get(n).get(e)) || null;
                },
                remove(n, e) {
                    if (!s.has(n)) return;
                    const t = s.get(n);
                    t.delete(e), t.size === 0 && s.delete(n);
                },
            },
            i = 1e6,
            l = 1e3,
            a = 'transitionend',
            u = (n) => (
                n &&
                    window.CSS &&
                    window.CSS.escape &&
                    (n = n.replace(
                        /#([^\s"#']+)/g,
                        (e, t) => `#${CSS.escape(t)}`
                    )),
                n
            ),
            p = (n) =>
                n == null
                    ? `${n}`
                    : Object.prototype.toString
                          .call(n)
                          .match(/\s([a-z]+)/i)[1]
                          .toLowerCase(),
            h = (n) => {
                do n += Math.floor(Math.random() * i);
                while (document.getElementById(n));
                return n;
            },
            g = (n) => {
                if (!n) return 0;
                let { transitionDuration: e, transitionDelay: t } =
                    window.getComputedStyle(n);
                const r = Number.parseFloat(e),
                    o = Number.parseFloat(t);
                return !r && !o
                    ? 0
                    : ((e = e.split(',')[0]),
                      (t = t.split(',')[0]),
                      (Number.parseFloat(e) + Number.parseFloat(t)) * l);
            },
            m = (n) => {
                n.dispatchEvent(new Event(a));
            },
            E = (n) =>
                !n || typeof n != 'object'
                    ? !1
                    : (typeof n.jquery < 'u' && (n = n[0]),
                      typeof n.nodeType < 'u'),
            A = (n) =>
                E(n)
                    ? n.jquery
                        ? n[0]
                        : n
                    : typeof n == 'string' && n.length > 0
                      ? document.querySelector(u(n))
                      : null,
            _ = (n) => {
                if (!E(n) || n.getClientRects().length === 0) return !1;
                const e =
                        getComputedStyle(n).getPropertyValue('visibility') ===
                        'visible',
                    t = n.closest('details:not([open])');
                if (!t) return e;
                if (t !== n) {
                    const r = n.closest('summary');
                    if ((r && r.parentNode !== t) || r === null) return !1;
                }
                return e;
            },
            v = (n) =>
                !n ||
                n.nodeType !== Node.ELEMENT_NODE ||
                n.classList.contains('disabled')
                    ? !0
                    : typeof n.disabled < 'u'
                      ? n.disabled
                      : n.hasAttribute('disabled') &&
                        n.getAttribute('disabled') !== 'false',
            O = (n) => {
                if (!document.documentElement.attachShadow) return null;
                if (typeof n.getRootNode == 'function') {
                    const e = n.getRootNode();
                    return e instanceof ShadowRoot ? e : null;
                }
                return n instanceof ShadowRoot
                    ? n
                    : n.parentNode
                      ? O(n.parentNode)
                      : null;
            },
            T = () => {},
            w = (n) => {
                n.offsetHeight;
            },
            S = () =>
                window.jQuery &&
                !document.body.hasAttribute('data-bs-no-jquery')
                    ? window.jQuery
                    : null,
            L = [],
            W = (n) => {
                document.readyState === 'loading'
                    ? (L.length ||
                          document.addEventListener('DOMContentLoaded', () => {
                              for (const e of L) e();
                          }),
                      L.push(n))
                    : n();
            },
            D = () => document.documentElement.dir === 'rtl',
            $ = (n) => {
                W(() => {
                    const e = S();
                    if (e) {
                        const t = n.NAME,
                            r = e.fn[t];
                        (e.fn[t] = n.jQueryInterface),
                            (e.fn[t].Constructor = n),
                            (e.fn[t].noConflict = () => (
                                (e.fn[t] = r), n.jQueryInterface
                            ));
                    }
                });
            },
            H = (n, e = [], t = n) => (typeof n == 'function' ? n(...e) : t),
            ue = (n, e, t = !0) => {
                if (!t) {
                    H(n);
                    return;
                }
                const o = g(e) + 5;
                let c = !1;
                const d = ({ target: y }) => {
                    y === e && ((c = !0), e.removeEventListener(a, d), H(n));
                };
                e.addEventListener(a, d),
                    setTimeout(() => {
                        c || m(e);
                    }, o);
            },
            ht = (n, e, t, r) => {
                const o = n.length;
                let c = n.indexOf(e);
                return c === -1
                    ? !t && r
                        ? n[o - 1]
                        : n[0]
                    : ((c += t ? 1 : -1),
                      r && (c = (c + o) % o),
                      n[Math.max(0, Math.min(c, o - 1))]);
            },
            Te = /[^.]*(?=\..*)\.|.*/,
            tn = /\..*/,
            Mt = /::\d+$/,
            Oe = {};
        let ft = 1;
        const Xe = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
            le = new Set([
                'click',
                'dblclick',
                'mouseup',
                'mousedown',
                'contextmenu',
                'mousewheel',
                'DOMMouseScroll',
                'mouseover',
                'mouseout',
                'mousemove',
                'selectstart',
                'selectend',
                'keydown',
                'keypress',
                'keyup',
                'orientationchange',
                'touchstart',
                'touchmove',
                'touchend',
                'touchcancel',
                'pointerdown',
                'pointermove',
                'pointerup',
                'pointerleave',
                'pointercancel',
                'gesturestart',
                'gesturechange',
                'gestureend',
                'focus',
                'blur',
                'change',
                'reset',
                'select',
                'submit',
                'focusin',
                'focusout',
                'load',
                'unload',
                'beforeunload',
                'resize',
                'move',
                'DOMContentLoaded',
                'readystatechange',
                'error',
                'abort',
                'scroll',
            ]);
        function _e(n, e) {
            return (e && `${e}::${ft++}`) || n.uidEvent || ft++;
        }
        function ge(n) {
            const e = _e(n);
            return (n.uidEvent = e), (Oe[e] = Oe[e] || {}), Oe[e];
        }
        function Ct(n, e) {
            return function t(r) {
                return (
                    nn(r, { delegateTarget: n }),
                    t.oneOff && x.off(n, r.type, e),
                    e.apply(n, [r])
                );
            };
        }
        function Ee(n, e, t) {
            return function r(o) {
                const c = n.querySelectorAll(e);
                for (let { target: d } = o; d && d !== this; d = d.parentNode)
                    for (const y of c)
                        if (y === d)
                            return (
                                nn(o, { delegateTarget: d }),
                                r.oneOff && x.off(n, o.type, e, t),
                                t.apply(d, [o])
                            );
            };
        }
        function Se(n, e, t = null) {
            return Object.values(n).find(
                (r) => r.callable === e && r.delegationSelector === t
            );
        }
        function De(n, e, t) {
            const r = typeof e == 'string',
                o = r ? t : e || t;
            let c = kn(n);
            return le.has(c) || (c = n), [r, o, c];
        }
        function pe(n, e, t, r, o) {
            if (typeof e != 'string' || !n) return;
            let [c, d, y] = De(e, t, r);
            e in Xe &&
                (d = ((B) =>
                    function (R) {
                        if (
                            !R.relatedTarget ||
                            (R.relatedTarget !== R.delegateTarget &&
                                !R.delegateTarget.contains(R.relatedTarget))
                        )
                            return B.call(this, R);
                    })(d));
            const b = ge(n),
                M = b[y] || (b[y] = {}),
                j = Se(M, d, c ? t : null);
            if (j) {
                j.oneOff = j.oneOff && o;
                return;
            }
            const I = _e(d, e.replace(Te, '')),
                P = c ? Ee(n, t, d) : Ct(n, d);
            (P.delegationSelector = c ? t : null),
                (P.callable = d),
                (P.oneOff = o),
                (P.uidEvent = I),
                (M[I] = P),
                n.addEventListener(y, P, c);
        }
        function Qe(n, e, t, r, o) {
            const c = Se(e[t], r, o);
            c && (n.removeEventListener(t, c, !!o), delete e[t][c.uidEvent]);
        }
        function wi(n, e, t, r) {
            const o = e[t] || {};
            for (const [c, d] of Object.entries(o))
                c.includes(r) && Qe(n, e, t, d.callable, d.delegationSelector);
        }
        function kn(n) {
            return (n = n.replace(tn, '')), Xe[n] || n;
        }
        const x = {
            on(n, e, t, r) {
                pe(n, e, t, r, !1);
            },
            one(n, e, t, r) {
                pe(n, e, t, r, !0);
            },
            off(n, e, t, r) {
                if (typeof e != 'string' || !n) return;
                const [o, c, d] = De(e, t, r),
                    y = d !== e,
                    b = ge(n),
                    M = b[d] || {},
                    j = e.startsWith('.');
                if (typeof c < 'u') {
                    if (!Object.keys(M).length) return;
                    Qe(n, b, d, c, o ? t : null);
                    return;
                }
                if (j) for (const I of Object.keys(b)) wi(n, b, I, e.slice(1));
                for (const [I, P] of Object.entries(M)) {
                    const N = I.replace(Mt, '');
                    (!y || e.includes(N)) &&
                        Qe(n, b, d, P.callable, P.delegationSelector);
                }
            },
            trigger(n, e, t) {
                if (typeof e != 'string' || !n) return null;
                const r = S(),
                    o = kn(e),
                    c = e !== o;
                let d = null,
                    y = !0,
                    b = !0,
                    M = !1;
                c &&
                    r &&
                    ((d = r.Event(e, t)),
                    r(n).trigger(d),
                    (y = !d.isPropagationStopped()),
                    (b = !d.isImmediatePropagationStopped()),
                    (M = d.isDefaultPrevented()));
                const j = nn(new Event(e, { bubbles: y, cancelable: !0 }), t);
                return (
                    M && j.preventDefault(),
                    b && n.dispatchEvent(j),
                    j.defaultPrevented && d && d.preventDefault(),
                    j
                );
            },
        };
        function nn(n, e = {}) {
            for (const [t, r] of Object.entries(e))
                try {
                    n[t] = r;
                } catch {
                    Object.defineProperty(n, t, {
                        configurable: !0,
                        get() {
                            return r;
                        },
                    });
                }
            return n;
        }
        function zn(n) {
            if (n === 'true') return !0;
            if (n === 'false') return !1;
            if (n === Number(n).toString()) return Number(n);
            if (n === '' || n === 'null') return null;
            if (typeof n != 'string') return n;
            try {
                return JSON.parse(decodeURIComponent(n));
            } catch {
                return n;
            }
        }
        function rn(n) {
            return n.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`);
        }
        const be = {
            setDataAttribute(n, e, t) {
                n.setAttribute(`data-bs-${rn(e)}`, t);
            },
            removeDataAttribute(n, e) {
                n.removeAttribute(`data-bs-${rn(e)}`);
            },
            getDataAttributes(n) {
                if (!n) return {};
                const e = {},
                    t = Object.keys(n.dataset).filter(
                        (r) => r.startsWith('bs') && !r.startsWith('bsConfig')
                    );
                for (const r of t) {
                    let o = r.replace(/^bs/, '');
                    (o = o.charAt(0).toLowerCase() + o.slice(1, o.length)),
                        (e[o] = zn(n.dataset[r]));
                }
                return e;
            },
            getDataAttribute(n, e) {
                return zn(n.getAttribute(`data-bs-${rn(e)}`));
            },
        };
        class yt {
            static get Default() {
                return {};
            }
            static get DefaultType() {
                return {};
            }
            static get NAME() {
                throw new Error(
                    'You have to implement the static method "NAME", for each component!'
                );
            }
            _getConfig(e) {
                return (
                    (e = this._mergeConfigObj(e)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            _configAfterMerge(e) {
                return e;
            }
            _mergeConfigObj(e, t) {
                const r = E(t) ? be.getDataAttribute(t, 'config') : {};
                return {
                    ...this.constructor.Default,
                    ...(typeof r == 'object' ? r : {}),
                    ...(E(t) ? be.getDataAttributes(t) : {}),
                    ...(typeof e == 'object' ? e : {}),
                };
            }
            _typeCheckConfig(e, t = this.constructor.DefaultType) {
                for (const [r, o] of Object.entries(t)) {
                    const c = e[r],
                        d = E(c) ? 'element' : p(c);
                    if (!new RegExp(o).test(d))
                        throw new TypeError(
                            `${this.constructor.NAME.toUpperCase()}: Option "${r}" provided type "${d}" but expected type "${o}".`
                        );
                }
            }
        }
        const Ti = '5.3.3';
        class he extends yt {
            constructor(e, t) {
                super(),
                    (e = A(e)),
                    e &&
                        ((this._element = e),
                        (this._config = this._getConfig(t)),
                        f.set(this._element, this.constructor.DATA_KEY, this));
            }
            dispose() {
                f.remove(this._element, this.constructor.DATA_KEY),
                    x.off(this._element, this.constructor.EVENT_KEY);
                for (const e of Object.getOwnPropertyNames(this))
                    this[e] = null;
            }
            _queueCallback(e, t, r = !0) {
                ue(e, t, r);
            }
            _getConfig(e) {
                return (
                    (e = this._mergeConfigObj(e, this._element)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            static getInstance(e) {
                return f.get(A(e), this.DATA_KEY);
            }
            static getOrCreateInstance(e, t = {}) {
                return (
                    this.getInstance(e) ||
                    new this(e, typeof t == 'object' ? t : null)
                );
            }
            static get VERSION() {
                return Ti;
            }
            static get DATA_KEY() {
                return `bs.${this.NAME}`;
            }
            static get EVENT_KEY() {
                return `.${this.DATA_KEY}`;
            }
            static eventName(e) {
                return `${e}${this.EVENT_KEY}`;
            }
        }
        const on = (n) => {
                let e = n.getAttribute('data-bs-target');
                if (!e || e === '#') {
                    let t = n.getAttribute('href');
                    if (!t || (!t.includes('#') && !t.startsWith('.')))
                        return null;
                    t.includes('#') &&
                        !t.startsWith('#') &&
                        (t = `#${t.split('#')[1]}`),
                        (e = t && t !== '#' ? t.trim() : null);
                }
                return e
                    ? e
                          .split(',')
                          .map((t) => u(t))
                          .join(',')
                    : null;
            },
            C = {
                find(n, e = document.documentElement) {
                    return [].concat(
                        ...Element.prototype.querySelectorAll.call(e, n)
                    );
                },
                findOne(n, e = document.documentElement) {
                    return Element.prototype.querySelector.call(e, n);
                },
                children(n, e) {
                    return [].concat(...n.children).filter((t) => t.matches(e));
                },
                parents(n, e) {
                    const t = [];
                    let r = n.parentNode.closest(e);
                    for (; r; ) t.push(r), (r = r.parentNode.closest(e));
                    return t;
                },
                prev(n, e) {
                    let t = n.previousElementSibling;
                    for (; t; ) {
                        if (t.matches(e)) return [t];
                        t = t.previousElementSibling;
                    }
                    return [];
                },
                next(n, e) {
                    let t = n.nextElementSibling;
                    for (; t; ) {
                        if (t.matches(e)) return [t];
                        t = t.nextElementSibling;
                    }
                    return [];
                },
                focusableChildren(n) {
                    const e = [
                        'a',
                        'button',
                        'input',
                        'textarea',
                        'select',
                        'details',
                        '[tabindex]',
                        '[contenteditable="true"]',
                    ]
                        .map((t) => `${t}:not([tabindex^="-"])`)
                        .join(',');
                    return this.find(e, n).filter((t) => !v(t) && _(t));
                },
                getSelectorFromElement(n) {
                    const e = on(n);
                    return e && C.findOne(e) ? e : null;
                },
                getElementFromSelector(n) {
                    const e = on(n);
                    return e ? C.findOne(e) : null;
                },
                getMultipleElementsFromSelector(n) {
                    const e = on(n);
                    return e ? C.find(e) : [];
                },
            },
            Nt = (n, e = 'hide') => {
                const t = `click.dismiss${n.EVENT_KEY}`,
                    r = n.NAME;
                x.on(document, t, `[data-bs-dismiss="${r}"]`, function (o) {
                    if (
                        (['A', 'AREA'].includes(this.tagName) &&
                            o.preventDefault(),
                        v(this))
                    )
                        return;
                    const c =
                        C.getElementFromSelector(this) || this.closest(`.${r}`);
                    n.getOrCreateInstance(c)[e]();
                });
            },
            Oi = 'alert',
            Fn = '.bs.alert',
            Si = `close${Fn}`,
            Mi = `closed${Fn}`,
            Ci = 'fade',
            Ni = 'show';
        class mt extends he {
            static get NAME() {
                return Oi;
            }
            close() {
                if (x.trigger(this._element, Si).defaultPrevented) return;
                this._element.classList.remove(Ni);
                const t = this._element.classList.contains(Ci);
                this._queueCallback(
                    () => this._destroyElement(),
                    this._element,
                    t
                );
            }
            _destroyElement() {
                this._element.remove(),
                    x.trigger(this._element, Mi),
                    this.dispose();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = mt.getOrCreateInstance(this);
                    if (typeof e == 'string') {
                        if (
                            t[e] === void 0 ||
                            e.startsWith('_') ||
                            e === 'constructor'
                        )
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        Nt(mt, 'close'), $(mt);
        const Li = 'button',
            Di = '.bs.button',
            Ii = '.data-api',
            $i = 'active',
            Kn = '[data-bs-toggle="button"]',
            Pi = `click${Di}${Ii}`;
        class gt extends he {
            static get NAME() {
                return Li;
            }
            toggle() {
                this._element.setAttribute(
                    'aria-pressed',
                    this._element.classList.toggle($i)
                );
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = gt.getOrCreateInstance(this);
                    e === 'toggle' && t[e]();
                });
            }
        }
        x.on(document, Pi, Kn, (n) => {
            n.preventDefault();
            const e = n.target.closest(Kn);
            gt.getOrCreateInstance(e).toggle();
        }),
            $(gt);
        const Ri = 'swipe',
            Ze = '.bs.swipe',
            Vi = `touchstart${Ze}`,
            Hi = `touchmove${Ze}`,
            ki = `touchend${Ze}`,
            zi = `pointerdown${Ze}`,
            Fi = `pointerup${Ze}`,
            Ki = 'touch',
            Wi = 'pen',
            Bi = 'pointer-event',
            Yi = 40,
            Gi = { endCallback: null, leftCallback: null, rightCallback: null },
            Ui = {
                endCallback: '(function|null)',
                leftCallback: '(function|null)',
                rightCallback: '(function|null)',
            };
        class Lt extends yt {
            constructor(e, t) {
                super(),
                    (this._element = e),
                    !(!e || !Lt.isSupported()) &&
                        ((this._config = this._getConfig(t)),
                        (this._deltaX = 0),
                        (this._supportPointerEvents = !!window.PointerEvent),
                        this._initEvents());
            }
            static get Default() {
                return Gi;
            }
            static get DefaultType() {
                return Ui;
            }
            static get NAME() {
                return Ri;
            }
            dispose() {
                x.off(this._element, Ze);
            }
            _start(e) {
                if (!this._supportPointerEvents) {
                    this._deltaX = e.touches[0].clientX;
                    return;
                }
                this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX);
            }
            _end(e) {
                this._eventIsPointerPenTouch(e) &&
                    (this._deltaX = e.clientX - this._deltaX),
                    this._handleSwipe(),
                    H(this._config.endCallback);
            }
            _move(e) {
                this._deltaX =
                    e.touches && e.touches.length > 1
                        ? 0
                        : e.touches[0].clientX - this._deltaX;
            }
            _handleSwipe() {
                const e = Math.abs(this._deltaX);
                if (e <= Yi) return;
                const t = e / this._deltaX;
                (this._deltaX = 0),
                    t &&
                        H(
                            t > 0
                                ? this._config.rightCallback
                                : this._config.leftCallback
                        );
            }
            _initEvents() {
                this._supportPointerEvents
                    ? (x.on(this._element, zi, (e) => this._start(e)),
                      x.on(this._element, Fi, (e) => this._end(e)),
                      this._element.classList.add(Bi))
                    : (x.on(this._element, Vi, (e) => this._start(e)),
                      x.on(this._element, Hi, (e) => this._move(e)),
                      x.on(this._element, ki, (e) => this._end(e)));
            }
            _eventIsPointerPenTouch(e) {
                return (
                    this._supportPointerEvents &&
                    (e.pointerType === Wi || e.pointerType === Ki)
                );
            }
            static isSupported() {
                return (
                    'ontouchstart' in document.documentElement ||
                    navigator.maxTouchPoints > 0
                );
            }
        }
        const Xi = 'carousel',
            Me = '.bs.carousel',
            Wn = '.data-api',
            Qi = 'ArrowLeft',
            Zi = 'ArrowRight',
            Ji = 500,
            vt = 'next',
            Je = 'prev',
            qe = 'left',
            Dt = 'right',
            qi = `slide${Me}`,
            sn = `slid${Me}`,
            eo = `keydown${Me}`,
            to = `mouseenter${Me}`,
            no = `mouseleave${Me}`,
            ro = `dragstart${Me}`,
            io = `load${Me}${Wn}`,
            oo = `click${Me}${Wn}`,
            Bn = 'carousel',
            It = 'active',
            so = 'slide',
            ao = 'carousel-item-end',
            lo = 'carousel-item-start',
            co = 'carousel-item-next',
            uo = 'carousel-item-prev',
            Yn = '.active',
            Gn = '.carousel-item',
            po = Yn + Gn,
            ho = '.carousel-item img',
            fo = '.carousel-indicators',
            yo = '[data-bs-slide], [data-bs-slide-to]',
            mo = '[data-bs-ride="carousel"]',
            go = { [Qi]: Dt, [Zi]: qe },
            vo = {
                interval: 5e3,
                keyboard: !0,
                pause: 'hover',
                ride: !1,
                touch: !0,
                wrap: !0,
            },
            xo = {
                interval: '(number|boolean)',
                keyboard: 'boolean',
                pause: '(string|boolean)',
                ride: '(boolean|string)',
                touch: 'boolean',
                wrap: 'boolean',
            };
        class et extends he {
            constructor(e, t) {
                super(e, t),
                    (this._interval = null),
                    (this._activeElement = null),
                    (this._isSliding = !1),
                    (this.touchTimeout = null),
                    (this._swipeHelper = null),
                    (this._indicatorsElement = C.findOne(fo, this._element)),
                    this._addEventListeners(),
                    this._config.ride === Bn && this.cycle();
            }
            static get Default() {
                return vo;
            }
            static get DefaultType() {
                return xo;
            }
            static get NAME() {
                return Xi;
            }
            next() {
                this._slide(vt);
            }
            nextWhenVisible() {
                !document.hidden && _(this._element) && this.next();
            }
            prev() {
                this._slide(Je);
            }
            pause() {
                this._isSliding && m(this._element), this._clearInterval();
            }
            cycle() {
                this._clearInterval(),
                    this._updateInterval(),
                    (this._interval = setInterval(
                        () => this.nextWhenVisible(),
                        this._config.interval
                    ));
            }
            _maybeEnableCycle() {
                if (this._config.ride) {
                    if (this._isSliding) {
                        x.one(this._element, sn, () => this.cycle());
                        return;
                    }
                    this.cycle();
                }
            }
            to(e) {
                const t = this._getItems();
                if (e > t.length - 1 || e < 0) return;
                if (this._isSliding) {
                    x.one(this._element, sn, () => this.to(e));
                    return;
                }
                const r = this._getItemIndex(this._getActive());
                if (r === e) return;
                const o = e > r ? vt : Je;
                this._slide(o, t[e]);
            }
            dispose() {
                this._swipeHelper && this._swipeHelper.dispose(),
                    super.dispose();
            }
            _configAfterMerge(e) {
                return (e.defaultInterval = e.interval), e;
            }
            _addEventListeners() {
                this._config.keyboard &&
                    x.on(this._element, eo, (e) => this._keydown(e)),
                    this._config.pause === 'hover' &&
                        (x.on(this._element, to, () => this.pause()),
                        x.on(this._element, no, () =>
                            this._maybeEnableCycle()
                        )),
                    this._config.touch &&
                        Lt.isSupported() &&
                        this._addTouchEventListeners();
            }
            _addTouchEventListeners() {
                for (const r of C.find(ho, this._element))
                    x.on(r, ro, (o) => o.preventDefault());
                const t = {
                    leftCallback: () => this._slide(this._directionToOrder(qe)),
                    rightCallback: () =>
                        this._slide(this._directionToOrder(Dt)),
                    endCallback: () => {
                        this._config.pause === 'hover' &&
                            (this.pause(),
                            this.touchTimeout &&
                                clearTimeout(this.touchTimeout),
                            (this.touchTimeout = setTimeout(
                                () => this._maybeEnableCycle(),
                                Ji + this._config.interval
                            )));
                    },
                };
                this._swipeHelper = new Lt(this._element, t);
            }
            _keydown(e) {
                if (/input|textarea/i.test(e.target.tagName)) return;
                const t = go[e.key];
                t &&
                    (e.preventDefault(),
                    this._slide(this._directionToOrder(t)));
            }
            _getItemIndex(e) {
                return this._getItems().indexOf(e);
            }
            _setActiveIndicatorElement(e) {
                if (!this._indicatorsElement) return;
                const t = C.findOne(Yn, this._indicatorsElement);
                t.classList.remove(It), t.removeAttribute('aria-current');
                const r = C.findOne(
                    `[data-bs-slide-to="${e}"]`,
                    this._indicatorsElement
                );
                r &&
                    (r.classList.add(It),
                    r.setAttribute('aria-current', 'true'));
            }
            _updateInterval() {
                const e = this._activeElement || this._getActive();
                if (!e) return;
                const t = Number.parseInt(
                    e.getAttribute('data-bs-interval'),
                    10
                );
                this._config.interval = t || this._config.defaultInterval;
            }
            _slide(e, t = null) {
                if (this._isSliding) return;
                const r = this._getActive(),
                    o = e === vt,
                    c = t || ht(this._getItems(), r, o, this._config.wrap);
                if (c === r) return;
                const d = this._getItemIndex(c),
                    y = (N) =>
                        x.trigger(this._element, N, {
                            relatedTarget: c,
                            direction: this._orderToDirection(e),
                            from: this._getItemIndex(r),
                            to: d,
                        });
                if (y(qi).defaultPrevented || !r || !c) return;
                const M = !!this._interval;
                this.pause(),
                    (this._isSliding = !0),
                    this._setActiveIndicatorElement(d),
                    (this._activeElement = c);
                const j = o ? lo : ao,
                    I = o ? co : uo;
                c.classList.add(I),
                    w(c),
                    r.classList.add(j),
                    c.classList.add(j);
                const P = () => {
                    c.classList.remove(j, I),
                        c.classList.add(It),
                        r.classList.remove(It, I, j),
                        (this._isSliding = !1),
                        y(sn);
                };
                this._queueCallback(P, r, this._isAnimated()),
                    M && this.cycle();
            }
            _isAnimated() {
                return this._element.classList.contains(so);
            }
            _getActive() {
                return C.findOne(po, this._element);
            }
            _getItems() {
                return C.find(Gn, this._element);
            }
            _clearInterval() {
                this._interval &&
                    (clearInterval(this._interval), (this._interval = null));
            }
            _directionToOrder(e) {
                return D() ? (e === qe ? Je : vt) : e === qe ? vt : Je;
            }
            _orderToDirection(e) {
                return D() ? (e === Je ? qe : Dt) : e === Je ? Dt : qe;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = et.getOrCreateInstance(this, e);
                    if (typeof e == 'number') {
                        t.to(e);
                        return;
                    }
                    if (typeof e == 'string') {
                        if (
                            t[e] === void 0 ||
                            e.startsWith('_') ||
                            e === 'constructor'
                        )
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        x.on(document, oo, yo, function (n) {
            const e = C.getElementFromSelector(this);
            if (!e || !e.classList.contains(Bn)) return;
            n.preventDefault();
            const t = et.getOrCreateInstance(e),
                r = this.getAttribute('data-bs-slide-to');
            if (r) {
                t.to(r), t._maybeEnableCycle();
                return;
            }
            if (be.getDataAttribute(this, 'slide') === 'next') {
                t.next(), t._maybeEnableCycle();
                return;
            }
            t.prev(), t._maybeEnableCycle();
        }),
            x.on(window, io, () => {
                const n = C.find(mo);
                for (const e of n) et.getOrCreateInstance(e);
            }),
            $(et);
        const _o = 'collapse',
            xt = '.bs.collapse',
            Eo = '.data-api',
            bo = `show${xt}`,
            Ao = `shown${xt}`,
            jo = `hide${xt}`,
            wo = `hidden${xt}`,
            To = `click${xt}${Eo}`,
            an = 'show',
            tt = 'collapse',
            $t = 'collapsing',
            Oo = 'collapsed',
            So = `:scope .${tt} .${tt}`,
            Mo = 'collapse-horizontal',
            Co = 'width',
            No = 'height',
            Lo = '.collapse.show, .collapse.collapsing',
            ln = '[data-bs-toggle="collapse"]',
            Do = { parent: null, toggle: !0 },
            Io = { parent: '(null|element)', toggle: 'boolean' };
        class nt extends he {
            constructor(e, t) {
                super(e, t),
                    (this._isTransitioning = !1),
                    (this._triggerArray = []);
                const r = C.find(ln);
                for (const o of r) {
                    const c = C.getSelectorFromElement(o),
                        d = C.find(c).filter((y) => y === this._element);
                    c !== null && d.length && this._triggerArray.push(o);
                }
                this._initializeChildren(),
                    this._config.parent ||
                        this._addAriaAndCollapsedClass(
                            this._triggerArray,
                            this._isShown()
                        ),
                    this._config.toggle && this.toggle();
            }
            static get Default() {
                return Do;
            }
            static get DefaultType() {
                return Io;
            }
            static get NAME() {
                return _o;
            }
            toggle() {
                this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (this._isTransitioning || this._isShown()) return;
                let e = [];
                if (
                    (this._config.parent &&
                        (e = this._getFirstLevelChildren(Lo)
                            .filter((y) => y !== this._element)
                            .map((y) =>
                                nt.getOrCreateInstance(y, { toggle: !1 })
                            )),
                    (e.length && e[0]._isTransitioning) ||
                        x.trigger(this._element, bo).defaultPrevented)
                )
                    return;
                for (const y of e) y.hide();
                const r = this._getDimension();
                this._element.classList.remove(tt),
                    this._element.classList.add($t),
                    (this._element.style[r] = 0),
                    this._addAriaAndCollapsedClass(this._triggerArray, !0),
                    (this._isTransitioning = !0);
                const o = () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove($t),
                            this._element.classList.add(tt, an),
                            (this._element.style[r] = ''),
                            x.trigger(this._element, Ao);
                    },
                    d = `scroll${r[0].toUpperCase() + r.slice(1)}`;
                this._queueCallback(o, this._element, !0),
                    (this._element.style[r] = `${this._element[d]}px`);
            }
            hide() {
                if (
                    this._isTransitioning ||
                    !this._isShown() ||
                    x.trigger(this._element, jo).defaultPrevented
                )
                    return;
                const t = this._getDimension();
                (this._element.style[t] =
                    `${this._element.getBoundingClientRect()[t]}px`),
                    w(this._element),
                    this._element.classList.add($t),
                    this._element.classList.remove(tt, an);
                for (const o of this._triggerArray) {
                    const c = C.getElementFromSelector(o);
                    c &&
                        !this._isShown(c) &&
                        this._addAriaAndCollapsedClass([o], !1);
                }
                this._isTransitioning = !0;
                const r = () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove($t),
                        this._element.classList.add(tt),
                        x.trigger(this._element, wo);
                };
                (this._element.style[t] = ''),
                    this._queueCallback(r, this._element, !0);
            }
            _isShown(e = this._element) {
                return e.classList.contains(an);
            }
            _configAfterMerge(e) {
                return (e.toggle = !!e.toggle), (e.parent = A(e.parent)), e;
            }
            _getDimension() {
                return this._element.classList.contains(Mo) ? Co : No;
            }
            _initializeChildren() {
                if (!this._config.parent) return;
                const e = this._getFirstLevelChildren(ln);
                for (const t of e) {
                    const r = C.getElementFromSelector(t);
                    r && this._addAriaAndCollapsedClass([t], this._isShown(r));
                }
            }
            _getFirstLevelChildren(e) {
                const t = C.find(So, this._config.parent);
                return C.find(e, this._config.parent).filter(
                    (r) => !t.includes(r)
                );
            }
            _addAriaAndCollapsedClass(e, t) {
                if (e.length)
                    for (const r of e)
                        r.classList.toggle(Oo, !t),
                            r.setAttribute('aria-expanded', t);
            }
            static jQueryInterface(e) {
                const t = {};
                return (
                    typeof e == 'string' &&
                        /show|hide/.test(e) &&
                        (t.toggle = !1),
                    this.each(function () {
                        const r = nt.getOrCreateInstance(this, t);
                        if (typeof e == 'string') {
                            if (typeof r[e] > 'u')
                                throw new TypeError(`No method named "${e}"`);
                            r[e]();
                        }
                    })
                );
            }
        }
        x.on(document, To, ln, function (n) {
            (n.target.tagName === 'A' ||
                (n.delegateTarget && n.delegateTarget.tagName === 'A')) &&
                n.preventDefault();
            for (const e of C.getMultipleElementsFromSelector(this))
                nt.getOrCreateInstance(e, { toggle: !1 }).toggle();
        }),
            $(nt);
        var te = 'top',
            ie = 'bottom',
            oe = 'right',
            ne = 'left',
            Pt = 'auto',
            rt = [te, ie, oe, ne],
            Ie = 'start',
            it = 'end',
            Un = 'clippingParents',
            cn = 'viewport',
            ot = 'popper',
            Xn = 'reference',
            dn = rt.reduce(function (n, e) {
                return n.concat([e + '-' + Ie, e + '-' + it]);
            }, []),
            un = [].concat(rt, [Pt]).reduce(function (n, e) {
                return n.concat([e, e + '-' + Ie, e + '-' + it]);
            }, []),
            Qn = 'beforeRead',
            Zn = 'read',
            Jn = 'afterRead',
            qn = 'beforeMain',
            er = 'main',
            tr = 'afterMain',
            nr = 'beforeWrite',
            rr = 'write',
            ir = 'afterWrite',
            or = [Qn, Zn, Jn, qn, er, tr, nr, rr, ir];
        function ve(n) {
            return n ? (n.nodeName || '').toLowerCase() : null;
        }
        function se(n) {
            if (n == null) return window;
            if (n.toString() !== '[object Window]') {
                var e = n.ownerDocument;
                return (e && e.defaultView) || window;
            }
            return n;
        }
        function $e(n) {
            var e = se(n).Element;
            return n instanceof e || n instanceof Element;
        }
        function ce(n) {
            var e = se(n).HTMLElement;
            return n instanceof e || n instanceof HTMLElement;
        }
        function pn(n) {
            if (typeof ShadowRoot > 'u') return !1;
            var e = se(n).ShadowRoot;
            return n instanceof e || n instanceof ShadowRoot;
        }
        function $o(n) {
            var e = n.state;
            Object.keys(e.elements).forEach(function (t) {
                var r = e.styles[t] || {},
                    o = e.attributes[t] || {},
                    c = e.elements[t];
                !ce(c) ||
                    !ve(c) ||
                    (Object.assign(c.style, r),
                    Object.keys(o).forEach(function (d) {
                        var y = o[d];
                        y === !1
                            ? c.removeAttribute(d)
                            : c.setAttribute(d, y === !0 ? '' : y);
                    }));
            });
        }
        function Po(n) {
            var e = n.state,
                t = {
                    popper: {
                        position: e.options.strategy,
                        left: '0',
                        top: '0',
                        margin: '0',
                    },
                    arrow: { position: 'absolute' },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, t.popper),
                (e.styles = t),
                e.elements.arrow &&
                    Object.assign(e.elements.arrow.style, t.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (r) {
                        var o = e.elements[r],
                            c = e.attributes[r] || {},
                            d = Object.keys(
                                e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]
                            ),
                            y = d.reduce(function (b, M) {
                                return (b[M] = ''), b;
                            }, {});
                        !ce(o) ||
                            !ve(o) ||
                            (Object.assign(o.style, y),
                            Object.keys(c).forEach(function (b) {
                                o.removeAttribute(b);
                            }));
                    });
                }
            );
        }
        const hn = {
            name: 'applyStyles',
            enabled: !0,
            phase: 'write',
            fn: $o,
            effect: Po,
            requires: ['computeStyles'],
        };
        function xe(n) {
            return n.split('-')[0];
        }
        var Pe = Math.max,
            Rt = Math.min,
            st = Math.round;
        function fn() {
            var n = navigator.userAgentData;
            return n != null && n.brands && Array.isArray(n.brands)
                ? n.brands
                      .map(function (e) {
                          return e.brand + '/' + e.version;
                      })
                      .join(' ')
                : navigator.userAgent;
        }
        function sr() {
            return !/^((?!chrome|android).)*safari/i.test(fn());
        }
        function at(n, e, t) {
            e === void 0 && (e = !1), t === void 0 && (t = !1);
            var r = n.getBoundingClientRect(),
                o = 1,
                c = 1;
            e &&
                ce(n) &&
                ((o = (n.offsetWidth > 0 && st(r.width) / n.offsetWidth) || 1),
                (c =
                    (n.offsetHeight > 0 && st(r.height) / n.offsetHeight) ||
                    1));
            var d = $e(n) ? se(n) : window,
                y = d.visualViewport,
                b = !sr() && t,
                M = (r.left + (b && y ? y.offsetLeft : 0)) / o,
                j = (r.top + (b && y ? y.offsetTop : 0)) / c,
                I = r.width / o,
                P = r.height / c;
            return {
                width: I,
                height: P,
                top: j,
                right: M + I,
                bottom: j + P,
                left: M,
                x: M,
                y: j,
            };
        }
        function yn(n) {
            var e = at(n),
                t = n.offsetWidth,
                r = n.offsetHeight;
            return (
                Math.abs(e.width - t) <= 1 && (t = e.width),
                Math.abs(e.height - r) <= 1 && (r = e.height),
                { x: n.offsetLeft, y: n.offsetTop, width: t, height: r }
            );
        }
        function ar(n, e) {
            var t = e.getRootNode && e.getRootNode();
            if (n.contains(e)) return !0;
            if (t && pn(t)) {
                var r = e;
                do {
                    if (r && n.isSameNode(r)) return !0;
                    r = r.parentNode || r.host;
                } while (r);
            }
            return !1;
        }
        function Ae(n) {
            return se(n).getComputedStyle(n);
        }
        function Ro(n) {
            return ['table', 'td', 'th'].indexOf(ve(n)) >= 0;
        }
        function Ce(n) {
            return (($e(n) ? n.ownerDocument : n.document) || window.document)
                .documentElement;
        }
        function Vt(n) {
            return ve(n) === 'html'
                ? n
                : n.assignedSlot ||
                      n.parentNode ||
                      (pn(n) ? n.host : null) ||
                      Ce(n);
        }
        function lr(n) {
            return !ce(n) || Ae(n).position === 'fixed' ? null : n.offsetParent;
        }
        function Vo(n) {
            var e = /firefox/i.test(fn()),
                t = /Trident/i.test(fn());
            if (t && ce(n)) {
                var r = Ae(n);
                if (r.position === 'fixed') return null;
            }
            var o = Vt(n);
            for (
                pn(o) && (o = o.host);
                ce(o) && ['html', 'body'].indexOf(ve(o)) < 0;

            ) {
                var c = Ae(o);
                if (
                    c.transform !== 'none' ||
                    c.perspective !== 'none' ||
                    c.contain === 'paint' ||
                    ['transform', 'perspective'].indexOf(c.willChange) !== -1 ||
                    (e && c.willChange === 'filter') ||
                    (e && c.filter && c.filter !== 'none')
                )
                    return o;
                o = o.parentNode;
            }
            return null;
        }
        function _t(n) {
            for (
                var e = se(n), t = lr(n);
                t && Ro(t) && Ae(t).position === 'static';

            )
                t = lr(t);
            return t &&
                (ve(t) === 'html' ||
                    (ve(t) === 'body' && Ae(t).position === 'static'))
                ? e
                : t || Vo(n) || e;
        }
        function mn(n) {
            return ['top', 'bottom'].indexOf(n) >= 0 ? 'x' : 'y';
        }
        function Et(n, e, t) {
            return Pe(n, Rt(e, t));
        }
        function Ho(n, e, t) {
            var r = Et(n, e, t);
            return r > t ? t : r;
        }
        function cr() {
            return { top: 0, right: 0, bottom: 0, left: 0 };
        }
        function dr(n) {
            return Object.assign({}, cr(), n);
        }
        function ur(n, e) {
            return e.reduce(function (t, r) {
                return (t[r] = n), t;
            }, {});
        }
        var ko = function (e, t) {
            return (
                (e =
                    typeof e == 'function'
                        ? e(
                              Object.assign({}, t.rects, {
                                  placement: t.placement,
                              })
                          )
                        : e),
                dr(typeof e != 'number' ? e : ur(e, rt))
            );
        };
        function zo(n) {
            var e,
                t = n.state,
                r = n.name,
                o = n.options,
                c = t.elements.arrow,
                d = t.modifiersData.popperOffsets,
                y = xe(t.placement),
                b = mn(y),
                M = [ne, oe].indexOf(y) >= 0,
                j = M ? 'height' : 'width';
            if (!(!c || !d)) {
                var I = ko(o.padding, t),
                    P = yn(c),
                    N = b === 'y' ? te : ne,
                    B = b === 'y' ? ie : oe,
                    R =
                        t.rects.reference[j] +
                        t.rects.reference[b] -
                        d[b] -
                        t.rects.popper[j],
                    k = d[b] - t.rects.reference[b],
                    Y = _t(c),
                    U = Y
                        ? b === 'y'
                            ? Y.clientHeight || 0
                            : Y.clientWidth || 0
                        : 0,
                    X = R / 2 - k / 2,
                    V = I[N],
                    F = U - P[j] - I[B],
                    K = U / 2 - P[j] / 2 + X,
                    G = Et(V, K, F),
                    q = b;
                t.modifiersData[r] =
                    ((e = {}), (e[q] = G), (e.centerOffset = G - K), e);
            }
        }
        function Fo(n) {
            var e = n.state,
                t = n.options,
                r = t.element,
                o = r === void 0 ? '[data-popper-arrow]' : r;
            o != null &&
                ((typeof o == 'string' &&
                    ((o = e.elements.popper.querySelector(o)), !o)) ||
                    (ar(e.elements.popper, o) && (e.elements.arrow = o)));
        }
        const pr = {
            name: 'arrow',
            enabled: !0,
            phase: 'main',
            fn: zo,
            effect: Fo,
            requires: ['popperOffsets'],
            requiresIfExists: ['preventOverflow'],
        };
        function lt(n) {
            return n.split('-')[1];
        }
        var Ko = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
        function Wo(n, e) {
            var t = n.x,
                r = n.y,
                o = e.devicePixelRatio || 1;
            return { x: st(t * o) / o || 0, y: st(r * o) / o || 0 };
        }
        function hr(n) {
            var e,
                t = n.popper,
                r = n.popperRect,
                o = n.placement,
                c = n.variation,
                d = n.offsets,
                y = n.position,
                b = n.gpuAcceleration,
                M = n.adaptive,
                j = n.roundOffsets,
                I = n.isFixed,
                P = d.x,
                N = P === void 0 ? 0 : P,
                B = d.y,
                R = B === void 0 ? 0 : B,
                k = typeof j == 'function' ? j({ x: N, y: R }) : { x: N, y: R };
            (N = k.x), (R = k.y);
            var Y = d.hasOwnProperty('x'),
                U = d.hasOwnProperty('y'),
                X = ne,
                V = te,
                F = window;
            if (M) {
                var K = _t(t),
                    G = 'clientHeight',
                    q = 'clientWidth';
                if (
                    (K === se(t) &&
                        ((K = Ce(t)),
                        Ae(K).position !== 'static' &&
                            y === 'absolute' &&
                            ((G = 'scrollHeight'), (q = 'scrollWidth'))),
                    (K = K),
                    o === te || ((o === ne || o === oe) && c === it))
                ) {
                    V = ie;
                    var J =
                        I && K === F && F.visualViewport
                            ? F.visualViewport.height
                            : K[G];
                    (R -= J - r.height), (R *= b ? 1 : -1);
                }
                if (o === ne || ((o === te || o === ie) && c === it)) {
                    X = oe;
                    var Z =
                        I && K === F && F.visualViewport
                            ? F.visualViewport.width
                            : K[q];
                    (N -= Z - r.width), (N *= b ? 1 : -1);
                }
            }
            var ee = Object.assign({ position: y }, M && Ko),
                ye = j === !0 ? Wo({ x: N, y: R }, se(t)) : { x: N, y: R };
            if (((N = ye.x), (R = ye.y), b)) {
                var re;
                return Object.assign(
                    {},
                    ee,
                    ((re = {}),
                    (re[V] = U ? '0' : ''),
                    (re[X] = Y ? '0' : ''),
                    (re.transform =
                        (F.devicePixelRatio || 1) <= 1
                            ? 'translate(' + N + 'px, ' + R + 'px)'
                            : 'translate3d(' + N + 'px, ' + R + 'px, 0)'),
                    re)
                );
            }
            return Object.assign(
                {},
                ee,
                ((e = {}),
                (e[V] = U ? R + 'px' : ''),
                (e[X] = Y ? N + 'px' : ''),
                (e.transform = ''),
                e)
            );
        }
        function Bo(n) {
            var e = n.state,
                t = n.options,
                r = t.gpuAcceleration,
                o = r === void 0 ? !0 : r,
                c = t.adaptive,
                d = c === void 0 ? !0 : c,
                y = t.roundOffsets,
                b = y === void 0 ? !0 : y,
                M = {
                    placement: xe(e.placement),
                    variation: lt(e.placement),
                    popper: e.elements.popper,
                    popperRect: e.rects.popper,
                    gpuAcceleration: o,
                    isFixed: e.options.strategy === 'fixed',
                };
            e.modifiersData.popperOffsets != null &&
                (e.styles.popper = Object.assign(
                    {},
                    e.styles.popper,
                    hr(
                        Object.assign({}, M, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: d,
                            roundOffsets: b,
                        })
                    )
                )),
                e.modifiersData.arrow != null &&
                    (e.styles.arrow = Object.assign(
                        {},
                        e.styles.arrow,
                        hr(
                            Object.assign({}, M, {
                                offsets: e.modifiersData.arrow,
                                position: 'absolute',
                                adaptive: !1,
                                roundOffsets: b,
                            })
                        )
                    )),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    'data-popper-placement': e.placement,
                }));
        }
        const gn = {
            name: 'computeStyles',
            enabled: !0,
            phase: 'beforeWrite',
            fn: Bo,
            data: {},
        };
        var Ht = { passive: !0 };
        function Yo(n) {
            var e = n.state,
                t = n.instance,
                r = n.options,
                o = r.scroll,
                c = o === void 0 ? !0 : o,
                d = r.resize,
                y = d === void 0 ? !0 : d,
                b = se(e.elements.popper),
                M = [].concat(
                    e.scrollParents.reference,
                    e.scrollParents.popper
                );
            return (
                c &&
                    M.forEach(function (j) {
                        j.addEventListener('scroll', t.update, Ht);
                    }),
                y && b.addEventListener('resize', t.update, Ht),
                function () {
                    c &&
                        M.forEach(function (j) {
                            j.removeEventListener('scroll', t.update, Ht);
                        }),
                        y && b.removeEventListener('resize', t.update, Ht);
                }
            );
        }
        const vn = {
            name: 'eventListeners',
            enabled: !0,
            phase: 'write',
            fn: function () {},
            effect: Yo,
            data: {},
        };
        var Go = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        function kt(n) {
            return n.replace(/left|right|bottom|top/g, function (e) {
                return Go[e];
            });
        }
        var Uo = { start: 'end', end: 'start' };
        function fr(n) {
            return n.replace(/start|end/g, function (e) {
                return Uo[e];
            });
        }
        function xn(n) {
            var e = se(n),
                t = e.pageXOffset,
                r = e.pageYOffset;
            return { scrollLeft: t, scrollTop: r };
        }
        function _n(n) {
            return at(Ce(n)).left + xn(n).scrollLeft;
        }
        function Xo(n, e) {
            var t = se(n),
                r = Ce(n),
                o = t.visualViewport,
                c = r.clientWidth,
                d = r.clientHeight,
                y = 0,
                b = 0;
            if (o) {
                (c = o.width), (d = o.height);
                var M = sr();
                (M || (!M && e === 'fixed')) &&
                    ((y = o.offsetLeft), (b = o.offsetTop));
            }
            return { width: c, height: d, x: y + _n(n), y: b };
        }
        function Qo(n) {
            var e,
                t = Ce(n),
                r = xn(n),
                o = (e = n.ownerDocument) == null ? void 0 : e.body,
                c = Pe(
                    t.scrollWidth,
                    t.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                ),
                d = Pe(
                    t.scrollHeight,
                    t.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                ),
                y = -r.scrollLeft + _n(n),
                b = -r.scrollTop;
            return (
                Ae(o || t).direction === 'rtl' &&
                    (y += Pe(t.clientWidth, o ? o.clientWidth : 0) - c),
                { width: c, height: d, x: y, y: b }
            );
        }
        function En(n) {
            var e = Ae(n),
                t = e.overflow,
                r = e.overflowX,
                o = e.overflowY;
            return /auto|scroll|overlay|hidden/.test(t + o + r);
        }
        function yr(n) {
            return ['html', 'body', '#document'].indexOf(ve(n)) >= 0
                ? n.ownerDocument.body
                : ce(n) && En(n)
                  ? n
                  : yr(Vt(n));
        }
        function bt(n, e) {
            var t;
            e === void 0 && (e = []);
            var r = yr(n),
                o = r === ((t = n.ownerDocument) == null ? void 0 : t.body),
                c = se(r),
                d = o ? [c].concat(c.visualViewport || [], En(r) ? r : []) : r,
                y = e.concat(d);
            return o ? y : y.concat(bt(Vt(d)));
        }
        function bn(n) {
            return Object.assign({}, n, {
                left: n.x,
                top: n.y,
                right: n.x + n.width,
                bottom: n.y + n.height,
            });
        }
        function Zo(n, e) {
            var t = at(n, !1, e === 'fixed');
            return (
                (t.top = t.top + n.clientTop),
                (t.left = t.left + n.clientLeft),
                (t.bottom = t.top + n.clientHeight),
                (t.right = t.left + n.clientWidth),
                (t.width = n.clientWidth),
                (t.height = n.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
            );
        }
        function mr(n, e, t) {
            return e === cn ? bn(Xo(n, t)) : $e(e) ? Zo(e, t) : bn(Qo(Ce(n)));
        }
        function Jo(n) {
            var e = bt(Vt(n)),
                t = ['absolute', 'fixed'].indexOf(Ae(n).position) >= 0,
                r = t && ce(n) ? _t(n) : n;
            return $e(r)
                ? e.filter(function (o) {
                      return $e(o) && ar(o, r) && ve(o) !== 'body';
                  })
                : [];
        }
        function qo(n, e, t, r) {
            var o = e === 'clippingParents' ? Jo(n) : [].concat(e),
                c = [].concat(o, [t]),
                d = c[0],
                y = c.reduce(
                    function (b, M) {
                        var j = mr(n, M, r);
                        return (
                            (b.top = Pe(j.top, b.top)),
                            (b.right = Rt(j.right, b.right)),
                            (b.bottom = Rt(j.bottom, b.bottom)),
                            (b.left = Pe(j.left, b.left)),
                            b
                        );
                    },
                    mr(n, d, r)
                );
            return (
                (y.width = y.right - y.left),
                (y.height = y.bottom - y.top),
                (y.x = y.left),
                (y.y = y.top),
                y
            );
        }
        function gr(n) {
            var e = n.reference,
                t = n.element,
                r = n.placement,
                o = r ? xe(r) : null,
                c = r ? lt(r) : null,
                d = e.x + e.width / 2 - t.width / 2,
                y = e.y + e.height / 2 - t.height / 2,
                b;
            switch (o) {
                case te:
                    b = { x: d, y: e.y - t.height };
                    break;
                case ie:
                    b = { x: d, y: e.y + e.height };
                    break;
                case oe:
                    b = { x: e.x + e.width, y };
                    break;
                case ne:
                    b = { x: e.x - t.width, y };
                    break;
                default:
                    b = { x: e.x, y: e.y };
            }
            var M = o ? mn(o) : null;
            if (M != null) {
                var j = M === 'y' ? 'height' : 'width';
                switch (c) {
                    case Ie:
                        b[M] = b[M] - (e[j] / 2 - t[j] / 2);
                        break;
                    case it:
                        b[M] = b[M] + (e[j] / 2 - t[j] / 2);
                        break;
                }
            }
            return b;
        }
        function ct(n, e) {
            e === void 0 && (e = {});
            var t = e,
                r = t.placement,
                o = r === void 0 ? n.placement : r,
                c = t.strategy,
                d = c === void 0 ? n.strategy : c,
                y = t.boundary,
                b = y === void 0 ? Un : y,
                M = t.rootBoundary,
                j = M === void 0 ? cn : M,
                I = t.elementContext,
                P = I === void 0 ? ot : I,
                N = t.altBoundary,
                B = N === void 0 ? !1 : N,
                R = t.padding,
                k = R === void 0 ? 0 : R,
                Y = dr(typeof k != 'number' ? k : ur(k, rt)),
                U = P === ot ? Xn : ot,
                X = n.rects.popper,
                V = n.elements[B ? U : P],
                F = qo(
                    $e(V) ? V : V.contextElement || Ce(n.elements.popper),
                    b,
                    j,
                    d
                ),
                K = at(n.elements.reference),
                G = gr({
                    reference: K,
                    element: X,
                    strategy: 'absolute',
                    placement: o,
                }),
                q = bn(Object.assign({}, X, G)),
                J = P === ot ? q : K,
                Z = {
                    top: F.top - J.top + Y.top,
                    bottom: J.bottom - F.bottom + Y.bottom,
                    left: F.left - J.left + Y.left,
                    right: J.right - F.right + Y.right,
                },
                ee = n.modifiersData.offset;
            if (P === ot && ee) {
                var ye = ee[o];
                Object.keys(Z).forEach(function (re) {
                    var We = [oe, ie].indexOf(re) >= 0 ? 1 : -1,
                        Be = [te, ie].indexOf(re) >= 0 ? 'y' : 'x';
                    Z[re] += ye[Be] * We;
                });
            }
            return Z;
        }
        function es(n, e) {
            e === void 0 && (e = {});
            var t = e,
                r = t.placement,
                o = t.boundary,
                c = t.rootBoundary,
                d = t.padding,
                y = t.flipVariations,
                b = t.allowedAutoPlacements,
                M = b === void 0 ? un : b,
                j = lt(r),
                I = j
                    ? y
                        ? dn
                        : dn.filter(function (B) {
                              return lt(B) === j;
                          })
                    : rt,
                P = I.filter(function (B) {
                    return M.indexOf(B) >= 0;
                });
            P.length === 0 && (P = I);
            var N = P.reduce(function (B, R) {
                return (
                    (B[R] = ct(n, {
                        placement: R,
                        boundary: o,
                        rootBoundary: c,
                        padding: d,
                    })[xe(R)]),
                    B
                );
            }, {});
            return Object.keys(N).sort(function (B, R) {
                return N[B] - N[R];
            });
        }
        function ts(n) {
            if (xe(n) === Pt) return [];
            var e = kt(n);
            return [fr(n), e, fr(e)];
        }
        function ns(n) {
            var e = n.state,
                t = n.options,
                r = n.name;
            if (!e.modifiersData[r]._skip) {
                for (
                    var o = t.mainAxis,
                        c = o === void 0 ? !0 : o,
                        d = t.altAxis,
                        y = d === void 0 ? !0 : d,
                        b = t.fallbackPlacements,
                        M = t.padding,
                        j = t.boundary,
                        I = t.rootBoundary,
                        P = t.altBoundary,
                        N = t.flipVariations,
                        B = N === void 0 ? !0 : N,
                        R = t.allowedAutoPlacements,
                        k = e.options.placement,
                        Y = xe(k),
                        U = Y === k,
                        X = b || (U || !B ? [kt(k)] : ts(k)),
                        V = [k].concat(X).reduce(function (pt, Le) {
                            return pt.concat(
                                xe(Le) === Pt
                                    ? es(e, {
                                          placement: Le,
                                          boundary: j,
                                          rootBoundary: I,
                                          padding: M,
                                          flipVariations: B,
                                          allowedAutoPlacements: R,
                                      })
                                    : Le
                            );
                        }, []),
                        F = e.rects.reference,
                        K = e.rects.popper,
                        G = new Map(),
                        q = !0,
                        J = V[0],
                        Z = 0;
                    Z < V.length;
                    Z++
                ) {
                    var ee = V[Z],
                        ye = xe(ee),
                        re = lt(ee) === Ie,
                        We = [te, ie].indexOf(ye) >= 0,
                        Be = We ? 'width' : 'height',
                        ae = ct(e, {
                            placement: ee,
                            boundary: j,
                            rootBoundary: I,
                            altBoundary: P,
                            padding: M,
                        }),
                        me = We ? (re ? oe : ne) : re ? ie : te;
                    F[Be] > K[Be] && (me = kt(me));
                    var Xt = kt(me),
                        Ye = [];
                    if (
                        (c && Ye.push(ae[ye] <= 0),
                        y && Ye.push(ae[me] <= 0, ae[Xt] <= 0),
                        Ye.every(function (pt) {
                            return pt;
                        }))
                    ) {
                        (J = ee), (q = !1);
                        break;
                    }
                    G.set(ee, Ye);
                }
                if (q)
                    for (
                        var Qt = B ? 3 : 1,
                            Pn = function (Le) {
                                var Ot = V.find(function (Jt) {
                                    var Ge = G.get(Jt);
                                    if (Ge)
                                        return Ge.slice(0, Le).every(
                                            function (Rn) {
                                                return Rn;
                                            }
                                        );
                                });
                                if (Ot) return (J = Ot), 'break';
                            },
                            Tt = Qt;
                        Tt > 0;
                        Tt--
                    ) {
                        var Zt = Pn(Tt);
                        if (Zt === 'break') break;
                    }
                e.placement !== J &&
                    ((e.modifiersData[r]._skip = !0),
                    (e.placement = J),
                    (e.reset = !0));
            }
        }
        const vr = {
            name: 'flip',
            enabled: !0,
            phase: 'main',
            fn: ns,
            requiresIfExists: ['offset'],
            data: { _skip: !1 },
        };
        function xr(n, e, t) {
            return (
                t === void 0 && (t = { x: 0, y: 0 }),
                {
                    top: n.top - e.height - t.y,
                    right: n.right - e.width + t.x,
                    bottom: n.bottom - e.height + t.y,
                    left: n.left - e.width - t.x,
                }
            );
        }
        function _r(n) {
            return [te, oe, ie, ne].some(function (e) {
                return n[e] >= 0;
            });
        }
        function rs(n) {
            var e = n.state,
                t = n.name,
                r = e.rects.reference,
                o = e.rects.popper,
                c = e.modifiersData.preventOverflow,
                d = ct(e, { elementContext: 'reference' }),
                y = ct(e, { altBoundary: !0 }),
                b = xr(d, r),
                M = xr(y, o, c),
                j = _r(b),
                I = _r(M);
            (e.modifiersData[t] = {
                referenceClippingOffsets: b,
                popperEscapeOffsets: M,
                isReferenceHidden: j,
                hasPopperEscaped: I,
            }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    'data-popper-reference-hidden': j,
                    'data-popper-escaped': I,
                }));
        }
        const Er = {
            name: 'hide',
            enabled: !0,
            phase: 'main',
            requiresIfExists: ['preventOverflow'],
            fn: rs,
        };
        function is(n, e, t) {
            var r = xe(n),
                o = [ne, te].indexOf(r) >= 0 ? -1 : 1,
                c =
                    typeof t == 'function'
                        ? t(Object.assign({}, e, { placement: n }))
                        : t,
                d = c[0],
                y = c[1];
            return (
                (d = d || 0),
                (y = (y || 0) * o),
                [ne, oe].indexOf(r) >= 0 ? { x: y, y: d } : { x: d, y }
            );
        }
        function os(n) {
            var e = n.state,
                t = n.options,
                r = n.name,
                o = t.offset,
                c = o === void 0 ? [0, 0] : o,
                d = un.reduce(function (j, I) {
                    return (j[I] = is(I, e.rects, c)), j;
                }, {}),
                y = d[e.placement],
                b = y.x,
                M = y.y;
            e.modifiersData.popperOffsets != null &&
                ((e.modifiersData.popperOffsets.x += b),
                (e.modifiersData.popperOffsets.y += M)),
                (e.modifiersData[r] = d);
        }
        const br = {
            name: 'offset',
            enabled: !0,
            phase: 'main',
            requires: ['popperOffsets'],
            fn: os,
        };
        function ss(n) {
            var e = n.state,
                t = n.name;
            e.modifiersData[t] = gr({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: 'absolute',
                placement: e.placement,
            });
        }
        const An = {
            name: 'popperOffsets',
            enabled: !0,
            phase: 'read',
            fn: ss,
            data: {},
        };
        function as(n) {
            return n === 'x' ? 'y' : 'x';
        }
        function ls(n) {
            var e = n.state,
                t = n.options,
                r = n.name,
                o = t.mainAxis,
                c = o === void 0 ? !0 : o,
                d = t.altAxis,
                y = d === void 0 ? !1 : d,
                b = t.boundary,
                M = t.rootBoundary,
                j = t.altBoundary,
                I = t.padding,
                P = t.tether,
                N = P === void 0 ? !0 : P,
                B = t.tetherOffset,
                R = B === void 0 ? 0 : B,
                k = ct(e, {
                    boundary: b,
                    rootBoundary: M,
                    padding: I,
                    altBoundary: j,
                }),
                Y = xe(e.placement),
                U = lt(e.placement),
                X = !U,
                V = mn(Y),
                F = as(V),
                K = e.modifiersData.popperOffsets,
                G = e.rects.reference,
                q = e.rects.popper,
                J =
                    typeof R == 'function'
                        ? R(
                              Object.assign({}, e.rects, {
                                  placement: e.placement,
                              })
                          )
                        : R,
                Z =
                    typeof J == 'number'
                        ? { mainAxis: J, altAxis: J }
                        : Object.assign({ mainAxis: 0, altAxis: 0 }, J),
                ee = e.modifiersData.offset
                    ? e.modifiersData.offset[e.placement]
                    : null,
                ye = { x: 0, y: 0 };
            if (K) {
                if (c) {
                    var re,
                        We = V === 'y' ? te : ne,
                        Be = V === 'y' ? ie : oe,
                        ae = V === 'y' ? 'height' : 'width',
                        me = K[V],
                        Xt = me + k[We],
                        Ye = me - k[Be],
                        Qt = N ? -q[ae] / 2 : 0,
                        Pn = U === Ie ? G[ae] : q[ae],
                        Tt = U === Ie ? -q[ae] : -G[ae],
                        Zt = e.elements.arrow,
                        pt = N && Zt ? yn(Zt) : { width: 0, height: 0 },
                        Le = e.modifiersData['arrow#persistent']
                            ? e.modifiersData['arrow#persistent'].padding
                            : cr(),
                        Ot = Le[We],
                        Jt = Le[Be],
                        Ge = Et(0, G[ae], pt[ae]),
                        Rn = X
                            ? G[ae] / 2 - Qt - Ge - Ot - Z.mainAxis
                            : Pn - Ge - Ot - Z.mainAxis,
                        ec = X
                            ? -G[ae] / 2 + Qt + Ge + Jt + Z.mainAxis
                            : Tt + Ge + Jt + Z.mainAxis,
                        Vn = e.elements.arrow && _t(e.elements.arrow),
                        tc = Vn
                            ? V === 'y'
                                ? Vn.clientTop || 0
                                : Vn.clientLeft || 0
                            : 0,
                        di =
                            (re = ee == null ? void 0 : ee[V]) != null ? re : 0,
                        nc = me + Rn - di - tc,
                        rc = me + ec - di,
                        ui = Et(N ? Rt(Xt, nc) : Xt, me, N ? Pe(Ye, rc) : Ye);
                    (K[V] = ui), (ye[V] = ui - me);
                }
                if (y) {
                    var pi,
                        ic = V === 'x' ? te : ne,
                        oc = V === 'x' ? ie : oe,
                        Ue = K[F],
                        qt = F === 'y' ? 'height' : 'width',
                        hi = Ue + k[ic],
                        fi = Ue - k[oc],
                        Hn = [te, ne].indexOf(Y) !== -1,
                        yi =
                            (pi = ee == null ? void 0 : ee[F]) != null ? pi : 0,
                        mi = Hn ? hi : Ue - G[qt] - q[qt] - yi + Z.altAxis,
                        gi = Hn ? Ue + G[qt] + q[qt] - yi - Z.altAxis : fi,
                        vi =
                            N && Hn
                                ? Ho(mi, Ue, gi)
                                : Et(N ? mi : hi, Ue, N ? gi : fi);
                    (K[F] = vi), (ye[F] = vi - Ue);
                }
                e.modifiersData[r] = ye;
            }
        }
        const Ar = {
            name: 'preventOverflow',
            enabled: !0,
            phase: 'main',
            fn: ls,
            requiresIfExists: ['offset'],
        };
        function cs(n) {
            return { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop };
        }
        function ds(n) {
            return n === se(n) || !ce(n) ? xn(n) : cs(n);
        }
        function us(n) {
            var e = n.getBoundingClientRect(),
                t = st(e.width) / n.offsetWidth || 1,
                r = st(e.height) / n.offsetHeight || 1;
            return t !== 1 || r !== 1;
        }
        function ps(n, e, t) {
            t === void 0 && (t = !1);
            var r = ce(e),
                o = ce(e) && us(e),
                c = Ce(e),
                d = at(n, o, t),
                y = { scrollLeft: 0, scrollTop: 0 },
                b = { x: 0, y: 0 };
            return (
                (r || (!r && !t)) &&
                    ((ve(e) !== 'body' || En(c)) && (y = ds(e)),
                    ce(e)
                        ? ((b = at(e, !0)),
                          (b.x += e.clientLeft),
                          (b.y += e.clientTop))
                        : c && (b.x = _n(c))),
                {
                    x: d.left + y.scrollLeft - b.x,
                    y: d.top + y.scrollTop - b.y,
                    width: d.width,
                    height: d.height,
                }
            );
        }
        function hs(n) {
            var e = new Map(),
                t = new Set(),
                r = [];
            n.forEach(function (c) {
                e.set(c.name, c);
            });
            function o(c) {
                t.add(c.name);
                var d = [].concat(c.requires || [], c.requiresIfExists || []);
                d.forEach(function (y) {
                    if (!t.has(y)) {
                        var b = e.get(y);
                        b && o(b);
                    }
                }),
                    r.push(c);
            }
            return (
                n.forEach(function (c) {
                    t.has(c.name) || o(c);
                }),
                r
            );
        }
        function fs(n) {
            var e = hs(n);
            return or.reduce(function (t, r) {
                return t.concat(
                    e.filter(function (o) {
                        return o.phase === r;
                    })
                );
            }, []);
        }
        function ys(n) {
            var e;
            return function () {
                return (
                    e ||
                        (e = new Promise(function (t) {
                            Promise.resolve().then(function () {
                                (e = void 0), t(n());
                            });
                        })),
                    e
                );
            };
        }
        function ms(n) {
            var e = n.reduce(function (t, r) {
                var o = t[r.name];
                return (
                    (t[r.name] = o
                        ? Object.assign({}, o, r, {
                              options: Object.assign({}, o.options, r.options),
                              data: Object.assign({}, o.data, r.data),
                          })
                        : r),
                    t
                );
            }, {});
            return Object.keys(e).map(function (t) {
                return e[t];
            });
        }
        var jr = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
        function wr() {
            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
                e[t] = arguments[t];
            return !e.some(function (r) {
                return !(r && typeof r.getBoundingClientRect == 'function');
            });
        }
        function zt(n) {
            n === void 0 && (n = {});
            var e = n,
                t = e.defaultModifiers,
                r = t === void 0 ? [] : t,
                o = e.defaultOptions,
                c = o === void 0 ? jr : o;
            return function (y, b, M) {
                M === void 0 && (M = c);
                var j = {
                        placement: 'bottom',
                        orderedModifiers: [],
                        options: Object.assign({}, jr, c),
                        modifiersData: {},
                        elements: { reference: y, popper: b },
                        attributes: {},
                        styles: {},
                    },
                    I = [],
                    P = !1,
                    N = {
                        state: j,
                        setOptions: function (Y) {
                            var U = typeof Y == 'function' ? Y(j.options) : Y;
                            R(),
                                (j.options = Object.assign(
                                    {},
                                    c,
                                    j.options,
                                    U
                                )),
                                (j.scrollParents = {
                                    reference: $e(y)
                                        ? bt(y)
                                        : y.contextElement
                                          ? bt(y.contextElement)
                                          : [],
                                    popper: bt(b),
                                });
                            var X = fs(ms([].concat(r, j.options.modifiers)));
                            return (
                                (j.orderedModifiers = X.filter(function (V) {
                                    return V.enabled;
                                })),
                                B(),
                                N.update()
                            );
                        },
                        forceUpdate: function () {
                            if (!P) {
                                var Y = j.elements,
                                    U = Y.reference,
                                    X = Y.popper;
                                if (wr(U, X)) {
                                    (j.rects = {
                                        reference: ps(
                                            U,
                                            _t(X),
                                            j.options.strategy === 'fixed'
                                        ),
                                        popper: yn(X),
                                    }),
                                        (j.reset = !1),
                                        (j.placement = j.options.placement),
                                        j.orderedModifiers.forEach(
                                            function (Z) {
                                                return (j.modifiersData[
                                                    Z.name
                                                ] = Object.assign({}, Z.data));
                                            }
                                        );
                                    for (
                                        var V = 0;
                                        V < j.orderedModifiers.length;
                                        V++
                                    ) {
                                        if (j.reset === !0) {
                                            (j.reset = !1), (V = -1);
                                            continue;
                                        }
                                        var F = j.orderedModifiers[V],
                                            K = F.fn,
                                            G = F.options,
                                            q = G === void 0 ? {} : G,
                                            J = F.name;
                                        typeof K == 'function' &&
                                            (j =
                                                K({
                                                    state: j,
                                                    options: q,
                                                    name: J,
                                                    instance: N,
                                                }) || j);
                                    }
                                }
                            }
                        },
                        update: ys(function () {
                            return new Promise(function (k) {
                                N.forceUpdate(), k(j);
                            });
                        }),
                        destroy: function () {
                            R(), (P = !0);
                        },
                    };
                if (!wr(y, b)) return N;
                N.setOptions(M).then(function (k) {
                    !P && M.onFirstUpdate && M.onFirstUpdate(k);
                });
                function B() {
                    j.orderedModifiers.forEach(function (k) {
                        var Y = k.name,
                            U = k.options,
                            X = U === void 0 ? {} : U,
                            V = k.effect;
                        if (typeof V == 'function') {
                            var F = V({
                                    state: j,
                                    name: Y,
                                    instance: N,
                                    options: X,
                                }),
                                K = function () {};
                            I.push(F || K);
                        }
                    });
                }
                function R() {
                    I.forEach(function (k) {
                        return k();
                    }),
                        (I = []);
                }
                return N;
            };
        }
        var gs = zt(),
            vs = [vn, An, gn, hn],
            xs = zt({ defaultModifiers: vs }),
            _s = [vn, An, gn, hn, br, vr, Ar, pr, Er],
            jn = zt({ defaultModifiers: _s });
        const Tr = Object.freeze(
                Object.defineProperty(
                    {
                        __proto__: null,
                        afterMain: tr,
                        afterRead: Jn,
                        afterWrite: ir,
                        applyStyles: hn,
                        arrow: pr,
                        auto: Pt,
                        basePlacements: rt,
                        beforeMain: qn,
                        beforeRead: Qn,
                        beforeWrite: nr,
                        bottom: ie,
                        clippingParents: Un,
                        computeStyles: gn,
                        createPopper: jn,
                        createPopperBase: gs,
                        createPopperLite: xs,
                        detectOverflow: ct,
                        end: it,
                        eventListeners: vn,
                        flip: vr,
                        hide: Er,
                        left: ne,
                        main: er,
                        modifierPhases: or,
                        offset: br,
                        placements: un,
                        popper: ot,
                        popperGenerator: zt,
                        popperOffsets: An,
                        preventOverflow: Ar,
                        read: Zn,
                        reference: Xn,
                        right: oe,
                        start: Ie,
                        top: te,
                        variationPlacements: dn,
                        viewport: cn,
                        write: rr,
                    },
                    Symbol.toStringTag,
                    { value: 'Module' }
                )
            ),
            Or = 'dropdown',
            Re = '.bs.dropdown',
            wn = '.data-api',
            Es = 'Escape',
            Sr = 'Tab',
            bs = 'ArrowUp',
            Mr = 'ArrowDown',
            As = 2,
            js = `hide${Re}`,
            ws = `hidden${Re}`,
            Ts = `show${Re}`,
            Os = `shown${Re}`,
            Cr = `click${Re}${wn}`,
            Nr = `keydown${Re}${wn}`,
            Ss = `keyup${Re}${wn}`,
            dt = 'show',
            Ms = 'dropup',
            Cs = 'dropend',
            Ns = 'dropstart',
            Ls = 'dropup-center',
            Ds = 'dropdown-center',
            Ve = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
            Is = `${Ve}.${dt}`,
            Ft = '.dropdown-menu',
            $s = '.navbar',
            Ps = '.navbar-nav',
            Rs = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)',
            Vs = D() ? 'top-end' : 'top-start',
            Hs = D() ? 'top-start' : 'top-end',
            ks = D() ? 'bottom-end' : 'bottom-start',
            zs = D() ? 'bottom-start' : 'bottom-end',
            Fs = D() ? 'left-start' : 'right-start',
            Ks = D() ? 'right-start' : 'left-start',
            Ws = 'top',
            Bs = 'bottom',
            Ys = {
                autoClose: !0,
                boundary: 'clippingParents',
                display: 'dynamic',
                offset: [0, 2],
                popperConfig: null,
                reference: 'toggle',
            },
            Gs = {
                autoClose: '(boolean|string)',
                boundary: '(string|element)',
                display: 'string',
                offset: '(array|string|function)',
                popperConfig: '(null|object|function)',
                reference: '(string|element|object)',
            };
        class fe extends he {
            constructor(e, t) {
                super(e, t),
                    (this._popper = null),
                    (this._parent = this._element.parentNode),
                    (this._menu =
                        C.next(this._element, Ft)[0] ||
                        C.prev(this._element, Ft)[0] ||
                        C.findOne(Ft, this._parent)),
                    (this._inNavbar = this._detectNavbar());
            }
            static get Default() {
                return Ys;
            }
            static get DefaultType() {
                return Gs;
            }
            static get NAME() {
                return Or;
            }
            toggle() {
                return this._isShown() ? this.hide() : this.show();
            }
            show() {
                if (v(this._element) || this._isShown()) return;
                const e = { relatedTarget: this._element };
                if (!x.trigger(this._element, Ts, e).defaultPrevented) {
                    if (
                        (this._createPopper(),
                        'ontouchstart' in document.documentElement &&
                            !this._parent.closest(Ps))
                    )
                        for (const r of [].concat(...document.body.children))
                            x.on(r, 'mouseover', T);
                    this._element.focus(),
                        this._element.setAttribute('aria-expanded', !0),
                        this._menu.classList.add(dt),
                        this._element.classList.add(dt),
                        x.trigger(this._element, Os, e);
                }
            }
            hide() {
                if (v(this._element) || !this._isShown()) return;
                const e = { relatedTarget: this._element };
                this._completeHide(e);
            }
            dispose() {
                this._popper && this._popper.destroy(), super.dispose();
            }
            update() {
                (this._inNavbar = this._detectNavbar()),
                    this._popper && this._popper.update();
            }
            _completeHide(e) {
                if (!x.trigger(this._element, js, e).defaultPrevented) {
                    if ('ontouchstart' in document.documentElement)
                        for (const r of [].concat(...document.body.children))
                            x.off(r, 'mouseover', T);
                    this._popper && this._popper.destroy(),
                        this._menu.classList.remove(dt),
                        this._element.classList.remove(dt),
                        this._element.setAttribute('aria-expanded', 'false'),
                        be.removeDataAttribute(this._menu, 'popper'),
                        x.trigger(this._element, ws, e);
                }
            }
            _getConfig(e) {
                if (
                    ((e = super._getConfig(e)),
                    typeof e.reference == 'object' &&
                        !E(e.reference) &&
                        typeof e.reference.getBoundingClientRect != 'function')
                )
                    throw new TypeError(
                        `${Or.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                    );
                return e;
            }
            _createPopper() {
                if (typeof Tr > 'u')
                    throw new TypeError(
                        "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                let e = this._element;
                this._config.reference === 'parent'
                    ? (e = this._parent)
                    : E(this._config.reference)
                      ? (e = A(this._config.reference))
                      : typeof this._config.reference == 'object' &&
                        (e = this._config.reference);
                const t = this._getPopperConfig();
                this._popper = jn(e, this._menu, t);
            }
            _isShown() {
                return this._menu.classList.contains(dt);
            }
            _getPlacement() {
                const e = this._parent;
                if (e.classList.contains(Cs)) return Fs;
                if (e.classList.contains(Ns)) return Ks;
                if (e.classList.contains(Ls)) return Ws;
                if (e.classList.contains(Ds)) return Bs;
                const t =
                    getComputedStyle(this._menu)
                        .getPropertyValue('--bs-position')
                        .trim() === 'end';
                return e.classList.contains(Ms) ? (t ? Hs : Vs) : t ? zs : ks;
            }
            _detectNavbar() {
                return this._element.closest($s) !== null;
            }
            _getOffset() {
                const { offset: e } = this._config;
                return typeof e == 'string'
                    ? e.split(',').map((t) => Number.parseInt(t, 10))
                    : typeof e == 'function'
                      ? (t) => e(t, this._element)
                      : e;
            }
            _getPopperConfig() {
                const e = {
                    placement: this._getPlacement(),
                    modifiers: [
                        {
                            name: 'preventOverflow',
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: 'offset',
                            options: { offset: this._getOffset() },
                        },
                    ],
                };
                return (
                    (this._inNavbar || this._config.display === 'static') &&
                        (be.setDataAttribute(this._menu, 'popper', 'static'),
                        (e.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
                    { ...e, ...H(this._config.popperConfig, [e]) }
                );
            }
            _selectMenuItem({ key: e, target: t }) {
                const r = C.find(Rs, this._menu).filter((o) => _(o));
                r.length && ht(r, t, e === Mr, !r.includes(t)).focus();
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = fe.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (typeof t[e] > 'u')
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
            static clearMenus(e) {
                if (e.button === As || (e.type === 'keyup' && e.key !== Sr))
                    return;
                const t = C.find(Is);
                for (const r of t) {
                    const o = fe.getInstance(r);
                    if (!o || o._config.autoClose === !1) continue;
                    const c = e.composedPath(),
                        d = c.includes(o._menu);
                    if (
                        c.includes(o._element) ||
                        (o._config.autoClose === 'inside' && !d) ||
                        (o._config.autoClose === 'outside' && d) ||
                        (o._menu.contains(e.target) &&
                            ((e.type === 'keyup' && e.key === Sr) ||
                                /input|select|option|textarea|form/i.test(
                                    e.target.tagName
                                )))
                    )
                        continue;
                    const y = { relatedTarget: o._element };
                    e.type === 'click' && (y.clickEvent = e),
                        o._completeHide(y);
                }
            }
            static dataApiKeydownHandler(e) {
                const t = /input|textarea/i.test(e.target.tagName),
                    r = e.key === Es,
                    o = [bs, Mr].includes(e.key);
                if ((!o && !r) || (t && !r)) return;
                e.preventDefault();
                const c = this.matches(Ve)
                        ? this
                        : C.prev(this, Ve)[0] ||
                          C.next(this, Ve)[0] ||
                          C.findOne(Ve, e.delegateTarget.parentNode),
                    d = fe.getOrCreateInstance(c);
                if (o) {
                    e.stopPropagation(), d.show(), d._selectMenuItem(e);
                    return;
                }
                d._isShown() && (e.stopPropagation(), d.hide(), c.focus());
            }
        }
        x.on(document, Nr, Ve, fe.dataApiKeydownHandler),
            x.on(document, Nr, Ft, fe.dataApiKeydownHandler),
            x.on(document, Cr, fe.clearMenus),
            x.on(document, Ss, fe.clearMenus),
            x.on(document, Cr, Ve, function (n) {
                n.preventDefault(), fe.getOrCreateInstance(this).toggle();
            }),
            $(fe);
        const Lr = 'backdrop',
            Us = 'fade',
            Dr = 'show',
            Ir = `mousedown.bs.${Lr}`,
            Xs = {
                className: 'modal-backdrop',
                clickCallback: null,
                isAnimated: !1,
                isVisible: !0,
                rootElement: 'body',
            },
            Qs = {
                className: 'string',
                clickCallback: '(function|null)',
                isAnimated: 'boolean',
                isVisible: 'boolean',
                rootElement: '(element|string)',
            };
        class $r extends yt {
            constructor(e) {
                super(),
                    (this._config = this._getConfig(e)),
                    (this._isAppended = !1),
                    (this._element = null);
            }
            static get Default() {
                return Xs;
            }
            static get DefaultType() {
                return Qs;
            }
            static get NAME() {
                return Lr;
            }
            show(e) {
                if (!this._config.isVisible) {
                    H(e);
                    return;
                }
                this._append();
                const t = this._getElement();
                this._config.isAnimated && w(t),
                    t.classList.add(Dr),
                    this._emulateAnimation(() => {
                        H(e);
                    });
            }
            hide(e) {
                if (!this._config.isVisible) {
                    H(e);
                    return;
                }
                this._getElement().classList.remove(Dr),
                    this._emulateAnimation(() => {
                        this.dispose(), H(e);
                    });
            }
            dispose() {
                this._isAppended &&
                    (x.off(this._element, Ir),
                    this._element.remove(),
                    (this._isAppended = !1));
            }
            _getElement() {
                if (!this._element) {
                    const e = document.createElement('div');
                    (e.className = this._config.className),
                        this._config.isAnimated && e.classList.add(Us),
                        (this._element = e);
                }
                return this._element;
            }
            _configAfterMerge(e) {
                return (e.rootElement = A(e.rootElement)), e;
            }
            _append() {
                if (this._isAppended) return;
                const e = this._getElement();
                this._config.rootElement.append(e),
                    x.on(e, Ir, () => {
                        H(this._config.clickCallback);
                    }),
                    (this._isAppended = !0);
            }
            _emulateAnimation(e) {
                ue(e, this._getElement(), this._config.isAnimated);
            }
        }
        const Zs = 'focustrap',
            Kt = '.bs.focustrap',
            Js = `focusin${Kt}`,
            qs = `keydown.tab${Kt}`,
            ea = 'Tab',
            ta = 'forward',
            Pr = 'backward',
            na = { autofocus: !0, trapElement: null },
            ra = { autofocus: 'boolean', trapElement: 'element' };
        class Rr extends yt {
            constructor(e) {
                super(),
                    (this._config = this._getConfig(e)),
                    (this._isActive = !1),
                    (this._lastTabNavDirection = null);
            }
            static get Default() {
                return na;
            }
            static get DefaultType() {
                return ra;
            }
            static get NAME() {
                return Zs;
            }
            activate() {
                this._isActive ||
                    (this._config.autofocus && this._config.trapElement.focus(),
                    x.off(document, Kt),
                    x.on(document, Js, (e) => this._handleFocusin(e)),
                    x.on(document, qs, (e) => this._handleKeydown(e)),
                    (this._isActive = !0));
            }
            deactivate() {
                this._isActive && ((this._isActive = !1), x.off(document, Kt));
            }
            _handleFocusin(e) {
                const { trapElement: t } = this._config;
                if (
                    e.target === document ||
                    e.target === t ||
                    t.contains(e.target)
                )
                    return;
                const r = C.focusableChildren(t);
                r.length === 0
                    ? t.focus()
                    : this._lastTabNavDirection === Pr
                      ? r[r.length - 1].focus()
                      : r[0].focus();
            }
            _handleKeydown(e) {
                e.key === ea &&
                    (this._lastTabNavDirection = e.shiftKey ? Pr : ta);
            }
        }
        const Vr = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
            Hr = '.sticky-top',
            Wt = 'padding-right',
            kr = 'margin-right';
        class Tn {
            constructor() {
                this._element = document.body;
            }
            getWidth() {
                const e = document.documentElement.clientWidth;
                return Math.abs(window.innerWidth - e);
            }
            hide() {
                const e = this.getWidth();
                this._disableOverFlow(),
                    this._setElementAttributes(this._element, Wt, (t) => t + e),
                    this._setElementAttributes(Vr, Wt, (t) => t + e),
                    this._setElementAttributes(Hr, kr, (t) => t - e);
            }
            reset() {
                this._resetElementAttributes(this._element, 'overflow'),
                    this._resetElementAttributes(this._element, Wt),
                    this._resetElementAttributes(Vr, Wt),
                    this._resetElementAttributes(Hr, kr);
            }
            isOverflowing() {
                return this.getWidth() > 0;
            }
            _disableOverFlow() {
                this._saveInitialAttribute(this._element, 'overflow'),
                    (this._element.style.overflow = 'hidden');
            }
            _setElementAttributes(e, t, r) {
                const o = this.getWidth(),
                    c = (d) => {
                        if (
                            d !== this._element &&
                            window.innerWidth > d.clientWidth + o
                        )
                            return;
                        this._saveInitialAttribute(d, t);
                        const y = window
                            .getComputedStyle(d)
                            .getPropertyValue(t);
                        d.style.setProperty(t, `${r(Number.parseFloat(y))}px`);
                    };
                this._applyManipulationCallback(e, c);
            }
            _saveInitialAttribute(e, t) {
                const r = e.style.getPropertyValue(t);
                r && be.setDataAttribute(e, t, r);
            }
            _resetElementAttributes(e, t) {
                const r = (o) => {
                    const c = be.getDataAttribute(o, t);
                    if (c === null) {
                        o.style.removeProperty(t);
                        return;
                    }
                    be.removeDataAttribute(o, t), o.style.setProperty(t, c);
                };
                this._applyManipulationCallback(e, r);
            }
            _applyManipulationCallback(e, t) {
                if (E(e)) {
                    t(e);
                    return;
                }
                for (const r of C.find(e, this._element)) t(r);
            }
        }
        const ia = 'modal',
            de = '.bs.modal',
            oa = '.data-api',
            sa = 'Escape',
            aa = `hide${de}`,
            la = `hidePrevented${de}`,
            zr = `hidden${de}`,
            Fr = `show${de}`,
            ca = `shown${de}`,
            da = `resize${de}`,
            ua = `click.dismiss${de}`,
            pa = `mousedown.dismiss${de}`,
            ha = `keydown.dismiss${de}`,
            fa = `click${de}${oa}`,
            Kr = 'modal-open',
            ya = 'fade',
            Wr = 'show',
            On = 'modal-static',
            ma = '.modal.show',
            ga = '.modal-dialog',
            va = '.modal-body',
            xa = '[data-bs-toggle="modal"]',
            _a = { backdrop: !0, focus: !0, keyboard: !0 },
            Ea = {
                backdrop: '(boolean|string)',
                focus: 'boolean',
                keyboard: 'boolean',
            };
        class He extends he {
            constructor(e, t) {
                super(e, t),
                    (this._dialog = C.findOne(ga, this._element)),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    (this._isShown = !1),
                    (this._isTransitioning = !1),
                    (this._scrollBar = new Tn()),
                    this._addEventListeners();
            }
            static get Default() {
                return _a;
            }
            static get DefaultType() {
                return Ea;
            }
            static get NAME() {
                return ia;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                this._isShown ||
                    this._isTransitioning ||
                    x.trigger(this._element, Fr, { relatedTarget: e })
                        .defaultPrevented ||
                    ((this._isShown = !0),
                    (this._isTransitioning = !0),
                    this._scrollBar.hide(),
                    document.body.classList.add(Kr),
                    this._adjustDialog(),
                    this._backdrop.show(() => this._showElement(e)));
            }
            hide() {
                !this._isShown ||
                    this._isTransitioning ||
                    x.trigger(this._element, aa).defaultPrevented ||
                    ((this._isShown = !1),
                    (this._isTransitioning = !0),
                    this._focustrap.deactivate(),
                    this._element.classList.remove(Wr),
                    this._queueCallback(
                        () => this._hideModal(),
                        this._element,
                        this._isAnimated()
                    ));
            }
            dispose() {
                x.off(window, de),
                    x.off(this._dialog, de),
                    this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose();
            }
            handleUpdate() {
                this._adjustDialog();
            }
            _initializeBackDrop() {
                return new $r({
                    isVisible: !!this._config.backdrop,
                    isAnimated: this._isAnimated(),
                });
            }
            _initializeFocusTrap() {
                return new Rr({ trapElement: this._element });
            }
            _showElement(e) {
                document.body.contains(this._element) ||
                    document.body.append(this._element),
                    (this._element.style.display = 'block'),
                    this._element.removeAttribute('aria-hidden'),
                    this._element.setAttribute('aria-modal', !0),
                    this._element.setAttribute('role', 'dialog'),
                    (this._element.scrollTop = 0);
                const t = C.findOne(va, this._dialog);
                t && (t.scrollTop = 0),
                    w(this._element),
                    this._element.classList.add(Wr);
                const r = () => {
                    this._config.focus && this._focustrap.activate(),
                        (this._isTransitioning = !1),
                        x.trigger(this._element, ca, { relatedTarget: e });
                };
                this._queueCallback(r, this._dialog, this._isAnimated());
            }
            _addEventListeners() {
                x.on(this._element, ha, (e) => {
                    if (e.key === sa) {
                        if (this._config.keyboard) {
                            this.hide();
                            return;
                        }
                        this._triggerBackdropTransition();
                    }
                }),
                    x.on(window, da, () => {
                        this._isShown &&
                            !this._isTransitioning &&
                            this._adjustDialog();
                    }),
                    x.on(this._element, pa, (e) => {
                        x.one(this._element, ua, (t) => {
                            if (
                                !(
                                    this._element !== e.target ||
                                    this._element !== t.target
                                )
                            ) {
                                if (this._config.backdrop === 'static') {
                                    this._triggerBackdropTransition();
                                    return;
                                }
                                this._config.backdrop && this.hide();
                            }
                        });
                    });
            }
            _hideModal() {
                (this._element.style.display = 'none'),
                    this._element.setAttribute('aria-hidden', !0),
                    this._element.removeAttribute('aria-modal'),
                    this._element.removeAttribute('role'),
                    (this._isTransitioning = !1),
                    this._backdrop.hide(() => {
                        document.body.classList.remove(Kr),
                            this._resetAdjustments(),
                            this._scrollBar.reset(),
                            x.trigger(this._element, zr);
                    });
            }
            _isAnimated() {
                return this._element.classList.contains(ya);
            }
            _triggerBackdropTransition() {
                if (x.trigger(this._element, la).defaultPrevented) return;
                const t =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight,
                    r = this._element.style.overflowY;
                r === 'hidden' ||
                    this._element.classList.contains(On) ||
                    (t || (this._element.style.overflowY = 'hidden'),
                    this._element.classList.add(On),
                    this._queueCallback(() => {
                        this._element.classList.remove(On),
                            this._queueCallback(() => {
                                this._element.style.overflowY = r;
                            }, this._dialog);
                    }, this._dialog),
                    this._element.focus());
            }
            _adjustDialog() {
                const e =
                        this._element.scrollHeight >
                        document.documentElement.clientHeight,
                    t = this._scrollBar.getWidth(),
                    r = t > 0;
                if (r && !e) {
                    const o = D() ? 'paddingLeft' : 'paddingRight';
                    this._element.style[o] = `${t}px`;
                }
                if (!r && e) {
                    const o = D() ? 'paddingRight' : 'paddingLeft';
                    this._element.style[o] = `${t}px`;
                }
            }
            _resetAdjustments() {
                (this._element.style.paddingLeft = ''),
                    (this._element.style.paddingRight = '');
            }
            static jQueryInterface(e, t) {
                return this.each(function () {
                    const r = He.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (typeof r[e] > 'u')
                            throw new TypeError(`No method named "${e}"`);
                        r[e](t);
                    }
                });
            }
        }
        x.on(document, fa, xa, function (n) {
            const e = C.getElementFromSelector(this);
            ['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
                x.one(e, Fr, (o) => {
                    o.defaultPrevented ||
                        x.one(e, zr, () => {
                            _(this) && this.focus();
                        });
                });
            const t = C.findOne(ma);
            t && He.getInstance(t).hide(),
                He.getOrCreateInstance(e).toggle(this);
        }),
            Nt(He),
            $(He);
        const ba = 'offcanvas',
            je = '.bs.offcanvas',
            Br = '.data-api',
            Aa = `load${je}${Br}`,
            ja = 'Escape',
            Yr = 'show',
            Gr = 'showing',
            Ur = 'hiding',
            wa = 'offcanvas-backdrop',
            Xr = '.offcanvas.show',
            Ta = `show${je}`,
            Oa = `shown${je}`,
            Sa = `hide${je}`,
            Qr = `hidePrevented${je}`,
            Zr = `hidden${je}`,
            Ma = `resize${je}`,
            Ca = `click${je}${Br}`,
            Na = `keydown.dismiss${je}`,
            La = '[data-bs-toggle="offcanvas"]',
            Da = { backdrop: !0, keyboard: !0, scroll: !1 },
            Ia = {
                backdrop: '(boolean|string)',
                keyboard: 'boolean',
                scroll: 'boolean',
            };
        class we extends he {
            constructor(e, t) {
                super(e, t),
                    (this._isShown = !1),
                    (this._backdrop = this._initializeBackDrop()),
                    (this._focustrap = this._initializeFocusTrap()),
                    this._addEventListeners();
            }
            static get Default() {
                return Da;
            }
            static get DefaultType() {
                return Ia;
            }
            static get NAME() {
                return ba;
            }
            toggle(e) {
                return this._isShown ? this.hide() : this.show(e);
            }
            show(e) {
                if (
                    this._isShown ||
                    x.trigger(this._element, Ta, { relatedTarget: e })
                        .defaultPrevented
                )
                    return;
                (this._isShown = !0),
                    this._backdrop.show(),
                    this._config.scroll || new Tn().hide(),
                    this._element.setAttribute('aria-modal', !0),
                    this._element.setAttribute('role', 'dialog'),
                    this._element.classList.add(Gr);
                const r = () => {
                    (!this._config.scroll || this._config.backdrop) &&
                        this._focustrap.activate(),
                        this._element.classList.add(Yr),
                        this._element.classList.remove(Gr),
                        x.trigger(this._element, Oa, { relatedTarget: e });
                };
                this._queueCallback(r, this._element, !0);
            }
            hide() {
                if (
                    !this._isShown ||
                    x.trigger(this._element, Sa).defaultPrevented
                )
                    return;
                this._focustrap.deactivate(),
                    this._element.blur(),
                    (this._isShown = !1),
                    this._element.classList.add(Ur),
                    this._backdrop.hide();
                const t = () => {
                    this._element.classList.remove(Yr, Ur),
                        this._element.removeAttribute('aria-modal'),
                        this._element.removeAttribute('role'),
                        this._config.scroll || new Tn().reset(),
                        x.trigger(this._element, Zr);
                };
                this._queueCallback(t, this._element, !0);
            }
            dispose() {
                this._backdrop.dispose(),
                    this._focustrap.deactivate(),
                    super.dispose();
            }
            _initializeBackDrop() {
                const e = () => {
                        if (this._config.backdrop === 'static') {
                            x.trigger(this._element, Qr);
                            return;
                        }
                        this.hide();
                    },
                    t = !!this._config.backdrop;
                return new $r({
                    className: wa,
                    isVisible: t,
                    isAnimated: !0,
                    rootElement: this._element.parentNode,
                    clickCallback: t ? e : null,
                });
            }
            _initializeFocusTrap() {
                return new Rr({ trapElement: this._element });
            }
            _addEventListeners() {
                x.on(this._element, Na, (e) => {
                    if (e.key === ja) {
                        if (this._config.keyboard) {
                            this.hide();
                            return;
                        }
                        x.trigger(this._element, Qr);
                    }
                });
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = we.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (
                            t[e] === void 0 ||
                            e.startsWith('_') ||
                            e === 'constructor'
                        )
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        x.on(document, Ca, La, function (n) {
            const e = C.getElementFromSelector(this);
            if (
                (['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
                v(this))
            )
                return;
            x.one(e, Zr, () => {
                _(this) && this.focus();
            });
            const t = C.findOne(Xr);
            t && t !== e && we.getInstance(t).hide(),
                we.getOrCreateInstance(e).toggle(this);
        }),
            x.on(window, Aa, () => {
                for (const n of C.find(Xr)) we.getOrCreateInstance(n).show();
            }),
            x.on(window, Ma, () => {
                for (const n of C.find(
                    '[aria-modal][class*=show][class*=offcanvas-]'
                ))
                    getComputedStyle(n).position !== 'fixed' &&
                        we.getOrCreateInstance(n).hide();
            }),
            Nt(we),
            $(we);
        const Jr = {
                '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
                a: ['target', 'href', 'title', 'rel'],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                dd: [],
                div: [],
                dl: [],
                dt: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            $a = new Set([
                'background',
                'cite',
                'href',
                'itemtype',
                'longdesc',
                'poster',
                'src',
                'xlink:href',
            ]),
            Pa = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
            Ra = (n, e) => {
                const t = n.nodeName.toLowerCase();
                return e.includes(t)
                    ? $a.has(t)
                        ? !!Pa.test(n.nodeValue)
                        : !0
                    : e
                          .filter((r) => r instanceof RegExp)
                          .some((r) => r.test(t));
            };
        function Va(n, e, t) {
            if (!n.length) return n;
            if (t && typeof t == 'function') return t(n);
            const o = new window.DOMParser().parseFromString(n, 'text/html'),
                c = [].concat(...o.body.querySelectorAll('*'));
            for (const d of c) {
                const y = d.nodeName.toLowerCase();
                if (!Object.keys(e).includes(y)) {
                    d.remove();
                    continue;
                }
                const b = [].concat(...d.attributes),
                    M = [].concat(e['*'] || [], e[y] || []);
                for (const j of b) Ra(j, M) || d.removeAttribute(j.nodeName);
            }
            return o.body.innerHTML;
        }
        const Ha = 'TemplateFactory',
            ka = {
                allowList: Jr,
                content: {},
                extraClass: '',
                html: !1,
                sanitize: !0,
                sanitizeFn: null,
                template: '<div></div>',
            },
            za = {
                allowList: 'object',
                content: 'object',
                extraClass: '(string|function)',
                html: 'boolean',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                template: 'string',
            },
            Fa = {
                entry: '(string|element|function|null)',
                selector: '(string|element)',
            };
        class Ka extends yt {
            constructor(e) {
                super(), (this._config = this._getConfig(e));
            }
            static get Default() {
                return ka;
            }
            static get DefaultType() {
                return za;
            }
            static get NAME() {
                return Ha;
            }
            getContent() {
                return Object.values(this._config.content)
                    .map((e) => this._resolvePossibleFunction(e))
                    .filter(Boolean);
            }
            hasContent() {
                return this.getContent().length > 0;
            }
            changeContent(e) {
                return (
                    this._checkContent(e),
                    (this._config.content = { ...this._config.content, ...e }),
                    this
                );
            }
            toHtml() {
                const e = document.createElement('div');
                e.innerHTML = this._maybeSanitize(this._config.template);
                for (const [o, c] of Object.entries(this._config.content))
                    this._setContent(e, c, o);
                const t = e.children[0],
                    r = this._resolvePossibleFunction(this._config.extraClass);
                return r && t.classList.add(...r.split(' ')), t;
            }
            _typeCheckConfig(e) {
                super._typeCheckConfig(e), this._checkContent(e.content);
            }
            _checkContent(e) {
                for (const [t, r] of Object.entries(e))
                    super._typeCheckConfig({ selector: t, entry: r }, Fa);
            }
            _setContent(e, t, r) {
                const o = C.findOne(r, e);
                if (o) {
                    if (((t = this._resolvePossibleFunction(t)), !t)) {
                        o.remove();
                        return;
                    }
                    if (E(t)) {
                        this._putElementInTemplate(A(t), o);
                        return;
                    }
                    if (this._config.html) {
                        o.innerHTML = this._maybeSanitize(t);
                        return;
                    }
                    o.textContent = t;
                }
            }
            _maybeSanitize(e) {
                return this._config.sanitize
                    ? Va(e, this._config.allowList, this._config.sanitizeFn)
                    : e;
            }
            _resolvePossibleFunction(e) {
                return H(e, [this]);
            }
            _putElementInTemplate(e, t) {
                if (this._config.html) {
                    (t.innerHTML = ''), t.append(e);
                    return;
                }
                t.textContent = e.textContent;
            }
        }
        const Wa = 'tooltip',
            Ba = new Set(['sanitize', 'allowList', 'sanitizeFn']),
            Sn = 'fade',
            Ya = 'modal',
            Bt = 'show',
            Ga = '.tooltip-inner',
            qr = `.${Ya}`,
            ei = 'hide.bs.modal',
            At = 'hover',
            Mn = 'focus',
            Ua = 'click',
            Xa = 'manual',
            Qa = 'hide',
            Za = 'hidden',
            Ja = 'show',
            qa = 'shown',
            el = 'inserted',
            tl = 'click',
            nl = 'focusin',
            rl = 'focusout',
            il = 'mouseenter',
            ol = 'mouseleave',
            sl = {
                AUTO: 'auto',
                TOP: 'top',
                RIGHT: D() ? 'left' : 'right',
                BOTTOM: 'bottom',
                LEFT: D() ? 'right' : 'left',
            },
            al = {
                allowList: Jr,
                animation: !0,
                boundary: 'clippingParents',
                container: !1,
                customClass: '',
                delay: 0,
                fallbackPlacements: ['top', 'right', 'bottom', 'left'],
                html: !1,
                offset: [0, 6],
                placement: 'top',
                popperConfig: null,
                sanitize: !0,
                sanitizeFn: null,
                selector: !1,
                template:
                    '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                title: '',
                trigger: 'hover focus',
            },
            ll = {
                allowList: 'object',
                animation: 'boolean',
                boundary: '(string|element)',
                container: '(string|element|boolean)',
                customClass: '(string|function)',
                delay: '(number|object)',
                fallbackPlacements: 'array',
                html: 'boolean',
                offset: '(array|string|function)',
                placement: '(string|function)',
                popperConfig: '(null|object|function)',
                sanitize: 'boolean',
                sanitizeFn: '(null|function)',
                selector: '(string|boolean)',
                template: 'string',
                title: '(string|element|function)',
                trigger: 'string',
            };
        class ke extends he {
            constructor(e, t) {
                if (typeof Tr > 'u')
                    throw new TypeError(
                        "Bootstrap's tooltips require Popper (https://popper.js.org)"
                    );
                super(e, t),
                    (this._isEnabled = !0),
                    (this._timeout = 0),
                    (this._isHovered = null),
                    (this._activeTrigger = {}),
                    (this._popper = null),
                    (this._templateFactory = null),
                    (this._newContent = null),
                    (this.tip = null),
                    this._setListeners(),
                    this._config.selector || this._fixTitle();
            }
            static get Default() {
                return al;
            }
            static get DefaultType() {
                return ll;
            }
            static get NAME() {
                return Wa;
            }
            enable() {
                this._isEnabled = !0;
            }
            disable() {
                this._isEnabled = !1;
            }
            toggleEnabled() {
                this._isEnabled = !this._isEnabled;
            }
            toggle() {
                if (this._isEnabled) {
                    if (
                        ((this._activeTrigger.click =
                            !this._activeTrigger.click),
                        this._isShown())
                    ) {
                        this._leave();
                        return;
                    }
                    this._enter();
                }
            }
            dispose() {
                clearTimeout(this._timeout),
                    x.off(
                        this._element.closest(qr),
                        ei,
                        this._hideModalHandler
                    ),
                    this._element.getAttribute('data-bs-original-title') &&
                        this._element.setAttribute(
                            'title',
                            this._element.getAttribute('data-bs-original-title')
                        ),
                    this._disposePopper(),
                    super.dispose();
            }
            show() {
                if (this._element.style.display === 'none')
                    throw new Error('Please use show on visible elements');
                if (!(this._isWithContent() && this._isEnabled)) return;
                const e = x.trigger(
                        this._element,
                        this.constructor.eventName(Ja)
                    ),
                    r = (
                        O(this._element) ||
                        this._element.ownerDocument.documentElement
                    ).contains(this._element);
                if (e.defaultPrevented || !r) return;
                this._disposePopper();
                const o = this._getTipElement();
                this._element.setAttribute(
                    'aria-describedby',
                    o.getAttribute('id')
                );
                const { container: c } = this._config;
                if (
                    (this._element.ownerDocument.documentElement.contains(
                        this.tip
                    ) ||
                        (c.append(o),
                        x.trigger(
                            this._element,
                            this.constructor.eventName(el)
                        )),
                    (this._popper = this._createPopper(o)),
                    o.classList.add(Bt),
                    'ontouchstart' in document.documentElement)
                )
                    for (const y of [].concat(...document.body.children))
                        x.on(y, 'mouseover', T);
                const d = () => {
                    x.trigger(this._element, this.constructor.eventName(qa)),
                        this._isHovered === !1 && this._leave(),
                        (this._isHovered = !1);
                };
                this._queueCallback(d, this.tip, this._isAnimated());
            }
            hide() {
                if (
                    !this._isShown() ||
                    x.trigger(this._element, this.constructor.eventName(Qa))
                        .defaultPrevented
                )
                    return;
                if (
                    (this._getTipElement().classList.remove(Bt),
                    'ontouchstart' in document.documentElement)
                )
                    for (const o of [].concat(...document.body.children))
                        x.off(o, 'mouseover', T);
                (this._activeTrigger[Ua] = !1),
                    (this._activeTrigger[Mn] = !1),
                    (this._activeTrigger[At] = !1),
                    (this._isHovered = null);
                const r = () => {
                    this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute('aria-describedby'),
                        x.trigger(
                            this._element,
                            this.constructor.eventName(Za)
                        ));
                };
                this._queueCallback(r, this.tip, this._isAnimated());
            }
            update() {
                this._popper && this._popper.update();
            }
            _isWithContent() {
                return !!this._getTitle();
            }
            _getTipElement() {
                return (
                    this.tip ||
                        (this.tip = this._createTipElement(
                            this._newContent || this._getContentForTemplate()
                        )),
                    this.tip
                );
            }
            _createTipElement(e) {
                const t = this._getTemplateFactory(e).toHtml();
                if (!t) return null;
                t.classList.remove(Sn, Bt),
                    t.classList.add(`bs-${this.constructor.NAME}-auto`);
                const r = h(this.constructor.NAME).toString();
                return (
                    t.setAttribute('id', r),
                    this._isAnimated() && t.classList.add(Sn),
                    t
                );
            }
            setContent(e) {
                (this._newContent = e),
                    this._isShown() && (this._disposePopper(), this.show());
            }
            _getTemplateFactory(e) {
                return (
                    this._templateFactory
                        ? this._templateFactory.changeContent(e)
                        : (this._templateFactory = new Ka({
                              ...this._config,
                              content: e,
                              extraClass: this._resolvePossibleFunction(
                                  this._config.customClass
                              ),
                          })),
                    this._templateFactory
                );
            }
            _getContentForTemplate() {
                return { [Ga]: this._getTitle() };
            }
            _getTitle() {
                return (
                    this._resolvePossibleFunction(this._config.title) ||
                    this._element.getAttribute('data-bs-original-title')
                );
            }
            _initializeOnDelegatedTarget(e) {
                return this.constructor.getOrCreateInstance(
                    e.delegateTarget,
                    this._getDelegateConfig()
                );
            }
            _isAnimated() {
                return (
                    this._config.animation ||
                    (this.tip && this.tip.classList.contains(Sn))
                );
            }
            _isShown() {
                return this.tip && this.tip.classList.contains(Bt);
            }
            _createPopper(e) {
                const t = H(this._config.placement, [this, e, this._element]),
                    r = sl[t.toUpperCase()];
                return jn(this._element, e, this._getPopperConfig(r));
            }
            _getOffset() {
                const { offset: e } = this._config;
                return typeof e == 'string'
                    ? e.split(',').map((t) => Number.parseInt(t, 10))
                    : typeof e == 'function'
                      ? (t) => e(t, this._element)
                      : e;
            }
            _resolvePossibleFunction(e) {
                return H(e, [this._element]);
            }
            _getPopperConfig(e) {
                const t = {
                    placement: e,
                    modifiers: [
                        {
                            name: 'flip',
                            options: {
                                fallbackPlacements:
                                    this._config.fallbackPlacements,
                            },
                        },
                        {
                            name: 'offset',
                            options: { offset: this._getOffset() },
                        },
                        {
                            name: 'preventOverflow',
                            options: { boundary: this._config.boundary },
                        },
                        {
                            name: 'arrow',
                            options: {
                                element: `.${this.constructor.NAME}-arrow`,
                            },
                        },
                        {
                            name: 'preSetPlacement',
                            enabled: !0,
                            phase: 'beforeMain',
                            fn: (r) => {
                                this._getTipElement().setAttribute(
                                    'data-popper-placement',
                                    r.state.placement
                                );
                            },
                        },
                    ],
                };
                return { ...t, ...H(this._config.popperConfig, [t]) };
            }
            _setListeners() {
                const e = this._config.trigger.split(' ');
                for (const t of e)
                    if (t === 'click')
                        x.on(
                            this._element,
                            this.constructor.eventName(tl),
                            this._config.selector,
                            (r) => {
                                this._initializeOnDelegatedTarget(r).toggle();
                            }
                        );
                    else if (t !== Xa) {
                        const r =
                                t === At
                                    ? this.constructor.eventName(il)
                                    : this.constructor.eventName(nl),
                            o =
                                t === At
                                    ? this.constructor.eventName(ol)
                                    : this.constructor.eventName(rl);
                        x.on(this._element, r, this._config.selector, (c) => {
                            const d = this._initializeOnDelegatedTarget(c);
                            (d._activeTrigger[c.type === 'focusin' ? Mn : At] =
                                !0),
                                d._enter();
                        }),
                            x.on(
                                this._element,
                                o,
                                this._config.selector,
                                (c) => {
                                    const d =
                                        this._initializeOnDelegatedTarget(c);
                                    (d._activeTrigger[
                                        c.type === 'focusout' ? Mn : At
                                    ] = d._element.contains(c.relatedTarget)),
                                        d._leave();
                                }
                            );
                    }
                (this._hideModalHandler = () => {
                    this._element && this.hide();
                }),
                    x.on(this._element.closest(qr), ei, this._hideModalHandler);
            }
            _fixTitle() {
                const e = this._element.getAttribute('title');
                e &&
                    (!this._element.getAttribute('aria-label') &&
                        !this._element.textContent.trim() &&
                        this._element.setAttribute('aria-label', e),
                    this._element.setAttribute('data-bs-original-title', e),
                    this._element.removeAttribute('title'));
            }
            _enter() {
                if (this._isShown() || this._isHovered) {
                    this._isHovered = !0;
                    return;
                }
                (this._isHovered = !0),
                    this._setTimeout(() => {
                        this._isHovered && this.show();
                    }, this._config.delay.show);
            }
            _leave() {
                this._isWithActiveTrigger() ||
                    ((this._isHovered = !1),
                    this._setTimeout(() => {
                        this._isHovered || this.hide();
                    }, this._config.delay.hide));
            }
            _setTimeout(e, t) {
                clearTimeout(this._timeout), (this._timeout = setTimeout(e, t));
            }
            _isWithActiveTrigger() {
                return Object.values(this._activeTrigger).includes(!0);
            }
            _getConfig(e) {
                const t = be.getDataAttributes(this._element);
                for (const r of Object.keys(t)) Ba.has(r) && delete t[r];
                return (
                    (e = { ...t, ...(typeof e == 'object' && e ? e : {}) }),
                    (e = this._mergeConfigObj(e)),
                    (e = this._configAfterMerge(e)),
                    this._typeCheckConfig(e),
                    e
                );
            }
            _configAfterMerge(e) {
                return (
                    (e.container =
                        e.container === !1 ? document.body : A(e.container)),
                    typeof e.delay == 'number' &&
                        (e.delay = { show: e.delay, hide: e.delay }),
                    typeof e.title == 'number' &&
                        (e.title = e.title.toString()),
                    typeof e.content == 'number' &&
                        (e.content = e.content.toString()),
                    e
                );
            }
            _getDelegateConfig() {
                const e = {};
                for (const [t, r] of Object.entries(this._config))
                    this.constructor.Default[t] !== r && (e[t] = r);
                return (e.selector = !1), (e.trigger = 'manual'), e;
            }
            _disposePopper() {
                this._popper && (this._popper.destroy(), (this._popper = null)),
                    this.tip && (this.tip.remove(), (this.tip = null));
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = ke.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (typeof t[e] > 'u')
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        $(ke);
        const cl = 'popover',
            dl = '.popover-header',
            ul = '.popover-body',
            pl = {
                ...ke.Default,
                content: '',
                offset: [0, 8],
                placement: 'right',
                template:
                    '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
                trigger: 'click',
            },
            hl = {
                ...ke.DefaultType,
                content: '(null|string|element|function)',
            };
        class Yt extends ke {
            static get Default() {
                return pl;
            }
            static get DefaultType() {
                return hl;
            }
            static get NAME() {
                return cl;
            }
            _isWithContent() {
                return this._getTitle() || this._getContent();
            }
            _getContentForTemplate() {
                return { [dl]: this._getTitle(), [ul]: this._getContent() };
            }
            _getContent() {
                return this._resolvePossibleFunction(this._config.content);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Yt.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (typeof t[e] > 'u')
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        $(Yt);
        const fl = 'scrollspy',
            Cn = '.bs.scrollspy',
            yl = '.data-api',
            ml = `activate${Cn}`,
            ti = `click${Cn}`,
            gl = `load${Cn}${yl}`,
            vl = 'dropdown-item',
            ut = 'active',
            xl = '[data-bs-spy="scroll"]',
            Nn = '[href]',
            _l = '.nav, .list-group',
            ni = '.nav-link',
            El = `${ni}, .nav-item > ${ni}, .list-group-item`,
            bl = '.dropdown',
            Al = '.dropdown-toggle',
            jl = {
                offset: null,
                rootMargin: '0px 0px -25%',
                smoothScroll: !1,
                target: null,
                threshold: [0.1, 0.5, 1],
            },
            wl = {
                offset: '(number|null)',
                rootMargin: 'string',
                smoothScroll: 'boolean',
                target: 'element',
                threshold: 'array',
            };
        class jt extends he {
            constructor(e, t) {
                super(e, t),
                    (this._targetLinks = new Map()),
                    (this._observableSections = new Map()),
                    (this._rootElement =
                        getComputedStyle(this._element).overflowY === 'visible'
                            ? null
                            : this._element),
                    (this._activeTarget = null),
                    (this._observer = null),
                    (this._previousScrollData = {
                        visibleEntryTop: 0,
                        parentScrollTop: 0,
                    }),
                    this.refresh();
            }
            static get Default() {
                return jl;
            }
            static get DefaultType() {
                return wl;
            }
            static get NAME() {
                return fl;
            }
            refresh() {
                this._initializeTargetsAndObservables(),
                    this._maybeEnableSmoothScroll(),
                    this._observer
                        ? this._observer.disconnect()
                        : (this._observer = this._getNewObserver());
                for (const e of this._observableSections.values())
                    this._observer.observe(e);
            }
            dispose() {
                this._observer.disconnect(), super.dispose();
            }
            _configAfterMerge(e) {
                return (
                    (e.target = A(e.target) || document.body),
                    (e.rootMargin = e.offset
                        ? `${e.offset}px 0px -30%`
                        : e.rootMargin),
                    typeof e.threshold == 'string' &&
                        (e.threshold = e.threshold
                            .split(',')
                            .map((t) => Number.parseFloat(t))),
                    e
                );
            }
            _maybeEnableSmoothScroll() {
                this._config.smoothScroll &&
                    (x.off(this._config.target, ti),
                    x.on(this._config.target, ti, Nn, (e) => {
                        const t = this._observableSections.get(e.target.hash);
                        if (t) {
                            e.preventDefault();
                            const r = this._rootElement || window,
                                o = t.offsetTop - this._element.offsetTop;
                            if (r.scrollTo) {
                                r.scrollTo({ top: o, behavior: 'smooth' });
                                return;
                            }
                            r.scrollTop = o;
                        }
                    }));
            }
            _getNewObserver() {
                const e = {
                    root: this._rootElement,
                    threshold: this._config.threshold,
                    rootMargin: this._config.rootMargin,
                };
                return new IntersectionObserver(
                    (t) => this._observerCallback(t),
                    e
                );
            }
            _observerCallback(e) {
                const t = (d) => this._targetLinks.get(`#${d.target.id}`),
                    r = (d) => {
                        (this._previousScrollData.visibleEntryTop =
                            d.target.offsetTop),
                            this._process(t(d));
                    },
                    o = (this._rootElement || document.documentElement)
                        .scrollTop,
                    c = o >= this._previousScrollData.parentScrollTop;
                this._previousScrollData.parentScrollTop = o;
                for (const d of e) {
                    if (!d.isIntersecting) {
                        (this._activeTarget = null),
                            this._clearActiveClass(t(d));
                        continue;
                    }
                    const y =
                        d.target.offsetTop >=
                        this._previousScrollData.visibleEntryTop;
                    if (c && y) {
                        if ((r(d), !o)) return;
                        continue;
                    }
                    !c && !y && r(d);
                }
            }
            _initializeTargetsAndObservables() {
                (this._targetLinks = new Map()),
                    (this._observableSections = new Map());
                const e = C.find(Nn, this._config.target);
                for (const t of e) {
                    if (!t.hash || v(t)) continue;
                    const r = C.findOne(decodeURI(t.hash), this._element);
                    _(r) &&
                        (this._targetLinks.set(decodeURI(t.hash), t),
                        this._observableSections.set(t.hash, r));
                }
            }
            _process(e) {
                this._activeTarget !== e &&
                    (this._clearActiveClass(this._config.target),
                    (this._activeTarget = e),
                    e.classList.add(ut),
                    this._activateParents(e),
                    x.trigger(this._element, ml, { relatedTarget: e }));
            }
            _activateParents(e) {
                if (e.classList.contains(vl)) {
                    C.findOne(Al, e.closest(bl)).classList.add(ut);
                    return;
                }
                for (const t of C.parents(e, _l))
                    for (const r of C.prev(t, El)) r.classList.add(ut);
            }
            _clearActiveClass(e) {
                e.classList.remove(ut);
                const t = C.find(`${Nn}.${ut}`, e);
                for (const r of t) r.classList.remove(ut);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = jt.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (
                            t[e] === void 0 ||
                            e.startsWith('_') ||
                            e === 'constructor'
                        )
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        x.on(window, gl, () => {
            for (const n of C.find(xl)) jt.getOrCreateInstance(n);
        }),
            $(jt);
        const Tl = 'tab',
            ze = '.bs.tab',
            Ol = `hide${ze}`,
            Sl = `hidden${ze}`,
            Ml = `show${ze}`,
            Cl = `shown${ze}`,
            Nl = `click${ze}`,
            Ll = `keydown${ze}`,
            Dl = `load${ze}`,
            Il = 'ArrowLeft',
            ri = 'ArrowRight',
            $l = 'ArrowUp',
            ii = 'ArrowDown',
            Ln = 'Home',
            oi = 'End',
            Fe = 'active',
            si = 'fade',
            Dn = 'show',
            Pl = 'dropdown',
            ai = '.dropdown-toggle',
            Rl = '.dropdown-menu',
            In = `:not(${ai})`,
            Vl = '.list-group, .nav, [role="tablist"]',
            Hl = '.nav-item, .list-group-item',
            kl = `.nav-link${In}, .list-group-item${In}, [role="tab"]${In}`,
            li =
                '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
            $n = `${kl}, ${li}`,
            zl = `.${Fe}[data-bs-toggle="tab"], .${Fe}[data-bs-toggle="pill"], .${Fe}[data-bs-toggle="list"]`;
        class Ke extends he {
            constructor(e) {
                super(e),
                    (this._parent = this._element.closest(Vl)),
                    this._parent &&
                        (this._setInitialAttributes(
                            this._parent,
                            this._getChildren()
                        ),
                        x.on(this._element, Ll, (t) => this._keydown(t)));
            }
            static get NAME() {
                return Tl;
            }
            show() {
                const e = this._element;
                if (this._elemIsActive(e)) return;
                const t = this._getActiveElem(),
                    r = t ? x.trigger(t, Ol, { relatedTarget: e }) : null;
                x.trigger(e, Ml, { relatedTarget: t }).defaultPrevented ||
                    (r && r.defaultPrevented) ||
                    (this._deactivate(t, e), this._activate(e, t));
            }
            _activate(e, t) {
                if (!e) return;
                e.classList.add(Fe),
                    this._activate(C.getElementFromSelector(e));
                const r = () => {
                    if (e.getAttribute('role') !== 'tab') {
                        e.classList.add(Dn);
                        return;
                    }
                    e.removeAttribute('tabindex'),
                        e.setAttribute('aria-selected', !0),
                        this._toggleDropDown(e, !0),
                        x.trigger(e, Cl, { relatedTarget: t });
                };
                this._queueCallback(r, e, e.classList.contains(si));
            }
            _deactivate(e, t) {
                if (!e) return;
                e.classList.remove(Fe),
                    e.blur(),
                    this._deactivate(C.getElementFromSelector(e));
                const r = () => {
                    if (e.getAttribute('role') !== 'tab') {
                        e.classList.remove(Dn);
                        return;
                    }
                    e.setAttribute('aria-selected', !1),
                        e.setAttribute('tabindex', '-1'),
                        this._toggleDropDown(e, !1),
                        x.trigger(e, Sl, { relatedTarget: t });
                };
                this._queueCallback(r, e, e.classList.contains(si));
            }
            _keydown(e) {
                if (![Il, ri, $l, ii, Ln, oi].includes(e.key)) return;
                e.stopPropagation(), e.preventDefault();
                const t = this._getChildren().filter((o) => !v(o));
                let r;
                if ([Ln, oi].includes(e.key))
                    r = t[e.key === Ln ? 0 : t.length - 1];
                else {
                    const o = [ri, ii].includes(e.key);
                    r = ht(t, e.target, o, !0);
                }
                r &&
                    (r.focus({ preventScroll: !0 }),
                    Ke.getOrCreateInstance(r).show());
            }
            _getChildren() {
                return C.find($n, this._parent);
            }
            _getActiveElem() {
                return (
                    this._getChildren().find((e) => this._elemIsActive(e)) ||
                    null
                );
            }
            _setInitialAttributes(e, t) {
                this._setAttributeIfNotExists(e, 'role', 'tablist');
                for (const r of t) this._setInitialAttributesOnChild(r);
            }
            _setInitialAttributesOnChild(e) {
                e = this._getInnerElement(e);
                const t = this._elemIsActive(e),
                    r = this._getOuterElement(e);
                e.setAttribute('aria-selected', t),
                    r !== e &&
                        this._setAttributeIfNotExists(
                            r,
                            'role',
                            'presentation'
                        ),
                    t || e.setAttribute('tabindex', '-1'),
                    this._setAttributeIfNotExists(e, 'role', 'tab'),
                    this._setInitialAttributesOnTargetPanel(e);
            }
            _setInitialAttributesOnTargetPanel(e) {
                const t = C.getElementFromSelector(e);
                t &&
                    (this._setAttributeIfNotExists(t, 'role', 'tabpanel'),
                    e.id &&
                        this._setAttributeIfNotExists(
                            t,
                            'aria-labelledby',
                            `${e.id}`
                        ));
            }
            _toggleDropDown(e, t) {
                const r = this._getOuterElement(e);
                if (!r.classList.contains(Pl)) return;
                const o = (c, d) => {
                    const y = C.findOne(c, r);
                    y && y.classList.toggle(d, t);
                };
                o(ai, Fe), o(Rl, Dn), r.setAttribute('aria-expanded', t);
            }
            _setAttributeIfNotExists(e, t, r) {
                e.hasAttribute(t) || e.setAttribute(t, r);
            }
            _elemIsActive(e) {
                return e.classList.contains(Fe);
            }
            _getInnerElement(e) {
                return e.matches($n) ? e : C.findOne($n, e);
            }
            _getOuterElement(e) {
                return e.closest(Hl) || e;
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = Ke.getOrCreateInstance(this);
                    if (typeof e == 'string') {
                        if (
                            t[e] === void 0 ||
                            e.startsWith('_') ||
                            e === 'constructor'
                        )
                            throw new TypeError(`No method named "${e}"`);
                        t[e]();
                    }
                });
            }
        }
        x.on(document, Nl, li, function (n) {
            ['A', 'AREA'].includes(this.tagName) && n.preventDefault(),
                !v(this) && Ke.getOrCreateInstance(this).show();
        }),
            x.on(window, Dl, () => {
                for (const n of C.find(zl)) Ke.getOrCreateInstance(n);
            }),
            $(Ke);
        const Fl = 'toast',
            Ne = '.bs.toast',
            Kl = `mouseover${Ne}`,
            Wl = `mouseout${Ne}`,
            Bl = `focusin${Ne}`,
            Yl = `focusout${Ne}`,
            Gl = `hide${Ne}`,
            Ul = `hidden${Ne}`,
            Xl = `show${Ne}`,
            Ql = `shown${Ne}`,
            Zl = 'fade',
            ci = 'hide',
            Gt = 'show',
            Ut = 'showing',
            Jl = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
            ql = { animation: !0, autohide: !0, delay: 5e3 };
        class wt extends he {
            constructor(e, t) {
                super(e, t),
                    (this._timeout = null),
                    (this._hasMouseInteraction = !1),
                    (this._hasKeyboardInteraction = !1),
                    this._setListeners();
            }
            static get Default() {
                return ql;
            }
            static get DefaultType() {
                return Jl;
            }
            static get NAME() {
                return Fl;
            }
            show() {
                if (x.trigger(this._element, Xl).defaultPrevented) return;
                this._clearTimeout(),
                    this._config.animation && this._element.classList.add(Zl);
                const t = () => {
                    this._element.classList.remove(Ut),
                        x.trigger(this._element, Ql),
                        this._maybeScheduleHide();
                };
                this._element.classList.remove(ci),
                    w(this._element),
                    this._element.classList.add(Gt, Ut),
                    this._queueCallback(
                        t,
                        this._element,
                        this._config.animation
                    );
            }
            hide() {
                if (
                    !this.isShown() ||
                    x.trigger(this._element, Gl).defaultPrevented
                )
                    return;
                const t = () => {
                    this._element.classList.add(ci),
                        this._element.classList.remove(Ut, Gt),
                        x.trigger(this._element, Ul);
                };
                this._element.classList.add(Ut),
                    this._queueCallback(
                        t,
                        this._element,
                        this._config.animation
                    );
            }
            dispose() {
                this._clearTimeout(),
                    this.isShown() && this._element.classList.remove(Gt),
                    super.dispose();
            }
            isShown() {
                return this._element.classList.contains(Gt);
            }
            _maybeScheduleHide() {
                this._config.autohide &&
                    (this._hasMouseInteraction ||
                        this._hasKeyboardInteraction ||
                        (this._timeout = setTimeout(() => {
                            this.hide();
                        }, this._config.delay)));
            }
            _onInteraction(e, t) {
                switch (e.type) {
                    case 'mouseover':
                    case 'mouseout': {
                        this._hasMouseInteraction = t;
                        break;
                    }
                    case 'focusin':
                    case 'focusout': {
                        this._hasKeyboardInteraction = t;
                        break;
                    }
                }
                if (t) {
                    this._clearTimeout();
                    return;
                }
                const r = e.relatedTarget;
                this._element === r ||
                    this._element.contains(r) ||
                    this._maybeScheduleHide();
            }
            _setListeners() {
                x.on(this._element, Kl, (e) => this._onInteraction(e, !0)),
                    x.on(this._element, Wl, (e) => this._onInteraction(e, !1)),
                    x.on(this._element, Bl, (e) => this._onInteraction(e, !0)),
                    x.on(this._element, Yl, (e) => this._onInteraction(e, !1));
            }
            _clearTimeout() {
                clearTimeout(this._timeout), (this._timeout = null);
            }
            static jQueryInterface(e) {
                return this.each(function () {
                    const t = wt.getOrCreateInstance(this, e);
                    if (typeof e == 'string') {
                        if (typeof t[e] > 'u')
                            throw new TypeError(`No method named "${e}"`);
                        t[e](this);
                    }
                });
            }
        }
        return (
            Nt(wt),
            $(wt),
            {
                Alert: mt,
                Button: gt,
                Carousel: et,
                Collapse: nt,
                Dropdown: fe,
                Modal: He,
                Offcanvas: we,
                Popover: Yt,
                ScrollSpy: jt,
                Tab: Ke,
                Toast: wt,
                Tooltip: ke,
            }
        );
    });
})(Ai);
var lc = Ai.exports;
const cc = Ei(lc),
    en = (Q) => Q.innerWidth > 1200,
    ji = (Q, z = !1) => {
        const s = Q.children;
        let f = 0;
        for (let i = 0; i < Q.childElementCount; i++) {
            const l = s[i];
            if (
                ((f += l.querySelector('.submenu-link').clientHeight),
                z && l.classList.contains('has-sub'))
            ) {
                const a = l.querySelector('.submenu');
                if (a.classList.contains('submenu-open')) {
                    const u = ~~[...a.querySelectorAll('.submenu-link')].reduce(
                        (p, h) => p + h.clientHeight,
                        0
                    );
                    f += u;
                }
            }
        }
        return Q.style.setProperty('--submenu-height', f + 'px'), f;
    };
class dc {
    constructor(z, s = {}) {
        (this.sidebarEL =
            z instanceof HTMLElement ? z : document.querySelector(z)),
            (this.options = s),
            this.init();
    }
    init() {
        document
            .querySelectorAll('.burger-btn')
            .forEach((i) =>
                i.addEventListener('click', this.toggle.bind(this))
            ),
            document
                .querySelectorAll('.sidebar-hide')
                .forEach((i) =>
                    i.addEventListener('click', this.toggle.bind(this))
                ),
            window.addEventListener('resize', this.onResize.bind(this));
        const z = (i) => {
            i.classList.contains('submenu-open')
                ? (i.classList.remove('submenu-open'),
                  i.classList.add('submenu-closed'))
                : (i.classList.remove('submenu-closed'),
                  i.classList.add('submenu-open'));
        };
        let s = document.querySelectorAll('.sidebar-item.has-sub');
        for (var f = 0; f < s.length; f++) {
            let i = s[f];
            s[f]
                .querySelector('.sidebar-link')
                .addEventListener('click', (a) => {
                    a.preventDefault();
                    let u = i.querySelector('.submenu');
                    z(u);
                }),
                i.querySelectorAll('.submenu-item.has-sub').forEach((a) => {
                    a.addEventListener('click', () => {
                        const u = a.querySelector('.submenu');
                        z(u), ji(a.parentElement, !0);
                    });
                });
        }
        if (typeof PerfectScrollbar == 'function') {
            const i = document.querySelector('.sidebar-wrapper');
            new PerfectScrollbar(i, { wheelPropagation: !1 });
        }
        setTimeout(() => {
            this.forceElementVisibility(
                document.querySelector('.sidebar-item.active')
            );
        }, 300);
    }
    onResize() {
        en(window)
            ? (this.sidebarEL.classList.add('active'),
              this.sidebarEL.classList.remove('inactive'))
            : this.sidebarEL.classList.remove('active'),
            this.deleteBackdrop(),
            this.toggleOverflowBody(!0);
    }
    toggle() {
        this.sidebarEL.classList.contains('active') ? this.hide() : this.show();
    }
    show() {
        this.sidebarEL.classList.add('active'),
            this.sidebarEL.classList.remove('inactive'),
            this.createBackdrop(),
            this.toggleOverflowBody();
    }
    hide() {
        this.sidebarEL.classList.remove('active'),
            this.deleteBackdrop(),
            this.toggleOverflowBody();
    }
    createBackdrop() {
        if (en(window)) return;
        this.deleteBackdrop();
        const z = document.createElement('div');
        z.classList.add('sidebar-backdrop'),
            z.addEventListener('click', this.hide.bind(this)),
            document.body.appendChild(z);
    }
    deleteBackdrop() {
        const z = document.querySelector('.sidebar-backdrop');
        z && z.remove();
    }
    toggleOverflowBody(z) {
        if (en(window)) return;
        const s = this.sidebarEL.classList.contains('active'),
            f = document.querySelector('body');
        typeof z > 'u'
            ? (f.style.overflowY = s ? 'hidden' : 'auto')
            : (f.style.overflowY = z ? 'auto' : 'hidden');
    }
    isElementInViewport(z) {
        var s = z.getBoundingClientRect();
        return (
            s.top >= 0 &&
            s.left >= 0 &&
            s.bottom <=
                (window.innerHeight || document.documentElement.clientHeight) &&
            s.right <=
                (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    forceElementVisibility(z) {
        this.isElementInViewport(z) || z.scrollIntoView(!1);
    }
}
let St = document.getElementById('sidebar');
const xi = (Q) => {
    if (!St) return;
    en(window) &&
        (Q.classList.add('active'), Q.classList.add('sidebar-desktop'));
    let z = document.querySelectorAll('.sidebar-item.has-sub .submenu');
    for (var s = 0; s < z.length; s++) {
        let f = z[s];
        const i = f.parentElement;
        f.clientHeight,
            i.classList.contains('active')
                ? f.classList.add('submenu-open')
                : f.classList.add('submenu-closed'),
            setTimeout(() => {
                ji(f, !0);
            }, 50);
    }
};
document.readyState !== 'loading'
    ? xi(St)
    : window.addEventListener('DOMContentLoaded', () => xi(St));
St && (window.sidebar = new dc(St));
window.bootstrap = cc;
ac.replace();
