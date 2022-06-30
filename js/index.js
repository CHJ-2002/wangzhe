window.onload = function () {
    var top = document.getElementsByClassName("top");
    var header_nav = document.getElementsByClassName('header-nav');
    var nav = header_nav[0].childNodes[1];
    var sub_nav = document.getElementsByClassName('sub-nav');
    nav.onmouseover = function () {
        sub_nav[0].style.display = 'block'
    }
    sub_nav[0].onmouseover = function () {
        sub_nav[0].style.display = 'block'
    }
    sub_nav[0].onmouseout = function () {
        sub_nav[0].style.display = 'none'
    }
    top.onmouseover = function () {
        sub_nav[0].style.display = 'none'
    }

    var adBtn = document.querySelector('.adBtn')
    var as = adBtn.querySelectorAll('a')
    for (var i = 0; i < as.length; i++) {
        as[i].onmousemove = function () {
            for (var i = 0; i < as.length; i++) {
                as[i].className = ''
            }
            this.className = 'on'
        }
    }

    var center_Tab = document.querySelector('.center-Tab')
    var lis = center_Tab.querySelectorAll('li')
    var center_news_list = document.querySelector('.center-news-list')
    var uls = center_news_list.querySelectorAll('ul')
    lis[0].className = 'bor-btm'
    uls[0].className = 'block'
    for (var i = 0; i < lis.length; i++) {
        lis[i].setAttribute('index', i)
        lis[i].onmouseover = function () {
            for (var i = 0; i < lis.length; i++) {
                lis[i].className = ''
            }
            this.className = 'bor-btm'
            var index = this.getAttribute('index')
            for (var i = 0; i < uls.length; i++) {
                uls[i].className = 'none'
            }
            uls[index].className = 'block'
        }
    }

    $(function () {
        var king = document.getElementById('king')
        king.childNodes[1].childNodes[1].style.width = '224px'
        king.childNodes[1].childNodes[1].childNodes[1].childNodes[1].style.display = 'none'
        king.childNodes[1].childNodes[1].childNodes[1].childNodes[3].style.display = 'block'
        // 鼠标经过某个小li 有两步操作：
        $(".king li").mouseenter(function () {
            // 1.当前小li 宽度变为 224px， 同时里面的小图片淡出，大图片淡入
            $(this).stop().animate({
                width: 224
            }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
            // 2.其余兄弟小li宽度变为69px， 小图片淡入， 大图片淡出
            $(this).siblings("li").stop().animate({
                width: 69
            }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
        })
    });




    let name = ['桑启', '暃', '金蝉', '云缨', '艾琳', '司空震', '澜', '夏洛特', '阿古朵', '蒙恬',
        '镜', '蒙犽', '鲁班大师', '西施', '马超', '曜', '云中君', '瑶', '盘古', '猪八戒',
        '嫦娥', '上官婉儿', '李信', '沈梦溪', '伽罗', '盾山', '司马懿', '孙策', '元歌', '米莱狄',
        '狂铁', '奕星', '裴擒虎', '杨玉环', '公孙离', '明世隐', '女娲', '梦奇', '苏烈', '百里玄策',
        '百里守约', '凯', '鬼谷子', '干将莫邪', '东皇太一', '大乔', '黄忠', '诸葛亮', '哪吒', '太乙真人',
        '蔡文姬', '雅典娜', '杨戬', '成吉思汗', '钟馗', '虞姬', '李元芳', '张飞', '刘备', '后羿',
        '牛魔', '孙悟空', '亚瑟', '橘右京', '娜可露露', '不知火舞', '张良', '花木兰', '兰陵王', '王昭君',
        '韩信', '刘邦', '姜子牙', '露娜', '程咬金', '安琪拉', '貂蝉', '关羽', '老夫子', '武则天',
        '项羽', '达摩', '狄仁杰', '马可波罗', '李白', '宫本武藏', '典韦', '曹操', '甄姬', '夏侯惇',
        '周瑜', '吕布', '芈月', '白起', '扁鹊', '孙膑', '钟无艳', '阿珂', '高渐离', '刘禅',
        '庄周', '鲁班七号', '孙尚香', '嬴政', '妲己', '墨子', '赵云', '小乔', '廉颇']
    let image = ['534', '542', '540', '538', '155', '537', '528', '536', '533', '527',
        '531', '524', '525', '523', '518', '522', '506', '505', '529', '511',
        '515', '513', '507', '312', '508', '509', '137', '510', '125', '504',
        '503', '197', '502', '176', '199', '501', '179', '198', '194', '195',
        '196', '193', '189', '182', '187', '191', '192', '190', '180', '186',
        '184', '183', '178', '177', '175', '174', '173', '171', '170', '169',
        '168', '167', '166', '163', '162', '157', '156', '154', '153', '152',
        '150', '149', '148', '146', '144', '142', '141', '140', '139', '136',
        '135', '134', '133', '132', '131', '130', '129', '128', '127', '126',
        '124', '123', '121', '120', '119', '118', '117', '116', '115', '114',
        '113', '112', '111', '110', '109', '108', '107', '106', '105']


    var herolist_row = document.getElementById('herolist-row')
    herolist_row.style.height = '1880px'
    herolist_row.style.border = '1px solid #E8E8E8'
    var type_ms = document.getElementsByClassName('type-ms')
    var type_ms_lis = type_ms[1].childNodes
    var type_ms_lis1 = type_ms[0].childNodes
    // console.log(type_ms[0].childNodes)
    var searchBtn = document.getElementById('searchBtn')
    function type_i() {
        for (var i = 0; i < type_ms_lis.length; i++) {
            if (i % 2 != 0) {
                type_ms_lis[i].childNodes[1].childNodes[1].className = ''
            }
        }
        type_ms_lis1[1].childNodes[1].childNodes[1].className = ''
        type_ms_lis1[3].childNodes[1].childNodes[1].className = ''
    }
    type_ms_lis[1].childNodes[1].childNodes[1].className = 'i'
    quanbu()
    type_ms_lis[1].onclick = function () {
        quanbu()
        type_i()
        type_ms_lis[1].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '1880px'
    }
    type_ms_lis[3].onclick = function () {
        tanke()
        type_i()
        type_ms_lis[3].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '880px'
    }
    type_ms_lis[5].onclick = function () {
        zhanshi()
        type_i()
        type_ms_lis[5].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '1000px'
    }
    type_ms_lis[7].onclick = function () {
        cike()
        type_i()
        type_ms_lis[7].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '880px'
    }
    type_ms_lis[9].onclick = function () {
        fashi()
        type_i()
        type_ms_lis[9].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '1000px'
    }
    type_ms_lis[11].onclick = function () {
        sheshou()
        type_i()
        type_ms_lis[11].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '750px'
    }
    type_ms_lis[13].onclick = function () {
        fuzhu()
        type_i()
        type_ms_lis[13].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '750px'
    }
    type_ms_lis1[1].onclick = function () {
        mianfei()
        type_i()
        type_ms_lis1[1].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '630px'
    }
    type_ms_lis1[3].onclick = function () {
        tuijian()
        type_i()
        type_ms_lis1[3].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '630px'
    }

    searchBtn.onclick = function () {
        pandun()
    }
    //按下Enter键时触发
    $(document).keydown(function (event) {
        if (event.keyCode == 13) {
            pandun()
        }
    })

    function pandun() {
        if (search.value === null || search.value === "" || search.value == -undefined) {
            setTimeout(function () {
                quanbu()
                type_i()
                type_ms_lis[1].childNodes[1].childNodes[1].className = 'i'
                herolist_row.style.height = '1880px'
            }, 1000)

        } else {
            sousuo()
            type_i()
            type_ms_lis[1].childNodes[1].childNodes[1].className = 'i'
            herolist_row.style.height = '630px'
        }
    }
    function quanbu() {
        var data = {
            image: image,
            name: name
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })

    }

    function tanke() {
        var data = {
            image: ['533', '527', '511', '515', '509', '510', '198', '194', '193', '187', '186', '171', '168',
                '166', '149', '144', '135', '134', '126', '123', '121', '120', '117',
                '114', '113', '105'
            ],
            name: ['阿古朵', '蒙恬', '猪八戒', '嫦娥', '盾山', '孙策', '梦奇', '苏烈', '凯', '东皇太一',
                '太乙真人', '张飞', '牛魔', '亚瑟', '刘邦', '程咬金', '项羽', '达摩', '夏侯惇', '吕布',
                '芈月', '白起', '钟无艳', '刘禅', '庄周', '廉颇'
            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function zhanshi() {
        var data = {
            image: ['538', '537', '536', '527', '518', '522', '506', '529', '507', '510', '503', '502', '198', '193', '180', '183', '178', '170',
                '167', '166', '163', '154', '146', '144', '140', '139', '134', '130',
                '129', '128', '126', '123', '117', '108', '107'
            ],
            name: ['云缨', '司空震', '夏洛特', '蒙恬', '马超', '曜', '云中君', '盘古', '李信', '孙策', '狂铁', '裴擒虎', '梦奇', '凯', '哪吒', '雅典娜', '杨戬', '刘备',
                '孙悟空', '亚瑟', '橘右京', '花木兰', '露娜', '程咬金', '关羽', '老夫子', '达摩', '宫本武藏',
                '典韦', '曹操', '夏侯惇', '吕布', '钟无艳', '墨子', '赵云'
            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function cike() {
        var data = {
            image: ['542', '538', '528', '531', '518', '506', '513', '137', '125', '502', '195', '196', '167', '163', '162', '157',
                '154', '153', '150', '141', '131', '116', '107'
            ],
            name: ['暃', '云缨', '澜', '镜', '马超', '云中君', '上官婉儿', '司马懿', '元歌', '裴擒虎', '百里玄策', '百里守约', '孙悟空', '橘右京', '娜可露露', '不知火舞',
                '花木兰', '兰陵王', '韩信', '貂蝉', '李白', '阿珂', '赵云'
            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function fashi() {
        var data = {
            image: ['540', '537', '523', '515', '513', '312', '137', '504', '197', '176', '179', '182', '190',
                '175', '157', '156', '152', '148', '146', '142', '141', '136', '127',
                '124', '121', '119', '118', '115', '110', '109', '108', '106'
            ],
            name: ['金蝉', '司空震', '西施', '嫦娥', '上官婉儿', '沈梦溪', '司马懿', '米莱迪', '奕星', '杨玉环', '女娲', '干将莫邪', '诸葛亮',
                '钟馗', '不知火舞', '张良', '王昭君', '姜子牙', '露娜', '安琪拉', '貂蝉', '武则天', '甄姬',
                '周瑜', '芈月', '扁鹊', '孙膑', '高渐离', '嬴政', '妲己', '墨子', '小乔'

            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function sheshou() {
        var data = {
            image: ['155', '524', '508', '199', '196', '192', '177', '174', '173', '169', '133', '132',
                '112', '111'
            ],
            name: ['艾琳', '蒙犽', '伽罗', '公孙离', '百里守约', '黄忠', '成吉思汗', '虞姬', '李元芳', '后羿', '狄仁杰', '马可波罗',
                '鲁班七号', '孙尚香'
            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function fuzhu() {
        var data = {
            image: ['534', '540', '525', '505', '509', '501', '194', '189', '187', '191', '186', '184', '175', '171',
                '168', '118', '114', '113'
            ],
            name: ['桑启', '金蝉', '鲁班大师', '瑶', '盾山', '明世隐', '苏烈', '鬼谷子', '东皇太一', '大乔', '太乙真人', '蔡文姬', '钟馗', '张飞',
                '牛魔', '孙膑', '刘禅', '庄周'
            ]
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function sousuo() {
        var ss_image = []
        var ss_name = []
        for (var i = 0; i < name.length; i++) {
            if (search.value == name[i]) {
                ss_image.push(image[i])
                ss_name.push(search.value)
            }
        }
        var data = {
            image: ss_image,
            name: ss_name
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function tuijian() {
        var data = {
            image: ['109', '133', '166'],
            name: ['妲己', '狄仁杰', '亚瑟']
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    function mianfei() {
        var data = {
            image: ['528', '125', '184', '173', '154', '108'],
            name: ['澜', '元歌', '蔡文姬', '李元芳', '花木兰', '墨子']
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="https://pvp.qq.com/web201605/herodetail/' + data.image[i] + '.shtml"><img src="image/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist').html(rows.join(''))
        })
    }

    var li = document.querySelectorAll('li')
    console.log(li)
    var spellDefail = document.getElementById('spellDefail')
    let img = ['80104', '80108', '80110', '80109', '80102', '80105', '80103', '80107', '80121', '80115']
    let title = ['惩击', '终结', '狂暴', '疾跑', '治疗术', '干扰', '晕眩', '净化', '弱化', '闪现']
    let cons = ['LV.1解锁', 'LV.3解锁', 'LV.5解锁', 'LV.7解锁', 'LV.9解锁', 'LV.11解锁', 'LV.14解锁', 'LV.15解锁', 'LV.17解锁', 'LV.19解锁']
    let desc = ['30秒CD：对身边的野怪和小兵造成真实伤害并眩晕1秒',
        '90秒CD：立即对身边敌军英雄造成其已损失生命值14%的真实伤害',
        '60秒CD：使用期间增加10%伤害、增加15%韧性、20%的物理吸血和法术吸血，持续7秒',
        '90秒CD：增加30%移动速度持续10秒，开启时移除自身的减速效果，且疾跑期间减少50%受到的减速效果，脱战时额外增加20%的移速',
        '120秒CD：回复自己与附近队友15%生命值，提高附近友军移动速度15%持续2秒',
        '60秒CD：对敌方机关使用，沉默机关持续3~6秒（随游戏时长而变化，4分钟以后为4.5秒，10分钟后为6秒);对己方机关使用，使己方机关免疫所有伤害4秒，同时攻击速度提升100%；60秒内叠加效果只有1秒的有效时间',
        '90秒CD：晕眩身边所有敌人0.75秒，并附带持续1秒的减速效果',
        '120秒CD：解除自身所有负面和控制效果并免疫控制持续1.5秒',
        '90秒CD：减少身边敌人伤害输出25%，并增加自身20%的免伤率，持续4秒',
        '120秒CD：向指定方向位移一段距离']
    function more(g) {
        spellDefail.childNodes[1].childNodes[1].src = './image/' + img[g] + '-big.jpg'
        spellDefail.childNodes[1].childNodes[3].innerText = title[g]
        spellDefail.childNodes[1].childNodes[5].innerText = cons[g]
        spellDefail.childNodes[3].innerText = desc[g]
        for (var i = 99; i < 109; i++) {
            li[i].className = ''
        }
        li[g + 99].className = 'current'
    }
    li[99].onclick = function () {
        more(0)
    }
    li[100].onclick = function () {
        more(1)
    }
    li[101].onclick = function () {
        more(2)
    }
    li[102].onclick = function () {
        more(3)
    }
    li[103].onclick = function () {
        more(4)
    }
    li[104].onclick = function () {
        more(5)
    }
    li[105].onclick = function () {
        more(6)
    }
    li[106].onclick = function () {
        more(7)
    }
    li[107].onclick = function () {
        more(8)
    }
    li[108].onclick = function () {
        more(9)
    }

    var herolist_title = document.getElementsByClassName('herolist-title')
    var nav = document.getElementById("nav");
    var a = nav.querySelectorAll('a');
    var box = document.getElementById('herolist-box')
    var box1 = document.getElementById('herolist-box1')
    var box2 = document.getElementById('herolist-box2')
    box.style.display = 'block'
    box1.style.display = box2.style.display = 'none';
    a[0].onclick = function () {
        herolist_title[0].innerText = '英雄介绍'
        quanbu()
        type_i()
        type_ms_lis[1].childNodes[1].childNodes[1].className = 'i'
        herolist_row.style.height = '1880px'
        a[0].className = 'a'
        a[1].className = a[2].className = ''
        box.style.display = 'block'
        box1.style.display = box2.style.display = 'none';
    }
    a[1].onclick = function () {
        herolist_title[0].innerText = '局内道具'
        list_i()
        document.getElementById('btn1').childNodes[1].childNodes[1].className = 'i'
        changgui(1, 118)
        bianjing()
        herolist_row.style.height = '2000px'
        a[1].className = 'a'
        a[0].className = a[2].className = ''
        herolist_row.style.height = '2000px'
        box1.style.display = 'block'
        box.style.display = box2.style.display = 'none';
        for (var i = 1; i <= 7; i++) {
            document.getElementById('btn' + i).style.display = "block"
        }
        for (var i = 8; i <= 11; i++) {
            document.getElementById('btn' + i).style.display = "none"
        }
        document.getElementById('changgui').childNodes[1].childNodes[1].className = 'i'
        document.getElementById('bianjing').childNodes[1].childNodes[1].className = ''
    }
    a[2].onclick = function () {
        herolist_title[0].innerText = '召唤师技能'
        a[2].className = 'a'
        a[0].className = a[1].className = ''
        herolist_row.style.height = '860px'
        box2.style.display = 'block'
        box.style.display = box1.style.display = 'none';
    }



    let name1 = ['铁剑', '匕首', '搏击拳套', '吸血之镰', '雷鸣刃', '冲能拳套', '风暴巨剑', '日冕', '狂暴双刃', '陨星',
        '碎星锤', '末世', '名刀·司命', '冰霜长矛', '速击之枪', '制裁之刃', '泣血之刃', '无尽战刃', '宗师之力', '闪电匕首',
        '影刃', '暗影战斧', '破军', '纯净苍穹', '逐日之弓', '破魔刀', '穿云弓', '破晓', '日渊', '天穹',
        '迅捷长矛', '血魂刃', '咒术典籍', '蓝宝石', '炼金护符', '圣者法典', '元素杖', '大棒', '破碎圣杯', '光辉之剑',
        '进化水晶', '血族之书', '炽热支配者', '梦魇之牙', '虚无法杖', '博学者之怒', '辉月', '回响之杖', '凝冰之息', '痛苦面具',
        '巫术法杖', '圣杯', '时之预言', '贤者之书', '噬神之书', '日暮之流', '金色圣剑', '月神', '魔道之石', '云灵木',
        '破茧之衣', '红玛瑙', '布甲', '抗魔披风', '提神水晶', '力量腰带', '熔炼之心', '神隐斗篷', '雪山圆盾', '守护者之铠',
        '反伤刺甲', '血魔之怒', '红莲斗篷', '霸者重装', '冰霜冲击', '不祥征兆', '不死鸟之眼', '魔女斗篷', '极寒风暴', '冰痕之握',
        '贤者的庇护', '暴烈之甲', '荆棘护手', '永夜守护', '暗夜小甲', '原初遗珠', '怒魂', '凛冬', '神速之靴', '影忍之足',
        '抵抗之靴', '冷静之靴', '秘法之靴', '急速战靴', '疾步之靴', '狩猎宽刃', '游击弯刀', '巡守利斧', '追击刀锋', '符文大剑',
        '巨人之握', '贪婪之噬', '弃鳞短刃', '龙鳞利剑', '浴火之怒', '近卫荣耀', '奔狼纹章', '鼓舞之盾', '风灵纹章', '救赎之翼',
        '风之轻语', '极影', '星泉', '星之佩饰', '凤鸣指环', '学识宝石', '出影晶石', '形昭之鉴'
    ]

    let name2 = ['砂之破军', '贤者之书', '砂之破晓', '隐匿胄甲', '砂之守卫', '恢复药剂', '小药瓶', '大药箱', '砂之重装', '奥术法杖',
        '碎骨之锤', '砂之监视', '狩猎陷阱', '视野药剂', '安琪拉：混沌火种', '鬼谷子：万物有灵', '孙膑：时光流逝',
        '钟馗：湮灭之锁', '弈星：天元', '夏侯惇：龙卷闪',
        '芈月：暗影之月', '庄周：天人合一', '阿轲：幻舞', '程咬金：正义潜能', '张良：言灵·命数',
        '守约：狂风之息', '墨子：机关重炮', '妲己：女王崇拜', '芈月：痛苦冲击', '女娲：指令迁跃'
    ]

    function changgui(a, b) {
        var image = []
        for (var i = a; i <= b; i++) {
            var img = i.toString()
            image.push(img)
        }
        var title = []
        for (var i = (a - 1); i < 118; i++) {
            var tit = name1[i].toString()
            title.push(tit)
        }
        var data = {
            image: image,
            name: title
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="#none"><img src="images/' + item + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist1').html(rows.join(''))
        })
    }

    function bianjing(a, b) {
        var image = []
        for (var i = 2000 + a; i <= 2000 + b; i++) {
            var img = i.toString()
            image.push(img)
        }
        var title = []
        for (var i = (a - 1); i < 30; i++) {
            var tit = name2[i].toString()
            title.push(tit)
        }

        var data = {
            image: image,
            name: title
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="#none"><img src="images/' + item + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist2').html(rows.join(''))
        })
    }




    var sub_type = document.getElementsByClassName('sub-type')
    var i = sub_type[0].querySelectorAll('i')
    function list_i() {
        for (var j = 0; j < 11; j++) {
            i[j].className = ''
            // console.log(i[j])
        }
    }


    document.getElementById('changgui').childNodes[1].childNodes[1].className = 'i'
    document.getElementById('bianjing').childNodes[1].childNodes[1].className = ''
    list_i()
    i[0].className = 'i'
    changgui(1, 118)
    // herolist_row.style.height = '2000px'

    document.getElementById('changgui').onclick = function () {
        list_i()
        document.getElementById('btn1').childNodes[1].childNodes[1].className = 'i'
        changgui(1, 118)
        herolist_row.style.height = '2000px'
        bianjing()
        for (var i = 1; i <= 7; i++) {
            document.getElementById('btn' + i).style.display = "block"
        }
        for (var i = 8; i <= 11; i++) {
            document.getElementById('btn' + i).style.display = "none"
        }
        this.childNodes[1].childNodes[1].className = 'i'
        document.getElementById('bianjing').childNodes[1].childNodes[1].className = ''
        document.getElementById('search1').removeAttribute('disabled')
    }

    document.getElementById('bianjing').onclick = function () {
        list_i()
        document.getElementById('btn8').childNodes[1].childNodes[1].className = 'i'
        changgui()
        bianjing(1, 30)
        herolist_row.style.height = '880px'
        for (var i = 1; i <= 7; i++) {
            document.getElementById('btn' + i).style.display = "none"
        }
        for (var i = 8; i <= 11; i++) {
            document.getElementById('btn' + i).style.display = "block"
        }
        document.getElementById('changgui').childNodes[1].childNodes[1].className = ''
        this.childNodes[1].childNodes[1].className = 'i'
        document.getElementById('search1').setAttribute('disabled', 'disabled')
    }


    document.getElementById('btn1').onclick = function () {
        list_i()
        i[0].className = 'i'
        changgui(1, 118)
        herolist_row.style.height = '2000px'
    }
    document.getElementById('btn2').onclick = function () {
        list_i()
        i[2].className = 'i'
        changgui(1, 32)
        herolist_row.style.height = '1000px'
    }
    document.getElementById('btn3').onclick = function () {
        list_i()
        i[3].className = 'i'
        changgui(33, 61)
        herolist_row.style.height = '880px'
    }
    document.getElementById('btn4').onclick = function () {
        list_i()
        i[4].className = 'i'
        changgui(62, 88)
        herolist_row.style.height = '880px'
    }
    document.getElementById('btn5').onclick = function () {
        list_i()
        i[5].className = 'i'
        changgui(89, 95)
        herolist_row.style.height = '630px'
    }
    document.getElementById('btn6').onclick = function () {
        list_i()
        i[6].className = 'i'
        changgui(96, 105)
        herolist_row.style.height = '630px'
    }
    document.getElementById('btn7').onclick = function () {
        list_i()
        i[7].className = 'i'
        changgui(106, 118)
        herolist_row.style.height = '750px'
    }
    document.getElementById('btn8').onclick = function () {
        list_i()
        i[1].className = 'i'
        bianjing(1, 30)
        herolist_row.style.height = '880px'
    }
    document.getElementById('btn9').onclick = function () {
        list_i()
        i[8].className = 'i'
        bianjing(1, 11)
        herolist_row.style.height = '750px'
    }
    document.getElementById('btn10').onclick = function () {
        list_i()
        i[9].className = 'i'
        bianjing(12, 14)
        herolist_row.style.height = '630px'
    }
    document.getElementById('btn11').onclick = function () {
        list_i()
        i[10].className = 'i'
        bianjing(15, 30)
        herolist_row.style.height = '750px'
    }

    function pandun1() {
        if (search1.value === null || search1.value === "" || search1.value == -undefined) {
            setTimeout(function () {
                list_i()
                document.getElementById('btn1').childNodes[1].childNodes[1].className = 'i'
                changgui(1, 118)
                herolist_row.style.height = '2000px'
            }, 1000)

        } else {
            sousuo1()
            list_i()
            document.getElementById('btn1').childNodes[1].childNodes[1].className = 'i'
            herolist_row.style.height = '630px'
        }
    }
    document.getElementById('searchBtn1').onclick = function () {
        pandun1()
    }
    //按下Enter键时触发
    // $(document).keydown(function (event) {
    //     if (event.keyCode == 13) {
    //         pandun1()
    //     }
    // })
    function sousuo1() {
        var ss_image = []
        var ss_name = []
        for (var i = 0; i < name1.length; i++) {
            if (search1.value == name1[i]) {
                ss_image.push(i + 1)
                ss_name.push(search1.value)
            }
        }
        var data = {
            image: ss_image,
            name: ss_name
        }
        $(function () {
            var rows = []
            $.each(data.image, function (i, item) {
                rows.push('<li><a href="#none"><img src="images/' + data.image[i] + '.jpg"><i>' + data.name[i] +
                    '</i></a></li>')
            })
            $('#herolist1').html(rows.join(''))
        })
    }
}