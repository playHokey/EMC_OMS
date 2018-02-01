
    var myChart = echarts.init(document.getElementById('main'));  
    var option = {  
        tooltip: {  
            trigger: 'item'  
        },  
        legend: {  
            orient: 'vertical',  
            x: 'left',  
            data: ['iphone3']  
        },  
        visualMap : {  
            min: 0,  
            max: 1000,  
            x: 'left',  
            y: 'bottom',  
            color: ['orangered','yellow','lightskyblue'],  
            text: ['高', '低'], // 文本，默认为数值文本  
            calculable: true  
        },  
        toolbox: {  
            show: true,  
            orient: 'vertical',  
            x: 'right',  
            y: 'center',  
            feature: {  
                mark: {  
                    show: true  
                },  
                dataView: {  
                    show: true,  
                    readOnly: false  
                }  
            }  
        },  
        series: [{  
            tooltip: {  
                trigger: 'item',  
            },  
            name: 'iphone3',  
            type: 'map',  
            mapType: 'china',  
            left: 10,  
            selectedMode: 'single',  
            label: {  
                normal: {  
                    show: true,  
                    textStyle: {  
                        fontSize: 9,  
                    }  
                },  
                emphasis: {  
                    show: true,  
                    textStyle: {  
                        fontStyle: 'oblique',  
                        fontSize: 9,  
                    }  
                }  
            },  
            showLegendSymbol: false,  
            data: [{  
                name: '北京',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '天津',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '上海',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '重庆',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '河北',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '河南',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '云南',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '辽宁',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '黑龙江',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '湖南',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '安徽',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '山东',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '新疆',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '江苏',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '浙江',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '江西',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '湖北',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '广西',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '甘肃',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '山西',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '内蒙古',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '陕西',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '吉林',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '福建',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '贵州',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '广东',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '青海',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '西藏',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '四川',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '宁夏',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '海南',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '台湾',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '香港',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '澳门',  
                selected: false,  
                value: Math.round(Math.random() * 1000)  
            }]  
        }, ],  
    };  
    myChart.on('mapselectchanged', function(param) {  
        var selected = param.selected;  
        var selectedProvince;  
        var name;  
        for(var i = 0, l = option.series[0].data.length; i < l; i++) {  
            name = option.series[0].data[i].name;  
            option.series[0].data[i].selected = selected[name];  
            if(selected[name]) {  
                selectedProvince = name;  
            }  
        }  
        if(typeof selectedProvince == 'undefined') {  
            option.series.splice(1);  
            myChart.setOption(option, true);  
            return;  
        }  
        option.series[1] = {  
            name: '随机数据',  
            type: 'map',  
            mapType: selectedProvince,  
            showLegendSymbol: false,  
            label: {  
                normal: {  
                    show: true,  
                    textStyle: {  
                        fontSize: 9,  
                    }  
                },  
                emphasis: {  
                    show: true,  
                    textStyle: {  
                        fontStyle: 'oblique',  
                        fontSize: 9,  
                    }  
                }  
            },  
            mapLocation: {  
                x: '35%'  
            },  
            roam: true,  
            data: [{  
                name: '烟台市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '临沂市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '潍坊市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '青岛市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '菏泽市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '济宁市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '德州市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '滨州市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '聊城市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '东营市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '济南市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '泰安市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '威海市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '日照市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '淄博市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '枣庄市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '莱芜市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '张家口市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '保定市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '唐山市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '沧州市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '石家庄市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '邢台市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '邯郸市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '秦皇岛市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '衡水市',  
                value: Math.round(Math.random() * 1000)  
            }, {  
                name: '廊坊市',  
                value: Math.round(Math.random() * 1000)  
            }, ]  
        };  
        option.legend = {  
            orient: 'vertical',  
            x: 'left',  
            data: ['iphone3']  
        };  
        option.visualMap = {  
            min: 0,  
            max: 1000,  
            x: 'left',  
            y: 'bottom',  
            color: ['orangered','yellow','lightskyblue'],  
            text: ['高', '低'], // 文本，默认为数值文本  
            calculable: true  
        };  
        myChart.setOption(option, true);  
    });  
    // 为echarts对象加载数据   
    myChart.setOption(option);  
