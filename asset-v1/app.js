/* 0.5.0 2020-11-20 12:44:31 */
var app=new function() {
    this.name = "Alpha", this.version = "1", this.date = "2009", this.folder = "asset-v1/", this.looptime = 11235, this.bpm = 86, this.totalframe = 260, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !1, this.bonusendloopA = !3, this.recmaxloop=34, this.recminloop= 4, this.recmintime = Math.round(this.looptime / 1e3)*this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck="#1c0d0d", this.col0 = "#EB4B4B", this.col1 = "#800000", this.col2 = "800000", this.col3 = "#800000", this.col4 = "#800000", this.animearray = [{
        name: "1_lead",
        color: "6A7697",
        uniqsnd: !0
    }, {
        name: "2_deux",
        color:"6A7697",
        uniqsnd: !0
    }, {
        name: "3_kosh",
        color: "6A7697",
        uniqsnd: !0
    }, {
        name: "4_shpok",
        color: "6A7697",
        uniqsnd: !0
    }, {
        name: "5_tom",
        color: "6A7697",
        uniqsnd: !0
    }, {
        name: "6_nouana",
        color: "B9C455",
        uniqsnd: !0
    }, {
        name: "7_scratch",
        color: "B9C455",
        uniqsnd: !0
    }, {
        name: "8_trill",
        color: "B9C455",
        uniqsnd: !0
    }, {
        name: "9_bass",
        color: "B9C455",
        uniqsnd: !0
    }, {
        name: "10_uh",
        color: "B9C455",
        uniqsnd: !0
    }, {
        name: "11_nugu",
        color: "cc6699",
        uniqsnd: !0
    }, {
        name: "12_guit",
        color: "cc6699",
        uniqsnd: !0
    }, {
        name: "13_tromp",
        color: "cc6699",
        uniqsnd: !0
    }, {
        name: "14_pouin",
        color: "cc6699",
        uniqsnd: !0
    }, {
        name: "15_tung",
        color: "cc6699",
        uniqsnd: !0
    }, {
        name: "16_aoun",
        color: "CC0000",
        uniqsnd: !1
    }, {
        name: "17_hum",
        color: "CC0000",
        uniqsnd: !0
    }, {
        name: "18_get",
        color: "CC0000",
        uniqsnd: !1
    }, {
        name: "19_tellme",
        color: "CC0000",
        uniqsnd: !0
    }, {
        name: "20_make",
        color: "CC0000",
        uniqsnd: !0
    }], this.bonusarray = [{
        name: "The Choir",
        src: "v1-b1-choir-hb.mp4",
        code: "2,4,9,16",
        sound: "bonus-choir",
        aspire: "aspire"
    }, {
        name: "The Sailor",
        src: "v1-b2-sailor-hb.mp4",
        code: "2, 3,11,17",
        sound: "bonus-sailor",
        aspire: "aspire-sailor"
    }, {
        name: "Santa",
        src: "v1-b3-santa-hb.mp4",
        code: "2,4,9,20",
        sound: "bonus-santa",
        aspire: "aspire-santa"
    }];
    for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};