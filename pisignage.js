; (() => {
    var e,
        t,
        n = {},
        i = {}
    function r(e) {
        var t = i[e]
        if (void 0 !== t) return t.exports
        var o = (i[e] = { exports: {} })
        return n[e](o, o.exports, r), o.exports
    }
    ; (t = Object.getPrototypeOf
        ? (e) => Object.getPrototypeOf(e)
        : (e) => e.__proto__),
        (r.t = function (n, i) {
            if ((1 & i && (n = this(n)), 8 & i)) return n
            if ('object' == typeof n && n) {
                if (4 & i && n.__esModule) return n
                if (16 & i && 'function' == typeof n.then) return n
            }
            var o = Object.create(null)
            r.r(o)
            var a = {}
            e = e || [null, t({}), t([]), t(t)]
            for (var s = 2 & i && n; 'object' == typeof s && !~e.indexOf(s); s = t(s))
                Object.getOwnPropertyNames(s).forEach((e) => (a[e] = () => n[e]))
            return (a.default = () => n), r.d(o, a), o
        }),
        (r.d = (e, t) => {
            for (var n in t)
                r.o(t, n) &&
                    !r.o(e, n) &&
                    Object.defineProperty(e, n, { enumerable: !0, get: t[n] })
        }),
        (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (r.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        })
    const o = require('loglevel'),
        a = require('loglevel-plugin-prefix'),
        s = require('chalk'),
        c = require('dotenv'),
        l = require('path'),
        d = require('os')
    var u = (e) =>
        'undefined' == typeof window ? process.env[e] : window.process.env[e]
    console.log(
        '--------------------------------------------------------------------',
    ),
        console.log(
            '--------------------------------------------------------------------',
        ),
        console.log(
            '--------------------------------------------------------------------',
        ),
        console.log(
            '[ '.concat(
                new Date().toUTCString(),
                ' ]: Restarting the piSignage app ',
            ),
        )
    var p = c.config({ path: l.join(d.homedir(), '.env') }),
        y = ''
    p.error ||
        (console.log(
            'Setting node process.env variables,  '.concat(JSON.stringify(p.parsed)),
        ),
            (y = p.parsed.NODE_ENV)),
        'development' === y &&
        ((process.env.MAINLOG = !0),
            (process.env.PLAYERLOG = !0),
            (process.env.SERVERLOG = !0))
    var f = u('REDUXLOG'),
        v = u('MAINLOG') ? 'debug' : 'info',
        g = u('PLAYERLOG') ? 'debug' : 'info',
        m = u('SERVERLOG') ? 'debug' : 'info',
        h = 'production' !== u('NODE_ENV')
    console.log(
        'log levels for messages: Main:'
            .concat(v, ',Player:')
            .concat(g, ',Network:')
            .concat(m, ',Redux:')
            .concat(f, ','),
    ),
        console.log(
            '--------------------------------------------------------------------',
        ),
        o.setDefaultLevel('debug', !1),
        !0 !== h && a.reg(o)
    var k = o.getLogger('MAIN')
    k.setDefaultLevel(v, !1)
    var b = o.getLogger('PLAYER')
    b.setDefaultLevel(g, !1)
    var w = o.getLogger('SERVER')
    w.setDefaultLevel(m, !1)
    var S = {
        TRACE: s.magenta,
        DEBUG: s.cyan,
        INFO: s.blue,
        WARN: s.yellow,
        ERROR: s.red,
    }
    !0 !== h &&
        (a.apply(k, {
            format: (e, t, n) =>
                ''
                    .concat(s.green(''.concat(t, ':')), ' ')
                    .concat(s.gray('['.concat(n, ']')), ' ')
                    .concat(S[e.toUpperCase()](e), ' '),
        }),
            a.apply(b, {
                format: (e, t, n) =>
                    ''
                        .concat(s.green(''.concat(t, ':')), ' ')
                        .concat(s.gray('['.concat(n, ']')), ' ')
                        .concat(S[e.toUpperCase()](e), ' '),
            }),
            a.apply(w, {
                format: (e, t, n) =>
                    ''
                        .concat(s.green(''.concat(t, ':')), ' ')
                        .concat(s.gray('['.concat(n, ']')), ' ')
                        .concat(S[e.toUpperCase()](e), ' '),
            }))
    var x = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'info',
            t = k.getLevel(),
            n = e.toLowerCase()
        return (
            'toggle' === n && (n = t === o.levels.DEBUG ? 'info' : 'debug'),
            -1 === ['trace', 'debug', 'info', 'warn', 'error', 'silent'].indexOf(n) &&
            (n = 'info'),
            k.setDefaultLevel(n),
            w.setDefaultLevel(n),
            b.setDefaultLevel(n),
            k.info('Debug level changed to '.concat(n)),
            n
        )
    }
    const P = require('@reduxjs/toolkit')
    var C = r.t(P, 2)
    const I = require('redux-logger')
    var A = 'deviceHardware',
        O = 'devicePreferences',
        T = 'deviceTasks',
        D = 'deviceStatus',
        R = 'deviceDownload',
        F = 'deviceTv',
        _ = 'mediaAssets',
        E = 'mediaSettings',
        N = 'mediaWidgets',
        j = 'mediaKiosk',
        M = 'playerMain',
        L = 'playerLoop',
        K = 'playerAdvt',
        U = 'playerTicker',
        z = 'playerFeeds',
        { createSlice: W } = C,
        V = {
            server: 'https://pisignage.com',
            version: '',
            platform_version: '',
            cpuSerialNumber: 'piPlayer',
            legacyCpuSerialNumber: '',
            ethMac: '',
            wifiMac: '',
            myIpAddress: '',
            systemIP: [],
            dns: { primary: '8.8.4.4', secondary: '8.8.8.8' },
            testNetwork: !1,
            nwinfo: { LINK: '', DHCP: ' ', PING: '', DNS: '', NETSTATUS: 'NA' },
            edidResolution: [1920, 1080],
            availablePlayers: { video: [], pdf: [], widgets: [], ticker: [] },
            deviceJustBooted: !0,
        },
        H = W({
            name: A,
            initialState: V,
            reducers: {
                setHardwareSliceValues: {
                    reducer(e, t) {
                        Object.assign(e, t.payload)
                    },
                    prepare(e) {
                        var t = {}
                        for (var n in V) n in e && (t[n] = e[n])
                        return { payload: t }
                    },
                },
            },
        }),
        { setHardwareSliceValues: B } = H.actions
    const G = H.reducer,
        q = require('fs'),
        J = require('apache-md5')
    var Z = process.cwd(),
        $ = d.homedir(),
        Y = 'dist'
    Y = ''
    var X = {
        HOME_DIR: $,
        ROOT_DIR: l.join(Z),
        TEMPLATES_DIR: l.join(Z, ''.concat(Y, '/templates')),
        LAYOUTS_DIR: l.join(Z, ''.concat(Y, '/layouts')),
        VIEWS_DIR: l.join(Z, ''.concat(Y, '/views')),
        PUBLIC_DIR: l.join(Z, 'public'),
        NEWUI: l.join(Z, 'player2-ui'),
        MEDIA_DIR: l.join($, 'media'),
        MEDIA_URL: l.join('/media'),
        LOGS_DIR: l.join($, 'logs'),
        KIOSK_DIR: l.join($, 'public/kiosk-ui'),
        PROGRAM_LOG_FILE: l.join($, 'forever_out.log'),
        CONFIG_DIR: l.join(Z, 'config'),
        SCRIPTS_DIR: l.join(Z, 'shell-scripts'),
        SYSTEM_SCRIPT: l.join(Z, 'shell-scripts', 'system.sh'),
        DEVICE_SETTINGS_FILE: l.join(Z, 'config', '_device-settings.json'),
        MEDIA_SETTINGS_FILE: l.join(Z, 'config', '_media-settings.json'),
        PACKAGE_JSON: l.join(Z, 'package.json'),
        PLAYER_LOGO_PATH: l.join(Z, '/public/img/logo.png'),
        PLAYER_LOGO_URL: l.join('/img/logo.png'),
        HOSTNAME_LINK_FILE: l.join($, 'hostname.link'),
        CONFIG_TXT: '/boot/config.txt',
        DHCPCD_FILE: '/etc/dhcpcd.conf',
        NETWORK_INTERFACES: '/etc/network/interfaces',
        WPASUPPLICANT_CONF: '/etc/wpa_supplicant/wpa_supplicant.conf',
        DEFAULT_CHROME_DIR: l.join($, 'apps-data/.config/chromium'),
        DEFAULT_CACHE_DIR: l.join($, 'apps-data/.cache/chromium'),
    }
    const Q = require('lodash/isEqual.js')
    var ee = (e) => {
        if (!e) return 0
        var t = e.split(':')
        switch (t.length) {
            case 0:
                return 0
            case 1:
                return parseInt(t[0])
            case 2:
                return 60 * parseInt(t[0]) + parseInt(t[1])
            default:
                return 60 * parseInt(t[t.length - 2]) + parseInt(t[t.length - 1])
        }
    },
        te = (e) => {
            if (!e)
                return (
                    k.error('Missing time string inside getHoursMinutesFromString'), null
                )
            var t = e.split(':')
            return 2 === t.length
                ? { h: parseInt(t[0]), m: parseInt(t[1]) }
                : 1 === t.length
                    ? { h: 0, m: parseInt(t[0]) }
                    : { h: parseInt(t[t.length - 2]), m: parseInt(t[t.length - 1]) }
        },
        ne = (e) => {
            var t = new Date(e)
            return (
                t.setTime(t.getTime() + 60 * t.getTimezoneOffset() * 1e3), t.getTime()
            )
        },
        ie = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = {}
            for (var i in t) i in e && !Q(e[i], t[i]) && (n[i] = e[i])
            return n
        },
        re = (e) => {
            var { assetsValidity: t } = Pc.getState().mediaAssets
            if (!Array.isArray(t) || 0 === t.length) return [...e]
            var n = new Date().setMinutes(0, 0, 0),
                i = []
            for (var r of t) {
                var o = r.starthour ? parseInt(r.starthour) : 0,
                    a = r.endhour ? parseInt(r.endhour) : 24
                    ; (isNaN(o) || o < 0 || o > 23) && (o = 0),
                        (isNaN(a) || a < 1 || a > 24) && (a = 24),
                        ((r.startdate && n < ne(r.startdate) + 36e5 * o) ||
                            (r.enddate && n >= ne(r.enddate) + 36e5 * a)) &&
                        (k.getLevel() <= k.levels.DEBUG &&
                            (k.debug(
                                ''
                                    .concat(ne(r.startdate) + 36e5 * o, ' > ')
                                    .concat(n, ' <= ')
                                    .concat(ne(r.enddate) + 36e5 * a),
                            ),
                                k.debug('Removing '.concat(r.name, ' for validity'))),
                            i.push(r.name))
            }
            return 0 === i.length
                ? [...e]
                : e.filter((e) => -1 === i.indexOf(e.filename))
        },
        oe = (e) => {
            if (!e) return null
            var { cpuSerialNumber: t, myIpAddress: n } = Pc.getState().deviceHardware,
                { name: i, secret: r } = Pc.getState().devicePreferences,
                o = { __cpuid__: t, __ipaddress__: n, __playername__: i, __group__: r },
                a = new RegExp(Object.keys(o).join('|'), 'gi')
            return e.replace(a, function (e) {
                return o[e]
            })
        }
    const ae = require('util'),
        se = require('child_process'),
        ce = require('crypto'),
        le = require('ejs')
    function de(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ue(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    de(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    de(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var pe = ae.promisify(se.exec),
        ye = (e) => e && null === e.exitCode && null === e.signalCode,
        fe = (function () {
            var e = ue(function* () {
                var {
                    installation: e,
                    secret: t,
                    name: n,
                    TZ: i,
                    orientation: r,
                    resolution: o,
                } = Pc.getState().devicePreferences,
                    {
                        cpuSerialNumber: a,
                        myIpAddress: s,
                        nwinfo: c,
                        version: d,
                        server: u,
                        ethMac: p,
                        wifiMac: y,
                        systemIP: f,
                    } = Pc.getState().deviceHardware,
                    { connectionStatus: v } = Pc.getState().deviceStatus,
                    g = {
                        myplayer: {
                            installation: e,
                            secret: t,
                            version: d,
                            name: n,
                            TZ: i,
                            nwinfo: c,
                            server: u,
                            myIpAddress: s,
                            ethMac: p,
                            wifiMac: y,
                            connectionStatus: v,
                            resolution: o,
                            orientation: r,
                        },
                        playerId: ''
                            .concat(a.slice(0, 4), '-')
                            .concat(a.slice(4, 8), '-')
                            .concat(a.slice(8, 12), '-')
                            .concat(a.slice(12, 16)),
                        systemIP: f,
                    },
                    m = l.join(X.TEMPLATES_DIR, 'welcome.ejs')
                !0 === (0, q.existsSync)(l.join(X.MEDIA_DIR, 'welcome.ejs'))
                    ? (m = l.join(X.MEDIA_DIR, 'welcome.ejs'))
                    : !0 === (0, q.existsSync)(l.join(X.MEDIA_DIR, 'welcome.html')) &&
                    (m = l.join(X.MEDIA_DIR, 'welcome.html'))
                try {
                    var h = yield le.renderFile(m, g, {}).then((e) => e)
                    yield q.promises.writeFile(
                        l.join(X.MEDIA_DIR, '_system_notice.html'),
                        h,
                        'utf8',
                    )
                } catch (e) {
                    k.error('Error while creating welcome notice, '.concat(e))
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ve = (function () {
            var e = ue(function* (e, t, n) {
                t && 'boolean' == typeof t && ((n = t), (t = null))
                try {
                    return yield pe(e, t)
                } catch (e) {
                    return (
                        !0 === n && k.warn('exec command error: '.concat(e)),
                        { stderr: 'exec error: '.concat(e) }
                    )
                }
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        ge = (e, t) => {
            try {
                ; (0, q.writeFileSync)(e, JSON.stringify(t, null, 4))
            } catch (t) {
                k.error('Error saving persist values in '.concat(e, ', ').concat(t))
            }
        },
        me = (function () {
            var e = ue(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Pc.getState(),
                    n = Object.assign(
                        {},
                        t.deviceHardware,
                        t.devicePreferences,
                        t.deviceTasks,
                        t.deviceStatus,
                        t.deviceDownload,
                        t.deviceTv,
                    )
                for (var i of Object.keys(e)) i in n && (n[i] = e[i])
                ge(X.DEVICE_SETTINGS_FILE, n)
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        he = (function () {
            var e = ue(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = Pc.getState(),
                    n = Object.assign(
                        {},
                        t.mediaAssets,
                        t.mediaSettings,
                        t.mediaWidgets,
                        t.mediaKiosk,
                    )
                for (var i of Object.keys(e)) i in n && (n[i] = e[i])
                ge(X.MEDIA_SETTINGS_FILE, n)
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ke = (function () {
            var e = ue(function* (e) {
                var { stdout: t, stderr: n } = yield ve(
                    "pacmd list-sinks | grep -e 'index:'",
                )
                if (n || !t)
                    return (
                        k.error('Unable to find all audio outputs using pacmd: ', n), !1
                    )
                var i = t
                    .trim()
                    .replace(/ /g, '')
                    .split('\n')
                    .find((e) => -1 !== e.indexOf('*')),
                    r = i.slice(i.indexOf(':') + 1),
                    { stderr: o } = yield ve(
                        'pactl set-sink-volume '.concat(r, ' ').concat(e, '%'),
                    )
                return o
                    ? (k.error('Unable to set sink volume: ', o), !1)
                    : (k.info('System Volume has been set to ', e), !0)
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        be = (function () {
            var e = ue(function* () {
                yield ve(
                    'pacmd unload-module module-udev-detect && pacmd load-module module-udev-detect',
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    const we = require('pidtree')
    var Se = (e, t) => {
        var n = 0,
            i = null,
            r = new Promise((r) => {
                ; (i = r), (n = setTimeout(i, e, t))
            })
        return {
            get promise() {
                return r
            },
            cancel() {
                n && (clearTimeout(n), (n = 0), i(-1))
            },
        }
    },
        xe = (e) => {
            e && e.cancel && e.cancel()
        }
    const Pe = require('ws'),
        Ce = require('node-fetch'),
        Ie = require('lodash/pick.js')
    function Ae(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Oe(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Ae(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Ae(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Te = (function () {
        var e = Oe(function* (e, t, n) {
            try {
                var { stderr: i } = yield ve(
                    'wget -T 120 -t 2 '
                        .concat(n, '/licenses/')
                        .concat(t, '/license_')
                        .concat(e, '.txt  -O ')
                        .concat(X.HOME_DIR, '/license_')
                        .concat(e, '.txt'),
                    !0,
                )
                return i && k.info('License file wget result: '.concat(i)), !0
            } catch (e) {
                return !1
            }
        })
        return function (t, n, i) {
            return e.apply(this, arguments)
        }
    })(),
        De = (function () {
            var e = Oe(function* (e, t, n) {
                if (!e) return yield !1
                var i = ce
                    .createHmac('sha1', 'pisignageLangford')
                    .update(e)
                    .digest('hex'),
                    r = (function () {
                        var r = Oe(function* () {
                            try {
                                var r = yield q.promises.readFile(
                                    ''.concat(X.HOME_DIR, '/license_').concat(e, '.txt'),
                                    'utf8',
                                ),
                                    o = ce.createDecipher('aes-192-cbc', i),
                                    a = o.update(r, 'hex', 'utf8')
                                a += o.final('utf8')
                                var s = JSON.parse(a)
                                if (
                                    (s.installation &&
                                        t &&
                                        t.toLowerCase() !== s.installation.toLowerCase() &&
                                        ((s.enabled = !1),
                                            k.warn(
                                                'installation not matching, '
                                                    .concat(t, ' & ')
                                                    .concat(s.installation),
                                            )),
                                        s.domain && n)
                                ) {
                                    var c = s.domain
                                        .replace(/^http(s?):\/\//i, '')
                                        .split(':')[0]
                                        .toLowerCase(),
                                        l = n
                                            .replace(/^http(s?):\/\//i, '')
                                            .split(':')[0]
                                            .toLowerCase()
                                    l !== c &&
                                        l !== ''.concat(t, '.').concat(c) &&
                                        ((s.enabled = !1),
                                            k.warn(
                                                'domain not matching, '
                                                    .concat(l, ' with license domain: ')
                                                    .concat(c),
                                            ))
                                }
                                if (
                                    (s.validity &&
                                        s.validity < Date.now() &&
                                        ((s.enabled = !1),
                                            k.warn(
                                                'license has expired  '.concat(
                                                    new Date(s.validity).toDateString(),
                                                ),
                                            )),
                                        s.enabled)
                                )
                                    return {
                                        enabled: s.enabled,
                                        strict: s.installation && s.domain,
                                    }
                            } catch (e) {
                                k.warn('License file not found or parse error: '.concat(e))
                            }
                            return { enabled: !1 }
                        })
                        return function () {
                            return r.apply(this, arguments)
                        }
                    })()
                if ('admin' === t && 'https://pisignage.com' === n)
                    return { enabled: !0, strict: !0 }
                var o = yield r()
                if (
                    (!0 !== o.enabled && t && (yield Te(e, t, n), (o = yield r())),
                        !0 !== o.enabled && n)
                ) {
                    var a = n
                        .replace(/^http(s?):\/\//i, '')
                        .split(':')[0]
                        .toLowerCase()
                    yield Te(e, a, n), (o = yield r())
                }
                return k.debug('License data: '.concat(JSON.stringify(o))), o
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        { createSlice: Re } = C,
        Fe = Re({
            name: D,
            initialState: {
                uptime: 0,
                piTemperature: '',
                connectionStatus: 'Disconnected',
                licensed: !0,
            },
            reducers: {
                setConnectionStatus: {
                    reducer(e, t) {
                        e.connectionStatus = t.payload
                    },
                    prepare(e) {
                        var t = !0 === e ? 'Connected' : 'Disconnected'
                        return me({ connectionStatus: t }), { payload: t }
                    },
                },
                updateLicenseStatus(e, t) {
                    e.licensed = t.payload
                },
                updatePlayerTempAnduptime(e, t) {
                    ; (e.piTemperature = t.payload.playerTemperature),
                        (e.uptime = t.payload.playerUptime)
                },
            },
        }),
        {
            setConnectionStatus: _e,
            updateLicenseStatus: Ee,
            updatePlayerTempAnduptime: Ne,
        } = Fe.actions
    const je = Fe.reducer
    function Me(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, i)
        }
        return n
    }
    function Le(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? Me(Object(n), !0).forEach(function (t) {
                    Ke(e, t, n[t])
                })
                : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Me(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
        }
        return e
    }
    function Ke(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                })
                : (e[t] = n),
            e
        )
    }
    var { createSelector: Ue } = C,
        ze = Ue(
            (e) => {
                var t = [
                    'version',
                    'platform_version',
                    'cpuSerialNumber',
                    'legacyCpuSerialNumber',
                    'myIpAddress',
                    'ethMac',
                    'wifiMac',
                ]
                return !0 === e.devicePreferences.sdConfigFileExists
                    ? Le(
                        Le({}, Ie(e.deviceHardware, t)),
                        {},
                        { name: e.devicePreferences.name },
                        Ie(e.devicePreferences, [
                            'sdConfigInstallation',
                            'sdConfigGroup',
                            'sdConfigTimezone',
                            'sdConfigName',
                            'sdConfigPin',
                        ]),
                    )
                    : Le(
                        Le({}, Ie(e.deviceHardware, t)),
                        {},
                        { name: e.devicePreferences.name },
                    )
            },
            (e) =>
                Le(
                    Le(
                        Le({}, e.deviceDownload),
                        {},
                        {
                            syncInProgress: e.deviceDownload.downloadInProgress,
                            tvStatus: e.deviceTv.tvStatus,
                            cecTvStatus: e.deviceTv.cecTvStatus,
                            isCecNotSupported: !e.deviceTv.cecSupported,
                        },
                        Ie(e.deviceStatus, ['licensed', 'uptime', 'piTemperature']),
                    ),
                    {},
                    {
                        currentPlaylist: e.playerMain.playingPlaylistName,
                        playlistOn: e.mediaAssets.playlistOn,
                        duration: e.mediaAssets.playlistOn
                            ? Math.floor((Date.now() - e.mediaAssets.playlistStarttime) / 6e4)
                            : 0,
                        request: !0,
                    },
                ),
            (e, t) => ({ settings: e, config: t }),
        ),
        We = (e) => e,
        Ve = Ue(We, (e) =>
            e.filter(function (e) {
                return e.settings && e.settings.event && e.settings.event.enable
            }),
        ),
        He = Ue(We, (e) =>
            e.filter(function (e) {
                return (
                    e.settings && e.settings.domination && e.settings.domination.enable
                )
            }),
        ),
        Be = Ue(We, (e) =>
            e.filter(function (e) {
                return e.settings && e.settings.ads && e.settings.ads.adPlaylist
            }),
        ),
        Ge = Ue(We, (e) =>
            e.filter(function (e) {
                return e.settings && e.settings.audio && e.settings.audio.enable
            }),
        ),
        qe = Ue(We, (e) =>
            e.filter(function (e) {
                return e.settings && e.settings.keyPress && e.settings.keyPress.enable
            }),
        ),
        Je = Ue(We, (e) =>
            e.filter(function (e) {
                return (
                    !e.settings ||
                    !(
                        (e.settings.event && e.settings.event.enable) ||
                        (e.settings.domination && e.settings.domination.enable) ||
                        (e.settings.ads && e.settings.ads.adPlaylist) ||
                        (e.settings.audio && e.settings.audio.enable) ||
                        (e.settings.keyPress && e.settings.keyPress.enable)
                    )
                )
            }),
        ),
        Ze =
            (Ue(
                (e) => e.mediaAssets.scheduledPlaylists[0],
                (e) =>
                    e && e.settings
                        ? e.settings.event && e.settings.event.enable
                            ? 'event'
                            : e.settings.domination && e.settings.domination.enable
                                ? 'domination'
                                : e.settings.audio && e.settings.audio.enable
                                    ? 'audio'
                                    : e.settings.ads && e.settings.ads.adPlaylist
                                        ? 'advt'
                                        : 'regular'
                        : 'special',
            ),
                []),
        $e = () => {
            var { deployedPlaylists: e } = Pc.getState().mediaAssets,
                t = e.filter(function (e) {
                    return (
                        e.settings && e.settings.domination && e.settings.domination.enable
                    )
                }).length
                ; (Ze.length = t), Ze.fill(-1)
        }
    const Ye = (e) => {
        var t = new Date(),
            n = 60 * t.getHours() + t.getMinutes(),
            i = t.getDay() + 1,
            r = t.getDate(),
            o = new Date().setHours(0, 0, 0, 0),
            a = new Date(t.getFullYear(), 0, 1),
            s = Math.floor((t - a) / 864e5),
            c = (Math.ceil((a.getDay() + 1 + s) / 7) % 5).toString(),
            l = (Math.ceil((a.getDay() + 1 + s) / 7) % 4).toString(),
            d = (Math.ceil((a.getDay() + 1 + s) / 7) % 3).toString(),
            u = (e) => {
                if (e.settings.durationEnable) {
                    if (e.settings.startdate && o < ne(e.settings.startdate))
                        return k.debug('Start date is beyond today'), !1
                    var t =
                        e.settings.starttime &&
                            e.settings.endtime &&
                            e.settings.starttime > e.settings.endtime
                            ? 864e5
                            : 0
                    if (e.settings.enddate && ne(e.settings.enddate) + t < o)
                        return k.debug('End date is behind today'), !1
                }
                if (e.settings.timeEnable) {
                    var a = e.settings.starttime ? ee(e.settings.starttime) : null,
                        s = e.settings.endtime ? ee(e.settings.endtime) : null,
                        u = null !== a && null !== s && a > s
                    if (!1 === u && ((null !== a && n < a) || (null !== s && n > s)))
                        return (
                            k.debug(
                                'Current time '
                                    .concat(n, ' is not in range of ')
                                    .concat(a, ' and ')
                                    .concat(s),
                            ),
                            !1
                        )
                    if (!0 === u && n < a && n > s)
                        return (
                            k.debug(
                                'Current time '
                                    .concat(n, ' is not in range of ')
                                    .concat(s, ' and ')
                                    .concat(a),
                            ),
                            !1
                        )
                }
                return e.settings.weekdays && -1 === e.settings.weekdays.indexOf(i)
                    ? (k.debug(
                        "Today '"
                            .concat(i, "' is not in the Week Days ")
                            .concat(e.settings.weekdays.toString()),
                    ),
                        !1)
                    : e.settings.monthdays && -1 === e.settings.monthdays.indexOf(r)
                        ? (k.debug(
                            "Today '"
                                .concat(r, "' is not in the Week Days ")
                                .concat(e.settings.monthdays.toString()),
                        ),
                            !1)
                        : (e.settings.weeknumbers &&
                            e.settings.weeknumbers.enable &&
                            !e.settings.weeknumbers.modulo &&
                            (e.settings.weeknumbers.modulo = 'four'),
                            e.settings.weeknumbers &&
                                e.settings.weeknumbers.enable &&
                                'five' === e.settings.weeknumbers.modulo &&
                                !0 !== e.settings.weeknumbers[c]
                                ? (k.info(
                                    'Week Number '
                                        .concat(c, ' is not enabled for ')
                                        .concat(e.name),
                                ),
                                    !1)
                                : e.settings.weeknumbers &&
                                    e.settings.weeknumbers.enable &&
                                    'four' === e.settings.weeknumbers.modulo &&
                                    !0 !== e.settings.weeknumbers[l]
                                    ? (k.debug(
                                        'Week Number '
                                            .concat(l, ' is not enabled for ')
                                            .concat(e.name),
                                    ),
                                        !1)
                                    : e.settings.weeknumbers &&
                                        e.settings.weeknumbers.enable &&
                                        'three' === e.settings.weeknumbers.modulo &&
                                        !0 !== e.settings.weeknumbers[d]
                                        ? (k.debug(
                                            'Week Number '
                                                .concat(d, ' is not enabled for ')
                                                .concat(e.name),
                                        ),
                                            !1)
                                        : e.settings.onlineOnly && 'Disconnected' === y
                                            ? (k.debug(
                                                'Connection Status = Disconnected for online playlist',
                                            ),
                                                !1)
                                            : (k.debug(
                                                ''.concat(e.name, ': Playlist is eligible for schedule'),
                                            ),
                                                !0))
            },
            p = Pc.getState(),
            { connectionStatus: y } = p.deviceStatus,
            {
                scheduledPlaylists: f,
                eventInProgress: v,
                deployedPlaylists: g,
                scheduledKeyPressPlaylistIndex: m,
            } = p.mediaAssets,
            { playAllEligiblePlaylists: h } = p.mediaSettings,
            { playingPlaylistType: b = 'regular' } = p.playerMain,
            w = He(g),
            S = Ve(g),
            x = Je(g),
            P = Be(g),
            C = Ge(g),
            I = qe(g),
            A = f.length > 0 ? [f[0]] : [],
            O = [],
            T = [],
            D = !1
        if (
            (0 === b.indexOf('play-once') && e && (D = !0),
                !1 === D && !0 === v && S.length > 0)
        )
            for (var R of S)
                if (R.settings && !R.skipForSchedule && u(R))
                    if (D) A.push(R.name)
                    else if (((A[0] = R.name), (D = !0), !h)) break
        if (!1 === D && -1 !== m) {
            var F = I[m]
            F.settings && !F.skipForSchedule && u(F) && ((A[0] = F.name), (D = !0))
        }
        if (!1 === D && w.length > 0)
            for (var [_, E] of w.entries()) {
                var N = parseInt(E.settings.domination.timeInterval)
                if (
                    ((isNaN(N) || N < 3) && (N = 5), E.settings && !E.skipForSchedule)
                )
                    if (u(E)) {
                        if (
                            (-1 === Ze[_] && (Ze[_] = (n + N) % 1440),
                                !D && (n >= Ze[_] || n + 720 < Ze[_]))
                        ) {
                            ; (A[0] = E.name), (D = !0), (Ze[_] = (n + N) % 1440)
                            break
                        }
                    } else Ze[_] = -1
            }
        if (!1 === D && x.length)
            for (var j of ('string' == typeof x[0].name
                ? (A[0] = x[0].name)
                : k.error(
                    'Playlist name is not string, '.concat(x[0].name.toString()),
                ),
                x))
                if (j.settings && !j.skipForSchedule && j !== x[0] && u(j))
                    if (D) A.push(j.name)
                    else if (((A[0] = j.name), (D = !0), !0 !== h)) break
        for (var M of P)
            M.settings && !M.skipForSchedule && u(M) && O.push(M.name)
        for (var L of C)
            L.settings && !L.skipForSchedule && u(L) && T.push(L.name)
        return {
            scheduledPlaylists: A,
            scheduledAds: O,
            scheduledAudioPlaylists: T,
        }
    },
        Xe = require('events')
    var Qe = { BROWSER_WS: [9999, 9998], DISCOVERY_HTTP: 8001, WEBUI_HTTP: 8e3 },
        et = [
            '1',
            '2a',
            '2b',
            '2c',
            '2d',
            '3a',
            '3b',
            '3c',
            '3d',
            '4a',
            '4b',
            '4c',
            '4d',
            '2ap',
            '2bp',
            '2ap270',
            '2bp270',
            'custom',
            'customp',
            'customp270',
        ],
        tt = ['main', 'side', 'bottom', 'zone4'],
        nt = {
            1: [],
            '2a': ['side'],
            '2b': ['side'],
            '2c': ['side'],
            '2d': ['side'],
            '3a': ['side', 'bottom'],
            '3b': ['side', 'bottom'],
            '3c': ['side', 'bottom'],
            '3d': ['side', 'bottom'],
            '4a': ['side', 'bottom'],
            '4b': ['side', 'bottom'],
            '4c': ['side', 'bottom'],
            '4d': ['side', 'bottom'],
            '2ap': [],
            '2bp': ['bottom'],
            '2ap270': [],
            '2bp270': ['bottom'],
            custom: ['side', 'bottom', 'zone4', 'zone5', 'zone6'],
            customp: ['side', 'bottom', 'zone4', 'zone5', 'zone6'],
            customp270: ['side', 'bottom', 'zone4', 'zone5', 'zone6'],
        },
        it = [0, 0, 720, 480],
        rt = [0, 0, 720, 576],
        ot = {
            filenameRegex: /[&/\\#,+()$~%'":*?<>{}]/g,
            groupNameRegex: /[&/\\#,+()$~%'":*?<>{}^]/g,
            customLayoutRegex: /^custom_layout.*html$/i,
            videoRegex: /(mp4|mov|m4v|avi|webm|wmv|flv|mkv|mpg|mpeg|3gp)$/i,
            audioRegex: /(mp3|m4a|mp4a|aac)$/i,
            imageRegex: /(jpg|jpeg|png|gif|bmp)$/i,
            noticeRegex: /\.(html|htm)$/,
            zipfileRegex: /(.zip|.gz|.bz2)$/i,
            repofileRegex: /\.repo$/i,
            liveStreamRegex: /\.tv$/i,
            omxStreamRegex: /\.stream$/i,
            pdffileRegex: /\.pdf$/i,
            txtFileRegex: /\.txt$/i,
            linkURL: /\.link$/i,
            CORSLink: /\.weblink$/i,
            localFolderRegex: /\.local$/i,
            mediaRss: /\.mrss$/i,
            radioFileRegex: /\.radio$/i,
            brandRegex: /^(brand_intro|brand_intro_portrait)\./i,
            playlist: /^__.*\.json$/i,
            systemAssets: ['_system_notice.html'],
        },
        { createSelector: at } = C,
        st = at(
            (e) => e.mediaAssets.loungeMusicOn,
            (e) => e.devicePreferences.resolution,
            (e, t) => ('NTSC' === t || 'PAL' === t ? 'local' : e ? 'hdmi' : 'both'),
        ),
        ct = at(
            (e) => e.mediaSettings.audioVolume,
            (e) => {
                var t = e < 1 ? 1 : e > 100 ? 100 : e
                return {
                    omxDbValue: parseInt((2e3 * Math.log(1)) / Math.LN10),
                    audioVolume: t,
                }
            },
        ),
        lt = at(
            (e) => e.devicePreferences.orientation,
            (e) => e.playerMain.currentLayout,
            (e, t) =>
                'landscape' === e && t.indexOf('p') >= 0
                    ? -1 === t.indexOf('270')
                        ? 90
                        : 270
                    : 0,
        ),
        dt = at(
            (e) => e.playerMain.currentLayout,
            (e) => e.playerMain.currentTemplateName,
            (e) => e.devicePreferences.monitorArrangement,
            (e) => e.devicePreferences.displayInterfaces,
            (e, t, n, i) => {
                if (0 === n.mode.indexOf('tile') && i.length > 1)
                    return 'http://127.0.0.1:'.concat(Qe.WEBUI_HTTP, '/layouts/1.html')
                if (-1 === e.indexOf('custom'))
                    return 'http://127.0.0.1:'
                        .concat(Qe.WEBUI_HTTP, '/layouts/')
                        .concat(e, '.html')
                var r = l.join(X.MEDIA_DIR, t)
                return (0, q.existsSync)(r)
                    ? 'http://127.0.0.1:'.concat(Qe.WEBUI_HTTP, '/media/').concat(t)
                    : 'http://127.0.0.1:'.concat(
                        Qe.WEBUI_HTTP,
                        '/layouts/custom_layout.html',
                    )
            },
        ),
        ut = at(
            (e) => e.mediaSettings.resizeAssets,
            (e) => e.mediaSettings.imageLetterboxed,
            (e, t) => (e ? (t ? 1 : 2) : 0),
        ),
        pt = (e) => {
            var [t, n, i, r] = e
            return ''.concat(i, 'x').concat(r, '+').concat(t, '+').concat(n)
        },
        yt = (e) => {
            var [t, n, i, r] = e
            return ''
                .concat(t, ' ')
                .concat(n, ' ')
                .concat(t + i, ' ')
                .concat(n + r)
        },
        ft = (e) => {
            var { disabled: t, behavior: n } = e.playerTicker,
                { licensed: i } = e.deviceStatus
            return (!0 !== t && -1 === n.indexOf('openvg')) || !0 !== i ? 1 : 0
        },
        vt = at(
            (e) => ({
                videoWindow: e.playerMain.videoWindow,
                mainzoneOnly: e.playerMain.mainzoneOnly,
                currentLayout: e.playerMain.currentLayout,
            }),
            (e) => ({
                resolution: e.devicePreferences.resolution,
                orientation: e.devicePreferences.orientation,
            }),
            ft,
            (e, t, n) => {
                var i = { videoWindow: null, fullScreen: null }
                if (
                    (e.videoWindow
                        ? (i.videoWindow = [
                            e.videoWindow.x,
                            e.videoWindow.y,
                            e.videoWindow.l,
                            e.videoWindow.w,
                        ])
                        : 'NTSC' === t.resolution
                            ? (i.videoWindow = it)
                            : 'PAL' === t.resolution
                                ? (i.videoWindow = rt)
                                : (i.videoWindow = mt(
                                    e.currentLayout,
                                    n,
                                    'landscape' !== t.orientation,
                                ).main),
                        (e.videoWindow && !e.mainzoneOnly) ||
                        'NTSC' === t.resolution ||
                        'PAL' === t.resolution)
                )
                    return (i.fullScreen = i.videoWindow), i
                var r = '1'
                return (
                    e.currentLayout.indexOf('p270') >= 0
                        ? (r = '2ap270')
                        : e.currentLayout.indexOf('p') >= 0 && (r = '2ap'),
                    (i.fullScreen = mt(r, n, 'landscape' !== t.orientation).main),
                    i
                )
            },
        ),
        gt = at(
            (e) => ({
                zoneVideoWindow: e.playerMain.zoneVideoWindow,
                currentLayout: e.playerMain.currentLayout,
            }),
            (e) => ({ orientation: e.devicePreferences.orientation }),
            ft,
            (e, t, n) => {
                var i = {},
                    r = mt(e.currentLayout, n, 'landscape' !== t.orientation)
                for (var o of nt[e.currentLayout])
                    i[o] = e.zoneVideoWindow[o]
                        ? [
                            e.zoneVideoWindow[o].x,
                            e.zoneVideoWindow[o].y,
                            e.zoneVideoWindow[o].l,
                            e.zoneVideoWindow[o].w,
                        ]
                        : r[o]
                return i
            },
        ),
        mt = (e, t, n) => {
            var {
                monitorArrangement: i,
                displayInterfaces: r,
            } = Pc.getState().devicePreferences,
                [o, a] = r[0].resolution,
                { tickerHeight: s } = Pc.getState().playerTicker,
                c = parseInt(o / 4),
                l = parseInt(o / 2),
                d = parseInt((3 * o) / 4),
                u = parseInt(a / 4),
                p = parseInt((3 * a) / 4),
                y = parseInt((42 * a) / 100),
                f = parseInt((42 * o) / 100),
                v = parseInt((58 * a) / 100),
                g = parseInt((58 * o) / 100),
                m = t ? parseInt(s) : 0,
                h = {}
            if (0 === i.mode.indexOf('tile') && r.length > 1) {
                h.main = [
                    r[0].offset[0],
                    r[0].offset[1],
                    r[0].resolution[0],
                    r[0].resolution[1],
                ]
                var k = [
                    r[1].offset[0],
                    r[1].offset[1],
                    r[1].resolution[0],
                    r[1].resolution[1],
                ]
                return (
                    -1 === e.indexOf('p')
                        ? ((h.main[3] = h.main[3] - m),
                            (h.side = k),
                            (h.side[3] = h.side[3] - m))
                        : ((h.bottom = k),
                            !0 === n
                                ? ((h.bottom[3] = h.bottom[3] - m), (h.main[3] = h.main[3] - m))
                                : ((h.bottom[2] = h.bottom[2] - m),
                                    (h.main[2] = h.main[2] - m),
                                    -1 === e.indexOf('270') &&
                                    ((h.bottom[0] = h.bottom[0] + m),
                                        (h.main[0] = h.main[0] + m)))),
                    h
                )
            }
            switch (e) {
                case '2a':
                    ; (h.main = [c, 0, d, a - m]), (h.side = [0, 0, c, a - m])
                    break
                case '2b':
                    ; (h.main = [0, 0, d, a - m]), (h.side = [d, 0, c, a - m])
                    break
                case '2c':
                    ; (h.main = [0, 0, l, a - m]), (h.side = [l, 0, l, a - m])
                    break
                case '2d':
                    ; (h.main = [l, 0, l, a - m]), (h.side = [0, 0, l, a - m])
                    break
                case '3a':
                    ; (h.main = [c, 0, d, p]),
                        (h.side = [0, 0, c, p]),
                        (h.bottom = [0, p, o, u - m])
                    break
                case '3b':
                    ; (h.main = [0, 0, d, p]),
                        (h.side = [d, 0, c, p]),
                        (h.bottom = [0, p, o, u - m])
                    break
                case '3c':
                    ; (h.main = [c, u, d, p - m]),
                        (h.side = [0, u, c, p - m]),
                        (h.bottom = [0, 0, o, u])
                    break
                case '3d':
                    ; (h.main = [0, u, d, p - m]),
                        (h.side = [d, u, c, p - m]),
                        (h.bottom = [0, 0, o, u])
                    break
                case '4a':
                    ; (h.main = [c, 0, d, p]),
                        (h.side = [0, 0, c, a - m]),
                        (h.bottom = [c, p, d, u - m])
                    break
                case '4b':
                    ; (h.main = [0, 0, d, p]),
                        (h.side = [d, 0, c, a - m]),
                        (h.bottom = [0, p, d, u - m])
                    break
                case '4c':
                    ; (h.main = [c, u, d, p - m]),
                        (h.side = [0, 0, c, a - m]),
                        (h.bottom = [c, 0, d, u])
                    break
                case '4d':
                    ; (h.main = [0, u, d, p - m]),
                        (h.side = [d, 0, c, a - m]),
                        (h.bottom = [0, 0, d, u])
                    break
                case 'custom':
                case '1':
                default:
                    h.main = [0, 0, o, a - m]
                    break
                case '2ap':
                case 'customp':
                    h.main = n ? [0, 0, o, a - m] : [m, 0, o - m, a]
                    break
                case '2bp':
                    n
                        ? ((h.main = [0, 0, o, y]), (h.bottom = [0, y, o, v - m]))
                        : ((h.main = [g, 0, f, a]), (h.bottom = [m, 0, g - m, a]))
                    break
                case '2ap270':
                case 'customp270':
                    h.main = n ? [0, 0, o, a - m] : [0, 0, o - m, a]
                    break
                case '2bp270':
                    n
                        ? ((h.main = [0, 0, o, y]), (h.bottom = [0, y, o, v - m]))
                        : ((h.main = [0, 0, f, a]), (h.bottom = [f, 0, g - m, a]))
            }
            return h
        },
        ht = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 ? arguments[1] : void 0,
                {
                    monitorArrangement: n,
                    displayInterfaces: i,
                } = Pc.getState().devicePreferences,
                { currentLayout: r } = Pc.getState().playerMain,
                o = r.indexOf('p') >= 0
            return Number.isInteger(e)
                ? [e]
                : 0 === n.mode.indexOf('tile') && i.length > 1
                    ? 'all' === e
                        ? [0, 1]
                        : ('side' === t && !1 === o) || ('bottom' === t && !0 === o)
                            ? [1]
                            : 'main' === t
                                ? [0]
                                : []
                    : [0]
        },
        kt = (e) =>
            !0 ===
            new RegExp(
                '^(http(s)?:\\/\\/)?((w){3}.)?youtu(be|.be)?(\\.com)?\\/.+',
            ).test(e),
        { BROWSER_WS: bt } = Qe,
        wt = 1,
        St = {},
        xt = {},
        Pt = [null, null],
        Ct = [null, null],
        It = function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0
            b.debug('****** new socket connection from chrome *****'),
                (e.onmessage = (e) => {
                    var i = null
                    try {
                        i = JSON.parse(e.data)
                    } catch (n) {
                        return void b.error(
                            'Unable to parse message from chrome socket for screen: '
                                .concat(t, ', ')
                                .concat(e.data),
                        )
                    }
                    if (i && i.event) {
                        var { event: r, params: o, token: a } = i
                        switch (
                        (a &&
                            St[a] &&
                            (b.debug(
                                '****** resolve send message for token for screen: '
                                    .concat(t, ': ')
                                    .concat(a),
                            ),
                                St[a]({ event: r, params: o, token: a }),
                                delete St[a]),
                            r)
                        ) {
                            case 'LOAD_FINISH':
                                b.info(
                                    'Chrome loaded page for screen: '
                                        .concat(t, ' ')
                                        .concat(o.path.slice(0, 200), ';')
                                        .concat(o.query),
                                ),
                                    n.emit('loaded', o)
                                break
                            case 'COMMAND_EXECUTED':
                                b.debug('Chrome executed script '.concat(e.data.slice(0, 200)))
                                break
                            case 'BROWSER_PAGE_ERROR':
                                b.error('Browser Page Error : '.concat(e.data.slice(0, 200)))
                                break
                            case 'MEDIA_ENDED':
                            case 'MEDIA_ERROR':
                                b.debug(
                                    ''
                                        .concat(r, ' message from browser: ')
                                        .concat(o.path, ', zone: ')
                                        .concat(o.zone, ' and screen: ')
                                        .concat(t),
                                ),
                                    a &&
                                    xt[a] &&
                                    (xt[a]({ event: r, params: o, token: a }), delete xt[a])
                                break
                            default:
                                b.error('Unknown message from browser : '.concat(r))
                        }
                        if (b.getLevel() <= b.levels.DEBUG) {
                            var s = Object.keys(St)
                            s.length > 0 && b.debug('pending tokens: '.concat(s.toString()))
                        }
                    } else
                        b.error(
                            'No data from chrome socket for screen: '
                                .concat(t, ', ')
                                .concat(e.data),
                        )
                })
        },
        At = function () {
            var e,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = 0
            Pt[t] &&
                (b.error('Closing previous Browser Websocket Server to create new one'),
                    Pt[t].close()),
                (Pt[t] = new Pe.Server({ port: bt[t] })),
                b.info(
                    'Starting websocket server with internal browser, port '.concat(
                        bt[t],
                    ),
                ),
                Pt[t].on('connection', (r, o) => {
                    if (
                        o.socket.remoteAddress &&
                        -1 === o.socket.remoteAddress.indexOf('127.0.0.1')
                    )
                        b.debug(
                            'Rejecting websocket request from '.concat(
                                o.socket.remoteAddress,
                            ),
                        )
                    else {
                        Ct[t] &&
                            (Ct[t].removeAllListeners(),
                                Ct[t].terminate(),
                                clearInterval(e),
                                (i = 0)),
                            (Ct[t] = r),
                            It(r, t, n)
                        var a = !0
                        r.on('pong', () => {
                            a = !0
                        }),
                            (e = setInterval(() => {
                                if (!0 !== a) {
                                    if (
                                        (b.error(
                                            'browser pong not received for last ping for screen:  '.concat(
                                                t,
                                            ),
                                        ),
                                            ++i > 3)
                                    )
                                        return (
                                            b.error(
                                                'pong fail count exceeded for screen:  '.concat(
                                                    t,
                                                    ', giving up',
                                                ),
                                            ),
                                            void clearInterval(e)
                                        )
                                } else (a = !1), (i = 0)
                                r.ping()
                            }, 1e4))
                    }
                }),
                (Pt[t].onerror = (e) => {
                    b.error('Browser Websocket error '.concat(e))
                }),
                (Pt[t].onclose = (e) => {
                    b.error('Browser Websocket closed '.concat(e))
                })
        },
        Ot = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
            return (
                (e.token = wt),
                (wt = 0 === (wt = (wt + 1) % 1024) ? 1 : wt),
                {
                    commandPromise: new Promise((t, i) => {
                        if (!Ct[n] || 1 !== Ct[n].readyState) {
                            b.error(
                                'Can not send message to chrome : '.concat(
                                    Ct[n] && Ct[n].readyState,
                                ),
                            )
                            var r = 'Can not send message to chrome : '.concat(
                                JSON.stringify(e).slice(0, 50),
                            )
                            return b.error(r), void i(r)
                        }
                        ; (St[e.token] = t),
                            b.debug('****** send message for token: '.concat(e.token)),
                            Ct[n].send(JSON.stringify(e), (t) => {
                                if (t) {
                                    var n = 'Could not send message to chrome : '
                                        .concat(t, ';')
                                        .concat(JSON.stringify(e))
                                    b.error(n), delete St[e.token], i(n)
                                }
                            })
                    }),
                    mediaCompletionPromise: !0 === t ? Tt(e.token) : null,
                }
            )
        },
        Tt = (e) =>
            new Promise((t) => {
                xt[e] = t
            })
    const Dt = require('feedparser')
    function Rt(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Ft = (function () {
        var e,
            t =
                ((e = function* (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10
                    return e
                        ? (-1 === e.indexOf('://') && (e = 'https://' + e),
                            new Promise((n, i) => {
                                var r = Ce(e),
                                    o = new Dt({ feedUrl: e }),
                                    a = []
                                r.then(
                                    (t) => {
                                        200 !== t.status
                                            ? (k.error(
                                                "****  Bad status code, can't fetch feeds from given URL: ".concat(
                                                    e,
                                                ),
                                            ),
                                                i(
                                                    "Bad status code, can't fetch feeds from given URL: ".concat(
                                                        e,
                                                    ),
                                                ))
                                            : t.body.pipe(o)
                                    },
                                    (t) => {
                                        k.error(
                                            '****  request error , please check RSS feed URL: '.concat(
                                                e,
                                            ),
                                        ),
                                            i(t)
                                    },
                                ),
                                    o.on('error', (t) => {
                                        k.error(
                                            '****  feedparser error, please check RSS feed URL: '.concat(
                                                e,
                                            ),
                                        ),
                                            k.error(t),
                                            i(t)
                                    }),
                                    o.on('readable', function () {
                                        for (
                                            var e = o.read();
                                            e &&
                                            (e.title && (e.title = e.title.replace(/'/g, '`')),
                                                e.description &&
                                                (e.description = e.description.replace(/'/g, '`')),
                                                a.length < t);

                                        )
                                            a.push(e), (e = o.read())
                                    }),
                                    o.on('end', function () {
                                        n(a)
                                    })
                            }))
                        : 'link is empty'
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                Rt(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                Rt(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function (e) {
            return t.apply(this, arguments)
        }
    })()
    function _t(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Et(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    _t(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    _t(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Nt = [null, null],
        jt = () => {
            for (
                var {
                    monitorArrangement: e,
                    displayInterfaces: t,
                } = Pc.getState().devicePreferences,
                n = 0 === e.mode.indexOf('tile') && t.length > 1 ? 2 : 1,
                i = 0;
                i < n;
                i++
            )
                ye(Nt[i]) && (Nt[i].kill(), (Nt[i] = null))
        },
        Mt = (function () {
            var e = Et(function* (e) {
                jt()
                var t = []
                t.push(e.textSpeed),
                    t.push('left' === e.behavior.replace(/openvg_/, '') ? 0 : 1),
                    t.push(e.tickerFontSize),
                    t.push(e.textContent),
                    t.push(e.paddingRight),
                    t.push(e.tickerHeight)
                for (
                    var {
                        monitorArrangement: n,
                        displayInterfaces: i,
                    } = Pc.getState().devicePreferences,
                    r = 0 === n.mode.indexOf('tile') && i.length > 1 ? 2 : 1,
                    o = 0;
                    o < r;
                    o++
                ) {
                    var { offset: a, resolution: s } = i[o],
                        c = t.concat([s[0], a[1] + s[1], a[0], 'ticker-'.concat(o)])
                        ; (Nt[o] = (0, se.spawn)('ticker', c, { stdio: 'pipe' })),
                            b.debug('SDL ticker process spawned with PID : ', Nt[o].pid, c),
                            Nt[o].on('error', (e) => {
                                b.error('SDL ticker spawn error: '.concat(e))
                            }),
                            Nt[o].stderr.on('data', (e) => {
                                b.info('sdlTickerProcess stderr: '.concat(e.toString('utf8')))
                            }),
                            Nt[o].stdin.on('error', (e) => {
                                b.error('sdlTickerProcess stdin error: '.concat(e))
                            })
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Lt = (function () {
            var e = Et(function* () {
                b.debug('Initialize SDL ticker')
                var e = []
                yield ve('sudo pkill ticker')
                var { stderr: t, stdout: n } = yield ve('which ticker')
                return (
                    t
                        ? b.error('ticker program is not available for SDL Ticker mode')
                        : (b.info('ticker program is present at '.concat(n)),
                            e.push('sdl')),
                    e
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function Kt(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var { createSlice: Ut } = C,
        zt = (e) => {
            var t = e
                .trim()
                .replace(/^http(s?):\/\//i, '')
                .split(':')[0]
            return [
                'displayer.com.my',
                'satavision.vpalvelin.com',
                'signage.dsmediaplay.com',
                'pisign.rplink.net',
                'livesignagelite.nec.com.sg',
                'lktsignage.com',
                'signage-network.app',
                'tvhub.io',
                'imperiumberri.com',
                'iberselex.com',
                'billboard.signs.oneit.gov.uk',
                'displayer.sg',
                'signage.gvtel.com',
                'infotafeln.mediaz-electronics.de',
                'digisign.digitalsigns.co.nz',
                'signs.nona.media',
                'signage.pointscentral.com',
                'uzaserv.ddns.net',
                'signage.metdata.net.nz',
                'adsonatms.com',
                'blupepper.asia',
                'signage.emh.cloud',
                'digisign.hsia.co.nz',
                'halo.nomadixmedia.co.uk',
                'displayit.ie',
                'signage.trucell.com.au',
                'signage.hawk.sydney',
                'gibonsignage.se',
                'ds-mgmt-01.passau.ssw',
                'signage.e2r.nl',
                'trgsignage.eu',
                'nemak.tv',
            ].indexOf(t) >= 0
                ? '  *** Please add the license, contact info@'.concat(t, ' ***')
                : '  *** This player is powered by pisignage.com ***'
        },
        Wt = Ut({
            name: U,
            initialState: {
                messages: [],
                msgIndex: 0,
                currentTicker: null,
                behavior: 'slide',
                textSpeed: 3,
                style: '',
                disabled: !1,
                isRssFeed: !1,
                feedDelay: 1e4,
                rssLink: null,
                rssEncodeAsBinary: !1,
                useDescription: !1,
                bannerText: !1,
                bannerTextInProgress: !1,
                tickerFontSize: 28,
                tickerWidth: 0,
                tickerHeight: '60px',
                tickerX: 0,
                tickerY: 0,
            },
            reducers: {
                clearTickerValues(e) {
                    ; (e.disabled = !0),
                        (e.isRssFeed = !1),
                        (e.messages = []),
                        (e.currentTicker = null)
                },
                setTickerValues(e, t) {
                    ; (e.disabled = !1), Object.assign(e, t.payload)
                },
                startSlideMessageFeed(e, t) {
                    ; (e.messages = t.payload), (e.disabled = !1), (e.msgIndex = 0)
                },
                setNextSlideMessage(e) {
                    ; (e.currentTicker = e.messages[e.msgIndex]),
                        (e.msgIndex = (e.msgIndex + 1) % e.messages.length)
                },
                setBannerTextInProgress(e, t) {
                    e.bannerTextInProgress = t.payload || !1
                },
            },
        }),
        { setBannerTextInProgress: Vt } = Wt.actions
    const Ht = Wt.reducer
    var Bt,
        Gt,
        qt = () => (e, t) => {
            var { disabled: n, feedDelay: i } = t().playerTicker
            clearTimeout(Bt),
                e(Wt.actions.setNextSlideMessage()),
                !0 !== n
                    ? (e($t()),
                        (Bt = setTimeout(() => {
                            e(qt())
                        }, i)))
                    : e(Yt())
        },
        Jt = (e) => (t) => {
            t(Wt.actions.startSlideMessageFeed(e)), t(qt())
        },
        Zt = () => (e) => {
            clearTimeout(Bt),
                clearTimeout(Gt),
                e(Wt.actions.clearTickerValues()),
                e(Yt())
        },
        $t = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null
            return (t, n) => {
                var {
                    currentTicker: i,
                    behavior: r,
                    textSpeed: o,
                    style: a,
                    tickerFontSize: s,
                    tickerHeight: c,
                } = n().playerTicker,
                    { showClock: l } = n().mediaWidgets,
                    { availablePlayers: d } = n().deviceHardware
                if (0 === r.indexOf('openvg') && 0 !== d.ticker.length) {
                    var u = 0
                    l.enable &&
                        'bottom' === l.position &&
                        (u = -1 === l.format.indexOf('d') ? 160 : 349)
                    var p = {
                        textSpeed: o,
                        behavior: r,
                        tickerFontSize: s,
                        textContent: e || i,
                        paddingRight: u,
                        tickerHeight: c,
                    }
                    xn(!1), Mt(p)
                } else
                    jt(),
                        xn(!0, {
                            behavior: r,
                            textSpeed: o,
                            message: e || i,
                            style: a,
                            tickerHeight: c,
                        })
            }
        },
        Yt = () => (e, t) => {
            var { server: n } = t().deviceHardware,
                { licensed: i } = t().deviceStatus
            !0 === i ? (xn(!1), jt()) : e($t(zt(n)))
        },
        Xt = () => (e) => {
            e($t())
        },
        Qt = () => (e, t) => {
            var {
                downloadInProgress: n,
                wgetSpeed: i,
                wgetBytes: r,
            } = t().deviceDownload,
                { tvStatus: o } = t().deviceTv,
                { connectionStatus: a } = t().deviceStatus
            !0 === o &&
                'Connected' === a &&
                e(
                    !0 === n
                        ? $t(
                            'Download in Progress: '
                                .concat(r, ' downloaded, current speed: ')
                                .concat(i),
                        )
                        : Xt(),
                )
        },
        en = () =>
            (function () {
                var e,
                    t =
                        ((e = function* (e, t) {
                            var { server: n } = t().deviceHardware,
                                {
                                    isRssFeed: i,
                                    rssLink: r,
                                    behavior: o,
                                    useDescription: a,
                                } = t().playerTicker,
                                { licensed: s } = t().deviceStatus,
                                c = []
                            if ((clearTimeout(Gt), r)) {
                                try {
                                    var l = yield Ft(r, 10)
                                    Array.isArray(l) &&
                                        (c = l.map((e) => (a ? e.description : e.title)))
                                } catch (e) {
                                    b.error('RSS feed currently not available: '.concat(e))
                                }
                                if (
                                    (0 === c.length && (c = ['No feed available']), 'slide' === o)
                                )
                                    !0 !== s && c.push(zt(n)), e(Jt(c))
                                else {
                                    var d = c.join('   ------   ') + (!0 !== s ? zt(n) : '')
                                    e(
                                        Wt.actions.setTickerValues({
                                            messages: [d],
                                            currentTicker: d,
                                        }),
                                    ),
                                        e($t())
                                }
                                !0 === i &&
                                    (Gt = setTimeout(() => {
                                        e(en())
                                    }, 6e5))
                            } else $t('RSS Link details not available')
                        }),
                            function () {
                                var t = this,
                                    n = arguments
                                return new Promise(function (i, r) {
                                    var o = e.apply(t, n)
                                    function a(e) {
                                        Kt(o, i, r, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        Kt(o, i, r, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })(),
        tn = (e, t) => {
            var n = Object.assign({}, e)
            if (((n.disabled = !e || !0 !== e.enable), e && e.rss)) {
                var i = e.rss
                Object.assign(n, {
                    isRssFeed: i.enable,
                    rssLink: i.link,
                    rssEncodeAsBinary: i.encodeAsBinary,
                    useDescription: i.useDescription,
                })
            }
            if (n.messages) {
                var { cpuSerialNumber: r } = t().deviceHardware,
                    { connectionStatus: o } = t().deviceStatus
                    ; (n.messages = n.messages.replace(
                        /__cpuid__/g,
                        r.slice(0, 4) +
                        '-' +
                        r.slice(4, 8) +
                        '-' +
                        r.slice(8, 12) +
                        '-' +
                        r.slice(12, 16),
                    )),
                        (n.messages = n.messages.replace(/__connectionstatus__/g, o || 'NA')),
                        (n.messages = oe(n.messages))
            }
            return n
        }
    function nn(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function rn(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    nn(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    nn(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { DEFAULT_CHROME_DIR: on, DEFAULT_CACHE_DIR: an } = X,
        sn = (function () {
            var e = rn(function* () {
                yield ve('killall -s 9 chromium-browser'),
                    yield ve('killall -s 9 chromium'),
                    yield ve(
                        'killall -s 9 /usr/lib/chromium-browser/chromium-browser-v7',
                    ),
                    yield ve('pkill -o chromium'),
                    yield ve('pkill -o chrom')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        cn = (function () {
            var e = rn(function* (e) {
                var t = l.join(on, e, '/Default/Preferences')
                yield ve(
                    'sed -i \'s/"exited_clean[^,]*/"exited_cleanly" : true/\' '.concat(t),
                ),
                    yield ve(
                        'sed -i \'s/"exit_type[^,]*/"exit_type":"None"/\' '.concat(t),
                        !1,
                    ),
                    yield ve(
                        'sed -i \'s/"can_make_payment_enabled"\\s*:\\s*true/"can_make_payment_enabled":false/\' '.concat(
                            t,
                        ),
                        !0,
                    ),
                    yield ve(
                        'sed -i \'s/"credit_card_enabled"\\s*:\\s*true/"credit_card_enabled":false/\' '.concat(
                            t,
                        ),
                        !0,
                    ),
                    yield ve(
                        'sed -i \'s/"credentials_enable_autosignin"\\s*:\\s*true/"credentials_enable_autosignin":false/\' '.concat(
                            t,
                        ),
                        !0,
                    ),
                    yield ve(
                        'sed -i \'s/"credentials_enable_service"\\s*:\\s*true/"credentials_enable_service":false/\' '.concat(
                            t,
                        ),
                        !0,
                    ),
                    yield ve(
                        'sed -i \'s/"profile_enabled"\\s*:\\s*true/"profile_enabled":false/\' '.concat(
                            t,
                        ),
                        !0,
                    ),
                    yield ve('sudo rm -rf '.concat(l.join(on, e, 'SingletonLock'))),
                    yield ve('sudo rm -rf '.concat(l.join(an, e, 'Default/Cache')))
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        ln = (function () {
            var e = rn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                try {
                    0 === e
                        ? (yield cn('Default'),
                            yield cn('kiosk'),
                            yield cn('weblink-0'),
                            yield cn('weblink-1'),
                            yield cn('weblink-2'),
                            yield cn('weblink-3'),
                            yield cn('weblink-4'))
                        : yield cn('Default-1')
                } catch (e) {
                    b.info('clearChromeSession: catch message: '.concat(e))
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        dn = [null, null],
        un = [null, null],
        pn = [0, 0],
        yn = (function () {
            var e = rn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                pn[e]++,
                    (dn[e] = null),
                    yield ln(e),
                    un[e].removeAllListeners('loaded'),
                    pn[e] < 10
                        ? (b.error('Restarting the browser for screen: '.concat(e)),
                            fn(e, !0))
                        : b.error(
                            'Browser crash count exceeded for screen: '.concat(
                                e,
                                ', stopping respwan',
                            ),
                        )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        fn = (function () {
            var e = rn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                if (dn[e])
                    0 === e ? yield sn() : ye(dn[e]) && (dn[e].kill(), (dn[e] = null))
                else {
                    var {
                        displayInterfaces: n,
                        monitorArrangement: i,
                    } = Pc.getState().devicePreferences,
                        r = 0 === i.mode.indexOf('tile') && n.length > 1 ? 2 : 1,
                        o = !0 !== i.reverse ? e : (e + 1) % r,
                        [a, s] = n[o].offset,
                        [c, d] = n[o].resolution,
                        p = dt(Pc.getState()),
                        y = 0 === e ? 'Default' : 'Default-1',
                        f = [
                            '--password-store=basic',
                            '--allow-file-access-from-files',
                            '--disable-session-crashed-bubble',
                            '--disable-infobars',
                            '--disable-notifications',
                            '--disable-device-discovery-notifications',
                            '--disable-quic',
                            '--disable-features=TranslateUI',
                            '--disable-popup-blocking',
                            '--user-data-dir='.concat(l.join(on, y)),
                            '--disable-features=RendererCodeIntegrity',
                            '--enable-fast-unload',
                            '--enable-tcp-fast-open',
                            '--noerrdialogs',
                            '--no-first-run',
                            '--proxy-auto-detect',
                            '--start-fullscreen',
                            '--start-maximized ',
                            '--disk-cache-size=30000000',
                            u('PLAYERLOG') ? ' ' : '--kiosk',
                            '--kiosk-printing',
                            '--disable-pinch',
                            '--overscroll-history-navigation=0',
                            '--autoplay-policy=no-user-gesture-required',
                            '--check-for-update-interval=1',
                            '--simulate-critical-update',
                            '--disable-dev-shm-usage',
                            "--cast-app-background-color='000000'",
                            "--default-background-color='00000000'",
                            '--window-position='.concat(a, ',').concat(s),
                            '--window-size='.concat(c, ',').concat(d),
                            ''.concat(p, '?screen=').concat(e),
                        ],
                        v = (0, Xe.once)(un[e], 'loaded')
                        ; (dn[e] = (0, se.spawn)('chromium-browser', f, { stdio: 'pipe' })),
                            b.info(
                                'Browser loading '
                                    .concat(p, '; Running as PID ')
                                    .concat(dn[e].pid),
                            ),
                            dn[e].on('error', (e) => {
                                b.error('Browser spawn error: '.concat(e))
                            }),
                            dn[e].stdout.on('data', () => { }),
                            dn[e].stderr.on('data', (e) => {
                                b.debug('Browser stderr: '.concat(e.toString()))
                            })
                    var g = Se(3e3)
                    dn[e].on(
                        'exit',
                        (function () {
                            var t = rn(function* (t, n) {
                                b.info(
                                    'Browser stopped with code '
                                        .concat(t, ' and signal ')
                                        .concat(n),
                                ),
                                    yield g.promise,
                                    yn(e)
                            })
                            return function (e, n) {
                                return t.apply(this, arguments)
                            }
                        })(),
                    )
                    try {
                        var m = yield Promise.race([v, Se(3e4, 'timeout').promise])
                        'timeout' === m &&
                            b.error(
                                '*** FATAL: Chromium did not load layout page '
                                    .concat(p, ' and screen: ')
                                    .concat(e, '***'),
                            )
                    } catch (e) {
                        b.error(
                            'Screen ${screenIndex} : Waiting for the browserLoaded was canceled!',
                        )
                    }
                    !0 === t && (yield vn(e), Pc.dispatch(Xt()))
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        vn = (function () {
            var e = rn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = Pc.getState(),
                    { showClock: n, logoObj: i, emergencyMessage: r } = t.mediaWidgets,
                    {
                        animationType: o,
                        signageBackgroundColor: a,
                        urlReloadDisable: s,
                        videoKeepAspect: c,
                        xWidgets: l,
                    } = t.mediaSettings,
                    d = {
                        animationType: o,
                        signageBackgroundColor: a,
                        urlReloadDisable: s,
                        videoKeepAspect: c,
                        portrait: lt(t),
                        fitImage: ut(t),
                    },
                    u = (0, Xe.once)(un[e], 'loaded')
                yield gn('uri', ''.concat(dt(t), '?screen=').concat(e), e)
                try {
                    var p = yield Promise.race([u, Se(3e4, 'timeout').promise])
                    'timeout' === p &&
                        b.error(
                            '*** FATAL: Chromium did not load layout page '
                                .concat(dt(t), ' and screen is ')
                                .concat(e, '***'),
                        )
                } catch (t) {
                    b.error(
                        'Waiting for the browserLoaded was canceled for screen '.concat(
                            e,
                            '!',
                        ),
                    )
                }
                yield gn('config', d, e),
                    !0 !== l &&
                    (yield gn('configLogo', i, e),
                        yield gn('configClock', n, e),
                        yield gn('configEMsg', r, e))
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        gn = (function () {
            var e = rn(function* (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 'all',
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = ht(n, t.zone)
                b.debug(
                    'Getting screens for '
                        .concat(e, ',')
                        .concat(n, ' as ')
                        .concat(r.toString()),
                )
                var o = [],
                    a = []
                for (var s of r) {
                    if (!dn[s])
                        return (
                            b.error(
                                'No browser instance for window '.concat(s, ', ').concat(e),
                            ),
                            yn(s),
                            {}
                        )
                    var { commandPromise: c, mediaCompletionPromise: l } = Ot(
                        { cmd: e, params: t },
                        i,
                        s,
                    )
                    o.push(c), a.push(l)
                }
                var d = {
                    commandPromise: Promise.all(o),
                    mediaCompletionPromise: Promise.all(a),
                },
                    u = Se(6e4, 'timeout'),
                    p = yield Promise.race([d.commandPromise, u.promise])
                return 'timeout' === p
                    ? (b.error(
                        '**** Chrome: no completion event: '.concat(
                            JSON.stringify(e).slice(0, 50),
                        ),
                    ),
                        {})
                    : (xe(u), d)
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        mn = (function () {
            var e = rn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1
                try {
                    yield sn(), yield ec()
                    for (var t = 0; t < e; t++)
                        (un[t] = new Xe.EventEmitter()),
                            At(t, un[t]),
                            yield ln(t),
                            yield fn(t)
                    return !0
                } catch (e) {
                    return b.error('Browser initPlayer exception '.concat(e)), !1
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function hn(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function kn(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    hn(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    hn(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var bn = (function () {
        var e = kn(function* (e, t) {
            var n = !0 === e ? t : { enable: !1 }
            yield gn('configClock', n, 'all')
        })
        return function (t, n) {
            return e.apply(this, arguments)
        }
    })(),
        wn = (function () {
            var e = kn(function* (e, t) {
                var n = !0 === e ? t : { logo: null }
                yield gn('configLogo', n, 'all')
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Sn = (function () {
            var e = kn(function* (e, t) {
                var n = !0 === e ? t : { enable: !1 }
                yield gn('configEMsg', n, 'all')
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        xn = (function () {
            var e = kn(function* (e, t) {
                var n = !0 === e ? t : { message: null }
                yield gn('configTicker', n, 'all')
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Pn = (function () {
            var e = kn(function* (e) {
                yield gn('stopVideo', { zone: e })
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Cn = (function () {
            var e = kn(function* () {
                yield gn('stopAudio', {}, 'all')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        In = (function () {
            var e = kn(function* (e) {
                yield gn('clearZone', { zone: e })
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        An = (function () {
            var e = kn(function* () {
                yield gn('clearZoneAll', {}, 'all')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        On = (function () {
            var e = kn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                yield gn('config', e, 'all')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    const Tn = require('text2png')
    function Dn(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Rn(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Dn(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Dn(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Fn,
        _n,
        En = '#404040',
        Nn = [null, null],
        jn = (function () {
            var e = Rn(function* (e, t) {
                for (
                    var {
                        monitorArrangement: n,
                        displayInterfaces: i,
                    } = Pc.getState().devicePreferences,
                    r = 0 === n.mode.indexOf('tile') && i.length > 1 ? 2 : 1,
                    o = 0;
                    o < r;
                    o++
                )
                    ye(Nn[o]) && (Nn[o].kill(), (Nn[o] = null))
                if (!0 === e && t.logo)
                    for (
                        var { logo: a, logox: s, logoy: c } = t,
                        d = function (e) {
                            ; (Nn[e] = (0, se.spawn)(
                                'pqiv',
                                [
                                    '-T',
                                    'logo-'.concat(e),
                                    '-c',
                                    '-P',
                                    ''
                                        .concat(i[e].offset[0] + s, ',')
                                        .concat(i[e].offset[1] + c),
                                    '-i',
                                    l.join(X.HOME_DIR, a),
                                ],
                                { stdio: 'pipe' },
                            )),
                                Nn[e].on('error', function (t) {
                                    b.error(
                                        'logoDisplayProcess screen: '
                                            .concat(e, ' spawn error: ')
                                            .concat(t),
                                    )
                                })
                        },
                        u = 0;
                        u < r;
                        u++
                    )
                        d(u)
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Mn = [null, null],
        Ln = (function () {
            var e = Rn(function* (e, t) {
                for (
                    var {
                        monitorArrangement: n,
                        displayInterfaces: i,
                    } = Pc.getState().devicePreferences,
                    r = 0 === n.mode.indexOf('tile') && i.length > 1 ? 2 : 1,
                    o = 0;
                    o < r;
                    o++
                )
                    ye(Mn[o]) && (Mn[o].kill(), (Mn[o] = null))
                if (!0 === e && !0 === t.enable && t.msg) {
                    var a = (() => {
                        var { displayInterfaces: e } = Pc.getState().devicePreferences,
                            { resolution: t } = e[0],
                            n = t[0] > t[1] ? t[1] : t[0]
                        return n <= 720 ? '50px' : n <= 1280 ? '70px' : '90px'
                    })()
                    b.warn('Font size for config emessage: ', a)
                    for (
                        var { msg: s, hPos: c, vPos: l } = t,
                        d = Tn(s, {
                            color: 'white',
                            font: ' '.concat(a, ' sans-serif'),
                            backgroundColor: 'rgba(0, 0, 0,0.8)',
                            lineSpacing: 10,
                            padding: 20,
                            output: 'canvas',
                            textAlign: 'center',
                        }),
                        u = function (e) {
                            var { offset: t, resolution: n } = i[e],
                                r =
                                    t[0] + ('left' === c ? 20 : parseInt((n[0] - d.width) / 2)),
                                o =
                                    t[1] +
                                    ('top' === l
                                        ? 20
                                        : 'bottom' === l
                                            ? parseInt(n[1] - (60 + d.height))
                                            : parseInt((n[1] - d.height) / 2)),
                                a = d.createPNGStream()
                                ; (Mn[e] = (0, se.spawn)(
                                    'feh',
                                    [
                                        '--title',
                                        'eMsg-'.concat(e),
                                        '--borderless',
                                        '--image-bg',
                                        En,
                                        '-g',
                                        '+'.concat(r, '+').concat(o),
                                        '-',
                                    ],
                                    { stdio: 'pipe' },
                                )),
                                    Mn[e].on('error', function (e) {
                                        b.error('eMessageProcess spawn error: '.concat(e))
                                    }),
                                    Mn[e].stdin.on('error', function (e) {
                                        b.error('eMessageProcess stdin error: '.concat(e))
                                    }),
                                    a.on('error', function (e) {
                                        b.error('pngstream error: '.concat(e))
                                    }),
                                    a.pipe(Mn[e].stdin),
                                    a.on('end', () => Mn[e].stdin.end())
                        },
                        p = 0;
                        p < r;
                        p++
                    )
                        u(p)
                }
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Kn = [null, null],
        Un = (e, t) => {
            clearTimeout(Fn)
            for (
                var {
                    monitorArrangement: n,
                    displayInterfaces: i,
                } = Pc.getState().devicePreferences,
                r = 0 === n.mode.indexOf('tile') && i.length > 1 ? 2 : 1,
                o = 0;
                o < r;
                o++
            )
                ye(Kn[o]) && (Kn[o].kill(), (Kn[o] = null))
            if (!0 === e && !0 === t.enable) {
                var { position: a, format: s } = t,
                    c = s && 0 === s.indexOf('12'),
                    d = s && s.indexOf('d') >= 0,
                    u = (e) => (e < 10 ? '0'.concat(e) : ''.concat(e)),
                    p = (function () {
                        var e = Rn(function* () {
                            var e = new Date(),
                                t = u(e.getDate()),
                                n = [
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ][e.getMonth()],
                                o = e.getHours(),
                                s = e.getMinutes()
                            if (_n !== s) {
                                ; (_n = s),
                                    !0 === c && 0 === (o %= 12) && (o = 12),
                                    (s = u(s)),
                                    (o = u(o))
                                var y =
                                    (!0 === d ? ''.concat(t, ' ').concat(n, ' ') : '') +
                                    ''.concat(o, ':').concat(s),
                                    f = (() => {
                                        var {
                                            displayInterfaces: e,
                                        } = Pc.getState().devicePreferences,
                                            { resolution: t } = e[0],
                                            n = t[0] > t[1] ? t[1] : t[0]
                                        return n <= 720 ? '30px' : n <= 1280 ? '50px' : '80px'
                                    })(),
                                    v = Tn(y, {
                                        color: 'white',
                                        font: ''.concat(f, ' 900 sans-serif'),
                                        backgroundColor: 'rgba(0, 0, 0,0.65)',
                                        padding: 10,
                                        output: 'canvas',
                                    }),
                                    g = v.toBuffer()
                                yield q.promises.writeFile(l.join(X.HOME_DIR, 'eClk.png'), g)
                                for (var m = 0; m < r; m++) {
                                    var { offset: h, resolution: k } = i[m],
                                        w = parseInt(h[0] + k[0] - v.width),
                                        S = parseInt(h[1] + (a && 'top' === a ? 0 : k[1] - 60))
                                    null === Kn[m]
                                        ? ((Kn[m] = (0, se.spawn)(
                                            'feh',
                                            [
                                                '--title',
                                                'clock-'.concat(m),
                                                '--borderless',
                                                '--image-bg',
                                                En,
                                                '-g',
                                                '+'.concat(w, '+').concat(S),
                                                l.join(X.HOME_DIR, 'eClk.png'),
                                            ],
                                            { stdio: 'pipe' },
                                        )),
                                            Kn[m].on('error', function (e) {
                                                b.error('eClkProcess spawn error: '.concat(e))
                                            }),
                                            Kn[m].stdin.on('error', function (e) {
                                                b.error('eClkProcess stdin error: '.concat(e))
                                            }))
                                        : yield ve(
                                            'xdotool search --name  clock-'.concat(
                                                m,
                                                ' windowactivate key r',
                                            ),
                                        )
                                }
                            }
                            Fn = setTimeout(p, 5e3)
                        })
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()
                    ; (_n = -1), p()
            }
        },
        zn = (function () {
            var e = Rn(function* () {
                var { tvStatus: e } = Pc.getState().deviceTv
                if (!1 !== e)
                    for (
                        var t = ['logo', 'eMsg', 'ticker', 'clock'],
                        {
                            monitorArrangement: n,
                            displayInterfaces: i,
                        } = Pc.getState().devicePreferences,
                        r = 0 === n.mode.indexOf('tile') && i.length > 1 ? 2 : 1,
                        o = 0;
                        o < r;
                        o++
                    )
                        for (var a of t)
                            yield ve(
                                'xdotool search --name  '
                                    .concat(a, '-')
                                    .concat(o, ' windowactivate'),
                            )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Wn = (function () {
            var e = Rn(function* () {
                var e = []
                yield ve('sudo pkill feh'), yield ve('sudo pkill pqiv')
                var { stderr: t, stdout: n } = yield ve('which feh')
                t
                    ? b.error('feh image program is not available')
                    : (b.info('feh image program is present at '.concat(n)),
                        e.push('feh'))
                var { stderr: i, stdout: r } = yield ve('which pqiv')
                return (
                    i
                        ? b.error('pqiv image program is not available')
                        : (b.info('pqiv image program is present at '.concat(r)),
                            e.push('pqiv')),
                    e
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function Vn(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var { createSlice: Hn } = C,
        Bn = Hn({
            name: N,
            initialState: { showClock: {}, logoObj: {}, emergencyMessage: {} },
            reducers: {
                updateLogo(e, t) {
                    Object.assign(e.logoObj, t.payload)
                },
                updateClock(e, t) {
                    Object.assign(e.showClock, t.payload)
                },
                updateEMsg(e, t) {
                    Object.assign(e.emergencyMessage, t.payload)
                },
            },
        })
    const Gn = Bn.reducer
    var qn = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
        return (n, i) => {
            var { tvStatus: r } = i().deviceTv,
                { displayInterfaces: o } = i().devicePreferences,
                { xWidgets: a } = i().mediaSettings,
                s = !0 === a ? jn : wn
            if (!0 !== e || !1 === r) s(!1)
            else if (null === t) {
                var { logoObj: c } = i().mediaWidgets
                s(!0, c)
            } else {
                var {
                    logo: d,
                    logox: u = o[0].resolution[0] - 80,
                    logoy: p = 10,
                } = t,
                    y = d
                        ? l.join(X.MEDIA_URL, l.basename(d))
                        : (0, q.existsSync)(X.PLAYER_LOGO_PATH)
                            ? X.PLAYER_LOGO_URL
                            : null
                n(Bn.actions.updateLogo({ logo: y, logox: u, logoy: p })),
                    s(!0, { logo: y, logox: u, logoy: p })
            }
        }
    },
        Jn = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0
            return (n, i) => {
                var { tvStatus: r } = i().deviceTv,
                    { showClock: o } = i().mediaWidgets,
                    { xWidgets: a } = i().mediaSettings
                    ; (!0 === a ? Un : bn)(e && !1 !== r, t || o),
                        t && n(Bn.actions.updateClock(t))
            }
        },
        Zn = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0
            return (n, i) => {
                var { tvStatus: r } = i().deviceTv,
                    { emergencyMessage: o } = i().mediaWidgets,
                    { xWidgets: a } = i().mediaSettings
                    ; (!0 === a ? Ln : Sn)(e && !1 !== r, t || o),
                        t && n(Bn.actions.updateEMsg(t))
            }
        },
        $n = (e) =>
            (function () {
                var t,
                    n =
                        ((t = function* (t, n) {
                            var i = ie(e, n().mediaWidgets)
                            void 0 !== i.showClock && t(Jn(!0, i.showClock)),
                                void 0 !== i.emergencyMessage && t(Zn(!0, i.emergencyMessage)),
                                void 0 !== i.logoObj && t(qn(!0, i.logoObj))
                        }),
                            function () {
                                var e = this,
                                    n = arguments
                                return new Promise(function (i, r) {
                                    var o = t.apply(e, n)
                                    function a(e) {
                                        Vn(o, i, r, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        Vn(o, i, r, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            })
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            })()
    const Yn = require('puppeteer-core')
    function Xn(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Qn(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Xn(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Xn(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    for (
        var { DEFAULT_CHROME_DIR: ei } = X,
        ti = 0,
        ni = !0,
        ii = {
            up: 'ArrowUp',
            down: 'ArrowDown',
            right: 'ArrowRight',
            left: 'ArrowLeft',
            pageup: 'PageUp',
            pagedown: 'PageDown',
            command: 'Meta',
            right_shift: 'ShiftRight',
            printscreen: 'PrintScreen',
            audio_mute: 'AudioVolumeMute',
            audio_vol_down: 'AudioVolumeDown',
            audio_vol_up: 'AudioVolumeUp',
            audio_play: 'Play',
            audio_stop: 'MediaStop',
            audio_pause: 'MediaPlayPause',
        },
        ri = {
            0: { keyCode: 48, key: '0', code: 'Digit0' },
            1: { keyCode: 49, key: '1', code: 'Digit1' },
            2: { keyCode: 50, key: '2', code: 'Digit2' },
            3: { keyCode: 51, key: '3', code: 'Digit3' },
            4: { keyCode: 52, key: '4', code: 'Digit4' },
            5: { keyCode: 53, key: '5', code: 'Digit5' },
            6: { keyCode: 54, key: '6', code: 'Digit6' },
            7: { keyCode: 55, key: '7', code: 'Digit7' },
            8: { keyCode: 56, key: '8', code: 'Digit8' },
            9: { keyCode: 57, key: '9', code: 'Digit9' },
            Power: { key: 'Power', code: 'Power' },
            Eject: { key: 'Eject', code: 'Eject' },
            Abort: { keyCode: 3, code: 'Abort', key: 'Cancel' },
            Help: { keyCode: 6, code: 'Help', key: 'Help' },
            Backspace: { keyCode: 8, code: 'Backspace', key: 'Backspace' },
            Tab: { keyCode: 9, code: 'Tab', key: 'Tab' },
            Numpad5: {
                keyCode: 12,
                shiftKeyCode: 101,
                key: 'Clear',
                code: 'Numpad5',
                shiftKey: '5',
                location: 3,
            },
            NumpadEnter: {
                keyCode: 13,
                code: 'NumpadEnter',
                key: 'Enter',
                text: '\r',
                location: 3,
            },
            Enter: { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
            '\r': { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
            '\n': { keyCode: 13, code: 'Enter', key: 'Enter', text: '\r' },
            ShiftLeft: {
                keyCode: 16,
                code: 'ShiftLeft',
                key: 'Shift',
                location: 1,
            },
            ShiftRight: {
                keyCode: 16,
                code: 'ShiftRight',
                key: 'Shift',
                location: 2,
            },
            ControlLeft: {
                keyCode: 17,
                code: 'ControlLeft',
                key: 'Control',
                location: 1,
            },
            ControlRight: {
                keyCode: 17,
                code: 'ControlRight',
                key: 'Control',
                location: 2,
            },
            AltLeft: { keyCode: 18, code: 'AltLeft', key: 'Alt', location: 1 },
            AltRight: { keyCode: 18, code: 'AltRight', key: 'Alt', location: 2 },
            Pause: { keyCode: 19, code: 'Pause', key: 'Pause' },
            CapsLock: { keyCode: 20, code: 'CapsLock', key: 'CapsLock' },
            Escape: { keyCode: 27, code: 'Escape', key: 'Escape' },
            Convert: { keyCode: 28, code: 'Convert', key: 'Convert' },
            NonConvert: { keyCode: 29, code: 'NonConvert', key: 'NonConvert' },
            Space: { keyCode: 32, code: 'Space', key: ' ' },
            Numpad9: {
                keyCode: 33,
                shiftKeyCode: 105,
                key: 'PageUp',
                code: 'Numpad9',
                shiftKey: '9',
                location: 3,
            },
            PageUp: { keyCode: 33, code: 'PageUp', key: 'PageUp' },
            Numpad3: {
                keyCode: 34,
                shiftKeyCode: 99,
                key: 'PageDown',
                code: 'Numpad3',
                shiftKey: '3',
                location: 3,
            },
            PageDown: { keyCode: 34, code: 'PageDown', key: 'PageDown' },
            End: { keyCode: 35, code: 'End', key: 'End' },
            Numpad1: {
                keyCode: 35,
                shiftKeyCode: 97,
                key: 'End',
                code: 'Numpad1',
                shiftKey: '1',
                location: 3,
            },
            Home: { keyCode: 36, code: 'Home', key: 'Home' },
            Numpad7: {
                keyCode: 36,
                shiftKeyCode: 103,
                key: 'Home',
                code: 'Numpad7',
                shiftKey: '7',
                location: 3,
            },
            ArrowLeft: { keyCode: 37, code: 'ArrowLeft', key: 'ArrowLeft' },
            Numpad4: {
                keyCode: 37,
                shiftKeyCode: 100,
                key: 'ArrowLeft',
                code: 'Numpad4',
                shiftKey: '4',
                location: 3,
            },
            Numpad8: {
                keyCode: 38,
                shiftKeyCode: 104,
                key: 'ArrowUp',
                code: 'Numpad8',
                shiftKey: '8',
                location: 3,
            },
            ArrowUp: { keyCode: 38, code: 'ArrowUp', key: 'ArrowUp' },
            ArrowRight: { keyCode: 39, code: 'ArrowRight', key: 'ArrowRight' },
            Numpad6: {
                keyCode: 39,
                shiftKeyCode: 102,
                key: 'ArrowRight',
                code: 'Numpad6',
                shiftKey: '6',
                location: 3,
            },
            Numpad2: {
                keyCode: 40,
                shiftKeyCode: 98,
                key: 'ArrowDown',
                code: 'Numpad2',
                shiftKey: '2',
                location: 3,
            },
            ArrowDown: { keyCode: 40, code: 'ArrowDown', key: 'ArrowDown' },
            Select: { keyCode: 41, code: 'Select', key: 'Select' },
            Open: { keyCode: 43, code: 'Open', key: 'Execute' },
            PrintScreen: { keyCode: 44, code: 'PrintScreen', key: 'PrintScreen' },
            Insert: { keyCode: 45, code: 'Insert', key: 'Insert' },
            Numpad0: {
                keyCode: 45,
                shiftKeyCode: 96,
                key: 'Insert',
                code: 'Numpad0',
                shiftKey: '0',
                location: 3,
            },
            Delete: { keyCode: 46, code: 'Delete', key: 'Delete' },
            NumpadDecimal: {
                keyCode: 46,
                shiftKeyCode: 110,
                code: 'NumpadDecimal',
                key: '\0',
                shiftKey: '.',
                location: 3,
            },
            Digit0: { keyCode: 48, code: 'Digit0', shiftKey: ')', key: '0' },
            Digit1: { keyCode: 49, code: 'Digit1', shiftKey: '!', key: '1' },
            Digit2: { keyCode: 50, code: 'Digit2', shiftKey: '@', key: '2' },
            Digit3: { keyCode: 51, code: 'Digit3', shiftKey: '#', key: '3' },
            Digit4: { keyCode: 52, code: 'Digit4', shiftKey: '$', key: '4' },
            Digit5: { keyCode: 53, code: 'Digit5', shiftKey: '%', key: '5' },
            Digit6: { keyCode: 54, code: 'Digit6', shiftKey: '^', key: '6' },
            Digit7: { keyCode: 55, code: 'Digit7', shiftKey: '&', key: '7' },
            Digit8: { keyCode: 56, code: 'Digit8', shiftKey: '*', key: '8' },
            Digit9: { keyCode: 57, code: 'Digit9', shiftKey: '(', key: '9' },
            KeyA: { keyCode: 65, code: 'KeyA', shiftKey: 'A', key: 'a' },
            KeyB: { keyCode: 66, code: 'KeyB', shiftKey: 'B', key: 'b' },
            KeyC: { keyCode: 67, code: 'KeyC', shiftKey: 'C', key: 'c' },
            KeyD: { keyCode: 68, code: 'KeyD', shiftKey: 'D', key: 'd' },
            KeyE: { keyCode: 69, code: 'KeyE', shiftKey: 'E', key: 'e' },
            KeyF: { keyCode: 70, code: 'KeyF', shiftKey: 'F', key: 'f' },
            KeyG: { keyCode: 71, code: 'KeyG', shiftKey: 'G', key: 'g' },
            KeyH: { keyCode: 72, code: 'KeyH', shiftKey: 'H', key: 'h' },
            KeyI: { keyCode: 73, code: 'KeyI', shiftKey: 'I', key: 'i' },
            KeyJ: { keyCode: 74, code: 'KeyJ', shiftKey: 'J', key: 'j' },
            KeyK: { keyCode: 75, code: 'KeyK', shiftKey: 'K', key: 'k' },
            KeyL: { keyCode: 76, code: 'KeyL', shiftKey: 'L', key: 'l' },
            KeyM: { keyCode: 77, code: 'KeyM', shiftKey: 'M', key: 'm' },
            KeyN: { keyCode: 78, code: 'KeyN', shiftKey: 'N', key: 'n' },
            KeyO: { keyCode: 79, code: 'KeyO', shiftKey: 'O', key: 'o' },
            KeyP: { keyCode: 80, code: 'KeyP', shiftKey: 'P', key: 'p' },
            KeyQ: { keyCode: 81, code: 'KeyQ', shiftKey: 'Q', key: 'q' },
            KeyR: { keyCode: 82, code: 'KeyR', shiftKey: 'R', key: 'r' },
            KeyS: { keyCode: 83, code: 'KeyS', shiftKey: 'S', key: 's' },
            KeyT: { keyCode: 84, code: 'KeyT', shiftKey: 'T', key: 't' },
            KeyU: { keyCode: 85, code: 'KeyU', shiftKey: 'U', key: 'u' },
            KeyV: { keyCode: 86, code: 'KeyV', shiftKey: 'V', key: 'v' },
            KeyW: { keyCode: 87, code: 'KeyW', shiftKey: 'W', key: 'w' },
            KeyX: { keyCode: 88, code: 'KeyX', shiftKey: 'X', key: 'x' },
            KeyY: { keyCode: 89, code: 'KeyY', shiftKey: 'Y', key: 'y' },
            KeyZ: { keyCode: 90, code: 'KeyZ', shiftKey: 'Z', key: 'z' },
            MetaLeft: { keyCode: 91, code: 'MetaLeft', key: 'Meta', location: 1 },
            MetaRight: { keyCode: 92, code: 'MetaRight', key: 'Meta', location: 2 },
            ContextMenu: { keyCode: 93, code: 'ContextMenu', key: 'ContextMenu' },
            NumpadMultiply: {
                keyCode: 106,
                code: 'NumpadMultiply',
                key: '*',
                location: 3,
            },
            NumpadAdd: { keyCode: 107, code: 'NumpadAdd', key: '+', location: 3 },
            NumpadSubtract: {
                keyCode: 109,
                code: 'NumpadSubtract',
                key: '-',
                location: 3,
            },
            NumpadDivide: {
                keyCode: 111,
                code: 'NumpadDivide',
                key: '/',
                location: 3,
            },
            F1: { keyCode: 112, code: 'F1', key: 'F1' },
            F2: { keyCode: 113, code: 'F2', key: 'F2' },
            F3: { keyCode: 114, code: 'F3', key: 'F3' },
            F4: { keyCode: 115, code: 'F4', key: 'F4' },
            F5: { keyCode: 116, code: 'F5', key: 'F5' },
            F6: { keyCode: 117, code: 'F6', key: 'F6' },
            F7: { keyCode: 118, code: 'F7', key: 'F7' },
            F8: { keyCode: 119, code: 'F8', key: 'F8' },
            F9: { keyCode: 120, code: 'F9', key: 'F9' },
            F10: { keyCode: 121, code: 'F10', key: 'F10' },
            F11: { keyCode: 122, code: 'F11', key: 'F11' },
            F12: { keyCode: 123, code: 'F12', key: 'F12' },
            F13: { keyCode: 124, code: 'F13', key: 'F13' },
            F14: { keyCode: 125, code: 'F14', key: 'F14' },
            F15: { keyCode: 126, code: 'F15', key: 'F15' },
            F16: { keyCode: 127, code: 'F16', key: 'F16' },
            F17: { keyCode: 128, code: 'F17', key: 'F17' },
            F18: { keyCode: 129, code: 'F18', key: 'F18' },
            F19: { keyCode: 130, code: 'F19', key: 'F19' },
            F20: { keyCode: 131, code: 'F20', key: 'F20' },
            F21: { keyCode: 132, code: 'F21', key: 'F21' },
            F22: { keyCode: 133, code: 'F22', key: 'F22' },
            F23: { keyCode: 134, code: 'F23', key: 'F23' },
            F24: { keyCode: 135, code: 'F24', key: 'F24' },
            NumLock: { keyCode: 144, code: 'NumLock', key: 'NumLock' },
            ScrollLock: { keyCode: 145, code: 'ScrollLock', key: 'ScrollLock' },
            AudioVolumeMute: {
                keyCode: 173,
                code: 'AudioVolumeMute',
                key: 'AudioVolumeMute',
            },
            AudioVolumeDown: {
                keyCode: 174,
                code: 'AudioVolumeDown',
                key: 'AudioVolumeDown',
            },
            AudioVolumeUp: {
                keyCode: 175,
                code: 'AudioVolumeUp',
                key: 'AudioVolumeUp',
            },
            MediaTrackNext: {
                keyCode: 176,
                code: 'MediaTrackNext',
                key: 'MediaTrackNext',
            },
            MediaTrackPrevious: {
                keyCode: 177,
                code: 'MediaTrackPrevious',
                key: 'MediaTrackPrevious',
            },
            MediaStop: { keyCode: 178, code: 'MediaStop', key: 'MediaStop' },
            MediaPlayPause: {
                keyCode: 179,
                code: 'MediaPlayPause',
                key: 'MediaPlayPause',
            },
            Semicolon: { keyCode: 186, code: 'Semicolon', shiftKey: ':', key: ';' },
            Equal: { keyCode: 187, code: 'Equal', shiftKey: '+', key: '=' },
            NumpadEqual: {
                keyCode: 187,
                code: 'NumpadEqual',
                key: '=',
                location: 3,
            },
            Comma: { keyCode: 188, code: 'Comma', shiftKey: '<', key: ',' },
            Minus: { keyCode: 189, code: 'Minus', shiftKey: '_', key: '-' },
            Period: { keyCode: 190, code: 'Period', shiftKey: '>', key: '.' },
            Slash: { keyCode: 191, code: 'Slash', shiftKey: '?', key: '/' },
            Backquote: { keyCode: 192, code: 'Backquote', shiftKey: '~', key: '`' },
            BracketLeft: {
                keyCode: 219,
                code: 'BracketLeft',
                shiftKey: '{',
                key: '[',
            },
            Backslash: {
                keyCode: 220,
                code: 'Backslash',
                shiftKey: '|',
                key: '\\',
            },
            BracketRight: {
                keyCode: 221,
                code: 'BracketRight',
                shiftKey: '}',
                key: ']',
            },
            Quote: { keyCode: 222, code: 'Quote', shiftKey: '"', key: "'" },
            AltGraph: { keyCode: 225, code: 'AltGraph', key: 'AltGraph' },
            Props: { keyCode: 247, code: 'Props', key: 'CrSel' },
            Cancel: { keyCode: 3, key: 'Cancel', code: 'Abort' },
            Clear: { keyCode: 12, key: 'Clear', code: 'Numpad5', location: 3 },
            Shift: { keyCode: 16, key: 'Shift', code: 'ShiftLeft', location: 1 },
            Control: {
                keyCode: 17,
                key: 'Control',
                code: 'ControlLeft',
                location: 1,
            },
            Alt: { keyCode: 18, key: 'Alt', code: 'AltLeft', location: 1 },
            Accept: { keyCode: 30, key: 'Accept' },
            ModeChange: { keyCode: 31, key: 'ModeChange' },
            ' ': { keyCode: 32, key: ' ', code: 'Space' },
            Print: { keyCode: 42, key: 'Print' },
            Execute: { keyCode: 43, key: 'Execute', code: 'Open' },
            '\0': { keyCode: 46, key: '\0', code: 'NumpadDecimal', location: 3 },
            a: { keyCode: 65, key: 'a', code: 'KeyA' },
            b: { keyCode: 66, key: 'b', code: 'KeyB' },
            c: { keyCode: 67, key: 'c', code: 'KeyC' },
            d: { keyCode: 68, key: 'd', code: 'KeyD' },
            e: { keyCode: 69, key: 'e', code: 'KeyE' },
            f: { keyCode: 70, key: 'f', code: 'KeyF' },
            g: { keyCode: 71, key: 'g', code: 'KeyG' },
            h: { keyCode: 72, key: 'h', code: 'KeyH' },
            i: { keyCode: 73, key: 'i', code: 'KeyI' },
            j: { keyCode: 74, key: 'j', code: 'KeyJ' },
            k: { keyCode: 75, key: 'k', code: 'KeyK' },
            l: { keyCode: 76, key: 'l', code: 'KeyL' },
            m: { keyCode: 77, key: 'm', code: 'KeyM' },
            n: { keyCode: 78, key: 'n', code: 'KeyN' },
            o: { keyCode: 79, key: 'o', code: 'KeyO' },
            p: { keyCode: 80, key: 'p', code: 'KeyP' },
            q: { keyCode: 81, key: 'q', code: 'KeyQ' },
            r: { keyCode: 82, key: 'r', code: 'KeyR' },
            s: { keyCode: 83, key: 's', code: 'KeyS' },
            t: { keyCode: 84, key: 't', code: 'KeyT' },
            u: { keyCode: 85, key: 'u', code: 'KeyU' },
            v: { keyCode: 86, key: 'v', code: 'KeyV' },
            w: { keyCode: 87, key: 'w', code: 'KeyW' },
            x: { keyCode: 88, key: 'x', code: 'KeyX' },
            y: { keyCode: 89, key: 'y', code: 'KeyY' },
            z: { keyCode: 90, key: 'z', code: 'KeyZ' },
            Meta: { keyCode: 91, key: 'Meta', code: 'MetaLeft', location: 1 },
            '*': { keyCode: 106, key: '*', code: 'NumpadMultiply', location: 3 },
            '+': { keyCode: 107, key: '+', code: 'NumpadAdd', location: 3 },
            '-': { keyCode: 109, key: '-', code: 'Minus', location: 3 },
            '/': { keyCode: 111, key: '/', code: 'NumpadDivide', location: 3 },
            ';': { keyCode: 186, key: ';', code: 'Semicolon' },
            '=': { keyCode: 187, key: '=', code: 'Equal' },
            ',': { keyCode: 188, key: ',', code: 'Comma' },
            '.': { keyCode: 190, key: '.', code: 'Period' },
            '`': { keyCode: 192, key: '`', code: 'Backquote' },
            '[': { keyCode: 219, key: '[', code: 'BracketLeft' },
            '\\': { keyCode: 220, key: '\\', code: 'Backslash' },
            ']': { keyCode: 221, key: ']', code: 'BracketRight' },
            "'": { keyCode: 222, key: "'", code: 'Quote' },
            Attn: { keyCode: 246, key: 'Attn' },
            CrSel: { keyCode: 247, key: 'CrSel', code: 'Props' },
            ExSel: { keyCode: 248, key: 'ExSel' },
            EraseEof: { keyCode: 249, key: 'EraseEof' },
            Play: { keyCode: 250, key: 'Play' },
            ZoomOut: { keyCode: 251, key: 'ZoomOut' },
            ')': { keyCode: 48, key: ')', code: 'Digit0' },
            '!': { keyCode: 49, key: '!', code: 'Digit1' },
            '@': { keyCode: 50, key: '@', code: 'Digit2' },
            '#': { keyCode: 51, key: '#', code: 'Digit3' },
            $: { keyCode: 52, key: '$', code: 'Digit4' },
            '%': { keyCode: 53, key: '%', code: 'Digit5' },
            '^': { keyCode: 54, key: '^', code: 'Digit6' },
            '&': { keyCode: 55, key: '&', code: 'Digit7' },
            '(': { keyCode: 57, key: '(', code: 'Digit9' },
            A: { keyCode: 65, key: 'A', code: 'KeyA' },
            B: { keyCode: 66, key: 'B', code: 'KeyB' },
            C: { keyCode: 67, key: 'C', code: 'KeyC' },
            D: { keyCode: 68, key: 'D', code: 'KeyD' },
            E: { keyCode: 69, key: 'E', code: 'KeyE' },
            F: { keyCode: 70, key: 'F', code: 'KeyF' },
            G: { keyCode: 71, key: 'G', code: 'KeyG' },
            H: { keyCode: 72, key: 'H', code: 'KeyH' },
            I: { keyCode: 73, key: 'I', code: 'KeyI' },
            J: { keyCode: 74, key: 'J', code: 'KeyJ' },
            K: { keyCode: 75, key: 'K', code: 'KeyK' },
            L: { keyCode: 76, key: 'L', code: 'KeyL' },
            M: { keyCode: 77, key: 'M', code: 'KeyM' },
            N: { keyCode: 78, key: 'N', code: 'KeyN' },
            O: { keyCode: 79, key: 'O', code: 'KeyO' },
            P: { keyCode: 80, key: 'P', code: 'KeyP' },
            Q: { keyCode: 81, key: 'Q', code: 'KeyQ' },
            R: { keyCode: 82, key: 'R', code: 'KeyR' },
            S: { keyCode: 83, key: 'S', code: 'KeyS' },
            T: { keyCode: 84, key: 'T', code: 'KeyT' },
            U: { keyCode: 85, key: 'U', code: 'KeyU' },
            V: { keyCode: 86, key: 'V', code: 'KeyV' },
            W: { keyCode: 87, key: 'W', code: 'KeyW' },
            X: { keyCode: 88, key: 'X', code: 'KeyX' },
            Y: { keyCode: 89, key: 'Y', code: 'KeyY' },
            Z: { keyCode: 90, key: 'Z', code: 'KeyZ' },
            ':': { keyCode: 186, key: ':', code: 'Semicolon' },
            '<': { keyCode: 188, key: '<', code: 'Comma' },
            _: { keyCode: 189, key: '_', code: 'Minus' },
            '>': { keyCode: 190, key: '>', code: 'Period' },
            '?': { keyCode: 191, key: '?', code: 'Slash' },
            '~': { keyCode: 192, key: '~', code: 'Backquote' },
            '{': { keyCode: 219, key: '{', code: 'BracketLeft' },
            '|': { keyCode: 220, key: '|', code: 'Backslash' },
            '}': { keyCode: 221, key: '}', code: 'BracketRight' },
            '"': { keyCode: 222, key: '"', code: 'Quote' },
            SoftLeft: { key: 'SoftLeft', code: 'SoftLeft', location: 4 },
            SoftRight: { key: 'SoftRight', code: 'SoftRight', location: 4 },
            Camera: { keyCode: 44, key: 'Camera', code: 'Camera', location: 4 },
            Call: { key: 'Call', code: 'Call', location: 4 },
            EndCall: { keyCode: 95, key: 'EndCall', code: 'EndCall', location: 4 },
            VolumeDown: {
                keyCode: 182,
                key: 'VolumeDown',
                code: 'VolumeDown',
                location: 4,
            },
            VolumeUp: {
                keyCode: 183,
                key: 'VolumeUp',
                code: 'VolumeUp',
                location: 4,
            },
        },
        oi = [
            '--password-store=basic',
            '--allow-file-access-from-files',
            '--disable-session-crashed-bubble',
            '--autoplay-policy=no-user-gesture-required',
            '--disable-infobars',
            '--disable-notifications',
            '--disable-device-discovery-notifications',
            '--disable-quic',
            '--disable-features=TranslateUI',
            '--disable-popup-blocking',
            '--noerrdialogs',
            '--no-first-run',
            '--disable-pinch',
            '--overscroll-history-navigation=0',
            '--kiosk-printing',
            '--check-for-update-interval=1',
            '--simulate-critical-update',
            "--cast-app-background-color='000000'",
            "--default-background-color='00000000'",
        ],
        ai = [],
        si = [],
        ci = 0;
        ci < 5;
        ci++
    )
        ai.push({}), si.push({})
    var li = (function () {
        var e = Qn(function* () {
            var { stdout: e } = yield ve('which chromium-browser', !0)
            return e.trim()
        })
        return function () {
            return e.apply(this, arguments)
        }
    })(),
        di = (e, t, n) => {
            if ('side' === e) return 3
            if ('bottom' === e) return 4
            var i = ai.findIndex((e) => (e && e.url) === t)
            if ('main' === e && i >= 0 && i < 3) return i
            var r = ti
            return ni && !0 !== n && ti < 2 && ti++, r
        },
        ui = (function () {
            var e = Qn(function* (e, t) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        urlReloadDisable: i,
                        kioskMode: r,
                        zoom: o,
                        x: a,
                        y: s,
                        w: c,
                        h: d,
                        headerObj: u = {},
                    } = n,
                    p = oi.concat([
                        '--window-position='.concat(a, ',').concat(s),
                        '--window-size='.concat(c, ',').concat(d),
                        '--user-data-dir='.concat(l.join(ei, 'weblink-' + e)),
                    ])
                !0 !== i && p.push('--disk-cache-size=1', '--disk-cache-dir=/dev/null'),
                    o && p.push('--force-device-scale-factor='.concat(o)),
                    p.push('--app=' + t)
                try {
                    return (
                        ai[e] && ai[e].url && (yield ai[e].browser, yield fi(e)),
                        (ai[e].url = t),
                        (ai[e].zoom = o),
                        (ai[e].kioskMode = r),
                        (ai[e].browser = yield Yn.launch({
                            ignoreHTTPSErrors: !1,
                            headless: !1,
                            executablePath: yield li(),
                            defaultViewport: {
                                width: c,
                                height: d,
                                deviceScaleFactor: o || 1,
                                hasTouch: !1,
                                isLandscape: !0,
                            },
                            args: p,
                            ignoreDefaultArgs: !0,
                            dumpio: !0,
                            devtools: !1,
                            timeout: 1e4,
                        })),
                        b.debug('puppeteer launch done '.concat(e)),
                        (ai[e].browserContext = ai[e].browser.browserContexts()[0]),
                        (ai[e].page = (yield ai[e].browserContext.pages())[0]),
                        (ai[e].loadedPromise = new Promise((t) => {
                            ai[e].page.on('load', () => {
                                b.debug('Puppeteer page load event :', e), t('puppeteerLoaded')
                            }),
                                ai[e].page.on('error', (e) => {
                                    b.error('Puppeteer error event :', e), t('puppeteerError')
                                })
                        })),
                        b.debug('puppeteer page created '.concat(e)),
                        0 !== Object.keys(u).length &&
                        (b.debug('Header Obj inside createBrowser :', u),
                            yield ai[e].page.setExtraHTTPHeaders(u),
                            yield ai[e].page.reload({ waitUntil: 'load', timeout: 0 })),
                        (ai[e].session = yield ai[e].page.target().createCDPSession()),
                        !0 !== i
                            ? ai[e].page.setCacheEnabled(!1)
                            : ai[e].page.setCacheEnabled(!0),
                        b.debug('puppeteer CDP done '.concat(e)),
                        (ai[e].windowId = (yield ai[e].session.send(
                            'Browser.getWindowForTarget',
                        )).windowId),
                        b.debug('puppeteer windowId done '.concat(e)),
                        yield ai[e].session.send('Emulation.setScrollbarsHidden', {
                            hidden: !0,
                        }),
                        b.debug('puppeteer scrollbar hide done '.concat(e)),
                        ai[e].page.on('close', (n) => {
                            b.error('puppeteer close event for '.concat(t, ': ').concat(n)),
                                (ai[e].windowId = null)
                        }),
                        b.getLevel() <= b.levels.DEBUG &&
                        (ai[e].page.on('domcontentloaded', (e) => {
                            b.debug('domcontentloaded event: ', e)
                        }),
                            ai[e].page.on('pageerror', (e) => {
                                b.debug('pageerror event: ', e)
                            }),
                            ai[e].page.on('requestfailed', (e) => {
                                b.debug('requestfailed event: ', e)
                            })),
                        ai[e].loadedPromise
                    )
                } catch (e) {
                    return b.error('Puppeteer launch exception '.concat(e)), null
                }
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        pi = (function () {
            var e = Qn(function* (e, t) {
                var n = e.split('+')
                n.length > 2 &&
                    (n.splice(0, n.length - 2),
                        b.error(
                            'weblink key sequence input, only one modifies allowed, considering only: '.concat(
                                n.join(),
                            ),
                        )),
                    ii[n[0]] && (n[0] = ii[n[0]])
                var i =
                    n.length > 1 && n[0]
                        ? n[0].charAt(0).toUpperCase() + n[0].slice(1)
                        : null,
                    r = n[n.length - 1],
                    o = null
                if (r && r.length > 1)
                    o = ii[r] ? ii[r] : r.charAt(0).toUpperCase() + r.slice(1)
                else if (r && 1 === r.length) {
                    var a = r.charCodeAt(0)
                    o =
                        (a >= 65 && a <= 90) || (a >= 97 && a <= 122)
                            ? 'Key'.concat(r.toUpperCase())
                            : a >= 48 && a <= 57
                                ? 'Digit'.concat(r)
                                : ri[r].code
                }
                try {
                    return (
                        null !== i
                            ? (yield t.down(i),
                                yield t.press(o, { delay: 100 }),
                                yield t.up(i))
                            : yield t.press(o, { delay: 100 }),
                        { key: o, modifier: i, err: null }
                    )
                } catch (e) {
                    return (
                        b.error(
                            'invalid key '
                                .concat(o, ' and modifier ')
                                .concat(i, ' for weblink send ')
                                .concat(e),
                        ),
                        { key: o, modifier: i, err: e }
                    )
                }
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        yi = (function () {
            var e = Qn(function* (e, t, n) {
                var { keyDelay: i, keystrokes: r, scroll: o } = n,
                    a = 1e4
                if (
                    (i && !isNaN(parseInt(i)) && (a = 1e3 * parseInt(i)),
                        clearInterval(ai[e].repeatKeyTimer),
                        yield Se(a).promise,
                        r)
                ) {
                    var s = r.split(','),
                        c = null,
                        l = 10,
                        d = !1
                    for (var u of s) {
                        if (0 === u.indexOf('repeat')) {
                            ; (d = !0), (l = parseInt(u.split('=')[1] || 10))
                            break
                        }
                        if (((c = u), u.endsWith('ms'))) {
                            var p = parseInt(u)
                            b.debug('delaying keysend by '.concat(p, ' milliseconds')),
                                yield Se(p).promise
                        } else {
                            var { key: y, modifier: f, err: v } = yield pi(u, t)
                            if (
                                (null === v
                                    ? b.debug(
                                        'Sending key '
                                            .concat(y, ' ')
                                            .concat(f ? 'along with modifier: ' + f : ''),
                                    )
                                    : b.error(
                                        'Could not send keyStroke '
                                            .concat(y, ' ')
                                            .concat(f ? 'along with modifier: ' + f : '', ', ')
                                            .concat(v),
                                    ),
                                    !0 === si[e].killed)
                            ) {
                                b.error(
                                    'Puppeteer has been killed, hence stop sending keys to puppeteer',
                                )
                                break
                            }
                            yield Se(100).promise
                        }
                    }
                    !0 === d &&
                        (ai[e].repeatKeyTimer = setInterval(function () {
                            !0 !== si[e].killed
                                ? pi(c, t)
                                : clearInterval(ai[e].repeatKeyTimer)
                        }, 1e3 * l))
                }
                if (o) {
                    var g = 100
                    for (b.debug('Scrolling page 100 times'); g > 0;) {
                        try {
                            yield t.press('ArrowDown', { delay: 100 })
                        } catch (e) {
                            return void b.error('weblink scroll error '.concat(e))
                        }
                        if (
                            ((ai[e].scrollTimer = Se(2e3)),
                                -1 === (yield ai[e].scrollTimer.promise))
                        )
                            return
                        g--
                    }
                }
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        fi = (function () {
            var e = Qn(function* (e) {
                if (ai[e] && ai[e].browser) {
                    b.debug(
                        'closing weblink browser for '.concat(e, ' for ').concat(ai[e].url),
                    )
                    try {
                        yield ai[e].browser.close()
                    } catch (e) {
                        b.error('Puppeteer close browser exception '.concat(e))
                    }
                    ; (ai[e].browser = null),
                        (ai[e].browserContext = null),
                        (ai[e].page = null),
                        (ai[e].session = null),
                        (ai[e].windowId = null),
                        (ai[e].url = null),
                        (ai[e].loadedPromise = null)
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        vi = (e) => {
            var t = e.match(
                /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            )
            return !(!t || 11 !== t[7].length) && t[7]
        },
        gi = (function () {
            var e = Qn(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'main',
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    {
                        kioskMode: o = !1,
                        urlReloadDisable: a,
                        videoWindowSize: s,
                        zoom: c = 1,
                        orientation: l,
                        keystrokes: d,
                        keyDelay: u,
                        scroll: p,
                        headers: y,
                    } = n,
                    f = !1 === /^(https?):\/\//.test(t) ? 'https://'.concat(t) : t
                if (!0 === r) {
                    var v = vi(f)
                    !1 !== v &&
                        ((f = 'https://youtube.com/embed/'.concat(v, '?autoplay=1')),
                            b.info(
                                'Modifying youtube url for video id '.concat(v, ': ').concat(f),
                            ))
                }
                var g = {}
                if (y) {
                    var m = y.split(';')
                    for (var h of (b.debug('Header array : ', m), m))
                        if (h) {
                            var k = h.split(':')
                            k[0] &&
                                k[1] &&
                                (g[
                                    k[0].trim().replace(/(^"|"$|^'|'$|^`|`$)/g, '')
                                ] = k[1].trim().replace(/(^"|"$|^'|'$|^`|`$)/g, ''))
                        }
                }
                var w = di(e, f, i)
                if (
                    !0 === ni &&
                    ai[w].url === f &&
                    ai[w].browser &&
                    ai[w].kioskMode === o &&
                    ai[w].zoom === c &&
                    ai[w].windowId
                ) {
                    if (
                        (!0 !== a &&
                            ((!0 === i && !0 === ni) || !0 !== ni) &&
                            (y &&
                                (b.debug('Headers Object: ', g),
                                    yield ai[w].page.setExtraHTTPHeaders(g)),
                                b.debug('Reloading page for '.concat(f, ', ').concat(w)),
                                yield ai[w].page.reload({ waitUntil: 'load', timeout: 0 })),
                            !0 === i)
                    )
                        return
                    try {
                        if (
                            (yield ai[w].page.bringToFront(),
                                b.debug('activating window for '.concat(f, ', ').concat(w)),
                                !0 === ai[w].isStream)
                        ) {
                            yield Se(1e3).promise
                            var S = yield ai[w].page.$(
                                '[id="movie_player"][class*="playing-mode"]',
                            )
                            if (!S) {
                                var x = yield ai[w].page.$(
                                    '[id="movie_player"]:not([class*="ended-mode"]',
                                )
                                x
                                    ? ai[w].page.mouse.click(
                                        ai[w].mouseCoords.mousex,
                                        ai[w].mouseCoords.mousey,
                                        { button: 'left', clickCount: 1, delay: 10 },
                                    )
                                    : yield ai[w].page.reload({ waitUntil: 'load', timeout: 0 })
                            }
                        }
                        return
                    } catch (e) {
                        b.error(
                            'Puppeteer page bringToFront exception for '
                                .concat(f, ',')
                                .concat(e),
                        )
                    }
                }
                if (!0 !== i) {
                    yield fi(w)
                    var [P, C, I, A] = s
                    c &&
                        ((I = Math.round(I / c)),
                            (A = Math.round(A / c)),
                            (P = Math.round(P / c)),
                            (C = Math.round(C / c))),
                        (si[w].killed = !1),
                        b.debug('launching puppeteer for '.concat(f, ', ').concat(w))
                    var O = yield ui(w, f, {
                        x: P,
                        y: C,
                        w: I,
                        h: A,
                        zoom: c,
                        kioskMode: o,
                        urlReloadDisable: a,
                        headerObj: g,
                    })
                    if (null !== O) {
                        yield O
                        try {
                            yield ai[w].session.send('Emulation.setScrollbarsHidden', {
                                hidden: !0,
                            })
                        } catch (e) {
                            b.error('Puppeteer code execution error: '.concat(e))
                        }
                        if (
                            ((d || p) &&
                                yi(w, ai[w].page.keyboard, {
                                    keyDelay: u,
                                    keystrokes: d,
                                    scroll: p,
                                }),
                                zn(),
                                !0 === r)
                        ) {
                            yield Se(500).promise
                            var T = yield ai[w].page.$(
                                '[id="movie_player"][class*="playing-mode"]',
                            ),
                                D = { mousex: P + I / 2, mousey: C + A / 2 }
                            T ||
                                (yield ai[w].page.mouse.click(D.mousex, D.mousey, {
                                    button: 'left',
                                    clickCount: 1,
                                    delay: 10,
                                })),
                                (ai[w].mouseCoords = {}),
                                Object.assign(ai[w].mouseCoords, D),
                                (ai[w].isStream = !0)
                        } else ai[w].isStream = !1
                        !0 === si[w].killed && (yield fi(w))
                    } else b.error('*** puppeteer launch error, not proceeding')
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        mi = (function () {
            var e = Qn(function* (e, t) {
                var n = (function () {
                    var e = Qn(function* (e) {
                        if (null !== ai[e]) {
                            xe(ai[e].scrollTimer), clearInterval(ai[e].repeatKeyTimer)
                            try {
                                if (ni && ai[e].windowId) {
                                    if (!0 === ai[e].isStream) {
                                        var t = yield ai[e].session.send(
                                            'Browser.getWindowBounds',
                                            { windowId: ai[e].windowId },
                                        ),
                                            n = yield ai[e].page.$(
                                                '[id="movie_player"][class*="ended-mode"]',
                                            )
                                        'minimized' === t.bounds.windowState ||
                                            n ||
                                            (yield ai[e].page.mouse.click(
                                                ai[e].mouseCoords.mousex,
                                                ai[e].mouseCoords.mousey,
                                                { button: 'left', clickCount: 1, delay: 10 },
                                            ))
                                    }
                                    yield ai[e].session.send('Browser.setWindowBounds', {
                                        windowId: ai[e].windowId,
                                        bounds: { windowState: 'minimized' },
                                    }),
                                        b.debug('minimize weblink window for '.concat(e))
                                } else (si[e].killed = !0), yield fi(e)
                            } catch (e) {
                                b.error('Error removing weblink '.concat(e))
                            }
                        }
                    })
                    return function (t) {
                        return e.apply(this, arguments)
                    }
                })()
                if (t) {
                    var i = ai.find((e) => e.url === t)
                    i >= 0 && (yield n(i))
                } else if (e) {
                    if ('side' === e) yield n(3)
                    else if ('bottom' === e) yield n(4)
                    else if ('main' === e) for (var r = 0; r < 3; r++) yield n(r)
                } else for (var o = 0; o < ai.length; o++) yield n(o)
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        hi = (function () {
            var e = Qn(function* () {
                for (var e = 0; e < ai.length; e++)
                    null !== ai[e] &&
                        (xe(ai[e].scrollTimer),
                            clearInterval(ai[e].repeatKeyTimer),
                            (si[e].killed = !0),
                            fi(e))
                ti = 0
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ki = (e) => {
            e !== ni && hi(),
                b.debug('Webcaching configuration changed to '.concat(e)),
                (ni = e)
        }
    function bi(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var wi = 'File does not exist',
        Si = (e) =>
            e.match(ot.radioFileRegex)
                ? 'radio'
                : e.match(ot.liveStreamRegex)
                    ? 'tv'
                    : e.match(ot.omxStreamRegex)
                        ? 'stream'
                        : e.match(ot.txtFileRegex)
                            ? 'text'
                            : e.match(ot.linkURL)
                                ? 'weblink'
                                : e.match(ot.CORSLink)
                                    ? 'cors'
                                    : e.match(ot.videoRegex)
                                        ? 'video'
                                        : e.match(ot.audioRegex)
                                            ? 'audio'
                                            : e.match(ot.imageRegex)
                                                ? 'image'
                                                : e.match(ot.noticeRegex)
                                                    ? 'html'
                                                    : e.match(ot.pdffileRegex)
                                                        ? 'pdf'
                                                        : e.match(ot.zipfileRegex)
                                                            ? 'zip'
                                                            : e.match(ot.playlist)
                                                                ? 'playlist'
                                                                : 'unknown',
        xi = (function () {
            var e,
                t =
                    ((e = function* (e) {
                        var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [],
                            n = { filename: e, filepath: e, assetType: 'error' }
                        if (!e) return (n.error = wi), n
                        if (/(rtsp|http|https):\/\//.test(e))
                            (n.assetType = 'cors'), (n.filepath = e)
                        else if (e.match(ot.mediaRss) || e.match(ot.localFolderRegex)) {
                            var i = t.find((t) => {
                                var { name: n } = t
                                return n === e
                            })
                            if (void 0 === i || !i.feeds || 0 === i.feeds.length)
                                return (
                                    k.error('Feed is empty for '.concat(e)),
                                    (n.assetType = 'error'),
                                    (n.filepath = null),
                                    (n.error = 'Feed is empty'),
                                    n
                                )
                            i.duration && (n.duration = parseInt(i.duration)),
                                (n.style = i.style),
                                (n.filename = i.feeds[i.subIndex].piSignageLink),
                                (n.filepath = n.filename),
                                (n.absoluteFilepath =
                                    i.feeds[i.subIndex].piSignageAbsolutePath),
                                (n.assetType = i.feeds[i.subIndex].piSignageType),
                                (n.banner = i.feeds[i.subIndex].piSignageBanner),
                                i.feeds[i.subIndex].piSignageDuration &&
                                ((n.duration = parseInt(
                                    i.feeds[i.subIndex].piSignageDuration,
                                )),
                                    k.debug(
                                        'Duration of play changed to mrss duration of value: '.concat(
                                            n.duration,
                                        ),
                                    )),
                                (n.fromFeed = !0)
                        } else if (
                            e.indexOf('://') >= 0 ||
                            0 === e.indexOf('\\\\') ||
                            0 === e.indexOf('/')
                        )
                            (n.filepath = e), (n.assetType = 'local')
                        else {
                            var r = l.join(X.MEDIA_DIR, e),
                                o = ''.concat(X.MEDIA_URL, '/').concat(e)
                            try {
                                if (!(0, q.existsSync)(r))
                                    return (
                                        k.error('file check error with existsSync: '.concat(r)),
                                        (n.assetType = 'error'),
                                        (n.filepath = null),
                                        (n.error = wi),
                                        n
                                    )
                                        ; (n.filepath = o), (n.absoluteFilepath = r)
                            } catch (e) {
                                return (
                                    k.error('file check error with existsSync: '.concat(e)),
                                    (n.assetType = 'error'),
                                    (n.filepath = null),
                                    (n.error = wi),
                                    n
                                )
                            }
                            if (
                                e.match(ot.radioFileRegex) ||
                                e.match(ot.liveStreamRegex) ||
                                e.match(ot.omxStreamRegex) ||
                                e.match(ot.linkURL) ||
                                e.match(ot.CORSLink) ||
                                e.match(ot.txtFileRegex)
                            )
                                try {
                                    var a = yield q.promises.readFile(r, 'utf8'),
                                        s = JSON.parse(a)
                                        ; (s.link = oe(s.link)),
                                            (n.filepath = s.link),
                                            (n.absoluteFilepath = null),
                                            (n.style = s.style),
                                            (n.linkFileJson = s),
                                            (n.assetType = e.match(ot.radioFileRegex)
                                                ? 'radio'
                                                : e.match(ot.liveStreamRegex)
                                                    ? 'tv'
                                                    : e.match(ot.omxStreamRegex)
                                                        ? 'stream'
                                                        : e.match(ot.txtFileRegex)
                                                            ? 'text'
                                                            : e.match(ot.linkURL)
                                                                ? 'weblink'
                                                                : 'cors'),
                                            !s.link ||
                                            (0 !== s.link.indexOf('rtsp://') &&
                                                0 !== s.link.indexOf('udp://')) ||
                                            (n.assetType = 'stream'),
                                            'text' === n.assetType &&
                                            ((s.message = oe(s.message)), (n.banner = s.message))
                                } catch (e) {
                                    k.error(
                                        'error in reading/parsing URL file, '
                                            .concat(r, ', error: ')
                                            .concat(e),
                                    ),
                                        (n.assetType = 'error'),
                                        (n.filepath = null),
                                        (n.error = 'URL read/parse error')
                                }
                            else
                                e.match(ot.videoRegex)
                                    ? (n.assetType = 'video')
                                    : e.match(ot.audioRegex)
                                        ? (n.assetType = 'audio')
                                        : e.match(ot.imageRegex)
                                            ? (n.assetType = 'image')
                                            : e.match(ot.noticeRegex)
                                                ? (n.assetType = 'html')
                                                : e.match(ot.pdffileRegex)
                                                    ? (n.assetType = 'pdf')
                                                    : e.match(ot.zipfileRegex)
                                                        ? (n.assetType = 'zip')
                                                        : e.match(ot.playlist) && (n.assetType = 'playlist')
                        }
                        return n
                    }),
                        function () {
                            var t = this,
                                n = arguments
                            return new Promise(function (i, r) {
                                var o = e.apply(t, n)
                                function a(e) {
                                    bi(o, i, r, a, s, 'next', e)
                                }
                                function s(e) {
                                    bi(o, i, r, a, s, 'throw', e)
                                }
                                a(void 0)
                            })
                        })
            return function (e) {
                return t.apply(this, arguments)
            }
        })()
    function Pi(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Ci(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Pi(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Pi(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: Ii } = C,
        Ai = Ii({
            name: z,
            initialState: { subAssets: [] },
            reducers: {
                createSubAsset(e, t) {
                    var n = Object.assign({}, t.payload, {
                        enable: !0,
                        subIndex: 0,
                        feedGetTimer: null,
                    })
                    e.subAssets.push(n)
                },
                updateSubAssetFeed(e, t) {
                    var n = e.subAssets.find((e) => {
                        var { name: n } = e
                        return n === t.payload.name
                    })
                        ; (n.feeds = t.payload.feeds),
                            (n.feedGetTimer = t.payload.feedGetTimer)
                },
                clearSubAssetFeeds(e) {
                    for (var t of e.subAssets) (t.enable = !1), xe(t.feedGetTimer)
                    e.subAssets.length = 0
                },
                incrementFeedIndex(e, t) {
                    var n = e.subAssets.find((e) => {
                        var { name: n } = e
                        return n === t.payload
                    })
                    void 0 !== n && (n.subIndex = (n.subIndex + 1) % n.feeds.length)
                },
            },
        }),
        { clearSubAssetFeeds: Oi, incrementFeedIndex: Ti } = Ai.actions
    const Di = Ai.reducer
    var Ri = (e) => {
        if (-1 === e.indexOf('.')) return null
        var t = e.split('.').pop()
        return -1 !== ['mp4', 'mpg4', 'mpeg4'].indexOf(t)
            ? 'video'
            : -1 !== ['jpeg', 'jpg', 'png'].indexOf(t)
                ? 'image'
                : null
    },
        Fi = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'mrss',
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
            return (function () {
                var i = Ci(function* (i, r) {
                    var { subAssets: o } = r().playerFeeds
                    if (
                        !0 !== n ||
                        !o.find((e) => {
                            var { name: n, enable: i } = e
                            return n === t && !0 === i
                        })
                    )
                        try {
                            var a = yield q.promises.readFile(l.join(X.MEDIA_DIR, t)),
                                s = JSON.parse(a) || {}
                            s.link = oe(s.link)
                            var c = Object.assign({}, s, { name: t, type: e })
                                ; (c.numberOfItems = c.numberOfItems || 10),
                                    k.debug('Adding sub asset: '.concat(t, ' of type: ').concat(e)),
                                    i(Ai.actions.createSubAsset(c)),
                                    'mrss' === e ? i(_i(t)) : 'local' === e && (yield i(Ei(t)))
                        } catch (e) {
                            k.error(
                                'Error in reading SubAsset configuration file '
                                    .concat(t, ';')
                                    .concat(e),
                            )
                        }
                })
                return function (e, t) {
                    return i.apply(this, arguments)
                }
            })()
        },
        _i = (e) =>
            (function () {
                var t = Ci(function* (t, n) {
                    var { subAssets: i } = n().playerFeeds,
                        r = i.find((t) => {
                            var { name: n, enable: i } = t
                            return n === e && !0 === i
                        })
                    if (void 0 !== r) {
                        xe(r.feedGetTimer)
                        var o = { name: r.name, feeds: [], feedGetTimer: null }
                        try {
                            var a = yield Ft(r.link, r.numberOfItems)
                            for (var [s, c] of (Array.isArray(a) && 0 !== a.length
                                ? k.debug(
                                    'Received '
                                        .concat(a.length, ' feeds for ')
                                        .concat(r.link, ': ')
                                        .concat(a[0]),
                                )
                                : k.error('Empty feed for '.concat(r.link)),
                                a.entries())) {
                                var l = void 0
                                if (0 === r.hideTitle.indexOf('only')) c.piSignageType = 'text'
                                else if (
                                    c.enclosures &&
                                    Array.isArray(c.enclosures) &&
                                    c.enclosures[0] &&
                                    c.enclosures[0].url
                                ) {
                                    var d = c.enclosures[0]
                                        ; (l = d.type
                                            ? (l =
                                                -1 !== d.type.indexOf('/')
                                                    ? d.type.split('/')[0]
                                                    : d.type).toLowerCase()
                                            : Ri(d.url)),
                                            (c.piSignageType = l),
                                            (c.piSignageLink = decodeURI(d.url))
                                } else
                                    c.image && c.image.url
                                        ? ((c.piSignageType = 'image'),
                                            (c.piSignageLink = decodeURI(c.image.url)))
                                        : c['rss:fullimage']
                                            ? ((c.piSignageType = 'image'),
                                                (c.piSignageLink = decodeURI(c['rss:fullimage']['#'])))
                                            : c['rss:storyimage'] &&
                                            ((c.piSignageType = 'image'),
                                                (c.piSignageLink = decodeURI(c['rss:storyimage']['#'])))
                                r.hideTitle.indexOf('title') >= 0
                                    ? (c.piSignageBanner = c.title || '')
                                    : r.hideTitle.indexOf('description') >= 0 &&
                                    (c.piSignageBanner = c.description || '')
                                var u = 'media:content'
                                if (
                                    (c[u] &&
                                        c[u]['@'] &&
                                        c[u]['@'].duration &&
                                        (c.piSignageDuration = c[u]['@'].duration),
                                        c.piSignageBanner && !c.piSignageLink)
                                )
                                    (c.piSignageType = 'text'),
                                        (c.piSignageLink = r.name + '_' + s + '.txt')
                                else if (!c.piSignageBanner && !c.piSignageLink) {
                                    if (!c.link) {
                                        k.error(
                                            'No info available in the feed, removing '.concat(
                                                c.toString().slice(0, 50),
                                            ),
                                        )
                                        continue
                                    }
                                    ; (c.piSignageType = 'weblink'), (c.piSignageLink = c.link)
                                }
                                o.feeds.push(c)
                            }
                        } catch (e) {
                            k.error('MRSS feed fetch error: '.concat(r.link, ';').concat(e))
                        }
                        r.enable &&
                            ((o.feedGetTimer = Se(6e5)),
                                o.feedGetTimer.promise.then((n) => {
                                    ; -1 !== n && t(_i(e))
                                })),
                            t(Ai.actions.updateSubAssetFeed(o))
                    } else k.error('Subasset is not available for MRSS file name: '.concat(e))
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })(),
        Ei = (e) =>
            (function () {
                var t = Ci(function* (t, n) {
                    var { subAssets: i } = n().playerFeeds,
                        r = i.find((t) => {
                            var { name: n, enable: i } = t
                            return n === e && !0 === i
                        })
                    if (void 0 !== r) {
                        xe(r.feedGetTimer)
                        var o = { name: r.name, feeds: [], feedGetTimer: null },
                            a = ''.concat(X.MEDIA_URL, '/_local_').concat(l.basename(r.link)),
                            s = ''.concat(X.MEDIA_DIR, '/_local_').concat(l.basename(r.link))
                        yield ve('ln -sf '.concat(r.link, ' ').concat(s), !0)
                        try {
                            if ((yield q.promises.stat(r.link)).isDirectory()) {
                                var c = (yield q.promises.readdir(r.link))
                                    .filter(
                                        (e) =>
                                            ot.videoRegex.test(e) ||
                                            ot.audioRegex.test(e) ||
                                            ot.imageRegex.test(e) ||
                                            ot.noticeRegex.test(e) ||
                                            ot.pdffileRegex.test(e) ||
                                            ot.zipfileRegex.test(e) ||
                                            ot.radioFileRegex.test(e) ||
                                            ot.liveStreamRegex.test(e) ||
                                            ot.omxStreamRegex.test(e) ||
                                            ot.linkURL.test(e) ||
                                            ot.CORSLink.test(e) ||
                                            ot.txtFileRegex.test(e),
                                    )
                                    .sort((e, t) => e.localeCompare(t, void 0, { numeric: !0 }))
                                    ; (o.feeds = c.map((e) => ({
                                        piSignageLink: ''.concat(a, '/').concat(e),
                                        piSignageAbsolutePath: l.join(r.link, e),
                                        piSignageType: Si(e),
                                    }))),
                                        k.debug(
                                            'Received folder contents for '
                                                .concat(r.link, ': ')
                                                .concat(c),
                                        )
                            } else
                                (o.feeds = [{ piSignageLink: r.link }]),
                                    (o.feeds = [
                                        {
                                            piSignageLink: a,
                                            piSignageAbsolutePath: r.link,
                                            piSignageType: Si(l.basename(r.link)),
                                        },
                                    ]),
                                    k.debug('Using local folder file '.concat(r.link))
                        } catch (e) {
                            k.error(
                                'Local folder/file read error: '.concat(r.link, ';').concat(e),
                            )
                        }
                        r.enable &&
                            ((o.feedGetTimer = Se(6e5)),
                                o.feedGetTimer.promise.then((n) => {
                                    ; -1 !== n && t(Ei(e))
                                })),
                            t(Ai.actions.updateSubAssetFeed(o))
                    } else k.error('Subasset is not available for MRSS file name: '.concat(e))
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
    function Ni(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var ji,
        Mi = (e) => {
            var { timeToStopVideo: t } = Pc.getState().mediaSettings,
                { currentVideoChunk: n } = Pc.getState().playerLoop,
                { subAssets: i } = Pc.getState().playerFeeds,
                r = !1,
                o = i.find((t) => {
                    var { name: n } = t
                    return n === e.filename
                })
            return (
                o &&
                o.subIndex &&
                (k.debug(
                    'Using the same nextFileIndex with subIndex '.concat(o.subIndex),
                ),
                    (r = !0)),
                e &&
                e.filename.match(ot.videoRegex) &&
                t &&
                n &&
                (k.debug('Using the same nextFileIndex with videoChunk '.concat(n)),
                    (r = !0)),
                r
            )
        },
        Li = (function () {
            var e,
                t =
                    ((e = function* (e, t) {
                        e = 'main'
                        var {
                            playingPlaylistType: n,
                            currentLayout: i,
                            playlistPlaying: r,
                            playlistFilesObj: o,
                            nextFileIndexObj: a,
                            lastTimeIndex0Visited: s,
                            loadNextPlaylist: c,
                        } = Pc.getState().playerMain,
                            { currentZoneCallbackIndex: l } = Pc.getState().playerLoop,
                            d = o.main,
                            u = a.main,
                            { adsEnabled: p, adsObjectArray: y } = Pc.getState().playerAdvt,
                            { shuffleContent: f } = Pc.getState().mediaSettings
                        if (null === t || l.main === t) {
                            Pc.dispatch(mr({ zone: e }))
                            var v = {
                                playlistFilesIndex: -1,
                                main: null,
                                otherZones: {},
                                duration: 10,
                                fullscreen: !1,
                                option: {},
                            }
                            if (!0 === p && 'regular' === n)
                                for (var [g, m] of y.entries())
                                    if (m.adReady) {
                                        if (m.currentAdCount >= m.adCount) {
                                            Pc.dispatch(Lr(g, m.interval))
                                            continue
                                        }
                                        var h = m.files[m.index]
                                        for (var b of (!m.noMainPlay &&
                                            h &&
                                            h.filename &&
                                            ((v.main = h.filename),
                                                k.debug('Playing advt file '.concat(h.filename)),
                                                (v.duration = parseInt(h.duration)),
                                                (v.fullscreen = h.fullscreen),
                                                (v.option = h.option)),
                                            nt[i]))
                                            v.otherZones[b] = h[b] || null
                                        Pc.dispatch(Fr({ index: g, adPlaying: !0 }))
                                        break
                                    }
                            if (r && null === v.main) {
                                var w = {
                                    zoneName: e,
                                    nextFileIndex: u,
                                    shufflePair: [],
                                    lastTimeIndex0Visited: null,
                                }
                                if (!1 === Mi(d[u])) {
                                    if (
                                        ((v.useSameIndex = !1),
                                            (w.nextFileIndex = (u + 1) % d.length),
                                            0 === w.nextFileIndex)
                                    ) {
                                        if (!0 === c)
                                            return (
                                                Pc.dispatch(Io(!0)),
                                                void k.info('playlist change called')
                                            )
                                        if (f && d.length > 2) {
                                            for (var S, x = d.length; 0 !== x;)
                                                (S = Math.floor(Math.random() * x)),
                                                    (x -= 1),
                                                    w.shufflePair.push([x, S])
                                            v.playlistFilesIndex = S
                                        }
                                        Date.now() - s < 1e3 &&
                                            (k.error(
                                                'Playlist duration is less than 1 second, delaying for a second',
                                            ),
                                                yield Se(1e3).promise),
                                            (w.lastTimeIndex0Visited = Date.now())
                                    }
                                } else v.useSameIndex = !0
                                    ; -1 === v.playlistFilesIndex &&
                                        (v.playlistFilesIndex = w.nextFileIndex)
                                var P = d[v.playlistFilesIndex]
                                for (var C of ((v.main = P && P.filename),
                                    (v.duration = parseInt(P.duration)),
                                    nt[i]))
                                    v.otherZones[C] || (v.otherZones[C] = P[C] || null)
                                        ; (v.fullscreen = P.fullscreen),
                                            (v.option = P.option || {}),
                                            Pc.dispatch(wo(w)),
                                            Pc.dispatch(Fr({ adPlaying: !1 })),
                                            !1 === Mi(d[w.nextFileIndex]) &&
                                            (v.prefetchRow = d[(w.nextFileIndex + 1) % d.length])
                            }
                            v.main &&
                                ((v.scheduler = Li),
                                    Pc.dispatch(
                                        wr(
                                            e,
                                            v.main,
                                            v.option.main,
                                            v.duration,
                                            v.otherZones,
                                            v.option,
                                            v.fullscreen,
                                            'main',
                                            null,
                                            v.prefetchRow,
                                            v.useSameIndex,
                                        ),
                                    ))
                        } else
                            k.warn(
                                '*** skipping scheduler with callIndex: '
                                    .concat(t, ' mismatch with ')
                                    .concat(l.main),
                            )
                    }),
                        function () {
                            var t = this,
                                n = arguments
                            return new Promise(function (i, r) {
                                var o = e.apply(t, n)
                                function a(e) {
                                    Ni(o, i, r, a, s, 'next', e)
                                }
                                function s(e) {
                                    Ni(o, i, r, a, s, 'throw', e)
                                }
                                a(void 0)
                            })
                        })
            return function (e, n) {
                return t.apply(this, arguments)
            }
        })(),
        Ki = (e, t) => {
            var {
                playlistFilesObj: n,
                nextFileIndexObj: i,
            } = Pc.getState().playerMain,
                {
                    currentZoneCallbackIndex: r,
                    mainZoneFullscreen: o,
                } = Pc.getState().playerLoop,
                { subAssets: a } = Pc.getState().playerFeeds,
                s = i[e],
                c = n[e]
            if (null === t || r[e] === t) {
                var l = c ? c[s] : null
                if (!l) throw Error('SubScheduler, Playlist row is empty')
                Pc.dispatch(mr({ zone: e }))
                var d = { zoneName: e, nextFileIndex: s },
                    u = a.find((e) => {
                        var { name: t } = e
                        return t === l.filename
                    })
                u && u.subIndex
                    ? k.debug(
                        'Nested scheduler, using the same nextFileIndex with subIndex '.concat(
                            u.subIndex,
                        ),
                    )
                    : ((d.nextFileIndex = (s + 1) % c.length),
                        Pc.dispatch(wo(d)),
                        Pc.dispatch(Fr({ adPlaying: !1 })))
                var p = c[d.nextFileIndex]
                k.debug('calling displayNext for '.concat(e)),
                    Pc.dispatch(
                        wr(
                            e,
                            p.filename,
                            p.option.main,
                            p.duration,
                            {},
                            p.option,
                            o,
                            'zone',
                        ),
                    )
            } else
                k.warn(
                    '*** skipping nested scheduler for '
                        .concat(e, ' with callIndex: ')
                        .concat(t, ' mismatch with ')
                        .concat(r[e]),
                )
        }
    function Ui(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function zi(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Ui(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Ui(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Wi = (function () {
        var e = zi(function* (e, t) {
            var n,
                i,
                r,
                o = ['-s']
            o.push('--page-index=1'),
                o.push(l.join(X.HOME_DIR, e)),
                Vi(),
                (ji = (0, se.spawn)('evince', o, { stdio: 'pipe' }))
            var a = new Promise((e) => {
                ji.once('exit', function (t, i) {
                    b.debug(
                        'Evince exit event with code '.concat(t, ' and ').concat(i),
                    ),
                        xe(n),
                        e(t)
                })
            })
            if (t && ji && ji.pid) {
                for (; yield Se(500).promise, null !== ji;) {
                    r = ji.pid
                    var { stdout: s } = yield ve(
                        'xdotool search --onlyvisible --pid  '.concat(ji.pid),
                    )
                    if (s) {
                        i = s.trim()
                        break
                    }
                }
                for (zn(); null !== ji && ji.pid === r;)
                    (n = Se(1e3 * t)),
                        yield n.promise,
                        b.debug('Evince sending key Down event for '.concat(r)),
                        null !== ji &&
                        ji.pid === r &&
                        (yield ve('xdotool windowactivate '.concat(i)),
                            yield ve('xdotool key Down'),
                            zn())
            }
            return a
        })
        return function (t, n) {
            return e.apply(this, arguments)
        }
    })(),
        Vi = () => {
            ji && (ji.kill(), (ji = null))
        },
        Hi = (function () {
            var e = zi(function* () {
                var e = []
                yield ve('sudo pkill evince')
                var { stderr: t, stdout: n } = yield ve('which evince')
                return (
                    t
                        ? b.error('Evince is not available for PDF slide mode')
                        : (b.info('Evince is present at '.concat(n)), e.push('evince')),
                    e
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function Bi(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Gi(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Bi(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Bi(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var qi = {},
        Ji = {},
        Zi = (e) => {
            try {
                return process.kill(e, 0), !0
            } catch (e) {
                return !1
            }
        },
        $i = (function () {
            var e = Gi(function* (e, t) {
                for (
                    var n =
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i =
                        'cvlc' === e
                            ? 'xdotool search --onlyvisible --name vlc'
                            : 'xdotool search --onlyvisible --pid '.concat(t),
                    r = 25;
                    r-- >= 0;

                ) {
                    if ((yield Se(500).promise, !1 === Zi(t)))
                        return (
                            b.debug(
                                'Process is not running for '
                                    .concat(e, '-')
                                    .concat(t, ', exiting windowId search'),
                            ),
                            null
                        )
                    var { stdout: o, stderr: a } = yield ve(i, !1)
                    if (o) {
                        var s = o.split('\n'),
                            c = parseInt(s[0])
                        return (
                            'cvlc' === e &&
                            (!0 === n &&
                                (yield ve('xdotool windowminimize --sync '.concat(c), !0)),
                                yield ve(
                                    'xdotool set_window --name '.concat(t, ' ').concat(c),
                                )),
                            yield Se(500).promise,
                            c
                        )
                    }
                    b.debug(
                        'unable to get video Player Window id for '
                            .concat(e, '-')
                            .concat(t, ',retrying, ')
                            .concat(a),
                    )
                }
                return null
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Yi = (function () {
            var e = Gi(function* (e, t) {
                return (
                    !!e &&
                    (yield Se(1e3).promise,
                        yield ve(
                            'xdotool windowsize '
                                .concat(e, ' ')
                                .concat(t[2], ' ')
                                .concat(t[3], ' windowmove ')
                                .concat(e, ' ')
                                .concat(t[0], ' ')
                                .concat(t[1]),
                            !0,
                        ),
                        yield ve('xdotool windowactivate --sync '.concat(e), !0),
                        b.debug('resized vlc window to '.concat(t.join(' '))),
                        !0)
                )
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        Xi = (function () {
            var e = Gi(function* () {
                for (var e in Ji) delete Ji[e]
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Qi = (function () {
            var e = Gi(function* (e) {
                if (Ji[e] && Ji[e].fetchedTime && Date.now() - Ji[e].fetchedTime < 36e5)
                    return !0 !== Ji[e].error && Ji[e].ytDlpLink
                        ? (b.info(
                            'returning cached video link for YouTube url: '.concat(e),
                        ),
                            Ji[e].ytDlpLink)
                        : (b.error(
                            'Youtube video url not available, reason: '.concat(
                                Ji[e].errorMessage,
                            ),
                        ),
                            null)
                var { stdout: t, stderr: n } = yield ve(
                    'yt-dlp -ciw -g -f b '.concat(e),
                )
                return t
                    ? ((Ji[e] = {
                        ytDlpLink: t,
                        fetchedTime: Date.now(),
                        error: !1,
                        errorMessage: '',
                    }),
                        b.info('Caching video link for YouTube url: '.concat(e)),
                        Ji[e].ytDlpLink)
                    : ((Ji[e] = {
                        ytDlpLink: null,
                        fetchedTime: Date.now(),
                        error: !0,
                        errorMessage: n,
                    }),
                        b.error(
                            'Unable to video link for YouTube url: '
                                .concat(e, ', reason: ')
                                .concat(n),
                        ),
                        null)
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        er = (function () {
            var e = Gi(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'main',
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    o = arguments.length > 5 ? arguments[5] : void 0,
                    a =
                        arguments.length > 6 && void 0 !== arguments[6]
                            ? arguments[6]
                            : null,
                    s = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
                    c = Pc.getState(),
                    d = c.playerLoop.currentZoneCallbackIndex[e],
                    { selectedVideoPlayer: u } = c.mediaSettings,
                    { videoKeepAspect: p, mpvAudioDelay: y } = c.mediaSettings,
                    { zoneDurationTimers: f } = c.playerLoop,
                    v = 'main' === e ? vt(c)[i ? 'fullScreen' : 'videoWindow'] : gt(c)[e]
                if (-1 === tt.indexOf(e))
                    return (
                        b.error('Video playing is not supported in '.concat(e, ' zone')), 0
                    )
                if (!(Array.isArray(v) && v[2] && v[3]))
                    return (
                        b.error(
                            'not suitable dimensions for video play in zone '
                                .concat(e, ': ')
                                .concat(v && v.toString()),
                        ),
                        0
                    )
                if (Array.isArray(t))
                    for (var g of t) {
                        var m = l.basename(g)
                        if (-1 !== m.indexOf('.mkv')) {
                            u = 'cvlc'
                            break
                        }
                    }
                else {
                    var h = l.basename(t)
                        ; -1 !== h.indexOf('.mkv') && (u = 'cvlc')
                }
                ; ('chrome' !== u && 'default' !== u && !0 !== s) || (u = 'mpv')
                var k =
                    'cvlc' === u
                        ? [
                            '--no-osd',
                            '--play-and-exit',
                            '--gain=1',
                            '--global-key-next=n',
                            '--file-caching=5000',
                        ]
                        : 'omxplayer' === u
                            ? [
                                '--orientation',
                                lt(c),
                                '--win',
                                yt(v),
                                '--vol',
                                ct(c).omxDbValue,
                                '--no-osd',
                                '--aspect-mode',
                                p ? 'letterbox' : 'stretch',
                                '-o',
                                st(c),
                            ]
                            : [
                                '--video-rotate='.concat(lt(c)),
                                '--geometry='.concat(pt(v)),
                                '--volume=100',
                                '--rtsp-transport=udp',
                                p ? '--keepaspect' : '--no-keepaspect',
                                '--no-border',
                            ]
                if (
                    ('main' !== e && 'omxplayer' === u && k.push('--layer', '5'),
                        y > 0 && 'mpv' === u && k.push('--audio-delay='.concat(y)),
                        !0 === n &&
                        ('cvlc' === u
                            ? k.push('--no-audio')
                            : 'mpv' === u
                                ? k.push('--mute')
                                : k.push('-n', '-1')),
                        'mpv' === u &&
                        null !== a &&
                        k.push(
                            '--osd-align-x=center',
                            '--osd-align-y=bottom',
                            '--osd-font-size=30',
                            '--osd-msg1='.concat(a),
                        ),
                        'cvlc' === u && 'main' === e && !0 === i && k.push('-f'),
                        r)
                ) {
                    var w = parseInt(r / 3600),
                        S = parseInt((r - 60 * w) / 60),
                        x = r - 60 * (60 * w + S),
                        P = ''
                            .concat(w < 10 ? '0' + w : w, ':')
                            .concat(S < 10 ? '0' + S : S, ':')
                            .concat(x < 10 ? '0' + x : x)
                    'cvlc' === u
                        ? k.push('--start-time='.concat(r))
                        : 'omxplayer' === u
                            ? k.push('--pos', ''.concat(P))
                            : k.push('--start=+'.concat(P))
                }
                if (
                    (!0 === o &&
                        ('mpv' === u
                            ? Array.isArray(t)
                                ? k.push('--loop-playlist')
                                : k.push('--loop-file')
                            : k.push('--loop')),
                        !0 === s)
                ) {
                    b.debug('Getting video URL for '.concat(t, ' with yt-dlp'))
                    var C = yield Qi(t)
                    if (null === C) return d
                    k.push(C)
                } else Array.isArray(t) ? k.push(...t) : k.push(t)
                if (
                    (ye(qi[e]) &&
                        (b.debug(
                            'Killing previous '.concat(e, ' video process to start new one'),
                        ),
                            qi[e].stdin.pause(),
                            yield cc(qi[e].pid, 'omxplayer' === qi[e].spawnfile),
                            yield Se(250).promise),
                        b.debug(
                            'Playing video file: '
                                .concat(t, ' with parameters ')
                                .concat(k.toString()),
                        ),
                        (qi[e] = (0, se.spawn)(u, k, { stdio: 'pipe' })),
                        qi[e].stdout.on('data', function () { }),
                        qi[e].stderr.on('data', function () { }),
                        qi[e].stdin.setEncoding('utf-8'),
                        qi[e].stdin.on('error', function (e) {
                            b.error(''.concat(u, ' process stdin error: ').concat(e))
                        }),
                        'omxplayer' !== u)
                ) {
                    var I = yield $i(u, qi[e].pid, 'main' !== e || !i)
                    b.debug(
                        'Video Player Window PID : '
                            .concat(u, '-')
                            .concat(qi[e].pid, ', window id: ')
                            .concat(I),
                    ),
                        'cvlc' !== u || !I || ('main' === e && i) || (yield Yi(I, v)),
                        yield Se(500).promise,
                        zn()
                }
                return new Promise((t) => {
                    qi[e].once('exit', function (n, i) {
                        b.debug(
                            ''
                                .concat(u, ' exit event with code:')
                                .concat(n, ',signal:')
                                .concat(i),
                        ),
                            137 !== n && 'SIGKILL' !== i && (xe(f[e]), t(d))
                    })
                })
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        tr = (function () {
            var e = Gi(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'main'
                return (
                    ye(qi[e]) &&
                    (qi[e].stdin.pause(),
                        yield cc(qi[e].pid, 'omxplayer' === qi[e].spawnfile)),
                    !0
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function nr() {
        return (nr = Gi(function* () {
            var e = []
            yield ve('sudo pkill omxplayer'),
                yield ve('sudo pkill cvlc'),
                yield ve('sudo pkill vlc'),
                yield ve('sudo pkill mpv')
            var { stderr: t, stdout: n } = yield ve('which omxplayer')
            t
                ? b.error('omxplayer is not available for playing videos')
                : (b.info('omxplayer is present at '.concat(n)), e.push('omxplayer'))
            var { stderr: i, stdout: r } = yield ve('which cvlc')
            i
                ? b.error('cvlc is not available for playing videos')
                : (b.info('cvlc is present at '.concat(r)), e.push('cvlc'))
            var { stderr: o, stdout: a } = yield ve('which mpv')
            return (
                o
                    ? b.error('mpv is not available for playing videos')
                    : (b.info('mpv is present at '.concat(a)), e.push('mpv')),
                e
            )
        })).apply(this, arguments)
    }
    function ir(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function rr(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    ir(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    ir(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var or = null,
        ar = (function () {
            var e = rr(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 'main',
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = Pc.getState(),
                    r = i.playerLoop.currentZoneCallbackIndex[e],
                    { zoneDurationTimers: o } = i.playerLoop,
                    a = ['--volume=100', '--no-video', '--no-border']
                return (
                    !0 === n &&
                    (Array.isArray(t)
                        ? a.push('--loop-playlist')
                        : a.push('--loop-file')),
                    Array.isArray(t) ? a.push(...t) : a.push(t),
                    sr(),
                    b.debug(
                        'Playing audio file: '
                            .concat(t, ' with parameters ')
                            .concat(a.toString()),
                    ),
                    (or = (0, se.spawn)('mpv', a, { stdio: 'pipe' })).stdout.on(
                        'data',
                        function () { },
                    ),
                    or.stderr.on('data', function () { }),
                    or.stdin.setEncoding('utf-8'),
                    or.stdin.on('error', function (e) {
                        b.error('audio mpv process stdin error: '.concat(e))
                    }),
                    new Promise((t) => {
                        or.once('exit', function (n, i) {
                            b.debug(
                                'audio mpv exit event with code:'
                                    .concat(n, ',signal:')
                                    .concat(i),
                            ),
                                137 !== n && 'SIGKILL' !== i && (xe(o[e]), t(r))
                        })
                    })
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        sr = (function () {
            var e = rr(function* () {
                return ye(or) && (or.stdin.pause(), yield cc(or.pid)), !0
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function cr(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, i)
        }
        return n
    }
    function lr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? cr(Object(n), !0).forEach(function (t) {
                    dr(e, t, n[t])
                })
                : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : cr(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
        }
        return e
    }
    function dr(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                })
                : (e[t] = n),
            e
        )
    }
    function ur(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function pr(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    ur(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    ur(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: yr } = C,
        fr = yr({
            name: L,
            initialState: {
                currentZoneCallbackIndex: {
                    main: 0,
                    side: 0,
                    bottom: 0,
                    zone4: 0,
                    zone5: 0,
                    zone6: 0,
                },
                zoneDurationTimers: {},
                schedulerToBeCalled: {},
                independentPlaylist: {},
                currentPlayingFile: {},
                currentPlayingFileType: {},
                currentTimeout: {},
                currentVideoChunk: 0,
                mainZoneFullscreen: !1,
                audioChannelFree: !0,
                audioChannelOwnerZone: 'none',
                audioPlayingFile: '',
            },
            reducers: {
                resetTimersAndValues: (e) => {
                    for (var t of Object.keys(e.independentPlaylist))
                        e.independentPlaylist[t] = !1
                    for (var n of Object.keys(e.currentZoneCallbackIndex))
                        e.currentZoneCallbackIndex[n] =
                            (e.currentZoneCallbackIndex[n] + 1) % 256
                            ; (e.currentVideoChunk = 0),
                                ((e) => {
                                    ; (e.audioChannelFree = !0),
                                        (e.audioChannelOwnerZone = 'none'),
                                        (e.audioPlayingFile = '')
                                })(e)
                },
                makePreviousCallbackInvalidZone: (e, t) => {
                    var n = t.payload || 'main'
                        ; (e.currentZoneCallbackIndex[n] =
                            (e.currentZoneCallbackIndex[n] + 1) % 256),
                            n === e.audioChannelOwnerZone && (e.audioChannelFree = !0)
                },
                claimAudioChannel: (e, t) => {
                    var { zone: n = 'main', audioPlayingFile: i } = t.payload
                        ; (e.audioChannelFree = !1),
                            (e.audioChannelOwnerZone = n),
                            void 0 !== i && (e.audioPlayingFile = i)
                },
                freeAudioChannel: (e, t) => {
                    var { zone: n = 'main' } = t.payload
                    n === e.audioChannelOwnerZone && (e.audioChannelFree = !0)
                },
                updateCurrentPlayingParameters: (e, t) => {
                    var n = [
                        'zoneDurationTimers',
                        'schedulerToBeCalled',
                        'independentPlaylist',
                        'currentPlayingFile',
                        'currentPlayingFileType',
                        'currentTimeout',
                    ]
                    'main' === t.payload.zoneName &&
                        n.push('currentVideoChunk', 'mainZoneFullscreen')
                    var i = Ie(t.payload, n)
                    return Object.assign(e, i), e
                },
            },
        }),
        {
            makePreviousCallbackInvalidZone: vr,
            claimAudioChannel: gr,
            freeAudioChannel: mr,
        } = fr.actions
    const hr = fr.reducer
    var kr = (e, t, n) => (i) => {
        var {
            zoneName: r,
            schedulerToBeCalled: o,
            zoneDurationTimers: a,
            disableTimeout: s,
            justCallNext: c = !1,
        } = e
        xe(a[r]),
            o[r] &&
            !0 !== s &&
            ((a[r] = Se(n, 'timeout')),
                a[r].promise.then((e) => {
                    ; -1 === e
                        ? k.debug('display next timer cancelled: '.concat(r))
                        : Sr(r, t, !0 === c ? 'justCallNext' : e)
                })),
            zn(),
            i(fr.actions.updateCurrentPlayingParameters(e))
    },
        br = (e, t, n) =>
            (function () {
                var i = pr(function* (i) {
                    var r = []
                    try {
                        var o = yield q.promises.readFile(l.join(X.MEDIA_DIR, t), 'utf8')
                        r = re(JSON.parse(o).assets || [])
                    } catch (e) {
                        return void k.error(
                            'Error in reading/parsing playlist file '.concat(t),
                        )
                    }
                    for (var a of (k.debug(
                        'Calling nested playlist: '.concat(t, ' from main for ').concat(e),
                    ),
                        r)) {
                        var { fileName: s } = a
                        !0 === ot.mediaRss.test(s) && i(Fi('mrss', s)),
                            !0 === ot.localFolderRegex.test(s) && i(Fi('local', s))
                    }
                    i(wo({ zoneName: e, nextFileIndex: 0, playlistFiles: r })),
                        i(Fr({ adPlaying: !1 }))
                    var c = r[0]
                    i(
                        wr(
                            e,
                            c.filename,
                            c.option.main,
                            c.duration,
                            {},
                            c.option,
                            n,
                            'zone',
                        ),
                    )
                })
                return function (e) {
                    return i.apply(this, arguments)
                }
            })(),
        wr = function e() {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 'main',
                n = arguments.length > 1 ? arguments[1] : void 0,
                i = arguments.length > 2 ? arguments[2] : void 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                c = arguments.length > 7 ? arguments[7] : void 0,
                d =
                    arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null,
                u =
                    arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : null,
                p = arguments.length > 10 && void 0 !== arguments[10] && arguments[10]
            return (function () {
                var y = pr(function* (y, f) {
                    var {
                        monitorArrangement: v,
                        displayInterfaces: g,
                    } = f().devicePreferences,
                        m = 0 === v.mode.indexOf('tile') && g.length > 1 ? 2 : 1,
                        h = [{ fullscreen: s }, { fullscreen: s }],
                        b = 0,
                        w = (function () {
                            var e = pr(function* (e) {
                                if (0 !== b) {
                                    for (var n = [], i = 0; i < m; i++) {
                                        var r = h[i].waitForEvent
                                        delete h[i].waitForEvent
                                        var { mediaCompletionPromise: o } = yield gn(
                                            'setZones',
                                            h[i],
                                            i,
                                            r,
                                        )
                                        r && n.push(o)
                                    }
                                    if (0 !== n.length) {
                                        var a = yield Promise.all(n)
                                        Sr(t, e, a)
                                    }
                                }
                            })
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        })(),
                        S =
                            d ||
                            function (e, t, n, i) {
                                b++
                                var r = ht(!0 === ('1' === j || !0 === s) ? 'all' : null, e)
                                if (0 !== r.length)
                                    for (var o = 0; o < r.length; o++) {
                                        var a = 0 === r[o] ? e : 'main'
                                            ; (h[r[o]][a] = lr({ type: t }, n)),
                                                !0 === i && (h[r[o]].waitForEvent = !0)
                                    }
                                else k.info('Ignoring zone for tile configuration, '.concat(e))
                            }
                    y(vr(t))
                    var { subAssets: x } = f().playerFeeds,
                        P = yield xi(n, x),
                        C = f().playerTicker
                    !0 === P.fromFeed && y(Ti(n))
                    var I = P.duration ? P.duration : r
                    I = 1 === I ? 2 : I
                    var {
                        zoneDurationTimers: A,
                        schedulerToBeCalled: O,
                        currentPlayingFile: T,
                        currentPlayingFileType: D,
                        currentTimeout: R,
                        currentZoneCallbackIndex: F,
                        currentVideoChunk: _,
                        independentPlaylist: E,
                    } = f().playerLoop,
                        {
                            remotePlayOn: N,
                            currentLayout: j,
                            playlistFilesObj: M,
                            playingPlaylistType: L,
                            nextFileIndexObj: K,
                        } = f().playerMain,
                        U = K[t],
                        z = M[t],
                        W = F[t],
                        { adPlaying: V, adsEnabled: H } = f().playerAdvt,
                        { availablePlayers: B } = f().deviceHardware,
                        { enableLog: G } = f().devicePreferences,
                        { licensed: q } = f().deviceStatus,
                        { selectedVideoPlayer: J, timeToStopVideo: Z } = f().mediaSettings
                    if (
                        (k.debug(
                            'Zone: '
                                .concat(t, ', Playing next file: ')
                                .concat(P.filename, ' of type ')
                                .concat(P.assetType, ' for duration ')
                                .concat(I, ' seconds;')
                                .concat(W, ';')
                                .concat(_),
                        ),
                            'main' === t)
                    ) {
                        !0 === G &&
                            Os('file', 'play', ''.concat(P.filename, '/').concat(I)),
                            Rs(P.filename)
                        var { bannerText: $, bannerTextInProgress: Y } = f().playerTicker
                        a.bannerText && !0 === $
                            ? (y($t(a.bannerText)), y(Vt(!0)))
                            : P.banner && !0 === q
                                ? (y(Yt()), y(Vt(!0)))
                                : !0 === Y && (y(Xt()), y(Vt(!1)))
                    }
                    var Q,
                        ee = {
                            zoneName: t,
                            currentPlayingFile: lr({}, T),
                            currentPlayingFileType: lr({}, D),
                            currentTimeout: lr({}, R),
                            currentVideoChunk: _,
                            schedulerToBeCalled: lr({}, O),
                            zoneDurationTimers: lr({}, A),
                            independentPlaylist: lr({}, E),
                            disableTimeout: !1,
                        }
                    if (
                        ((ee.currentPlayingFile[t] = P.filename),
                            (ee.currentPlayingFileType[t] = P.assetType),
                            (ee.currentTimeout[t] = 1e3 * I),
                            'main' === t)
                    ) {
                        ee.mainZoneFullscreen = s
                        var te = Object.keys(ee.currentPlayingFile),
                            ne = nt[j]
                        for (var ie of te)
                            -1 === ne.indexOf(ie) &&
                                'main' !== ie &&
                                (k.debug('Zone deleted from currentPlayingParameters obj', ie),
                                    delete ee.currentPlayingFile[ie],
                                    delete ee.currentPlayingFileType[ie],
                                    delete ee.currentTimeout[ie],
                                    delete ee.schedulerToBeCalled[ie],
                                    xe(ee.zoneDurationTimers[ie]),
                                    delete ee.zoneDurationTimers[ie],
                                    delete ee.independentPlaylist[ie])
                    }
                    ee.schedulerToBeCalled[t] = c
                    var { audioPlayingFile: re, audioChannelFree: oe } = f().playerLoop
                    switch (P.assetType) {
                        case 'video':
                        case 'stream':
                            var ae = P.filepath
                                ; -1 !== l.basename(ae).indexOf('.mkv') && (J = 'cvlc'),
                                    'chrome' !== J &&
                                    P.absoluteFilepath &&
                                    (ae = P.absoluteFilepath)
                            var se = a[t] || ('main' !== t && !0 !== oe),
                                ce = 3e5,
                                le = 0,
                                de = 0
                            0 !== I && 10 !== I && (ce = 1e3 * (I + 10))
                            var ue = {}
                            if (
                                !(
                                    ('main' === t && Z) ||
                                    !0 === H ||
                                    !0 === N ||
                                    !0 === P.fromFeed ||
                                    ('main' === t && '1' !== j && 0 !== j.indexOf('2ap'))
                                )
                            ) {
                                if (
                                    !0 === Array.isArray(z) &&
                                    ('mpv' === J || ('cvlc' === J && 'main' === t))
                                ) {
                                    ; (ue.filepath = [ae]),
                                        (ue.loopAll = 0 === U),
                                        (ue.fileDurations = [1e3 * (P.duration ? P.duration : r)])
                                    for (var pe = U; pe < z.length - 1;) {
                                        if (
                                            !(
                                                z[(pe = (pe + 1) % z.length)] &&
                                                z[pe].filename &&
                                                z[pe].filename.match(ot.videoRegex)
                                            )
                                        ) {
                                            pe--
                                            break
                                        }
                                        ue.filepath.push(l.join(X.MEDIA_DIR, z[pe].filename)),
                                            (ce += 1e3 * parseInt(z[pe].duration || 300)),
                                            ue.fileDurations.push(
                                                1e3 * parseInt(z[pe].duration || 300),
                                            )
                                    }
                                    ; (ue.loopAll = ue.loopAll && pe === z.length - 1),
                                        ue.filepath.length > 1 &&
                                        k.info(
                                            'Merged videos for play: '.concat(
                                                ue.filepath.toString(),
                                            ),
                                        ),
                                        (ae = ue.filepath),
                                        pe !== U &&
                                        (y(wo({ zoneName: t, nextFileIndex: pe })),
                                            y(Fr({ adPlaying: !1 })))
                                }
                                !0 === Array.isArray(z) &&
                                    1 === z.length &&
                                    z[0].filename &&
                                    z[0].filename.match(ot.videoRegex) &&
                                    (ue.loopAll = !0),
                                    'main' === t && -1 !== L.indexOf('play-once')
                                        ? (ue.loopAll = !1)
                                        : null === c && (ue.loopAll = !0),
                                    (ee.disableTimeout = ue.loopAll)
                            }
                            'main' === t
                                ? (Z &&
                                    !0 !== V &&
                                    ((ce = 1e3 * Z),
                                        (le = _ * Z),
                                        I < (de = _ + 1) * Z && (de = 0)),
                                    (ee.currentVideoChunk = de),
                                    k.debug(
                                        'Video parameters: '
                                            .concat(le, ',')
                                            .concat(ce, ',')
                                            .concat(de),
                                    ),
                                    k.debug(
                                        'Calling selected video player for playVideo, '.concat(J),
                                    ),
                                    !0 !== se &&
                                    (yield Pr(), y(gr({ audioPlayingFile: ae, zone: t }))),
                                    'chrome' === J && 'stream' !== P.assetType
                                        ? S(
                                            t,
                                            'video',
                                            {
                                                path: ae,
                                                text:
                                                    !a.bannerText || (C && C.bannerText)
                                                        ? null
                                                        : a.bannerText,
                                                mute: se,
                                                loop: ue.loopAll,
                                                startTime: le,
                                            },
                                            !0,
                                        )
                                        : (s ? yield An() : yield In(t),
                                            er(
                                                t,
                                                ae,
                                                se,
                                                s,
                                                le,
                                                ue.loopAll,
                                                !a.bannerText || (C && C.bannerText)
                                                    ? null
                                                    : a.bannerText,
                                                ue.fileDurations,
                                            ).then((e) => {
                                                Sr(t, W, e)
                                            })))
                                : !0 !== s
                                    ? (!0 !== se &&
                                        (yield Pr(), y(gr({ audioPlayingFile: ae, zone: t }))),
                                        'chrome' === J && 'stream' !== P.assetType
                                            ? S(
                                                t,
                                                'video',
                                                {
                                                    path: ae,
                                                    mute: se,
                                                    loop: ue.loopAll,
                                                    text:
                                                        !a.bannerText || (C && C.bannerText)
                                                            ? null
                                                            : a.bannerText,
                                                },
                                                null !== c,
                                            )
                                            : (yield In(t),
                                                er(
                                                    t,
                                                    ae,
                                                    se,
                                                    s,
                                                    le,
                                                    ue.loopAll,
                                                    !a.bannerText || (C && C.bannerText)
                                                        ? null
                                                        : a.bannerText,
                                                    ue.fileDurations,
                                                ).then((e) => {
                                                    null !== c
                                                        ? Sr(t, W, e)
                                                        : k.debug(
                                                            'Ignoring callback from video for '
                                                                .concat(t, ' for ')
                                                                .concat(n),
                                                        )
                                                })))
                                    : (y(mr({ zone: t })), xr(t)),
                                (Q = ce)
                            break
                        case 'audio':
                        case 'radio':
                            if ('main' !== t && !0 !== oe) {
                                k.warn(
                                    'audio channel is not free to play  '
                                        .concat(t, ', ')
                                        .concat(P.filepath),
                                ),
                                    (Q = 1),
                                    (ee.justCallNext = !0)
                                break
                            }
                            var ye = P.filepath
                            if (
                                ('chrome' !== J &&
                                    P.absoluteFilepath &&
                                    (ye = P.absoluteFilepath),
                                    k.debug('Audio File Path is :', ye),
                                    !0 === a[t])
                            ) {
                                yield Pr()
                                var fe = 0 !== I && 10 !== I ? 1e3 * (I + 10) : 3e5
                                'chrome' === J
                                    ? S(t, 'audio', { path: P.filepath, loop: !1 }, !0)
                                    : ar(t, ye, !1).then((e) => {
                                        Sr(t, W, e)
                                    }),
                                    (Q = fe)
                            } else re !== P.filepath && (yield Pr(), 'chrome' === J ? S(t, 'audio', { path: P.filepath, loop: !0 }, !1) : ar(t, ye, !0)), (Q = 1e3), (ee.justCallNext = !0)
                            y(gr({ audioPlayingFile: P.filepath, zone: t }))
                            break
                        case 'image':
                        case 'text':
                            'text' === P.assetType
                                ? S(t, 'text', { text: P.banner, style: P.style })
                                : P.banner || (a.bannerText && (!C || !C.bannerText))
                                    ? S(t, 'image-text', {
                                        path: P.filepath,
                                        text: P.banner || a.bannerText,
                                    })
                                    : S(t, 'image', { path: P.filepath }),
                                (Q = 1e3 * I)
                            break
                        case 'html':
                        case 'weblink':
                            S(t, 'iframe', { path: P.filepath }), (Q = 1e3 * I)
                            break
                        case 'pdf':
                            !0 === a[t] && -1 !== B.pdf.indexOf('evince')
                                ? (s ? yield An() : yield In(t), Wi(P.filepath, a.subduration))
                                : S(t, 'pdf', { path: P.filepath }),
                                (Q = 1e3 * (I + 3))
                            break
                        case 'zip':
                            S(t, 'iframe', {
                                path: 'http://localhost:8000/media/_'.concat(
                                    P.filename.replace(/(.zip|.gz|.bz2)/g, '.repo'),
                                    '/index.html',
                                ),
                            }),
                                (Q = 1e3 * I)
                            break
                        case 'cors':
                        case 'tv':
                            if (
                                (s ? yield An() : yield In(t),
                                    yield Pr(),
                                    'tv' !== P.assetType || ('mpv' !== J && 'cvlc' !== J))
                            )
                                if ('tv' === P.assetType && !0 === kt(P.filepath)) {
                                    var ve = a[t] || ('main' !== t && !0 !== oe)
                                    !0 !== ve && y(gr({ audioPlayingFile: P.filepath, zone: t })),
                                        S(
                                            t,
                                            'iframe',
                                            { path: P.filepath, assetType: 'weblink', mute: ve },
                                            !0,
                                        )
                                } else
                                    yield gi(
                                        t,
                                        P.linkFileJson.link,
                                        {
                                            videoWindowSize: s
                                                ? vt(f()).fullScreen
                                                : 'main' === t
                                                    ? vt(f()).videoWindow
                                                    : gt(f())[t],
                                            orientation: lt(f()),
                                            urlReloadDisable: f().mediaSettings.urlReloadDisable,
                                            kioskMode: s,
                                            zoom: P.linkFileJson.zoom,
                                            keystrokes: P.linkFileJson.keystrokes,
                                            keyDelay: P.linkFileJson.keyDelay,
                                            scroll: P.linkFileJson.scroll,
                                            headers: P.linkFileJson.weblinkHeaders,
                                        },
                                        !1,
                                        'tv' === P.assetType,
                                    )
                            else {
                                var ge = a[t] || ('main' !== t && !0 !== oe)
                                er(t, P.linkFileJson.link, ge, s, 0, !1, null, [], !0).then(
                                    (e) => {
                                        Sr(t, W, e)
                                    },
                                )
                            }
                            Q = 1e3 * I
                            break
                        case 'playlist':
                            if (c === Ki) {
                                k.error(
                                    'Skipping playlist type inside nested playlist play for '.concat(
                                        P.filename,
                                    ),
                                ),
                                    (Q = 1)
                                break
                            }
                            !0 === i &&
                                (k.info(
                                    'Running independent playlist '
                                        .concat(P.filename, ' for zone: ')
                                        .concat(t),
                                ),
                                    (ee.independentPlaylist[t] = !0)),
                                y(br(t, P.filename, s)),
                                (Q = 1e3 * I)
                            break
                        default:
                            k.error(
                                'File type not supported, for file '
                                    .concat(n, ', ')
                                    .concat(P.assetType),
                            ),
                                (Q = 1)
                    }
                    if (
                        ((ee.currentTimeout[t] = Q), y(kr(ee, W, Q || 1e4)), !(Q < 1e3))
                    ) {
                        if ('main' === t)
                            for (var me of nt[j]) {
                                var he = o[me],
                                    { independentPlaylist: ke } = f().playerLoop
                                if (!0 !== ke[me])
                                    if (s) yield y(Cr(me, !0))
                                    else if (he && !1 === p) {
                                        yield y(Cr(me))
                                        var be =
                                            he.match(ot.mediaRss) || he.match(ot.localFolderRegex)
                                                ? 'rss'
                                                : null
                                        yield y(e(me, he, a[me], 0, {}, a, s, be, S))
                                    }
                            }
                        if (null === d && (w(W), null !== u)) {
                            var we = yield xi(u.filename, x)
                            'cors' === we.assetType &&
                                gi(
                                    t,
                                    we.linkFileJson.link,
                                    {
                                        videoWindowSize: u.fullscreen
                                            ? vt(f()).fullScreen
                                            : 'main' === t
                                                ? vt(f()).videoWindow
                                                : gt(f())[t],
                                        orientation: lt(f()),
                                        urlReloadDisable: f().mediaSettings.urlReloadDisable,
                                        kioskMode: u.fullscreen,
                                        zoom: we.linkFileJson.zoom,
                                        keystrokes: we.linkFileJson.keystrokes,
                                        keyDelay: we.linkFileJson.keyDelay,
                                        scroll: we.linkFileJson.scroll,
                                        headers: we.linkFileJson.weblinkHeaders,
                                    },
                                    !0,
                                )
                        }
                    }
                })
                return function (e, t) {
                    return y.apply(this, arguments)
                }
            })()
        },
        Sr = (function () {
            var e = pr(function* (e, t, n) {
                var {
                    schedulerToBeCalled: i,
                    zoneDurationTimers: r,
                    currentPlayingFileType: o,
                    currentPlayingFile: a,
                    currentTimeout: s,
                } = Pc.getState().playerLoop
                if ('timeout' === n || 'stop' === n)
                    switch (o[e]) {
                        case 'video':
                        case 'stream':
                            k.warn(
                                'Watchdog Timeout expired, killing video process for '
                                    .concat(e, ': ')
                                    .concat(a[e], ', ')
                                    .concat(s[e]),
                            ),
                                yield xr(e)
                            break
                        case 'audio':
                            k.warn(
                                'Watchdog Timeout expired, killing audio process for '
                                    .concat(e, ': ')
                                    .concat(a[e], ', ')
                                    .concat(s[e]),
                            ),
                                yield Pr()
                            break
                        case 'pdf':
                            Vi()
                            break
                        case 'tv':
                        case 'cors':
                            yield xr(e), yield mi(e)
                            break
                        default:
                            k.debug(
                                'Play completion event: '
                                    .concat(e, ':')
                                    .concat(o[e], ', ')
                                    .concat(a[e], ', ')
                                    .concat(s[e]),
                            )
                    }
                if ((xe(r[e]), 'function' == typeof i[e]))
                    k.debug('api-kiosk callback function has to be called'), i[e]()
                else
                    switch (i[e]) {
                        case 'main':
                            Li(e, t)
                            break
                        case 'zone':
                            Ki(e, t)
                            break
                        case 'rss':
                            ; ((e, t) => {
                                var {
                                    playlistFilesObj: n,
                                    nextFileIndexObj: i,
                                } = Pc.getState().playerMain,
                                    {
                                        currentZoneCallbackIndex: r,
                                        mainZoneFullscreen: o,
                                    } = Pc.getState().playerLoop
                                if (null === t || r[e] === t) {
                                    var a = n.main[i.main][e],
                                        s = n.main[i.main].option[e]
                                    if (!a) throw Error('SubScheduler, Playlist row is empty')
                                    Pc.dispatch(mr({ zone: e })),
                                        k.debug(
                                            'calling displayNext for '.concat(
                                                e,
                                                ' from rss subScheduler',
                                            ),
                                        ),
                                        Pc.dispatch(wr(e, a, s, 0, {}, {}, o, 'rss'))
                                } else
                                    k.warn(
                                        '*** skipping zone rss scheduler for '
                                            .concat(e, ' with callIndex: ')
                                            .concat(t, ' mismatch with ')
                                            .concat(r[e]),
                                    )
                            })(e, t)
                            break
                        default:
                            k.error(
                                'Unable to find the scheduler callback for '
                                    .concat(e, ';index: ')
                                    .concat(t),
                            )
                    }
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        xr = (function () {
            var e = pr(function* (e) {
                yield tr(e), yield Pn(e)
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Pr = (function () {
            var e = pr(function* () {
                yield sr(), yield Cn()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Cr = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            return (function () {
                var n = pr(function* (n, i) {
                    var {
                        zoneDurationTimers: r,
                        audioChannelOwnerZone: o,
                    } = i().playerLoop
                    n(vr(e)),
                        xe(r[e]),
                        !0 === t && (yield In(e)),
                        yield mi(e),
                        yield xr(e),
                        yield Vi(),
                        e === o && (yield Pr())
                })
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            })()
        },
        Ir = () =>
            (function () {
                var e = pr(function* (e, t) {
                    var { zoneDurationTimers: n } = t().playerLoop
                    for (var i of Object.values(n)) xe(i)
                    for (var r of (e(fr.actions.resetTimersAndValues()),
                        yield An(),
                        yield hi(),
                        tt))
                        yield xr(r)
                    yield Vi(), yield Pr()
                })
                return function (t, n) {
                    return e.apply(this, arguments)
                }
            })()
    function Ar(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var { createSlice: Or } = C,
        Tr = (e) => {
            for (var t of ((e.adsEnabled = !1), e.adsObjectArray)) t.adReady = !1
            e.adPlaying = !1
        },
        Dr = Or({
            name: K,
            initialState: { adsObjectArray: [], adsEnabled: !1, adPlaying: !1 },
            reducers: {
                updateAddAdsAndSchedule(e, t) {
                    Array.isArray(t.payload) && t.payload.length
                        ? ((e.adsEnabled = !0), (e.adsObjectArray = t.payload))
                        : (Tr(e), (e.adsObjectArray.length = 0))
                },
                updateRescheduleAllAds(e) {
                    for (var t of e.adsObjectArray) (t.index = 0), (t.adReady = !1)
                    e.adsEnabled = 0 !== e.adsObjectArray.length
                },
                updateRescheduleAd(e, t) {
                    e.adsObjectArray[t.payload].adReady = !1
                },
                pauseAds: {
                    reducer(e) {
                        Tr(e)
                    },
                    prepare: () => (Mr(), { payload: null }),
                },
                stopAds: {
                    reducer(e) {
                        Tr(e), (e.adsObjectArray.length = 0)
                    },
                    prepare: () => (Mr(0), { payload: null }),
                },
                adReady(e, t) {
                    var n = e.adsObjectArray[t.payload]
                        ; (n.currentAdCount = 0), (n.adReady = !0)
                },
                updateAdState(e, t) {
                    if (!0 === t.payload.adPlaying) {
                        var n = e.adsObjectArray[t.payload.index]
                            ; (n.index = (n.index + 1) % n.files.length),
                                (n.currentAdCount += 1),
                                !0 !== n.noMainPlay && (e.adPlaying = !0)
                    } else e.adPlaying = !1
                },
            },
        }),
        { adReady: Rr, updateAdState: Fr, pauseAds: _r, stopAds: Er } = Dr.actions
    const Nr = Dr.reducer
    var jr = [],
        Mr = (e) => {
            for (var t of jr) xe(t)
            void 0 !== e && (jr.length = e)
        },
        Lr = (e, t) =>
            (function () {
                var n,
                    i =
                        ((n = function* (n, i) {
                            if (
                                (xe(jr[e]),
                                    (jr[e] = Se(t, e)),
                                    n(Dr.actions.updateRescheduleAd(e)),
                                    -1 !== (yield jr[e].promise))
                            ) {
                                k.debug('ad ready for index: '.concat(e)), n(Rr(e))
                                var { playlistPlaying: r, currentLayout: o } = i().playerMain
                                if (!0 !== r) {
                                    k.debug(
                                        'Playlist is not playing, hence starting ad asset: ',
                                        l,
                                        u,
                                    )
                                    var { adsObjectArray: a } = i().playerAdvt,
                                        s = a[e],
                                        c = s.files[s.index],
                                        { filename: l, option: d, duration: u, fullscreen: p } = c,
                                        y = Ie(c, nt[o])
                                    n(Fr({ index: e, adPlaying: !0 })),
                                        wr('main', l, d.main, parseInt(u), y, d, p, 'main')
                                }
                            } else k.debug('ad timer cancelled for index: '.concat(e))
                        }),
                            function () {
                                var e = this,
                                    t = arguments
                                return new Promise(function (i, r) {
                                    var o = n.apply(e, t)
                                    function a(e) {
                                        Ar(o, i, r, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        Ar(o, i, r, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            })
                return function (e, t) {
                    return i.apply(this, arguments)
                }
            })()
    const Kr = require('rimraf')
    function Ur(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var { createSlice: zr } = C,
        Wr = zr({
            name: R,
            initialState: {
                diskSpaceUsed: 'NA',
                diskSpaceAvailable: 'NA',
                totalDiskSpace: 'NA',
                wgetSpeed: 'NA',
                wgetBytes: 'NA',
                downloadInProgress: !1,
                lastUpload: 0,
            },
            reducers: {
                updateStorageUseValues(e, t) {
                    t.payload &&
                        (t.payload.diskSpaceUsed &&
                            (e.diskSpaceUsed = t.payload.diskSpaceUsed),
                            t.payload.diskSpaceAvailable &&
                            (e.diskSpaceAvailable = t.payload.diskSpaceAvailable),
                            t.payload.totalDiskSpace &&
                            (e.totalDiskSpace = t.payload.totalDiskSpace))
                },
                downloadStarted(e) {
                    ; (e.downloadInProgress = !0), (e.wgetSpeed = 0), (e.wgetBytes = 0)
                },
                downloadProgress(e, t) {
                    ; (e.wgetSpeed = t.payload.wgetSpeed),
                        (e.wgetBytes = t.payload.wgetBytes)
                },
                downloadEnded(e, t) {
                    ; (e.downloadInProgress = !1),
                        t.payload &&
                        t.payload.lastUpload &&
                        (e.lastUpload = t.payload.lastUpload)
                },
            },
        }),
        {
            downloadStarted: Vr,
            downloadProgress: Hr,
            downloadEnded: Br,
        } = Wr.actions
    const Gr = Wr.reducer
    var qr = () =>
        (function () {
            var e,
                t =
                    ((e = function* (e) {
                        var { stdout: t, stderr: n } = yield ve('df -h /')
                            ; (!n && t) || w.error('updateDiskStatus stderr: '.concat(n))
                        var i = t.replace(/\s{2,}/g, ' ').split(' ')
                        w.info(
                            'the total SD card usage, total: '
                                .concat(i[i.length - 5], ',used: ')
                                .concat(i[i.length - 4], ',available: ')
                                .concat(i[i.length - 3]),
                        ),
                            e(
                                Wr.actions.updateStorageUseValues({
                                    totalDiskSpace: i[i.length - 5],
                                    diskSpaceUsed: i[i.length - 2],
                                    diskSpaceAvailable: i[i.length - 3],
                                }),
                            )
                    }),
                        function () {
                            var t = this,
                                n = arguments
                            return new Promise(function (i, r) {
                                var o = e.apply(t, n)
                                function a(e) {
                                    Ur(o, i, r, a, s, 'next', e)
                                }
                                function s(e) {
                                    Ur(o, i, r, a, s, 'throw', e)
                                }
                                a(void 0)
                            })
                        })
            return function (e) {
                return t.apply(this, arguments)
            }
        })()
    function Jr(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Zr(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Jr(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Jr(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var $r,
        Yr = 0
    function Xr(e, t) {
        return Qr.apply(this, arguments)
    }
    function Qr() {
        return (Qr = Zr(function* (e, t) {
            if (!e || !t) throw new Error('There is no group to fetch')
            var n = {}
            try {
                var i = yield q.promises.readFile(
                    ''.concat(X.ROOT_DIR, '/package.json'),
                )
                n = JSON.parse(i) || {}
            } catch (e) {
                var r = 'package.json read error: '.concat(e)
                return w.error(r), Os('player', 'error', r), yield -1
            }
            Yr > 0 && (w.info('killing previous wget: '.concat($r.pid)), $r.kill())
            var o = [
                '-rNnHd',
                '--no-directories',
                '--no-if-modified-since',
                '--follow-tags=a',
                '--no-parent',
                '--no-check-certificate',
                '-t',
                '20',
                '--waitretry',
                '60',
                '--retry-connrefused',
                '--no-cache',
            ]
            o.push('-R', t),
                o.push(
                    ''.concat(n.media_server, '/sync_folders/').concat(e, '/').concat(t),
                ),
                Yr++,
                ($r = (0, se.spawn)('wget', o, { cwd: X.MEDIA_DIR, stdio: 'pipe' })),
                w.info(
                    'Spawning wget '.concat(o.toString(), '; with PID ').concat($r.pid),
                ),
                $r.on('error', function (e) {
                    w.error('wget process error event: '.concat(e))
                })
            var a = 0,
                s = 0,
                c = 0
            $r.stdout.on('data', (e) => {
                w.info(e.toString())
            }),
                $r.stderr.on('data', (e) => {
                    var t = (e && e.toString()) || '',
                        n = t.match(/%/g)
                    if (n) {
                        s += 50 * n.length
                        var i = t.indexOf('%'),
                            r = t
                                .slice(i + 1)
                                .trim()
                                .match(/[\w.]+/)
                        r && r.length > 0 && (a = r[0])
                    }
                    var o = Date.now()
                    if (o - c > 1e4) {
                        c = o
                        var l = s > 1e3 ? (s / 1e3).toFixed(2) + 'M' : s + 'K'
                        w.debug('wgetBytes: '.concat(l, ',wgetSpeed: ').concat(a)),
                            Pc.dispatch(Hr({ wgetBytes: l, wgetSpeed: a })),
                            Pc.dispatch(Qt())
                    }
                })
            try {
                return new Promise((e, t) => {
                    $r.on('exit', (n, i) => {
                        if (
                            (w.info(
                                'wget stopped with code '
                                    .concat(n, ' and signal ')
                                    .concat(i, '; downloadInProgressCount: ')
                                    .concat(Yr),
                            ),
                                --Yr > 0)
                        ) {
                            var r = 'looks like another wget cancelled this wget, downloadInProgressCount: '.concat(
                                Yr,
                            )
                            return w.warn(r), void t(r)
                        }
                        e(n)
                    })
                })
            } catch (e) {
                throw new Error(e)
            }
        })).apply(this, arguments)
    }
    const eo = require('cheerio')
    function to(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function no(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    to(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    to(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var io = (function () {
        var e = no(function* () {
            try {
                var e = (yield q.promises.readdir(X.MEDIA_DIR)).filter(
                    (e) => ot.noticeRegex.test(e) || /\.ejs$/.test(e),
                )
                for (var t of e) {
                    var n = yield q.promises.readFile(l.join(X.MEDIA_DIR, t), {
                        encoding: 'utf-8',
                    }),
                        i = '../piSignagePro/app/views/css/'
                    if (-1 !== n.indexOf(i)) {
                        var r = n.replace(new RegExp(i, 'g'), '/app/css/')
                        yield q.promises.writeFile(l.join(X.MEDIA_DIR, t), r, 'utf8')
                    }
                }
            } catch (e) {
                w.error('modifyHtmlFiles error: '.concat(e))
            }
        })
        return function () {
            return e.apply(this, arguments)
        }
    })(),
        ro = (function () {
            var e = no(function* () {
                try {
                    var e = (yield q.promises.readdir(X.MEDIA_DIR)).filter(
                        (e) => ot.customLayoutRegex.test(e) && -1 === e.indexOf('-p2.html'),
                    )
                    for (var t of e) {
                        var n = yield q.promises.readFile(l.join(X.MEDIA_DIR, t), {
                            encoding: 'utf-8',
                        }),
                            i = eo.load(n),
                            r = i('#customcss').html(),
                            o = i('#customcss2').html(),
                            a = i('#properties').data(),
                            s = i('#full').html(),
                            c = yield q.promises.readFile(
                                l.join(X.LAYOUTS_DIR, 'custom_layout.html'),
                                { encoding: 'utf-8' },
                            ),
                            d = eo.load(c)
                        d('#emessage').after(
                            '<div id="properties" style="display:none;">&nbsp;</div>',
                        ),
                            d('#properties').attr('data-properties', a),
                            r &&
                            d('head').append(
                                '<style id="customcss" type="text/css">'.concat(
                                    r,
                                    '</style>',
                                ),
                            ),
                            o &&
                            d('head').append(
                                '<style id="customcss2" type="text/css">'.concat(
                                    o,
                                    '</style>',
                                ),
                            ),
                            s && d('#full').append(s),
                            yield q.promises.writeFile(
                                l.join(
                                    X.MEDIA_DIR,
                                    ''.concat(l.basename(t, '.html'), '-p2.html'),
                                ),
                                d.html(),
                                'utf8',
                            )
                    }
                } catch (e) {
                    w.error('checkAndModifyCustomLayout error: '.concat(e))
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function oo(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ao(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    oo(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    oo(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    function so() {
        return co.apply(this, arguments)
    }
    function co() {
        return (
            (co = ao(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : X.MEDIA_DIR
                for (var n of (e || (e = yield q.promises.readdir(t)), e))
                    if (n.match(ot.zipfileRegex)) {
                        var i = l.join(t, n),
                            r = l.join(t, '_'.concat(l.basename(n, l.extname(n)), '.repo'))
                        try {
                            yield q.promises.access(r), yield ve('sudo rm -rf '.concat(r))
                        } catch (e) {
                            k.debug('No need to remove repo directory: '.concat(e))
                        }
                        yield ve('unzip -o '.concat(i, ' -d ').concat(r), !0)
                        var o = yield q.promises.readdir(r)
                        if (1 === o.length) {
                            var a = yield q.promises.stat(o[0])
                            a &&
                                a.isDirectory() &&
                                (yield ve('mv ' + r + '/' + o[0] + '/* ' + r + '/', !0),
                                    (o = yield q.promises.readdir(r)))
                        }
                        if (o && -1 === o.indexOf('index.html')) {
                            var s = o.find((e) => /\.html$/i.test(e))
                            s &&
                                (yield q.promises.symlink(
                                    l.join(r, s),
                                    l.join(r, 'index.html'),
                                ))
                        }
                    }
            })),
            co.apply(this, arguments)
        )
    }
    function lo(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function uo(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    lo(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    lo(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    function po(e) {
        function t(e) {
            if (Object(e) !== e)
                return Promise.reject(new TypeError(e + ' is not an object.'))
            var t = e.done
            return Promise.resolve(e.value).then(function (e) {
                return { value: e, done: t }
            })
        }
        return (
            (po = function (e) {
                ; (this.s = e), (this.n = e.next)
            }),
            (po.prototype = {
                s: null,
                n: null,
                next: function () {
                    return t(this.n.apply(this.s, arguments))
                },
                return: function (e) {
                    var n = this.s.return
                    return void 0 === n
                        ? Promise.resolve({ value: e, done: !0 })
                        : t(n.apply(this.s, arguments))
                },
                throw: function (e) {
                    var n = this.s.return
                    return void 0 === n
                        ? Promise.reject(e)
                        : t(n.apply(this.s, arguments))
                },
            }),
            new po(e)
        )
    }
    var yo = ae.promisify(Kr),
        fo = (function () {
            var e = uo(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i =
                        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    { installation: r, secret: o } = Pc.getState().devicePreferences,
                    { loadPlaylistOnCompletion: a } = Pc.getState().mediaSettings
                if (r && o) {
                    Pc.dispatch(Vr())
                    try {
                        var s = parseInt(yield Xr(r, o))
                            ; (0, q.existsSync)(l.join(X.MEDIA_DIR, 'robots.txt')) &&
                                (w.debug('deleting robots.txt file'),
                                    q.promises.unlink(l.join(X.MEDIA_DIR, 'robots.txt'))),
                                w.debug('modifying location for old bootstrap files'),
                                yield io(),
                                w.debug('modifying Custom Layout for player2'),
                                yield ro(),
                                w.debug('extracting Zip files'),
                                yield so()
                        var c = { lastUpload: Date.now() }
                        if (0 === s)
                            w.info(
                                'Copied server files for the group '.concat(
                                    o,
                                    ' successfully.',
                                ),
                            ),
                                Os('player', 'network', 'download done for '.concat(o))
                        else if (
                            (w.error('FAILED COPYING SERVER FILES: '.concat(s)),
                                Os('player', 'network', 'wget download ERROR, '.concat(s)),
                                4 === s && i < 5)
                        ) {
                            var d = i + 1
                            Se(6e4 * d * d).promise.then(() => {
                                w.warn('retrying for download, attempt: '.concat(d)),
                                    fo(e, t, n, d)
                            })
                        }
                        Array.isArray(e) &&
                            e.length > 0 &&
                            ((c.deployedPlaylists = e),
                                w.debug('Deployed playlists: '.concat(JSON.stringify(e))),
                                w.debug('Deployed assets: '.concat(t && t.toString()))),
                            Pc.dispatch(Br(c)),
                            Pc.dispatch(ra(c)),
                            $e(),
                            Xi(),
                            Pc.dispatch(ma())
                        var u = !0 === a && !0 === n
                        Pc.dispatch(ba(u)),
                            !0 !== u && Array.isArray(t) && t.length > 0 && (yield vo(t)),
                            he()
                    } catch (e) {
                        $e(), Pc.dispatch(Br())
                    }
                    Pc.dispatch(Qt())
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        vo = (function () {
            var e = uo(function* (e) {
                w.debug('inside delete unwanted assets: ', e)
                var t = ['_emptynotice.html', '_system_notice.html']
                for (var n of e)
                    n.match(ot.zipfileRegex) &&
                        t.push('_'.concat(l.basename(n, l.extname(n)), '.repo')),
                        n.match(ot.customLayoutRegex) &&
                        t.push(''.concat(l.basename(n, '.html'), '-p2.html'))
                t.push(...e)
                var i = [],
                    r = []
                try {
                    r = yield q.promises.readdir(X.MEDIA_DIR)
                } catch (e) {
                    w.error('Error in reading media-dir:', e)
                }
                var o,
                    a = !1,
                    s = !1
                try {
                    for (
                        var c,
                        d = (function (e) {
                            var t,
                                n,
                                i,
                                r = 2
                            for (
                                'undefined' != typeof Symbol &&
                                ((n = Symbol.asyncIterator), (i = Symbol.iterator));
                                r--;

                            ) {
                                if (n && null != (t = e[n])) return t.call(e)
                                if (i && null != (t = e[i])) return new po(t.call(e))
                                    ; (n = '@@asyncIterator'), (i = '@@iterator')
                            }
                            throw new TypeError('Object is not async iterable')
                        })(r);
                        (a = !(c = yield d.next()).done);
                        a = !1
                    ) {
                        var u = c.value,
                            p = l.join(X.MEDIA_DIR, u)
                        if (-1 === t.indexOf(u) && '.' !== u.charAt(0)) {
                            '_' === u.charAt(0) && u.match(ot.repofileRegex) && (yield yo(p)),
                                i.push(u)
                            try {
                                yield q.promises.unlink(p)
                            } catch (e) {
                                w.error('Unable to delete file from media-dir: ', p)
                            }
                        }
                    }
                } catch (e) {
                    ; (s = !0), (o = e)
                } finally {
                    try {
                        a && null != d.return && (yield d.return())
                    } finally {
                        if (s) throw o
                    }
                }
                i.length > 0
                    ? w.info('Change playlist,deleting files: '.concat(i.toString()))
                    : w.info('Change playlist,nothing to delete'),
                    Pc.dispatch(qr())
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })()
    const go = fo
    function mo(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ho(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    mo(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    mo(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: ko } = C,
        bo = ko({
            name: M,
            initialState: {
                loadNextPlaylist: !1,
                playingPlaylistName: '',
                playingPlaylistType: 'regular',
                playlistPlaying: !1,
                remotePlayOn: null,
                playlistPaused: !1,
                playlistFilesObj: {
                    main: [],
                    side: [],
                    bottom: [],
                    zone4: [],
                    zone5: [],
                    zone6: [],
                },
                nextFileIndexObj: {
                    main: 0,
                    side: 0,
                    bottom: 0,
                    zone4: 0,
                    zone5: 0,
                    zone6: 0,
                },
                lastTimeIndex0Visited: 0,
                currentLayout: '1',
                currentTemplateName: 'custom_layout.html',
                videoWindow: null,
                mainzoneOnly: !1,
                zoneVideoWindow: {},
                errorMessage: null,
            },
            reducers: {
                updateNextIndexAndRows: (e, t) => {
                    var {
                        zoneName: n = 'main',
                        nextFileIndex: i,
                        lastTimeIndex0Visited: r,
                        shuffleArray: o,
                        playlistFiles: a,
                    } = t.payload
                    if (
                        (!0 === Number.isInteger(i) && (e.nextFileIndexObj[n] = i),
                            !0 === Number.isInteger(r) && (e.lastTimeIndex0Visited = r),
                            !0 === Array.isArray(o))
                    )
                        for (var s of (k.debug('shuffle files: '.concat(o.toString())), o))
                            [e.playlistFilesObj[n][s[0]], e.playlistFilesObj[n][s[1]]] = [
                                e.playlistFilesObj[n][s[1]],
                                e.playlistFilesObj[n][s[0]],
                            ]
                    !0 === Array.isArray(a) && (e.playlistFilesObj[n] = a)
                },
                playerStopPlaylist: (e, t) => {
                    ; (e.playlistPlaying = !1),
                        (e.playingPlaylistName = t.payload.playingPlaylistName)
                },
                playerChangePlaylist: (e, t) => {
                    if (!0 !== t.payload.loadNextPlaylist) {
                        ; (e.loadNextPlaylist = !1),
                            (e.playlistPlaying = !0),
                            (e.remotePlayOn = !1),
                            (e.playlistPaused = !1)
                        var n = Ie(t.payload, [
                            'playingPlaylistType',
                            'playingPlaylistName',
                            'currentLayout',
                            'currentTemplateName',
                            'videoWindow',
                            'zoneVideoWindow',
                            'mainzoneOnly',
                        ])
                        Object.assign(e, n),
                            (e.playlistFilesObj = { main: t.payload.playlistFiles }),
                            (e.nextFileIndexObj = { main: t.payload.nextFileIndex }),
                            0 === n.playingPlaylistType.indexOf('play-once') &&
                            (e.loadNextPlaylist = !0)
                    } else e.loadNextPlaylist = !0
                },
                changePlaylistPaused: (e) => {
                    e.playlistPaused = !e.playlistPaused
                },
                playFileOrShowKiosk: (e) => {
                    ; (e.playlistPlaying = !1), (e.remotePlayOn = !0)
                },
                stopFileOrKiosk: (e) => {
                    e.remotePlayOn = !1
                },
            },
        }),
        { updateNextIndexAndRows: wo, playFileOrShowKiosk: So } = bo.actions
    const xo = bo.reducer
    var Po = {
        playlistPlaying: !1,
        nextFileIndex: 0,
        startPlayArguments: [],
        loaded: !1,
    },
        Co = () => {
            ; (Po.playlistPlaying = !1),
                (Po.nextFileIndex = 0),
                (Po.startPlayArguments.length = 0),
                (Po.loaded = !1)
        },
        Io = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (t, n) => {
                var {
                    loaded: i,
                    playlistPlaying: r,
                    nextFileIndex: o,
                    startPlayArguments: a,
                } = Po,
                    s = Object.assign({}, a),
                    { playingPlaylistType: c, nextFileIndexObj: l } = n().playerMain,
                    { assets: d } = n().mediaAssets
                !0 === e
                    ? ('play-once-event' === c ? t(ya()) : 'regular' === c && vo(d),
                        (s.exitFromPlayOnceEvent = -1 !== c.indexOf('play-once')),
                        (s.playingPlaylistType = 'regular'),
                        (s.nextFileIndex = o))
                    : ((s.playingPlaylistType = c), (s.nextFileIndex = l.main)),
                    !0 === i && !0 === r && t(Oo(s))
            }
        },
        Ao = (e) => (t, n) => {
            var { playlistTriggerType: i = 'regular' } = e,
                {
                    nextFileIndexObj: r,
                    playlistPlaying: o,
                    playlistFilesObj: a,
                } = n().playerMain,
                s = r.main,
                c = Object.assign({}, e)
            switch (i) {
                case 'on-completion':
                    if (((Po.startPlayArguments = e), o && a.main.length > 1))
                        return (
                            Object.assign(Po, {
                                playlistPlaying: !0,
                                nextFileIndex: 0,
                                loaded: !0,
                            }),
                            void t(bo.actions.playerChangePlaylist({ loadNextPlaylist: !0 }))
                        )
                    c.playingPlaylistType = 'regular'
                    break
                case 'play-once-domination':
                case 'play-once-event':
                case 'play-once-keypress':
                case 'play-once':
                    Object.assign(Po, {
                        playlistPlaying: o,
                        nextFileIndex: s,
                        loaded: !0,
                    }),
                        (c.playingPlaylistType = i)
                    break
                default:
                    ; (Po.startPlayArguments = e),
                        Object.assign(Po, {
                            playlistPlaying: !0,
                            nextFileIndex: 0,
                            loaded: !0,
                        }),
                        (c.playingPlaylistType = 'regular')
            }
            ; (c.nextFileIndex = 0), t(Oo(c))
        },
        Oo = (e) =>
            (function () {
                var t = ho(function* (t, n) {
                    var {
                        playlistFiles: i,
                        layout: r,
                        videoWindow: o,
                        zoneVideoWindow: a,
                        templateName: s,
                        playlistName: c,
                        ticker: d,
                    } = e,
                        { shuffleContent: u } = n().mediaSettings,
                        p =
                            'regular' === e.playingPlaylistType &&
                            !0 !== e.exitFromPlayOnceEvent
                    delete e.exitFromPlayOnceEvent,
                        yield t(To(p)),
                        p &&
                        t((e, t) => {
                            Mr(), e(Dr.actions.updateRescheduleAllAds())
                            var { adsObjectArray: n } = t().playerAdvt
                            for (var [i, r] of n.entries()) e(Lr(i, r.interval))
                        })
                    var y = {
                        playingPlaylistType: e.playingPlaylistType,
                        playingPlaylistName: c,
                        currentLayout: r,
                        currentTemplateName: s
                            ? ''.concat(l.basename(s, '.html'), '-p2.html')
                            : null,
                        playlistFiles: i,
                        nextFileIndex: e.nextFileIndex,
                    }
                    if (0 === y.nextFileIndex && !0 === u && y.playlistFiles.length > 2)
                        for (var f, v = y.playlistFiles.length; 0 !== v;)
                            (f = Math.floor(Math.random() * v)),
                                (v -= 1),
                                ([y.playlistFiles[v], y.playlistFiles[f]] = [
                                    y.playlistFiles[f],
                                    y.playlistFiles[v],
                                ])
                    if (
                        (null != o
                            ? ((y.videoWindow = {
                                x: parseInt(o.xoffset) || 0,
                                y: parseInt(o.yoffset) || 0,
                                l: parseInt(o.length),
                                w: parseInt(o.width),
                            }),
                                (y.mainzoneOnly = o.mainzoneOnly || !1))
                            : ((y.videoWindow = null), (y.mainzoneOnly = !1)),
                            (y.zoneVideoWindow = {}),
                            null != a)
                    )
                        for (var g of tt)
                            if ('main' !== g) {
                                var m = a[g]
                                y.zoneVideoWindow[g] = m
                                    ? {
                                        x: parseInt(m.xoffset) || 0,
                                        y: parseInt(m.yoffset) || 0,
                                        l: parseInt(m.length),
                                        w: parseInt(m.width),
                                    }
                                    : null
                            }
                    for (var h of (k.info(
                        '*** Changing Playlist *** to '
                            .concat(c, ' ')
                            .concat(new Date().toLocaleString()),
                    ),
                        Os('player', 'playlist', 'Changed playlist to '.concat(c)),
                        t(bo.actions.playerChangePlaylist(y)),
                        ms(),
                        y.playlistFiles)) {
                        var { filename: b } = h
                        for (var w of (!0 === ot.mediaRss.test(b) && t(Fi('mrss', b)),
                            !0 === ot.localFolderRegex.test(b) && t(Fi('local', b)),
                            nt[r])) {
                            var { [w]: S } = h
                            !0 === ot.mediaRss.test(S) && t(Fi('mrss', S)),
                                !0 === ot.localFolderRegex.test(S) && t(Fi('local', S))
                        }
                    }
                    for (
                        var {
                            monitorArrangement: x,
                            displayInterfaces: P,
                        } = n().devicePreferences,
                        C = 0 === x.mode.indexOf('tile') && P.length > 1 ? 2 : 1,
                        I = [],
                        A = 0;
                        A < C;
                        A++
                    )
                        I.push(vn(A))
                    yield Promise.all(I),
                        t(
                            (function () {
                                var e =
                                    arguments.length > 0 && void 0 !== arguments[0]
                                        ? arguments[0]
                                        : { disabled: !0 }
                                return (t, n) => {
                                    var { server: i, availablePlayers: r } = n().deviceHardware,
                                        { licensed: o } = n().deviceStatus,
                                        a = tn(e, n)
                                    if ((t(Zt()), !0 !== a.disabled)) {
                                        var s = Ie(a, [
                                            'behavior',
                                            'textSpeed',
                                            'bannerText',
                                            'isRssFeed',
                                            'rssLink',
                                            'rssEncodeAsBinary',
                                            'useDescription',
                                            'tickerFontSize',
                                            'tickerWidth',
                                            'tickerHeight',
                                            'tickerX',
                                            'tickerY',
                                        ])
                                        if (
                                            ((a.messages = a.messages || ''),
                                                (s.feedDelay = 1e3 * (a.feedDelay || 10)),
                                                (s.tickerHeight = a.tickerHeight || 60),
                                                0 === r.ticker.length &&
                                                'openvg_left' === s.behavior &&
                                                (s.behavior = 'scroll'),
                                                0 === r.ticker.length &&
                                                'openvg_right' === s.behavior &&
                                                (s.behavior = 'scrollRight'),
                                                void 0 !== a.style &&
                                                null !== a.style &&
                                                (s.style = a.style),
                                                t(Wt.actions.setTickerValues(s)),
                                                !0 === s.isRssFeed)
                                        )
                                            t(en())
                                        else if ('slide' === s.behavior)
                                            (s.messages = a.messages.split('\n')),
                                                !0 !== o && s.messages.push(zt(i)),
                                                t(Jt(s.messages))
                                        else {
                                            var c =
                                                a.messages.replace(/\n/g, '   ------   ') +
                                                (!0 !== o ? zt(i) : '')
                                            t(
                                                Wt.actions.setTickerValues({
                                                    messages: [c],
                                                    currentTicker: c,
                                                }),
                                            ),
                                                t($t())
                                        }
                                    }
                                }
                            })(d),
                        )
                    var O = y.playlistFiles[y.nextFileIndex],
                        T = {}
                    for (var D of nt[r]) T[D] = O[D] || null
                    t(
                        wr(
                            'main',
                            O.filename,
                            O.option && O.option.main,
                            parseInt(O.duration),
                            T,
                            O.option,
                            O.fullscreen,
                            'main',
                        ),
                    )
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })(),
        To = (e) =>
            (function () {
                var t = ho(function* (t) {
                    yield t(Ir()), t(Zt()), t(Oi()), e && t(_r())
                })
                return function (e) {
                    return t.apply(this, arguments)
                }
            })(),
        Do = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'none'
            return (function () {
                var t = ho(function* (t) {
                    Co(),
                        t(bo.actions.playerStopPlaylist({ playingPlaylistName: e })),
                        t(To(!0)),
                        ms()
                })
                return function (e) {
                    return t.apply(this, arguments)
                }
            })()
        },
        Ro = function (e, t) {
            var n =
                arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
            return (function () {
                var i = ho(function* (i) {
                    yield i(To()),
                        i(So()),
                        i(Fr({ adPlaying: !1 })),
                        yield Se(1e3).promise,
                        i(wr('main', e, !1, t, {}, {}, !0, n))
                })
                return function (e) {
                    return i.apply(this, arguments)
                }
            })()
        },
        Fo = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (function () {
                var t = ho(function* (t, n) {
                    var { remotePlayOn: i } = n().playerMain
                    !0 === i &&
                        (!0 === e
                            ? t(Io())
                            : (t(bo.actions.stopFileOrKiosk()), yield t(To())))
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
        },
        _o = () => (e, t) => {
            var n = !t().playerMain.playlistPaused
            console.log(n), e(bo.actions.changePlaylistPaused(n))
        },
        Eo = (e) =>
            (function () {
                var t = ho(function* (t, n) {
                    var { playlistFilesObj: i, nextFileIndexObj: r } = n().playerMain,
                        o = i.main,
                        a = r.main
                    switch (e) {
                        case 'backward':
                            return (
                                t(
                                    wo({
                                        nextFileIndex:
                                            o.length > 1 ? (a + o.length - 2) % o.length : 0,
                                    }),
                                ),
                                t(Fr({ adPlaying: !1 })),
                                Sr('main', null, 'stop'),
                                yield 'Stepped backward in the playlist'
                            )
                        case 'forward':
                            return (
                                Sr('main', null, 'stop'),
                                yield 'Stepped forward in the playlist'
                            )
                        case 'pause':
                            return t(_o()), yield 'Playlist paused'
                        default:
                            return yield 'Unknown action'
                    }
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
    function No(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function jo(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    No(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    No(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: Mo } = C,
        Lo = Mo({
            name: F,
            initialState: {
                sleep: { enable: !1, ontime: null, offtime: null },
                tvStatus: !0,
                cecTvStatus: !0,
                cecSupported: !1,
            },
            reducers: {
                setTvOn(e) {
                    e.tvStatus = !0
                },
                setTvOff(e) {
                    e.tvStatus = !1
                },
                setSleepObj(e, t) {
                    Object.assign(e.sleep, t.payload)
                },
                updateCecSupport(e, t) {
                    e.cecSupported = t.payload
                },
                updateCecTvStatus(e, t) {
                    e.cecTvStatus = t.payload
                },
            },
        })
    const Ko = Lo.reducer
    var Uo,
        zo = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (function () {
                var t = jo(function* (t, n) {
                    var i,
                        { cecSupported: r } = n().deviceTv,
                        { stderr: o, stdout: a } = yield ve(
                            'echo scan | cec-client -s -d 1',
                            { timeout: 4e4 },
                            e,
                        )
                    !0 === e && k.info('cec support: '.concat(a, ';stderr: ').concat(o)),
                        o || (a && (a.match(/device #/g) || []).length <= 1)
                            ? ((!0 !== r && !0 !== e) ||
                                k.warn('*** CEC is NOT supported ***'),
                                (i = !1))
                            : ((!1 != !r && !0 !== e) || k.info('cec IS supported'),
                                (i = !0)),
                        t(Lo.actions.updateCecSupport(i))
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
        },
        Wo = function e() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (function () {
                var n = jo(function* (n, i) {
                    var { cecSupported: r, tvStatus: o } = i().deviceTv,
                        {
                            resolution: a,
                            disableCECPowerCheck: s,
                            forceTvOn: c,
                        } = i().devicePreferences
                    if (!0 !== r) return n(Lo.actions.updateCecTvStatus(!0)), !1
                    if ('NTSC' === a || 'PAL' === a || !0 === s) return !1
                    var {
                        stderr: l,
                        stdout: d,
                    } = yield ve('echo "pow 0" | cec-client -s -d 1', { timeout: 2e4 })
                    if (l || !d)
                        return (
                            k.error('getCecStatus error: '.concat(d, ';').concat(l)),
                            n(Lo.actions.updateCecTvStatus(!1)),
                            !1
                        )
                    var u = -1 === d.indexOf('unknown') && -1 === d.indexOf('standby')
                    if (o === u || !0 === t || !1 !== c || d.indexOf('unknown') >= 0)
                        o !== u &&
                            -1 === d.indexOf('unknown') &&
                            k.warn(
                                'CEC status different than desired state, '
                                    .concat(o, ';')
                                    .concat(u, ';')
                                    .concat(d, ';')
                                    .concat(l),
                            ),
                            n(Lo.actions.updateCecTvStatus(u))
                    else {
                        k.warn(
                            'Sending CEC command to TV for correcting the TV state,'
                                .concat(o, ';')
                                .concat(u, ';')
                                .concat(d, ';')
                                .concat(l),
                        )
                        var p =
                            !0 === o
                                ? 'echo "on 0" | cec-client -s -d 1'
                                : 'echo "standby 0" | cec-client -s -d 1'
                        Jo(!0 === o ? 'TVon.py' : 'TVoff.py'),
                            yield ve(p, { timeout: 2e4 }),
                            yield Se(3e3).promise,
                            n(e(!0))
                    }
                    return !0
                })
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            })()
        },
        Vo = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (t, n) => {
                var { tvStatus: i } = n().deviceTv
                if (!1 !== i) {
                    t(Xo()),
                        t(Lo.actions.setTvOff()),
                        t(qn(!1)),
                        t(Jn(!1)),
                        t(Zn(!1)),
                        t(Yt()),
                        !0 !== e && (t(sa()), t(Do('TV_OFF')), he())
                    var { resolution: r, displayInterfaces: o } = n().devicePreferences
                    'NTSC' !== r && 'PAL' !== r && Go(o)
                }
            }
        },
        Ho = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (function () {
                var t = jo(function* (t, n) {
                    var { tvStatus: i } = n().deviceTv
                    if (!0 !== i) {
                        t(Lo.actions.setTvOn())
                        var {
                            resolution: r,
                            orientation: o,
                            monitorArrangement: a,
                            displayInterfaces: s,
                        } = n().devicePreferences
                        if ('NTSC' !== r && 'PAL' !== r) {
                            yield qo(r, o, a),
                                0 === a.mode.indexOf('tile') &&
                                s.length > 1 &&
                                (me({ tvStatus: !0 }), Ls())
                            var { cecSupported: c } = n().deviceTv
                            c ||
                                Se(1e4).promise.then(() => {
                                    t(zo())
                                })
                        }
                        t($t()),
                            t(qn(!0)),
                            t(Jn(!0)),
                            t(Zn(!0)),
                            !0 !== e && (t(ba(!1)), ms()),
                            t(Qo())
                    }
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
        },
        Bo = !1,
        Go = (function () {
            var e = jo(function* (e) {
                if (Bo) {
                    if ((xe(Uo), (Uo = Se(5e3)), -1 === (yield Uo.promise))) return
                    yield Go(e)
                } else
                    (Bo = !0),
                        k.info(' **** turning tv OFF ****'),
                        ve(
                            'echo "standby 0" | cec-client -s -d 1',
                            { timeout: 2e4 },
                            !0,
                        ).then(function (e) {
                            e && k.error('Error in CEC TV off command : '.concat(e))
                        }),
                        Jo('TVoff.py'),
                        yield Se(5e3).promise,
                        k.info(' **** HDMI off ****'),
                        1 === e.length
                            ? yield ve(
                                'xrandr --output '.concat(e[0].interfaceName, ' --off'),
                                !0,
                            )
                            : e.length > 1 &&
                            (yield ve(
                                'xrandr --output '
                                    .concat(e[0].interfaceName, ' --off --output ')
                                    .concat(e[1].interfaceName, ' --off'),
                                !0,
                            )),
                        (Bo = !1)
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        qo = (function () {
            var e = jo(function* (e, t, n) {
                if (Bo) {
                    if ((xe(Uo), (Uo = Se(5e3)), -1 === (yield Uo.promise))) return
                    yield qo(e, t, n)
                } else (Bo = !0), k.info(' **** turning tv ON ****'), yield rc(), k.info(' **** HDMI ON ****'), Jo('TVon.py'), yield Se(1e4).promise, k.info('**** cec-client on *****'), yield ve('echo "on 0" | cec-client -s -d 1', { timeout: 2e4 }, !0), yield Se(1e4).promise, yield ve('echo "as" | cec-client -s -d 1', { timeout: 2e4 }, !0), yield Se(5e3).promise, yield sc(e, t, n), (Bo = !1)
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        Jo = (function () {
            var e = jo(function* (e) {
                var t = ''.concat(X.HOME_DIR, '/').concat(e)
                try {
                    yield q.promises.access(t)
                    var { stdout: n, stderr: i } = yield ve('python '.concat(t), !1)
                    i
                        ? k.error(''.concat(e, ' error: ').concat(i))
                        : k.info(''.concat(e, ' output: ').concat(n))
                } catch (t) {
                    k.debug(''.concat(e, ' error: ').concat(t))
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Zo = null,
        $o = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : { enable: !1 }
            return (t, n) => {
                var i,
                    r,
                    o = (function () {
                        var e = jo(function* () {
                            var { scheduledPlaylists: e } = n().mediaAssets
                            xe(Zo)
                            var a = new Date(),
                                s = 60 * a.getHours() + a.getMinutes(),
                                c = r > i ? s >= i && s <= r : s <= r || s >= i
                            k.debug(
                                'tv state: '
                                    .concat(c, ',')
                                    .concat(s, ',')
                                    .concat(r, ',')
                                    .concat(i),
                            ),
                                !0 !== c ? t(Vo(!1)) : 'TV_OFF' !== e[0] && t(Ho(!1)),
                                (Zo = Se(3e5)),
                                -1 !== (yield Zo.promise) && o()
                        })
                        return function () {
                            return e.apply(this, arguments)
                        }
                    })()
                t(Lo.actions.setSleepObj(e))
                var a = n().deviceTv.sleep
                    ; (i = ee(a.ontime)),
                        (r = ee(a.offtime)),
                        !0 === a.enable && (i || r) ? o() : (xe(Zo), t(Ho(!1)))
            }
        },
        Yo = null,
        Xo = () => (e, t) => {
            k.info('Clearing the resolution watch'), xe(Yo), (Yo = null)
        },
        Qo = function e() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]
            return (n, i) => {
                !0 === t && k.info('Setting the resolution watch'),
                    xe(Yo),
                    (Yo = Se(3e4, 'timeout')).promise.then(
                        (function () {
                            var t = jo(function* (t) {
                                if (-1 !== t) {
                                    var { edidResolution: r } = i().deviceHardware,
                                        {
                                            resolution: o,
                                            orientation: a,
                                            monitorArrangement: s,
                                        } = i().devicePreferences,
                                        { edidResolution: c } = yield oc(!0)
                                        ; (c[0] === r[0] && c[1] === r[1]) ||
                                            (k.info(
                                                'Resolution changed from '
                                                    .concat(r.toString(), ' to ')
                                                    .concat(c.toString()),
                                            ),
                                                xe(Yo),
                                                yield n(kc({ monitorArrangement: s })),
                                                yield Se(3e3).promise,
                                                me(),
                                                n(ba(!1)),
                                                yield be()),
                                            null !== Yo && n(e(!1))
                                } else k.debug('resolution change timer cancelled')
                            })
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        })(),
                    )
            }
        }
    function ea(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ta(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    ea(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    ea(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: na } = C,
        ia = na({
            name: _,
            initialState: {
                assets: [],
                assetsValidity: [],
                deployedPlaylists: [],
                groupTicker: {},
                scheduledPlaylists: [],
                previousNormalScheduledPlaylists: [],
                scheduledAdvertPlaylists: [],
                forceAdvertRestart: !1,
                scheduledAudioPlaylists: [],
                forceLoungeRestart: !1,
                deviceReadyForPlaylist: !1,
                forceRestart: !1,
                justUpdateState: !1,
                playlistTriggerType: 'regular',
                playlistOn: !1,
                localControl: !1,
                playlistStartTime: null,
                loungeMusicOn: !1,
                eventInProgress: !1,
                scheduledKeyPressPlaylistIndex: -1,
            },
            reducers: {
                setAssetsSliceValues(e, t) {
                    Object.assign(
                        e,
                        Ie(t.payload, [
                            'assets',
                            'assetsValidity',
                            'deployedPlaylists',
                            'groupTicker',
                        ]),
                    )
                },
                makeDeviceReady(e) {
                    e.deviceReadyForPlaylist = !0
                },
                setScheduledAdvertPlaylists(e, t) {
                    ; (e.scheduledAdvertPlaylists = t.payload.scheduledAds || []),
                        (e.forceAdvertRestart = t.payload.forceAdvertRestart || !1)
                },
                setScheduledAudioPlaylists(e, t) {
                    ; (e.scheduledAudioPlaylists =
                        t.payload.scheduledAudioPlaylists || []),
                        (e.forceLoungeRestart = t.payload.forceLoungeRestart || !1)
                },
                playPlaylist(e, t) {
                    Object.assign(
                        e,
                        Ie(t.payload, [
                            'scheduledPlaylists',
                            'forceRestart',
                            'justUpdateState',
                            'playlistTriggerType',
                        ]),
                    ),
                        'regular' === t.payload.playlistTriggerType &&
                        (e.previousNormalScheduledPlaylists =
                            t.payload.scheduledPlaylists),
                        (e.justUpdateState = !0 === t.payload.justUpdateState),
                        (e.playlistOn = !0),
                        t.payload &&
                        void 0 !== t.payload.localControl &&
                        (e.localControl = t.payload.localControl)
                },
                stopPlaylist(e, t) {
                    Object.assign(
                        e,
                        Ie(t.payload, [
                            'scheduledPlaylists',
                            'forceRestart',
                            'playlistTriggerType',
                        ]),
                    ),
                        ((e) => {
                            !1 === e.playlistOn &&
                                k.debug('playlist stop command, already playing stopped'),
                                (e.playlistOn = !1),
                                (e.playlistStarttime = null)
                        })(e),
                        t.payload &&
                        void 0 !== t.payload.localControl &&
                        (e.localControl = t.payload.localControl)
                },
                loungeMusicOn(e) {
                    e.loungeMusicOn = !0
                },
                loungeMusicOff(e) {
                    e.loungeMusicOn = !1
                },
                eventTriggered(e) {
                    ; (e.eventInProgress = !0), (e.localControl = !0)
                },
                resetEvent(e) {
                    ; (e.localControl = !1), (e.eventInProgress = !1)
                },
                resetLocalControl(e) {
                    e.localControl = !1
                },
                resetForceRestart(e, t) {
                    'PLAYLISTS' === t.payload
                        ? (e.forceRestart = !1)
                        : 'LOUNGE' === t.payload
                            ? (e.forceLoungeRestart = !1)
                            : 'ADVERT' === t.payload && (e.forceAdvertRestart = !1)
                },
                updateKeypressPlaylist(e, t) {
                    ; (e.scheduledKeyPressPlaylistIndex = t.payload), (e.localControl = !0)
                },
                resetKeypressPlaylistStates(e) {
                    ; (e.localControl = !1), (e.scheduledKeyPressPlaylistIndex = -1)
                },
            },
        }),
        {
            setAssetsSliceValues: ra,
            makeDeviceReady: oa,
            playPlaylist: aa,
            stopPlaylist: sa,
            setScheduledAdvertPlaylists: ca,
            setScheduledAudioPlaylists: la,
            loungeMusicOn: da,
            loungeMusicOff: ua,
            eventTriggered: pa,
            resetEvent: ya,
            resetLocalControl: fa,
            resetForceRestart: va,
            updateKeypressPlaylist: ga,
            resetKeypressPlaylistStates: ma,
        } = ia.actions
    const ha = ia.reducer
    var ka = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 'regular',
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
        return (function () {
            var r = ta(function* (r, o) {
                var a = null,
                    {
                        deviceReadyForPlaylist: s,
                        playlistOn: c,
                        scheduledPlaylists: d,
                    } = o().mediaAssets,
                    { tvStatus: u } = o().deviceTv
                if (
                    (!0 !== s
                        ? (a = 'Device not ready, skipping setScheduledPlaylistsAndPlay')
                        : e && e[0]
                            ? 'TV_OFF' === e[0]
                                ? yield r(Vo(!0))
                                : 'TV_OFF' === d[0] && (yield r(Ho(!0)))
                            : (a =
                                'No playlist available, skipping setScheduledPlaylistsAndPlay'),
                        !1 === u && 'TV_OFF' !== d[0])
                )
                    Os(
                        'player',
                        'error',
                        (a =
                            !1 === u
                                ? 'TV is OFF, skipping playlist play'
                                : 'Already playing started'),
                    )
                else if (!a && 'TV_OFF' !== e[0])
                    try {
                        var p = yield q.promises.readFile(
                            l.join(X.MEDIA_DIR, '__'.concat(e[0], '.json')),
                        )
                        JSON.parse(p)
                    } catch (t) {
                        a = 'PLaylist read or parse error, does it exist?  "'
                            .concat(e[0], '" read error: ')
                            .concat(t)
                    }
                return a
                    ? (k.error(a), a)
                    : ('TV_OFF' !== e[0]
                        ? r(
                            aa({
                                forceRestart: n,
                                justUpdateState: i,
                                playlistTriggerType: t,
                                scheduledPlaylists: e,
                            }),
                        )
                        : r(
                            sa({
                                forceRestart: n,
                                playlistTriggerType: t,
                                scheduledPlaylists: e,
                            }),
                        ),
                        he(),
                        null)
            })
            return function (e, t) {
                return r.apply(this, arguments)
            }
        })()
    },
        ba = (e) => (t, n) => {
            if (!0 === n().mediaAssets.deviceReadyForPlaylist) {
                var { deployedPlaylists: i } = n().mediaAssets,
                    { loadPlaylistOnCompletion: r } = n().mediaSettings,
                    {
                        scheduledPlaylists: o,
                        scheduledAds: a,
                        scheduledAudioPlaylists: s,
                    } = Ye()
                t(la({ scheduledAudioPlaylists: s, forceLoungeRestart: !0 })),
                    t(ca({ scheduledAds: a, forceAdvertRestart: !0 }))
                var c = i.find((e) => e.name === o[0]),
                    l =
                        c &&
                        c.settings &&
                        c.settings.domination &&
                        c.settings.domination.enable,
                    d =
                        c &&
                        c.settings &&
                        c.settings.event &&
                        '1' === c.settings.event.duration,
                    u =
                        c &&
                        c.settings &&
                        c.settings.keyPress &&
                        !0 === c.settings.keyPress.playOnceParameter
                t(
                    ka(
                        o,
                        l
                            ? 'play-once-domination'
                            : !0 === d
                                ? 'play-once-event'
                                : !0 === u
                                    ? 'play-once-keypress'
                                    : !0 === e && !0 === r
                                        ? 'on-completion'
                                        : 'regular',
                        !0,
                    ),
                )
            } else k.warn('Device not ready, skipping playlist scheduling functions')
        },
        wa = (e) =>
            (function () {
                var t = ta(function* (t) {
                    ; (e.deployedPlaylists = e.playlists),
                        t(
                            ra(
                                Ie(e, [
                                    'assets',
                                    'assetsValidity',
                                    'groupTicker',
                                    'deployedPlaylists',
                                ]),
                            ),
                        )
                })
                return function (e) {
                    return t.apply(this, arguments)
                }
            })()
    function Sa(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var { createSlice: xa } = C,
        Pa = xa({
            name: T,
            initialState: { reboot: { enable: !1, time: null, absoluteTime: null } },
            reducers: {
                setupDailyReboot: {
                    reducer(e, t) {
                        Object.assign(e.reboot, t.payload)
                    },
                    prepare() {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : { enable: !1 }
                        return Aa(e), { payload: e }
                    },
                },
            },
        }),
        { setupDailyReboot: Ca } = Pa.actions
    const Ia = Pa.reducer
    var Aa = (function () {
        var e,
            t =
                ((e = function* () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = []
                    try {
                        var { stdout: n, stderr: i } = yield ve('sudo crontab -l')
                        !i &&
                            n &&
                            (t = n.split('\n').filter(function (e) {
                                return (
                                    e.length &&
                                    (-1 === e.indexOf('piSignage') ||
                                        -1 === e.indexOf('sudo systemctl reboot'))
                                )
                            })).length > 0 &&
                            k.info('There are existing cron jobs; '.concat(t.toString()))
                    } catch (e) {
                        k.warn('There are no existing cron jobs; '.concat(e))
                    }
                    if (e.enable && e.absoluteTime) {
                        var r = te(e.absoluteTime)
                        if (null !== r) {
                            var o = r.h,
                                a = r.m
                            t.push(
                                ''
                                    .concat(a, ' ')
                                    .concat(
                                        o,
                                        ' * * * sudo systemctl reboot && echo piSignage',
                                    ),
                            ),
                                k.info(
                                    '*** Cron job for reboot set at '.concat(o, ':').concat(a),
                                )
                        }
                    }
                    var s =
                        0 === t.length
                            ? 'crontab -r'
                            : 'echo "'.concat(t.join('\n'), '" | crontab -')
                    try {
                        var { stderr: c } = yield ve(s)
                        c &&
                            0 !== t.length &&
                            k.error('Error in setting/deleting cron job; '.concat(c))
                    } catch (e) {
                        k.error('Error in setting/deleting cron job; '.concat(e))
                    }
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                Sa(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                Sa(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function () {
            return t.apply(this, arguments)
        }
    })(),
        { createSlice: Oa } = C,
        Ta = Oa({
            name: E,
            initialState: {
                animationType: 'none',
                animationEnable: !1,
                signageBackgroundColor: '#919191',
                imageLetterboxed: !1,
                resizeAssets: !0,
                videoKeepAspect: !1,
                videoShowSubtitles: !1,
                shuffleContent: !1,
                urlReloadDisable: !0,
                keepWeblinksInMemory: !0,
                loadPlaylistOnCompletion: !1,
                timeToStopVideo: 0,
                enableYoutubeDl: !0,
                selectedVideoPlayer: 'chrome',
                combineDefaultPlaylist: !1,
                playAllEligiblePlaylists: !1,
                alternateContent: !1,
                audioVolume: 100,
                xWidgets: !0,
                mpvAudioDelay: 0,
            },
            reducers: {
                setSettingsSliceValues(e, t) {
                    t.payload &&
                        'default' === t.payload.selectedVideoPlayer &&
                        (t.payload.selectedVideoPlayer = 'chrome'),
                        t.payload &&
                        !0 === t.payload.keepWeblinksInMemory &&
                        (t.payload.urlReloadDisable = !0),
                        Object.assign(e, t.payload)
                },
            },
        })
    const Da = Ta.reducer
    var Ra = (e) => (t, n) => {
        var i = n().mediaSettings
        t(Ta.actions.setSettingsSliceValues(ie(e, i)))
    },
        Fa = (e) => (t, n) => {
            var { availablePlayers: i } = n().deviceHardware,
                { selectedVideoPlayer: r, audioVolume: o } = n().mediaSettings,
                a = ie(e, n().mediaSettings)
            if (
                (!1 === e.animationEnable && (a.animationType = 'none'),
                    void 0 !== a.resizeAssets || void 0 !== a.imageLetterboxed)
            ) {
                var { imageLetterboxed: s, resizeAssets: c } = n().mediaSettings
                void 0 !== a.resizeAssets && (c = a.resizeAssets),
                    void 0 !== a.imageLetterboxed && (s = a.imageLetterboxed),
                    (a.fitImage = c ? (s ? 1 : 2) : 0)
            }
            e.omxVolume !== o && ((a.audioVolume = e.omxVolume), ke(e.omxVolume)),
                !0 === a.enableMpv &&
                'default' === r &&
                (a.selectedVideoPlayer = 'mpv'),
                a.selectedVideoPlayer &&
                -1 === [...i.video, 'default'].indexOf(a.selectedVideoPlayer) &&
                (k.error(
                    ''.concat(
                        a.selectedVideoPlayer,
                        ' video player is not available, using default',
                    ),
                ),
                    (a.selectedVideoPlayer = 'default')),
                0 === i.widgets.length && (a.xWidgets = !1)
            var l = Ie(a, [
                'animationType',
                'signageBackgroundColor',
                'videoKeepAspect',
                'fitImage',
                'videoShowSubtitles',
                'urlReloadDisable',
                'audioVolume',
                'xWidgets',
            ])
            On(l), t(Ra(a))
        }
    function _a(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Ea(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    _a(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    _a(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: Na } = C,
        { DEFAULT_CHROME_DIR: ja } = X,
        Ma = null,
        La = null,
        Ka = null,
        Ua = !1,
        za = null,
        Wa = Na({
            name: j,
            initialState: {
                kioskUi: {
                    enableKiosk: !1,
                    url: !1,
                    inactivityTimeout: 30,
                    windowActiveStatus: !1,
                },
            },
            reducers: {
                setWindowActiveStatusTrue(e) {
                    e.kioskUi.windowActiveStatus = !0
                },
                setWindowActiveStatusFalse(e) {
                    e.kioskUi.windowActiveStatus = !1
                },
                enableKioskUi: {
                    reducer(e, t) {
                        ; (e.kioskUi.enableKiosk = !0),
                            (e.kioskUi.windowActiveStatus = !0),
                            (e.kioskUi.url = t.payload.url),
                            (e.kioskUi.inactivityTimeout = t.payload.timeout)
                    },
                    prepare: (e, t) => (Ga(e), { payload: { url: e, timeout: t } }),
                },
                disableKioskUi: {
                    reducer(e) {
                        ; (e.kioskUi.enableKiosk = !1), (e.kioskUi.windowActiveStatus = !1)
                    },
                    prepare: () => (Za(), {}),
                },
            },
        })
    const Va = Wa.reducer
    var Ha = () =>
        (function () {
            var e = Ea(function* (e) {
                if (!0 === ye(Ka) && La) {
                    var {
                        windowActiveStatus: t,
                        inactivityTimeout: n,
                    } = Pc.getState().mediaKiosk.kioskUi
                    !0 !== t &&
                        (k.info('Showing kioskUi'),
                            yield e(To()),
                            e(So()),
                            e(Fr({ adPlaying: !1 })),
                            e(Wa.actions.setWindowActiveStatusTrue()),
                            yield ve('xdotool windowactivate '.concat(La), !0)),
                        xe(za),
                        (za = Se(1e3 * n)),
                        -1 !== (yield za.promise) &&
                        (!0 === Pc.getState().mediaKiosk.kioskUi.windowActiveStatus &&
                            (k.info('Hiding kioskUi due to inactivity'),
                                e(Fo(!0)),
                                e(Wa.actions.setWindowActiveStatusFalse())),
                            Za())
                } else k.error('windowID not available or kioskUi is not running, Could not show Kiosk UI')
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Ba = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
            return (function () {
                var t = Ea(function* (t) {
                    !0 === Ua && k.debug('kioskHide is called '),
                        (Ua = !1),
                        !0 === ye(Ka) && La
                            ? (xe(za),
                                k.info('Hiding kioskUi'),
                                yield ve('xdotool windowminimize '.concat(La), !0),
                                t(Wa.actions.setWindowActiveStatusFalse()))
                            : k.warn(
                                'Could not hide kiosk UI, chrome instance or winowID is not available',
                            ),
                        !0 === e && Za()
                })
                return function (e) {
                    return t.apply(this, arguments)
                }
            })()
        },
        Ga = (function () {
            var e = Ea(function* (e) {
                var t = [
                    '--password-store=basic',
                    '--allow-file-access-from-files',
                    '--disable-session-crashed-bubble',
                    '--disable-infobars',
                    '--disable-notifications',
                    '--disable-device-discovery-notifications',
                    '--disable-quic',
                    '--disable-features=TranslateUI',
                    '--disable-popup-blocking',
                    '--noerrdialogs',
                    '--no-first-run',
                    '--disable-pinch',
                    '--overscroll-history-navigation=0',
                    '--check-for-update-interval=1',
                    '--simulate-critical-update',
                    '--kiosk-printing',
                    '--user-data-dir='.concat(l.join(ja, 'kiosk')),
                    "--cast-app-background-color='000000'",
                    "--default-background-color='00000000'",
                    '--kiosk',
                ]
                if (ye(Ka)) Za()
                else {
                    if (e) {
                        var n = !1 === /^(https?):\/\//.test(e) ? 'https://'.concat(e) : e
                        t.push('--app='.concat(n))
                    } else t.push('--app=http://localhost:8000/kiosk-ui/build/index.html')
                    k.info('Starting kiosk UI with '.concat(e || 'default url')),
                        (Ka = (0, se.spawn)('chromium-browser', t)).on('error', (e) => {
                            k.error('kiosk ui error: '.concat(e.toString()))
                        }),
                        Ka.once('exit', (e, t) => {
                            var {
                                enableKiosk: n,
                                windowActiveStatus: i,
                                url: r,
                            } = Pc.getState().mediaKiosk.kioskUi
                            k.error('kiosk ui exited with '.concat(e, '; ').concat(t)),
                                (Ka = null),
                                !0 === n
                                    ? Ga(r)
                                    : !0 === i &&
                                    (Pc.dispatch(Wa.actions.setWindowActiveStatusFalse()),
                                        Pc.dispatch(Fo(!0)))
                        })
                    var i = yield qa()
                    k.info('windowId value: '.concat(i || null === i)),
                        null === i
                            ? (k.error('Multiple tabs are open, restarting chromium'), Za())
                            : Ja()
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        qa = (function () {
            var e = Ea(function* () {
                for (var e = 25; e-- >= 0;) {
                    if ((yield Se(500).promise, !0 !== ye(Ka)))
                        return (
                            k.error('kioskChrome is not running, exiting windowId search'),
                            null
                        )
                    var { stdout: t, stderr: n } = yield ve(
                        'xdotool search --onlyvisible --pid '.concat(Ka.pid),
                        !1,
                    )
                    if (t) {
                        var i = t.split('\n')
                        return (
                            k.info(
                                'kiosk UI PID : '.concat(Ka.pid, ', window ids: ').concat(i),
                            ),
                            i[1] && i[1] < i[0]
                                ? (k.info('Hiding second tab of kioskUi, '.concat(i[0])),
                                    yield ve('xdotool windowminimize '.concat(i[0]), !0),
                                    (La = parseInt(i[1])))
                                : i[1]
                                    ? (k.info('Hiding second tab of kioskUi, '.concat(i[1])),
                                        yield ve('xdotool windowminimize '.concat(i[1]), !0),
                                        (La = parseInt(i[0])))
                                    : (La = parseInt(i[0])),
                            Pc.dispatch(Ba()),
                            La
                        )
                    }
                    k.debug(
                        'unable to get Window id for kiosk-'
                            .concat(Ka.pid, ',retrying, ')
                            .concat(n),
                    )
                }
                return null
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Ja = () => {
            null === Ma &&
                (Ma = (0, q.createReadStream)('/dev/input/mice'))
                    .on(
                        'data',
                        (function () {
                            var e = Ea(function* (e) {
                                var t = {
                                    leftBtn: (1 & e[0]) > 0,
                                    rightBtn: (2 & e[0]) > 0,
                                    middleBtn: (4 & e[0]) > 0,
                                    xSign: (16 & e[0]) > 0,
                                    ySign: (32 & e[0]) > 0,
                                    xOverflow: (64 & e[0]) > 0,
                                    yOverflow: (128 & e[0]) > 0,
                                    xDelta: e.readInt8(1),
                                    yDelta: e.readInt8(2),
                                }
                                t.leftBtn || t.rightBtn || t.middleBtn
                                    ? (t.type = 'button')
                                    : (t.type = 'moved'),
                                    'button' === t.type &&
                                    ((Ua = !0),
                                        yield Se(1e3).promise,
                                        !0 === Ua
                                            ? Pc.dispatch(Ha())
                                            : k.info('ignoring kiosk click as hideUI is called '),
                                        (Ua = !1))
                            })
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        })(),
                    )
                    .on('end', function () {
                        k.info('Mouse end event')
                    })
                    .on('close', function (e) {
                        k.info('Mouse close event')
                    })
        },
        Za = () => {
            ye(Ka) && (Ka.kill(), (Ka = null)), xe(za)
        },
        $a = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
            return (function () {
                var n = Ea(function* (n, i) {
                    var r = {
                        enableKiosk: e.enable || e.enableKiosk,
                        url: e.url,
                        inactivityTimeout: e.timeout || e.inactivityTimeout || 30,
                    }
                    if (
                        0 !== Object.keys(ie(i().mediaKiosk.kioskUi, r)).length ||
                        !1 !== t
                    )
                        if (!0 === r.enableKiosk) {
                            var { stdout: o, stderr: a } = yield ve('which xdotool', !0)
                            a || !o || o.length <= 3
                                ? (k.error(
                                    'xdotool is *not* available, kiosk ui is not started',
                                ),
                                    n(Wa.actions.disableKioskUi()))
                                : n(Wa.actions.enableKioskUi(r.url, r.inactivityTimeout))
                        } else n(Wa.actions.disableKioskUi())
                })
                return function (e, t) {
                    return n.apply(this, arguments)
                }
            })()
        }
    function Ya(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Xa = !1,
        Qa = (function () {
            var e,
                t =
                    ((e = function* (e) {
                        k.debug('Keypress event is for :', e)
                        var t = Pc.getState(),
                            {
                                deployedPlaylists: n,
                                scheduledKeyPressPlaylistIndex: i,
                            } = t.mediaAssets,
                            r = qe(n)
                        if (!0 !== Xa) {
                            Xa = !0
                            for (var o = -1, a = 0; a < r.length; a++)
                                if (
                                    r[a].settings.keyPress.enable &&
                                    r[a].settings.keyPress.key === e
                                ) {
                                    o = a
                                    break
                                }
                            ; -1 !== o ? Pc.dispatch(ga(o)) : Pc.dispatch(ma()),
                                i === o && -1 === o
                                    ? k.debug('Not restarting default playlist again')
                                    : Pc.dispatch(ba()),
                                yield Se(1e3).promise,
                                (Xa = !1)
                        } else k.info('Keypress event, skipping due to debounce')
                    }),
                        function () {
                            var t = this,
                                n = arguments
                            return new Promise(function (i, r) {
                                var o = e.apply(t, n)
                                function a(e) {
                                    Ya(o, i, r, a, s, 'next', e)
                                }
                                function s(e) {
                                    Ya(o, i, r, a, s, 'throw', e)
                                }
                                a(void 0)
                            })
                        })
            return function (e) {
                return t.apply(this, arguments)
            }
        })()
    function es(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ts(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    es(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    es(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var ns = null,
        is = (function () {
            var e = ts(function* () {
                var { stdout: e, stderr: t } = yield ve(
                    "ps -ef | grep -v grep | grep 'cat /dev/input/by-id' | awk '{print $2}'",
                )
                if (e) {
                    k.debug('process ids for killing cat command: ', e)
                    var n = e.split('\n').join(' ')
                    yield ve('sudo kill -9 '.concat(n))
                } else k.error('stderr in finding PID of cat /dev/input/by-id: '.concat(t))
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        rs = () => {
            q.readdir('/dev/input/by-id', function (e, t) {
                if (e || !t)
                    return (
                        k.error('No USB devices for input are present'), void console.log(e)
                    )
                for (var n = [], i = 0; i < t.length; i++)
                    '-kbd' === t[i].slice(-4) && n.push('/dev/input/by-id/'.concat(t[i]))
                if (0 === n.length)
                    return k.error('No keyboard is present'), void console.log(t)
                k.info('Using devices for keyboard events: '.concat(n.toString()))
                var r = function (e) {
                    ns = (0, se.spawn)('cat', [e])
                    ns.stdout.on(
                        'data',
                        (function () {
                            var e = ts(function* (e) {
                                var t, n, i
                                    ; -1 !== process.arch.indexOf('64')
                                        ? ((t = parseInt(e[40])),
                                            (n = parseInt(e[42])),
                                            (i = parseInt(e[44])))
                                        : ((t = parseInt(e[24])),
                                            (n = parseInt(e[26])),
                                            (i = parseInt(e[28]))),
                                        1 === t
                                            ? 1 !== i
                                                ? 29 !== n && 97 !== n
                                                    ? k.info(
                                                        'Key pressed, event (01): '
                                                            .concat(t, ', scan code: ')
                                                            .concat(n, ', press/release(0): ')
                                                            .concat(i),
                                                    )
                                                    : !1
                                                : 29 === n || 97 === n
                                                    ? !0
                                                    : Qa(n)
                                            : k.debug(
                                                'Ignoring the non-keyboard event for '.concat(
                                                    'x64' === process.arch
                                                        ? 'x64 system'
                                                        : 'non x64 system',
                                                ),
                                            )
                            })
                            return function (t) {
                                return e.apply(this, arguments)
                            }
                        })(),
                    ),
                        ns.stderr.on('data', function (t) {
                            k.error(''.concat(e, ' stderr error event: ').concat(t))
                        }),
                        ns.on('close', function () {
                            k.error(''.concat(e, ' abruptly closed'))
                        }),
                        ns.on('exit', function (t) {
                            k.error(''.concat(e, ' exited with code ').concat(t))
                        }),
                        ns.on('error', function (t) {
                            k.error(''.concat(e, ' error event: ').concat(t))
                        })
                }
                for (var o of n) r(o)
            })
        }
    function os(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function as(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    os(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    os(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var ss = !1,
        cs = () => {
            ; (ss = !1), Pc.dispatch(ya()), Pc.dispatch(ba(!1))
        },
        ls = (function () {
            var e = as(function* () {
                var e = Pc.getState(),
                    t = Ve(e.mediaAssets.deployedPlaylists),
                    { eventInProgress: n } = e.mediaAssets
                if (!0 !== ss)
                    if (
                        (k.info('SIGUSR2 event, scheduling event playlist'),
                            (ss = !0),
                            !0 !== n)
                    )
                        if ((Pc.dispatch(pa()), t.length > 0)) {
                            var { scheduledPlaylists: i } = Ye(),
                                r = t.find((e) => e.name === i[0])
                            if (void 0 === r) return yield Se(1e3).promise, void cs()
                            var o = parseInt(r.settings.event.duration)
                            switch (
                            (Pc.dispatch(
                                ka(i, 1 === o ? 'play-once-event' : 'regular', !0),
                            ),
                                o)
                            ) {
                                case 0:
                                case 1:
                                    yield Se(1e3).promise
                                    break
                                default:
                                    yield Se(1e3 * o).promise,
                                        Pc.dispatch(ya()),
                                        Pc.dispatch(ba(!1))
                            }
                            ss = !1
                        } else {
                            yield Se(1e3).promise, (ss = !1)
                            var { eventInProgress: a } = Pc.getState().mediaAssets
                            !0 === a && cs()
                        }
                    else cs()
                else k.info('SIGUSR2 event, skipping due to debounce')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function ds(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function us(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    ds(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    ds(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var ps,
        ys,
        fs = null,
        vs = () => fs && 1 === fs.readyState,
        gs = function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n]
            if (!0 === vs())
                try {
                    w.debug('server send: '.concat(JSON.stringify(t).slice(0, 1e3))),
                        fs.send(JSON.stringify(t), (e) => {
                            e &&
                                w.error(
                                    'Could not send message to server : '
                                        .concat(e, ';')
                                        .concat(JSON.stringify(t).slice(0, 200)),
                                )
                        })
                } catch (e) {
                    fs.emit('error', e)
                }
            else
                w.error(
                    'Socket is not available to send data: '.concat(
                        JSON.stringify(t).slice(0, 200),
                    ),
                )
        },
        ms = (e) => {
            var { settings: t, config: n } = ze(Pc.getState()),
                i = Pc.getState().devicePreferences.sdConfigFileExists
            !0 === vs()
                ? gs('status', t, n, e || i || !1)
                : w.debug('Socket is not available to send status')
        },
        hs = (function () {
            var e = us(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    {
                        reportIntervalMinutes: t = 5,
                    } = Pc.getState().devicePreferences.reportIntervalMinutes,
                    n = parseInt(t)
                if (
                    ((isNaN(n) || n < 3) && (n = 5),
                        xe(ys),
                        (ys = Se(60 * n * 1e3, 'scheduleNext')),
                        -1 !== (yield ys.promise))
                ) {
                    !0 !== vs() &&
                        (w.debug('unable to send status to server, retryCount: '.concat(e)),
                            ++e >= 3 && ks())
                    var i = yield Vs(),
                        r = yield Hs()
                    Pc.dispatch(Ne({ playerTemperature: i, playerUptime: r })),
                        Pc.dispatch(Wo(!1)),
                        ms(),
                        hs(e)
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ks = (function () {
            var e = us(function* () {
                var e = !1,
                    t = Pc.getState().deviceHardware.server.replace(/^http/i, 'ws'),
                    n = 'wss'
                if (!/^wss?:\/\//.test(t))
                    try {
                        yield Ce('https://'.concat(t, '/api/labels'))
                    } catch (e) {
                        w.info(
                            '*** trying with http protocol for websocket as https to server returned status undefined',
                        ),
                            (n = 'ws')
                    }
                var i = /^(wss?):\/\//.test(t)
                    ? ''.concat(t, '/websocket')
                    : ''.concat(n, '://').concat(t, '/websocket')
                fs && (fs.removeAllListeners(), fs.terminate()),
                    (fs = new Pe(i, { rejectUnauthorized: !1, followRedirects: !0 })),
                    w.info('Starting websocket client to '.concat(i))
                var r = (function () {
                    var t = us(function* (t) {
                        !1 === e &&
                            ((e = !0),
                                w.warn(
                                    'Retrying webcosket connect in '.concat(3e4, 'ms, ').concat(t),
                                ),
                                yield Se(3e4).promise,
                                ks())
                    })
                    return function (e) {
                        return t.apply(this, arguments)
                    }
                })()
                fs.on('open', () => {
                    var e
                    w.info('Websocket: connected to server'),
                        ms(!0),
                        Pc.dispatch(_e(!0)),
                        (e = !0),
                        fs.on('pong', () => {
                            e = !0
                        }),
                        clearInterval(ps),
                        (ps = setInterval(() => {
                            !0 === vs()
                                ? (!0 !== e && w.warn('server pong not received for last ping'),
                                    (e = !1),
                                    fs.ping())
                                : w.debug('Skipping ping as socket is not connected')
                        }, 3e4))
                }),
                    fs.on('message', (e) => {
                        w.debug(
                            'Websocket: received message from server: '.concat(
                                e.slice(0, 1e3),
                            ),
                        ),
                            bs(e)
                    }),
                    fs.on('close', (e) => {
                        Pc.dispatch(_e(!1)),
                            1e3 === e.code
                                ? (w.debug('WebSocket: closed'), r(e))
                                : (w.error(
                                    'WebSocket connection unexpectedly closed, reason: '.concat(
                                        e.code,
                                    ),
                                ),
                                    r(e))
                    }),
                    fs.on('error', (e) => {
                        w.error('Websocket client error event '.concat(e.code)),
                            Pc.dispatch(_e(!1)),
                            r(e)
                    }),
                    hs()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        bs = (function () {
            var e = us(function* (e) {
                var t
                try {
                    if (((t = JSON.parse(e)), !Array.isArray(t) || !t[0]))
                        return void w.error('No data in message from websocket: '.concat(e))
                } catch (t) {
                    return void w.error(
                        'Unable to parse message from websocket - '
                            .concat(t, '; ')
                            .concat(e),
                    )
                }
                switch ((Pc.dispatch(_e(!0)), t[0])) {
                    case 'status':
                        ms()
                        break
                    case 'shell':
                        var [, n] = t
                        zs(n).then(function (e) {
                            w.debug(
                                'response for shell command: '
                                    .concat(e.err, ',')
                                    .concat(e.stdout, ',')
                                    .concat(e.stderr),
                            ),
                                gs('shell_ack', e)
                        })
                        break
                    case 'config':
                        var [, i] = t
                        ws(i)
                        break
                    case 'event':
                        ls()
                        break
                    case 'sync':
                        var [
                            ,
                            r,
                            o,
                            a,
                            s = null,
                            c = 10,
                            d = 10,
                            u = !1,
                            p = 100,
                            y = !1,
                            f,
                        ] = t
                        w.info(
                            '*** sync initiated at server: '.concat(
                                new Date().toLocaleString(),
                            ),
                        ),
                            Os('player', 'network', 'sync initiated from server'),
                            Pc.dispatch(fa()),
                            Pc.dispatch(
                                wa({
                                    playlists: r,
                                    assets: o,
                                    assetsValidity: f,
                                    groupTicker: a,
                                }),
                            ),
                            Pc.dispatch(
                                Fa({
                                    combineDefaultPlaylist: u,
                                    loadPlaylistOnCompletion: y,
                                    omxVolume: p,
                                }),
                            ),
                            ms(!0),
                            yield go(r, o, !1),
                            Pc.dispatch(qn(!0, { logo: s, logox: c, logoy: d }))
                        break
                    case 'restart':
                        w.info('**** Restarting the playlist ****'), Pc.dispatch(ba(!1))
                        break
                    case 'swupdate':
                        var [, v, g] = t
                        $s(v, g)
                        break
                    case 'snapshot':
                        Ws().then(function (e) {
                            var { stdout: t } = e
                            gs('snapshot', {
                                playerInfo: ze(Pc.getState()).settings,
                                data: t,
                            })
                        })
                        break
                    case 'cmd':
                        var [, m, h] = t
                        switch (m) {
                            case 'debuglevel':
                                x(h.level)
                                break
                            case 'tvpower':
                                h.off ? Pc.dispatch(Vo()) : Pc.dispatch(Ho())
                        }
                        break
                    case 'playlist_media':
                        var [, k] = t
                        w.info('play_action called with action: '.concat(k))
                        var b = yield Pc.dispatch(Eo(k))
                        'Connected' === Pc.getState().deviceStatus.connectionStatus &&
                            gs('media_ack', { action: k, msg: b })
                        break
                    case 'setplaylist':
                        var [, S] = t
                        Pc.dispatch(
                            aa({
                                scheduledPlaylists: [S],
                                forceRestart: !0,
                                playlistTriggerType: 'play-once',
                                localControl: !0,
                            }),
                        ),
                            'Connected' === Pc.getState().deviceStatus.connectionStatus &&
                            gs('setplaylist_ack', { msg: 'Started playlist', playlist: S })
                        break
                    case 'upload_ack':
                        var [, P] = t
                            ; -1 === P.indexOf('forever_out') && As(P)
                        break
                    case 'license':
                        var [, C, I] = t
                        w.info(
                            'License download request for '
                                .concat(C, ' & id ')
                                .concat(I, ' received'),
                        ),
                            yield q.promises.unlink(
                                l.join(X.HOME_DIR, 'license_'.concat(I, '.txt')),
                            ),
                            Ls()
                        break
                    default:
                        w.error(
                            'Unknown command from websocket communication: '.concat(t[0]),
                        )
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        ws = (function () {
            var e = us(function* (e) {
                var t = Pc.getState(),
                    n = ie(e, t.devicePreferences),
                    i = n.installation || n.secret,
                    r =
                        void 0 !== n.resolution ||
                        void 0 !== n.orientation ||
                        void 0 !== n.monitorArrangement
                !0 === r && Pc.dispatch(Xo()),
                    e.currentTime &&
                    e.currentTime - Date.now() > 12e4 &&
                    (w.info(
                        'Adjusting the time to server time '.concat(
                            new Date(e.currentTime).toLocaleString(),
                        ),
                    ),
                        Bs(e.currentTime)),
                    (e.logoObj = Ie(e, ['logo', 'logox', 'logoy'])),
                    yield Pc.dispatch(kc(n))
                var o = ie(e, t.deviceTasks)
                void 0 !== o.reboot && Pc.dispatch(Ca(o.reboot))
                var a = ie(e.sleep, t.deviceTv.sleep)
                if (
                    (0 !== Object.keys(a).length && Pc.dispatch($o(a)),
                        Pc.dispatch(wa(e)),
                        Pc.dispatch(Fa(e)),
                        Pc.dispatch($n(e)),
                        Pc.dispatch($a(e.kioskUi, !1)),
                        i)
                ) {
                    Pc.dispatch(fa()),
                        !0 === t.devicePreferences.sdConfigFileExists &&
                        (Pc.dispatch(vc()),
                            yield q.promises.unlink(
                                l.join(X.CONFIG_DIR, 'player-config.json'),
                            ))
                    var { server: s, cpuSerialNumber: c } = t.deviceHardware,
                        { enabled: d } = yield De(c, n.installation, s)
                    Pc.dispatch(Ee(d)),
                        w.info(
                            '*** Changing to Installation: '
                                .concat(n.installation, ' & Group: ')
                                .concat(n.secret),
                        ),
                        Os(
                            'player',
                            'network',
                            'going to add secret key: '.concat(n.secret),
                        ),
                        !0 === vs() && gs('secret_ack'),
                        go(e.playlists, e.assets, !0)
                } else !1 === t.deviceDownload.downloadInProgress && e.playlists && e.playlists.length > 0 && (parseInt(e.lastDeployed) > t.deviceDownload.lastUpload || (!1 === t.mediaAssets.localControl && !1 === Q(e.playlists, t.mediaAssets.deployedPlaylists))) && (Pc.dispatch(fa()), w.info('*** Downloading files,Group deploy time:\n            '.concat(new Date(parseInt(e.lastDeployed)).toLocaleString(), '             , Player upload time:             ').concat(new Date(t.deviceDownload.lastUpload).toLocaleString())), go(e.playlists, e.assets, !0))
                if (
                    ((0 === Object.keys(n).length &&
                        0 === Object.keys(o).length &&
                        0 === Object.keys(a).length) ||
                        me(),
                        !0 === r)
                )
                    if (
                        n.monitorArrangement &&
                        !0 === (0, q.existsSync)('/boot/config.txt')
                    ) {
                        var u =
                            '4k' === n.monitorArrangement.mode
                                ? '--enable-4k'
                                : '--disable-4k'
                        yield ve('/bin/bash '.concat(X.SYSTEM_SCRIPT, ' ').concat(u), !0),
                            yield Se(3e3).promise,
                            w.info('Restarting to change boot/config.txt'),
                            Ks()
                    } else Pc.dispatch(Qo())
                n.TZ &&
                    (w.info('Exiting the node process for TimeZone change action'), Ls()),
                    void 0 !== n.disableAp &&
                    (w.info('Restarting for disable access point action'), Ks())
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })()
    function Ss(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function xs(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Ss(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Ss(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Ps = 0.25,
        Cs = { category: 'player', ts: 0, log: { playerUptime: 0, tvUptime: 0 } },
        Is = (function () {
            var e = xs(function* (e) {
                var { cpuSerialNumber: t } = Pc.getState().deviceHardware
                function n(e, n) {
                    gs('upload', t, e, n)
                }
                try {
                    var i = yield q.promises.readdir(X.LOGS_DIR)
                    for (var r of i)
                        if (parseInt(r.slice(0, r.indexOf('.'))) < e) {
                            var o = yield q.promises.readFile(l.join(X.LOGS_DIR, r), 'utf8')
                            o && n(r, o)
                        }
                    var { stdout: a, stderr: s } = yield ve(
                        'tail -200 '.concat(X.PROGRAM_LOG_FILE),
                        !0,
                    )
                    s
                        ? k.error('Program log file read error: '.concat(s))
                        : n(X.PROGRAM_LOG_FILE, a)
                } catch (e) {
                    k.error('Error at log sendFiles: '.concat(e))
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        As = (function () {
            var e = xs(function* (e) {
                try {
                    yield q.promises.unlink(l.join(X.LOGS_DIR, e))
                } catch (t) {
                    k.error('log file deletion error('.concat(e, '): ').concat(t))
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Os = (function () {
            var e = xs(function* (e, t, n) {
                var i = { category: e, ts: Date.now(), type: t, description: n },
                    r = l.join(
                        X.LOGS_DIR,
                        ''.concat(new Date().setMinutes(0, 0, 0), '.events'),
                    )
                try {
                    yield q.promises.appendFile(r, ''.concat(JSON.stringify(i), '\n'))
                } catch (e) {
                    k.error('Store event error('.concat(r, '): ').concat(e))
                }
            })
            return function (t, n, i) {
                return e.apply(this, arguments)
            }
        })(),
        Ts = () => {
            var e = new Date().setMinutes(0, 0, 0)
            Is(e)
            var { connectionStatus: t, cecTvStatus: n } = Pc.getState().deviceTv,
                { playingPlaylistName: i } = Pc.getState().playerMain,
                r = { connected: t, tvUptime: n }
            if (
                (i && (r['playlist_'.concat(i.replace(/[^a-zA-Z0-9]/g, '_'))] = 1),
                    e > Cs.ts)
            )
                for (var o in ((Cs.ts = e),
                    (Cs.log = {}),
                    (Cs.log.playerUptime = Ps),
                    r))
                    r[o] && (Cs.log[o] = Ps)
            else
                for (var a in ((Cs.log.playerUptime += Ps), r))
                    r[a] && (Cs.log[a] = (Cs.log[a] || 0) + Ps)
        },
        Ds = (function () {
            var e = xs(function* () {
                try {
                    yield q.promises.writeFile(
                        l.join(X.LOGS_DIR, ''.concat(Cs.ts, '.log')),
                        JSON.stringify(Cs, null, 4),
                    ),
                        Ts()
                } catch (e) {
                    k.error('Event file write error('.concat(Cs.ts, '.log): ').concat(e))
                }
                yield Se(9e5).promise, Ds()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Rs = (e) => {
            var t = e.replace(/[^a-zA-Z0-9]/g, '_')
            Cs.ts && (Cs.log[t] = (Cs.log[t] || 0) + 1)
        },
        Fs = (function () {
            var e = xs(function* () {
                var e = new Date(),
                    t = 900,
                    n = (e.getSeconds() + 60 * e.getMinutes()) % t
                n < 300 && (t += 300 - n), Ts(), yield Se(1e3 * t).promise, Ds()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function _s(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Es(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    _s(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    _s(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Ns = ae.promisify(se.exec),
        js = '/bin/bash',
        Ms = {
            normal: {
                horizontal: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--left-of' },
                    inverted: {
                        screen1Index: 1,
                        screen2Index: 0,
                        direction: '--left-of',
                    },
                },
                vertical: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--above' },
                    inverted: { screen1Index: 1, screen2Index: 0, direction: '--above' },
                },
            },
            inverted: {
                horizontal: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--left-of' },
                    inverted: {
                        screen1Index: 1,
                        screen2Index: 0,
                        direction: '--left-of',
                    },
                },
                vertical: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--above' },
                    inverted: { screen1Index: 1, screen2Index: 0, direction: '--above' },
                },
            },
            left: {
                horizontal: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--left-of' },
                    inverted: {
                        screen1Index: 1,
                        screen2Index: 0,
                        direction: '--left-of',
                    },
                },
                vertical: {
                    normal: { screen1Index: 0, screen2Index: 1, direction: '--above' },
                    inverted: { screen1Index: 1, screen2Index: 0, direction: '--above' },
                },
            },
            right: {
                horizontal: {
                    normal: { screen1Index: 1, screen2Index: 0, direction: '--left-of' },
                    inverted: {
                        screen1Index: 0,
                        screen2Index: 1,
                        direction: '--left-of',
                    },
                },
                vertical: {
                    normal: { screen1Index: 1, screen2Index: 0, direction: '--above' },
                    inverted: { screen1Index: 0, screen2Index: 1, direction: '--above' },
                },
            },
        },
        Ls = (function () {
            var e = Es(function* () {
                ns &&
                    (k.info(
                        'Killing keyboard stream inside exit process function before exitting ',
                    ),
                        ns.kill()),
                    yield Se(3e3).promise,
                    process.exit(0)
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Ks = () => {
            ve('sync;sudo systemctl reboot', !0)
        },
        Rb = () => {
            ve('sudo reboot')
        },
        Pf = () => {
            ve('sudo poweroff')
        },
        Us = (function () {
            var e = Es(function* () {
                var e,
                    { ethMac: t, wifiMac: n } = yield ic()
                if (t)
                    k.info('Using Ethernet Mac Address for device-id: '.concat(t)),
                        (e = t)
                else if (n)
                    k.info('Using Wifi Mac Address for device-id: '.concat(n)), (e = n)
                else {
                    var { stderr: i, stdout: r } = yield ve('cat /etc/machine-id')
                    !r || i
                        ? ((e = '12345678'),
                            k.error(
                                'Unable to find any hardware id, hence using: '.concat(e),
                            ))
                        : (k.info('Using machineID for device-id: '.concat(r.trim())),
                            (e = r.trim()))
                }
                var o = '40000000'.concat(e.replace(/:/g, '').slice(-8))
                return k.info('Player device id: '.concat(o.trim())), o.trim()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        zs = (function () {
            var e = Es(function* (e) {
                k.info('Executing shell command: '.concat(e))
                try {
                    var { stdout: t, stderr: n } = yield Ns(e, {
                        encoding: 'utf8',
                        timeout: 3e4,
                        maxBuffer: 40960,
                    })
                    return { cmd: e, err: null, stdout: t, stderr: n }
                } catch (t) {
                    return { cmd: e, err: t, stdout: null, stderr: null }
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Ws = (function () {
            var e = Es(function* () {
                try {
                    var {
                        stdout: e,
                        stderr: t,
                    } = yield Ns("scrot -q 50 -o $HOME/screenshot.jpeg -e 'cat $f'", {
                        encoding: 'base64',
                        timeout: 3e4,
                        maxBuffer: 512e4,
                    })
                    return { err: null, stdout: e, stderr: t }
                } catch (e) {
                    return { err: e, stdout: null, stderr: null }
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Vs = (function () {
            var e = Es(function* () {
                try {
                    var { stdout: e, stderr: t } = yield Ns(
                        'cat /sys/class/thermal/thermal_zone*/temp',
                    )
                    if (!e || t)
                        return k.error('Unable to find system temperature: ', t), null
                    var n = e.trim().split('\n'),
                        i = 0
                    for (var r of n) i = Math.max(parseInt(r), i)
                    return k.debug('max temperature: ', i / 1e3), i / 1e3
                } catch (e) {
                    return k.error('Error in getPlayerTemperature'), null
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Hs = (function () {
            var e = Es(function* () {
                try {
                    var { stdout: e, stderr: t } = yield Ns('cat /proc/uptime')
                    if (!e || t) return k.error('Unable to find player uptime: ', t), null
                    var n = e.trim().split(' ')[0]
                    return k.debug('Player uptime : ', n), n
                } catch (e) {
                    return k.error('Error in getPlayerUptime'), null
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Bs = (function () {
            var e = Es(function* (e) {
                try {
                    var { stdout: t, stderr: n } = yield Ns(
                        'sudo date -s @'.concat(parseInt(e / 1e3)),
                    )
                    k.debug(
                        'System time set '.concat(e, ': ').concat(t, ', ').concat(n, ' '),
                    )
                } catch (t) {
                    k.error(
                        'Error in setting system time '.concat(e, ', error: ').concat(t),
                    )
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Gs = (function () {
            var e = Es(function* () {
                try {
                    return yield Ns('sudo service cron restart'), !0
                } catch (e) {
                    return (
                        k.error('Error in restarting cron service: '.concat(e, ' ')), !1
                    )
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        qs = (function () {
            var e = Es(function* (e) {
                try {
                    return (
                        yield Ns('sudo timedatectl set-timezone '.concat(e)),
                        yield Gs(),
                        k.info('Timezone has been updated to '.concat(e)),
                        !0
                    )
                } catch (e) {
                    return k.error('Error in setting up timezone: '.concat(e)), !1
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Js = (function () {
            var e = Es(function* (e) {
                try {
                    var { stderr: t } = yield Ns(
                        ''
                            .concat(js, ' ')
                            .concat(X.SCRIPTS_DIR, '/system.sh --change-ssh-password "')
                            .concat(e, '"'),
                    )
                    return (
                        t && k.info('ssh password change stderr message: '.concat(t)), !0
                    )
                } catch (e) {
                    return k.error('Error in changing ssh password: '.concat(e)), !1
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Zs = !1,
        $s = (function () {
            var e = Es(function* (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 'pi-image-p2.zip'
                if ((k.info('**** Updating pi software ****'), !0 !== Zs)) {
                    Zs = !0
                    var n = t.slice(0, t.lastIndexOf('.')) + '-v14.zip'
                    Os('player', 'other', 'swupdate: '.concat(n))
                    var i = {}
                    try {
                        var r = yield q.promises.readFile(
                            ''.concat(X.ROOT_DIR, '/package.json'),
                            'utf8',
                        )
                        i = JSON.parse(r) || {}
                    } catch (e) {
                        var o = 'package.json read error for software update server check: '.concat(
                            e,
                        )
                        return k.error(o), void Os('player', 'error', o)
                    }
                    ; (0, q.chmodSync)(''.concat(X.SCRIPTS_DIR, '/upgrade.sh'), '755')
                    var a = yield q.promises.open(
                        ''.concat(X.HOME_DIR, '/forever.log'),
                        'a',
                    ),
                        s = yield q.promises.open(
                            ''.concat(X.HOME_DIR, '/forever.log'),
                            'a',
                        ),
                        c = (0, se.spawn)(
                            ''.concat(X.SCRIPTS_DIR, '/upgrade.sh'),
                            [''.concat(i.config_server, '/releases/').concat(n), n],
                            { detached: !0, stdio: ['ignore', a, s] },
                        )
                    c.unref()
                } else k.info('**** Ignoring pi update second request ****')
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Ys = (function () {
            var e = Es(function* () {
                yield ve(
                    ''
                        .concat(js, ' ')
                        .concat(X.SCRIPTS_DIR, '/system.sh --factory-reset'),
                    !0,
                ),
                    yield Se(3e3).promise,
                    Ks()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Xs = (function () {
            var e = Es(function* (e) {
                try {
                    var t = e ? '--enable-access-point' : '--disable-access-point',
                        { stdout: n } = yield Ns(
                            'sudo '.concat(js, ' ').concat(X.SYSTEM_SCRIPT, ' ').concat(t),
                        )
                    if ('--enable-access-point' === t)
                        return (
                            !(
                                !n ||
                                (-1 === n.indexOf('Wi-fi in Access Point Mode') &&
                                    -1 === n.indexOf('already in AP mode'))
                            ) || (k.info('Error in Enabling Access Point : ', n), !1)
                        )
                    if ('--disable-access-point' === t)
                        return (
                            !(
                                !n ||
                                (-1 === n.indexOf('already in  Wifi mode') &&
                                    -1 === n.indexOf('Access Point mode disabled'))
                            ) || (k.info('Error in Disabling Access Point :', n), !1)
                        )
                } catch (e) {
                    k.error('wifi AP mode change error: '.concat(e))
                }
                return !1
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        Qs = (function () {
            var e = Es(function* (e) {
                if (e) {
                    var t = e.replace(/\s+/g, '-')
                    t = (t = t.replace(/[^-0-9A-Za-z]/g, '')).replace(/^-/, '')
                    try {
                        yield q.promises.unlink(X.HOSTNAME_LINK_FILE)
                    } catch (e) { }
                    try {
                        yield q.promises.symlink(t, X.HOSTNAME_LINK_FILE)
                    } catch (e) {
                        k.error(
                            'Error creating sym link for hostname '
                                .concat(t, ' use, ')
                                .concat(e),
                        )
                    }
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        ec = (function () {
            var e = Es(function* () {
                try {
                    if (!(0, q.existsSync)(X.HOSTNAME_LINK_FILE)) return !0
                    var e = yield q.promises.readlink(X.HOSTNAME_LINK_FILE)
                    if (!e || d.hostname() === e) return !0
                    var { stderr: t } = yield Ns(
                        ''.concat(X.SYSTEM_SCRIPT, ' --change-hostname="').concat(e, '"'),
                    )
                    return (
                        t
                            ? k.error('Error in changing hostname, '.concat(t))
                            : k.info('Hostname changed to: '.concat(e)),
                        yield q.promises.unlink(X.HOSTNAME_LINK_FILE),
                        !0
                    )
                } catch (e) {
                    return k.error('Error in changing hostname, '.concat(e)), !1
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        tc = (function () {
            var e = Es(function* () {
                var { stdout: e } = yield ve(
                    ''.concat(js, ' ').concat(X.SCRIPTS_DIR, '/network/nwdiag.sh'),
                    !0,
                )
                k.info('nwdiag: '.concat(e))
                try {
                    return JSON.parse(e)
                } catch (e) {
                    return k.error('nwdiag error: '.concat(e)), null
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        nc = (function () {
            var e = Es(function* () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = d.networkInterfaces(),
                    n = { systemIP: [], myIpAddress: '' }
                for (var i in t)
                    for (var r of t[i])
                        r &&
                            !r.internal &&
                            'IPv4' === r.family &&
                            (n.systemIP.push({ type: i, ip: r.address, mac: r.mac }),
                                (n.myIpAddress += ''.concat(r.address, ' ')))
                return (
                    k.info('Network interfaces: '.concat(JSON.stringify(n.systemIP))),
                    0 === n.systemIP.length && e < 20
                        ? (k.warn(
                            'No IP available, calling getIp again after 1 sec; '.concat(e),
                        ),
                            yield Se(1e3).promise,
                            yield nc(e + 1))
                        : yield n
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ic = (function () {
            var e = Es(function* () {
                var e = [],
                    t = { wifiMac: null, ethMac: null },
                    { stderr: n, stdout: i } = yield ve('sudo ip -o link')
                if (n) k.error('Could not get MAC addresses: '.concat(n))
                else {
                    var r = i.split('\n')
                    for (var o of r)
                        if (o) {
                            var a = o.split(' '),
                                s = a[1].slice(0, -1)
                            if ('lo' === s) continue
                            var c = a[a.indexOf('link/ether') + 1]
                            e.push({ type: s, mac: c })
                        }
                    var l = e.find(
                        (e) => 'wlan0' === e.type || 0 === e.type.indexOf('wl'),
                    )
                        ; (t.wifiMac = null != l ? l.mac : null),
                            (t.wifiRow = null != l ? l : {})
                    var d = e.find((e) => 'eth0' === e.type || 0 === e.type.indexOf('en'))
                        ; (t.ethMac = null != d ? d.mac : null),
                            (t.ethRow = null != d ? d : null),
                            k.info(
                                'Ethernet MAC:'.concat(t.ethMac, ', Wifi MAC:').concat(t.wifiMac),
                            )
                }
                return t
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        rc = (function () {
            var e = Es(function* () {
                yield ve('xrandr --auto'),
                    k.debug('All connected displays have been enabled in default mode')
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        oc = (function () {
            var e = Es(function* () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [1920, 1080],
                    { stdout: n, stderr: i } = yield ve(
                        'DISPLAY=:0.0 xrandr --query |  head -n 1',
                        !0,
                    )
                if (i || !n)
                    return (
                        k.error('Unable to get resolution, using default,err: '.concat(i)),
                        { err: i, edidResolution: t }
                    )
                try {
                    var r = n.split(',')[1].trim().split(' ')
                    return 'current' === r[0]
                        ? (r[1] && (t[0] = parseInt(r[1])),
                            r[3] && (t[1] = parseInt(r[3])),
                            !0 !== e &&
                            k.info('Screen resolution from xrandr: '.concat(t.toString())),
                            { err: null, edidResolution: t })
                        : (k.error("No 'current' param found in xrandr command"),
                            { err: null, edidResolution: t })
                } catch (e) {
                    return (
                        k.error(
                            'Could not get screen resolution from xrandr, using default: '.concat(
                                t.toString(),
                            ),
                        ),
                        { err: e && e.message, edidResolution: t }
                    )
                }
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        ac = (function () {
            var e = Es(function* () {
                var e,
                    t = [],
                    { edidResolution: n } = yield oc(),
                    i = {
                        interfaceName: 'HDMI-1',
                        interfaceResolutionAndOffset: ''
                            .concat(n[0], 'x')
                            .concat(n[1], '+0+0'),
                        resolution: n,
                        offset: [0, 0],
                    },
                    { stdout: r, stderr: o } = yield ve(
                        "xrandr --verbose | awk '/ connected/{print $1,$3,$4}'",
                        !0,
                    )
                if (!o && r) e = r.trim().split('\n')
                else {
                    k.error(
                        'Unable to get connected displays,err: '.concat(
                            o,
                            ', trying disconnected displays',
                        ),
                    )
                    var { stdout: a, stderr: s } = yield ve(
                        "xrandr --verbose | awk '/disconnected/{print $1,$3,$4}'",
                        !0,
                    )
                    if (s || !a)
                        return (
                            k.error(
                                'Unable to get disconnected displays,err: '
                                    .concat(s, ', returning default ')
                                    .concat(i.interfaceName),
                            ),
                            [i]
                        )
                    for (var c = a.trim().split('\n'), l = 0; l < c.length; l++)
                        (-1 === c[l].indexOf('primary') && 0 !== l) || (e = [c[l]])
                }
                var d = 0
                for (var u of e)
                    if (u) {
                        var p = u.trim().split(' '),
                            y = {
                                interfaceName: p[0],
                                interfaceResolutionAndOffset: 'primary' === p[1] ? p[2] : p[1],
                                offset: [0, 0],
                                resolution: n,
                            }
                        if (!0 === /^[0-9x+]+$/.test(y.interfaceResolutionAndOffset)) {
                            var f = y.interfaceResolutionAndOffset.split('+')
                                ; (y.resolution = f[0].split('x').map(Number)),
                                    (y.offset = f.slice(1).map(Number))
                            var v = y.resolution[0] * y.resolution[1]
                            d < v ? ((d = v), t.unshift(y)) : t.push(y)
                        } else
                            k.error(
                                'Screen '
                                    .concat(
                                        y.interfaceName,
                                        ' does not have resolution and offset information: ',
                                    )
                                    .concat(u),
                            ),
                                (y.interfaceResolutionAndOffset = ''
                                    .concat(n[0], 'x')
                                    .concat(n[1], '+0+0')),
                                t.push(y)
                    }
                return k.info('Available displays: '.concat(JSON.stringify(t))), t
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        sc = (function () {
            var e = Es(function* () {
                var e,
                    t,
                    n =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 'auto',
                    i =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 'landscape',
                    r =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : { mode: 'mirror' },
                    o = yield ac(),
                    a = 'normal'
                switch (i) {
                    case 'portrait':
                        e = 'right'
                        break
                    case 'portrait270':
                        e = 'left'
                        break
                    case 'invert':
                        e = 'inverted'
                        break
                    case 'invert-horizontal':
                        ; (e = 'normal'), (a = 'x')
                        break
                    default:
                        e = 'normal'
                }
                switch (n) {
                    case '720p':
                        t = '--mode 1280x720'
                        break
                    case '1080p':
                        t = '--mode 1920x1080'
                        break
                    default:
                        t = '--auto'
                }
                var s = 0
                for (var c of o)
                    if (
                        c &&
                        (0 === s &&
                            (yield ve(
                                'xrandr --output '.concat(c.interfaceName, ' --primary'),
                                !0,
                            ),
                                s++),
                            k.info(
                                'Changing display:'
                                    .concat(c.interfaceName, ' value for resolution to ')
                                    .concat(t),
                            ),
                            yield ve(
                                'xrandr --output '.concat(c.interfaceName, ' ').concat(t),
                                !0,
                            ),
                            k.info(
                                'Changing display:'
                                    .concat(c.interfaceName, ' value for orientation to ')
                                    .concat(e),
                            ),
                            yield ve(
                                'xrandr --output '
                                    .concat(c.interfaceName, ' --rotate ')
                                    .concat(e, ' --reflect ')
                                    .concat(a),
                                !0,
                            ),
                            '4k' === r.mode)
                    )
                        break
                if (o.length >= 2)
                    if ('mirror' === r.mode)
                        k.info(
                            'Mirroring '
                                .concat(o[0].interfaceName, ' to ')
                                .concat(o[1].interfaceName),
                        ),
                            yield ve(
                                'xrandr --output '
                                    .concat(o[1].interfaceName, ' --same-as ')
                                    .concat(o[0].interfaceName),
                                !0,
                            )
                    else if (-1 !== r.mode.indexOf('tile')) {
                        var l =
                            -1 !== r.mode.indexOf('horizontal') ? 'horizontal' : 'vertical',
                            d = !1 === r.reverse ? 'normal' : 'inverted',
                            u = Ms[e][l][d],
                            p = o[u.screen1Index].interfaceName,
                            y = o[u.screen2Index].interfaceName,
                            f = u.direction
                        k.info(
                            'Screen1: '
                                .concat(p, ' , Direction: ')
                                .concat(f, ', Screen2: ')
                                .concat(y),
                        ),
                            yield ve(
                                'xrandr --output '.concat(p, ' ').concat(f, ' ').concat(y),
                                !0,
                            )
                    } else
                        '4k' === r.mode &&
                            (k.info('Switching '.concat(o[1].interfaceName, ' off')),
                                yield ve(
                                    'xrandr --output '.concat(o[1].interfaceName, ' --off'),
                                    !0,
                                ))
                return yield ac()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        cc = (function () {
            var e = Es(function* (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                if (!e) return !1
                try {
                    var n = yield we(e)
                    if (n && 0 !== n.length) {
                        var i = n.toString()
                        k.debug('Killing child process ids '.concat(i)),
                            yield ve('sudo kill -9 '.concat(i), !0)
                    }
                } catch (t) {
                    k.error(
                        'Unable to find childPids for killAll of '.concat(e, ',').concat(t),
                    )
                }
                if ((yield ve('sudo kill -9 '.concat(e), !0), !0 === t)) {
                    k.error('Killing zombie omxplayer.bin')
                    var { stdout: r, stderr: o } = yield ve(
                        'sudo pgrep -P 1 -l | grep omxplayer',
                        !0,
                    )
                    if (!o && r) {
                        var a = r.split('\n')
                        for (var s of a)
                            if (s && s.length > 0) {
                                var c = s.split(' ')[0]
                                k.error('Zombie omxplayer.bin, pid: '.concat(c))
                                var { stderr: l } = yield ve('sudo kill -9 '.concat(c), !0)
                                k.error(l)
                            }
                    }
                }
                return !0
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        lc = (function () {
            var e = Es(function* (e) {
                try {
                    var t = e ? '0' : '1',
                        { stderr: n } = yield Ns(
                            ''
                                .concat(js, ' ')
                                .concat(
                                    X.SCRIPTS_DIR,
                                    '/system.sh --change-config-txt avoid_warnings ',
                                )
                                .concat(t),
                        )
                    return (
                        !n || (k.error('Avoid warnings mode change error: '.concat(n)), !1)
                    )
                } catch (e) {
                    return k.error('Avoid warnings mode change error: '.concat(e)), !1
                }
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        dc = (function () {
            var e = Es(function* () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = null
                if (!0 !== e) {
                    var { stdout: n } = yield ve(
                        'mpv --audio-device=help | grep "alsa/sysdefault" | grep -v HDMI | grep -oP "(?<=\').*(?=\')"',
                        !0,
                    )
                    if (n) {
                        var i = n.trim().split('\n')
                        for (var r of ((t = i[0].trim()), i))
                            if (-1 !== r.indexOf('Headphones')) {
                                t = r.trim()
                                break
                            }
                        k.info('Available audio devices for aux port: '.concat(t))
                    }
                } else {
                    var { stdout: o, stderr: a } = yield ve(
                        "xrandr | awk '/ connected/ && /[[:digit:]]x[[:digit:]].*+/{print $1}'",
                        !0,
                    )
                    if (a || !o) k.debug('Unable to get HDMI display number')
                    else {
                        var s = o.trim().split(' ')[0],
                            { stdout: c } = yield ve(
                                'mpv --audio-device=help | grep "alsa/sysdefault\\|alsa/hdmi" | grep HDMI | grep -oP "(?<=\').*(?=\')"',
                                !0,
                            )
                        if (c) {
                            var l = s.split('\n')[0]
                            if ('HDMI-1' === l || 'DP-1' === l) t = c.split('\n')[0]
                            else if ('HDMI-2' === l || 'DP-2' === l) t = c.split('\n')[1]
                            else {
                                var d = parseInt(l.split('-')[1]) - 1
                                t = c.split('\n')[d]
                            }
                            t && (t = t.trim()),
                                k.info('Available audio devices for hdmi: '.concat(t))
                        }
                    }
                }
                return t
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function uc(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function pc(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    uc(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    uc(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var { createSlice: yc } = C,
        fc = yc({
            name: O,
            initialState: {
                name: 'piPlayer',
                installation: 'admin',
                secret: 'default',
                TZ: '',
                currentVersion: '',
                orientation: 'landscape',
                resolution: 'auto',
                monitorArrangement: { mode: 'mirror', reverse: !1 },
                displayInterfaces: null,
                enableLog: !1,
                reportIntervalMinutes: 5,
                systemMessagesHide: !1,
                hideWelcomeNotice: !1,
                forceTvOn: !0,
                disableCECPowerCheck: !1,
                disableAp: !0,
                disableWarnings: !1,
                disableWebUi: !1,
                authCredentials: { user: 'pi', password: 'pi' },
                sshPassword: 'pi',
                newUi: !1,
                sdConfigFileExists: !1,
                sdConfigInstallation: null,
                sdConfigGroup: null,
                sdConfigTimezone: null,
                sdConfigName: null,
                sdConfigPin: null,
            },
            reducers: {
                setValues(e, t) {
                    Object.assign(e, t.payload)
                },
                resetSdConfigValues(e) {
                    e.sdConfigFileExists = !1
                },
            },
        }),
        { resetSdConfigValues: vc } = fc.actions
    const gc = fc.reducer
    var mc = (function () {
        var e = pc(function* (e, t) {
            yield q.promises.writeFile(
                l.join(X.HOME_DIR, '.wgetrc'),
                'user = '.concat(e, '\npassword = ').concat(t),
            ),
                yield q.promises.writeFile(
                    l.join(X.ROOT_DIR, '/htpasswd'),
                    ''.concat(e, ':').concat(J(t)),
                )
        })
        return function (t, n) {
            return e.apply(this, arguments)
        }
    })(),
        hc = (e) => (t, n) => {
            var i = n().devicePreferences
            t(fc.actions.setValues(ie(e, i)))
        },
        kc = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            return (function () {
                var t = pc(function* (t, n) {
                    if (
                        (t(hc(e)),
                            e.name && (yield Qs(e.name)),
                            e.TZ && (yield qs(e.TZ)),
                            e.resolution || e.orientation || e.monitorArrangement)
                    ) {
                        var {
                            resolution: i,
                            orientation: r,
                            monitorArrangement: o,
                        } = n().devicePreferences,
                            a = yield sc(
                                e.resolution || i,
                                e.orientation || r,
                                e.monitorArrangement || o,
                            ),
                            { edidResolution: s } = yield oc()
                        t(fc.actions.setValues({ displayInterfaces: a })),
                            Pc.dispatch(B({ edidResolution: s })),
                            t($t()),
                            t(qn(!0)),
                            t(Jn(!0)),
                            t(Zn(!0))
                    }
                    if (e.authCredentials) {
                        var { user: c, password: l } = e.authCredentials
                        yield mc(c, l)
                    }
                    if (
                        (e.sshPassword &&
                            (yield Js(e.sshPassword), k.info('ssh password changed')),
                            void 0 !== e.disableAp)
                    ) {
                        var d = yield Xs(!e.disableAp)
                        k.info(
                            'Access Point mode changed '.concat(
                                d ? 'successfully' : 'with error',
                            ),
                        )
                    }
                    if (void 0 !== e.disableWarnings) {
                        var u = yield lc(!e.disableWarnings)
                        k.info(
                            'Avoid warnings mode changed '.concat(
                                u ? 'successfully' : 'with error',
                            ),
                        )
                    }
                })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })()
        },
        { configureStore: bc, getDefaultMiddleware: wc, combineReducers: Sc } = C,
        xc = (I.createLogger, I.createLogger)({
            diff: !0,
            collapsed: !0,
            predicate: () => f,
        })
    const Pc = bc({
        reducer: Sc({
            [A]: G,
            [O]: gc,
            [T]: Ia,
            [F]: Ko,
            [D]: je,
            [R]: Gr,
            [_]: ha,
            [E]: Da,
            [N]: Gn,
            [j]: Va,
            [M]: xo,
            [L]: hr,
            [U]: Ht,
            [K]: Nr,
            [z]: Di,
        }),
        middleware: [...wc({ serializableCheck: !1, immutableCheck: !1 }), xc],
    })
    function Cc(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Ic = (function () {
        var e,
            t =
                ((e = function* (e) {
                    Pc.dispatch(va('PLAYLISTS'))
                    var { orientation: t } = Pc.getState().devicePreferences,
                        {
                            deviceReadyForPlaylist: n,
                            deployedPlaylists: i,
                        } = Pc.getState().mediaAssets,
                        {
                            combineDefaultPlaylist: r,
                            playAllEligiblePlaylists: o,
                            alternateContent: a,
                        } = Pc.getState().mediaSettings
                    if (!0 === n)
                        if (!0 !== e.justUpdateState) {
                            var {
                                playlistOn: s,
                                scheduledPlaylists: c,
                                groupTicker: d,
                                playlistTriggerType: u,
                            } = e
                            if (!0 === s) {
                                var p = [],
                                    y = {}
                                try {
                                    var f = yield q.promises.readFile(
                                        l.join(X.MEDIA_DIR, '__'.concat(c[0], '.json')),
                                    )
                                        ; (y = JSON.parse(f) || {}), p.push(...y.assets)
                                } catch (e) {
                                    return void k.error(
                                        'Scheduled playlist "'
                                            .concat(c[0], '" read error: ')
                                            .concat(e),
                                    )
                                }
                                if (!0 === r && c[0] !== i[0].name && 'TV_OFF' !== i[0].name) {
                                    var v = i[0].name
                                    try {
                                        var g = yield q.promises.readFile(
                                            l.join(X.MEDIA_DIR, '__'.concat(v, '.json')),
                                        ),
                                            m = JSON.parse(g) || {}
                                        p.unshift(...m.assets)
                                    } catch (e) {
                                        k.error(
                                            'Default playlist combine: "'
                                                .concat(v, '" read error: ')
                                                .concat(e),
                                        )
                                    }
                                }
                                if (!0 === o) {
                                    var h = 1
                                    for (var b of c)
                                        if ('TV_OFF' !== b && b !== c[0])
                                            try {
                                                var w = yield q.promises.readFile(
                                                    l.join(X.MEDIA_DIR, '__'.concat(b, '.json')),
                                                ),
                                                    S = JSON.parse(w) || {}
                                                if (a) {
                                                    for (var x = 0, P = S.assets.length; x < P; x++)
                                                        p.splice((x + 1) * h + x, 0, S.assets[x])
                                                    h++
                                                } else p.push(...S.assets)
                                            } catch (e) {
                                                k.error(
                                                    'Scheduled playlist combine: "'
                                                        .concat(b, '" read error: ')
                                                        .concat(e),
                                                )
                                            }
                                }
                                var C = re(p)
                                if (0 === C.length)
                                    return void k.error(
                                        'There are no assets to play for playlist - '.concat(
                                            c[0],
                                            '}',
                                        ),
                                    )
                                if (-1 === et.indexOf(y.layout))
                                    return void k.error(
                                        ''.concat(y.layout, ': Layout not supported'),
                                    )
                                if (
                                    (t.indexOf('portrait') >= 0 &&
                                        -1 === y.layout.indexOf('custom') &&
                                        ('1' === y.layout
                                            ? (y.layout = '2ap')
                                            : (y.layout = y.layout.replace('270', ''))),
                                        y.layout.indexOf('custom') >= 0)
                                )
                                    if ((0, q.existsSync)(l.join(X.MEDIA_DIR, y.templateName)))
                                        try {
                                            var I = yield q.promises.readFile(
                                                l.join(X.MEDIA_DIR, y.templateName),
                                                'utf8',
                                            ),
                                                A = I.slice(I.indexOf('data-properties=') + 17),
                                                O = A.slice(0, A.indexOf('}}') + 2).replace(
                                                    /&quot;/g,
                                                    '"',
                                                )
                                            k.debug(A)
                                            var T = JSON.parse(O) || {}
                                            k.info(
                                                'Extracted video window values from '.concat(
                                                    y.templateName,
                                                ),
                                            ),
                                                k.info(T),
                                                T.main &&
                                                T.main.enable &&
                                                !y.videoWindow &&
                                                ((y.videoWindow = {}),
                                                    (y.videoWindow.xoffset = T.main.x),
                                                    (y.videoWindow.yoffset = T.main.y),
                                                    (y.videoWindow.length = T.main.w),
                                                    (y.videoWindow.width = T.main.h),
                                                    (y.videoWindow.mainzoneOnly =
                                                        T.main.w !== T.width || T.main.h !== T.height),
                                                    'custom' === T.resolution &&
                                                    ((y.videoWindow.fullscreenHeight = T.height),
                                                        (y.videoWindow.fullscreenWidth = T.width)),
                                                    k.info('changed values for video window, main'),
                                                    k.debug(y.videoWindow)),
                                                ['side', 'bottom', 'zone4'].forEach(function (e) {
                                                    T[e] &&
                                                        T[e].enable &&
                                                        !y.zoneVideoWindow[e] &&
                                                        ((y.zoneVideoWindow[e] = {}),
                                                            (y.zoneVideoWindow[e].xoffset = T[e].x),
                                                            (y.zoneVideoWindow[e].yoffset = T[e].y),
                                                            (y.zoneVideoWindow[e].length = T[e].w),
                                                            (y.zoneVideoWindow[e].width = T[e].h),
                                                            k.info(
                                                                'changed values for video window, '.concat(e),
                                                            ),
                                                            k.debug(y.zoneVideoWindow[e]))
                                                }),
                                                k.info('changed values for video window')
                                        } catch (e) {
                                            k.error(
                                                ' *** error in extracting values of custom template ***: '.concat(
                                                    e,
                                                ),
                                            )
                                        }
                                    else
                                        k.error(
                                            'Custom template ',
                                            y.templateName,
                                            ' does not exist in media directory.',
                                        ),
                                            (y.templateName = 'fallbackCustomLayoutFile')
                                Pc.dispatch(
                                    Ao({
                                        playlistTriggerType: u,
                                        playlistFiles: C,
                                        layout: y.layout,
                                        videoWindow: y.videoWindow,
                                        zoneVideoWindow: y.zoneVideoWindow,
                                        templateName: y.templateName,
                                        playlistName: c[0],
                                        ticker:
                                            y.settings.ticker && y.settings.ticker.enable
                                                ? y.settings.ticker
                                                : d && d.enable
                                                    ? d
                                                    : null,
                                    }),
                                )
                            } else Pc.dispatch(Do(c[0]))
                        } else
                            k.debug(
                                'Just state update, skipping onChange for playlist-observer',
                            )
                    else
                        k.info('Device not ready, skipping onChange for playlist-observer')
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                Cc(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                Cc(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function (e) {
            return t.apply(this, arguments)
        }
    })()
    const Ac = {
        selectStateSubset: (e) =>
            Ie(e.mediaAssets, [
                'scheduledPlaylists',
                'playlistOn',
                'groupTicker',
                'playlistTriggerType',
                'forceRestart',
                'justUpdateState',
            ]),
        onChange: Ic,
    }
    function Oc(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Tc = (function () {
        var e,
            t =
                ((e = function* (e) {
                    Pc.dispatch(va('ADVERT'))
                    var { scheduledAdvertPlaylists: t } = e
                    if (!0 !== e.justUpdateState) {
                        var n,
                            i = []
                        for (var r of t)
                            try {
                                var o = yield q.promises.readFile(
                                    l.join(X.MEDIA_DIR, '__'.concat(r, '.json')),
                                ),
                                    a = JSON.parse(o) || {}
                                if (a.settings && a.settings.ads && a.settings.ads.adPlaylist) {
                                    var s = re(a.assets)
                                    s.length &&
                                        i.push({
                                            files: s,
                                            interval: a.settings.ads.adInterval,
                                            adCount: a.settings.ads.adCount,
                                            noMainPlay: a.settings.ads.noMainPlay,
                                            playlistName: r,
                                        })
                                } else
                                    k.error(
                                        'Error, missing settings for advertisement playlist '.concat(
                                            r,
                                        ),
                                    )
                            } catch (e) {
                                k.error('Advt playlist "'.concat(r, '" read error: ').concat(e))
                            }
                        i.length
                            ? Pc.dispatch(
                                ((n = i),
                                    (e, t) => {
                                        for (var i of (Mr(n.length), n)) {
                                            i.interval =
                                                i.interval && i.interval > 5 ? 1e3 * i.interval : 5e3
                                            var r = parseInt(i.adCount)
                                                ; (i.adCount = isNaN(r) ? 1 : r),
                                                    (i.index = 0),
                                                    (i.adReady = !1)
                                        }
                                        e(Dr.actions.updateAddAdsAndSchedule(n))
                                        var { adsObjectArray: o } = t().playerAdvt
                                        for (var [a, s] of o.entries())
                                            k.debug('index and adObject: ', a, s),
                                                e(Lr(a, s.interval))
                                    }),
                            )
                            : Pc.dispatch(Er())
                    } else
                        k.debug('Just state update, skipping onChange for advt-observer')
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                Oc(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                Oc(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function (e) {
            return t.apply(this, arguments)
        }
    })()
    const Dc = {
        selectStateSubset: (e) => {
            var {
                scheduledAdvertPlaylists: t,
                forceAdvertRestart: n,
                justUpdateState: i,
            } = e.mediaAssets
            return {
                scheduledAdvertPlaylists: t,
                forceRestart: n,
                justUpdateState: i,
            }
        },
        onChange: Tc,
    },
        Rc = require('node-mpv')
    function Fc(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function _c(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    Fc(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    Fc(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Ec = {
        process: null,
        playing: !1,
        playRandom: !1,
        volume: 0,
        enableHdmi: !1,
        files: [],
    },
        Nc = 0,
        jc = 0,
        Mc = new Rc({ audio_only: !0, auto_restart: !0 }, [])
        ; (Ec.process = Mc.mpvPlayer),
            Mc.on(
                'started',
                _c(function* () {
                    k.debug('Mpv started event: '.concat(jc))
                }),
            ),
            Mc.on(
                'crashed',
                _c(function* () {
                    k.debug('Mpv crashed event: '.concat(jc))
                }),
            ),
            Mc.on(
                'stopped',
                _c(function* () {
                    k.debug('Mpv stopped event: '.concat(jc)),
                        (jc =
                            (Ec.playRandom ? Math.floor(1e4 * Math.random()) : jc + 1) %
                            Ec.files.length),
                        Date.now() - Nc < 1e3 && (yield Se(1e3).promise),
                        Ec.playing && Lc(jc)
                }),
            )
    var Lc = (function () {
        var e = _c(function* (e) {
            Nc = Date.now()
            var t = Ec.files[e]
            k.debug('Playing mpv lounge file: '.concat(t.filename))
            try {
                yield Mc.load(
                    ''.concat(
                        'radio' === t.type ? t.filename : l.join(X.MEDIA_DIR, t.filename),
                    ),
                )
            } catch (e) {
                k.error('node-mpv loadfile error: '), console.log(e)
            }
        })
        return function (t) {
            return e.apply(this, arguments)
        }
    })(),
        Kc = !1,
        Uc = (function () {
            var e = _c(function* (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : 100,
                    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    { audioVolume: r } = Pc.getState().mediaSettings
                if (
                    (r < n && (n = r),
                        Object.assign(Ec, {
                            files: e,
                            playRandom: t,
                            volume: n,
                            enableHdmi: i,
                        }),
                        !0 !== Kc)
                ) {
                    Kc = !0
                    try {
                        !0 === Ec.playing && Mc.isRunning()
                            ? k.debug('Reusing existing mpvPlayer')
                            : (k.debug('Starting mpv player'),
                                yield Mc.start(),
                                yield Se(1e3).promise)
                        var o = yield dc(i)
                        k.debug(
                            'Invoking lounge music process: audio-device='
                                .concat(o, ',random=')
                                .concat(t, ',vol=')
                                .concat(n),
                        ),
                            null !== o && (yield Mc.setProperty('audio-device', o)),
                            yield Mc.volume(Ec.volume)
                    } catch (e) {
                        k.error('node-mpv start error: '), console.log(e)
                    }
                    ; (Kc = !1),
                        (jc = t ? Math.floor(1e4 * Math.random()) % e.length : 0),
                        (Ec.playing = !0),
                        Lc(jc)
                } else k.debug('Skipping startLoungeMusic due to existing one')
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        zc = (function () {
            var e = _c(function* () {
                if (!0 === Ec.playing && Mc.isRunning()) {
                    Ec.playing = !1
                    try {
                        yield Mc.quit()
                    } catch (e) {
                        k.error('node-mpv quit error: '), console.log(e)
                    }
                    k.debug('mpvPlayer returned from quit')
                }
                return !0
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function Wc(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Vc = (function () {
        var e,
            t =
                ((e = function* (e) {
                    Pc.dispatch(va('LOUNGE'))
                    var { scheduledAudioPlaylists: t } = e
                    if (!0 !== e.justUpdateState) {
                        var n = t[0]
                        if (!n) return k.info('Stopping Lounge music'), void Hc()
                        var { resolution: i } = Pc.getState().devicePreferences
                        if ('NTSC' === i || 'PAL' === i)
                            return (
                                k.error(
                                    '**** Can not play lounge music in Composite video(NTSC or PAL) configurations ****',
                                ),
                                void Hc()
                            )
                        try {
                            var r = yield q.promises.readFile(
                                l.join(X.MEDIA_DIR, '__'.concat(n, '.json')),
                            ),
                                o = JSON.parse(r) || {},
                                a = o.assets.filter(function (e) {
                                    return e && e.filename && e.filename.match(ot.audioRegex)
                                }),
                                s = o.assets.filter(function (e) {
                                    return (
                                        e && e.filename && e.filename.match(ot.radioFileRegex)
                                    )
                                })
                            for (var c of s)
                                try {
                                    var d = yield q.promises.readFile(
                                        l.join(X.MEDIA_DIR, c.filename),
                                    ),
                                        u = JSON.parse(d)
                                    a.push({
                                        filename: u.link,
                                        duration: c.duration,
                                        type: 'radio',
                                    })
                                } catch (e) {
                                    k.error(
                                        "Error in reading radio link '"
                                            .concat(c.filename, "' for lounge music, ")
                                            .concat(e),
                                    )
                                }
                            var p = re(a)
                            p.length
                                ? (Uc(
                                    p,
                                    o.settings.audio.random,
                                    o.settings.audio.volume,
                                    o.settings.audio.hdmi,
                                ),
                                    Pc.dispatch(da()))
                                : (k.error(
                                    '**** No MP3/Radio link files present to Play the lounge music ****',
                                ),
                                    Hc())
                        } catch (e) {
                            k.error(
                                'Audio playlist "'.concat(n, '" read error: ').concat(e),
                            ),
                                Hc()
                        }
                    } else
                        k.debug(
                            'Just state update, skipping onChange for lounge-observer',
                        )
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                Wc(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                Wc(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function (e) {
            return t.apply(this, arguments)
        }
    })(),
        Hc = () => {
            zc(), Pc.dispatch(ua())
        }
    const Bc = {
        selectStateSubset: (e) => {
            var {
                scheduledAudioPlaylists: t,
                forceLoungeRestart: n,
                justUpdateState: i,
            } = e.mediaAssets
            return { scheduledAudioPlaylists: t, forceRestart: n, justUpdateState: i }
        },
        onChange: Vc,
    }
    var Gc = (e, t, n) => {
        var i = {}
        function r() {
            var r = Pc.getState(),
                o = t(r),
                { forceRestart: a } = o
            if ((delete o.forceRestart, !Q(o, i[e]) || a)) {
                if (k.getLevel() <= k.levels.DEBUG) {
                    var s = []
                    for (var c of Object.keys(o))
                        o[c] !== (i[e] && i[e][c]) &&
                            s.push({ [c]: { old: i[e] && i[e][c], new: o[c] } })
                    k.debug('State observer for diff: '.concat(e)),
                        k.debug(JSON.stringify(s, null, 4))
                }
                ; (i[e] = o),
                    k.debug(
                        'store obersver for '.concat(e, ' and forceRestart is ').concat(a),
                    ),
                    k.debug(JSON.stringify(o)),
                    n(o)
            }
        }
        var o = Pc.subscribe(r)
        return r(), o
    }
    const qc = require('express'),
        Jc = require('http-auth'),
        Zc = require('http-auth-connect'),
        $c = require('method-override'),
        Yc = require('body-parser'),
        Xc = require('serve-favicon'),
        Qc = require('multer')
    var el = (e, t, n) => {
        e &&
            (e.contentType('json'),
                e.json({ success: !0, stat_message: t, data: n }))
    },
        tl = (e, t, n) => {
            e &&
                (e.contentType('json'),
                    e.json({
                        success: !1,
                        stat_message: ''.concat(t, ',').concat(n ? n.toString() : ''),
                    }))
        }
    function nl(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function il(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    nl(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    nl(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var rl = (e) => {
        var t = 'unknown-type'
        return (
            null !== e.match(ot.videoRegex)
                ? (t = 'video')
                : null !== e.match(ot.audioRegex)
                    ? (t = 'audio')
                    : null !== e.match(ot.imageRegex)
                        ? (t = 'image')
                        : null !== e.match(ot.noticeRegex)
                            ? (t = 'html')
                            : null !== e.match(ot.pdffileRegex)
                                ? (t = 'pdf')
                                : null !== e.match(ot.zipfileRegex)
                                    ? (t = 'zip')
                                    : null !== e.match(ot.mediaRss)
                                        ? (t = 'media-rss')
                                        : null !== e.match(ot.localFolderRegex)
                                            ? (t = 'local')
                                            : null !== e.match(ot.playlist)
                                                ? (t = 'playlist')
                                                : null !== e.match(ot.txtFileRegex)
                                                    ? (t = 'text')
                                                    : (e.match(ot.radioFileRegex) ||
                                                        e.match(ot.liveStreamRegex) ||
                                                        e.match(ot.omxStreamRegex) ||
                                                        e.match(ot.linkURL) ||
                                                        e.match(ot.CORSLink)) &&
                                                    (t = 'link'),
            t
        )
    }
    const ol = {
        index:
            ((fl = il(function* (e, t) {
                var n = Pc.getState().deviceDownload,
                    i = parseInt(n.totalDiskSpace),
                    r = parseInt(n.diskSpaceUsed),
                    o = {
                        sizes: { total: i, used: parseInt((r * i) / 100) },
                        files: [],
                        dbdata: [],
                        systemAssets: ot.systemAssets,
                        player: !0,
                    },
                    a = []
                try {
                    var s = yield q.promises.readdir(X.MEDIA_DIR)
                        ; (o.files = s.filter(
                            (e) => '_' !== e.charAt(0) && '.' !== e.charAt(0),
                        )),
                            o.files.sort((e, t) => e.localeCompare(t, void 0, { numeric: !0 }))
                } catch (e) {
                    var c = 'Error reading media directory: '.concat(e)
                    return k.error(c), tl(t, c)
                }
                var {
                    deployedPlaylists: d,
                    assetsValidity: u,
                } = Pc.getState().mediaAssets
                for (var p of d)
                    try {
                        var y = yield q.promises.readFile(
                            l.join(X.MEDIA_DIR, '__'.concat(p.name, '.json')),
                            'utf8',
                        ),
                            f = JSON.parse(y)
                            ; (f.assets = f.assets.map((e) => e.filename)), a.push(f)
                    } catch (e) {
                        k.error('Playlist read/parse error: '.concat(e))
                    }
                var v = function* (e) {
                    var t = {
                        name: e,
                        type: rl(e),
                        size: 0,
                        labels: [],
                        playlists: [],
                        validity: {},
                        installation: Pc.getState().devicePreferences.installation,
                    }
                    try {
                        var { size: n } = yield q.promises.stat(l.join(X.MEDIA_DIR, e))
                        t.size = n
                    } catch (t) {
                        k.error(''.concat(e, ' stat read error: ').concat(t))
                    }
                    ; (t.playlists = a
                        .filter((t) => t.assets.indexOf(e) >= 0)
                        .map((e) => e.name)),
                        (t.validity = u.find((t) => t.name === e)),
                        o.dbdata.push(t)
                }
                for (var g of o.files) yield* v(g)
                return el(t, 'Sending media directory files', o)
            })),
                function (e, t) {
                    return fl.apply(this, arguments)
                }),
        createFiles:
            ((yl = il(function* (e, t) {
                var n = [],
                    i = [],
                    r = function* (e, t) {
                        var r = (t.originalname || t.name).normalize('NFC')
                        if (!r)
                            return k.error('Filename not found for '.concat(e)), 'continue'
                        r = r.replace(ot.filenameRegex, '')
                        var o = {
                            ä: 'ae',
                            ö: 'oe',
                            ß: 'ss',
                            ü: 'ue',
                            æ: 'ae',
                            ø: 'oe',
                            å: 'aa',
                            é: 'e',
                            è: 'e',
                        }
                        null !==
                            (r = r.replace(/[äößüæøåéè]/gi, (e) => o[e])).match(
                                ot.zipfileRegex,
                            ) && ((r = r.replace(/ /g, '')), i.push(r)),
                            null !== r.match(ot.brandRegex) && (r = r.toLowerCase()),
                            r.match(ot.customLayoutRegex)
                        try {
                            yield q.promises.rename(t.path, l.join(X.MEDIA_DIR, r))
                        } catch (e) {
                            return (
                                k.error(
                                    'Error in renaming asset '
                                        .concat(t.path, ' to ')
                                        .concat(r, ': ')
                                        .concat(e),
                                ),
                                'continue'
                            )
                        }
                        n.push({ name: r, size: t.size, type: t.mimetype || t.type })
                    }
                for (var [o, a] of Object.entries(e.files)) yield* r(o, a)
                return (
                    i.length > 0 && so(i),
                    Pc.dispatch(qr()),
                    el(t, ' Successfully uploaded files', n)
                )
            })),
                function (e, t) {
                    return yl.apply(this, arguments)
                }),
        updateFileDetails: (e, t) => el(t, 'Nothing to update in player'),
        getFileDetails:
            ((pl = il(function* (e, t) {
                var n = e.params.file
                if (!n) return tl(t, 'file name does not exist')
                try {
                    var i = yield q.promises.stat(l.join(X.MEDIA_DIR, n)),
                        r = {
                            name: n,
                            size: ~~(i.size / 1e3) + ' KB',
                            ctime: i.ctime,
                            type: rl(n),
                            path: '/media/'.concat(n),
                        }
                    return el(t, 'Sending file details', r)
                } catch (e) {
                    return tl(t, 'file stat error', e)
                }
            })),
                function (e, t) {
                    return pl.apply(this, arguments)
                }),
        updateAsset:
            ((ul = il(function* (e, t) {
                var n = e.params.file,
                    i = e.body.newname
                if (!n || !i) return tl(t, 'File does not exist')
                try {
                    yield q.promises.rename(
                        l.join(X.MEDIA_DIR, n),
                        l.join(X.MEDIA_DIR, i),
                    )
                } catch (e) {
                    return tl(t, 'File rename error', e)
                }
                if (n.match(ot.noticeRegex) && 0 !== n.indexOf('custom_layout'))
                    try {
                        yield q.promises.rename(
                            l.join(
                                X.MEDIA_DIR,
                                '_'.concat(n.slice(0, n.lastIndexOf('.')), '.json'),
                            ),
                            l.join(
                                X.MEDIA_DIR,
                                '_'.concat(i.slice(0, i.lastIndexOf('.')), '.json'),
                            ),
                        )
                    } catch (e) {
                        k.error('Json file rename error '.concat(e, ' for ').concat(n))
                    }
                return el(t, 'Successfully renamed file to '.concat(i))
            })),
                function (e, t) {
                    return ul.apply(this, arguments)
                }),
        deleteFile:
            ((dl = il(function* (e, t) {
                var n = e.params.file
                try {
                    yield q.promises.unlink(l.join(X.MEDIA_DIR, n))
                } catch (e) {
                    return tl(t, 'Unable to delete file', e)
                }
                if (n.match(ot.noticeRegex) && 0 !== n.indexOf('custom_layout'))
                    try {
                        yield q.promises.unlink(
                            l.join(X.MEDIA_DIR, '_'.concat(l.basename(n, '.html'), '.json')),
                        )
                    } catch (e) {
                        k.error('Json file delete error '.concat(e, ' for ').concat(n))
                    }
                return Pc.dispatch(qr()), el(t, 'Deleted file', n)
            })),
                function (e, t) {
                    return dl.apply(this, arguments)
                }),
        createNotice:
            ((ll = il(function* (e, t) {
                return tl(t, 'Not implemented')
            })),
                function (e, t) {
                    return ll.apply(this, arguments)
                }),
        getNotice:
            ((cl = il(function* (e, t) {
                return tl(t, 'Not implemented')
            })),
                function (e, t) {
                    return cl.apply(this, arguments)
                }),
        createLinkFile:
            ((sl = il(function* (e, t) {
                var n = e.body.details
                if (!n) return tl(t, 'No data to write')
                try {
                    return (
                        yield q.promises.writeFile(
                            l.join(X.MEDIA_DIR, ''.concat(n.name, '.').concat(n.type)),
                            JSON.stringify(n, null, 4),
                        ),
                        el(
                            t,
                            'Link file created for the link as '
                                .concat(n.name, '.')
                                .concat(n.type),
                        )
                    )
                } catch (e) {
                    return tl(t, 'error in creating link file: ', e)
                }
            })),
                function (e, t) {
                    return sl.apply(this, arguments)
                }),
        getLinkFileDetails:
            ((al = il(function* (e, t) {
                try {
                    var n = yield q.promises.readFile(
                        l.join(X.MEDIA_DIR, e.params.file),
                        'utf8',
                    )
                    return el(t, 'link file details', { data: n })
                } catch (e) {
                    return tl(t, 'error in reading link file: ', e)
                }
            })),
                function (e, t) {
                    return al.apply(this, arguments)
                }),
        updatePlaylist: (e, t) => el(t, 'Only server supports this API'),
    }
    var al,
        sl,
        cl,
        ll,
        dl,
        ul,
        pl,
        yl,
        fl,
        vl = 'stopped'
    const gl = (e, t) => {
        var { enableKiosk: n } = Pc.getState().mediaKiosk.kioskUi
        switch ((!0 !== n && tl(t, 'Kiosk ui not enabled'), e.params.action)) {
            case 'play':
                return e.query.file
                    ? ((vl = 'playing'),
                        Pc.dispatch(Ba()),
                        Pc.dispatch(
                            Ro(e.query.file, 10, !0, () => {
                                ; (vl = 'stopped'), Pc.dispatch(Ha())
                            }),
                        ),
                        el(t, 'Started playing file', { status: vl }))
                    : el(t, 'Nothing to play', { status: vl })
            case 'stop':
                return (
                    Pc.dispatch(Fo(!1)), Pc.dispatch(Ha()), el(t, 'Kiosk ui shown', {})
                )
            case 'show':
                return Pc.dispatch(Ha()), el(t, 'Kiosk ui shown', {})
            case 'hide':
                return (
                    Pc.dispatch(Ba(!0)), Pc.dispatch(Fo(!0)), el(t, 'Kiosk ui hidden', {})
                )
            default:
                return el(t, 'No action specified for kiosk ui', { status: vl })
        }
    }
    function ml(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function hl(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    ml(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    ml(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var kl = 'stopped'
    const bl = {
        getRssFeeds:
            ((Sl = hl(function* (e, t) {
                var n = e.query.link,
                    i = e.query.feedlimit
                try {
                    var r = yield Ft(n, i)
                    el(t, 'Feed results', r)
                } catch (e) {
                    tl('Feed fetch error: '.concat(e))
                }
            })),
                function (e, t) {
                    return Sl.apply(this, arguments)
                }),
        playPlaylist: (e, t) => {
            if (e.body.stop) {
                var { localControl: n } = Pc.getState().mediaAssets
                return (
                    Pc.dispatch(sa({ localControl: !1 })),
                    Pc.dispatch(Do()),
                    !0 === n
                        ? (Pc.dispatch(ba(!1)), el(t, 'Restarted Scheduled playlist', {}))
                        : el(t, 'Stopped playlist', {})
                )
            }
            if (e.body.play) {
                var i = e.params.file
                if (!i) return tl(t, 'No playlist name is present')
                var r = e.body.pltype || 'regular'
                return (
                    Pc.dispatch(
                        aa({
                            scheduledPlaylists: [i],
                            forceRestart: !0,
                            playlistTriggerType: r,
                            localControl: !0,
                        }),
                    ),
                    el(t, 'Started playlist', i)
                )
            }
            return el(t, 'Nothing to do')
        },
        playFile: (e, t) => {
            switch (
            (console.log('action: ' + e.params.action + ', file: ' + e.query.file),
                e.params.action)
            ) {
                case 'play':
                    return e.query.file
                        ? ((kl = 'playing'),
                            Pc.dispatch(
                                Ro(e.query.file, 10, !1, () => {
                                    ; (kl = 'stopped'), Pc.dispatch(Fo(!0))
                                }),
                            ),
                            el(t, 'Started playing file', { status: kl }))
                        : el(t, 'Nothing to play', { status: kl })
                case 'pause':
                    return (
                        'paused' === kl
                            ? ((kl = 'playing'),
                                Pc.dispatch(
                                    Ro(e.query.file, 10, !1, () => {
                                        ; (kl = 'stopped'), Pc.dispatch(Fo(!0))
                                    }),
                                ))
                            : 'playing' === kl && ((kl = 'paused'), Pc.dispatch(_o())),
                        el(t, 'Response to Pause', { status: kl })
                    )
                case 'stop':
                    return 'stopped' === kl
                        ? el(t, 'File already stopped', { status: kl })
                        : ((kl = 'stopped'),
                            Pc.dispatch(Fo(!0)),
                            el(t, 'file stopped', { status: kl }))
                default:
                    return el(t, 'sending current status of playFile', { status: kl })
            }
        },
        playlistMedia:
            ((wl = hl(function* (e, t) {
                var n = e.params.action,
                    i = 'Connected' === Pc.getState().deviceStatus.connectionStatus,
                    r = yield Pc.dispatch(Eo(n))
                return (
                    i && gs('media_ack', r),
                    t.json({
                        stat_message: 'Media acknowledgement',
                        data: { isPaused: Pc.getState().playerMain.playlistPaused },
                        result: r,
                        success: !0,
                    })
                )
            })),
                function (e, t) {
                    return wl.apply(this, arguments)
                }),
    }
    var wl, Sl
    function xl(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Pl(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    xl(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    xl(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var Cl = {
        name: 'TV_OFF',
        settings: {},
        assets: [],
        layout: '1',
        schedule: {},
    },
        Il = (function () {
            var e = Pl(function* (e) {
                var t = {
                    settings: {},
                    layout: '1',
                    videoWindow: null,
                    zoneVideoWindow: {},
                    templateName: 'custom_layout.html',
                    assets: [],
                    name: l.basename(e, '.json').slice(2),
                    groupIds: [],
                },
                    n = yield q.promises.readFile(l.join(X.MEDIA_DIR, e)),
                    i = JSON.parse(n)
                return (
                    i &&
                    ((t.settings = i.settings || {}),
                        (t.assets = i.assets || []),
                        (t.layout = i.layout || '1'),
                        (t.templateName = i.templateName || 'custom_layout.html'),
                        (t.videoWindow = i.videoWindow || null),
                        (t.zoneVideoWindow = i.zoneVideoWindow || {}),
                        (t.schedule = i.schedule || {}),
                        (t.labels = i.labels || []),
                        (t.groupIds = i.groupIds || [])),
                    t
                )
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })()
    const Al = {
        index: (function () {
            var e = Pl(function* (e, t) {
                var n = []
                try {
                    n = yield q.promises.readdir(X.MEDIA_DIR)
                } catch (e) {
                    return tl(t, 'Media directory read error: ', e)
                }
                var i = n
                    .filter((e) => null !== e.match(ot.playlist))
                    .sort((e, t) => e.localeCompare(t, void 0, { numeric: !0 })),
                    r = []
                for (var o of i) {
                    var a = {}
                    try {
                        a = yield Il(o)
                    } catch (e) {
                        k.error('Playlist file read/parse error: '.concat(e))
                    }
                    r.push(a)
                }
                return (
                    -1 === i.indexOf('__TV_OFF.json') && r.push(Cl),
                    el(t, 'Sending playlist list', r)
                )
            })
            return function (t, n) {
                return e.apply(this, arguments)
            }
        })(),
        getPlaylist:
            ((Dl = Pl(function* (e, t) {
                if (!e.params.file || 'TV_OFF' === e.params.file)
                    return tl(t, 'System Playlist, can not be edited')
                try {
                    var n = yield Il('__'.concat(e.params.file, '.json'))
                    return el(t, 'Sending playlist content', n)
                } catch (e) {
                    var i = 'Playlist file read/parse error: '.concat(e)
                    return k.error(i), tl(t, i)
                }
            })),
                function (e, t) {
                    return Dl.apply(this, arguments)
                }),
        createPlaylist:
            ((Tl = Pl(function* (e, t) {
                var n = e.body.file
                if (!n || 'TV_OFF' === n) return tl(t, 'No playlist name is present')
                var i = l.join(X.MEDIA_DIR, '__'.concat(n, '.json')),
                    r = {
                        name: n,
                        settings: {
                            ticker: {
                                enable: !1,
                                behavior: 'scroll',
                                textSpeed: 3,
                                rss: { enable: !1, link: null, feedDelay: 10 },
                            },
                            ads: { adPlaylist: !1, adCount: 1, adInterval: 60 },
                            audio: { enable: !1, random: !1, volume: 50 },
                        },
                        assets: [],
                        layout: '1',
                        templateName: 'custom_layout.html',
                        schedule: {},
                        groupIds: [],
                    }
                try {
                    return (
                        yield q.promises.writeFile(i, JSON.stringify(r, null, 4)),
                        el(t, 'Playlist Created: ', r)
                    )
                } catch (e) {
                    var o = 'Playlist creation error: '.concat(e)
                    return k.error(o), tl(t, o)
                }
            })),
                function (e, t) {
                    return Tl.apply(this, arguments)
                }),
        savePlaylist:
            ((Ol = Pl(function* (e, t) {
                var n = e.params.file
                if (!n || 'TV_OFF' === n) return tl(t, 'No playlist name is present')
                var i = {},
                    r = {},
                    o = !1
                try {
                    r = yield q.promises.readFile(
                        l.join(X.MEDIA_DIR, '__'.concat(n, '.json')),
                    )
                } catch (e) {
                    var a = 'Playlist file read error: '.concat(e)
                    return k.error(a), tl(t, a)
                }
                try {
                    i = JSON.parse(r)
                } catch (e) {
                    k.error('SavePlaylist playlist data parsing error: '.concat(e))
                }
                if (
                    ((i.version = i.version || 0),
                        (i.layout = i.layout || '1'),
                        e.body.name && ((i.name = e.body.name), (o = !0)),
                        e.body.settings && ((i.settings = e.body.settings), (o = !0)),
                        e.body.assets && ((i.assets = e.body.assets), (o = !0)),
                        e.body.schedule && ((i.schedule = e.body.schedule), (o = !0)),
                        e.body.layout &&
                        ((i.layout = e.body.layout),
                            (i.templateName = e.body.templateName),
                            (i.videoWindow = e.body.videoWindow),
                            (i.zoneVideoWindow = e.body.zoneVideoWindow),
                            (o = !0)),
                        e.body.labels && ((i.labels = e.body.labels), (o = !0)),
                        o)
                ) {
                    i.version += 1
                    try {
                        return (
                            yield q.promises.writeFile(
                                l.join(X.MEDIA_DIR, '__'.concat(n, '.json')),
                                JSON.stringify(i, null, 4),
                            ),
                            el(t, 'Playlist file updated', i)
                        )
                    } catch (e) {
                        var s = 'Playlist updation error: '.concat(e)
                        return k.error(s), tl(t, s)
                    }
                }
                return el(t, 'Nothing to update', i)
            })),
                function (e, t) {
                    return Ol.apply(this, arguments)
                }),
    }
    var Ol, Tl, Dl
    function Rl(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e)
            t &&
                (i = i.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, i)
        }
        return n
    }
    function Fl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
                ? Rl(Object(n), !0).forEach(function (t) {
                    _l(e, t, n[t])
                })
                : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : Rl(Object(n)).forEach(function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    })
        }
        return e
    }
    function _l(e, t, n) {
        return (
            t in e
                ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                })
                : (e[t] = n),
            e
        )
    }
    function El(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function Nl(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    El(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    El(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var jl = (function () {
        var e = Nl(function* () {
            Pc.dispatch(B(yield nc()))
            var { systemIP: e } = Pc.getState().deviceHardware,
                t = { ipsettings: {}, ipsettingsWifi: {}, dns: {} }
            try {
                var { wifiRow: n, ethRow: i } = yield ic(),
                    r = [
                        {
                            type: 'dhcpcd',
                            interfaceName: i.type,
                            address: null,
                            netmask: null,
                            gateway: null,
                        },
                    ]
                n &&
                    r.push({
                        type: 'dhcpcd',
                        interfaceName: n.type,
                        address: null,
                        netmask: null,
                        gateway: null,
                    })
                var o = function* (n) {
                    var { stdout: i } = yield ve(
                        '\n                                sed -n "/^interface '
                            .concat(n.interfaceName, '/{n;p}" ')
                            .concat(
                                X.DHCPCD_FILE,
                                " | sed 's/.*=//';\n                                sed -n \"/^interface ",
                            )
                            .concat(n.interfaceName, '/{n;n;p}" ')
                            .concat(
                                X.DHCPCD_FILE,
                                " | sed 's/.*=//';\n                                sed -n \"/^interface ",
                            )
                            .concat(n.interfaceName, '/{n;n;n;p}" ')
                            .concat(X.DHCPCD_FILE, " | sed 's/.*=//'"),
                    )
                    if (i) {
                        var r = i.split('\n')
                            ; (n.mode = 'Static'),
                                (n.address = r[0] && r[0].split('/')[0]),
                                (n.netmask = (r[0] && r[0].split('/')[1]) || 24),
                                (n.gateway = r[1] || '192.168.1.1'),
                                (t.dns.primary = (r[2] && r[2].split(' ')[0]) || '8.8.4.4'),
                                (t.dns.secondary = (r[2] && r[2].split(' ')[1]) || '8.8.8.8')
                    } else {
                        n.mode = 'DHCP'
                        var o = e.find((e) => e.type === n.interfaceName)
                        n.address = o ? o.ip : 'Not connected'
                        var { stdout: a, stderr: s } = yield ve(
                            "cat /etc/resolv.conf.head | grep 'nameserver' | tr -d '[:blank][a-z][=-=][\t]'",
                        )
                        if (!s || a) {
                            var c = a.split('\n')
                            t.dns = {
                                primary: c[0] || '8.8.4.4',
                                secondary: c[1] || '8.8.8.8',
                            }
                        }
                    }
                }
                for (var a of r) yield* o(a)
                    ; (t.ipsettings = r[0]), (t.ipsettingsWifi = r[1] || null)
            } catch (e) {
                k.error(
                    'Error occured in reading dhcpcd configuration file: '.concat(e),
                )
            }
            return t
        })
        return function () {
            return e.apply(this, arguments)
        }
    })(),
        Ml = (function () {
            var e = Nl(function* () {
                var e = {},
                    { stderr: t, stdout: n } = yield ve('sudo cat '.concat(X.CONFIG_TXT))
                if (!t) {
                    var i = n.split('\n'),
                        r = i.find((e) => e.match(/disable_overscan/))
                    e.disable_overscan = r && '1' === r.split('=').pop()
                    var o = i.find((e) => e.match(/overscan_left/))
                    e.horizontal = parseInt(o.split('=').pop())
                    var a = i.find((e) => e.match(/overscan_top/))
                    e.vertical = parseInt(a.split('=').pop())
                }
                return e
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Ll = (function () {
            var e = Nl(function* () {
                var { systemIP: e } = Pc.getState().deviceHardware,
                    t = {
                        wifi: {
                            ssid: null,
                            pass: null,
                            ip: null,
                            open: !1,
                            hidden: !1,
                            countryCode: 'IN',
                            apmode: 'NO',
                        },
                        dns: null,
                    }
                try {
                    var n = (yield q.promises.readFile(
                        X.WPASUPPLICANT_CONF,
                        'utf8',
                    )).split('\n'),
                        i = !1
                    for (var r of n)
                        r.match(/country=/gi) &&
                            ((t.wifi.countryCode = r.split('=')[1]),
                                t.wifi.countryCode &&
                                (t.wifi.countryCode = t.wifi.countryCode.trim())),
                            r.match(/network\S+/gi) && (i = !0),
                            !0 === i &&
                            (r.match(/scan_ssid=1/gi) && (t.wifi.hidden = !0),
                                r.match(/key_mgmt=NONE/gi) && (t.wifi.open = !0),
                                r.match(/ssid=/gi) &&
                                ((t.wifi.ssid = r.split('=')[1].replace(/"/g, '')),
                                    t.wifi.ssid && (t.wifi.ssid = t.wifi.ssid.trim())),
                                r.match(/psk=/gi) &&
                                ((t.wifi.pass = r.split('=')[1].replace(/"/g, '')),
                                    t.wifi.pass && (t.wifi.pass = t.wifi.pass.trim())))
                    !0 === t.wifi.open && (t.wifi.pass = null)
                } catch (e) {
                    return (
                        (t.wifi.error = ''
                            .concat(X.WPASUPPLICANT_CONF, ' read error: ')
                            .concat(e)),
                        k.error(t.wifi.error),
                        t
                    )
                }
                var { wifiRow: o } = yield ic()
                if (o) {
                    var { stderr: a } = yield ve(
                        'grep -q "^denyinterfaces '
                            .concat(o.type, '" ')
                            .concat(X.DHCPCD_FILE),
                    )
                    t.wifi.apmode = a ? 'NO' : 'AP'
                }
                if (t.wifi.ssid) {
                    var s = e.find(
                        (e) => 'wlan0' === e.type || 0 === e.type.indexOf('wl'),
                    )
                    t.wifi.ip = s ? s.ip : null
                }
                return t
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        Kl = [
            'secret',
            'installation',
            'animationEnable',
            'animationType',
            'enableLog',
            'reportIntervalMinutes',
            'systemMessagesHide',
            'hideWelcomeNotice',
            'signageBackgroundColor',
            'imageLetterboxed',
            'resizeAssets',
            'videoKeepAspect',
            'videoShowSubtitles',
            'urlReloadDisable',
            'timeToStopVideo',
            'shuffleContent',
            'alternateContent',
            'audioVolume',
            'TZ',
            'xWidgets',
        ]
    const Ul = {
        getStatus:
            ((ed = Nl(function* (e, t) {
                var n = Pc.getState(),
                    i = n.deviceStatus,
                    {
                        diskSpaceUsed: r,
                        diskSpaceAvailable: o,
                        totalDiskSpace: a,
                    } = n.deviceDownload,
                    { tvStatus: s, cecTvStatus: c, cecSupported: l } = n.deviceTv,
                    { playingPlaylistName: d, playlistPlaying: u } = n.playerMain,
                    { deployedPlaylists: p } = n.mediaAssets,
                    {
                        cpuSerialNumber: y,
                        ethMac: f,
                        wifiMac: v,
                        version: g,
                        legacyCpuSerialNumber: m,
                    } = n.deviceHardware,
                    { name: h } = n.devicePreferences,
                    { currentPlayingFile: b } = n.playerLoop
                el(
                    t,
                    'Status check',
                    Fl(
                        Fl({}, i),
                        {},
                        {
                            diskSpaceUsed: r,
                            diskSpaceAvailable: o,
                            totalDiskSpace: a,
                            tvStatus: s,
                            cecTvStatus: c,
                            cecSupported: l,
                            cpuSerialNumber: y,
                            legacyCpuSerialNumber: m,
                            ethMac: f,
                            wifiMac: v,
                            version: g,
                            currentPlaylist: d,
                            currentPlayingFile: b.main ? b.main : b.side,
                            playlistOn: u,
                            deployedPlaylists: p.map((e) => e.name),
                            playerName: h,
                            currentDebugLevel: [
                                'trace',
                                'debug',
                                'info',
                                'warn',
                                'error',
                                'silent',
                            ][k.getLevel()],
                        },
                    ),
                )
            })),
                function (e, t) {
                    return ed.apply(this, arguments)
                }),
        setDebugLevel: (e, t) =>
            el(t, 'Debug level set', x(e.body.level || 'info')),
        setHostname: (e, t) => {
            if (e.body.localName) {
                var n = { name: e.body.localName }
                Pc.dispatch(kc(n)), el(t, 'Name change in progress', n)
            }
        },
        getTestLog:
            ((Ql = Nl(function* (e, t) {
                return tl(t, 'Test Log, not implemented')
            })),
                function (e, t) {
                    return Ql.apply(this, arguments)
                }),
        getSnapshot:
            ((Xl = Nl(function* (e, t) {
                var { err: n, stdout: i, stderr: r } = yield Ws()
                n
                    ? tl(t, 'Error in connection', n)
                    : r
                        ? tl(t, 'Error in taking snapshot', r)
                        : el(t, 'snapshot', { data: i, lastTaken: Date.now() })
            })),
                function (e, t) {
                    return Xl.apply(this, arguments)
                }),
        getSettings:
            ((Yl = Nl(function* (e, t) {
                var n = Pc.getState(),
                    {
                        name: i,
                        localName: r,
                        note: o,
                        orientation: a,
                        resolution: s,
                        authCredentials: c,
                    } = n.devicePreferences,
                    {
                        version: l,
                        platform_version: d,
                        currentVersion: u,
                        server: p,
                    } = n.deviceHardware,
                    { sleep: y, reboot: f } = n.deviceTasks,
                    { audioVolume: v } = n.mediaSettings,
                    { ipsettings: g, ipsettingsWifi: m, dns: h } = yield jl(),
                    { wifi: k, dns: b } = yield Ll(),
                    w = yield Ml()
                el(t, 'Settings', {
                    name: i,
                    localName: r,
                    note: o,
                    version: l,
                    platform_version: d,
                    currentVersion: u,
                    ipsettings: g,
                    ipsettingsWifi: m,
                    wifi: k,
                    overscan: w,
                    orientation: a,
                    resolution: s,
                    omxVolume: v,
                    user: { name: c.user },
                    server: { config: p, media: p },
                    sleep: y,
                    reboot: f,
                    dns: h || b || {},
                })
            })),
                function (e, t) {
                    return Yl.apply(this, arguments)
                }),
        getSettingsFile:
            (($l = Nl(function* (e, t) {
                var n = Pc.getState().deviceHardware,
                    i = Pc.getState().devicePreferences,
                    r = Pc.getState().mediaSettings,
                    o = Fl(Fl(Fl({}, n), i), r)
                el(t, 'Sending config and setting files', Ie(o, Kl))
            })),
                function (e, t) {
                    return $l.apply(this, arguments)
                }),
        setSettingsFile:
            ((Zl = Nl(function* (e, t) {
                ; ((e) => {
                    var t = Object.keys(Pc.getState().deviceHardware),
                        n = Object.keys(Pc.getState().devicePreferences),
                        i = Object.keys(Pc.getState().mediaSettings)
                    for (var r in e)
                        ('false' !== e[r] && 'true' !== e[r]) || (e[r] = 'true' === e[r])
                    var o = Ie(e, t),
                        a = Ie(e, n),
                        s = Ie(e, i)
                    Pc.dispatch(B(o)), Pc.dispatch(hc(a)), Pc.dispatch(Ra(s)), me(), he()
                })(Ie(e.body, Kl)),
                    el(t, 'settings updated and node restarted'),
                    Ls()
            })),
                function (e, t) {
                    return Zl.apply(this, arguments)
                }),
        executeShell:
            ((Jl = Nl(function* (e, t) {
                var n = e.body.cmd
                if (!n) return tl(t, 'Command is empty')
                var { err: i, stdout: r, stderr: o } = yield zs(n)
                return el(t, 'shell_ack', { cmd: n, err: i, stderr: o, stdout: r })
            })),
                function (e, t) {
                    return Jl.apply(this, arguments)
                }),
        systemRestart:
            Nl(function* (e, t) {
                Rb()
            }),
        systemShutdown:
            Nl(function* (e, t) {
                Pf()
            }),
        setIpInterface:
            ((ql = Nl(function* (e, t) {
                var { selectedInterface: n, dns: i, editDns: r } = e.body
                if (n) {
                    var {
                        mode: o = null,
                        address: a = null,
                        netmask: s = null,
                        gateway: c = null,
                        primaryDns: l = '8.8.8.8',
                        secondaryDns: d = '8.8.8.4',
                    } = n
                    if ('DHCP' === o && r && l) {
                        var { stderr: u } = yield ve(
                            'sudo '
                                .concat(X.SYSTEM_SCRIPT, ' --change-dns ')
                                .concat(l, ' ')
                                .concat(d),
                        )
                        if (u) return void tl(t, 'Error in configuring DNS', u)
                        k.info('successfully updated dns')
                    }
                    var p =
                        'DHCP' === o
                            ? 'sudo '
                                .concat(X.SYSTEM_SCRIPT, ' --ipconfig ')
                                .concat(n.interfaceName)
                            : 'sudo '
                                .concat(X.SYSTEM_SCRIPT, ' --ipconfig ')
                                .concat(n.interfaceName, ' ')
                                .concat(a, '/')
                                .concat(s, ' ')
                                .concat(c, ' ')
                                .concat(l),
                        { stderr: y } = yield ve(p)
                    y
                        ? tl(t, 'Error in configuring IP for '.concat(n.interfaceName), y)
                        : (el(
                            t,
                            'IP Configuration successfull for '.concat(
                                n.interfaceName,
                                ' interface',
                            ),
                            {
                                dns: i,
                                ipsettings: e.body.ipsettings,
                                ipsettingsWifi: e.body.ipsettingsWifi,
                                editDns: r,
                            },
                        ),
                            Ks())
                } else tl(t, 'Empty selectedInterface data')
            })),
                function (e, t) {
                    return ql.apply(this, arguments)
                }),
        setWifi:
            ((Gl = Nl(function* (e, t) {
                var {
                    ssid: n = null,
                    pass: i = null,
                    hidden: r = !1,
                    countryCode: o = 'US',
                    apmode: a = 'NO',
                } = e.body.wifi || {},
                    s = null !== n,
                    c = null === n && 'AP' === a
                try {
                    var { wifiRow: l } = yield ic()
                    if (!0 === c) {
                        var { stdout: d } = yield ve(
                            'sudo /bin/bash '.concat(
                                X.SYSTEM_SCRIPT,
                                ' --enable-access-point',
                            ),
                        )
                        !d ||
                            (-1 === d.indexOf('Wi-fi in Access Point Mode') &&
                                -1 === d.indexOf('already in AP mode'))
                            ? tl(t, 'Error in WiFi update ', d)
                            : el(t, 'Wifi in AP mode', { wifi: d }),
                            Ks()
                    } else if (!0 === s) {
                        var { stdout: u } = yield ve(
                            'sudo /bin/bash '
                                .concat(X.SYSTEM_SCRIPT, ' --setup-wifi ')
                                .concat(l.type, ' ')
                                .concat(o, ' ')
                                .concat(r, ' "')
                                .concat(n, '" ')
                                .concat(i),
                        ),
                            { stdout: p } = yield ve(
                                'sudo /bin/bash '.concat(
                                    X.SYSTEM_SCRIPT,
                                    ' --disable-access-point',
                                ),
                            )
                        !p ||
                            (-1 === p.indexOf('already in  Wifi mode') &&
                                -1 === p.indexOf('Access Point mode disabled'))
                            ? tl(t, 'Error in WiFi update ', u)
                            : el(t, 'Wifi update successfull', { wifi: e.body.wifi }),
                            Ks()
                    }
                } catch (e) {
                    var y = ''.concat(X.WPASUPPLICANT_CONF, ' read error: ').concat(e)
                    k.error(y), tl(t, 'Error in Saving WiFi set up ', y)
                }
            })),
                function (e, t) {
                    return Gl.apply(this, arguments)
                }),
        setOverscan:
            ((Bl = Nl(function* (e, t) {
                if ((0, q.existsSync)(X.CONFIG_TXT)) {
                    var {
                        disable_overscan: n,
                        horizontal: i,
                        vertical: r,
                    } = e.body.overscan
                    if (!0 === n) {
                        var { stderr: o } = yield ve(
                            'sudo sed -i -e "s/.*disable_overscan.*/disable_overscan=1/"                         -e "s/.*overscan_left.*/#overscan_left='
                                .concat(
                                    i,
                                    '/"                          -e "s/.*overscan_right.*/#overscan_right=',
                                )
                                .concat(
                                    i,
                                    '/"                         -e "s/.*overscan_top.*/#overscan_top=',
                                )
                                .concat(
                                    r,
                                    '/"                         -e "s/.*overscan_bottom.*/#overscan_bottom=',
                                )
                                .concat(
                                    r,
                                    '/"                         -e "s/.*overscan_scale.*/overscan_scale=0/"                          ',
                                )
                                .concat(X.CONFIG_TXT),
                        )
                        o
                            ? (el(t, 'Successfully changed overscan'), Ks())
                            : tl(t, 'Unable to configure overscan: '.concat(o))
                    } else {
                        var { stderr: a } = yield ve(
                            'sudo sed -i -e "s/.*disable_overscan.*/disable_overscan=0/"                         -e "s/.*overscan_left.*/overscan_left='
                                .concat(
                                    i,
                                    '/"                          -e "s/.*overscan_right.*/overscan_right=',
                                )
                                .concat(
                                    i,
                                    '/"                         -e "s/.*overscan_top.*/overscan_top=',
                                )
                                .concat(
                                    r,
                                    '/"                         -e "s/.*overscan_bottom.*/overscan_bottom=',
                                )
                                .concat(
                                    r,
                                    '/"                         -e "s/.*overscan_scale.*/overscan_scale=1/"                          ',
                                )
                                .concat(X.CONFIG_TXT),
                        )
                        a
                            ? (el(t, 'Successfully changed overscan'), Ks())
                            : tl(t, 'Unable to configure overscan: '.concat(a))
                    }
                } else tl(t, 'Hardware does not support this feature')
            })),
                function (e, t) {
                    return Bl.apply(this, arguments)
                }),
        setOrientation: (e, t) => {
            var { orientation: n, resolution: i } = e.body
                ; (i || n) && Pc.dispatch(kc({ orientation: n, resolution: i })),
                    el(t, 'Orientation changed for the player', {
                        orientation: n,
                        resolution: i,
                    })
        },
        setServerName:
            ((Hl = Nl(function* (e, t) {
                var n = e.body.server.config,
                    i = e.body.server.media
                if (n && i) {
                    var { stderr: r } = yield ve(
                        'sed -i \'s|.*"config_server".*|    "config_server": "'
                            .concat(n, '",|g\' ')
                            .concat(X.PACKAGE_JSON),
                    ),
                        { stderr: o } = yield ve(
                            'sed -i \'s|.*"media_server".*|    "media_server": "'
                                .concat(i, '",|g\' ')
                                .concat(X.PACKAGE_JSON),
                        )
                    r || o
                        ? tl(t, 'Error in changing server name', {
                            stderrConfig: r,
                            stderrMedia: o,
                        })
                        : (Pc.dispatch(B({ server: n })),
                            el(t, 'New server name saved: ', {
                                configServerName: n,
                                mediaServerName: i,
                            }),
                            k.info('Restarting server after server name change'),
                            Ls())
                } else tl(t, 'Error in changing server name: empty name')
            })),
                function (e, t) {
                    return Hl.apply(this, arguments)
                }),
        setUser:
            ((Vl = Nl(function* (e, t) {
                var n = { user: e.body.user.name, password: e.body.user.newpasswd }
                yield Pc.dispatch(kc({ authCredentials: n })),
                    el(t, 'password changed successfully', n),
                    me(),
                    yield Se(3e3).promise,
                    Ls()
            })),
                function (e, t) {
                    return Vl.apply(this, arguments)
                }),
        setSleepTimer: (e, t) => (
            Pc.dispatch($o(e.body.sleep)), el(t, 'time set ', e.body.sleep)
        ),
        setOMXVolume: (e, t) => {
            var n = e.body.omxVolume || e.body.audioVolume
            n
                ? (Pc.dispatch(Fa({ omxVolume: n })),
                    el(t, 'omxplayer volume set success', n))
                : tl(t, 'Volume is not supplied')
        },
        getLog:
            ((Wl = Nl(function* (e, t) {
                var n = e.query.file
                if (!n || 0 !== n.indexOf('forever'))
                    return tl(t, 'Filename is not supplied')
                try {
                    var i = l.join(X.HOME_DIR, n),
                        r = yield q.promises.stat(i)
                    if (!r) return tl(t, 'File is not present')
                    var o = yield q.promises.readFile(i, 'utf8')
                    return (
                        t.writeHead(200, {
                            'Content-Type': 'text/plain',
                            'Content-Length': r.size,
                            'Content-Disposition': n,
                        }),
                        t.end(o)
                    )
                } catch (e) {
                    return tl(t, 'Log file read error: '.concat(e))
                }
            })),
                function (e, t) {
                    return Wl.apply(this, arguments)
                }),
        factoryReset: (e, t) => {
            Ys(), el(t, 'Factory reset in Progress')
        },
        getWifiList:
            ((zl = Nl(function* (e, t) {
                var { wifiRow: n } = yield ic()
                k.debug('Wifi Row: ', n)
                var { stderr: i, stdout: r } = yield ve(
                    'sudo iwlist '.concat(
                        n.type,
                        ' scan | grep "ESSID:" |cut -d ":" -f 2',
                    ),
                )
                if ((k.debug('Stdout: ', r, ' \nStderr : ', i), i))
                    return tl(t, 'No Access Point Found: ', i)
                var o = r.split('\n'),
                    a = []
                for (var s of o)
                    if (s) {
                        var c = s.replace(/"/g, '')
                        c && -1 === a.indexOf(c) && a.push(c)
                    }
                return k.debug('Wifi List:', a), el(t, 'wifi list', a)
            })),
                function (e, t) {
                    return zl.apply(this, arguments)
                }),
        piswupdate: (e, t) => {
            $s(e.body.file, e.body.file2),
                el(
                    t,
                    'Player will update and reboot, may take few minutes to 20 minutes',
                )
        },
        getDeviceId: (e, t) => {
            return el(t, 'Device ID', {
                deviceId:
                    ((n = Pc.getState().deviceHardware.cpuSerialNumber),
                        (i = Buffer.from(
                            '00700675269894507686aa65e8aadfdbd237cf290cc08be6ee755e541ef22cd6',
                            'hex',
                        )),
                        (r = Buffer.from('e315940d89d33486037bb46fb7fa55c5', 'hex')),
                        (o = ce.createCipheriv('aes-256-cbc', i, r)),
                        (a = o.update(n, 'utf8', 'hex')),
                        (a += o.final('hex'))),
            })
            var n, i, r, o, a
        },
    }
    var zl,
        Wl,
        Vl,
        Hl,
        Bl,
        Gl,
        ql,
        Jl,
        Zl,
        $l,
        Yl,
        Xl,
        Ql,
        ed,
        td = qc.Router(),
        nd = Qc({ dest: X.MEDIA_DIR, limits: { fileSize: 3221225472 } })
    td.all('*', (e, t, n) => {
        t.setHeader('Last-Modified', new Date().toUTCString()),
            (e.installation = ''),
            n()
    }),
        td.route('/api/files').get(ol.index).post(nd.any(), ol.createFiles),
        td
            .route('/api/files/:file')
            .get(ol.getFileDetails)
            .post(ol.updateAsset)
            .delete(ol.deleteFile),
        td.post('/api/postupload', ol.updateFileDetails),
        td.post('/api/playlistfiles', ol.updatePlaylist),
        td.post('/api/notices', ol.createNotice),
        td
            .route('/api/notices/:file')
            .get(ol.getNotice)
            .post(ol.createNotice)
            .delete(ol.deleteFile),
        td.post('/api/links', ol.createLinkFile),
        td.get('/api/links/:file', ol.getLinkFileDetails),
        td.route('/api/playlists').get(Al.index).post(Al.createPlaylist),
        td.route('/api/playlists/:file').get(Al.getPlaylist).post(Al.savePlaylist),
        td.get('/api/rssfeed', bl.getRssFeeds),
        td.post('/api/play/playlists/:file', bl.playPlaylist),
        td.post('/api/play/files/:action', bl.playFile),
        td.post('/api/playlistmedia/:action', bl.playlistMedia),
        td.get('/api/status', Ul.getStatus),
        td.post('/api/debug', Ul.setDebugLevel),
        td.get('/api/testlog', Ul.getTestLog),
        td.get('/api/snapshot', Ul.getSnapshot),
        td.get('/api/settings', Ul.getSettings),
        td.get('/api/settingsfile', Ul.getSettingsFile),
        td.post('/api/pishell', Ul.executeShell),
        td.post('/api/restart', Ul.systemRestart),
        // td.post('/api/shutdown', Ul.systemShutdown),
        td.post('/api/settingsfile', Ul.setSettingsFile),
        td.post('/api/settings/hostname', Ul.setHostname),
        td.post('/api/settings/ethernet', Ul.setIpInterface),
        td.post('/api/settings/wifi', Ul.setWifi),
        td.post('/api/settings/overscan', Ul.setOverscan),
        td.post('/api/settings/orientation', Ul.setOrientation),
        td.post('/api/settings/servername', Ul.setServerName),
        td.post('/api/settings/user', Ul.setUser),
        td.post('/api/settings/sleep', Ul.setSleepTimer),
        td.post('/api/settings/omxVolume', Ul.setOMXVolume),
        td.get('/api/settings/log', Ul.getLog),
        td.post('/api/settings/reset', Ul.factoryReset),
        td.get('/api/settings/wifiscan', Ul.getWifiList),
        td.post('/api/kioskui/:action', gl),
        td.post('/api/piswupdate/', Ul.piswupdate),
        td.get('/api/device', Ul.getDeviceId),
        !0 === Pc.getState().devicePreferences.newUi
            ? td.get('*', (e, t) => {
                t.sendFile(l.join(X.NEWUI, 'index.html'))
            })
            : td.get('*', (e, t) => {
                t.render('index-pi-piimage.html')
            })
    const id = td
    if (process.version.slice(1, process.version.indexOf('.')) < 14)
        throw new Error(
            'Player needs v14 or above to work properly '.concat(
                process.version,
                ', exiting',
            ),
        )
    var rd = (e, t, n) => {
        t.header('Access-Control-Allow-Origin', e.headers.origin),
            t.header('Access-Control-Allow-Credentials', !0),
            t.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'),
            t.header(
                'Access-Control-Allow-Headers',
                'Authorization,Content-Type,Content-Length, X-Requested-With,origin,accept',
            ),
            'OPTIONS' === e.method ? t.send(200) : n()
    }
    const od = require('http')
    function ad(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function sd() {
        ; (0, od.createServer)(
            (function () {
                var e,
                    t =
                        ((e = function* (e, t) {
                            var n = Pc.getState().deviceHardware,
                                i = {
                                    name: n.name || 'PiSignage player',
                                    ip: n.myIpAddress || '0.0.0.0',
                                    cpuSerialNumber: n.cpuSerialNumber || 'NA',
                                    version: n.version || 'NA',
                                }
                            t.setHeader('Access-Control-Allow-Origin', '*'),
                                t.setHeader('Access-Control-Allow-Credentials', !0),
                                t.setHeader(
                                    'Access-Control-Allow-Methods',
                                    'GET,PUT,POST,DELETE,OPTIONS',
                                ),
                                t.setHeader(
                                    'Access-Control-Allow-Headers',
                                    'Authorization,Content-Type,Content-Length, X-Requested-With,origin,accept',
                                ),
                                t.writeHead(200, { 'Content-Type': 'application/json' }),
                                t.end(JSON.stringify(i))
                        }),
                            function () {
                                var t = this,
                                    n = arguments
                                return new Promise(function (i, r) {
                                    var o = e.apply(t, n)
                                    function a(e) {
                                        ad(o, i, r, a, s, 'next', e)
                                    }
                                    function s(e) {
                                        ad(o, i, r, a, s, 'throw', e)
                                    }
                                    a(void 0)
                                })
                            })
                return function (e, n) {
                    return t.apply(this, arguments)
                }
            })(),
        ).listen(Qe.DISCOVERY_HTTP, '0.0.0.0')
    }
    function cd(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function ld(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    cd(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    cd(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var dd,
        ud = (function () {
            var e = ld(function* () {
                return yield !0
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        pd = (function () {
            var e = ld(function* () {
                if (
                    !0 === (0, q.existsSync)(l.join(X.CONFIG_DIR, 'player-config.json'))
                )
                    try {
                        var e = yield q.promises.readFile(
                            l.join(X.CONFIG_DIR, 'player-config.json'),
                            'utf8',
                        )
                        return JSON.parse(e)
                    } catch (e) {
                        k.debug('Error in reading Player-Config.json file :', e)
                    }
                return {}
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        yd = (function () {
            var e = ld(function* () {
                var e,
                    t = {},
                    n = {}
                try {
                    var i = yield q.promises.readFile(X.DEVICE_SETTINGS_FILE)
                    t = JSON.parse(i) || {}
                } catch (e) {
                    var r = 'Player settings read error: '.concat(e)
                    k.error(r), Os('player', 'error', r)
                }
                try {
                    var o = yield q.promises.readFile(X.MEDIA_SETTINGS_FILE)
                    n = JSON.parse(o) || {}
                } catch (e) {
                    var a = 'Media settings read error: '.concat(e)
                    k.error(a), Os('player', 'error', a)
                }
                try {
                    var s = yield q.promises.readFile(
                        ''.concat(X.ROOT_DIR, '/package.json'),
                    )
                    e = JSON.parse(s) || {}
                } catch (e) {
                    var c = 'package.json read error: '.concat(e)
                    k.error(c), Os('player', 'error', c)
                }
                var l = yield pd()
                return (
                    0 !== Object.keys(l).length &&
                    (k.debug('player-config.json file exists ', l),
                        (t.sdConfigFileExists = !0),
                        (t.sdConfigPin = l.pin),
                        (t.sdConfigName = l.name),
                        (t.sdConfigGroup = l.group),
                        (t.sdConfigTimezone = l.timezone),
                        (t.sdConfigInstallation = l.installation)),
                    { deviceSettings: t, mediaSettings: n, packageJson: e }
                )
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        fd = (function () {
            var e = ld(function* (e) {
                var t = 'https'
                if (!/^https?:\/\//.test(e))
                    try {
                        yield Ce('https://'.concat(e, '/api/labels'))
                    } catch (e) {
                        console.log(
                            '*** trying with http protocol for websocket as https to server returned status undefined',
                        ),
                            (t = 'http')
                    }
                return /^(https?):\/\//.test(e)
                    ? ''.concat(e)
                    : ''.concat(t, '://').concat(e)
            })
            return function (t) {
                return e.apply(this, arguments)
            }
        })(),
        vd = (function () {
            var e = ld(function* () {
                yield ud(), yield rc(), yield is()
                var { deviceSettings: e, mediaSettings: t, packageJson: n } = yield yd()
                k.info(
                    'Software details: version:'
                        .concat(n.version + ';' + n.platform_version, ', server:')
                        .concat(n.config_server, ' '),
                ),
                    (e.installation = e.installation || 'admin'),
                    (e.secret = e.secret || 'default'),
                    (e.orientation = e.orientation || 'landscape'),
                    (e.resolution = e.resolution || 'auto'),
                    (e.monitorArrangement = e.monitorArrangement || {
                        mode: 'mirror',
                        reverse: !1,
                    }),
                    (e.sleep = e.sleep || { enable: !1 }),
                    (e.reboot = e.reboot || { enable: !1 }),
                    (t.showClock = t.showClock || { enable: !1 }),
                    (t.emergencyMessage = t.emergencyMessage || { enable: !1 }),
                    (t.kioskUi = t.kioskUi || { enable: !1 }),
                    void 0 === t.audioVolume && (t.audioVolume = 100),
                    yield ke(t.audioVolume),
                    (e.uptime = 0),
                    (e.tvStatus = !0),
                    Object.assign(e, yield nc()),
                    Object.assign(e, yield ic()),
                    !0 !== e.hideWelcomeNotice && (e.nwinfo = yield tc()),
                    (e.cpuSerialNumber = yield Us())
                var i = yield sc(e.resolution, e.orientation, e.monitorArrangement)
                k.info('Display Interfaces: ', i), (e.displayInterfaces = i)
                var { edidResolution: r } = yield oc()
                Pc.dispatch(zo(!0)), (e.edidResolution = r)
                var o = n.config_server
                    ? n.config_server.trim()
                    : 'https://pisignage.com'
                    ; (e.server = yield fd(o)),
                        k.info('Server after change: ', e.server),
                        (e.version = n.version),
                        (e.platform_version = n.platform_version)
                var { enabled: a } = yield De(
                    e.cpuSerialNumber,
                    e.installation,
                    e.server,
                )
                    ; (e.licensed = a), k.info('License status: '.concat(e.licensed))
                var s = { video: [], pdf: [], widgets: [], ticker: [] }
                rs(),
                    (s.video = yield (function () {
                        return nr.apply(this, arguments)
                    })()),
                    (s.pdf = yield Hi()),
                    (s.widgets = yield Wn()),
                    (s.ticker = yield Lt()),
                    (e.availablePlayers = s),
                    Pc.dispatch(B(e))
                var { user: c, password: d } = e.authCredentials || {
                    user: 'pi',
                    password: 'pi',
                }
                mc(c, d),
                    Pc.dispatch(hc(e)),
                    Pc.dispatch(Ee(e.licensed)),
                    Pc.dispatch(qr()),
                    Pc.dispatch(ra(t)),
                    Pc.dispatch(Ra(t)),
                    yield new Promise((e, t) => {
                        var n = qc()
                        n.use(rd),
                            n.use(Yc.json()),
                            n.use(Yc.urlencoded({ extended: !0 })),
                            n.use($c()),
                            n.use(qc.static(l.join(X.ROOT_DIR, '/public'))),
                            n.use('/newui', qc.static(X.NEWUI))
                        var i = Jc.basic({
                            realm: 'pi',
                            file: l.join(X.ROOT_DIR, 'htpasswd'),
                        })
                        n.use((e, t, n) => {
                            var r = e.path.split('/')[1],
                                o = -1 !== ['api', 'media', 'layouts'].indexOf(r),
                                { disableWebUi: a } = Pc.getState().devicePreferences
                            1 != (e.socket.localAddress === e.socket.remoteAddress)
                                ? !0 !== a
                                    ? !0 === o
                                        ? Zc(i)(e, t, n)
                                        : n()
                                    : t.status(403).end('forbidden')
                                : n()
                        }),
                            n.engine('html', le.renderFile),
                            n.set('views', l.join(X.VIEWS_DIR)),
                            n.use(Xc(l.join(X.ROOT_DIR, 'public/img/favicon.ico'))),
                            n.use('/media', qc.static(X.MEDIA_DIR)),
                            n.use('/media', (e, t, n) =>
                                e.path.startsWith('/custom_layout')
                                    ? t.redirect('../layouts/custom_layout.html')
                                    : n(),
                            ),
                            n.use('/layouts', qc.static(X.LAYOUTS_DIR)),
                            n.use(id),
                            n.use((e, t, n, i) => {
                                ~e.message.indexOf('not found')
                                    ? i()
                                    : (k.error(e.stack), n.status(500).render('500.html'))
                            }),
                            n.use((e, t) => {
                                t.status(404).render('404.html', { url: e.originalUrl })
                            }),
                            n.listen(Qe.WEBUI_HTTP, (t) => {
                                k.info('WebUI server listening on port '.concat(Qe.WEBUI_HTTP)),
                                    e(t)
                            })
                    }),
                    sd()
                var { monitorArrangement: u, displayInterfaces: p } = e,
                    y = 0 === u.mode.indexOf('tile') && p.length > 1 ? 2 : 1
                yield mn(y), go(), Fs()
                var f = yield Vs(),
                    v = yield Hs()
                Pc.dispatch(Ne({ playerTemperature: f, playerUptime: v })),
                    Pc.dispatch(qn(!0, t.logoObj)),
                    Pc.dispatch(Jn(!0, t.showClock)),
                    Pc.dispatch(Zn(!0, t.emergencyMessage)),
                    Pc.dispatch($a(t.kioskUi, !0)),
                    Pc.dispatch(Ca(e.reboot)),
                    Pc.dispatch($o(e.sleep)),
                    me(),
                    Pc.dispatch(Qo())
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function gd(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    function md(e) {
        return function () {
            var t = this,
                n = arguments
            return new Promise(function (i, r) {
                var o = e.apply(t, n)
                function a(e) {
                    gd(o, i, r, a, s, 'next', e)
                }
                function s(e) {
                    gd(o, i, r, a, s, 'throw', e)
                }
                a(void 0)
            })
        }
    }
    var hd,
        kd = (function () {
            var e = md(function* () {
                xe(dd)
                var e = new Date().setMinutes(0, 0, 0),
                    t = !1,
                    { assetsValidity: n } = Pc.getState().mediaAssets
                if (Array.isArray(n))
                    for (var i of n) {
                        var r = i.starthour ? parseInt(i.starthour) : 0,
                            o = i.endhour ? parseInt(i.endhour) : 24
                        if (
                            ((isNaN(r) || r < 0 || r > 23) && (r = 0),
                                (isNaN(o) || o < 1 || o > 24) && (o = 24),
                                (i.startdate && e === ne(i.startdate) + 36e5 * r) ||
                                (i.enddate && e === ne(i.enddate) + 36e5 * o))
                        ) {
                            ; (t = !0),
                                k.info(
                                    'Asset validity changed for '.concat(
                                        i.name,
                                        ' and hence redeploying the playlist',
                                    ),
                                )
                            break
                        }
                    }
                t && Pc.dispatch(ba(!0))
                var a = new Date(),
                    s = a.getSeconds() + 60 * a.getMinutes()
                    ; (dd = Se(1e3 * (3605 - s))), -1 !== (yield dd.promise) && kd()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })(),
        bd = (function () {
            var e = md(function* () {
                xe(hd)
                var {
                    localControl: e,
                    scheduledPlaylists: t,
                    previousNormalScheduledPlaylists: n,
                    scheduledAdvertPlaylists: i,
                    scheduledAudioPlaylists: r,
                    deployedPlaylists: o,
                } = Pc.getState().mediaAssets,
                    { tvStatus: a } = Pc.getState().deviceTv,
                    {
                        scheduledPlaylists: s,
                        scheduledAds: c,
                        scheduledAudioPlaylists: l,
                    } = Ye(!0)
                if (
                    !0 !== e &&
                    (!0 === a || 'TV_OFF' === t[0]) &&
                    (!0 !== Q(c, i) && Pc.dispatch(ca({ scheduledAds: c })),
                        !0 !== Q(l, r) &&
                        Pc.dispatch(
                            la({ scheduledAudioPlaylists: l, forceLoungeRestart: !1 }),
                        ),
                        !0 !== Q(s, t))
                ) {
                    var d = o.find((e) => e.name === s[0]),
                        u =
                            d.settings &&
                            d.settings.domination &&
                            d.settings.domination.enable,
                        p = 'TV_OFF' !== t[0] && Q(s, n)
                    Pc.dispatch(ka(s, u ? 'play-once-domination' : 'regular', !1, p)),
                        k.info('Schedule is changed to playlist '.concat(s[0]))
                }
                ; (hd = Se(6e4 - (Date.now() % 6e4))), -1 !== (yield hd.promise) && bd()
            })
            return function () {
                return e.apply(this, arguments)
            }
        })()
    function wd(e, t, n, i, r, o, a) {
        try {
            var s = e[o](a),
                c = s.value
        } catch (e) {
            return void n(e)
        }
        s.done ? t(c) : Promise.resolve(c).then(i, r)
    }
    var Sd = (function () {
        var e,
            t =
                ((e = function* () {
                    yield vd(), ks(), kd(), yield fe()
                    var { hideWelcomeNotice: e } = Pc.getState().devicePreferences
                    !0 !== e &&
                        (Pc.dispatch(
                            Ao({
                                playlistTriggerType: 'regular',
                                playlistFiles: [
                                    { filename: '_system_notice.html', duration: 30 },
                                ],
                                layout: '1',
                                videoWindow: null,
                                zoneVideoWindow: null,
                                templateName: '',
                                playlistName: 'system_notice',
                            }),
                        ),
                            yield Se(1e4).promise),
                        Gc('PLAYLISTS', Ac.selectStateSubset, Ac.onChange),
                        Gc('ADVERTS', Dc.selectStateSubset, Dc.onChange),
                        Gc('LOUNGE', Bc.selectStateSubset, Bc.onChange),
                        Gc(
                            'MEDIASETTINNGS',
                            (e) => e.mediaSettings.keepWeblinksInMemory,
                            ki,
                        ),
                        Pc.dispatch(oa()),
                        k.info('Device ready to play playlists'),
                        process.on(
                            'exit',
                            as(function* () {
                                k.info('Exiting node process for restart')
                            }),
                        ),
                        process.on(
                            'SIGUSR2',
                            as(function* () {
                                yield ls()
                            }),
                        ),
                        bd()
                }),
                    function () {
                        var t = this,
                            n = arguments
                        return new Promise(function (i, r) {
                            var o = e.apply(t, n)
                            function a(e) {
                                wd(o, i, r, a, s, 'next', e)
                            }
                            function s(e) {
                                wd(o, i, r, a, s, 'throw', e)
                            }
                            a(void 0)
                        })
                    })
        return function () {
            return t.apply(this, arguments)
        }
    })()
    Sd()
})()
